import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/Authentication/services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private auth: AuthServiceService) { }


  getReclamations(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/getReclamations');
  }

  deleteReclamation(id: number): Observable<any> {
    const headers = this.auth.setHeader();
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, { headers });
  }
}
