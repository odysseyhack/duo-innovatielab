import {NgModule} from '@angular/core';
import {ControleerComponent} from "./controleer/controleer.component";
import {BeheerComponent} from "./beheer/beheer.component";
import {MaakComponent} from "./maak/maak.component";
import {StartComponent} from "./start.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ControleAanvraagAfhandelenComponent} from "./beheer/controle-aanvraag-afhandelen.component";
import {OverzichtBadgesComponent} from "./beheer/overzicht-badges.component";
import {OverzichtMachtigingenComponent} from "./beheer/overzicht-machtigingen.component";

@NgModule({
  declarations: [
    BeheerComponent,
    MaakComponent,
    ControleerComponent,
    StartComponent,
    ControleAanvraagAfhandelenComponent,
    OverzichtBadgesComponent,
    OverzichtMachtigingenComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: []
})
export class PagesModule {
}
