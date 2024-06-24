import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBadgeComponent } from './header-badge.component';

describe('HeaderBadgeComponent', () => {
  let component: HeaderBadgeComponent;
  let fixture: ComponentFixture<HeaderBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderBadgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
