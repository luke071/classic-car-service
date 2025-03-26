import { Injectable } from '@angular/core';
import { type NewServiceData } from './service/service.model';

@Injectable({ providedIn: 'root' })
export class ServicesService {
  private services = [
    {
      id: 't01',
      carId: '01',
      title: 'Urgent service',
      summary: 'Change engine oil and filters.',
      dueDate: '2025-02-21',
    },
    {
      id: 't01',
      carId: '02',
      title: 'Service',
      summary: 'Change the tires with new ones.',
      dueDate: '',
    },
    {
      id: 't01',
      carId: '03',
      title: 'Service',
      summary: 'Replace fuel filter.',
      dueDate: '',
    },
  ];

  getCarServices(carId: string) {
    return this.services.filter((services) => services.carId === carId);
  }

  addService(serviceData: NewServiceData, carId: string) {
    this.services.unshift({
      id: new Date().getTime().toString(),
      carId: carId,
      title: serviceData.title,
      summary: serviceData.summary,
      dueDate: serviceData.date,
    });
  }

  removeService(id: string) {
    this.services = this.services.filter((service) => service.id !== id);
  }
}
