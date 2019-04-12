import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndividuLoginComponent} from "./pages/individu/individu.login.component";
import {InstellingCreateBadgeComponent} from "./pages/instelling/instelling.create_badge.component";
import {LoginComponent} from "./pages/login.component";

const routes: Routes = [
  {path: 'login-individu', component: IndividuLoginComponent},
  {path: 'create-badge', component: InstellingCreateBadgeComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
