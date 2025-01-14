"use strict";(self.webpackChunkcodax_documentation=self.webpackChunkcodax_documentation||[]).push([[7712],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>b});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function u(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),i=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=i(e.components);return r.createElement(s.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=i(t),p=n,b=d["".concat(s,".").concat(p)]||d[p]||m[p]||l;return t?r.createElement(b,o(o({ref:a},c),{},{components:t})):r.createElement(b,o({ref:a},c))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=p;var u={};for(var s in a)hasOwnProperty.call(a,s)&&(u[s]=a[s]);u.originalType=e,u[d]="string"==typeof e?e:n,o[1]=u;for(var i=2;i<l;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>o});var r=t(7294),n=t(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:a,hidden:t,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:t},a)}},4866:(e,a,t)=>{t.d(a,{Z:()=>k});var r=t(7462),n=t(7294),l=t(6010),o=t(2466),u=t(6550),s=t(1980),i=t(7392),c=t(12);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:r,default:n}}=e;return{value:a,label:t,attributes:r,default:n}}))}function m(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??d(t);return function(e){const a=(0,i.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function p(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function b(e){let{queryString:a=!1,groupId:t}=e;const r=(0,u.k6)(),l=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(r.location.search);a.set(l,e),r.replace({...r.location,search:a.toString()})}),[l,r])]}function f(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,l=m(e),[o,u]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:l}))),[s,i]=b({queryString:t,groupId:r}),[d,f]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,l]=(0,c.Nk)(t);return[r,(0,n.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),y=(()=>{const e=s??d;return p({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{y&&u(y)}),[y]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),f(e)}),[i,f,l]),tabValues:l}}var y=t(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:a,block:t,selectedValue:u,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=e=>{const a=e.currentTarget,t=c.indexOf(a),r=i[t].value;r!==u&&(d(a),s(r))},p=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}a?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},a)},i.map((e=>{let{value:a,label:t,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===a?0:-1,"aria-selected":u===a,key:a,ref:e=>c.push(e),onKeyDown:p,onClick:m},o,{className:(0,l.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":u===a})}),t??a)})))}function g(e){let{lazy:a,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r}))))}function w(e){const a=f(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},n.createElement(h,(0,r.Z)({},e,a)),n.createElement(g,(0,r.Z)({},e,a)))}function k(e){const a=(0,y.Z)();return n.createElement(w,(0,r.Z)({key:String(a)},e))}},5730:(e,a,t)=>{t.d(a,{Z:()=>o});var r=t(7294),n=t(6010);const l={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",right:"right_oyze",browserWindowBody:"browserWindowBody_Idgs"};function o(e){let{children:a,minHeight:t="auto",style:o,bodyStyle:u,title:s}=e;return r.createElement("div",{className:l.browserWindow,style:{...o,minHeight:t}},r.createElement("div",{className:(0,n.Z)(l.browserWindowHeader,"text--truncate")},s),r.createElement("div",{className:l.browserWindowBody,style:u},a))}},8819:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>i});var r=t(7462),n=(t(7294),t(3905));t(5730),t(4866),t(5162);const l={sidebar_position:18},o="aMayusculas",u={unversionedId:"Cadenas/aMayusculas",id:"Cadenas/aMayusculas",title:"aMayusculas",description:"Se utiliza para convertir una cadena de texto a may\xfasculas. Imagina que tienes una palabra o una frase en min\xfasculas y quieres convertirla a may\xfasculas.",source:"@site/docs/Cadenas/aMayusculas.mdx",sourceDirName:"Cadenas",slug:"/Cadenas/aMayusculas",permalink:"/methods/Cadenas/aMayusculas",draft:!1,editUrl:"https://github.com/self-david/codax-documentation/tree/main/docs/Cadenas/aMayusculas.mdx",tags:[],version:"current",lastUpdatedBy:"David Gutierrez Alvarez",lastUpdatedAt:1736873623,formattedLastUpdatedAt:"Jan 14, 2025",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"aMinusculas",permalink:"/methods/Cadenas/aMinusculas"},next:{title:"aTexto",permalink:"/methods/Cadenas/aTexto"}},s={},i=[{value:"Ejemplo\ud83d\udcdd",id:"ejemplo",level:2},{value:"Sintaxis\ud83d\udd24",id:"sintaxis",level:2}],c={toc:i},d="wrapper";function m(e){let{components:a,...t}=e;return(0,n.kt)(d,(0,r.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"amayusculas"},"aMayusculas"),(0,n.kt)("p",null,"Se utiliza para convertir una cadena de texto a may\xfasculas. Imagina que tienes una palabra o una frase en min\xfasculas y quieres convertirla a may\xfasculas. "),(0,n.kt)("h2",{id:"ejemplo"},"Ejemplo\ud83d\udcdd"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},'global palabra = "Hola Mundo";\nvar palabraMayuscula = palabra.aMayusculas();\nimprimir(palabraMayuscula);\n')),(0,n.kt)("p",null,"Salida:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},"// HOLA MUNDO\n")),(0,n.kt)("p",null,'En este ejemplo, hemos creado una variable llamada palabra que contiene la cadena "Hola Mundo". Luego utilizamos el m\xe9todo aMayusculas() en la cadena palabra para convertirla a may\xfasculas. El resultado es la cadena "HOLA MUNDO", que se imprime en la consola.'),(0,n.kt)("p",null,"El m\xe9todo aMayusculas() no afecta a los caracteres que ya est\xe1n en may\xfasculas. Solo convierte los caracteres que est\xe1n en min\xfasculas a su equivalente en may\xfasculas."),(0,n.kt)("h2",{id:"sintaxis"},"Sintaxis\ud83d\udd24"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},"aMayusculas()\n")))}m.isMDXComponent=!0}}]);