import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderBadgeComponent } from './components/header-badge/header-badge.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { CategorySliderComponent } from './components/category-slider/category-slider.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SlideControlComponent } from './components/slide-control/slide-control.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategorySectionComponent } from './components/category-section/category-section.component';
import { RouterModule } from '@angular/router';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchbarComponent,
    HeaderBadgeComponent,
    ViewProfileComponent,
    CategorySliderComponent,
    CategoryCardComponent,
    ProductCardComponent,
    ProductListComponent,
    SlideControlComponent,
    FooterComponent,
    CategorySectionComponent,
    CartItemComponent,
    CartSummaryComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule, RouterModule],
  exports: [HeaderComponent, CategorySliderComponent, ProductCardComponent, ProductListComponent, FooterComponent, CategorySectionComponent, CartItemComponent, CartSummaryComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
