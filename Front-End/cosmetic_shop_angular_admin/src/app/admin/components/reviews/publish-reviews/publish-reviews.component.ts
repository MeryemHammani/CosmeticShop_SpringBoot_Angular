import { Component, OnInit } from '@angular/core';


import { ReviewService } from 'src/app/admin/services/review.service';

@Component({
  selector: 'app-publish-reviews',
  templateUrl: './publish-reviews.component.html',
  styleUrls: ['']
})
export class PublishReviewsComponent implements OnInit {
  review: any[] = [];

  constructor(
    private reviewService: ReviewService,

  ) { }

  ngOnInit(): void {
    this.reviewService.getReviews().subscribe({
      next: (reviews: any[]) => {
        this.review = reviews;
      },
      error: (error) => {
        console.error(error);

      }
    });
  }


  getImageUrl(imageFileName: string): string {
    return `http://localhost:8080/products/images/${imageFileName}`;
  }



}




