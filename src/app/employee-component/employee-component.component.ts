import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from '../employee-service.service';
import {Employee} from '../EmployeeBusinessLogic/Employee';
import {ActivatedRoute} from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponentComponent implements OnInit {
emp : Employee[];
newEmployee: Employee = new Employee();
isdisable : boolean =true;
a;
addEmployee : boolean =false;
	firstName : string;
	lastName: string;
	city: string;
  constructor(private _empService : EmployeeServiceService,private activatedRoutes : ActivatedRoute ) { }

  ngOnInit() {
    this.getEmployee();
  }
getEmployee()
{
  this._empService.getEmployeeList().subscribe(data=>{this.emp=data, console.log(this.emp)});
  console.log(this.emp);
}
makeabletoclic()
{
  this.isdisable = !this.isdisable;
 
}
DeleteEmployee(id)
  {
     
  this._empService.DeleteEmployeeDetail(id).subscribe(param=>{this.getEmployee()});
   
  

  }
AddEmployee()
{
  alert("hii");
  this.addEmployee = !this.addEmployee;
}
SaveData() 
{
  this.newEmployee.firstName = this.firstName;
  this.newEmployee.lastName = this.lastName;
  this.newEmployee.city = this.city;
  this._empService.CreateEmployee(this.newEmployee).subscribe(data=>this.getEmployee());

  // console.log(this.newEmployee);

  this.firstName="";
  this.lastName="";
  this.city="";
  
}
Cancel():void{
  this.addEmployee = false;
  this.firstName="";
  this.lastName="";
  this.city="";
  }
//  update(emp,index) {
//     //  console.log(form.value); // confirm value on console
//     //  this.empService.AddEmployeeDetail(form.value);]
//     console.log("obj",this.emp);
//     this.newEmployee.Name =emp.Name;
//     }

}
