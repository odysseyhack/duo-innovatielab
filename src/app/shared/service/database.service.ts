import {Injectable} from "@angular/core";
import {Machtiging} from "../model/machtiging";
import {Badge} from "../model/badge";


declare let require: any;

const badges = require('../../../assets/json/badges.json');

@Injectable({providedIn: 'root'})
export class DatabaseService {

  badges: [Badge] = badges;

  machtingen: [Machtiging];

  getData(soort) {
    return this[soort];
  }

  getDataListItem(soortLijst, id) {
    return this[soortLijst][id];
  }

  saveBadge(badge: Badge) {
    this.badges.push(badge);
  }
}
