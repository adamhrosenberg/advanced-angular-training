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

  getExchangeRateForCurency() {
    switch (this.currency){
      case 'USD':
        return 1;
      case 'EUR':
        return 1.2;
      case 'GBP':
        return 1.3;
    }
  }
}
