import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BeheerComponent} from "./pages/beheer/beheer.component";
import {ControleerComponent} from "./pages/controleer/controleer.component";
import {MaakComponent} from "./pages/maak/maak.component";
import {StartComponent} from "./pages/start.component";

const routes: Routes = [
  {path: 'maak', component: MaakComponent},
  {path: 'beheer', component: BeheerComponent},
  {path: 'controleer', component: ControleerComponent},
  {path: '', component: StartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
