"use strict";(self.webpackChunkcodax_documentation=self.webpackChunkcodax_documentation||[]).push([[3745],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>f});var a=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var u=a.createContext({}),l=function(e){var n=a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=l(e.components);return a.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=t,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(f,i(i({ref:n},s),{},{components:r})):a.createElement(f,i({ref:n},s))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c[p]="string"==typeof e?e:t,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6081:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=r(7462),t=(r(7294),r(3905));const o={sidebar_position:4},i="Bloque vac\xedo",c={unversionedId:"no-empty",id:"no-empty",title:"Bloque vac\xedo",description:"Este error se produce cuando tienes una parte de tu c\xf3digo que no hace nada y est\xe1 en blanco. En otras palabras, no contiene instrucciones o acciones que el lenguaje de programaci\xf3n pueda ejecutar.",source:"@site/errors/4-no-empty.mdx",sourceDirName:".",slug:"/no-empty",permalink:"/errors/no-empty",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Indefinido",permalink:"/errors/no-undef"},next:{title:"Valor constante",permalink:"/errors/no-constant-condition"}},u={},l=[{value:"Ejemplo\ud83d\udcdd",id:"ejemplo",level:2},{value:"Explicaci\xf3n",id:"explicaci\xf3n",level:2},{value:"Causa",id:"causa",level:2},{value:"Soluci\xf3n",id:"soluci\xf3n",level:2}],s={toc:l},p="wrapper";function d(e){let{components:n,...r}=e;return(0,t.kt)(p,(0,a.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"bloque-vac\xedo"},"Bloque vac\xedo"),(0,t.kt)("p",null,"Este error se produce cuando tienes una parte de tu c\xf3digo que no hace nada y est\xe1 en blanco. En otras palabras, no contiene instrucciones o acciones que el lenguaje de programaci\xf3n pueda ejecutar."),(0,t.kt)("h2",{id:"ejemplo"},"Ejemplo\ud83d\udcdd"),(0,t.kt)("p",null,"Imagina que tienes una funci\xf3n vac\xeda como esta:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-dummy"},"funcion suma(a, b) {\n\n}\n")),(0,t.kt)("p",null,"o un bloque ",(0,t.kt)("inlineCode",{parentName:"p"},"si")," que no hace nada"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-dummy"},"si (edad > 10) {\n\n}\n")),(0,t.kt)("p",null,"En este ejemplo, la funci\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"suma")," y el bloque ",(0,t.kt)("inlineCode",{parentName:"p"},"si")," no realizan ninguna acci\xf3n, y eso causa el error"),(0,t.kt)("h2",{id:"explicaci\xf3n"},"Explicaci\xf3n"),(0,t.kt)("p",null,"Escribimos c\xf3digo para que la computadora realice tareas espec\xedficas. Si tienes una parte de tu c\xf3digo que est\xe1 vac\xeda, no le est\xe1s diciendo a la computadora qu\xe9 hacer, y eso puede ser un error."),(0,t.kt)("h2",{id:"causa"},"Causa"),(0,t.kt)("p",null,"Este error suele ocurrir cuando creas una estructura de c\xf3digo, como una funci\xf3n o un bucle, pero olvidas agregar las instrucciones necesarias en su interior."),(0,t.kt)("h2",{id:"soluci\xf3n"},"Soluci\xf3n"),(0,t.kt)("p",null,"Para solucionar el error, debes asegurarte de que la estructura de c\xf3digo contenga instrucciones o acciones v\xe1lidas. Aqu\xed tienes un ejemplo de c\xf3mo corregirlo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-dummy"},"funcion suma() {\n  regresar a + b\n}\n")),(0,t.kt)("p",null,"Tambien es posible que no tengas listo el codigo que escribiras, pero sabes que necesitas este bloque, para estos caso puedes escribir un comentario que explique que se hara."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-dummy"},"si (edad > 10) {\n  // aqui le daremos permisos para iniciar sesion\n}\n")))}d.isMDXComponent=!0}}]);