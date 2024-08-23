import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../../models/cartItem';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-items-in-bag',
  templateUrl: './items-in-bag.component.html',
  styleUrl: './items-in-bag.component.scss'
})
export class ItemsInBagComponent implements OnInit {
  cartList:CartItem[] = [];

  constructor(private cartService:CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.cartList = res;
    })
  }
}
