"use strict";(self.webpackChunkcodax_documentation=self.webpackChunkcodax_documentation||[]).push([[8487],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>f});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?t.createElement(f,i(i({ref:n},u),{},{components:r})):t.createElement(f,i({ref:n},u))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5030:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=r(7462),a=(r(7294),r(3905));const o={sidebar_position:29},i="Bloques inconsistentes",s={unversionedId:"consistent-return",id:"consistent-return",title:"Bloques inconsistentes",description:"Este error ocurre cuando una funci\xf3n tiene m\xfaltiples rutas de ejecuci\xf3n (como condicionales) y no todas ellas devuelven un valor.",source:"@site/errors/29-consistent-return.mdx",sourceDirName:".",slug:"/consistent-return",permalink:"/errors/consistent-return",draft:!1,tags:[],version:"current",sidebarPosition:29,frontMatter:{sidebar_position:29},sidebar:"tutorialSidebar",previous:{title:"CamelCase",permalink:"/errors/camelcase"},next:{title:"Sin llaves",permalink:"/errors/curly"}},l={},c=[{value:"Ejemplo\ud83d\udcdd",id:"ejemplo",level:2},{value:"Explicaci\xf3n",id:"explicaci\xf3n",level:2},{value:"Causa",id:"causa",level:2},{value:"Soluci\xf3n",id:"soluci\xf3n",level:2}],u={toc:c},d="wrapper";function p(e){let{components:n,...r}=e;return(0,a.kt)(d,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bloques-inconsistentes"},"Bloques inconsistentes"),(0,a.kt)("p",null,"Este error ocurre cuando una funci\xf3n tiene m\xfaltiples rutas de ejecuci\xf3n (como condicionales) y no todas ellas devuelven un valor.\nuna funci\xf3n debe devolver un valor de manera consistente en todas sus posibles rutas de ejecuci\xf3n."),(0,a.kt)("h2",{id:"ejemplo"},"Ejemplo\ud83d\udcdd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dummy"},'funcion obtenerMensaje(condicion) {\n  si (condicion) {\n    regresar "Mensaje A";\n  } sino {\n    // Falta un retorno en esta rama\n  }\n}\n\nconst mensaje = obtenerMensaje(false);\nimprimir(mensaje); // Puede ser "indefinido"\n')),(0,a.kt)("p",null,"En este ejemplo, la funci\xf3n ",(0,a.kt)("inlineCode",{parentName:"p"},"obtenerMensaje")," tiene dos rutas de ejecuci\xf3n: una cuando condicion es verdadera y otra cuando es falsa.\nSin embargo, solo se devuelve un valor en la primera ruta, lo que provoca el error."),(0,a.kt)("h2",{id:"explicaci\xf3n"},"Explicaci\xf3n"),(0,a.kt)("p",null,"Es importante que una funci\xf3n devuelva un valor en todas las rutas de ejecuci\xf3n posibles para garantizar que siempre haya un resultado definido\ny predecible cuando se llama a la funci\xf3n."),(0,a.kt)("h2",{id:"causa"},"Causa"),(0,a.kt)("p",null,"Este error suele ocurrir debido a una falta de atenci\xf3n al escribir el c\xf3digo, especialmente al manejar casos en los que una funci\xf3n puede tener\ndiferentes caminos de ejecuci\xf3n."),(0,a.kt)("h2",{id:"soluci\xf3n"},"Soluci\xf3n"),(0,a.kt)("p",null,"Para solucionar el error, debes asegurarte de que la funci\xf3n devuelva un valor en todas las rutas de ejecuci\xf3n posibles.\nEn el ejemplo anterior, podr\xedas agregar un valor de retorno en la rama else para que la funci\xf3n devuelva un valor en ambos casos:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dummy"},'funcion obtenerMensaje(condicion) {\n  si (condicion) {\n    regresar "Mensaje A";\n  } sino {\n    regresar "Mensaje B"; // Agregamos un retorno en esta rama\n  }\n}\n\nconst mensaje = obtenerMensaje(false);\nimprimir(mensaje); // Siempre tendr\xe1 un valor definido\n')),(0,a.kt)("p",null,"Al agregar un retorno en todas las rutas de ejecuci\xf3n, el error se soluciona y se garantiza un comportamiento predecible de la funci\xf3n."))}p.isMDXComponent=!0}}]);