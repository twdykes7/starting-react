(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),m=a(0),l=a.n(m);a(8),a(9),a(10);var r=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),a=e.date.toLocaleString("en-US",{day:"2-digit"}),n=e.date.getFullYear();return l.a.createElement("div",{className:"expense-date"},l.a.createElement("div",{className:"expense-date__month"},t),l.a.createElement("div",{className:"expense-date__year"},n),l.a.createElement("div",{className:"expense-date__day"},a))};a(11);var c=function(e){var t="card "+e.className;return l.a.createElement("div",{className:t},e.children)};var s=function(e){return l.a.createElement(c,{className:"expense-item"},l.a.createElement(r,{date:e.date}),l.a.createElement("div",{className:"expense-item__description"},l.a.createElement("h2",null,e.title),l.a.createElement("div",{className:"expense-item__price"},"$",e.amount)))};a(12);var d=function(e){return l.a.createElement(c,{className:"expenses"},l.a.createElement(s,{title:e.items[0].title,amount:e.items[0].amount,date:e.items[0].date}),l.a.createElement(s,{title:e.items[1].title,amount:e.items[1].amount,date:e.items[1].date}),l.a.createElement(s,{title:e.items[2].title,amount:e.items[2].amount,date:e.items[2].date}),l.a.createElement(s,{title:e.items[3].title,amount:e.items[3].amount,date:e.items[3].date}))};var o=function(){var e=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];return l.a.createElement("div",null,l.a.createElement("h2",null,"Let's get started!"),l.a.createElement(d,{items:e}))};i.a.render(l.a.createElement(o,null),document.getElementById("root"))}],[[3,1,2]]]);
//# sourceMappingURL=main.a3ecb9b4.chunk.js.map