import { Component, signal, WritableSignal } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { NotificationPopupComponent } from '../notification-popup/notification-popup.component';

@Component({
  selector: 'app-header',
  imports: [SharedModule, NotificationPopupComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  showNotificationPanel: WritableSignal<boolean> = signal(false);

  toggleNotificationPanel(isShow?: boolean) {
    this.showNotificationPanel.set(isShow ?? !this.showNotificationPanel());
  }
}
