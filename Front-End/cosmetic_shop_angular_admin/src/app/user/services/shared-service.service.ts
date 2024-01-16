import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

import { AuthServiceService } from 'src/app/Authentication/services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  PATH_OF_API = 'http://localhost:8080';
  constructor(private httpclient: HttpClient, public authService: AuthServiceService, private datePipe: DatePipe) { }

  //-------------------------------to communicate with the backend ----------------------------
  post(data: any, path: string, header: boolean) {
    if (header == true)
      return this.httpclient.post(this.PATH_OF_API + path, data, { headers: this.authService.setHeader() });
    else
      return this.httpclient.post(this.PATH_OF_API + path, data);
  }


  get(path: string, header: boolean) {
    if (header == true)
      return this.httpclient.get(this.PATH_OF_API + path, { headers: this.authService.setHeader() });
    else
      return this.httpclient.get(this.PATH_OF_API + path);
  }


  put(data: any, path: string) {
    return this.httpclient.put(this.PATH_OF_API + path, data, { headers: this.authService.setHeader() });
  }



  delete(path: string) {
    return this.httpclient.delete(this.PATH_OF_API + path, { headers: this.authService.setHeader() });
  }


  //-------------------------COMMON TOOLS --------------------------------------------------------------------------------------

  //  this to transfer Product data 


  setData(item: string, data: any) {
    localStorage.setItem(item, JSON.stringify(data));
  }

  getData(item: string) {
    let prod = localStorage.getItem(item) as string;
    return JSON.parse(prod);
  }


  // remove item  from an array by id
  public removeItem(id: any, items: any[]) {
    const index = items.findIndex(item => item.id === id);
    alert(index);
    if (index !== -1) {
      items.splice(index, 1);
    }
  }

  // remove  all item  from an array 
  public removeAll(items: any[]) {
    items.splice(0, items.length);
  }

  //convert the timestamp to a regular date (year/mounth/day)
  public DateConvert(timestamp: any) {
    const date = new Date(timestamp);
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  //parse to json object
  getJsonString(data: any): string {
    return JSON.stringify(data);
  }



  public getErrorMessage(fieldName: string, error: ValidationErrors) {
    if (error['required']) return fieldName + " est requis";
    else if (error['minlength']) return fieldName + " doit avoir au moins " + error['minlength']['requiredLength'] + " caractère(s)";
    else if (error['min']) return fieldName + " doit avoir une valeur minimale de " + error['min']['min'];
    else if (error['pattern']) return "Veuillez entrer un(e) " + fieldName + " valide";
    else if (error['email']) return "Veuillez entrer une adresse email valide";
    else if (error['lowercase']) return fieldName + " doit contenir au moins une lettre minuscule";
    else if (error['uppercase']) return fieldName + " doit contenir au moins une lettre majuscule";
    else if (error['digit']) return fieldName + " doit contenir au moins un chiffre";
    else if (error['specialChar']) return fieldName + " doit contenir au moins un caractère spécial";
    else return "";
  }



}
