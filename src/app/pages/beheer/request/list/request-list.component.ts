import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatabaseService} from '../../../../shared/service/database.service';
import {Request} from '../../../../shared/model/request';

@Component({
  templateUrl: './request-list.component.html'
})
export class RequestListComponent implements OnInit {
  private requests: [Request];

  constructor(private router: Router, private databaseService: DatabaseService) {
  }

  ngOnInit(): void {
    this.requests = this.databaseService.getRequests();
  }

  navigeerNaar(event, pagina) {
    event.preventDefault();
    this.router.navigate([pagina]);
  }
}
