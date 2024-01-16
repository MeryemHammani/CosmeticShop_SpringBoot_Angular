import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/admin/models/poduct';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-best-offer',
  templateUrl: './best-offer.component.html',
  styleUrls: ['./best-offer.component.css']
})
export class BestOfferComponent {
  products!: Product[];
  currentPage: number = 0;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  totalPages: number = 0;

  constructor(public prodService: ProductServiceService) {
    this.getProducts();
  }


  public getProducts() {
    this.prodService.getBestProds(this.currentPage, this.itemsPerPage).subscribe({
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

}
