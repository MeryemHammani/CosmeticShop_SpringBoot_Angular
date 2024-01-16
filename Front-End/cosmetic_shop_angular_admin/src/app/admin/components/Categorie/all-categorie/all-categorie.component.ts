import { Component } from '@angular/core';
import { Brand } from 'src/app/admin/models/brand';
import { Category } from 'src/app/admin/models/category';
import { CategoryService } from 'src/app/admin/services/category.service';

@Component({
  selector: 'app-all-categorie',
  templateUrl: './all-categorie.component.html',
  styleUrls: ['']
})


export class AllCategorieComponent {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }


  ngOnInit(): void {
    this.loadAllCategories();
  }

  loadAllCategories() {
    this.categoryService.getAllCategories().subscribe({
      next: (response: Category[]) => {
        this.categories = response;
      },
      error: (error: any) => {
        console.error('Error loading categories:', error);
      }
    });
  }

  deleteCategory(categoryId: number) {
    if (confirm('Are you sure you want to delete this Category?')) {
      this.categoryService.deleteCategory(categoryId).subscribe({
        next: () => {
          alert("category delted succesfuly");
          this.loadAllCategories();
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

  getImageUrl(imageFileName: string): string {
    return `http://localhost:8080/categories/images/${imageFileName}`;
  }



}
