import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { TailwindElement } from '../shared/tailwind.element'

import style from './my-button.scss?inline'
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
interface Properties {
  type: string
  title: string
  disabled: boolean
}
@customElement('my-button')
export class MyButton extends TailwindElement(style) implements Properties {
  @property()
  type = 'button'

  @property({ type: String })
  title = '버튼'

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Boolean })
  disabled = false

  render() {
    return html`
      <button
        type=${this.type}
        ${this.disabled ? 'disalbed' : ''}
        title=${this.title}
        @click=${this._onClick}
        part="button"
        class="rounded-full"
      >
        <slot></slot>
      </button>
    `
  }

  private _onClick() {
    console.log(1)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-button': MyButton
  }
}
