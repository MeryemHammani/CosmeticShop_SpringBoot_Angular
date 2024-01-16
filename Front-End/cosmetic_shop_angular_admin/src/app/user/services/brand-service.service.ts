import { Injectable } from '@angular/core';
import { SharedServiceService } from './shared-service.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandServiceService {
  constructor(public service: SharedServiceService) { }

  //  this to transfer Brand data 
  private BrandData: any;

  setData(data: any) {
    this.BrandData = data;
  }

  getData() {
    return this.BrandData;
  }

  //get brands
  public getBrands() {
    return this.service.get('/brands', false);
  }

  //get products of a brand 

  public getProductsBrand(id: number, size: number) {
    const params = new HttpParams()
      .set('id', id.toString())
      .set('size', size.toString());
    let path = '/brands/getProds?' + params;
    return (this.service.get(path, false));
  }
}
