import { Component, HostListener, OnInit } from '@angular/core';
import { fade, moveIn, zoomOut } from '../../../animations';
import { ProductService } from '../../../services/product.service';
import {
  categoryWithCount,
  priceRange,
  Product,
} from '../../../models/product';
import { ProductFilterByCategoryPipe } from '../../../pipes/product-filter-by-category.pipe';

export interface Category {
  name: string;
  bgImage: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  animations: [zoomOut, fade, moveIn],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  categorySelected: string = '';
  priceRangeSelected: priceRange = {
    min: 20,
    max: 500,
  };

  constructor(private productService: ProductService) {}

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
    this.products = this.productService.getAllProducts();
  }

  onAfterCategorySelected($event: string) {
    this.categorySelected = $event;
  }

  onafterPriceRangeSelected($event: priceRange) {
    this.priceRangeSelected = $event;
  }
}
