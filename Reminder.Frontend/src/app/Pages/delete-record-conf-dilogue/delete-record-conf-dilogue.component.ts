import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-record-conf-dilogue',
  templateUrl: './delete-record-conf-dilogue.component.html',
  styleUrls: ['./delete-record-conf-dilogue.component.scss']
})
export class DeleteRecordConfDilogueComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteRecordConfDilogueComponent>,) { }

  ngOnInit(): void {
  }
}
