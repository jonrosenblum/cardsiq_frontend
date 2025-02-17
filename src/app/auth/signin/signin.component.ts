import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormGroup } from '@angular/forms';
import { InputFieldComponent } from '../../shared/forms/input-field/input-field.component';
import { FormUtilityService } from '../../core/services/form-utils.service';
import { LoginForm } from '../../shared/forms.config';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-signin',
  imports: [SharedModule, InputFieldComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
  providers: [AuthService, ToastService],
})
export class SigninComponent {
  rememberMe: boolean = false;
  formSubmitted: boolean = false;
  submitLoading: boolean = false;
  loginForm: FormGroup = LoginForm;

  formUtilityService: FormUtilityService = inject(FormUtilityService);
  authService: AuthService = inject(AuthService);
  toastService: ToastService = inject(ToastService);

  submitLoginForm() {
    this.submitLoading = true;
    const { email, password } = this.loginForm.value;

    // Call login API
    this.authService.login(email, password).subscribe({
      next: (response) => {
        this.toastService.success(
          `Welcome, ${response.user.name}! Your token is: ${response.token}`,
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
