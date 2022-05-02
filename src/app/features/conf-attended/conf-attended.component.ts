import { ConferencesService } from './../../services/conferences.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conf-attended',
  templateUrl: './conf-attended.component.html',
  styleUrls: ['./conf-attended.component.scss'],
})
export class ConfAttendedComponent implements OnInit {
  conferences: any;

  constructor(private confservice: ConferencesService) {}

  ngOnInit(): void {
    this.confservice.getConf().subscribe((resp) => {
      this.conferences = resp;
    });
  }
}
