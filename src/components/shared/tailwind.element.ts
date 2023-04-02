import { LitElement, unsafeCSS } from 'lit'

import style from './tailwind.global.css'

const tailwindElement = unsafeCSS(style)

export const TailwindClass = (style: any): typeof LitElement => {
  return class extends LitElement {
    static styles = [tailwindElement, unsafeCSS(style)]
  }
}
