import {Injectable} from '@angular/core';
import {Machtiging} from '../model/machtiging';
import {Badge} from '../model/badge';
import {Request} from '../model/request';

declare let require: any;

const badges = require('../../../assets/json/badges.json');
const machtigingen = require('../../../assets/json/machtigingen.json');
const verificatieAanvragen = require('../../../assets/json/requests.json');

@Injectable({providedIn: 'root'})
export class DatabaseService {

  badges: [Badge] = badges;
  machtigingen: [Machtiging] = machtigingen;
  requests: [Request] = verificatieAanvragen;

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

  saveRequest(verificatieAanvraag: Request) {
    this.requests.push(verificatieAanvraag);
  }

  getRequests() {
    return this.requests;
  }

  getRequest(id: number) {
    const requests = this.getRequests();

    for (const request of requests) {
      if (request.id === id) {
        return request;
      }
    }

    return null;
  }
}
