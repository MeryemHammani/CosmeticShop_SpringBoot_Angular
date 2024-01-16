import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BrandService } from 'src/app/admin/services/brand.service';
import { ElementRef, ViewChild } from '@angular/core';
import { Brand } from 'src/app/admin/models/brand';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent {
  form: FormGroup;
  imgURL: any;
  imageFilePath!: any;

  constructor(
    private formBuilder: FormBuilder,
    private brandService: BrandService
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      logo: [null],
      description: ['']
    });
  }

  onSubmit(): void {
    if (this.imageFilePath) {
      this.form.get('logo')?.setValue(this.imageFilePath); // Set the image path in the form
    }

    this.brandService.addBrand(this.form.value)
      .subscribe({
        next: (response: any) => {
          alert('Brand ajouté avec succès:');
        },
        error: (error) => {
          console.log('Erreur lors de l\'ajout du Brand :', error);
          alert('Error adding brand: ' + error.message);
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
    this.brandService.uploadImage(formData).subscribe({
      next: (response: any) => {
        if (response.filePath) {
          this.imageFilePath = response.filePath;
          // Handle success
          alert('File uploaded successfully');
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
