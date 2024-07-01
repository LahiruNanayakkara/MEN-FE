import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() item!:Product

  saved = false;
  savedBtn = 'favorite_outline';
  onSave() {
    this.saved = !this.saved;
    if(this.saved) {
      this.savedBtn = 'favorite'
    } else this.savedBtn = 'favorite_outline'
  }

  isSaved() {
    return this.saved;
  }
}
