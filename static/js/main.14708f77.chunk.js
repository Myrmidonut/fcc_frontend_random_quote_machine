(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),i=(n(13),n(1)),u=n(2),l=n(4),s=n(3),h=n(5),m=(n(15),function(){return o.a.createElement("div",{className:"header"},o.a.createElement("h1",null,"Random Quote Machine"))}),d=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"quote-container"},o.a.createElement("div",{id:"text",dangerouslySetInnerHTML:{__html:this.props.text}}),o.a.createElement("div",{id:"author"},this.props.author))}}]),e}(a.Component),p=function(t){return o.a.createElement("div",{className:"buttons-container"},o.a.createElement("button",{id:"new-quote",onClick:t.getQuote},"Next"),o.a.createElement("a",{id:"tweet-quote",href:"https://twitter.com/intent/tweet?text=".concat(t.plainText).concat(t.author),target:"_blank",rel:"noopener noreferrer"},"Tweet"))},f=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(o)))).state={text:"",author:"",plainText:""},n.getQuote=function(){var t="http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback&".concat(Math.random());fetch(t).then(function(t){return t.json()}).then(function(t){console.log(t),n.setState({text:t[0].content,author:" - "+t[0].title})}).then(function(){n.setState({plainText:document.getElementById("text").innerText})}).catch(function(t){return console.log(t)})},n}return Object(h.a)(e,t),Object(u.a)(e,[{key:"componentWillMount",value:function(){this.getQuote()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{id:"quote-box"},o.a.createElement(m,null),o.a.createElement(d,{text:this.state.text,author:this.state.author}),o.a.createElement(p,{getQuote:this.getQuote,plainText:this.state.plainText,author:this.state.author})))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,n){t.exports=n(17)}},[[8,2,1]]]);
//# sourceMappingURL=main.14708f77.chunk.js.map