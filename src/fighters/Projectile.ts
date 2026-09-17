import * as THREE from 'three';
import { HitboxData } from '../engine/CollisionSystem';
import { ParticleSystem } from '../engine/ParticleSystem';

export type ProjectileType = 'FIREBALL' | 'SURGE' | 'SHURIKEN' | 'LIGHTNING' | 'KI_BLAST';

export class Projectile {
  public mesh: THREE.Group;
  public position: THREE.Vector3;
  public velocity: THREE.Vector3;
  public ownerIndex: 1 | 2;
  public hitbox: HitboxData;
  public isDead: boolean = false;
  public lifeTimer: number = 0;
  private maxLife: number = 2.5;
  private colorHex: number;
  private light: THREE.PointLight;

  constructor(
    scene: THREE.Scene,
    startX: number,
    startY: number,
    direction: number, // 1 for right, -1 for left
    owner: 1 | 2,
    type: ProjectileType
  ) {
    this.ownerIndex = owner;
    this.position = new THREE.Vector3(startX, startY, 0);

    let speed = 11.0;
    if (type === 'SHURIKEN') {
      speed = 14.5;
      this.colorHex = 0xff0033;
    } else if (type === 'LIGHTNING') {
      speed = 13.0;
      this.colorHex = 0xffea00;
    } else if (type === 'SURGE') {
      speed = 11.5;
      this.colorHex = 0x00e5ff;
    } else if (type === 'KI_BLAST') {
      speed = 12.0;
      this.colorHex = 0xd8eeff;
    } else {
      speed = 10.5;
      this.colorHex = 0xff4400;
    }

    this.velocity = new THREE.Vector3(direction * speed, 0, 0);

    this.mesh = new THREE.Group();
    this.mesh.position.copy(this.position);

    if (type === 'SHURIKEN') {
      // Faceted 4-point low-poly ninja star with central ring
      const starGeo = new THREE.ConeGeometry(0.12, 0.52, 4);
      const starMat = new THREE.MeshBasicMaterial({ color: 0xff0033 });
      
      const s1 = new THREE.Mesh(starGeo, starMat);
      s1.position.y = 0.26;
      const s2 = new THREE.Mesh(starGeo, starMat);
      s2.position.y = -0.26;
      s2.rotation.z = Math.PI;
      const s3 = new THREE.Mesh(starGeo, starMat);
      s3.position.x = 0.26;
      s3.rotation.z = -Math.PI / 2;
      const s4 = new THREE.Mesh(starGeo, starMat);
      s4.position.x = -0.26;
      s4.rotation.z = Math.PI / 2;

      const ringGeo = new THREE.TorusGeometry(0.08, 0.02, 4, 8);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const ring = new THREE.Mesh(ringGeo, ringMat);

      this.mesh.add(s1, s2, s3, s4, ring);
    } else if (type === 'LIGHTNING') {
      // Jagged low-poly zigzag lightning bolt
      const boltMat = new THREE.MeshBasicMaterial({ color: 0xffff33 });
      const boltSegGeo = new THREE.BoxGeometry(0.06, 0.35, 0.06);

      const b1 = new THREE.Mesh(boltSegGeo, boltMat);
      b1.position.set(-0.16, 0.14, 0);
      b1.rotation.z = -0.65;

      const b2 = new THREE.Mesh(boltSegGeo, boltMat);
      b2.position.set(0.02, 0, 0);
      b2.rotation.z = 0.75;

      const b3 = new THREE.Mesh(boltSegGeo, boltMat);
      b3.position.set(0.18, -0.14, 0);
      b3.rotation.z = -0.65;

      const coreGeo = new THREE.OctahedronGeometry(0.16, 0);
      const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const core = new THREE.Mesh(coreGeo, coreMat);

      this.mesh.add(b1, b2, b3, core);
    } else if (type === 'SURGE') {
      // Angular low-poly diamond plasma slash wave
      const waveGeo = new THREE.OctahedronGeometry(0.38, 0);
      const waveMat = new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.9,
      });
      const waveMesh = new THREE.Mesh(waveGeo, waveMat);
      waveMesh.scale.set(0.3, 1.3, 0.8);
      waveMesh.rotation.z = Math.PI / 4;

      const coreGeo = new THREE.OctahedronGeometry(0.22, 0);
      const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      coreMesh.scale.set(0.25, 1.0, 0.6);

      this.mesh.add(waveMesh, coreMesh);
    } else if (type === 'KI_BLAST') {
      // Flowing spiritual Ki Blast orb with orbiting energy ring
      const coreGeo = new THREE.DodecahedronGeometry(0.24, 0);
      const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const core = new THREE.Mesh(coreGeo, coreMat);

      const auraGeo = new THREE.IcosahedronGeometry(0.32, 0);
      const auraMat = new THREE.MeshBasicMaterial({
        color: 0x90ccff,
        wireframe: true,
        transparent: true,
        opacity: 0.8,
      });
      const aura = new THREE.Mesh(auraGeo, auraMat);

      const ringGeo = new THREE.TorusGeometry(0.34, 0.03, 4, 12);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x00ddff });
      const ring = new THREE.Mesh(ringGeo, ringMat);

      this.mesh.add(core, aura, ring);
    } else {
      // Low-poly faceted fireball (icosahedron with orbiting flame shards)
      const coreGeo = new THREE.IcosahedronGeometry(0.22, 0);
      const coreMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      this.mesh.add(coreMesh);

      const auraGeo = new THREE.IcosahedronGeometry(0.34, 0);
      const auraMat = new THREE.MeshBasicMaterial({
        color: this.colorHex,
        transparent: true,
        opacity: 0.8,
        wireframe: false,
      });
      const auraMesh = new THREE.Mesh(auraGeo, auraMat);
      this.mesh.add(auraMesh);

      const shardGeo = new THREE.ConeGeometry(0.07, 0.22, 4);
      const shardMat = new THREE.MeshBasicMaterial({ color: 0xff7700 });
      const s1 = new THREE.Mesh(shardGeo, shardMat);
      s1.position.set(-0.25, 0.12, 0);
      s1.rotation.z = Math.PI / 2;
      const s2 = new THREE.Mesh(shardGeo, shardMat);
      s2.position.set(-0.25, -0.12, 0);
      s2.rotation.z = Math.PI / 2;
      this.mesh.add(s1, s2);
    }

    // Attached glowing light
    this.light = new THREE.PointLight(this.colorHex, 2.8, 6);
    this.mesh.add(this.light);

    scene.add(this.mesh);

    // Setup projectile Hitbox
    this.hitbox = {
      id: `proj_${owner}_${Date.now()}`,
      box: {
        x: startX,
        y: startY,
        width: 0.8,
        height: 0.8,
      },
      damage: 120,
      hitStun: 22,
      blockStun: 14,
      knockbackX: direction * 4.5,
      knockbackY: 1.5,
      attackType: 'MID',
      isKnockdown: false,
      meterGainAttacker: 10,
      meterGainDefender: 5,
    };
  }

  public update(deltaTime: number, particles: ParticleSystem, stageLimit: number = 13.0) {
    this.lifeTimer += deltaTime;
    if (this.lifeTimer >= this.maxLife) {
      this.isDead = true;
      return;
    }

    this.position.addScaledVector(this.velocity, deltaTime);
    this.mesh.position.copy(this.position);
    this.mesh.rotation.z += deltaTime * 25 * Math.sign(this.velocity.x);

    // Update hitbox position
    this.hitbox.box.x = this.position.x;
    this.hitbox.box.y = this.position.y;

    // Trail particles
    particles.emitProjectileTrail(this.position, this.colorHex);

    // Wall collision
    if (Math.abs(this.position.x) >= stageLimit) {
      this.isDead = true;
      particles.emitHitSpark(this.position, this.colorHex, 14, 5.0);
    }
  }

  public destroy(scene: THREE.Scene, particles: ParticleSystem) {
    this.isDead = true;
    particles.emitHitSpark(this.position, this.colorHex, 20, 6.0);
    scene.remove(this.mesh);
  }
}
