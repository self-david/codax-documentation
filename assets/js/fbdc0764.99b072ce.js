"use strict";(self.webpackChunkcodax_documentation=self.webpackChunkcodax_documentation||[]).push([[8286],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>b});var a=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function t(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,a,o=function(e,r){if(null==e)return{};var n,a,o={},t=Object.keys(e);for(a=0;a<t.length;a++)n=t[a],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)n=t[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),i=function(e){var r=a.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},u=function(e){var r=i(e.components);return a.createElement(c.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var n=e.components,o=e.mdxType,t=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=o,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||t;return n?a.createElement(b,l(l({ref:r},u),{},{components:n})):a.createElement(b,l({ref:r},u))}));function b(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var t=n.length,l=new Array(t);l[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[d]="string"==typeof e?e:o,l[1]=s;for(var i=2;i<t;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5229:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>s,toc:()=>i});var a=n(7462),o=(n(7294),n(3905));const t={sidebar_position:6},l="Claves duplicadas",s={unversionedId:"no-dupe-keys",id:"no-dupe-keys",title:"Claves duplicadas",description:"Este error se presenta cuando tienes dos o m\xe1s claves con el mismo nombre en un objeto. Cada clave dentro de un objeto debe ser \xfanica, ya que las claves son como etiquetas que se utilizan para acceder a los valores almacenados en el objeto.",source:"@site/errors/6-no-dupe-keys.mdx",sourceDirName:".",slug:"/no-dupe-keys",permalink:"/errors/no-dupe-keys",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Valor constante",permalink:"/errors/no-constant-condition"},next:{title:"Argumentos duplicados",permalink:"/errors/no-dupe-args"}},c={},i=[{value:"Ejemplo\ud83d\udcdd",id:"ejemplo",level:2},{value:"Explicaci\xf3n",id:"explicaci\xf3n",level:2},{value:"Causa",id:"causa",level:2},{value:"Soluci\xf3n",id:"soluci\xf3n",level:2}],u={toc:i},d="wrapper";function p(e){let{components:r,...n}=e;return(0,o.kt)(d,(0,a.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"claves-duplicadas"},"Claves duplicadas"),(0,o.kt)("p",null,"Este error se presenta cuando tienes dos o m\xe1s claves con el mismo nombre en un objeto. Cada clave dentro de un objeto debe ser \xfanica, ya que las claves son como etiquetas que se utilizan para acceder a los valores almacenados en el objeto."),(0,o.kt)("h2",{id:"ejemplo"},"Ejemplo\ud83d\udcdd"),(0,o.kt)("p",null,"Supongamos que tienes el siguiente objeto:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dummy"},"var persona = {\n  nombre: 'Juan',\n  edad: 30,\n  nombre: 'Mar\xeda'\n};\n")),(0,o.kt)("p",null,'En este ejemplo, tienes dos claves llamadas "nombre", lo que provoca el error.'),(0,o.kt)("h2",{id:"explicaci\xf3n"},"Explicaci\xf3n"),(0,o.kt)("p",null,"Los objetos en la programaci\xf3n se utilizan para organizar datos en pares clave-valor. Cada clave debe ser \xfanica para que puedas acceder a los valores de manera correcta.\nCuando tienes claves duplicadas, el lenguaje de programaci\xf3n no sabe a cu\xe1l de ellas hacer referencia y muestra el error."),(0,o.kt)("h2",{id:"causa"},"Causa"),(0,o.kt)("p",null,"Este error suele ocurrir debido a un error en la definici\xf3n del objeto, donde se repiten accidentalmente las claves."),(0,o.kt)("h2",{id:"soluci\xf3n"},"Soluci\xf3n"),(0,o.kt)("p",null,"Para solucionar el error, debes asegurarte de que todas las claves dentro de un objeto sean \xfanicas. Aqu\xed tienes un ejemplo corregido:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dummy"},"var persona = {\n  nombre: 'Juan',\n  edad: 30,\n  apellido: 'P\xe9rez' // Hemos cambiado `nombre` a `pellido` para hacerlo \xfanico.\n};\n")),(0,o.kt)("p",null,"Ahora, todas las claves son \xfanicas en el objeto, y el error desaparecer\xe1."))}p.isMDXComponent=!0}}]);