import { Component } from '@angular/core';
import { OderService } from 'src/app/admin/services/oder.service';

@Component({
  selector: 'app-confirmed-orders',
  templateUrl: './confirmed-orders.component.html',
  styleUrls: ['./confirmed-orders.component.css']
})
export class ConfirmedOrdersComponent {
  pendingOrders: any[] = [];

  constructor(private oderService: OderService) { }

  ngOnInit(): void {
    // Fetch orders when the component initializes
    this.fetchOrders();
  }

  fetchOrders() {
    // Call your service method to fetch orders
    this.oderService.getOrders().subscribe({
      next: (response: any) => {
        console.log('API Response:', response);
        this.pendingOrders = response;
      },
      error: (error) => {
        console.error('Error fetching orders:', error);
      }
    });
  }

}
