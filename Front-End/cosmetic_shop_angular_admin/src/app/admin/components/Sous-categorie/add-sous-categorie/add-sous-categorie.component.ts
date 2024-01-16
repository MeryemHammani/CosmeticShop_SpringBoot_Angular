import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/admin/services/category.service';
import { SousCategoryService } from 'src/app/admin/services/sous-category.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './add-sous-categorie.component.html',
  styleUrls: ['']
})
export class AddSubcategoryComponent implements OnInit {
  subcategoryForm: FormGroup;
  selectedCategoryId!: string; // Or change the type to match your category ID type

  categories: any[] = []; // Array to store categories

  constructor(
    private fb: FormBuilder,
    private sousCategoryService: SousCategoryService,
    private categoryService: CategoryService// Inject your SousCategoryService here
  ) {
    this.subcategoryForm = this.fb.group({
      categoryId: ['', Validators.required], // Use categoryId instead of category
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Fetch categories when the component initializes
    this.categoryService.getAllCategories().subscribe({
      next: (response) => {
        // Assuming the response is an array of category objects
        this.categories = response;
      },
      error: (error) => {
        console.error('Error fetching categories:', error);
      }
    });
  }

  addSubcategory(): void {
    if (this.subcategoryForm.valid && this.selectedCategoryId) {
      const subcategoryData = this.subcategoryForm.value;

      // Create the payload with the selected category ID
      const payload = {
        name: subcategoryData.name,
        description: subcategoryData.description,
        created_at: new Date().toISOString(),
        category: {
          id: this.selectedCategoryId // Use the selected category ID
        }
      };

      this.sousCategoryService.addSCategory(payload).subscribe({
        next: (response) => {
          alert('Subcategory added successfully');
          // You might want to reset the form or redirect to another page here
        },
        error: (error) => {
          console.error('Error adding subcategory:', error);
        }
      });
    } else {
      alert('Please select a category.');
    }
  }

}
