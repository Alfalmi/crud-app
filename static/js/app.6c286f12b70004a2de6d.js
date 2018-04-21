webpackJsonp([1],{NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("7+uW"),n=a("Sazm"),s=a.n(n),o={name:"navbar",data:function(){return{isLoggedIn:!1,currentUser:!1}},created:function(){s.a.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=s.a.auth().currentUser.email)},methods:{logout:function(){var e=this;s.a.auth().signOut().then(function(){e.$router.push("/Login")})}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",[a("div",{staticClass:"nav-wrapper black"},[a("div",{staticClass:"container "},[a("router-link",{staticClass:"brand-logo left",attrs:{to:"/"}},[e._v("\r\n            Employees\r\n            ")]),e._v(" "),a("ul",{staticClass:"right"},[e.isLoggedIn?a("li",[a("span",{staticClass:"email white-text"},[e._v(e._s(e.currentUser))])]):e._e(),e._v(" "),e.isLoggedIn?a("li",[a("router-link",{attrs:{to:"/"}},[e._v("DashBoard")])],1):e._e(),e._v(" "),e.isLoggedIn?e._e():a("li",[a("router-link",{attrs:{to:"/Login"}},[e._v("Login")])],1),e._v(" "),e.isLoggedIn?e._e():a("li",[a("router-link",{attrs:{to:"/Register"}},[e._v("Register")])],1),e._v(" "),e.isLoggedIn?a("li",[a("button",{staticClass:"btn red",on:{click:e.logout}},[e._v("Logout")])]):e._e()])],1)])])},staticRenderFns:[]};var r={name:"App",components:{Navbar:a("VU/8")(o,l,!1,function(e){a("W4Bj")},"data-v-8ad3cf6e",null).exports}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar",{key:this.$route.fullPath}),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1)],1)},staticRenderFns:[]},c=a("VU/8")(r,d,!1,null,null,null).exports,p=a("/ocq"),u=(a("3VHS"),s.a.initializeApp({apiKey:"AIzaSyDN0QVqtMDnLvRKqIxLAzHvQFJyHNOI_fQ",authDomain:"cocinaness.firebaseapp.com",databaseURL:"https://cocinaness.firebaseio.com",projectId:"cocinaness",storageBucket:"cocinaness.appspot.com",messagingSenderId:"832645126630"}).firestore()),m={name:"dashboard",data:function(){return{employees:[]}},created:function(){var e=this;u.collection("employees").get().then(function(t){t.forEach(function(t){console.log(t);var a={id:t.id,employee_id:t.data().employee_id,name:t.data().name,dept:t.data().dept,position:t.data().position};e.employees.push(a)})})}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"dashboard"}},[a("ul",{staticClass:"collection whit-header #ff5722 deep-orange"},[e._m(0),e._v(" "),e._l(e.employees,function(t){return a("li",{key:t.id,staticClass:"collection-item #757575 grey darken-1 white-text"},[e._v("\n        "+e._s(t.employee_id)+"  "+e._s(t.name)+" "),a("div",{staticClass:"chip"},[e._v(" "+e._s(t.dept)+" ")]),e._v(" "),a("router-link",{staticClass:"secondary-content",attrs:{to:{name:"viewemployee",params:{employee_id:t.employee_id}}}},[a("i",{staticClass:"fa fa-eye"})])],1)})],2),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[a("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"collection-header center"},[t("h3",[this._v("EMPLOYEES")])])}]},_=a("VU/8")(m,v,!1,null,null,null).exports,f={name:"newemployee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},methods:{saveEmployee:function(){var e=this;u.collection("employees").add({employee_id:this.employee_id,name:this.name,dept:this.dept,position:this.position}).then(function(t){e.$router.push("/").catch(function(e){return console.log(err)})})}}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"newemployee"}},[a("h3",[e._v("New Employee")]),e._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.saveEmployee(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}}),e._v(" "),a("label",[e._v("\n            Employe ID #\n          ")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),a("label",[e._v("\n            Employe Name\n          ")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}}),e._v(" "),a("label",[e._v("\n            Employe Department\n          ")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}}),e._v(" "),a("label",[e._v("\n            Employe Postion\n          ")])])]),e._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("SUBMIT")]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("CANCEL\n      ")])],1)])])},staticRenderFns:[]},g=a("VU/8")(f,h,!1,null,null,null).exports,y={name:"viewemployee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,a){u.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){a(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;u.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},deleteEmploye:function(){var e=this;confirm("Are you sure?")&&u.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.delete(),e.$router.push("/")})})}}},w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"viewemployee"}},[a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[a("h4",[e._v(e._s(e.name))])]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Employee ID #"+e._s(e.employee_id))]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Department: "+e._s(e.dept))]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Position : "+e._s(e.position))])]),e._v(" "),a("router-link",{staticClass:"btn #ffea00 yellow accent-3 black-text",attrs:{to:"/"}},[e._v("\n  BACK\n  ")]),e._v(" "),a("button",{staticClass:"btn red right black-text",on:{click:e.deleteEmploye}},[e._v(" DELETE ")]),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"editemployee",params:{employee_id:e.employee_id}}}},[a("i",{staticClass:"fa fa-pencil"})])],1)],1)},staticRenderFns:[]},C=a("VU/8")(y,w,!1,null,null,null).exports,b={name:"editemployee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,a){u.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){a(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;u.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},updateEmployee:function(){var e=this;u.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.update({employee_id:e.employee_id,name:e.name,dept:e.dept,position:e.position}).then(function(){e.$router.push({name:"viewemployee",params:{employee_id:e.employee_id}})})})})}}},x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"editemployee"}},[a("h3",[e._v("Edit Employee")]),e._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.updateEmployee(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{disabled:"",type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}})])]),e._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("SUBMIT")]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("CANCEL\n      ")])],1)])])},staticRenderFns:[]},E=a("VU/8")(b,x,!1,null,null,null).exports,k={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(e){var t=this;s.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(e){alert("You are logged in as "+e.email),t.$router.push("/")},function(e){alert(e.message)}),e.preventDefault()}}},N={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container "},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel #ff5722 deep-orange white-text center"},[a("h3",[e._v("Login")]),e._v(" "),a("form",{attrs:{action:"index.html"}},[a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("email")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),a("label",{staticClass:"white-text",attrs:{for:"email"}},[e._v("Email Address")])]),e._v(" "),a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("lock")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),a("label",{staticClass:"white-text",attrs:{for:"password"}},[e._v("Password")])]),e._v(" "),a("button",{staticClass:"btn btn-large btn-extended grey lighten-4 black-text",on:{click:e.login}},[e._v("Login")])])])])])])])},staticRenderFns:[]},P=a("VU/8")(k,N,!1,null,null,null).exports,$={name:"register",data:function(){return{email:"",password:""}},methods:{register:function(e){var t=this;s.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(e){alert("Account created for "+e.email),t.$router.push("/")},function(e){alert(e.message)}),e.preventDefault()}}},q={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel grey lighten-4 black-text center"},[a("h3",[e._v("Register")]),e._v(" "),a("form",{attrs:{action:"index.html"}},[a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("email")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"email"}},[e._v("Email Address")])]),e._v(" "),a("div",{staticClass:"input-field"},[a("i",{staticClass:"material-icons prefix"},[e._v("lock")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"password"}},[e._v("Password")])]),e._v(" "),a("button",{staticClass:"btn btn-large btn-extended green lighten-4 black-text",on:{click:e.register}},[e._v("Register")])])])])])])])},staticRenderFns:[]},A=a("VU/8")($,q,!1,null,null,null).exports;i.a.use(p.a);var L=new p.a({routes:[{path:"/",name:"dashboard",component:_,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:P,meta:{requiresGuest:!0}},{path:"/register",name:"register",component:A,meta:{requiresGuest:!0}},{path:"/New",name:"newemployee",component:g,meta:{requiresAuth:!0}},{path:"/edit/:employee_id",name:"editemployee",component:E,meta:{requiresAuth:!0}},{path:":/employee_id",name:"viewemployee",component:C,meta:{requiresAuth:!0}}]});L.beforeEach(function(e,t,a){e.matched.some(function(e){return e.meta.requiresAuth})?s.a.auth().currentUser?a():a({path:"/Login",query:{redirect:e.fullPath}}):!function(e){return e.meta.requiresGuest}?a():s.a.auth().currentUser?a({path:"/",query:{redirect:e.fullPath}}):a()});var U=L;i.a.config.productionTip=!1;var D=void 0;s.a.auth().onAuthStateChanged(function(e){D||(D=new i.a({el:"#app",router:U,components:{App:c},template:"<App/>"}))})},W4Bj:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.6c286f12b70004a2de6d.js.map