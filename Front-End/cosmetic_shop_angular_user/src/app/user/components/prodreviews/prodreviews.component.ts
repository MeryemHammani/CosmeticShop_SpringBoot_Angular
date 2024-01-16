import { Component, Input, OnInit } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { Review } from 'src/app/admin/models/review';


@Component({
  selector: 'app-prodreviews',
  templateUrl: './prodreviews.component.html',
  styleUrls: ['./prodreviews.component.css']
})
export class ProdreviewsComponent implements OnInit {

  @Input() id!: number;
  reviews!: Review[];

  constructor(public prodService: ProductServiceService) { }

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews() {
    this.prodService.getValidProductReviews(this.id).subscribe({
      next: (response: any) => {
        this.reviews = response;
      },
      error: (err) => {
        console.log();
      }
    });
  }


}
