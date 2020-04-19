import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public expenseData: Array<any>;
  public currentExpense: any;

  constructor(private expenseService: ExpenseService) {
    expenseService.get().subscribe((data: any) => this.expenseData = data);
    this.currentExpense = this.setInitialValuesForExpenseData();
  }

  ngOnInit(): void {
  }

  private setInitialValuesForExpenseData() {
    return {
      expenseId: undefined,
      expenseOwner: '',
      description: '',
      category: 0,
      date: '',
      amount: 0
    }
  }

  public createOrUpdateExpense = function (expense: any) {
    // if expense is present in expenseData, we can assume this is an update
    // otherwise it is adding a new element
    let expenseWithId;
    expenseWithId = _.find(this.expenseData, (el => el.expenseId === expense.expenseId));

    if (expenseWithId) {
      const categoryInNumber = parseInt(expense.category)
      expense.category = categoryInNumber;
      const updateIndex = _.findIndex(this.expenseData, { expenseId: expenseWithId.expenseId });
      this.expenseService.update(expense).subscribe(
        expenseRecord => this.expenseData.splice(updateIndex, 1, expense)
      );
    } else {
      delete expense.expenseId;
      const categoryInNumber = parseInt(expense.category)
      expense.category = categoryInNumber;
      this.expenseService.add(expense).subscribe(
        expenseRecord => this.expenseData.push(expense)
      );
    }

    this.currentExpense = this.setInitialValuesForExpenseData();
  };

  public editClicked = function (record) {
    this.currentExpense = record;
    console.log(this.currentExpense)
  };

  public newClicked = function () {
    this.currentExpense = this.setInitialValuesForExpenseData();
  };

  public deleteClicked(record) {
    const deleteIndex = _.findIndex(this.expenseData, { expenseId: record.expenseId });
    this.expenseService.remove(record).subscribe(
      result => this.expenseData.splice(deleteIndex, 1)
    );
  }
}
