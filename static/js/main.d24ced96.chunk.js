(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){},32:function(e,t,a){e.exports=a(55)},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),c=a.n(l),o=a(4),i=a(5),m=a(7),s=a(6),d=a(8),u=a(11),b=a(15),v=(a(18),function(e){return r.a.createElement("div",{class:"container position"},r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light"},r.a.createElement("li",{className:"nav-item navbar-brand col-md-6 text-center btn btn-link letter"},r.a.createElement(u.b,{className:"nav-link active",to:"/meseros"},"Meseros")),r.a.createElement("li",{className:"nav-item navbar-brand col-md-6 text-center btn btn-link letter"},r.a.createElement(u.b,{className:"nav-link active",to:"/chef"},"Chef"))))}),E=function(e){return r.a.createElement("form",null,r.a.createElement(v,null),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col-md-8 mb-6"},r.a.createElement("br",null),r.a.createElement("label",{for:"validationCustom01"},"Correo electr\xf3nico"),r.a.createElement("input",{type:"email",className:"form-control",id:"validationCustom01",placeholder:"Correo electr\xf3nico",required:!0}),r.a.createElement("div",{class:"valid-feedback"},"Muy bien\xa1")),r.a.createElement("br",null),r.a.createElement("div",{className:"col-md-8 mb-6"},r.a.createElement("br",null),r.a.createElement("label",{for:"validationCustom02"},"Nombre"),r.a.createElement("input",{type:"text",className:"form-control",id:"validationCustom02",placeholder:"Nombre",required:!0}),r.a.createElement("div",{class:"valid-feedback"},"Muy bien\xa1")),r.a.createElement("br",null),r.a.createElement("div",{className:"col-md-8 mb-6"},r.a.createElement("br",null),r.a.createElement("label",{for:"validationCustom03"},"# de empleado"),r.a.createElement("input",{type:"number",className:"form-control",id:"validationCustom03",placeholder:"# de empleado",required:!0}),r.a.createElement("div",{class:"valid-feedback"},"Looks good!"),r.a.createElement("br",null))),r.a.createElement(u.b,{className:" btn btn-primary btnNextWaiters",type:"submit",to:"/navbarFood"},"Siguiente"))},p=function(e){return r.a.createElement("form",null,r.a.createElement(v,null),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col-md-8 mb-6"},r.a.createElement("br",null),r.a.createElement("label",{for:"validationCustom01"},"Correo electr\xf3nico"),r.a.createElement("input",{type:"email",className:"form-control",id:"validationCustom01",placeholder:"Correo electr\xf3nico",required:!0}),r.a.createElement("div",{class:"valid-feedback"},"Muy bien\xa1")),r.a.createElement("br",null),r.a.createElement("div",{className:"col-md-8 mb-6"},r.a.createElement("br",null),r.a.createElement("label",{for:"validationCustom02"},"Nombre"),r.a.createElement("input",{type:"text",className:"form-control",id:"validationCustom02",placeholder:"Nombre",required:!0}),r.a.createElement("div",{class:"valid-feedback"},"Muy bien\xa1")),r.a.createElement("br",null),r.a.createElement("div",{className:"col-md-8 mb-6"},r.a.createElement("br",null),r.a.createElement("label",{for:"validationCustom03"},"No. de empleado"),r.a.createElement("input",{type:"number",className:"form-control",id:"validationCustom03",placeholder:"N\xfamero de empleado",required:!0}),r.a.createElement("div",{class:"valid-feedback"},"Looks good!"),r.a.createElement("br",null))),r.a.createElement(u.b,{className:" btn btn-primary btnNextWaiters",type:"submit"},"Siguiente"))},f=a(9),h=a(20),N=a(23);N.initializeApp({apiKey:"AIzaSyAyWtbEQlNhTLYbVxq8rGY2PKav7UOJl0Y",authDomain:"burguerqueen1-be3a3.firebaseapp.com",databaseURL:"https://burguerqueen1-be3a3.firebaseio.com",projectId:"burguerqueen1-be3a3",storageBucket:"burguerqueen1-be3a3.appspot.com",messagingSenderId:"688371913645",appId:"1:688371913645:web:179fac4b35000953"});var k=N,y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).deleteItem=function(e,t){a.props.clickDelete(e,t)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.foodOrder.map(function(t,a){return r.a.createElement("div",null,r.a.createElement("ul",{key:a,className:"list-group col-md-12"},r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center col-md-12"},r.a.createElement("span",{className:"col-md-6"},t.Item),r.a.createElement("span",{className:"btn btn-success col-md-2"},"$ "+t.Price),r.a.createElement("button",{className:"btn btn-outline-danger col-md-1",onClick:function(a){return e.deleteItem(a,t)}},"x"))))});return r.a.createElement("div",null,t)}}]),t}(r.a.Component),O=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).updateOrderToFirebase=function(t){var a=e.props.order,n={};return n["Ordenes/"+k.database().ref("Ordenes/").child("order").push().key]=a,k.database().ref().update(n),""},e.updateOrderToFirebase=e.updateOrderToFirebase.bind(Object(f.a)(e)),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},console.log(this.props.order),r.a.createElement("button",{className:"btn btn-outline-danger col-md-12",type:"submit","data-toggle":"modal","data-target":"#exampleModalCenter",onClick:this.updateOrderToFirebase},"Enviar a cocina")),r.a.createElement("div",{class:"modal fade",id:"exampleModalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},r.a.createElement("div",{class:"modal-dialog modal-dialog-centered",role:"document"},r.a.createElement("div",{class:"modal-content"},r.a.createElement("div",{class:"modal-header"},r.a.createElement("h5",{class:"modal-title",id:"exampleModalLongTitle"}),r.a.createElement("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{class:"modal-body"},"Orden enviada exitosamente\xa1"),r.a.createElement("div",{class:"modal-footer"},r.a.createElement("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"},"Cerrar"))))))}}]),t}(r.a.Component),g=a(31),j=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).state={name:""},e.addName=e.addName.bind(Object(f.a)(e)),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"updateName",value:function(e,t){this.setState(Object(g.a)({},e,t))}},{key:"addName",value:function(e){e.preventDefault(e),this.setState({name:this.state.name+e.target.value})}},{key:"render",value:function(){var e=this;return r.a.createElement("form",null,r.a.createElement("div",{className:"col-md-12  justify-content-center"},r.a.createElement("br",null),r.a.createElement("input",{type:"text",id:"clientName",value:this.state.name,className:"form-control form-control-lg col-md-12 background",placeholder:"Nombre del cliente",onChange:function(t){return e.updateName("name",t.target.value)},required:!0})))}}]),t}(r.a.Component),C=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).state={breakfast:[],orders:[],total:0},e.sumItem=e.sumItem.bind(Object(f.a)(e)),e.deleteItem=e.deleteItem.bind(Object(f.a)(e)),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"submit",value:function(e,t){var a={Item:e,Price:t};this.setState({orders:[].concat(Object(h.a)(this.state.orders),[a])})}},{key:"componentDidMount",value:function(){var e=this,t=[];k.database().ref("Desayuno").on("value",function(a){var n=a.val();for(var r in n)t.push({id:r,Image:n[r].Image,Item:n[r].Item,Price:n[r].Price,Sabores:n[r].Sabores});e.setState({breakfast:t})})}},{key:"deleteItem",value:function(e,t){e.preventDefault(e),this.setState(function(e){return{orders:e.orders.filter(function(e){return e!==t})}})}},{key:"sumItem",value:function(){var e=this.state.orders.map(function(e){return e.Price}).reduce(function(e,t){return e+t});this.setState({total:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"all-card col-md-12 bg-transparent justify-content-center"},this.state.breakfast.map(function(t,a){return r.a.createElement("div",{className:"card mb-4 card",key:a},r.a.createElement("button",{className:"row no-gutters ",id:t.id,onClick:function(){e.submit(t.Item,t.Price)},type:"submit"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("img",{src:t.Image,className:"card-img ",alt:""})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card-body  col-md-12"},r.a.createElement("h5",{className:"card-title"},t.Item),r.a.createElement("p",{className:"card-text"},"$"+t.Price)))))}))),r.a.createElement("div",{className:"col bg-transparent"},r.a.createElement(j,null),r.a.createElement(y,{foodOrder:this.state.orders,clickDelete:this.deleteItem}),r.a.createElement("button",{className:"btn btn-info col-md-11",onClick:this.sumItem},"Total: $ ",this.state.total),r.a.createElement(O,{order:this.state.orders,ClientName:r.a.createElement(j,null)}))))}}]),t}(n.Component),I=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).state={dinner:[],orders:[],total:0},e.sumItem=e.sumItem.bind(Object(f.a)(e)),e.deleteItem=e.deleteItem.bind(Object(f.a)(e)),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"submit",value:function(e,t){var a={Item:e,Price:t};this.setState({orders:[].concat(Object(h.a)(this.state.orders),[a])})}},{key:"componentDidMount",value:function(){var e=this,t=k.database().ref("Comida"),a=[];t.on("value",function(t){var n=t.val();for(var r in n)a.push({id:r,Image:n[r].Image,Item:n[r].Item,Price:n[r].Price,Sabores:n[r].Sabores});e.setState({dinner:a})})}},{key:"deleteItem",value:function(e,t){e.preventDefault(e),this.setState(function(e){return{orders:e.orders.filter(function(e){return e!==t})}})}},{key:"sumItem",value:function(){var e=this.state.orders.map(function(e){return e.Price}).reduce(function(e,t){return e+t});this.setState({total:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"all-card col-md-12 bg-transparent justify-content-center"},this.state.dinner.map(function(t,a){return r.a.createElement("div",{className:"card mb-4 card",key:a},r.a.createElement("button",{className:"row no-gutters ",id:t.id,onClick:function(){e.submit(t.Item,t.Price)},type:"submit"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("img",{src:t.Image,className:"card-img ",alt:""})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card-body  col-md-12"},r.a.createElement("h5",{className:"card-title"},t.Item),r.a.createElement("p",{className:"card-text"},"$"+t.Price)))))}))),r.a.createElement("div",{className:"col bg-transparent"},r.a.createElement(j,null),r.a.createElement(y,{foodOrder:this.state.orders,clickDelete:this.deleteItem}),r.a.createElement("button",{className:"btn btn-info col-md-11",onClick:this.sumItem},"Total: $ ",this.state.total),r.a.createElement(O,{order:this.state.orders,ClientName:r.a.createElement(j,null)}))))}}]),t}(n.Component),x=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).state={btnState:"1"},e.btnClick=e.btnClick.bind(Object(f.a)(e)),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"btnClick",value:function(e){var t=e.target.id;this.setState({btnState:t})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container position"},r.a.createElement("button",{className:"nav-item navbar-brand col-md-3 text-center btn btn-link letter",id:"1",onClick:function(t){e.btnClick(t)}},"Desayunos"),r.a.createElement("button",{className:"nav-item navbar-brand col-md-3 text-center btn btn-link letter",id:"2",onClick:function(t){e.btnClick(t)}},"Comida/Cena"),r.a.createElement("button",{className:"nav-item navbar-brand col-md-3 text-center btn btn-link letter"},r.a.createElement(u.b,{className:"nav-link active",to:"/"},"Cerrar sesi\xf3n")),"1"===this.state.btnState?r.a.createElement(C,null):r.a.createElement(I,null))}}]),t}(r.a.Component),S=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",component:v}),r.a.createElement(b.a,{exact:!0,path:"/navbarFood",component:x}),r.a.createElement(b.a,{exact:!0,path:"/meseros",component:E}),r.a.createElement(b.a,{exact:!0,path:"/chef",component:p}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.d24ced96.chunk.js.map