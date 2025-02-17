import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  imports: [CommonModule],
  templateUrl: './stats-card.component.html',
  styleUrl: './stats-card.component.scss',
})
export class StatsCardComponent {
  @Input() title: string = '';
  @Input() value: string | number = '';
  @Input() percentage: string = '';
  @Input() description: string = '';
  @Input() badgeColor: string = '#1A9882'; // Default green color
  @Input() badgeBg: string = 'bg-[#E9FAF7]'; // Default green background
}
