"use strict";(self.webpackChunkcodax_documentation=self.webpackChunkcodax_documentation||[]).push([[2707],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>p});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),i=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=i(a),f=n,p=d["".concat(u,".").concat(f)]||d[f]||m[f]||o;return a?r.createElement(p,l(l({ref:t},s),{},{components:a})):r.createElement(p,l({ref:t},s))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[d]="string"==typeof e?e:n,l[1]=c;for(var i=2;i<o;i++)l[i]=a[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>E});var r=a(7462),n=a(7294),o=a(6010),l=a(2466),c=a(6550),u=a(1980),i=a(7392),s=a(12);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function f(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const r=(0,c.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=m(e),[l,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,i]=p({queryString:a,groupId:r}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,s.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),h=(()=>{const e=u??d;return f({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{h&&c(h)}),[h]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),i(e),b(e)}),[i,b,o]),tabValues:o}}var h=a(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:c,selectValue:u,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=s.indexOf(t),r=i[a].value;r!==c&&(d(t),u(r))},f=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;t=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;t=s[a]??s[s.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>s.push(e),onKeyDown:f,onClick:m},l,{className:(0,o.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":c===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=b(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},n.createElement(y,(0,r.Z)({},e,t)),n.createElement(g,(0,r.Z)({},e,t)))}function E(e){const t=(0,h.Z)();return n.createElement(w,(0,r.Z)({key:String(t)},e))}},5730:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(6010);const o={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",right:"right_oyze",browserWindowBody:"browserWindowBody_Idgs"};function l(e){let{children:t,minHeight:a="auto",style:l,bodyStyle:c,title:u}=e;return r.createElement("div",{className:o.browserWindow,style:{...l,minHeight:a}},r.createElement("div",{className:(0,n.Z)(o.browserWindowHeader,"text--truncate")},u),r.createElement("div",{className:o.browserWindowBody,style:c},t))}},869:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=a(7462),n=(a(7294),a(3905));a(5730),a(4866),a(5162);const o={sidebar_position:12},l="actualizarFecha",c={unversionedId:"fecha/actualizarFecha",id:"fecha/actualizarFecha",title:"actualizarFecha",description:"Establece el d\xeda del mes de un objeto Fecha. Permite modificar el d\xeda del mes de una fecha existente, sin afectar a otros componentes de la fecha como el mes o el a\xf1o.",source:"@site/docs/fecha/actualizarFecha.mdx",sourceDirName:"fecha",slug:"/fecha/actualizarFecha",permalink:"/methods/fecha/actualizarFecha",draft:!1,editUrl:"https://github.com/self-david/codax-documentation/tree/main/docs/fecha/actualizarFecha.mdx",tags:[],version:"current",lastUpdatedBy:"David Gutierrez Alvarez",lastUpdatedAt:1736873623,formattedLastUpdatedAt:"Jan 14, 2025",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"textoAFecha",permalink:"/methods/fecha/textoAFecha"},next:{title:"actualizarA\xf1o",permalink:"/methods/fecha/actualizarA\xf1o"}},u={},i=[{value:"Ejemplo\ud83d\udcdd",id:"ejemplo",level:2}],s={toc:i},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"actualizarfecha"},"actualizarFecha"),(0,n.kt)("p",null,"Establece el d\xeda del mes de un objeto Fecha. Permite modificar el d\xeda del mes de una fecha existente, sin afectar a otros componentes de la fecha como el mes o el a\xf1o."),(0,n.kt)("h2",{id:"ejemplo"},"Ejemplo\ud83d\udcdd"),(0,n.kt)("p",null,"La fecha modificada se refleja en el propio objeto Fecha, y tambi\xe9n se devuelve el valor num\xe9rico correspondiente al nuevo d\xeda del mes."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},'var fecha = crear Fecha(); // Fecha actual\nvar nuevoDia = 20;\n\nvar diaDelMes = fecha.actualizarFecha(nuevoDia); // Establecer el d\xeda del mes\n\nimprimir("Nueva fecha:", fecha);\nimprimir("D\xeda del mes modificado:", diaDelMes);\n\n')),(0,n.kt)("p",null,"Salida:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},"// Nueva fecha: Tue Jul 20 2023 15:05:23 GMT-0700 (Pacific Daylight Time)\n// D\xeda del mes modificado: 1626767123472\n")),(0,n.kt)("p",null,"El m\xe9todo actualizarFecha es \xfatil cuando necesitas cambiar el d\xeda del mes en una fecha, por ejemplo, para calcular una fecha futura o pasada en una aplicaci\xf3n de calendario."))}m.isMDXComponent=!0}}]);