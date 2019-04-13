import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Machtiging} from "../../shared/model/machtiging";
import {DatabaseService} from "../../shared/service/database.service";

@Component({
  templateUrl: './overzicht-machtigingen.component.html'
})
export class OverzichtMachtigingenComponent {

  machtigingen: [Machtiging];

  constructor (private router: Router,
               private databaseService: DatabaseService) {}

  ngOnInit(): void {
    this.machtigingen = this.databaseService.getData('machtigingen');
  }

  navigeerNaar(event, pagina) {
    event.preventDefault();
    this.router.navigate([pagina]);
  }

}
