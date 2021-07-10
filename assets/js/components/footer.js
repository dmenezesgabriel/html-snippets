export class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <footer class="footer">
      <i>Gabriel Menezes - HTML snippets &copy; 2021</i>
    </footer>
    `;
  }
}

customElements.define("footer-component", Footer);
