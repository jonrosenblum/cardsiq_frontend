import {
  Component,
  computed,
  inject,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { SharedModule } from '../../shared.module';
import { NotificationPopupComponent } from '../notification-popup/notification-popup.component';
import { AuthService, IUser } from '../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  imports: [SharedModule, NotificationPopupComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  authService: AuthService = inject(AuthService);

  showNotificationPanel: WritableSignal<boolean> = signal(false);
  currentUser: Signal<IUser | null> = computed(() =>
    this.authService.getCurrentUser(),
  );

  toggleNotificationPanel(isShow?: boolean) {
    this.showNotificationPanel.set(isShow ?? !this.showNotificationPanel());
  }
}
