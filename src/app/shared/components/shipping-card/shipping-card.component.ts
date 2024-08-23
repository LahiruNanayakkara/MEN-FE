import { Component, OnInit } from '@angular/core';
import { ShippingtDetails } from '../../../models/contact';
import { CheckoutService } from '../../../services/checkout.service';

@Component({
  selector: 'app-shipping-card',
  templateUrl: './shipping-card.component.html',
  styleUrl: './shipping-card.component.scss'
})
export class ShippingCardComponent implements OnInit {
  shippingDetails!:ShippingtDetails

  constructor(private checkoutService:CheckoutService) {}

  ngOnInit(): void {
    this.shippingDetails = this.checkoutService.getContactDetails()!;
  }

}
