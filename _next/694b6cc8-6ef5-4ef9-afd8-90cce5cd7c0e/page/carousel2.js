module.exports=__NEXT_REGISTER_PAGE("/carousel2",function(){var e=webpackJsonp([2],{209:function(e,t,n){e.exports=n(210)},210:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=n(69);var a=n.n(r);var o=n(6);var i=n.n(o);var s=n(42);var c=n.n(s);var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;"value"in r&&(r.writable=true);Object.defineProperty(e,r.key,r)}}return function(t,n,r){n&&e(t.prototype,n);r&&e(t,r);return t}}();function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function f(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var p=function(e){f(t,e);function t(){u(this,t);return d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}l(t,[{key:"componentDidMount",value:function e(){function t(e,t,n){var r=t-e;if(r<=0)throw"wrong arguments";while(n>t)n-=r;while(n<e)n+=r;return n}function n(e){var n=0;var r,a,o,i;var s,c,l,u;e.addEventListener("touchstart",function(e){e.preventDefault();s=e.touches[0].pageX;c=n});e.addEventListener("touchmove",function(e){e.preventDefault();console.log(1);p(c-(e.touches[0].pageX-s));u=e.touches[0].pageX});e.addEventListener("touchend",function(e){var t=f();var o=u-s;o<50&&o>0&&t++;o<-50&&o<0&&t++;m(n,t*r,250,p);document.querySelector("#board").innerHTML=t%a.length},true);d();window.addEventListener("resize",d);function d(){r=e.clientWidth;a=e.querySelectorAll("[data-slide]");o=0;i=[0];for(var t=0;t<a.length;t++){o+=a[t].offsetWidth;i.push(a[t].offsetWidth+i[t])}p(n)}function f(){return Math.floor(n/r)}function p(e){e=t(0,o,e);var s=a.length;var c=[];for(var l=0;l<s;l++){var u=i[l]-e;o+u<r&&(u=o+u);c.push(u)}for(var d=0;d<s;d++)a[d].style.left=c[d]+"px";n=e}function m(e,t,n,r){var a=Date.now();function o(){var i=Date.now()-a;if(i>=n){r(t);return}var s=v(i/n)*(t-e)+e;r(s);window.requestAnimationFrame(o)}o()}function v(e){return 1-Math.pow(1-e,2)}function h(){m(n,(f()+1)*r,250,p)}function x(){m(n,(f()-1)*r,250,p)}return{next:h,pre:x}}var r=new n(document.getElementById("carousel"));document.querySelector(".next").addEventListener("click",function(e){r.next()});document.querySelector(".pre").addEventListener("click",function(e){r.pre()})}},{key:"render",value:function e(){return i.a.createElement("div",{className:"jsx-497567779"},i.a.createElement(c.a,null,i.a.createElement("title",{className:"jsx-497567779"},"轮播2"),i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",className:"jsx-497567779"})),i.a.createElement(a.a,{styleId:"497567779",css:[".h-center.jsx-497567779{margin:auto;display:block;}",".carousel.jsx-497567779{position:relative;width:100%;height:300px;overflow:hidden;}",".carousel.jsx-497567779>[data-slide].jsx-497567779{position:absolute;left:0;top:0;width:100%;height:100%;box-sizing:border-box;}",".active.jsx-497567779{z-index:1;}","[type=button].jsx-497567779{display:inline-block;padding:8px 16px;margin:0 5px;background-color:#ddd;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}","[type=button]:hover.jsx-497567779{opacity:0.8;}",".row.jsx-497567779{width:100%;display:inline-block;}",".h-center.jsx-497567779{text-align:center;}","body.jsx-497567779{margin:0;}"]}),i.a.createElement("div",{id:"carousel",className:"jsx-497567779 carousel h-center"},i.a.createElement("img",{"data-slide":true,src:"/static/imgs/demo1.jpg",className:"jsx-497567779"}),i.a.createElement("img",{"data-slide":true,src:"/static/imgs/demo2.jpg",className:"jsx-497567779"}),i.a.createElement("img",{"data-slide":true,src:"/static/imgs/demo3.jpg",className:"jsx-497567779"})),i.a.createElement("div",{className:"jsx-497567779 row"},i.a.createElement("div",{style:{marginTop:30},className:"jsx-497567779 h-center"},i.a.createElement("div",{type:"button",className:"jsx-497567779 pre"},"pre"),i.a.createElement("div",{type:"button",className:"jsx-497567779 next"},"next"))),i.a.createElement("div",{className:"jsx-497567779 row"},i.a.createElement("div",{id:"board",className:"jsx-497567779 h-center"})))}}]);return t}(i.a.PureComponent);p.defaultProps={};t["default"]=p}},[209]);return{page:e.default}});