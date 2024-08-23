import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCartItemComponent } from './delete-cart-item.component';

describe('DeleteCartItemComponent', () => {
  let component: DeleteCartItemComponent;
  let fixture: ComponentFixture<DeleteCartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteCartItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
