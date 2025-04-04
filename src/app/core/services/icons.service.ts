import { Injectable } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';

const ICONS = [
  { src: 'assets/svg/apple.svg', name: 'apple' },
  { src: 'assets/svg/google.svg', name: 'google' },
  { src: 'assets/svg/dashboard.svg', name: 'dashboard' },
  { src: 'assets/svg/inbox-download.svg', name: 'inbox-download' },
  { src: 'assets/svg/logout.svg', name: 'logout' },
  { src: 'assets/svg/logout-icon.svg', name: 'logout-icon' },
  { src: 'assets/svg/check.svg', name: 'check' },
  { src: 'assets/svg/trend-up.svg', name: 'trend-up' },
  { src: 'assets/svg/trend-down.svg', name: 'trend-down' },
  { src: 'assets/svg/arrow-left.svg', name: 'arrow-left' },
  { src: 'assets/svg/popup-success.svg', name: 'popup-success' },
  { src: 'assets/svg/popup-failed.svg', name: 'popup-failed' },
  { src: 'assets/svg/coin-convert.svg', name: 'coin-convert' },
  { src: 'assets/svg/delivery-van.svg', name: 'delivery-van' },
  { src: 'assets/svg/building-popup.svg', name: 'building-case' },

  { src: 'assets/svg/search-normal.svg', name: 'search' },
  { src: 'assets/svg/user.svg', name: 'user' },
  { src: 'assets/svg/user-account.svg', name: 'user-account' },
  { src: 'assets/svg/location.svg', name: 'location' },
  { src: 'assets/svg/user-group.svg', name: 'user-group' },
  { src: 'assets/svg/mail.svg', name: 'mail' },
  { src: 'assets/svg/call.svg', name: 'call' },
  { src: 'assets/svg/linkedin.svg', name: 'linkedin' },
  { src: 'assets/svg/edit.svg', name: 'edit' },

  { src: 'assets/svg/briefcase.svg', name: 'briefcase' },

  { src: 'assets/svg/setting-2.svg', name: 'setting-2' },
  { src: 'assets/svg/bell-notification.svg', name: 'bell-notification' },
  { src: 'assets/svg/user-square.svg', name: 'user-square' },
  { src: 'assets/svg/receipt-text.svg', name: 'receipt-text' },
  { src: 'assets/svg/money-bills.svg', name: 'money-bills' },

  { src: 'assets/svg/eye.svg', name: 'eye' },
  { src: 'assets/svg/search.svg', name: 'search' },
  { src: 'assets/svg/pop-close.svg', name: 'pop-close' },
  { src: 'assets/svg/edit-pencil.svg', name: 'edit-pencil' },
  { src: 'assets/svg/plus.svg', name: 'plus' },
  { src: 'assets/svg/download.svg', name: 'download' },
  { src: 'assets/svg/archive.svg', name: 'archive' },
  { src: 'assets/svg/trash-black.svg', name: 'trash-black' },
  { src: 'assets/svg/menu-dots.svg', name: 'menu-dots' },
  { src: 'assets/svg/tick-circle.svg', name: 'tick-circle' },
  { src: 'assets/svg/close-circle.svg', name: 'close-circle' },
];

@Injectable({
  providedIn: 'root',
})
export class IconsService {
  constructor(private iconReg: SvgIconRegistryService) {
    this.loadIcons();
  }

  loadIcons(): void {
    ICONS.forEach((i) => this.iconReg.loadSvg(i.src, i.name));
  }
}
