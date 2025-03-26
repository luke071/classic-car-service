import { Component, Input, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type Service } from './service.model';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
})
export class ServiceComponent {
  @Input({ required: true }) service!: Service;
  private servicesService = inject(ServicesService);

  onCompleteService() {
    this.servicesService.removeService(this.service.id);
  }
}
