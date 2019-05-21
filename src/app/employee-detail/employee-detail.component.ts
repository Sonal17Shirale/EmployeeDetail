import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from '../employee-service.service';
import {Employee} from '../EmployeeBusinessLogic/Employee';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
employees : Employee[];
sub : any;

name="sonal";

  constructor(private activatedRoutes : ActivatedRoute,private enpService : EmployeeServiceService) {

   }

  ngOnInit() {
    this.getEmployyeeDetails();
  }

  getEmployyeeDetails()
  {
    this.activatedRoutes.params.subscribe(data=>{
        let id = data['id'];
       
    this.enpService.getEmployeeDetail(id).subscribe(param=>{this.employees=param});
console.log(this.employees);
      })
  }

  
}
