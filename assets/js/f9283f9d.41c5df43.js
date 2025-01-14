"use strict";(self.webpackChunkcodax_documentation=self.webpackChunkcodax_documentation||[]).push([[3067],{3905:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>f});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),u=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},s=function(e){var r=u(e.components);return t.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?t.createElement(f,l(l({ref:r},s),{},{components:n})):t.createElement(f,l({ref:r},s))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1880:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var t=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},l="Punto y coma",i={unversionedId:"semi",id:"semi",title:"Punto y coma",description:"Este error ocurre cuando olvidas colocar un punto y coma (;) al final de una l\xednea de c\xf3digo donde deber\xeda estar presente seg\xfan las reglas del lenguaje de programaci\xf3n.",source:"@site/errors/1-semi.mdx",sourceDirName:".",slug:"/semi",permalink:"/errors/semi",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduccion",permalink:"/errors/"},next:{title:"Punto y coma extra",permalink:"/errors/no-extra-semi"}},c={},u=[{value:"Ejemplo\ud83d\udcdd",id:"ejemplo",level:2},{value:"Explicaci\xf3n",id:"explicaci\xf3n",level:2},{value:"Causa",id:"causa",level:2},{value:"Soluci\xf3n",id:"soluci\xf3n",level:2}],s={toc:u},p="wrapper";function d(e){let{components:r,...n}=e;return(0,a.kt)(p,(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"punto-y-coma"},"Punto y coma"),(0,a.kt)("p",null,"Este error ocurre cuando olvidas colocar un punto y coma (;) al final de una l\xednea de c\xf3digo donde deber\xeda estar presente seg\xfan las reglas del lenguaje de programaci\xf3n."),(0,a.kt)("h2",{id:"ejemplo"},"Ejemplo\ud83d\udcdd"),(0,a.kt)("p",null,"Supongamos que est\xe1s escribiendo c\xf3digo en tu lenguaje de programaci\xf3n y tienes esto:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dummy"},"const variable = 42\nimprimir(variable)\n")),(0,a.kt)("p",null,"Aqu\xed, falta el punto y coma al final de la l\xednea. Esto es lo que causa el error."),(0,a.kt)("h2",{id:"explicaci\xf3n"},"Explicaci\xf3n"),(0,a.kt)("p",null,"El punto y coma (;) se usa para indicar el final de una instrucci\xf3n o l\xednea de c\xf3digo.\nCuando falta el punto y coma, el lenguaje puede confundirse y no entender correctamente d\xf3nde termina una instrucci\xf3n y comienza la siguiente."),(0,a.kt)("h2",{id:"causa"},"Causa"),(0,a.kt)("p",null,"Este error suele ocurrir debido a un olvido simple al escribir c\xf3digo."),(0,a.kt)("h2",{id:"soluci\xf3n"},"Soluci\xf3n"),(0,a.kt)("p",null,"Para solucionar el error, simplemente debes agregar el punto y coma (;) al final de la l\xednea que falta. Aqu\xed est\xe1 el c\xf3digo corregido:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dummy"},"const variable = 42;\nimprimir(variable);\n")))}d.isMDXComponent=!0}}]);