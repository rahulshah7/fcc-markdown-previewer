(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,a){e.exports=a.p+"static/media/default.88a1db3d.md"},55:function(e,t,a){e.exports=a(93)},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),i=a.n(o),l=a(38),d=a(17),c=a(45),h=a(39),s=a(11),u=a(46),m=a(34),p=a.n(m),v=a(44),g=a(40),b=a.n(g),w=a(94),x=a(114),f=a(113),T=a(111),E=a(110),C=Object(w.a)(function(e){return{root:{height:"100%",width:"100%",padding:"0.5rem",paddingTop:"4rem",overflow:"auto",outline:"none",resize:"none",border:"none"}}});var k=function(e){var t=e.children,a=e.handleTextChange,n=C();return r.a.createElement(E.a,{component:"textarea",className:n.root,id:"editor",onChange:function(e){a(e.target.value)},value:t||""})},y=Object(w.a)(function(e){return{root:{height:"100%",width:"100%",padding:"0.5rem",paddingTop:"4rem",wordBreak:"break-word",overflow:"auto","& a":{color:e.palette.secondary.light},"& a:visited":{color:e.palette.secondary.dark},"& blockquote":{background:e.palette.grey[100],color:e.palette.primary.main,borderLeft:"0.25rem solid",paddingLeft:"0.5rem",margin:"1rem"},"& pre":{overflowX:"auto"},"& pre, code":{background:e.palette.grey[200],fontWeight:"bold"},"& table":{borderCollapse:"collapse"},"& th, td":{padding:"0.5rem",border:"1px solid black"}}}});var S=function(e){var t=e.children,a=y();return r.a.createElement(E.a,{component:"div",className:a.root,dangerouslySetInnerHTML:{__html:t},id:"preview"})},O=Object(w.a)(function(e){return{root:{backgroundColor:e.palette.background.paper,height:"100vh",width:"100vw"}}});var j=function(e){var t=e.editText,a=e.previewText,n=e.handleTextChange,o=O(),i=r.a.useState(0),l=Object(v.a)(i,2),d=l[0],c=l[1];return r.a.createElement("div",{className:o.root},r.a.createElement(x.a,{position:"fixed",color:"default"},r.a.createElement(f.a,{value:d,onChange:function(e,t){c(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth"},r.a.createElement(T.a,{label:"Preview"}),r.a.createElement(T.a,{label:"Edit"}))),r.a.createElement(b.a,{index:d,onChangeIndex:function(e){c(e)}},r.a.createElement(S,null,a),r.a.createElement(k,{handleTextChange:n},t)))},z=Object(w.a)(function(e){return{root:{backgroundColor:e.palette.background.paper,height:"100vh",width:"100vw",display:"flex","& #preview":{overflowY:"scroll"}}}});var W=function(e){var t=e.editText,a=e.previewText,n=e.handleTextChange,o=z();return r.a.createElement("div",{className:o.root},r.a.createElement(x.a,{position:"fixed",color:"default"},r.a.createElement(f.a,{textColor:"primary",variant:"fullWidth"},r.a.createElement(T.a,{disabled:!0,label:"Preview"}),r.a.createElement(T.a,{disabled:!0,label:"Edit"}))),r.a.createElement(S,null,a),r.a.createElement(k,{handleTextChange:n},t))},L=a(112),M=a(43),N=a.n(M);p.a.setOptions({breaks:!0});var B=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={editText:"",previewText:"",isMobile:!0},a.handleTextChange=a.handleTextChange.bind(Object(s.a)(a)),a.handleScreenSize=a.handleScreenSize.bind(Object(s.a)(a)),a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"handleTextChange",value:function(e){this.setState({editText:e,previewText:p()(e)})}},{key:"handleScreenSize",value:function(){this.setState({isMobile:window.innerWidth<768})}},{key:"componentDidMount",value:function(){var e=this;this.handleScreenSize(),window.addEventListener("resize",this.handleScreenSize),fetch(N.a).then(function(e){return e.text()}).then(function(t){e.handleTextChange(t)})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleScreenSize)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,null),this.state.isMobile?r.a.createElement(j,{editText:this.state.editText,previewText:this.state.previewText,handleTextChange:this.handleTextChange}):r.a.createElement(W,{editText:this.state.editText,previewText:this.state.previewText,handleTextChange:this.handleTextChange})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[55,1,2]]]);
//# sourceMappingURL=main.3e9c3ab6.chunk.js.map