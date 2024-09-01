import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material.module';
import { register as registerSwiperEliments } from 'swiper/element/bundle';
import { PopupModule } from './popups/popup.module';
import { ProductFilterByCategoryPipe } from './pipes/product-filter-by-category.pipe';
import { ProductFilterByPricePipe } from './pipes/product-filter-by-price.pipe';
registerSwiperEliments();

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PagesModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    PopupModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
