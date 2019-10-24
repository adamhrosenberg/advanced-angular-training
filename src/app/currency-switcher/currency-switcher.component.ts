import { Observable } from 'rxjs/index';
import { CurrencyService, CurrencyInfo } from './../currency.service';
import { Component } from '@angular/core';
import {Currency} from './currency';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-currency-switcher',
  templateUrl: './currency-switcher.component.html',
  styleUrls: ['./currency-switcher.component.css']
})
export class CurrencySwitcherComponent {

  currency$: Observable<CurrencyInfo>;
  showItems = false;

  constructor(public currencyService: CurrencyService) {
    this.currency$ = this.currencyService.getCurrencyInfo()
   }

  changeCurrency(currency: Currency) {
    this.currencyService.setCurrency(currency);
    this.showItems = false;
  }

}
