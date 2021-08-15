function callback(event) {
  // Prevent reload page on submit
  event.preventDefault();
  let formFields = {
    name: document.querySelector("#form-name").value,
    date: document.querySelector("#form-date").value,
    weight: document.querySelector("#form-weight").value,
    height: document.querySelector("#form-height").value,
  };

  console.log(formFields.weight, formFields.height);
  formFields.imc = (
    formFields.weight /
    (formFields.height * formFields.height)
  ).toFixed(2);

  let tableBody = document.querySelector("#imc-tbody");
  let tr = document.createElement("tr");

  for (const [key, value] of Object.entries(formFields)) {
    console.log(key, value);
    let td = document.createElement("td");
    td.textContent = value;
    tr.appendChild(td);
  }
  tableBody.appendChild(tr);
}

function updateImcTable() {
  let formObject = document.querySelector("form");

  formObject.addEventListener("submit", callback);
}

function setupListeners() {
  updateImcTable();
}

setupListeners();
