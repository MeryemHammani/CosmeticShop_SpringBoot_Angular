import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { Product } from 'src/app/admin/models/poduct';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query!: string;
  products!: Product[];
  currentPage: number = 0;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  totalPages: number = 0;



  constructor(private prodService: ProductServiceService, private route: ActivatedRoute) { this.getProducts(); }

  public getProducts() {
    // Use paramMap instead of params
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.query = params.get('query') || '';
      this.getSearch();
    });
  }

  public getSearch() {
    this.prodService.getSearchProds(this.query, this.currentPage, this.itemsPerPage).subscribe({
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
