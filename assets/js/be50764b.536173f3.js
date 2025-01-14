"use strict";(self.webpackChunkcodax_documentation=self.webpackChunkcodax_documentation||[]).push([[8625],{3905:(e,r,a)=>{a.d(r,{Zo:()=>c,kt:()=>f});var t=a(7294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function u(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=t.createContext({}),s=function(e){var r=t.useContext(i),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},c=function(e){var r=s(e.components);return t.createElement(i.Provider,{value:r},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(a),p=n,f=d["".concat(i,".").concat(p)]||d[p]||m[p]||o;return a?t.createElement(f,l(l({ref:r},c),{},{components:a})):t.createElement(f,l({ref:r},c))}));function f(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=p;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u[d]="string"==typeof e?e:n,l[1]=u;for(var s=2;s<o;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,r,a)=>{a.d(r,{Z:()=>l});var t=a(7294),n=a(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:r,hidden:a,className:l}=e;return t.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:a},r)}},4866:(e,r,a)=>{a.d(r,{Z:()=>k});var t=a(7462),n=a(7294),o=a(6010),l=a(2466),u=a(6550),i=a(1980),s=a(7392),c=a(12);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:a,attributes:t,default:n}}=e;return{value:r,label:a,attributes:t,default:n}}))}function m(e){const{values:r,children:a}=e;return(0,n.useMemo)((()=>{const e=r??d(a);return function(e){const r=(0,s.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,a])}function p(e){let{value:r,tabValues:a}=e;return a.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:a}=e;const t=(0,u.k6)(),o=function(e){let{queryString:r=!1,groupId:a}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:r,groupId:a});return[(0,i._X)(o),(0,n.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(t.location.search);r.set(o,e),t.replace({...t.location,search:r.toString()})}),[o,t])]}function g(e){const{defaultValue:r,queryString:a=!1,groupId:t}=e,o=m(e),[l,u]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:o}))),[i,s]=f({queryString:a,groupId:t}),[d,g]=function(e){let{groupId:r}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(r),[t,o]=(0,c.Nk)(a);return[t,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:t}),b=(()=>{const e=i??d;return p({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),g(e)}),[s,g,o]),tabValues:o}}var b=a(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:r,block:a,selectedValue:u,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const r=e.currentTarget,a=c.indexOf(r),t=s[a].value;t!==u&&(d(r),i(t))},p=e=>{let r=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;r=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;r=c[a]??c[c.length-1];break}}r?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},r)},s.map((e=>{let{value:r,label:a,attributes:l}=e;return n.createElement("li",(0,t.Z)({role:"tab",tabIndex:u===r?0:-1,"aria-selected":u===r,key:r,ref:e=>c.push(e),onKeyDown:p,onClick:m},l,{className:(0,o.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":u===r})}),a??r)})))}function h(e){let{lazy:r,children:a,selectedValue:t}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===t));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==t}))))}function w(e){const r=g(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},n.createElement(y,(0,t.Z)({},e,r)),n.createElement(h,(0,t.Z)({},e,r)))}function k(e){const r=(0,b.Z)();return n.createElement(w,(0,t.Z)({key:String(r)},e))}},5730:(e,r,a)=>{a.d(r,{Z:()=>l});var t=a(7294),n=a(6010);const o={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",right:"right_oyze",browserWindowBody:"browserWindowBody_Idgs"};function l(e){let{children:r,minHeight:a="auto",style:l,bodyStyle:u,title:i}=e;return t.createElement("div",{className:o.browserWindow,style:{...l,minHeight:a}},t.createElement("div",{className:(0,n.Z)(o.browserWindowHeader,"text--truncate")},i),t.createElement("div",{className:o.browserWindowBody,style:u},r))}},784:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var t=a(7462),n=(a(7294),a(3905)),o=a(5730),l=a(4866),u=a(5162);const i={sidebar_position:15},s="agregar",c={unversionedId:"Lista/agregar",id:"Lista/agregar",title:"agregar",description:"Modifica el arreglo original al agregar los elementos y retorna la nueva longitud del arreglo despu\xe9s de la operaci\xf3n.",source:"@site/docs/Lista/agregar.mdx",sourceDirName:"Lista",slug:"/Lista/agregar",permalink:"/methods/Lista/agregar",draft:!1,editUrl:"https://github.com/self-david/codax-documentation/tree/main/docs/Lista/agregar.mdx",tags:[],version:"current",lastUpdatedBy:"David Gutierrez Alvarez",lastUpdatedAt:1736873623,formattedLastUpdatedAt:"Jan 14, 2025",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"sacar",permalink:"/methods/Lista/sacar"},next:{title:"invertir",permalink:"/methods/Lista/invertir"}},d={},m=[{value:"Ejemplo\ud83d\udcdd",id:"ejemplo",level:2}],p={toc:m},f="wrapper";function g(e){let{components:r,...a}=e;return(0,n.kt)(f,(0,t.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"agregar"},"agregar"),(0,n.kt)("p",null,"Modifica el arreglo original al agregar los elementos y retorna la nueva longitud del arreglo despu\xe9s de la operaci\xf3n."),(0,n.kt)("h2",{id:"ejemplo"},"Ejemplo\ud83d\udcdd"),(0,n.kt)(o.Z,{title:"",mdxType:"BrowserWindow"},(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"var1",label:"Variante 1",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},"// Crear un arreglo de ejemplo\nvar frutas = ['manzana', 'pera', 'naranja'];\n\n// Agregar una nueva fruta al arreglo usando agregar\nvar nuevaFruta = 'uva';\nvar nuevaLongitud = frutas.agregar(nuevaFruta);\n\nimprimir(nuevaLongitud);\nimprimir(frutas);\n")),(0,n.kt)("p",null,"Salida:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},"// 4\n// ['manzana', 'pera', 'naranja', 'uva']\n"))),(0,n.kt)(u.Z,{value:"var2",label:"Variante 2",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},"// Crear un arreglo de ejemplo\nvar frutas = ['manzana', 'pera', 'naranja'];\n\n// Agregar m\xfaltiples frutas al arreglo usando agregar\nvar nuevasFrutas = ['mango', 'sand\xeda'];\nvar muchasFrutas = frutas.agregar(nuevasFrutas);\n\nimprimir(muchasFrutas);\n")),(0,n.kt)("p",null,"Salida:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},"// ['manzana', 'pera', 'naranja', 'uva', 'mango', 'sand\xeda']\n"))))))}g.isMDXComponent=!0}}]);