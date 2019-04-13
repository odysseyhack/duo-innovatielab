import {NgModule} from '@angular/core';
import {ControleerComponent} from "./controleer/controleer.component";
import {BeheerComponent} from "./beheer/beheer.component";
import {MaakComponent} from "./maak/maak.component";
import {StartComponent} from "./start.component";
import {ControleAanvraagAfhandelenComponent} from "./beheer/controle-aanvraag-afhandelen.component";
import {OverzichtBadgesComponent} from "./beheer/overzicht-badges.component";
import {OverzichtMachtigingenComponent} from "./beheer/overzicht-machtigingen.component";
import {MachtigingAanvraagAfhandelenComponent} from "./beheer/machtiging-aanvraag-afhandelen.component";

@NgModule({
  declarations: [
    BeheerComponent,
    MaakComponent,
    ControleerComponent,
    StartComponent,
    MachtigingAanvraagAfhandelenComponent,
    ControleAanvraagAfhandelenComponent,
    OverzichtBadgesComponent,
    OverzichtMachtigingenComponent
  ],
  imports: [],
  providers: []
})
export class PagesModule {
}
