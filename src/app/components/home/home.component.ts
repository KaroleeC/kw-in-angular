import { Component } from '@angular/core';

@Component({
  selector: 'home',
  styleUrls: ['home.component.scss'],
  template: `
    <div>
      <div class="banner">
        <p>FireMagic Fireplace Hardware and Flame-Broil Barbecue Equipment</p>
        <p>Manufactured in the United States for over two decades</p>
        <p>Built to last</p>
        <p>Trouble free customer service</p> 
      </div>
    </div>
  `
})
export class HomeComponent {
  constructor() {}
}