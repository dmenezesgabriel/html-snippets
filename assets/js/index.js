function openSideNav() {
  document.querySelector(".side-nav").style.width = "250px";
  document.querySelector(".top-nav").style.marginLeft = "250px";
  document.querySelector(".footer").style.marginLeft = "250px";
  document.querySelector("#openSideNav").style.display = "none";
}

function closeSideNav() {
  document.querySelector(".side-nav").style.width = "0";
  document.querySelector(".top-nav").style.marginLeft = "0";
  document.querySelector(".footer").style.marginLeft = "0";
  document.querySelector("#openSideNav").style.display = "Block";
}
