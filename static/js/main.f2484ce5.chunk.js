(this.webpackJsonpprecept=this.webpackJsonpprecept||[]).push([[0],{15:function(e,t,a){e.exports=a(41)},20:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),u=(a(20),a(3)),s=a.n(u),o=a(2),i=a(14),m=a.n(i),p=(a(39),function(e){var t=e.users;if(e.loading)return r.a.createElement("h2",null,"loading...");if(t.length<=0)return r.a.createElement("h2",null,"No results found..");var a=t.map((function(e){return r.a.createElement("li",{className:"card ",key:e.id},r.a.createElement("img",{className:"card-img-top",src:e.avatar_url,alt:e.login,height:"250px"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("p",{className:"card-title"},e.login))))}));return r.a.createElement("ul",{className:"list-items"},a)}),g=function(e){for(var t=e.userPerPage,a=e.totalUsers,n=e.paginate,c=[],l=1;l<=Math.ceil(a/t);l++)c.push(l);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},c.map((function(e){return r.a.createElement("li",{key:e,className:"page-item"},r.a.createElement("button",{onClick:function(){return n(e)},className:"page-link"},e))}))))};a(40);function h(e){var t=e.apiUpdate,a=Object(n.useState)(""),c=Object(o.a)(a,2),l=c[0],u=c[1],s=Object(n.useState)("user"),i=Object(o.a)(s,2),m=i[0],p=i[1];return r.a.createElement("div",{className:"search-bar"},r.a.createElement("input",{type:"text",onChange:function(e){return u(e.target.value)},placeholder:"Search value"}),r.a.createElement("select",{onChange:function(e){return p(e.target.value)}},r.a.createElement("option",null,"user"),r.a.createElement("option",null,"location")),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return t(l,m)}},"Search"))}var b=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("https://api.github.com/search/users?q=location:bangalore&per_page=100"),u=Object(o.a)(l,2),i=u[0],b=u[1],f=Object(n.useState)(!1),E=Object(o.a)(f,2),d=E[0],v=E[1],j=Object(n.useState)(1),O=Object(o.a)(j,2),N=O[0],S=O[1],k=Object(n.useState)(10),y=Object(o.a)(k,1)[0];Object(n.useEffect)((function(){!function(){var e;s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return v(!0),t.next=3,s.a.awrap(m.a.get(i).catch((function(e){return c([])})));case 3:e=t.sent,console.log(e),e&&c(e.data.items),v(!1);case 7:case"end":return t.stop()}}))}()}),[i]);var _=N*y,x=_-y,w=a.slice(x,_);return r.a.createElement("div",null,r.a.createElement("header",null,"GitHub Search"),r.a.createElement(h,{apiUpdate:function(e,t){console.log(e,t),0===e.length?b("https://api.github.com/search/users?q=location:bangalore&per_page=100"):b("https://api.github.com/search/users?q=".concat(t,":").concat(e,"&per_page=100"))}}),r.a.createElement(p,{users:w,loading:d}),r.a.createElement(g,{userPerPage:y,totalUsers:a.length,paginate:function(e){return S(e)}}))};l.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f2484ce5.chunk.js.map