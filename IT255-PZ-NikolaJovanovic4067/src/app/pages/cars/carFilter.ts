import { Pipe, PipeTransform } from '@angular/core';
import { Car } from 'src/app/interfaces/car';

@Pipe({ name: 'filterByUP', pure: false })
export class FilterByUserPrice implements PipeTransform {
    transform(cars: Car[], carPrice: any): Car[] {
        const resultArray = [];
        if (cars.length === 0 || carPrice == '') {
            return cars;
        }

        for (const item of cars) {
            if (item.cijena <= Number(carPrice)) {
                resultArray.push(item);
            }
        }
        return resultArray;
    }
} 