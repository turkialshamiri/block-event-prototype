import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LayoutUiService {
  readonly showEventWorkspace = signal(false);
}
