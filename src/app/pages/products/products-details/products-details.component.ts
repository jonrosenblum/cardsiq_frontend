import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SubHeaderComponent } from "../../../shared/components/dashboard/sub-header/sub-header.component";
import { SharedModule } from '../../../shared/shared.module';
import { isAdmin } from '../../../core/services/auth.service';

@Component({
  selector: 'app-products-details',
  imports: [SubHeaderComponent, SharedModule],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.scss'
})
export class ProductsDetailsComponent {
  isAdmin: boolean = isAdmin();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() product: any;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  productDetails: {
    title: string;
    date: string;
    ceilingValue: string;
    averageValue: string;
    numberOfCards: number;
    orderStatus: string;
  } = {
      title: 'Typhoon Case #1 Details',
      date: 'August 24, 2024',
      ceilingValue: '$4,000 - $6,000',
      averageValue: '$740',
      numberOfCards: 10,
      orderStatus: 'Delivered'
    };

  cards: {
    grader: string;
    certNumber: string;
    description: string;
    grade: string;
    estimateValue: string;
    confidence: string;
    paid: string;
    team: string;
  }[] = [
      {
        "grader": "RAW",
        "certNumber": "RAW",
        "description": "2000 Peer Showcase Tom Brady Base 136",
        "grade": "RAW",
        "estimateValue": "$300.00",
        "confidence": "5.0",
        "paid": "$300.00",
        "team": "Ravens"
      },
      {
        "grader": "PSA",
        "certNumber": "99726474",
        "description": "2022 Panini Contenders Optic Paolo Banchero Variation-Auto-Gold Wave 118",
        "grade": "g10",
        "estimateValue": "$300.00",
        "confidence": "5.0",
        "paid": "$300.00",
        "team": "Steelers"
      },
      {
        "grader": "BGS",
        "certNumber": "0009639470",
        "description": "2020 Panini Flawless Breece Hall Rookie Showcase Hat. TS-BH",
        "grade": "g9_5",
        "estimateValue": "$316.00",
        "confidence": "4.0",
        "paid": "$375.00",
        "team": "Rams"
      },
      {
        "grader": "RAW",
        "certNumber": "RAW",
        "description": "2023 Topps Chrome Ron Arrest Gold Refractor 57",
        "grade": "RAW",
        "estimateValue": "$320.00",
        "confidence": "4.0",
        "paid": "$320.00",
        "team": "Misc"
      },
      {
        "grader": "PSA",
        "certNumber": "46699674",
        "description": "2024 Topps Mercury Victor Wernbanyama Patch Auto /75",
        "grade": "g10",
        "estimateValue": "$330.00",
        "confidence": "-",
        "paid": "$330.00",
        "team": "Titans"
      },
      {
        "grader": "PSA",
        "certNumber": "93836417",
        "description": "2023 Panini Crown Royale Travis Kelsee Auto /99",
        "grade": "g10",
        "estimateValue": "$350.00",
        "confidence": "-",
        "paid": "$313.00",
        "team": "Vikings"
      },
      {
        "grader": "PSA",
        "certNumber": "93836417",
        "description": "2024 Bowman Sapphire Edition Chrome Prospects Colin Houck Red BCP123",
        "grade": "g10",
        "estimateValue": "$371.00",
        "confidence": "5.0",
        "paid": "$352.45",
        "team": "Patriots"
      },
      {
        "grader": "PSA",
        "certNumber": "70851333",
        "description": "2022 Panini Donrasz Optic Downtown Rob Gronkowski Base DTRG",
        "grade": "g9",
        "estimateValue": "$590.00",
        "confidence": "4.0",
        "paid": "$360.50",
        "team": "Chiefs"
      },
      {
        "grader": "PSA",
        "certNumber": "447720696",
        "description": "2022 Panini Donrasz Optic Jalen Harts Purple 164",
        "grade": "g10",
        "estimateValue": "$660.00",
        "confidence": "3.0",
        "paid": "$327.00",
        "team": "Chargers"
      }
    ];

  transactionHistory: { title: string; value: string }[] = [
    { title: 'Total Courtyard Offer', value: '$0.00' },
    { title: 'Amount Paid', value: '$1,500.00' },
    { title: 'Total Profit', value: '$1,600.00' },
    { title: 'Profit Split', value: '$2,700.00' }
  ];

  goBack() {
    window.history.back();
  }
}