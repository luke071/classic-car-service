import { Component, Input } from '@angular/core';
import { ServiceComponent } from './service/service.component';
import { NewServiceComponent } from './new-service/new-service.component';
import { ServicesService } from './services.service';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceComponent, NewServiceComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  @Input({ required: true }) carId!: string;
  @Input({ required: true }) model!: string;
  @Input({ required: true }) image!: string;
  isAddingService = false;

  constructor(private servicesService: ServicesService) {}

  get selectedCarServices() {
    return this.servicesService.getCarServices(this.carId);
  }

  onStartAddService() {
    this.isAddingService = true;
  }

  onCloseAddService() {
    this.isAddingService = false;
  }

  get imagePath() {
    return 'assets/cars/' + this.image;
  }
}
