import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'app-cars',
  templateUrl: './cars.component.html'
})
export class CarsComponent implements OnInit {

  public cars$: Observable<Car[]>;
  public cars: Car[];

  public cars_vlasnistvo: Car[];
  carPrice: string = "";
  user: User = {};
  car: Car;
  constructor(private http: HttpClient, private _store: Store<CarState>, private userService: UserService, private car_service: CarService, private _router: Router) {
    this.user = this.userService.prijavljen;
    this.cars$ = this._store.pipe(select(selectedCars));
    this.cars$.subscribe(val => {
      this.cars = JSON.parse(JSON.stringify(val));
    })

    this.user = this.userService.prijavljen;

    this.cars = [...this.cars];
  }

  obrisi(id: number) {
    if (window.confirm('Jeste li sigurni da zelite da obrisete auto?')) {
      this.cars$ = this._store.pipe(select(selectedCars));
      this.cars$.subscribe(val => {
        this.cars = JSON.parse(JSON.stringify(val));
        this.car_service.deleteCar(id).subscribe(() => {
          this.cars.forEach((curr, i) => {
            if (id === curr.id) {
              this.cars.splice(i, 1);
            }
          });
        });
      })
    }
  }

  kupi(carr: Car, user: User) {
    this.car = carr;
    this.car.vlasnistvo = user.id
    this._router.events.subscribe(val => {
      this.car_service.updateCar(this.car).subscribe((car) => {
        this.cars.forEach((element, index) => {
          if (element.id === car.id) {
            this.cars[index] = car;


          }
        });
      });
    });
    this._router.navigate(['/pocetna']);
  }

  ngOnInit() {
    this.cars = [...this.cars];
    this._store.dispatch(new GetCars());
  }
}
