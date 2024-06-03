class myElement extends HTMLElement {
    //Constructor: Inicialización de la instancia del elemento.
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h1>My Element!!</h1>
                <div>
                    <p>
                        <slot></slot>
                    </p>
                </div>
            </section>
            ${this.getStyles()}
        `;
        return template;
    }

    getStyles() {
        return `
        <style>
            h1 {
                color: red;
            }
            p {
                color: blue;
                background-color: yellow;
            }
        </style>
        `;
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    //Elemento añadido al DOM.
    connectedCallback() {
        this.render();
    }
}

customElements.define('my-element', myElement);