import { Component, OnInit } from '@angular/core';
import { CiderApiService } from './services/cider-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private ciderService: CiderApiService) {}

  ngOnInit() {
    this.ciderService.fetchCiders()
  }

}
