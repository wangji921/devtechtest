import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByUserId'
})
export class FilterPipe implements PipeTransform {

  transform(appointments: any, user?: any): any {
    if (user === undefined || user === -1) {
      return appointments;
    }
    return appointments.filter(function(appointment) {
      return appointment.Party.includes(user);
    });
  }

}
