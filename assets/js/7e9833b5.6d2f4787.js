"use strict";(self.webpackChunkcodax_documentation=self.webpackChunkcodax_documentation||[]).push([[4901],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>b});var o=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=o.createContext({}),u=function(e){var n=o.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=u(r),m=t,b=s["".concat(l,".").concat(m)]||s[m]||p[m]||a;return r?o.createElement(b,i(i({ref:n},d),{},{components:r})):o.createElement(b,i({ref:n},d))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[s]="string"==typeof e?e:t,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},90:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=r(7462),t=(r(7294),r(3905));const a={sidebar_position:25},i="Bucle sin modificar",c={unversionedId:"no-unmodified-loop-condition",id:"no-unmodified-loop-condition",title:"Bucle sin modificar",description:"Este error ocurre cuando tienes un bucle (como un bucle mientras o para) con una condici\xf3n que nunca se modifica dentro del bucle.",source:"@site/errors/25-no-unmodified-loop-condition.mdx",sourceDirName:".",slug:"/no-unmodified-loop-condition",permalink:"/errors/no-unmodified-loop-condition",draft:!1,tags:[],version:"current",sidebarPosition:25,frontMatter:{sidebar_position:25},sidebar:"tutorialSidebar",previous:{title:"Multiples lineas",permalink:"/errors/no-unexpected-multiline"},next:{title:"Usar antes de declarar",permalink:"/errors/no-use-before-define"}},l={},u=[{value:"Ejemplo\ud83d\udcdd",id:"ejemplo",level:2},{value:"Explicaci\xf3n",id:"explicaci\xf3n",level:2},{value:"Causa",id:"causa",level:2},{value:"Soluci\xf3n",id:"soluci\xf3n",level:2}],d={toc:u},s="wrapper";function p(e){let{components:n,...r}=e;return(0,t.kt)(s,(0,o.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"bucle-sin-modificar"},"Bucle sin modificar"),(0,t.kt)("p",null,"Este error ocurre cuando tienes un bucle (como un bucle ",(0,t.kt)("inlineCode",{parentName:"p"},"mientras")," o ",(0,t.kt)("inlineCode",{parentName:"p"},"para"),") con una condici\xf3n que nunca se modifica dentro del bucle.\nEn otras palabras, la condici\xf3n siempre tiene el mismo valor, lo que significa que el bucle se ejecutar\xe1 indefinidamente o nunca se ejecutar\xe1."),(0,t.kt)("h2",{id:"ejemplo"},"Ejemplo\ud83d\udcdd"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-dummy"},"var contador = 0;\n\nmientras (contador === 0) {\n  // C\xf3digo del bucle\n}\n")),(0,t.kt)("p",null,"En este ejemplo, la condici\xf3n ",(0,t.kt)("inlineCode",{parentName:"p"},"contador == 0")," nunca cambia dentro del bucle, por lo que el bucle se ejecutar\xe1 indefinidamente.\nEsto provoca el error."),(0,t.kt)("h2",{id:"explicaci\xf3n"},"Explicaci\xf3n"),(0,t.kt)("p",null,"En un bucle, la condici\xf3n debe cambiar en alg\xfan momento para que el bucle pueda terminar y no se convierta en un bucle infinito.\nUn bucle con una condici\xf3n que no cambia nunca puede causar problemas en el flujo de ejecuci\xf3n de tu programa."),(0,t.kt)("h2",{id:"causa"},"Causa"),(0,t.kt)("p",null,"Este error suele ocurrir debido a un error l\xf3gico en la condici\xf3n del bucle, como una condici\xf3n que no se actualiza correctamente o una falta de atenci\xf3n al escribir el c\xf3digo."),(0,t.kt)("h2",{id:"soluci\xf3n"},"Soluci\xf3n"),(0,t.kt)("p",null,"Para solucionar el error, debes revisar la condici\xf3n del bucle y asegurarte de que cambie en alg\xfan momento dentro del bucle para permitir que este termine.\nSi la condici\xf3n no deber\xeda cambiar, entonces debes reconsiderar si realmente necesitas un bucle en ese contexto. Aqu\xed tienes un ejemplo corregido:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-dummy"},"var contador = 0;\n\nmientras (contador < 5) {\n  // C\xf3digo del bucle\n  contador++;\n}\n")),(0,t.kt)("p",null,"En este caso, hemos corregido la condici\xf3n del bucle para que ",(0,t.kt)("inlineCode",{parentName:"p"},"contador")," cambie y eventualmente haga que la condici\xf3n sea falsa,\nlo que permite que el bucle termine de manera adecuada.\nEsto soluciona el error y asegura un comportamiento correcto del bucle."))}p.isMDXComponent=!0}}]);