import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { collapseble, slideIn } from '../../../animations';
import { ContactFormComponent } from '../../../shared/components/contact-form/contact-form.component';
import { AddressFormComponent } from '../../../shared/components/address-form/address-form.component';
import { ShippingtDetails } from '../../../models/contact';
import { CheckoutService } from '../../../services/checkout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
  animations: [slideIn, collapseble],
})
export class CheckoutComponent implements OnInit, AfterViewInit {
  isForm1Done = false;
  isForm2Done = false;
  contactDetails?: { [key: string]: any };
  addressDetails?: { [key: string]: any };
  shippingDetails?: ShippingtDetails;

  @ViewChild('ContactFormComponent')
  contactFormComponent!: ContactFormComponent;
  @ViewChild('AddressFormComponent')
  addressFormComponent!: AddressFormComponent;

  constructor(
    private checkoutService: CheckoutService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.shippingDetails = this.checkoutService.getContactDetails();
    if (this.shippingDetails) {
      this.contactDetails = {
        firstName: this.shippingDetails.firstName,
        lastName: this.shippingDetails.lastName,
        email: this.shippingDetails.email,
        phone: this.shippingDetails.phone,
      };
      this.addressDetails = {
        street: this.shippingDetails.address.street,
        apartment: this.shippingDetails.address.apartment,
        city: this.shippingDetails.address.city,
        province: this.shippingDetails.address.province,
        postalCode: this.shippingDetails.address.postalCode,
      };
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.contactDetails) {
        this.contactFormComponent.setValues(this.contactDetails);
      }
      if (this.addressDetails) {
        this.addressFormComponent.setValues(this.addressDetails);
      }
    }, 0);
  }

  onContinue() {
    this.contactFormComponent.onSubmit();
    this.addressFormComponent.onSubmit();

    if (this.contactDetails) {
      this.isForm1Done = true;
    } else {
      this.isForm1Done = false;
    }

    if (this.addressDetails) {
      this.isForm2Done = true;
    } else {
      this.isForm2Done = false;
    }

    if (this.isForm1Done && this.isForm2Done) {
      const content: ShippingtDetails = {
        firstName: this.contactDetails!['firstName'],
        lastName: this.contactDetails!['lastName'],
        email: this.contactDetails!['email'],
        phone: this.contactDetails!['phone'],
        address: {
          street: this.addressDetails!['street'],
          apartment: this.addressDetails!['apartment'],
          city: this.addressDetails!['city'],
          province: this.addressDetails!['province'],
          postalCode: this.addressDetails!['postalCode'],
        },
      };
      this.checkoutService.setContactDetails(content);
      this.contactDetails = this.addressDetails = undefined;
      this.router.navigate(['/payment']);
    }
  }

  onAfterForm1Submitted(event: { [key: string]: any }) {
    this.contactDetails = event;
  }

  onAfterForm2Submitted(event: { [key: string]: any }) {
    this.addressDetails = event;
  }
}
