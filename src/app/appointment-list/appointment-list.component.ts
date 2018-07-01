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
  fetchedUsers: Observable<User[]>;
  mergeArray: any;
  editAppointment: Appointment;
  users: Observable<User[]>;
  userID = -1;
  startDate = new Date();

  apiApps = 'http://devtechtest.previewourapp.com/api/Appointment?providerEmail=wangji921@gmail.com';
  apiUser = 'http://devtechtest.previewourapp.com/api/User?providerEmail=wangji921@gmail.com';
  apiApp = 'http://devtechtest.previewourapp.com/api/Appointment/{id}?providerEmail=wangji921@gmail.com';

  devPost: any;
  viewApp: Appointment;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAppointments();
    this.getUsers();
  }

  getAppointments() {
    this.appointments = this.http.get<Appointment[]>(this.apiApps);
    this.filteredAppointments = this.appointments;
  }

  getApp(id: number) {
    const apiUrl = this.apiApp.replace('{id}', id.toString());
    this.devPost = this.http.get(apiUrl)
      .subscribe(
        (data: Appointment) => {
          this.viewApp = data;
          console.log(data);
          console.log(this.viewApp);
        }
      );
  }

  getUsers() {
    this.users = this.http.get<User[]>(this.apiUser);
    this.fetchedUsers = this.users;
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

  edit(appointment) {
    this.editAppointment = appointment;
  }

  update() {
    console.log(this.editAppointment.Id);
    const apiUrl = this.apiApp.replace('{id}', this.editAppointment.Id.toString());
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

  postAppointment() {
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
