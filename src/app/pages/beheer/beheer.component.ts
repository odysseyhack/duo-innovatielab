import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: './beheer.component.html',

})
export class BeheerComponent {

  constructor(private router: Router) {
  }

  navigeerNaar(event, pagina) {
    event.preventDefault();
    this.router.navigate([pagina]);
  }
}
