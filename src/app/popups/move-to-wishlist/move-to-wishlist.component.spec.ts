import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveToWishlistComponent } from './move-to-wishlist.component';

describe('MoveToWishlistComponent', () => {
  let component: MoveToWishlistComponent;
  let fixture: ComponentFixture<MoveToWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoveToWishlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoveToWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
