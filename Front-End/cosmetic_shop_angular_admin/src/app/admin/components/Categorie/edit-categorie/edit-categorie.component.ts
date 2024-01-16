import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/admin/models/category';
import { CategoryService } from 'src/app/admin/services/category.service';
import { SliderServiceService } from 'src/app/admin/services/slider-service.service';

@Component({
  selector: 'edit-categorie',
  templateUrl: './edit-categorie.component.html',
  styleUrls: ['']
})
export class EditCategoryComponent {
  category: any = {}; // Initialize slider object
  sliderId!: number;
  userFile: any;
  public imagePath: any;
  imgURL: any;
  public message!: string;
  sliderForm!: NgForm;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sliderService: CategoryService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.sliderId = +params['id']; // Get the slider ID from the route parameter
      this.fetchSlider(this.sliderId); // Fetch slider details by ID
    });
  }

  fetchSlider(id: number): void {
    this.sliderService.getCategoryById(id).subscribe({
      next: (response: any) => {
        console.log('Slider Response:', response);
        this.category = response;
      },
      error: (error: any) => {
        console.error('Error fetching slider:', error);
      },
    });
  }

  onSubmit(): void {

    // Perform update here using this.slider
    this.sliderService.updateCategory(this.category).subscribe({
      next: (response) => {
        alert('Category updated successfully');
        // Redirect to the slider list page or perform other actions
        this.router.navigate(['/all-categorie']);
      },
      error: (error) => {
        console.error('Error updating category:', error);
      },
    });

  }


  onSelectFile(event: Event): void {

    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];

    if (file) {
      this.userFile = file;

      const mimeType = file.type;
      if (!mimeType.match(/image\/*/)) {
        this.message = "Only images are supported.";
        return;
      }

      const reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      };
    }
  }

}