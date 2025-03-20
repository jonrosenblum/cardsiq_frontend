import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { debounceTime, Subject } from 'rxjs';
import { PopupBackdropComponent } from '../popup-backdrop/popup-backdrop.component';
import { InventoryDetailComponent } from '../../../pages/inventory/inventory-detail/inventory-detail.component';
import { QUICK_SEARCH_RESPONSE } from '../../constant';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-quick-search',
  imports: [SharedModule, PopupBackdropComponent, InventoryDetailComponent],
  templateUrl: './quick-search.component.html',
  styleUrl: './quick-search.component.scss',
  providers: [ToastService],
})
export class QuickSearchComponent {
  @Input() placeholder: string = 'Quick Search';
  @Input() searchLoading: boolean = false;
  @Input() searchType: string | 'quickSearch' = 'quickSearch';
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  showInventoryDetail: boolean = false;
  inventoryDetailData: any;
  searchSubject: Subject<string> = new Subject<string>();
  toastService:ToastService = inject(ToastService);

  constructor() {
    this.setupDebouncedSearch();
  }

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    if (value === '') {
      this.searchLoading = false;
      return;
    }
    this.searchSubject.next(value);
  }

  setupDebouncedSearch(): void {
    this.searchSubject.pipe(debounceTime(1500)).subscribe((searchQuery) => {
      console.log('Debounced Quick Search Query:', searchQuery);
      if (this.searchType === 'quickSearch') {
        this.getInventoryDetail(searchQuery);
        return;
      }
      this.search.emit(searchQuery);
    });
  }

  async getInventoryDetail(searchQuery:string) {

    this.inventoryDetailData = QUICK_SEARCH_RESPONSE.find(
      (item) => item.certNumber === searchQuery || item.certNumber.includes(searchQuery)
    );
    if(this.inventoryDetailData === undefined) {
      this.toastService.error('No inventory found again this search query', 'Error');
      this.showInventoryDetail = false;
      this.searchLoading = false;
      return;
    }
    this.showInventoryDetail = true;
    this.searchLoading = false;
  }
}
