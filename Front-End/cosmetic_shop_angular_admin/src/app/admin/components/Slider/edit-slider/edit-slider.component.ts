import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SliderServiceService } from 'src/app/admin/services/slider-service.service';

@Component({
  selector: 'app-edit-slider',
  templateUrl: './edit-slider.component.html',
  styleUrls: ['./edit-slider.component.css']
})
export class EditSliderComponent {

  slider: any = {}; // Initialize slider object
  sliderId!: number;
  userFile: any;
  public imagePath: any;
  imgURL: any;
  public message!: string;
  sliderForm!: NgForm;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sliderService: SliderServiceService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.sliderId = +params['id']; // Get the slider ID from the route parameter
      this.fetchSlider(this.sliderId); // Fetch slider details by ID
    });
  }

  fetchSlider(id: number): void {
    this.sliderService.getSliderById(id).subscribe({
      next: (response: any) => {
        console.log('Slider Response:', response);
        this.slider = response;
      },
      error: (error: any) => {
        console.error('Error fetching slider:', error);
      },
    });
  }

  onSubmit(): void {

    // Perform update here using this.slider
    this.sliderService.updateSlider(this.slider).subscribe({
      next: (response) => {
        alert('Slider updated successfully');
        // Redirect to the slider list page or perform other actions
        this.router.navigate(['/all-slider']);
      },
      error: (error) => {
        console.error('Error updating slider:', error);
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


