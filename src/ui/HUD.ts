export class HUD {
  // Elements
  private p1HealthFill: HTMLElement;
  private p1DamageBar: HTMLElement;
  private p1MeterFill: HTMLElement;
  private p1MeterVal: HTMLElement;
  private p1Rounds: NodeListOf<HTMLElement>;

  private p2HealthFill: HTMLElement;
  private p2DamageBar: HTMLElement;
  private p2MeterFill: HTMLElement;
  private p2MeterVal: HTMLElement;
  private p2Rounds: NodeListOf<HTMLElement>;

  private timerEl: HTMLElement;
  private announcerBanner: HTMLElement;
  private announcerText: HTMLElement;

  private p1ComboEl: HTMLElement;
  private p1ComboCount: HTMLElement;
  private p2ComboEl: HTMLElement;
  private p2ComboCount: HTMLElement;

  private hordeStatsEl: HTMLElement;
  private hordeWaveEl: HTMLElement;
  private hordeKillsEl: HTMLElement;

  // Track delayed damage
  private p1TargetHealth: number = 1000;
  private p1DamageDisplay: number = 1000;
  private p2TargetHealth: number = 1000;
  private p2DamageDisplay: number = 1000;

  // Cached DOM state to eliminate layout thrashing
  private lastP1Pct: number = -1;
  private lastP2Pct: number = -1;
  private lastP1DamPct: number = -1;
  private lastP2DamPct: number = -1;
  private lastP1Meter: number = -1;
  private lastP2Meter: number = -1;
  private lastSeconds: number = -1;

  private p1HpText: HTMLElement | null = null;
  private p2HpText: HTMLElement | null = null;

  constructor() {
    this.p1HealthFill = document.getElementById('p1-health')!;
    this.p1DamageBar = document.getElementById('p1-health-damage')!;
    this.p1MeterFill = document.getElementById('p1-meter')!;
    this.p1MeterVal = document.getElementById('p1-meter-val')!;
    this.p1Rounds = document.querySelectorAll('#p1-rounds .round-dot');
    this.p1HpText = document.getElementById('p1-hp-val');

    this.p2HealthFill = document.getElementById('p2-health')!;
    this.p2DamageBar = document.getElementById('p2-health-damage')!;
    this.p2MeterFill = document.getElementById('p2-meter')!;
    this.p2MeterVal = document.getElementById('p2-meter-val')!;
    this.p2Rounds = document.querySelectorAll('#p2-rounds .round-dot');
    this.p2HpText = document.getElementById('p2-hp-val');

    this.timerEl = document.getElementById('match-timer')!;
    this.announcerBanner = document.getElementById('announcer-banner')!;
    this.announcerText = document.getElementById('announcer-text')!;

    this.p1ComboEl = document.getElementById('p1-combo-display')!;
    this.p1ComboCount = this.p1ComboEl.querySelector('.combo-count')!;
    this.p2ComboEl = document.getElementById('p2-combo-display')!;
    this.p2ComboCount = this.p2ComboEl.querySelector('.combo-count')!;

    this.hordeStatsEl = document.getElementById('horde-stats')!;
    this.hordeWaveEl = document.getElementById('horde-wave')!;
    this.hordeKillsEl = document.getElementById('horde-kills')!;
  }

  public setHordeMode(enabled: boolean) {
    if (enabled) {
      this.timerEl.classList.add('hidden');
      this.hordeStatsEl.classList.remove('hidden');
    } else {
      this.timerEl.classList.remove('hidden');
      this.hordeStatsEl.classList.add('hidden');
    }
  }

  public updateHordeStats(wave: number, kills: number) {
    if (this.hordeWaveEl) this.hordeWaveEl.textContent = `WAVE ${wave}`;
    if (this.hordeKillsEl) this.hordeKillsEl.textContent = `${kills} KILLS`;
  }

  public setFighterNames(p1: string, p2: string) {
    const p1El = document.getElementById('p1-name');
    const p2El = document.getElementById('p2-name');
    if (p1El) p1El.textContent = p1;
    if (p2El) p2El.textContent = p2;

    const p1Portrait = document.getElementById('p1-portrait-img');
    const p2Portrait = document.getElementById('p2-portrait-img');
    if (p1Portrait) p1Portrait.className = `portrait-img char-${p1.toLowerCase()}`;
    if (p2Portrait) p2Portrait.className = `portrait-img char-${p2.toLowerCase()}`;
  }

  public updateHealth(p1Hp: number, p1Max: number, p2Hp: number, p2Max: number) {
    this.p1TargetHealth = p1Hp;
    this.p2TargetHealth = p2Hp;

    if (this.p1HpText) this.p1HpText.textContent = `${Math.max(0, Math.round(p1Hp))}`;
    if (this.p2HpText) this.p2HpText.textContent = `${Math.max(0, Math.round(p2Hp))}`;

    const p1Pct = Math.round(Math.max(0, (p1Hp / p1Max) * 100));
    const p2Pct = Math.round(Math.max(0, (p2Hp / p2Max) * 100));

    if (p1Pct !== this.lastP1Pct) {
      this.p1HealthFill.style.width = `${p1Pct}%`;
      this.lastP1Pct = p1Pct;
    }
    if (p2Pct !== this.lastP2Pct) {
      this.p2HealthFill.style.width = `${p2Pct}%`;
      this.lastP2Pct = p2Pct;
    }
  }

  public updateDelayedDamage(deltaTime: number) {
    // P1 delayed red bar catchup
    if (this.p1DamageDisplay > this.p1TargetHealth) {
      this.p1DamageDisplay = Math.max(this.p1TargetHealth, this.p1DamageDisplay - deltaTime * 400);
      const damPct = Math.round((this.p1DamageDisplay / 1000) * 100);
      if (damPct !== this.lastP1DamPct) {
        this.p1DamageBar.style.width = `${damPct}%`;
        this.lastP1DamPct = damPct;
      }
    } else if (this.lastP1DamPct !== this.lastP1Pct) {
      this.p1DamageDisplay = this.p1TargetHealth;
      this.p1DamageBar.style.width = `${this.lastP1Pct}%`;
      this.lastP1DamPct = this.lastP1Pct;
    }

    // P2 delayed red bar catchup
    if (this.p2DamageDisplay > this.p2TargetHealth) {
      this.p2DamageDisplay = Math.max(this.p2TargetHealth, this.p2DamageDisplay - deltaTime * 400);
      const damPct = Math.round((this.p2DamageDisplay / 1000) * 100);
      if (damPct !== this.lastP2DamPct) {
        this.p2DamageBar.style.width = `${damPct}%`;
        this.lastP2DamPct = damPct;
      }
    } else if (this.lastP2DamPct !== this.lastP2Pct) {
      this.p2DamageDisplay = this.p2TargetHealth;
      this.p2DamageBar.style.width = `${this.lastP2Pct}%`;
      this.lastP2DamPct = this.lastP2Pct;
    }
  }

  public updateMeters(p1Meter: number, p2Meter: number) {
    const p1Clamped = Math.min(100, Math.floor(p1Meter));
    const p2Clamped = Math.min(100, Math.floor(p2Meter));

    if (p1Clamped !== this.lastP1Meter) {
      this.p1MeterFill.style.width = `${p1Clamped}%`;
      this.p1MeterVal.textContent = `${p1Clamped}%`;
      if (p1Clamped >= 100) this.p1MeterFill.classList.add('max');
      else this.p1MeterFill.classList.remove('max');
      this.lastP1Meter = p1Clamped;
    }

    if (p2Clamped !== this.lastP2Meter) {
      this.p2MeterFill.style.width = `${p2Clamped}%`;
      this.p2MeterVal.textContent = `${p2Clamped}%`;
      if (p2Clamped >= 100) this.p2MeterFill.classList.add('max');
      else this.p2MeterFill.classList.remove('max');
      this.lastP2Meter = p2Clamped;
    }
  }

  public updateTimer(seconds: number) {
    const ceilSec = Math.ceil(seconds);
    if (ceilSec !== this.lastSeconds) {
      this.timerEl.textContent = ceilSec.toString().padStart(2, '0');
      if (ceilSec <= 10) {
        this.timerEl.classList.add('low');
      } else {
        this.timerEl.classList.remove('low');
      }
      this.lastSeconds = ceilSec;
    }
  }

  public updateRounds(p1Wins: number, p2Wins: number) {
    this.p1Rounds.forEach((dot, i) => {
      if (i < p1Wins) dot.classList.add('won');
      else dot.classList.remove('won');
    });
    this.p2Rounds.forEach((dot, i) => {
      if (i < p2Wins) dot.classList.add('won');
      else dot.classList.remove('won');
    });
  }

  public showAnnouncement(text: string, durationMs: number = 1200) {
    this.announcerText.textContent = text;
    this.announcerBanner.classList.remove('hidden');

    // Force animation restart
    this.announcerBanner.style.animation = 'none';
    void this.announcerBanner.offsetWidth; // trigger reflow
    this.announcerBanner.style.animation = '';

    setTimeout(() => {
      this.announcerBanner.classList.add('hidden');
    }, durationMs);
  }

  public showCombo(player: 1 | 2, hits: number) {
    const el = player === 1 ? this.p1ComboEl : this.p2ComboEl;
    const countEl = player === 1 ? this.p1ComboCount : this.p2ComboCount;

    if (hits > 1) {
      countEl.textContent = hits.toString();
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  }

  public hideCombos() {
    this.p1ComboEl.classList.add('hidden');
    this.p2ComboEl.classList.add('hidden');
  }
}

