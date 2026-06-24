import { Component, inject, output } from '@angular/core';
import { LayoutUiService } from '../../core/layout-ui.service';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.scss',
})
export class ActionBarComponent {
  private readonly layoutUi = inject(LayoutUiService);

  protected readonly showEventWorkspace = this.layoutUi.showEventWorkspace;

  readonly createEvent = output<void>();

  protected onCreateEvent(): void {
    this.createEvent.emit();
  }
}
