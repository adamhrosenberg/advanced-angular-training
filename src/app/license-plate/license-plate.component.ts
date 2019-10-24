import { AppHighlightDirective } from '../highlight.directive';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LicensePlate} from '../license-plate';
import { CurrencyService, CurrencyInfo } from 'app/currency.service';
import { Observable } from 'rxjs';
import { Currency } from 'app/currency-switcher/currency';

@Component({
  selector: 'app-license-plate',
  templateUrl: './license-plate.component.html',
  styleUrls: ['./license-plate.component.css']
})
export class LicensePlateComponent {

  @Input()
  plate: LicensePlate;

  @Input()
  buttonText: string;

  @Input()
  currencyInfo: CurrencyInfo

}
