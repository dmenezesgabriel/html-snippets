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

function collapseAccordion() {
  let accordions = document.querySelectorAll(".accordion");
  let accordionCount;

  for (
    accordionCount = 0;
    accordionCount < accordions.length;
    accordionCount++
  ) {
    let accordionObj = accordions[accordionCount];
    accordionObj.addEventListener("click", () => {
      accordionObj.classList.toggle("active");

      let subNav = accordionObj.nextElementSibling;
      if (subNav.style.maxHeight) {
        subNav.style.maxHeight = null;
      } else {
        subNav.style.maxHeight = subNav.scrollHeight + "px";
      }
    });
  }
}

function setup() {
  collapseAccordion();
}
