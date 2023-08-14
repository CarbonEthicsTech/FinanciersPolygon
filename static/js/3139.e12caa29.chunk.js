"use strict";(self.webpackChunkgis_dashboard=self.webpackChunkgis_dashboard||[]).push([[3139],{32698:function(e,r,t){t.d(r,{Y:function(){return s},h:function(){return u}});var n=t(35995),a=t(7575);function u(e){return{origin:"portal-item",url:(0,n.mN)(e.itemUrl),portal:e.portal||a.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function s(e){return{origin:"portal-item",messages:[],writtenProperties:[],url:e.itemUrl?(0,n.mN)(e.itemUrl):null,portal:e.portal||a.Z.getDefault(),portalItem:e}}},33388:function(e,r,t){t.r(r),t.d(r,{getFirstLayerOrTableId:function(){return A},getNumLayersAndTables:function(){return D},getSubtypeGroupLayerIds:function(){return _},load:function(){return m},preprocessFSItemData:function(){return E}});var n=t(93433),a=t(29439),u=t(74165),s=t(15861),i=t(10064),c=t(30651),o=t(25899),l=t(74368),p=t(7575),f=t(98995),y=t(32698),d=t(73117),v=t(21371),b=t(41226);function m(e,r){return h.apply(this,arguments)}function h(){return(h=(0,s.Z)((0,u.Z)().mark((function e(r,t){var n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=r.instance.portalItem)||!n.id){e.next=6;break}return e.next=4,n.load(t);case 4:return x(r),e.abrupt("return",Z(r,t));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){var r=e.instance.portalItem;if(null===r||void 0===r||!r.type||!e.supportedTypes.includes(r.type))throw new i.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:null===r||void 0===r?void 0:r.type,expectedType:e.supportedTypes.join(", ")})}function Z(e,r){return w.apply(this,arguments)}function w(){return(w=(0,s.Z)((0,u.Z)().mark((function e(r,t){var n,a,s,i,c,o,l;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.instance,s=a.portalItem){e.next=3;break}return e.abrupt("return");case 3:if(i=s.url,c=s.title,o=(0,y.h)(s),"group"!==a.type){e.next=6;break}return e.abrupt("return",(a.read({title:c},o),k(a,r)));case 6:return i&&a.read({url:i},o),e.next=9,F(r,t);case 9:return l=e.sent,e.abrupt("return",(l&&a.read(l,o),a.resourceReferences={portalItem:s,paths:null!==(n=o.readResourcePaths)&&void 0!==n?n:[]},"subtype-group"!==a.type&&a.read({title:c},o),(0,v.y)(a,o)));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,r){return g.apply(this,arguments)}function g(){return g=(0,s.Z)((0,u.Z)().mark((function e(r,t){var n,s,c,o,l,p,f,y,v,b,m,h,x;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=r.portalItem){e.next=3;break}return e.abrupt("return");case 3:o=c.type,l=t.layerModuleTypeMap,p=null!==(n=(0,d._$)(c,"Oriented Imagery Layer"))&&void 0!==n&&n,e.t0=o,e.next="Feature Service"===e.t0?7:"Stream Service"===e.t0?9:"Scene Service"===e.t0?11:"Feature Collection"===e.t0?13:15;break;case 7:return s=p?l.OrientedImageryLayer:l.FeatureLayer,e.abrupt("break",16);case 9:return s=l.StreamLayer,e.abrupt("break",16);case 11:return s=l.SceneLayer,e.abrupt("break",16);case 13:return s=l.FeatureLayer,e.abrupt("break",16);case 15:throw new i.Z("portal:unsupported-item-type-as-group","The item type '".concat(o,"' is not supported as a 'IGroupLayer'"));case 16:return e.next=18,Promise.all([s(),F(t)]);case 18:if(f=e.sent,y=(0,a.Z)(f,2),v=y[0],b=y[1],m=function(){return v},"Feature Service"!==o){e.next=46;break}if(!c.url){e.next=30;break}return e.next=27,E(b,c.url);case 27:e.t1=e.sent,e.next=31;break;case 30:e.t1={};case 31:if(!_(b=e.t1).length){e.next=38;break}return h=l.SubtypeGroupLayer,e.next=36,h();case 36:x=e.sent,m=function(e){return"SubtypeGroupLayer"===e.layerType?x:v};case 38:return e.t2=T,e.t3=r,e.t4=m,e.t5=b,e.next=44,P(c.url);case 44:return e.t6=e.sent,e.abrupt("return",(0,e.t2)(e.t3,e.t4,e.t5,e.t6));case 46:return e.abrupt("return",D(b)>0?T(r,m,b):L(r,m));case 47:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function L(e,r){return I.apply(this,arguments)}function I(){return(I=(0,s.Z)((0,u.Z)().mark((function e(r,t){var n,a,s,i;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(s=r.portalItem)&&void 0!==s&&s.url){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,(0,b.T)(s.url);case 5:(i=e.sent)&&T(r,t,{layers:null===(n=i.layers)||void 0===n?void 0:n.map(S),tables:null===(a=i.tables)||void 0===a?void 0:a.map(S)});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return{id:e.id,name:e.name}}function T(e,r,t,n){var a,u=t.layers||[],s=t.tables||[];if("Feature Collection"===(null===(a=e.portalItem)||void 0===a?void 0:a.type)&&(u.forEach((function(e){var r;"Table"===(null===e||void 0===e||null===(r=e.layerDefinition)||void 0===r?void 0:r.type)&&s.push(e)})),u=u.filter((function(e){var r;return"Table"!==(null===e||void 0===e||null===(r=e.layerDefinition)||void 0===r?void 0:r.type)}))),"coverage"in t){var l=function(e){var r=e.coverage;if(!r)return null;var t=new URL(r);if(r.toLowerCase().includes("item.html")){var n=t.searchParams.get("id"),a=t.origin;return c.Z.fromPortalItem({portalItem:new f.default({id:n,url:a})})}if((0,o.B5)(r))return c.Z.fromArcGISServerUrl({url:r});throw new i.Z("portal:oriented-imagery-layer-coverage","the provided coverage url couldn't be loaded as a layer")}(t);l&&e.add(l)}u.reverse().forEach((function(a){var u=null===n||void 0===n?void 0:n(a);if(u||!n){var s=N(e,r(a),t,a,u);e.add(s)}})),s.reverse().forEach((function(a){var u=null===n||void 0===n?void 0:n(a);if(u||!n){var s=N(e,r(a),t,a,u);e.tables.add(s)}}))}function N(e,r,t,n,a){var u=e.portalItem,s=new r({portalItem:u.clone(),layerId:n.id});if("sourceJSON"in s&&(s.sourceJSON=a),"subtype-group"!==s.type&&(s.sublayerTitleMode="service-name"),"Feature Collection"===u.type){var i={origin:"portal-item",portal:u.portal||p.Z.getDefault()};s.read(n,i);var c=t.showLegend;null!=c&&s.read({showLegend:c},i)}return s}function F(e,r){return M.apply(this,arguments)}function M(){return(M=(0,s.Z)((0,u.Z)().mark((function e(r,t){var n,a,s,i,c,o;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==r.supportsData){e.next=2;break}return e.abrupt("return");case 2:if(n=r.instance,a=n.portalItem){e.next=5;break}return e.abrupt("return");case 5:return s=null,e.prev=6,e.next=9,a.fetchData("json",t);case 9:s=e.sent,e.next=14;break;case 12:e.prev=12,e.t0=e.catch(6);case 14:if(!C(n)){e.next=18;break}return i=null,c=!0,s&&D(s)>0&&(null==n.layerId&&(o=_(s),n.layerId="subtype-group"===n.type?null===o||void 0===o?void 0:o[0]:A(s)),(i=O(s,n))&&(1===D(s)&&(c=!1),null!=s.showLegend&&(i.showLegend=s.showLegend))),e.abrupt("return",(c&&"sublayerTitleMode"in n&&"service-name"!==n.sublayerTitleMode&&(n.sublayerTitleMode="item-title-and-service-name"),i));case 18:return e.abrupt("return",s);case 19:case"end":return e.stop()}}),e,null,[[6,12]])})))).apply(this,arguments)}function E(e,r){return G.apply(this,arguments)}function G(){return(G=(0,s.Z)((0,u.Z)().mark((function e(r,t){var n,a,s;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(null===(n=r)||void 0===n?void 0:n.layers)&&null!=(null===(a=r)||void 0===a?void 0:a.tables)){e.next=5;break}return e.next=3,(0,b.T)(t);case 3:s=e.sent,(r=r||{}).layers=r.layers||(null===s||void 0===s?void 0:s.layers),r.tables=r.tables||(null===s||void 0===s?void 0:s.tables);case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){var r=e.layers;if(r&&r.length)return r[0].id;var t=e.tables;return t&&t.length?t[0].id:null}function O(e,r){var t,n,a=r.layerId,u=(null===(t=e.layers)||void 0===t?void 0:t.find((function(e){return e.id===a})))||(null===(n=e.tables)||void 0===n?void 0:n.find((function(e){return e.id===a})));return u&&function(e,r){return!("feature"===r.type&&"layerType"in e&&"SubtypeGroupLayer"===e.layerType||"subtype-group"===r.type&&!("layerType"in e))}(u,r)?u:null}function D(e){var r,t,n,a;return(null!==(r=null===e||void 0===e||null===(t=e.layers)||void 0===t?void 0:t.length)&&void 0!==r?r:0)+(null!==(n=null===e||void 0===e||null===(a=e.tables)||void 0===a?void 0:a.length)&&void 0!==n?n:0)}function C(e){return"stream"!==e.type&&"oriented-imagery"!==e.type&&"layerId"in e}function _(e){var r,t=[];return null!==e&&void 0!==e&&null!==(r=e.layers)&&void 0!==r&&r.forEach((function(e){"SubtypeGroupLayer"===e.layerType&&t.push(e.id)})),t}function P(e){return R.apply(this,arguments)}function R(){return(R=(0,s.Z)((0,u.Z)().mark((function e(r){var t,a,s;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.V)(r);case 2:if(t=e.sent,a=t.layersJSON){e.next=6;break}return e.abrupt("return",null);case 6:return s=[].concat((0,n.Z)(a.layers),(0,n.Z)(a.tables)),e.abrupt("return",(function(e){return s.find((function(r){return r.id===e.id}))}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},73117:function(e,r,t){t.d(r,{$o:function(){return v},Fj:function(){return y},Kz:function(){return m},Ss:function(){return h},_$:function(){return f},ck:function(){return d},qj:function(){return p}});var n=t(37762),a=t(74165),u=t(15861),s=t(79803),i=t(78952),c=t(81753);function o(e){return l.apply(this,arguments)}function l(){return l=(0,u.Z)((0,a.Z)().mark((function e(r){var t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=r.spatialReference).isWGS84){e.next=3;break}return e.abrupt("return",r.clone());case 3:if(!t.isWebMercator){e.next=5;break}return e.abrupt("return",(0,c.Sx)(r));case 5:return n=i.Z.WGS84,e.next=8,(0,s.initializeProjection)(t,n);case 8:return e.abrupt("return",(0,s.project)(r,n));case 9:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function p(e,r){if(!f(e,r)){var t=e.typeKeywords;t?t.push(r):e.typeKeywords=[r]}}function f(e,r){var t;return!(null===(t=e.typeKeywords)||void 0===t||!t.includes(r))}function y(e){return f(e,m.HOSTED_SERVICE)}function d(e,r){var t=e.typeKeywords;if(t){var n=t.indexOf(r);n>-1&&t.splice(n,1)}}function v(e){return b.apply(this,arguments)}function b(){return(b=(0,u.Z)((0,a.Z)().mark((function e(r){var t,u,s,i,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=r.clone().normalize()).length>1){s=(0,n.Z)(t);try{for(s.s();!(i=s.n()).done;)c=i.value,u?c.width>u.width&&(u=c):u=c}catch(a){s.e(a)}finally{s.f()}}else u=t[0];return e.abrupt("return",o(u));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table",HOSTED_SERVICE:"Hosted Service"};function h(e){var r,t=e.portal,n=e.isOrgItem,a=e.itemControl,u=null===(r=t.user)||void 0===r?void 0:r.privileges,s=!u||u.includes("features:user:edit"),i=!!n&&!(null===u||void 0===u||!u.includes("features:user:fullEdit")),c="update"===a||"admin"===a;return c?i=s=!0:i&&(s=!0),{features:{edit:s,fullEdit:i},content:{updateItem:c}}}},43139:function(e,r,t){t.r(r),t.d(r,{fromItem:function(){return y},selectLayerClassPath:function(){return m}});var n=t(74165),a=t(1413),u=t(15861),s=t(10064),i=t(37933),c=t(19610),o=t(98995),l=t(33388),p=t(73117),f=t(41226);function y(e){return d.apply(this,arguments)}function d(){return(d=(0,u.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return!r.portalItem||r.portalItem instanceof o.default||(r=(0,a.Z)((0,a.Z)({},r),{},{portalItem:new o.default(r.portalItem)})),e.next=3,v(r.portalItem);case 3:return t=e.sent,e.abrupt("return",new(0,t.constructor)((0,a.Z)({portalItem:r.portalItem},t.properties)));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return b.apply(this,arguments)}function b(){return(b=(0,u.Z)((0,n.Z)().mark((function e(r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:return e.t0=x,e.next=5,m(r);case 5:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return h.apply(this,arguments)}function h(){return(h=(0,u.Z)((0,n.Z)().mark((function e(r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.type,e.next="Map Service"===e.t0?3:"Feature Service"===e.t0?4:"Feature Collection"===e.t0?5:"Scene Service"===e.t0?6:"Image Service"===e.t0?7:"Stream Service"===e.t0?8:"Vector Tile Service"===e.t0?9:"GeoJson"===e.t0?10:"CSV"===e.t0?11:"KML"===e.t0?12:"WFS"===e.t0?13:"WMTS"===e.t0?14:"WMS"===e.t0?15:"Feed"===e.t0?16:17;break;case 3:return e.abrupt("return",w(r));case 4:return e.abrupt("return",g(r));case 5:return e.abrupt("return",T(r));case 6:return e.abrupt("return",I(r));case 7:return e.abrupt("return",F(r));case 8:case 16:return e.abrupt("return",{className:"StreamLayer"});case 9:return e.abrupt("return",{className:"VectorTileLayer"});case 10:return e.abrupt("return",{className:"GeoJSONLayer"});case 11:return e.abrupt("return",{className:"CSVLayer"});case 12:return e.abrupt("return",{className:"KMLLayer"});case 13:return e.abrupt("return",{className:"WFSLayer"});case 14:return e.abrupt("return",{className:"WMTSLayer"});case 15:return e.abrupt("return",{className:"WMSLayer"});case 17:throw new s.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:r.type});case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return Z.apply(this,arguments)}function Z(){return(Z=(0,u.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.className,a=c.T[t],e.next=3,a();case 3:return e.t0=e.sent,e.t1=r.properties,e.abrupt("return",{constructor:e.t0,properties:e.t1});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return k.apply(this,arguments)}function k(){return(k=(0,u.Z)((0,n.Z)().mark((function e(r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(r);case 2:if(!e.sent){e.next=6;break}e.t0={className:"TileLayer"},e.next=7;break;case 6:e.t0={className:"MapImageLayer"};case 7:return e.abrupt("return",e.t0);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return L.apply(this,arguments)}function L(){return(L=(0,u.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,p._$)(r,"Oriented Imagery Layer")){e.next=2;break}return e.abrupt("return",E(r));case 2:return e.next=4,D(r);case 4:if("object"!=typeof(t=e.sent)){e.next=8;break}return a={},e.abrupt("return",(null!=t.id&&(a.layerId=t.id),{className:t.className||"FeatureLayer",properties:a}));case 8:return e.abrupt("return",{className:"GroupLayer"});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return S.apply(this,arguments)}function S(){return(S=(0,u.Z)((0,n.Z)().mark((function e(r){var t,a,u,s,c,o,l,p,y;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(r);case 2:if("object"!=typeof(t=e.sent)){e.next=18;break}if(u={},null!=t.id?(u.layerId=t.id,s="".concat(r.url,"/layers/").concat(t.id)):s=r.url,null===(a=r.typeKeywords)||void 0===a||!a.length){e.next=14;break}c=0,o=Object.keys(i.fb);case 7:if(!(c<o.length)){e.next=14;break}if(l=o[c],!r.typeKeywords.includes(l)){e.next=11;break}return e.abrupt("return",{className:i.fb[l]});case 11:c++,e.next=7;break;case 14:return e.next=16,(0,f.T)(s);case 16:return p=e.sent,e.abrupt("return",{className:i.fb[null===p||void 0===p?void 0:p.layerType]||"SceneLayer",properties:u});case 18:if(!1!==t){e.next=23;break}return e.next=21,(0,f.T)(r.url);case 21:return y=e.sent,e.abrupt("return","Voxel"===(null===y||void 0===y?void 0:y.layerType)?{className:"VoxelLayer"}:{className:"GroupLayer"});case 23:return e.abrupt("return",{className:"GroupLayer"});case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return N.apply(this,arguments)}function N(){return(N=(0,u.Z)((0,n.Z)().mark((function e(r){var t,a,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:if(t=(0,p._$)(r,"Map Notes"),a=(0,p._$)(r,"Markup"),!t&&!a){e.next=5;break}return e.abrupt("return",{className:"MapNotesLayer"});case 5:if(!(0,p._$)(r,"Route Layer")){e.next=7;break}return e.abrupt("return",{className:"RouteLayer"});case 7:return e.next=9,r.fetchData();case 9:return u=e.sent,e.abrupt("return",1===(0,l.getNumLayersAndTables)(u)?{className:"FeatureLayer"}:{className:"GroupLayer"});case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){return M.apply(this,arguments)}function M(){return(M=(0,u.Z)((0,n.Z)().mark((function e(r){var t,a,u,s,i,c,o,l,p,y;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:if(i=null!==(t=null===(a=r.typeKeywords)||void 0===a?void 0:a.map((function(e){return e.toLowerCase()})))&&void 0!==t?t:[],!i.includes("elevation 3d layer")){e.next=5;break}return e.abrupt("return",{className:"ElevationLayer"});case 5:if(!i.includes("tiled imagery")){e.next=7;break}return e.abrupt("return",{className:"ImageryTileLayer"});case 7:return e.next=9,r.fetchData();case 9:if(c=e.sent,"ArcGISTiledImageServiceLayer"!==(o=null===c||void 0===c?void 0:c.layerType)){e.next=13;break}return e.abrupt("return",{className:"ImageryTileLayer"});case 13:if("ArcGISImageServiceLayer"!==o){e.next=15;break}return e.abrupt("return",{className:"ImageryLayer"});case 15:return e.next=17,(0,f.T)(r.url);case 17:return l=e.sent,p=null===(u=l.cacheType)||void 0===u?void 0:u.toLowerCase(),y=null===(s=l.capabilities)||void 0===s?void 0:s.toLowerCase().includes("tilesonly"),e.abrupt("return","map"===p||y?{className:"ImageryTileLayer"}:{className:"ImageryLayer"});case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return G.apply(this,arguments)}function G(){return(G=(0,u.Z)((0,n.Z)().mark((function e(r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.load();case 2:return e.next=4,r.fetchData();case 4:return e.t0=e.sent,e.abrupt("return",{className:"OrientedImageryLayer",properties:e.t0});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return O.apply(this,arguments)}function O(){return(O=(0,u.Z)((0,n.Z)().mark((function e(r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.T)(r.url);case 2:return e.abrupt("return",e.sent.tileInfo);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return C.apply(this,arguments)}function C(){return(C=(0,u.Z)((0,n.Z)().mark((function e(r){var t,a,u,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=r.url)&&!/\/\d+$/.test(t)){e.next=3;break}return e.abrupt("return",{});case 3:return e.next=5,r.load();case 5:return e.next=7,r.fetchData();case 7:if(a=e.sent,"Feature Service"!==r.type){e.next=16;break}return e.t0=_,e.next=12,(0,l.preprocessFSItemData)(a,t);case 12:return e.t1=e.sent,"object"==typeof(u=(0,e.t0)(e.t1))&&(s=(0,l.getSubtypeGroupLayerIds)(a),u.className=null!=u.id&&s.includes(u.id)?"SubtypeGroupLayer":"FeatureLayer"),e.abrupt("return",u);case 16:if(!((0,l.getNumLayersAndTables)(a)>0)){e.next=18;break}return e.abrupt("return",_(a));case 18:return e.t2=_,e.next=21,(0,f.T)(t);case 21:return e.t3=e.sent,e.abrupt("return",(0,e.t2)(e.t3));case 23:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return 1===(0,l.getNumLayersAndTables)(e)&&{id:(0,l.getFirstLayerOrTableId)(e)}}},21371:function(e,r,t){t.d(r,{y:function(){return c}});var n=t(74165),a=t(15861),u=t(14921),s=t(66978),i=t(51370);function c(e,r,t){return o.apply(this,arguments)}function o(){return o=(0,a.Z)((0,n.Z)().mark((function e(r,t,a){var c,o,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(c=r&&r.getAtOrigin&&r.getAtOrigin("renderer",t.origin))||"unique-value"!==c.type||!c.styleOrigin){e.next=6;break}return e.next=4,(0,u.q6)(c.populateFromStyle());case 4:o=e.sent,(0,s.k_)(a),!1===o.ok&&(l=o.error,t&&t.messages&&t.messages.push(new i.Z("renderer:style-reference","Failed to create unique value renderer from style reference: ".concat(l.message),{error:l,context:t})),r.clear("renderer",null===t||void 0===t?void 0:t.origin));case 6:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}}}]);
//# sourceMappingURL=3139.e12caa29.chunk.js.map