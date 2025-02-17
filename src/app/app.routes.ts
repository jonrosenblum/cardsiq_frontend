import { Routes } from '@angular/router';
import { dashboardRoutes } from './layouts/dashboard/dashboard.routes';
import { authenticationRoutes } from './layouts/authentication/authentication.routes';
import { FeaturePermissionsComponent } from './pages/feature-permissions/feature-permissions.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  ...authenticationRoutes,
  ...dashboardRoutes,
  { path: 'feature-flags', component: FeaturePermissionsComponent },
];
