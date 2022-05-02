import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  appURL = 'https://test-2d0f6-default-rtdb.firebaseio.com/';
  constructor() {}
}
