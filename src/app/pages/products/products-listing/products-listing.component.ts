import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 
import { Component, signal } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { isAdmin } from '../../../core/services/auth.service';
import { QuickMessagePopupComponent } from "../../../shared/components/quick-message-popup/quick-message-popup.component";
import { PopupBackdropComponent } from "../../../shared/components/popup-backdrop/popup-backdrop.component";

@Component({
  selector: 'app-products-listing',
  imports: [CommonModule, SharedModule, QuickMessagePopupComponent, PopupBackdropComponent],
  templateUrl: './products-listing.component.html',
  styleUrl: './products-listing.component.scss'
})
export class ProductsListingComponent {
  constructor(private router: Router) {}

  // Product selection and navigation
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  openProductDetails(product: any, index: number) {
    this.router.navigate(['products', index + 1, 'details']); // 1-based index
  }

  // Auth state
  isAdmin: boolean = isAdmin();

  // UI states
  sortByDropdown: boolean = false;
  selectedRow: number | null = null;
  // eslint-disable-next-line @typescript-eslint/typedef
  selectedProducts = signal<number[]>([]);
  
  // Popup states
  showSuccessPopup: boolean = false;
  showProcessingPopup: boolean = false;
  caseNumber: string = '';
  cardCount?: number;

  // Popup handlers
  handleBuildCase() {
    console.log('Building case:', {
      caseNumber: this.caseNumber,
      cardCount: this.cardCount
    });
    
    // Switch to processing view
    this.showProcessingPopup = true;

    // Clear form fields
    this.caseNumber = '';
    this.cardCount = undefined;
  }

  // Table data
  products: { date: string; name: string; status: string; cost: string; profit: string }[] = [
    { date: 'Nov 03, 2024', name: 'Lacer Case #1', status: 'Delivered', cost: '$1,000.00', profit: '$100.00' },
    { date: 'Nov 04, 2024', name: 'Case Hit Extension Case #1', status: 'Delivered', cost: '$3,000.00', profit: '$300.00' },
    { date: 'Nov 05, 2024', name: 'Typhoon Case #1', status: 'Pending', cost: '$5,000.00', profit: '$4,000.00' }
  ];

  // Row interactions
  toggleDropdown(index: number): void {
    this.selectedRow = this.selectedRow === index ? null : index;
  }

  // Selection management
  toggleSelection(index: number): void {
    const currentSelection = this.selectedProducts();
    this.selectedProducts.set(
      currentSelection.includes(index)
        ? currentSelection.filter(i => i !== index)
        : [...currentSelection, index]
    );
  }

  isSelected(index: number): boolean {
    return this.selectedProducts().includes(index);
  }

  toggleSelectAll(): void {
    this.selectedProducts.set(
      this.isAllSelected()
        ? []
        : this.products.map((_, index) => index)
    );
  }

  isAllSelected(): boolean {
    return this.selectedProducts().length === this.products.length && this.products.length > 0;
  }

    // Add these new properties
    caseOptions: { id: string; name: string }[] = [];
    readonly baseCaseNumber: string = '001'; // Base prefix for case IDs
  
    // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
    ngOnInit() {
      this.generateCaseOptions();
    }
  
    private generateCaseOptions() {
      // Generate 5 random case options
      this.caseOptions = Array.from({ length: 5 }, (_, i) => ({
        id: this.generateRandomCaseId(),
        name: `Typhoon Case #${i + 1}`
      }));
      
      // Add the original case as first option
      this.caseOptions.unshift({
        id: '00127740302',
        name: 'Typhoon Case #1'
      });
    }
  
    private generateRandomCaseId(): string {
      // Generate 8 random digits and combine with base
      const randomDigits = Array.from({ length: 8 }, () => 
        Math.floor(Math.random() * 10)).join('');
      return `${this.baseCaseNumber}${randomDigits}`;
    }
}