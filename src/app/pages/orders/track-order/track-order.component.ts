import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SubHeaderComponent } from '../../../shared/components/dashboard/sub-header/sub-header.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-track-order',
  imports: [SharedModule, SubHeaderComponent],
  templateUrl: './track-order.component.html',
  styleUrl: './track-order.component.scss',
})
export class TrackOrderComponent {
  constructor(public location: Location) {}
}
