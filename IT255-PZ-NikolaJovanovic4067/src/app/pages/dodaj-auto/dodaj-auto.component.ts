import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Car } from 'src/app/interfaces/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-dodaj-auto',
  templateUrl: './dodaj-auto.component.html'
})
export class DodajAutoComponent implements OnInit {

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

  constructor(private car_service: CarService, private router: Router) {

  }

  addCar(formObj: Car) {
    this.car_service.addCarr(formObj).subscribe((response) => {
      window.alert("Uspjesno ste dodali auto.")
      this.router.navigate(['/car']);
    })
  }

  ngOnInit(): void {
  }
}
