import { Component } from '@angular/core';
import { SidebarService } from '../../../core/services/sidebar.service';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent extends SidebarService {
  active: boolean = true;
  isSidebarOpen: boolean = true;
  isFullyOpened: boolean = true;
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    if (this.isSidebarOpen) {
      setTimeout(() => {
        this.isFullyOpened = true;
      }, 1000);
    } else {
      this.isFullyOpened = false;
    }
  }
}
