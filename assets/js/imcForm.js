function callback(event) {
  // Prevent reload page on submit
  event.preventDefault();
  let formFields = {
    name: document.querySelector("#form-name"),
    date: document.querySelector("#form-date"),
    weight: document.querySelector("#form-weight"),
    height: document.querySelector("#form-height"),
  };

  console.log(formFields.weight, formFields.height);

  let tableBody = document.querySelector("#imc-tbody");
  let tr = document.createElement("tr");

  for (const [key, value] of Object.entries(formFields)) {
    console.log(key, value);
    let td = document.createElement("td");
    td.textContent = value.value;
    tr.appendChild(td);
  }

  let td = document.createElement("td");
  td.textContent = (
    formFields.weight.value /
    (formFields.height.value * formFields.height.value)
  ).toFixed(2);
  tr.appendChild(td);

  tableBody.appendChild(tr);

  this.reset();
  formFields.name.focus();
}

function updateImcTable() {
  let formObject = document.querySelector("form");

  formObject.addEventListener("submit", callback);
}

function setupListeners() {
  updateImcTable();
}

setupListeners();
