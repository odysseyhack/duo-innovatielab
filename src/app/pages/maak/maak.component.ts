import {Component, Inject} from '@angular/core';
import {Ethereum} from "../../shared/service/ethereum";
import {Badge} from "../../shared/model/badge";
import {Router} from "@angular/router";
import {DatabaseService} from "../../shared/service/database.service";

@Component({
  templateUrl: './maak.component.html'
})
export class MaakComponent {
  badge = new Badge();
  salt = '';

  badgeData = '';
  private _ethereum: any;

  constructor(private router: Router,
              private databaseService: DatabaseService,
              @Inject(Ethereum) private ethereum: Ethereum) {
    this.salt = this.makeId(10);
    this._ethereum = ethereum;
  }
  create() {
    this.badgeData = JSON.stringify(this.badge);
  }

  store() {
    console.log(this.badgeData);
    this.databaseService.saveBadge(this.badge);
    const contractAddress = this._ethereum.storeOnBlockchain(this.makeId(32));
    contractAddress.then(function(result) {
      alert(result);
    });

  }

  makeId(length) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  navigeerNaar(event, pagina) {
    event.preventDefault();
    this.router.navigate([pagina]);
  }
}
