import {LitElement, html, css} from "lit";

class ShareholderModal extends LitElement {
    static styles = css`
        * {
            font-family: sans-serif;
        }

        .wrapper{
            width: 100px;
            height: 100px;
            background-color: red;
        }
    `;

    static get properties() {
        return {
            shareholders: { type: Array }
        }
    }

    constructor() {
        super();
        this.shareholders = [];

        this.addEventListener('ApiData', (e) => {
            this._dataSaved(e.detail.data);
        })
    }

    _dataSaved(data) {
        this.shareholders = data
    }

    render() {
        return html`
            <div class="wrapper">
            </div>
        `;
    }
}

customElements.define('shareholder-modal', ShareholderModal);