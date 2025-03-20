import { Order } from '../pages/orders/orders-listing/orders-listing.component';
import { IAccountSettingTab } from './interfaces/AccountSettingTab';
import IFooterMenu from './interfaces/IFooterMenu';
import { INotification } from './interfaces/INotification';

export const FOOTER_MENU_ITEMS: IFooterMenu[] = [
  {
    title: 'Terms & Conditions',
    path: '/terms-and-conditions',
  },
  {
    title: 'Privacy Policy',
    path: '/privacy-policy',
  },
  {
    title: 'Help',
    path: '/help',
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

export const QUICK_SEARCH_RESPONSE = [
  {
    certNumber: '89211960',
    data: {
      certDetails: {
        PSACert: {
          CertNumber: '89211960',
          SpecID: 10279296,
          SpecNumber: 'EKJ9000003',
          LabelType: 'LighthouseLabel',
          ReverseBarCode: true,
          Year: '2023',
          Brand: 'PANINI PRIZM',
          Category: 'BASKETBALL CARDS',
          CardNumber: '136',
          Subject: 'VICTOR WEMBANYAMA',
          Variety: '',
          IsPSADNA: false,
          IsDualCert: false,
          GradeDescription: 'GEM MT 10',
          CardGrade: 'GEM MT 10',
          TotalPopulation: 25007,
          TotalPopulationWithQualifier: 0,
          PopulationHigher: 0,
        },
      },
      certImages: [
        {
          IsFrontImage: false,
          ImageURL:
            'https://d1htnxwo4o0jhw.cloudfront.net/cert/156456734/dAu65i6jGkGUZ3PahaYLcw.jpg',
        },
        {
          IsFrontImage: true,
          ImageURL:
            'https://d1htnxwo4o0jhw.cloudfront.net/cert/156456734/ppf56RkEj0uyKyLGm5AK6A.jpg',
        },
      ],
      result: {
        estimatedValue: 11906,
        lastSaleDate: '2024-11-03T02:30:04.740Z',
        confidence: 2,
        grader: 'psa',
        index: 'LeBron James',
        indexId: 'LeBron James',
        description: '2003 Topps Chrome LeBron James Xfractor 111',
        grade: 'g8',
        twoWeekData: {
          velocity: 0,
          averagePrice: 0,
        },
        oneMonthData: {
          velocity: 0,
          averagePrice: 0,
        },
        oneQuarterData: {
          velocity: 0,
          averagePrice: 0,
        },
        oneYearData: {
          velocity: 1,
          averagePrice: 12817.32,
        },
        population: 24,
        isPlayerIndex: true,
        indexPercentChange: -0.0711,
      },
    },
  },
];

export const PAYMENTS = [
  {
    id: '#202402',
    date: 'August 23, 2024',
    vendor: 'Vendor',
    cardType: 'Visa',
    cardImage: '/assets/images/Visa.png',
    cardNumber: '*****6475',
    amount: 120,
    status: 'Rejected',
    adminStatus: 'Approved',
  },
  {
    id: '#202403',
    date: 'August 23, 2024',
    vendor: 'Vendor',
    cardType: 'Visa',
    cardImage: '/assets/images/Visa.png',
    cardNumber: '*****6475',
    amount: 120,
    status: 'Pending',
    adminStatus: 'Approve',
  },
  {
    id: '#202404',
    date: 'August 23, 2024',
    vendor: 'Vendor',
    cardType: 'Stripe',
    cardImage: '/assets/images/Stripe.png',
    cardNumber: '*****6475',
    amount: 420,
    status: 'Completed',
    adminStatus: 'Approved',
  },
  {
    id: '#202402',
    date: 'August 23, 2024',
    vendor: 'Vendor',
    cardType: 'Mastercard',
    cardImage: '/assets/images/Visa.png',
    cardNumber: '*****6475',
    amount: 120,
    status: 'Rejected',
    adminStatus: 'Approve',
  },
  {
    id: '#202403',
    date: 'August 23, 2024',
    vendor: 'Vendor',
    cardType: 'Visa',
    cardImage: '/assets/images/Visa.png',
    cardNumber: '*****6475',
    amount: 120,
    status: 'Pending',
    adminStatus: 'Approve',
  },
  {
    id: '#202404',
    date: 'August 23, 2024',
    vendor: 'Vendor',
    cardType: 'Mastercard',
    cardImage: '/assets/images/Stripe.png',
    cardNumber: '*****6475',
    amount: 420,
    status: 'Completed',
    adminStatus: 'Approved',
  },
];

export const ORDERS: Order[] = [
  {
    id: 'ORD001',
    date: 'October 30,2024',
    amount: '$128.99',
    status: 'Rejected',
    statusColor: '#FFEDED',
    textColor: '#FE4D4F',
    company: 'fedex',
    trackInfo: '#',
    vendor: 'CardNation',
  },
  {
    id: 'ORD002',
    date: 'May 6,2024',
    amount: '$214.81',
    status: 'Pending',
    statusColor: '#E6ECFE',
    textColor: '#003DF6',
    company: 'fedex',
    trackInfo: '#',
    vendor: 'CardNation',
  },
  {
    id: 'ORD003',
    date: 'March 23,2024',
    amount: '$305.22',
    status: 'Rejected',
    statusColor: '#FFEDED',
    textColor: '#FE4D4F',
    company: 'fedex',
    trackInfo: '#',
    vendor: 'CardNation',
  },
  {
    id: 'ORD004',
    date: 'May 20,2024',
    amount: '$181.70',
    status: 'Pending',
    statusColor: '#E6ECFE',
    textColor: '#003DF6',
    company: 'fedex',
    trackInfo: '#',
    vendor: 'CardNation',
  },
  {
    id: 'ORD005',
    date: 'July 14,2024',
    amount: '$167.84',
    status: 'Approved',
    statusColor: '#EEF9E8',
    textColor: '#53C31B',
    company: 'fedex',
    trackInfo: '#',
    vendor: 'CardNation',
  },
  {
    id: 'ORD006',
    date: 'May 29,2024',
    amount: '$255.22',
    status: 'Approved',
    statusColor: '#EEF9E8',
    textColor: '#53C31B',
    company: 'fedex',
    trackInfo: '#',
    vendor: 'CardNation',
  },
  {
    id: 'ORD007',
    date: 'May 29,2024',
    amount: '$255.22',
    status: 'Approved',
    statusColor: '#EEF9E8',
    textColor: '#53C31B',
    company: 'fedex',
    trackInfo: '#',
    vendor: 'CardNation',
  },
  {
    id: 'ORD003',
    date: 'March 23,2024',
    amount: '$305.22',
    status: 'Rejected',
    statusColor: '#FFEDED',
    textColor: '#FE4D4F',
    company: 'fedex',
    trackInfo: '#',
    vendor: 'TradeHub',
  },
  {
    id: 'ORD001',
    date: 'October 30,2024',
    amount: '$128.99',
    status: 'Rejected',
    statusColor: '#FFEDED',
    textColor: '#FE4D4F',
    company: 'fedex',
    trackInfo: '#',
    vendor: 'DeckMasters',
  },
  {
    id: 'ORD001',
    date: 'October 30,2024',
    amount: '$128.99',
    status: 'Rejected',
    statusColor: '#FFEDED',
    textColor: '#FE4D4F',
    company: 'fedex',
    trackInfo: '#',
    vendor: 'EliteDecks',
  },
];
