import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppointmentService } from 'src/app/services/appointment/appointment.service';

import {Hospital} from '../../../../../domain/hospital';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {

  appointment: Hospital;
  id: string;
  submitted = false;

  constructor(private appointmentService: AppointmentService, private router: Router) { }

  ngOnInit() {
    this.getVisitToView();
  }

  getVisitToView() {

    this.id = this.appointmentService.getId();

    this.appointmentService.findAppointmentById(this.id).subscribe(data => {

      this.appointment = data;

    });
  }

  update() {

    this.appointmentService.updateAppointment(this.appointment).subscribe(data => console.log(data), error1 => console.log(error1));
    this.router.navigate(['/hospitals']);

  }

  onSubmit() {
    this.submitted = true;
    this.update();
  }

  cancel() {

    this.router.navigate(['/hospitals']);

  }

}
