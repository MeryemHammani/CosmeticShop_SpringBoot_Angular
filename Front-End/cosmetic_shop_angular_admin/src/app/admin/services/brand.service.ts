import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { AuthServiceService } from 'src/app/Authentication/services/auth-service.service';


@Injectable({
  providedIn: 'root'
})
export class BrandService {
  PATH_OF_API = 'http://localhost:8080';

  constructor(private httpclient: HttpClient, private auth: AuthServiceService) { }

  addBrand(brand: FormData): Observable<any> {
    const headers = this.auth.setHeader();
    //headers.append('Content-Type', 'multipart/form-data');
    return this.httpclient.post<any>(this.PATH_OF_API + '/brands', brand);
  }

  getBrandById(id: number): Observable<any> {
    const url = `${this.PATH_OF_API}/brands/id/${id}`;
    return this.httpclient.get<any>(url);
  }

  getAllBrands(): Observable<Brand[]> {
    return this.httpclient.get<Brand[]>(this.PATH_OF_API + '/brands');
  }

  getBrand(brandId: number): Observable<Brand> {
    const url = `${this.PATH_OF_API}/brands/${brandId}`;
    return this.httpclient.get<Brand>(url);
  }

  updateBrand(brand: Brand): Observable<Brand> {
    const url = `${this.PATH_OF_API}/brands/id/${brand.id}`;
    return this.httpclient.put<Brand>(url, brand);
  }

  deleteBrand(id: number): Observable<any> {
    const url = `${this.PATH_OF_API}/brands/id/${id}`;
    return this.httpclient.delete(url);
  }

  uploadImage(formData: FormData): Observable<any> {
    const url = `${this.PATH_OF_API}/brands/upload`;
    return this.httpclient.post(url, formData);
  }


}