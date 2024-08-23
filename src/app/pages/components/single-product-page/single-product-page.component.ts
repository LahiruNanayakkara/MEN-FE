import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../models/cartItem';
import { WishlistService } from '../../../services/wishlist.service';

@Component({
  selector: 'app-single-product-page',
  templateUrl: './single-product-page.component.html',
  styleUrl: './single-product-page.component.scss',
})
export class SingleProductPageComponent implements OnInit, DoCheck {
  productId?: string | null;
  category?: string | null;
  product?: Product;
  selectedSize?: string;
  selectedColor?: string;
  qtySelected: number = 1;
  cartItem?: CartItem;
  isInWishList = false;
  showWarnings = false;
  savedBtn = 'favorite_outline';
  selectedImg?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private cartService: CartService,
    private wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.category = params.get('category');
      this.productId = params.get('id');

      if (this.productId) {
        this.product = this.getProduct(+this.productId);
        if (!this.product) {
          this.router.navigate(['/404']);
        } else {
          this.selectedSize = this.product.sizes[0];
          this.selectedColor = this.product.colors[0];
          this.isInWishList = this.checkInWishlist(
            this.product,
            this.selectedSize,
            this.selectedColor
          );
          this.selectedImg = this.product.images[0].imageUrl;
        }
      }
    });
  }

  ngDoCheck(): void {
    this.isInWishList = this.checkInWishlist(
      this.product!,
      this.selectedSize,
      this.selectedColor
    );
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
    if (this.qtySelected - 1 > 0) {
      this.qtySelected--;
    }
  }

  onSelectedQtyIncrease() {
    if (this.qtySelected + 1 <= this.product!.stockQuantity) {
      this.qtySelected++;
    }
  }

  //add to cart Fn
  onAddToCart() {
    if (this.selectedSize && this.selectedColor) {
      const cartItem: CartItem = {
        productId: this.product!.id,
        name: this.product!.name,
        price: this.product!.price,
        size: this.selectedSize,
        color: this.selectedColor,
        quantity: this.qtySelected,
      };
      this.cartService.addToCart(cartItem);
      this.selectedColor = this.product?.colors[0];
      this.selectedSize = this.product?.sizes[0];
      this.qtySelected = 1;
    } else {
      this.showWarnings = true;
      setTimeout(() => {
        this.showWarnings = false;
      }, 1000);
    }
  }

  // add to wishlist Fn
  onSave() {
    const cartItem: CartItem = {
      productId: this.product!.id,
      name: this.product!.name,
      price: this.product!.price,
      size: this.selectedSize,
      color: this.selectedColor,
      quantity: 1,
    };
    if (this.isInWishList) {
      this.wishlistService.removeFromWishlist(
        cartItem.productId,
        cartItem.size,
        cartItem.color
      );
      console.log('removed from wishlist');
      this.savedBtn = 'favorite_outline';
    } else {
      this.wishlistService.addToWishlist(cartItem);
      this.savedBtn = 'favorite';
      console.log('added to wishlist');
    }
    this.isInWishList = !this.isInWishList;
  }

  // check in wishlist on init
  checkInWishlist(product: Product, size?: string, color?: string) {
    const cartItem: CartItem = {
      productId: product.id,
      name: product.name,
      price: product.price,
      size: size,
      color: color,
      quantity: 1,
    };
    const isExist = this.wishlistService.isExistInWishlist(cartItem);
    if (isExist) {
      this.savedBtn = 'favorite';
      return true;
    } else {
      this.savedBtn = 'favorite_outline';
      return false;
    }
  }

  onImageSelect(color:string) {
    console.log(color);
    this.selectedImg = this.product!.images.find((img) => img.color === color)?.imageUrl;
    if (this.selectedImg) {
      this.selectedColor = color;
    }
  }
}
