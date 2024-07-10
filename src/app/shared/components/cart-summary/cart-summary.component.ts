import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../../models/cartItem';
import { CartService } from '../../../services/cart.service';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.scss',
})
export class CartSummaryComponent implements OnInit{
  cartItems: CartItem[] = [];
  subTotal: number = 0;
  shipping: number = 50;
  totalPrice: number = 0;
  constructor(
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.cartItems = res;
      this.subTotal = this.cartService.getTotalPrice();
      this.totalPrice = this.subTotal + this.shipping;
    });
  }
}
