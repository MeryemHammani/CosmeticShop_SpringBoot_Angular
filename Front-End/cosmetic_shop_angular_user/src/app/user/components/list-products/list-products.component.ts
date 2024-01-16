import { Component, Input } from '@angular/core';
import { Product } from 'src/app/admin/models/poduct';
import { Cart } from 'src/app/admin/models/cart';
import { ProductServiceService } from '../../services/product-service.service';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {

  @Input() products!: Product[];
  cart!: Cart;


  constructor(public prodService: ProductServiceService) {
  }


  public addToWishList(id: number) {
    this.prodService.navigateToLogin();
    this.prodService.addToWishList(id).subscribe({
      next: (response: any) => {
        alert(response.message);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  public addToCart(p: Product) {
    this.prodService.navigateToLogin();
    let user_id = this.prodService.service.authService.getAutUser().id as number;
    let price = this.prodService.discount(p.price, p.discount, p.flush_discount);
    this.cart = { id: { "user_id": user_id, "product_id": p.id }, "quantity": 1, "sub_amount": price };
    this.prodService.AddToCart(this.cart).subscribe({
      next: (response: any) => {
        this.prodService.setCount(1);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getImageUrl(imageFileName: string): string {
    return `http://localhost:8080/products/images/${imageFileName}`;
  }
}


