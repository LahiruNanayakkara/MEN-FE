import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearWishlistComponent } from './clear-wishlist.component';

describe('ClearWishlistComponent', () => {
  let component: ClearWishlistComponent;
  let fixture: ComponentFixture<ClearWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClearWishlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClearWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
