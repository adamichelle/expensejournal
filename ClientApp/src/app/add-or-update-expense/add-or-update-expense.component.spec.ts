import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateExpenseComponent } from './add-or-update-expense.component';

describe('AddOrUpdateExpenseComponent', () => {
  let component: AddOrUpdateExpenseComponent;
  let fixture: ComponentFixture<AddOrUpdateExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrUpdateExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdateExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
