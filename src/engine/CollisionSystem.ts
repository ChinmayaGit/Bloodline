import * as THREE from 'three';

export type AttackType = 'HIGH' | 'MID' | 'LOW';

export interface Box2D {
  x: number;      // Center X
  y: number;      // Center Y
  width: number;
  height: number;
}

export interface HitboxData {
  id: string;
  box: Box2D;
  damage: number;
  hitStun: number;      // In frames (at 60fps)
  blockStun: number;    // In frames
  knockbackX: number;
  knockbackY: number;
  attackType: AttackType;
  isKnockdown: boolean;
  meterGainAttacker: number;
  meterGainDefender: number;
}

export interface HurtboxData {
  id: string;
  box: Box2D;
}

export class CollisionSystem {
  // Visualizer meshes
  private debugGroup: THREE.Group;
  private debugEnabled: boolean = false;
  private wireframePool: THREE.LineSegments[] = [];
  private activeWireframesCount: number = 0;

  constructor(scene: THREE.Scene) {
    this.debugGroup = new THREE.Group();
    this.debugGroup.visible = false;
    scene.add(this.debugGroup);
  }

  public setDebugVisible(visible: boolean) {
    this.debugEnabled = visible;
    this.debugGroup.visible = visible;
  }

  public isDebugEnabled(): boolean {
    return this.debugEnabled;
  }

  /**
   * Check 2D AABB collision intersection
   */
  public static testOverlap(a: Box2D, b: Box2D): boolean {
    return (
      Math.abs(a.x - b.x) * 2 < a.width + b.width &&
      Math.abs(a.y - b.y) * 2 < a.height + b.height
    );
  }

  /**
   * Resolve Pushbox separation between two fighters
   */
  public resolvePushbox(
    p1Pos: THREE.Vector3,
    p1Push: Box2D,
    p2Pos: THREE.Vector3,
    p2Push: Box2D,
    stageLimit: number = 13.0
  ) {
    const p1Center = p1Pos.x + p1Push.x;
    const p2Center = p2Pos.x + p2Push.x;
    const combinedHalfWidth = (p1Push.width + p2Push.width) * 0.5;
    const deltaX = p2Center - p1Center;
    const absDelta = Math.abs(deltaX);

    if (absDelta < combinedHalfWidth) {
      const overlap = combinedHalfWidth - absDelta;
      const sign = deltaX >= 0 ? 1 : -1;

      const p1AtLeftWall = p1Pos.x <= -stageLimit;
      const p1AtRightWall = p1Pos.x >= stageLimit;
      const p2AtLeftWall = p2Pos.x <= -stageLimit;
      const p2AtRightWall = p2Pos.x >= stageLimit;

      if (p1AtLeftWall || p1AtRightWall) {
        // P1 is pinned against wall; P2 absorbs all pushback
        p2Pos.x += overlap * sign;
      } else if (p2AtLeftWall || p2AtRightWall) {
        // P2 is pinned against wall; P1 absorbs all pushback
        p1Pos.x -= overlap * sign;
      } else {
        // Push apart equally
        p1Pos.x -= (overlap * 0.5) * sign;
        p2Pos.x += (overlap * 0.5) * sign;
      }

      // Clamp positions to stage limit
      p1Pos.x = THREE.MathUtils.clamp(p1Pos.x, -stageLimit, stageLimit);
      p2Pos.x = THREE.MathUtils.clamp(p2Pos.x, -stageLimit, stageLimit);
    }
  }

  // =========================================================================
  // DEBUG WIREFRAME RENDERING FOR TRAINING MODE
  // =========================================================================
  public beginDebugRender() {
    this.activeWireframesCount = 0;
  }

  public drawDebugBox(box: Box2D, colorHex: number) {
    if (!this.debugEnabled) return;

    let wireframe = this.wireframePool[this.activeWireframesCount];
    if (!wireframe) {
      const geo = new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 0.4));
      const mat = new THREE.LineBasicMaterial({ color: colorHex, depthTest: false, transparent: true, opacity: 0.8 });
      wireframe = new THREE.LineSegments(geo, mat);
      this.debugGroup.add(wireframe);
      this.wireframePool.push(wireframe);
    }

    wireframe.visible = true;
    wireframe.scale.set(box.width, box.height, 1);
    wireframe.position.set(box.x, box.y, 0);
    (wireframe.material as THREE.LineBasicMaterial).color.setHex(colorHex);

    this.activeWireframesCount++;
  }

  public endDebugRender() {
    if (!this.debugEnabled) return;
    // Hide unused pool items
    for (let i = this.activeWireframesCount; i < this.wireframePool.length; i++) {
      this.wireframePool[i].visible = false;
    }
  }
}

