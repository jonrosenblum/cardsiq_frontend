import { Routes } from '@angular/router';

export const orderRoutes: Routes = [
  {
    path: '',
    redirectTo: 'orders',
    pathMatch: 'full',
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('./orders.component').then((m) => m.OrdersComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./orders-listing/orders-listing.component').then(
            (m) => m.OrdersListingComponent,
          ),
      },
      // {
      //   path: 'create',
      //   loadComponent: () =>
      //     import('./leads-form/leads-form.component').then(
      //       (m) => m.LeadsFormComponent,
      //     ),
      // },
      {
        path: ':key/details',
        loadComponent: () =>
          import('./order-detail/order-detail.component').then(
            (m) => m.OrderDetailComponent,
          ),
      },
      {
        path: ':key/track-order',
        loadComponent: () =>
          import('./track-order/track-order.component').then(
            (m) => m.TrackOrderComponent,
          ),
      },
    ],
  },
];
