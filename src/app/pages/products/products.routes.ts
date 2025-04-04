import { Routes } from '@angular/router';

export const productsRoutes: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
    },
    {
        path: 'products',
        loadComponent: () =>
            import('./products.component').then((m) => m.ProductsComponent),
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./products-listing/products-listing.component').then(
                        (m) => m.ProductsListingComponent,
                    ),
            },
            {
                path: ':key/details',
                loadComponent: () =>
                    import('./products-details/products-details.component').then(
                        (m) => m.ProductsDetailsComponent,
                    ),
            },
        ],
    },
];
