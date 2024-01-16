import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
  uploadImage(imageFile: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('image', imageFile);

    return this.http.post(`${this.baseUrl}/upload`, formData);
  }

  saveImageProduct(imageId: string, productId: string): Observable<any> {
    const payload = {
      image_id: imageId,
      product_id: productId
    };

    return this.http.post(`${this.baseUrl}/save`, payload);
  }
}
