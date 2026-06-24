import { Component, output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.scss',
})
export class ActionBarComponent {
  readonly createEvent = output<void>();

  protected onCreateEvent(): void {
    this.createEvent.emit();
  }
}
