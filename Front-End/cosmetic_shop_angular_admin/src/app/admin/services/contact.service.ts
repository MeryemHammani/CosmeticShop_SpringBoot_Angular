import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/Authentication/services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private auth: AuthServiceService) { }

  saveContact(contactData: any): Observable<any> {
    const headers = this.auth.setHeader();
    return this.http.post(this.apiUrl + '/addContact', contactData, { headers });
  }

  getAllContacts(): Observable<any[]> {
    const headers = this.auth.setHeader();
    return this.http.get<any[]>(this.apiUrl + '/getContacts', { headers });
  }


  updateContact(contact: any): Observable<any> {
    const headers = this.auth.setHeader();
    const url = `${this.apiUrl}/updateContact/${contact.id}`;
    return this.http.put<any>(url, contact, { headers });
  }

  /*getContact(categoryId: number): Observable<any> {
    const url = `${this.apiUrl}/ca/${categoryId}`;
    return this.http.get<any>(url);
  }*/

  getContactById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }








}




