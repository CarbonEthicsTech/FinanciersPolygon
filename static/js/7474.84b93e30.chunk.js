/*! For license information please see 7474.84b93e30.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgis_dashboard=self.webpackChunkgis_dashboard||[]).push([[7474],{87474:function(t,e,n){n.r(e),n.d(e,{CalciteIcon:function(){return r},defineCustomElement:function(){return s}});var i=n(57601),r=i.I,s=i.d},57601:function(t,e,n){n.d(e,{I:function(){return w},d:function(){return g}});var i=n(4942),r=n(74165),s=n(15671),c=n(43144),a=n(60136),o=n(29388),l=n(15861),u=n(51554),h=n(92358),f=n(72021),v="flip-rtl",p={},d={},b={s:16,m:24,l:32};function m(t){return k.apply(this,arguments)}function k(){return(k=(0,l.Z)((0,r.Z)().mark((function t(e){var n,i,s,c,a,o,l,h;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.icon,i=e.scale,s=b[i],c=y(n),a="F"===c.charAt(c.length-1),o=a?c.substring(0,c.length-1):c,l="".concat(o).concat(s).concat(a?"F":""),!p[l]){t.next=8;break}return t.abrupt("return",p[l]);case 8:return d[l]||(d[l]=fetch((0,u.K3)("./assets/icon/".concat(l,".json"))).then((function(t){return t.json()})).catch((function(){return console.error('"'.concat(l,'" is not a valid calcite-ui-icon name')),""}))),t.next=11,d[l];case 11:return h=t.sent,p[l]=h,t.abrupt("return",h);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){var e=!isNaN(Number(t.charAt(0))),n=t.split("-");if(n.length>0){var i=/[a-z]/i;t=n.map((function(t,e){return t.replace(i,(function(t,n){return 0===e&&0===n?t:t.toUpperCase()}))})).join("")}return e?"i".concat(t):t}var w=(0,u.GH)(function(t){(0,a.Z)(n,t);var e=(0,o.Z)(n);function n(){var t;return(0,s.Z)(this,n),(t=e.call(this)).__registerHost(),t.__attachShadow(),t.icon=null,t.flipRtl=!1,t.scale="m",t.textLabel=void 0,t.pathData=void 0,t.visible=!1,t}return(0,c.Z)(n,[{key:"connectedCallback",value:function(){var t=this;this.waitUntilVisible((function(){t.visible=!0,t.loadIconPathData()}))}},{key:"disconnectedCallback",value:function(){var t;null===(t=this.intersectionObserver)||void 0===t||t.disconnect(),this.intersectionObserver=null}},{key:"componentWillLoad",value:function(){var t=(0,l.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.loadIconPathData();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,e=this.el,n=this.flipRtl,r=this.pathData,s=this.scale,c=this.textLabel,a=(0,h.b)(e),o=b[s],l=!!c,f=[].concat(r||"");return(0,u.h)(u.AA,{"aria-hidden":(0,h.t)(!l),"aria-label":l?c:null,role:l?"img":null},(0,u.h)("svg",{"aria-hidden":"true",class:(t={},(0,i.Z)(t,v,"rtl"===a&&n),(0,i.Z)(t,"svg",!0),t),fill:"currentColor",height:"100%",viewBox:"0 0 ".concat(o," ").concat(o),width:"100%",xmlns:"http://www.w3.org/2000/svg"},f.map((function(t){return"string"===typeof t?(0,u.h)("path",{d:t}):(0,u.h)("path",{d:t.d,opacity:"opacity"in t?t.opacity:1})}))))}},{key:"loadIconPathData",value:function(){var t=(0,l.Z)((0,r.Z)().mark((function t(){var e,n,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.icon,n=this.scale,i=this.visible,u.Z5.isBrowser&&e&&i){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,m({icon:e,scale:n});case 5:this.pathData=t.sent;case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"waitUntilVisible",value:function(t){var e=this;this.intersectionObserver=(0,f.c)("intersection",(function(n){n.forEach((function(n){n.isIntersecting&&(e.intersectionObserver.disconnect(),e.intersectionObserver=null,t())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):t()}},{key:"el",get:function(){return this}}],[{key:"assetsDirs",get:function(){return["assets"]}},{key:"watchers",get:function(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}},{key:"style",get:function(){return":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){block-size:1rem;inline-size:1rem;min-inline-size:1rem;min-block-size:1rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem;min-inline-size:1.5rem;min-block-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem;min-inline-size:2rem;min-block-size:2rem}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}"}}]),n}(u.mv),[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]);function g(){if("undefined"!==typeof customElements){["calcite-icon"].forEach((function(t){if("calcite-icon"===t)customElements.get(t)||customElements.define(t,w)}))}}g()},72021:function(t,e,n){n.d(e,{c:function(){return u}});var i=n(15671),r=n(43144),s=n(11752),c=n(61120),a=n(60136),o=n(29388),l=n(51554);function u(t,e,n){if(l.Z5.isBrowser){var u=function(t){var e=function(t){(0,a.Z)(n,t);var e=(0,o.Z)(n);function n(t){var r;return(0,i.Z)(this,n),(r=e.call(this,t)).observedEntry=[],r.callback=t,r}return(0,r.Z)(n,[{key:"observe",value:function(t,e){return this.observedEntry.push({target:t,options:e}),(0,s.Z)((0,c.Z)(n.prototype),"observe",this).call(this,t,e)}},{key:"unobserve",value:function(t){var e=this,i=this.observedEntry.filter((function(e){return e.target!==t}));this.observedEntry=[],this.callback((0,s.Z)((0,c.Z)(n.prototype),"takeRecords",this).call(this),this),this.disconnect(),i.forEach((function(t){return e.observe(t.target,t.options)}))}}]),n}(window.MutationObserver);return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}(t);return new u(e,n)}}}}]);
//# sourceMappingURL=7474.84b93e30.chunk.js.map