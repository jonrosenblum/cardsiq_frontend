import { Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OtpVerificationForm } from '../../shared/forms.config';
import { FormUtilityService } from '../../core/services/form-utils.service';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';
import { SharedModule } from '../../shared/shared.module';
import { getQueryParam, redirectTo } from '../../shared/common-utils';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-otp-verification',
  imports: [SharedModule],
  templateUrl: './otp-verification.component.html',
  styleUrl: './otp-verification.component.scss',
  providers: [AuthService, ToastService],
})
export class OtpVerificationComponent {
  countdown: number = 60; // Initial countdown value in seconds
  timer: any; // Reference to the timer
  formSubmitted: boolean = false;
  submitLoading: boolean = false;
  email: string = '';
  otpVerificationForm: FormGroup = OtpVerificationForm;

  formUtilityService: FormUtilityService = inject(FormUtilityService);
  authService: AuthService = inject(AuthService);
  toastService: ToastService = inject(ToastService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);

  submitForgotPasswordForm() {
    this.submitLoading = true;

    setTimeout(() => {
      this.submitLoading = false;
      this.toastService.success(
        'Please check your email to reset the password.',
      );
      redirectTo(this.router, '/auth/reset-password');
    }, 2000);
  }

  ngOnInit(): void {
    this.startCountdown();
    getQueryParam(this.activatedRoute, 'email').subscribe((email) => {
      this.email = email || '';
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.timer); // Clear the timer if the component is destroyed
  }

  startCountdown(): void {
    this.timer = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        clearInterval(this.timer); // Stop the timer once it reaches 0
      }
    }, 1000); // Update the countdown every second (1000ms)
  }
}
