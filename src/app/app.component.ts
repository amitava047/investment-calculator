import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { InvestmentResultComponent } from "./investment-result/investment-result.component";
import { UserInputComponent } from "./user-input/user-input.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'investment-calculator';  
}
