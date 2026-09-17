import * as THREE from 'three';

export class CameraController {
  public camera: THREE.PerspectiveCamera;
  private trauma: number = 0;
  private shakeOffset: THREE.Vector3 = new THREE.Vector3();
  private basePosition: THREE.Vector3 = new THREE.Vector3(0, 2.2, 7.5);
  
  // Cinematic camera modes
  private isCinematic: boolean = false;
  private cinematicTarget: THREE.Vector3 = new THREE.Vector3();
  private cinematicOffset: THREE.Vector3 = new THREE.Vector3();
  private cinematicTimer: number = 0;

  // Orbit mode for K.O. finisher
  private isOrbiting: boolean = false;
  private orbitAngle: number = 0;
  private orbitCenter: THREE.Vector3 = new THREE.Vector3();

  constructor(aspect: number) {
    this.camera = new THREE.PerspectiveCamera(48, aspect, 0.1, 100);
    this.camera.position.set(0, 2.2, 7.5);
  }

  public updateAspect(aspect: number) {
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }

  /**
   * Main 2.5D camera update loop keeping both fighters in frame
   */
  public update(
    deltaTime: number,
    p1Pos: THREE.Vector3,
    p2Pos: THREE.Vector3
  ) {
    // 1. K.O. Finisher Orbit
    if (this.isOrbiting) {
      this.orbitAngle += deltaTime * 0.8;
      const radius = 4.2;
      const targetX = this.orbitCenter.x + Math.sin(this.orbitAngle) * radius;
      const targetZ = this.orbitCenter.z + Math.cos(this.orbitAngle) * radius;
      const targetY = this.orbitCenter.y + 1.2;

      this.camera.position.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.08);
      this.camera.lookAt(this.orbitCenter.x, this.orbitCenter.y + 1.0, this.orbitCenter.z);
      return;
    }

    // 2. Cinematic Super Move Zoom
    if (this.isCinematic) {
      this.cinematicTimer -= deltaTime;
      if (this.cinematicTimer <= 0) {
        this.isCinematic = false;
      } else {
        const targetPos = this.cinematicTarget.clone().add(this.cinematicOffset);
        this.camera.position.lerp(targetPos, 0.12);
        this.camera.lookAt(this.cinematicTarget.x, this.cinematicTarget.y + 1.1, this.cinematicTarget.z);
        return;
      }
    }

    // 3. Standard 2.5D Dynamic Fighter Tracking
    const midpoint = new THREE.Vector3()
      .addVectors(p1Pos, p2Pos)
      .multiplyScalar(0.5);

    const distanceX = Math.abs(p1Pos.x - p2Pos.x);
    const maxY = Math.max(p1Pos.y, p2Pos.y);

    // Calculate ideal camera Z distance based on fighter separation
    // Clamped between 6.0 (close up) and 10.5 (far apart)
    const targetZ = THREE.MathUtils.clamp(5.4 + distanceX * 0.45, 5.8, 10.5);
    // Camera height adjusts slightly if fighters jump high
    const targetY = THREE.MathUtils.clamp(1.8 + (maxY * 0.35), 1.8, 3.8);
    // Camera X follows midpoint, clamped to arena view bounds
    const targetX = THREE.MathUtils.clamp(midpoint.x, -6.5, 6.5);

    const targetPos = new THREE.Vector3(targetX, targetY, targetZ);

    // Smooth snappy Lerp tracking
    this.basePosition.lerp(targetPos, 0.14);

    // 4. Screen Shake / Trauma handling
    this.shakeOffset.set(0, 0, 0);
    if (this.trauma > 0) {
      const shakeAmount = Math.pow(this.trauma, 2) * 0.35;
      this.shakeOffset.set(
        (Math.random() * 2 - 1) * shakeAmount,
        (Math.random() * 2 - 1) * shakeAmount,
        (Math.random() * 2 - 1) * shakeAmount * 0.3
      );
      this.trauma = Math.max(0, this.trauma - deltaTime * 4.0);
    }

    this.camera.position.copy(this.basePosition).add(this.shakeOffset);

    // Dynamic LookAt with slight forward bias
    const lookTarget = new THREE.Vector3(targetX, targetY - 0.3, 0);
    this.camera.lookAt(lookTarget);
  }

  public enableShake: boolean = true;

  /** Trigger camera trauma / screen shake */
  public addTrauma(amount: number) {
    if (!this.enableShake) {
      this.trauma = 0;
      return;
    }
    this.trauma = THREE.MathUtils.clamp(this.trauma + amount, 0, 1.0);
  }

  /** Trigger dramatic Super Move startup zoom */
  public triggerSuperZoom(attackerPos: THREE.Vector3, duration: number = 0.8) {
    this.isCinematic = true;
    this.cinematicTarget.copy(attackerPos);
    // Angle in from low-angle side
    this.cinematicOffset.set(0.6, 0.4, 2.8);
    this.cinematicTimer = duration;
  }

  /** Trigger K.O. slow motion orbit */
  public triggerKODolly(winnerPos: THREE.Vector3) {
    this.isOrbiting = true;
    this.orbitCenter.copy(winnerPos);
    this.orbitAngle = Math.atan2(this.camera.position.x - winnerPos.x, this.camera.position.z - winnerPos.z);
  }

  public resetOrbit() {
    this.isOrbiting = false;
    this.isCinematic = false;
  }
}
