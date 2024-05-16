import { LitElement, css, html } from 'lit'

import {getAll} from './consults.js'

export class MyElement extends LitElement {


  constructor() {
    super()
  }

  render() {
    return html`
    <h1> </h1>
    `
  }

  // _onClick() {
  //   this.count++
  // }


  static get styles() {
    return css`
    `
  }
}



window.customElements.define('my-element', MyElement)
