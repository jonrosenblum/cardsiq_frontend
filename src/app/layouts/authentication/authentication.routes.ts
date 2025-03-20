import { Routes } from '@angular/router';
import { LoginGuard } from '../../core/guards/login.guard';

export const authenticationRoutes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      import('./authentication.component').then(
        (m) => m.AuthenticationComponent,
      ),
    children: [
      {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full',
      },
      {
        path: 'signin',
        canActivate: [LoginGuard],
        loadComponent: () =>
          import('./../../auth/signin/signin.component').then(
            (m) => m.SigninComponent,
          ),
      },
      {
        path: 'signup',
        loadComponent: () =>
          import('./../../auth/signup/signup.component').then(
            (m) => m.SignupComponent,
          ),
      },
      {
        path: 'forgot-password',
        loadComponent: () =>
          import('./../../auth/forgot-password/forgot-password.component').then(
            (m) => m.ForgotPasswordComponent,
          ),
      },
      {
        path: 'reset-password',
        loadComponent: () =>
          import('./../../auth/reset-password/reset-password.component').then(
            (m) => m.ResetPasswordComponent,
          ),
      },
      {
        path: 'otp-verification',
        loadComponent: () =>
          import(
            './../../auth/otp-verification/otp-verification.component'
          ).then((m) => m.OtpVerificationComponent),
      },
    ],
  },
];
