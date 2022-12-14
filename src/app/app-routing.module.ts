import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransationComponent } from './transation/transation.component';

const routes: Routes = [
  {
    path:'',component:RegisterComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'dashbord',component:DashbordComponent
  },
  {
    path:'transaction',component:TransationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
