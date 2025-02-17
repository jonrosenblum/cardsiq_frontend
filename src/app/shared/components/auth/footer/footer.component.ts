import { Component, signal, WritableSignal } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import IFooterMenu from '../../../interfaces/IFooterMenu';
import { FOOTER_MENU_ITEMS } from '../../../constant';

@Component({
  selector: 'app-footer',
  imports: [SharedModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  footerMenu: WritableSignal<IFooterMenu[]> = signal<IFooterMenu[]>([]);

  constructor() {
    this.footerMenu.set(FOOTER_MENU_ITEMS);
  }
}
