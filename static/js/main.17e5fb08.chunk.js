(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c(7),s=c.n(i),r=(c(12),c(6)),a=c(4),j=c(0);var u=function(e){return Object(j.jsx)("div",{onClick:function(){return e.clickOnItemDetected(e.id)},children:Object(j.jsx)("li",{children:e.itemText})})};var d=function(e){return Object(j.jsx)("div",{className:"completeItems",children:Object(j.jsx)("li",{children:e.doneItem})})};c(14);var l=function(){var e=Object(n.useState)(""),t=Object(a.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)([]),l=Object(a.a)(s,2),o=l[0],b=l[1],O=Object(n.useState)([]),h=Object(a.a)(O,2),m=h[0],x=h[1];function f(e){x((function(t){return[].concat(Object(r.a)(t),[o[e]])})),b((function(t){return t.filter((function(t,c){return c!==e}))}))}return Object(j.jsxs)("div",{className:"main-container",children:[Object(j.jsx)("div",{className:"heading",children:Object(j.jsx)("h1",{children:"ToDo List"})}),Object(j.jsxs)("div",{className:"form",children:[Object(j.jsx)("input",{type:"text",className:"inputField",onChange:function(e){var t=e.target.value;i(t)},value:c}),Object(j.jsx)("button",{onClick:function(){""!==c&&b((function(e){return[].concat(Object(r.a)(e),[c])})),i("")},children:"Add"})]}),Object(j.jsxs)("div",{className:"ItemsList",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Active Tasks"}),Object(j.jsx)("ul",{children:o.map((function(e,t){return Object(j.jsx)(u,{id:t,itemText:e,clickOnItemDetected:f},t)}))})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Completed Tasks"}),Object(j.jsx)("ul",{children:m.map((function(e,t){return Object(j.jsx)(d,{doneItem:e},t)}))})]})]})]})};s.a.render(Object(j.jsx)(l,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.17e5fb08.chunk.js.map