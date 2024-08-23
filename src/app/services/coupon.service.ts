import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  private validCoupons = new Map<string, number>([
    ['DISCOUNT10', 10],
    ['DISCOUNT20', 20]
  ]);

  public validateCoupon(code:string) {
    return this.validCoupons.get(code) || null;
  }

  public getPromoCode(value: number): string | null {
    let key: string | null = null;
    this.validCoupons.forEach((val, code) => {
      if (val === value) {
        key = code;
        return;
      }
    });
    return key;
  }
}
