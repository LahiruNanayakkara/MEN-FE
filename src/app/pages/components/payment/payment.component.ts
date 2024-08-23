import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../../models/cartItem';
import { CartService } from '../../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent implements OnInit {
  cartList?:CartItem[]

  constructor(private cartService:CartService, private router:Router) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(products => {
      this.cartList = products;
    })
  }

}
