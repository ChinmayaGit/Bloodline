import { SoundSystem } from '../engine/SoundSystem';
import { SettingsManager } from './SettingsManager';

export type GameMode = 'ARCADE' | 'PVP' | 'TRAINING' | 'HORDE';
export type CharacterId = 'blaze' | 'cypher' | 'shadow' | 'volt' | 'jin';

export interface MatchConfig {
  mode: GameMode;
  p1Char: CharacterId;
  p2Char: CharacterId;
}

export class MenuManager {
  // Screens & Modals
  private titleScreen: HTMLElement;
  private charSelectScreen: HTMLElement;
  private hudLayer: HTMLElement;
  private controlsModal: HTMLElement;
  private pauseModal: HTMLElement;
  private gameoverModal: HTMLElement;
  private selectionStatus: HTMLElement;
  private winnerText: HTMLElement;
  private winnerSub: HTMLElement;
  private soundToggleBtn: HTMLElement;

  // Selection state
  private currentMode: GameMode = 'ARCADE';
  private selectedP1: CharacterId | null = null;
  private selectedP2: CharacterId | null = null;
  private selectingPlayer: 1 | 2 = 1;

  // Callback to start match in GameEngine
  private onStartMatchCallback?: (config: MatchConfig) => void;
  private onPauseStateChange?: (isPaused: boolean) => void;
  private onQuitMatchCallback?: () => void;

  private sound: SoundSystem;
  private settings: SettingsManager;

  constructor(sound: SoundSystem, settings: SettingsManager) {
    this.sound = sound;
    this.settings = settings;

    this.titleScreen = document.getElementById('title-screen')!;
    this.charSelectScreen = document.getElementById('char-select-screen')!;
    this.hudLayer = document.getElementById('hud')!;
    this.controlsModal = document.getElementById('controls-modal')!;
    this.pauseModal = document.getElementById('pause-modal')!;
    this.gameoverModal = document.getElementById('gameover-modal')!;
    this.selectionStatus = document.getElementById('selection-status')!;
    this.winnerText = document.getElementById('winner-text')!;
    this.winnerSub = document.getElementById('winner-sub')!;
    this.soundToggleBtn = document.getElementById('btn-sound-toggle')!;

    this.bindEvents();
  }

  public registerCallbacks(
    onStartMatch: (config: MatchConfig) => void,
    onPause: (isPaused: boolean) => void,
    onQuit: () => void
  ) {
    this.onStartMatchCallback = onStartMatch;
    this.onPauseStateChange = onPause;
    this.onQuitMatchCallback = onQuit;
  }

  private bindEvents() {
    // Title buttons
    document.getElementById('btn-arcade')?.addEventListener('click', () => {
      this.sound.init();
      this.sound.playWhoosh(1.2);
      this.openCharSelect('ARCADE');
    });

    document.getElementById('btn-horde')?.addEventListener('click', () => {
      this.sound.init();
      this.sound.playWhoosh(1.4);
      this.openCharSelect('HORDE');
    });

    document.getElementById('btn-pvp')?.addEventListener('click', () => {
      this.sound.init();
      this.sound.playWhoosh(1.2);
      this.openCharSelect('PVP');
    });

    document.getElementById('btn-training')?.addEventListener('click', () => {
      this.sound.init();
      this.sound.playWhoosh(1.2);
      this.openCharSelect('TRAINING');
    });

    document.getElementById('btn-how-to-play')?.addEventListener('click', () => {
      this.sound.init();
      this.controlsModal.classList.remove('hidden');
    });

    document.getElementById('btn-close-controls')?.addEventListener('click', () => {
      this.controlsModal.classList.add('hidden');
    });

    // Settings buttons
    document.getElementById('btn-settings')?.addEventListener('click', () => {
      this.settings.openSettings();
    });

    document.getElementById('btn-hud-settings')?.addEventListener('click', () => {
      this.settings.openSettings();
    });

    document.getElementById('btn-pause-settings')?.addEventListener('click', () => {
      this.settings.openSettings();
    });

    // Sound toggle
    this.soundToggleBtn?.addEventListener('click', () => {
      this.sound.init();
      const unmuted = this.sound.toggleMute();
      this.soundToggleBtn.textContent = unmuted ? '🔊 Sound: ON' : '🔇 Sound: OFF';
    });

    // Character select cards
    document.querySelectorAll('.char-card').forEach((card) => {
      card.addEventListener('click', (e) => {
        const target = (e.currentTarget as HTMLElement);
        const char = (target.getAttribute('data-char') || target.id.replace('card-', '')) as CharacterId;
        this.selectCharacter(char);
      });
    });

    document.getElementById('btn-char-back')?.addEventListener('click', () => {
      this.sound.playWhoosh(0.9);
      this.showTitleScreen();
    });

    // Pause menu buttons
    document.getElementById('btn-resume')?.addEventListener('click', () => {
      this.togglePause(false);
    });

    document.getElementById('btn-pause-moves')?.addEventListener('click', () => {
      this.controlsModal.classList.remove('hidden');
    });

    document.getElementById('btn-quit-match')?.addEventListener('click', () => {
      this.togglePause(false);
      this.showTitleScreen();
      this.onQuitMatchCallback?.();
    });

    // Game Over / Rematch buttons
    document.getElementById('btn-rematch')?.addEventListener('click', () => {
      this.gameoverModal.classList.add('hidden');
      if (this.selectedP1 && this.selectedP2) {
        this.onStartMatchCallback?.({
          mode: this.currentMode,
          p1Char: this.selectedP1,
          p2Char: this.selectedP2,
        });
      }
    });

    document.getElementById('btn-char-select-again')?.addEventListener('click', () => {
      this.gameoverModal.classList.add('hidden');
      this.openCharSelect(this.currentMode);
    });

    document.getElementById('btn-main-menu')?.addEventListener('click', () => {
      this.gameoverModal.classList.add('hidden');
      this.showTitleScreen();
      this.onQuitMatchCallback?.();
    });

    // Escape key to pause
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        if (this.settings.isSettingsOpen()) {
          this.settings.closeSettings();
          return;
        }
        if (!this.controlsModal.classList.contains('hidden')) {
          this.controlsModal.classList.add('hidden');
          return;
        }
        if (!this.hudLayer.classList.contains('hidden') && this.gameoverModal.classList.contains('hidden')) {
          const isPaused = !this.pauseModal.classList.contains('hidden');
          this.togglePause(!isPaused);
        }
      }
    });
  }

  public showTitleScreen() {
    this.titleScreen.classList.add('active');
    this.charSelectScreen.classList.remove('active');
    this.hudLayer.classList.add('hidden');
    this.pauseModal.classList.add('hidden');
    this.controlsModal.classList.add('hidden');
    this.gameoverModal.classList.add('hidden');
  }

  public openCharSelect(mode: GameMode) {
    this.currentMode = mode;
    this.selectedP1 = null;
    this.selectedP2 = null;
    this.selectingPlayer = 1;

    this.titleScreen.classList.remove('active');
    this.charSelectScreen.classList.add('active');
    this.hudLayer.classList.add('hidden');

    if (mode === 'HORDE') {
      this.selectionStatus.textContent = 'SELECT FIGHTER FOR HORDE SURVIVAL';
    } else if (mode === 'PVP') {
      this.selectionStatus.textContent = 'PLAYER 1: SELECT FIGHTER';
    } else {
      this.selectionStatus.textContent = 'SELECT YOUR FIGHTER';
    }
  }

  private selectCharacter(char: CharacterId) {
    this.sound.playHitLight();

    if (this.currentMode === 'ARCADE' || this.currentMode === 'TRAINING' || this.currentMode === 'HORDE') {
      this.selectedP1 = char;
      const roster: CharacterId[] = ['blaze', 'cypher', 'shadow', 'volt', 'jin'];
      const remaining = roster.filter(c => c !== char);
      this.selectedP2 = remaining[Math.floor(Math.random() * remaining.length)];
      this.startConfiguredMatch();
    } else if (this.currentMode === 'PVP') {
      if (this.selectingPlayer === 1) {
        this.selectedP1 = char;
        this.selectingPlayer = 2;
        this.selectionStatus.textContent = 'PLAYER 2: SELECT FIGHTER';
      } else {
        this.selectedP2 = char;
        this.startConfiguredMatch();
      }
    }
  }

  private startConfiguredMatch() {
    if (!this.selectedP1 || !this.selectedP2) return;

    this.charSelectScreen.classList.remove('active');
    this.titleScreen.classList.remove('active');
    this.hudLayer.classList.remove('hidden');

    this.onStartMatchCallback?.({
      mode: this.currentMode,
      p1Char: this.selectedP1,
      p2Char: this.selectedP2,
    });
  }

  public togglePause(pause: boolean) {
    if (pause) {
      this.pauseModal.classList.remove('hidden');
      this.onPauseStateChange?.(true);
    } else {
      this.pauseModal.classList.add('hidden');
      this.onPauseStateChange?.(false);
    }
  }

  public showMatchEnd(winnerName: string, isP1Winner: boolean) {
    this.winnerText.textContent = `${winnerName} WINS!`;
    this.winnerSub.textContent = isP1Winner ? 'VICTORY ACHIEVED' : 'DEFEATED';
    this.gameoverModal.classList.remove('hidden');
  }
}
