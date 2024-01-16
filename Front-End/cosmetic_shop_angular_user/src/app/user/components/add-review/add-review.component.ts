import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/Authentication/services/auth-service.service';
import { ProductServiceService } from '../../services/product-service.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  @Input() id!: number;
  public form!: FormGroup;


  constructor(private fb: FormBuilder, private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      review: [null, Validators.required],
      product: [{ "id": this.id }],
      rating: [4, Validators.required],
      valid: [false],
      user: [this.productService.service.authService.getAutUser()],
    });
  }


  AddReview() {
    this.productService.navigateToLogin();
    let data = this.form.value;
    this.productService.AddReview(data).subscribe({
      next: (response: any) => {
        alert(" true add");
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

}
