import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { CarsComponent } from './pages/cars/cars.component';
import { CarViewComponent } from './pages/car-view/car-view.component';
import { DodajAutoComponent } from './pages/dodaj-auto/dodaj-auto.component';
import { PocetnaComponent } from './pages/pocetna/pocetna.component';
import { IzmijeniComponent } from './pages/izmijeni/izmijeni.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { LoginComponent } from './pages/login/login.component';
import { KorisniciComponent } from './pages/korisnici/korisnici.component';
import { RegistrujComponent } from './pages/registruj/registruj.component';
import { KorpaComponent } from './pages/korpa/korpa.component';

const routes: Routes = [
  {path: '', redirectTo: 'pocetna', pathMatch:'full'},
  {path:'pocetna', component: PocetnaComponent},
  {path:'car', component: CarsComponent},
  {path:'car/:id', component:CarViewComponent},
  {path:'dodaj', component:DodajAutoComponent},
  {path:'izmijeni/:id', component:IzmijeniComponent},
  {path:'kontakt', component:KontaktComponent},
  {path:'login', component:LoginComponent},
  {path:'registruj', component:RegistrujComponent},
  {path:'korisnici', component:KorisniciComponent},
  {path:'korpa', component:KorpaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
