import {NgModule} from '@angular/core';
import {ControleerComponent} from "./controleer/controleer.component";
import {BeheerComponent} from "./beheer/beheer.component";
import {MaakComponent} from "./maak/maak.component";
import {StartComponent} from "./start.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    BeheerComponent,
    MaakComponent,
    ControleerComponent,
    StartComponent
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
