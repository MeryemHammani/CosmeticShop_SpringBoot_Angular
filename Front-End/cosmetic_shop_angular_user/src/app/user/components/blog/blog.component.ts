import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/admin/models/blog';
import { BlogServiceService } from '../../services/blog-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  blog!: Blog;
  id!: number;


  constructor(private route: ActivatedRoute, public blogService: BlogServiceService) {

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getBlog(this.id);

  }

  public getBlog(id: number) {
    this.blogService.getBlog(id).subscribe({
      next: (response: any) => {
        this.blog = response
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getImageUrl(imageFileName: string): string {
    return `http://localhost:8080/blogs/images/${imageFileName}`;
  }


}
