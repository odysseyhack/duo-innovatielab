import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BeheerComponent} from './pages/beheer/beheer.component';
import {ControleerComponent} from './pages/controleer/controleer.component';
import {MaakComponent} from './pages/maak/maak.component';
import {StartComponent} from './pages/start.component';
import {OverzichtBadgesComponent} from './pages/beheer/overzicht-badges.component';
import {OverzichtMachtigingenComponent} from './pages/beheer/overzicht-machtigingen.component';
import {RequestListComponent} from './pages/beheer/request/list/request-list.component';
import {RequestDetailComponent} from './pages/beheer/request/detail/request-detail.component';
import {BadgeDetailComponent} from './pages/beheer/badge-detail.component';

const routes: Routes = [
  {path: 'maak', component: MaakComponent},
  {path: 'beheer', component: BeheerComponent},
  {path: 'controleer', component: ControleerComponent},
  {path: 'requests', component: RequestListComponent},
  {path: 'requests/:id', component: RequestDetailComponent},
  {path: 'overzicht-badges', component: OverzichtBadgesComponent},
  {path: 'overzicht-authorizations', component: OverzichtMachtigingenComponent},
  {path: 'badge-detail', component: BadgeDetailComponent},
  {path: '', component: StartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
