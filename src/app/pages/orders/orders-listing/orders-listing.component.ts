import { Component, signal, WritableSignal } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SubHeaderComponent } from '../../../shared/components/dashboard/sub-header/sub-header.component';
import { EditOrderComponent } from '../edit-order/edit-order.component';
import { PopupBackdropComponent } from '../../../shared/components/popup-backdrop/popup-backdrop.component';
import { OrderDetailPopupComponent } from '../order-detail-popup/order-detail-popup.component';
import { QuickSearchComponent } from '../../../shared/components/quick-search/quick-search.component';
import { isAdmin, isVendor } from '../../../core/services/auth.service';
import { ORDERS } from '../../../shared/constant';
import { OrdersTableComponent } from '../../../shared/components/orders-table/orders-table.component';

export interface Order {
  id: string;
  date: string;
  company: string;
  trackInfo: string;
  vendor: string;
  amount: string;
  status: string;
  statusColor: string;
  textColor: string;
}

@Component({
  selector: 'app-orders-listing',
  imports: [
    SharedModule,
    SubHeaderComponent,
    EditOrderComponent,
    PopupBackdropComponent,
    OrderDetailPopupComponent,
    QuickSearchComponent,
    OrdersTableComponent,
  ],
  templateUrl: './orders-listing.component.html',
  styleUrl: './orders-listing.component.scss',
})
export class OrdersListingComponent {
  isAdmin: boolean = isAdmin();
  isVendor: boolean = isVendor();
  selectedOrders: WritableSignal<string[]> = signal([]);

  showDetailPopup: boolean = false;
  selectedOrder: Order | null = null;
  tableOptionDropdown: boolean = false;
  openedMenu: number | undefined = undefined;
  isEditOrder: boolean = false;

  openDetailPopup(order: Order) {
    this.selectedOrder = order;
    this.showDetailPopup = true;
  }

  orders: Order[] = ORDERS;

  toggleMenu(index: number) {
    this.openedMenu = this.openedMenu === index ? undefined : index;
  }

  // Table Row Selection Logic

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
