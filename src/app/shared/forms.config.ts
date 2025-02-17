import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

export const LoginForm = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required]),
});

export const SignupForm = new FormGroup({
  firstName: new FormControl('', [Validators.required]),
  lastName: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [
    Validators.required,
    passwordStrengthValidator,
  ]),
  confirmPassword: new FormControl('', [
    Validators.required,
    confirmPasswordValidator,
  ]),
});

export const ForgotPasswordForm = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
});

export const OtpVerificationForm = new FormGroup({
  code: new FormControl('', [Validators.required, Validators.minLength(4)]),
});

export const ResetPasswordForm = new FormGroup({
  password: new FormControl('', [
    Validators.required,
    passwordStrengthValidator,
  ]),
  confirmPassword: new FormControl('', [
    Validators.required,
    confirmPasswordValidator,
  ]),
});

// ✅ Custom validator to check if password and confirm password match
function confirmPasswordValidator(control: AbstractControl) {
  if (!control.parent) return null; // Ensure parent exists
  const password = control.parent.get('password')?.value;
  const cPassword = control.value;

  return password === cPassword ? null : { passwordMismatch: true };
}

// ✅ Password Strength Validator (Tracks individual conditions)
function passwordStrengthValidator(
  control: AbstractControl,
): ValidationErrors | null {
  const value: string = control.value || '';
  if (!value) return null;

  return {
    minLength: value.length >= 8 ? null : true,
    hasUpperCase: /[A-Z]/.test(value) ? null : true,
    hasLowerCase: /[a-z]/.test(value) ? null : true,
    hasNumber: /[0-9]/.test(value) ? null : true,
  };
}
