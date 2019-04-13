import {Injectable} from "@angular/core";
import {Machtiging} from "../model/machtiging";
import {Badge} from "../model/badge";
import {VerificatieAanvraag} from "../model/verificatie-aanvraag";

declare let require: any;

const badges = require('../../../assets/json/badges.json');
const machtigingen = require('../../../assets/json/machtigingen.json');
const verificatieAanvragen = require('../../../assets/json/verificatie-aanvragen.json');

@Injectable({providedIn: 'root'})
export class DatabaseService {

  badges: [Badge] = badges;
  machtigingen: [Machtiging] = machtigingen;
  verificatieAanvragen: [VerificatieAanvraag] = verificatieAanvragen;

  getData(soort) {
    return this[soort];
  }

  getDataListItem(soortLijst, id) {
    return this[soortLijst][id];
  }

  saveBadge(badge: Badge) {
    this.badges.push(badge);
  }

  saveMachtiging(machtiging: Machtiging) {
    this.machtigingen.push(machtiging);
  }

  saveVerificatieAanvraag(verificatieAanvraag: VerificatieAanvraag) {
    this.verificatieAanvragen.push(verificatieAanvraag);
  }
}
