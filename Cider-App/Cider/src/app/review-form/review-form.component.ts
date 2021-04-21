import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CiderApiService } from '../services/cider-api.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  constructor(private ciderService: CiderApiService) { }

  ngOnInit(): void {
  }

  onSubmitReview(form: NgForm) {
    this.ciderService.createReview(form.value.rating, form.value.description)
  }

}
