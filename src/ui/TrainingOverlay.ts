import { CollisionSystem } from '../engine/CollisionSystem';
import { FighterAI, DummyBehavior } from '../ai/FighterAI';
import { AttackMoveData } from '../fighters/Fighter';

export class TrainingOverlay {
  private overlayEl: HTMLElement;
  private toggleHitboxes: HTMLInputElement;
  private toggleFrameData: HTMLInputElement;
  private dummySelect: HTMLSelectElement;
  private frameDataBox: HTMLElement;
  private fdStartup: HTMLElement;
  private fdActive: HTMLElement;
  private fdRecovery: HTMLElement;
  private fdAdv: HTMLElement;

  constructor(collisionSystem: CollisionSystem, ai: FighterAI) {
    this.overlayEl = document.getElementById('training-overlay')!;
    this.toggleHitboxes = document.getElementById('toggle-hitboxes') as HTMLInputElement;
    this.toggleFrameData = document.getElementById('toggle-frame-data') as HTMLInputElement;
    this.dummySelect = document.getElementById('dummy-action-select') as HTMLSelectElement;

    this.frameDataBox = document.getElementById('frame-data-display')!;
    this.fdStartup = document.getElementById('fd-startup')!;
    this.fdActive = document.getElementById('fd-active')!;
    this.fdRecovery = document.getElementById('fd-recovery')!;
    this.fdAdv = document.getElementById('fd-adv')!;

    // Wire up events
    this.toggleHitboxes?.addEventListener('change', () => {
      collisionSystem.setDebugVisible(this.toggleHitboxes.checked);
    });

    this.toggleFrameData?.addEventListener('change', () => {
      if (this.toggleFrameData.checked) {
        this.frameDataBox.classList.remove('hidden');
      } else {
        this.frameDataBox.classList.add('hidden');
      }
    });

    this.dummySelect?.addEventListener('change', () => {
      ai.dummyBehavior = this.dummySelect.value as DummyBehavior;
    });

    // Collapsible training panel toggle
    const toggleBtn = document.getElementById('btn-toggle-training');
    const headerToggle = document.getElementById('training-header-toggle');
    const toggleCollapse = () => {
      this.overlayEl.classList.toggle('minimized');
      if (toggleBtn) {
        toggleBtn.textContent = this.overlayEl.classList.contains('minimized') ? '▼' : '▲';
      }
    };
    toggleBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleCollapse();
    });
    headerToggle?.addEventListener('click', () => {
      toggleCollapse();
    });
  }

  public setVisible(visible: boolean) {
    if (visible) this.overlayEl.classList.remove('hidden');
    else this.overlayEl.classList.add('hidden');
  }

  public updateFrameData(move: AttackMoveData) {
    this.fdStartup.textContent = `${move.startup}f`;
    this.fdActive.textContent = `${move.active}f`;
    this.fdRecovery.textContent = `${move.recovery}f`;

    // Calculate frame advantage on block:
    // Advantage = BlockStun - Recovery
    const advOnBlock = move.blockStun - move.recovery;
    const advOnHit = move.hitStun - move.recovery;
    const blockSign = advOnBlock >= 0 ? `+${advOnBlock}` : `${advOnBlock}`;
    const hitSign = advOnHit >= 0 ? `+${advOnHit}` : `${advOnHit}`;

    this.fdAdv.textContent = `Hit: ${hitSign}f | Block: ${blockSign}f`;
  }
}

