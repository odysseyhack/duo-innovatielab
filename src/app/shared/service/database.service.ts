import {Injectable} from '@angular/core';
import {Badge} from '../model/badge';
import {Request} from '../model/request';
import {Authorization} from "../model/authorization";

declare let require: any;

const badges = require('../../../assets/json/badges.json');
const authorizations = require('../../../assets/json/authorizations.json');
const requests = require('../../../assets/json/requests.json');

@Injectable({providedIn: 'root'})
export class DatabaseService {

  badgeId: number;

  badges: Badge[] = badges;
  authorizations: Authorization[] = authorizations;
  requests: Request[] = requests;

  getData(soort) {
    return this[soort];
  }

  getDataListItem(soortLijst, id) {
    return this[soortLijst][id];
  }

  getRequestsForBadge(id: number): any[]{
    let results = [];
    for (let i = 0; i < this.requests.length; i++){
      if (this.requests[i].badgeId === id) {
        results.push(this.requests[i]);
      }
    }
    return results;
  }

  getAuthorizationsForBadge(id: number): any[]{
    let results = [];
    for (let i = 0; i < this.authorizations.length; i++){
      if (this.authorizations[i].badgeId === id) {
        results.push(this.authorizations[i]);
      }
    }
    return results;
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

  saveMachtiging(authorization: Authorization) {
    this.authorizations.push(authorization);
  }

  saveAuthorizations(authorizations: Authorization[]) {
    this.authorizations = authorizations;
  }

  saveRequest(verificatieAanvraag: Request) {
    this.requests.push(verificatieAanvraag);
  }

  saveRequests(requests: Request[]) {
    this.requests = requests;
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

  getOpgevraagdeBadgeId() {
    return this.badgeId;
  }

  setOpgevraagdeBadgeId(id: number) {
    this.badgeId = id;
  }
}
