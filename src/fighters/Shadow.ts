import * as THREE from 'three';
import { Fighter, AttackMoveData } from './Fighter';
import { FighterMeshBuilder } from './FighterMeshBuilder';
import { FighterInputState } from '../engine/InputManager';
import { SoundSystem } from '../engine/SoundSystem';

export class Shadow extends Fighter {
  constructor(playerIndex: 1 | 2, startX: number, scene: THREE.Scene) {
    super('SHADOW', playerIndex, startX, FighterMeshBuilder.buildShadow(), scene);
    this.moveSpeed = 7.6; // Supersonic ninja mobility
  }

  protected checkAttackInputs(
    input: FighterInputState,
    sound: SoundSystem,
    isGrounded: boolean
  ): boolean {
    // 1. Super Move: VOID EXECUTION
    if (input.pressedSuperMove && this.superMeter >= 100 && isGrounded) {
      this.superMeter = 0;
      sound.playSuperFlash();
      sound.playBladeSlash();
      const superMove: AttackMoveData = {
        animState: 'SUPER_COMBO',
        startup: 4,
        active: 16,
        recovery: 14,
        damage: 360,
        hitStun: 48,
        blockStun: 24,
        knockbackX: 8.5,
        knockbackY: 6.0,
        attackType: 'MID',
        isKnockdown: true,
        meterGain: 0,
        boxOffset: { x: 1.3, y: 1.0, width: 1.9, height: 1.5 },
        whooshPitch: 1.4,
      };
      this.executeMove(superMove);
      return true;
    }

    // 2. Special 2: SHADOW STEP (Instant Blink Teleport & Reverse Slash)
    if (input.pressedSpecial2 && isGrounded) {
      sound.playTeleport();
      sound.playBladeSlash();
      this.velocity.x = this.facingDirection * 18.0; // Instant burst velocity
      this.isInvincible = true;
      this.invincibilityFrames = 8;
      const shadowStep: AttackMoveData = {
        animState: 'SPECIAL_2',
        startup: 4,
        active: 8,
        recovery: 10,
        damage: 155,
        hitStun: 30,
        blockStun: 14,
        knockbackX: 6.5,
        knockbackY: 3.5,
        attackType: 'MID',
        isKnockdown: true,
        meterGain: 15,
        boxOffset: { x: 1.4, y: 1.0, width: 1.6, height: 1.2 },
        whooshPitch: 1.6,
      };
      this.executeMove(shadowStep);
      return true;
    }

    // 3. Special 1: SHADOW SHURIKEN (High-Speed Crimson Ninja Star)
    if (input.pressedSpecial1 && isGrounded) {
      sound.playShuriken();
      this.pendingProjectile = 'SHURIKEN';
      const shurikenMove: AttackMoveData = {
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
        whooshPitch: 1.5,
      };
      this.executeMove(shurikenMove);
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
        knockbackX: 3.8,
        knockbackY: 0,
        attackType: 'HIGH',
        isKnockdown: false,
        meterGain: 8,
        boxOffset: { x: 1.0, y: 0.6, width: 1.3, height: 1.1 },
        whooshPitch: 1.3,
      };
      this.executeMove(airAttack);
      return true;
    }

    // 5. Crouching Attacks
    if (isGrounded && input.down) {
      if (input.pressedLightPunch || input.pressedHeavyPunch) {
        const crouchDagger: AttackMoveData = {
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
          whooshPitch: 1.4,
        };
        this.executeMove(crouchDagger);
        return true;
      }
      if (input.pressedLightKick || input.pressedHeavyKick) {
        const crouchSweep: AttackMoveData = {
          animState: 'CROUCH_KICK',
          startup: 5,
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
          whooshPitch: 1.5,
        };
        this.executeMove(jab);
        return true;
      }

      if (input.pressedHeavyPunch) {
        sound.playBladeSlash();
        const crossSlash: AttackMoveData = {
          animState: 'HEAVY_PUNCH',
          startup: 6,
          active: 4,
          recovery: 7,
          damage: 120,
          hitStun: 26,
          blockStun: 16,
          knockbackX: 4.5,
          knockbackY: 0,
          attackType: 'MID',
          isKnockdown: false,
          meterGain: 12,
          boxOffset: { x: 1.2, y: 1.1, width: 1.4, height: 0.8 },
          whooshPitch: 1.1,
        };
        this.executeMove(crossSlash);
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
          whooshPitch: 1.3,
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
          knockbackY: 2.5,
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

