import * as THREE from 'three';
import { Fighter, AttackMoveData } from './Fighter';
import { FighterMeshBuilder } from './FighterMeshBuilder';
import { FighterInputState } from '../engine/InputManager';
import { SoundSystem } from '../engine/SoundSystem';

export class Cypher extends Fighter {
  constructor(playerIndex: 1 | 2, startX: number, scene: THREE.Scene) {
    super('ROXY', playerIndex, startX, FighterMeshBuilder.buildCypher(), scene);
    this.moveSpeed = 7.2; // High-speed cyber katana agility
  }

  protected checkAttackInputs(
    input: FighterInputState,
    sound: SoundSystem,
    isGrounded: boolean
  ): boolean {
    // 1. Super Move ("CYBER TEMPEST")
    if (input.pressedSuperMove && this.superMeter >= 100 && isGrounded) {
      this.superMeter = 0;
      sound.playSuperFlash();
      const superMove: AttackMoveData = {
        animState: 'SUPER_COMBO',
        startup: 4,
        active: 16,
        recovery: 12,
        damage: 345,
        hitStun: 48,
        blockStun: 24,
        knockbackX: 8.5,
        knockbackY: 5.5,
        attackType: 'MID',
        isKnockdown: true,
        meterGain: 0,
        boxOffset: { x: 1.2, y: 1.0, width: 1.8, height: 1.5 },
        whooshPitch: 1.3,
      };
      this.executeMove(superMove);
      return true;
    }

    // 2. Special 2: Flash Blade (Lunging horizontal dash slice)
    if (input.pressedSpecial2 && isGrounded) {
      this.velocity.x = this.facingDirection * 15.0;
      sound.playBladeSlash();
      sound.playWhoosh(1.6);
      const flashBlade: AttackMoveData = {
        animState: 'SPECIAL_2',
        startup: 5,
        active: 8,
        recovery: 10,
        damage: 150,
        hitStun: 30,
        blockStun: 14,
        knockbackX: 6.5,
        knockbackY: 3.5,
        attackType: 'MID',
        isKnockdown: true,
        meterGain: 14,
        boxOffset: { x: 1.4, y: 1.0, width: 1.6, height: 1.2 },
        whooshPitch: 1.6,
      };
      this.executeMove(flashBlade);
      return true;
    }

    // 3. Special 1: Volt Surge (Projectile)
    if (input.pressedSpecial1 && isGrounded) {
      sound.playProjectileShoot();
      this.pendingProjectile = 'SURGE';
      const surgeMove: AttackMoveData = {
        animState: 'SPECIAL_1',
        startup: 5,
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
      this.executeMove(surgeMove);
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
        blockStun: 14,
        knockbackX: 3.5,
        knockbackY: 0,
        attackType: 'HIGH',
        isKnockdown: false,
        meterGain: 8,
        boxOffset: { x: 1.0, y: 0.6, width: 1.3, height: 1.1 },
        whooshPitch: 1.4,
      };
      this.executeMove(airAttack);
      return true;
    }

    // 5. Crouching Attacks
    if (isGrounded && input.down) {
      if (input.pressedLightPunch || input.pressedHeavyPunch) {
        const crouchStab: AttackMoveData = {
          animState: 'CROUCH_PUNCH',
          startup: 3,
          active: 3,
          recovery: 4,
          damage: 52,
          hitStun: 16,
          blockStun: 10,
          knockbackX: 2.0,
          knockbackY: 0,
          attackType: 'MID',
          isKnockdown: false,
          meterGain: 6,
          boxOffset: { x: 1.0, y: 0.5, width: 1.2, height: 0.6 },
          whooshPitch: 1.5,
        };
        this.executeMove(crouchStab);
        return true;
      }
      if (input.pressedLightKick || input.pressedHeavyKick) {
        const lowSlide: AttackMoveData = {
          animState: 'CROUCH_KICK',
          startup: 5,
          active: 4,
          recovery: 8,
          damage: 90,
          hitStun: 28,
          blockStun: 14,
          knockbackX: 4.5,
          knockbackY: 4.0,
          attackType: 'LOW',
          isKnockdown: true,
          meterGain: 10,
          boxOffset: { x: 1.1, y: 0.25, width: 1.5, height: 0.5 },
          whooshPitch: 1.1,
        };
        this.executeMove(lowSlide);
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
          damage: 42,
          hitStun: 15,
          blockStun: 12,
          knockbackX: 1.8,
          knockbackY: 0,
          attackType: 'HIGH',
          isKnockdown: false,
          meterGain: 6,
          boxOffset: { x: 1.0, y: 1.2, width: 1.2, height: 0.6 },
          whooshPitch: 1.6,
        };
        this.executeMove(jab);
        return true;
      }

      if (input.pressedHeavyPunch) {
        const bladeSlash: AttackMoveData = {
          animState: 'HEAVY_PUNCH',
          startup: 6,
          active: 4,
          recovery: 7,
          damage: 110,
          hitStun: 24,
          blockStun: 15,
          knockbackX: 4.2,
          knockbackY: 0,
          attackType: 'MID',
          isKnockdown: false,
          meterGain: 12,
          boxOffset: { x: 1.3, y: 1.1, width: 1.5, height: 0.8 },
          whooshPitch: 1.2,
        };
        this.executeMove(bladeSlash);
        return true;
      }

      if (input.pressedLightKick) {
        const shinKick: AttackMoveData = {
          animState: 'LIGHT_KICK',
          startup: 4,
          active: 3,
          recovery: 5,
          damage: 48,
          hitStun: 17,
          blockStun: 12,
          knockbackX: 2.0,
          knockbackY: 0,
          attackType: 'MID',
          isKnockdown: false,
          meterGain: 7,
          boxOffset: { x: 1.0, y: 0.7, width: 1.2, height: 0.7 },
          whooshPitch: 1.3,
        };
        this.executeMove(shinKick);
        return true;
      }

      if (input.pressedHeavyKick) {
        const aerialAxe: AttackMoveData = {
          animState: 'HEAVY_KICK',
          startup: 7,
          active: 4,
          recovery: 8,
          damage: 125,
          hitStun: 26,
          blockStun: 16,
          knockbackX: 5.5,
          knockbackY: 2.5,
          attackType: 'HIGH',
          isKnockdown: false,
          meterGain: 14,
          boxOffset: { x: 1.2, y: 1.3, width: 1.4, height: 1.0 },
          whooshPitch: 1.0,
        };
        this.executeMove(aerialAxe);
        return true;
      }
    }

    return false;
  }
}

