(function(e){function t(t){for(var s,i,r=t[0],l=t[1],m=t[2],d=0,u=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&u.push(o[i][0]),o[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);c&&c(t);while(u.length)u.shift()();return n.push.apply(n,m||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,r=1;r<a.length;r++){var l=a[r];0!==o[l]&&(s=!1)}s&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},o={app:0},n=[];function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var m=0;m<r.length;m++)t(r[m]);var c=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0375":function(e,t,a){"use strict";a("a338")},"1c76":function(e,t,a){"use strict";a("c6eb")},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("p",[e._v("Thomas er en bot")]),a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n        "),a("router-link",{attrs:{to:"/NewManager"}},[e._v("New Manager")]),e._v(" |\n        "),a("router-link",{attrs:{to:"/Login"}},[e._v("Login")]),e._v(" |\n        "),a("router-link",{attrs:{to:"/NewModel"}},[e._v("New Model")]),e._v("|\n        "),a("router-link",{attrs:{to:"/AddModelToJob"}},[e._v("Add model from to")]),e._v("|\n        "),a("router-link",{attrs:{to:"/RemoveModelFromJob"}},[e._v("Remove model from job")]),e._v("|\n        "),a("router-link",{attrs:{to:"/AddAnExpense"}},[e._v("Add an expense")]),e._v("|\n        "),a("router-link",{attrs:{to:"/NewJob"}},[e._v("Add new job")])],1),a("router-view")],1)},n=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v("Thomas er en bot")])},r=[],l=a("2877"),m={},c=Object(l["a"])(m,i,r,!1,null,null,null),d=c.exports,u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"columns",attrs:{id:"app"}},[a("div",{staticClass:"columns is-two-thirds"},[a("section",{staticClass:"section"},[a("h1",{staticClass:"title"},[e._v(" Login page")]),a("p",{staticClass:"subtitle"},[e._v("\n                Are you a model?\n            ")]),a("hr"),a("section",{staticClass:"form"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("Email")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],attrs:{type:"email"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("Password")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],attrs:{type:"password"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}})])]),a("p"),e._m(0)])])])])])},v=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"field-is-grouped"},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary"},[e._v("\n                            Login\n                        ")])])])}],p=(a("96cf"),a("1da1")),f={name:"VNTForm",data:function(){return{form:{email:"",password:""}}},methods:{login:function(){var e=Object(p["a"])(regeneratorRuntime.mark(function e(){var t,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t="https://localhost:44368/api/account/login",e.prev=1,e.next=4,fetch(t,{method:"POST",body:JSON.stringify(this.form),headers:new Headers({"Content-Type":"application/json"})});case 4:if(a=e.sent,!a.ok){e.next=12;break}return e.next=8,a.json();case 8:s=e.sent,localStorage.setItem("token",s.jwt),e.next=13;break;case 12:alert("Server returned: "+a.statusText);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](1),alert("Error: "+e.t0);case 18:return e.abrupt("return");case 19:case"end":return e.stop()}},e,this,[[1,15]])}));function t(){return e.apply(this,arguments)}return t}()}},b=f,h=(a("0375"),Object(l["a"])(b,u,v,!1,null,"687424d2",null)),C=h.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"column is two-thirds"},[a("section",{staticClass:"section"},[a("h1",{staticClass:"title"},[e._v(" Add model to job")]),a("p",{staticClass:"subtitle"},[e._v("\n            Please add the model!!\n        ")]),a("hr"),a("section",{staticClass:"form"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmitForm(t)}}},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("JobId")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.efJobId,expression:"form.efJobId"}],staticClass:"input",attrs:{name:"EfJobId",type:"number",min:"0"},domProps:{value:e.form.efJobId},on:{input:function(t){t.target.composing||e.$set(e.form,"efJobId",t.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("ModelId")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.efModelId,expression:"form.efModelId"}],staticClass:"input",attrs:{name:"EfModelId",type:"number",min:"0"},domProps:{value:e.form.efModelId},on:{input:function(t){t.target.composing||e.$set(e.form,"efModelId",t.target.value)}}})])]),a("p"),e._m(0)])])])])},_=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"field-is-grouped"},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary"},[e._v("\n                            Add\n                        ")])])])}],y={name:"VNTForm",data:function(){return{form:{efJoblId:"",efModelId:""}}},methods:{onSubmitForm:function(){var e=this,t="https://localhost:44368/api/Models";fetch(t,{method:"POST",body:JSON.stringify(this.form),credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(function(t){e.response=t}).catch(function(e){return alert("Something bad happened: "+e)})}}},w=y,x=(a("b4b1"),Object(l["a"])(w,g,_,!1,null,"64596cd7",null)),N=x.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"column is two-thirds"},[a("section",{staticClass:"section"},[a("h1",{staticClass:"title"},[e._v(" Create new manager account")]),a("p",{staticClass:" subtitle"},[e._v("\n            Please create an account mr. Lee\n        ")]),a("hr"),a("section",{staticClass:"form"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmitForm(t)}}},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("Firstname")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.firstname,expression:"form.firstname"}],staticClass:"input",attrs:{name:"Firstname",type:"text",maxlength:"64"},domProps:{value:e.form.firstname},on:{input:function(t){t.target.composing||e.$set(e.form,"firstname",t.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("Lastname")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.lastname,expression:"form.lastname"}],staticClass:"input",attrs:{name:"Lastname",type:"text",maxlength:"32"},domProps:{value:e.form.lastname},on:{input:function(t){t.target.composing||e.$set(e.form,"lastname",t.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("Email")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"input",attrs:{name:"Email",type:"email",maxlength:"254"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("Password")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],attrs:{type:"password"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("Cofirm password")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.confirmPassword,expression:"form.confirmPassword"}],attrs:{type:"password"},domProps:{value:e.form.confirmPassword},on:{input:function(t){t.target.composing||e.$set(e.form,"confirmPassword",t.target.value)}}})])]),a("p"),e._m(0)])])])])},$=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"field-is-grouped"},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary"},[e._v("\n                            Create\n                        ")])])])}],S={name:"VNTForm",data:function(){return{form:{firstname:"",lastname:"",email:"",password:"",confirmPassword:""}}},methods:{onSubmitForm:function(){var e=this,t="https://localhost:44368/api/Models";fetch(t,{method:"POST",body:JSON.stringify(this.form),credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(function(t){e.response=t}).catch(function(e){return alert("Something bad happened: "+e)})}}},k=S,J=(a("1c76"),Object(l["a"])(k,P,$,!1,null,"2342630c",null)),I=J.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"column is two-thirds"},[a("section",{staticClass:"section"},[a("h1",{staticClass:"title"},[e._v(" Remove model from job")]),a("p",{staticClass:"subtitle"},[e._v("\n            Please remove the model!!\n        ")]),a("hr"),a("section",{staticClass:"form"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmitForm(t)}}},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("JobId")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.efJobId,expression:"form.efJobId"}],staticClass:"input",attrs:{name:"EfJobId",type:"number",min:"0"},domProps:{value:e.form.efJobId},on:{input:function(t){t.target.composing||e.$set(e.form,"efJobId",t.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("ModelId")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.efModelId,expression:"form.efModelId"}],staticClass:"input",attrs:{name:"EfModelId",type:"number",min:"0"},domProps:{value:e.form.efModelId},on:{input:function(t){t.target.composing||e.$set(e.form,"efModelId",t.target.value)}}})])]),a("p"),e._m(0)])])])])},E=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"field-is-grouped"},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary"},[e._v("\n                            Remove\n                        ")])])])}],O={name:"VNTForm",data:function(){return{form:{efJoblId:"",efModelId:""}}},methods:{onSubmitForm:function(){var e=this,t="https://localhost:44368/api/Models";fetch(t,{method:"PUT",body:JSON.stringify(this.form),credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(function(t){e.response=t}).catch(function(e){return alert("Something bad happened: "+e)})}}},A=O,j=(a("ff5e"),Object(l["a"])(A,M,E,!1,null,"3b5a7f1a",null)),T=j.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-two-thirds"},[e._m(0),a("section",{staticClass:"form"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmitForm(t)}}},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("First Name")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.firstname,expression:"form.firstname"},{name:"validate",rawName:"v-validate",value:"required|min:3",expression:"'required|min:3'"}],staticClass:"input",attrs:{name:"firstname",type:"text",placeholder:"First Name"},domProps:{value:e.form.firstname},on:{input:function(t){t.target.composing||e.$set(e.form,"firstname",t.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("Last Name")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.lastname,expression:"form.lastname"},{name:"validate",rawName:"v-validate",value:"required|min:3",expression:"'required|min:3'"}],staticClass:"input",attrs:{firstname:"lastname",type:"text",placeholder:"Last Name"},domProps:{value:e.form.lastname},on:{input:function(t){t.target.composing||e.$set(e.form,"lastname",t.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("Email")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"},{name:"validate",rawName:"v-validate",value:"required|min:3",expression:"'required|min:3'"}],staticClass:"input",attrs:{firstname:"email",type:"text",placeholder:"Email"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("Phonenumber")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phonenumber,expression:"form.phonenumber"},{name:"validate",rawName:"v-validate",value:"required|min:3",expression:"'required|min:3'"}],staticClass:"input",attrs:{firstname:"phonenumber",type:"text",placeholder:"Phonenumber"},domProps:{value:e.form.phonenumber},on:{input:function(t){t.target.composing||e.$set(e.form,"phonenumber",t.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("Addressline 1")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.addressLine1,expression:"form.addressLine1"},{name:"validate",rawName:"v-validate",value:"required|min:3",expression:"'required|min:3'"}],staticClass:"input",attrs:{firstname:"addressLine1",type:"text",placeholder:"Address Line 1"},domProps:{value:e.form.addressLine1},on:{input:function(t){t.target.composing||e.$set(e.form,"addressLine1",t.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("Addressline 2")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.addressLine2,expression:"form.addressLine2"},{name:"validate",rawName:"v-validate",value:"required|min:3",expression:"'required|min:3'"}],staticClass:"input",attrs:{firstname:"addressLine2",type:"text",placeholder:"Address Line 2"},domProps:{value:e.form.addressLine2},on:{input:function(t){t.target.composing||e.$set(e.form,"addressLine2",t.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("Zip")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.zip,expression:"form.zip"},{name:"validate",rawName:"v-validate",value:"required|min:3",expression:"'required|min:3'"}],staticClass:"input",attrs:{firstname:"zip",type:"text",placeholder:"Zip"},domProps:{value:e.form.zip},on:{input:function(t){t.target.composing||e.$set(e.form,"zip",t.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("City")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.city,expression:"form.city"},{name:"validate",rawName:"v-validate",value:"required|min:3",expression:"'required|min:3'"}],staticClass:"input",attrs:{firstname:"city",type:"text",placeholder:"City"},domProps:{value:e.form.city},on:{input:function(t){t.target.composing||e.$set(e.form,"city",t.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("Country")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.country,expression:"form.country"},{name:"validate",rawName:"v-validate",value:"required|min:3",expression:"'required|min:3'"}],staticClass:"input",attrs:{firstname:"country",type:"text",placeholder:"Country"},domProps:{value:e.form.country},on:{input:function(t){t.target.composing||e.$set(e.form,"country",t.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("Nationality")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.nationality,expression:"form.nationality"},{name:"validate",rawName:"v-validate",value:"required|min:3",expression:"'required|min:3'"}],staticClass:"input",attrs:{firstname:"nationality",type:"text",placeholder:"Nationality"},domProps:{value:e.form.nationality},on:{input:function(t){t.target.composing||e.$set(e.form,"nationality",t.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("Height")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.height,expression:"form.height"},{name:"validate",rawName:"v-validate",value:"required|min:3",expression:"'required|min:3'"}],staticClass:"input",attrs:{firstname:"height",type:"number",placeholder:"In meters",min:"0"},domProps:{value:e.form.height},on:{input:function(t){t.target.composing||e.$set(e.form,"height",t.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("Shoe Size")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.shoesize,expression:"form.shoesize"},{name:"validate",rawName:"v-validate",value:"required|min:3",expression:"'required|min:3'"}],staticClass:"input",attrs:{firstname:"shoesize",type:"number",placeholder:"US-sizes",min:"0"},domProps:{value:e.form.shoesize},on:{input:function(t){t.target.composing||e.$set(e.form,"shoesize",t.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("Hair Color")]),a("div",{staticClass:"control"},[a("div",{staticClass:"select"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.hair_type,expression:"form.hair_type"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.form,"hair_type",t.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""}},[e._v("Nothing selected")]),e._l(e.options.haircolor,function(t){return a("option",{key:t.key,domProps:{value:t.value}},[e._v("\n                                "+e._s(t.text)+"\n                            ")])})],2)])])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("Eye Color")]),a("div",{staticClass:"control"},[a("div",{staticClass:"select"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.form.eye_type,expression:"form.eye_type"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.form,"eye_type",t.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""}},[e._v("Nothing selected")]),e._l(e.options.eyecolor,function(t){return a("option",{key:t.key,domProps:{value:t.value}},[e._v("\n                                "+e._s(t.text)+"\n                            ")])})],2)])])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("Comments")]),a("div",{staticClass:"control"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.comments,expression:"form.comments"}],staticClass:"textarea",attrs:{placeholder:"Textarea"},domProps:{value:e.form.comments},on:{input:function(t){t.target.composing||e.$set(e.form,"comments",t.target.value)}}})])]),e._m(1)])])]),a("div",{staticClass:"column"},[a("section",{staticClass:"section",attrs:{id:"results"}},[a("div",{staticClass:"box"},[a("ul",[e._v("\n                     loop through all the `form` properties and show their values \n                    "),e._l(e.form,function(t,s){return a("li",{key:s},[a("strong",[e._v(e._s(s)+":")]),e._v(" "+e._s(t)+"\n                    ")])})],2)])])])])},L=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"section"},[a("h1",{staticClass:"title"},[e._v("Create New Model")]),a("p",{staticClass:"subtitle"},[e._v("\n            True beauty comes from the "),a("strong",[e._v("outside")]),e._v("!\n        ")]),a("hr")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"field is-grouped"},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary"},[e._v("\n                        Submit\n                    ")])])])}],F={name:"NewModelForm",data:function(){return{form:{firstname:"",lastname:"",email:"",phonename:"",addressLine1:"",addressLine2:"",zip:"",city:"",country:"",nationality:"",height:"",shoesize:"",hair_type:"",eye_type:"",comments:""},options:{eyecolor:[{key:1,value:"brown",text:"Brown"},{key:2,value:"blue",text:"Blue"},{key:3,value:"green",text:"Green"}],haircolor:[{key:1,value:"black",text:"Black"},{key:2,value:"darkbrown",text:"Dark brown"},{key:3,value:"lightbrown",text:"Light brown"},{key:4,value:"blonde",text:"Blonde"},{key:5,value:"grey",text:"Grey"},{key:6,value:"redhair",text:"Red Hair"}]}}},methods:{onSubmitForm:function(){var e=this,t="https://localhost:44368/api/Models";fetch(t,{method:"POST",body:JSON.stringify(this.form),credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(function(t){e.response=t}).catch(function(e){return alert("Something bad happened: "+e)})}}},z=F,D=Object(l["a"])(z,q,L,!1,null,null,null),B=D.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-two-thirds"},[e._m(0),a("section",{staticClass:"form"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmitForm(t)}}},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("JobId")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.efJobId,expression:"form.efJobId"}],staticClass:"input",attrs:{name:"EfJobId",type:"number",min:"0"},domProps:{value:e.form.efJobId},on:{input:function(t){t.target.composing||e.$set(e.form,"efJobId",t.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("Expense")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.expense,expression:"form.expense"}],staticClass:"input",attrs:{name:"Expense",type:"number",min:"0"},domProps:{value:e.form.expense},on:{input:function(t){t.target.composing||e.$set(e.form,"expense",t.target.value)}}})])]),a("p"),e._m(1)])])])])},H=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"section"},[a("h1",{staticClass:"title"},[e._v("Add An Expense")]),a("p",{staticClass:"subtitle"},[e._v("\n                View health as an investment, not an "),a("strong",[e._v("expense")]),e._v("!\n            ")]),a("hr")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"field-is-grouped"},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary"},[e._v("\n                            Add\n                        ")])])])}],V={name:"VNTForm",data:function(){return{form:{efJoblId:"",expense:""}}},methods:{onSubmitForm:function(){var e=this,t="https://localhost:44368/api/Jobs";fetch(t,{method:"POST",body:JSON.stringify(this.form),credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(function(t){e.response=t}).catch(function(e){return alert("Something bad happened: "+e)})}}},G=V,U=Object(l["a"])(G,R,H,!1,null,null,null),Z=U.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-two-thirds"},[e._m(0),a("section",{staticClass:"form"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmitForm(t)}}},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("Customer")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.customer,expression:"form.customer"},{name:"validate",rawName:"v-validate",value:"required|min:3",expression:"'required|min:3'"}],staticClass:"input",attrs:{name:"customer",type:"text",placeholder:"Customer"},domProps:{value:e.form.customer},on:{input:function(t){t.target.composing||e.$set(e.form,"customer",t.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("Days")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.days,expression:"form.days"},{name:"validate",rawName:"v-validate",value:"required|min:3",expression:"'required|min:3'"}],staticClass:"input",attrs:{firstname:"days",type:"number",placeholder:"Days",min:"0"},domProps:{value:e.form.days},on:{input:function(t){t.target.composing||e.$set(e.form,"days",t.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("Location")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.location,expression:"form.location"},{name:"validate",rawName:"v-validate",value:"required|min:3",expression:"'required|min:3'"}],staticClass:"input",attrs:{firstname:"location",type:"text",placeholder:"Location"},domProps:{value:e.form.location},on:{input:function(t){t.target.composing||e.$set(e.form,"location",t.target.value)}}})])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[e._v("Comments")]),a("div",{staticClass:"control"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.comments,expression:"form.comments"}],staticClass:"textarea",attrs:{placeholder:"Textarea"},domProps:{value:e.form.comments},on:{input:function(t){t.target.composing||e.$set(e.form,"comments",t.target.value)}}})])]),e._m(1)])])])])},K=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"section"},[a("h1",{staticClass:"title"},[e._v("Create New Job")]),a("p",{staticClass:"subtitle"},[e._v("\n                Work work work work "),a("strong",[e._v("work")]),e._v("!\n            ")]),a("hr")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"field is-grouped"},[a("div",{staticClass:"control"},[a("button",{staticClass:"button is-primary"},[e._v("\n                            Submit\n                        ")])])])}],Q={name:"NewModelForm",data:function(){return{form:{Customer:"",Days:"",Location:"",Comments:""}}},methods:{onSubmitForm:function(){var e=this,t="https://localhost:44368/api/Jobs";fetch(t,{method:"POST",body:JSON.stringify(this.form),credentials:"include",headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(function(t){e.response=t}).catch(function(e){return alert("Something bad happened: "+e)})}}},X=Q,Y=Object(l["a"])(X,W,K,!1,null,"21d390dd",null),ee=Y.exports,te={name:"app",components:{Home:d,Login:C,AddModelToJob:N,NewManager:I,NewModel:B,RemoveModelFromJob:T,AddAnExpense:Z,NewJob:ee}},ae=te,se=Object(l["a"])(ae,o,n,!1,null,null,null),oe=se.exports,ne=a("4af9");s["a"].use(ne["a"]);var ie=new ne["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:d},{path:"/Login",name:"Login",component:C},{path:"/NewManager",name:"NewManager",component:I},{path:"/NewModel",name:"NewModel",component:B},{path:"/AddModelToJob",name:"AddModelToJob",component:N},{path:"/RemoveModelFromJob",name:"RemoveModelFromJob",component:T},{path:"/AddAnExpense",name:"AddAnExpense",component:Z},{path:"/NewJob",name:"NewJob",component:ee}]});s["a"].config.productionTip=!1,new s["a"]({router:ie,render:function(e){return e(oe)}}).$mount("#app")},7044:function(e,t,a){},a338:function(e,t,a){},b4b1:function(e,t,a){"use strict";a("e5c2")},c6eb:function(e,t,a){},e5c2:function(e,t,a){},ff5e:function(e,t,a){"use strict";a("7044")}});
//# sourceMappingURL=app.6a047e1a.js.map