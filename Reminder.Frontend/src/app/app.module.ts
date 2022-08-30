import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ReminderComponent } from './Pages/reminder/reminder.component';
import { ReminderAddEditDilogueComponent } from './Pages/reminder/reminder-add-edit-dilogue/reminder-add-edit-dilogue.component'
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DeleteRecordConfDilogueComponent } from './Pages/delete-record-conf-dilogue/delete-record-conf-dilogue.component';
@NgModule({
  declarations: [
    AppComponent,
    ReminderComponent,
    ReminderAddEditDilogueComponent,
    DeleteRecordConfDilogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule, MatDialogModule, MatButtonModule, ReactiveFormsModule, MatInputModule, MatCheckboxModule, MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
