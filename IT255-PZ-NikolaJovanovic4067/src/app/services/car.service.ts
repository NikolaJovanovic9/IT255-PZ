import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Car } from '../interfaces/car';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { selectedCars } from '../store/selector/car.selector';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private url: string = 'http://localhost:3000/car';

  public cars$: Observable<Car[]>;

  constructor(private _http: HttpClient, private _store: Store) {
    this.cars$ = this._store.pipe(select(selectedCars));
  }

  public fetchCars(): Observable<Car[]> {
    return this._http.get<Car[]>(this.url);
  }

  addCarr(car: Car) {
    return this._http.post(this.url, car);
  }

  updateCar(car: Car) {
    const modUrl: string = `${this.url}/${car.id}`;
    return this._http.put<Car>(modUrl, car);
  }

  deleteCar(id: number) {
    const modUrl: string = `${this.url}/${id}`;
    return this._http.delete<Car[]>(modUrl);
  }

}
