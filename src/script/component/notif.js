class NotifikasiBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="alert alert-primary animated fadeInRight" role="alert">
                <marquee behavior="" direction="left" class="berita">#Stayhome bareng dicoding, jaga diri anda dan orang
                    lain! - Coding
                    seru - Coding Menyenangan - Ayok gabung - Ini adalah submission dicoding</marquee>
            </div>
        `;
    }
}

customElements.define("notifikasi-bar", NotifikasiBar);