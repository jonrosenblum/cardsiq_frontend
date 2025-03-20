import { Routes } from '@angular/router';
import { dashboardRoutes } from './layouts/dashboard/dashboard.routes';
import { authenticationRoutes } from './layouts/authentication/authentication.routes';
import { FeaturePermissionsComponent } from './pages/feature-permissions/feature-permissions.component';
import { Notfound } from './pages/notfound/notfound';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPoliciesComponent } from './pages/privacy-policies/privacy-policies.component';
import { HelpPageComponent } from './pages/help/help.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  ...authenticationRoutes,
  ...dashboardRoutes,
  { path: 'feature-flags', component: FeaturePermissionsComponent },
  { path: 'notfound', component: Notfound },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
  { path: 'help', component: HelpPageComponent },
  { path: 'privacy-policy', component: PrivacyPoliciesComponent },
  { path: '**', redirectTo: '/notfound' },
];
