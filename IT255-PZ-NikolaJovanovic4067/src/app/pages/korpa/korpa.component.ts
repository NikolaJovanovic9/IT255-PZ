import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Car } from 'src/app/interfaces/car';
import { User } from 'src/app/interfaces/user';
import { CarService } from 'src/app/services/car.service';
import { UserService } from 'src/app/services/user.service';
import { GetCars } from 'src/app/store/actions/car.action';
import { selectedCars } from 'src/app/store/selector/car.selector';
import { CarState } from 'src/app/store/state/car.state';

@Component({
  selector: 'app-korpa',
  templateUrl: './korpa.component.html'
})
export class KorpaComponent implements OnInit {

  public cars$: Observable<Car[]>;
  public cars: Car[];
  public cars_vlasnistvo: Car[];
  carPrice: string = "";
  user: User = {};
  constructor(private _store: Store<CarState>, private userService: UserService, private car_service: CarService, private _router: Router) {
    this.user = this.userService.prijavljen;
    this.car_service.cars$ = this._store.pipe(select(selectedCars));
    this.car_service.cars$.subscribe(val => {
      this.cars = JSON.parse(JSON.stringify(val));
    })
    this.cars_vlasnistvo = this.cars.filter(item => item.vlasnistvo == this.user.id);
  }

  ngOnInit() {
    this._store.dispatch(new GetCars());
  }

}