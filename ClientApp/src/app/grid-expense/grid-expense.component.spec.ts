import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridExpenseComponent } from './grid-expense.component';

describe('GridExpenseComponent', () => {
  let component: GridExpenseComponent;
  let fixture: ComponentFixture<GridExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
