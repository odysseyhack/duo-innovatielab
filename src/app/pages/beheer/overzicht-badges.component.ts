import { Component } from '@angular/core';
import {Badge} from "../../shared/model/badge";

declare let require: any;

const badges = require('../../../assets/json/badges.json');

@Component({
  templateUrl: './overzicht-badges.component.html'
})
export class OverzichtBadgesComponent {

  badges: [Badge] = badges;

}
