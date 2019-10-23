import { Component, OnInit } from '@angular/core';
import {LicensePlate} from './license-plate';
import { LicensePlateService } from './license-plate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title: string = "title yo";
  description: string = "desc yo";
  plates: LicensePlate[];

  constructor(private licensePlateService: LicensePlateService){

  }

  ngOnInit() {
    this.licensePlateService.getList().subscribe(plates => this.plates = plates);
  }

  isEven(index:number) {
    return index%2==0;
  }
}
