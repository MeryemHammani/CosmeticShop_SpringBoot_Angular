import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/admin/models/poduct';
import { ProductService } from 'src/app/admin/services/product.service';

@Component({
  selector: 'app-add-flush',
  templateUrl: './add-flush.component.html',
  styleUrls: ['./add-flush.component.css']
})
export class AddFlushComponent {

  yourForm!: FormGroup;
  products: Product[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.yourForm = this.formBuilder.group({
      description: [''],
      start_date: [''],
      end_date: [''],
      products: [[]]
    });

    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe({
      next: (products: Product[]) => {
        this.products = products;
        console.log(this.products);
      },
      error: (error) => {
        console.error('Failed to fetch products:', error);
      }
    });


  }







}
