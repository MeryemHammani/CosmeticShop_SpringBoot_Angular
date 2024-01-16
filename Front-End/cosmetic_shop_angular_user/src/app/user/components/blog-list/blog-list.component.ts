import { Component } from '@angular/core';
import { Blog } from 'src/app/admin/models/blog';
import { BlogServiceService } from '../../services/blog-service.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {

  blogs!: Blog[];

  constructor(public blogService: BlogServiceService) {
    this.getBlogs();
  }

  public getBlogs() {
    this.blogService.getAllBlogs().subscribe({
      next: (response: any) => {
        this.blogs = response;
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  getImageUrl(imageFileName: string): string {
    return `http://localhost:8080/blogs/images/${imageFileName}`;
  }


}
