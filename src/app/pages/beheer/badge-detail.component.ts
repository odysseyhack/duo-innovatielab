import {Component, OnInit} from '@angular/core';
import {Badge} from "../../shared/model/badge";
import {DatabaseService} from "../../shared/service/database.service";
import {Router} from "@angular/router";

@Component({
  templateUrl: './badge-detail.component.html'
})
export class BadgeDetailComponent implements OnInit {

  badge: Badge;

  constructor(private databaseService: DatabaseService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.badge = this.databaseService.vindLijstItem('badges', this.databaseService.getOpgevraagdeBadgeNaam());
  }

  navigeerNaar(event: Event, pagina: string) {
    event.preventDefault();
    this.router.navigate([pagina]);
  }

}
