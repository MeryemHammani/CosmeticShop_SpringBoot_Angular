import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/admin/models/poduct';
import { ProductServiceService } from '../../services/product-service.service';
import { BioIngredient } from 'src/app/admin/models/bioIngredient';
import { ClipboardService } from 'ngx-clipboard';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/admin/models/cart';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  prod!: Product;
  code!: string;
  bioIngreds!: BioIngredient[];
  cart!: Cart;
  qte!: number;
  products!: Product[];

  constructor(public prodService: ProductServiceService, private clipboardService: ClipboardService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.code = params['code'];
    });

    this.getProduct(this.code);
    this.getIngredients(this.code);

  }

  public getProduct(code: string) {
    this.prodService.getProduct(code).subscribe({
      next: (response: any) => {
        this.prod = response;
        this.display(this.prod.subcategory.id, 5);
      },
      error: (err) => { console.log(err) }
    });
  }

  getIngredients(code: string) {
    this.prodService.getProductIngreds(code).subscribe({
      next: (response: any) => {
        this.bioIngreds = response;
      },
      error: (err) => {
        alert(err);
        console.log(err);
      }
    });

  }

  public copyLink() {
    const productLink = 'http://localhost:4200/user/product-details/' + this.prod.code;
    const result = this.clipboardService.copy(productLink);
    alert('Link copied');
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

  public display(id: number, size: number) {
    this.prodService.getProdsubCategories(id, size).subscribe({
      next: (response: any) => {
        this.products = response.products;
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
