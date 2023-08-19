import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormParfumComponent } from './form-parfum.component';

describe('FormParfumComponent', () => {
  let component: FormParfumComponent;
  let fixture: ComponentFixture<FormParfumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormParfumComponent]
    });
    fixture = TestBed.createComponent(FormParfumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
