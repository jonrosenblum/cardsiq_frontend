import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonUtils } from '../../shared/common-utils';

@Injectable({
  providedIn: 'root',
})
export class FormUtilityService extends CommonUtils {
  getFormError(
    form: FormGroup,
    fieldName: string,
    isFormSubmitted: boolean,
  ): string | undefined {
    const control = form.get(fieldName);

    if (isFormSubmitted && control?.errors) {
      if (control.hasError('required'))
        return `${this.camelCaseToCapitalizedWords(fieldName)} is required.`;
      if (control.hasError('email')) return 'Invalid email format.';
      if (control.hasError('minlength'))
        return `${this.capitalize(fieldName)} must be at least ${control.getError('minlength').requiredLength} characters long.`;
      if (control.hasError('maxlength'))
        return `${this.capitalize(fieldName)} must be at most ${control.getError('maxlength').requiredLength} characters long.`;
      if (control.hasError('pattern'))
        return `Invalid ${this.capitalize(fieldName)} format.`;
      if (control.hasError('passwordMismatch'))
        return `Confirm Password does not match Password.`;
    }

    return undefined;
  }

  private capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
