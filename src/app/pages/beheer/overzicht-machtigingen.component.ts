import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {DatabaseService} from '../../shared/service/database.service';
import {Authorization} from "../../shared/model/authorization";

@Component({
  templateUrl: './overzicht-machtigingen.component.html',

})
export class OverzichtMachtigingenComponent {

  machtigingen: [Authorization];

  constructor(private router: Router,
              private databaseService: DatabaseService) {
  }

  ngOnInit(): void {
    this.machtigingen = this.databaseService.getData('machtigingen');
  }

  navigeerNaar(event, pagina) {
    event.preventDefault();
    this.router.navigate([pagina]);
  }

}
