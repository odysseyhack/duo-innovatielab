import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor (private router: Router) {}

  login(event, typeGebruiker) {
    // event.preventDefault();
    if (typeGebruiker === 1) {
      this.router.navigate(['login-individu']);
    }
    if (typeGebruiker === 2) {
      this.router.navigate(['login-instelling']);
    }
  }

}
