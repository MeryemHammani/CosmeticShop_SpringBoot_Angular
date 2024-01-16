import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Slider } from '../models/slider';
import { AuthServiceService } from 'src/app/Authentication/services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class SliderServiceService {
  PATH_OF_API = 'http://localhost:8080';

  constructor(private http: HttpClient, private auth: AuthServiceService) { }

  addSlider(blog: any): Observable<any> {
    const headers = this.auth.setHeader();
    return this.http.post<any>(this.PATH_OF_API + '/banners', blog, { headers });
  }

  getAllSliders(): Observable<any> {
    return this.http.get<any>(this.PATH_OF_API + '/banners');
  }

  getSliderById(id: number): Observable<any> {
    const url = `${this.PATH_OF_API}/banners/id/${id}`;
    return this.http.get<any>(url);
  }

  updateSlider(slider: any): Observable<any> {
    const headers = this.auth.setHeader();
    const url = `${this.PATH_OF_API}/banners/id/${slider.id}`;
    return this.http.put<any>(url, slider, { headers });
  }

  deleteSlider(id: number): Observable<any> {
    const url = `${this.PATH_OF_API}/banners/id/${id}`;
    return this.http.delete(url);
  }

  uploadImage(formData: FormData): Observable<any> {
    const url = `${this.PATH_OF_API}/banners/upload`;
    return this.http.post(url, formData);
  }





} 
