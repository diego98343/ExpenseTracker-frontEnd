import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../models/expense';


//YOU HAVE TO IMPORT THE MAPP ANNOTATION!!!!!



import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpenseServiceService {

//-----------------------------------------------------------------------------



  private getUrl: string="http://localhost:8080/api/1/expenses";



  constructor(private _httpClient:HttpClient) { }

  getExpenses(): Observable<Expense[]>{
    return this._httpClient.get<Expense[]>(this.getUrl).pipe(
      map(response=> response)
    )
  }

  
  //----------------------------SAVE -------------------------------------------------


   saveExpenses(expense:Expense):Observable<Expense>{
    return this._httpClient.post<Expense>(this.getUrl, expense);
   }


   //-------------------------------EDIT----------------------------------------------


   editExpenseById(id:number): Observable<Expense>{
    return this._httpClient.get<Expense>(`${this.getUrl}/${id}`).pipe(
      map(response=>response)
    )
   }


   //--------------------------------DELETE-----------------------------------------------


   deleteExpense(id:number):Observable<any>{
    return this._httpClient.delete(`${this.getUrl}/${id}`,{responseType:'text'});
   }



}
