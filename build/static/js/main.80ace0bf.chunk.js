(this.webpackJsonpstranger_things_project=this.webpackJsonpstranger_things_project||[]).push([[0],{31:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(10),s=n.n(c),a=n(11),o=n(2),i=n(4),j=n.n(i),u=n(8),b=function(){var e=Object(u.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://strangers-things.herokuapp.com/api/2008-USD-RM-WEB-PT","/posts"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=n(9),p=n(0),h=function(e){var t=e.post,n=function(){var e=Object(u.a)(j.a.mark((function e(){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://strangers-things.herokuapp.com/api/2008-USD-RM-WEB-PT","/posts/").concat(t._id),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))}});case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,console.log("This is the deletePost function",r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"post",children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:t.title}),Object(p.jsx)("div",{children:t.description}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{children:t.price}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{className:"delete-button",onClick:n,children:"Delete Post"})]})})},d=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)(Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,c(t.data.posts);case 4:case"end":return e.stop()}}),e)}))));var s=null;return n&&n.length&&(s=Object(p.jsx)("div",{className:"posts-section",children:n.map((function(e){return Object(p.jsx)(h,{post:e},e._id)}))})),Object(p.jsx)("div",{children:s})},O=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),a=Object(l.a)(s,2),o=a[0],i=a[1],b=function(){var e=Object(u.a)(j.a.mark((function e(t){var r,s,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("https://strangers-things.herokuapp.com/api/2008-USD-RM-WEB-PT/users/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{username:n,password:o}})});case 3:return r=e.sent,e.next=6,r.json();case 6:s=e.sent,a=s.data.token,localStorage.setItem("token",a),c(""),i("");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=localStorage.getItem("token");return Object(p.jsxs)("div",{className:"login-form",children:[Object(p.jsxs)("form",{onSubmit:b,children:[Object(p.jsx)("h2",{children:"New User"}),Object(p.jsx)("input",{type:"text",placeholder:"Username",value:n,onChange:function(e){return c(e.target.value)}}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"text",placeholder:"Password",value:o,onChange:function(e){return i(e.target.value)}}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{type:"submit",children:"Sign Up"})]}),Object(p.jsx)("div",{children:h&&h.length?Object(p.jsx)("div",{children:" Logged In "}):""})]})},x=function(e){var t=Object(r.useState)(""),n=Object(l.a)(t,2),c=n[0],s=n[1],a=Object(r.useState)(""),o=Object(l.a)(a,2),i=o[0],b=o[1],h=Object(r.useState)(""),d=Object(l.a)(h,2),O=d[0],x=d[1],v=function(){var e=Object(u.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=localStorage.getItem("token"),e.next=4,fetch("https://strangers-things.herokuapp.com/api/2008-USD-RM-WEB-PT/posts",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify({post:{title:c,description:i,price:O}})});case 4:return r=e.sent,e.next=7,r.json();case 7:e.sent;case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"new-post",children:Object(p.jsxs)("form",{onSubmit:v,children:[Object(p.jsx)("h2",{children:"New Post Form"}),Object(p.jsx)("input",{type:"text",placeholder:"Title",value:c,onChange:function(e){return s(e.target.value)}}),Object(p.jsx)("br",{}),Object(p.jsx)("textarea",{type:"text",placeholder:"Description",value:i,onChange:function(e){return b(e.target.value)}}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"text",placeholder:"Price",value:O,onChange:function(e){return x(e.target.value)}}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{type:"submit",children:"Create New Post"})]})})},v=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),a=Object(l.a)(s,2),o=a[0],i=a[1],b=localStorage.getItem("token"),h=function(){var e=Object(u.a)(j.a.mark((function e(t){var r,s,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch("".concat("https://strangers-things.herokuapp.com/api/2008-USD-RM-WEB-PT","/users/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{username:n,password:o}})});case 4:if(!(r=e.sent)){e.next=13;break}return e.next=8,r.json();case 8:s=e.sent,a=s.data.token,localStorage.setItem("token",a),c(""),i("");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"login-form",children:Object(p.jsxs)("form",{onSubmit:h,children:[Object(p.jsx)("h2",{children:"Log In"}),Object(p.jsx)("input",{type:"text",placeholder:"Username",value:n,onChange:function(e){return c(e.target.value)}}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"text",placeholder:"Password",value:o,onChange:function(e){return i(e.target.value)}}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{type:"submit",children:"Log In"}),Object(p.jsx)("div",{children:b&&b.length?Object(p.jsx)("div",{children:" Logged In "}):""})]})})},g=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("button",{onClick:function(){localStorage.removeItem("token")},children:"Logout"})})},m=function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"header",children:[Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"page-name",children:"Stranger's Things"})}),Object(p.jsxs)("div",{className:"navigation-bar",children:[Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:Object(p.jsx)(a.b,{to:"/",className:"nav-buttons",children:"Home"})})}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:Object(p.jsx)(a.b,{to:"/LoginForm",className:"nav-buttons",children:"Log In"})})}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:Object(p.jsx)(a.b,{to:"/RegisterForm",className:"nav-buttons",children:"Sign Up"})})}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:Object(p.jsx)(a.b,{to:"/NewPostForm",className:"nav-buttons",children:"New Post"})})})]})]}),Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{path:"/RegisterForm",component:O}),Object(p.jsx)(o.a,{path:"/NewPostForm",component:x}),Object(p.jsx)(o.a,{path:"/LoginForm",component:v})]}),Object(p.jsx)("div",{className:"main",children:Object(p.jsx)(d,{})}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{children:Object(p.jsx)(g,{})})]})};s.a.render(Object(p.jsx)(a.a,{children:Object(p.jsx)(m,{})}),document.getElementById("app"))}},[[31,1,2]]]);
//# sourceMappingURL=main.80ace0bf.chunk.js.map