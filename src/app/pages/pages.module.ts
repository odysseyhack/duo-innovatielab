import {NgModule} from '@angular/core';
import {IndividuLoginComponent} from "./individu/individu.login.component";
import {LoginComponent} from "./login.component";
import {InstellingCreateBadgeComponent} from './instelling/instelling.create_badge.component';
import {FormsModule} from '@angular/forms';

import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    IndividuLoginComponent,
    LoginComponent,
    InstellingCreateBadgeComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  providers: []
})
export class PagesModule {
}
