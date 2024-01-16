import { Component } from '@angular/core';
import { OrderServiceService } from '../../services/order-service.service';
import { Order } from 'src/app/admin/models/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orders!: Order[];
  constructor(public orderService: OrderServiceService) { this.getOrders(); }

  public getOrders() {
    this.orderService.getsOrders().subscribe({
      next: (response: any) => { this.orders = response },
      error: (err) => { console.log(err) }
    });
  }
}
