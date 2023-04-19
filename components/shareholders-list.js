import { LitElement, html, css } from "lit";

class ShareholdersList extends LitElement {
    static styles = css`
        * {
            font-family: sans-serif;
        }

        .shareholders-wrapper {
            display: flex;
            flex-direction: column;
            gap: 30px;
            margin: 10px;
            overflow: hidden;
        }

        .shareholder {
            position: relative;
        }

        .shareholder::after {
            content: "";
            position: absolute;
            background: gray;
            opacity: .4;
            width: 100%;
            height: 2px;
            top: calc(100% + 15px);
        }
    `;

    static get properties() {
        return {
            shareholders: { type: Array }
        }
    }

    render() {
        console.log(this.shareholders, "aea")
        return html`
            <div class="shareholders-wrapper">
                ${this.shareholders.map(el => 
                    html`
                        <div class="shareholder">
                            <shareholder-option name=${el.Nombre} idNum=${el.Documento} percentage=${el.Porcentaje} hasShareholders=${el.CantidadAccionitas}></shareholder-option>
                        </div>
                    `)
                }
            </div>
        `;
    }
}

customElements.define('shareholders-list', ShareholdersList);