import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteCartItemComponent } from './delete-cart-item/delete-cart-item.component';
import { MaterialModule } from '../shared/material.module';
import { ClearCartComponent } from './clear-cart/clear-cart.component';
import { DeleteSavedItemComponent } from './delete-saved-item/delete-saved-item.component';
import { ClearWishlistComponent } from './clear-wishlist/clear-wishlist.component';
import { MoveToWishlistComponent } from './move-to-wishlist/move-to-wishlist.component';

@NgModule({
  declarations: [DeleteCartItemComponent, ClearCartComponent, DeleteSavedItemComponent, ClearWishlistComponent, MoveToWishlistComponent],
  imports: [CommonModule, MaterialModule],
  exports: [],
})
export class PopupModule {}
