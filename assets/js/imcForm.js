class BodyMeasure {
  constructor(userName, date, height, weight) {
    this._userName = userName;
    this._date = date;
    this._height = height;
    this._weight = weight;
    this._bodyMassIndex = this.calculateBMI(this._weight, this._height);
  }

  calculateBMI(weight, height) {
    weight = parseFloat(weight);
    height = parseFloat(height);
    let bodyMassIndex = (weight / (height * height)).toFixed(2);
    return bodyMassIndex;
  }

  getUserName() {
    return this._userName;
  }

  getDate() {
    return this._date;
  }

  getWeight() {
    return this._weight;
  }

  getHeight() {
    return this._height;
  }

  getBMI() {
    return this._bodyMassIndex;
  }
}

function callback(event) {
  // Prevent reload page on submit
  event.preventDefault();
  let formFields = {
    userName: document.querySelector("#form-name"),
    date: document.querySelector("#form-date"),
    weight: document.querySelector("#form-weight"),
    height: document.querySelector("#form-height"),
  };

  let bodyMeasure = new BodyMeasure(
    formFields.userName.value,
    new Date(formFields.date.value),
    formFields.height.value,
    formFields.weight.value
  );

  let tableBody = document.querySelector("#imc-tbody");
  let tr = document.createElement("tr");

  [
    bodyMeasure.getUserName(),
    bodyMeasure.getDate(),
    bodyMeasure.getWeight(),
    bodyMeasure.getHeight(),
    bodyMeasure.getBMI(),
  ].forEach((value) => {
    let td = document.createElement("td");
    td.textContent = value;
    tr.appendChild(td);
  });

  tableBody.appendChild(tr);

  this.reset();
  formFields.userName.focus();
}

function updateImcTable() {
  let formObject = document.querySelector("form");

  formObject.addEventListener("submit", callback);
}

function setupListeners() {
  updateImcTable();
}

setupListeners();
