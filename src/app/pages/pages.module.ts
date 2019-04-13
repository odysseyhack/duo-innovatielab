import {NgModule} from '@angular/core';
import {ControleerComponent} from './controleer/controleer.component';
import {BeheerComponent} from './beheer/beheer.component';
import {MaakComponent} from './maak/maak.component';
import {StartComponent} from './start.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {OverzichtBadgesComponent} from './beheer/overzicht-badges.component';
import {OverzichtMachtigingenComponent} from './beheer/overzicht-machtigingen.component';
import {RequestDetailComponent} from './beheer/request/detail/request-detail.component';
import {RequestListComponent} from './beheer/request/list/request-list.component';
import {BadgeDetailComponent} from './beheer/badge-detail.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    BeheerComponent,
    MaakComponent,
    ControleerComponent,
    StartComponent,
    OverzichtBadgesComponent,
    OverzichtMachtigingenComponent,

    RequestDetailComponent,
    RequestListComponent,
    BadgeDetailComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule
  ],
  providers: []
})
export class PagesModule {
}
