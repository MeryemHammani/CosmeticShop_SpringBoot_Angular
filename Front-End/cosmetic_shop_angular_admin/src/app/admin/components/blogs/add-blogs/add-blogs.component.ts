import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/admin/services/blog.service';
import { CategoryService } from 'src/app/admin/services/category.service';

@Component({
  selector: 'app-add-blogs',
  templateUrl: './add-blogs.component.html',
  styleUrls: ['./add-blogs.component.css']
})
export class AddBlogsComponent {
  public form!: FormGroup;
  imageFilePath!: any;
  userFile: any;
  public imagePath: any;
  imgURL: any;
  public message!: string;

  constructor(private fb: FormBuilder, private router: Router, private blogService: BlogService) {

    this.form = this.fb.group({
      title: [null, Validators.required],
      image: [null, Validators.required],
      text: [null, Validators.required],

    });
  }



  onSubmit(): void {
    if (this.imageFilePath) {
      this.form.get('image')?.setValue(this.imageFilePath); // Set the image path in the form
    }

    this.blogService.addBlog(this.form.value)
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
    this.blogService.uploadImage(formData).subscribe({
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
