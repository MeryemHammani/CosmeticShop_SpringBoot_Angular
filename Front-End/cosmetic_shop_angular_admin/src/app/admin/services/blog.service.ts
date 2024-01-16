import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/Authentication/services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  PATH_OF_API = 'http://localhost:8080';

  constructor(private httpclient: HttpClient, private auth: AuthServiceService) { }
  addBlog(blog: FormData): Observable<any> {
    const headers = this.auth.setHeader();
    return this.httpclient.post<any>(this.PATH_OF_API + '/blogs', blog, { headers });
  }

  getAllBlogs(): Observable<any> {
    return this.httpclient.get<any>(this.PATH_OF_API + '/blogs');
  }

  deleteBlog(id: number): Observable<any> {
    const url = `${this.PATH_OF_API}/blogs/id/${id}`;
    return this.httpclient.delete(url);
  }

  getBlogById(id: number): Observable<any> {
    const url = `${this.PATH_OF_API}/blogs/id/${id}`;
    return this.httpclient.get<any>(url);
  }

  updateBlog(brand: any): Observable<any> {
    const url = `${this.PATH_OF_API}/blogs/id/${brand.id}`;
    return this.httpclient.put<any>(url, brand);
  }

  uploadImage(formData: FormData): Observable<any> {
    const url = `${this.PATH_OF_API}/blogs/upload`;
    return this.httpclient.post(url, formData);
  }


}
