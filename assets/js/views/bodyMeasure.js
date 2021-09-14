class BodyMeasuresView {
  constructor(element) {
    this._element = element;
  }
  update() {
    this._element.innerHTML = this._template();
  }

  _template() {
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

            </tbody>
          </table>
    `;
  }
}

// pg.20
