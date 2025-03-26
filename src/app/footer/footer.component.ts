import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  nowHour = new Date().getHours();
  openHour = 8;
  closeHour = 16;
  isOpen = this.nowHour >= this.openHour && this.closeHour <= this.closeHour;
}
