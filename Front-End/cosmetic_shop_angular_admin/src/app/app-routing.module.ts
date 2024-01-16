import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AddBrandComponent } from './admin/components/Brand/add-brand/add-brand.component';
import { AllBrandComponent } from './admin/components/Brand/all-brand/all-brand.component';
import { EditBrandComponent } from './admin/components/Brand/edit-brand/edit-brand.component';
import { AddProductComponent } from './admin/components/Product/add-product/add-product.component';
import { AllProductComponent } from './admin/components/Product/all-product/all-product.component';
import { EditProductComponent } from './admin/components/Product/edit-product/edit-product.component';
import { AddCategorieComponent } from './admin/components/Categorie/add-categorie/add-categorie.component';
import { AllCategorieComponent } from './admin/components/Categorie/all-categorie/all-categorie.component';
import { EditCategoryComponent } from './admin/components/Categorie/edit-categorie/edit-categorie.component';
import { AddSubcategoryComponent } from './admin/components/Sous-categorie/add-sous-categorie/add-sous-categorie.component';
import { AllSousCategorieComponent } from './admin/components/Sous-categorie/all-sous-categorie/all-sous-categorie.component';
import { EditSousCategorieComponent } from './admin/components/Sous-categorie/edit-sous-categorie/edit-sous-categorie.component';
import { PendingOrdersComponent } from './admin/components/Order/pending-orders/pending-orders.component';
import { ProcessingOrdersComponent } from './admin/components/Order/processing-orders/processing-orders.component';
import { ConfirmedOrdersComponent } from './admin/components/Order/confirmed-orders/confirmed-orders.component';
import { DelivredOrdersComponent } from './admin/components/Order/delivred-orders/delivred-orders.component';

import { AddCouponComponent } from './admin/components/Coupon/add-coupon/add-coupon.component';
import { AllCouponComponent } from './admin/components/Coupon/all-coupon/all-coupon.component';
import { EditCouponComponent } from './admin/components/Coupon/edit-coupon/edit-coupon.component';
import { AllAffiliateComponent } from './admin/components/Users/all-affiliate/all-affiliate.component';
import { AllUsersComponent } from './admin/components/Users/all-users/all-users.component';
import { AddSliderComponent } from './admin/components/Slider/add-slider/add-slider.component';
import { AllSliderComponent } from './admin/components/Slider/all-slider/all-slider.component';
import { EditSliderComponent } from './admin/components/Slider/edit-slider/edit-slider.component';
import { StockProductComponent } from './admin/components/Product/stock-product/stock-product.component';
import { LoginComponent } from './Authentication/Components/login/login.component';
import { authGardGuard } from './guards/auth-gard.guard';

import { SidebarComponent } from './admin/components/sidebar/sidebar.component';
import { AdminHomeComponent } from './admin/components/admin-home/admin-home.component';

import { HeaderComponent } from './admin/components/header/header.component';

import { AddBioIngredientsComponent } from './admin/components/bioIngredients/add-bio-ingredients/add-bio-ingredients.component';
import { AllBioIngredientsComponent } from './admin/components/bioIngredients/all-bio-ingredients/all-bio-ingredients.component';
import { EditBioIngredientsComponent } from './admin/components/bioIngredients/edit-bio-ingredients/edit-bio-ingredients.component';
import { AddFlushComponent } from './admin/components/flush/add-flush/add-flush.component';
import { AllFlushComponent } from './admin/components/flush/all-flush/all-flush.component';
import { EditFlushComponent } from './admin/components/flush/edit-flush/edit-flush.component';

import { AddContactComponent } from './admin/components/contact/add-contact/add-contact.component';
import { AllContactComponent } from './admin/components/contact/all-contact/all-contact.component';
import { EditContactComponent } from './admin/components/contact/edit-contact/edit-contact.component';
import { PendingReviewsComponent } from './admin/components/reviews/pending-reviews/pending-reviews.component';
import { PublishReviewsComponent } from './admin/components/reviews/publish-reviews/publish-reviews.component';
import { AllReclamationsComponent } from './admin/components/reclamaton/all-reclamations/all-reclamations.component';
import { ProfileComponent } from './admin/components/profile/profile/profile.component';
import { DashboardComponent } from './admin/components/report/dashboard/dashboard.component';
import { OrderDetailsComponent } from './admin/components/Order/order-details/order-details.component';
import { AddBlogsComponent } from './admin/components/blogs/add-blogs/add-blogs.component';
import { AllBlogsComponent } from './admin/components/blogs/all-blogs/all-blogs.component';
import { EditBlogsComponent } from './admin/components/blogs/edit-blogs/edit-blogs.component';




const routes: Routes = [

  {
    path: 'admin',
    component: AdminHomeComponent
  },

  { path: 'detailss/:orderId', component: OrderDetailsComponent },
  { path: 'add-blog', component: AddBlogsComponent },
  { path: 'all-blog', component: AllBlogsComponent },
  { path: 'edit-blogs/:id', component: EditBlogsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent },

  { path: 'reclamations-all', component: AllReclamationsComponent },
  { path: 'pending-reviews', component: PendingReviewsComponent },
  { path: 'publish-reviews', component: PublishReviewsComponent },

  { path: 'add-contact', component: AddContactComponent },
  { path: 'all-contact', component: AllContactComponent },
  { path: 'edit-contact', component: EditContactComponent },

  { path: 'add-flush', component: AddFlushComponent },
  { path: 'all-flush', component: AllFlushComponent },
  { path: 'edit-flush', component: EditFlushComponent },


  { path: 'add-bio-ingredients', component: AddBioIngredientsComponent },
  { path: 'all-bio-ingredients', component: AllBioIngredientsComponent },
  { path: 'edit-bio-ingredients/:id', component: EditBioIngredientsComponent },

  { path: 'add-brand', component: AddBrandComponent },
  { path: 'all-brand', component: AllBrandComponent },
  { path: 'edit-brand/:id', component: EditBrandComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'all-product', component: AllProductComponent },
  { path: 'edit-product/:id', component: EditProductComponent },
  { path: 'add-categorie', component: AddCategorieComponent },
  { path: 'all-categorie', component: AllCategorieComponent },
  { path: 'edit-categorie/:id', component: EditCategoryComponent },
  { path: 'add-sous-categorie', component: AddSubcategoryComponent },
  { path: 'all-sous-categorie', component: AllSousCategorieComponent },
  { path: 'edit-sous-categorie/:id', component: EditSousCategorieComponent },
  { path: 'pending-orders', component: PendingOrdersComponent },
  { path: 'processing-orders', component: ProcessingOrdersComponent },
  { path: 'confirmed-orders', component: ConfirmedOrdersComponent },
  { path: 'delivred-orders', component: DelivredOrdersComponent },

  { path: 'add-coupon', component: AddCouponComponent },
  { path: 'all-coupon', component: AllCouponComponent },
  { path: 'edit-coupon', component: EditCouponComponent },
  { path: 'all-affiliate', component: AllAffiliateComponent },
  { path: 'all-users', component: AllUsersComponent },
  { path: 'add-slider', component: AddSliderComponent },
  { path: 'all-slider', component: AllSliderComponent },
  { path: 'edit-slider/:id', component: EditSliderComponent },
  { path: 'stock-product', component: StockProductComponent },

  { path: 'header', component: HeaderComponent },

  { path: 'sidebar', component: SidebarComponent },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },




];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
