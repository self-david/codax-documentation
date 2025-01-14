"use strict";(self.webpackChunkcodax_documentation=self.webpackChunkcodax_documentation||[]).push([[2878],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>f});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),l=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return r?t.createElement(f,s(s({ref:n},c),{},{components:r})):t.createElement(f,s({ref:n},c))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6449:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var t=r(7462),o=(r(7294),r(3905));const a={sidebar_position:7},s="Argumentos duplicados",i={unversionedId:"no-dupe-args",id:"no-dupe-args",title:"Argumentos duplicados",description:"Este error ocurre cuando defines una funci\xf3n y en la lista de argumentos (par\xe1metros) tienes dos o m\xe1s con el mismo nombre.",source:"@site/errors/7-no-dupe-args.mdx",sourceDirName:".",slug:"/no-dupe-args",permalink:"/errors/no-dupe-args",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Claves duplicadas",permalink:"/errors/no-dupe-keys"},next:{title:"Desestructuraci\xf3n vac\xeda",permalink:"/errors/no-empty-pattern"}},u={},l=[{value:"Ejemplo\ud83d\udcdd",id:"ejemplo",level:2},{value:"Explicaci\xf3n",id:"explicaci\xf3n",level:2},{value:"Causa",id:"causa",level:2},{value:"Soluci\xf3n",id:"soluci\xf3n",level:2}],c={toc:l},p="wrapper";function d(e){let{components:n,...r}=e;return(0,o.kt)(p,(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"argumentos-duplicados"},"Argumentos duplicados"),(0,o.kt)("p",null,"Este error ocurre cuando defines una funci\xf3n y en la lista de argumentos (par\xe1metros) tienes dos o m\xe1s con el mismo nombre.\nCada argumento debe tener un nombre \xfanico dentro de la funci\xf3n para que el lenguaje de programaci\xf3n pueda distinguirlos correctamente."),(0,o.kt)("h2",{id:"ejemplo"},"Ejemplo\ud83d\udcdd"),(0,o.kt)("p",null,"Supongamos que tienes la siguiente funci\xf3n:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dummy"},"funcion sumar(a, b, a) {\n  regresar a + b + a;\n}\n")),(0,o.kt)("p",null,"En este ejemplo, tienes dos argumentos llamados ",(0,o.kt)("inlineCode",{parentName:"p"},"a"),", lo que provoca el error."),(0,o.kt)("h2",{id:"explicaci\xf3n"},"Explicaci\xf3n"),(0,o.kt)("p",null,"Los argumentos son valores que pasas a una funci\xf3n para que los utilice en su l\xf3gica.\nEs importante que los nombres de los argumentos sean \xfanicos dentro de la funci\xf3n para evitar confusiones y errores."),(0,o.kt)("h2",{id:"causa"},"Causa"),(0,o.kt)("p",null,"Este error suele ocurrir debido a un error tipogr\xe1fico o a la falta de atenci\xf3n al definir los argumentos de una funci\xf3n."),(0,o.kt)("h2",{id:"soluci\xf3n"},"Soluci\xf3n"),(0,o.kt)("p",null,"Para solucionar el error, debes asegurarte de que los nombres de los argumentos en una funci\xf3n sean diferentes entre s\xed.\nAqu\xed tienes un ejemplo corregido:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dummy"},"funcion sumar(a, b, c) {\n  regresar a + b + c;\n}\n")),(0,o.kt)("p",null,"Ahora, los nombres de los argumentos son \xfanicos, y el error desaparecer\xe1.\nEsto permitir\xe1 que tu funci\xf3n funcione correctamente sin ambig\xfcedades en los nombres de los argumentos."))}d.isMDXComponent=!0}}]);