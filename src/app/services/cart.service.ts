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
  total = new BehaviorSubject<number>(0);
  subtotal = new BehaviorSubject<number>(0);
  discount = new BehaviorSubject<number>(0);
  shipping = new BehaviorSubject<number>(50);

  subtotal$ = this.subtotal.asObservable();
  shipping$ = this.shipping.asObservable();
  cart$ = this.productList.asObservable();
  total$ = this.total.asObservable();
  discount$ = this.discount.asObservable();

  constructor() {}

  getProducts() {
    return this.productList.asObservable();
  }

  setDiscount(amount: number) {
    this.discount.next(amount);
    this.calculateTotal();
  }

  getDiscount() {
    return this.discount.asObservable();
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
    this.productList.next(this.cartList);
    this.calculateTotal();
  }

  updateCartItem(item: CartItem) {
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
    this.calculateTotal();
  }

  calculateTotal() {
    const subtotal = this.productList.value.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    this.subtotal.next(subtotal);
    const discount = subtotal*this.discount.value/100;
    this.total.next(subtotal + this.shipping.value - discount);
  }

  removeFromCart(productId: number, size?: string, color?: string) {
    this.cartList = this.cartList.filter(
      (item) =>
        item.productId !== productId ||
        item.size !== size ||
        item.color !== color
    );
    this.productList.next(this.cartList);
    this.calculateTotal();
  }

  clearCart() {
    this.cartList = [];
    this.productList.next(this.cartList);
    this.calculateTotal();
  }
}
