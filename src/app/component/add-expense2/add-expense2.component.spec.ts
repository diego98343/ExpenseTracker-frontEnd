import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpense2Component } from './add-expense2.component';

describe('AddExpense2Component', () => {
  let component: AddExpense2Component;
  let fixture: ComponentFixture<AddExpense2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExpense2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExpense2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
