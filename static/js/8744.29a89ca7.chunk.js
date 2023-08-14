"use strict";(self.webpackChunkgis_dashboard=self.webpackChunkgis_dashboard||[]).push([[8744,2410,291,357],{16054:function(e,t,r){r.d(t,{z:function(){return o}});var i=r(15671),s=r(43144),n=r(18759),o=function(){function e(t,r){(0,i.Z)(this,e),this._storage=new n.WJ,this.id="",this.name="",this.size=0,this._storage.maxSize=t,this._storage.register(this),r&&this._storage.registerRemoveFunc("",r)}return(0,s.Z)(e,[{key:"destroy",value:function(){this._storage.deregister(this),this._storage.destroy()}},{key:"put",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;this._storage.put(this,e,t,r,1)}},{key:"pop",value:function(e){return this._storage.pop(this,e)}},{key:"get",value:function(e){return this._storage.get(this,e)}},{key:"clear",value:function(){this._storage.clearAll()}},{key:"maxSize",get:function(){return this._storage.maxSize},set:function(e){this._storage.maxSize=e}},{key:"resetHitRate",value:function(){}}]),e}()},18759:function(e,t,r){r.d(t,{WJ:function(){return d},Xq:function(){return p}});var i,s,n=r(29439),o=r(37762),a=r(15671),u=r(43144),l=r(27546);(s=i||(i={}))[s.ALL=0]="ALL",s[s.SOME=1]="SOME";var p=function(){function e(t,r,i){(0,a.Z)(this,e),this.name=t,this._storage=r,this.id=c+++":",this.size=0,this.maxSize=0,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),i&&(this._storage.registerRemoveFunc(this.id,i),this._removeFunc=!0)}return(0,u.Z)(e,[{key:"destroy",value:function(){this._storage.clear(this),this._removeFunc&&this._storage.deregisterRemoveFunc(this.id),this._storage.deregister(this),this._storage=null}},{key:"hitRate",get:function(){return this._hit/(this._hit+this._miss)}},{key:"sizeAll",get:function(){return this._storage.size}},{key:"resetHitRate",value:function(){this._hit=this._miss=0}},{key:"put",value:function(e,t,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;this._storage.put(this,e,t,r,i)}},{key:"get",value:function(e){var t=this._storage.get(this,e);return void 0===t?++this._miss:++this._hit,t}},{key:"pop",value:function(e){var t=this._storage.pop(this,e);return void 0===t?++this._miss:++this._hit,t}},{key:"updateSize",value:function(e,t,r){this._storage.updateSize(this,e,t,r)}},{key:"clear",value:function(){this._storage.clear(this)}},{key:"clearAll",value:function(){this._storage.clearAll()}},{key:"performanceInfo",get:function(){return this._storage.performanceInfo}},{key:"resetStats",value:function(){this._storage.resetStats()}}]),e}(),d=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10485760;(0,a.Z)(this,e),this._maxSize=t,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new l.Z,this._users=new l.Z}return(0,u.Z)(e,[{key:"size",get:function(){return this._size}},{key:"destroy",value:function(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}},{key:"register",value:function(e){this._users.push(e)}},{key:"deregister",value:function(e){this._users.removeUnordered(e)}},{key:"registerRemoveFunc",value:function(e,t){this._removeFuncs.push([e,t])}},{key:"deregisterRemoveFunc",value:function(e){this._removeFuncs.filterInPlace((function(t){return t[0]!==e}))}},{key:"maxSize",get:function(){return this._maxSize},set:function(e){this._maxSize=Math.max(e,0),this._checkSizeLimits()}},{key:"put",value:function(e,t,r,s,n){t=e.id+t;var o=this._db.get(t);if(o&&(this._size-=o.size,e.size-=o.size,this._db.delete(t),o.entry!==r&&this._notifyRemove(t,o.entry,i.ALL)),s>this._maxSize)this._notifyRemove(t,r,i.ALL);else if(void 0!==r)if(!s||s<0)console.warn("Refusing to cache entry with invalid size "+s);else{var a=1+Math.max(n,-3)- -3;this._db.set(t,{entry:r,size:s,lifetime:a,lives:a}),this._size+=s,e.size+=s,this._checkSizeLimits()}else console.warn("Refusing to cache undefined entry ")}},{key:"updateSize",value:function(e,t,r,s){t=e.id+t;var n=this._db.get(t);if(n&&n.entry===r){for(this._size-=n.size,e.size-=n.size;s>this._maxSize;){var o=this._notifyRemove(t,r,i.SOME);if(!(null!=o&&o>0))return void this._db.delete(t);s=o}n.size=s,this._size+=s,e.size+=s,this._checkSizeLimits()}}},{key:"pop",value:function(e,t){t=e.id+t;var r=this._db.get(t);if(r)return this._size-=r.size,e.size-=r.size,this._db.delete(t),++this._hit,r.entry;++this._miss}},{key:"get",value:function(e,t){t=e.id+t;var r=this._db.get(t);if(void 0!==r)return this._db.delete(t),r.lives=r.lifetime,this._db.set(t,r),++this._hit,r.entry;++this._miss}},{key:"performanceInfo",get:function(){var e=this,t={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},r={},i=new Array;this._db.forEach((function(t,s){var n=t.lifetime;i[n]=(i[n]||0)+t.size,e._users.forAll((function(e){var i=e.id,n=e.name;if(s.startsWith(i)){var o=r[n]||0;r[n]=o+t.size}}))}));var s={};this._users.forAll((function(e){var t=e.name;if("hitRate"in e&&"number"==typeof e.hitRate&&!isNaN(e.hitRate)&&e.hitRate>0){var i=r[t]||0;r[t]=i,s[t]=Math.round(100*e.hitRate)+"%"}else s[t]="0%"}));var n=Object.keys(r);n.sort((function(e,t){return r[t]-r[e]})),n.forEach((function(e){return t[e]=Math.round(r[e]/Math.pow(2,20))+"MB / "+s[e]}));for(var o=i.length-1;o>=0;--o){var a=i[o];a&&(t["Priority "+(o+-3-1)]=Math.round(a/this._size*100)+"%")}return t}},{key:"resetStats",value:function(){this._hit=this._miss=0,this._users.forAll((function(e){return e.resetHitRate()}))}},{key:"clear",value:function(e){var t=this,r=e.id;this._db.forEach((function(e,s){s.startsWith(r)&&(t._size-=e.size,t._db.delete(s),t._notifyRemove(s,e.entry,i.ALL))})),e.size=0}},{key:"clearAll",value:function(){var e=this;this._db.forEach((function(t,r){return e._notifyRemove(r,t.entry,i.ALL)})),this._users.forEach((function(e){return e.size=0})),this._size=0,this._db.clear()}},{key:"_getHitRate",value:function(){return this._hit/(this._hit+this._miss)}},{key:"_notifyRemove",value:function(e,t,r){var i;return this._removeFuncs.some((function(s){if(e.startsWith(s[0])){var n=s[1](t,r);return"number"==typeof n&&(i=n),!0}return!1})),i}},{key:"_checkSizeLimits",value:function(){var e=this;if(this._size>this._maxSize){var t,r=(0,o.Z)(this._db);try{for(r.s();!(t=r.n()).done;){var i=(0,n.Z)(t.value,2),s=i[0],a=i[1];if(this._purgeItem(s,a),this._size<=.9*this.maxSize)return}}catch(u){r.e(u)}finally{r.f()}}this._users.forEach((function(t){if(t.maxSize>0&&t.size>t.maxSize){var r,i=(0,o.Z)(e._db);try{for(i.s();!(r=i.n()).done;){var s=(0,n.Z)(r.value,2),a=s[0],l=s[1];if(a.startsWith(t.id)&&(e._purgeItem(a,l,t),t.size<=.9*t.maxSize))return}}catch(u){i.e(u)}finally{i.f()}}}))}},{key:"_purgeItem",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this._users.find((function(t){return e.startsWith(t.id)}));if(this._db.delete(e),t.lives<=1){this._size-=t.size,r&&(r.size-=t.size);var s=this._notifyRemove(e,t.entry,i.SOME);null!=s&&s>0&&(this._size+=s,r&&(r.size+=s),t.lives=t.lifetime,t.size=s,this._db.set(e,t))}else--t.lives,this._db.set(e,t)}}]),e}(),c=0},15440:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var i=r(1413),s=r(15671),n=r(43144),o=r(11752),a=r(61120),u=r(60136),l=r(29388),p=r(27366),d=r(10064),c=r(49861),y=(r(25243),r(63780),r(93169),r(69912));function h(e){return function(t,r,i){var s;if(!t)return null;var n=t[0].orientedImageryProperties;return null!==(s=null===n||void 0===n?void 0:n[e])&&void 0!==s?s:null}}var f=function(e){(0,u.Z)(r,e);var t=(0,l.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments)).geometryType="point",e.operationalLayerType="OrientedImageryLayer",e.type="oriented-imagery",e}return(0,n.Z)(r,[{key:"effectiveElevationSource",get:function(){var e,t=this.elevationSource,r=this.demPathPrefix,s=this.demPathSuffix;if(null===t||void 0===t||null===(e=t.url)||void 0===e||!e.trim())return t;var n=t.url.trim();return null!==r&&void 0!==r&&r.trim()&&(n="".concat(r.trim(),"/").concat(n)),null!==s&&void 0!==s&&s.trim()&&(n+="/".concat(s.trim())),(0,i.Z)((0,i.Z)({},t),{},{url:n})}},{key:"_verifySource",value:function(){if((0,o.Z)((0,a.Z)(r.prototype),"_verifySource",this).call(this),"point"!==this.geometryType)throw new d.Z("oriented-imagery-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type")}}]),r}(r(64326).default);(0,p._)([(0,c.Cb)({json:{type:Number,write:!0,read:{source:"layers",reader:h("cameraHeading")}}})],f.prototype,"cameraHeading",void 0),(0,p._)([(0,c.Cb)({json:{type:Number,write:!0,read:{source:"layers",reader:h("cameraHeight")}}})],f.prototype,"cameraHeight",void 0),(0,p._)([(0,c.Cb)({json:{type:Number,write:!0,read:{source:"layers",reader:h("cameraPitch")}}})],f.prototype,"cameraPitch",void 0),(0,p._)([(0,c.Cb)({json:{type:Number,write:!0,read:{source:"layers",reader:h("cameraRoll")}}})],f.prototype,"cameraRoll",void 0),(0,p._)([(0,c.Cb)({json:{type:Number,write:!0,read:{source:"layers",reader:h("coveragePercent")}}})],f.prototype,"coveragePercent",void 0),(0,p._)([(0,c.Cb)({json:{write:!0,read:{source:"layers",reader:h("demPathPrefix")}}})],f.prototype,"demPathPrefix",void 0),(0,p._)([(0,c.Cb)({json:{write:!0,read:{source:"layers",reader:h("demPathSuffix")}}})],f.prototype,"demPathSuffix",void 0),(0,p._)([(0,c.Cb)({json:{write:!0,read:{source:"layers",reader:h("depthImagePathPrefix")}}})],f.prototype,"depthImagePathPrefix",void 0),(0,p._)([(0,c.Cb)({json:{write:!0,read:{source:"layers",reader:h("depthImagePathSuffix")}}})],f.prototype,"depthImagePathSuffix",void 0),(0,p._)([(0,c.Cb)({json:{type:Number,write:!0,read:{source:"layers",reader:h("farDistance")}}})],f.prototype,"farDistance",void 0),(0,p._)([(0,c.Cb)({json:{write:!0}})],f.prototype,"geometryType",void 0),(0,p._)([(0,c.Cb)({json:{type:Number,write:!0,read:{source:"layers",reader:h("horizontalFieldOfView")}}})],f.prototype,"horizontalFieldOfView",void 0),(0,p._)([(0,c.Cb)({json:{write:!0,read:{source:"layers",reader:h("horizontalMeasurementUnit")}}})],f.prototype,"horizontalMeasurementUnit",void 0),(0,p._)([(0,c.Cb)({json:{write:!0,read:{source:"layers",reader:h("imagePathPrefix")}}})],f.prototype,"imagePathPrefix",void 0),(0,p._)([(0,c.Cb)({json:{write:!0,read:{source:"layers",reader:h("imagePathSuffix")}}})],f.prototype,"imagePathSuffix",void 0),(0,p._)([(0,c.Cb)({json:{type:Number,write:!0,read:{source:"layers",reader:h("imageRotation")}}})],f.prototype,"imageRotation",void 0),(0,p._)([(0,c.Cb)({type:Number,json:{write:!0,read:{source:"layers",reader:h("maximumDistance")}}})],f.prototype,"maximumDistance",void 0),(0,p._)([(0,c.Cb)({json:{write:!0,read:{source:"layers",reader:h("nearDistance")}}})],f.prototype,"nearDistance",void 0),(0,p._)([(0,c.Cb)({type:["OrientedImageryLayer"]})],f.prototype,"operationalLayerType",void 0),(0,p._)([(0,c.Cb)({json:{write:!0,read:{source:"layers",reader:h("orientedImageryType")}}})],f.prototype,"orientedImageryType",void 0),(0,p._)([(0,c.Cb)({json:{read:!1},value:"oriented-imagery",readOnly:!0})],f.prototype,"type",void 0),(0,p._)([(0,c.Cb)({json:{write:!0,read:{source:"layers",reader:h("verticalFieldOfView")}}})],f.prototype,"verticalFieldOfView",void 0),(0,p._)([(0,c.Cb)({json:{write:!0,read:{source:"layers",reader:h("verticalMeasurementUnit")}}})],f.prototype,"verticalMeasurementUnit",void 0),(0,p._)([(0,c.Cb)({json:{write:!0,read:{source:"layers",reader:h("videoPathPrefix")}}})],f.prototype,"videoPathPrefix",void 0),(0,p._)([(0,c.Cb)({json:{write:!0,read:{source:"layers",reader:h("videoPathSuffix")}}})],f.prototype,"videoPathSuffix",void 0),(0,p._)([(0,c.Cb)({json:{write:!0,read:{source:"layers",reader:h("elevationSource")}}})],f.prototype,"elevationSource",void 0),(0,p._)([(0,c.Cb)()],f.prototype,"effectiveElevationSource",null);var v=f=(0,p._)([(0,y.j)("esri.layers.OrientedImageryLayer")],f)},27961:function(e,t,r){r.d(t,{V:function(){return p}});var i=r(15671),s=r(43144),n=r(60136),o=r(29388),a=r(27366),u=r(49861),l=(r(25243),r(63780),r(93169),r(69912));var p=function(e){var t=function(e){(0,n.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,i.Z)(this,r),t.apply(this,arguments)}return(0,s.Z)(r,[{key:"apiKey",get:function(){var e;return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?null===(e=this.portalItem)||void 0===e?void 0:e.apiKey:null},set:function(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}}]),r}(e);return(0,a._)([(0,u.Cb)({type:String})],t.prototype,"apiKey",null),t=(0,a._)([(0,l.j)("esri.layers.mixins.APIKeyMixin")],t)}},11936:function(e,t,r){r.d(t,{Y:function(){return c}});var i=r(15671),s=r(43144),n=r(60136),o=r(29388),a=r(27366),u=r(32718),l=r(49861),p=(r(25243),r(63780),r(93169),r(69912)),d=r(25899),c=function(e){var t=function(e){(0,n.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,i.Z)(this,r),t.apply(this,arguments)}return(0,s.Z)(r,[{key:"title",get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){var e=(0,d.Qc)(this.url);if(null!=e&&e.title)return e.title}return this._get("title")||""},set:function(e){this._set("title",e)}},{key:"url",set:function(e){this._set("url",(0,d.Nm)(e,u.Z.getLogger(this)))}}]),r}(e);return(0,a._)([(0,l.Cb)()],t.prototype,"title",null),(0,a._)([(0,l.Cb)({type:String})],t.prototype,"url",null),t=(0,a._)([(0,p.j)("esri.layers.mixins.ArcGISService")],t)}},87165:function(e,t,r){r.d(t,{Z:function(){return m}});var i=r(15671),s=r(43144),n=r(60136),o=r(29388),a=r(27366),u=r(11582),l=r(46784),p=r(49861),d=(r(25243),r(63780),r(93169),r(38511)),c=r(69912),y=r(31201),h=r(66591),f=r(12224),v=function(e){(0,n.Z)(r,e);var t=(0,o.Z)(r);function r(e){var s;return(0,i.Z)(this,r),(s=t.call(this,e)).id=null,s.name=null,s.domains=null,s.templates=null,s}return(0,s.Z)(r,[{key:"readDomains",value:function(e){for(var t={},r=0,i=Object.keys(e);r<i.length;r++){var s=i[r];t[s]=(0,h.im)(e[s])}return t}},{key:"writeDomains",value:function(e,t){for(var r={},i=0,s=Object.keys(e);i<s.length;i++){var n,o=s[i];e[o]&&(r[o]=null===(n=e[o])||void 0===n?void 0:n.toJSON())}t.domains=r}}]),r}((0,u.J)(l.wq));(0,a._)([(0,p.Cb)({json:{write:!0}})],v.prototype,"id",void 0),(0,a._)([(0,p.Cb)({json:{write:!0}})],v.prototype,"name",void 0),(0,a._)([(0,p.Cb)({json:{write:!0}})],v.prototype,"domains",void 0),(0,a._)([(0,d.r)("domains")],v.prototype,"readDomains",null),(0,a._)([(0,y.c)("domains")],v.prototype,"writeDomains",null),(0,a._)([(0,p.Cb)({type:[f.Z],json:{write:!0}})],v.prototype,"templates",void 0);var m=v=(0,a._)([(0,c.j)("esri.layers.support.FeatureType")],v)},52410:function(e,t,r){r.d(t,{Z:function(){return l}});var i=r(37762),s=r(15671),n=r(43144),o=r(37270);function a(e){return"oid"===e.type||"esriFieldTypeOID"===e.type}function u(e){return"global-id"===e.type||"esriFieldTypeGlobalID"===e.type}var l=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if((0,s.Z)(this,e),this.fields=[],this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this.dateFields=[],this.numericFields=[],this._requiredFields=null,t){this.fields=t;var r,n,l=[],c=(0,i.Z)(t);try{for(c.s();!(r=c.n()).done;){var y=r.value,h=null===y||void 0===y?void 0:y.name,f=d(null===y||void 0===y?void 0:y.name);if(h&&f){var v=p(h);this._fieldsMap.set(h,y),this._fieldsMap.set(v,y),this._normalizedFieldsMap.set(f,y),l.push(v),"date"===(n=y).type||"esriFieldTypeDate"===n.type||"date-only"===n.type||"esriFieldTypeDateOnly"===n.type||"timestamp-offset"===n.type||"esriFieldTypeTimestampOffset"===n.type?(this.dateFields.push(y),this._dateFieldsSet.add(y)):(0,o.H7)(y)&&(this._numericFieldsSet.add(y),this.numericFields.push(y)),a(y)||u(y)||(y.editable=null==y.editable||!!y.editable,y.nullable=null==y.nullable||!!y.nullable)}}}catch(m){c.e(m)}finally{c.f()}l.sort(),this.uid=l.join(",")}}return(0,n.Z)(e,[{key:"destroy",value:function(){this._fieldsMap.clear()}},{key:"requiredFields",get:function(){if(!this._requiredFields){this._requiredFields=[];var e,t=(0,i.Z)(this.fields);try{for(t.s();!(e=t.n()).done;){var r=e.value;a(r)||u(r)||r.nullable||void 0!==(0,o.os)(r)||this._requiredFields.push(r)}}catch(s){t.e(s)}finally{t.f()}}return this._requiredFields}},{key:"has",value:function(e){return null!=this.get(e)}},{key:"get",value:function(e){var t;if(e){var r=this._fieldsMap.get(e);return r||((r=null!==(t=this._fieldsMap.get(p(e)))&&void 0!==t?t:this._normalizedFieldsMap.get(d(e)))&&this._fieldsMap.set(e,r),r)}}},{key:"isDateField",value:function(e){return this._dateFieldsSet.has(this.get(e))}},{key:"isNumericField",value:function(e){return this._numericFieldsSet.has(this.get(e))}},{key:"normalizeFieldName",value:function(e){var t,r=this.get(e);if(r)return null!==(t=r.name)&&void 0!==t?t:void 0}}]),e}();function p(e){return e.trim().toLowerCase()}function d(e){var t,r;return null!==(t=null===(r=(0,o.q6)(e))||void 0===r?void 0:r.toLowerCase())&&void 0!==t?t:""}},71065:function(e,t,r){r.d(t,{Z:function(){return h}});var i,s=r(15671),n=r(43144),o=r(60136),a=r(29388),u=r(27366),l=r(40281),p=r(46784),d=r(49861),c=(r(25243),r(63780),r(93169),r(69912)),y=i=function(e){(0,o.Z)(r,e);var t=(0,a.Z)(r);function r(e){var i;return(0,s.Z)(this,r),(i=t.call(this,e)).floorField=null,i.viewAllMode=!1,i.viewAllLevelIds=new l.Z,i}return(0,n.Z)(r,[{key:"clone",value:function(){return new i({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}}]),r}(p.wq);(0,u._)([(0,d.Cb)({type:String,json:{write:!0}})],y.prototype,"floorField",void 0),(0,u._)([(0,d.Cb)({json:{read:!1,write:!1}})],y.prototype,"viewAllMode",void 0),(0,u._)([(0,d.Cb)({json:{read:!1,write:!1}})],y.prototype,"viewAllLevelIds",void 0);var h=y=i=(0,u._)([(0,c.j)("esri.layers.support.LayerFloorInfo")],y)},94582:function(e,t,r){r.d(t,{h:function(){return d}});var i=r(93169),s=r(25899),n={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function o(e,t,r){return!!u(e,t,r)}function a(e,t,r){return u(e,t,r)}function u(e,t,r){return e&&e.hasOwnProperty(t)?e[t]:r}function l(e){var t,r=null===e||void 0===e||null===(t=e.supportedSpatialAggregationStatistics)||void 0===t?void 0:t.map((function(e){return e.toLowerCase()}));return{envelope:!(null===r||void 0===r||!r.includes("envelopeaggregate")),centroid:!(null===r||void 0===r||!r.includes("centroidaggregate")),convexHull:!(null===r||void 0===r||!r.includes("convexhullaggregate"))}}function p(e,t){var r,i=null===e||void 0===e||null===(r=e.supportedOperationsWithCacheHint)||void 0===r?void 0:r.map((function(e){return e.toLowerCase()}));return!(null===i||void 0===i||!i.includes(t.toLowerCase()))}function d(e,t){return{analytics:c(e),attachment:y(e),data:h(e),metadata:f(e),operations:v(e.capabilities,e,t),query:m(e,t),queryRelated:g(e),queryTopFeatures:_(e),editing:S(e)}}function c(e){return{supportsCacheHint:p(e.advancedQueryCapabilities,"queryAnalytics")}}function y(e){var t=e.attachmentProperties,r={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:p(e.advancedQueryCapabilities,"queryAttachments"),supportsResize:o(e,"supportsAttachmentsResizing",!1)};return t&&Array.isArray(t)&&t.forEach((function(e){var t=n[e.name];t&&(r[t]=!!e.isEnabled)})),r}function h(e){return{isVersioned:o(e,"isDataVersioned",!1),supportsAttachment:o(e,"hasAttachments",!1),supportsM:o(e,"hasM",!1),supportsZ:o(e,"hasZ",!1)}}function f(e){return{supportsAdvancedFieldProperties:o(e,"supportsFieldDescriptionProperty",!1)}}function v(e,t,r){var i=e?e.toLowerCase().split(",").map((function(e){return e.trim()})):[],n=r?(0,s.Qc)(r):null,a=i.includes(null!=n&&"MapServer"===n.serverType?"data":"query"),u=i.includes("editing")&&!t.datesInUnknownTimezone,l=u&&i.includes("create"),p=u&&i.includes("delete"),d=u&&i.includes("update"),c=i.includes("changetracking"),y=t.advancedQueryCapabilities;return u&&!(l||p||d)&&(l=p=d=!0),{supportsCalculate:o(t,"supportsCalculate",!1),supportsTruncate:o(t,"supportsTruncate",!1),supportsValidateSql:o(t,"supportsValidateSql",!1),supportsAdd:l,supportsDelete:p,supportsEditing:u,supportsChangeTracking:c,supportsQuery:a,supportsQueryAnalytics:o(y,"supportsQueryAnalytic",!1),supportsQueryAttachments:o(y,"supportsQueryAttachments",!1),supportsQueryTopFeatures:o(y,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:o(t,"supportsAttachmentsResizing",!1),supportsSync:i.includes("sync"),supportsUpdate:d,supportsExceedsLimitStatistics:o(t,"supportsExceedsLimitStatistics",!1),supportsAsyncConvert3D:o(t,"supportsAsyncConvert3D",!1)}}function m(e,t){var r,n=e.advancedQueryCapabilities,u=e.ownershipBasedAccessControlForFeatures,d=e.archivingInfo,c=e.currentVersion,y=!(null===t||void 0===t?void 0:t.includes("MapServer"))||c>=(0,i.Z)("mapserver-pbf-version-support"),h=(0,s.M8)(t),f=new Set((null!==(r=e.supportedQueryFormats)&&void 0!==r?r:"").split(",").map((function(e){return e.toLowerCase().trim()})));return{supportsStatistics:o(n,"supportsStatistics",e.supportsStatistics),supportsPercentileStatistics:o(n,"supportsPercentileStatistics",!1),supportsSpatialAggregationStatistics:o(n,"supportsSpatialAggregationStatistics",!1),supportedSpatialAggregationStatistics:l(n),supportsCentroid:o(n,"supportsReturningGeometryCentroid",!1),supportsDistance:o(n,"supportsQueryWithDistance",!1),supportsDistinct:o(n,"supportsDistinct",e.supportsAdvancedQueries),supportsExtent:o(n,"supportsReturningQueryExtent",!1),supportsGeometryProperties:o(n,"supportsReturningGeometryProperties",!1),supportsHavingClause:o(n,"supportsHavingClause",!1),supportsOrderBy:o(n,"supportsOrderBy",e.supportsAdvancedQueries),supportsPagination:o(n,"supportsPagination",!1),supportsQuantization:o(e,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:o(e,"supportsQuantizationEditMode",!1),supportsQueryGeometry:o(e,"supportsReturningQueryGeometry",!1),supportsResultType:o(n,"supportsQueryWithResultType",!1),supportsMaxRecordCountFactor:o(n,"supportsMaxRecordCountFactor",!1),supportsSqlExpression:o(n,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:o(e,"useStandardizedQueries",!1),supportsTopFeaturesQuery:o(n,"supportsTopFeaturesQuery",!1),supportsQueryByOthers:o(u,"allowOthersToQuery",!0),supportsHistoricMoment:o(d,"supportsQueryWithHistoricMoment",!1),supportsFormatPBF:y&&f.has("pbf"),supportsDisjointSpatialRelationship:o(n,"supportsDisjointSpatialRel",!1),supportsCacheHint:o(n,"supportsQueryWithCacheHint",!1)||p(n,"query"),supportsDefaultSpatialReference:o(n,"supportsDefaultSR",!1),supportsCompactGeometry:h,supportsFullTextSearch:o(n,"supportsFullTextSearch",!1),maxRecordCountFactor:a(e,"maxRecordCountFactor",void 0),maxRecordCount:a(e,"maxRecordCount",void 0),standardMaxRecordCount:a(e,"standardMaxRecordCount",void 0),tileMaxRecordCount:a(e,"tileMaxRecordCount",void 0)}}function g(e){var t=e.advancedQueryCapabilities,r=o(t,"supportsAdvancedQueryRelated",!1);return{supportsPagination:o(t,"supportsQueryRelatedPagination",!1),supportsCount:r,supportsOrderBy:r,supportsCacheHint:p(t,"queryRelated")}}function _(e){return{supportsCacheHint:p(e.advancedQueryCapabilities,"queryTopFilter")}}function S(e){var t=e.ownershipBasedAccessControlForFeatures,r=e?e.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:o(e,"allowGeometryUpdates",!0),supportsGlobalId:o(e,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:o(e,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:o(e,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:o(e,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:o(e,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:o(t,"allowAnonymousToDelete",!0),supportsDeleteByOthers:o(t,"allowOthersToDelete",!0),supportsUpdateByAnonymous:o(t,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:o(t,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:o(r,"supportsAsyncApplyEdits",!1)}}},68620:function(e,t,r){r.d(t,{p:function(){return n}});var i=r(37762),s=r(93501);function n(e,t,r){if(r&&r.features&&r.hasZ){var n=(0,s.k)(r.geometryType,t,e.outSpatialReference);if(null!=n){var o,a=(0,i.Z)(r.features);try{for(a.s();!(o=a.n()).done;){n(o.value.geometry)}}catch(u){a.e(u)}finally{a.f()}}}}},49818:function(e,t,r){r.d(t,{Z:function(){return x}});var i,s=r(29439),n=r(37762),o=r(15671),a=r(43144),u=r(60136),l=r(29388),p=r(27366),d=r(59486),c=r(52639),y=r(43404),h=r(46784),f=r(84652),v=r(49861),m=(r(25243),r(38511)),g=r(69912),_=r(31201),S=r(78952),b=r(77981),z=r(83040),w=new y.X({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null}),C=i=function(e){(0,u.Z)(r,e);var t=(0,l.Z)(r);function r(e){var i;return(0,o.Z)(this,r),(i=t.call(this,e)).displayFieldName=null,i.exceededTransferLimit=!1,i.features=[],i.fields=null,i.geometryType=null,i.hasM=!1,i.hasZ=!1,i.queryGeometry=null,i.spatialReference=null,i}return(0,a.Z)(r,[{key:"readFeatures",value:function(e,t){for(var r=S.Z.fromJSON(t.spatialReference),i=[],s=0;s<e.length;s++){var n=e[s],o=c.Z.fromJSON(n),a=n.geometry&&n.geometry.spatialReference;null==o.geometry||a||(o.geometry.spatialReference=r);var u=n.aggregateGeometries,l=o.aggregateGeometries;if(u&&null!=l)for(var p in l){var d=l[p],y=u[p],h=null===y||void 0===y?void 0:y.spatialReference;null==d||h||(d.spatialReference=r)}i.push(o)}return i}},{key:"writeGeometryType",value:function(e,t,r,i){if(e)w.write(e,t,r,i);else{var s=this.features;if(s){var o,a=(0,n.Z)(s);try{for(a.s();!(o=a.n()).done;){var u=o.value;if(u&&null!=u.geometry)return void w.write(u.geometry.type,t,r,i)}}catch(l){a.e(l)}finally{a.f()}}}}},{key:"readQueryGeometry",value:function(e,t){if(!e)return null;var r=!!e.spatialReference,i=(0,b.im)(e);return i&&!r&&t.spatialReference&&(i.spatialReference=S.Z.fromJSON(t.spatialReference)),i}},{key:"writeSpatialReference",value:function(e,t){if(e)t.spatialReference=e.toJSON();else{var r=this.features;if(r){var i,s=(0,n.Z)(r);try{for(s.s();!(i=s.n()).done;){var o=i.value;if(o&&null!=o.geometry&&o.geometry.spatialReference)return void(t.spatialReference=o.geometry.spatialReference.toJSON())}}catch(a){s.e(a)}finally{s.f()}}}}},{key:"clone",value:function(){return new i(this.cloneProperties())}},{key:"cloneProperties",value:function(){return(0,f.d9)({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}},{key:"toJSON",value:function(e){var t=this.write();if(t.features&&Array.isArray(e)&&e.length>0)for(var r=0;r<t.features.length;r++){var i=t.features[r];if(i.geometry){var s=e&&e[r];i.geometry=s&&s.toJSON()||i.geometry}}return t}},{key:"quantize",value:function(e){for(var t=(0,s.Z)(e.scale,2),r=t[0],i=t[1],n=(0,s.Z)(e.translate,2),o=n[0],a=n[1],u=this.features,l=this._getQuantizationFunction(this.geometryType,(function(e){return Math.round((e-o)/r)}),(function(e){return Math.round((a-e)/i)})),p=0,d=u.length;p<d;p++)(null===l||void 0===l?void 0:l(u[p].geometry))||(u.splice(p,1),p--,d--);return this.transform=e,this}},{key:"unquantize",value:function(){var e,t,r=this.geometryType,i=this.features,o=this.transform;if(!o)return this;var a=(0,s.Z)(o.translate,2),u=a[0],l=a[1],p=(0,s.Z)(o.scale,2),d=p[0],c=p[1],y=null,h=null;if(this.hasZ&&null!=(null===o||void 0===o||null===(e=o.scale)||void 0===e?void 0:e[2])){var f=(0,s.Z)(o.translate,3)[2],v=(0,s.Z)(o.scale,3)[2];y=function(e){return e*v+f}}if(this.hasM&&null!=(null===o||void 0===o||null===(t=o.scale)||void 0===t?void 0:t[3])){var m=(0,s.Z)(o.translate,4)[3],g=(0,s.Z)(o.scale,4)[3];h=function(e){return null==e?e:e*g+m}}var _,S=this._getHydrationFunction(r,(function(e){return e*d+u}),(function(e){return l-e*c}),y,h),b=(0,n.Z)(i);try{for(b.s();!(_=b.n()).done;){var z=_.value.geometry;null!=z&&S&&S(z)}}catch(w){b.e(w)}finally{b.f()}return this.transform=null,this}},{key:"_quantizePoints",value:function(e,t,r){for(var i,s,n=[],o=0,a=e.length;o<a;o++){var u=e[o];if(o>0){var l=t(u[0]),p=r(u[1]);l===i&&p===s||(n.push([l-i,p-s]),i=l,s=p)}else i=t(u[0]),s=r(u[1]),n.push([i,s])}return n.length>0?n:null}},{key:"_getQuantizationFunction",value:function(e,t,r){var i=this;return"point"===e?function(e){return e.x=t(e.x),e.y=r(e.y),e}:"polyline"===e||"polygon"===e?function(e){for(var s=(0,b.oU)(e)?e.rings:e.paths,n=[],o=0,a=s.length;o<a;o++){var u=s[o],l=i._quantizePoints(u,t,r);l&&n.push(l)}return n.length>0?((0,b.oU)(e)?e.rings=n:e.paths=n,e):null}:"multipoint"===e?function(e){var s=i._quantizePoints(e.points,t,r);return s&&s.length>0?(e.points=s,e):null}:"extent"===e?function(e){return e}:null}},{key:"_getHydrationFunction",value:function(e,t,r,i,s){return"point"===e?function(e){e.x=t(e.x),e.y=r(e.y),i&&(e.z=i(e.z))}:"polyline"===e||"polygon"===e?function(e){for(var n,o,a=(0,b.oU)(e)?e.rings:e.paths,u=0,l=a.length;u<l;u++)for(var p=a[u],d=0,c=p.length;d<c;d++){var y=p[d];d>0?(n+=y[0],o+=y[1]):(n=y[0],o=y[1]),y[0]=t(n),y[1]=r(o)}if(i&&s)for(var h=0,f=a.length;h<f;h++)for(var v=a[h],m=0,g=v.length;m<g;m++){var _=v[m];_[2]=i(_[2]),_[3]=s(_[3])}else if(i)for(var S=0,z=a.length;S<z;S++)for(var w=a[S],C=0,x=w.length;C<x;C++){var F=w[C];F[2]=i(F[2])}else if(s)for(var R=0,k=a.length;R<k;R++)for(var Z=a[R],A=0,M=Z.length;A<M;A++){var P=Z[A];P[2]=s(P[2])}}:"extent"===e?function(e){e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax),i&&null!=e.zmax&&null!=e.zmin&&(e.zmax=i(e.zmax),e.zmin=i(e.zmin)),s&&null!=e.mmax&&null!=e.mmin&&(e.mmax=s(e.mmax),e.mmin=s(e.mmin))}:"multipoint"===e?function(e){for(var n,o,a=e.points,u=0,l=a.length;u<l;u++){var p=a[u];u>0?(n+=p[0],o+=p[1]):(n=p[0],o=p[1]),p[0]=t(n),p[1]=r(o)}if(i&&s)for(var d=0,c=a.length;d<c;d++){var y=a[d];y[2]=i(y[2]),y[3]=s(y[3])}else if(i)for(var h=0,f=a.length;h<f;h++){var v=a[h];v[2]=i(v[2])}else if(s)for(var m=0,g=a.length;m<g;m++){var _=a[m];_[2]=s(_[2])}}:null}}]),r}(h.wq);(0,p._)([(0,v.Cb)({type:String,json:{write:!0}})],C.prototype,"displayFieldName",void 0),(0,p._)([(0,v.Cb)({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],C.prototype,"exceededTransferLimit",void 0),(0,p._)([(0,v.Cb)({type:[c.Z],json:{write:!0}})],C.prototype,"features",void 0),(0,p._)([(0,m.r)("features")],C.prototype,"readFeatures",null),(0,p._)([(0,v.Cb)({type:[z.Z],json:{write:!0}})],C.prototype,"fields",void 0),(0,p._)([(0,v.Cb)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:w.read}}})],C.prototype,"geometryType",void 0),(0,p._)([(0,_.c)("geometryType")],C.prototype,"writeGeometryType",null),(0,p._)([(0,v.Cb)({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],C.prototype,"hasM",void 0),(0,p._)([(0,v.Cb)({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],C.prototype,"hasZ",void 0),(0,p._)([(0,v.Cb)({types:d.qM,json:{write:!0}})],C.prototype,"queryGeometry",void 0),(0,p._)([(0,m.r)("queryGeometry")],C.prototype,"readQueryGeometry",null),(0,p._)([(0,v.Cb)({type:S.Z,json:{write:!0}})],C.prototype,"spatialReference",void 0),(0,p._)([(0,_.c)("spatialReference")],C.prototype,"writeSpatialReference",null),(0,p._)([(0,v.Cb)({json:{write:!0}})],C.prototype,"transform",void 0),(C=i=(0,p._)([(0,g.j)("esri.rest.support.FeatureSet")],C)).prototype.toJSON.isDefaultToJSON=!0;var x=C}}]);
//# sourceMappingURL=8744.29a89ca7.chunk.js.map