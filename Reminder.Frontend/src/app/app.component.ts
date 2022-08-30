import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Reminder.Frontend';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [];
}
