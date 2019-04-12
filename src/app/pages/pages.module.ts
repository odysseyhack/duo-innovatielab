import {NgModule} from '@angular/core';
import {ControleerComponent} from "./controleer/controleer.component";
import {BeheerComponent} from "./beheer/beheer.component";
import {MaakComponent} from "./maak/maak.component";
import {StartComponent} from "./start.component";

@NgModule({
  declarations: [
    BeheerComponent,
    MaakComponent,
    ControleerComponent,
    StartComponent
  ],
  imports: [],
  providers: []
})
export class PagesModule {
}
