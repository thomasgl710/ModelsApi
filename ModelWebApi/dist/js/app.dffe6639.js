(function(e){function n(n){for(var o,l,a=n[0],s=n[1],u=n[2],c=0,f=[];c<a.length;c++)l=a[c],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&f.push(r[l][0]),r[l]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);p&&p(n);while(f.length)f.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,a=1;a<t.length;a++){var s=t[a];0!==r[s]&&(o=!1)}o&&(i.splice(n--,1),e=l(l.s=t[0]))}return e}var o={},r={app:0},i=[];function l(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=o,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)l.d(t,o,function(n){return e[n]}.bind(null,o));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=n,a=a.slice();for(var u=0;u<a.length;u++)n(a[u]);var p=s;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("Home",{attrs:{msg:"Hello world!"}})],1)},i=[],l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("h1",[e._v(e._s(e.msg))]),t("p",[e._v("Lasse er en bot")])])},a=[],s=t("2877"),u={},p=Object(s["a"])(u,l,a,!1,null,null,null),c=p.exports,f=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"login"},[t("h1",[e._v(e._s(e.msg))]),t("p",[e._v("Email")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.loginInfo.email,expression:"loginInfo.email"}],attrs:{type:"email"},domProps:{value:e.loginInfo.email},on:{input:function(n){n.target.composing||e.$set(e.loginInfo,"email",n.target.value)}}}),t("p",[e._v("Password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.loginInfo.password,expression:"loginInfo.password"}],attrs:{type:"password"},domProps:{value:e.loginInfo.password},on:{input:function(n){n.target.composing||e.$set(e.loginInfo,"password",n.target.value)}}}),t("p"),t("button",{on:{click:e.myFunction}},[e._v("Login")])])},d=[],m=new o["a"],v={data:function(){return{loginInfo:{email:"",password:"",oldPassword:""}}},methods:{emitLogin:function(){m.$emit("I tried to login",this.loginInfo)},myFunction:function(){window.open("http://localhost:1337/Login","_blank")}}},g=v,h=Object(s["a"])(g,f,d,!1,null,null,null),b=h.exports,w={name:"app",components:{Home:c,Login:b}},y=w,_=Object(s["a"])(y,r,i,!1,null,null,null),O=_.exports;o["a"].config.productionTip=!0,new o["a"]({render:function(e){return e(O)}}).$mount("#app")}});
//# sourceMappingURL=app.dffe6639.js.map