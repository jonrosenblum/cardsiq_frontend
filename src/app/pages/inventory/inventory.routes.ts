import { Routes } from '@angular/router';

export const inventoryRoutes: Routes = [
  {
    path: '',
    redirectTo: 'inventory',
    pathMatch: 'full',
  },
  {
    path: 'inventory',
    loadComponent: () =>
      import('./inventory.component').then((m) => m.InventoryComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./inventory-listing/inventory-listing.component').then(
            (m) => m.InventoryListingComponent,
          ),
      },
      {
        path: ':key/details',
        loadComponent: () =>
          import('./inventory-detail/inventory-detail.component').then(
            (m) => m.InventoryDetailComponent,
          ),
      },
    ],
  },
];
