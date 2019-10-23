import { LicensePlateService } from './../../solutions/labS1/license-plate.service';
import { Component } from '@angular/core';
import {LicensePlate} from './license-plate';

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
    this.plates = this.licensePlateService.getList();
  }

  isEven(index:number) {
    return index%2==0;
  }
}
