import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';

import { Router } from '@angular/router';
import {Hospital} from '../../../../../domain/hospital';

@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.css']
})
export class ListAppointmentComponent implements OnInit {


  private appointments: Hospital[] = [];
  id: string;

  constructor(private appointmentService: AppointmentService, private router: Router) { }

  ngOnInit() {
    this.getAppointments();
    this.setActive();

  }

  getAppointments(){

    this.appointmentService.getAll().subscribe(data => {
        this.appointments = data;
    });

  }


  viewAppoinement(id: string) {

    this.appointmentService.saveId(id);
    this.router.navigate(['hospitals/view']);

  }

  setActive(){
    document.getElementById('doctorsLink').classList.remove('active');
    document.getElementById('patientsLink').classList.remove('active');
    document.getElementById('visitsLink').classList.remove('active');
    document.getElementById('appointmentsLink').classList.add('active');
  }



}
