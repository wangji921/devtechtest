import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListAllComponent } from './list-all/list-all.component';
import { ListByUserComponent } from './list-by-user/list-by-user.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListAllComponent,
    ListByUserComponent,
    ViewAppointmentComponent,
    EditAppointmentComponent,
    AddNoteComponent,
    AppointmentListComponent,
    FilterPipe
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
