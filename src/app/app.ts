import { Component } from '@angular/core';
import { MainContentComponent } from './layout/main-content/main-content.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, SidebarComponent, MainContentComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
