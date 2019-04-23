import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <app-nav>
      </app-nav>
      <div>
        <router-outlet>
        </router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {
  constructor(private router: Router) {}
}