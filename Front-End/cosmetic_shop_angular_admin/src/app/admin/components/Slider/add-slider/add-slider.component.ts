import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Slider } from 'src/app/admin/models/slider';
import { SliderServiceService } from 'src/app/admin/services/slider-service.service';

@Component({
  selector: 'app-add-slider',
  templateUrl: './add-slider.component.html',
  styleUrls: ['./add-slider.component.css']
})
export class AddSliderComponent implements OnInit {
  sliderForm!: FormGroup;
  imageFilePath!: any;

  constructor(private formBuilder: FormBuilder, private sliderService: SliderServiceService) { }

  ngOnInit(): void {
    this.sliderForm = this.formBuilder.group({
      title: ['', Validators.required],
      link: ['', Validators.required],
      src: [null, Validators.required],
      image: [null, Validators.required],
      description: ['', Validators.required],
      button: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.imageFilePath) {
      this.sliderForm.get('image')?.setValue(this.imageFilePath); // Set the image path in the form
    }

    this.sliderService.addSlider(this.sliderForm.value)
      .subscribe({
        next: (response: Slider) => {
          alert('Slider ajouté avec succès:');
        },
        error: (error) => {
          console.log('Erreur lors de l\'ajout du slider :', error);
          alert('Error adding slider: ' + error.message);
        }
      });
  }

  onFileSelected(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadFile(file);
    }
  }

  uploadFile(file: File): void {
    const formData = new FormData();
    formData.append('file', file);

    // Send the formData to your backend
    this.sliderService.uploadImage(formData).subscribe({
      next: (response: any) => {
        if (response.filePath) {
          this.imageFilePath = response.filePath;
          // Handle success
          alert('File uploaded successfully. File path: ' + response.filePath);
        } else {
          alert('Received an unexpected response from the server.');
        }
      },
      error: (error) => {
        console.error('Error uploading file:', error);
        alert('Error uploading file: ' + error.message);
      }
    });
  }

}
