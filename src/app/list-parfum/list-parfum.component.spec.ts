import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParfumComponent } from './list-parfum.component';

describe('ListParfumComponent', () => {
  let component: ListParfumComponent;
  let fixture: ComponentFixture<ListParfumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListParfumComponent]
    });
    fixture = TestBed.createComponent(ListParfumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
