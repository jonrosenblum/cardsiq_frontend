import {
  Component,
  inject,
  Input,
  signal,
  WritableSignal,
} from '@angular/core';
import { SharedModule } from '../../shared.module';
import { Order } from '../../../pages/orders/orders-listing/orders-listing.component';
import { isAdmin, isVendor } from '../../../core/services/auth.service';
import { DialogBoxService } from '../../../core/services/dialogbox.service';
import { OrderDetailPopupComponent } from '../../../pages/orders/order-detail-popup/order-detail-popup.component';
import { EditOrderComponent } from '../../../pages/orders/edit-order/edit-order.component';
import { PopupBackdropComponent } from '../popup-backdrop/popup-backdrop.component';

@Component({
  selector: 'app-orders-table',
  imports: [SharedModule,EditOrderComponent,PopupBackdropComponent,OrderDetailPopupComponent],
  templateUrl: './orders-table.component.html',
  styleUrl: './orders-table.component.scss',
})
export class OrdersTableComponent {
  @Input() orders: Order[] = [];

  isAdmin: boolean = isAdmin();
  isVendor: boolean = isVendor();
  selectedOrders: WritableSignal<string[]> = signal([]);

  showDetailPopup: boolean = false;
  selectedOrder: Order | null = null;
  tableOptionDropdown: boolean = false;
  openedMenu: number | undefined = undefined;
  isEditOrder: boolean = false;

  dialogBoxService: DialogBoxService = inject(DialogBoxService);

  openDetailPopup(order: Order) {
    this.selectedOrder = order;
    // this.dialogBoxService.open(OrderDetailPopupComponent, order);
    this.showDetailPopup = true;
  }

  toggleMenu(index: number) {
    this.openedMenu = this.openedMenu === index ? undefined : index;
  }

  /** Toggle selection for individual order **/
  toggleSelection(orderId: string) {
    const currentSelection = this.selectedOrders();
    if (currentSelection.includes(orderId)) {
      this.selectedOrders.set(currentSelection.filter((id) => id !== orderId));
    } else {
      this.selectedOrders.set([...currentSelection, orderId]);
    }
  }

  /** Toggle "Select All" checkbox **/
  toggleSelectAll() {
    if (this.selectedOrders().length === this.orders.length) {
      this.selectedOrders.set([]); // Unselect all
    } else {
      this.selectedOrders.set(this.orders.map((order) => order.id)); // Select all
    }
  }

  /** Check if an order is selected **/
  isSelected(orderId: string): boolean {
    return this.selectedOrders().includes(orderId);
  }

  /** Check if all rows are selected **/
  isAllSelected(): boolean {
    return (
      this.selectedOrders().length === this.orders.length &&
      this.orders.length > 0
    );
  }
}
