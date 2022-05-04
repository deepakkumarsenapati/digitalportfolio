import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root',
})
export class ConferencesService {
  constructor(private http: HttpClient, private appService: AppService) {}

  getConf(): Observable<any> {
    return this.http.get(`${this.appService.appURL}conferences.json`);
  }
}