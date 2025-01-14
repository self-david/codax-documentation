"use strict";(self.webpackChunkcodax_documentation=self.webpackChunkcodax_documentation||[]).push([[5628],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>f});var a=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function t(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,a,o=function(e,r){if(null==e)return{};var n,a,o={},t=Object.keys(e);for(a=0;a<t.length;a++)n=t[a],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)n=t[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var r=a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var n=e.components,o=e.mdxType,t=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||t;return n?a.createElement(f,i(i({ref:r},p),{},{components:n})):a.createElement(f,i({ref:r},p))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var t=n.length,i=new Array(t);i[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<t;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5783:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const t={sidebar_position:33},i="Error inesperado",l={unversionedId:"unexpected",id:"unexpected",title:"Error inesperado",description:"Este error indica que se ha encontrado algo en el c\xf3digo que no era lo que se esperaba en ese contexto espec\xedfico.",source:"@site/errors/33-unexpected.mdx",sourceDirName:".",slug:"/unexpected",permalink:"/errors/unexpected",draft:!1,tags:[],version:"current",sidebarPosition:33,frontMatter:{sidebar_position:33},sidebar:"tutorialSidebar",previous:{title:"No es funcion",permalink:"/errors/not-is-function"}},s={},c=[{value:"Ejemplo\ud83d\udcdd",id:"ejemplo",level:2},{value:"Explicaci\xf3n",id:"explicaci\xf3n",level:2},{value:"Causa",id:"causa",level:2},{value:"Soluci\xf3n",id:"soluci\xf3n",level:2}],p={toc:c},u="wrapper";function d(e){let{components:r,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"error-inesperado"},"Error inesperado"),(0,o.kt)("p",null,"Este error indica que se ha encontrado algo en el c\xf3digo que no era lo que se esperaba en ese contexto espec\xedfico.\nPuede estar relacionado con una gran variedad de problemas, como un operador inesperado, una estructura sint\xe1ctica incorrecta o una funci\xf3n que se llam\xf3 en un lugar inapropiado."),(0,o.kt)("h2",{id:"ejemplo"},"Ejemplo\ud83d\udcdd"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dummy"},'const x = 4;\n\nsi (x > 10) {\n  imprimir("x es mayor que 10");\n} sinon {\n  imprimir("x no es mayor que 10");\n}\n')),(0,o.kt)("p",null,"En este ejemplo, podr\xeda indicar que se encontr\xf3 un error inesperado en la l\xednea del bloque ",(0,o.kt)("inlineCode",{parentName:"p"},"sino")," donde se ve que se escribio una ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," al final del ",(0,o.kt)("inlineCode",{parentName:"p"},"sino"),"."),(0,o.kt)("h2",{id:"explicaci\xf3n"},"Explicaci\xf3n"),(0,o.kt)("p",null,"Este tipo de errores pueden ser causados por una variedad de factores, como errores tipogr\xe1ficos,\nerrores de sintaxis, problemas en la l\xf3gica del c\xf3digo o incluso por la interacci\xf3n de diferentes partes del programa."),(0,o.kt)("h2",{id:"causa"},"Causa"),(0,o.kt)("p",null,"Este error suele ocurrir debido a la falta de atenci\xf3n al escribir el c\xf3digo o cuando se eliminan partes del c\xf3digo que utilizaban previamente la variable,\npero la declaraci\xf3n de la variable se ha dejado intacta."),(0,o.kt)("h2",{id:"soluci\xf3n"},"Soluci\xf3n"),(0,o.kt)("p",null,"Para solucionar este tipo de error, debes examinar cuidadosamente la l\xednea de c\xf3digo en la que se gener\xf3 el error y verificar si hay errores tipogr\xe1ficos, sintaxis incorrecta o problemas l\xf3gicos.\nA menudo, estos errores se pueden corregir ajustando el c\xf3digo para que siga las reglas del lenguaje de programaci\xf3n.\nSi el error es particularmente dif\xedcil de identificar, es \xfatil dividir el c\xf3digo en partes m\xe1s peque\xf1as y probar cada parte por separado para aislar la fuente del problema."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dummy"},"funcion ejemplo() {\n  const variable1 = 'estoy siendo usada';\n  // const variable2 = 'no soy usada en ningun lugar';\n\n  imprimir(variable1);\n}\n")),(0,o.kt)("p",null,"En este caso fue un error tipografico y tan solo se tuvo que eliminar la ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," que esta despues de ",(0,o.kt)("inlineCode",{parentName:"p"},"sino"),"."))}d.isMDXComponent=!0}}]);