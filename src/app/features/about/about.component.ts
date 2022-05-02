import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  about = {
    headingGradientText: 'about',
    headingNormalText: 'me',
    title: 'Hi There !',
    titleNormalText: "I'm",
    titleGradientText: 'Abhilash Pati',
    paragraph1: `Research Scholar, Department of CSE. Hands-on experience at the graduation
    and post-graduation level teaching over ten years at various AICTE and UGC
    approved organizations. Ability to work on divisive and recent trend rese.
    Familiarity working at a College and University department. Remarkable
    ability to teach, inspire and develop young people with excellent written
    and oral communication skills; qualified with UGC-NET (Assistant Professor
    Only), India in December 2019.`,
    paragraph2: `Currently working as Full Time Research Scholar in the Department of
    Computer Science and Engineering, ITER, Siksha ‘O’ Anusandhan (Deemed to
    be University), Odisha, India. He has completed his B.Tech. and M.Tech. in
    CSE with Biju Patnaik University of Technology, Odisha, India in the year
    2009 and 2012 respectively. His research interests include the Internet of
    Things, Fog Computing, Machine Learning and Deep Learning, and has more
    than 7 papers to his account.`,
    links: [
      {
        url: 'https://scholar.google.com/citations?hl=en&user=m0RnTsQAAAAJ',
        name: 'Google Scolar Id',
      },
      {
        url: 'https://www.scopus.com/authid/detail.uri?authorId=57224409660',
        name: 'Scopus Id',
      },
      {
        url: 'https://www.researchgate.net/profile/Abhilash-Pati',
        name: 'ResearchGate Id',
      },
    ],
  };
  constructor() {}

  ngOnInit(): void {}
}
