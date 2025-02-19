import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { PAYMENT_METHODS } from '../../../shared/constant';

export interface PaymentMethod {
  name: string;
  balance?: string;
  logo: string;
  isSelected: boolean;
  isDefault?: boolean;
}

@Component({
  selector: 'app-billing',
  imports: [SharedModule],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.scss',
})
export class BillingComponent {
  paymentMethods: PaymentMethod[] = PAYMENT_METHODS;

  selectPaymentMethod(paymentMethod: PaymentMethod) {
    this.paymentMethods.forEach((method) => {
      method.isDefault = false;
      method.isSelected = false;
      if (method === paymentMethod) {
        method.isDefault = true;
      }
    });
    paymentMethod.isSelected = true;
  }
}
