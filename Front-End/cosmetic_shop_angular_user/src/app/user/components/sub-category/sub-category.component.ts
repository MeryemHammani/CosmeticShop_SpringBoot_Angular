import { Component } from '@angular/core';
import { Product } from 'src/app/admin/models/poduct';
import { ProductServiceService } from '../../services/product-service.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryServiceService } from '../../services/category-service.service';
import { SCategory } from 'src/app/admin/models/scategory';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent {

  products!: Product[];
  id!: number;
  size: number = 5;
  total: number = 0;
  step: number = 5;
  subcategory!: SCategory;

  constructor(private route: ActivatedRoute, public categoryService: CategoryServiceService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getSubCategory();
    this.display();
  }


  public getSubCategory() {

    this.categoryService.getSubCategory(this.id).subscribe({
      next: (response: any) => {
        this.subcategory = response;
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  public display() {
    this.categoryService.getProdsubCategories(this.id, this.size).subscribe({
      next: (response: any) => {
        this.products = response.products;
        this.total = response.total;
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  // pagination methodes  
  public previousPage() {
    if (this.size > this.step) {
      this.size -= this.step;
      this.display();
    }
  }

  public nextPage() {
    if ((this.size + this.step) >= this.total)
      this.size = this.total;
    else {
      this.size += this.step;
    }
    this.display();
  }




}


