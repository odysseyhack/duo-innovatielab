import {Component, OnInit} from '@angular/core';
import {Badge} from "../../shared/model/badge";
import {DatabaseService} from "../../shared/service/database.service";
import {Router} from "@angular/router";
import {Request} from '../../shared/model/request';
import {Authorization} from "../../shared/model/authorization";

@Component({
  templateUrl: './badge-detail.component.html'
})
export class BadgeDetailComponent implements OnInit {

  badge: Badge;
  requests: Request[];
  authorizations: Authorization[];

  constructor(private databaseService: DatabaseService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.badge = this.databaseService.vindLijstItem('badges', this.databaseService.getOpgevraagdeBadgeId());
    this.requests = this.databaseService.getRequestsForBadge(this.badge.id);
    this.authorizations = this.databaseService.getAuthorizationsForBadge(this.badge.id);
  }

  navigeerNaar(event: Event, pagina: string) {
    event.preventDefault();
    this.router.navigate([pagina]);
  }

  refuseRequest(request){
    request.status = 'refused';
    this.databaseService.saveRequests(this.requests);
  }

  acceptRequest(request) {
    request.status = 'accepted';
    this.databaseService.saveRequests(this.requests);
  }

  refuseAuth(auth){
    auth.status = 'refused';
    this.databaseService.saveAuthorizations(this.authorizations);
  }

  acceptAuth(auth) {
    auth.status = 'accepted';
    this.databaseService.saveAuthorizations(this.authorizations);
  }

}
