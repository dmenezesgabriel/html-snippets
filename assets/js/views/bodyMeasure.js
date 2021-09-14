import { DateHelper } from "../helpers/date.js";
import { View } from "../views/view.js";

export class BodyMeasuresView extends View {
  constructor(element) {
    super(element);
  }
  _template(model) {
    // template string
    // generate the template again every
    // time is called with all elements from bodyMeasures
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
