import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/admin/models/poduct';
import { ProductService } from 'src/app/admin/services/product.service';
import { ProductServiceService } from 'src/app/user/services/product-service.service';

;

@Component({
  selector: 'app-product-list',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent {
  products!: Product[];
  currentPage: number = 0;
  itemsPerPage: number = 100;
  totalItems: number = 0;
  totalPages: number = 0;

  constructor(public prodService: ProductServiceService, private productService: ProductService) {
    this.getProducts();
  }

  public getProducts() {
    this.prodService.getAllProducts(this.currentPage, this.itemsPerPage).subscribe({
      next: (response: any) => {
        this.products = response.products;
        this.totalItems = response.total;
        this.totalPages = response.pages;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  // pagination methodes  
  public previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.getProducts();
    }
  }

  public nextPage() {
    if (this.currentPage < this.totalPages - 1)
      this.currentPage++;
    this.getProducts();
  }
  /* products: Product[] = [];
 
   constructor(private productService: ProductService) { }
 
   ngOnInit() {
     this.getProducts();
   }
 
   getProducts() {
     this.productService.getProducts().subscribe({
       next: (response: Product[]) => {
         this.products = response;
       },
       error: (error) => {
         console.log(error);
       }
     });
   }*/


  deleteProduct(productId: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(productId).subscribe({
        next: () => {
          alert("product delted succesfuly");
          this.getProducts();
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

  getImageUrl(imageFileName: string): string {
    return `http://localhost:8080/products/images/${imageFileName}`;
  }

}
