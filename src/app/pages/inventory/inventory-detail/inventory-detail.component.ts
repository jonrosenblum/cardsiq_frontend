import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-inventory-detail',
  imports: [SharedModule],
  templateUrl: './inventory-detail.component.html',
  styleUrl: './inventory-detail.component.scss',
})
export class InventoryDetailComponent {
  @Input() inPopup: boolean = false;
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>(false);
}
