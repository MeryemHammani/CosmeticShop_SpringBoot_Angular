import { Component } from '@angular/core';
import { Product } from 'src/app/admin/models/poduct';
import { ProductServiceService } from '../../services/product-service.service';


@Component({
  selector: 'app-wishlist-prods',
  templateUrl: './wishlist-prods.component.html',
  styleUrls: ['./wishlist-prods.component.css']
})
export class WishlistProdsComponent {
  products!: Product[];
  constructor(public prodService: ProductServiceService) {
    this.getWishList();
  }


  public getWishList() {
    this.prodService.getProdsWishList().subscribe({
      next: (response: any) => {
        this.products = response;
      },
      error: (err) => {
        alert(" false  products");
      }
    });

  }


  public RemoveFromWishList(id: number) {
    this.prodService.RemoveFromWishList(id).subscribe();
    this.prodService.service.removeItem(id, this.products);
  }

  public RemoveAllFromWishList() {
    this.prodService.RemoveAllFromWishList().subscribe();
    this.prodService.service.removeAll(this.products);
  }

  getImageUrl(imageFileName: string): string {
    return `http://localhost:8080/products/images/${imageFileName}`;
  }


}
