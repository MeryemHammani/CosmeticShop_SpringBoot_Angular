import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';


import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';
import { AppComponent } from './app.component';

import { LoginComponent } from './Authentication/Components/login/login.component';
import { RegisterComponent } from './Authentication/Components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UserHeaderComponent } from './user/components/user-header/user-header.component';
import { HomeComponent } from './user/components/home/home.component';
import { BannerComponent } from './user/components/banner/banner.component';
import { ListProductsComponent } from './user/components/list-products/list-products.component';
import { UserDasbordComponent } from './user/components/user-dasbord/user-dasbord.component';
import { CategoriesComponent } from './user/components/categories/categories.component';
import { BrandsComponent } from './user/components/brands/brands.component';
import { FlushComponent } from './user/components/flush/flush.component';
import { AccountComponent } from './user/components/account/account.component';
import { CheckoutComponent } from './user/components/checkout/checkout.component';
import { CartComponent } from './user/components/cart/cart.component';
import { ProductDetailsComponent } from './user/components/product-details/product-details.component';
import { AboutComponent } from './user/components/about/about.component';
import { BlogComponent } from './user/components/blog/blog.component';
import { FaqComponent } from './user/components/faq/faq.component';
import { AccountEditComponent } from './user/components/account-edit/account-edit.component';
import { AccountPasswordComponent } from './user/components/account-password/account-password.component';
import { OrdersComponent } from './user/components/orders/orders.component';
import { AccountDashbordComponent } from './user/components/account-dashbord/account-dashbord.component';
import { ProdreviewsComponent } from './user/components/prodreviews/prodreviews.component';
import { AddReviewComponent } from './user/components/add-review/add-review.component';
import { DatePipe } from '@angular/common';
import { WishlistProdsComponent } from './user/components/wishlist-prods/wishlist-prods.component';
import { CategoryListComponent } from './user/components/category-list/category-list.component';
import { SubCategoryComponent } from './user/components/sub-category/sub-category.component';
import { BrandListComponent } from './user/components/brand-list/brand-list.component';
import { ProductsComponent } from './user/components/products/products.component';
import { BestOfferComponent } from './user/components/best-offer/best-offer.component';
import { NewProductsComponent } from './user/components/new-products/new-products.component';
import { BioIngredientComponent } from './user/components/bio-ingredient/bio-ingredient.component';
import { ListBioIngredientComponent } from './user/components/list-bio-ingredient/list-bio-ingredient.component';
import { FaqCategoriesComponent } from './user/components/faq-categories/faq-categories.component';
import { AddReclamationComponent } from './user/components/add-reclamation/add-reclamation.component';
import { CenterHelpComponent } from './user/components/center-help/center-help.component';
import { SearchComponent } from './user/components/search/search.component';
import { UserFooterComponent } from './user/components/user-footer/user-footer.component';
import { ContactInfoComponent } from './user/components/contact-info/contact-info.component';
import { BlogListComponent } from './user/components/blog-list/blog-list.component';



@NgModule({
  declarations: [
    AppComponent,


    LoginComponent,
    RegisterComponent,

    UserHeaderComponent,
    HomeComponent,
    BannerComponent,
    ListProductsComponent,
    UserDasbordComponent,
    CategoriesComponent,
    BrandsComponent,
    FlushComponent,
    AccountComponent,
    CheckoutComponent,
    CartComponent,
    ProductDetailsComponent,
    AboutComponent,
    BlogComponent,
    FaqComponent,
    AccountEditComponent,
    AccountPasswordComponent,
    OrdersComponent,
    AccountDashbordComponent,
    ProdreviewsComponent,
    AddReviewComponent,
    WishlistProdsComponent,
    CategoryListComponent,
    SubCategoryComponent,
    BrandListComponent,
    ProductsComponent,
    BestOfferComponent,
    NewProductsComponent,
    BioIngredientComponent,
    ListBioIngredientComponent,
    FaqCategoriesComponent,
    AddReclamationComponent,
    CenterHelpComponent,
    SearchComponent,
    UserFooterComponent,
    ContactInfoComponent,
    BlogListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    FormsModule,
    RatingModule.forRoot(),


  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
