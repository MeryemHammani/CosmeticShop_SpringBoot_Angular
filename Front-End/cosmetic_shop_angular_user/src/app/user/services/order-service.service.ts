import { Injectable } from '@angular/core';
import { SharedServiceService } from './shared-service.service';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {


  constructor(public service: SharedServiceService) { }

  public saveOrder(data: any) {
    let path = '/orders';
    return (this.service.post(data, path, true));
  }

  public getsOrders() {
    let path = '/orders/userOrders/' + this.service.authService.getAutUser().id;;
    return (this.service.get(path, true));
  }





}
