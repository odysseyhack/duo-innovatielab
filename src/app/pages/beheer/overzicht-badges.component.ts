import {Component, OnInit} from '@angular/core';
import {Badge} from "../../shared/model/badge";
import {DatabaseService} from "../../shared/service/database.service";

@Component({
  templateUrl: './overzicht-badges.component.html'
})
export class OverzichtBadgesComponent implements OnInit {

  badges: [Badge];

  constructor(private databaseService: DatabaseService) {
  }

  ngOnInit(): void {
    this.badges = this.databaseService.getData('badges');

  }

}
