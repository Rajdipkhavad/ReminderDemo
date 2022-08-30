import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  Get(url: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}/${url}`);
  }
  Post(url: string, body: any) {
    return this.http.post(`${environment.baseUrl}/${url}`, body);
  }
  Put(url: string, body: any) {
    return this.http.put(`${environment.baseUrl}/${url}`, body);
  }
  Delete(url: string) {
    return this.http.delete(`${environment.baseUrl}/${url}`);
  }
}
