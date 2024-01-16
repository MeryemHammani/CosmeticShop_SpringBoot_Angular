import { Injectable } from '@angular/core';
import { SharedServiceService } from './shared-service.service';

@Injectable({
  providedIn: 'root'
})
export class SupportService {

  constructor(public service: SharedServiceService) { }

  //Add a reclamtion 

  public addReclamation(data: any) {
    let path = '/addReclamation';
    return (this.service.post(data, path, false));
  }


  //get contacts 

  public getContacts() {
    let path = '/getContacts';
    return (this.service.get(path, false));
  }



}
