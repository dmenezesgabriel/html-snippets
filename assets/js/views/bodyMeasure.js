import { DateHelper } from "../helpers/date.js";

export class BodyMeasuresView {
  constructor(element) {
    this._element = element;
  }
  update(model) {
    this._element.innerHTML = this._template(model);
  }

  _template(model) {
    // template string
    return `
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Date</th>
                <th scope="col">Weight</th>
                <th scope="col">Height</th>
                <th scope="col">BMI</th>
              </tr>
            </thead>
            <tbody id="imc-tbody">
              ${model.bodyMeasures
                .map(
                  (bodyMeasure) => `
                    <tr>
                      <td>${bodyMeasure.userName}</td>
                      <td>${DateHelper.dateToString(bodyMeasure.date)}</td>
                      <td>${bodyMeasure.weight}</td>
                      <td>${bodyMeasure.height}</td>
                      <td>${bodyMeasure.bmi}</td>
                    </tr>
                  `
                )
                .join("")}
            </tbody>
          </table>
    `;
  }
}

// pg.20
