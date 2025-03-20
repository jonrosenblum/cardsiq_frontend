import { Component, inject } from '@angular/core';
import { SidebarService } from '../../../core/services/sidebar.service';
import { SharedModule } from '../../shared.module';
import { AuthService, isAdmin } from '../../../core/services/auth.service';
import { PopupBackdropComponent } from '../popup-backdrop/popup-backdrop.component';
import { QuickMessagePopupComponent } from '../quick-message-popup/quick-message-popup.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SharedModule, PopupBackdropComponent, QuickMessagePopupComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent extends SidebarService {
  active: boolean = true;
  isSidebarOpen: boolean = true;
  isFullyOpened: boolean = true;
  logoutConfirmation: boolean = false;

  authservice: AuthService = inject(AuthService);
  isAdmin: boolean = isAdmin();
  currentUserRole: string = this.authservice.getUserRole();

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
