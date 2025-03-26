import { Component } from '@angular/core';
import { CarComponent } from '../car/car.component';
import { CLASSIC_CARS } from '../classic-cars';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CarComponent, ServicesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  cars = CLASSIC_CARS;
  selectedCarId?: string;

  get selectedCar() {
    return this.cars.find((car) => car.id === this.selectedCarId);
  }

  onSelectCar(id: string) {
    this.selectedCarId = id;
  }
}
