import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['app-nav.component.scss'],
  template: `
    <div class="app-nav shadow">
      <div class="header">
        <img src="/img/K&Wlogo.gif">
        <div class="navLinks">
          <a routerLink="home" routerLinkActive="active">Home</a>
          <a routerLink="about" routerLinkActive="active">About Us</a>
          <a routerLink="request" routerLinkActive="active">Request Info</a>
        </div>
      </div>
      <div class="prodLinks">
        <a routerLink="fire-magic" routerLinkActive="active">FireMagic</a>
        <a routerLink="flame-broil" routerLinkActive="active">Flame-Broil</a>
        <a routerLink="more-products" routerLinkActive="active">More Products and Services</a>
      </div>
    </div>
  `
})
export class AppNavComponent {
  constructor() {}
}