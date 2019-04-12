import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndividuLoginComponent} from "./pages/individu/individu.login.component";
import {InstellingLoginComponent} from "./pages/instelling/instelling.login.component";
import {LoginComponent} from "./pages/login.component";

const routes: Routes = [
  {path: 'login-individu', component: IndividuLoginComponent},
  {path: 'login-instelling', component: InstellingLoginComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
