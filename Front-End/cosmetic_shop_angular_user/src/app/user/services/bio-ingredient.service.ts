import { Injectable } from '@angular/core';
import { SharedServiceService } from './shared-service.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BioIngredientService {

  constructor(private service: SharedServiceService) { }


  //get  an ingredient

  public getIngredient(id: number) {
    let path = '/ingredients/id/' + id;
    return (this.service.get(path, false));
  }

  //get all productS
  public getAllProducts(id: number, size: number) {
    const params = new HttpParams()
      .set('id', id.toString())
      .set('size', size.toString());
    let path = '/ingredients/getProductIngredient?' + params;
    return (this.service.get(path, false));
  }

  // get all bioIngredients 

  public getAllIngredients() {
    let path = '/ingredients';
    return (this.service.get(path, false));
  }
}
