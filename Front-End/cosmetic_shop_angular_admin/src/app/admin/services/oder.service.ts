import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/Authentication/services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class OderService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private auth: AuthServiceService) { }

  updateOrder(order: any): Observable<any> {
    const headers = this.auth.setHeader();
    const url = `${this.apiUrl}/orders/id/${order.id}`;
    return this.http.put<any>(url, order, { headers });
  }


  getOrders(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/orders');
  }

  deleteOrder(id: number): Observable<any> {
    const headers = this.auth.setHeader();
    const url = `${this.apiUrl}/orders/id/${id}`;
    return this.http.delete(url, { headers });
  }
  getOrderById(orderId: number): Observable<any> {
    const url = `${this.apiUrl}/orders/id/${orderId}`;
    return this.http.get<any>(url);
  }
}