import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.scss'],
})
export class ReviewEditComponent implements OnInit {
  publications = [
    {
      publicationDetails: `Journal of Supercomputing, Springer. (SCIE and Scopus Indexed)`,
    },
    {
      publicationDetails: `International Journal of Computing and Digital Systems. (Scopus Indexed)
      `,
    },
    {
      publicationDetails: `International Journal of Intelligent Systems and Applications in Engineering.
      (Scopus Indexed)
      `,
    },
    {
      publicationDetails: `2021 INTERNATIONAL CONFERENCE ON INNOVATION AND INTELLIGENCE
      FOR INFORMATICS, COMPUTING, AND TECHNOLOGIES, 3ICT 2021 (Virtual Free Conference)`,
    },
    {
      publicationDetails: `1oth International Conference on Data Science, Technology and Applications
      (DATA 2021)
      `,
    },
    {
      publicationDetails: `3
      rd International Conference on Decision Aid Sciences and Applications (DASA
      2022)
      `,
    },
    {
      publicationDetails: `ASU International Conference in Emerging Technologies for Sustainability and
      Intelligent Systems (ICETSIS 2022)

      `,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
