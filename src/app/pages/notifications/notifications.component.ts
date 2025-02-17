import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SubHeaderComponent } from '../../shared/components/dashboard/sub-header/sub-header.component';
import { INotification } from '../../shared/interfaces/INotification';
import { CommonUtils } from '../../shared/common-utils';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-notifications',
  imports: [SharedModule, SubHeaderComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss',
})
export class NotificationsComponent {
  notifications: Record<string, INotification[]> = {};

  commonUtils: CommonUtils = inject(CommonUtils);
  notificationService: NotificationService = inject(NotificationService);
  constructor() {
    this.loadNotifications();
  }

  loadNotifications() {
    const rawNotifications: INotification[] =
      this.notificationService.getNotification();
    this.notifications =
      this.notificationService.groupNotificationsByDate(rawNotifications);
  }

  formatTime(timestamp: Date | string): string {
    return this.commonUtils.formatDateTimeInAgo(timestamp);
  }
}
