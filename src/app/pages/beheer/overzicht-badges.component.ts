import {Component, OnInit} from '@angular/core';
import {Badge} from '../../shared/model/badge';
import {DatabaseService} from '../../shared/service/database.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './overzicht-badges.component.html'
})
export class OverzichtBadgesComponent implements OnInit {

  badges: [Badge];

  constructor(private databaseService: DatabaseService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.badges = this.databaseService.getData('badges');
  }

  navigeerNaar(event: Event, pagina: string) {
    event.preventDefault();
    this.router.navigate([pagina]);
  }

  slaIdOp(id: string) {
    this.databaseService.setOpgevraagdeBadgeId(Number(id));
    this.router.navigate(['badge-detail']);
  }

}
