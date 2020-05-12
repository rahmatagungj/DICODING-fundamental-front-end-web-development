class FootBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container text-center">
            <small>Copyright &copy; Rahmat Agung Julians</small>
        </div>
        `;
    }
}

customElements.define("foot-bar", FootBar);