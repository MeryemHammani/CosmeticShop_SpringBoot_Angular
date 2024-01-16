import { Injectable } from '@angular/core';
import { SharedServiceService } from './shared-service.service';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(public service: SharedServiceService) { }


  //get All User Carts
  public getAllUserCarts(id: number) {
    let path = '/getCart/' + id;
    return (this.service.get(path, true));
  }




}
