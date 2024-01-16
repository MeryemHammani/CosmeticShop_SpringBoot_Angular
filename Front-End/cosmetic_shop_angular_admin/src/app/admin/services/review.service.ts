import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/Authentication/services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private auth: AuthServiceService) { }

  updateReview(review: any): Observable<any> {
    const headers = this.auth.setHeader();
    const url = `${this.apiUrl}/reviews/id/${review.id}`;
    return this.http.put<any>(url, review, { headers });
  }


  getReviews(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/reviews');
  }

  deleteReview(id: number): Observable<any> {
    const headers = this.auth.setHeader();
    const url = `${this.apiUrl}/reviews/id/${id}`;
    return this.http.delete(url, { headers });
  }
}
