import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { ReviewService } from 'src/app/admin/services/review.service';

@Component({
  selector: 'app-pending-reviews',
  templateUrl: './pending-reviews.component.html',
  styleUrls: ['./pending-reviews.component.css']
})
export class PendingReviewsComponent implements OnInit {
  review: any[] = [];
  pendingReviews: any[] = [];

  constructor(
    private reviewService: ReviewService,

  ) { }

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews() {
    this.reviewService.getReviews().subscribe({
      next: (reviews: any[]) => {
        this.review = reviews;
      },
      error: (error) => {
        console.error(error);

      }
    });

  }

  validateReview(item: any): void {
    this.reviewService.updateReview({ ...item, valid: 1 }).subscribe({
      next: (event: any) => {
        if (event.status === 200) {
          alert(" validated succesfuly");
          this.getReviews();
        } else {

        }
      },
      error: (error) => {
        console.error(error);
      }
    });

  }


  removeReview(item: any): void {
    const index = this.review.indexOf(item);
    if (index !== -1) {
      this.review.splice(index, 1);
    }
  }

  deleteReview(reviewId: number) {
    if (confirm('Are you sure you want to delete this review?')) {
      this.reviewService.deleteReview(reviewId).subscribe({
        next: () => {
          alert("review delted succesfuly");
          this.getReviews();
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

  getImageUrl(imageFileName: string): string {
    return `http://localhost:8080/products/images/${imageFileName}`;
  }


}
