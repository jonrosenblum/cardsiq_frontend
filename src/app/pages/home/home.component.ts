import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SubHeaderComponent } from '../../shared/components/dashboard/sub-header/sub-header.component';
import { StatsCardComponent } from '../../shared/components/dashboard/stats-card/stats-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, SubHeaderComponent, StatsCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  orders: any[] = [
    {
      id: 'ORD001',
      date: 'October 30,2024',
      amount: '$128.99',
      status: 'Rejected',
      statusColor: '#FFEDED',
      textColor: '#FE4D4F',
      company: 'fedex',
      trackInfo: '#',
      vendor: 'CardNation',
    },
    {
      id: 'ORD002',
      date: 'May 6,2024',
      amount: '$214.81',
      status: 'Pending',
      statusColor: '#E6ECFE',
      textColor: '#003DF6',
      company: 'fedex',
      trackInfo: '#',
      vendor: 'CardNation',
    },
    {
      id: 'ORD003',
      date: 'March 23,2024',
      amount: '$305.22',
      status: 'Rejected',
      statusColor: '#FFEDED',
      textColor: '#FE4D4F',
      company: 'fedex',
      trackInfo: '#',
      vendor: 'CardNation',
    },
    {
      id: 'ORD004',
      date: 'May 20,2024',
      amount: '$181.70',
      status: 'Pending',
      statusColor: '#E6ECFE',
      textColor: '#003DF6',
      company: 'fedex',
      trackInfo: '#',
      vendor: 'CardNation',
    },
    {
      id: 'ORD005',
      date: 'July 14,2024',
      amount: '$167.84',
      status: 'Approved',
      statusColor: '#EEF9E8',
      textColor: '#53C31B',
      company: 'fedex',
      trackInfo: '#',
      vendor: 'CardNation',
    },
  ];
}
