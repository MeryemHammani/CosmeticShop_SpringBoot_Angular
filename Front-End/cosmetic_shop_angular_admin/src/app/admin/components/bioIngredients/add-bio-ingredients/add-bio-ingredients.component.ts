import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BioIngredientsService } from 'src/app/admin/services/bio-ingredients.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { BioIngredientService } from 'src/app/user/services/bio-ingredient.service';

@Component({
  selector: 'app-add-bio-ingredients',
  templateUrl: './add-bio-ingredients.component.html',
  styleUrls: ['']
})
export class AddBioIngredientsComponent {
  form: FormGroup;
  imgURL: any;
  imageFilePath!: any;

  constructor(
    private formBuilder: FormBuilder,
    private bioService: BioIngredientsService
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      image: [null],
      description: [''],
      benefit: ['']
    });
  }

  onSubmit(): void {
    if (this.imageFilePath) {
      this.form.get('image')?.setValue(this.imageFilePath); // Set the image path in the form
    }

    this.bioService.addIngredients(this.form.value)
      .subscribe({
        next: (response: any) => {
          alert('ingrédient ajouté avec succès:');
        },
        error: (error) => {
          console.log('Erreur lors de l\'ajout de ingredient :', error);
          alert('Error adding blog: ' + error.message);
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
    this.bioService.uploadImage(formData).subscribe({
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
