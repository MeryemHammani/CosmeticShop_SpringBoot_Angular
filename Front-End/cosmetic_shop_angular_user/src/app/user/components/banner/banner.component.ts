import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/Authentication/services/auth-service.service';
import { Banner } from 'src/app/admin/models/banners';
import { SharedServiceService } from '../../services/shared-service.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  sliders!: Banner[];

  constructor(private service: SharedServiceService) {
    this.display();
  }


  display() {
    this.service.get('/banners', false).subscribe({
      next: (response: any) => {
        this.sliders = response;
      },
      error: (err) => {
        alert(" false  sliders");
      }
    });

  }

  getImageUrl(imageFileName: string): string {
    return `http://localhost:8080/products/images/${imageFileName}`;
  }
}
