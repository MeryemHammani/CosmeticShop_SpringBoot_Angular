import { Component, OnInit } from '@angular/core';
import { BioIngredient } from 'src/app/admin/models/bioIngredient';
import { BioIngredientsService } from 'src/app/admin/services/bio-ingredients.service';


@Component({
  selector: 'app-all-bio-ingredients',
  templateUrl: './all-bio-ingredients.component.html',
  styleUrls: ['./all-bio-ingredients.component.css']
})
export class AllBioIngredientsComponent implements OnInit {

  bio: BioIngredient[] = [];

  constructor(private bioService: BioIngredientsService) { }

  ngOnInit(): void {
    this.loadAllIngredients();
  }

  loadAllIngredients() {
    this.bioService.getAllIngredients().subscribe({
      next: (response: BioIngredient[]) => {
        this.bio = response;
      },
      error: (error: any) => {
        console.error('Error loading ingredients:', error);
      }
    });
  }

  deleteIngredient(ingredientId: number) {
    if (confirm('Are you sure you want to delete this ingredient?')) {
      this.bioService.deleteIngredient(ingredientId).subscribe({
        next: () => {
          alert("ingredient delted succesfuly");
          this.loadAllIngredients();
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

  getImageUrl(imageFileName: string): string {
    return `http://localhost:8080/ingredients/images/${imageFileName}`;
  }
}
