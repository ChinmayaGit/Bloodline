import * as THREE from 'three';
import { Renderer3D } from './Renderer3D';
import { Stage } from './Stage';
import { CameraController } from './CameraController';
import { ParticleSystem } from './ParticleSystem';
import { SoundSystem } from './SoundSystem';
import { InputManager } from './InputManager';
import { CollisionSystem } from './CollisionSystem';
import { Fighter } from '../fighters/Fighter';
import { Blaze } from '../fighters/Blaze';
import { Cypher } from '../fighters/Cypher';
import { Shadow } from '../fighters/Shadow';
import { Volt } from '../fighters/Volt';
import { Jin } from '../fighters/Jin';
import { MobStickman } from '../fighters/MobStickman';
import { Projectile } from '../fighters/Projectile';
import { FighterAI } from '../ai/FighterAI';
import { HUD } from '../ui/HUD';
import { TrainingOverlay } from '../ui/TrainingOverlay';
import { MatchConfig, CharacterId } from '../ui/MenuManager';

export type MatchState =
  | 'TITLE'
  | 'ROUND_INTRO'
  | 'PLAYING'
  | 'HIT_STOP'
  | 'ROUND_OVER'
  | 'MATCH_OVER';

export class GameEngine {
  // Systems
  public renderer: Renderer3D;
  public stage: Stage;
  public cameraCtrl: CameraController;
  public particles: ParticleSystem;
  public sound: SoundSystem;
  public input: InputManager;
  public collision: CollisionSystem;
  public ai: FighterAI;
  public hud: HUD;
  public trainingOverlay: TrainingOverlay;

  // Fighters & Projectiles
  public p1: Fighter | null = null;
  public p2: Fighter | null = null;
  public projectiles: Projectile[] = [];

  // Horde Survival Mode State
  public mobs: MobStickman[] = [];
  public hordeWave: number = 1;
  public hordeKills: number = 0;
  public hordeWaveTarget: number = 4;
  public hordeWaveKills: number = 0;
  private mobIdCounter: number = 0;
  private mobSpawnTimer: number = 0;
  private readonly mobColors: number[] = [
    0xffffff, // classic white
    0xff3355, // neon crimson
    0x00f0ff, // electric cyan
    0xffaa00, // amber flame
    0xa020f0, // neon purple
    0x39ff14, // acid lime
  ];

  // Match State
  public matchState: MatchState = 'TITLE';
  public matchConfig: MatchConfig | null = null;
  public currentRound: number = 1;
  public roundTimer: number = 99;
  public isPaused: boolean = false;

  // Hit Stop freeze frames
  private hitStopFrames: number = 0;
  private stateTimer: number = 0;

  // Timing
  private lastTime: number = 0;
  private accumulator: number = 0;
  private readonly fixedStep: number = 1 / 60; // 60 Hz simulation

  constructor() {
    this.renderer = new Renderer3D('canvas-container');
    this.cameraCtrl = new CameraController(this.renderer.getAspectRatio());
    this.stage = new Stage(this.renderer.scene);
    this.particles = new ParticleSystem(this.renderer.scene);
    this.sound = new SoundSystem();
    this.input = new InputManager();
    this.collision = new CollisionSystem(this.renderer.scene);
    this.ai = new FighterAI();
    this.hud = new HUD();
    this.trainingOverlay = new TrainingOverlay(this.collision, this.ai);

    window.addEventListener('resize', () => {
      this.cameraCtrl.updateAspect(this.renderer.getAspectRatio());
    });

    // Start rendering and simulation loop
    this.lastTime = performance.now();
    requestAnimationFrame(this.gameLoop.bind(this));
  }

  /**
   * Start a new match with configuration
   */
  public startMatch(config: MatchConfig) {
    this.matchConfig = config;
    this.currentRound = 1;
    this.roundTimer = 99;
    this.isPaused = false;
    this.hitStopFrames = 0;
    this.cameraCtrl.resetOrbit();

    // Clear previous fighters & mobs
    if (this.p1) this.renderer.scene.remove(this.p1.rig.root);
    if (this.p2) this.renderer.scene.remove(this.p2.rig.root);
    this.clearMobs();
    this.clearProjectiles();

    // Instantiate selected fighters
    const startX1 = config.mode === 'HORDE' ? 0 : -3.2;
    const startX2 = 3.2;

    this.p1 = this.createFighter(config.p1Char, 1, startX1);
    this.p2 = this.createFighter(config.p2Char, 2, startX2);

    if (config.mode === 'HORDE') {
      this.hud.setHordeMode(true);
      this.hordeWave = 1;
      this.hordeKills = 0;
      this.hordeWaveTarget = 4;
      this.hordeWaveKills = 0;
      this.hud.updateHordeStats(this.hordeWave, this.hordeKills);
      this.hud.setFighterNames(this.p1.name, 'HORDE');
      this.hud.updateRounds(0, 0);
      this.trainingOverlay.setVisible(false);

      // Remove P2 mesh from scene during Horde mode
      this.renderer.scene.remove(this.p2.rig.root);

      // Spawn initial wave of stickmen from both sides
      this.spawnMob(-5.0);
      this.spawnMob(5.0);

      this.sound.startBattleBGM();
      this.matchState = 'PLAYING';
      this.hud.showAnnouncement('SURVIVE THE HORDE!', 1600);
      this.sound.announce('Fight!');
      return;
    }

    this.hud.setHordeMode(false);
    this.hud.setFighterNames(this.p1.name, this.p2.name);
    this.hud.updateRounds(0, 0);

    // Setup Training overlay if in training mode
    if (config.mode === 'TRAINING') {
      this.trainingOverlay.setVisible(true);
      this.ai.dummyBehavior = 'stand';
    } else {
      this.trainingOverlay.setVisible(false);
      this.ai.dummyBehavior = 'cpu';
      this.sound.startBattleBGM();
    }

    this.startRoundIntro();
  }

  public quitMatch() {
    this.matchState = 'TITLE';
    this.sound.stopBattleBGM();
    this.clearProjectiles();
    this.clearMobs();
    this.hud.setHordeMode(false);
    if (this.p1) this.renderer.scene.remove(this.p1.rig.root);
    if (this.p2) this.renderer.scene.remove(this.p2.rig.root);
    this.p1 = null;
    this.p2 = null;
    this.cameraCtrl.resetOrbit();
  }

  private startRoundIntro() {
    if (!this.p1 || !this.p2) return;

    this.matchState = 'ROUND_INTRO';
    this.stateTimer = 0;
    this.roundTimer = 99;

    this.p1.resetRound(-3.2, true);
    this.p2.resetRound(3.2, false);
    this.clearProjectiles();

    const roundText = this.currentRound === 3 ? 'FINAL ROUND' : `ROUND ${this.currentRound}`;
    this.hud.showAnnouncement(roundText, 1400);
    this.sound.announce(roundText);
  }

  private clearProjectiles() {
    this.projectiles.forEach((p) => this.renderer.scene.remove(p.mesh));
    this.projectiles = [];
  }

  private createFighter(charId: CharacterId, playerIndex: 1 | 2, startX: number): Fighter {
    switch (charId) {
      case 'shadow':
        return new Shadow(playerIndex, startX, this.renderer.scene);
      case 'volt':
        return new Volt(playerIndex, startX, this.renderer.scene);
      case 'cypher':
        return new Cypher(playerIndex, startX, this.renderer.scene);
      case 'jin':
        return new Jin(playerIndex, startX, this.renderer.scene);
      case 'blaze':
      default:
        return new Blaze(playerIndex, startX, this.renderer.scene);
    }
  }

  private clearMobs() {
    this.mobs.forEach((m) => this.renderer.scene.remove(m.rig.root));
    this.mobs = [];
  }

  private spawnMob(customX?: number) {
    const id = ++this.mobIdCounter;
    const side = Math.random() < 0.5 ? -1 : 1;
    const spawnX = customX !== undefined ? customX : side * (6.5 + Math.random() * 2.0);
    const color = this.mobColors[id % this.mobColors.length];
    const mob = new MobStickman(id, spawnX, color, this.renderer.scene);
    this.mobs.push(mob);
  }

  private frameCount: number = 0;
  private fpsSmoothed: number = 60;
  public onFpsUpdate?: (fps: number) => void;

  /**
   * Core Game Loop
   */
  private gameLoop(time: number) {
    requestAnimationFrame(this.gameLoop.bind(this));

    const rawDelta = Math.min((time - this.lastTime) / 1000, 0.066); // clamp max frame delta to ~15fps equivalent
    this.lastTime = time;

    // FPS calculation
    const currentFps = rawDelta > 0 ? 1 / rawDelta : 60;
    this.fpsSmoothed = this.fpsSmoothed * 0.9 + currentFps * 0.1;
    this.frameCount++;
    if (this.frameCount % 20 === 0 && this.onFpsUpdate) {
      this.onFpsUpdate(this.fpsSmoothed);
    }

    if (!this.isPaused) {
      this.accumulator += rawDelta;
      let maxTicks = 2; // Max 2 simulation sub-ticks per frame to prevent spiral of death
      while (this.accumulator >= this.fixedStep && maxTicks > 0) {
        this.tick();
        this.accumulator -= this.fixedStep;
        maxTicks--;
      }
      if (this.accumulator > this.fixedStep) {
        this.accumulator = 0; // Drop accumulated debt if lagging
      }
    }

    // Per-frame renders & camera updates
    this.updateRender(rawDelta);
  }

  /**
   * Fixed 60Hz deterministic tick
   */
  private tick() {
    if (this.matchConfig?.mode === 'HORDE') {
      this.tickHorde();
      return;
    }

    if (!this.p1 || !this.p2) return;

    // Handle Hit Stop (tactile impact frame freeze)
    if (this.hitStopFrames > 0) {
      this.hitStopFrames--;
      return;
    }

    // 1. ROUND_INTRO Flow
    if (this.matchState === 'ROUND_INTRO') {
      this.stateTimer += this.fixedStep;
      if (this.stateTimer > 1.2 && this.stateTimer - this.fixedStep <= 1.2) {
        this.hud.showAnnouncement('FIGHT!', 1000);
        this.sound.announce('Fight!');
      }
      if (this.stateTimer >= 1.8) {
        this.matchState = 'PLAYING';
      }
      return;
    }

    // 2. ROUND_OVER Flow
    if (this.matchState === 'ROUND_OVER') {
      this.stateTimer += this.fixedStep;
      if (this.stateTimer >= 3.0) {
        // Check match winner (Best of 3)
        if (this.p1.roundsWon >= 2 || this.p2.roundsWon >= 2 || this.matchConfig?.mode === 'TRAINING') {
          this.matchState = 'MATCH_OVER';
          const winner = this.p1.roundsWon >= 2 ? this.p1 : this.p2;
          const isP1 = winner === this.p1;
          this.sound.stopBattleBGM();
          winner.currentAnimState = 'VICTORY';
          this.sound.announce(`${winner.name} Wins!`);
          
          // Show victory modal via custom event
          window.dispatchEvent(new CustomEvent('match-finished', {
            detail: { winnerName: winner.name, isP1Winner: isP1 }
          }));
        } else {
          // Next round
          this.currentRound++;
          this.startRoundIntro();
        }
      }
    }

    // 3. PLAYING State: Process Inputs & Combat
    if (this.matchState === 'PLAYING') {
      // Countdown Round Timer (except in training)
      if (this.matchConfig?.mode !== 'TRAINING') {
        this.roundTimer -= this.fixedStep;
        if (this.roundTimer <= 0) {
          this.roundTimer = 0;
          this.handleTimeOver();
          return;
        }
      }
      this.hud.updateTimer(this.roundTimer);

      // Gather Inputs
      const p1Input = this.input.getPlayerInputs(1, this.p1.facingDirection === 1);
      let p2Input;
      if (this.matchConfig?.mode === 'PVP') {
        p2Input = this.input.getPlayerInputs(2, this.p2.facingDirection === 1);
      } else {
        // AI / Training Dummy Controls P2
        p2Input = this.ai.computeInput(this.p2, this.p1);
      }

      // Tick Fighters
      const p1Attacking = this.p1.movePhase === 'ACTIVE' || this.p1.movePhase === 'STARTUP';
      const p2Attacking = this.p2.movePhase === 'ACTIVE' || this.p2.movePhase === 'STARTUP';

      this.p1.tick(p1Input, this.p2.position, p2Attacking, this.sound, this.particles);
      this.p2.tick(p2Input, this.p1.position, p1Attacking, this.sound, this.particles);

      // Check Super Move Startup Zoom
      if (this.p1.currentAnimState === 'SUPER_COMBO' && this.p1.stateTimer === 1) {
        this.cameraCtrl.triggerSuperZoom(this.p1.position);
        this.stage.triggerImpactFlash(0xffffff, 8, this.p1.position);
      }
      if (this.p2.currentAnimState === 'SUPER_COMBO' && this.p2.stateTimer === 1) {
        this.cameraCtrl.triggerSuperZoom(this.p2.position);
        this.stage.triggerImpactFlash(0xffffff, 8, this.p2.position);
      }

      // Check Projectile Spawns
      this.checkProjectileSpawn(this.p1);
      this.checkProjectileSpawn(this.p2);

      // Update Projectiles
      this.updateProjectiles();

      // Resolve Pushbox Collision & Corner Traps
      this.collision.resolvePushbox(
        this.p1.position,
        this.p1.pushbox,
        this.p2.position,
        this.p2.pushbox
      );

      // Combat Collision Detection
      this.checkCombatCollisions();

      // Clear Just-Pressed input states
      this.input.postUpdate();

      // Check K.O. Condition
      if (this.p1.isDead || this.p2.isDead) {
        this.handleKnockout();
      }

      // Training mode: Reset health if depleted
      if (this.matchConfig?.mode === 'TRAINING') {
        if (this.p1.health < 200) this.p1.health = 1000;
        if (this.p2.health < 200) this.p2.health = 1000;
      }
    }

    // Update HUD
    this.hud.updateHealth(this.p1.health, this.p1.maxHealth, this.p2.health, this.p2.maxHealth);
    this.hud.updateMeters(this.p1.superMeter, this.p2.superMeter);
  }

  private checkProjectileSpawn(fighter: Fighter) {
    if (fighter.pendingProjectile) {
      const type = fighter.pendingProjectile;
      fighter.pendingProjectile = null;
      const startX = fighter.position.x + fighter.facingDirection * 1.1;
      const startY = fighter.position.y + 1.1;
      const proj = new Projectile(
        this.renderer.scene,
        startX,
        startY,
        fighter.facingDirection,
        fighter.playerIndex,
        type
      );
      this.projectiles.push(proj);
    }
  }

  private updateProjectiles() {
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const p = this.projectiles[i];
      p.update(this.fixedStep, this.particles);
      if (p.isDead) {
        this.renderer.scene.remove(p.mesh);
        this.projectiles.splice(i, 1);
      }
    }
  }

  private checkCombatCollisions() {
    if (!this.p1 || !this.p2) return;

    // 1. P1 Hitbox vs P2 Hurtbox
    if (this.p1.activeHitbox && !this.p1.hasHitCurrentMove) {
      if (CollisionSystem.testOverlap(this.p1.activeHitbox.box, this.p2.hurtbox.box)) {
        this.p1.hasHitCurrentMove = true;
        this.p1.canCancel = true;
        const cleanHit = this.p2.takeHit(this.p1.activeHitbox, this.sound, this.particles);

        if (cleanHit) {
          this.p1.comboHits++;
          this.hud.showCombo(1, this.p1.comboHits);
          this.p1.superMeter = Math.min(100, this.p1.superMeter + this.p1.activeHitbox.meterGainAttacker);
          this.hitStopFrames = this.p1.currentMove?.animState === 'SUPER_COMBO' ? 5 : (this.p1.activeHitbox.damage > 100 ? 3 : 2);
          this.cameraCtrl.addTrauma(0.28);
          this.stage.triggerImpactFlash(0xffffff, 4, this.p2.position);
        } else {
          // Blocked
          this.hitStopFrames = 1;
          this.cameraCtrl.addTrauma(0.08);
        }

        // Send Frame Data to Training Overlay
        if (this.p1.currentMove) {
          this.trainingOverlay.updateFrameData(this.p1.currentMove);
        }
      }
    }

    // 2. P2 Hitbox vs P1 Hurtbox
    if (this.p2.activeHitbox && !this.p2.hasHitCurrentMove) {
      if (CollisionSystem.testOverlap(this.p2.activeHitbox.box, this.p1.hurtbox.box)) {
        this.p2.hasHitCurrentMove = true;
        this.p2.canCancel = true;
        const cleanHit = this.p1.takeHit(this.p2.activeHitbox, this.sound, this.particles);

        if (cleanHit) {
          this.p2.comboHits++;
          this.hud.showCombo(2, this.p2.comboHits);
          this.p2.superMeter = Math.min(100, this.p2.superMeter + this.p2.activeHitbox.meterGainAttacker);
          this.hitStopFrames = this.p2.currentMove?.animState === 'SUPER_COMBO' ? 5 : (this.p2.activeHitbox.damage > 100 ? 3 : 2);
          this.cameraCtrl.addTrauma(0.28);
          this.stage.triggerImpactFlash(0xffffff, 4, this.p1.position);
        } else {
          // Blocked
          this.hitStopFrames = 1;
          this.cameraCtrl.addTrauma(0.08);
        }

        if (this.p2.currentMove) {
          this.trainingOverlay.updateFrameData(this.p2.currentMove);
        }
      }
    }

    // 3. Projectile Collisions
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const proj = this.projectiles[i];
      const target = proj.ownerIndex === 1 ? this.p2 : this.p1;

      if (CollisionSystem.testOverlap(proj.hitbox.box, target.hurtbox.box)) {
        const attacker = proj.ownerIndex === 1 ? this.p1 : this.p2;
        const cleanHit = target.takeHit(proj.hitbox, this.sound, this.particles);
        if (cleanHit) {
          attacker.comboHits++;
          this.hud.showCombo(attacker.playerIndex, attacker.comboHits);
          this.cameraCtrl.addTrauma(0.3);
          this.hitStopFrames = 4;
        }
        proj.destroy(this.renderer.scene, this.particles);
        this.projectiles.splice(i, 1);
      }
    }

    // Reset combo counters if opponent is no longer reeling
    if (this.p2.hitStunRemaining <= 0 && this.p1.comboHits > 0) {
      this.p1.comboHits = 0;
      this.hud.showCombo(1, 0);
    }
    if (this.p1.hitStunRemaining <= 0 && this.p2.comboHits > 0) {
      this.p2.comboHits = 0;
      this.hud.showCombo(2, 0);
    }
  }

  private handleKnockout() {
    this.matchState = 'ROUND_OVER';
    this.stateTimer = 0;
    this.hud.showAnnouncement('K.O.!', 2000);
    this.sound.announce('K.O.!');
    this.sound.playExplosion();
    this.cameraCtrl.addTrauma(0.8);

    const winner = this.p1?.isDead ? this.p2! : this.p1!;
    winner.roundsWon++;
    this.hud.updateRounds(this.p1!.roundsWon, this.p2!.roundsWon);
    this.cameraCtrl.triggerKODolly(winner.position);
  }

  private handleTimeOver() {
    this.matchState = 'ROUND_OVER';
    this.stateTimer = 0;
    this.hud.showAnnouncement('TIME OVER', 2000);
    this.sound.announce('Time Over!');

    if (!this.p1 || !this.p2) return;

    if (this.p1.health > this.p2.health) {
      this.p1.roundsWon++;
    } else if (this.p2.health > this.p1.health) {
      this.p2.roundsWon++;
    }
    this.hud.updateRounds(this.p1.roundsWon, this.p2.roundsWon);
  }

  /**
   * Horde Survival Game Loop Tick
   */
  private tickHorde() {
    if (!this.p1) return;

    if (this.hitStopFrames > 0) {
      this.hitStopFrames--;
      return;
    }

    if (this.matchState === 'MATCH_OVER') {
      return;
    }

    // 1. Spawning Mobs
    const maxConcurrent = Math.min(5, 2 + Math.floor(this.hordeWave / 2));
    const mobsLeftToSpawn = this.hordeWaveTarget - (this.hordeWaveKills + this.mobs.length);
    if (this.mobs.length < maxConcurrent && mobsLeftToSpawn > 0) {
      this.mobSpawnTimer++;
      if (this.mobSpawnTimer > 40) {
        this.mobSpawnTimer = 0;
        this.spawnMob();
      }
    }

    // 2. Find nearest active mob to face / target
    let nearestMob: MobStickman | null = null;
    let minDist = Infinity;
    for (const m of this.mobs) {
      if (m.isDead) continue;
      const d = Math.abs(m.position.x - this.p1.position.x);
      if (d < minDist) {
        minDist = d;
        nearestMob = m;
      }
    }
    const targetPos = nearestMob
      ? nearestMob.position
      : new THREE.Vector3(this.p1.position.x + this.p1.facingDirection * 2.5, 0, 0);

    const nearbyMobAttacking =
      nearestMob !== null &&
      minDist < 2.0 &&
      (nearestMob.movePhase === 'ACTIVE' || nearestMob.movePhase === 'STARTUP');

    // 3. Player 1 Inputs & Tick
    const p1Input = this.input.getPlayerInputs(1, this.p1.facingDirection === 1);
    this.p1.tick(p1Input, targetPos, nearbyMobAttacking, this.sound, this.particles);

    // Super Move Startup Zoom
    if (this.p1.currentAnimState === 'SUPER_COMBO' && this.p1.stateTimer === 1) {
      this.cameraCtrl.triggerSuperZoom(this.p1.position);
      this.stage.triggerImpactFlash(0xffffff, 8, this.p1.position);
    }

    // Projectiles
    this.checkProjectileSpawn(this.p1);
    this.updateProjectiles();

    // 4. Tick Each Mob
    const p1Attacking = this.p1.movePhase === 'ACTIVE' || this.p1.movePhase === 'STARTUP';
    for (let i = 0; i < this.mobs.length; i++) {
      const m = this.mobs[i];
      const mobInput = m.updateMobAI(this.p1.position);
      m.tick(mobInput, this.p1.position, p1Attacking, this.sound, this.particles);
    }

    // 5. Pushbox Collisions
    for (const m of this.mobs) {
      if (!m.isDead) {
        this.collision.resolvePushbox(
          this.p1.position,
          this.p1.pushbox,
          m.position,
          m.pushbox
        );
      }
    }

    // 6. Combat Collisions
    this.checkHordeCombatCollisions();

    // 7. Clean up dead mobs after death animation
    for (let i = this.mobs.length - 1; i >= 0; i--) {
      const m = this.mobs[i];
      if (m.isDead) {
        m.deathTimer++;
        if (m.deathTimer > 35) {
          this.renderer.scene.remove(m.rig.root);
          this.mobs.splice(i, 1);
        }
      }
    }

    // 8. Check Wave Completion
    if (this.hordeWaveKills >= this.hordeWaveTarget && this.mobs.length === 0) {
      this.hordeWave++;
      this.hordeWaveKills = 0;
      this.hordeWaveTarget = 3 + this.hordeWave * 2;
      this.p1.health = Math.min(this.p1.maxHealth, this.p1.health + 300);
      this.hud.showAnnouncement(`WAVE ${this.hordeWave}!`, 1800);
      this.sound.announce('Round 2');
      this.hud.updateHordeStats(this.hordeWave, this.hordeKills);

      // Spawn initial wave enemies
      this.spawnMob(-5.5);
      this.spawnMob(5.5);
    }

    // 9. Check Player Defeat
    if (this.p1.isDead) {
      this.matchState = 'MATCH_OVER';
      this.sound.stopBattleBGM();
      this.sound.announce('Time Over!');
      this.sound.playExplosion();
      this.cameraCtrl.addTrauma(0.8);
      this.hud.showAnnouncement('DEFEATED', 2500);

      window.dispatchEvent(
        new CustomEvent('match-finished', {
          detail: {
            winnerName: `WAVE ${this.hordeWave} SURVIVED`,
            isP1Winner: false,
          },
        })
      );
    }

    // 10. Update HUD
    const waveProgress = Math.max(0, this.hordeWaveTarget - this.hordeWaveKills);
    this.hud.updateHealth(this.p1.health, this.p1.maxHealth, waveProgress, this.hordeWaveTarget);
    this.hud.updateMeters(this.p1.superMeter, 0);

    // Clear Just-Pressed input states
    this.input.postUpdate();
  }

  /**
   * Horde Combat Hitbox / Hurtbox collisions
   */
  private checkHordeCombatCollisions() {
    if (!this.p1) return;

    // A. P1 Active Hitbox vs All Mobs
    if (this.p1.activeHitbox && !this.p1.hasHitCurrentMove) {
      let hitAny = false;
      for (const m of this.mobs) {
        if (m.isDead) continue;
        if (CollisionSystem.testOverlap(this.p1.activeHitbox.box, m.hurtbox.box)) {
          hitAny = true;
          this.p1.canCancel = true;
          const cleanHit = m.takeHit(this.p1.activeHitbox, this.sound, this.particles);

          if (cleanHit) {
            this.p1.comboHits++;
            this.hud.showCombo(1, this.p1.comboHits);
            this.p1.superMeter = Math.min(100, this.p1.superMeter + 16);
            this.hitStopFrames = 2;
            this.cameraCtrl.addTrauma(0.28);
            this.stage.triggerImpactFlash(0xffffff, 4, m.position);

            if (m.isDead) {
              this.hordeKills++;
              this.hordeWaveKills++;
              this.hud.updateHordeStats(this.hordeWave, this.hordeKills);
              this.sound.playExplosion();
              this.cameraCtrl.addTrauma(0.4);
              this.stage.triggerImpactFlash(0xffffff, 6, m.position);
            }
          }
        }
      }
      if (hitAny) {
        this.p1.hasHitCurrentMove = true;
      }
    }

    // B. Each Mob's Hitbox vs P1 Hurtbox
    for (const m of this.mobs) {
      if (m.isDead) continue;
      if (m.activeHitbox && !m.hasHitCurrentMove) {
        if (CollisionSystem.testOverlap(m.activeHitbox.box, this.p1.hurtbox.box)) {
          m.hasHitCurrentMove = true;
          const cleanHit = this.p1.takeHit(m.activeHitbox, this.sound, this.particles);
          if (cleanHit) {
            this.hitStopFrames = 2;
            this.cameraCtrl.addTrauma(0.25);
            this.stage.triggerImpactFlash(0xff3355, 3, this.p1.position);
          }
        }
      }
    }

    // C. P1 Projectiles vs Mobs
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const proj = this.projectiles[i];
      if (proj.ownerIndex !== 1) continue;

      for (const m of this.mobs) {
        if (m.isDead) continue;
        if (CollisionSystem.testOverlap(proj.hitbox.box, m.hurtbox.box)) {
          const cleanHit = m.takeHit(proj.hitbox, this.sound, this.particles);
          if (cleanHit) {
            this.p1.comboHits++;
            this.hud.showCombo(1, this.p1.comboHits);
            this.cameraCtrl.addTrauma(0.25);
            this.hitStopFrames = 2;

            if (m.isDead) {
              this.hordeKills++;
              this.hordeWaveKills++;
              this.hud.updateHordeStats(this.hordeWave, this.hordeKills);
              this.sound.playExplosion();
            }
          }
          proj.destroy(this.renderer.scene, this.particles);
          this.projectiles.splice(i, 1);
          break;
        }
      }
    }
  }

  /**
   * Per-frame render pass
   */
  private updateRender(deltaTime: number) {
    if (this.matchConfig?.mode === 'HORDE' && this.p1) {
      const targetPos =
        this.mobs.length > 0 && !this.mobs[0].isDead
          ? this.mobs[0].position
          : new THREE.Vector3(this.p1.position.x + this.p1.facingDirection * 2.5, 0, 0);
      this.cameraCtrl.update(deltaTime, this.p1.position, targetPos);
    } else if (this.p1 && this.p2) {
      // 2.5D Camera Tracking
      this.cameraCtrl.update(deltaTime, this.p1.position, this.p2.position);

      // Debug Visualizer for Training Mode (only if enabled)
      if (this.collision.isDebugEnabled()) {
        this.collision.beginDebugRender();
        this.collision.drawDebugBox(this.p1.hurtbox.box, 0x00ff66);
        this.collision.drawDebugBox(this.p2.hurtbox.box, 0x00ff66);
        this.collision.drawDebugBox(this.p1.pushbox, 0x0088ff);
        this.collision.drawDebugBox(this.p2.pushbox, 0x0088ff);
        if (this.p1.activeHitbox) this.collision.drawDebugBox(this.p1.activeHitbox.box, 0xff0044);
        if (this.p2.activeHitbox) this.collision.drawDebugBox(this.p2.activeHitbox.box, 0xff0044);
        this.projectiles.forEach((p) => this.collision.drawDebugBox(p.hitbox.box, 0xffbb00));
        this.collision.endDebugRender();
      }
    }

    // Update Particles
    this.particles.update(deltaTime);

    // Update Stage lighting/atmosphere
    this.stage.update(deltaTime);

    // Update HUD red damage bars
    this.hud.updateDelayedDamage(deltaTime);

    // Three.js Render Pass
    this.renderer.render(this.cameraCtrl.camera);
  }
}
