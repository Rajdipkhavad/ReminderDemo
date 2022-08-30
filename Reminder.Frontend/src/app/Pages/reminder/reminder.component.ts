import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Reminder } from 'src/app/models/reminder.model';
import { ReminderService } from 'src/app/services/reminder.service';
import { DeleteRecordConfDilogueComponent } from '../delete-record-conf-dilogue/delete-record-conf-dilogue.component';

import { ReminderAddEditDilogueComponent } from './reminder-add-edit-dilogue/reminder-add-edit-dilogue.component';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
  displayedColumns: string[] = ['name', 'title', 'desc', 'dueDate', 'isCompleted', 'action'];
  dataSource: Reminder[] = [];
  constructor(private _reminderService: ReminderService, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.GetReminderList();
  }
  GetReminderList() {
    this._reminderService.GetReminderList().subscribe((val: Reminder[]) => {
      this.dataSource = val;
    });
  }
  openAddEditDialog(row: Reminder) {
    const dialogRef = this.dialog.open(ReminderAddEditDilogueComponent, {
      data: row,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.GetReminderList();
        this._snackBar.open("information saved successfully", "Close", { duration: 3000 });
      }
    });
  }
  Add() {
    this.openAddEditDialog(new Reminder());
  }
  Delete(id: number) {
    const dialogRef = this.dialog.open(DeleteRecordConfDilogueComponent);
    dialogRef.afterClosed().subscribe(result => {
      debugger
      if (result) {
        this._reminderService.DeleteReminder(id).subscribe(val => {
          this.GetReminderList();
          this._snackBar.open("Information deleted successfully", "Close", { duration: 3000 });
        });
      }
    });
  }
}
