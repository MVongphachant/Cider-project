import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CiderApiService {

  constructor(private http: HttpClient) { }

  fetchCiders() {
    this.http.get('http://localhost:3000/api/ciders')
      .subscribe(cidersData => {
        console.log(cidersData)
      })
  }

  pullCiders() {
    return this.http.get('http://localhost:3000/api/ciders')
      }

  // searchCiders(userSearch) {
  //   return this.pullCiders.userSearch
  // }

  createReview(rating: number, description: string) {
    this.http.post('http://localhost:3000/api/ciders/post/review/' + '606cfa10c82fa530dc1f687e', {
      rating: rating,
      description: description,
    })
    .subscribe(reviewData => {
      console.log(reviewData)
    })
  }

}
