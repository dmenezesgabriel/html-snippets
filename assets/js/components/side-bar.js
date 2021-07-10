class SideBar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <aside>
      <nav class="side-nav">
        <a href="javascript:void(0)" class="close-btn" onclick="closeSideNav()">&times;</a>
        <a href="./internet.html">Internet</a>
        <a href="./seo.html">seo</a>
        <a href="./html.html">html</a>
        <a href="./css.html">css</a>
        <a href="./javascript.html">javascript</a>
        <a class="accordion">Bootstrap</a>
        <div class="sub-nav">
          <a href="./bootstrap/bootstrap-container-fluid.html">Bootstrap Container Fluid</a>
          <a href="./bootstrap/bootstrap-container.html">Bootstrap Container Fixed</a>
          <a href="./bootstrap/bootstrap-layout-fixed.html">Bootstrap Layout Fixed</a>
          <a href="./bootstrap/bootstrap-forms.html">Bootstrap Forms</a>
          <a href="./bootstrap/bootstrap-collapse-card.html">Bootstrap Collapse & Cards</a>
        </div>

      </nav>
    </aside>
    `;
  }
}

customElements.define("sidebar-component", SideBar);
