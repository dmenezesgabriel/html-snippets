class SideBar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    fetch("templates/side-bar.html")
      .then((response) => response.text())
      .then((html) => {
        this.innerHTML = html;
        this.collapseAccordion();
      });
  }
  collapseAccordion() {
    let accordions = this.querySelectorAll(".accordion");
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
}

customElements.define("sidebar-component", SideBar);
