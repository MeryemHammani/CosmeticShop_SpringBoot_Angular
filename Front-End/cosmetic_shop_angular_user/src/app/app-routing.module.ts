import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Authentication/Components/login/login.component';
import { RegisterComponent } from './Authentication/Components/register/register.component';
import { authGardGuard } from './guards/auth-gard.guard';

import { UserHeaderComponent } from './user/components/user-header/user-header.component';
import { UserDasbordComponent } from './user/components/user-dasbord/user-dasbord.component';
import { HomeComponent } from './user/components/home/home.component';
import { CheckoutComponent } from './user/components/checkout/checkout.component';
import { AccountComponent } from './user/components/account/account.component';
import { CartComponent } from './user/components/cart/cart.component';
import { ProductDetailsComponent } from './user/components/product-details/product-details.component';
import { AboutComponent } from './user/components/about/about.component';
import { FaqComponent } from './user/components/faq/faq.component';
import { AccountDashbordComponent } from './user/components/account-dashbord/account-dashbord.component';
import { OrdersComponent } from './user/components/orders/orders.component';
import { AccountEditComponent } from './user/components/account-edit/account-edit.component';
import { AccountPasswordComponent } from './user/components/account-password/account-password.component';
import { WishlistProdsComponent } from './user/components/wishlist-prods/wishlist-prods.component';
import { CategoriesComponent } from './user/components/categories/categories.component';
import { SubCategoryComponent } from './user/components/sub-category/sub-category.component';
import { BrandsComponent } from './user/components/brands/brands.component';
import { FlushComponent } from './user/components/flush/flush.component';
import { BioIngredientComponent } from './user/components/bio-ingredient/bio-ingredient.component';
import { ListBioIngredientComponent } from './user/components/list-bio-ingredient/list-bio-ingredient.component';
import { FaqCategoriesComponent } from './user/components/faq-categories/faq-categories.component';


import { CenterHelpComponent } from './user/components/center-help/center-help.component';
import { SearchComponent } from './user/components/search/search.component';
import { ProductsComponent } from './user/components/products/products.component';
import { BlogListComponent } from './user/components/blog-list/blog-list.component';
import { BlogComponent } from './user/components/blog/blog.component';




const routes: Routes = [
  { path: '', redirectTo: 'user/home', pathMatch: 'full' },
  {
    path: 'user', component: UserHeaderComponent, children: [
      { path: 'userDashboard', component: UserDasbordComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'product-details', component: ProductDetailsComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'whishlist', component: WishlistProdsComponent, canActivate: [authGardGuard], data: { role: ['User'] } },
      { path: 'cart', component: CartComponent, canActivate: [authGardGuard], data: { role: ['User'] } },
      { path: 'support', component: CenterHelpComponent },
      { path: 'product-details/:code', component: ProductDetailsComponent },
      { path: 'bioIngredient/:id', component: BioIngredientComponent },
      { path: 'bioIngredients', component: ListBioIngredientComponent },
      { path: 'category/:id', component: CategoriesComponent },
      { path: 'subcategory/:id', component: SubCategoryComponent },
      { path: 'brand', component: BrandsComponent },
      { path: 'apropos', component: AboutComponent },
      { path: 'blog', component: BlogListComponent },
      { path: 'blog/:id', component: BlogComponent },
      { path: 'faqCategories', component: FaqCategoriesComponent },
      { path: 'faq/:name', component: FaqComponent },
      { path: 'flush', component: FlushComponent },
      { path: 'search/:query', component: SearchComponent },
      {
        path: 'mon-compte', component: AccountComponent, canActivate: [authGardGuard], data: { role: ['User'] },
        children: [
          { path: '', redirectTo: 'accountDashbord', pathMatch: 'full' }, // Redirect to child1 route by default
          { path: 'accountDashbord', component: AccountDashbordComponent },
          { path: 'account-edit', component: AccountEditComponent },
          { path: 'account-password', component: AccountPasswordComponent },
          { path: 'orders', component: OrdersComponent },
        ]
      },

    ]
  }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
