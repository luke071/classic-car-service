import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Car {
  id: string;
  image: string;
  model: string;
}

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css',
})
export class CarComponent {
  @Input({ required: true }) car!: Car;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/cars-button/' + this.car.image;
  }
  onSelectCar() {
    this.select.emit(this.car.id);
  }
}
