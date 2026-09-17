import { GameEngine } from './engine/GameEngine';
import { MenuManager, MatchConfig } from './ui/MenuManager';
import { SettingsManager } from './ui/SettingsManager';

class App {
  private engine: GameEngine;
  private settings: SettingsManager;
  private menu: MenuManager;

  constructor() {
    this.engine = new GameEngine();
    this.settings = new SettingsManager(
      this.engine.sound,
      this.engine.cameraCtrl,
      this.engine.stage
    );
    this.menu = new MenuManager(this.engine.sound, this.settings);

    this.engine.onFpsUpdate = (fps) => {
      this.settings.updateFps(fps);
    };

    this.setupEventHandlers();

    console.log(
      '%c🥋 TOUGH // IMPACT - Stickman Phonk Edition Initialized 🥋',
      'background: #00ddff; color: #000000; font-size: 14px; font-weight: bold; padding: 4px 8px; border-radius: 4px;'
    );
  }

  private setupEventHandlers() {
    // Menu callbacks
    this.menu.registerCallbacks(
      (config: MatchConfig) => {
        this.engine.startMatch(config);
      },
      (isPaused: boolean) => {
        this.engine.isPaused = isPaused;
      },
      () => {
        this.engine.quitMatch();
      }
    );

    // Settings pause callback
    this.settings.registerPauseCallback((isPaused: boolean) => {
      if (this.engine.matchState === 'PLAYING') {
        this.engine.isPaused = isPaused;
      }
    });

    // Match finished callback
    window.addEventListener('match-finished', (e: Event) => {
      const customEvent = e as CustomEvent<{ winnerName: string; isP1Winner: boolean }>;
      const { winnerName, isP1Winner } = customEvent.detail;
      this.menu.showMatchEnd(winnerName, isP1Winner);
    });
  }
}

// Bootstrap once DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
  new App();
});

