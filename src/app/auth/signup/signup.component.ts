import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { InputFieldComponent } from '../../shared/forms/input-field/input-field.component';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';
import { FormGroup } from '@angular/forms';
import { FormUtilityService } from '../../core/services/form-utils.service';
import { SignupForm } from '../../shared/forms.config';
import { ValidationMessages } from '../../shared/enums/validation-messages.enum';

@Component({
  selector: 'app-signup',
  imports: [SharedModule, InputFieldComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  providers: [AuthService, ToastService],
})
export class SignupComponent {
  formSubmitted: boolean = false;
  submitLoading: boolean = false;
  signupForm: FormGroup = SignupForm;
  passwordValidationMessages: { message: string; valid: boolean }[] = [];

  formUtilityService: FormUtilityService = inject(FormUtilityService);
  authService: AuthService = inject(AuthService);
  toastService: ToastService = inject(ToastService);

  get passwordControl() {
    return this.signupForm.get('password');
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

  submitSignupForm() {
    this.submitLoading = true;
    const { firstName, lastName, email, password } = this.signupForm.value;

    // Call login API
    this.authService.signup(email, password, firstName, lastName).subscribe({
      next: (response) => {
        this.toastService.success(
          `Welcome, ${response.user.name}! Your account created successfully.`,
        );
        this.submitLoading = false;
      },
      error: (error) => {
        this.toastService.error(`Login failed ${error}`);
        this.submitLoading = false;
      },
    });
  }
}
