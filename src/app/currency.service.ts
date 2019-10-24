import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Currency } from './currency-switcher/currency';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

export interface CurrencyInfo {
  currency: Currency;
  exchangeRate: number;
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private currency:Currency = 'USD'
  exchangeRates: CurrencyInfo[];

  // use a behaviro subject bc it has a default value of 1
  private currenyInfo$ = new BehaviorSubject<CurrencyInfo>({currency: 'USD', exchangeRate: 1})

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<CurrencyInfo[]>('http://localhost:8000/rates')
    .subscribe(rates=>this.exchangeRates = rates)
   }

  getCurrencyInfo() {
    return this.currenyInfo$.asObservable();
    // return as observable to scope the subhect to this class so no one else can use it
  }

  setCurrency(currency: Currency) {
    this.currenyInfo$.next({
      currency: currency,
      exchangeRate: this.exchangeRates[currency]
    })
  }
}
