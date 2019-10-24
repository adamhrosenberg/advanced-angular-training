import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {LicensePlate} from './license-plate';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CartService {

  constructor(private httpClient: HttpClient) { }

  getCartContents(): Observable<LicensePlate[]> {
    return this.httpClient.get<LicensePlate[]>('http://localhost:8000/cart');
  }

  addToCart(plate: LicensePlate) {
    return this.httpClient.put<any>('http://localhost:800/cart' + plate._id, null);
  }

  removeFromCart(plate: LicensePlate) {
    // TODO
  }

}
