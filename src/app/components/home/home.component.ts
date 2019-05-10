import { Component } from '@angular/core';

@Component({
  selector: 'home',
  styleUrls: ['home.component.scss'],
  template: `
    <div class="home">
      <div class="banner">
      <h3>
        Family owned and operated since 1982
      </h3> 
      </div>
      <div class="products">
        
        <div class="brand firemagic">
          <div class="brandLogo">
            <img src="/img/fireMagicLogo.gif">
            Hardware for masonary services.
          </div>

          <div class="productList">
            <div class="productBtn">
              Heat Circulators <span class="arrow"> ></span>
            </div>
            <div class="productBtn">
              Dampers <span class="arrow">></span>
            </div>
            <div class="productBtn">
              Fireplace Components <span class="arrow"> ></span>
            </div>
            <div class="productBtn">
              Fireplace Accessories<span class="arrow"> ></span>
            </div>
          </div>
        </div>

        <hr>

        <div class="brand flamebroil">
          <div class="brandLogo">
            <img src="/img/flamelogo.gif">
            Equipment for Built-in Barbecues.
          </div>
          <div class="productList">
            <div class="productBtn">
              Gas Grills <span class="arrow"> ></span>
            </div>
            <div class="productBtn">
              Charcoal Grils <span class="arrow"> ></span>
            </div>
            <div class="productBtn">
              Accessories / Replacements <span class="arrow"> ></span>
            </div>
            <div class="productBtn">
              Storage Doors <span class="arrow"> ></span>
            </div>
          </div>
        </div>

        <hr>

        <div class="brand">
          <div class="brandLogo">
            Other products and services
          </div>
          <div class="productList">
            <div class="productBtn">
              Material Handling <span class="arrow"> ></span>
            </div>
            <div class="productBtn">
              Metal Fabrication <span class="arrow"> ></span>
            </div>
            <div class="productBtn">
              LC Storm Drain Screens <span class="arrow"> ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {
  constructor() {}
}