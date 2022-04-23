import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conf-attended',
  templateUrl: './conf-attended.component.html',
  styleUrls: ['./conf-attended.component.scss'],
})
export class ConfAttendedComponent implements OnInit {
  publications = [
    {
      publicationDetails: `3
      rd International Conference on Intelligent Computing and Advances in
      Communication (ICAC-2020) was held from 25th to 26th Nov. 2020 at
      Bhubaneswar, India`,
    },
    {
      publicationDetails: `1
      st Odisha International Conference on Electrical Power Engineering,
      Communication and Computing Technology (ODICON-2021), ITER, Siksha ‘O’
      Anusandhan Deemed to be University, Bhubaneswar, India, January 8-9, 2021`,
    },
    {
      publicationDetails: `2
      nd International Conference on Advances in Distributed Computing and Machine
      Learning (ICADCML-2021), ITER, Siksha ‘O’ Anusandhan Deemed to be
      University, Bhubaneswar, India, January 15-16, 2021`,
    },
    {
      publicationDetails: `2
      nd
      International Conference on Intelligent and Cloud Computing (ICICC-2021),
      ITER, Siksha ‘O’ Anusandhan Deemed to be University, Bhubaneswar, India,
      October 22-23, 2021`,
    },
    {
      publicationDetails: `2
      nd International Conference on Electronic Systems and Intelligent Computing
      (ESIC-2021), KIIT Deemed to be University, Bhubaneswar, Odisha, India, November 5-6, 2021. (Best Paper Awarded)
      `,
    },
    {
      publicationDetails: `4
      th International Conference on Intelligent Computing and Advances in
      Communication (ICAC-2021) was held from 25th to 26th Nov. 2021 at
      Bhubaneswar, India`,
    },
    {
      publicationDetails: `2
      nd International Conference on Application of Mathematics on Science and
      Engineering (AMSE 2022) was held from 24th to 26th Mar. 2022 at Bhubaneswar,
      India. (Best Paper Awarded)
      `,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
