import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss'],
})
export class MembershipComponent implements OnInit {
  publications = [
    {
      publicationDetails: `Student Member, Institute of Electrical and Electronics Engineers (IEEE).
      `,
    },
    {
      publicationDetails: `Member, International Association of Engineers (IAENG)
      `,
    },
    {
      publicationDetails: `Member, Universal Scientific Education and Research Network (USERN)
      `,
    },
    {
      publicationDetails: `Member, Bharati Vidyapeeth's Institute of. Computer Applications and
      Management (BVICAM)`,
    },
    {
      publicationDetails: `Member, Computer Science Teachers Association (CSTA)
      `,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
