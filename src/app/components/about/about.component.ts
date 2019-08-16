import { Component } from '@angular/core';

@Component({
  selector: 'about',
  styleUrls: ['about.component.scss'],
  template: `
    <div>
      <h1>About Us</h1>
      <p>
        K & W has been manufacturing products for masonry construction since 1982.  
        We are committed to the principals of honesty and integrity in dealing with all of our customers.  
        From the business partners who sell our products to the consumers who are using them, 
        our goal is to provide the best possible quality and service.
      </p>
      <div>
        We can be reached at:
        <br>
        <div class="contact-info">
          K & W Manufacturing Co., Inc.
          <br>
          23107 Temescal Canyon Road
          <br>
          Corona, CA 92883
          <br>
          951-277-3300 Phone
          <br>
          951-277-2070 Fax
          <br>
          info@k-and-w-mfg.com
        </div>
      </div>
      <p>If you would like to request product information, please use our <a href="/request">Information Request Form</a>.</p>
    </div>
  `
})
export class AboutComponent {
  constructor() {}
}