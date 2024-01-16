import { Injectable } from '@angular/core';
import { SharedServiceService } from './shared-service.service';

@Injectable({
  providedIn: 'root'
})
export class FaqServiceService {

  constructor(public service: SharedServiceService) { }

  //get all FaqCategories

  public getFaqCategories() {
    let path = '/faqCategories';
    return (this.service.get(path, false));
  }

  //get faqitems oof a faqCategory 
  public getFaqItems(name: string) {
    let path = '/faqCategories/getFaqItems/' + name;
    return (this.service.get(path, false));
  }


}
