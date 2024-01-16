import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';


import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';
import { AppComponent } from './app.component';
import { SidebarComponent } from './admin/components/sidebar/sidebar.component';
import { HeaderComponent } from './admin/components/header/header.component';
import { AddBrandComponent } from './admin/components/Brand/add-brand/add-brand.component';
import { AllBrandComponent } from './admin/components/Brand/all-brand/all-brand.component';
import { EditBrandComponent } from './admin/components/Brand/edit-brand/edit-brand.component';
import { FooterComponent } from './admin/components/footer/footer.component';
import { AddCategorieComponent } from './admin/components/Categorie/add-categorie/add-categorie.component';
import { EditCategoryComponent } from './admin/components/Categorie/edit-categorie/edit-categorie.component';
import { AllCategorieComponent } from './admin/components/Categorie/all-categorie/all-categorie.component';
import { AllSousCategorieComponent } from './admin/components/Sous-categorie/all-sous-categorie/all-sous-categorie.component';
import { AddSubcategoryComponent } from './admin/components/Sous-categorie/add-sous-categorie/add-sous-categorie.component';
import { EditSousCategorieComponent } from './admin/components/Sous-categorie/edit-sous-categorie/edit-sous-categorie.component';
import { EditProductComponent } from './admin/components/Product/edit-product/edit-product.component';
import { AllProductComponent } from './admin/components/Product/all-product/all-product.component';
import { AddProductComponent } from './admin/components/Product/add-product/add-product.component';
import { AddSliderComponent } from './admin/components/Slider/add-slider/add-slider.component';
import { AllSliderComponent } from './admin/components/Slider/all-slider/all-slider.component';
import { EditSliderComponent } from './admin/components/Slider/edit-slider/edit-slider.component';
import { EditCouponComponent } from './admin/components/Coupon/edit-coupon/edit-coupon.component';
import { AddCouponComponent } from './admin/components/Coupon/add-coupon/add-coupon.component';
import { AllCouponComponent } from './admin/components/Coupon/all-coupon/all-coupon.component';
import { PendingOrdersComponent } from './admin/components/Order/pending-orders/pending-orders.component';
import { ProcessingOrdersComponent } from './admin/components/Order/processing-orders/processing-orders.component';
import { ConfirmedOrdersComponent } from './admin/components/Order/confirmed-orders/confirmed-orders.component';
import { DelivredOrdersComponent } from './admin/components/Order/delivred-orders/delivred-orders.component';
import { AllUsersComponent } from './admin/components/Users/all-users/all-users.component';
import { AllAffiliateComponent } from './admin/components/Users/all-affiliate/all-affiliate.component';
import { StockProductComponent } from './admin/components/Product/stock-product/stock-product.component';

import { LoginComponent } from './Authentication/Components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AdminHomeComponent } from './admin/components/admin-home/admin-home.component';
import { DatePipe } from '@angular/common';

import { AddContactComponent } from './admin/components/contact/add-contact/add-contact.component';
import { EditContactComponent } from './admin/components/contact/edit-contact/edit-contact.component';
import { AllContactComponent } from './admin/components/contact/all-contact/all-contact.component';
import { PublishReviewsComponent } from './admin/components/reviews/publish-reviews/publish-reviews.component';
import { PendingReviewsComponent } from './admin/components/reviews/pending-reviews/pending-reviews.component';
import { AddFaqComponent } from './admin/components/faq/add-faq/add-faq.component';
import { AllFaqComponent } from './admin/components/faq/all-faq/all-faq.component';
import { EditFaqComponent } from './admin/components/faq/edit-faq/edit-faq.component';
import { AddFlushComponent } from './admin/components/flush/add-flush/add-flush.component';
import { AllFlushComponent } from './admin/components/flush/all-flush/all-flush.component';
import { EditFlushComponent } from './admin/components/flush/edit-flush/edit-flush.component';
import { AddBioIngredientsComponent } from './admin/components/bioIngredients/add-bio-ingredients/add-bio-ingredients.component';
import { AllBioIngredientsComponent } from './admin/components/bioIngredients/all-bio-ingredients/all-bio-ingredients.component';
import { EditBioIngredientsComponent } from './admin/components/bioIngredients/edit-bio-ingredients/edit-bio-ingredients.component';
import { AddBlogsComponent } from './admin/components/blogs/add-blogs/add-blogs.component';
import { AllBlogsComponent } from './admin/components/blogs/all-blogs/all-blogs.component';
import { EditBlogsComponent } from './admin/components/blogs/edit-blogs/edit-blogs.component';
import { AllReclamationsComponent } from './admin/components/reclamaton/all-reclamations/all-reclamations.component';
import { ProfileComponent } from './admin/components/profile/profile/profile.component';
import { ChangePasswordComponent } from './admin/components/profile/change-password/change-password.component';
import { DashboardComponent } from './admin/components/report/dashboard/dashboard.component';
import { OrderDetailsComponent } from './admin/components/Order/order-details/order-details.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    AddBrandComponent,
    AllBrandComponent,
    EditBrandComponent,
    FooterComponent,
    AddCategorieComponent,
    EditCategoryComponent,
    AllCategorieComponent,
    AllSousCategorieComponent,
    AddSubcategoryComponent,
    EditSousCategorieComponent,
    EditProductComponent,
    AllProductComponent,

    AddProductComponent,
    AddSliderComponent,
    AllSliderComponent,
    EditSliderComponent,
    EditCouponComponent,
    AddCouponComponent,
    AllCouponComponent,
    PendingOrdersComponent,
    ProcessingOrdersComponent,
    ConfirmedOrdersComponent,
    DelivredOrdersComponent,
    AllUsersComponent,
    AllAffiliateComponent,
    StockProductComponent,
    LoginComponent,
    AdminHomeComponent,



    AddContactComponent,

    EditContactComponent,
    AllContactComponent,
    PublishReviewsComponent,
    PendingReviewsComponent,
    AddFaqComponent,
    AllFaqComponent,
    EditFaqComponent,
    AddFlushComponent,
    AllFlushComponent,
    EditFlushComponent,
    AddBioIngredientsComponent,
    AllBioIngredientsComponent,
    EditBioIngredientsComponent,
    AddBlogsComponent,
    AllBlogsComponent,
    EditBlogsComponent,
    AllReclamationsComponent,
    ProfileComponent,
    ChangePasswordComponent,
    DashboardComponent,
    OrderDetailsComponent,
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
