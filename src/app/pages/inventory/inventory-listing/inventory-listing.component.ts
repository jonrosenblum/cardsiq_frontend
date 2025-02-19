import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SubHeaderComponent } from '../../../shared/components/dashboard/sub-header/sub-header.component';
import { PopupBackdropComponent } from '../../../shared/components/popup-backdrop/popup-backdrop.component';
import { QuickMessagePopupComponent } from '../../../shared/components/quick-message-popup/quick-message-popup.component';
import { TableRow } from '../inventory.component';

@Component({
  selector: 'app-inventory-listing',
  imports: [SharedModule, SubHeaderComponent, PopupBackdropComponent, QuickMessagePopupComponent],
  templateUrl: './inventory-listing.component.html',
  styleUrl: './inventory-listing.component.scss'
})
export class InventoryListingComponent {
  showSuccessPopup:boolean = false;
  showFailedPopup:boolean = false;

  tableRows: TableRow[] = [
    { number: 1, range: 'Under 75', count: 2 },
    { number: 2, range: '75.00 - 199.00', count: 27 },
    { number: 3, range: '200.00 - 299.00', count: 30 },
    { number: 4, range: '300.00 - 399.00', count: 20 },
    { number: 5, range: '400.00 - 499.00', count: 11 },
    { number: 6, range: '500.00 - 999.00', count: 42 }
  ];


  products: any[] = [{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
}];
}
