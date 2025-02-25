import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-popup-backdrop',
  imports: [],
  templateUrl: './popup-backdrop.component.html',
  styleUrl: './popup-backdrop.component.scss',
})
export class PopupBackdropComponent implements OnDestroy {
  isOpen: boolean = false;
  constructor() {
    this.isOpen = true;
  }

  ngOnDestroy() {
    this.isOpen = false;
  }
}
