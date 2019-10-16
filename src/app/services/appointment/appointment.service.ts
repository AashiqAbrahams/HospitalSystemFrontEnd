import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {Hospital} from '../../domain/hospital';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseURL = '//localhost:8080/hospital';
  private id: string;

  constructor(private http: HttpClient) {}

  createAppointment(appointment: Hospital): Observable<Hospital> {

    let username= 'admin';
    let password= 'admin';

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });


    return this.http.post<Hospital>(this.baseURL + '/new', appointment, {headers});

  }

  findAppointmentById(id: string): Observable<Hospital> {
    return this.http.get<Hospital>(this.baseURL + '/find/' + id);
  }

  updateAppointment(appointment: Hospital): Observable<Hospital> {

    return this.http.put<Hospital>(this.baseURL + '/update', appointment);

  }

  deleteAppointment(id: string): Observable<any> {
    return this.http.delete(this.baseURL + '/delete/' + id );

  }

  getAll(): Observable<Hospital[]> {

    return this.http.get<Hospital[]>(this.baseURL + '/getAll');

  }

  saveId(id: string) {

    this.id = id;

  }

  getId(): string {

    return this.id;


  }
}
