import {Component} from '@angular/core';
import {Ethereum} from "../../shared/service/ethereum";

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

  create() {
    this.badgeData = JSON.stringify(this.badge);
  }

  store() {
    console.log(this.badgeData);
    let eth = new Ethereum();
    eth.storeOnBlockchain();
  }
}
