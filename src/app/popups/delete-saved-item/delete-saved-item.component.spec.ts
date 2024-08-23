import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSavedItemComponent } from './delete-saved-item.component';

describe('DeleteSavedItemComponent', () => {
  let component: DeleteSavedItemComponent;
  let fixture: ComponentFixture<DeleteSavedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteSavedItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteSavedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
