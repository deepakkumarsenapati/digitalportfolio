import { ReviewEditService } from './../../services/review-edit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.scss'],
})
export class ReviewEditComponent implements OnInit {
  editBoards: any;

  constructor(private editBoardService: ReviewEditService) {}

  ngOnInit(): void {
    this.editBoardService.getReviewEdit().subscribe((resp) => {
      this.editBoards = resp;
    });
  }
}
