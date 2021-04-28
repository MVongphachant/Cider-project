import { Component, OnInit } from '@angular/core';
import { Cider } from '../models/cider.model';
import { CiderApiService } from '../services/cider-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cider: Cider;

  constructor(private ciderService: CiderApiService) {}

  ciderList: any;
  feature: any;
  max: 10;
  min: 0;

  ngOnInit(): void {}

  featuredCider() {
    this.ciderService.pullCiders().subscribe((result: any) => {
      this.ciderList = result.data;
      console.log(this.ciderList);
      this.feature = this.ciderList[Math.floor(Math.random() * this.max)];
      console.log(this.feature);
    });
  }
}
