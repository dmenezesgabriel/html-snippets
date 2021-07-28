function callback() {
  console.log("Hello");
}

function updateImcTable() {
  let formObject = document.querySelector("form");
  let formFields = {
    name: document.querySelector("#form-name"),
    date: document.querySelector("#form-date"),
    weight: document.querySelector("#form-weight"),
    height: document.querySelector("#form-height"),
  };

  formObject.addEventListener("submit", callback);
}

function setupListeners() {
  updateImcTable();
}

setupListeners();
