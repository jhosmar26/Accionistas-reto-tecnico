import { LitElement, html, css } from "lit";

class InfoboxComponent extends LitElement {
    static styles = css`
        * {
            font-family: sans-serif;
        }

        .wrapper {
            background-color: #d5ecfa;
            padding: 30px 20px 35px 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 10px;
            gap: 20px;
        }

        .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: #193561;
            color: #d5ecfa;
        }

        .mainContent {
            text-align: center;
            margin: 0;
        }
    `;


    static get properties() {
        return {
            mainContent: { type: String },
        }
    }

    render() {
        return html`
            <div class="wrapper">
                <span class="icon">i</span>
                <p class="mainContent">${this.mainContent}</p>
            </div>  
        `;
    }
}

customElements.define('infobox-component', InfoboxComponent);