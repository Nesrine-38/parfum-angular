import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleParfumComponent } from './single-parfum.component';

describe('SingleParfumComponent', () => {
  let component: SingleParfumComponent;
  let fixture: ComponentFixture<SingleParfumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleParfumComponent]
    });
    fixture = TestBed.createComponent(SingleParfumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
