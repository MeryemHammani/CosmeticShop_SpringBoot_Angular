import { Component, OnInit } from '@angular/core';
import { SliderServiceService } from 'src/app/admin/services/slider-service.service';

@Component({
  selector: 'app-all-slider',
  templateUrl: './all-slider.component.html',
  styleUrls: ['./all-slider.component.css']
})
export class AllSliderComponent implements OnInit {
  sliders: any[] = [];

  constructor(private sliderService: SliderServiceService) { }

  ngOnInit() {
    this.fetchSliders();
  }

  fetchSliders() {
    this.sliderService.getAllSliders().subscribe({
      next: (response) => {
        this.sliders = response; // Assuming the response is an array of slider objects
      },
      error: (error) => {
        // Handle the error response
      }
    });
  }

  deleteSlider(categoryId: number) {
    if (confirm('Are you sure you want to delete this slider?')) {
      this.sliderService.deleteSlider(categoryId).subscribe({
        next: () => {
          alert("slider delted succesfuly");
          this.fetchSliders();
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

  getImageUrl(imageFileName: string): string {
    return `http://localhost:8080/banners/images/${imageFileName}`;
  }
}
