import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: './instelling.create_badge.component.html'
})
export class InstellingCreateBadgeComponent {
  badgeType: 0;

  constructor (private router: Router) {}

}
