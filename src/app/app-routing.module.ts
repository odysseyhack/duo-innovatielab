import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BeheerComponent} from "./pages/beheer/beheer.component";
import {ControleerComponent} from "./pages/controleer/controleer.component";
import {MaakComponent} from "./pages/maak/maak.component";
import {StartComponent} from "./pages/start.component";
import {ControleAanvraagAfhandelenComponent} from "./pages/beheer/controle-aanvraag-afhandelen.component";
import {OverzichtBadgesComponent} from "./pages/beheer/overzicht-badges.component";
import {OverzichtMachtigingenComponent} from "./pages/beheer/overzicht-machtigingen.component";
import {BadgeDetailComponent} from "./pages/beheer/badge-detail.component";

const routes: Routes = [
  {path: 'maak', component: MaakComponent},
  {path: 'beheer', component: BeheerComponent},
  {path: 'controleer', component: ControleerComponent},
  {path: 'controle-aanvraag-afhandelen', component: ControleAanvraagAfhandelenComponent},
  {path: 'overzicht-badges', component: OverzichtBadgesComponent},
  {path: 'overzicht-machtigingen', component: OverzichtMachtigingenComponent},
  {path: 'badge-detail', component: BadgeDetailComponent},
  {path: '', component: StartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
