import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactInfo: any;
  constructor(private contactService: ContactService) {}
  ngOnInit(): void {
    this.contactService.getContact().subscribe((resp) => {
      this.contactInfo = resp;
    });
  }
}
