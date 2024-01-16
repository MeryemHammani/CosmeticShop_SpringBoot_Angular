import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/admin/services/category.service';
import { ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  public form!: FormGroup;
  userFile: any;
  public imagePath: any;
  imgURL: any;
  public message!: string;
  imageFilePath!: any;



  constructor(private fb: FormBuilder, private router: Router, private brandService: CategoryService) {

    this.form = this.fb.group({
      name: [null, Validators.required],
      image: [null, Validators.required],
      description: [null, Validators.required],

    });
  }


  onSubmit(): void {
    if (this.imageFilePath) {
      this.form.get('image')?.setValue(this.imageFilePath); // Set the image path in the form
    }

    this.brandService.addCategory(this.form.value)
      .subscribe({
        next: (response: any) => {
          alert('Blog ajouté avec succès:');
        },
        error: (error) => {
          console.log('Erreur lors de l\'ajout du Blog :', error);
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
    this.brandService.uploadImage(formData).subscribe({
      next: (response: any) => {
        if (response.filePath) {
          this.imageFilePath = response.filePath;
          // Handle success
          alert('File uploaded successfully ');
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
