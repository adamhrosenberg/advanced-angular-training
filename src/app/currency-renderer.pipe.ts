import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyRenderer'
})
export class CurrencyRendererPipe implements PipeTransform {

  transform(amount: number, currency:string='USD', exchangeRate: number = 1): any {
    let currencySign = '$'
    switch(currency) {
      case 'EUR':
        currencySign = '€';
        break;
      case 'GBP':
        currencySign = '£';
        break;
    }

    return currencySign + (amount * exchangeRate);
  }

}
