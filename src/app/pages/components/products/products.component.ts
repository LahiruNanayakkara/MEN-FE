import { Component, HostListener, OnInit } from '@angular/core';
import { fade, zoomOut } from '../../../animations';
import { ProductService } from '../../../services/product.service';
import { categoryWithCount, Product } from '../../../models/product';

export interface Category {
  name:string;
  bgImage:string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  animations: [zoomOut, fade]
})
export class ProductsComponent implements OnInit {
  categories?:Category[];

  productByCat:Product[] = [];
  constructor(private productService:ProductService) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const scale = 1 + scrollPosition / 1000; // Adjust the divisor to control the zoom speed
    const image = document.querySelector('.men-banner-img') as HTMLElement;
    if (image) {
      image.style.transform = `scale(${scale})`;
    }
  }

  ngOnInit(): void {
    this.categories = this.productService.categories;
    this.productByCat = this.productService.getProductByCategory("Shrits & T-shirts");
    console.log(this.productByCat);
  }

}
