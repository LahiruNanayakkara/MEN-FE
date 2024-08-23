import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ShippingtDetails } from '../models/contact';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  
  private shippingtDetails?: ShippingtDetails;
  setContactDetails(content: ShippingtDetails) {
    this.shippingtDetails = content;
  }

  getContactDetails(): ShippingtDetails | undefined {
    return this.shippingtDetails;
  }
}
