import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Appointment } from '../appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor() { }
}
