import { Component, EventEmitter, Output } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { PopupBackdropComponent } from '../../../shared/components/popup-backdrop/popup-backdrop.component';

@Component({
  selector: 'app-edit-order',
  imports: [SharedModule, PopupBackdropComponent],
  templateUrl: './edit-order.component.html',
  styleUrl: './edit-order.component.scss',
})
export class EditOrderComponent {
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  vendorOptionDropdown: boolean = false;
  addNewVendor: boolean = false;
}
