import {Component, Inject} from '@angular/core';
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

  private _ethereum: any;

  constructor(@Inject(Ethereum) private ethereum: Ethereum) {
    this._ethereum = ethereum;
  }

  create() {
    this.badgeData = JSON.stringify(this.badge);
  }

  store() {
    console.log(this.badgeData);
    this._ethereum.storeOnBlockchain();
  }
}
