(function(t){function e(e){for(var a,r,s=e[0],c=e[1],u=e[2],p=0,d=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/Techno-Cursos/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"16de":function(t,e,n){},"1a7e":function(t,e,n){},"1fc1":function(t,e,n){"use strict";n("16de")},"2f13":function(t,e,n){},3415:function(t,e,n){"use strict";n("4476")},"381a":function(t,e,n){"use strict";n("1a7e")},4476:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("TheHeader"),n("router-view",{staticClass:"container"})],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("nav",[n("div",{staticClass:"logo"},[n("router-link",{attrs:{to:"/"}},[t._v("Techno")])],1),n("ul",[n("li",[n("router-link",{attrs:{to:"/cursos"}},[t._v("Cursos")])],1),n("li",[n("router-link",{attrs:{to:"/contato"}},[t._v("Contato")])],1)])])])},s=[],c={},u=c,l=(n("f337"),n("2877")),p=Object(l["a"])(u,r,s,!1,null,"2e751fc0",null),d=p.exports,f={components:{TheHeader:d}},v=f,_=(n("034f"),Object(l["a"])(v,o,i,!1,null,null,null)),h=_.exports,m=n("8c4f"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[t.loading?a("div",[a("page-loading")],1):t._e(),a("transition",[t.api?a("div",{staticClass:"conteudo"},[a("div",[a("h1",[t._v("Sobre a "+t._s(t.api.titulo))]),a("p",[t._v(t._s(t.api.descricao))]),a("router-link",{staticClass:"btn-cursos",attrs:{tag:"button",to:"/cursos"}},[t._v("Cursos")]),a("div",[a("h2",[t._v("Avaliações")]),a("ul",t._l(t.api.avaliacoes,(function(e){return a("li",{key:e.nome},[a("p",[t._v(t._s(e.nome))]),a("p",[t._v(t._s(e.descricao))])])})),0)])],1),a("img",{attrs:{src:n("e387"),alt:"Aprenda Web Design"}})]):t._e()])],1)},g=[],y=(n("d3b7"),{data:function(){return{api:null,loading:!0}},methods:{fetchData:function(t){var e=this;this.api=null,this.loading=!0,fetch("https://my-json-server.typicode.com/KlaytonJr/techno-cursos-api".concat(t)).then((function(t){return t.json()})).then((function(t){e.api=t,e.loading=!1}))}}}),w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading"},[n("span"),n("span"),n("span"),n("span")])}],j={name:"PageLoading"},C=j,O=(n("9593"),Object(l["a"])(C,w,x,!1,null,"502585c4",null)),k=O.exports,E={components:{PageLoading:k},name:"home",mixins:[y],created:function(){this.fetchData("/home")}},$=E,P=(n("cccb"),Object(l["a"])($,b,g,!1,null,null,null)),T=P.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loading?n("div",[n("page-loading")],1):t._e(),n("transition",[t.api?n("div",[n("h1",[t._v(t._s(t.api.titulo))]),n("p",[t._v(t._s(t.api.descricao))]),n("ul",[n("li",[n("b",[t._v("Email: ")]),t._v(" "+t._s(t.api.contato.email)+" ")]),n("li",[n("b",[t._v("Telefone: ")]),t._v(" "+t._s(t.api.contato.telefone)+" ")]),n("li",[n("b",[t._v("Endereço: ")]),t._v(" "+t._s(t.api.contato.endereco)+" ")])])]):t._e()])],1)},S=[],A={name:"Contato",mixins:[y],created:function(){this.fetchData("/contato")}},M=A,H=Object(l["a"])(M,D,S,!1,null,null,null),J=H.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loading?n("div",[n("page-loading")],1):t._e(),n("transition",[t.api?n("div",{staticClass:"conteud"},[n("div",[n("h1",[t._v(t._s(t.api.titulo))]),n("p",[t._v(t._s(t.api.descricao))])]),n("ul",{staticClass:"cursos-lista"},t._l(t.api.cursos,(function(e){return n("li",{key:e.id},[n("h2",[n("router-link",{attrs:{to:{name:"curso",params:{curso:e.id}}}},[t._v(" "+t._s(e.nome)+" - "+t._s(e.totalAulas)+" aulas | "+t._s(e.horas)+" horas ")])],1),n("p",[t._v(t._s(e.descricao))])])})),0)]):t._e()])],1)},K=[],R={name:"Cursos",mixins:[y],created:function(){this.fetchData("/cursos")}},U=R,W=(n("381a"),Object(l["a"])(U,L,K,!1,null,null,null)),q=W.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loading?n("div",[n("page-loading")],1):t._e(),n("transition",[t.api?n("div",{staticClass:"conteudo"},[n("div",[n("h1",[t._v(t._s(t.api.nome))]),n("p",[t._v(t._s(t.api.descricao))]),n("h2",[t._v("Aulas")]),n("ul",{staticClass:"aulas"},t._l(t.api.aulas,(function(e){return n("li",{key:e.id},[n("router-link",{attrs:{to:{name:"aula",params:{aula:e.id}}}},[t._v(" "+t._s(e.nome)+" ")])],1)})),0)]),n("router-view")],1):t._e()])],1)},B=[],F={name:"Curso",props:["curso"],mixins:[y],created:function(){this.fetchData("/curso/".concat(this.curso))}},G=F,I=(n("3415"),Object(l["a"])(G,z,B,!1,null,null,null)),N=I.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loading?n("div",[n("page-loading")],1):t._e(),n("transition",[t.api?n("div",[n("h2",[t._v(t._s(t.api.nome))]),n("div",{staticClass:"video"},[n("iframe",{attrs:{src:"https://www.youtube.com/embed/"+t.api.youtube,title:"`${api.nome}`",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])]):t._e()])],1)},V=[],X={name:"aula",props:["aula"],mixins:[y],created:function(){this.fetchData("/aula/".concat(this.aula))},beforeRouteUpdate:function(t,e,n){this.fetchData("/aula/".concat(t.params.aula)),n()}},Y=X,Z=(n("1fc1"),Object(l["a"])(Y,Q,V,!1,null,null,null)),tt=Z.exports;a["a"].use(m["a"]);var et=[{path:"/",name:"Home",component:T},{path:"/contato",name:"contato",component:J},{path:"/cursos",name:"cursos",component:q},{path:"/cursos/:curso",name:"curso",component:N,props:!0,children:[{path:":aula",name:"aula",component:tt,props:!0}]}],nt=new m["a"]({mode:"history",base:"/Techno-Cursos/",routes:et}),at=nt;a["a"].config.productionTip=!1,a["a"].component("PageLoading",k),new a["a"]({router:at,render:function(t){return t(h)}}).$mount("#app")},"5ced":function(t,e,n){},7542:function(t,e,n){},"85ec":function(t,e,n){},9593:function(t,e,n){"use strict";n("2f13")},cccb:function(t,e,n){"use strict";n("5ced")},e387:function(t,e,n){t.exports=n.p+"img/aprender.55531a91.png"},f337:function(t,e,n){"use strict";n("7542")}});
//# sourceMappingURL=app.b008f0ba.js.map