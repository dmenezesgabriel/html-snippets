class BodyMeasures {
  constructor(userName, date, height, weight) {
    this.userName = userName;
    this.date = date;
    this.height = height;
    this.weight = weight;
    this.bodyMassIndex = this.calculateBodyMassIndex(this.weight, this.height);
  }

  calculateBodyMassIndex(weight, height) {
    weight = parseFloat(weight);
    height = parseFloat(height);
    let bodyMassIndex = (weight / (height * height)).toFixed(2);
    return bodyMassIndex;
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

  let bodyMeasure = new BodyMeasures(
    formFields.userName.value,
    new Date(formFields.date.value),
    formFields.height.value,
    formFields.weight.value
  );

  let tableBody = document.querySelector("#imc-tbody");
  let tr = document.createElement("tr");

  for (const [key, value] of Object.entries(bodyMeasure)) {
    let td = document.createElement("td");
    td.textContent = value;
    tr.appendChild(td);
  }

  tableBody.appendChild(tr);

  // this.reset();
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
