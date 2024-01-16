import { Injectable } from '@angular/core';
import { SharedServiceService } from './shared-service.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(public service: SharedServiceService) { }


  //get Categories 
  public getCategories() {
    let path = '/categories';
    return (this.service.get(path, false));
  }

  //get subCategories of  category
  public getsubCategories(id: number) {
    let path = '/categories/getSubCategories/' + id;
    return (this.service.get(path, false));
  }


  //get products of a  subgategory:


  public getProdsubCategories(id: number, size: number) {
    const params = new HttpParams()
      .set('id', id.toString())
      .set('size', size.toString());
    let path = '/subCategories/allProducts?' + params;
    return (this.service.get(path, false));
  }


  //get ProductsCategories of  c ategory


  public getCatProducts(id: number, size: number) {
    const params = new HttpParams()
      .set('id', id.toString())
      .set('size', size.toString());
    let path = '/categories/getCatProducts?' + params;
    return (this.service.get(path, false));
  }



  //get count og a category  produducts
  public getCountProducts(id: number) {
    let path = '/categories/getProductsCount/' + id;
    return (this.service.get(path, false));
  }




}
