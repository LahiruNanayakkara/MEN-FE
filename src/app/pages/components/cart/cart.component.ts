import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { CartService } from '../../../services/cart.service';
import { ProductService } from '../../../services/product.service';
import { CartItem } from '../../../models/cartItem';
import { MatDialog } from '@angular/material/dialog';
import { ClearCartComponent } from '../../../popups/clear-cart/clear-cart.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cartItems:CartItem[] = [];
  constructor(private cartService:CartService, private productService:ProductService,
    private dialog:MatDialog
  ) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.cartItems = res;
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(ClearCartComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if(result) {
        this.cartService.clearCart();
      }
    })
  }

}
