import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/admin/models/brand';
import { BrandService } from 'src/app/admin/services/brand.service';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.css']
})

export class EditBrandComponent {
  brand: any = {};
  sliderId!: number;
  userFile: any;
  public imagePath: any;
  imgURL: any;
  public message!: string;
  sliderForm!: NgForm;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sliderService: BrandService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.sliderId = +params['id']; // Get the slider ID from the route parameter
      this.fetchSlider(this.sliderId); // Fetch slider details by ID
    });
  }

  fetchSlider(id: number): void {
    this.sliderService.getBrandById(id).subscribe({
      next: (response: any) => {
        console.log('brand Response:', response);
        this.brand = response;
      },
      error: (error: any) => {
        console.error('Error fetching brand:', error);
      },
    });
  }

  onSubmit(): void {

    // Perform update here using this.slider
    this.sliderService.updateBrand(this.brand).subscribe({
      next: (response) => {
        alert('brand updated successfully');
        // Redirect to the slider list page or perform other actions
        this.router.navigate(['/all-brand']);
      },
      error: (error) => {
        console.error('Error updating brand:', error);
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