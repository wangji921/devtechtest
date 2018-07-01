import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from '../appointment';
import { User } from '../user';
import { Observable } from 'rxjs';
import { findIndex } from 'rxjs/operators';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})

export class AppointmentListComponent implements OnInit {
  appointments: Observable<Appointment[]>;
  filteredAppointments: Observable<Appointment[]>;
  mergeArray: any;
  editAppointment: Appointment;
  users: Observable<User[]>;
  userID = -1;
  startDate = new Date();

  apiAppointment = 'http://devtechtest.previewourapp.com/api/Appointment?providerEmail=wangji921@gmail.com';
  apiUser = 'http://devtechtest.previewourapp.com/api/User?providerEmail=wangji921@gmail.com';
  apiPut = 'http://devtechtest.previewourapp.com/api/Appointment/{id}?providerEmail=wangji921@gmail.com';
  // apiAppointment = 'https://jsonplaceholder.typicode.com/posts';
  // apiUser = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAppointments();
    this.getUsers();
    this.merge();
  }

  getAppointments() {
    this.appointments = this.http.get<Appointment[]>(this.apiAppointment);
    this.filteredAppointments = this.appointments;
  }

  getUsers() {
    this.users = this.http.get<User[]>(this.apiUser);
  }

  merge() {
    console.log('not null');
    if (this.appointments != null) {
      console.log('not null');
    }
    console.log(this.mergeArray);
  }

  filterByUserID(userId) {
    this.userID = userId;
  }

  // FilterByUser(userId) {
  //   this.filteredAppointments = this.filteredAppointments.pipe(
  //     filter(appointment => {return appointment.includes(userId)})
  //   )
  // }

  // newAppointment = new Appointment;
  postAppointment() {
    const req = this.http.post('http://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
        }
      );
  }

  edit(appointment) {
    this.editAppointment = appointment;
  }

  update() {
    console.log(this.editAppointment.Id);
    const apiUrl = this.apiPut.replace('{id}', this.editAppointment.Id.toString());
    if (this.editAppointment) {
      console.log(apiUrl);
      const req = this.http.put<Appointment>(apiUrl, this.editAppointment).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
        }
      );
      this.editAppointment = undefined;
    }
  }

  postAppointment3() {
    const req = this.http.post('http://devtechtest.previewourapp.com/api/Appointment?providerEmail=wangji921@gmail.com', {
      Description: 'Test Appointment 4',
      Start: this.startDate.setDate(this.startDate.getDate() - 5),
      End: this.startDate,
      Notes: [
        'simple notes 1',
        'simple notes 2'
      ],
      Party: [517],
      ProviderEmail: 'wangji921@gmail.com'
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
        }
      );
  }

}
