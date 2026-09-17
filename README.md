# TOUGH // IMPACT - 2.5D Web Fighting Game

**TOUGH // IMPACT** is an authentic arcade-grade 2.5D fighting game built with **Three.js**, **TypeScript**, and the **Web Audio API**.

---

## 🎮 Game Modes

1. **VS CPU (ARCADE)**: Battle an intelligent AI fighter with dynamic spacing, anti-air defense, projectile zoning, and whiff punishes.
2. **LOCAL 2-PLAYER (PvP)**: Two players on the same keyboard or using gamepads simultaneously.
3. **TRAINING DOJO**: Practice mode featuring an on-screen **3D Hitbox/Hurtbox visualizer**, real-time **frame data metrics** (Startup, Active, Recovery, and Advantage on Hit/Block), and adjustable dummy AI behaviors (Stand, Crouch, Jump, Guard All, CPU).

---

## 🕹️ Controls

### Player 1 (Default)
| Action | Keyboard Key | Gamepad |
| :--- | :--- | :--- |
| **Move Left / Right** | `A` / `D` (Double-tap to Dash) | D-Pad / Left Stick |
| **Jump** | `W` | D-Pad Up |
| **Crouch / Low Guard** | `S` | D-Pad Down |
| **Light Punch (LP)** | `J` | `X` / Square |
| **Heavy Punch (HP)** | `K` | `Y` / Triangle |
| **Light Kick (LK)** | `U` | `A` / Cross |
| **Heavy Kick (HK)** | `I` | `B` / Circle |
| **Special 1 (Projectile)** | `O` | `RB` / R1 |
| **Special 2 (Uppercut / Blade)** | `L` | `LB` / L1 |
| **SUPER MOVE (100% EX)** | `Space` | `RT` / `LT` / R2 / L2 |

### Player 2 (Local PvP)
| Action | Keyboard Key |
| :--- | :--- |
| **Move Left / Right** | `ArrowLeft` / `ArrowRight` (Double-tap to Dash) |
| **Jump** | `ArrowUp` |
| **Crouch / Low Guard** | `ArrowDown` |
| **Light Punch (LP)** | `Numpad 1` or `B` |
| **Heavy Punch (HP)** | `Numpad 2` or `N` |
| **Light Kick (LK)** | `Numpad 4` or `G` |
| **Heavy Kick (HK)** | `Numpad 5` or `H` |
| **Special 1 (Projectile)** | `Numpad 6` or `Y` |
| **Special 2 (Uppercut / Blade)** | `Numpad 3` or `T` |
| **SUPER MOVE** | `Enter` or `M` |

---

## 🥊 Fighters

### 1. BLAZE (Martial Arts Brawler)
- **Archetype**: Power / Shotokan
- **Special 1**: *Fire Hadou* — High-velocity glowing fireball projectile.
- **Special 2**: *Dragon Ascent* — Invincible startup anti-air vertical uppercut.
- **Super Move**: *Inferno Drive* — 4-hit cinematic fiery combination dealing 340 damage.

### 2. CYPHER (Cybernetic Shinobi)
- **Archetype**: Speedster / Multi-hit
- **Special 1**: *Volt Surge* — Lightning arc projectile.
- **Special 2**: *Flash Blade* — Rapid lunging horizontal slash across the stage.
- **Super Move**: *Cyber Tempest* — High-speed multi-slash lightning flurry dealing 330 damage.

---

## ⚡ Combat Mechanics

- **2.5D Combat Plane**: Full 3D graphics and camera motion constrained to a 2D fighting plane.
- **Frame Data**: 60 Hz deterministic state loop (`startup` → `active` hitbox → `recovery`).
- **High/Low Guarding**:
  - High Guard blocks Mid and Overhead jump attacks.
  - Low Guard blocks Mid and crouching Low Sweeps.
- **Hit Stop & Camera Trauma**: Tactile frame freeze and camera shake on heavy strikes.
- **Super Zoom & K.O. Orbit**: Cinematic camera tracking during super activations and round-ending K.O.s.
- **Sound Synthesis**: 100% procedural Web Audio API sounds (punches, whooshes, block clangs, announcer voice synthesis, and dynamic synthwave battle music).

---

## 🚀 Running the Game

```bash
# Start the local development server
npm run dev

# Or build for production
npm run build
npm run preview
```

# Bloodline
