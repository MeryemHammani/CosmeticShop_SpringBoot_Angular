import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SCategory } from '../models/scategory';
import { AuthServiceService } from 'src/app/Authentication/services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class SousCategoryService {

  PATH_OF_API = 'http://localhost:8080';

  constructor(private http: HttpClient, private auth: AuthServiceService) { }



  addSCategory(formData: any): Observable<SCategory> {
    const url = `${this.PATH_OF_API}/subCategories`;
    return this.http.post<SCategory>(url, formData);
  }

  getAllSCategories(): Observable<SCategory[]> {
    return this.http.get<SCategory[]>(this.PATH_OF_API + '/subCategories');
  }

  getSCategory(categoryId: number): Observable<SCategory> {
    const url = `${this.PATH_OF_API}/subCategories/id/${categoryId}`;
    return this.http.get<SCategory>(url);
  }

  updateSCategory(scategory: SCategory): Observable<SCategory> {
    const url = `${this.PATH_OF_API}/subCategories/id/${scategory.id}`;
    return this.http.put<SCategory>(url, scategory);
  }

  deletesCategory(id: number): Observable<any> {
    const url = `${this.PATH_OF_API}/subCategories/id/${id}`;
    return this.http.delete(url);
  }


}
