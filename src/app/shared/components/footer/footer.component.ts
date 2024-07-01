import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  pages = ['Home', 'About Us', 'Shop', 'Cart'];
  categories = [
    'Shrits & T-shirts',
    'Pants',
    'Hoodies',
    'Innerwear',
    'Perfumes',
    'Watches',
    'Caps',
    'Shoes',
    'Shorts',
    'Coats',
  ];
  support = [
    'My Account',
    'My Orders',
    'Track My Order',
    'Returns & Exchanges',
    'Contact',
    'FAQs',
    'Privacy Policy'
  ]
}
