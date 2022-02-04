import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/interfaces/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-view',
  templateUrl: './car-view.component.html'
})
export class CarViewComponent implements OnInit {

  allCar: Object

  public car: Car;
  public cars: Car[];
  constructor(private _route: ActivatedRoute, private car_service: CarService) {

    this.car_service.cars$.subscribe(val => {
      this._route.params.subscribe(params => {
        this.car = <Car>JSON.parse(JSON.stringify(val.find(x => x.id == params['id'])));
      })
    });
  }

  ngOnInit(): void {
  }

}
