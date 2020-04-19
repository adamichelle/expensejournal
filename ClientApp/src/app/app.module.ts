import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GridExpenseComponent } from './grid-expense/grid-expense.component';
import { AddOrUpdateExpenseComponent } from './add-or-update-expense/add-or-update-expense.component';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseService } from './expense.service';
import { HttpClientModule } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { EnumAsStringPipe } from './enum-as-string.pipe';
import { FormsModule } from '@angular/forms';
import * as _ from 'lodash';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }
 
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridExpenseComponent,
    AddOrUpdateExpenseComponent,
    EnumAsStringPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ExpenseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
