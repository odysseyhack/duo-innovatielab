import {NgModule} from '@angular/core';
import {IndividuLoginComponent} from "./individu/individu.login.component";
import {InstellingLoginComponent} from "./instelling/instelling.login.component";
import {LoginComponent} from "./login.component";

@NgModule({
  declarations: [
    IndividuLoginComponent,
    InstellingLoginComponent,
    LoginComponent
  ],
  imports: [],
  providers: []
})
export class PagesModule {
}
