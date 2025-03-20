import {
  computed,
  inject,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { catchError, delay, of, throwError } from 'rxjs';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

export interface IUser {
  id: number;
  email: string;
  name: string;
  phone: string;
  password: string;
  role: string;
  image: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: IUser[] = [
    {
      id: Math.random(),
      email: 'admin@admin.com',
      name: 'Admin',
      phone: '12888768882',
      password: 'admin@123',
      image: 'https://avatar.iran.liara.run/public',
      role: 'admin',
    },
    {
      id: Math.random(),
      email: 'vendor@vendor.com',
      name: 'Vendor',
      phone: '98722665342',
      password: 'vendor@123',
      image: 'https://avatar.iran.liara.run/public',
      role: 'vendor',
    },
  ];

  apiService: ApiService = inject(ApiService);
  router: Router = inject(Router);

  constructor() {
    // Load user from local storage if available
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      currentUser.set(JSON.parse(storedUser));
    }
  }

  // Function to login a user
  login(email: string, password: string) {
    // Simulate a real API response
    const user = this.users.find(
      (u) => u.email === email && u.password === password,
    );

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      currentUser.set(user);
      console.log(currentUser());

      return of(user).pipe(delay(4000));
    } else {
      return throwError(() => new Error('Invalid credentials')).pipe(
        delay(4000),
      );
    }
  }

  // Function to signup a user
  signup(email: string, password: string, firstName: string, lastName: string) {
    // Simulate a real API response
    return of({
      token: 'dummy-jwt-token',
      user: {
        id: Math.random(),
        email: email,
        name: firstName + ' ' + lastName,
      },
    }).pipe(
      delay(1000), // Simulate network delay
      catchError((error) => {
        console.error('Signup failed:', error);
        throw new Error('Signup failed');
      }),
    );
  }

  /** Check if User is Logged In **/
  isAuthenticated(): boolean {
    const user = localStorage.getItem('currentUser');
    return user ? true : false;
  }

  /** Logout **/
  logout(): void {
    currentUser.set(null);
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth/signin']);
  }

  /** Get Current User **/
  getCurrentUser(): any {
    return currentUser();
  }

  /** Get User Role **/
  getUserRole(): string {
    return currentUser()?.role || '';
  }
}

export const currentUser: WritableSignal<IUser | null> = signal(null); // ✅ Global Signal
export const isAdmin: Signal<boolean> = computed(
  () => currentUser()?.role === 'admin',
);
export const isVendor: Signal<boolean> = computed(
  () => currentUser()?.role === 'vendor',
);
