import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustomersComponent } from './list-customers.component';

describe('ListClientComponent', () => {
  let component: ListCustomersComponent;
  let fixture: ComponentFixture<ListCustomersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCustomersComponent]
    });
    fixture = TestBed.createComponent(ListCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
