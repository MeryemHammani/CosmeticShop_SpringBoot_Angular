import { Component } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Authentication/services/auth-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  carts!: any[];


  constructor(public prodService: ProductServiceService, private router: Router, private authService: AuthServiceService) {
    this.getUserCarts();
    if (this.carts != undefined) {
      this.getTotalPrice();
    }

  }

  public getUserCarts() {
    this.prodService.getAllUserCarts().subscribe({
      next: (response: any) => { this.carts = response },
      error: (err) => {
        console.log(err);
      }
    });
  }

  public removeCart(prod_id: number, qte: number) {
    this.prodService.RemoveFromCart(prod_id).subscribe({
      next: (response: any) => {
        let user_id = this.prodService.user_id;
        const index = this.carts.findIndex(item => item.id.user_id === user_id && item.id.product_id === prod_id);
        if (index !== -1) {
          this.carts.splice(index, 1);
          this.prodService.setCount(-qte);
        }

      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  //remove all  user carts
  public removeAllCarts() {
    this.prodService.RemoveAllUserCarts().subscribe({
      next: (response: any) => {
        this.prodService.service.removeAll(this.carts);
        let qte = this.prodService.getCount();
        this.prodService.setCount(-qte);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }


  //update quantity

  public addQuantity(user_id: any, product_id: number) {
    // Find the index of the item in the carts array
    const index = this.carts.findIndex(item => item.id.user_id === user_id && item.id.product_id === product_id);
    // If the item is found, update it in the array
    if (index !== -1) {
      let cart = this.carts[index];
      let price = this.prodService.discount(cart.product.price, cart.product.discount, cart.product.flush_discount);
      cart.quantity += 1;
      cart.sub_amount += price;
      this.prodService.setCount(1);
      this.prodService.updateCart(cart).subscribe();
    }
  }
  public DecQuantity(user_id: any, product_id: number) {

    const index = this.carts.findIndex(item => item.id.user_id === user_id && item.id.product_id === product_id);
    if (index !== -1) {
      let cart = this.carts[index];
      if ((cart.quantity - 1) <= 0) {
        this.removeCart(product_id, 1);
      }
      else {
        let price = this.prodService.discount(cart.product.price, cart.product.discount, cart.product.flush_discount);
        cart.quantity -= 1;
        cart.sub_amount -= price;
        this.prodService.setCount(-1);
        this.prodService.updateCart(cart).subscribe();
      }

    }
  }

  //get totalPrice
  getTotalPrice() {
    let total = 0;
    this.carts.forEach(el => total += el.sub_amount);
    return total;
  }


  public navigateToCheckout() {
    this.prodService.service.setData("carts", this.carts);
    this.prodService.service.setData("total_price", this.getTotalPrice());
    if (this.authService.isAuthenticated('User'))
      this.router.navigate(['/user/checkout']);
    else
      this.router.navigate(['/user/login']);
  }

  getImageUrl(imageFileName: string): string {
    return `http://localhost:8080/products/images/${imageFileName}`;
  }






}
