import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  templateUrl: './overzicht-machtigingen.component.html'
})
export class OverzichtMachtigingenComponent {

  constructor (private router: Router) {}

  navigeerNaar(event, pagina) {
    event.preventDefault();
    this.router.navigate([pagina]);
  }

}
