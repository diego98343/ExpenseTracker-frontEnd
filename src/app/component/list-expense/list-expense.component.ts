import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense';
import { ExpenseServiceService } from 'src/app/services/expense-service.service';

@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.css']
})
export class ListExpenseComponent implements OnInit {

  expenses: Expense[]=[];

  filter={
    keyword:'',
    sortBy:'name'
  }

  constructor( private _expenseService: ExpenseServiceService) { }

  ngOnInit(): void {

    this.listExpenses();
    
  }

  // deleteExpense(id:number){
  //  this._expenseService.deleteExpense(id).subscribe(
  //     data=>{
  //       console.log('deleted response',data) 
  //     }
  //   )
  // }

  listExpenses(){
      this._expenseService.getExpenses().subscribe(
        data=>this.expenses= this.filterExpenses(data)
      )
    }


    filterExpenses(expences:Expense[]){
      return expences.filter((e)=>{
        return e.expense?.toLocaleLowerCase().includes(this.filter.keyword.toLowerCase());
      })
    }

}
