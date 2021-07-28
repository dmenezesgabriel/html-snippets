function setupListeners() {
  let form = document.querySelector("#form");
  let formButton = document.querySelector("form > button");

  let allInputs = document.querySelectorAll("input[type=text]");

  console.log(formButton);
  console.log(allInputs);
  if (formButton != null) {
    formButton.addEventListener("click", () => {
      window.alert("Button Clicked");
    });
  }

  if (form != null) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  }
}

function validateInputs() {
  let canPass = true;
  let inputs = document.querySelectorAll("#form input");

  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    if (input.value == "") {
      canPass = false;

      break;
    }
  }
}

setupListeners();
