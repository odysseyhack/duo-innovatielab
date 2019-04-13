import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  templateUrl: './controle-aanvraag-afhandelen.component.html'
})
export class ControleAanvraagAfhandelenComponent {


  constructor (private router: Router) {}

  navigeerNaar(event, pagina) {
    event.preventDefault();
    this.router.navigate([pagina]);
  }
}
