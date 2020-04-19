import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../category.enum';

@Component({
  selector: 'app-grid-expense',
  templateUrl: './grid-expense.component.html',
  styleUrls: ['./grid-expense.component.css']
})
export class GridExpenseComponent implements OnInit {
  @Output() recordDeleted = new EventEmitter<any>();
  @Output() newClicked = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();
  @Input() expenseData: Array<any>;
  Category = Category;

  constructor() { }

  ngOnInit(): void {
  }

  public deleteRecord(record) {
    this.recordDeleted.emit(record);
  }

  public editRecord(record) {
    const clonedRecord = Object.assign({}, record);
    this.editClicked.emit(clonedRecord);
  }

  public newRecord() {
    this.newClicked.emit();
  }

}
