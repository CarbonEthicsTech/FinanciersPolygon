"use strict";(self.webpackChunkgis_dashboard=self.webpackChunkgis_dashboard||[]).push([[56],{4321:function(e,t,i){i.d(t,{Y:function(){return o}});var n=i(15671),r=i(43144),a=i(60136),u=i(29388),h=i(27366),l=(i(32718),i(25243),i(63780),i(93169),i(10064),i(69912)),s=i(9849),o=function(e){var t=function(e){(0,a.Z)(i,e);var t=(0,u.Z)(i);function i(){return(0,n.Z)(this,i),t.apply(this,arguments)}return(0,r.Z)(i,[{key:"attach",value:function(){this.view.timeline.record("".concat(this.layer.title," (BitmapTileLayer) Attach")),this._bitmapView=new s.s(this._tileInfoView),this.container.addChild(this._bitmapView)}},{key:"detach",value:function(){var e;this.container.removeChild(this._bitmapView),null===(e=this._bitmapView)||void 0===e||e.removeAllChildren()}}]),i}(e);return t=(0,h._)([(0,l.j)("esri.views.2d.layers.BitmapTileLayerView2D")],t)}},70056:function(e,t,i){i.r(t),i.d(t,{default:function(){return R}});var n=i(1413),r=i(29439),a=i(74165),u=i(15861),h=i(15671),l=i(43144),s=i(11752),o=i(61120),c=i(60136),p=i(29388),f=i(27366),d=i(32718),v=i(66978),g=i(94172),w=i(49861),y=(i(25243),i(63780),i(93169),i(69912)),_=i(92975),m=i(78983),k=(i(10064),i(99346),i(76200),i(42265),i(52522),i(35995),i(47191),i(41978),i(87422),i(3453),i(39484),i(80613),i(13594),i(151),i(84319),i(52120),i(8548),i(37825),i(83826),i(3667),i(94109),i(84936),i(54815),i(10435),i(30575),i(41768),i(78020),i(44070),i(53634),i(46888),i(57808),i(45412),i(64337),i(61441),i(86909),i(82386),i(16889),i(73271),i(21391),i(15245),i(10106),i(34052),i(53456),i(54711),i(62013),i(92841),i(23174),i(93985),i(13163),i(36207),i(98634),i(46228),i(78041),i(39416),i(70812),i(77318)),Z=(i(86741),i(26885),i(79347),i(83406),i(68860),i(49229),i(8229),i(91340),i(91908),i(14921),i(69610),i(4321)),b=i(95986),I=i(83978),V=i(34622),T=i(37995),x=i(73828),C=i(32344),H=i(85269),q=i(67581),U=i(13107),Q=i(32645),S=i(45008),F=[0,0],L=function(e){(0,c.Z)(i,e);var t=(0,p.Z)(i);function i(){var e;return(0,h.Z)(this,i),(e=t.apply(this,arguments))._fetchQueue=null,e._highlightGraphics=new m.J,e._highlightView=null,e._popupHighlightHelper=null,e._tileStrategy=null,e.layer=null,e}return(0,l.Z)(i,[{key:"resampling",get:function(){return!("resampling"in this.layer)||!1!==this.layer.resampling}},{key:"tilemapCache",get:function(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}},{key:"update",value:function(e){var t;this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),null===(t=this._highlightView)||void 0===t||t.processUpdate(e)}},{key:"attach",value:function(){var e=this,t="tileServers"in this.layer?this.layer.tileServers:null,n=this.tilemapCache;if(this._tileInfoView=new T.Z(this.layer.tileInfo,this.layer.fullExtent,null===n||void 0===n?void 0:n.effectiveMinLOD,null===n||void 0===n?void 0:n.effectiveMaxLOD),this._fetchQueue=new C.Z({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:function(t,i){return e.fetchTile(t,i)}}),this._tileStrategy=new H.Z({cachePolicy:"keep",resampling:this.resampling,acquireTile:function(t){return e.acquireTile(t)},releaseTile:function(t){return e.releaseTile(t)},tileInfoView:this._tileInfoView}),(0,Q.Uf)(this,this.layer)){var r=this._highlightView=new k.Z({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:function(){return e.requestUpdate()},container:new I.Z(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new Q.VF({createFetchPopupFeaturesQueryGeometry:function(t,i){return(0,S.K)(t,i,e.view)},highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:function(e,t){r.graphicUpdateHandler({graphic:e,property:t})},layerView:this,updatingHandles:this.updatingHandles})}this.requestUpdate(),this.addAttachHandles((0,g.YP)((function(){return e.resampling}),(function(){e.doRefresh()}))),(0,s.Z)((0,o.Z)(i.prototype),"attach",this).call(this)}},{key:"detach",value:function(){var e;(0,s.Z)((0,o.Z)(i.prototype),"detach",this).call(this),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),null!==(e=this._popupHighlightHelper)&&void 0!==e&&e.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}},{key:"fetchPopupFeatures",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t,i){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeatures(t,i):[]);case 1:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"highlight",value:function(e){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(e):{remove:function(){}}}},{key:"moveStart",value:function(){this.requestUpdate()}},{key:"viewChange",value:function(){this.requestUpdate()}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"supportsSpatialReference",value:function(e){var t;return(0,_.fS)(null===(t=this.layer.tileInfo)||void 0===t?void 0:t.spatialReference,e)}},{key:"doRefresh",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(){var t=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!this.attached||this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.refresh((function(e){return t._enqueueTileFetch(e)})));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isUpdating",value:function(){var e,t;return null!==(e=null===(t=this._fetchQueue)||void 0===t?void 0:t.updating)&&void 0!==e&&e}},{key:"acquireTile",value:function(e){var t,i,n,a=this._bitmapView.createTile(e),u=a.bitmap;return t=this._tileInfoView.getTileCoords(F,a.key),i=(0,r.Z)(t,2),u.x=i[0],u.y=i[1],u.resolution=this._tileInfoView.getTileResolution(a.key),n=(0,r.Z)(this._tileInfoView.tileInfo.size,2),u.width=n[0],u.height=n[1],this._enqueueTileFetch(a),this._bitmapView.addChild(a),this.requestUpdate(),a}},{key:"releaseTile",value:function(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(function(){return e.destroy()})),this.requestUpdate()}},{key:"fetchTile",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t){var i,r,u,h,l,s,o,c,p,f,d=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=d.length>1&&void 0!==d[1]?d[1]:{},r=this.tilemapCache,u=i.signal,h=i.resamplingLevel,l=void 0===h?0:h,r){e.next=22;break}return e.prev=3,e.next=6,this._fetchImage(t,u);case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),(0,v.D_)(e.t0)||this.resampling){e.next=13;break}return e.abrupt("return",(0,V.V)(this._tileInfoView.tileInfo.size));case 13:if(!(l<3)){e.next=21;break}if(!(s=this._tileInfoView.getTileParentId(t.id))){e.next=21;break}return o=new x.Z(s),e.next=19,this.fetchTile(o,(0,n.Z)((0,n.Z)({},i),{},{resamplingLevel:l+1}));case 19:return c=e.sent,e.abrupt("return",(0,V.i)(this._tileInfoView,c,o,t));case 21:throw e.t0;case 22:return p=new x.Z(0,0,0,0),e.prev=23,e.next=26,r.fetchAvailabilityUpsample(t.level,t.row,t.col,p,{signal:u});case 26:if(p.level===t.level||this.resampling){e.next=28;break}return e.abrupt("return",(0,V.V)(this._tileInfoView.tileInfo.size));case 28:return e.next=30,this._fetchImage(p,u);case 30:f=e.sent,e.next=40;break;case 33:if(e.prev=33,e.t1=e.catch(23),!(0,v.D_)(e.t1)){e.next=37;break}throw e.t1;case 37:return e.next=39,this._fetchImage(t,u);case 39:f=e.sent;case 40:return e.abrupt("return",this.resampling?(0,V.i)(this._tileInfoView,f,p,t):f);case 41:case"end":return e.stop()}}),e,this,[[3,9],[23,33]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_enqueueTileFetch",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t){var i,n=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._fetchQueue.has(t.key.id)){e.next=12;break}return e.prev=1,e.next=4,this._fetchQueue.push(t.key);case 4:i=e.sent,t.bitmap.source=i,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.requestRender(),t.once("attach",(function(){return n.requestUpdate()})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),(0,v.D_)(e.t0)||d.Z.getLogger(this).error(e.t0);case 11:this.requestUpdate();case 12:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_fetchImage",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t,i){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:i}));case 1:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()}]),i}((0,U.Z)((0,Z.Y)((0,b.y)(q.Z))));(0,f._)([(0,w.Cb)()],L.prototype,"_fetchQueue",void 0),(0,f._)([(0,w.Cb)()],L.prototype,"resampling",null),(0,f._)([(0,w.Cb)()],L.prototype,"tilemapCache",null);var R=L=(0,f._)([(0,y.j)("esri.views.2d.layers.TileLayerView2D")],L)},34622:function(e,t,i){i.d(t,{V:function(){return a},i:function(){return r}});var n=i(29439);function r(e,t,i,n){if(i.level===n.level)return t;var r=e.tileInfo.size,u=e.getTileResolution(i.level),h=e.getTileResolution(n.level),l=e.getLODInfoAt(n.level),s=l.getXForColumn(n.col),o=l.getYForRow(n.row),c=(l=e.getLODInfoAt(i.level)).getXForColumn(i.col),p=l.getYForRow(i.row),f=function(e){return e instanceof HTMLImageElement?e.naturalWidth:e.width}(t)/r[0],d=function(e){return e instanceof HTMLImageElement?e.naturalHeight:e.height}(t)/r[1],v=Math.round(f*((s-c)/u)),g=Math.round(d*(-(o-p)/u)),w=Math.round(f*r[0]*(h/u)),y=Math.round(d*r[1]*(h/u)),_=a(r);return _.getContext("2d").drawImage(t,v,g,w,y,0,0,r[0],r[1]),_}function a(e){var t,i=document.createElement("canvas");return t=(0,n.Z)(e,2),i.width=t[0],i.height=t[1],i}}}]);
//# sourceMappingURL=56.0511ef6a.chunk.js.map