import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from '../employee-service.service';
import {Employee} from '../EmployeeBusinessLogic/Employee';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponentComponent implements OnInit {
emp : Employee[];
  constructor(private _empService : EmployeeServiceService ) { }

  ngOnInit() {
    this.getEmployee();
  }
getEmployee()
{
  this._empService.getEmployeeList().subscribe(data=>{this.emp=data, console.log(this.emp)});
}
}
