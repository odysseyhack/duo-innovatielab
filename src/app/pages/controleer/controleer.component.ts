import { Component } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  templateUrl: './controleer.component.html'
})
export class ControleerComponent {

  type = '';
  nationalityType='';
  diplomaType='';
  implications= [];

  redenNationaliteit = '';
  redenDiploma = '';

  setRequestBadge(event: Event) {
    this.type = event.target.value;

    }

  setRequestRedenNationaliteit(event: Event) {
    this.redenNationaliteit = event.target.value;

  }
  setRequestRedenDiploma(event: Event) {
    console.log(event.target.value);
    this.redenDiploma = event.target.value;
  }

  setImplications(event: Event) {
    console.log(event.target.value);
    this.implications.push(event.target.value);
  }




  constructor (private router: Router) {}

  navigeerNaar(event, pagina) {
    event.preventDefault();
    this.router.navigate([pagina]);
  }
}





