class SideBar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    fetch("templates/side-bar.html")
      .then((response) => response.text())
      .then((html) => {
        this.innerHTML = html;
      });
  }
}

customElements.define("sidebar-component", SideBar);
