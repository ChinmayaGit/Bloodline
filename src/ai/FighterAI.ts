import { Fighter } from '../fighters/Fighter';
import { FighterInputState } from '../engine/InputManager';

export type DummyBehavior = 'stand' | 'crouch' | 'jump' | 'block_all' | 'cpu';

export class FighterAI {
  public difficulty: 'EASY' | 'NORMAL' | 'HARD' = 'NORMAL';
  public dummyBehavior: DummyBehavior = 'cpu';
  private actionTimer: number = 0;
  private currentAction: 'IDLE' | 'APPROACH' | 'RETREAT' | 'POKE' | 'SPECIAL' | 'SUPER' = 'IDLE';

  public computeInput(
    aiFighter: Fighter,
    opponent: Fighter
  ): FighterInputState {
    // 1. Training Mode Dummy Overrides
    if (this.dummyBehavior === 'stand') {
      return this.blankInput();
    }
    if (this.dummyBehavior === 'crouch') {
      const inp = this.blankInput();
      inp.down = true;
      return inp;
    }
    if (this.dummyBehavior === 'jump') {
      const inp = this.blankInput();
      if (aiFighter.position.y <= 0.01) inp.up = true;
      return inp;
    }
    if (this.dummyBehavior === 'block_all') {
      const inp = this.blankInput();
      const faceOpponent = opponent.position.x >= aiFighter.position.x;
      // Hold backward away from opponent
      if (faceOpponent) inp.left = true;
      else inp.right = true;
      // If opponent attacks low, crouch block
      if (opponent.currentMove && opponent.currentMove.attackType === 'LOW') {
        inp.down = true;
      }
      return inp;
    }

    // 2. Active Combat AI
    const input = this.blankInput();
    const distance = Math.abs(aiFighter.position.x - opponent.position.x);
    const facingRight = aiFighter.facingDirection === 1;

    // Reaction chance based on difficulty
    const blockChance = this.difficulty === 'EASY' ? 0.35 : this.difficulty === 'NORMAL' ? 0.7 : 0.9;

    // React to Opponent Attack (Defensive Reaction)
    if (opponent.movePhase === 'STARTUP' || opponent.movePhase === 'ACTIVE') {
      if (Math.random() < blockChance) {
        // Hold Guard
        if (facingRight) input.left = true;
        else input.right = true;

        if (opponent.currentMove?.attackType === 'LOW') {
          input.down = true; // Low guard
        }
        return input;
      }
    }

    // Anti-Air Reaction (if opponent is in air jumping in)
    if (opponent.position.y > 1.2 && distance < 3.2 && aiFighter.position.y <= 0.01) {
      if (Math.random() < (this.difficulty === 'EASY' ? 0.4 : 0.8)) {
        input.pressedSpecial2 = true; // Dragon strike / Flash blade anti-air!
        return input;
      }
    }

    // Super Move when meter is full and in range
    if (aiFighter.superMeter >= 100 && distance < 3.0 && Math.random() < 0.25) {
      input.pressedSuperMove = true;
      return input;
    }

    // Decision Timer for Spacing / Tactics
    this.actionTimer--;
    if (this.actionTimer <= 0) {
      this.actionTimer = 12 + Math.floor(Math.random() * 20);

      if (distance > 6.0) {
        // Far: approach or zone with projectile
        this.currentAction = Math.random() < 0.45 ? 'SPECIAL' : 'APPROACH';
      } else if (distance < 1.8) {
        // Close range: strike or retreat
        this.currentAction = Math.random() < 0.6 ? 'POKE' : 'RETREAT';
      } else {
        // Mid-range: spacing dance or jump-in
        const roll = Math.random();
        if (roll < 0.4) this.currentAction = 'APPROACH';
        else if (roll < 0.7) this.currentAction = 'POKE';
        else this.currentAction = 'RETREAT';
      }
    }

    // Execute current tactical action
    switch (this.currentAction) {
      case 'APPROACH':
        if (facingRight) input.right = true;
        else input.left = true;
        // occasional jump-in
        if (Math.random() < 0.05 && distance > 3.0) input.up = true;
        break;

      case 'RETREAT':
        if (facingRight) input.left = true;
        else input.right = true;
        break;

      case 'SPECIAL':
        input.pressedSpecial1 = true; // Cast projectile
        break;

      case 'POKE':
        if (distance < 1.6) {
          const attackRoll = Math.random();
          if (attackRoll < 0.35) {
            input.pressedLightPunch = true;
          } else if (attackRoll < 0.65) {
            input.pressedLightKick = true;
          } else if (attackRoll < 0.85) {
            input.pressedHeavyPunch = true;
          } else {
            // Low sweep
            input.down = true;
            input.pressedHeavyKick = true;
          }
        } else {
          // Walk in range
          if (facingRight) input.right = true;
          else input.left = true;
        }
        break;
    }

    return input;
  }

  private blankInput(): FighterInputState {
    return {
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
  }
}

