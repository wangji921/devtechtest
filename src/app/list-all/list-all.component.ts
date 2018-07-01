import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from '../appointment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})

export class ListAllComponent implements OnInit {
  allAppointments: Observable<Appointment[]>;

  readonly API_URL = 'https://jsonplaceholder.typicode.com/posts';
  apiAppointment = 'http://devtechtest.previewourapp.com/api/Appointment?providerEmail=wangji921@gmail.com';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAppointments();
  }

  getAppointments() {
    this.allAppointments = this.http.get<Appointment[]>(this.apiAppointment);
  }

}
