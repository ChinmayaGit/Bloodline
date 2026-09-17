import * as THREE from 'three';

export interface SkeletalRig {
  root: THREE.Group;
  pelvis: THREE.Group;
  torso: THREE.Group;
  chest: THREE.Group;
  head: THREE.Group;
  headbandTail?: THREE.Group;
  
  leftShoulder: THREE.Group;
  leftUpperArm: THREE.Group;
  leftForearm: THREE.Group;
  leftHand: THREE.Group;
  leftBlade?: THREE.Mesh | THREE.Group;

  rightShoulder: THREE.Group;
  rightUpperArm: THREE.Group;
  rightForearm: THREE.Group;
  rightHand: THREE.Group;
  rightBlade?: THREE.Mesh | THREE.Group;

  leftHip: THREE.Group;
  leftThigh: THREE.Group;
  leftShin: THREE.Group;
  leftFoot: THREE.Group;

  rightHip: THREE.Group;
  rightThigh: THREE.Group;
  rightShin: THREE.Group;
  rightFoot: THREE.Group;

  materials: THREE.Material[];
}

export class FighterMeshBuilder {
  private static createPart(geo: THREE.BufferGeometry, mat: THREE.Material): THREE.Mesh {
    const mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = true;
    mesh.receiveShadow = false;
    return mesh;
  }

  /**
   * Helper to create anime eyes on a face
   */
  private static addAnimeEyes(
    headGroup: THREE.Group,
    eyeColor: number = 0x221815,
    isFemale: boolean = false
  ) {
    const scleraMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const pupilMat = new THREE.MeshBasicMaterial({ color: eyeColor });
    const browMat = new THREE.MeshBasicMaterial({ color: 0x1a1512 });

    const eyeGeo = new THREE.PlaneGeometry(0.06, isFemale ? 0.055 : 0.045);
    const pupilGeo = new THREE.PlaneGeometry(0.035, isFemale ? 0.04 : 0.032);
    const browGeo = new THREE.BoxGeometry(0.08, 0.018, 0.015);

    // Left Eye (+Z in local rig space)
    const eyeL = new THREE.Mesh(eyeGeo, scleraMat);
    eyeL.position.set(0.185, 0.25, 0.065);
    eyeL.rotation.y = Math.PI / 2;

    const pupilL = new THREE.Mesh(pupilGeo, pupilMat);
    pupilL.position.set(0.187, 0.25, 0.065);
    pupilL.rotation.y = Math.PI / 2;

    const browL = new THREE.Mesh(browGeo, browMat);
    browL.position.set(0.185, 0.29, 0.065);
    browL.rotation.z = -0.12;

    // Right Eye (-Z in local rig space)
    const eyeR = new THREE.Mesh(eyeGeo, scleraMat);
    eyeR.position.set(0.185, 0.25, -0.065);
    eyeR.rotation.y = Math.PI / 2;

    const pupilR = new THREE.Mesh(pupilGeo, pupilMat);
    pupilR.position.set(0.187, 0.25, -0.065);
    pupilR.rotation.y = Math.PI / 2;

    const browR = new THREE.Mesh(browGeo, browMat);
    browR.position.set(0.185, 0.29, -0.065);
    browR.rotation.z = 0.12;

    headGroup.add(eyeL, pupilL, browL, eyeR, pupilR, browR);
  }

  /**
   * Build Stylized Anime Fighter: HIRO (The Martial Arts Striker)
   * Exact 1:1 match to the user's reference image:
   * - Backwards orange baseball cap with backward visor bill and forehead trim.
   * - Charcoal-brown spiky anime hair tufts bursting out beneath the front of the cap.
   * - Wide open smiling/shouting anime mouth with white teeth and dark red interior.
   * - Thick expressive anime eyebrows & bold eyes.
   * - Beige/oatmeal sleeveless muscle tank top.
   * - Open distressed dark slate-teal denim vest with frayed shoulder fringe edges.
   * - Bare muscular arms with low-poly definition.
   * - Heavy brawler knuckle guards: orange glove shell + 4 segmented grey knuckle plates.
   * - Orange hoodie/sweatshirt tied around waist with bulky central knot and two hanging knotted sleeves.
   * - Puffy, baggy dark slate-teal martial arts trousers with knee folds.
   * - Dark charcoal ankle leggings/wraps.
   * - Bulky mustard/ochre tan combat boots with thick folded collars.
   */
  public static buildBlaze(): SkeletalRig {
    // 1. Exact Color Palette from Reference Image
    const skinMat = new THREE.MeshStandardMaterial({
      color: 0xdca078, // Warm anime skin tone
      roughness: 0.45,
      metalness: 0.05,
      flatShading: true,
    });
    const capOrangeMat = new THREE.MeshStandardMaterial({
      color: 0xd8583f, // Coral red-orange cap & tied hoodie
      roughness: 0.5,
      metalness: 0.05,
      flatShading: true,
    });
    const hairMat = new THREE.MeshStandardMaterial({
      color: 0x28201c, // Dark charcoal-brown hair & brows
      roughness: 0.55,
      metalness: 0.05,
      flatShading: true,
    });
    const hairFacetMat = new THREE.MeshStandardMaterial({
      color: 0x443732, // Warm charcoal facet tone for polygonal hair highlights
      roughness: 0.45,
      metalness: 0.08,
      flatShading: true,
    });
    const beigeTankMat = new THREE.MeshStandardMaterial({
      color: 0xd5c6b0, // Beige / oatmeal muscle tank top
      roughness: 0.5,
      metalness: 0.05,
      flatShading: true,
    });
    const slateVestMat = new THREE.MeshStandardMaterial({
      color: 0x263a48, // Deep slate-teal distressed vest
      roughness: 0.45,
      metalness: 0.15,
      flatShading: true,
    });
    const slatePantsMat = new THREE.MeshStandardMaterial({
      color: 0x233745, // Baggy puffy slate-teal trousers
      roughness: 0.5,
      metalness: 0.1,
      flatShading: true,
    });
    const gloveShellMat = new THREE.MeshStandardMaterial({
      color: 0xd8583f, // Red-orange brawler glove shell
      roughness: 0.45,
      metalness: 0.1,
      flatShading: true,
    });
    const knuckleMat = new THREE.MeshStandardMaterial({
      color: 0x3e3a36, // Segmented gunmetal knuckle armor
      roughness: 0.4,
      metalness: 0.45,
      flatShading: true,
    });
    const ankleWrapMat = new THREE.MeshStandardMaterial({
      color: 0x25201b, // Dark charcoal ankle wraps
      roughness: 0.6,
      flatShading: true,
    });
    const bootTanMat = new THREE.MeshStandardMaterial({
      color: 0xa37a3b, // Ochre / mustard tan boots
      roughness: 0.5,
      metalness: 0.15,
      flatShading: true,
    });
    const bootCollarMat = new THREE.MeshStandardMaterial({
      color: 0xb58943, // Lighter tan folded boot collar
      roughness: 0.5,
      metalness: 0.15,
      flatShading: true,
    });
    const bootSoleMat = new THREE.MeshStandardMaterial({
      color: 0x282522, // Dark slate rubber sole
      roughness: 0.6,
      flatShading: true,
    });
    const bladeMat = new THREE.MeshBasicMaterial({
      color: 0xff4422, // Fiery orange/red energy katana
    });

    const rig = this.assembleHumanoidRig({
      skinMat,
      chestMat: beigeTankMat,
      midriffMat: beigeTankMat,
      pelvisMat: capOrangeMat,
      pantsMat: slatePantsMat,
      shoeMat: bootTanMat,
      soleMat: bootSoleMat,
      gloveMat: gloveShellMat,
      jointMat: skinMat,
      bladeMat,
      hasKatana: true,
      hasLeftBlade: false,
    });

    // ==========================================
    // A. HEAD: Backwards Cap, Hair Tufts & Open Mouth
    // ==========================================
    // 1. Backwards Orange Baseball Cap
    const capDome = this.createPart(new THREE.CylinderGeometry(0.235, 0.22, 0.16, 10), capOrangeMat);
    capDome.position.set(-0.02, 0.32, 0);
    rig.head.add(capDome);

    // Backwards-turned Visor Bill
    const capBill = this.createPart(new THREE.BoxGeometry(0.16, 0.028, 0.22), capOrangeMat);
    capBill.position.set(-0.16, 0.31, 0);
    capBill.rotation.set(0, 0, -0.15);
    rig.head.add(capBill);

    // Front forehead headband / trim of cap
    const capBand = this.createPart(new THREE.CylinderGeometry(0.235, 0.23, 0.05, 12), capOrangeMat);
    capBand.position.y = 0.28;
    rig.head.add(capBand);

    // 2. Sculpted Chunky Polygonal Hair Cluster (1:1 Reference Match)
    // Central faceted low-poly volume anchoring the hair mass
    const hairCore = this.createPart(new THREE.DodecahedronGeometry(0.12, 0), hairMat);
    hairCore.scale.set(1.15, 1.25, 0.95);
    hairCore.position.set(0.12, 0.34, 0.0);
    rig.head.add(hairCore);

    // Chunky 4-sided faceted spikes forming the towering anime crest & brow tufts
    const polyHairClusters = [
      // --- Top High Crest Spikes (Rising above cap rim) ---
      // Primary center-top peak (tall, faceted, forward-upward)
      { geo: new THREE.ConeGeometry(0.10, 0.28, 4), pos: [0.13, 0.40, 0.01], rot: [-0.05, 0.15, -0.32], mat: hairFacetMat, scale: [1.1, 1.0, 0.9] },
      // Left crown peak (flaring upward-outward)
      { geo: new THREE.ConeGeometry(0.085, 0.25, 4), pos: [0.11, 0.39, 0.08], rot: [0.35, 0.1, -0.32], mat: hairMat, scale: [1.0, 1.0, 0.85] },
      // Right crown peak (flaring upward-outward)
      { geo: new THREE.ConeGeometry(0.08, 0.24, 4), pos: [0.11, 0.38, -0.07], rot: [-0.35, -0.1, -0.32], mat: hairMat, scale: [1.0, 1.0, 0.85] },
      // Rear/upper transition wedge (connects dome to crest)
      { geo: new THREE.ConeGeometry(0.075, 0.22, 4), pos: [0.06, 0.42, 0.02], rot: [-0.05, 0, -0.15], mat: hairFacetMat, scale: [1.0, 0.9, 1.0] },

      // --- Forward Brow / Forehead Tufts (Bursting over cap band towards brow) ---
      // Center-low forward wedge (prominent forward facet right above bridge of nose)
      { geo: new THREE.ConeGeometry(0.09, 0.24, 4), pos: [0.18, 0.32, 0.01], rot: [0.02, 0, -1.68], mat: hairFacetMat, scale: [1.15, 1.0, 0.85] },
      // Left brow wedge (curving over left eyebrow)
      { geo: new THREE.ConeGeometry(0.08, 0.21, 4), pos: [0.17, 0.31, 0.08], rot: [0.28, 0, -1.60], mat: hairMat, scale: [1.0, 1.0, 0.9] },
      // Right brow wedge (curving over right eyebrow)
      { geo: new THREE.ConeGeometry(0.08, 0.21, 4), pos: [0.17, 0.31, -0.08], rot: [-0.28, 0, -1.60], mat: hairMat, scale: [1.0, 1.0, 0.9] },

      // --- Behind-The-Ear Locks (Signature lock visible in reference cutout!) ---
      // Behind left ear (protruding down-back)
      { geo: new THREE.ConeGeometry(0.065, 0.20, 4), pos: [-0.06, 0.23, 0.19], rot: [0.35, 0, 2.2], mat: hairMat, scale: [1.0, 1.0, 0.8] },
      // Behind right ear (protruding down-back)
      { geo: new THREE.ConeGeometry(0.065, 0.20, 4), pos: [-0.06, 0.23, -0.19], rot: [-0.35, 0, 2.2], mat: hairMat, scale: [1.0, 1.0, 0.8] },

      // --- Sideburn Locks (In front of ears) ---
      // Left sideburn
      { geo: new THREE.ConeGeometry(0.05, 0.16, 4), pos: [0.05, 0.20, 0.19], rot: [0.1, 0, 3.0], mat: hairFacetMat, scale: [1.0, 1.0, 0.8] },
      // Right sideburn
      { geo: new THREE.ConeGeometry(0.05, 0.16, 4), pos: [0.05, 0.20, -0.19], rot: [-0.1, 0, 3.0], mat: hairFacetMat, scale: [1.0, 1.0, 0.8] },

      // --- Nape Locks (Under backwards visor bill) ---
      // Left nape tuft
      { geo: new THREE.ConeGeometry(0.06, 0.18, 4), pos: [-0.16, 0.22, 0.06], rot: [0.15, 0, 2.8], mat: hairMat, scale: [1.0, 1.0, 0.85] },
      // Right nape tuft
      { geo: new THREE.ConeGeometry(0.06, 0.18, 4), pos: [-0.16, 0.22, -0.06], rot: [-0.15, 0, 2.8], mat: hairMat, scale: [1.0, 1.0, 0.85] },
    ];

    polyHairClusters.forEach((h) => {
      const lock = this.createPart(h.geo, h.mat);
      lock.position.set(h.pos[0], h.pos[1], h.pos[2]);
      lock.rotation.set(h.rot[0], h.rot[1], h.rot[2]);
      if (h.scale) {
        lock.scale.set(h.scale[0], h.scale[1], h.scale[2]);
      }
      rig.head.add(lock);
    });

    // 3. Thick Anime Eyebrows & Eyes
    this.addAnimeEyes(rig.head, 0x221815, false);

    // 4. Wide Open Smiling / Shouting Mouth (Signature Hiro Expression!)
    const mouthMat = new THREE.MeshBasicMaterial({ color: 0x7a1818 });
    const teethMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const mouthCavity = new THREE.Mesh(new THREE.PlaneGeometry(0.08, 0.05), mouthMat);
    mouthCavity.position.set(0.186, 0.15, 0);
    mouthCavity.rotation.y = Math.PI / 2;

    const teethUpper = new THREE.Mesh(new THREE.PlaneGeometry(0.07, 0.016), teethMat);
    teethUpper.position.set(0.187, 0.167, 0);
    teethUpper.rotation.y = Math.PI / 2;
    rig.head.add(mouthCavity, teethUpper);

    // ==========================================
    // B. CHEST: Open Distressed Slate Denim Vest
    // ==========================================
    // Left Vest Panel
    const vestL = this.createPart(new THREE.BoxGeometry(0.14, 0.32, 0.09), slateVestMat);
    vestL.position.set(0.07, 0.18, 0.15);
    vestL.rotation.set(0, 0.15, -0.08);

    // Right Vest Panel
    const vestR = this.createPart(new THREE.BoxGeometry(0.14, 0.32, 0.09), slateVestMat);
    vestR.position.set(0.07, 0.18, -0.15);
    vestR.rotation.set(0, -0.15, -0.08);

    // Back Vest Panel
    const vestBack = this.createPart(new THREE.BoxGeometry(0.09, 0.34, 0.32), slateVestMat);
    vestBack.position.set(-0.11, 0.18, 0);
    rig.chest.add(vestL, vestR, vestBack);

    // Frayed / Distressed Shoulder Seam Frills
    const frillGeo = new THREE.ConeGeometry(0.035, 0.08, 4);
    for (let f = -1; f <= 1; f++) {
      const frillL = this.createPart(frillGeo, slateVestMat);
      frillL.position.set(0, 0.33, 0.18 + f * 0.05);
      frillL.rotation.set(0, 0, Math.PI / 2);

      const frillR = this.createPart(frillGeo, slateVestMat);
      frillR.position.set(0, 0.33, -0.18 - f * 0.05);
      frillR.rotation.set(0, 0, -Math.PI / 2);
      rig.chest.add(frillL, frillR);
    }

    // ==========================================
    // C. HANDS: Padded Brawler Knuckle Guards
    // ==========================================
    const knucklePadGeo = new THREE.BoxGeometry(0.035, 0.04, 0.024);
    [-0.035, -0.012, 0.012, 0.035].forEach((kOffset) => {
      // Left Hand Knuckle Armor
      const kL = this.createPart(knucklePadGeo, knuckleMat);
      kL.position.set(0.055, 0.01, kOffset);
      rig.leftHand.add(kL);

      // Right Hand Knuckle Armor
      const kR = this.createPart(knucklePadGeo, knuckleMat);
      kR.position.set(0.055, 0.01, kOffset);
      rig.rightHand.add(kR);
    });

    // ==========================================
    // D. WAIST: Orange Tied Hoodie with Knotted Sleeves!
    // ==========================================
    // Puffy fabric bundle wrapping around the hips
    const hoodieBundle = this.createPart(new THREE.CylinderGeometry(0.22, 0.20, 0.16, 8), capOrangeMat);
    hoodieBundle.position.y = 0.04;
    rig.pelvis.add(hoodieBundle);

    // Central Tied Knot in front
    const knotMesh = this.createPart(new THREE.SphereGeometry(0.095, 8, 8), capOrangeMat);
    knotMesh.position.set(0.16, 0.02, 0);
    rig.pelvis.add(knotMesh);

    // Left Hanging Knotted Sleeve
    const sleeveGeo = new THREE.CylinderGeometry(0.065, 0.05, 0.35, 6);
    const sleeveL = this.createPart(sleeveGeo, capOrangeMat);
    sleeveL.position.set(0.14, -0.16, 0.08);
    sleeveL.rotation.set(0.18, 0, -0.22);

    const cuffL = this.createPart(new THREE.CylinderGeometry(0.055, 0.055, 0.04, 6), capOrangeMat);
    cuffL.position.y = -0.18;
    sleeveL.add(cuffL);
    rig.pelvis.add(sleeveL);

    // Right Hanging Knotted Sleeve
    const sleeveR = this.createPart(sleeveGeo, capOrangeMat);
    sleeveR.position.set(0.14, -0.16, -0.08);
    sleeveR.rotation.set(-0.18, 0, -0.22);

    const cuffR = this.createPart(new THREE.CylinderGeometry(0.055, 0.055, 0.04, 6), capOrangeMat);
    cuffR.position.y = -0.18;
    sleeveR.add(cuffR);
    rig.pelvis.add(sleeveR);

    // Rear Hoodie Flap
    const rearFlap = this.createPart(new THREE.BoxGeometry(0.08, 0.22, 0.28), capOrangeMat);
    rearFlap.position.set(-0.15, -0.05, 0);
    rig.pelvis.add(rearFlap);

    // ==========================================
    // E. LEGS & BOOTS: Dark Ankle Wraps & Bulky Folded Boots
    // ==========================================
    // Dark Ankle Wraps above the boots
    const wrapGeo = new THREE.CylinderGeometry(0.105, 0.10, 0.1, 8);
    const wrapL = this.createPart(wrapGeo, ankleWrapMat);
    wrapL.position.y = -0.4;
    rig.leftShin.add(wrapL);

    const wrapR = this.createPart(wrapGeo, ankleWrapMat);
    wrapR.position.y = -0.4;
    rig.rightShin.add(wrapR);

    // Thick Folded Boot Collars
    const collarGeo = new THREE.CylinderGeometry(0.135, 0.115, 0.09, 8);
    const bCollarL = this.createPart(collarGeo, bootCollarMat);
    bCollarL.position.y = -0.44;
    rig.leftShin.add(bCollarL);

    const bCollarR = this.createPart(collarGeo, bootCollarMat);
    bCollarR.position.y = -0.44;
    rig.rightShin.add(bCollarR);

    return rig;
  }

  /**
   * Build Stylized Anime Fighter: ROXY (The Street Brawler)
   * Matching the right character from the reference image:
   * - Warm anime skin, dark brawler cap / beanie with red bandana.
   * - Bright yellow cropped tank top, dark open cropped vest.
   * - Baggy bright vermilion red pants with black belt.
   * - Crisp white high-top sneakers.
   * - Black fingerless brawler gloves.
   */
  public static buildCypher(): SkeletalRig {
    const skinMat = new THREE.MeshStandardMaterial({
      color: 0xf8ceb2, // Warm female anime skin
      roughness: 0.45,
      metalness: 0.05,
    });
    const yellowTopMat = new THREE.MeshStandardMaterial({
      color: 0xffcc00, // Bright yellow cropped tank top from image
      roughness: 0.4,
      metalness: 0.1,
    });
    const darkVestMat = new THREE.MeshStandardMaterial({
      color: 0x1a1d28, // Dark open cropped vest/jacket from image
      roughness: 0.45,
      metalness: 0.25,
    });
    const redPantsMat = new THREE.MeshStandardMaterial({
      color: 0xee2e2e, // Baggy bright vermilion red sweatpants from image
      roughness: 0.45,
      metalness: 0.1,
    });
    const whiteShoeMat = new THREE.MeshStandardMaterial({
      color: 0xf8f8fc, // Crisp white high-top sneakers from image
      roughness: 0.35,
      metalness: 0.1,
    });
    const soleMat = new THREE.MeshStandardMaterial({
      color: 0x8892a0, // Grey sneaker sole accents
      roughness: 0.5,
      metalness: 0.1,
    });
    const beltMat = new THREE.MeshStandardMaterial({
      color: 0x14161f, // Black utility belt
      roughness: 0.5,
      metalness: 0.2,
    });
    const gloveMat = new THREE.MeshStandardMaterial({
      color: 0x14161f, // Black fingerless brawler gloves
      roughness: 0.5,
      metalness: 0.2,
    });
    const bladeMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff, // High-frequency cyan plasma katana
      transparent: true,
      opacity: 0.95,
    });

    const rig = this.assembleHumanoidRig({
      skinMat,
      chestMat: yellowTopMat,
      midriffMat: skinMat, // Exposed midriff below crop top!
      pelvisMat: beltMat,
      pantsMat: redPantsMat,
      shoeMat: whiteShoeMat,
      soleMat,
      gloveMat,
      jointMat: skinMat,
      bladeMat,
      hasKatana: true,
      hasLeftBlade: false,
    });

    // 1. Dark Open Cropped Vest over the yellow top
    const vestWingGeo = new THREE.BoxGeometry(0.12, 0.28, 0.08);
    const vestL = this.createPart(vestWingGeo, darkVestMat);
    vestL.position.set(0.06, 0.18, 0.14);
    vestL.rotation.set(0, 0.15, -0.1);
    const vestR = this.createPart(vestWingGeo, darkVestMat);
    vestR.position.set(0.06, 0.18, -0.14);
    vestR.rotation.set(0, -0.15, -0.1);
    const vestBack = this.createPart(new THREE.BoxGeometry(0.08, 0.3, 0.3), darkVestMat);
    vestBack.position.set(-0.11, 0.18, 0);
    rig.chest.add(vestL, vestR, vestBack);

    // 2. Dark Brawler Cap / Beanie with Red Bandana
    const capMat = new THREE.MeshStandardMaterial({ color: 0x1a1d28, roughness: 0.5 });
    const redBandanaMat = new THREE.MeshStandardMaterial({ color: 0xe6203a, roughness: 0.4 });

    // Red bandana band around brow
    const bandana = this.createPart(new THREE.CylinderGeometry(0.23, 0.225, 0.05, 12), redBandanaMat);
    bandana.position.y = 0.27;
    rig.head.add(bandana);

    // Cap crown
    const capCrown = this.createPart(new THREE.CylinderGeometry(0.24, 0.235, 0.14, 12), capMat);
    capCrown.position.y = 0.35;
    rig.head.add(capCrown);

    // Cap Visor Bill (turned slightly forward-side)
    const capBill = this.createPart(new THREE.BoxGeometry(0.16, 0.03, 0.22), capMat);
    capBill.position.set(0.16, 0.31, 0);
    capBill.rotation.set(0, 0, -0.2);
    rig.head.add(capBill);

    // Auburn / brown polygonal hair fringe, cheek locks, and faceted ponytail bun
    const hairMat = new THREE.MeshStandardMaterial({
      color: 0x5e2c1a,
      roughness: 0.5,
      metalness: 0.05,
      flatShading: true,
    });
    const hairFacetMat = new THREE.MeshStandardMaterial({
      color: 0x783b22,
      roughness: 0.45,
      metalness: 0.05,
      flatShading: true,
    });

    // Faceted low-poly bun at back
    const hairBun = this.createPart(new THREE.DodecahedronGeometry(0.11, 0), hairMat);
    hairBun.position.set(-0.20, 0.26, 0);
    rig.head.add(hairBun);

    // Cascading polygonal ponytail plumes
    const ponyPlume1 = this.createPart(new THREE.ConeGeometry(0.075, 0.24, 4), hairFacetMat);
    ponyPlume1.position.set(-0.27, 0.21, 0);
    ponyPlume1.rotation.set(0, 0, 1.1);
    const ponyPlume2 = this.createPart(new THREE.ConeGeometry(0.06, 0.20, 4), hairMat);
    ponyPlume2.position.set(-0.26, 0.16, 0.04);
    ponyPlume2.rotation.set(0.2, 0, 1.3);
    rig.head.add(ponyPlume1, ponyPlume2);

    // Polygonal bangs & cheek locks framing the face beneath visor
    const roxyHairLocks = [
      { geo: new THREE.ConeGeometry(0.07, 0.20, 4), pos: [0.18, 0.29, 0.01], rot: [0, 0, -1.65], mat: hairFacetMat },
      { geo: new THREE.ConeGeometry(0.065, 0.18, 4), pos: [0.17, 0.29, 0.07], rot: [0.25, 0, -1.55], mat: hairMat },
      { geo: new THREE.ConeGeometry(0.065, 0.18, 4), pos: [0.17, 0.29, -0.07], rot: [-0.25, 0, -1.55], mat: hairMat },
      { geo: new THREE.ConeGeometry(0.055, 0.24, 4), pos: [0.07, 0.18, 0.18], rot: [0.1, 0, 3.0], mat: hairFacetMat },
      { geo: new THREE.ConeGeometry(0.055, 0.24, 4), pos: [0.07, 0.18, -0.18], rot: [-0.1, 0, 3.0], mat: hairFacetMat },
    ];
    roxyHairLocks.forEach((l) => {
      const lock = this.createPart(l.geo, l.mat);
      lock.position.set(l.pos[0], l.pos[1], l.pos[2]);
      lock.rotation.set(l.rot[0], l.rot[1], l.rot[2]);
      rig.head.add(lock);
    });

    // Anime Eyes for Roxy (expressive female anime eyes)
    this.addAnimeEyes(rig.head, 0x3d2618, true);

    // Hanging belt buckle strap on waist
    const beltStrap = this.createPart(new THREE.BoxGeometry(0.04, 0.24, 0.03), beltMat);
    beltStrap.position.set(0.12, -0.06, 0.06);
    beltStrap.rotation.z = 0.15;
    rig.pelvis.add(beltStrap);

    return rig;
  }

  /**
   * Build Stylized Anime Fighter: SHADOW (The Phantom Ninja)
   */
  public static buildShadow(): SkeletalRig {
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xf0c098, roughness: 0.45 });
    const tunicMat = new THREE.MeshStandardMaterial({ color: 0x111116, roughness: 0.6 });
    const sashMat = new THREE.MeshStandardMaterial({ color: 0x2b040c, roughness: 0.45 });
    const pantsMat = new THREE.MeshStandardMaterial({ color: 0x0c0c10, roughness: 0.55 });
    const shoeMat = new THREE.MeshStandardMaterial({ color: 0x15151c, roughness: 0.5 });
    const glowMat = new THREE.MeshBasicMaterial({ color: 0xff002b });
    const bladeMat = new THREE.MeshBasicMaterial({ color: 0xff0033, transparent: true, opacity: 0.95 });

    const rig = this.assembleHumanoidRig({
      skinMat,
      chestMat: tunicMat,
      midriffMat: tunicMat,
      pelvisMat: sashMat,
      pantsMat,
      shoeMat,
      soleMat: sashMat,
      gloveMat: tunicMat,
      jointMat: tunicMat,
      bladeMat,
      hasKatana: true,
      hasLeftBlade: true,
      weaponType: 'DUAL_DAGGERS',
    });

    // Stealth ninja cowl with glowing ruby slit visor
    const cowl = this.createPart(new THREE.CylinderGeometry(0.24, 0.25, 0.26, 8), tunicMat);
    cowl.position.set(-0.02, 0.3, 0);
    rig.head.add(cowl);

    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.035, 0.23), glowMat);
    visor.position.set(0.13, 0.26, 0);
    rig.head.add(visor);

    // Billowing crimson ninja scarf
    const tailGroup = new THREE.Group();
    tailGroup.position.set(-0.16, 0.24, 0);
    const s1 = this.createPart(new THREE.BoxGeometry(0.42, 0.06, 0.02), sashMat);
    s1.position.set(-0.2, -0.02, 0.03);
    s1.rotation.set(0.1, 0, 0.28);
    const s2 = this.createPart(new THREE.BoxGeometry(0.36, 0.05, 0.02), sashMat);
    s2.position.set(-0.18, -0.06, -0.03);
    s2.rotation.set(-0.1, 0, 0.45);
    tailGroup.add(s1, s2);
    rig.head.add(tailGroup);
    rig.headbandTail = tailGroup;

    return rig;
  }

  /**
   * Build Stylized Anime Fighter: VOLT (The Thunder Brawler)
   */
  public static buildVolt(): SkeletalRig {
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xf5be96, roughness: 0.45 });
    const jacketMat = new THREE.MeshStandardMaterial({ color: 0xffd000, roughness: 0.3, metalness: 0.4 });
    const pantsMat = new THREE.MeshStandardMaterial({ color: 0x221a0a, roughness: 0.5 });
    const shoeMat = new THREE.MeshStandardMaterial({ color: 0x332508, roughness: 0.4 });
    const glowMat = new THREE.MeshBasicMaterial({ color: 0xffff33 });
    const bladeMat = new THREE.MeshBasicMaterial({ color: 0xffea00, transparent: true, opacity: 0.95 });

    const rig = this.assembleHumanoidRig({
      skinMat,
      chestMat: jacketMat,
      midriffMat: jacketMat,
      pelvisMat: jacketMat,
      pantsMat,
      shoeMat,
      soleMat: glowMat,
      gloveMat: jacketMat,
      jointMat: skinMat,
      bladeMat,
      hasKatana: true,
      hasLeftBlade: false,
    });

    // Lightning crown & electric ocular slits
    const crownGroup = new THREE.Group();
    crownGroup.position.set(0, 0.44, 0);
    const hornGeo = new THREE.ConeGeometry(0.06, 0.24, 4);
    const h1 = this.createPart(hornGeo, glowMat);
    h1.position.set(0.04, 0.1, 0.08);
    h1.rotation.set(0.3, 0, 0.2);
    const h2 = this.createPart(hornGeo, glowMat);
    h2.position.set(0.04, 0.1, -0.08);
    h2.rotation.set(-0.3, 0, 0.2);
    crownGroup.add(h1, h2);
    rig.head.add(crownGroup);

    // Electric wrist toruses
    const ringGeo = new THREE.TorusGeometry(0.07, 0.018, 6, 12);
    const ringL = new THREE.Mesh(ringGeo, glowMat);
    ringL.rotation.x = Math.PI / 2;
    rig.leftHand.add(ringL);
    const ringR = new THREE.Mesh(ringGeo, glowMat);
    ringR.rotation.x = Math.PI / 2;
    rig.rightHand.add(ringR);

    this.addAnimeEyes(rig.head, 0xffea00, false);
    return rig;
  }

  /**
   * Build Stylized Anime Fighter: JIN (The Hooded Grandmaster)
   * Exact 1:1 match to the user's Sketchfab 3D model (Low-poly Fighter by ShizuF):
   * - Pointed white cowl/hood draping over head and shoulders.
   * - Jet-black polygonal bangs poking out over the brow.
   * - Deep open V-neck white karate gi showing muscular chest.
   * - Frayed cloth teeth/frills on the shoulder armholes.
   * - Thick black obi belt with two long hanging cloth tails.
   * - Chunky steel-blue / slate forearm gauntlets and dark brown hand wraps.
   * - Baggy white karate gi pants.
   * - Banded light blue-grey martial calf wraps.
   * - Dark brown leather strap sandals with open toes.
   */
  public static buildJin(): SkeletalRig {
    // 1. Color Palette matching Sketchfab Model
    const skinMat = new THREE.MeshStandardMaterial({
      color: 0xe59f7f, // Tan muscular skin
      roughness: 0.45,
      metalness: 0.05,
      flatShading: true,
    });
    const whiteGiMat = new THREE.MeshStandardMaterial({
      color: 0xe4ecf3, // White-grey karate gi cloth
      roughness: 0.55,
      metalness: 0.05,
      flatShading: true,
    });
    const whiteHoodMat = new THREE.MeshStandardMaterial({
      color: 0xe8edf2, // White hooded cowl
      roughness: 0.55,
      metalness: 0.05,
      flatShading: true,
    });
    const blackBeltMat = new THREE.MeshStandardMaterial({
      color: 0x20262d, // Dark charcoal-black obi belt
      roughness: 0.6,
      flatShading: true,
    });
    const gauntletMat = new THREE.MeshStandardMaterial({
      color: 0x485563, // Chunky steel-blue forearm gauntlets
      roughness: 0.4,
      metalness: 0.25,
      flatShading: true,
    });
    const gloveMat = new THREE.MeshStandardMaterial({
      color: 0x3d2b20, // Dark brown fingerless combat wraps
      roughness: 0.6,
      flatShading: true,
    });
    const shinWrapMat = new THREE.MeshStandardMaterial({
      color: 0x8da0ad, // Light blue-grey martial bandage wraps
      roughness: 0.6,
      flatShading: true,
    });
    const sandalMat = new THREE.MeshStandardMaterial({
      color: 0x452f22, // Dark brown leather sandals
      roughness: 0.55,
      flatShading: true,
    });
    const hairMat = new THREE.MeshStandardMaterial({
      color: 0x18181a, // Jet-black polygonal hair bangs
      roughness: 0.55,
      flatShading: true,
    });
    const kiAuraMat = new THREE.MeshBasicMaterial({
      color: 0xd8eeff, // Radiant white-cyan spiritual energy
      transparent: true,
      opacity: 0.85,
    });

    const rig = this.assembleHumanoidRig({
      skinMat,
      chestMat: skinMat, // Bare chest under V-neck gi
      midriffMat: skinMat,
      pelvisMat: blackBeltMat,
      pantsMat: whiteGiMat,
      shoeMat: sandalMat,
      soleMat: sandalMat,
      gloveMat,
      jointMat: skinMat,
      bladeMat: kiAuraMat,
      hasKatana: false,
      hasLeftBlade: false,
      weaponType: 'FISTS',
    });

    // ==========================================
    // A. HEAD: White Pointed Hood & Black Hair Bangs
    // ==========================================
    // 1. Pointed White Hood / Cowl
    // Upper hood peak (pointed martial hood)
    const hoodTop = this.createPart(new THREE.ConeGeometry(0.24, 0.36, 5), whiteHoodMat);
    hoodTop.position.set(-0.02, 0.38, 0);
    hoodTop.rotation.set(-0.1, 0, -0.05);
    rig.head.add(hoodTop);

    // Hood side & back shrouds (curving around head with open face front)
    const hoodShroud = this.createPart(new THREE.CylinderGeometry(0.24, 0.28, 0.24, 7), whiteHoodMat);
    hoodShroud.position.set(-0.04, 0.28, 0);
    rig.head.add(hoodShroud);

    // Hood neck mantle / collar drape at base of neck
    const hoodMantle = this.createPart(new THREE.CylinderGeometry(0.27, 0.33, 0.14, 6), whiteHoodMat);
    hoodMantle.position.set(-0.03, 0.08, 0);
    rig.head.add(hoodMantle);

    // 2. Jet-Black Polygonal Hair Bangs poking out beneath front rim of hood
    const bangData = [
      { geo: new THREE.ConeGeometry(0.065, 0.20, 4), pos: [0.18, 0.30, 0.01], rot: [0, 0, -1.65] },
      { geo: new THREE.ConeGeometry(0.055, 0.18, 4), pos: [0.17, 0.30, 0.065], rot: [0.22, 0, -1.55] },
      { geo: new THREE.ConeGeometry(0.055, 0.18, 4), pos: [0.17, 0.30, -0.065], rot: [-0.22, 0, -1.55] },
      { geo: new THREE.ConeGeometry(0.045, 0.15, 4), pos: [0.15, 0.29, 0.11], rot: [0.35, 0, -1.45] },
      { geo: new THREE.ConeGeometry(0.045, 0.15, 4), pos: [0.15, 0.29, -0.11], rot: [-0.35, 0, -1.45] },
    ];
    bangData.forEach((b) => {
      const lock = this.createPart(b.geo, hairMat);
      lock.position.set(b.pos[0], b.pos[1], b.pos[2]);
      lock.rotation.set(b.rot[0], b.rot[1], b.rot[2]);
      rig.head.add(lock);
    });

    // 3. Determined Anime Eyes
    this.addAnimeEyes(rig.head, 0x1c242c, false);

    // ==========================================
    // B. CHEST: Deep Open V-Neck White Gi & Frayed Armhole Frills
    // ==========================================
    // Left Gi Lapel Panel
    const giL = this.createPart(new THREE.BoxGeometry(0.12, 0.36, 0.08), whiteGiMat);
    giL.position.set(0.07, 0.18, 0.13);
    giL.rotation.set(0, 0.18, -0.12);
    // Right Gi Lapel Panel
    const giR = this.createPart(new THREE.BoxGeometry(0.12, 0.36, 0.08), whiteGiMat);
    giR.position.set(0.07, 0.18, -0.13);
    giR.rotation.set(0, -0.18, -0.12);
    // Back Gi panel
    const giBack = this.createPart(new THREE.BoxGeometry(0.08, 0.34, 0.30), whiteGiMat);
    giBack.position.set(-0.08, 0.17, 0);
    rig.chest.add(giL, giR, giBack);

    // Frayed cloth teeth on sleeveless armholes (3 triangular frills on each shoulder)
    const frillGeo = new THREE.ConeGeometry(0.035, 0.09, 3);
    const frillPositions = [
      [0.05, 0.28, 0.22, 0.3, 0, -0.4],
      [0.0, 0.30, 0.22, 0.3, 0, 0],
      [-0.05, 0.28, 0.22, 0.3, 0, 0.4],
      [0.05, 0.28, -0.22, -0.3, 0, -0.4],
      [0.0, 0.30, -0.22, -0.3, 0, 0],
      [-0.05, 0.28, -0.22, -0.3, 0, 0.4],
    ];
    frillPositions.forEach((fp) => {
      const frill = this.createPart(frillGeo, whiteGiMat);
      frill.position.set(fp[0], fp[1], fp[2]);
      frill.rotation.set(fp[3], fp[4], fp[5]);
      rig.chest.add(frill);
    });

    // ==========================================
    // C. WAIST: Thick Black Obi Belt & Long Hanging Tails
    // ==========================================
    // Central Belt Knot
    const beltKnot = this.createPart(new THREE.BoxGeometry(0.08, 0.09, 0.09), blackBeltMat);
    beltKnot.position.set(0.18, 0.0, 0.0);
    rig.pelvis.add(beltKnot);

    // Two long hanging belt tails hanging down to mid-thigh
    const beltTailL = this.createPart(new THREE.BoxGeometry(0.042, 0.36, 0.018), blackBeltMat);
    beltTailL.position.set(0.17, -0.18, 0.04);
    beltTailL.rotation.set(0.05, 0, 0.06);
    const beltTailR = this.createPart(new THREE.BoxGeometry(0.042, 0.36, 0.018), blackBeltMat);
    beltTailR.position.set(0.17, -0.18, -0.04);
    beltTailR.rotation.set(-0.05, 0, -0.06);
    rig.pelvis.add(beltTailL, beltTailR);

    // Lower white gi flaps hanging over the hips/groin
    const giFlapL = this.createPart(new THREE.BoxGeometry(0.09, 0.22, 0.04), whiteGiMat);
    giFlapL.position.set(0.07, -0.10, 0.14);
    giFlapL.rotation.z = -0.08;
    const giFlapR = this.createPart(new THREE.BoxGeometry(0.09, 0.22, 0.04), whiteGiMat);
    giFlapR.position.set(0.07, -0.10, -0.14);
    giFlapR.rotation.z = -0.08;
    const giFlapBack = this.createPart(new THREE.BoxGeometry(0.04, 0.22, 0.24), whiteGiMat);
    giFlapBack.position.set(-0.10, -0.10, 0);
    rig.pelvis.add(giFlapL, giFlapR, giFlapBack);

    // ==========================================
    // D. FOREARMS: Chunky Steel-Blue Gauntlets
    // ==========================================
    const bracerGeo = new THREE.CylinderGeometry(0.11, 0.10, 0.18, 6);
    const bracerL = this.createPart(bracerGeo, gauntletMat);
    bracerL.position.set(0, -0.22, 0);
    rig.leftForearm.add(bracerL);

    const bracerR = this.createPart(bracerGeo, gauntletMat);
    bracerR.position.set(0, -0.22, 0);
    rig.rightForearm.add(bracerR);

    // ==========================================
    // E. SHINS & FEET: Banded Shin Wraps & Open-Toe Sandals
    // ==========================================
    const wrapGeo = new THREE.CylinderGeometry(0.112, 0.098, 0.26, 8);
    const wrapL = this.createPart(wrapGeo, shinWrapMat);
    wrapL.position.set(0, -0.20, 0);
    rig.leftShin.add(wrapL);

    const wrapR = this.createPart(wrapGeo, shinWrapMat);
    wrapR.position.set(0, -0.20, 0);
    rig.rightShin.add(wrapR);

    // Sandal ankle collars
    const sandalCollarGeo = new THREE.CylinderGeometry(0.114, 0.112, 0.06, 8);
    const scL = this.createPart(sandalCollarGeo, sandalMat);
    scL.position.set(0, -0.32, 0);
    rig.leftShin.add(scL);

    const scR = this.createPart(sandalCollarGeo, sandalMat);
    scR.position.set(0, -0.32, 0);
    rig.rightShin.add(scR);

    return rig;
  }

  /**
   * Build Mob Street Brawlers for Horde Mode
   */
  public static buildMobStickman(colorHex: number = 0xffffff): SkeletalRig {
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xf5c39e, roughness: 0.45 });
    const shirtMat = new THREE.MeshStandardMaterial({ color: colorHex, roughness: 0.4 });
    const pantsMat = new THREE.MeshStandardMaterial({ color: 0x1a212e, roughness: 0.5 });
    const shoeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 });
    const bladeMat = new THREE.MeshBasicMaterial({ color: colorHex });

    const rig = this.assembleHumanoidRig({
      skinMat,
      chestMat: shirtMat,
      midriffMat: shirtMat,
      pelvisMat: pantsMat,
      pantsMat,
      shoeMat,
      soleMat: pantsMat,
      gloveMat: shirtMat,
      jointMat: skinMat,
      bladeMat,
      hasKatana: false,
      hasLeftBlade: false,
      weaponType: 'FISTS',
    });

    // Street cap on mob
    const cap = this.createPart(new THREE.BoxGeometry(0.24, 0.08, 0.24), shirtMat);
    cap.position.set(0.04, 0.36, 0);
    rig.head.add(cap);

    this.addAnimeEyes(rig.head, 0x111111, false);
    return rig;
  }

  /**
   * Master Anime Humanoid Skeleton Assembly
   * Preserves 100% of the joint hierarchy and pivot points for flawless animation!
   */
  private static assembleHumanoidRig(config: {
    skinMat: THREE.Material;
    chestMat: THREE.Material;
    midriffMat: THREE.Material;
    pelvisMat: THREE.Material;
    pantsMat: THREE.Material;
    shoeMat: THREE.Material;
    soleMat: THREE.Material;
    gloveMat: THREE.Material;
    jointMat: THREE.Material;
    bladeMat: THREE.Material;
    hasKatana?: boolean;
    hasLeftBlade?: boolean;
    weaponType?: 'KATANA' | 'DUAL_DAGGERS' | 'FISTS';
  }): SkeletalRig {
    const root = new THREE.Group();
    const {
      skinMat,
      chestMat,
      midriffMat,
      pelvisMat,
      pantsMat,
      shoeMat,
      soleMat,
      gloveMat,
      jointMat,
      bladeMat,
      hasKatana = true,
      hasLeftBlade = false,
      weaponType = 'KATANA',
    } = config;

    // --- ANATOMY GEOMETRIES ---
    const pelvisGeo = new THREE.CylinderGeometry(0.18, 0.16, 0.16, 8);
    const torsoGeo = new THREE.CylinderGeometry(0.20, 0.17, 0.28, 8);
    const chestGeo = new THREE.CylinderGeometry(0.26, 0.20, 0.32, 8);
    const neckGeo = new THREE.CylinderGeometry(0.08, 0.09, 0.12, 6);
    const headGeo = new THREE.SphereGeometry(0.22, 12, 12);
    const jawGeo = new THREE.ConeGeometry(0.12, 0.14, 4);

    const upperArmGeo = new THREE.CylinderGeometry(0.085, 0.075, 0.36, 8);
    const forearmGeo = new THREE.CylinderGeometry(0.085, 0.075, 0.36, 8);
    const handGeo = new THREE.BoxGeometry(0.11, 0.09, 0.11);

    const thighGeo = new THREE.CylinderGeometry(0.125, 0.095, 0.44, 8); // Baggy martial pants
    const shinGeo = new THREE.CylinderGeometry(0.105, 0.085, 0.44, 8);
    const bootGeo = new THREE.BoxGeometry(0.14, 0.09, 0.24);
    const soleGeo = new THREE.BoxGeometry(0.15, 0.03, 0.27);

    // ==========================================
    // 1. PELVIS / WAIST
    // ==========================================
    const pelvis = new THREE.Group();
    pelvis.position.y = 1.05;
    root.add(pelvis);

    const pelvisMesh = this.createPart(pelvisGeo, pelvisMat);
    pelvisMesh.position.y = 0.04;
    pelvis.add(pelvisMesh);

    // ==========================================
    // 2. TORSO / MIDRIFF
    // ==========================================
    const torso = new THREE.Group();
    torso.position.y = 0.05;
    pelvis.add(torso);

    const torsoMesh = this.createPart(torsoGeo, midriffMat);
    torsoMesh.position.y = 0.17;
    torso.add(torsoMesh);

    // ==========================================
    // 3. CHEST & SHOULDERS
    // ==========================================
    const chest = new THREE.Group();
    chest.position.y = 0.34;
    torso.add(chest);

    const chestMesh = this.createPart(chestGeo, chestMat);
    chestMesh.position.y = 0.16;
    chest.add(chestMesh);

    // Defined Pectorals
    const pecGeo = new THREE.BoxGeometry(0.12, 0.14, 0.08);
    const pecL = this.createPart(pecGeo, chestMat);
    pecL.position.set(0.11, 0.18, 0.07);
    pecL.rotation.set(0, 0, -0.15);
    const pecR = this.createPart(pecGeo, chestMat);
    pecR.position.set(0.11, 0.18, -0.07);
    pecR.rotation.set(0, 0, -0.15);
    chest.add(pecL, pecR);

    // ==========================================
    // 4. NECK & ANIME HEAD
    // ==========================================
    const head = new THREE.Group();
    head.position.y = 0.38;
    chest.add(head);

    const neck = this.createPart(neckGeo, skinMat);
    neck.position.y = 0.06;
    head.add(neck);

    const headMesh = this.createPart(headGeo, skinMat);
    headMesh.position.y = 0.26;
    head.add(headMesh);

    const jaw = this.createPart(jawGeo, skinMat);
    jaw.position.set(0.08, 0.14, 0);
    jaw.rotation.set(0, 0, -1.35);
    head.add(jaw);

    // ==========================================
    // 5. LEFT ARM
    // ==========================================
    const leftShoulder = new THREE.Group();
    leftShoulder.position.set(0, 0.28, 0.22);
    chest.add(leftShoulder);
    leftShoulder.add(this.createPart(new THREE.SphereGeometry(0.08, 8, 8), skinMat));

    const leftUpperArm = new THREE.Group();
    leftShoulder.add(leftUpperArm);
    const lUpper = this.createPart(upperArmGeo, skinMat);
    lUpper.position.y = -0.19;
    leftUpperArm.add(lUpper);

    const leftForearm = new THREE.Group();
    leftForearm.position.y = -0.38;
    leftUpperArm.add(leftForearm);
    leftForearm.add(this.createPart(new THREE.SphereGeometry(0.075, 8, 8), skinMat));

    const lForearm = this.createPart(forearmGeo, skinMat);
    lForearm.position.y = -0.19;
    leftForearm.add(lForearm);

    // Wristband & Glove
    const wristbandGeo = new THREE.CylinderGeometry(0.088, 0.088, 0.1, 8);
    const lWrist = this.createPart(wristbandGeo, gloveMat);
    lWrist.position.y = -0.32;
    leftForearm.add(lWrist);

    const leftHand = new THREE.Group();
    leftHand.position.y = -0.38;
    leftForearm.add(leftHand);
    const lHand = this.createPart(handGeo, gloveMat);
    leftHand.add(lHand);

    // ==========================================
    // 6. RIGHT ARM
    // ==========================================
    const rightShoulder = new THREE.Group();
    rightShoulder.position.set(0, 0.28, -0.22);
    chest.add(rightShoulder);
    rightShoulder.add(this.createPart(new THREE.SphereGeometry(0.08, 8, 8), skinMat));

    const rightUpperArm = new THREE.Group();
    rightShoulder.add(rightUpperArm);
    const rUpper = this.createPart(upperArmGeo, skinMat);
    rUpper.position.y = -0.19;
    rightUpperArm.add(rUpper);

    const rightForearm = new THREE.Group();
    rightForearm.position.y = -0.38;
    rightUpperArm.add(rightForearm);
    rightForearm.add(this.createPart(new THREE.SphereGeometry(0.075, 8, 8), skinMat));

    const rForearm = this.createPart(forearmGeo, skinMat);
    rForearm.position.y = -0.19;
    rightForearm.add(rForearm);

    const rWrist = this.createPart(wristbandGeo, gloveMat);
    rWrist.position.y = -0.32;
    rightForearm.add(rWrist);

    const rightHand = new THREE.Group();
    rightHand.position.y = -0.38;
    rightForearm.add(rightHand);
    const rHand = this.createPart(handGeo, gloveMat);
    rightHand.add(rHand);

    // ==========================================
    // WEAPONS
    // ==========================================
    let leftBlade: THREE.Mesh | THREE.Group | undefined;
    let rightBlade: THREE.Mesh | THREE.Group | undefined;

    if (weaponType === 'DUAL_DAGGERS' || hasLeftBlade) {
      const lDagger = new THREE.Group();
      lDagger.position.set(-0.08, -0.22, 0);
      lDagger.rotation.z = 0.35;
      const dBlade = this.createPart(new THREE.ConeGeometry(0.07, 0.45, 4), bladeMat);
      dBlade.position.y = -0.24;
      dBlade.rotation.x = Math.PI;
      const dGuard = this.createPart(new THREE.BoxGeometry(0.08, 0.02, 0.08), chestMat);
      dGuard.position.y = -0.02;
      const dHilt = this.createPart(new THREE.CylinderGeometry(0.025, 0.025, 0.16, 5), gloveMat);
      dHilt.position.y = 0.08;
      lDagger.add(dBlade, dGuard, dHilt);
      leftHand.add(lDagger);
      leftBlade = lDagger as any;
    }

    if (weaponType === 'DUAL_DAGGERS') {
      const rDagger = new THREE.Group();
      rDagger.position.set(0.08, -0.24, 0);
      rDagger.rotation.z = -0.35;
      const dBlade = this.createPart(new THREE.ConeGeometry(0.07, 0.45, 4), bladeMat);
      dBlade.position.y = -0.24;
      dBlade.rotation.x = Math.PI;
      const dGuard = this.createPart(new THREE.BoxGeometry(0.08, 0.02, 0.08), chestMat);
      dGuard.position.y = -0.02;
      const dHilt = this.createPart(new THREE.CylinderGeometry(0.025, 0.025, 0.16, 5), gloveMat);
      dHilt.position.y = 0.08;
      rDagger.add(dBlade, dGuard, dHilt);
      rightHand.add(rDagger);
      rightBlade = rDagger as any;
    } else if (hasKatana) {
      const katana = new THREE.Group();
      katana.position.set(0.12, -0.34, 0);
      katana.rotation.z = -0.35;

      const blade = this.createPart(new THREE.BoxGeometry(0.026, 1.05, 0.046), bladeMat);
      blade.position.y = -0.44;
      const tip = this.createPart(new THREE.ConeGeometry(0.032, 0.12, 4), bladeMat);
      tip.position.y = -0.98;
      tip.rotation.y = Math.PI / 4;
      const tsuba = this.createPart(new THREE.CylinderGeometry(0.07, 0.07, 0.02, 8), chestMat);
      tsuba.position.y = 0.09;
      const hilt = this.createPart(new THREE.CylinderGeometry(0.03, 0.03, 0.22, 8), gloveMat);
      hilt.position.y = 0.21;
      katana.add(blade, tip, tsuba, hilt);
      rightHand.add(katana);
      rightBlade = katana as any;
    }

    // ==========================================
    // 7. LEFT LEG
    // ==========================================
    const leftHip = new THREE.Group();
    leftHip.position.set(0, -0.05, 0.14);
    pelvis.add(leftHip);
    leftHip.add(this.createPart(new THREE.SphereGeometry(0.08, 8, 8), jointMat));

    const leftThigh = new THREE.Group();
    leftHip.add(leftThigh);
    const lThigh = this.createPart(thighGeo, pantsMat);
    lThigh.position.y = -0.225;
    leftThigh.add(lThigh);

    const leftShin = new THREE.Group();
    leftShin.position.y = -0.45;
    leftThigh.add(leftShin);
    leftShin.add(this.createPart(new THREE.SphereGeometry(0.075, 8, 8), jointMat));

    const lShin = this.createPart(shinGeo, pantsMat);
    lShin.position.y = -0.225;
    leftShin.add(lShin);

    const leftFoot = new THREE.Group();
    leftFoot.position.y = -0.45;
    leftShin.add(leftFoot);

    // Sneaker / Boot
    const lFoot = this.createPart(bootGeo, shoeMat);
    lFoot.position.set(0.04, -0.035, 0);
    const lSole = this.createPart(soleGeo, soleMat);
    lSole.position.set(0.04, -0.075, 0);
    leftFoot.add(lFoot, lSole);

    // ==========================================
    // 8. RIGHT LEG
    // ==========================================
    const rightHip = new THREE.Group();
    rightHip.position.set(0, -0.05, -0.14);
    pelvis.add(rightHip);
    rightHip.add(this.createPart(new THREE.SphereGeometry(0.08, 8, 8), jointMat));

    const rightThigh = new THREE.Group();
    rightHip.add(rightThigh);
    const rThigh = this.createPart(thighGeo, pantsMat);
    rThigh.position.y = -0.225;
    rightThigh.add(rThigh);

    const rightShin = new THREE.Group();
    rightShin.position.y = -0.45;
    rightThigh.add(rightShin);
    rightShin.add(this.createPart(new THREE.SphereGeometry(0.075, 8, 8), jointMat));

    const rShin = this.createPart(shinGeo, pantsMat);
    rShin.position.y = -0.225;
    rightShin.add(rShin);

    const rightFoot = new THREE.Group();
    rightFoot.position.y = -0.45;
    rightShin.add(rightFoot);

    const rFoot = this.createPart(bootGeo, shoeMat);
    rFoot.position.set(0.04, -0.035, 0);
    const rSole = this.createPart(soleGeo, soleMat);
    rSole.position.set(0.04, -0.075, 0);
    rightFoot.add(rFoot, rSole);

    return {
      root,
      pelvis,
      torso,
      chest,
      head,
      leftShoulder,
      leftUpperArm,
      leftForearm,
      leftHand,
      leftBlade,
      rightShoulder,
      rightUpperArm,
      rightForearm,
      rightHand,
      rightBlade,
      leftHip,
      leftThigh,
      leftShin,
      leftFoot,
      rightHip,
      rightThigh,
      rightShin,
      rightFoot,
      materials: [skinMat, chestMat, pantsMat, shoeMat],
    };
  }
}
