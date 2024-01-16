import { Component } from '@angular/core';
import { BioIngredient } from 'src/app/admin/models/bioIngredient';
import { BioIngredientService } from '../../services/bio-ingredient.service';

@Component({
  selector: 'app-list-bio-ingredient',
  templateUrl: './list-bio-ingredient.component.html',
  styleUrls: ['./list-bio-ingredient.component.css']
})
export class ListBioIngredientComponent {
  bioIngredients!: BioIngredient[];


  constructor(private bioIngredService: BioIngredientService) {
    this.getIngredients();
  }

  public getIngredients() {
    this.bioIngredService.getAllIngredients().subscribe({
      next: (response: any) => {
        this.bioIngredients = response
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
