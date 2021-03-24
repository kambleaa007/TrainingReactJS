(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(e,t,c){},24:function(e){e.exports=JSON.parse('{"Accounts":[{"id":"1","name":"1111","balance":10000,"type":"CURRENT","linked_accounts":["1234","1478","1598"],"transactions":[{"id":"0","status":"PENDING","payee_name":"abcd","amount":1000,"due_date":"10/10/2020","type":"DEBITED"},{"id":"1","status":"UNSUCCESSFUL","payee_name":"abcd","amount":990,"due_date":"10/10/2020","type":"CREDITED"},{"id":"2","status":"SUCCESSFUL","payee_name":"abcd","amount":590,"due_date":"10/10/2020","type":"DEBITED"},{"id":"3","status":"PENDING","payee_name":"abcd","amount":660,"due_date":"10/10/2020","type":"DEBITED"},{"id":"4","status":"CANCELLED","payee_name":"abcd","amount":0,"due_date":"10/10/2020","type":"DEBITED"}]},{"id":"2","name":"2222","balance":10000,"type":"CURRENT","linked_accounts":["2234","2478","2598"],"transactions":[{},{}]},{"id":"3","name":"3333","balance":10000,"type":"CURRENT","linked_accounts":["3234","3478","3598"],"transactions":[{},{}]},{"id":"4","name":"4444","balance":10000,"type":"SAVINGS","linked_accounts":["4234","4478","4598"],"transactions":[{},{}]},{"id":"5","name":"5555","balance":60000,"type":"SALARY","linked_accounts":["5234","5478","5598"],"transactions":[{},{}]}],"Customers":[{"id":"1","name":"ABCD","cardnumber":"123456","cvv-text":"CVVV","cvv-value":"257","expires":"12/2025"},{"id":"2","name":"EFGH","cardnumber":"123456","cvv-text":"CVVV","cvv-value":"257","expires":"12/2025"}],"Accordion":[{"id":"0","title":"Cancel direct debit mandate","body":""},{"id":"1","title":"Refuse next/all direct debits","body":""},{"id":"2","title":"Reactivate next/all direct debits","body":""},{"id":"3","title":"block/unblock direct debits","body":""}]}')},31:function(e,t,c){},32:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c.n(s),i=c(13),r=c.n(i),j=(c(31),c(5)),l=(c(32),c(33),c(34),c(35),c(36),c(4)),d=function(e){var t=Object(l.f)();return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"Header",children:[e.isBack?Object(n.jsx)("button",{className:"GoBack",onClick:function(){return t.goBack()},children:Object(n.jsx)("i",{className:"go-back-logo"})}):null,Object(n.jsx)("div",{className:"HeaderName",children:e.name}),Object(n.jsx)("button",{className:"HeaderUser",children:Object(n.jsx)("i",{className:"header-user-logo"})})]})})};var o=function(e){return Object(n.jsxs)("div",{className:"Payments",children:[Object(n.jsx)(d,{name:"Payments",isBack:!1}),Object(n.jsx)(b,{})]})};function b(){return Object(n.jsx)("div",{className:"operations-outer",children:Object(n.jsx)("div",{className:"Operations",children:Object(n.jsxs)("ul",{className:"Services",children:[Object(n.jsxs)("li",{children:[Object(n.jsxs)("a",{href:"/sendMoney",children:[Object(n.jsx)("i",{className:"send-money"}),"Send Money or pay a bill",Object(n.jsx)("i",{className:" next"})]}),"  "]}),Object(n.jsx)("li",{children:Object(n.jsxs)("a",{href:"/transferMoney",children:[Object(n.jsx)("i",{className:"transfer-money"}),"Transfer between my accounts",Object(n.jsx)("i",{className:" next"})]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("a",{href:"/standingOrders",children:["Standing orders",Object(n.jsx)("i",{className:"next"})]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("a",{href:"/managePayees",children:["Manage payees",Object(n.jsx)("i",{className:"  next"})]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("a",{href:"/mobileTopup",children:["Mobile top up",Object(n.jsx)("i",{className:" next"})]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("a",{href:"/directDebits",children:["Direct debits",Object(n.jsx)("i",{className:"  next"})]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("a",{href:"/futureDatedPayments",children:["Future dated payments",Object(n.jsx)("i",{className:"  next"})]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("a",{href:"/privateBankingPayment",children:["Private banking payment",Object(n.jsx)("i",{className:"  next"})]})})]})})})}c(20);var u=a.a.createContext({Global:null}),O=u.Provider;u.Consumer;var x=function(e){return Object(s.useContext)(u),Object(s.useEffect)((function(){})),Object(n.jsxs)("div",{className:"Payments",children:[Object(n.jsx)(d,{name:"Send Money",isBack:!0}),Object(n.jsx)(h,{})]})};function h(e){var t=Object(s.useContext)(u),c=Object(s.useState)(""),a=Object(j.a)(c,2),i=(a[0],a[1]);return Object(n.jsx)("div",{className:"Send",children:Object(n.jsxs)("div",{className:"SendHeader",children:[Object(n.jsx)("p",{children:"Pay from"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("label",{children:"Account "}),Object(n.jsxs)("select",{onChange:function(e){return t=e.target.value,void i(t);var t},children:[Object(n.jsx)("option",{value:"",children:"Select account"}),t.Global.Accounts.map((function(e){return Object(n.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]})]})})}c(42);var m=function(e){return Object(s.useEffect)((function(){})),Object(n.jsxs)("div",{className:"Payments",children:[Object(n.jsx)(d,{name:"Transfer Between",isBack:!0}),Object(n.jsx)(f,{})]})};function f(e){var t=Object(s.useContext)(u),c=Object(s.useState)(""),a=Object(j.a)(c,2),i=a[0],r=a[1];return Object(n.jsx)("div",{className:"Transfer",children:Object(n.jsxs)("ul",{className:"Select",children:[Object(n.jsx)("label",{className:"label",children:"Transfer from "}),Object(n.jsxs)("select",{onChange:function(e){return t=e.target.value,void r(t);var t},children:[Object(n.jsx)("option",{value:"",children:"Select account to transfer from"}),t.Global.Accounts.map((function(e){return Object(n.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),Object(n.jsx)("label",{className:"label",children:"Transfer to"}),Object(n.jsxs)("select",{children:[Object(n.jsx)("option",{value:"",children:"select account to transfer to"}),t.Global.Accounts.map((function(e){return e.id===i?e.linked_accounts.map((function(e){return Object(n.jsx)("option",{children:e},e)})):null}))]})]})})}var p=c(10);c(43);function v(e){var t=Object(s.useContext)(u),c=(Object(l.g)(),Object(s.useState)("")),a=Object(j.a)(c,2),i=(a[0],a[1]);return Object(n.jsxs)("div",{className:"Send",children:[Object(n.jsx)("div",{className:"standing-order-title",children:Object(n.jsx)("p",{children:"To view your standing orders select an account"})}),Object(n.jsx)("div",{className:"standing-order-body",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("label",{children:"Account "}),Object(n.jsxs)("select",{onChange:function(e){return t=e.target.value,void i(t);var t},children:[Object(n.jsx)("option",{value:"",children:"Select account"}),t.Global.Accounts.map((function(e){return Object(n.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),Object(n.jsx)("p",{className:"standing-order-or",children:Object(n.jsx)("span",{children:"Or"})}),Object(n.jsx)("div",{className:"set-up-button",children:Object(n.jsx)("button",{children:Object(n.jsxs)(p.b,{to:"/setUpNewOrder",children:[Object(n.jsx)("i",{className:"plus-logo"}),Object(n.jsx)("div",{children:"Set up new standing order"})]})})}),Object(n.jsxs)("div",{className:"info-msg",children:[Object(n.jsx)("span",{className:"info-logo"}),Object(n.jsx)("div",{children:Object(n.jsx)("p",{className:"info-msg-text",children:"Standing order can be set up online to transfer funds from your current account to another account in the same country. (max limit \u20ac3,000 / \xa33,000)."})})]})]})})]})}var y=function(e){return Object(s.useContext)(u),Object(l.g)(),Object(s.useEffect)((function(){})),Object(n.jsxs)("div",{className:"Payments",children:[Object(n.jsx)(d,{name:"Standing Orders",isBack:!0}),Object(n.jsx)(v,{})]})};c(44);function N(e){var t=Object(s.useContext)(u),c=(Object(l.g)(),Object(s.useState)("")),a=Object(j.a)(c,2),i=(a[0],a[1]);return Object(n.jsxs)("div",{className:"Send",children:[Object(n.jsx)("div",{className:"set-up-standing-title",children:Object(n.jsx)("div",{children:Object(n.jsxs)("p",{className:"time-info",children:[Object(n.jsx)("i",{className:"fa fa-clock-o"}),"\xa0 It takes a minimum of",Object(n.jsx)("span",{className:"info-middle",children:Object(n.jsx)("strong",{children:" 1 working day to "})}),"set up your standing order."]})})}),Object(n.jsx)("div",{className:"set-up-standing-order-body",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("label",{children:" Your Account "}),Object(n.jsx)("div",{className:"account-info",children:"You can set up a standing order online from your current account to another account in the same country."}),Object(n.jsx)("div",{className:"pay-from",children:Object(n.jsx)("strong",{className:"pay-from-text",children:"Pay from"})}),Object(n.jsxs)("select",{onChange:function(e){return t=e.target.value,void i(t);var t},children:[Object(n.jsx)("option",{value:"",children:"Select an account"}),t.Global.Accounts.map((function(e){return Object(n.jsxs)("option",{value:e.id,children:[e.type," - ",e.name]},e.id)}))]})]})})]})}var g=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(d,{name:"Set up Standing...",isBack:!0}),Object(n.jsx)(N,{})]})};c(45);function k(e){Object(s.useContext)(u),Object(l.g)();var t=Object(l.f)(),c=Object(s.useState)(""),a=Object(j.a)(c,2);a[0],a[1];return Object(n.jsxs)("div",{className:"Send",children:[Object(n.jsx)("div",{className:"private-banking-title",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("i",{className:"private-logo"})}),Object(n.jsx)("p",{className:"top-message",children:"If your payment cannot be made on 365 online you cannot make a separate payment throu the req payment option below"}),Object(n.jsx)("p",{className:"font-weight-bold",children:"when for example:"}),Object(n.jsxs)("ul",{className:"borderless",children:[Object(n.jsx)("li",{children:"Amount exceeded the 365 total working day limit."}),Object(n.jsx)("li",{children:"You want to send money to courriers or in currencies that are not included in 365 online."}),Object(n.jsx)("li",{children:"You want to send money from currency account in global market."})]})]})}),Object(n.jsxs)("div",{className:"private-banking-note",children:[Object(n.jsx)("p",{children:"Please Note:"}),Object(n.jsxs)("ul",{className:"borderless",children:[Object(n.jsx)("li",{children:"Amount exceeded the 365 total working day limit."}),Object(n.jsx)("li",{children:"You want to send money to courriers or in currencies that are not included in 365 online."}),Object(n.jsx)("li",{children:"You want to send money from currency account in global market."}),Object(n.jsx)("li",{children:"You want to send money to courriers or in currencies that are not included in 365 online."})]})]}),Object(n.jsx)("div",{className:"private-banking-footer",children:Object(n.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(n.jsx)("button",{class:"go-back-button",onClick:function(){return t.goBack()},children:"Go back"}),Object(n.jsx)("button",{class:"req-payment-button",children:"Request payment"})]})})]})}var S=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(d,{name:"Private Banking Payment",isBack:!0}),Object(n.jsx)(k,{})]})};function C(e){var t=Object(s.useContext)(u),c=Object(s.useState)(""),a=Object(j.a)(c,2),i=(a[0],a[1]);return Object(n.jsx)("div",{className:"Send",children:Object(n.jsxs)("div",{className:"SendHeader",children:[Object(n.jsx)("p",{children:"Pay from"}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("label",{children:[Object(n.jsx)("strong",{children:"Account"})," "]}),Object(n.jsxs)("select",{onChange:function(e){return t=e.target.value,void i(t);var t},children:[Object(n.jsx)("option",{value:"",children:"Select account"}),t.Global.Accounts.map((function(e){return Object(n.jsxs)("option",{value:e.id,children:[e.type," - ",e.name]},e.id)}))]})]})]})})}var E=function(e){return Object(s.useContext)(u),Object(s.useEffect)((function(){})),Object(n.jsxs)("div",{className:"Payments",children:[Object(n.jsx)(d,{name:"Mobile Top Up",isBack:!0}),Object(n.jsx)(C,{})]})},D=c(51),w=c(52);c(46);function B(e){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"top-heading",children:[Object(n.jsx)("div",{className:"help-info",children:Object(n.jsxs)("p",{children:[Object(n.jsx)("i",{className:"fa fa-question"}),"Need a hand?"]})}),Object(n.jsx)("div",{className:"next-arrow",children:Object(n.jsx)("i",{className:"fa fa-chevron-right"})})]}),Object(n.jsx)("div",{className:"Send",children:Object(n.jsx)(P,{})})]})}function P(e){var t=Object(s.useState)([{id:"0",title:"Cancel direct debit mandate",body:""},{id:"1",title:"Refuse next/all direct debits",body:""},{id:"2",title:"Reactivate next/all direct debits",body:""},{id:"3",title:"block/unblock direct debits",body:""}]),c=Object(j.a)(t,2),a=c[0];c[1];return Object(n.jsx)("div",{children:a.map((function(e){return Object(n.jsx)(A,{id:e.id,title:e.title,body:T(e.id)},e.id)}))})}function A(e){var t=e.id,c=e.title,s=e.body;return Object(n.jsx)("div",{children:Object(n.jsx)(D.a,{defaultActiveKey:"",children:Object(n.jsxs)(w.a,{children:[Object(n.jsx)(D.a.Toggle,{as:w.a.Header,variant:"link",eventKey:t,onClick:function(e){return function(e){e.target.classList.contains("card-header")?(e.target.classList.remove("card-header"),e.target.classList.add("new-card-header")):(e.target.classList.remove("new-card-header"),e.target.classList.add("card-header"))}(e)},children:c}),Object(n.jsx)(D.a.Collapse,{eventKey:t,children:Object(n.jsx)(w.a.Body,{children:s})})]})})},t)}var R=function(e){return Object(n.jsxs)("div",{className:"Payments",children:[Object(n.jsx)(d,{name:"SEPA Direct Debit Services",isBack:!0}),Object(n.jsx)(B,{})]})};function T(e){return"0"===e?Object(n.jsx)(U,{}):"1"===e?Object(n.jsx)(_,{}):"2"===e?Object(n.jsx)(L,{}):"3"===e?Object(n.jsx)(G,{}):"ERR!!! BODY DOENT EXIST LETS CREATE NEW BODY"}function U(e){return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"body-1",children:[Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{children:Object(n.jsx)("i",{className:"fa fa-check",style:{color:"blue",paddingRight:"1%"}})}),Object(n.jsx)("span",{children:"This means the bank will permenantly cancel all SEPA direct debit payments for this mandate."})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{children:Object(n.jsx)("i",{className:"fa fa-check",style:{color:"blue",paddingRight:"1%"}})}),Object(n.jsx)("span",{children:"Once this request is processed it cannot be reversed."})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{children:Object(n.jsx)("i",{className:"fa fa-check",style:{color:"blue",paddingRight:"1%"}})}),Object(n.jsx)("span",{children:"You need to submit your request by 3pm, one working day before the next payment is due."})]}),Object(n.jsx)("h6",{children:"Request form..."}),Object(n.jsx)("h6",{style:{color:"blue"},children:"You'll need:"}),Object(n.jsxs)("p",{children:[Object(n.jsx)("i",{className:"fa fa-check-circle",style:{color:"blue",paddingRight:"1%"}}),"Creditor name and ID",Object(n.jsx)("a",{href:"#",style:{float:"right"},children:Object(n.jsx)("em",{children:Object(n.jsx)("u",{children:"What is a creditor ID?"})})})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("i",{className:"fa fa-check-circle",style:{color:"blue",paddingRight:"1%"}}),"Unique mandate reference (UMR)",Object(n.jsx)("a",{href:"#",style:{float:"right"},children:Object(n.jsx)("em",{children:Object(n.jsx)("u",{children:"Where's my UMR?"})})})]}),Object(n.jsx)("div",{className:"d-flex justify-content-center",children:Object(n.jsx)("button",{className:"req-payment-button",children:"Continue"})})]})})}function _(e){return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"body-2",children:[Object(n.jsx)("p",{children:"Make a selection"}),Object(n.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(n.jsx)("button",{className:"",style:{width:"40%"},children:"Refuse Next"}),Object(n.jsx)("button",{className:"",style:{width:"40%"},children:"Refuse All"})]})]})})}function L(e){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"body-3",children:Object(n.jsx)("p",{children:"Body 3"})})})}function G(e){return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"body-4",children:[Object(n.jsx)("p",{children:"Make a selection"}),Object(n.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(n.jsx)("button",{className:"",style:{width:"40%"},children:"Block"}),Object(n.jsx)("button",{className:"",style:{width:"40%"},children:"Unblock"})]})]})})}var I=c(50);c(47);function M(e){var t=Object(s.useContext)(u).Global.Accounts[0].transactions;return Object(n.jsx)("div",{className:"Send",children:Object(n.jsx)("div",{className:"d-flex justify-content-around",children:Object(n.jsxs)(I.a,{striped:!0,borderless:!0,hover:!0,className:"payment-table ",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Status"}),Object(n.jsx)("th",{children:"Payee Name"}),Object(n.jsx)("th",{children:"Amount"}),Object(n.jsx)("th",{children:"Due Date"})]})}),Object(n.jsx)("tbody",{children:t.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:Y(e.status),children:e.status}),Object(n.jsx)("td",{children:e.payee_name}),Object(n.jsx)("td",{className:"text-center",children:e.amount}),Object(n.jsx)("td",{children:e.due_date})]},e.id)}))})]})})})}function Y(e){return"PENDING"===e?"payment-pending-status":"UNSUCCESSFUL"===e?"payment-unsuccess-status":"SUCCESSFUL"===e?"payment-success-status":"CANCELLED"===e?"payment-cancel-status":""}var F=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(d,{name:"Future Dated Payments",isBack:!0}),Object(n.jsx)(M,{})]})},q=c(24);var H=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=(t[0],t[1],Object(s.useState)(!1)),a=Object(j.a)(c,2),i=(a[0],a[1],Object(s.useState)(q)),r=Object(j.a)(i,2),d=r[0];return r[1],Object(n.jsx)(O,{value:{Global:d},children:Object(n.jsx)(p.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{path:"/",exact:!0,component:function(e){return Object(n.jsx)(o,{})}}),Object(n.jsx)(l.a,{path:"/sendMoney",component:function(e){return Object(n.jsx)(x,{})}}),Object(n.jsx)(l.a,{path:"/transferMoney",component:function(e){return Object(n.jsx)(m,{})}}),Object(n.jsx)(l.a,{path:"/standingOrders",component:function(e){return Object(n.jsx)(y,{})}}),Object(n.jsx)(l.a,{path:"/setUpNewOrder",component:function(e){return Object(n.jsx)(g,{})}}),Object(n.jsx)(l.a,{path:"/privateBankingPayment",component:function(e){return Object(n.jsx)(S,{})}}),Object(n.jsx)(l.a,{path:"/mobileTopup",component:function(e){return Object(n.jsx)(E,{})}}),Object(n.jsx)(l.a,{path:"/directDebits",component:function(e){return Object(n.jsx)(R,{})}}),Object(n.jsx)(l.a,{path:"/futureDatedPayments",component:function(e){return Object(n.jsx)(F,{})}})]})]})})})},V=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(H,{})}),document.getElementById("root")),V()}},[[48,1,2]]]);
//# sourceMappingURL=main.235bb7d6.chunk.js.map