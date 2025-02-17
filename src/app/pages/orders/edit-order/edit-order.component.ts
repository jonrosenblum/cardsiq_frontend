import { Component, EventEmitter, Output } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-edit-order',
  imports: [SharedModule],
  templateUrl: './edit-order.component.html',
  styleUrl: './edit-order.component.scss',
})
export class EditOrderComponent {
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  vendorOptionDropdown: boolean = false;
  addNewVendor: boolean = false;
}
