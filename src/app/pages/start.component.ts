import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './start.component.html'
})
export class StartComponent {

  constructor(private router: Router) {
  }

  gaNaarPagina(event, vervolgPagina) {
    // event.preventDefault();
    if (vervolgPagina === 1) {
      this.router.navigate(['maak']);
    } else if (vervolgPagina === 2) {
      this.router.navigate(['beheer']);
    } else if (vervolgPagina === 3) {
      this.router.navigate(['controleer']);
    }
  }

}
