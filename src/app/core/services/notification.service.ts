import { Injectable } from '@angular/core';
import { INotification } from '../../shared/interfaces/INotification';
import { NOTIFICATIONS } from '../../shared/constant';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  getNotification(): INotification[] {
    const rawNotifications: INotification[] = NOTIFICATIONS;
    return rawNotifications;
  }

  groupNotificationsByDate(
    notifications: INotification[],
  ): Record<string, INotification[]> {
    const today = new Date().setHours(0, 0, 0, 0);
    const yesterday = new Date(
      new Date().setDate(new Date().getDate() - 1),
    ).setHours(0, 0, 0, 0);

    return notifications.reduce(
      (acc, notification) => {
        const notificationDate = new Date(notification.timestamp).setHours(
          0,
          0,
          0,
          0,
        );
        let key = '';

        if (notificationDate === today) key = 'Today';
        else if (notificationDate === yesterday) key = 'Yesterday';
        else key = new Date(notification.timestamp).toLocaleDateString();

        if (!acc[key]) acc[key] = [];
        acc[key].push(notification);

        return acc;
      },
      {} as Record<string, INotification[]>,
    );
  }
}
