import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/poduct';
import { AuthServiceService } from 'src/app/Authentication/services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private auth: AuthServiceService) { }

  addProduct(product: any) {
    const headers = this.auth.setHeader();
    return this.http.post(this.apiUrl + '/products', product, { headers });
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + '/products');
  }

  getProductById(id: number): Observable<Product> {
    const url = `${this.apiUrl}/products/id/${id}`;
    return this.http.get<Product>(url);
  }


  updateProduct(product: Product): Observable<Product> {
    const url = `${this.apiUrl}/products/id/${product.id}`;
    return this.http.put<Product>(url, product);
  }

  deleteProduct(id: number): Observable<any> {
    const url = `${this.apiUrl}/products/id/${id}`;
    return this.http.delete(url);
  }

  updateProductQuantity(productId: number, quantity: number): Observable<any> {
    const url = `${this.apiUrl}/products/updateQuantity/${productId}?quantity=${quantity}`;
    return this.http.put(url, {});
  }


  uploadImage(formData: FormData): Observable<any> {
    const url = `${this.apiUrl}/products/upload`;
    return this.http.post(url, formData);
  }

}
