"use strict";(self.webpackChunkcodax_documentation=self.webpackChunkcodax_documentation||[]).push([[9598],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),i=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(r),m=n,b=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(b,l(l({ref:t},c),{},{components:r})):a.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294),n=r(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>j});var a=r(7462),n=r(7294),o=r(6010),l=r(2466),s=r(6550),u=r(1980),i=r(7392),c=r(12);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=p(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,i]=b({queryString:r,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),v=(()=>{const e=u??d;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{v&&s(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),f(e)}),[i,f,o]),tabValues:o}}var v=r(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:r,selectedValue:s,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),a=i[r].value;a!==s&&(d(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":s===t})}),r??t)})))}function g(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=f(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},n.createElement(h,(0,a.Z)({},e,t)),n.createElement(g,(0,a.Z)({},e,t)))}function j(e){const t=(0,v.Z)();return n.createElement(w,(0,a.Z)({key:String(t)},e))}},5730:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294),n=r(6010);const o={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",right:"right_oyze",browserWindowBody:"browserWindowBody_Idgs"};function l(e){let{children:t,minHeight:r="auto",style:l,bodyStyle:s,title:u}=e;return a.createElement("div",{className:o.browserWindow,style:{...l,minHeight:r}},a.createElement("div",{className:(0,n.Z)(o.browserWindowHeader,"text--truncate")},u),a.createElement("div",{className:o.browserWindowBody,style:s},t))}},3597:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=r(7462),n=(r(7294),r(3905));r(5730),r(4866),r(5162);const o={sidebar_position:4},l="enPares",s={unversionedId:"Objeto/enPares",id:"Objeto/enPares",title:"enPares",description:"Se usa para convertir una lista de pares clave-valor en un objeto. Toma una matriz de pares clave-valor (cada par representado como una lista) y crea un objeto a partir de ellos.",source:"@site/docs/Objeto/enPares.mdx",sourceDirName:"Objeto",slug:"/Objeto/enPares",permalink:"/methods/Objeto/enPares",draft:!1,editUrl:"https://github.com/self-david/codax-documentation/tree/main/docs/Objeto/enPares.mdx",tags:[],version:"current",lastUpdatedBy:"David Gutierrez Alvarez",lastUpdatedAt:1736873623,formattedLastUpdatedAt:"Jan 14, 2025",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"bloquear",permalink:"/methods/Objeto/bloquear"},next:{title:"estaBloqueado",permalink:"/methods/Objeto/estaBloqueado"}},u={},i=[{value:"Ejemplo\ud83d\udcdd",id:"ejemplo",level:2}],c={toc:i},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"enpares"},"enPares"),(0,n.kt)("p",null,"Se usa para convertir una lista de pares clave-valor en un objeto. Toma una matriz de pares clave-valor (cada par representado como una lista) y crea un objeto a partir de ellos."),(0,n.kt)("h2",{id:"ejemplo"},"Ejemplo\ud83d\udcdd"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},'var pares = [["a", 1], ["b", 2], ["c", 3]];\n\nvar objeto = Objeto.enPares(pares);\n\nimprimir("Objeto resultante:", objeto);\n')),(0,n.kt)("p",null,"Salida:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},"// Objeto resultante: { a: 1, b: 2, c: 3 }\n")),(0,n.kt)("p",null,"Usamos el m\xe9todo enPares para crear un objeto a partir de esta matriz. El resultado es un objeto con las propiedades y valores correspondientes a los pares clave-valor en la matriz."),(0,n.kt)("p",null,"Este m\xe9todo es \xfatil cuando tienes una lista de datos en forma de pares clave-valor y deseas convertirlos en un objeto para facilitar su manipulaci\xf3n y acceso."))}p.isMDXComponent=!0}}]);