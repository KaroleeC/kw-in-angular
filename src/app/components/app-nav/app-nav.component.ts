import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['app-nav.component.scss'],
  template: `
    <div>
      <div class="header">
        <img src="/img/K&Wlogo.gif">
      </div>
      <div class="links">
        <a routerLink="home" routerLinkActive="active">Home</a>
        <a routerLink="about" routerLinkActive="active">About Us</a>
        <a routerLink="request" routerLinkActive="active">Request Info</a>
        <a routerLink="fireMagic" routerLinkActive="active">FireMagic</a>
        <a routerLink="flameBroil" routerLinkActive="active">Flame-Broil</a>
        <a routerLink="more" routerLinkActive="active">More Products and Services</a>
        <a routerLink="map" routerLinkActive="active">Site Map</a>
      </div>
    </div>
  `
})
export class AppNavComponent {
  constructor() {}
}