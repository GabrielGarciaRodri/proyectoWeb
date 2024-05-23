var lt=Object.defineProperty;var dt=(o,t,e)=>t in o?lt(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var H=(o,t,e)=>(dt(o,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,F=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),Q=new WeakMap;let rt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(F&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Q.set(e,t))}return t}toString(){return this.cssText}};const ht=o=>new rt(typeof o=="string"?o:o+"",void 0,X),pt=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,r,s)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[s+1],o[0]);return new rt(e,o,X)},mt=(o,t)=>{if(F)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),r=M.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=e.cssText,o.appendChild(i)}},q=F?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ht(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ut,defineProperty:gt,getOwnPropertyDescriptor:bt,getOwnPropertyNames:ft,getOwnPropertySymbols:_t,getPrototypeOf:$t}=Object,b=globalThis,V=b.trustedTypes,vt=V?V.emptyScript:"",R=b.reactiveElementPolyfillSupport,x=(o,t)=>o,j={toAttribute(o,t){switch(t){case Boolean:o=o?vt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},it=(o,t)=>!ut(o,t),W={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:it};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),b.litPropertyMetadata??(b.litPropertyMetadata=new WeakMap);class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=W){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);r!==void 0&&gt(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:s}=bt(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get(){return r==null?void 0:r.call(this)},set(a){const l=r==null?void 0:r.call(this);s.call(this,a),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??W}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const t=$t(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const e=this.properties,i=[...ft(e),..._t(e)];for(const r of i)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,r]of e)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const r=this._$Eu(e,i);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)e.unshift(q(r))}else t!==void 0&&e.push(q(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return mt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var s;const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){const a=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:j).toAttribute(e,i.type);this._$Em=t,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(t,e){var s;const i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const a=i.getPropertyOptions(r),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((s=a.converter)==null?void 0:s.fromAttribute)!==void 0?a.converter:j;this._$Em=r,this[r]=l.fromAttribute(e,a.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??it)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,a]of this._$Ep)this[s]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,a]of r)a.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],a)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(e)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[x("elementProperties")]=new Map,y[x("finalized")]=new Map,R==null||R({ReactiveElement:y}),(b.reactiveElementVersions??(b.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=globalThis,D=S.trustedTypes,K=D?D.createPolicy("lit-html",{createHTML:o=>o}):void 0,ot="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,st="?"+g,yt=`<${st}>`,v=document,P=()=>v.createComment(""),N=o=>o===null||typeof o!="object"&&typeof o!="function",at=Array.isArray,At=o=>at(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",L=`[ 	
\f\r]`,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,G=/-->/g,J=/>/g,f=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Y=/'/g,Z=/"/g,nt=/^(?:script|style|textarea|title)$/i,Ct=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),_=Ct(1),A=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),tt=new WeakMap,$=v.createTreeWalker(v,129);function ct(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return K!==void 0?K.createHTML(t):t}const wt=(o,t)=>{const e=o.length-1,i=[];let r,s=t===2?"<svg>":"",a=w;for(let l=0;l<e;l++){const n=o[l];let d,p,c=-1,m=0;for(;m<n.length&&(a.lastIndex=m,p=a.exec(n),p!==null);)m=a.lastIndex,a===w?p[1]==="!--"?a=G:p[1]!==void 0?a=J:p[2]!==void 0?(nt.test(p[2])&&(r=RegExp("</"+p[2],"g")),a=f):p[3]!==void 0&&(a=f):a===f?p[0]===">"?(a=r??w,c=-1):p[1]===void 0?c=-2:(c=a.lastIndex-p[2].length,d=p[1],a=p[3]===void 0?f:p[3]==='"'?Z:Y):a===Z||a===Y?a=f:a===G||a===J?a=w:(a=f,r=void 0);const u=a===f&&o[l+1].startsWith("/>")?" ":"";s+=a===w?n+yt:c>=0?(i.push(d),n.slice(0,c)+ot+n.slice(c)+g+u):n+g+(c===-2?l:u)}return[ct(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};class O{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let s=0,a=0;const l=t.length-1,n=this.parts,[d,p]=wt(t,e);if(this.el=O.createElement(d,i),$.currentNode=this.el.content,e===2){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=$.nextNode())!==null&&n.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const c of r.getAttributeNames())if(c.endsWith(ot)){const m=p[a++],u=r.getAttribute(c).split(g),U=/([.?@])?(.*)/.exec(m);n.push({type:1,index:s,name:U[2],strings:u,ctor:U[1]==="."?St:U[1]==="?"?Et:U[1]==="@"?Pt:T}),r.removeAttribute(c)}else c.startsWith(g)&&(n.push({type:6,index:s}),r.removeAttribute(c));if(nt.test(r.tagName)){const c=r.textContent.split(g),m=c.length-1;if(m>0){r.textContent=D?D.emptyScript:"";for(let u=0;u<m;u++)r.append(c[u],P()),$.nextNode(),n.push({type:2,index:++s});r.append(c[m],P())}}}else if(r.nodeType===8)if(r.data===st)n.push({type:2,index:s});else{let c=-1;for(;(c=r.data.indexOf(g,c+1))!==-1;)n.push({type:7,index:s}),c+=g.length-1}s++}}static createElement(t,e){const i=v.createElement("template");return i.innerHTML=t,i}}function C(o,t,e=o,i){var a,l;if(t===A)return t;let r=i!==void 0?(a=e._$Co)==null?void 0:a[i]:e._$Cl;const s=N(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),s===void 0?r=void 0:(r=new s(o),r._$AT(o,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=r:e._$Cl=r),r!==void 0&&(t=C(o,r._$AS(o,t.values),r,i)),t}class xt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=((t==null?void 0:t.creationScope)??v).importNode(e,!0);$.currentNode=r;let s=$.nextNode(),a=0,l=0,n=i[0];for(;n!==void 0;){if(a===n.index){let d;n.type===2?d=new k(s,s.nextSibling,this,t):n.type===1?d=new n.ctor(s,n.name,n.strings,this,t):n.type===6&&(d=new Nt(s,this,t)),this._$AV.push(d),n=i[++l]}a!==(n==null?void 0:n.index)&&(s=$.nextNode(),a++)}return $.currentNode=v,r}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class k{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),N(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):At(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==h&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(v.createTextNode(t)),this._$AH=t}$(t){var s;const{values:e,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=O.createElement(ct(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(e);else{const a=new xt(r,this),l=a.u(this.options);a.p(e),this.T(l),this._$AH=a}}_$AC(t){let e=tt.get(t.strings);return e===void 0&&tt.set(t.strings,e=new O(t)),e}k(t){at(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const s of t)r===e.length?e.push(i=new k(this.S(P()),this.S(P()),this,this.options)):i=e[r],i._$AI(s),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class T{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,s){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=h}_$AI(t,e=this,i,r){const s=this.strings;let a=!1;if(s===void 0)t=C(this,t,e,0),a=!N(t)||t!==this._$AH&&t!==A,a&&(this._$AH=t);else{const l=t;let n,d;for(t=s[0],n=0;n<s.length-1;n++)d=C(this,l[i+n],e,n),d===A&&(d=this._$AH[n]),a||(a=!N(d)||d!==this._$AH[n]),d===h?t=h:t!==h&&(t+=(d??"")+s[n+1]),this._$AH[n]=d}a&&!r&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class St extends T{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}}class Et extends T{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}}class Pt extends T{constructor(t,e,i,r,s){super(t,e,i,r,s),this.type=5}_$AI(t,e=this){if((t=C(this,t,e,0)??h)===A)return;const i=this._$AH,r=t===h&&i!==h||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==h&&(i===h||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const z=S.litHtmlPolyfillSupport;z==null||z(O,k),(S.litHtmlVersions??(S.litHtmlVersions=[])).push("3.1.3");const Ot=(o,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let r=i._$litPart$;if(r===void 0){const s=(e==null?void 0:e.renderBefore)??null;i._$litPart$=r=new k(t.insertBefore(P(),s),s,void 0,e??{})}return r._$AI(o),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class E extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ot(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return A}}var et;E._$litElement$=!0,E.finalized=!0,(et=globalThis.litElementHydrateSupport)==null||et.call(globalThis,{LitElement:E});const I=globalThis.litElementPolyfillSupport;I==null||I({LitElement:E});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");const kt={abrigo:[{nombre:"Chaqueta Impermeable En Gabán Para Dama 'Azul'",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_787280-MCO51843885132_102022-F.webp",precio:93900,id:1},{nombre:"Chaqueta Impermeable En Gabán Para Dama 'Negro'",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_904140-MCO51843801912_102022-F.webp",precio:93900,id:2},{nombre:"Chaqueta Impermeable En Gabán Para Dama 'Blanco'",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_930447-MCO71410142210_092023-F.webp",precio:93900,id:3},{nombre:"Chaqueta Hombre Cuero Sintético",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_712593-MCO41606376126_052020-F.webp",precio:102e3,id:4},{nombre:"Calidad Chaqueta Hombre Algodon Colombiano Buso Ropa Buzos",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_829630-MCO31080337339_062019-F.webp",precio:77900,id:5}],camiseta:[{nombre:"Camiseta De Compresión En Licra Uv Slim.",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_906094-MCO53976036500_022023-F.webp",precio:38e3,id:6},{nombre:"Camiseta Tipo Polo Color Dama Mujer.",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_649847-MCO43854241255_102020-F.webp",precio:26255,id:7},{nombre:"Camiseta Deportiva, Crossfit, Gym, Ejercicios Al Aire Libre.",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_995623-MCO70722158553_072023-F.webp",precio:29900,id:8},{nombre:"Camisetas Bandas De Rock Metal Heavy Riffs.",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_776916-MCO72088562654_102023-F.webp",precio:32850,id:9},{nombre:"Camiseta Anime Nezuko Kamado Kimetsu No Yaiba Demon Slayer",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_968038-MCO53410409233_012023-F.webp",precio:29900,id:10}],pantalon:[{nombre:"Pantalon En Dril Licrado Para Hombre.",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_731406-MCO42646277112_072020-F.webp",precio:58900,id:11},{nombre:"Pantalón Camuflado Hermoso.",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_795748-MCO70527773883_072023-F.webp",precio:104405,id:12},{nombre:"Pantalón Jogger Cargo, Táctico, Militar.",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_758206-MCO70501309390_072023-F.webp",precio:104500,id:13},{nombre:"Pantalón Jeans De Colores Entubado Para Hombre.",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_947436-MCO69626235546_052023-F.webp",precio:61750,id:14},{nombre:"Pantalon Camuflado, De Bolsillos 100% Dreal",imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_618657-MCO69523195685_052023-F.webp",precio:89990,id:15}]},Ut=()=>kt;class B extends E{constructor(){super(),this.abrigos=[],this.camisetas=[],this.pantalones=[],this.categoriaSeleccionada="todos",this.productos=[],this.carrito=[],this.mostrandoCarrito=!1}connectedCallback(){super.connectedCallback(),this.fetchData()}fetchData(){const t=Ut();this.abrigos=t.abrigo,this.camisetas=t.camiseta,this.pantalones=t.pantalon,this.productos=[...this.abrigos,...this.camisetas,...this.pantalones]}cambiarCategoria(t){switch(this.mostrandoCarrito=!1,this.categoriaSeleccionada=t,this.categoriaSeleccionada){case"abrigos":this.productos=this.abrigos;break;case"camisetas":this.productos=this.camisetas;break;case"pantalones":this.productos=this.pantalones;break;default:this.productos=[...this.abrigos,...this.camisetas,...this.pantalones]}this.requestUpdate()}agregarAlCarrito(t){this.carrito=[...this.carrito,t],this.requestUpdate()}mostrarCarrito(){this.mostrandoCarrito=!0,this.requestUpdate()}eliminarDelCarrito(t){this.carrito=this.carrito.filter(e=>e!==t),this.requestUpdate()}render(){return _`
      <div class="wrapper ${this.menuAbierto?"menu-abierto":""}">
        <aside>
          <header>
            <h1 class="logo">CampusLands</h1>
            <button class="open-menu" @click="${this.toggleMenu}">
              <i class="bi bi-list"></i>
            </button>
          </header>
          <nav>
            <ul class="menu">
              <li>
                <button @click=${()=>this.cambiarCategoria("todos")} id="todos" class="boton-menu boton-categoria ${this.categoriaSeleccionada==="todos"?"active":""}">Todos los productos</button>
              </li>
              <li>
                <button @click=${()=>this.cambiarCategoria("abrigos")} id="abrigos" class="boton-menu boton-categoria ${this.categoriaSeleccionada==="abrigos"?"active":""}"> Abrigos</button>
              </li>
              <li>
                <button @click=${()=>this.cambiarCategoria("camisetas")} id="camisetas" class="boton-menu boton-categoria ${this.categoriaSeleccionada==="camisetas"?"active":""}"> Camisetas</button>
              </li>
              <li>
                <button @click=${()=>this.cambiarCategoria("pantalones")} id="pantalones" class="boton-menu boton-categoria ${this.categoriaSeleccionada==="pantalones"?"active":""}">Pantalones</button>
              </li>
              <li>
                <a class="boton-menu boton-carrito" @click=${()=>this.mostrarCarrito()} >
                <box-icon type='solid' name='cart'></box-icon> Carrito <span id="numerito" class="numerito">${this.carrito.length}</span>
                </a>
              </li>
            </ul>
          </nav>
          <footer>
            <p class="texto-footer">© 2024 CampusLands</p>
          </footer>
        </aside>
        
        <main class="main-container">
          <!-- APARTADO DEL CARRITO  -->
          ${this.mostrandoCarrito?_`
            <div class="contenedor-carrito">
              <h2>Carrito</h2>
              <div class="carrito-productos">
                ${this.carrito.length===0?_`<p class="carrito-vacio">El carrito está vacío</p>`:this.carrito.map(t=>_`
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
          `:_`
            <h2 class="titulo-principal" id="titulo-principal">Todos los productos</h2>
            <div class="contenedor-productos">
              ${this.productos.slice(0,this.productosVisibles).map(t=>_`
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
            <!-- Botón para ver más productos -->
            ${this.productosVisibles<this.productos.length?_`
                <button class="ver-mas" @click="${this.mostrarMasProductos}">
                  Ver más
                  <i class="bi bi-arrow-down"></i>
                </button>`:""}
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
    
    .box-icon {
      color: var(--clr-white);
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

    @media screen and (max-width: 850px) {
      .contenedor-productos {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
      
    @media screen and (max-width: 675px) {
      .contenedor-productos {
        grid-template-columns: 1fr 1fr;
      }
    }
      
    @media screen and (max-width: 600px) {
      .wrapper {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }

      aside {
        position: fixed;
        z-index: 9;
        background-color: var(--clr-main);
        left: 0;
        box-shadow: 0 0 0 100vmax rgba(0, 0, 0, .75);
        transform: translateX(-100%);
        opacity: 0;
        visibility: hidden;
        transition: .2s;
      }
      
      .aside-visible {
        transform: translateX(0);
        opacity: 1;
        visibility: visible;
      }
      
      .boton-menu.active::before,
      .boton-menu.active::after {
        display: none;
      }
      
      main {
        margin: 1rem;
        margin-top: 0;
        padding: 2rem;
      }
      
      .contenedor-productos {
        grid-template-columns: 1fr 1fr;
      }
      
      .header-mobile {
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .header-mobile .logo {
        color: var(--clr-gray);
      }
      
      .open-menu, .close-menu {
        background-color: transparent;
        color: var(--clr-gray);
        border: 0;
        font-size: 2rem;
        cursor: pointer;
      }
      
      .close-menu {
        display: block;
        position: absolute;
        top: 1rem;
        right: 1rem;
      }
      
      .carrito-producto {
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: flex-start;
        padding: .5rem;
      }
      
      .carrito-producto-subtotal {
        display: none;
      }
      
      .carrito-acciones {
        flex-wrap: wrap;
        row-gap: 1rem;
      }
      }
      
    @media screen and (max-width: 480px) {
      .contenedor-productos {
        grid-template-columns: 1fr;
      }

      .menu{
        display: none
      }

      .menu.active{
        display: block;
      }
    }
  `);customElements.define("my-element",B);
