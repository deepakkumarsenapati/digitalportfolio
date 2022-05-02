import { MembershipService } from './../../services/membership.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss'],
})
export class MembershipComponent implements OnInit {
  memberships: any;

  constructor(private membershipService: MembershipService) {}

  ngOnInit(): void {
    this.membershipService.getMembership().subscribe((resp) => {
      this.memberships = resp;
    });
  }
}
