import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/ui-components/site-components/nav/nav.component';
import { FooterComponent } from './components/ui-components/site-components/footer/footer.component';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { CreateAppointmentComponent } from './components/ui-components/hospital/appointment/create-appointment/create-appointment.component';
import { ListAppointmentComponent } from './components/ui-components/hospital/appointment/list-appointment/list-appointment.component';
import { EditAppointmentComponent } from './components/ui-components/hospital/appointment/edit-appointment/edit-appointment.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,

    CreateAppointmentComponent,
    ListAppointmentComponent,
    EditAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
