class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    fetch("../templates/bootstrap-header.html")
      .then((response) => response.text())
      .then((html) => {
        this.innerHTML = html;
      });
  }
}

customElements.define("header-component", Header);
