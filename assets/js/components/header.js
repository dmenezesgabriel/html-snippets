class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    fetch("templates/header.html")
      .then((response) => response.text())
      .then((html) => {
        this.innerHTML = html;
        this.setupOpenSideNav();
      });
  }
  setupOpenSideNav() {
    let openMenuIcon = this.querySelector(".menu-open-icon");
    console.log(openMenuIcon);
    openMenuIcon.addEventListener("click", () => {
      document.querySelector(".side-nav").style.width = "250px";
      document.querySelector("#main").style.marginLeft = "250px";
      document.querySelector(".top-nav-links").style.marginLeft = "250px";
    });
  }
}

customElements.define("header-component", Header);
