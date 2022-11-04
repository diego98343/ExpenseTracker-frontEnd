import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListExpenseComponent } from './component/list-expense/list-expense.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddExpense2Component } from './component/add-expense2/add-expense2.component';


const routers: Routes=[
  {path:'expenses',component: ListExpenseComponent},
  {path:'addExpense',component: AddExpense2Component},
  {path:'editExpense/:id',component:AddExpense2Component},
  {path:'',redirectTo:'/expenses',pathMatch:'full'},
]


@NgModule({
  declarations: [
    AppComponent,
    ListExpenseComponent,
    AddExpense2Component,
    
  ],
  imports: [
    RouterModule.forRoot(routers),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
