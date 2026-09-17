import * as THREE from 'three';
import { Fighter, AttackMoveData } from './Fighter';
import { FighterMeshBuilder } from './FighterMeshBuilder';
import { FighterInputState } from '../engine/InputManager';
import { SoundSystem } from '../engine/SoundSystem';

export class Jin extends Fighter {
  constructor(playerIndex: 1 | 2, startX: number, scene: THREE.Scene) {
    super('JIN', playerIndex, startX, FighterMeshBuilder.buildJin(), scene);
    this.moveSpeed = 6.6; // Disciplined grandmaster speed
  }

  protected checkAttackInputs(
    input: FighterInputState,
    sound: SoundSystem,
    isGrounded: boolean
  ): boolean {
    // 1. Super Move: SHIN SHORYU GOD PALM
    if (input.pressedSuperMove && this.superMeter >= 100 && isGrounded) {
      this.superMeter = 0;
      sound.playSuperFlash();
      const superMove: AttackMoveData = {
        animState: 'SUPER_COMBO',
        startup: 4,
        active: 16,
        recovery: 14,
        damage: 370,
        hitStun: 48,
        blockStun: 26,
        knockbackX: 9.0,
        knockbackY: 7.0,
        attackType: 'MID',
        isKnockdown: true,
        meterGain: 0,
        boxOffset: { x: 1.15, y: 1.05, width: 1.7, height: 1.5 },
        whooshPitch: 1.25,
      };
      this.executeMove(superMove);
      return true;
    }

    // 2. Special 2: RISING DRAGON KICK (Invincible Anti-Air Ascent)
    if (input.pressedSpecial2 && isGrounded) {
      this.velocity.y = 12.5;
      this.velocity.x = this.facingDirection * 4.8;
      this.isInvincible = true;
      this.invincibilityFrames = 8;
      const dragonKick: AttackMoveData = {
        animState: 'SPECIAL_2',
        startup: 5,
        active: 10,
        recovery: 12,
        damage: 170,
        hitStun: 36,
        blockStun: 18,
        knockbackX: 6.0,
        knockbackY: 8.0,
        attackType: 'MID',
        isKnockdown: true,
        meterGain: 15,
        boxOffset: { x: 1.0, y: 1.45, width: 1.35, height: 1.65 },
        whooshPitch: 1.4,
      };
      this.executeMove(dragonKick);
      return true;
    }

    // 3. Special 1: FLOWING KI BLAST (Projectile)
    if (input.pressedSpecial1 && isGrounded) {
      sound.playProjectileShoot();
      this.pendingProjectile = 'KI_BLAST';
      const kiBlastMove: AttackMoveData = {
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
        whooshPitch: 1.3,
      };
      this.executeMove(kiBlastMove);
      return true;
    }

    // 4. Aerial Attack: SOARING CRANE KICK
    if (!isGrounded && (input.pressedLightPunch || input.pressedHeavyPunch || input.pressedLightKick || input.pressedHeavyKick)) {
      const airAttack: AttackMoveData = {
        animState: 'JUMP_ATTACK',
        startup: 4,
        active: 8,
        recovery: 6,
        damage: 95,
        hitStun: 24,
        blockStun: 16,
        knockbackX: 3.8,
        knockbackY: 0,
        attackType: 'HIGH',
        isKnockdown: false,
        meterGain: 8,
        boxOffset: { x: 1.0, y: 0.6, width: 1.35, height: 1.15 },
        whooshPitch: 1.25,
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
          damage: 100,
          hitStun: 32,
          blockStun: 15,
          knockbackX: 4.5,
          knockbackY: 4.8,
          attackType: 'LOW',
          isKnockdown: true,
          meterGain: 10,
          boxOffset: { x: 1.15, y: 0.25, width: 1.55, height: 0.5 },
          whooshPitch: 1.05,
        };
        this.executeMove(crouchSweep);
        return true;
      }
    }

    // 6. Standing Normals
    if (isGrounded) {
      if (input.pressedLightPunch) {
        const palmJab: AttackMoveData = {
          animState: 'LIGHT_PUNCH',
          startup: 3,
          active: 3,
          recovery: 4,
          damage: 48,
          hitStun: 16,
          blockStun: 12,
          knockbackX: 2.2,
          knockbackY: 0,
          attackType: 'HIGH',
          isKnockdown: false,
          meterGain: 6,
          boxOffset: { x: 1.05, y: 1.2, width: 1.25, height: 0.65 },
          whooshPitch: 1.4,
        };
        this.executeMove(palmJab);
        return true;
      }

      if (input.pressedHeavyPunch) {
        const ironMountain: AttackMoveData = {
          animState: 'HEAVY_PUNCH',
          startup: 6,
          active: 4,
          recovery: 7,
          damage: 120,
          hitStun: 28,
          blockStun: 17,
          knockbackX: 4.8,
          knockbackY: 0,
          attackType: 'MID',
          isKnockdown: false,
          meterGain: 12,
          boxOffset: { x: 1.25, y: 1.1, width: 1.45, height: 0.85 },
          whooshPitch: 1.0,
        };
        this.executeMove(ironMountain);
        return true;
      }

      if (input.pressedLightKick) {
        const snapKick: AttackMoveData = {
          animState: 'LIGHT_KICK',
          startup: 4,
          active: 3,
          recovery: 5,
          damage: 52,
          hitStun: 18,
          blockStun: 12,
          knockbackX: 2.3,
          knockbackY: 0,
          attackType: 'MID',
          isKnockdown: false,
          meterGain: 7,
          boxOffset: { x: 1.05, y: 0.7, width: 1.25, height: 0.75 },
          whooshPitch: 1.2,
        };
        this.executeMove(snapKick);
        return true;
      }

      if (input.pressedHeavyKick) {
        const crescentAxe: AttackMoveData = {
          animState: 'HEAVY_KICK',
          startup: 7,
          active: 4,
          recovery: 8,
          damage: 135,
          hitStun: 30,
          blockStun: 19,
          knockbackX: 6.0,
          knockbackY: 2.5,
          attackType: 'HIGH',
          isKnockdown: false,
          meterGain: 14,
          boxOffset: { x: 1.25, y: 1.35, width: 1.45, height: 0.95 },
          whooshPitch: 0.9,
        };
        this.executeMove(crescentAxe);
        return true;
      }
    }

    return false;
  }
}

