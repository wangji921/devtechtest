import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListByUserComponent } from './list-by-user/list-by-user.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { FilterPipe } from './filter.pipe';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    ListByUserComponent,
    AppointmentListComponent,
    FilterPipe,
    ViewAppointmentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
