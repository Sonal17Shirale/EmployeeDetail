import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import {EditPageComponent} from './edit-page/edit-page.component';
const routes: Routes = [
  {
    path: "emplyoee", component :EmployeeComponentComponent

  },
  { path: "detail/:id", component :EmployeeDetailComponent},
  { path: "home", component :EmployeeDetailComponent},
   { path: "edit", component :EditPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
