import { SkeletalRig } from './FighterMeshBuilder';

export type FighterAnimState =
  | 'IDLE'
  | 'WALK_FORWARD'
  | 'WALK_BACKWARD'
  | 'DASH_FORWARD'
  | 'DASH_BACKWARD'
  | 'JUMP'
  | 'CROUCH'
  | 'BLOCK_HIGH'
  | 'BLOCK_LOW'
  | 'LIGHT_PUNCH'
  | 'HEAVY_PUNCH'
  | 'LIGHT_KICK'
  | 'HEAVY_KICK'
  | 'CROUCH_PUNCH'
  | 'CROUCH_KICK'
  | 'JUMP_ATTACK'
  | 'SPECIAL_1'
  | 'SPECIAL_2'
  | 'SUPER_COMBO'
  | 'HIT_STUN_LIGHT'
  | 'HIT_STUN_HEAVY'
  | 'KNOCKDOWN'
  | 'WAKEUP'
  | 'VICTORY';

export class AnimationController {
  private rig: SkeletalRig;
  private animTime: number = 0;

  constructor(rig: SkeletalRig) {
    this.rig = rig;
  }

  /**
   * Reset all joint rotations and local positions to base T-pose
   */
  public resetPose() {
    const r = this.rig;
    r.pelvis.position.set(0, 1.0, 0);
    r.pelvis.rotation.set(0, 0, 0);
    r.torso.rotation.set(0, 0, 0);
    r.chest.rotation.set(0, 0, 0);
    r.head.rotation.set(0, 0, 0);

    r.leftShoulder.rotation.set(0, 0, 0);
    r.leftUpperArm.rotation.set(0, 0, 0);
    r.leftForearm.rotation.set(0, 0, 0);
    r.leftHand.rotation.set(0, 0, 0);

    r.rightShoulder.rotation.set(0, 0, 0);
    r.rightUpperArm.rotation.set(0, 0, 0);
    r.rightForearm.rotation.set(0, 0, 0);
    r.rightHand.rotation.set(0, 0, 0);

    r.leftHip.rotation.set(0, 0, 0);
    r.leftThigh.rotation.set(0, 0, 0);
    r.leftShin.rotation.set(0, 0, 0);
    r.leftFoot.rotation.set(0, 0, 0);

    r.rightHip.rotation.set(0, 0, 0);
    r.rightThigh.rotation.set(0, 0, 0);
    r.rightShin.rotation.set(0, 0, 0);
    r.rightFoot.rotation.set(0, 0, 0);
  }

  /**
   * Update joint poses based on current state and normalized animation progress (0.0 to 1.0)
   */
  public update(state: FighterAnimState, progress: number, deltaTime: number) {
    this.animTime += deltaTime;
    this.resetPose();
    const r = this.rig;

    switch (state) {
      case 'IDLE': {
        const bob = Math.sin(this.animTime * 7) * 0.04;
        r.pelvis.position.y = 1.02 + bob;
        // Martial arts combat stance
        r.torso.rotation.y = 0.45;
        r.chest.rotation.x = -0.05;
        
        // Lead martial arts guard hand
        r.leftUpperArm.rotation.z = -0.6;
        r.leftUpperArm.rotation.x = 0.7;
        r.leftForearm.rotation.x = 1.4;

        // Rear katana / fist ready
        r.rightUpperArm.rotation.z = 0.4;
        r.rightUpperArm.rotation.x = 0.85;
        r.rightForearm.rotation.x = 1.6;

        // Wide kung-fu leg base
        r.leftThigh.rotation.z = 0.28;
        r.leftShin.rotation.z = -0.4;
        r.rightThigh.rotation.z = -0.28;
        r.rightShin.rotation.z = 0.4;

        // Headband tail flutter
        if (r.headbandTail) {
          r.headbandTail.rotation.z = 0.25 + Math.sin(this.animTime * 12) * 0.2;
        }
        break;
      }

      case 'WALK_FORWARD': {
        const cycle = this.animTime * 10;
        const legSwing = Math.sin(cycle) * 0.6;
        r.pelvis.position.y = 0.96 + Math.abs(Math.cos(cycle)) * 0.05;

        r.leftThigh.rotation.z = legSwing;
        r.leftShin.rotation.z = legSwing < 0 ? -0.4 : 0.1;
        r.rightThigh.rotation.z = -legSwing;
        r.rightShin.rotation.z = -legSwing < 0 ? -0.4 : 0.1;

        r.leftUpperArm.rotation.x = 0.6 - Math.sin(cycle) * 0.3;
        r.rightUpperArm.rotation.x = 0.8 + Math.sin(cycle) * 0.3;
        break;
      }

      case 'WALK_BACKWARD': {
        const cycle = this.animTime * 8;
        const legSwing = Math.sin(cycle) * 0.45;
        r.pelvis.position.y = 0.96 + Math.abs(Math.cos(cycle)) * 0.04;

        r.leftThigh.rotation.z = -legSwing;
        r.rightThigh.rotation.z = legSwing;
        r.torso.rotation.x = -0.1; // Leaning back
        break;
      }

      case 'DASH_FORWARD': {
        r.pelvis.position.y = 0.8;
        r.torso.rotation.z = 0.65; // Aggressive forward lean
        r.leftThigh.rotation.z = 0.8;
        r.leftShin.rotation.z = -0.7;
        r.rightThigh.rotation.z = -0.6;
        r.leftUpperArm.rotation.z = -0.8;
        r.rightUpperArm.rotation.z = -0.8;
        break;
      }

      case 'DASH_BACKWARD': {
        r.pelvis.position.y = 0.85;
        r.torso.rotation.z = -0.45; // Backwards lean
        r.leftThigh.rotation.z = -0.5;
        r.rightThigh.rotation.z = 0.6;
        break;
      }

      case 'JUMP': {
        r.pelvis.position.y = 0.9;
        r.leftThigh.rotation.z = 0.7;
        r.leftShin.rotation.z = -0.9;
        r.rightThigh.rotation.z = 0.5;
        r.rightShin.rotation.z = -0.8;
        r.leftUpperArm.rotation.z = -1.2;
        r.rightUpperArm.rotation.z = 1.2;
        break;
      }

      case 'CROUCH': {
        r.pelvis.position.y = 0.52;
        r.leftThigh.rotation.z = 1.2;
        r.leftShin.rotation.z = -1.5;
        r.rightThigh.rotation.z = 1.1;
        r.rightShin.rotation.z = -1.4;
        r.torso.rotation.x = 0.25;
        r.leftForearm.rotation.x = 1.5;
        r.rightForearm.rotation.x = 1.5;
        break;
      }

      case 'BLOCK_HIGH': {
        r.pelvis.position.y = 0.95;
        r.torso.rotation.z = -0.15;
        // Dual cross guard
        r.leftUpperArm.rotation.z = -0.2;
        r.leftUpperArm.rotation.x = 1.2;
        r.leftForearm.rotation.x = 1.6;
        r.rightUpperArm.rotation.z = 0.2;
        r.rightUpperArm.rotation.x = 1.2;
        r.rightForearm.rotation.x = 1.6;
        break;
      }

      case 'BLOCK_LOW': {
        r.pelvis.position.y = 0.52;
        r.leftThigh.rotation.z = 1.2;
        r.leftShin.rotation.z = -1.5;
        r.rightThigh.rotation.z = 1.1;
        r.rightShin.rotation.z = -1.4;
        r.leftUpperArm.rotation.x = 1.0;
        r.leftForearm.rotation.x = 1.8;
        r.rightUpperArm.rotation.x = 1.0;
        r.rightForearm.rotation.x = 1.8;
        break;
      }

      case 'LIGHT_PUNCH': {
        // Quick snappy jab
        const reach = Math.sin(progress * Math.PI);
        r.torso.rotation.y = 0.4 * reach;
        r.leftUpperArm.rotation.z = -1.4 * reach;
        r.leftUpperArm.rotation.x = 0.3;
        r.leftForearm.rotation.x = 0.2 * (1 - reach);
        break;
      }

      case 'HEAVY_PUNCH': {
        // Full torque heavy punch
        const reach = Math.sin(progress * Math.PI);
        r.torso.rotation.y = -0.7 * reach;
        r.rightUpperArm.rotation.z = 1.6 * reach;
        r.rightUpperArm.rotation.x = 0.2;
        r.rightForearm.rotation.x = 0.1 * (1 - reach);
        r.pelvis.position.y = 0.92;
        break;
      }

      case 'LIGHT_KICK': {
        const reach = Math.sin(progress * Math.PI);
        r.leftThigh.rotation.z = 1.3 * reach;
        r.leftShin.rotation.z = -0.1 * reach;
        r.rightThigh.rotation.z = -0.2;
        r.torso.rotation.z = -0.3 * reach;
        break;
      }

      case 'HEAVY_KICK': {
        // High acrobatic roundhouse
        const reach = Math.sin(progress * Math.PI);
        r.rightThigh.rotation.z = 1.8 * reach;
        r.rightShin.rotation.z = 0.2;
        r.torso.rotation.z = -0.6 * reach;
        r.torso.rotation.y = -0.5 * reach;
        break;
      }

      case 'CROUCH_PUNCH': {
        r.pelvis.position.y = 0.52;
        r.leftThigh.rotation.z = 1.2;
        r.leftShin.rotation.z = -1.5;
        r.rightThigh.rotation.z = 1.1;
        r.rightShin.rotation.z = -1.4;
        const reach = Math.sin(progress * Math.PI);
        r.leftUpperArm.rotation.z = -1.2 * reach;
        break;
      }

      case 'CROUCH_KICK': {
        // Low sweep
        r.pelvis.position.y = 0.48;
        const reach = Math.sin(progress * Math.PI);
        r.leftThigh.rotation.z = 1.6 * reach;
        r.leftShin.rotation.z = 0.1;
        r.rightThigh.rotation.z = 1.3;
        r.rightShin.rotation.z = -1.4;
        break;
      }

      case 'JUMP_ATTACK': {
        r.leftThigh.rotation.z = 1.6;
        r.leftShin.rotation.z = 0;
        r.rightThigh.rotation.z = -0.4;
        r.rightShin.rotation.z = -0.8;
        r.torso.rotation.z = -0.4;
        break;
      }

      case 'SPECIAL_1': {
        // Projectile thrust (Hadoken)
        const reach = Math.sin(progress * Math.PI);
        r.pelvis.position.y = 0.88;
        r.torso.rotation.z = 0.3 * reach;
        // Both hands thrusting forward
        r.leftUpperArm.rotation.z = -1.3 * reach;
        r.rightUpperArm.rotation.z = 1.3 * reach;
        r.leftForearm.rotation.x = 0.1;
        r.rightForearm.rotation.x = 0.1;
        break;
      }

      case 'SPECIAL_2': {
        // Rising Dragon Strike (Uppercut spiral into the air)
        r.pelvis.position.y = 1.0 + progress * 0.8;
        r.torso.rotation.y = progress * Math.PI * 2; // Full spin
        r.rightUpperArm.rotation.z = 2.4; // Skyward fist
        r.rightForearm.rotation.x = 0.1;
        r.leftThigh.rotation.z = -0.4;
        r.rightThigh.rotation.z = 0.8;
        r.rightShin.rotation.z = -1.0;
        break;
      }

      case 'SUPER_COMBO': {
        // Super strike pose
        const phase = Math.sin(progress * Math.PI * 3);
        r.pelvis.position.y = 0.9;
        r.torso.rotation.y = phase * 0.4;
        r.leftUpperArm.rotation.z = -1.5;
        r.rightUpperArm.rotation.z = 1.5;
        break;
      }

      case 'HIT_STUN_LIGHT': {
        const recoil = Math.sin(progress * Math.PI);
        r.torso.rotation.z = -0.4 * recoil;
        r.head.rotation.z = -0.5 * recoil;
        r.leftUpperArm.rotation.z = 0.4;
        r.rightUpperArm.rotation.z = -0.4;
        break;
      }

      case 'HIT_STUN_HEAVY': {
        const recoil = Math.sin(progress * Math.PI);
        r.torso.rotation.z = -0.8 * recoil;
        r.head.rotation.z = -0.9 * recoil;
        r.pelvis.position.y = 0.92;
        break;
      }

      case 'KNOCKDOWN': {
        // Falling backwards onto canvas
        r.pelvis.position.y = Math.max(0.15, 0.9 - progress * 0.85);
        r.torso.rotation.z = -Math.PI / 2 * Math.min(1.0, progress * 1.5);
        r.leftThigh.rotation.z = 0.4;
        r.rightThigh.rotation.z = 0.6;
        break;
      }

      case 'WAKEUP': {
        // Rolling up from ground back into stance
        const standProgress = Math.min(1.0, progress * 1.4);
        r.pelvis.position.y = 0.15 + standProgress * 0.83;
        r.torso.rotation.z = -Math.PI / 2 * (1.0 - standProgress);
        break;
      }

      case 'VICTORY': {
        r.pelvis.position.y = 1.05;
        // Iconic folded-arms boss stance
        r.torso.rotation.y = 0.2;
        r.leftUpperArm.rotation.set(0.3, 0.5, -0.6);
        r.leftForearm.rotation.set(1.4, 0.4, 0.2);
        r.rightUpperArm.rotation.set(0.3, -0.5, 0.6);
        r.rightForearm.rotation.set(1.4, -0.4, -0.2);
        r.head.rotation.x = -0.15; // confident nod
        break;
      }
    }
  }
}
