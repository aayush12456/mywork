import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointComponent } from './components/appoint/appoint.component';
import { PatientsComponent } from './components/patients/patients.component';
import { BillingComponent } from './components/billing/billing.component';


const routes: Routes = [
  {path:'appoint',component:AppointComponent},
  {path:'patient',component:PatientsComponent},
  {path:'billing',component:BillingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
