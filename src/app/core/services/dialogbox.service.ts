// DialogBoxService.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface PopupState {
  component: any;
  data?: any;
}

@Injectable({ providedIn: 'root' })
export class DialogBoxService {
  popupStateSubject: BehaviorSubject<PopupState | null> =
    new BehaviorSubject<PopupState | null>(null); // ✅ BehaviorSubject for state tracking

  getPopupState() {
    return this.popupStateSubject.asObservable(); // ✅ Expose as Observable
  }

  open(component: any, data?: any) {
    this.popupStateSubject.next({ component, data }); // ✅ Update state
  }

  close() {
    this.popupStateSubject.next(null); // ✅ Reset state
  }
}
