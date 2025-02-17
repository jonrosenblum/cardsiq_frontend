import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormGroup } from '@angular/forms';
import { ResetPasswordForm } from '../../shared/forms.config';
import { FormUtilityService } from '../../core/services/form-utils.service';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';
import { Router } from '@angular/router';
import { redirectTo } from '../../shared/common-utils';
import { InputFieldComponent } from '../../shared/forms/input-field/input-field.component';
import { ValidationMessages } from '../../shared/enums/validation-messages.enum';

@Component({
  selector: 'app-reset-password',
  imports: [SharedModule, InputFieldComponent],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
  providers: [AuthService, ToastService],
})
export class ResetPasswordComponent {
  formSubmitted: boolean = false;
  submitLoading: boolean = false;
  resetPasswordForm: FormGroup = ResetPasswordForm;
  passwordValidationMessages: { message: string; valid: boolean }[] = [];

  formUtilityService: FormUtilityService = inject(FormUtilityService);
  authService: AuthService = inject(AuthService);
  toastService: ToastService = inject(ToastService);
  router: Router = inject(Router);

  get passwordControl() {
    return this.resetPasswordForm.get('password');
  }

  get passwordErrors() {
    return this.passwordControl?.errors || {};
  }

  getPasswordValidationMessages() {
    this.passwordValidationMessages = [
      {
        message: ValidationMessages.MinLength,
        valid: !this.passwordErrors['minLength'],
      },
      {
        message: ValidationMessages.HasNumber,
        valid: !this.passwordErrors['hasNumber'],
      },
      {
        message: ValidationMessages.HasUpperCase,
        valid: !this.passwordErrors['hasUpperCase'],
      },
      {
        message: ValidationMessages.HasLowerCase,
        valid: !this.passwordErrors['hasLowerCase'],
      },
    ];
  }

  submitResetPasswordForm() {
    this.submitLoading = true;
    setTimeout(() => {
      this.submitLoading = false;
      this.toastService.success('Your password has been updated successfully');
      redirectTo(this.router, '/auth/signin');
    }, 2000);
  }
}
