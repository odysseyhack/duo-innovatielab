import {Component, Inject} from '@angular/core';
import {Ethereum} from "../../shared/service/ethereum";
import {Badge} from '../../shared/model/badge';

@Component({
  templateUrl: './maak.component.html'
})
export class MaakComponent {
  badge = new Badge();

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

  makeId(length) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
