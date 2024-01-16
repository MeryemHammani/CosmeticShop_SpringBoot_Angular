import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { AuthServiceService } from 'src/app/Authentication/services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  PATH_OF_API = 'http://localhost:8080';

  constructor(private http: HttpClient, private auth: AuthServiceService) { }

  addCategory(categoryData: FormData): Observable<Category> {
    return this.http.post<Category>(this.PATH_OF_API + '/categories', categoryData);
  }


  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.PATH_OF_API + '/categories');
  }

  getCategory(categoryId: number): Observable<Category> {
    const url = `${this.PATH_OF_API}/categories/${categoryId}`;
    return this.http.get<Category>(url);
  }
  getCategoryById(id: number): Observable<Category> {
    const url = `${this.PATH_OF_API}/categories/id/${id}`;
    return this.http.get<Category>(url);
  }

  deleteCategory(id: number): Observable<any> {
    const url = `${this.PATH_OF_API}/categories/id/${id}`;
    return this.http.delete(url);
  }

  uploadImage(formData: FormData): Observable<any> {
    const url = `${this.PATH_OF_API}/categories/upload`;
    return this.http.post(url, formData);
  }



  updateCategory(category: Category): Observable<any> {
    const headers = this.auth.setHeader();
    const url = `${this.PATH_OF_API}/categories/id/${category.id}`;
    return this.http.put<any>(url, category, { headers });
  }
}
