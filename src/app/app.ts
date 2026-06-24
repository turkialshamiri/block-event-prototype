import { Component } from '@angular/core';
import { EventSummaryPanelComponent } from './layout/event-summary-panel/event-summary-panel.component';
import { MainContentComponent } from './layout/main-content/main-content.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { SummaryPanelComponent } from './layout/summary-panel/summary-panel.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    SidebarComponent,
    SummaryPanelComponent,
    EventSummaryPanelComponent,
    MainContentComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
