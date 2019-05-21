import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators,NgForm } from '@angular/forms';
import {EmployeeServiceService} from '../employee-service.service';
import {Employee} from '../EmployeeBusinessLogic/Employee';
@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
emp:Employee[];

userForm = new FormGroup({
   ID :new FormControl(),
   Title :new FormControl('', [Validators.required, Validators.maxLength(15)]),
    }); 
  constructor(private empService : EmployeeServiceService) { }

  ngOnInit() {
   //this.update();

  }
//  update(form: NgForm) {
//      console.log(form.value); // confirm value on console
//      this.empService.AddEmployeeDetail(form.value);
//     }
}
    