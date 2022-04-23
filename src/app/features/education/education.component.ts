import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  educations = [
    {
      duration: 'Present',
      courseName: 'PHD',
      university: 'Siksha ‘O’ Anusandhan (Deemed to be University), Odisha',
    },
    {
      duration: '2013',
      courseName: 'M.Tech (CSE)',
      university: 'BPUT, Odisha',
    },
    {
      duration: '2011',
      courseName: 'MBA (HR & IT)',
      university: 'Sambalpur University, Odisha',
    },
    {
      duration: '2009',
      courseName: 'B.Tech (CSE)',
      university: 'BPUT, Odisha',
    },
    {
      duration: '2005',
      courseName: '+2 Science',
      university: 'CHSE, Odisha',
    },
    {
      duration: '2003',
      courseName: 'Intermediate',
      university: 'BSE, Odisha',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
