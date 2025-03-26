import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewServiceData } from '../service/service.model';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-new-service',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-service.component.html',
  styleUrl: './new-service.component.css',
})
export class NewServiceComponent {
  @Input({ required: true }) carId!: string;
  @Output() close = new EventEmitter<void>();

  enteredTittle = '';
  enteredSummary = '';
  enteredDate = '';
  private servicesService = inject(ServicesService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.servicesService.addService(
      {
        title: this.enteredTittle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.carId
    );
    this.close.emit();
  }
}
