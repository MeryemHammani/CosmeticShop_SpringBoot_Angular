import { Component, OnInit } from '@angular/core';
import { OderService } from 'src/app/admin/services/oder.service';
import { UserService } from 'src/app/admin/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  todaySales: number = 0;
  monthlySales: number = 0;
  yearlySales: number = 0;
  pendingOrders: number = 0;
  confirmedOrders: number = 0;
  delivredOrders: number = 0;
  processingOrders: number = 0;
  totalUsers: number = 0;

  orders: any[] = [];
  users: any[] = [];

  constructor(private orderService: OderService, private userService: UserService) { }

  ngOnInit(): void {
    this.fetchOrders();
    this.fetchUsers();
  }

  fetchOrders() {
    this.orderService.getOrders().subscribe((data: any) => {
      this.orders = data;
      this.calculateStatistics();
    });
  }

  fetchUsers() {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data;
      this.calculateStatistics();
    });
  }

  calculateStatistics() {
    const today = new Date();
    const thisMonth = today.toISOString().slice(0, 7);
    const thisYear = today.getFullYear().toString();

    // Calculate today's sales
    this.todaySales = this.orders
      .filter((order: any) => {
        const orderDate = new Date(order.order_date);
        return orderDate.toISOString().slice(0, 10) === today.toISOString().slice(0, 10);
      })
      .length;

    // Calculate monthly sales
    this.monthlySales = this.orders
      .filter((order: any) => {
        const orderDate = new Date(order.order_date);
        return orderDate.toISOString().slice(0, 7) === thisMonth;
      })
      .length;

    // Calculate yearly sales
    this.yearlySales = this.orders
      .filter((order: any) => {
        const orderDate = new Date(order.order_date);
        return orderDate.getFullYear().toString() === thisYear;
      })
      .length;

    // Calculate pending orders
    this.pendingOrders = this.orders.filter((order: any) => order.status === 'pending').length;
    this.processingOrders = this.orders.filter((order: any) => order.status === 'processing').length;
    this.confirmedOrders = this.orders.filter((order: any) => order.status === 'confirmed').length;
    this.delivredOrders = this.orders.filter((order: any) => order.status === 'delivred').length;

    // Calculate total users
    this.totalUsers = this.users.length;
  }



}
