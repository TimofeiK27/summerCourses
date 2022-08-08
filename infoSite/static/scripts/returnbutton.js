class Calendar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div style="width: 100vw; background-color: transparent;">
        <div style="width: 19.5em; background-color: transparent;">
        <a href="/student-projects" style="width: 200px; text-decoration: none;">
            <button style="
            color: black;
            background-color: #9ce69a;
            width: 16em;
            height: 2.2em;
            font-size: 1.2em;
            border-radius: .5em;
            margin-bottom: 10px;
            border: none;
            filter: drop-shadow(4px 4px 3px #7d7d7d);
            display: block;">Return to Project Caravel</button>
        </a></div></div>`;
    }
}

customElements.define('return-button', Calendar);