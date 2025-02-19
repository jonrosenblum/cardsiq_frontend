import { Routes } from '@angular/router';
import { orderRoutes } from '../../pages/orders/orders.routes';
import { accountSettingRoutes } from '../../pages/account-setting/account-setting.routes';

export const dashboardRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dashboard.component').then((m) => m.DashboardComponent),
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./../../pages/home/home.component').then(
            (m) => m.HomeComponent,
          ),
      },
      ...orderRoutes,
      ...accountSettingRoutes,
      {
        path: 'payments',
        loadComponent: () =>
          import('./../../pages/payments/payments.component').then(
            (m) => m.PaymentsComponent,
          ),
      },
      {
        path: 'inventory',
        loadComponent: () =>
          import('./../../pages/inventory/inventory.component').then(
            (m) => m.InventoryComponent,
          ),
      },
      {
        path: 'notifications',
        loadComponent: () =>
          import('./../../pages/notifications/notifications.component').then(
            (m) => m.NotificationsComponent,
          ),
      },
    ],
  },
];
