import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'currencyRenderer'
})
export class CurrencyRendererPipe implements PipeTransform {

  transform(value: number, currency:string='USD', exchangeRate: number = 1): any {
    return new CurrencyPipe('en-us').transform(value * exchangeRate, currency,'symbol', '1.0-2')
  }



}
