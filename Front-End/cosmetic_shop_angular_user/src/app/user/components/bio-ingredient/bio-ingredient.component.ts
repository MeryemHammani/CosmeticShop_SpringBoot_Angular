import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BioIngredient } from 'src/app/admin/models/bioIngredient';
import { Product } from 'src/app/admin/models/poduct';
import { BioIngredientService } from '../../services/bio-ingredient.service';

@Component({
  selector: 'app-bio-ingredient',
  templateUrl: './bio-ingredient.component.html',
  styleUrls: ['./bio-ingredient.component.css']
})
export class BioIngredientComponent {
  products!: Product[];
  bioIngredient!: BioIngredient;
  id!: number;
  size: number = 5;
  total: number = 0;
  step: number = 5;

  constructor(private route: ActivatedRoute, private bioIngredService: BioIngredientService) {

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getIngredient(this.id);
    this.getProducts();
  }

  public getIngredient(id: number) {
    this.bioIngredService.getIngredient(id).subscribe({
      next: (response: any) => {
        this.bioIngredient = response
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  public getProducts() {
    this.bioIngredService.getAllProducts(this.id, this.size).subscribe({
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


  getImageUrl(imageFileName: string): string {
    return `http://localhost:8080/products/images/${imageFileName}`;
  }

}



