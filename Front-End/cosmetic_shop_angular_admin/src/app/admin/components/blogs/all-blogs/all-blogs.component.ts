import { Component } from '@angular/core';
import { BlogService } from 'src/app/admin/services/blog.service';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css']
})
export class AllBlogsComponent {
  blogs: any;

  constructor(private blogService: BlogService) { }


  ngOnInit(): void {
    this.loadAllCategories();
  }

  loadAllCategories() {
    this.blogService.getAllBlogs().subscribe({
      next: (response: any) => {
        this.blogs = response;
      },
      error: (error: any) => {
        console.error('Error loading blogs:', error);
      }
    });
  }

  deleteBlog(categoryId: number) {
    if (confirm('Are you sure you want to delete this Blog?')) {
      this.blogService.deleteBlog(categoryId).subscribe({
        next: () => {
          alert("Blog delted succesfuly");
          this.loadAllCategories();
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

  getImageUrl(imageFileName: string): string {
    return `http://localhost:8080/blogs/images/${imageFileName}`;
  }


}
