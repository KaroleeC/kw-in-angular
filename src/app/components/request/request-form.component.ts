import { Component } from '@angular/core';

@Component({
  selector: 'request-form',
  //styleUrls: ['request-form.component.scss'],
  template: `
    <div>
      Information Request Form
      <form>
        <div>
          Please select the products you are interested in.
          </div>
        <div>
          Please select the type(s) of information you would like to receive.
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
  constructor() {}
}