import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../../services/product-service.service';
import { Product } from 'src/app/admin/models/poduct';
import { Brand } from 'src/app/admin/models/brand';
import { BrandServiceService } from '../../services/brand-service.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {
  products!: Product[];
  brand!: Brand;
  size: number = 5;
  total: number = 0;
  step: number = 5;




  constructor(private route: ActivatedRoute, public brandService: BrandServiceService, public prodService: ProductServiceService) {
    this.brand = this.brandService.service.getData('brand');
    this.getProds();
  }

  getProds() {

    this.brandService.getProductsBrand(this.brand.id, this.size).subscribe({
      next: (response: any) => {
        this.products = response.products;
        this.total = response.total;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  // pagination methodes  
  public previousPage() {
    if (this.size > this.step) {
      this.size -= this.step;
      this.getProds();
    }
  }

  public nextPage() {
    if ((this.size + this.step) >= this.total)
      this.size = this.total;
    else {
      this.size += this.step;
    }
    this.getProds();
  }



}
