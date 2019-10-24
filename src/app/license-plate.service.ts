import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LicensePlate } from './license-plate';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LicensePlateService {

  constructor(private httpClient: HttpClient) { }

  getList(): Observable<LicensePlate[]>{
    return this.httpClient.get<LicensePlate[]>('http://localhost:8000/data')
  }
}
