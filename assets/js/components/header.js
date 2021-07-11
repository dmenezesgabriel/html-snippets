class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    fetch("templates/header.html")
      .then((response) => response.text())
      .then((html) => {
        this.innerHTML = html;
      });
  }
}

customElements.define("header-component", Header);
console.log("header setup");
