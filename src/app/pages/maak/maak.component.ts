import {Component} from '@angular/core';

@Component({
  templateUrl: './maak.component.html'
})
export class MaakComponent {
  badge = {
    type: 0,
    firstname: 'John',
    lastname: 'Doe'
  };

  badgeData = '';

  create() {
    this.badgeData = JSON.stringify(this.badge);
  }

  store() {
    console.log(this.badgeData);
  }
}
