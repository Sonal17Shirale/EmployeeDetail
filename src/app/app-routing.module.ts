import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
const routes: Routes = [
  {
    path: "emplyoee", component :EmployeeComponentComponent

  },
  { path: "detail/:id", component :EmployeeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
