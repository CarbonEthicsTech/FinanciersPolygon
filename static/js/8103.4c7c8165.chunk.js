"use strict";(self.webpackChunkgis_dashboard=self.webpackChunkgis_dashboard||[]).push([[8103],{82272:function(e,t,n){n.d(t,{BN:function(){return m},Yc:function(){return v},mx:function(){return p},rk:function(){return u}});var a=n(74165),i=n(15861),r=n(43144),l=n(15671),o=n(42265),u="arial-unicode-ms",s="woff2",c=new Map,d=new Set,h=(0,r.Z)((function e(t,n){(0,l.Z)(this,e),this.fontFace=t,this.promise=n}));function p(e){return f.apply(this,arguments)}function f(){return f=(0,i.Z)((0,a.Z)().mark((function e(t){var n,i,r,l,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=v(t),!(i=c.get(n))){e.next=3;break}return e.abrupt("return",i.promise);case 3:if(r=new FontFace(t.family,"url('".concat(o.Z.fontsUrl,"/woff2/").concat(n,".").concat(s,"') format('").concat(s,"')"),{style:t.style,weight:t.weight}),!(l=document.fonts).has(r)||"loading"!==r.status){e.next=6;break}return e.abrupt("return",r.loaded);case 6:return u=r.load().then((function(){return l.add(r),r})),e.abrupt("return",(c.set(n,new h(r,u)),d.add(r),u));case 8:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function m(e){if(!e)return u;var t=e.toLowerCase().split(" ").join("-");switch(t){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return t}}function v(e){var t=function(e){if(!e.weight)return"";switch(e.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}(e)+function(e){if(!e.style)return"";switch(e.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}(e);return m(e.family)+(t.length>0?t:"-regular")}},8103:function(e,t,n){n.r(t),n.d(t,{getContrastingBackgroundTheme:function(){return V},getRenderSymbolParameters:function(){return W},previewSymbol2D:function(){return A}});var a=n(74165),i=n(1413),r=n(15861),l=n(51995),o=n(10064),u=n(82272),s=n(17842),c=n(79563),d=n(37817),h=n(69157),p=n(81283),f=n(28357),m="picture-fill",v="picture-marker",w="simple-fill",y="simple-line",g="simple-marker",b="text",k="Aa",x=d.b_.size,Z=d.b_.maxSize,M=d.b_.maxOutlineSize,L=d.b_.lineWidth,z=225,F=document.createElement("canvas");function C(e,t){var n=F.getContext("2d"),a=[];return t&&(t.weight&&a.push(t.weight),t.size&&a.push(t.size+"px"),t.family&&a.push(t.family)),n.font=a.join(" "),n.measureText(e).width}var S=7.2/2.54,_=72/2.54;function j(e){if(0===e.length)return 0;if(e.length>2){var t=(0,s.Wz)(1),n=parseFloat(e);switch(e.slice(-2)){case"px":return n;case"pt":return n*t;case"in":return 72*n*t;case"pc":return 12*n*t;case"mm":return n*S*t;case"cm":return n*_*t}}return parseFloat(e)}function E(e){var t=null===e||void 0===e?void 0:e.size;return{width:null!=t&&"object"==typeof t&&"width"in t?(0,s.F2)(t.width):null,height:null!=t&&"object"==typeof t&&"height"in t?(0,s.F2)(t.height):null}}function q(e,t){return D.apply(this,arguments)}function D(){return(D=(0,r.Z)((0,a.Z)().mark((function e(t,n){var i,r,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.fill,r=t.color,"pattern"!==(null===i||void 0===i?void 0:i.type)||!r||t.type===m){e.next=6;break}return e.next=4,(0,c.Od)(i.src,r.toCss(!0));case 4:l=e.sent,i.src=l,n.fill=i;case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,t,n,a){return T.apply(this,arguments)}function T(){return(T=(0,r.Z)((0,a.Z)().mark((function e(t,n,i,r){var l,o,s,c,d,h;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("font"in t&&t.font&&"text"===n.shape.type){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,(0,u.mx)(t.font);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:c=E(r),d=c.width,h=/[\uE600-\uE6FF]/.test(n.shape.text),null!=d||h||(i[0]=C(n.shape.text,{weight:null===(l=n.font)||void 0===l?void 0:l.weight,size:null===(o=n.font)||void 0===o?void 0:o.size,family:null===(s=n.font)||void 0===s?void 0:s.family}));case 11:case"end":return e.stop()}}),e,null,[[2,7]])})))).apply(this,arguments)}function B(e,t,n,a,r){var l;if(null!=e.haloColor&&null!=e.haloSize){var o;null!==(o=r.masking)&&void 0!==o||(r.masking=n.map((function(){return[]})));var u=(0,s.F2)(e.haloSize);a[0]+=u,a[1]+=u,n.unshift([(0,i.Z)((0,i.Z)({},t),{},{fill:null,stroke:{color:e.haloColor,width:2*u,join:"round",cap:"round"}})]),r.masking.unshift([{shape:{type:"rect",x:0,y:0,width:a[0]+2*p.M8,height:a[1]+2*p.M8},fill:[255,255,255],stroke:null},(0,i.Z)((0,i.Z)({},t),{},{fill:[0,0,0,0],stroke:null})])}null==e.backgroundColor&&null==e.borderLineColor||(a[0]+=2*p.M8,a[1]+=2*p.M8,n.unshift([{shape:{type:"rect",x:0,y:0,width:a[0],height:a[1]},fill:e.backgroundColor,stroke:{color:e.borderLineColor,width:(0,s.F2)(e.borderLineSize)}}]),null===(l=r.masking)||void 0===l||l.unshift([]))}function P(e,t){return e>t?"dark":"light"}function W(e,t){var n,a,r="number"==typeof(null===t||void 0===t?void 0:t.size)?null===t||void 0===t?void 0:t.size:null,l=null!=r?(0,s.F2)(r):null,o=null!=(null===t||void 0===t?void 0:t.maxSize)?(0,s.F2)(t.maxSize):null,u=null!=(null===t||void 0===t?void 0:t.rotation)?t.rotation:"angle"in e?e.angle:null,h=(0,c._M)(e),p=(0,c.mx)(e);"dark"!==V(e,245)||(null===t||void 0===t?void 0:t.ignoreWhiteSymbols)||(p=(0,i.Z)((0,i.Z)({width:.75},p),{},{color:"#bdc3c7"}));var f={shape:null,fill:h,stroke:p,offset:[0,0]};(null===(n=p)||void 0===n?void 0:n.width)&&(p.width=Math.min(p.width,M));var z=(null===(a=p)||void 0===a?void 0:a.width)||0,F=null!=(null===t||void 0===t?void 0:t.size)&&(null==(null===t||void 0===t?void 0:t.scale)||(null===t||void 0===t?void 0:t.scale)),S=0,_=0,q=!1;switch(e.type){case g:var D=e.style,O=E(t),T=O.width,B=T===O.height&&null!=T?T:null!=l?l:Math.min((0,s.F2)(e.size),o||Z);switch(S=B,_=B,D){case"circle":f.shape={type:"circle",cx:0,cy:0,r:.5*B},F||(S+=z,_+=z);break;case"cross":f.shape={type:"path",path:[{command:"M",values:[0,.5*_]},{command:"L",values:[S,.5*_]},{command:"M",values:[.5*S,0]},{command:"L",values:[.5*S,_]}]};break;case"diamond":f.shape={type:"path",path:[{command:"M",values:[0,.5*_]},{command:"L",values:[.5*S,0]},{command:"L",values:[S,.5*_]},{command:"L",values:[.5*S,_]},{command:"Z",values:[]}]},F||(S+=z,_+=z);break;case"square":f.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[S,0]},{command:"L",values:[S,_]},{command:"L",values:[0,_]},{command:"Z",values:[]}]},F||(S+=z,_+=z),u&&(q=!0);break;case"triangle":f.shape={type:"path",path:[{command:"M",values:[.5*S,0]},{command:"L",values:[S,_]},{command:"L",values:[0,_]},{command:"Z",values:[]}]},F||(S+=z,_+=z),u&&(q=!0);break;case"x":f.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[S,_]},{command:"M",values:[S,0]},{command:"L",values:[0,_]}]},u&&(q=!0);break;case"path":f.shape={type:"path",path:e.path||""},F||(S+=z,_+=z),u&&(q=!0),F=!0}break;case y:var P,W=E(t),A=W.width,R=W.height,X=null!=R?R:null!=l?l:z,H=null!=A?A:L;p&&(p.width=X),S=H,_=X;var J=(null===f||void 0===f||null===(P=f.stroke)||void 0===P?void 0:P.cap)||"butt",N="round"===J;F=!0,f.stroke&&(f.stroke.cap="butt"===J?"square":J),f.shape={type:"path",path:[{command:"M",values:[N?X/2:0,_/2]},{command:"L",values:[N?S-X/2:S,_/2]}]};break;case m:case w:var U,Y="object"==typeof(null===t||void 0===t?void 0:t.symbolConfig)&&!(null===t||void 0===t||null===(U=t.symbolConfig)||void 0===U||!U.isSquareFill),G=E(t),I=G.width,K=G.height;S=!Y&&I!==K||null==I?null!=l?l:x:I,_=!Y&&I!==K||null==K?S:K,F||(S+=z,_+=z),F=!0,f.shape=Y?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[S,0]},{command:"L",values:[S,_]},{command:"L",values:[0,_]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:d.JZ.fill[0];break;case v:var Q=Math.min((0,s.F2)(e.width),o||Z),$=Math.min((0,s.F2)(e.height),o||Z),ee=E(t),te=ee.width,ne=te===ee.height&&null!=te?te:null!=l?l:Math.max(Q,$),ae=Q/$;S=ae<=1?Math.ceil(ne*ae):ne,_=ae<=1?ne:Math.ceil(ne/ae),f.shape={type:"image",x:-Math.round(S/2),y:-Math.round(_/2),width:S,height:_,src:e.url||""},u&&(q=!0);break;case b:var ie=e,re=(null===t||void 0===t?void 0:t.overrideText)||ie.text||k,le=ie.font,oe=E(t),ue=oe.width,se=oe.height,ce=null!=se?se:null!=l?l:Math.min((0,s.F2)(le.size),o||Z),de=C(re,{weight:le.weight,size:ce,family:le.family}),he=/[\uE600-\uE6FF]/.test(re);S=null!==ue&&void 0!==ue?ue:he?ce:de,_=ce;var pe=.25*j((le?ce:0).toString());he&&(pe+=5),f.shape={type:"text",text:re,x:ie.xoffset||0,y:ie.yoffset||pe,align:"middle",alignBaseline:ie.verticalAlignment,decoration:le&&le.decoration,rotated:ie.rotated,kerning:ie.kerning},f.font=le&&{size:ce,style:le.style,decoration:le.decoration,weight:le.weight,family:le.family}}return{shapeDescriptor:f,size:[S,_],renderOptions:{node:null===t||void 0===t?void 0:t.node,scale:F,opacity:null===t||void 0===t?void 0:t.opacity,rotation:u,useRotationSize:q,effectView:null===t||void 0===t?void 0:t.effectView,ariaLabel:null===t||void 0===t?void 0:t.ariaLabel}}}function A(e,t){return R.apply(this,arguments)}function R(){return(R=(0,r.Z)((0,a.Z)().mark((function e(t,n){var r,l,u,s,c,p,f;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=W(t,n),u=l.shapeDescriptor,s=l.size,c=l.renderOptions,u.shape){e.next=3;break}throw new o.Z("symbolPreview: renderPreviewHTML2D","symbol not supported.");case 3:return e.next=5,q(t,u);case 5:return e.next=7,O(t,u,s,n);case 7:return p=[[u]],"object"==typeof(null===n||void 0===n?void 0:n.symbolConfig)&&null!==n&&void 0!==n&&null!==(r=n.symbolConfig)&&void 0!==r&&r.applyColorModulation&&(f=.6*s[0],p.unshift([(0,i.Z)((0,i.Z)({},u),{},{offset:[-f,0],fill:(0,d.dc)(u.fill,-.3)})]),p.push([(0,i.Z)((0,i.Z)({},u),{},{offset:[f,0],fill:(0,d.dc)(u.fill,.3)})]),s[0]+=2*f,c.scale=!1),e.abrupt("return",("text"===t.type&&B(t,u,p,s,c),(0,h.wh)(p,s,c)));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:z,n=(0,c._M)(e),a=(0,c.mx)(e),i=!n||"type"in n?null:new l.Z(n),r=null!==a&&void 0!==a&&a.color?new l.Z(null===a||void 0===a?void 0:a.color):null,o=i?P((0,f.EX)(i),t):null,u=r?P((0,f.EX)(r),t):null;return u?o?o===u?o:t>=z?"light":"dark":u:o}}}]);
//# sourceMappingURL=8103.4c7c8165.chunk.js.map