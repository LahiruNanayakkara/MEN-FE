import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../../../models/cartItem';
import { CartService } from '../../../services/cart.service';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.scss',
})
export class CartSummaryComponent implements OnInit{
  @Input('hideButton') hideButton:boolean = false;
  cartItems: CartItem[] = [];
  subTotal: number = 0;
  shipping: number = 50;
  totalPrice: number = 0;
  discount: number = 0;
  constructor(
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.cartItems = res;
    });

    this.cartService.subtotal$.subscribe((subtotal) => {
      this.subTotal = subtotal;
    })

    this.cartService.shipping$.subscribe((shipping) => {
      this.shipping = shipping;
    })

    this.cartService.discount$.subscribe((disc) => {
      this.discount = disc;
    })

    this.cartService.total$.subscribe((total) => {
      this.totalPrice = total;
    })
  }
}
