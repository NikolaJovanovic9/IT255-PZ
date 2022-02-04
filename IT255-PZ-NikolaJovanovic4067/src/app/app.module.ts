import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarEffect } from './store/effects/car.effects';
import { StoreModule } from '@ngrx/store';
import { CarService } from './services/car.service';
import { CarsComponent } from './pages/cars/cars.component';
import { CarViewComponent } from './pages/car-view/car-view.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { PocetnaComponent } from './pages/pocetna/pocetna.component';
import { DodajAutoComponent } from './pages/dodaj-auto/dodaj-auto.component';
import { KorisniciComponent } from './pages/korisnici/korisnici.component';
import { RegistrujComponent } from './pages/registruj/registruj.component';
import { LoginComponent } from './pages/login/login.component';
import { IzmijeniComponent } from './pages/izmijeni/izmijeni.component';
import { KontaktComponent } from './pages/kontakt/kontakt.component';
import { UserService } from './services/user.service';
import { UserEffect } from './store/effects/user.effects';
import { reducers } from './store/reducers/index';
import { FilterByUserPrice } from './pages/cars/carFilter';
import { KorpaComponent } from './pages/korpa/korpa.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarViewComponent,
    HeaderComponent,
    FooterComponent,
    PocetnaComponent,
    DodajAutoComponent,
    KorisniciComponent,
    RegistrujComponent,
    LoginComponent,
    IzmijeniComponent,
    KontaktComponent,
    FilterByUserPrice,
    KorpaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([UserEffect, CarEffect]),
    StoreModule.forRoot(reducers)
  ],
  providers: [HttpClientModule, CarService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
