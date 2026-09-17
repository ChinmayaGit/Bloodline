import * as THREE from 'three';
import { Fighter, AttackMoveData } from './Fighter';
import { FighterMeshBuilder } from './FighterMeshBuilder';
import { FighterInputState } from '../engine/InputManager';
import { SoundSystem } from '../engine/SoundSystem';

export class Blaze extends Fighter {
  constructor(playerIndex: 1 | 2, startX: number, scene: THREE.Scene) {
    super('HIRO', playerIndex, startX, FighterMeshBuilder.buildBlaze(), scene);
    this.moveSpeed = 6.4; // Accelerated striker movement
  }

  protected checkAttackInputs(
    input: FighterInputState,
    sound: SoundSystem,
    isGrounded: boolean
  ): boolean {
    // 1. Super Move ("INFERNO DRIVE")
    if (input.pressedSuperMove && this.superMeter >= 100 && isGrounded) {
      this.superMeter = 0;
      sound.playSuperFlash();
      const superMove: AttackMoveData = {
        animState: 'SUPER_COMBO',
        startup: 5,
        active: 16,
        recovery: 14,
        damage: 350,
        hitStun: 45,
        blockStun: 24,
        knockbackX: 8.0,
        knockbackY: 6.5,
        attackType: 'MID',
        isKnockdown: true,
        meterGain: 0,
        boxOffset: { x: 1.1, y: 1.0, width: 1.6, height: 1.5 },
        whooshPitch: 1.1,
      };
      this.executeMove(superMove);
      return true;
    }

    // 2. Special 2: Dragon Ascent (Rising Uppercut)
    if (input.pressedSpecial2 && isGrounded) {
      this.velocity.y = 12.0;
      this.velocity.x = this.facingDirection * 4.5;
      this.isInvincible = true;
      this.invincibilityFrames = 8;
      const dragonAscent: AttackMoveData = {
        animState: 'SPECIAL_2',
        startup: 5,
        active: 10,
        recovery: 12,
        damage: 165,
        hitStun: 35,
        blockStun: 18,
        knockbackX: 5.5,
        knockbackY: 7.5,
        attackType: 'MID',
        isKnockdown: true,
        meterGain: 15,
        boxOffset: { x: 1.0, y: 1.4, width: 1.3, height: 1.6 },
        whooshPitch: 1.4,
      };
      this.executeMove(dragonAscent);
      return true;
    }

    // 3. Special 1: Fire Hadou (Projectile)
    if (input.pressedSpecial1 && isGrounded) {
      sound.playProjectileShoot();
      this.pendingProjectile = 'FIREBALL';
      const fireballMove: AttackMoveData = {
        animState: 'SPECIAL_1',
        startup: 6,
        active: 4,
        recovery: 8,
        damage: 0,
        hitStun: 0,
        blockStun: 0,
        knockbackX: 0,
        knockbackY: 0,
        attackType: 'MID',
        isKnockdown: false,
        meterGain: 10,
        boxOffset: { x: 0, y: 0, width: 0, height: 0 },
        whooshPitch: 1.2,
      };
      this.executeMove(fireballMove);
      return true;
    }

    // 4. Aerial Attack
    if (!isGrounded && (input.pressedLightPunch || input.pressedHeavyPunch || input.pressedLightKick || input.pressedHeavyKick)) {
      const airAttack: AttackMoveData = {
        animState: 'JUMP_ATTACK',
        startup: 4,
        active: 8,
        recovery: 6,
        damage: 90,
        hitStun: 22,
        blockStun: 15,
        knockbackX: 3.6,
        knockbackY: 0,
        attackType: 'HIGH',
        isKnockdown: false,
        meterGain: 8,
        boxOffset: { x: 1.0, y: 0.6, width: 1.3, height: 1.1 },
        whooshPitch: 1.2,
      };
      this.executeMove(airAttack);
      return true;
    }

    // 5. Crouching Attacks
    if (isGrounded && input.down) {
      if (input.pressedLightPunch || input.pressedHeavyPunch) {
        const crouchPunch: AttackMoveData = {
          animState: 'CROUCH_PUNCH',
          startup: 3,
          active: 3,
          recovery: 5,
          damage: 55,
          hitStun: 18,
          blockStun: 12,
          knockbackX: 2.2,
          knockbackY: 0,
          attackType: 'MID',
          isKnockdown: false,
          meterGain: 6,
          boxOffset: { x: 1.0, y: 0.5, width: 1.2, height: 0.7 },
          whooshPitch: 1.3,
        };
        this.executeMove(crouchPunch);
        return true;
      }
      if (input.pressedLightKick || input.pressedHeavyKick) {
        const crouchSweep: AttackMoveData = {
          animState: 'CROUCH_KICK',
          startup: 6,
          active: 4,
          recovery: 9,
          damage: 95,
          hitStun: 30,
          blockStun: 14,
          knockbackX: 4.2,
          knockbackY: 4.5,
          attackType: 'LOW',
          isKnockdown: true,
          meterGain: 10,
          boxOffset: { x: 1.1, y: 0.25, width: 1.5, height: 0.5 },
          whooshPitch: 1.0,
        };
        this.executeMove(crouchSweep);
        return true;
      }
    }

    // 6. Standing Normals
    if (isGrounded) {
      if (input.pressedLightPunch) {
        const jab: AttackMoveData = {
          animState: 'LIGHT_PUNCH',
          startup: 3,
          active: 3,
          recovery: 4,
          damage: 45,
          hitStun: 16,
          blockStun: 12,
          knockbackX: 2.0,
          knockbackY: 0,
          attackType: 'HIGH',
          isKnockdown: false,
          meterGain: 6,
          boxOffset: { x: 1.0, y: 1.2, width: 1.2, height: 0.6 },
          whooshPitch: 1.4,
        };
        this.executeMove(jab);
        return true;
      }

      if (input.pressedHeavyPunch) {
        const straight: AttackMoveData = {
          animState: 'HEAVY_PUNCH',
          startup: 6,
          active: 4,
          recovery: 7,
          damage: 115,
          hitStun: 26,
          blockStun: 16,
          knockbackX: 4.5,
          knockbackY: 0,
          attackType: 'MID',
          isKnockdown: false,
          meterGain: 12,
          boxOffset: { x: 1.2, y: 1.1, width: 1.4, height: 0.8 },
          whooshPitch: 1.0,
        };
        this.executeMove(straight);
        return true;
      }

      if (input.pressedLightKick) {
        const kick: AttackMoveData = {
          animState: 'LIGHT_KICK',
          startup: 4,
          active: 3,
          recovery: 5,
          damage: 50,
          hitStun: 18,
          blockStun: 12,
          knockbackX: 2.2,
          knockbackY: 0,
          attackType: 'MID',
          isKnockdown: false,
          meterGain: 7,
          boxOffset: { x: 1.0, y: 0.7, width: 1.2, height: 0.7 },
          whooshPitch: 1.2,
        };
        this.executeMove(kick);
        return true;
      }

      if (input.pressedHeavyKick) {
        const roundhouse: AttackMoveData = {
          animState: 'HEAVY_KICK',
          startup: 7,
          active: 4,
          recovery: 8,
          damage: 130,
          hitStun: 28,
          blockStun: 18,
          knockbackX: 5.8,
          knockbackY: 2.2,
          attackType: 'HIGH',
          isKnockdown: false,
          meterGain: 14,
          boxOffset: { x: 1.2, y: 1.3, width: 1.4, height: 0.9 },
          whooshPitch: 0.9,
        };
        this.executeMove(roundhouse);
        return true;
      }
    }

    return false;
  }
}

