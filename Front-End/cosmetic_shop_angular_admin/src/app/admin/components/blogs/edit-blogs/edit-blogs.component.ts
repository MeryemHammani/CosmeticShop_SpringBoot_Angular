import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/admin/services/blog.service';
import { CategoryService } from 'src/app/admin/services/category.service';

@Component({
  selector: 'app-edit-blogs',
  templateUrl: './edit-blogs.component.html',
  styleUrls: ['./edit-blogs.component.css']
})
export class EditBlogsComponent {
  category: any = {};
  sliderId!: number;
  userFile: any;
  public imagePath: any;
  imgURL: any;
  public message!: string;
  sliderForm!: NgForm;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sliderService: BlogService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.sliderId = +params['id']; // Get the slider ID from the route parameter
      this.fetchSlider(this.sliderId); // Fetch slider details by ID
    });
  }

  fetchSlider(id: number): void {
    this.sliderService.getBlogById(id).subscribe({
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
    this.sliderService.updateBlog(this.category).subscribe({
      next: (response) => {
        alert('Blog updated successfully');
        // Redirect to the slider list page or perform other actions
        this.router.navigate(['/all-blogs']);
      },
      error: (error) => {
        console.error('Error updating Blog', error);
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
