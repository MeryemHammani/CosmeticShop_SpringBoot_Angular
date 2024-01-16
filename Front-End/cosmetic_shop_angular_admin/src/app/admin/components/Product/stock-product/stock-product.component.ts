import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/admin/models/poduct';
import { ProductService } from 'src/app/admin/services/product.service';
import { ProductServiceService } from 'src/app/user/services/product-service.service';

@Component({
  selector: 'app-stock-product',
  templateUrl: './stock-product.component.html',
  styleUrls: ['./stock-product.component.css']
})
export class StockProductComponent implements OnInit {

  products!: Product[];
  currentPage: number = 0;
  itemsPerPage: number = 100;
  totalItems: number = 0;
  totalPages: number = 0;

  constructor(public prodService: ProductServiceService, private productService: ProductService) {
    this.getProducts();

  }
  ngOnInit(): void {

    // this.updateProductStatus()
  };

  public getProducts() {
    this.prodService.getAllProducts(this.currentPage, this.itemsPerPage).subscribe({
      next: (response: any) => {
        this.products = response.products;
        this.totalItems = response.total;
        this.totalPages = response.pages;
        this.updateProductStatus();
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

  updateProductStatus() {
    for (const product of this.products) {
      if (product.quantity <= 5) {
        product.status = 'Stock faible';
      } else if (product.quantity == 0) {
        product.status = 'Rupture de stock';
      } else {
        product.status = 'Active';
      }
    }
  }

}
