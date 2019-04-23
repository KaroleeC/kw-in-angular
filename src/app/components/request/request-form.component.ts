import { Component } from '@angular/core';

@Component({
  selector: 'request-form',
  styleUrls: ['request-form.component.scss'],
  template: `
    <div>
      Information Request Form
      <form>
        <div>
          <label>
            Please select the products you are interested in.
            <select>
              <option *ngFor="let product of productList">
                {{ product }}
              </option>
            </select>
          </label>
          </div>
        <div>
          <label>
            Please select the type(s) of information you would like to receive.
            <select>
              <option *ngFor="let info of infoList">
                {{ info }}
              </option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Name:
            <input placeholder="Name">
          </label>
          <label>
            Title:
            <input placeholder="Title">
          </label>
        </div>

        <label>
          Organization:
          <input placeholder="Organization">
        </label>
        <label>
          Email:
          <input placeholder="Email">
        </label>
        <div>
          Address
          <label>
            Street Address:
            <input>
          </label>
          <label>
            City:
            <input>
          </label>
          <label>
            State
            <input>
          </label>
          <label>
            Zip
            <input>
          </label>
        </div>
        <label>
          Phone
          <input>
        </label>
        <label>
          Fax
          <input>
        </label>
      </form>
      <div>
        <button class="submit">
          Submit
        </button>
        <button class="clear">
          Clear
        </button>
      </div>
    </div>
  `
})
export class RequestFormComponent {
  //should not be hard coded prefer to be stored in a db
  productList: string[] = ['FireMagic Fireplace Hardware', 'Flame-Broil Barbecue Equipment', 'Other K&W Products and Services'];
  infoList: string[] = ['Catalog / Brochure', 'Pricing', 'Dealer Location','Installation Instructions', 'Becoming a Dealer / Distributor'];

  constructor() {}
}