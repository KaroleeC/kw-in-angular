import { Component } from '@angular/core';

@Component({
  selector: 'request-form',
  styleUrls: ['request-form.component.scss'],
  templateUrl: 'request-form.component.html'
})
export class RequestFormComponent {
  //should not be hard coded prefer to be stored in a db
  productList: string[] = ['FireMagic Fireplace Hardware', 'Flame-Broil Barbecue Equipment', 'Other K&W Products and Services'];
  infoList: string[] = ['Catalog / Brochure', 'Pricing', 'Dealer Location','Installation Instructions', 'Becoming a Dealer / Distributor'];

  constructor() {}
}