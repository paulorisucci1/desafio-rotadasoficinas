import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanToArabicComponent } from './roman-to-arabic.component';

describe('RomanToArabicComponent', () => {
  let component: RomanToArabicComponent;
  let fixture: ComponentFixture<RomanToArabicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RomanToArabicComponent]
    });
    fixture = TestBed.createComponent(RomanToArabicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
