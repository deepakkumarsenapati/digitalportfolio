import { PublicationsService } from './../../services/publications.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
})
export class PublicationsComponent implements OnInit {
  publications: any;

  constructor(private publicationService: PublicationsService) {}

  ngOnInit(): void {
    this.publicationService.getPublication().subscribe((resp) => {
      this.publications = resp;
    });
  }
}
