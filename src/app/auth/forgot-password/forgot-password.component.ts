import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { InputFieldComponent } from '../../shared/forms/input-field/input-field.component';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';
import { FormGroup } from '@angular/forms';
import { ForgotPasswordForm } from '../../shared/forms.config';
import { FormUtilityService } from '../../core/services/form-utils.service';
import { redirectTo } from '../../shared/common-utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  imports: [SharedModule, InputFieldComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
  providers: [AuthService, ToastService],
})
export class ForgotPasswordComponent {
  formSubmitted: boolean = false;
  submitLoading: boolean = false;
  forgotPasswordForm: FormGroup = ForgotPasswordForm;

  formUtilityService: FormUtilityService = inject(FormUtilityService);
  authService: AuthService = inject(AuthService);
  toastService: ToastService = inject(ToastService);
  router: Router = inject(Router);

  submitForgotPasswordForm() {
    this.submitLoading = true;

    setTimeout(() => {
      this.submitLoading = false;
      this.toastService.success('OTP code send to your email.');
      redirectTo(
        this.router,
        '/auth/otp-verification',
        {},
        { email: this.forgotPasswordForm.value.email },
      );
    }, 2000);
  }
}
