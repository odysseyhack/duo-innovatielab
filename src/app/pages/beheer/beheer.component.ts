import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  templateUrl: './beheer.component.html'
})
export class BeheerComponent {

  constructor (private router: Router) {}

  gaNaarPagina(event, vervolgPagina) {
    // event.preventDefault();
    if (vervolgPagina === 1) {
      this.router.navigate(['overzicht-badges']);
    } else if (vervolgPagina === 2) {
      this.router.navigate(['overzicht-machtigingen']);
    } else if (vervolgPagina === 3) {
      this.router.navigate(['controle-aanvraag-afhandelen']);
    } else if (vervolgPagina === 4) {
      this.router.navigate(['machtiging-aanvraag-afhandelen']);
    }
  }
}
