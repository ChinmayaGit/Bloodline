import * as THREE from 'three';

export class Stage {
  public group: THREE.Group;
  public flashLight: THREE.PointLight;
  public centerChair: THREE.Group | null = null;
  private dustPoints: THREE.Points | null = null;
  private sunBeams: THREE.Group | null = null;
  private spectatorGroup: THREE.Group | null = null;
  private animTime: number = 0;

  constructor(scene: THREE.Scene) {
    this.group = new THREE.Group();
    scene.add(this.group);

    // 1. Sunlit Urban Environment Lighting
    this.setupLighting(scene);

    // 2. Tiled Sidewalk Floor & Scattered Paper Debris
    this.buildFloor();

    // 3. Sun Disk & Volumetric God-Rays
    this.buildSunlightEffects();

    // 4. Vibrant "HYPER ZONE" & "JAVA JABBER" Storefronts
    this.buildCityStorefront();

    // 5. Bystanders & Spectators
    this.buildSpectators();

    // 6. Iconic Patio Chair outside the cafe
    this.buildIconicChair();

    // 7. Atmospheric Sun Motes
    this.buildAtmosphere();

    // 8. Dynamic impact flash
    this.flashLight = new THREE.PointLight(0xffecd0, 0, 24);
    this.flashLight.position.set(0, 3, 2);
    this.group.add(this.flashLight);
  }

  /**
   * Warm golden sunlight and atmospheric sky ambient lighting
   */
  private setupLighting(scene: THREE.Scene) {
    // Warm daylight sky ambient light
    const ambientLight = new THREE.AmbientLight(0x8da6c8, 1.7);
    scene.add(ambientLight);

    // Golden Sun Directional Light (angled from upper left, casting dramatic ground shadows)
    const sunLight = new THREE.DirectionalLight(0xffecd0, 3.8);
    sunLight.position.set(-8, 18, 7);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.camera.near = 1;
    sunLight.shadow.camera.far = 32;
    sunLight.shadow.camera.left = -16;
    sunLight.shadow.camera.right = 16;
    sunLight.shadow.camera.top = 10;
    sunLight.shadow.camera.bottom = -4;
    sunLight.shadow.bias = -0.001;
    scene.add(sunLight);

    // Cool blue/cyan rim light for anime character rim highlights
    const rimLight = new THREE.DirectionalLight(0x44aaff, 1.8);
    rimLight.position.set(6, 6, -8);
    scene.add(rimLight);

    // Warm bounce light from pavement
    const groundBounce = new THREE.DirectionalLight(0xffaa66, 0.8);
    groundBounce.position.set(0, -5, 4);
    scene.add(groundBounce);
  }

  /**
   * Tiled pavement sidewalk with scattered paper debris
   */
  private buildFloor() {
    // Generate high-res sidewalk tile texture procedurally
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;

    // Sidewalk paver tiles
    ctx.fillStyle = '#2c313d';
    ctx.fillRect(0, 0, 512, 512);

    // Tile grid lines
    ctx.strokeStyle = '#1e222b';
    ctx.lineWidth = 6;
    const tileSize = 64;
    for (let x = 0; x <= 512; x += tileSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 512);
      ctx.stroke();
    }
    for (let y = 0; y <= 512; y += tileSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(512, y);
      ctx.stroke();
    }

    // Subtle stone speckle texture
    for (let i = 0; i < 600; i++) {
      const sx = Math.random() * 512;
      const sy = Math.random() * 512;
      const gray = Math.floor(40 + Math.random() * 30);
      ctx.fillStyle = `rgba(${gray}, ${gray + 4}, ${gray + 10}, 0.25)`;
      ctx.fillRect(sx, sy, 2 + Math.random() * 4, 2 + Math.random() * 4);
    }

    const tileTexture = new THREE.CanvasTexture(canvas);
    tileTexture.wrapS = THREE.RepeatWrapping;
    tileTexture.wrapT = THREE.RepeatWrapping;
    tileTexture.repeat.set(6, 3);

    const floorGeo = new THREE.PlaneGeometry(38, 20);
    const floorMat = new THREE.MeshStandardMaterial({
      map: tileTexture,
      roughness: 0.45,
      metalness: 0.2,
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.position.y = 0;
    floorMesh.receiveShadow = true;
    this.group.add(floorMesh);

    // Scattered Paper Debris / Street Flyers (as seen in the screenshot!)
    const paperMat = new THREE.MeshStandardMaterial({
      color: 0xf5f2eb,
      roughness: 0.7,
      metalness: 0.05,
      side: THREE.DoubleSide,
    });
    const paperAltMat = new THREE.MeshStandardMaterial({
      color: 0xffd9aa,
      roughness: 0.7,
      metalness: 0.05,
      side: THREE.DoubleSide,
    });

    const paperGeo = new THREE.PlaneGeometry(0.35, 0.22);
    const paperPositions = [
      [-6.5, -0.4, 0.3],
      [-5.8, -0.8, -0.2],
      [-4.2, 0.8, 0.7],
      [-2.1, 0.2, -0.4],
      [-1.4, -0.6, 0.5],
      [1.8, -0.3, 0.2],
      [2.5, 0.6, -0.5],
      [4.2, -0.5, 0.8],
      [6.1, 0.3, -0.3],
      [7.5, -0.7, 0.4],
    ];

    paperPositions.forEach(([px, pz, rot], idx) => {
      const paper = new THREE.Mesh(paperGeo, idx % 2 === 0 ? paperMat : paperAltMat);
      paper.rotation.x = -Math.PI / 2;
      paper.rotation.z = rot;
      paper.position.set(px, 0.006 + idx * 0.001, pz);
      paper.receiveShadow = true;
      this.group.add(paper);
    });

    // Boundary Marker Line
    [-13.5, 13.5].forEach((xPos) => {
      const lineGeo = new THREE.PlaneGeometry(0.08, 14);
      const lineMat = new THREE.MeshBasicMaterial({ color: 0xffb033, transparent: true, opacity: 0.35 });
      const line = new THREE.Mesh(lineGeo, lineMat);
      line.rotation.x = -Math.PI / 2;
      line.position.set(xPos, 0.005, 0);
      this.group.add(line);
    });
  }

  /**
   * Sun Disk, Coronal Flare, and Volumetric Sun Rays
   */
  private buildSunlightEffects() {
    const sunGroup = new THREE.Group();

    // 1. Glowing Sun Disk in Upper Left Sky
    const sunDiskGeo = new THREE.CircleGeometry(2.4, 32);
    const sunDiskMat = new THREE.MeshBasicMaterial({
      color: 0xfffbe6,
      transparent: true,
      opacity: 0.95,
    });
    const sunDisk = new THREE.Mesh(sunDiskGeo, sunDiskMat);
    sunDisk.position.set(-8.5, 11.5, -7.5);
    sunGroup.add(sunDisk);

    // 2. Coronal Sun Bloom Halo
    const sunHaloGeo = new THREE.CircleGeometry(5.2, 32);
    const sunHaloMat = new THREE.MeshBasicMaterial({
      color: 0xffcc66,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const sunHalo = new THREE.Mesh(sunHaloGeo, sunHaloMat);
    sunHalo.position.set(-8.5, 11.5, -7.6);
    sunGroup.add(sunHalo);

    // 3. Volumetric Sun Rays (Angled light beams streaming from the sun)
    this.sunBeams = new THREE.Group();
    const beamGeo = new THREE.PlaneGeometry(3.2, 18);
    const beamMat = new THREE.MeshBasicMaterial({
      color: 0xfff0cc,
      transparent: true,
      opacity: 0.14,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    const beamAngles = [-0.42, -0.36, -0.28, -0.2];
    const beamXOffsets = [-8, -5.5, -3, 0];

    beamAngles.forEach((angle, idx) => {
      const beam = new THREE.Mesh(beamGeo, beamMat);
      beam.position.set(beamXOffsets[idx], 7, -2.5 + idx * 0.4);
      beam.rotation.z = angle;
      beam.rotation.y = 0.12;
      this.sunBeams!.add(beam);
    });

    sunGroup.add(this.sunBeams);
    this.group.add(sunGroup);
  }

  /**
   * Vibrant "HYPER ZONE" & "JAVA JABBER" Storefront Backdrop
   */
  private buildCityStorefront() {
    const cityGroup = new THREE.Group();
    cityGroup.position.set(0, 0, -6.5);

    // --- 1. Background Sky & Building Wall ---
    const skyWallGeo = new THREE.PlaneGeometry(40, 22);
    const skyWallMat = new THREE.MeshBasicMaterial({
      color: 0x486b96, // Bright daylight sky blue with warm atmospheric tint
    });
    const skyWall = new THREE.Mesh(skyWallGeo, skyWallMat);
    skyWall.position.set(0, 9, -1.0);
    cityGroup.add(skyWall);

    // Main Storefront Facade (Ground floor glass + Upper mezzanine)
    const facadeGeo = new THREE.BoxGeometry(38, 12, 0.4);
    const facadeMat = new THREE.MeshStandardMaterial({
      color: 0x222a38, // Modern urban storefront navy/slate
      roughness: 0.35,
      metalness: 0.4,
    });
    const facade = new THREE.Mesh(facadeGeo, facadeMat);
    facade.position.set(0, 6, 0);
    cityGroup.add(facade);

    // --- 2. Storefront Glass Window Panes ---
    const windowMat = new THREE.MeshStandardMaterial({
      color: 0x335577,
      roughness: 0.1,
      metalness: 0.8,
      transparent: true,
      opacity: 0.75,
    });

    // Left Shop Window (Hyper Zone Arcade / Lounge)
    const leftWindowGeo = new THREE.BoxGeometry(15, 5, 0.1);
    const leftWindow = new THREE.Mesh(leftWindowGeo, windowMat);
    leftWindow.position.set(-8.5, 3.2, 0.22);
    cityGroup.add(leftWindow);

    // Warm Interior Glow behind Left Window
    const leftGlowMat = new THREE.MeshBasicMaterial({
      color: 0xff66aa,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });
    const leftGlow = new THREE.Mesh(new THREE.PlaneGeometry(15, 5), leftGlowMat);
    leftGlow.position.set(-8.5, 3.2, 0.15);
    cityGroup.add(leftGlow);

    // Right Shop Window (Java Jabber Cafe)
    const rightWindowGeo = new THREE.BoxGeometry(16, 5, 0.1);
    const rightWindow = new THREE.Mesh(rightWindowGeo, windowMat);
    rightWindow.position.set(8.5, 3.2, 0.22);
    cityGroup.add(rightWindow);

    // Warm Interior Cafe Glow behind Right Window
    const rightGlowMat = new THREE.MeshBasicMaterial({
      color: 0xffaa44,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
    });
    const rightGlow = new THREE.Mesh(new THREE.PlaneGeometry(16, 5), rightGlowMat);
    rightGlow.position.set(8.5, 3.2, 0.15);
    cityGroup.add(rightGlow);

    // Window Mullions / Frames
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x111620, roughness: 0.4, metalness: 0.5 });
    [-15, -9, -3, 1, 8, 15].forEach((fx) => {
      const mullion = new THREE.Mesh(new THREE.BoxGeometry(0.18, 5.2, 0.25), frameMat);
      mullion.position.set(fx, 3.2, 0.25);
      cityGroup.add(mullion);
    });

    // --- 3. Mezzanine Catwalk / Balcony with Railings ---
    const catwalkGeo = new THREE.BoxGeometry(38, 0.35, 1.4);
    const catwalkMat = new THREE.MeshStandardMaterial({ color: 0x1a212e, roughness: 0.4, metalness: 0.6 });
    const catwalk = new THREE.Mesh(catwalkGeo, catwalkMat);
    catwalk.position.set(0, 6.0, 0.7);
    cityGroup.add(catwalk);

    // Metal Balcony Railings
    const railMat = new THREE.MeshStandardMaterial({ color: 0x3d4a60, roughness: 0.3, metalness: 0.7 });
    const topRail = new THREE.Mesh(new THREE.BoxGeometry(38, 0.08, 0.08), railMat);
    topRail.position.set(0, 7.1, 1.35);
    cityGroup.add(topRail);

    const midRail = new THREE.Mesh(new THREE.BoxGeometry(38, 0.06, 0.06), railMat);
    midRail.position.set(0, 6.55, 1.35);
    cityGroup.add(midRail);

    for (let rx = -18; rx <= 18; rx += 1.8) {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.1, 6), railMat);
      post.position.set(rx, 6.55, 1.35);
      cityGroup.add(post);
    }

    // --- 4. "HYPER ZONE" NEON LOGO SIGN (Left) ---
    const hzCanvas = document.createElement('canvas');
    hzCanvas.width = 1024;
    hzCanvas.height = 256;
    const hzCtx = hzCanvas.getContext('2d')!;

    // Draw multi-layer glowing neon "HYPER ZONE"
    hzCtx.font = 'italic 900 110px "Impact", "Arial Black", sans-serif';
    hzCtx.textAlign = 'center';
    hzCtx.textBaseline = 'middle';

    // Cyan / Magenta Outer Neon Glow
    hzCtx.shadowColor = '#00f0ff';
    hzCtx.shadowBlur = 32;
    hzCtx.strokeStyle = '#00f0ff';
    hzCtx.lineWidth = 14;
    hzCtx.strokeText('HYPER ZONE', 512, 128);

    hzCtx.shadowColor = '#ff3366';
    hzCtx.shadowBlur = 24;
    hzCtx.strokeStyle = '#ff3366';
    hzCtx.lineWidth = 8;
    hzCtx.strokeText('HYPER ZONE', 512, 128);

    // Warm Peach / Amber Core Text
    hzCtx.shadowColor = '#ffea00';
    hzCtx.shadowBlur = 16;
    hzCtx.fillStyle = '#fff4cc';
    hzCtx.fillText('HYPER ZONE', 512, 128);

    const hzTexture = new THREE.CanvasTexture(hzCanvas);
    const hzSignMat = new THREE.MeshBasicMaterial({
      map: hzTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
    const hzSign = new THREE.Mesh(new THREE.PlaneGeometry(9.6, 2.4), hzSignMat);
    hzSign.position.set(-7.5, 7.8, 0.3);
    cityGroup.add(hzSign);

    // Neon point light cast by HYPER ZONE
    const hzLight = new THREE.PointLight(0xff6644, 2.2, 10);
    hzLight.position.set(-7.5, 7.8, 1.2);
    cityGroup.add(hzLight);

    // --- 5. "JAVA JABBER" CAFE SIGN & TIGER MASCOT (Right) ---
    const jjCanvas = document.createElement('canvas');
    jjCanvas.width = 1024;
    jjCanvas.height = 512;
    const jjCtx = jjCanvas.getContext('2d')!;

    // Cafe Text: "JAVA JABBER"
    jjCtx.font = '900 88px "Impact", "Arial Black", sans-serif';
    jjCtx.textAlign = 'center';
    jjCtx.shadowColor = '#8833ff';
    jjCtx.shadowBlur = 25;
    jjCtx.fillStyle = '#5522aa';
    jjCtx.fillText('JAVA', 680, 100);
    jjCtx.fillText('JABBER', 680, 185);

    // Cute Tiger Cafe Mascot (as seen in screenshot!)
    const tx = 300;
    const ty = 220;

    // Tiger Ears
    jjCtx.fillStyle = '#ffaa22';
    jjCtx.beginPath();
    jjCtx.arc(tx - 65, ty - 65, 30, 0, Math.PI * 2);
    jjCtx.arc(tx + 65, ty - 65, 30, 0, Math.PI * 2);
    jjCtx.fill();

    jjCtx.fillStyle = '#ffeedd';
    jjCtx.beginPath();
    jjCtx.arc(tx - 65, ty - 65, 16, 0, Math.PI * 2);
    jjCtx.arc(tx + 65, ty - 65, 16, 0, Math.PI * 2);
    jjCtx.fill();

    // Tiger Head
    jjCtx.fillStyle = '#ffaa22';
    jjCtx.beginPath();
    jjCtx.ellipse(tx, ty, 90, 80, 0, 0, Math.PI * 2);
    jjCtx.fill();

    // Tiger Stripes
    jjCtx.strokeStyle = '#221100';
    jjCtx.lineWidth = 6;
    jjCtx.beginPath();
    jjCtx.moveTo(tx, ty - 70);
    jjCtx.lineTo(tx, ty - 40);
    jjCtx.moveTo(tx - 30, ty - 65);
    jjCtx.lineTo(tx - 15, ty - 45);
    jjCtx.moveTo(tx + 30, ty - 65);
    jjCtx.lineTo(tx + 15, ty - 45);
    jjCtx.stroke();

    // Tiger Snout & Cheeks
    jjCtx.fillStyle = '#fff4e6';
    jjCtx.beginPath();
    jjCtx.ellipse(tx, ty + 20, 50, 35, 0, 0, Math.PI * 2);
    jjCtx.fill();

    // Tiger Eyes & Happy Smile
    jjCtx.fillStyle = '#111122';
    jjCtx.beginPath();
    jjCtx.arc(tx - 35, ty - 5, 8, 0, Math.PI * 2);
    jjCtx.arc(tx + 35, ty - 5, 8, 0, Math.PI * 2);
    jjCtx.fill();

    jjCtx.beginPath();
    jjCtx.arc(tx, ty + 20, 18, 0.2, Math.PI - 0.2);
    jjCtx.stroke();

    // Cute Coffee Cup
    jjCtx.fillStyle = '#4488ff';
    jjCtx.fillRect(tx + 75, ty - 10, 45, 55);
    jjCtx.strokeStyle = '#ffffff';
    jjCtx.lineWidth = 4;
    jjCtx.strokeRect(tx + 75, ty - 10, 45, 55);

    const jjTexture = new THREE.CanvasTexture(jjCanvas);
    const jjSignMat = new THREE.MeshBasicMaterial({
      map: jjTexture,
      transparent: true,
      opacity: 0.9,
    });
    const jjSign = new THREE.Mesh(new THREE.PlaneGeometry(9.0, 4.5), jjSignMat);
    jjSign.position.set(7.5, 7.5, 0.3);
    cityGroup.add(jjSign);

    // --- 6. Potted Tropical Plants outside Storefront ---
    [-12.5, 12.5].forEach((px) => {
      const potGeo = new THREE.CylinderGeometry(0.35, 0.25, 0.65, 8);
      const potMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 });
      const pot = new THREE.Mesh(potGeo, potMat);
      pot.position.set(px, 0.325, 0.8);
      cityGroup.add(pot);

      // Green Leaves
      const leafMat = new THREE.MeshStandardMaterial({ color: 0x22aa44, roughness: 0.5 });
      for (let l = 0; l < 5; l++) {
        const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.9, 4), leafMat);
        leaf.position.set(px, 0.9, 0.8);
        leaf.rotation.set((Math.random() - 0.5) * 0.4, (l * Math.PI) / 2.5, 0.3);
        cityGroup.add(leaf);
      }
    });

    this.group.add(cityGroup);
  }

  /**
   * Animated Spectators & Bystanders behind the Storefront Windows
   */
  private buildSpectators() {
    this.spectatorGroup = new THREE.Group();
    this.spectatorGroup.position.set(0, 0, -6.1);

    const specColors = [0x3366cc, 0xff4488, 0x00ccaa, 0xffaa00, 0x7744bb];

    // Create 6 spectator silhouettes inside the shop watching the fight
    const specPositions = [-11, -9, -6, -4, 5, 10];

    specPositions.forEach((sx, idx) => {
      const person = new THREE.Group();
      person.position.set(sx, 1.2, 0);

      // Body / Jacket
      const bodyGeo = new THREE.CylinderGeometry(0.24, 0.28, 1.1, 6);
      const bodyMat = new THREE.MeshStandardMaterial({
        color: specColors[idx % specColors.length],
        roughness: 0.5,
      });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      person.add(body);

      // Head
      const headGeo = new THREE.SphereGeometry(0.2, 8, 8);
      const headMat = new THREE.MeshStandardMaterial({ color: 0xf5c39e, roughness: 0.4 });
      const head = new THREE.Mesh(headGeo, headMat);
      head.position.y = 0.75;
      person.add(head);

      // Cap / Hair
      const capGeo = new THREE.BoxGeometry(0.28, 0.1, 0.28);
      const capMat = new THREE.MeshBasicMaterial({ color: 0x111622 });
      const cap = new THREE.Mesh(capGeo, capMat);
      cap.position.set(0, 0.88, 0.05);
      person.add(cap);

      this.spectatorGroup!.add(person);
    });

    this.group.add(this.spectatorGroup);
  }

  /**
   * Iconic blue patio chair placed outside the cafe
   */
  private buildIconicChair() {
    const chair = new THREE.Group();
    chair.position.set(2.8, 0, -3.2);

    const chairMat = new THREE.MeshStandardMaterial({
      color: 0x0099cc, // Iconic plastic blue chair
      roughness: 0.35,
      metalness: 0.1,
    });

    const createPart = (geo: THREE.BufferGeometry) => {
      const mesh = new THREE.Mesh(geo, chairMat);
      mesh.castShadow = true;
      return mesh;
    };

    // Seat
    const seatGeo = new THREE.BoxGeometry(0.75, 0.06, 0.7);
    const seat = createPart(seatGeo);
    seat.position.y = 0.55;
    chair.add(seat);

    // Backrest
    const backGeo = new THREE.BoxGeometry(0.75, 0.8, 0.06);
    const back = createPart(backGeo);
    back.position.set(0, 0.95, -0.32);
    back.rotation.x = -0.08;
    chair.add(back);

    // Legs
    const legGeo = new THREE.CylinderGeometry(0.035, 0.03, 0.55, 8);
    const legPositions = [
      [-0.32, -0.3],
      [0.32, -0.3],
      [-0.32, 0.3],
      [0.32, 0.3],
    ];

    legPositions.forEach(([lx, lz]) => {
      const leg = createPart(legGeo);
      leg.position.set(lx, 0.275, lz);
      leg.rotation.z = lx < 0 ? 0.06 : -0.06;
      leg.rotation.x = lz < 0 ? -0.06 : 0.06;
      chair.add(leg);
    });

    this.group.add(chair);
    this.centerChair = chair;
  }

  /**
   * Floating sunlit atmospheric dust motes
   */
  private buildAtmosphere() {
    const count = 90;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 28;
      positions[i * 3 + 1] = Math.random() * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      color: 0xfff0bb, // Warm golden dust motes illuminated by sunlight
      size: 0.15,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });
    this.dustPoints = new THREE.Points(geo, mat);
    this.group.add(this.dustPoints);
  }

  public triggerImpactFlash(color: number = 0xffecd0, intensity: number = 5, position?: THREE.Vector3) {
    this.flashLight.color.setHex(color);
    this.flashLight.intensity = intensity;
    if (position) {
      this.flashLight.position.copy(position);
    }
  }

  public setDustVisible(visible: boolean) {
    if (this.dustPoints) {
      this.dustPoints.visible = visible;
    }
  }

  public update(deltaTime: number) {
    this.animTime += deltaTime;

    // Fade out impact flash smoothly
    if (this.flashLight.intensity > 0) {
      this.flashLight.intensity = Math.max(0, this.flashLight.intensity - deltaTime * 18);
    }

    // Drift atmospheric dust in sunlight
    if (this.dustPoints) {
      const posAttr = this.dustPoints.geometry.attributes.position;
      const arr = posAttr.array as Float32Array;
      for (let i = 0; i < arr.length; i += 3) {
        arr[i + 1] += deltaTime * 0.16;
        arr[i] += Math.sin(this.animTime + i) * 0.008;
        if (arr[i + 1] > 7.5) arr[i + 1] = 0.1;
      }
      posAttr.needsUpdate = true;
    }

    // Gentle sunbeam shimmer
    if (this.sunBeams) {
      this.sunBeams.children.forEach((child, idx) => {
        const mat = (child as THREE.Mesh).material as THREE.MeshBasicMaterial;
        mat.opacity = 0.12 + Math.sin(this.animTime * 1.5 + idx) * 0.03;
      });
    }

    // Cheering spectator bobbing
    if (this.spectatorGroup) {
      this.spectatorGroup.children.forEach((spec, idx) => {
        spec.position.y = 1.2 + Math.sin(this.animTime * 4 + idx * 1.2) * 0.05;
      });
    }
  }
}
