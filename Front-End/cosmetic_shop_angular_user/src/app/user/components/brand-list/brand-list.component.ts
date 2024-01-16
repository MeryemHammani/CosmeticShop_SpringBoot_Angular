import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/admin/models/brand';
import { BrandServiceService } from '../../services/brand-service.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent {
  brands!: Brand[];


  constructor(private router: Router, public brandService: BrandServiceService) {
    this.display();
  }


  public display() {
    this.brandService.getBrands().subscribe({
      next: (response: any) => {
        this.brands = response;
      },
      error: (err) => {
        console.log(err)
      }
    });

  }


  navigateToBrand(brand: any) {
    this.brandService.service.setData('brand', brand);
    this.router.navigate(['/user/brand']);
  }
  getImageUrl(imageFileName: string): string {
    return `http://localhost:8080/products/images/${imageFileName}`;
  }

}
