import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../models/cartItem';

@Component({
  selector: 'app-single-product-page',
  templateUrl: './single-product-page.component.html',
  styleUrl: './single-product-page.component.scss',
})
export class SingleProductPageComponent implements OnInit {
  productId?: string | null;
  category?: string | null;
  product?: Product;
  selectedSize?: string;
  selectedColor?: string;
  qtySelected: number = 0;
  cartItem?: CartItem;

  showWarnings = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.category = params.get('category');
      this.productId = params.get('id');

      if (this.productId) {
        this.product = this.getProduct(+this.productId);
        if (!this.product) {
          this.router.navigate(['/404']);
        }
      }
    });
  }

  getProduct(id: number) {
    return this.productService.products.find((product) => {
      return product.id == id;
    });
  }

  onSizeSelect(size: string) {
    this.selectedSize = size;
  }

  onColorSelect(color: string) {
    this.selectedColor = color;
  }

  getColor(color: string) {
    return `background:${color};color:${color};`;
  }

  trackBySize(index: number, size: string): string {
    return size;
  }

  trackByColor(index: number, color: string): string {
    return color;
  }

  onSelectedQtyDecrease() {
    if (this.qtySelected - 1 >= 0) {
      this.qtySelected--;
    }
  }

  onSelectedQtyIncrease() {
    if (this.qtySelected + 1 <= this.product!.stockQuantity) {
      this.qtySelected++;
    }
  }

  onAddToCart() {
    if (this.selectedSize && this.selectedColor && this.qtySelected > 0) {
      const cartItem: CartItem = {
        productId: this.product!.id,
        name: this.product!.name,
        price: this.product!.price,
        size: this.selectedSize,
        color: this.selectedColor,
        quantity: this.qtySelected,
      };
      this.cartService.addToCart(cartItem);
      this.selectedColor = '';
      this.selectedSize = '';
      this.qtySelected = 0;
    } else {
      this.showWarnings = true;
      setTimeout(() => {
        this.showWarnings = false;
      }, 1000);
    }
  }
}
