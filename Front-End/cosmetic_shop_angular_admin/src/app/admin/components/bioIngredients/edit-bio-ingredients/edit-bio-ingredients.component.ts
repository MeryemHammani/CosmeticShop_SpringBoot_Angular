import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BioIngredientsService } from 'src/app/admin/services/bio-ingredients.service';
import { BrandService } from 'src/app/admin/services/brand.service';

@Component({
  selector: 'app-edit-bio-ingredients',
  templateUrl: './edit-bio-ingredients.component.html',
  styleUrls: ['./edit-bio-ingredients.component.css']
})
export class EditBioIngredientsComponent {
  bio: any = {};
  sliderId!: number;
  userFile: any;
  public imagePath: any;
  imgURL: any;
  public message!: string;
  sliderForm!: NgForm;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sliderService: BioIngredientsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.sliderId = +params['id'];
      this.fetchSlider(this.sliderId);
    });
  }

  fetchSlider(id: number): void {
    this.sliderService.getIngredientById(id).subscribe({
      next: (response: any) => {
        console.log('ingredients Response:', response);
        this.bio = response;
      },
      error: (error: any) => {
        console.error('Error fetching ingredient:', error);
      },
    });
  }

  onSubmit(): void {

    this.sliderService.updateIngredients(this.bio).subscribe({
      next: (response) => {
        alert('ingredient updated successfully');
        this.router.navigate(['/all-bio-ingredients']);
      },
      error: (error) => {
        console.error('Error updating ingredient:', error);
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
