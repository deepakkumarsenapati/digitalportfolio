import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  constructor(private http: HttpClient, private appService: AppService) {}
}
