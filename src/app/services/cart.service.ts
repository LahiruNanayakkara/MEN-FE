import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartList: CartItem[] = [];
  public productList = new BehaviorSubject<CartItem[]>([]);

  cart$ = this.productList.asObservable();

  constructor() {}

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: CartItem) {
    this.cartList.push(product);
  }

  addToCart(item: CartItem) {
    const existingItem = this.cartList.find(
      (i) =>
        i.productId === item.productId &&
        i.size === item.size &&
        i.color === item.color
    );
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cartList.push(item);
    }
    this.getTotalPrice();
    this.productList.next(this.cartList);
  }

  updateCartItem(item:CartItem) {
    const index = this.cartList.findIndex(
      (i) =>
        i.productId === item.productId &&
        i.size === item.size &&
        i.color === item.color
    );
    if (index == -1) {
      return;
    }
    this.cartList[index].quantity = item.quantity;
    this.productList.next(this.cartList);
  }

  getTotalPrice() {
    let total = 0;
    this.cartList.map((product: CartItem) => {
      total += product.price*product.quantity;
    });
    return total;
  }

  removeFromCart(productId: number, size?: string, color?: string) {
    this.cartList = this.cartList.filter(
      (item) =>
        item.productId !== productId ||
        item.size !== size ||
        item.color !== color
    );
    this.getTotalPrice();
    this.productList.next(this.cartList);
  }

  clearCart() {
    this.cartList = [];
    this.getTotalPrice();
    this.productList.next(this.cartList);
  }
}
