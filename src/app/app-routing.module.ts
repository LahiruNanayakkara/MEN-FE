import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/components/home/home.component';
import { ProductsComponent } from './pages/components/products/products.component';
import { SearchResultPageComponent } from './pages/components/search-result-page/search-result-page.component';
import { SingleCategoryPageComponent } from './pages/components/single-category-page/single-category-page.component';
import { SingleProductPageComponent } from './pages/components/single-product-page/single-product-page.component';
import { NotFoundPageComponent } from './pages/components/not-found-page/not-found-page.component';
import { CartComponent } from './pages/components/cart/cart.component';
import { WishlistComponent } from './pages/components/wishlist/wishlist.component';
import { CheckoutComponent } from './pages/components/checkout/checkout.component';
import { PaymentComponent } from './pages/components/payment/payment.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ProductsComponent },
  { path: 'shop', children: [
    { path: ':category', component: SingleCategoryPageComponent },
    { path: ':category', children: [
      { path: ':id', component: SingleProductPageComponent }
    ] },

  ] },
  { path:'cart', component:CartComponent },
  { path:'wishlist', component:WishlistComponent },
  { path:'checkout', component:CheckoutComponent },
  { path:'payment', component:PaymentComponent },
  { path: 'search', component: SearchResultPageComponent },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
