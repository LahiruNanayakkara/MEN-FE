import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeCarouselComponent } from './components/home/home-carousel/home-carousel.component';
import { MaterialModule } from '../shared/material.module';
import { ValueCardComponent } from './components/home/value-card/value-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeCarouselComponent,
    ValueCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    HomeComponent,

  ]
})
export class PagesModule { }
