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
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule],
  exports: [HeaderComponent, CategorySliderComponent, ProductListComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
