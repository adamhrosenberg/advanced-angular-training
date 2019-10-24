import { Injectable } from '@angular/core';
import { Currency } from './currency-switcher/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private currency:Currency = 'USD'

  constructor() { }

  getCurrency() {
    return this.currency;
  }

  setCurrency(currency: Currency) {
    this.currency = currency;
  }
}
