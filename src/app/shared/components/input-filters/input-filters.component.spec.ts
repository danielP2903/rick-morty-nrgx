import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFiltersComponent } from './input-filters.component';

describe('InputFiltersComponent', () => {
  let component: InputFiltersComponent;
  let fixture: ComponentFixture<InputFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputFiltersComponent]
    });
    fixture = TestBed.createComponent(InputFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
