import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeCarouselComponent } from './components/home/home-carousel/home-carousel.component';
import { MaterialModule } from '../shared/material.module';
import { ValueCardComponent } from './components/home/value-card/value-card.component';
import { ProductsComponent } from './components/products/products.component';
import { RouterModule } from '@angular/router';
import { SearchResultPageComponent } from './components/search-result-page/search-result-page.component';
import { SingleCategoryPageComponent } from './components/single-category-page/single-category-page.component';
import { SingleProductPageComponent } from './components/single-product-page/single-product-page.component';
import { FormsModule } from '@angular/forms';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProductFilterByCategoryPipe } from '../pipes/product-filter-by-category.pipe';
import { ProductFilterByPricePipe } from '../pipes/product-filter-by-price.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    HomeCarouselComponent,
    ValueCardComponent,
    ProductsComponent,
    SearchResultPageComponent,
    SingleCategoryPageComponent,
    SingleProductPageComponent,
    NotFoundPageComponent,
    CartComponent,
    WishlistComponent,
    CheckoutComponent,
    PaymentComponent,
    ProductFilterByCategoryPipe,
    ProductFilterByPricePipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule,
    FormsModule,
  ],
  exports: [HomeComponent, ProductFilterByCategoryPipe, ProductFilterByPricePipe],
})
export class PagesModule {}
