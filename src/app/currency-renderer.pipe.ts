import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

type Currency = 'USD' | 'EUR' | 'GBP';

@Pipe({
  name: 'currencyRenderer'
})
export class CurrencyRendererPipe implements PipeTransform {

  transform(value: number, currency:Currency='USD', exchangeRate: number = 1): any {
    return new CurrencyPipe('en-us').transform(value * exchangeRate, currency,'symbol', '1.0-2')
  }

}
