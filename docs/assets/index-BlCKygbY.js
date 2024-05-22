var lt=Object.defineProperty;var ht=(o,t,e)=>t in o?lt(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var H=(o,t,e)=>(ht(o,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,F=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),X=new WeakMap;let it=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(F&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=X.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&X.set(e,t))}return t}toString(){return this.cssText}};const dt=o=>new it(typeof o=="string"?o:o+"",void 0,Q),pt=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((r,i,s)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[s+1],o[0]);return new it(e,o,Q)},mt=(o,t)=>{if(F)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),i=D.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=e.cssText,o.appendChild(r)}},q=F?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return dt(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ut,defineProperty:gt,getOwnPropertyDescriptor:bt,getOwnPropertyNames:_t,getOwnPropertySymbols:$t,getPrototypeOf:ft}=Object,b=globalThis,V=b.trustedTypes,vt=V?V.emptyScript:"",R=b.reactiveElementPolyfillSupport,S=(o,t)=>o,j={toAttribute(o,t){switch(t){case Boolean:o=o?vt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},rt=(o,t)=>!ut(o,t),W={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:rt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),b.litPropertyMetadata??(b.litPropertyMetadata=new WeakMap);class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=W){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,e);i!==void 0&&gt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){const{get:i,set:s}=bt(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get(){return i==null?void 0:i.call(this)},set(a){const l=i==null?void 0:i.call(this);s.call(this,a),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??W}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;const t=ft(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){const e=this.properties,r=[..._t(e),...$t(e)];for(const i of r)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,i]of e)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const i=this._$Eu(e,r);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)e.unshift(q(i))}else t!==void 0&&e.push(q(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return mt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){var s;const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const a=(((s=r.converter)==null?void 0:s.toAttribute)!==void 0?r.converter:j).toAttribute(e,r.type);this._$Em=t,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(t,e){var s;const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const a=r.getPropertyOptions(i),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((s=a.converter)==null?void 0:s.fromAttribute)!==void 0?a.converter:j;this._$Em=i,this[i]=l.fromAttribute(e,a.type),this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??rt)(this[t],e))return;this.P(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,a]of this._$Ep)this[s]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,a]of i)a.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],a)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$EO)==null||r.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[S("elementProperties")]=new Map,y[S("finalized")]=new Map,R==null||R({ReactiveElement:y}),(b.reactiveElementVersions??(b.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=globalThis,M=E.trustedTypes,K=M?M.createPolicy("lit-html",{createHTML:o=>o}):void 0,ot="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,st="?"+g,yt=`<${st}>`,f=document,x=()=>f.createComment(""),N=o=>o===null||typeof o!="object"&&typeof o!="function",at=Array.isArray,At=o=>at(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",L=`[ 	
\f\r]`,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,G=/-->/g,J=/>/g,_=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Y=/'/g,Z=/"/g,nt=/^(?:script|style|textarea|title)$/i,Ct=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),v=Ct(1),A=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),tt=new WeakMap,$=f.createTreeWalker(f,129);function ct(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return K!==void 0?K.createHTML(t):t}const wt=(o,t)=>{const e=o.length-1,r=[];let i,s=t===2?"<svg>":"",a=w;for(let l=0;l<e;l++){const n=o[l];let h,p,c=-1,m=0;for(;m<n.length&&(a.lastIndex=m,p=a.exec(n),p!==null);)m=a.lastIndex,a===w?p[1]==="!--"?a=G:p[1]!==void 0?a=J:p[2]!==void 0?(nt.test(p[2])&&(i=RegExp("</"+p[2],"g")),a=_):p[3]!==void 0&&(a=_):a===_?p[0]===">"?(a=i??w,c=-1):p[1]===void 0?c=-2:(c=a.lastIndex-p[2].length,h=p[1],a=p[3]===void 0?_:p[3]==='"'?Z:Y):a===Z||a===Y?a=_:a===G||a===J?a=w:(a=_,i=void 0);const u=a===_&&o[l+1].startsWith("/>")?" ":"";s+=a===w?n+yt:c>=0?(r.push(h),n.slice(0,c)+ot+n.slice(c)+g+u):n+g+(c===-2?l:u)}return[ct(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),r]};class O{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let s=0,a=0;const l=t.length-1,n=this.parts,[h,p]=wt(t,e);if(this.el=O.createElement(h,r),$.currentNode=this.el.content,e===2){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=$.nextNode())!==null&&n.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(ot)){const m=p[a++],u=i.getAttribute(c).split(g),k=/([.?@])?(.*)/.exec(m);n.push({type:1,index:s,name:k[2],strings:u,ctor:k[1]==="."?Et:k[1]==="?"?Pt:k[1]==="@"?xt:T}),i.removeAttribute(c)}else c.startsWith(g)&&(n.push({type:6,index:s}),i.removeAttribute(c));if(nt.test(i.tagName)){const c=i.textContent.split(g),m=c.length-1;if(m>0){i.textContent=M?M.emptyScript:"";for(let u=0;u<m;u++)i.append(c[u],x()),$.nextNode(),n.push({type:2,index:++s});i.append(c[m],x())}}}else if(i.nodeType===8)if(i.data===st)n.push({type:2,index:s});else{let c=-1;for(;(c=i.data.indexOf(g,c+1))!==-1;)n.push({type:7,index:s}),c+=g.length-1}s++}}static createElement(t,e){const r=f.createElement("template");return r.innerHTML=t,r}}function C(o,t,e=o,r){var a,l;if(t===A)return t;let i=r!==void 0?(a=e._$Co)==null?void 0:a[r]:e._$Cl;const s=N(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),s===void 0?i=void 0:(i=new s(o),i._$AT(o,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=i:e._$Cl=i),i!==void 0&&(t=C(o,i._$AS(o,t.values),i,r)),t}class St{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,i=((t==null?void 0:t.creationScope)??f).importNode(e,!0);$.currentNode=i;let s=$.nextNode(),a=0,l=0,n=r[0];for(;n!==void 0;){if(a===n.index){let h;n.type===2?h=new U(s,s.nextSibling,this,t):n.type===1?h=new n.ctor(s,n.name,n.strings,this,t):n.type===6&&(h=new Nt(s,this,t)),this._$AV.push(h),n=r[++l]}a!==(n==null?void 0:n.index)&&(s=$.nextNode(),a++)}return $.currentNode=f,i}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class U{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),N(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):At(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==d&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(f.createTextNode(t)),this._$AH=t}$(t){var s;const{values:e,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=O.createElement(ct(r.h,r.h[0]),this.options)),r);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(e);else{const a=new St(i,this),l=a.u(this.options);a.p(e),this.T(l),this._$AH=a}}_$AC(t){let e=tt.get(t.strings);return e===void 0&&tt.set(t.strings,e=new O(t)),e}k(t){at(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const s of t)i===e.length?e.push(r=new U(this.S(x()),this.S(x()),this,this.options)):r=e[i],r._$AI(s),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class T{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,s){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=d}_$AI(t,e=this,r,i){const s=this.strings;let a=!1;if(s===void 0)t=C(this,t,e,0),a=!N(t)||t!==this._$AH&&t!==A,a&&(this._$AH=t);else{const l=t;let n,h;for(t=s[0],n=0;n<s.length-1;n++)h=C(this,l[r+n],e,n),h===A&&(h=this._$AH[n]),a||(a=!N(h)||h!==this._$AH[n]),h===d?t=d:t!==d&&(t+=(h??"")+s[n+1]),this._$AH[n]=h}a&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Et extends T{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Pt extends T{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class xt extends T{constructor(t,e,r,i,s){super(t,e,r,i,s),this.type=5}_$AI(t,e=this){if((t=C(this,t,e,0)??d)===A)return;const r=this._$AH,i=t===d&&r!==d||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==d&&(r===d||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Nt{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const z=E.litHtmlPolyfillSupport;z==null||z(O,U),(E.litHtmlVersions??(E.litHtmlVersions=[])).push("3.1.3");const Ot=(o,t,e)=>{const r=(e==null?void 0:e.renderBefore)??t;let i=r._$litPart$;if(i===void 0){const s=(e==null?void 0:e.renderBefore)??null;r._$litPart$=i=new U(t.insertBefore(x(),s),s,void 0,e??{})}return i._$AI(o),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class P extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ot(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return A}}var et;P._$litElement$=!0,P.finalized=!0,(et=globalThis.litElementHydrateSupport)==null||et.call(globalThis,{LitElement:P});const I=globalThis.litElementPolyfillSupport;I==null||I({LitElement:P});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");const Ut={abrigo:[{nombre:"Chaqueta Impermeable En Gabán Para Dama 'Azul'",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_787280-MCO51843885132_102022-F.webp",precio:93900,id:1},{nombre:"Chaqueta Impermeable En Gabán Para Dama 'Negro'",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_904140-MCO51843801912_102022-F.webp",precio:93900,id:2},{nombre:"Chaqueta Impermeable En Gabán Para Dama 'Blanco'",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_930447-MCO71410142210_092023-F.webp",precio:93900,id:3},{nombre:"Chaqueta Hombre Cuero Sintético",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_712593-MCO41606376126_052020-F.webp",precio:102e3,id:4},{nombre:"Calidad Chaqueta Hombre Algodon Colombiano Buso Ropa Buzos",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_829630-MCO31080337339_062019-F.webp",precio:77900,id:5}],camiseta:[{nombre:"Camiseta De Compresión En Licra Uv Slim.",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_906094-MCO53976036500_022023-F.webp",precio:38e3,id:6},{nombre:"Camiseta Tipo Polo Color Dama Mujer.",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_649847-MCO43854241255_102020-F.webp",precio:26255,id:7},{nombre:"Camiseta Deportiva, Crossfit, Gym, Ejercicios Al Aire Libre.",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_995623-MCO70722158553_072023-F.webp",precio:29900,id:8},{nombre:"Camisetas Bandas De Rock Metal Heavy Riffs.",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_776916-MCO72088562654_102023-F.webp",precio:32850,id:9},{nombre:"Camiseta Anime Nezuko Kamado Kimetsu No Yaiba Demon Slayer",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_968038-MCO53410409233_012023-F.webp",precio:29900,id:10}],pantalon:[{nombre:"Pantalon En Dril Licrado Para Hombre.",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_731406-MCO42646277112_072020-F.webp",precio:58900,id:11},{nombre:"Pantalón Camuflado Hermoso.",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_795748-MCO70527773883_072023-F.webp",precio:104405,id:12},{nombre:"Pantalón Jogger Cargo, Táctico, Militar.",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_758206-MCO70501309390_072023-F.webp",precio:104500,id:13},{nombre:"Pantalón Jeans De Colores Entubado Para Hombre.",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_947436-MCO69626235546_052023-F.webp",precio:61750,id:14},{nombre:"Pantalon Camuflado, De Bolsillos 100% Dreal",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_618657-MCO69523195685_052023-F.webp",precio:89990,id:15}]},kt=()=>Ut;class B extends P{constructor(){super(),this.abrigos=[],this.camisetas=[],this.pantalones=[],this.categoriaSeleccionada="todos",this.productos=[],this.carrito=[],this.mostrandoCarrito=!1}connectedCallback(){super.connectedCallback(),this.fetchData()}fetchData(){const t=kt();this.abrigos=t.abrigo,this.camisetas=t.camiseta,this.pantalones=t.pantalon,this.productos=[...this.abrigos,...this.camisetas,...this.pantalones]}cambiarCategoria(t){switch(this.mostrandoCarrito=!1,this.categoriaSeleccionada=t,this.categoriaSeleccionada){case"abrigos":this.productos=this.abrigos;break;case"camisetas":this.productos=this.camisetas;break;case"pantalones":this.productos=this.pantalones;break;default:this.productos=[...this.abrigos,...this.camisetas,...this.pantalones]}this.requestUpdate()}agregarAlCarrito(t){this.carrito=[...this.carrito,t],this.requestUpdate()}mostrarCarrito(){this.mostrandoCarrito=!0,this.requestUpdate()}eliminarDelCarrito(t){this.carrito=this.carrito.filter(e=>e!==t),this.requestUpdate()}render(){return v`
      <div class="wrapper">
        <aside>
          <header>
            <h1 class="logo">CampusLands</h1>
          </header>
          <nav>
            <ul class="menu">
              <li>
                <button @click=${()=>this.cambiarCategoria("todos")} id="todos" class="boton-menu boton-categoria ${this.categoriaSeleccionada==="todos"?"active":""}"><i class='bx bxs-hand-right'></i>Todos los productos</button>
              </li>
              <li>
                <button @click=${()=>this.cambiarCategoria("abrigos")} id="abrigos" class="boton-menu boton-categoria ${this.categoriaSeleccionada==="abrigos"?"active":""}"><i class="bi bi-hand-index-thumb"></i> Abrigos</button>
              </li>
              <li>
                <button @click=${()=>this.cambiarCategoria("camisetas")} id="camisetas" class="boton-menu boton-categoria ${this.categoriaSeleccionada==="camisetas"?"active":""}"><i class="bi bi-hand-index-thumb"></i> Camisetas</button>
              </li>
              <li>
                <button @click=${()=>this.cambiarCategoria("pantalones")} id="pantalones" class="boton-menu boton-categoria ${this.categoriaSeleccionada==="pantalones"?"active":""}"><i class="bi bi-hand-index-thumb"></i> Pantalones</button>
              </li>
              <li>
                <a class="boton-menu boton-carrito" @click=${()=>this.mostrarCarrito()} >
                  <i class="bi bi-cart-fill"></i> Carrito <span id="numerito" class="numerito">${this.carrito.length}</span>
                </a>
              </li>
            </ul>
          </nav>
          <footer>
            <p class="texto-footer">© 2024 CampusLands</p>
          </footer>
        </aside>
        
      <main>
      <!-- APARTADO DEL CARRITO  -->
      ${this.mostrandoCarrito?v`
      <div class="contenedor-carrito">
        <h2>Carrito</h2>
        <div class="carrito-productos">
          ${this.carrito.length===0?v`<p class="carrito-vacio">El carrito está vacío</p>`:this.carrito.map(t=>v`
              <div class="carrito-producto">
                <img class="carrito-producto-imagen" src="${t.imagen}" alt="${t.nombre}" />
                <div>
                  <p>${t.nombre}</p>
                  <p><small>Precio: ${t.precio} COP</small></p>
                </div>
                <button class="carrito-producto-eliminar" @click=${()=>this.eliminarDelCarrito(t)}>Eliminar</button>
              </div>
            `)}
        </div>

        <!-- ACCIONES DEL CARRITO -->
        <div class="carrito-acciones">
          <button class="carrito-acciones-vaciar" @click=${()=>this.carrito=[]}>Vaciar Carrito</button>
          <div class="carrito-acciones-derecha">
            <div class="carrito-acciones-total">
              <p>Total: ${this.carrito.reduce((t,e)=>t+e.precio,0)} COP</p>
            </div>
            <button class="carrito-acciones-comprar">Comprar</button>
          </div>
        </div>
      </div>
    `:v`
      <h2 class="titulo-principal" id="titulo-principal">Todos los productos</h2>
      <div class="contenedor-productos">
        ${this.productos.map(t=>v`
            <div class="product">
              <img class="producto-imagen" src="${t.imagen}" alt="${t.nombre}" />
              <div class="producto-detalles">
                <p class="producto-titulo">${t.nombre}</p>
                <p>${t.precio} COP</p>
                <button @click=${()=>this.agregarAlCarrito(t)} class="producto-agregar">Agregar al carrito</button>
              </div>
            </div>
          `)}
      </div>
    `}
      </main>
      </div>
    `}}H(B,"properties",{abrigos:{type:Array},camisetas:{type:Array},pantalones:{type:Array},productos:{type:Array},categoriaSeleccionada:{type:String},carrito:{type:Array},mostrandoCarrito:{type:Boolean}}),H(B,"styles",pt`
    :host {
      --clr-main: #4b33a8;
      --clr-main-light: #785ce9;
      --clr-white: #ececec;
      --clr-gray: #e2e2e2;
      --clr-red: #961818;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Rubik', sans-serif;
    }
  
    ul {
      list-style-type: none;
    }
  
    .wrapper {
      display: grid;
      grid-template-columns: 1fr 10fr;
      background-color: var(--clr-main);
    }
  
    aside {
      padding: 2rem;
      padding-right: 0;
      color: var(--clr-white);
      position: sticky;
      top: 0;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  
    .logo {
      font-weight: 400;
      font-size: 1.3rem;
    }
  
    .menu {
      display: flex;
      flex-direction: column;
      gap: .5rem;
    }
  
    .boton-menu {
      background-color: transparent;
      border: 0;
      color: var(--clr-white);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 1rem;
      font-weight: 600;
      padding: 1rem;
      font-size: .85rem;
      width: 100%;
    }
  
    .boton-menu.active {
      background-color: var(--clr-white);
      color: var(--clr-main);
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
      position: relative;
    }
  
    .boton-menu.active::before {
      content: '';
      position: absolute;
      width: 1rem;
      height: 2rem;
      bottom: 100%;
      right: 0;
      background-color: transparent;
      border-bottom-right-radius: .5rem;
      box-shadow: 0 1rem 0 var(--clr-white);
    }
  
    .boton-menu.active::after {
      content: '';
      position: absolute;
      width: 1rem;
      height: 2rem;
      top: 100%;
      right: 0;
      background-color: transparent;
      border-top-right-radius: .5rem;
      box-shadow: 0 -1rem 0 var(--clr-white);
    }
  
    .boton-carrito {
      margin-top: 2rem;
    }
  
    .numerito {
      background-color: var(--clr-white);
      color: var(--clr-main);
      padding: .15rem .25rem;
      border-radius: .25rem;
    }
  
    .boton-carrito.active .numerito {
      background-color: var(--clr-main);
      color: var(--clr-white);
    }
  
    .texto-footer {
      color: var(--clr-main-light);
      font-size: .85rem;
    }
  
    main {
      background-color: var(--clr-white);
      margin: 1rem;
      margin-left: 0;
      border-radius: 2rem;
      padding: 3rem;
    }
  
    .titulo-principal {
      color: var(--clr-main);
      margin-bottom: 2rem;
    }
  
    .contenedor-productos {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
    }
  
    .product {
      border: 1px solid #ccc;
      padding: 10px;
      margin: 10px;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    .product img {
      max-width: 100px;
    }
  
    .producto-imagen {
      max-width: 100%;
      border-radius: 1rem;
    }
  
    .producto-detalles {
      background-color: var(--clr-main);
      color: var(--clr-white);
      padding: .5rem;
      border-radius: 1rem;
      margin-top: -2rem;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: .25rem;
    }
  
    .producto-titulo {
      font-size: 1rem;
    }
  
    .producto-agregar {
      border: 0;
      background-color: var(--clr-white);
      color: var(--clr-main);
      padding: .4rem;
      text-transform: uppercase;
      border-radius: 2rem;
      cursor: pointer;
      border: 2px solid var(--clr-white);
      transition: background-color .2s, color .2s;
    }
  
    .producto-agregar:hover {
      background-color: var(--clr-main);
      color: var(--clr-white);
    }
    /* CARRITO*/
  
    .contenedor-carrito {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .carrito-vacio,
    .carrito-comprado {
      color: var(--clr-main);
    }
    .carrito-productos {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .carrito-producto {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--clr-gray);
      color: var(--clr-main);
      padding: .5rem;
      padding-right: 1.5rem;
      border-radius: 1rem;
    }
    .carrito-producto-imagen {
      width: 4rem;
      border-radius: 1rem;
    }
    .carrito-producto small {
      font-size: .75rem;
    }
    .carrito-producto-eliminar {
      border: 0;
      background-color: transparent;
      color: var(--clr-red);
      cursor: pointer;
    }
    .carrito-acciones {
      display: flex;
      justify-content: space-between;
    }
    .carrito-acciones-vaciar {
      border: 0;
      background-color: var(--clr-gray);
      padding: 1rem;
      border-radius: 1rem;
      color: var(--clr-main);
      text-transform: uppercase;
      cursor: pointer;
    }
    .carrito-acciones-derecha {
      display: flex;
    }
    .carrito-acciones-total {
      display: flex;
      background-color: var(--clr-gray);
      padding: 1rem;
      color: var(--clr-main);
      text-transform: uppercase;
      border-top-left-radius: 1rem;
      border-bottom-left-radius: 1rem;
      gap: 1rem;
    }
    .carrito-acciones-comprar {
      border: 0;
      background-color: var(--clr-main);
      padding: 1rem;
      color: var(--clr-white);
      text-transform: uppercase;
      cursor: pointer;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }

  `);customElements.define("my-element",B);
