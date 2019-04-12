import {Injectable} from "@angular/core";

@Injectable({})
export class DatabaseService {

  bewaarMij: string;

  // roep bv aan met 'bewaarMij' en je krijgt de waarde van dat veld terug
  getData(soort) {
    return this[soort];
  }
  // roep bv aan met 'bewaarMij' + id en je krijgt de waarde van die lijst.element terug
  getDataList(soortLijst, id) {
    return this[soortLijst][id];
  }
}
