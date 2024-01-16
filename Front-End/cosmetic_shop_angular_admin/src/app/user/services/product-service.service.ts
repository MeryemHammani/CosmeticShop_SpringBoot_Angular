import { Injectable } from '@angular/core';
import { SharedServiceService } from './shared-service.service';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ProductServiceService {
  user_id: any;
  public cart_prod_count = 0;

  constructor(public service: SharedServiceService, private route: Router) {
    if (service.authService.isAuthenticated('User'))
      this.user_id = this.service.authService.getAutUser().id;
  }

  public getCount() {
    return this.cart_prod_count;
  }

  public setCount(qte: number) {
    this.cart_prod_count += qte;
  }


  //get all productS
  public getAllProducts(page: number, pageSize: number) {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', pageSize.toString());
    let path = '/products?' + params;
    return (this.service.get(path, false));
  }


  //get a product by using its code
  public getProduct(code: string) {
    let path = '/products/code/' + code;
    return (this.service.get(path, false));
  }

  //get  a product ingredients using its code
  public getProductIngreds(code: string) {
    let path = '/products/getIngredients/' + code;
    return (this.service.get(path, false));
  }

  //get a product reviews using its code
  public getProductReviews(code: string) {
    let path = '/products/getReviews/' + code;
    return (this.service.get(path, false));
  }

  //get valid reviews of a product 
  public getValidProductReviews(id: number) {
    let path = '/products/getValidReviews/' + id;
    return (this.service.get(path, false));
  }

  //add review 

  public AddReview(data: any) {
    let path = '/reviews';
    return (this.service.post(data, path, true));
  }

  //get whishlist prods

  public getProdsWishList() {
    let path = '/getWishList/' + this.user_id;
    return (this.service.get(path, true));
  }


  //get best products 

  public getBestProds(page: number, pageSize: number) {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', pageSize.toString());
    let path = '/products/getBestProducts?' + params;
    return (this.service.get(path, false));
  }


  //get new products 

  public getNewProds(page: number, pageSize: number) {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', pageSize.toString());
    let path = '/products/getNewProducts?' + params;
    return (this.service.get(path, false));
  }

  //getSearch result
  public getSearchProds(query: string, page: number, pageSize: number) {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', pageSize.toString())
      .set('query', query);

    let path = '/products/searchProducts?' + params;
    return (this.service.get(path, false));
  }



  //add to wishlist
  public addToWishList(prod_id: number) {
    let data = { "user_id": this.user_id, "prod_id": prod_id }
    let path = '/AddProdToWishList';
    return (this.service.post(data, path, true));
  }

  //remove to wishlist
  public RemoveFromWishList(id: number) {
    let prod_id = id.toString();

    let queryParameters = new URLSearchParams({
      "user_id": this.user_id,
      "prod_id": prod_id
    });


    let path = '/RemoveFromWishList?' + queryParameters.toString();
    return this.service.delete(path);

  }


  //remove all frrom wishList
  public RemoveAllFromWishList() {
    let path = '/RemoveAllFromWishList/' + this.user_id;
    return this.service.delete(path);
  }

  /**************************************CART*********************************************** */
  //add a product to cart 
  public AddToCart(data: any) {
    let path = '/shopingcarts';
    return (this.service.post(data, path, true));
  }

  //get All User Carts
  public getAllUserCarts() {
    let path = '/getCart/' + this.user_id;
    return (this.service.get(path, true));
  }

  //remove a cart

  public RemoveFromCart(id: number) {
    let prod_id = id.toString();
    let queryParameters = new URLSearchParams({
      "user_id": this.user_id,
      "product_id": prod_id
    });

    let path = '/shopingcarts/RemoveCart?' + queryParameters.toString();

    return this.service.delete(path);

  }

  //remove all from user carts
  public RemoveAllUserCarts() {
    let path = '/shopingcarts/RemoveAllCarts/' + this.user_id;
    return this.service.delete(path);
  }

  // get cart count
  public getProductCartCount() {
    let path = '/getCountCart/' + this.user_id;
    return (this.service.get(path, true));
  }

  //update a cart
  public updateCart(data: any) {
    let path = '/shopingcarts'
    return this.service.put(data, path);
  }



  //navigato into the login page if not authenticated 

  public navigateToLogin() {
    if (!this.service.authService.isAuthenticated('User'))
      this.route.navigate(['/user/login']);
  }





  //calculate the promoted price

  public discount(price: number, discount: number, flushDiscount: number) {
    if (discount != 0 || flushDiscount != 0) {
      if (flushDiscount != 0) {
        discount = flushDiscount;
      }
      return price * (1 - (discount / 100))
    }
    else {
      return price;
    }
  }







}
