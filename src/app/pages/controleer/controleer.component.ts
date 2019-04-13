import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {VerificatieAanvraag} from "../../shared/model/verificatie-aanvraag";
import {DatabaseService} from "../../shared/service/database.service";


@Component({
  templateUrl: './controleer.component.html'
})
export class ControleerComponent {

  badgeType = '';
  subType = '';
  implications = [];
  reason = '';

  constructor(private router: Router,
              private databaseService: DatabaseService) {
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

  create() {
    let request = new VerificatieAanvraag();
    request.badgeType = this.badgeType;
    request.subType = this.subType;
    request.implications = this.implications;
    request.reason = this.reason;

    this.databaseService.saveVerificatieAanvraag(request);
  }
}





