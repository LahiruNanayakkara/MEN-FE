import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsInBagComponent } from './items-in-bag.component';

describe('ItemsInBagComponent', () => {
  let component: ItemsInBagComponent;
  let fixture: ComponentFixture<ItemsInBagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemsInBagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemsInBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
