import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AppointmentService } from 'src/app/services/appointment/appointment.service';
import {Hospital} from '../../../../../domain/hospital';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  appointment: Hospital = new Hospital();
  submitted = false;
  // tslint:disable-next-line:ban-types
  durations: String[] = ['15 min', '30 min', '1 hr', '2 hr', '3 hr', '4 hr'];

  // patients



  constructor(private router: Router, private appointmentService: AppointmentService) { }

  ngOnInit() {

  }



  newAppointment(): void {
    this.submitted = false;
    this.appointment = new Hospital();
  }

  save() {

    this.appointmentService.createAppointment(this.appointment).subscribe(data => console.log(data), error => console.log(error));
    this.appointment = new Hospital();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.router.navigate(['/hospitals']);
  }

  cancel() {
    this.router.navigate(['/hospitals']);
  }
}
