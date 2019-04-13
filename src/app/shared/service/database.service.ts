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

  badgeId: string;

  badges: [Badge] = badges;
  machtigingen: [Machtiging] = machtigingen;
  verificatieAanvragen: [VerificatieAanvraag] = verificatieAanvragen;

  getData(soort) {
    return this[soort];
  }

  getDataListItem(soortLijst, id) {
    return this[soortLijst][id];
  }

  vindLijstItem(soort, id){
    for (let i = 0; i < this[soort].length; i++){
      if (this[soort][i].id === id) {
        return this[soort][i];
      }
    }
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

  getOpgevraagdeBadgeNaam() {
    return this.badgeId;
  }

  setOpgevraagdeBadgeNaam(id: string) {
    this.badgeId = id;
  }
}
