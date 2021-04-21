import { Component, OnInit } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { faAppleAlt, faBars, faTimes, faSearch, fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  faAppleAlt = faAppleAlt;
  faBars = faBars;
  faTimes = faTimes;
  faSearch = faSearch;
 
  searchdrop = false;
 
  constructor() { }
 
  ngOnInit(): void {
  }
 
dropSearch() {
  this.searchdrop = true;
}
 
closeSearch() {
  this.searchdrop = false;
}
 
// THINGS WE NEED
// - Search function
// - Router
// - Login > Profile


}
