import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from './EmployeeBusinessLogic/Employee';
import {Observable} from 'Rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private _http : HttpClient) 
  { 

  }

  getEmployeeList() : Observable<any>
  {
    return this._http.get("http://localhost:3000/users");
  }

  getEmployeeDetail(id) : Observable<any>
  {
    return this._http.get("http://localhost:3000/user"+ '/'+id);
  }

   DeleteEmployeeDetail(id) : Observable<any>
  {
    return this._http.delete("http://localhost:3000/user"+ '/'+id);
  }

  CreateEmployee(emp:Employee)
  {
      
   return this._http.post("http://localhost:3000/user",emp);
  }

  PutEmployee(emp:Employee)
  {
      
   return this._http.post("http://localhost:3000/user",emp);
  }
}
