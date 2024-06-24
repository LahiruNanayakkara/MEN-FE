import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  categories = [
    "Shrits & T-shirts",
    "Pants",
    "Hoodies",
    "Coats & Jackets",
    "Perfumes",
    "Watches",
    "Caps",
    "Shoes",
    "More"
  ]
}
