import { LitElement, html, css } from "lit";

export class StepsSection extends LitElement {
    static styles = css`
        * {
            font-family: sans-serif;
        }
        
        .host-wrapper{
            margin: 10px;
        }

        .top-wrapper {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .title {
            font-weight: bold;
            margin: 0;
        }

        .steps {
            font-style: italic;
            color: gray
        }

        .aditional-text {
            font-weight: bold;
        }
    `;

    static get properties() {
        return {
            title: { type: String },
            currentStep: { type: String },
            totalSteps:{ type: String }
        }
    }

    render() {
        return html`
            <div class="host-wrapper">
                <div class="top-wrapper">
                    <h2 class="title">${this.title}</h2>
                    <span class="steps">(${this.currentStep} of ${this.totalSteps})</span>
                </div>
                <p class="aditional-text">Esta es la información sobre los accionistas de tu empresa.</p>
            </div>
        `;
    }
}

customElements.define('steps-section', StepsSection);
