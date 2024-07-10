import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { CartService } from '../../../services/cart.service';
import { ProductService } from '../../../services/product.service';
import { CartItem } from '../../../models/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cartItems:CartItem[] = [];
  totalPrice:number = 0
  constructor(private cartService:CartService, private productService:ProductService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.cartItems = res;
      this.totalPrice = this.cartService.getTotalPrice()
    })
  }

  onClearCart() {
    this.cartService.clearCart();
  }

}
