import * as THREE from 'three';

interface Particle {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  color: THREE.Color;
  size: number;
  alpha: number;
  life: number;
  maxLife: number;
  drag: number;
  gravity: number;
}

export class ParticleSystem {
  private particles: Particle[] = [];
  private maxParticles = 600;
  private pointsMesh: THREE.Points;
  private geometry: THREE.BufferGeometry;
  private positions: Float32Array;
  private colors: Float32Array;
  private sizes: Float32Array;

  // Expanding shockwave rings pool
  private rings: { mesh: THREE.Mesh; life: number; maxLife: number; scaleSpeed: number }[] = [];
  private group: THREE.Group;
  private hadParticlesLastFrame: boolean = false;

  constructor(scene: THREE.Scene) {
    this.group = new THREE.Group();
    scene.add(this.group);

    this.positions = new Float32Array(this.maxParticles * 3);
    this.colors = new Float32Array(this.maxParticles * 3);
    this.sizes = new Float32Array(this.maxParticles);

    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.geometry.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));
    this.geometry.setAttribute('size', new THREE.BufferAttribute(this.sizes, 1));

    // Custom Canvas Texture for sharp round glowing spark particle
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.2)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 0.35,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
    });

    this.pointsMesh = new THREE.Points(this.geometry, material);
    this.group.add(this.pointsMesh);
  }

  /** Spawn Hit Spark Burst on physical impact */
  public emitHitSpark(position: THREE.Vector3, colorHex: number, count: number = 24, speed: number = 6.0) {
    const baseColor = new THREE.Color(colorHex);

    for (let i = 0; i < count; i++) {
      if (this.particles.length >= this.maxParticles) break;

      const angle = Math.random() * Math.PI * 2;
      const elevation = (Math.random() - 0.5) * Math.PI * 0.8;
      const currentSpeed = speed * (0.4 + Math.random() * 0.8);

      const vel = new THREE.Vector3(
        Math.cos(angle) * Math.cos(elevation) * currentSpeed,
        Math.sin(elevation) * currentSpeed,
        Math.sin(angle) * Math.cos(elevation) * currentSpeed * 0.3 // Flatten slightly on Z plane
      );

      this.particles.push({
        position: position.clone().add(new THREE.Vector3((Math.random() - 0.5) * 0.2, (Math.random() - 0.5) * 0.2, 0)),
        velocity: vel,
        color: baseColor.clone().lerp(new THREE.Color(0xffffff), Math.random() * 0.5),
        size: 0.25 + Math.random() * 0.25,
        alpha: 1.0,
        life: 0,
        maxLife: 0.18 + Math.random() * 0.22,
        drag: 0.92,
        gravity: -4.0,
      });
    }

    // Also spawn a shockwave ring
    this.spawnShockwave(position, colorHex, 8.0);
  }

  /** Spawn Block Barrier Spark */
  public emitBlockSpark(position: THREE.Vector3) {
    this.emitHitSpark(position, 0x00d5ff, 16, 4.0);
  }

  /** Spawn Foot Dust on Dash / Landing */
  public emitDust(position: THREE.Vector3, count: number = 8) {
    const dustColor = new THREE.Color(0x778899);
    for (let i = 0; i < count; i++) {
      if (this.particles.length >= this.maxParticles) break;
      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 2.5,
        Math.random() * 1.5,
        (Math.random() - 0.5) * 0.8
      );

      this.particles.push({
        position: new THREE.Vector3(position.x, 0.05, position.z),
        velocity: vel,
        color: dustColor,
        size: 0.35 + Math.random() * 0.25,
        alpha: 0.6,
        life: 0,
        maxLife: 0.35,
        drag: 0.9,
        gravity: 0.5,
      });
    }
  }

  /** Spawn Projectile Trail Motes */
  public emitProjectileTrail(position: THREE.Vector3, colorHex: number) {
    if (this.particles.length >= this.maxParticles) return;
    const baseColor = new THREE.Color(colorHex);

    for (let i = 0; i < 3; i++) {
      this.particles.push({
        position: position.clone().add(new THREE.Vector3((Math.random() - 0.5) * 0.2, (Math.random() - 0.5) * 0.2, 0)),
        velocity: new THREE.Vector3((Math.random() - 0.5) * 0.5, (Math.random() - 0.5) * 0.5, 0),
        color: baseColor,
        size: 0.3,
        alpha: 0.9,
        life: 0,
        maxLife: 0.25,
        drag: 0.95,
        gravity: 0,
      });
    }
  }

  /** Spawn Expanding Shockwave Ring */
  public spawnShockwave(position: THREE.Vector3, colorHex: number, scaleSpeed: number = 7.0) {
    const ringGeo = new THREE.RingGeometry(0.1, 0.2, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: colorHex,
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.position.copy(position);
    this.group.add(ringMesh);

    this.rings.push({
      mesh: ringMesh,
      life: 0,
      maxLife: 0.22,
      scaleSpeed: scaleSpeed,
    });
  }

  /** Spawn dynamic anime katana slash crescent arc */
  public emitSlashArc(position: THREE.Vector3, colorHex: number, direction: number = 1) {
    const arcGeo = new THREE.RingGeometry(0.5, 0.75, 16, 1, 0, Math.PI * 0.75);
    const arcMat = new THREE.MeshBasicMaterial({
      color: colorHex,
      transparent: true,
      opacity: 0.95,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });
    const arcMesh = new THREE.Mesh(arcGeo, arcMat);
    arcMesh.position.copy(position);
    arcMesh.rotation.z = direction === 1 ? -0.4 : Math.PI + 0.4;
    this.group.add(arcMesh);

    this.rings.push({
      mesh: arcMesh,
      life: 0,
      maxLife: 0.16,
      scaleSpeed: 5.5,
    });
  }

  /**
   * Spawn radiant ground energy aura blades around feet (like Roxy in screenshot)
   */
  public emitGroundAura(position: THREE.Vector3, colorHex: number = 0x00f0ff) {
    const baseColor = new THREE.Color(colorHex);
    for (let i = 0; i < 6; i++) {
      if (this.particles.length >= this.maxParticles) break;
      const offsetX = (Math.random() - 0.5) * 1.1;
      this.particles.push({
        position: new THREE.Vector3(position.x + offsetX, 0.05, position.z + (Math.random() - 0.5) * 0.4),
        velocity: new THREE.Vector3((Math.random() - 0.5) * 0.3, 3.2 + Math.random() * 2.2, 0),
        color: baseColor.clone().lerp(new THREE.Color(0xffffff), Math.random() * 0.6),
        size: 0.42 + Math.random() * 0.25,
        alpha: 1.0,
        life: 0,
        maxLife: 0.28 + Math.random() * 0.15,
        drag: 0.94,
        gravity: 1.5, // Float upwards
      });
    }
  }

  /**
   * Spawn crystalline impact shatter particles (like Hiro's kick in screenshot)
   */
  public emitShatterBurst(position: THREE.Vector3, colorHex: number = 0xfff0cc, count: number = 26) {
    const baseColor = new THREE.Color(colorHex);
    for (let i = 0; i < count; i++) {
      if (this.particles.length >= this.maxParticles) break;
      const angle = Math.random() * Math.PI * 2;
      const speed = 5.0 + Math.random() * 5.5;
      this.particles.push({
        position: position.clone().add(new THREE.Vector3((Math.random() - 0.5) * 0.3, (Math.random() - 0.5) * 0.3, 0)),
        velocity: new THREE.Vector3(Math.cos(angle) * speed, Math.sin(angle) * speed, (Math.random() - 0.5) * 1.5),
        color: baseColor.clone().lerp(new THREE.Color(0xffffff), Math.random() * 0.7),
        size: 0.35 + Math.random() * 0.25,
        alpha: 1.0,
        life: 0,
        maxLife: 0.25 + Math.random() * 0.2,
        drag: 0.91,
        gravity: -5.0,
      });
    }
    this.spawnShockwave(position, colorHex, 9.0);
  }

  public update(deltaTime: number) {
    // Update Particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life += deltaTime;
      if (p.life >= p.maxLife) {
        this.particles.splice(i, 1);
        continue;
      }

      // Physics
      p.velocity.x *= p.drag;
      p.velocity.y += p.gravity * deltaTime;
      p.velocity.y *= p.drag;
      p.velocity.z *= p.drag;

      p.position.addScaledVector(p.velocity, deltaTime);

      // Floor bounce / clamp
      if (p.position.y < 0.05) {
        p.position.y = 0.05;
        p.velocity.y *= -0.3;
      }
    }

    // Update Buffer Geometry efficiently
    const count = this.particles.length;
    if (count > 0 || this.hadParticlesLastFrame) {
      for (let i = 0; i < count; i++) {
        const p = this.particles[i];
        const idx3 = i * 3;

        this.positions[idx3] = p.position.x;
        this.positions[idx3 + 1] = p.position.y;
        this.positions[idx3 + 2] = p.position.z;

        const progress = p.life / p.maxLife;
        const fade = 1 - progress;

        this.colors[idx3] = p.color.r * fade;
        this.colors[idx3 + 1] = p.color.g * fade;
        this.colors[idx3 + 2] = p.color.b * fade;

        this.sizes[i] = p.size * fade;
      }

      this.geometry.setDrawRange(0, count);
      this.geometry.attributes.position.needsUpdate = true;
      this.geometry.attributes.color.needsUpdate = true;
      this.geometry.attributes.size.needsUpdate = true;
      this.hadParticlesLastFrame = count > 0;
    }

    // Update Shockwave Rings
    for (let i = this.rings.length - 1; i >= 0; i--) {
      const r = this.rings[i];
      r.life += deltaTime;
      if (r.life >= r.maxLife) {
        this.group.remove(r.mesh);
        r.mesh.geometry.dispose();
        (r.mesh.material as THREE.Material).dispose();
        this.rings.splice(i, 1);
        continue;
      }

      const progress = r.life / r.maxLife;
      const currentScale = 1 + progress * r.scaleSpeed;
      r.mesh.scale.set(currentScale, currentScale, 1);
      (r.mesh.material as THREE.MeshBasicMaterial).opacity = (1 - progress) * 0.9;
    }
  }
}

