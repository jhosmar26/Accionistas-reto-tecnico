import { LitElement, html, css } from "lit";

class ButtonComponent extends LitElement {
    static styles = css`
        * {
            font-family: sans-serif;
        }

        .wrapper {
            padding: 30px 20px 35px 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 10px;
            gap: 20px;
        }

        .button {
            border: none;
            color: white;
            background-color: #1973b8;
            height: 50px;
            width: 140px;
            font-weight: bold;
            font-size: 16px;
        }
    `;


    static get properties() {
        return {
            actionText: { type: String },
        }
    }

    constructor() {
        super()
        this.actionText = "Continuar";
    }

    render() {
        return html`
            <div class="wrapper">
                <button class="button">${this.actionText}</button>
            </div>  
        `;
    }
}

customElements.define('button-component', ButtonComponent);