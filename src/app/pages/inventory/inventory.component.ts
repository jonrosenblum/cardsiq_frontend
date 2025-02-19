import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export interface TableRow {
  number: number;
  range: string;
  count: number;
}

@Component({
  selector: 'app-inventory',
  imports: [RouterOutlet],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent {


}
