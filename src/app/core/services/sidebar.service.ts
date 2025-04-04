import { inject, Injectable } from '@angular/core';
import MenuItem from '../../shared/interfaces/MenuItem';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
// import { TranslateService } from '@ngx-translate/core';

const MenuItems: MenuItem[] = [
  {
    title: 'Dashboard',
    subTitle: '',
    icon: 'dashboard',
    link: '/dashboard',
    active: false,
    badge: {
      value: 1,
      color: 'accent',
    },
    access: ['admin', 'vendor'],
  },
  {
    title: 'Orders',
    subTitle: '',
    icon: 'receipt-text',
    link: '/orders',
    active: false,
    badge: {
      value: 1,
      color: 'accent',
    },
    access: ['admin', 'vendor'],
  },
  {
    title: 'Payments',
    subTitle: '',
    icon: 'money-bills',
    link: '/payments',
    active: false,
    badge: {
      value: 1,
      color: 'accent',
    },
    access: ['admin', 'vendor'],
  },
  {
    title: 'Vendors',
    subTitle: '',
    icon: 'user-square',
    link: '/dashboard',
    active: false,
    badge: {
      value: 1,
      color: 'accent',
    },
    access: ['admin'],
  },
  {
    title: 'Aquabox Products',
    subTitle: '',
    icon: 'user-square',
    link: '/products',
    active: false,
    badge: {
      value: 1,
      color: 'accent',
    },
    access: ['admin'],
  },
  {
    title: 'Inventory',
    subTitle: '',
    icon: 'user-square',
    link: '/inventory',
    active: false,
    badge: {
      value: 1,
      color: 'accent',
    },
    access: ['admin'],
  },
  {
    title: 'Notifications',
    subTitle: '',
    icon: 'bell-notification',
    link: '/notifications',
    active: false,
    badge: {
      value: 1,
      color: 'accent',
    },
    access: ['admin', 'vendor'],
  },
];

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  // Define Variables
  menuItems: MenuItem[] = MenuItems;
  currentUrl: string = '';
  // Inject the services
  router: Router = inject(Router);

  constructor() {
    // Listen for route changes to update the active state of the menu items
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setActiveMenuItem();
      });
  }

  // Set the active state of the menu items based on the current route
  private setActiveMenuItem() {
    const currentRoute = (this.currentUrl = this.router.url);
    console.log('currentRoute', currentRoute);

    // Reset the active state for all menu items
    this.menuItems.forEach((item) => (item.active = false));

    // Find and set active menu item based on the current route
    const activeItem = this.menuItems.find((item) =>
      currentRoute.includes(item.link),
    );
    if (activeItem) {
      activeItem.active = true;
    }
  }

  // Check if the menu item has children
  menuHasChildren(item: MenuItem): boolean {
    return Array.isArray(item.children) && item.children.length > 0;
  }
}
