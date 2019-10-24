import { Observable, Subscription } from 'rxjs/index';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {LicensePlate} from './license-plate';
import { LicensePlateService } from './license-plate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  title: string = "title yo";
  description: string = "desc yo";
  plates: LicensePlate[];
  private subscription: Subscription;

  constructor(private licensePlateService: LicensePlateService){

  }

  ngOnInit() {
    this.subscription = this.licensePlateService.getList().subscribe(plates => this.plates = plates);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  isEven(index:number) {
    return index%2==0;
  }
}
