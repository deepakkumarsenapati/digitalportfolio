import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements OnInit {
  educations = [
    {
      courseName: 'Full-Time Research Scholar',
      university: `Working as Full-Time Research Scholar, Dept. of CSE, Siksha ‘O’ Anusandhan
      (Deemed to be University), Bhubaneswar, Odisha, India`,
    },
    {
      courseName: 'Asst. Prof., Dept. of CSE',
      university: `Worked as Asst. Prof., Dept. of CSE, BCET, Balasore, Odisha, India`,
    },
    {
      courseName: 'Asst. Prof., Dept. of CSE',
      university: `Worked as Asst. Prof., Dept. of CSE, MEMS, Balasore, Odisha, India`,
    },
    {
      courseName: 'FACULTY, Dept. of BCA',
      university: `Worked as FACULTY, Dept. of BCA and Comp. Science, Bhadrak Auto. College,
      Odisha, India`,
    },
    {
      courseName: ' LECTURER, Dept. of CSE',
      university: `Worked as LECTURER, Dept. of CSE, The Techno School, Bhubaneswar, Odisha,
      India.`,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
