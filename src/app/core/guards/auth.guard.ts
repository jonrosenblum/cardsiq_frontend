import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const user = this.authService.getCurrentUser();

    if (!user) {
      this.router.navigate(['/auth/signin']);
      return false;
    }

    const requiredRole = route.data['role'];
    if (requiredRole && user.role !== requiredRole) {
      this.router.navigate(['/dashboard']); // Redirect unauthorized users
      return false;
    }

    return true;
  }
}
