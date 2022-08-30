import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Reminder } from 'src/app/models/reminder.model';
import { ReminderService } from 'src/app/services/reminder.service';

@Component({
  selector: 'app-reminder-add-edit-dilogue',
  templateUrl: './reminder-add-edit-dilogue.component.html',
  styleUrls: ['./reminder-add-edit-dilogue.component.scss']
})
export class ReminderAddEditDilogueComponent implements OnInit {

  form = this.fb.group({
    id: [''],
    title: [''],
    description: [''],
    isComplated: [''],
    dueDate: ['']
  });
  constructor(public dialogRef: MatDialogRef<ReminderAddEditDilogueComponent>, @Inject(MAT_DIALOG_DATA) public data: Reminder,
    private fb: FormBuilder, private _reminderService: ReminderService) { }

  ngOnInit(): void {
    if (this.data) {
      this.form.patchValue({
        id: this.data.Id,
        title: this.data.Title,
        description: this.data.Description,
        isComplated: this.data.IsComplated,
        dueDate: this.data.DueDate
      })
    }
  }
  OnSubmit() {
    debugger;
    this._reminderService.AddEditReminder(this.form.value).subscribe(val => {
      this.dialogRef.close(this.form.value);
    });
  }
}
