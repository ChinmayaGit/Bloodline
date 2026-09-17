import * as THREE from 'three';
import { Fighter, AttackMoveData } from './Fighter';
import { FighterMeshBuilder } from './FighterMeshBuilder';
import { FighterInputState } from '../engine/InputManager';
import { SoundSystem } from '../engine/SoundSystem';

export class MobStickman extends Fighter {
  public aiActionTimer: number = Math.floor(Math.random() * 30);
  public spawnSide: number;
  public deathTimer: number = 0;

  constructor(id: number, startX: number, colorHex: number, scene: THREE.Scene) {
    super(`MOB_${id}`, 2, startX, FighterMeshBuilder.buildMobStickman(colorHex), scene);
    this.spawnSide = startX > 0 ? 1 : -1;
    this.maxHealth = 80;
    this.health = 80;
    this.moveSpeed = 3.6 + Math.random() * 1.8;
  }

  protected checkAttackInputs(
    input: FighterInputState,
    _sound: SoundSystem,
    isGrounded: boolean
  ): boolean {
    if (!isGrounded) return false;

    if (input.pressedLightPunch) {
      const punch: AttackMoveData = {
        animState: 'LIGHT_PUNCH',
        startup: 9,
        active: 5,
        recovery: 11,
        damage: 25,
        hitStun: 18,
        blockStun: 10,
        knockbackX: 3.2,
        knockbackY: 0,
        attackType: 'HIGH',
        isKnockdown: false,
        meterGain: 6,
        boxOffset: { x: 0.9, y: 1.1, width: 0.9, height: 0.6 },
        whooshPitch: 1.1,
      };
      this.executeMove(punch);
      return true;
    }

    if (input.pressedLightKick) {
      const kick: AttackMoveData = {
        animState: 'LIGHT_KICK',
        startup: 11,
        active: 6,
        recovery: 13,
        damage: 35,
        hitStun: 22,
        blockStun: 12,
        knockbackX: 3.8,
        knockbackY: 0,
        attackType: 'LOW',
        isKnockdown: false,
        meterGain: 8,
        boxOffset: { x: 0.95, y: 0.45, width: 1.0, height: 0.6 },
        whooshPitch: 0.95,
      };
      this.executeMove(kick);
      return true;
    }

    return false;
  }

  /**
   * Update autonomous AI towards player
   */
  public updateMobAI(playerPos: THREE.Vector3): FighterInputState {
    const dx = playerPos.x - this.position.x;
    const dist = Math.abs(dx);
    const facingRight = dx > 0;

    const input: FighterInputState = {
      left: false,
      right: false,
      up: false,
      down: false,
      lightPunch: false,
      heavyPunch: false,
      lightKick: false,
      heavyKick: false,
      special1: false,
      special2: false,
      superMove: false,
      pressedLightPunch: false,
      pressedHeavyPunch: false,
      pressedLightKick: false,
      pressedHeavyKick: false,
      pressedSpecial1: false,
      pressedSpecial2: false,
      pressedSuperMove: false,
      dashForward: false,
      dashBackward: false,
    };

    if (this.hitStunRemaining > 0 || this.isDead) {
      return input;
    }

    this.aiActionTimer++;

    // Walk toward player
    if (dist > 1.35) {
      if (facingRight) {
        input.right = true;
      } else {
        input.left = true;
      }
    } else {
      // In strike distance: attack rhythmically
      if (this.aiActionTimer % 50 === 0) {
        if (Math.random() < 0.6) {
          input.pressedLightPunch = true;
        } else {
          input.pressedLightKick = true;
        }
      }
    }

    return input;
  }
}
