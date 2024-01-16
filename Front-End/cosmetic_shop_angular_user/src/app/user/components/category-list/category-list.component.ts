import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/admin/models/category';
import { CategoryServiceService } from '../../services/category-service.service';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories!: Category[];
  categoryCounts: { [id: number]: number } = {};

  constructor(private categoryService: CategoryServiceService) { }


  ngOnInit(): void {
    this.display();
  }



  display() {
    this.categoryService.getCategories().subscribe({
      next: (response: any) => {
        this.categories = response;
        this.categories.forEach(category => {
          this.prodCount(category.id);
        });
      },
      error: (err) => {
        console.log(err);
      }
    });

  }



  public prodCount(id: number) {
    this.categoryService.getCountProducts(id).subscribe({
      next: (response: any) => {
        this.categoryCounts[id] = response.count;
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
