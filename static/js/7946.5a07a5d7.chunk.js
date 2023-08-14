"use strict";(self.webpackChunkgis_dashboard=self.webpackChunkgis_dashboard||[]).push([[7946,1340],{91340:function(e,t,n){n.d(t,{aX:function(){return N},or:function(){return F}});var r=n(74165),a=n(29439),u=n(15861),i=n(37762),s=n(42265),o=n(10064),c=n(32718),l=n(80885),f=n(29909),p=n(76335),y=n(92975),d=n(81753),h=n(1413),m=(n(59486),n(76200)),x=n(77981),v=n(23084);function Z(e,t,n,r){return g.apply(this,arguments)}function g(){return g=(0,u.Z)((0,r.Z)().mark((function e(t,n,a,u){var i,s,o,c,l,f,p,y;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,v.en)(t),s=n[0].spatialReference,o=(0,h.Z)((0,h.Z)({},u),{},{query:(0,h.Z)((0,h.Z)({},i.query),{},{f:"json",sr:JSON.stringify(s),target:JSON.stringify({geometryType:(0,x.Ji)(n[0]),geometries:n}),cutter:JSON.stringify(a)})}),e.next=5,(0,m.default)(i.path+"/cut",o);case 5:return c=e.sent,l=c.data,f=l.cutIndexes,p=l.geometries,y=void 0===p?[]:p,e.abrupt("return",{cutIndexes:f,geometries:y.map((function(e){var t=(0,x.im)(e);return t.spatialReference=s,t}))});case 11:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}var S=n(35995),b=n(35594);function w(e,t,n){return R.apply(this,arguments)}function R(){return R=(0,u.Z)((0,r.Z)().mark((function e(t,n,a){var u,i,s,o,c,l,f;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="string"==typeof t?(0,S.mN)(t):t,s=n[0].spatialReference,o=(0,x.Ji)(n[0]),c=(0,h.Z)((0,h.Z)({},a),{},{query:(0,h.Z)((0,h.Z)({},i.query),{},{f:"json",sr:null!==(u=s.wkid)&&void 0!==u?u:JSON.stringify(s),geometries:JSON.stringify((0,b.F)(n))})}),e.next=6,(0,m.default)(i.path+"/simplify",c);case 6:return l=e.sent,f=l.data,e.abrupt("return",(0,b.o)(f.geometries,o,s));case 9:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}var O=c.Z.getLogger("esri.geometry.support.normalizeUtils");function E(e,t,n){if(t){var r=function(e,t){if(!(e instanceof f.Z||e instanceof l.Z)){var n="straightLineDensify: the input geometry is neither polyline nor polygon";throw O.error(n),new o.Z(n)}var r,a=(0,p.x3)(e),u=[],s=(0,i.Z)(a);try{for(s.s();!(r=s.n()).done;){var c=r.value,y=[];u.push(y),y.push([c[0][0],c[0][1]]);for(var d=0;d<c.length-1;d++){var h=c[d][0],m=c[d][1],x=c[d+1][0],v=c[d+1][1],Z=Math.sqrt((x-h)*(x-h)+(v-m)*(v-m)),g=(v-m)/Z,S=(x-h)/Z,b=Z/t;if(b>1){for(var w=1;w<=b-1;w++){var R=w*t,E=S*R+h,k=g*R+m;y.push([E,k])}var J=(Z+Math.floor(b-1)*t)/2,N=S*J+h,q=g*J+m;y.push([N,q])}y.push([x,v])}}}catch(F){s.e(F)}finally{s.f()}return function(e){return"polygon"===e.type}(e)?new l.Z({rings:u,spatialReference:e.spatialReference}):new f.Z({paths:u,spatialReference:e.spatialReference})}(e,1e6);e=(0,d.Sx)(r,!0)}return n&&(e=(0,p.Sy)(e,n)),e}function k(e,t,n){if(Array.isArray(e)){var r=e[0];if(r>t){var a=(0,p.XZ)(r,t);e[0]=r+a*(-2*t)}else if(r<n){var u=(0,p.XZ)(r,n);e[0]=r+u*(-2*n)}}else{var i=e.x;if(i>t){var s=(0,p.XZ)(i,t);e=e.clone().offset(s*(-2*t),0)}else if(i<n){var o=(0,p.XZ)(i,n);e=e.clone().offset(o*(-2*n),0)}}return e}function J(e,t){for(var n=-1,r=function(){for(var r=t.cutIndexes[a],u=t.geometries[a],s=(0,p.x3)(u),o=function(e){var t=s[e];t.some((function(n){if(n[0]<180)return!0;for(var r=0,a=0;a<t.length;a++){var i=t[a][0];r=i>r?i:r}r=Number(r.toFixed(9));for(var s=-360*(0,p.XZ)(r,180),o=0;o<t.length;o++){var c=u.getPoint(e,o);u.setPoint(e,o,c.clone().offset(s,0))}return!0}))},c=0;c<s.length;c++)o(c);if(r===n){if(function(e){return"polygon"===e[0].type}(e)){var l,f=(0,i.Z)((0,p.x3)(u));try{for(f.s();!(l=f.n()).done;){var y=l.value;e[r]=e[r].addRing(y)}}catch(x){f.e(x)}finally{f.f()}}else if(function(e){return"polyline"===e[0].type}(e)){var d,h=(0,i.Z)((0,p.x3)(u));try{for(h.s();!(d=h.n()).done;){var m=d.value;e[r]=e[r].addPath(m)}}catch(x){h.e(x)}finally{h.f()}}}else n=r,e[r]=u},a=0;a<t.cutIndexes.length;a++)r();return e}function N(e,t,n){return q.apply(this,arguments)}function q(){return q=(0,u.Z)((0,r.Z)().mark((function e(t,n,a){var u,o,c,h,m,x,v,g,S,b,R,q,F,j,X,P,z,C,I,L,T,A,U,V,G,M,B,D,W,_,$,H,K,Q,Y,ee,te,ne,re,ae,ue;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Array.isArray(t)){e.next=2;break}return e.abrupt("return",N([t],n));case 2:n&&"string"!=typeof n&&O.warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead"),o="string"==typeof n?n:null!==(u=null===n||void 0===n?void 0:n.url)&&void 0!==u?u:s.Z.geometryServiceUrl,R=0,q=[],F=[],j=(0,i.Z)(t);try{for(j.s();!(X=j.n()).done;)null!=(P=X.value)?(c||(c=P.spatialReference,h=(0,y.C5)(c),m=c.isWebMercator,g=m?102100:4326,x=p.UZ[g].maxX,v=p.UZ[g].minX,S=p.UZ[g].plus180Line,b=p.UZ[g].minus180Line),h?"mesh"===P.type?F.push(P):"point"===P.type?F.push(k(P.clone(),x,v)):"multipoint"===P.type?((z=P.clone()).points=z.points.map((function(e){return k(e,x,v)})),F.push(z)):"extent"===P.type?(C=P.clone()._normalize(!1,!1,h),F.push(C.rings?new l.Z(C):C)):P.extent?(I=P.extent,L=(0,p.XZ)(I.xmin,v)*(2*x),T=0===L?P.clone():(0,p.Sy)(P.clone(),L),I.offset(L,0),I.intersects(S)&&I.xmax!==x?(R=I.xmax>R?I.xmax:R,T=E(T,m),q.push(T),F.push("cut")):I.intersects(b)&&I.xmin!==v?(R=I.xmax*(2*x)>R?I.xmax*(2*x):R,T=E(T,m,360),q.push(T),F.push("cut")):F.push(T)):F.push(P.clone()):F.push(P)):F.push(P)}catch(r){j.e(r)}finally{j.f()}for(A=(0,p.XZ)(R,x),U=-90,V=A,G=new f.Z;A>0;)M=360*A-180,G.addPath([[M,U],[M,-1*U]]),U*=-1,A--;if(!(q.length>0&&V>0)){e.next=29;break}return e.t0=J,e.t1=q,e.next=16,Z(o,q,G,a);case 16:for(e.t2=e.sent,B=(0,e.t0)(e.t1,e.t2),D=[],W=[],_=0;_<F.length;_++)"cut"!==($=F[_])?W.push($):(H=B.shift(),null!=(K=t[_])&&"polygon"===K.type&&K.rings&&K.rings.length>1&&H.rings.length>=K.rings.length?(D.push(H),W.push("simplify")):W.push(m?(0,d.$)(H):H));if(D.length){e.next=23;break}return e.abrupt("return",W);case 23:return e.next=25,w(o,D,a);case 25:for(Q=e.sent,Y=[],ee=0;ee<W.length;ee++)"simplify"!==(te=W[ee])?Y.push(te):Y.push(m?(0,d.$)(Q.shift()):Q.shift());return e.abrupt("return",Y);case 29:for(ne=[],re=0;re<F.length;re++)"cut"!==(ae=F[re])?ne.push(ae):(ue=q.shift(),ne.push(!0===m?(0,d.$)(ue):ue));return e.abrupt("return",ne);case 32:case"end":return e.stop()}}),e)}))),q.apply(this,arguments)}function F(e,t){var n=(0,y.C5)(t);if(n){var r=(0,a.Z)(n.valid,2),u=r[0],i=r[1],s=i-u;if(e<u)for(;e<u;)e+=s;if(e>i)for(;e>i;)e-=s}return e}},76335:function(e,t,n){n.d(t,{Sy:function(){return c},UZ:function(){return s},XZ:function(){return o},x3:function(){return l}});var r=n(37762),a=n(29909),u=n(78952),i=n(77981),s={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new a.Z({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:u.Z.WebMercator}),minus180Line:new a.Z({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:u.Z.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new a.Z({paths:[[[180,-180],[180,180]]],spatialReference:u.Z.WGS84}),minus180Line:new a.Z({paths:[[[-180,-180],[-180,180]]],spatialReference:u.Z.WGS84})}};function o(e,t){return Math.ceil((e-t)/(2*t))}function c(e,t){var n,a=l(e),u=(0,r.Z)(a);try{for(u.s();!(n=u.n()).done;){var i,s=n.value,o=(0,r.Z)(s);try{for(o.s();!(i=o.n()).done;){i.value[0]+=t}}catch(c){o.e(c)}finally{o.f()}}}catch(c){u.e(c)}finally{u.f()}return e}function l(e){return(0,i.oU)(e)?e.rings:e.paths}},22585:function(e,t,n){function r(e){var t={};for(var n in e)if("declaredClass"!==n){var a=e[n];if(null!=a&&"function"!=typeof a)if(Array.isArray(a)){t[n]=[];for(var u=0;u<a.length;u++)t[n][u]=r(a[u])}else"object"==typeof a?a.toJSON&&(t[n]=JSON.stringify(a)):t[n]=a}return t}n.d(t,{A:function(){return r}})},77946:function(e,t,n){n.d(t,{F:function(){return p},e:function(){return l}});var r=n(1413),a=n(74165),u=n(15861),i=n(23084),s=n(5192),o=n(49818),c=n(21149);function l(e,t,n){return f.apply(this,arguments)}function f(){return f=(0,u.Z)((0,a.Z)().mark((function e(t,n,r){var u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,n,r);case 2:return u=e.sent,e.abrupt("return",o.Z.fromJSON(u));case 4:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function p(e,t,n){return y.apply(this,arguments)}function y(){return y=(0,u.Z)((0,a.Z)().mark((function e(t,n,u){var o,l,f,p,y;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=(0,i.en)(t),l=(0,r.Z)({},u),f=c.Z.from(n),e.next=5,(0,s.JT)(o,f,f.sourceSpatialReference,l);case 5:return p=e.sent,y=p.data,e.abrupt("return",y);case 8:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}},5192:function(e,t,n){n.d(t,{Ev:function(){return g},JT:function(){return h},Vr:function(){return b},hH:function(){return S},n7:function(){return Z},qp:function(){return x}});var r=n(1413),a=n(74165),u=n(15861),i=n(76200),s=n(35995),o=n(77981),c=n(91340),l=n(22585),f=n(27607),p=n(68620),y="Layer does not support extent calculation.";function d(e,t){var n=e.geometry,r=e.toJSON();delete r.compactGeometryEnabled,delete r.defaultSpatialReferenceEnabled;var a,u,i,s=r;if(null!=n&&(u=n.spatialReference,i=n.spatialReference.wkid||JSON.stringify(n.spatialReference),s.geometryType=(0,o.Ji)(n),s.geometry=function(e,t){if(t&&"extent"===e.type)return"".concat(e.xmin,",").concat(e.ymin,",").concat(e.xmax,",").concat(e.ymax);if(t&&"point"===e.type)return"".concat(e.x,",").concat(e.y);var n=e.toJSON();return delete n.spatialReference,JSON.stringify(n)}(n,e.compactGeometryEnabled),s.inSR=i),r.groupByFieldsForStatistics&&(s.groupByFieldsForStatistics=r.groupByFieldsForStatistics.join(",")),r.objectIds&&(s.objectIds=r.objectIds.join(",")),r.orderByFields&&(s.orderByFields=r.orderByFields.join(",")),!r.outFields||!r.returnDistinctValues&&(null!==t&&void 0!==t&&t.returnCountOnly||null!==t&&void 0!==t&&t.returnExtentOnly||null!==t&&void 0!==t&&t.returnIdsOnly)?delete s.outFields:r.outFields.includes("*")?s.outFields="*":s.outFields=r.outFields.join(","),r.outSR?(s.outSR=r.outSR.wkid||JSON.stringify(r.outSR),a=e.outSpatialReference):n&&(r.returnGeometry||r.returnCentroid)&&(s.outSR=s.inSR,a=u),r.returnGeometry&&delete r.returnGeometry,r.outStatistics&&(s.outStatistics=JSON.stringify(r.outStatistics)),r.fullText&&(s.fullText=JSON.stringify(r.fullText)),r.pixelSize&&(s.pixelSize=JSON.stringify(r.pixelSize)),r.quantizationParameters&&(e.defaultSpatialReferenceEnabled&&null!=u&&null!=e.quantizationParameters&&null!=e.quantizationParameters.extent&&u.equals(e.quantizationParameters.extent.spatialReference)&&delete r.quantizationParameters.extent.spatialReference,s.quantizationParameters=JSON.stringify(r.quantizationParameters)),r.parameterValues&&(s.parameterValues=JSON.stringify(r.parameterValues)),r.rangeValues&&(s.rangeValues=JSON.stringify(r.rangeValues)),r.dynamicDataSource&&(s.layer=JSON.stringify({source:r.dynamicDataSource}),delete r.dynamicDataSource),r.timeExtent){var c=r.timeExtent,l=c.start,f=c.end;null==l&&null==f||(s.time=l===f?l:"".concat(null!==l&&void 0!==l?l:"null",",").concat(null!==f&&void 0!==f?f:"null")),delete r.timeExtent}return e.defaultSpatialReferenceEnabled&&null!=u&&null!=a&&u.equals(a)&&(s.defaultSR=s.inSR,delete s.inSR,delete s.outSR),s}function h(e,t,n,r){return m.apply(this,arguments)}function m(){return(m=(0,u.Z)((0,a.Z)().mark((function e(t,n,r,u){var i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==n.timeExtent||!n.timeExtent.isEmpty){e.next=4;break}e.t0={data:{features:[]}},e.next=7;break;case 4:return e.next=6,R(t,n,"json",u);case 6:e.t0=e.sent;case 7:return i=e.t0,e.abrupt("return",((0,p.p)(n,r,i.data),i));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t,n,r){return v.apply(this,arguments)}function v(){return(v=(0,u.Z)((0,a.Z)().mark((function e(t,n,r,u){var i,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==n.timeExtent||!n.timeExtent.isEmpty){e.next=2;break}return e.abrupt("return",{data:r.createFeatureResult()});case 2:return e.next=4,Z(t,n,u);case 4:return i=e.sent,s=i,e.abrupt("return",(s.data=(0,f.C)(i.data,r),s));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,t,n){return R(e,t,"pbf",n)}function g(e,t,n){return null!=t.timeExtent&&t.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):R(e,t,"json",n,{returnIdsOnly:!0})}function S(e,t,n){return null!=t.timeExtent&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):R(e,t,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function b(e,t,n){return w.apply(this,arguments)}function w(){return(w=(0,u.Z)((0,a.Z)().mark((function e(t,n,r){var u,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==n.timeExtent||!n.timeExtent.isEmpty){e.next=2;break}return e.abrupt("return",{data:{count:0,extent:null}});case 2:return e.next=4,R(t,n,"json",r,{returnExtentOnly:!0,returnCountOnly:!0});case 4:if(u=e.sent,!(i=u.data).hasOwnProperty("extent")){e.next=8;break}return e.abrupt("return",u);case 8:if(!i.features){e.next=10;break}throw new Error(y);case 10:if(!i.hasOwnProperty("count")){e.next=12;break}throw new Error(y);case 12:return e.abrupt("return",u);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e,t,n){return O.apply(this,arguments)}function O(){return O=(0,u.Z)((0,a.Z)().mark((function e(t,n,u){var o,f,p,y,h,m,x,v=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=v.length>3&&void 0!==v[3]?v[3]:{},f=v.length>4&&void 0!==v[4]?v[4]:{},p="string"==typeof t?(0,s.mN)(t):t,y=n.geometry?[n.geometry]:[],o.responseType="pbf"===u?"array-buffer":"json",e.next=6,(0,c.aX)(y,null,o);case 6:return h=e.sent,null!=(m=h&&h[0])&&((n=n.clone()).geometry=m),x=(0,l.A)((0,r.Z)((0,r.Z)((0,r.Z)({},p.query),{},{f:u},f),d(n,f))),e.abrupt("return",(0,i.default)((0,s.v_)(p.path,(a=f,null==n.formatOf3DObjects||a.returnCountOnly||a.returnExtentOnly||a.returnIdsOnly?"query":"query3d")),(0,r.Z)((0,r.Z)({},o),{},{query:(0,r.Z)((0,r.Z)({},x),o.query)})));case 11:case"end":return e.stop()}var a}),e)}))),O.apply(this,arguments)}}}]);
//# sourceMappingURL=7946.5a07a5d7.chunk.js.map