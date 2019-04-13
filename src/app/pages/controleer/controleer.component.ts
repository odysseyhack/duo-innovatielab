import {Component, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {Request} from '../../shared/model/request';
import {DatabaseService} from '../../shared/service/database.service';
import {Ethereum} from '../../shared/service/ethereum';

@Component({
  templateUrl: './controleer.component.html'
})
export class ControleerComponent {

  badgeType = '';
  subType = '';
  implications = [];
  reason = '';
  jsonData = '';
  contractAddress = '';
  private _ethereum: any;

  constructor(private router: Router,
              private databaseService: DatabaseService,
              @Inject(Ethereum) private ethereum: Ethereum) {
    this._ethereum = ethereum;
  }

  navigeerNaar(event, pagina) {
    event.preventDefault();
    this.router.navigate([pagina]);
  }

  setRequestBadge(event: Event) {
    this.badgeType = (event.target as HTMLInputElement).value;
  }

  setRequestRedenNationaliteit(event: Event) {
    this.reason = (event.target as HTMLInputElement).value;
  }

  setImplications(event: Event) {
    console.log((event.target as HTMLInputElement).value);
    this.implications.push((event.target as HTMLInputElement).value);
  }

  setJsonData(event: Event) {
    this.jsonData = (event.target as HTMLTextAreaElement).value;
  }

  create() {
    let request = new Request();
    request.badgeType = this.badgeType;
    request.subType = this.subType;
    request.implications = this.implications;
    request.reason = this.reason;
    request.jsonData = this.jsonData;

    let key = "secret123";
    let hash = this.hashBadge(this.jsonData + key);

    let verificationResult = this._ethereum.verifyOnBlockchain(this.contractAddress, hash);
    console.log("Verification result = " + verificationResult);

    verificationResult.then((receipt) => {
      console.log(receipt);
    });

    this.databaseService.saveRequest(request);
  }

  hashBadge(hash) {
      let h = 0xdeadbeef;
      for (let i = 0; i < hash.length; i++) {
        h = Math.imul(h ^ hash.charCodeAt(i), 2654435761);
      }
      let result = (h ^ h >>> 16) >>> 0;
      return result.toString();
    };


}





