import { Routes } from '@angular/router';

export const accountSettingRoutes: Routes = [
  {
    path: '',
    redirectTo: 'settings',
    pathMatch: 'full',
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./account-setting.component').then(
        (m) => m.AccountSettingComponent,
      ),
    children: [
      {
        path: 'profile',
        loadComponent: () =>
          import('./profile/profile.component').then((m) => m.ProfileComponent),
      },
      {
        path: 'billing',
        loadComponent: () =>
          import('./billing/billing.component').then((m) => m.BillingComponent),
      },
      {
        path: 'security',
        loadComponent: () =>
          import('./security/security.component').then(
            (m) => m.SecurityComponent,
          ),
      },
      {
        path: 'profile-preferences',
        loadComponent: () =>
          import('./profile-preference/profile-preference.component').then(
            (m) => m.ProfilePreferenceComponent,
          ),
      },
    ],
  },
];
