import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SCategory } from 'src/app/admin/models/scategory';
import { ProductService } from 'src/app/admin/services/product.service';
import { SousCategoryService } from 'src/app/admin/services/sous-category.service';
import { Brand } from 'src/app/admin/models/brand';
import { Category } from 'src/app/admin/models/category';
import { BrandService } from 'src/app/admin/services/brand.service';
import { CategoryService } from 'src/app/admin/services/category.service';
import { ImageService } from 'src/app/admin/services/image.service';
import { BioIngredientsService } from 'src/app/admin/services/bio-ingredients.service';
import { BioIngredient } from 'src/app/admin/models/bioIngredient';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['']
})
export class AddProductComponent {
  selectedsCategoryId!: string;
  selectedBioId!: string;
  selectedBrandId!: string;
  imageFilePath!: any;

  subcategories: SCategory[] = [];
  brands: Brand[] = [];
  bios: BioIngredient[] = [];
  categories: Category[] = [];
  public form!: FormGroup;
  public imageFile!: File; // Variable to store the uploaded image file

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private scategoryService: SousCategoryService,
    private productService: ProductService,
    private categoryService: CategoryService,
    private brandService: BrandService,
    private bioService: BioIngredientsService,
    private imageService: ImageService // Add the ImageService dependency
  ) {
    this.form = this.fb.group({
      scategoryId: ['', Validators.required],
      brandId: ['', Validators.required],
      bioId: ['', Validators.required],
      code: [null, Validators.required],
      name: [null, Validators.required],
      discount: [null, Validators.required],
      pack: [null, Validators.required],
      offer: [null, Validators.required],
      price: [null, Validators.required],
      quantity: [null, Validators.required],
      description: [null, Validators.required],
      how_to_use: [null, Validators.required],
      ingredients: [null, Validators.required],
      size: [null, Validators.required],
      multi_img: [null, Validators.required],
      image: [null, Validators.required],
    });
  }


  ngOnInit(): void {
    this.loadSCategories();
    this.loadBrands();
    this.loadIngredients();
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

  onFileChange(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.imageFile = files[0];
    }
  }
  /* onSubmit(): void {
     if (this.imageFilePath) {
       this.form.get('image')?.setValue(this.imageFilePath); // Set the image path in the form
     }
 
     this.productService.addProduct(this.form.value)
       .subscribe({
         next: (response: any) => {
           alert('produit ajouté avec succès:');
         },
         error: (error) => {
           console.log('Erreur lors de l\'ajout du produit :', error);
           alert('Error adding blog: ' + error.message);
         }
       });
   }
 
   onFileSelected(event: any): void {
     if (event.target.files && event.target.files.length > 0) {
       const file = event.target.files[0];
       this.uploadFile(file);
     }
   }
 
   uploadFile(file: File): void {
     const formData = new FormData();
     formData.append('file', file);
 
     // Send the formData to your backend
     this.productService.uploadImage(formData).subscribe({
       next: (response: any) => {
         if (response.filePath) {
           this.imageFilePath = response.filePath;
           // Handle success
           alert('File uploaded successfully ');
         } else {
           alert('Received an unexpected response from the server.');
         }
       },
       error: (error) => {
         console.error('Error uploading file:', error);
         alert('Error uploading file: ' + error.message);
       }
     });
   }
   */















  onSubmit() {

    if (this.imageFilePath) {
      this.form.get('image')?.setValue(this.imageFilePath); // Set the image path in the form
    }

    const subcategoryData = this.form.value;

    // Create the payload with the selected category ID
    const payload = {

      code: subcategoryData.code,
      image: this.imageFilePath,


      discount: parseInt(subcategoryData.discount),
      pack: subcategoryData.pack,
      flush_discount: 0,
      status: "Active",
      rating: null,
      name: subcategoryData.name,

      offer: subcategoryData.offer,
      price: parseFloat(subcategoryData.price),
      quantity: parseInt(subcategoryData.quantity),
      description: subcategoryData.description,
      ingredients: subcategoryData.ingredients,
      size: subcategoryData.size,
      how_to_use: subcategoryData.how_to_use,
      created_at: new Date().toISOString(),
      subcategory: {
        id: this.selectedsCategoryId
      },
      brand: {
        id: this.selectedBrandId
      },
      bioIngredients: [{ id: this.selectedBioId }]


    };


    this.productService.addProduct(payload).subscribe({
      next: (response) => {
        alert(' product added successfully');
        // You might want to reset the form or redirect to another page here
      },
      error: (error) => {
        alert('Error adding product:');

        console.error('Error adding product:', error);
        alert('Error adding product: ' + error.message);
      }
    });



  }

  onFileSelected(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadFile(file);
    }
  }

  uploadFile(file: File): void {
    const formData = new FormData();
    formData.append('file', file);

    // Send the formData to your backend
    this.productService.uploadImage(formData).subscribe({
      next: (response: any) => {
        if (response.filePath) {
          this.imageFilePath = response.filePath;
          // Handle success
          alert('File uploaded successfully ');
        } else {
          alert('Received an unexpected response from the server.');
        }
      },
      error: (error) => {
        console.error('Error uploading file:', error);
        alert('Error uploading file: ' + error.message);
      }
    });
  }
}

