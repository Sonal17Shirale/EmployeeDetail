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
    return this._http.get("/assets/EmployeeList.json");
  }

  getEmployeeDetail(id) : Observable<any>
  {
    return this._http.get("/assets/EmployeeList.json"+id);
  }
}
