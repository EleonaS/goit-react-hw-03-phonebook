(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{24:function(n,e,t){},30:function(n,e,t){"use strict";t.r(e);var a,r,o,c,i,s,l,d,u,b,p,h=t(0),m=t.n(h),j=t(14),x=t.n(j),f=(t(24),t(18)),g=t(4),O=t(5),v=t(8),C=t(7),y=t(19),k=t(2),w=t(3),S=w.a.section(a||(a=Object(k.a)(["\n  padding-top: 50px;\n  padding-bottom: 50px;\n"]))),z=t(1),A=function(n){var e=n.children;return Object(z.jsx)(S,{children:e})},F=w.a.div(r||(r=Object(k.a)(["\n  width: 1000px;\n  margin: 0 auto;\n  padding: 50px;\n  border-radius: 10px;\n  background-color: beige;\n  box-shadow: rgba(0, 0, 0, 0.3) 0 0\n    10px 5px;\n"]))),D=function(n){var e=n.children;return Object(z.jsx)(F,{children:e})},L=w.a.h1(o||(o=Object(k.a)(["\n  display: flex;\n  align-items: center;\n  color: green;\n  font-size: 30px;\n  font-weight: 600;\n  margin-bottom: 20px;\n"]))),Z=function(n){var e=n.title;return Object(z.jsx)(L,{children:e})},J=t(6),I=w.a.form(c||(c=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n  margin-bottom: 40px;\n"]))),P=w.a.label(i||(i=Object(k.a)(["\n  font-size: 18px;\n  display: flex;\n  flex-direction: column;\n"]))),T=w.a.input(s||(s=Object(k.a)(["\n  display: block;\n  width: 100%;\n  margin-bottom: 20px;\n  height: 40px;\n  padding-left: 10px;\n  border: 1px;\n  border-bottom: 1px solid green;\n  font-size: 20px;\n  color: black;\n  background-color: transparent;\n"]))),B=w.a.button(l||(l=Object(k.a)(["\n  align-items: center;\n  width: 200px;\n  padding: 5px 10px;\n  cursor: pointer;\n  border: 2px solid green;\n  border-radius: 7px;\n  font-size: 18px;\n  text-transform: uppercase;\n  color: black;\n  background-color: transparent;\n  transition: all 250ms ease-in-out;\n  &:hover {\n    border-color: gray;\n    color: green;\n    font-weight: 600;\n    background-color: white;\n  }\n"]))),E=function(n){Object(v.a)(t,n);var e=Object(C.a)(t);function t(){var n;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={name:"",number:""},n.handleChange=function(e){var t=e.currentTarget,a=t.name,r=t.value;n.setState(Object(J.a)({},a,r))},n.handleFormSubmit=function(e){e.preventDefault(),n.props.onSubmit(n.state),n.reset()},n.reset=function(){n.setState({name:"",number:""})},n}return Object(O.a)(t,[{key:"render",value:function(){var n=this.state,e=n.name,t=n.number;return Object(z.jsxs)(I,{onSubmit:this.handleFormSubmit,children:[Object(z.jsxs)(P,{children:["Name",Object(z.jsx)(T,{type:"text",name:"name",value:e,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",placeholder:"Enter name",required:!0})]}),Object(z.jsxs)(P,{children:["Phone number",Object(z.jsx)(T,{type:"tel",name:"number",value:t,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",placeholder:"+111-111-11",required:!0})]}),Object(z.jsx)(B,{type:"submit",children:"Add contact"})]})}}]),t}(h.Component),M=w.a.label(d||(d=Object(k.a)(["\n  font-size: 18px;\n  display: flex;\n  flex-direction: column;\n"]))),N=w.a.input(u||(u=Object(k.a)(["\n  width: 400px;\n  display: block;\n  margin-bottom: 20px;\n  height: 40px;\n  padding-left: 10px;\n  border: 1px;\n  border-bottom: 1px solid green;\n  font-size: 20px;\n  color: black;\n  background-color: transparent;\n"]))),q=function(n){var e=n.filter,t=n.onChange;return Object(z.jsxs)(M,{children:["Find contacts by name",Object(z.jsx)(N,{type:"text",value:e,onChange:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",placeholder:""})]})},$=w.a.ul(b||(b=Object(k.a)(["\n  list-style: none;\n  padding-left: 0;\n  font-size: 18px;\n"]))),H=w.a.li(p||(p=Object(k.a)(["\n  width: 500px;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n  padding-bottom: 20px;\n  font-size: 18px;\n  cursor: pointer;\n  &:hover {\n    color: green;\n    /*font-weight:600;    \n  font-size: 24px;*/\n  }\n"]))),K=function(n){var e=n.id,t=n.name,a=n.number,r=n.onDeleteContact;return Object(z.jsxs)(z.Fragment,{children:[t,": ",a,Object(z.jsx)(B,{type:"button",onClick:function(){return r(e)},children:"Delete"})]})},R=function(n){var e=n.contacts,t=n.onDeleteContact;return Object(z.jsx)($,{children:e.map((function(n){var e=n.name,a=n.number,r=n.id;return Object(z.jsx)(H,{children:Object(z.jsx)(K,{id:r,name:e,number:a,onDeleteContact:t})},r)}))})},U=t(9),G=function(n){Object(v.a)(t,n);var e=Object(C.a)(t);function t(){var n;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.checkContact=function(e,t){var a=n.state.contacts,r=a.find((function(n){return n.name.toLowerCase()===e.toLowerCase()})),o=a.find((function(n){return n.number.replace(/[^0-9]/g,"")===t.replace(/[^0-9]/g,"")}));return r?Object(U.b)("".concat(e," is already in contacts")):o?Object(U.b)("".concat(t," is already in contacts")):void 0},n.handleFormSubmit=function(e){var t=e.name,a=e.number;if(!n.checkContact(t,a)){var r=Object(y.a)();n.setState((function(n){return{contacts:[].concat(Object(f.a)(n.contacts),[{id:r,name:t,number:a}])}}))}},n.handleChangeFilter=function(e){n.setState({filter:e.currentTarget.value})},n.deleteContact=function(e){n.setState((function(n){return{contacts:n.contacts.filter((function(n){return n.id!==e}))}}))},n}return Object(O.a)(t,[{key:"componentDidMount",value:function(){var n=JSON.parse(localStorage.getItem("contacts"));n&&this.setState({contacts:n})}},{key:"componentDidUpdate",value:function(n){this.state.contacts!==n.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var n=this.state,e=n.contacts,t=n.filter,a=t.toLowerCase(),r=e.filter((function(n){return n.name.toLowerCase().includes(a)}));return Object(z.jsx)(A,{children:Object(z.jsxs)(D,{children:[Object(z.jsx)(Z,{title:"Phonebook"}),Object(z.jsx)(E,{onSubmit:this.handleFormSubmit}),Object(z.jsx)(U.a,{}),Object(z.jsx)(Z,{title:"Contacts"}),Object(z.jsx)(q,{value:t,onChange:this.handleChangeFilter}),Object(z.jsx)(R,{contacts:r,onDeleteContact:this.deleteContact})]})})}}]),t}(h.Component),Q=G,V=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,31)).then((function(e){var t=e.getCLS,a=e.getFID,r=e.getFCP,o=e.getLCP,c=e.getTTFB;t(n),a(n),r(n),o(n),c(n)}))};x.a.render(Object(z.jsx)(m.a.StrictMode,{children:Object(z.jsx)(Q,{})}),document.getElementById("root")),V()}},[[30,1,2]]]);
//# sourceMappingURL=main.7c459f6d.chunk.js.map