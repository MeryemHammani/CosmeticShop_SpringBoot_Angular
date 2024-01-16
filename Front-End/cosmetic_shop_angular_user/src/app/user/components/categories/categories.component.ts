import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SCategory } from 'src/app/admin/models/scategory';
import { ProductServiceService } from '../../services/product-service.service';
import { Product } from 'src/app/admin/models/poduct';
import { CategoryServiceService } from '../../services/category-service.service';
import { Category } from 'src/app/admin/models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  subcategories!: SCategory[];
  products!: Product[];
  id!: number;
  size: number = 5;
  total: number = 0;
  step: number = 5;
  category!: Category;

  constructor(private route: ActivatedRoute, public categoryService: CategoryServiceService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getsubCategories();
    this.getCategory();
    this.getProducts();
  }


  public getsubCategories() {

    this.categoryService.getsubCategories(this.id).subscribe({
      next: (response: any) => {
        this.subcategories = response;
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  public getCategory() {

    this.categoryService.getCategory(this.id).subscribe({
      next: (response: any) => {
        this.category = response;
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  public getProducts() {

    this.categoryService.getCatProducts(this.id, this.size).subscribe({
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
      this.getProducts();
    }
  }

  public nextPage() {
    if ((this.size + this.step) >= this.total)
      this.size = this.total;
    else {
      this.size += this.step;
    }
    this.getProducts();
  }






}
