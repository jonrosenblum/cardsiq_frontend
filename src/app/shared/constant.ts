import { IAccountSettingTab } from './interfaces/AccountSettingTab';
import IFooterMenu from './interfaces/IFooterMenu';
import { INotification } from './interfaces/INotification';

export const FOOTER_MENU_ITEMS: IFooterMenu[] = [
  {
    title: 'Terms & Conditions',
    path: '#',
  },
  {
    title: 'Privacy Policy',
    path: '#',
  },
  {
    title: 'Help',
    path: '#',
  },
];

export const NOTIFICATIONS: INotification[] = [
  {
    avatar: '/assets/images/girl.png',
    message:
      '<span class="font-semibold text-black">Faruquix</span> uploaded a new order',
    timestamp: new Date(),
    actionButtons: true,
  },
  {
    avatar: '/assets/images/girl.png',
    message:
      '<span class="font-semibold text-black">Inventory ID #1234</span> is waiting for your approval.',
    timestamp: new Date(),
    actionButtons: true,
  },
  {
    avatar: '/assets/images/girl.png',
    message:
      'Payment for <span class="font-semibold text-black">Order #1415</span> is now available.',
    timestamp: new Date(new Date().setDate(new Date().getDate() - 1)), // Yesterday
    actionButtons: false,
  },
  {
    avatar: '/assets/images/girl.png',
    message:
      'Payment for <span class="font-semibold text-black">Order #2525</span> has been processed.',
    timestamp: new Date(new Date().setDate(new Date().getDate() - 3)), // Older date
    actionButtons: false,
  },
];

export const ACCOUNT_SETTING_TABS: IAccountSettingTab[] = [
  { label: 'Profile', active: true },
  { label: 'Security', active: false },
  { label: 'Billing', active: false },
  { label: 'Profile preferences', active: false },
];

export const PAYMENT_METHODS = [
  {
    name: 'PayPal Balance',
    balance: '$15.00',
    logo: '/assets/images/Mastercard.png',
    isDefault: true,
    isSelected: true,
  },
  {
    name: 'Jpmorgan Chase Bank',
    balance: '$15.00',
    logo: '/assets/images/jpmorgan-chase.png',
    isSelected: false,
  },
  {
    name: 'Jpmorgan Chase Bank',
    balance: '$15.00',
    logo: '/assets/images/jpmorgan-chase.png',
    isSelected: false,
  },
  {
    name: 'Goldman Sachs Bank USA',
    balance: '$15.00',
    logo: '/assets/images/jpmorgan.png',
    isSelected: false,
  },
];
