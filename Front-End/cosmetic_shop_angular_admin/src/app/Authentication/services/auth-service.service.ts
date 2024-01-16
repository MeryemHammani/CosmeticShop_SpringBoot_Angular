import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor() { }
  //user
  setAuthInfo(authUser: any): void {
    if (authUser !== null) {
      window.localStorage.setItem("AuthUser", JSON.stringify(authUser));
    }

  }

  getAutUser(): any {
    let item = window.localStorage.getItem("AuthUser") as string;
    return JSON.parse(item);
  }

  clearAuthInfo(): Observable<boolean> {
    localStorage.removeItem("AuthUser");
    return of(true);
  }

  setHeader(): HttpHeaders {
    let headers: any = {};
    let token = this.getAutUser().token;

    if (token !== null) {
      headers = { "Authorization": "Bearer " + token };
    }
    return headers;
  }


  /*setHeader(): HttpHeaders {
    let headers = new HttpHeaders();
    let token = this.getAutUser().token;

    headers = headers.set('enctype', 'multipart/form-data');

    if (token !== null) {
      headers = headers.set('Authorization', 'Bearer ' + token);
    }

    return headers;
  }
  */


  public isAutUserPresent() {
    return (this.getAutUser() !== null);
  }

  public isAuthenticated(role: string) {
    return (!this.isAutUserPresent() || !this.hasRole(role) || this.isExpired()) ? false : true;

  }

  public hasRole(auth: string) {

    const user = this.getAutUser();
    const hasRole = user.roles.some((role: { roleName: string; }) => role.roleName == auth);
    return hasRole ? true : false;
  }

  public isExpired() {
    const token = this.getAutUser().token;
    const decodedToken: any = jwtDecode(token);
    const expDate = decodedToken.exp;

    if (expDate) {

      const currentTimestamp = Math.floor(Date.now() / 1000); // Current timestamp in seconds

      if (expDate < currentTimestamp) {

        return true;
      } else {

        return false;
      }
    }
    else {
      return false;
    }

  }




}
