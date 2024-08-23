import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CouponService } from '../../../services/coupon.service';

@Component({
  selector: 'app-coupon-details',
  templateUrl: './coupon-details.component.html',
  styleUrl: './coupon-details.component.scss'
})
export class CouponDetailsComponent implements OnInit {
  @ViewChild('couponInput') couponInput!: ElementRef;
  promoCode:string | null = null;
  isApplied = false
  discount = 0;
  isCouponInvalid = false;

  constructor(private cartService: CartService, private couponService: CouponService) {}


  ngOnInit(): void {
    this.cartService.discount$.subscribe((val) => {
      this.discount = val;
      if (this.discount > 0) {
        this.promoCode = this.couponService.getPromoCode(this.discount);
        this.isApplied = true
        this.isCouponInvalid = false;
      }
    })
  }

  onApplyCoupon() {
    const coupenValue = this.promoCode? this.couponService.validateCoupon(this.promoCode):null;
    if (coupenValue) {
      this.cartService.setDiscount(coupenValue);
      this.isCouponInvalid = false;
      this.isApplied = true;
    } else this.isCouponInvalid = true;
  }

  onRemoveCoupon() {
    this.cartService.setDiscount(0);
    this.promoCode = '';
    this.isApplied = false;
    this.isCouponInvalid = false;
  }
}
