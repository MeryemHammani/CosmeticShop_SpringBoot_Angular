import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/Authentication/services/auth-service.service';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH_OF_API = 'http://localhost:8080';

  constructor(private http: HttpClient, private auth: AuthServiceService) { }

  getUsers(): Observable<User[]> {
    const headers = this.auth.setHeader();
    return this.http.get<User[]>(this.PATH_OF_API + '/getUsers', { headers });
  }

  deleteUser(id: number): Observable<any> {
    const url = `${this.PATH_OF_API}/delUser/id/${id}`;
    return this.http.delete(url);
  }

}
