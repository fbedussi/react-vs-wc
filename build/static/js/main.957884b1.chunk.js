(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),i=(n(13),n(1)),l=n(2),s=n(4),h=n(3),u=n(5),d=function(){return Math.floor(256*Math.random())},m=50,f=250;function p(){return Array.from({length:m},function(){return{width:Math.floor(80*Math.random()),color:"rgb(".concat(d(),", ").concat(d(),", ").concat(d(),")")}})}function b(){return{width:Math.floor(80*Math.random()),color:"rgb(".concat(d(),", ").concat(d(),", ").concat(d(),")")}}var w=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(s.a)(this,Object(h.a)(e).call(this))).state=b(),t}return Object(u.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.refreshState()}},{key:"refreshState",value:function(){this.setState(b()),setTimeout(this.refreshState.bind(this),Math.floor(500*Math.random))}},{key:"render",value:function(){var t={display:"inline-block",height:"30px",width:"".concat(this.state.width,"px"),backgroundColor:this.state.color};return r.a.createElement("span",{style:t})}}]),e}(a.Component),g=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(s.a)(this,Object(h.a)(e).call(this))).state={randomElements:p(),gridElements:Array.from({length:f},function(){return null})},setInterval(function(){t.setState({elements:p()})},500),t}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"".concat(f," elements refreshing indipendently and randomly")),this.state.gridElements.map(function(t,e){return r.a.createElement(w,{key:e})}),r.a.createElement("h1",null,"".concat(m," elements refreshing randomly but all toghether")),this.state.randomElements.map(function(t,e){var n={display:"inline-block",height:"30px",width:"".concat(t.width,"px"),backgroundColor:t.color};return r.a.createElement("span",{key:e,style:n})}))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,n){t.exports=n(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.957884b1.chunk.js.map