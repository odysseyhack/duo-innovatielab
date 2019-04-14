import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Request} from '../../../../shared/model/request';
import {DatabaseService} from '../../../../shared/service/database.service';

@Component({
  templateUrl: './request-detail.component.html'
})
export class RequestDetailComponent implements OnInit{
  private request: Request;

  constructor(private route: ActivatedRoute, private dbService: DatabaseService) {
  }

  ngOnInit() {
    this.request = this.dbService.getRequest(Number(this.route.snapshot.paramMap.get('id')));
  }

}
