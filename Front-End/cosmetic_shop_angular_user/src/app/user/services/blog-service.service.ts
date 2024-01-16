import { Injectable } from '@angular/core';
import { SharedServiceService } from './shared-service.service';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {
  constructor(public service: SharedServiceService) { }


  //get  an ingredient

  public getBlog(id: number) {
    let path = '/blogs/id/' + id;
    return (this.service.get(path, false));
  }

  //get all productS
  public getAllBlogs() {
    let path = '/blogs';
    return (this.service.get(path, false));
  }


}
