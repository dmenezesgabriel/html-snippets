function helloWorld() {
  window.alert("Hello, World!");
}

function setup() {
  let helloButton = document.querySelector("#helloWorld");

  helloButton.addEventListener("click", helloWorld);
  console.log("Scripts setup");
}

window.onload = setup;
