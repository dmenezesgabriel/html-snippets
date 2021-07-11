class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    fetch("../templates/bootstrap-footer.html")
      .then((response) => response.text())
      .then((html) => {
        this.innerHTML = html;
      });
  }
}

customElements.define("footer-component", Footer);
