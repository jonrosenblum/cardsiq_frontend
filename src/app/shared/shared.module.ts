import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterLink } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputOtpModule } from 'primeng/inputotp';
import { ToastService } from '../core/services/toast.service';
import { AuthService } from '../core/services/auth.service';

const shared = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterLink,
  AngularSvgIconModule,
];

const primeNg = [CheckboxModule, ButtonModule, InputOtpModule];

@NgModule({
  declarations: [],
  imports: [...shared, ...primeNg],
  exports: [...shared, ...primeNg],
  providers: [AuthService, ToastService],
})
export class SharedModule {}
