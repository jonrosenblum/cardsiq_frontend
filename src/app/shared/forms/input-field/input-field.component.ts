import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-input-field',
  imports: [SharedModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputFieldComponent,
      multi: true,
    },
  ],
})
export class InputFieldComponent implements ControlValueAccessor {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() id: string = '';
  @Input() errorMessage?: string; // Optional error message for validation
  @Input() validationMessages: { message: string; valid: boolean }[] = [];

  @Output() typeEvent: EventEmitter<string> = new EventEmitter<string>();

  ngOnChange() {
    console.log(this.validationMessages);
  }
  value: string = '';
  isDisabled: boolean = false;
  isPasswordVisible: boolean = false;

  // Functions to be defined for ngModel / formControlName compatibility
  onChange: (value: string) => void = () => {
    // Implement the onChange function
  };
  onTouched: () => void = () => {
    // Implement the onTouched function
  };

  writeValue(value: string): void {
    this.value = value;
    this.onChange(value);
  }

  writeValueFromEvent(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.writeValue(inputElement.value);
      this.typeEvent.emit(inputElement.value);
    }
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
