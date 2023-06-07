import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabicToRomanComponent } from './arabic-to-roman.component';

describe('ArabicToRomanComponent', () => {
  let component: ArabicToRomanComponent;
  let fixture: ComponentFixture<ArabicToRomanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArabicToRomanComponent]
    });
    fixture = TestBed.createComponent(ArabicToRomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
