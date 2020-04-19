import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Category } from '../category.enum';

@Component({
  selector: 'app-add-or-update-expense',
  templateUrl: './add-or-update-expense.component.html',
  styleUrls: ['./add-or-update-expense.component.css']
})
export class AddOrUpdateExpenseComponent implements OnInit {
  public category = Category;
  public categoryOptions = [];
  @Output() expenseCreated = new EventEmitter<any>();
  @Input() expenseInfo: any;

  public buttonText = 'Save';

  constructor() {
    this.clearExpenseInfo();
  }

  ngOnInit(): void {
    this.categoryOptions = this.category.values();
  }

  private clearExpenseInfo = function () {
    // Create an empty expense object
    this.expenseInfo = {
      expenseId: undefined,
      expenseOwner: '',
      description: '',
      category: 0,
      date: '',
      amount: 0
    };
  };

  public addOrUpdateExpenseRecord = function (event) {
    this.expenseCreated.emit(this.expenseInfo);
    this.clearExpenseInfo();
  };
}
