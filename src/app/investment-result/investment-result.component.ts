import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { InvestmentResult } from '../shared/investment-result.model';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  results = input<InvestmentResult[]>();
}
