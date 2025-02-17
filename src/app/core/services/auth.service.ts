import { inject, Injectable } from '@angular/core';
import { catchError, delay, of } from 'rxjs';
import { ApiService } from './api.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiService: ApiService = inject(ApiService);
  toastService: ToastService = inject(ToastService);

  // Function to login a user
  login(email: string, password: string) {
    // Simulate a real API response
    return of({
      token: 'dummy-jwt-token',
      user: {
        id: 1,
        email: email,
        name: 'Jon',
      },
    }).pipe(
      delay(1000), // Simulate network delay
      catchError((error) => {
        console.error('Login failed:', error);
        throw new Error('Login failed');
      }),
    );
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
}
