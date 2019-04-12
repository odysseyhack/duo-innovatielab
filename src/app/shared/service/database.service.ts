import {Injectable} from "@angular/core";
import {Machtiging, Periode} from "../model/machtiging";

@Injectable({providedIn: 'root'})
export class DatabaseService {

  constructor() {
    for(let i = 0; i < 10; i++) {
      let machtiging: Machtiging = new Machtiging();
      machtiging.instelling = 'naamInstelling' + i;

      let periode: Periode = new Periode();
      periode.van = '01-01-2020';
      periode.tot = '02-01-2020';
      machtiging.periode = periode;
      machtiging.titel = 'titel' + i;

      this.machtingen.push(machtiging);
    }
  }

  machtingen: [Machtiging];

  getData(soort) {
    return this[soort];
  }

  getDataListItem(soortLijst, id) {
    return this[soortLijst][id];
  }
}
