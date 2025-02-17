import { Component, EventEmitter, inject, Output } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { INotification } from '../../interfaces/INotification';
import { CommonUtils } from '../../common-utils';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-notification-popup',
  imports: [SharedModule],
  templateUrl: './notification-popup.component.html',
  styleUrl: './notification-popup.component.scss',
})
export class NotificationPopupComponent {
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>(false);
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
