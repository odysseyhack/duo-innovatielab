import {Component} from '@angular/core';
import {Badge} from '../../shared/model/badge';

@Component({
  templateUrl: './maak.component.html'
})
export class MaakComponent {
  badge = new Badge();

  badgeData = '';

  create() {
    this.badgeData = JSON.stringify(this.badge);
  }

  store() {
    console.log(this.badgeData);
  }

  makeId(length) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
