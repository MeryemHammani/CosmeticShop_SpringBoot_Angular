import { Component, OnInit } from '@angular/core';
import { SousCategoryService } from 'src/app/admin/services/sous-category.service';

@Component({
  selector: 'app-all-sous-categorie',
  templateUrl: './all-sous-categorie.component.html',
  styleUrls: ['./all-sous-categorie.component.css']
})
export class AllSousCategorieComponent implements OnInit {
  subcategories: any[] = [];

  constructor(private subcategoryService: SousCategoryService) { }

  ngOnInit(): void {
    this.getSubcategories();
  }

  getSubcategories(): void {
    this.subcategoryService.getAllSCategories().subscribe({
      next: (response: any[]) => {
        this.subcategories = response;
      },
      error: (error: any) => {
        console.error('Error fetching subcategories:', error);
      }
    });
  }

  deletesCategory(categoryId: number) {
    if (confirm('Are you sure you want to delete this Category?')) {
      this.subcategoryService.deletesCategory(categoryId).subscribe({
        next: () => {
          alert("category delted succesfuly");
          this.getSubcategories();
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

}
