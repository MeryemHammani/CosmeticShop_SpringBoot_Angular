import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BioIngredient } from 'src/app/admin/models/bioIngredient';
import { Brand } from 'src/app/admin/models/brand';
import { Category } from 'src/app/admin/models/category';
import { Product } from 'src/app/admin/models/poduct';
import { SCategory } from 'src/app/admin/models/scategory';
import { BioIngredientsService } from 'src/app/admin/services/bio-ingredients.service';
import { BrandService } from 'src/app/admin/services/brand.service';
import { ProductService } from 'src/app/admin/services/product.service';
import { SousCategoryService } from 'src/app/admin/services/sous-category.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  subcategories: SCategory[] = [];
  brands: Brand[] = [];
  categories: Category[] = [];
  bios: BioIngredient[] = [];
  product: any = {};
  sliderId!: number;
  userFile: any;
  public imagePath: any;
  imgURL: any;
  public message!: string;
  sliderForm!: NgForm;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private scategoryService: SousCategoryService,
    private productService: ProductService,
    private brandService: BrandService,
    private bioService: BioIngredientsService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.sliderId = +params['id'];
      this.fetchSlider(this.sliderId);
    });


    this.loadSCategories();
    this.loadBrands();
    this.loadIngredients();


  }

  fetchSlider(id: number): void {
    this.productService.getProductById(id).subscribe({
      next: (response: any) => {
        console.log('product Response:', response);
        this.product = response;
      },
      error: (error: any) => {
        console.error('Error fetching product:', error);
      },
    });
  }


  onSubmit(): void {

    this.productService.updateProduct(this.product).subscribe({
      next: (response) => {
        alert('product updated successfully');
        this.router.navigate(['/all-product']);
      },
      error: (error) => {
        console.error('Error updating product:', error);
      },
    });

  }

  loadIngredients(): void {
    this.bioService.getAllIngredients().subscribe({
      next: (response: BioIngredient[]) => {
        this.bios = response;
      },
      error: (error: any) => {
        console.error('Error loading bioIngredient:', error);
      }
    });

  }

  loadSCategories(): void {
    this.scategoryService.getAllSCategories().subscribe({
      next: (response: SCategory[]) => {
        this.subcategories = response;
      },
      error: (error: any) => {
        console.error('Error loading subcategories:', error);
      }
    });
  }

  loadBrands(): void {
    this.brandService.getAllBrands().subscribe({
      next: (response: Brand[]) => {
        this.brands = response;
      },
      error: (error: any) => {
        console.error('Error loading brands:', error);
      }
    });
  }





  onSelectFile(event: Event): void {

    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];

    if (file) {
      this.userFile = file;

      const mimeType = file.type;
      if (!mimeType.match(/image\/*/)) {
        this.message = "Only images are supported.";
        return;
      }

      const reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      };
    }
  }
  /* productForm!: FormGroup;
   brands!: Brand[]; // Assuming you have a Brand model and a list of brands
 
   constructor(
     private formBuilder: FormBuilder,
     private productService: ProductService,
     private brandService: BrandService
   ) { }
 
   ngOnInit(): void {
     this.initializeForm();
     this.fetchBrands(); // Fetch the list of brands from the service or API
   }
 
   initializeForm(): void {
     this.productForm = this.formBuilder.group({
       id: [null],
       code: ['', Validators.required],
       name: ['', Validators.required],
       price: [0, Validators.required],
       quantity: [0, Validators.required],
       description: ['', Validators.required],
       ingredients: ['', Validators.required],
       created_at: [null],
       discount: [0],
       flush_discount: [0],
       how_to_use: [''],
       size: [''],
       pack: [false],
       brand: [null, Validators.required],
       images: [[]]
     });
   }
 
   fetchBrands(): void {
     // Call your brand service or API to fetch the list of brands
     this.brandService.getAllBrands().subscribe(
       (brands: Brand[]) => {
         this.brands = brands;
       },
       (error) => {
         console.error('Failed to fetch brands', error);
       }
     );
   }
 
   updateProduct(): void {
     // Handle the form submission and update the product
     const updatedProduct: Product = this.productForm.value;
     console.log(updatedProduct);
 
     // Perform API call or update product in data store
     this.productService.updateProduct(this.productForm.value.id, updatedProduct).subscribe(
       () => {
         // Handle successful update
         console.log('Product updated successfully');
         // Optionally, perform any additional actions or navigate to a different page
       },
       (error) => {
         // Handle error
         console.error('Failed to update product', error);
         // Optionally, display an error message to the user
       }
     );
   }*/
}