class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <header>
      <nav class="top-nav">
        <div class="top-nav-links">
          <a class="icon" onclick="openSideNav()">
            <i class="fa fa-bars"></i>
          </a>
          <a href="#Home" class="active">Home</a>
        </div>
      </nav>
    </header>
    `;
  }
}

customElements.define("header-component", Header);