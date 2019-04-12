import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './start.component.html'
})
export class StartComponent {

  constructor (private router: Router) {}

  login(event, typeGebruiker) {
    // event.preventDefault();
    if (typeGebruiker === 1) {
      this.router.navigate(['maak']);
    } else if (typeGebruiker === 2) {
      this.router.navigate(['beheer']);
    } else if (typeGebruiker === 3) {
      this.router.navigate(['controleer']);
    }
  }

}
