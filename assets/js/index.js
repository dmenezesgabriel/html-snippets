function openSideNav() {
  document.querySelector(".side-nav").style.width = "250px";
  document.querySelector("#main").style.marginLeft = "250px";
  document.querySelector(".top-nav-links").style.marginLeft = "250px";
}

function closeSideNav() {
  document.querySelector(".side-nav").style.width = "0";
  document.querySelector("#main").style.marginLeft = "0";
  document.querySelector(".top-nav-links").style.marginLeft = "0";
}

function helloWorld() {
  window.alert("Hello, World!");
}

function setup() {
  var helloButton = document.querySelector("#helloWorld");
  helloButton.addEventListener("click", helloWorld);
  console.log("Scripts setup");
}

window.addEventListener("load", setup);
