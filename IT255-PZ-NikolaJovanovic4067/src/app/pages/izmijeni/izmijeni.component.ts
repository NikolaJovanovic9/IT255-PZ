import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/interfaces/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-izmijeni',
  templateUrl: './izmijeni.component.html'
})
export class IzmijeniComponent implements OnInit {

  car: Car = {
    id: 0,
    marka: '',
    model: '',
    cijena: 0,
    godiste: 0,
    karoserija: '',
    gorivo: '',
    lokacija: '',
    vlasnistvo: 0
  };


  public cars: Car[];
  public carrr: Car;
  constructor(private _route: ActivatedRoute, private car_service: CarService, private router: Router) {
    this.car_service.cars$.subscribe(val => {
      this._route.params.subscribe(params => {
        this.carrr = <Car>JSON.parse(JSON.stringify(val.find(x => x.id == params['id'])));
      })
    });
  }


  updateCar(carr: Car) {
    this.car = carr;
    this.car_service.updateCar(this.car).subscribe((car) => {
      this.cars.forEach((element, index) => {
        if (element.id === car.id) {
          this.cars[index] = car;
        }
      });
    });

    window.alert('Uspjesno ste izmijenili podatke o autu');
    this.router.navigate(['/pocetna']);
  }

  ngOnInit(): void {
  }
}
