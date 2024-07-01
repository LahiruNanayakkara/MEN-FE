import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  values = [
    {
      icon:"trend.svg",
      title:"Trend-Forward Collections",
      text:"Stay fashionable with our latest styles"
    },
    {
      icon:"shipping.svg",
      title:"Fast Shipping",
      text:"Get your new clothes quickly with our speedy shipping"
    },
    {
      icon:"return.svg",
      title:"Easy Returns and Exchanges",
      text:"If it doesn't fit or you don't like it, return it easily"
    },
    {
      icon:"loyalty.svg",
      title:"Loyalty Rewards",
      text:"Earn rewards and discounts when you shop with us"
    },
    {
      icon:"secure.svg",
      title:"Secured Payments",
      text:"Pay with our safe and secure payment options"
    },
    // {
    //   icon:"",
    //   title:"",
    //   text:""
    // }
  ]

  categories = [
    { name: 'Shrits & T-shirts', bgImage: 'shirts.jpg' },
    { name: 'Pants', bgImage: 'pants.jpg' },
    { name: 'Perfumes', bgImage: 'perfumes.jpg' },
    { name: 'Watches', bgImage: 'watches.jpg' },
    { name: 'Hoodies', bgImage: 'shirts.jpg' },
    { name: 'Innerwear', bgImage: 'pants.jpg' },
    { name: 'Caps', bgImage: 'perfumes.jpg' },
    { name: 'Shoes', bgImage: 'watches.jpg' },
    { name: 'Shorts', bgImage: 'shirts.jpg' },
    { name: 'Coats', bgImage: 'watches2.jpg' },
  ];
}
