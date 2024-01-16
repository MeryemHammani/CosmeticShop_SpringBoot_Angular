import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/admin/models/brand';
import { BrandService } from 'src/app/admin/services/brand.service';

@Component({
  selector: 'app-all-brand',
  templateUrl: './all-brand.component.html',
  styleUrls: ['./all-brand.component.css']
})


export class AllBrandComponent implements OnInit {
  brands: Brand[] = [];

  constructor(private brandService: BrandService) { }


  ngOnInit(): void {
    this.loadAllBrands();
  }

  loadAllBrands() {
    this.brandService.getAllBrands().subscribe({
      next: (response: Brand[]) => {
        this.brands = response;
      },
      error: (error: any) => {
        console.error('Error loading brands:', error);
      }
    });
  }

  deleteBrand(categoryId: number) {
    if (confirm('Vous etes sure de supprimer cette Brand?')) {
      this.brandService.deleteBrand(categoryId).subscribe({
        next: () => {
          alert("brand delted succesfully");
          this.loadAllBrands();
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

  getImageUrl(imageFileName: string): string {
    return `http://localhost:8080/brands/images/${imageFileName}`;
  }
}
