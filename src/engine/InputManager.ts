export interface FighterInputState {
  left: boolean;
  right: boolean;
  up: boolean;
  down: boolean;
  
  lightPunch: boolean;
  heavyPunch: boolean;
  lightKick: boolean;
  heavyKick: boolean;
  special1: boolean;
  special2: boolean;
  superMove: boolean;

  // Just-pressed triggers (true for exactly one frame)
  pressedLightPunch: boolean;
  pressedHeavyPunch: boolean;
  pressedLightKick: boolean;
  pressedHeavyKick: boolean;
  pressedSpecial1: boolean;
  pressedSpecial2: boolean;
  pressedSuperMove: boolean;

  dashForward: boolean;
  dashBackward: boolean;
}

export class InputManager {
  private keysDown: Set<string> = new Set();
  private keysJustPressed: Set<string> = new Set();

  // Double-tap dash detection tracking
  private p1LastTapTime: { [key: string]: number } = {};
  private p2LastTapTime: { [key: string]: number } = {};
  private doubleTapThreshold: number = 260; // milliseconds

  constructor() {
    window.addEventListener('keydown', (e) => {
      // Prevent browser scroll on arrows/space during game
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
        e.preventDefault();
      }

      if (!this.keysDown.has(e.code)) {
        this.keysJustPressed.add(e.code);
      }
      this.keysDown.add(e.code);
    });

    window.addEventListener('keyup', (e) => {
      this.keysDown.delete(e.code);
    });

    // Touch controls setup
    this.setupTouchListeners();
  }

  private setupTouchListeners() {
    const touchButtons = document.querySelectorAll('.t-btn');
    touchButtons.forEach((btn) => {
      const key = btn.getAttribute('data-key');
      if (!key) return;

      const handlePress = (e: Event) => {
        e.preventDefault();
        if (!this.keysDown.has(key)) {
          this.keysJustPressed.add(key);
        }
        this.keysDown.add(key);
      };

      const handleRelease = (e: Event) => {
        e.preventDefault();
        this.keysDown.delete(key);
      };

      btn.addEventListener('touchstart', handlePress, { passive: false });
      btn.addEventListener('touchend', handleRelease, { passive: false });
      btn.addEventListener('mousedown', handlePress);
      btn.addEventListener('mouseup', handleRelease);
      btn.addEventListener('mouseleave', handleRelease);
    });
  }

  public getPlayerInputs(playerIndex: 1 | 2, facingRight: boolean): FighterInputState {
    const isP1 = playerIndex === 1;

    // Check Gamepad
    const gamepadState = this.readGamepad(playerIndex - 1);

    // Read Key states
    const isDown = (key: string) => this.keysDown.has(key);
    const isJustPressed = (key: string) => this.keysJustPressed.has(key);

    let left = false;
    let right = false;
    let up = false;
    let down = false;
    let lp = false, hp = false, lk = false, hk = false, sp1 = false, sp2 = false, superM = false;
    let pLp = false, pHp = false, pLk = false, pHk = false, pSp1 = false, pSp2 = false, pSuperM = false;

    let tappedForward = false;
    let tappedBackward = false;

    const now = performance.now();
    const tapTracker = isP1 ? this.p1LastTapTime : this.p2LastTapTime;

    if (isP1) {
      left = isDown('KeyA');
      right = isDown('KeyD');
      up = isDown('KeyW');
      down = isDown('KeyS');

      lp = isDown('KeyJ');
      hp = isDown('KeyK');
      lk = isDown('KeyU');
      hk = isDown('KeyI');
      sp1 = isDown('KeyO');
      sp2 = isDown('KeyL');
      superM = isDown('Space');

      pLp = isJustPressed('KeyJ');
      pHp = isJustPressed('KeyK');
      pLk = isJustPressed('KeyU');
      pHk = isJustPressed('KeyI');
      pSp1 = isJustPressed('KeyO');
      pSp2 = isJustPressed('KeyL');
      pSuperM = isJustPressed('Space');

      // Dash check
      if (isJustPressed('KeyD')) {
        const diff = now - (tapTracker['right'] || 0);
        if (diff > 40 && diff < this.doubleTapThreshold) {
          if (facingRight) tappedForward = true;
          else tappedBackward = true;
        }
        tapTracker['right'] = now;
      }
      if (isJustPressed('KeyA')) {
        const diff = now - (tapTracker['left'] || 0);
        if (diff > 40 && diff < this.doubleTapThreshold) {
          if (facingRight) tappedBackward = true;
          else tappedForward = true;
        }
        tapTracker['left'] = now;
      }
    } else {
      // Player 2
      left = isDown('ArrowLeft');
      right = isDown('ArrowRight');
      up = isDown('ArrowUp');
      down = isDown('ArrowDown');

      lp = isDown('Numpad1') || isDown('KeyB');
      hp = isDown('Numpad2') || isDown('KeyN');
      lk = isDown('Numpad4') || isDown('KeyG');
      hk = isDown('Numpad5') || isDown('KeyH');
      sp1 = isDown('Numpad6') || isDown('KeyY');
      sp2 = isDown('Numpad3') || isDown('KeyT');
      superM = isDown('Enter') || isDown('KeyM');

      pLp = isJustPressed('Numpad1') || isJustPressed('KeyB');
      pHp = isJustPressed('Numpad2') || isJustPressed('KeyN');
      pLk = isJustPressed('Numpad4') || isJustPressed('KeyG');
      pHk = isJustPressed('Numpad5') || isJustPressed('KeyH');
      pSp1 = isJustPressed('Numpad6') || isJustPressed('KeyY');
      pSp2 = isJustPressed('Numpad3') || isJustPressed('KeyT');
      pSuperM = isJustPressed('Enter') || isJustPressed('KeyM');

      // Dash check P2
      if (isJustPressed('ArrowRight')) {
        const diff = now - (tapTracker['right'] || 0);
        if (diff > 40 && diff < this.doubleTapThreshold) {
          if (facingRight) tappedForward = true;
          else tappedBackward = true;
        }
        tapTracker['right'] = now;
      }
      if (isJustPressed('ArrowLeft')) {
        const diff = now - (tapTracker['left'] || 0);
        if (diff > 40 && diff < this.doubleTapThreshold) {
          if (facingRight) tappedBackward = true;
          else tappedForward = true;
        }
        tapTracker['left'] = now;
      }
    }

    // Merge Gamepad if available
    if (gamepadState) {
      left = left || !!gamepadState.left;
      right = right || !!gamepadState.right;
      up = up || !!gamepadState.up;
      down = down || !!gamepadState.down;

      lp = lp || !!gamepadState.lightPunch;
      hp = hp || !!gamepadState.heavyPunch;
      lk = lk || !!gamepadState.lightKick;
      hk = hk || !!gamepadState.heavyKick;
      sp1 = sp1 || !!gamepadState.special1;
      sp2 = sp2 || !!gamepadState.special2;
      superM = superM || !!gamepadState.superMove;

      pLp = pLp || !!gamepadState.pressedLightPunch;
      pHp = pHp || !!gamepadState.pressedHeavyPunch;
      pLk = pLk || !!gamepadState.pressedLightKick;
      pHk = pHk || !!gamepadState.pressedHeavyKick;
      pSp1 = pSp1 || !!gamepadState.pressedSpecial1;
      pSp2 = pSp2 || !!gamepadState.pressedSpecial2;
      pSuperM = pSuperM || !!gamepadState.pressedSuperMove;
    }

    return {
      left,
      right,
      up,
      down,
      lightPunch: lp,
      heavyPunch: hp,
      lightKick: lk,
      heavyKick: hk,
      special1: sp1,
      special2: sp2,
      superMove: superM,

      pressedLightPunch: pLp,
      pressedHeavyPunch: pHp,
      pressedLightKick: pLk,
      pressedHeavyKick: pHk,
      pressedSpecial1: pSp1,
      pressedSpecial2: pSp2,
      pressedSuperMove: pSuperM,

      dashForward: tappedForward,
      dashBackward: tappedBackward
    };
  }

  private readGamepad(gamepadIndex: number): Partial<FighterInputState> | null {
    if (!navigator.getGamepads) return null;
    const gamepads = navigator.getGamepads();
    const gp = gamepads[gamepadIndex];
    if (!gp || !gp.connected) return null;

    const stickX = gp.axes[0] || 0;
    const stickY = gp.axes[1] || 0;
    const deadzone = 0.3;

    const btn = (i: number) => gp.buttons[i] && gp.buttons[i].pressed;

    return {
      left: stickX < -deadzone || btn(14),
      right: stickX > deadzone || btn(15),
      up: stickY < -deadzone || btn(12),
      down: stickY > deadzone || btn(13),

      lightPunch: btn(2), // X
      heavyPunch: btn(3), // Y
      lightKick: btn(0),  // A
      heavyKick: btn(1),  // B
      special1: btn(5),   // RB
      special2: btn(4),   // LB
      superMove: btn(7) || btn(6), // RT / LT

      pressedLightPunch: btn(2),
      pressedHeavyPunch: btn(3),
      pressedLightKick: btn(0),
      pressedHeavyKick: btn(1),
      pressedSpecial1: btn(5),
      pressedSpecial2: btn(4),
      pressedSuperMove: btn(7) || btn(6),
    };
  }

  /** Clear per-frame just-pressed keys at the end of each frame tick */
  public postUpdate() {
    this.keysJustPressed.clear();
  }
}
