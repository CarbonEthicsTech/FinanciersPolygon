"use strict";(self.webpackChunkgis_dashboard=self.webpackChunkgis_dashboard||[]).push([[3657],{23657:function(e,r,n){n.r(r),n.d(r,{clearBoundingBoxCache:function(){return p},computeIconLayerResourceSize:function(){return d},computeObjectLayerResourceSize:function(){return v}});var t=n(74165),u=n(15861),i=n(76200),a=n(10064),o=n(16054),s=n(71353),c=n(41414),l=n(53720),f=h();function h(){return new o.z(50)}function p(){f=h()}function d(e,r){return b.apply(this,arguments)}function b(){return(b=(0,u.Z)((0,t.Z)().mark((function e(r,n){var u,o;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(u=r.resource)||void 0===u||!u.href){e.next=2;break}return e.abrupt("return",(t=r.resource.href,(0,i.default)(t,{responseType:"image"}).then((function(e){return e.data}))).then((function(e){return[e.width,e.height]})));case 2:if(null===(o=r.resource)||void 0===o||!o.primitive){e.next=4;break}return e.abrupt("return",null!=n?[n,n]:[256,256]);case 4:throw new a.Z("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource");case 5:case"end":return e.stop()}var t}),e)})))).apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return m=(0,u.Z)((0,t.Z)().mark((function e(r){var u,i,o,h,p,d,b,v,m,y,w=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=w.length>1&&void 0!==w[1]?w[1]:null,r.isPrimitive){e.next=17;break}if(o=r.resource.href){e.next=5;break}throw new a.Z("symbol:invalid-resource","The symbol does not have a valid resource");case 5:if(void 0===(h=f.get(o))){e.next=8;break}return e.abrupt("return",h);case 8:return e.next=10,Promise.all([n.e(7808),n.e(2029),n.e(5158),n.e(3851),n.e(328)]).then(n.bind(n,90328));case 10:return p=e.sent,d=p.fetch,e.next=14,d(o,{disableTextures:!0});case 14:return b=e.sent,v=(0,c.dp)(b.referenceBoundingBox,(0,s.c)()),e.abrupt("return",(f.put(o,v),v));case 17:if(null!==(u=r.resource)&&void 0!==u&&u.primitive){e.next=19;break}throw new a.Z("symbol:invalid-resource","The symbol does not have a valid resource");case 19:if(m=(0,c.Ue)((0,l.Uz)(r.resource.primitive)),null!=i)for(y=0;y<m.length;y++)m[y]*=i;return e.abrupt("return",(0,c.dp)(m,(0,s.c)()));case 22:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}}}]);
//# sourceMappingURL=3657.47a4f1a8.chunk.js.map