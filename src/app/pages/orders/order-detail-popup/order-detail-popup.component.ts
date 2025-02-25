import { Component, EventEmitter, Output } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-order-detail-popup',
  imports: [SharedModule],
  templateUrl: './order-detail-popup.component.html',
  styleUrl: './order-detail-popup.component.scss',
})
export class OrderDetailPopupComponent {
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>(false);
}
