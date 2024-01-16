import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/admin/services/category.service';
import { SousCategoryService } from 'src/app/admin/services/sous-category.service';

@Component({
  selector: 'app-edit-sous-categorie',
  templateUrl: './edit-sous-categorie.component.html',
  styleUrls: ['./edit-sous-categorie.component.css']
})
export class EditSousCategorieComponent {
  subcategoryForm: FormGroup;
  subcategoryId!: number;
  subcategory: any;
  categories: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private sousCategoryService: SousCategoryService,
    private categoryService: CategoryService
  ) {
    this.subcategoryForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      description: [''],
      category: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.subcategoryId = +params['id']; // Get the subcategory ID from the route parameter
      this.fetchSubcategory(this.subcategoryId); // Fetch subcategory details by ID
    });

    // Fetch categories when the component initializes
    this.categoryService.getAllCategories().subscribe({
      next: (response) => {
        this.categories = response;
      },
      error: (error) => {
        console.error('Error fetching categories:', error);
      }
    });
  }

  fetchSubcategory(id: number): void {
    this.sousCategoryService.getSCategory(id).subscribe({
      next: (response: any) => {
        this.subcategory = response;
        this.subcategoryForm.patchValue(this.subcategory);
      },
      error: (error: any) => {
        console.error('Error fetching subcategory:', error);
      }
    });
  }

  updateSubcategory(): void {
    if (this.subcategoryForm.valid) {
      const updatedSubcategory = this.subcategoryForm.value;
      this.sousCategoryService.updateSCategory(updatedSubcategory).subscribe({
        next: (response: any) => {
          alert('Subcategory updated successfully:');
          this.router.navigate(['/subcategory-list']);
        },
        error: (error: any) => {
          console.error('Error updating subcategory:', error);
        }
      });
    }
  }







}
