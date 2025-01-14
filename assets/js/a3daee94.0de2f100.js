"use strict";(self.webpackChunkcodax_documentation=self.webpackChunkcodax_documentation||[]).push([[8659],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:7},i="Mate",s={unversionedId:"Mate",id:"Mate",title:"Mate",description:'Proporciona una serie de propiedades y m\xe9todos para realizar operaciones matem\xe1ticas en n\xfameros. Aunque no es un "tipo de dato" en s\xed mismo, es una parte fundamental cuando se necesitan operaciones matem\xe1ticas avanzadas.',source:"@site/datatypes/Mate.mdx",sourceDirName:".",slug:"/Mate",permalink:"/datatypes/Mate",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Fecha",permalink:"/datatypes/Fecha"},next:{title:"Objeto",permalink:"/datatypes/Objeto"}},c={},l=[{value:"Funciones Matem\xe1ticas:",id:"funciones-matem\xe1ticas",level:2},{value:"Generaci\xf3n de N\xfameros Aleatorios:",id:"generaci\xf3n-de-n\xfameros-aleatorios",level:2},{value:"Ejemplo\ud83d\udcdd",id:"ejemplo",level:2}],u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mate"},"Mate"),(0,r.kt)("p",null,'Proporciona una serie de propiedades y m\xe9todos para realizar operaciones matem\xe1ticas en n\xfameros. Aunque no es un "tipo de dato" en s\xed mismo, es una parte fundamental cuando se necesitan operaciones matem\xe1ticas avanzadas. '),(0,r.kt)("p",null,"Aqu\xed tienes algunas caracter\xedsticas clave del objeto Math:"),(0,r.kt)("h2",{id:"funciones-matem\xe1ticas"},"Funciones Matem\xe1ticas:"),(0,r.kt)("p",null,"Math incluye una serie de funciones matem\xe1ticas comunes, como Mate.seno, Mate.raiz(), Mate.potencia(), Mate.truncar(), Mate.redondeo(), Mate.redondeoCercano(), entre otras."),(0,r.kt)("h2",{id:"generaci\xf3n-de-n\xfameros-aleatorios"},"Generaci\xf3n de N\xfameros Aleatorios:"),(0,r.kt)("p",null,"Puedes utilizar Mate.aleatorio() para generar n\xfameros aleatorios en el rango entre 0 (inclusive) y 1 (exclusivo). Tambi\xe9n puedes combinar esto con otras funciones para obtener n\xfameros aleatorios en un rango espec\xedfico."),(0,r.kt)("h2",{id:"ejemplo"},"Ejemplo\ud83d\udcdd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dummy"},'var numeroAleatorio = Mate.aleatorio(); // Generar un n\xfamero aleatorio entre 0 y 1\nimprimir("N\xfamero aleatorio: " + numeroAleatorio);\n\nvar numeroAleatorioEnRango = Mate.truncar(Mate.aleatorio() * 10) + 1; // Generar un n\xfamero aleatorio entre 1 y 10\nimprimir("N\xfamero aleatorio en rango: " + numeroAleatorioEnRango);\n')),(0,r.kt)("p",null,"Salida:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dummy"},"// 0.25\n// 4\n")))}m.isMDXComponent=!0}}]);