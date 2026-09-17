import * as THREE from 'three';
import { SkeletalRig } from './FighterMeshBuilder';
import { AnimationController, FighterAnimState } from './AnimationController';
import { Box2D, HitboxData, HurtboxData, AttackType } from '../engine/CollisionSystem';
import { FighterInputState } from '../engine/InputManager';
import { SoundSystem } from '../engine/SoundSystem';
import { ParticleSystem } from '../engine/ParticleSystem';
import { ProjectileType } from './Projectile';

export interface AttackMoveData {
  animState: FighterAnimState;
  startup: number;    // frames (at 60fps)
  active: number;     // frames
  recovery: number;   // frames
  damage: number;
  hitStun: number;
  blockStun: number;
  knockbackX: number;
  knockbackY: number;
  attackType: AttackType;
  isKnockdown: boolean;
  meterGain: number;
  boxOffset: { x: number; y: number; width: number; height: number };
  whooshPitch: number;
}

export abstract class Fighter {
  public name: string;
  public playerIndex: 1 | 2;
  public position: THREE.Vector3;
  public velocity: THREE.Vector3;
  public facingDirection: number = 1; // 1 = facing right, -1 = facing left

  // Attributes
  public health: number = 1000;
  public maxHealth: number = 1000;
  public superMeter: number = 0; // 0 to 100
  public roundsWon: number = 0;
  public comboHits: number = 0;
  public isDead: boolean = false;
  public isInvincible: boolean = false;

  // 3D Rig & Animation
  public rig: SkeletalRig;
  public anim: AnimationController;
  public currentAnimState: FighterAnimState = 'IDLE';

  // State Machine Timers (Frame-accurate at 60 FPS)
  public stateTimer: number = 0; // in frames
  public currentMove: AttackMoveData | null = null;
  public movePhase: 'STARTUP' | 'ACTIVE' | 'RECOVERY' | null = null;
  public hasHitCurrentMove: boolean = false;
  public canCancel: boolean = false;

  // Stuns
  public hitStunRemaining: number = 0;
  public blockStunRemaining: number = 0;
  public invincibilityFrames: number = 0;

  // Physics constants
  protected moveSpeed: number = 5.2;
  protected jumpForce: number = 13.2;
  protected gravity: number = 38.0;

  // Colliders
  public pushbox: Box2D;
  public hurtbox: HurtboxData;
  public activeHitbox: HitboxData | null = null;

  // Projectiles fired by this fighter
  public pendingProjectile: ProjectileType | null = null;

  constructor(
    name: string,
    playerIndex: 1 | 2,
    startX: number,
    rig: SkeletalRig,
    scene: THREE.Scene
  ) {
    this.name = name;
    this.playerIndex = playerIndex;
    this.position = new THREE.Vector3(startX, 0, 0);
    this.velocity = new THREE.Vector3(0, 0, 0);
    this.facingDirection = playerIndex === 1 ? 1 : -1;

    this.rig = rig;
    this.anim = new AnimationController(rig);
    scene.add(this.rig.root);

    // Initial Colliders
    this.pushbox = { x: 0, y: 0.9, width: 0.75, height: 1.8 };
    this.hurtbox = { id: `hurt_${playerIndex}`, box: { x: 0, y: 0.9, width: 0.85, height: 1.8 } };

    this.updateMeshTransform();
  }

  public resetRound(startX: number, facingRight: boolean) {
    this.position.set(startX, 0, 0);
    this.velocity.set(0, 0, 0);
    this.facingDirection = facingRight ? 1 : -1;
    this.health = this.maxHealth;
    this.isDead = false;
    this.isInvincible = false;
    this.comboHits = 0;
    this.currentMove = null;
    this.movePhase = null;
    this.activeHitbox = null;
    this.hitStunRemaining = 0;
    this.blockStunRemaining = 0;
    this.invincibilityFrames = 0;
    this.currentAnimState = 'IDLE';
    this.stateTimer = 0;
    this.updateMeshTransform();
  }

  /**
   * Fixed 60Hz tick simulation step
   */
  public tick(
    input: FighterInputState,
    opponentPos: THREE.Vector3,
    opponentIsAttacking: boolean,
    sound: SoundSystem,
    particles: ParticleSystem,
    stageLimit: number = 13.0
  ) {
    // 1. Invincibility tick
    if (this.invincibilityFrames > 0) {
      this.invincibilityFrames--;
      this.isInvincible = this.invincibilityFrames > 0;
    }

    // 2. Dead or Match Finished State
    if (this.isDead) {
      this.applyGravity(1 / 60);
      this.updateMeshTransform();
      this.anim.update('KNOCKDOWN', 1.0, 1 / 60);
      return;
    }

    if (this.currentAnimState === 'VICTORY') {
      this.anim.update('VICTORY', 1.0, 1 / 60);
      this.updateMeshTransform();
      return;
    }

    // 3. Stun States (Hitstun / Blockstun / Knockdown)
    if (this.hitStunRemaining > 0) {
      this.hitStunRemaining--;
      this.applyGravity(1 / 60);
      this.applyFriction(1 / 60);
      this.anim.update(
        this.currentAnimState === 'HIT_STUN_HEAVY' ? 'HIT_STUN_HEAVY' : 'HIT_STUN_LIGHT',
        1.0 - this.hitStunRemaining / 25,
        1 / 60
      );
      this.updateMeshTransform();
      return;
    }

    if (this.blockStunRemaining > 0) {
      this.blockStunRemaining--;
      this.applyFriction(1 / 60);
      this.anim.update(input.down ? 'BLOCK_LOW' : 'BLOCK_HIGH', 1.0, 1 / 60);
      this.updateMeshTransform();
      return;
    }

    if (this.currentAnimState === 'KNOCKDOWN') {
      this.stateTimer++;
      this.applyGravity(1 / 60);
      this.applyFriction(1 / 60);
      if (this.stateTimer < 35) {
        this.anim.update('KNOCKDOWN', this.stateTimer / 35, 1 / 60);
      } else if (!this.isDead && this.stateTimer < 60) {
        this.currentAnimState = 'WAKEUP';
        this.isInvincible = true;
        this.invincibilityFrames = 25;
      }
      this.updateMeshTransform();
      return;
    }

    if (this.currentAnimState === 'WAKEUP') {
      this.stateTimer++;
      if (this.stateTimer >= 60) {
        this.currentAnimState = 'IDLE';
        this.stateTimer = 0;
      } else {
        this.anim.update('WAKEUP', (this.stateTimer - 35) / 25, 1 / 60);
      }
      this.updateMeshTransform();
      return;
    }

    const isGrounded = this.position.y <= 0.001;

    // 4. In Active Attack State (With Gatling Combo Cancels!)
    if (this.currentMove) {
      // Allow instant combo cancel into next attack if move connected or cancel window is active
      if (this.canCancel || (this.hasHitCurrentMove && this.movePhase !== 'STARTUP')) {
        if (this.checkAttackInputs(input, sound, isGrounded)) {
          this.updateMeshTransform();
          return;
        }
      }

      this.processActiveMove(sound, particles);
      this.applyGravity(1 / 60);
      this.applyFriction(1 / 60);
      this.updateMeshTransform();
      return;
    }

    // 5. Normal Movement & Actions

    // Turn to face opponent if grounded and not dashing
    if (isGrounded && this.currentAnimState !== 'DASH_FORWARD' && this.currentAnimState !== 'DASH_BACKWARD') {
      this.facingDirection = opponentPos.x >= this.position.x ? 1 : -1;
    }

    // Dash execution
    if (isGrounded) {
      if (input.dashForward) {
        this.currentAnimState = 'DASH_FORWARD';
        this.velocity.x = this.facingDirection * this.moveSpeed * 1.85;
        sound.playDash();
        particles.emitDust(this.position, 10);
        this.stateTimer = 16;
      } else if (input.dashBackward) {
        this.currentAnimState = 'DASH_BACKWARD';
        this.velocity.x = -this.facingDirection * this.moveSpeed * 1.5;
        sound.playDash();
        particles.emitDust(this.position, 8);
        this.stateTimer = 14;
      }
    }

    // Dash timer countdown
    if (this.stateTimer > 0 && (this.currentAnimState === 'DASH_FORWARD' || this.currentAnimState === 'DASH_BACKWARD')) {
      this.stateTimer--;
      this.anim.update(this.currentAnimState, 1.0 - this.stateTimer / 16, 1 / 60);
      this.position.x += this.velocity.x * (1 / 60);
      this.position.x = THREE.MathUtils.clamp(this.position.x, -stageLimit, stageLimit);
      this.updateMeshTransform();
      return;
    }

    // Jump execution
    if (isGrounded && input.up) {
      this.velocity.y = this.jumpForce;
      if (input.right) this.velocity.x = this.moveSpeed * 0.9;
      else if (input.left) this.velocity.x = -this.moveSpeed * 0.9;
      sound.playJump();
      particles.emitDust(this.position, 8);
      this.currentAnimState = 'JUMP';
    }

    // Check Attack Triggers
    if (this.checkAttackInputs(input, sound, isGrounded)) {
      this.updateMeshTransform();
      return;
    }

    // Ground movement (Walk / Crouch / Guard)
    if (isGrounded) {
      this.velocity.y = 0;
      this.position.y = 0;

      if (input.down) {
        // Crouching / Low Guard
        const holdingBack = (this.facingDirection === 1 && input.left) || (this.facingDirection === -1 && input.right);
        this.currentAnimState = (holdingBack && opponentIsAttacking) ? 'BLOCK_LOW' : 'CROUCH';
        this.velocity.x = 0;
      } else if (input.right) {
        const movingForward = this.facingDirection === 1;
        this.velocity.x = this.moveSpeed * (movingForward ? 1.0 : 0.75);
        const holdingBack = !movingForward;
        this.currentAnimState = (holdingBack && opponentIsAttacking) ? 'BLOCK_HIGH' : (movingForward ? 'WALK_FORWARD' : 'WALK_BACKWARD');
      } else if (input.left) {
        const movingForward = this.facingDirection === -1;
        this.velocity.x = -this.moveSpeed * (movingForward ? 1.0 : 0.75);
        const holdingBack = !movingForward;
        this.currentAnimState = (holdingBack && opponentIsAttacking) ? 'BLOCK_HIGH' : (movingForward ? 'WALK_FORWARD' : 'WALK_BACKWARD');
      } else {
        this.velocity.x = 0;
        this.currentAnimState = 'IDLE';
      }
    } else {
      // In Air
      this.applyGravity(1 / 60);
      this.currentAnimState = 'JUMP';
    }

    // Apply horizontal velocity
    this.position.x += this.velocity.x * (1 / 60);
    this.position.x = THREE.MathUtils.clamp(this.position.x, -stageLimit, stageLimit);

    // Update animation pose
    this.anim.update(this.currentAnimState, 0.5, 1 / 60);

    // Emit radiant ground energy aura when charged with 100% EX meter (as seen in screenshot)
    if (this.superMeter >= 100 && isGrounded && Math.random() < 0.18) {
      particles.emitGroundAura(this.position, 0x00f0ff);
    }

    // Update Colliders
    this.updateColliders();
    this.updateMeshTransform();
  }

  private applyGravity(dt: number) {
    this.velocity.y -= this.gravity * dt;
    this.position.y += this.velocity.y * dt;
    if (this.position.y <= 0) {
      this.position.y = 0;
      this.velocity.y = 0;
    }
  }

  private applyFriction(dt: number) {
    this.velocity.x *= Math.pow(0.85, dt * 60);
  }

  /**
   * Process Attack Frame Data (Startup -> Active -> Recovery)
   */
  private processActiveMove(sound: SoundSystem, _particles: ParticleSystem) {
    if (!this.currentMove) return;

    this.stateTimer++;
    const { startup, active, recovery } = this.currentMove;
    const totalFrames = startup + active + recovery;
    const progress = Math.min(1.0, this.stateTimer / totalFrames);

    this.anim.update(this.currentMove.animState, progress, 1 / 60);

    // Move Forward slightly on certain attacks
    if (this.movePhase === 'STARTUP') {
      if (this.stateTimer >= startup) {
        // Enter ACTIVE phase
        this.movePhase = 'ACTIVE';
        sound.playWhoosh(this.currentMove.whooshPitch);

        // Spawn active Hitbox
        const facing = this.facingDirection;
        const box = this.currentMove.boxOffset;
        this.activeHitbox = {
          id: `${this.name}_${this.currentMove.animState}_${Date.now()}`,
          box: {
            x: this.position.x + box.x * facing,
            y: this.position.y + box.y,
            width: box.width,
            height: box.height,
          },
          damage: this.currentMove.damage,
          hitStun: this.currentMove.hitStun,
          blockStun: this.currentMove.blockStun,
          knockbackX: this.currentMove.knockbackX * facing,
          knockbackY: this.currentMove.knockbackY,
          attackType: this.currentMove.attackType,
          isKnockdown: this.currentMove.isKnockdown,
          meterGainAttacker: this.currentMove.meterGain,
          meterGainDefender: Math.floor(this.currentMove.meterGain * 0.5),
        };
      }
    } else if (this.movePhase === 'ACTIVE') {
      // Keep active hitbox positioned with fighter
      if (this.activeHitbox) {
        const facing = this.facingDirection;
        const box = this.currentMove.boxOffset;
        this.activeHitbox.box.x = this.position.x + box.x * facing;
        this.activeHitbox.box.y = this.position.y + box.y;
      }

      if (this.stateTimer >= startup + active) {
        // Enter RECOVERY phase
        this.movePhase = 'RECOVERY';
        this.activeHitbox = null; // Hitbox deactivates
      }
    } else if (this.movePhase === 'RECOVERY') {
      if (this.stateTimer >= totalFrames) {
        // Attack completed
        this.currentMove = null;
        this.movePhase = null;
        this.activeHitbox = null;
        this.hasHitCurrentMove = false;
        this.canCancel = false;
        this.currentAnimState = 'IDLE';
        this.stateTimer = 0;
      }
    }

    this.updateColliders();
  }

  /**
   * Check inputs to start a new attack
   */
  protected abstract checkAttackInputs(
    input: FighterInputState,
    sound: SoundSystem,
    isGrounded: boolean
  ): boolean;

  /**
   * Start a move
   */
  public executeMove(move: AttackMoveData) {
    this.currentMove = move;
    this.movePhase = 'STARTUP';
    this.stateTimer = 0;
    this.hasHitCurrentMove = false;
    this.canCancel = false;
    this.activeHitbox = null;
    this.currentAnimState = move.animState;
  }

  /**
   * Take damage / hit from an opponent's strike
   */
  public takeHit(hit: HitboxData, sound: SoundSystem, particles: ParticleSystem): boolean {
    if (this.isInvincible || this.isDead) return false;

    // Check Guard / Block:
    const isBlockingHigh = this.currentAnimState === 'BLOCK_HIGH';
    const isBlockingLow = this.currentAnimState === 'BLOCK_LOW';

    let isGuarded = false;
    if (isBlockingHigh && (hit.attackType === 'HIGH' || hit.attackType === 'MID')) {
      isGuarded = true;
    } else if (isBlockingLow && (hit.attackType === 'LOW' || hit.attackType === 'MID')) {
      isGuarded = true;
    }

    const hitPoint = new THREE.Vector3(
      hit.box.x,
      hit.box.y,
      0
    );

    if (isGuarded) {
      // Guarded! Block Sound & deflection sparks + radiant ground aura
      sound.playBlock();
      particles.emitBlockSpark(hitPoint);
      particles.emitGroundAura(this.position, 0x00f0ff);
      this.blockStunRemaining = hit.blockStun;
      this.velocity.x = hit.knockbackX * 0.45;
      // Minor chip damage (10%)
      this.health = Math.max(1, this.health - Math.floor(hit.damage * 0.1));
      this.superMeter = Math.min(100, this.superMeter + 4);
      return false;
    }

    // Clean Hit!
    this.health = Math.max(0, this.health - hit.damage);
    this.superMeter = Math.min(100, this.superMeter + hit.meterGainDefender);

    if (hit.damage >= 90 || hit.isKnockdown) {
      sound.playHitHeavy();
      particles.emitShatterBurst(hitPoint, 0xffd066, 32);
    } else {
      sound.playHitLight();
      particles.emitHitSpark(hitPoint, 0xffffff, 18, 5.0);
    }

    if (this.health <= 0) {
      this.isDead = true;
      this.currentAnimState = 'KNOCKDOWN';
      this.velocity.set(hit.knockbackX * 1.4, 7.5, 0);
      return true;
    }

    if (hit.isKnockdown) {
      this.currentAnimState = 'KNOCKDOWN';
      this.stateTimer = 0;
      this.velocity.set(hit.knockbackX * 1.2, hit.knockbackY || 6.0, 0);
    } else {
      this.currentAnimState = hit.damage > 80 ? 'HIT_STUN_HEAVY' : 'HIT_STUN_LIGHT';
      this.hitStunRemaining = hit.hitStun;
      this.velocity.set(hit.knockbackX, hit.knockbackY > 0 ? hit.knockbackY : 0, 0);
    }

    return true;
  }

  /**
   * Update 2.5D Colliders
   */
  private updateColliders() {
    const isCrouched = this.currentAnimState === 'CROUCH' || this.currentAnimState === 'BLOCK_LOW';
    const height = isCrouched ? 1.15 : 1.8;
    const yCenter = this.position.y + height * 0.5;

    this.pushbox.x = this.position.x;
    this.pushbox.y = yCenter;
    this.pushbox.height = height;

    this.hurtbox.box.x = this.position.x;
    this.hurtbox.box.y = yCenter;
    this.hurtbox.box.height = height;
  }

  /**
   * Update 3D Mesh Transform & Facing Direction
   */
  private updateMeshTransform() {
    this.rig.root.position.copy(this.position);
    // Face right (+X) or left (-X) via Y rotation
    this.rig.root.rotation.y = this.facingDirection === 1 ? Math.PI / 2 : -Math.PI / 2;
  }
}
