import { Observable, Subscription } from 'rxjs/index';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {LicensePlate} from './license-plate';
import { LicensePlateService } from './license-plate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{

  title: string = "title yo";
  description: string = "desc yo";
  plates: LicensePlate[];
  private subscription: Subscription;
  licensePlates$: Observable<LicensePlate[]>;

  constructor(private licensePlateService: LicensePlateService){
    this.licensePlates$ = this.licensePlateService.getList();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  isEven(index:number) {
    return index%2==0;
  }
}
