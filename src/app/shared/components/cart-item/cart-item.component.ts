import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent implements OnInit {
  @Input('item') item!:any;
  product?:Product;
  qtySelected: number = 0;

  constructor(private productService:ProductService, private cartService:CartService) {}

  ngOnInit(): void {
    this.product = this.productService.products.find((i) => {
      return i.id == this.item.productId;
    })
    this.qtySelected = this.item.quantity;
  }

  onRemoveFromCart(item:any) {
    this.cartService.removeFromCart(item.productId, item.size, item.color);
  }

  onSelectedQtyDecrease() {
    if (this.qtySelected - 1 > 0) {
      this.qtySelected--;
      this.item.quantity = this.qtySelected;
      this.cartService.updateCartItem(this.item);
    }
  }

  onSelectedQtyIncrease() {
    if (this.qtySelected + 1 <= this.product!.stockQuantity) {
      this.qtySelected++;
      this.item.quantity = this.qtySelected;
      this.cartService.updateCartItem(this.item);
    }
  }
}
