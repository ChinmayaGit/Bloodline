import { SoundSystem } from '../engine/SoundSystem';
import { CameraController } from '../engine/CameraController';
import { Stage } from '../engine/Stage';

export interface GameSettings {
  masterVolume: number; // 0 - 100
  bgmVolume: number;    // 0 - 100
  sfxVolume: number;    // 0 - 100
  isMuted: boolean;
  showCombatButtons: boolean;
  enableShake: boolean;
  enableDust: boolean;
  showFps: boolean;
}

const DEFAULT_SETTINGS: GameSettings = {
  masterVolume: 80,
  bgmVolume: 60,
  sfxVolume: 85,
  isMuted: false,
  showCombatButtons: true,
  enableShake: true,
  enableDust: true,
  showFps: false,
};

const STORAGE_KEY = 'tough_stickman_settings_v1';

export class SettingsManager {
  private settings: GameSettings;
  private sound: SoundSystem;
  private cameraCtrl: CameraController;
  private stage: Stage;

  // DOM Elements
  private settingsModal: HTMLElement;
  private combatControlsDock: HTMLElement | null;
  private fpsCounter: HTMLElement | null;

  // Sliders & Toggles
  private masterSlider: HTMLInputElement | null;
  private bgmSlider: HTMLInputElement | null;
  private sfxSlider: HTMLInputElement | null;
  private muteToggle: HTMLInputElement | null;
  private combatButtonsToggle: HTMLInputElement | null;
  private shakeToggle: HTMLInputElement | null;
  private dustToggle: HTMLInputElement | null;
  private fpsToggle: HTMLInputElement | null;

  // Value display labels
  private masterLabel: HTMLElement | null;
  private bgmLabel: HTMLElement | null;
  private sfxLabel: HTMLElement | null;

  private onPauseStateChange?: (isPaused: boolean) => void;

  constructor(sound: SoundSystem, cameraCtrl: CameraController, stage: Stage) {
    this.sound = sound;
    this.cameraCtrl = cameraCtrl;
    this.stage = stage;

    this.settings = this.loadSettings();

    this.settingsModal = document.getElementById('settings-modal')!;
    this.combatControlsDock = document.getElementById('combat-controls');
    this.fpsCounter = document.getElementById('fps-counter');

    this.masterSlider = document.getElementById('setting-master-vol') as HTMLInputElement;
    this.bgmSlider = document.getElementById('setting-bgm-vol') as HTMLInputElement;
    this.sfxSlider = document.getElementById('setting-sfx-vol') as HTMLInputElement;
    this.muteToggle = document.getElementById('setting-mute-toggle') as HTMLInputElement;
    this.combatButtonsToggle = document.getElementById('setting-combat-buttons') as HTMLInputElement;
    this.shakeToggle = document.getElementById('setting-shake-toggle') as HTMLInputElement;
    this.dustToggle = document.getElementById('setting-dust-toggle') as HTMLInputElement;
    this.fpsToggle = document.getElementById('setting-fps-toggle') as HTMLInputElement;

    this.masterLabel = document.getElementById('label-master-vol');
    this.bgmLabel = document.getElementById('label-bgm-vol');
    this.sfxLabel = document.getElementById('label-sfx-vol');

    this.initUI();
    this.bindEvents();
    this.applyAll();
  }

  public registerPauseCallback(onPause: (isPaused: boolean) => void) {
    this.onPauseStateChange = onPause;
  }

  private loadSettings(): GameSettings {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn('Could not load settings from localStorage', e);
    }
    return { ...DEFAULT_SETTINGS };
  }

  private saveSettings() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.settings));
    } catch (e) {
      console.warn('Could not save settings to localStorage', e);
    }
  }

  private initUI() {
    if (this.masterSlider) this.masterSlider.value = this.settings.masterVolume.toString();
    if (this.bgmSlider) this.bgmSlider.value = this.settings.bgmVolume.toString();
    if (this.sfxSlider) this.sfxSlider.value = this.settings.sfxVolume.toString();
    if (this.muteToggle) this.muteToggle.checked = this.settings.isMuted;
    if (this.combatButtonsToggle) this.combatButtonsToggle.checked = this.settings.showCombatButtons;
    if (this.shakeToggle) this.shakeToggle.checked = this.settings.enableShake;
    if (this.dustToggle) this.dustToggle.checked = this.settings.enableDust;
    if (this.fpsToggle) this.fpsToggle.checked = this.settings.showFps;

    this.updateLabels();
  }

  private updateLabels() {
    if (this.masterLabel) this.masterLabel.textContent = `${this.settings.masterVolume}%`;
    if (this.bgmLabel) this.bgmLabel.textContent = `${this.settings.bgmVolume}%`;
    if (this.sfxLabel) this.sfxLabel.textContent = `${this.settings.sfxVolume}%`;
  }

  private bindEvents() {
    // Sliders
    this.masterSlider?.addEventListener('input', (e) => {
      this.sound.init();
      this.settings.masterVolume = parseInt((e.target as HTMLInputElement).value, 10);
      this.sound.setMasterVolume(this.settings.masterVolume / 100);
      this.updateLabels();
      this.saveSettings();
    });

    this.bgmSlider?.addEventListener('input', (e) => {
      this.sound.init();
      this.settings.bgmVolume = parseInt((e.target as HTMLInputElement).value, 10);
      this.sound.setBgmVolume(this.settings.bgmVolume / 100);
      this.updateLabels();
      this.saveSettings();
    });

    this.sfxSlider?.addEventListener('input', (e) => {
      this.sound.init();
      this.settings.sfxVolume = parseInt((e.target as HTMLInputElement).value, 10);
      this.sound.setSfxVolume(this.settings.sfxVolume / 100);
      this.updateLabels();
      this.saveSettings();
    });

    // Mute Switch
    this.muteToggle?.addEventListener('change', (e) => {
      this.sound.init();
      this.settings.isMuted = (e.target as HTMLInputElement).checked;
      this.sound.setMuted(this.settings.isMuted);
      this.saveSettings();
    });

    // Combat Buttons Toggle
    this.combatButtonsToggle?.addEventListener('change', (e) => {
      this.settings.showCombatButtons = (e.target as HTMLInputElement).checked;
      this.setCombatButtonsVisible(this.settings.showCombatButtons);
      this.saveSettings();
    });

    // Shake Toggle
    this.shakeToggle?.addEventListener('change', (e) => {
      this.settings.enableShake = (e.target as HTMLInputElement).checked;
      this.cameraCtrl.enableShake = this.settings.enableShake;
      this.saveSettings();
    });

    // Dust Toggle
    this.dustToggle?.addEventListener('change', (e) => {
      this.settings.enableDust = (e.target as HTMLInputElement).checked;
      this.stage.setDustVisible(this.settings.enableDust);
      this.saveSettings();
    });

    // FPS Toggle
    this.fpsToggle?.addEventListener('change', (e) => {
      this.settings.showFps = (e.target as HTMLInputElement).checked;
      if (this.fpsCounter) {
        if (this.settings.showFps) this.fpsCounter.classList.remove('hidden');
        else this.fpsCounter.classList.add('hidden');
      }
      this.saveSettings();
    });

    // Close Settings Button
    document.getElementById('btn-close-settings')?.addEventListener('click', () => {
      this.closeSettings();
    });

    // Quick dock toggle button
    document.getElementById('btn-toggle-controls-dock')?.addEventListener('click', () => {
      this.settings.showCombatButtons = !this.settings.showCombatButtons;
      if (this.combatButtonsToggle) {
        this.combatButtonsToggle.checked = this.settings.showCombatButtons;
      }
      this.setCombatButtonsVisible(this.settings.showCombatButtons);
      this.saveSettings();
    });
  }

  public applyAll() {
    this.sound.setMasterVolume(this.settings.masterVolume / 100);
    this.sound.setBgmVolume(this.settings.bgmVolume / 100);
    this.sound.setSfxVolume(this.settings.sfxVolume / 100);
    this.sound.setMuted(this.settings.isMuted);

    this.cameraCtrl.enableShake = this.settings.enableShake;
    this.stage.setDustVisible(this.settings.enableDust);

    this.setCombatButtonsVisible(this.settings.showCombatButtons);

    if (this.fpsCounter) {
      if (this.settings.showFps) this.fpsCounter.classList.remove('hidden');
      else this.fpsCounter.classList.add('hidden');
    }
  }

  public setCombatButtonsVisible(visible: boolean) {
    if (!this.combatControlsDock) {
      this.combatControlsDock = document.getElementById('combat-controls');
    }
    if (this.combatControlsDock) {
      if (visible) {
        this.combatControlsDock.classList.remove('collapsed');
      } else {
        this.combatControlsDock.classList.add('collapsed');
      }
    }
  }

  public openSettings() {
    this.sound.init();
    this.sound.playWhoosh(1.2);
    this.settingsModal.classList.remove('hidden');
    this.onPauseStateChange?.(true);
  }

  public closeSettings() {
    this.sound.playWhoosh(0.9);
    this.settingsModal.classList.add('hidden');
    this.onPauseStateChange?.(false);
  }

  public isSettingsOpen(): boolean {
    return !this.settingsModal.classList.contains('hidden');
  }

  public updateFps(fps: number) {
    if (this.fpsCounter && this.settings.showFps) {
      this.fpsCounter.textContent = `${Math.round(fps)} FPS`;
    }
  }
}

