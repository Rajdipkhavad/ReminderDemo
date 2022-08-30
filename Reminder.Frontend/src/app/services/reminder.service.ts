import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reminder } from '../models/reminder.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  apiContoller = "Reminders";
  constructor(private _httpService: HttpService) { }
  GetReminderList(): Observable<Reminder[]> {
    return this._httpService.Get(this.apiContoller);
  }
  AddEditReminder(body: Reminder) {
    return this._httpService.Post(this.apiContoller, body);
  }
  DeleteReminder(id: number) {
    return this._httpService.Delete(`${this.apiContoller}/${id}`);
  }
}
