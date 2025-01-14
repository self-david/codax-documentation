"use strict";(self.webpackChunkcodax_documentation=self.webpackChunkcodax_documentation||[]).push([[6691],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=a.createContext({}),c=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=c(e.components);return a.createElement(u.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=n,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(f,l(l({ref:r},s),{},{components:t})):a.createElement(f,l({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,r,t)=>{t.d(r,{Z:()=>l});var a=t(7294),n=t(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:r,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:t},r)}},4866:(e,r,t)=>{t.d(r,{Z:()=>k});var a=t(7462),n=t(7294),o=t(6010),l=t(2466),i=t(6550),u=t(1980),c=t(7392),s=t(12);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:a,default:n}}=e;return{value:r,label:t,attributes:a,default:n}}))}function p(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??d(t);return function(e){const r=(0,c.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function m(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:t}=e;const a=(0,i.k6)(),o=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,u._X)(o),(0,n.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(a.location.search);r.set(o,e),a.replace({...a.location,search:r.toString()})}),[o,a])]}function b(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,o=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:o}))),[u,c]=f({queryString:t,groupId:a}),[d,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,o]=(0,s.Nk)(t);return[a,(0,n.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),g=(()=>{const e=u??d;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var g=t(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:r,block:t,selectedValue:i,selectValue:u,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const r=e.currentTarget,t=s.indexOf(r),a=c[t].value;a!==i&&(d(r),u(a))},m=e=>{let r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;r=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;r=s[t]??s[s.length-1];break}}r?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},r)},c.map((e=>{let{value:r,label:t,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===r?0:-1,"aria-selected":i===r,key:r,ref:e=>s.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":i===r})}),t??r)})))}function h(e){let{lazy:r,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a}))))}function w(e){const r=b(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},n.createElement(y,(0,a.Z)({},e,r)),n.createElement(h,(0,a.Z)({},e,r)))}function k(e){const r=(0,g.Z)();return n.createElement(w,(0,a.Z)({key:String(r)},e))}},5730:(e,r,t)=>{t.d(r,{Z:()=>l});var a=t(7294),n=t(6010);const o={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",right:"right_oyze",browserWindowBody:"browserWindowBody_Idgs"};function l(e){let{children:r,minHeight:t="auto",style:l,bodyStyle:i,title:u}=e;return a.createElement("div",{className:o.browserWindow,style:{...l,minHeight:t}},a.createElement("div",{className:(0,n.Z)(o.browserWindowHeader,"text--truncate")},u),a.createElement("div",{className:o.browserWindowBody,style:i},r))}},9274:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>u,metadata:()=>s,toc:()=>p});var a=t(7462),n=(t(7294),t(3905)),o=t(5730),l=t(4866),i=t(5162);const u={sidebar_position:17},c="cortar",s={unversionedId:"Lista/cortar",id:"Lista/cortar",title:"cortar",description:"se utiliza para crear una copia superficial de una porci\xf3n de un arreglo (tambi\xe9n conocido como lista) y retornarla como un nuevo arreglo.",source:"@site/docs/Lista/cortar.mdx",sourceDirName:"Lista",slug:"/Lista/cortar",permalink:"/methods/Lista/cortar",draft:!1,editUrl:"https://github.com/self-david/codax-documentation/tree/main/docs/Lista/cortar.mdx",tags:[],version:"current",lastUpdatedBy:"David Gutierrez Alvarez",lastUpdatedAt:1736873623,formattedLastUpdatedAt:"Jan 14, 2025",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"sacarPrimero",permalink:"/methods/Lista/sacarPrimero"},next:{title:"alguno",permalink:"/methods/Lista/alguno"}},d={},p=[{value:"Ejemplo\ud83d\udcdd",id:"ejemplo",level:2}],m={toc:p},f="wrapper";function b(e){let{components:r,...t}=e;return(0,n.kt)(f,(0,a.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cortar"},"cortar"),(0,n.kt)("p",null,"se utiliza para crear una copia superficial de una porci\xf3n de un arreglo (tambi\xe9n conocido como lista) y retornarla como un nuevo arreglo. "),(0,n.kt)("h2",{id:"ejemplo"},"Ejemplo\ud83d\udcdd"),(0,n.kt)(o.Z,{title:"",mdxType:"BrowserWindow"},(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"var1",label:"Variante 1",mdxType:"TabItem"},(0,n.kt)("p",null,"Puedes usar cortar() para seleccionar una porci\xf3n espec\xedfica del arreglo original sin modificarlo."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},"// Crear un arreglo de ejemplo\nvar numeros = [1, 2, 3, 4, 5];\n\n// Crear una copia de una porci\xf3n del arreglo usando cortar\nvar copiaNumeros = numeros.cortar(1, 4);\n\nimprimir(copiaNumeros);\n")),(0,n.kt)("p",null,"Salida:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},"// [2, 3, 4]\n"))),(0,n.kt)(i.Z,{value:"var2",label:"Variante 2",mdxType:"TabItem"},(0,n.kt)("p",null,"Tambi\xe9n puedes usar cortar() sin argumentos para crear una copia completa del arreglo original"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},"// Crear un arreglo de ejemplo\nvar numeros = [1, 2, 3, 4, 5];\n\n// Crear una copia completa del arreglo usando cortar sin argumentos\nvar copiaCompleta = numeros.cortar();\n\n// La variable copiaCompleta contendr\xe1 una copia completa del arreglo numeros\nimprimir(copiaCompleta);\n")),(0,n.kt)("p",null,"Salida:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},"// [1, 2, 3, 4, 5]\n"))))),(0,n.kt)("p",null,"Este m\xe9todo no modifica el arreglo original, pero permite seleccionar elementos espec\xedficos del arreglo original y crear un nuevo arreglo con ellos."))}b.isMDXComponent=!0}}]);