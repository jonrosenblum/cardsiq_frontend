import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SubHeaderComponent } from '../../shared/components/dashboard/sub-header/sub-header.component';
import { StatsCardComponent } from '../../shared/components/dashboard/stats-card/stats-card.component';
import { PAYMENTS } from '../../shared/constant';
import { isAdmin } from '../../core/services/auth.service';

@Component({
  selector: 'app-payments',
  imports: [SharedModule, SubHeaderComponent, StatsCardComponent],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss',
})
export class PaymentsComponent {
  isAdmin: boolean = isAdmin();
  payments: any[] = PAYMENTS;
}
