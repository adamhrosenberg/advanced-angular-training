import { map, tap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs/index';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {LicensePlate} from './license-plate';
import { LicensePlateService } from './license-plate.service';
import { CurrencyService, CurrencyInfo } from './currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = "title yo";
  description: string = "desc yo";
  licensePlates$: Observable<LicensePlate[]>;
  plateCount: number = 0;
  currencyInfo$: Observable<CurrencyInfo>;


  constructor(private licensePlateService: LicensePlateService, private currencyService: CurrencyService){
    this.licensePlates$ = this.licensePlateService.getList();
    this.currencyInfo$ = this.currencyService.getCurrencyInfo();
    // ^^ can also do this above tapping in the LP service to not couple the count with this component
  }

  isEven(index:number) {
    return index%2;
  }
}
