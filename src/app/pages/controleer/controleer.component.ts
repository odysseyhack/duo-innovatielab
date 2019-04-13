import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  templateUrl: './controleer.component.html'
})
export class ControleerComponent {


  constructor (private router: Router) {}

  navigeerNaar(event, pagina) {
    event.preventDefault();
    this.router.navigate([pagina]);
  }
}
