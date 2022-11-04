import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from 'src/app/models/expense';
import { ExpenseServiceService } from 'src/app/services/expense-service.service';

@Component({
  selector: 'app-add-expense2',
  templateUrl: './add-expense2.component.html',
  styleUrls: ['./add-expense2.component.css']
})
export class AddExpense2Component implements OnInit {

displayExpense: Expense = new Expense;


  constructor(private _expenseService:ExpenseServiceService,
              private _router:Router,
              private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    const isIdPresent =this._activatedRoute.snapshot.paramMap.has("id");

    if(isIdPresent){
      const id =+ this._activatedRoute.snapshot.paramMap.get("id")!
      this._expenseService.editExpenseById(id).subscribe(
        data=> this.displayExpense= data
      )
    }
  }


saveExpense(){
  this._expenseService.saveExpenses(this.displayExpense).subscribe(
   data=>{
    console.log('response',data);
    this._router.navigateByUrl("/expenses");
   }
  )
}


deleteExpense(id:number){
this._expenseService.deleteExpense(id).subscribe(
  data=>{
    console.log('deleted response',data)
    this._router.navigateByUrl("/expences")
  }
)
}


  
}
