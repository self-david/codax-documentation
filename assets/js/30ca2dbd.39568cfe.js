"use strict";(self.webpackChunkcodax_documentation=self.webpackChunkcodax_documentation||[]).push([[8050],{3905:(e,a,r)=>{r.d(a,{Zo:()=>d,kt:()=>v});var o=r(7294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function t(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?t(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,o,n=function(e,a){if(null==e)return{};var r,o,n={},t=Object.keys(e);for(o=0;o<t.length;o++)r=t[o],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)r=t[o],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var a=o.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},d=function(e){var a=c(e.components);return o.createElement(l.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},m=o.forwardRef((function(e,a){var r=e.components,n=e.mdxType,t=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,v=p["".concat(l,".").concat(m)]||p[m]||u[m]||t;return r?o.createElement(v,i(i({ref:a},d),{},{components:r})):o.createElement(v,i({ref:a},d))}));function v(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var t=r.length,i=new Array(t);i[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<t;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3609:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const t={sidebar_position:5},i="Logico",s={unversionedId:"Logico",id:"Logico",title:"Logico",description:"Se utiliza para representar valores de verdad, es decir, afirmaciones que pueden ser verdaderas o falsas.",source:"@site/datatypes/Logico.mdx",sourceDirName:".",slug:"/Logico",permalink:"/datatypes/Logico",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Numero",permalink:"/datatypes/Numero"},next:{title:"Fecha",permalink:"/datatypes/Fecha"}},l={},c=[{value:"Valores:",id:"valores",level:2},{value:"Operadores L\xf3gicos:",id:"operadores-l\xf3gicos",level:2},{value:"Comparaciones:",id:"comparaciones",level:2},{value:"Decisiones Condicionales:",id:"decisiones-condicionales",level:2},{value:"Variables Booleanas:",id:"variables-booleanas",level:2},{value:"Expresiones Booleanas:",id:"expresiones-booleanas",level:2},{value:"Ejemplo\ud83d\udcdd",id:"ejemplo",level:2}],d={toc:c},p="wrapper";function u(e){let{components:a,...r}=e;return(0,n.kt)(p,(0,o.Z)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"logico"},"Logico"),(0,n.kt)("p",null,"Se utiliza para representar valores de verdad, es decir, afirmaciones que pueden ser verdaderas o falsas."),(0,n.kt)("p",null,'Aqu\xed tienes algunas caracter\xedsticas clave del tipo de dato "L\xf3gico":'),(0,n.kt)("h2",{id:"valores"},"Valores:"),(0,n.kt)("p",null,'Un "L\xf3gico" puede tener dos valores posibles: verdadero  o falso. Estos valores representan afirmaciones verdaderas o falsas, respectivamente.'),(0,n.kt)("h2",{id:"operadores-l\xf3gicos"},"Operadores L\xf3gicos:"),(0,n.kt)("p",null,"Se utilizan operadores l\xf3gicos como y (&&), o (||) y no (!) para realizar operaciones l\xf3gicas en valores booleanos. Estos operadores permiten combinar y evaluar afirmaciones l\xf3gicas de manera efectiva."),(0,n.kt)("h2",{id:"comparaciones"},"Comparaciones:"),(0,n.kt)("p",null,'Los valores booleanos se generan com\xfanmente al realizar comparaciones en el c\xf3digo. Por ejemplo, una comparaci\xf3n como 5 > 3 devuelve verdadero porque la afirmaci\xf3n "5 es mayor que 3" es verdadera.'),(0,n.kt)("h2",{id:"decisiones-condicionales"},"Decisiones Condicionales:"),(0,n.kt)("p",null,"Los valores booleanos se utilizan en declaraciones si para tomar decisiones condicionales. Por ejemplo, un bloque de c\xf3digo se ejecutar\xe1 si una condici\xf3n es verdadera, de lo contrario, se ejecutar\xe1 otro bloque si es falsa."),(0,n.kt)("h2",{id:"variables-booleanas"},"Variables Booleanas:"),(0,n.kt)("p",null,"Es com\xfan utilizar variables booleanas para mantener el estado de una aplicaci\xf3n o indicar si una condici\xf3n se cumple o no."),(0,n.kt)("h2",{id:"expresiones-booleanas"},"Expresiones Booleanas:"),(0,n.kt)("p",null,"Las expresiones booleanas se utilizan en muchas partes del c\xf3digo para controlar el flujo y el comportamiento de un programa."),(0,n.kt)("h2",{id:"ejemplo"},"Ejemplo\ud83d\udcdd"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},'var esMayorDeEdad = verdadero; // Variable Logica\n\nsi (esMayorDeEdad) {\n  imprimir("Eres mayor de edad.");\n} sino {\n   imprimir("Eres menor de edad.");\n}\n')),(0,n.kt)("p",null,"Salida:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dummy"},"// verdadero\n")))}u.isMDXComponent=!0}}]);