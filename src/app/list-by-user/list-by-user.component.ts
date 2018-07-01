import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from '../appointment';
import { User } from '../user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-by-user',
  templateUrl: './list-by-user.component.html',
  styleUrls: ['./list-by-user.component.css']
})
export class ListByUserComponent implements OnInit {
  users: Observable<User[]>;
  userAppointments: Observable<Appointment[]>;
  selectedUser = -1;
  count = -1;

  apiUser = 'http://devtechtest.previewourapp.com/api/User?providerEmail=wangji921@gmail.com';
  apiAppointment = 'http://devtechtest.previewourapp.com/api/Appointment?providerEmail=wangji921@gmail.com';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.users = this.http.get<User[]>(this.apiUser);
  }

  showAll() {

  }

  getAppointmentsByUser(userId) {
    this.selectedUser = userId;
    this.count = -1;
    if (this.userAppointments === undefined) {
      this.userAppointments = this.http.get<Appointment[]>(this.apiAppointment);
    }
    console.log(this.count);
  }

  checkUserExistInAppointment(party: Array<number>, userId) {
    // console.log('party:' + party + ' selected userId: ' + userId);
    // console.log(party.includes(userId, 0));
    if (party.includes(userId, 0)) {
      this.count++;
      return true;
    } else {
      return false;
    }
    // console.log(this.count);
    // return party.includes(userId, 0);
  }

}
