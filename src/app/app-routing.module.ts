import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// tslint:disable-next-line:max-line-length
import { CreateAppointmentComponent } from './components/ui-components/hospital/appointment/create-appointment/create-appointment.component';
import { ListAppointmentComponent } from './components/ui-components/hospital/appointment/list-appointment/list-appointment.component';
import { EditAppointmentComponent } from './components/ui-components/hospital/appointment/edit-appointment/edit-appointment.component';


const routes: Routes = [


  {path: 'hospitals', component: ListAppointmentComponent},
  {path: 'hospitals/new', component: CreateAppointmentComponent},
  {path: 'hospitals/view', component: EditAppointmentComponent},
  {path: '', redirectTo: 'hospitals', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
