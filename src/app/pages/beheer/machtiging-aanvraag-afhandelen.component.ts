import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  templateUrl: './machtiging-aanvraag-afhandelen.component.html'
})
export class MachtigingAanvraagAfhandelenComponent {


  constructor (private router: Router) {}

  navigeerNaar(event, pagina) {
    event.preventDefault();
    this.router.navigate([pagina]);
  }
}
