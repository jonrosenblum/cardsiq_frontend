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

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }


}
