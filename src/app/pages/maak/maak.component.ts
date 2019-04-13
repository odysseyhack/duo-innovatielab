import {Component} from '@angular/core';
import {Ethereum} from "../../shared/service/ethereum";
import {Router} from "@angular/router";

@Component({
  templateUrl: './maak.component.html'
})
export class MaakComponent {
  badge = {
    type: 0,
    firstname: 'John',
    lastname: 'Doe'
  };

  badgeData = '';

  constructor (private router: Router) {}

  create() {
    this.badgeData = JSON.stringify(this.badge);
  }

  store() {
    console.log(this.badgeData);
    let eth = new Ethereum();
    eth.storeOnBlockchain();
  }

  navigeerNaar(event, pagina) {
    event.preventDefault();
    this.router.navigate([pagina]);
  }
}
