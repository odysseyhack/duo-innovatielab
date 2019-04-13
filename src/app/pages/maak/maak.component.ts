import {Component, Inject} from '@angular/core';
import {Ethereum} from '../../shared/service/ethereum';
import {Badge} from '../../shared/model/badge';
import {Router} from '@angular/router';
import {DatabaseService} from '../../shared/service/database.service';

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

  hashBadge(hash) {
    let h = 0xdeadbeef;
    for (let i = 0; i < hash.length; i++) {
      h = Math.imul(h ^ hash.charCodeAt(i), 2654435761);
    }
    let result = (h ^ h >>> 16) >>> 0;
    return result.toString();
  };

  store() {
    let that = this;
    console.log(this.badgeData);
    let hash = that.hashBadge(that.badgeData + that.badge.saltPrivate);
    console.log("Badge hash = " + hash);

    const contractAddress = this._ethereum.storeOnBlockchain(hash);
    contractAddress.then(function(result) {
      that.badge.address = result;
      that.databaseService.saveBadge(that.badge);
                                                              
      sessionStorage.setItem(result, hash);

      document.getElementById("contractAddress").innerHTML = "Contract address on blockchain: " + result;
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
