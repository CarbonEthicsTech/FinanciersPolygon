"use strict";(self.webpackChunkgis_dashboard=self.webpackChunkgis_dashboard||[]).push([[172],{21134:function(e,t,o){o.d(t,{Z:function(){return j}});var r,n=o(1413),i=o(15671),l=o(43144),s=o(60136),u=o(29388),p=o(27366),a=o(84652),d=o(49861),c=o(25243),y=o(27135),f=o(69912),v=o(2632),b=o(87125),h=o(51995),Z=o(46784),C=r=function(e){(0,s.Z)(o,e);var t=(0,u.Z)(o);function o(){var e;return(0,i.Z)(this,o),(e=t.apply(this,arguments)).description=null,e.label=null,e.minValue=0,e.maxValue=0,e.color=null,e}return(0,l.Z)(o,[{key:"clone",value:function(){return new r({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,a.d9)(this.color)})}}]),o}(Z.wq);(0,p._)([(0,d.Cb)({type:String,json:{write:!0}})],C.prototype,"description",void 0),(0,p._)([(0,d.Cb)({type:String,json:{write:!0}})],C.prototype,"label",void 0),(0,p._)([(0,d.Cb)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],C.prototype,"minValue",void 0),(0,p._)([(0,d.Cb)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],C.prototype,"maxValue",void 0),(0,p._)([(0,d.Cb)({type:h.Z,json:{type:[c.z8],write:!0}})],C.prototype,"color",void 0);var w,m=C=r=(0,p._)([(0,f.j)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],C),_=w=function(e){(0,s.Z)(o,e);var t=(0,u.Z)(o);function o(e){var r;return(0,i.Z)(this,o),(r=t.call(this,e)).type="point-cloud-class-breaks",r.field=null,r.legendOptions=null,r.fieldTransformType=null,r.colorClassBreakInfos=null,r}return(0,l.Z)(o,[{key:"clone",value:function(){return new w((0,n.Z)((0,n.Z)({},this.cloneProperties()),{},{field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,a.d9)(this.colorClassBreakInfos),legendOptions:(0,a.d9)(this.legendOptions)}))}}]),o}(v.Z);(0,p._)([(0,y.J)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],_.prototype,"type",void 0),(0,p._)([(0,d.Cb)({json:{write:!0},type:String})],_.prototype,"field",void 0),(0,p._)([(0,d.Cb)({type:b.I,json:{write:!0}})],_.prototype,"legendOptions",void 0),(0,p._)([(0,d.Cb)({type:v.Z.fieldTransformTypeKebabDict.apiValues,json:{type:v.Z.fieldTransformTypeKebabDict.jsonValues,read:v.Z.fieldTransformTypeKebabDict.read,write:v.Z.fieldTransformTypeKebabDict.write}})],_.prototype,"fieldTransformType",void 0),(0,p._)([(0,d.Cb)({type:[m],json:{write:!0}})],_.prototype,"colorClassBreakInfos",void 0);var j=_=w=(0,p._)([(0,f.j)("esri.renderers.PointCloudClassBreaksRenderer")],_)},2632:function(e,t,o){o.d(t,{Z:function(){return k}});var r,n=o(15671),i=o(43144),l=o(60136),s=o(29388),u=o(27366),p=o(43404),a=o(46784),d=o(84652),c=o(49861),y=(o(25243),o(69912)),f=(o(63780),o(93169),r=function(e){(0,l.Z)(o,e);var t=(0,s.Z)(o);function o(){var e;return(0,n.Z)(this,o),(e=t.apply(this,arguments)).field=null,e.minValue=0,e.maxValue=255,e}return(0,i.Z)(o,[{key:"clone",value:function(){return new r({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}}]),o}(a.wq));(0,u._)([(0,c.Cb)({type:String,json:{write:!0}})],f.prototype,"field",void 0),(0,u._)([(0,c.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],f.prototype,"minValue",void 0),(0,u._)([(0,c.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],f.prototype,"maxValue",void 0);var v=f=r=(0,u._)([(0,y.j)("esri.renderers.support.pointCloud.ColorModulation")],f),b=new p.X({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"}),h=function(e){(0,l.Z)(o,e);var t=(0,s.Z)(o);function o(){return(0,n.Z)(this,o),t.apply(this,arguments)}return(0,i.Z)(o)}(a.wq);(0,u._)([(0,c.Cb)({type:b.apiValues,readOnly:!0,nonNullable:!0,json:{type:b.jsonValues,read:!1,write:b.write}})],h.prototype,"type",void 0);var Z,C=h=(0,u._)([(0,y.j)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],h),w=o(27135),m=Z=function(e){(0,l.Z)(o,e);var t=(0,s.Z)(o);function o(){var e;return(0,n.Z)(this,o),(e=t.apply(this,arguments)).type="fixed-size",e.size=0,e.useRealWorldSymbolSizes=null,e}return(0,i.Z)(o,[{key:"clone",value:function(){return new Z({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}}]),o}(C);(0,u._)([(0,w.J)({pointCloudFixedSizeAlgorithm:"fixed-size"})],m.prototype,"type",void 0),(0,u._)([(0,c.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],m.prototype,"size",void 0),(0,u._)([(0,c.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"useRealWorldSymbolSizes",void 0);var _,j=m=Z=(0,u._)([(0,y.j)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],m),T=_=function(e){(0,l.Z)(o,e);var t=(0,s.Z)(o);function o(){var e;return(0,n.Z)(this,o),(e=t.apply(this,arguments)).type="splat",e.scaleFactor=1,e}return(0,i.Z)(o,[{key:"clone",value:function(){return new _({scaleFactor:this.scaleFactor})}}]),o}(C);(0,u._)([(0,w.J)({pointCloudSplatAlgorithm:"splat"})],T.prototype,"type",void 0),(0,u._)([(0,c.Cb)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],T.prototype,"scaleFactor",void 0);var g={key:"type",base:C,typeMap:{"fixed-size":j,splat:T=_=(0,u._)([(0,y.j)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],T)}},V=(0,p.w)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"}),S=function(e){(0,l.Z)(o,e);var t=(0,s.Z)(o);function o(e){var r;return(0,n.Z)(this,o),(r=t.call(this,e)).type=void 0,r.pointSizeAlgorithm=null,r.colorModulation=null,r.pointsPerInch=10,r}return(0,i.Z)(o,[{key:"clone",value:function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}},{key:"cloneProperties",value:function(){return{pointSizeAlgorithm:(0,d.d9)(this.pointSizeAlgorithm),colorModulation:(0,d.d9)(this.colorModulation),pointsPerInch:(0,d.d9)(this.pointsPerInch)}}}]),o}(a.wq);(0,u._)([(0,c.Cb)({type:V.apiValues,readOnly:!0,nonNullable:!0,json:{type:V.jsonValues,read:!1,write:V.write}})],S.prototype,"type",void 0),(0,u._)([(0,c.Cb)({types:g,json:{write:!0}})],S.prototype,"pointSizeAlgorithm",void 0),(0,u._)([(0,c.Cb)({type:v,json:{write:!0}})],S.prototype,"colorModulation",void 0),(0,u._)([(0,c.Cb)({json:{write:!0},nonNullable:!0,type:Number})],S.prototype,"pointsPerInch",void 0),S=(0,u._)([(0,y.j)("esri.renderers.PointCloudRenderer")],S),(S||(S={})).fieldTransformTypeKebabDict=new p.X({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});var k=S},89431:function(e,t,o){o.d(t,{Z:function(){return Z}});var r,n=o(1413),i=o(15671),l=o(43144),s=o(60136),u=o(29388),p=o(27366),a=o(84652),d=o(49861),c=(o(25243),o(27135)),y=o(69912),f=o(2632),v=o(87125),b=o(57203),h=r=function(e){(0,s.Z)(o,e);var t=(0,u.Z)(o);function o(e){var r;return(0,i.Z)(this,o),(r=t.call(this,e)).type="point-cloud-stretch",r.field=null,r.legendOptions=null,r.fieldTransformType=null,r.stops=null,r}return(0,l.Z)(o,[{key:"clone",value:function(){return new r((0,n.Z)((0,n.Z)({},this.cloneProperties()),{},{field:(0,a.d9)(this.field),fieldTransformType:(0,a.d9)(this.fieldTransformType),stops:(0,a.d9)(this.stops),legendOptions:(0,a.d9)(this.legendOptions)}))}}]),o}(f.Z);(0,p._)([(0,c.J)({pointCloudStretchRenderer:"point-cloud-stretch"})],h.prototype,"type",void 0),(0,p._)([(0,d.Cb)({json:{write:!0},type:String})],h.prototype,"field",void 0),(0,p._)([(0,d.Cb)({type:v.I,json:{write:!0}})],h.prototype,"legendOptions",void 0),(0,p._)([(0,d.Cb)({type:f.Z.fieldTransformTypeKebabDict.apiValues,json:{type:f.Z.fieldTransformTypeKebabDict.jsonValues,read:f.Z.fieldTransformTypeKebabDict.read,write:f.Z.fieldTransformTypeKebabDict.write}})],h.prototype,"fieldTransformType",void 0),(0,p._)([(0,d.Cb)({type:[b.Z],json:{write:!0}})],h.prototype,"stops",void 0);var Z=h=r=(0,p._)([(0,y.j)("esri.renderers.PointCloudStretchRenderer")],h)},87005:function(e,t,o){o.d(t,{Z:function(){return j}});var r,n=o(1413),i=o(15671),l=o(43144),s=o(60136),u=o(29388),p=o(27366),a=o(84652),d=o(49861),c=o(25243),y=o(27135),f=o(69912),v=o(2632),b=o(87125),h=o(51995),Z=o(46784),C=r=function(e){(0,s.Z)(o,e);var t=(0,u.Z)(o);function o(){var e;return(0,i.Z)(this,o),(e=t.apply(this,arguments)).description=null,e.label=null,e.values=null,e.color=null,e}return(0,l.Z)(o,[{key:"clone",value:function(){return new r({description:this.description,label:this.label,values:(0,a.d9)(this.values),color:(0,a.d9)(this.color)})}}]),o}(Z.wq);(0,p._)([(0,d.Cb)({type:String,json:{write:!0}})],C.prototype,"description",void 0),(0,p._)([(0,d.Cb)({type:String,json:{write:!0}})],C.prototype,"label",void 0),(0,p._)([(0,d.Cb)({type:[String],json:{write:!0}})],C.prototype,"values",void 0),(0,p._)([(0,d.Cb)({type:h.Z,json:{type:[c.z8],write:!0}})],C.prototype,"color",void 0);var w,m=C=r=(0,p._)([(0,f.j)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],C),_=w=function(e){(0,s.Z)(o,e);var t=(0,u.Z)(o);function o(e){var r;return(0,i.Z)(this,o),(r=t.call(this,e)).type="point-cloud-unique-value",r.field=null,r.fieldTransformType=null,r.colorUniqueValueInfos=null,r.legendOptions=null,r}return(0,l.Z)(o,[{key:"clone",value:function(){return new w((0,n.Z)((0,n.Z)({},this.cloneProperties()),{},{field:(0,a.d9)(this.field),fieldTransformType:(0,a.d9)(this.fieldTransformType),colorUniqueValueInfos:(0,a.d9)(this.colorUniqueValueInfos),legendOptions:(0,a.d9)(this.legendOptions)}))}}]),o}(v.Z);(0,p._)([(0,y.J)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],_.prototype,"type",void 0),(0,p._)([(0,d.Cb)({json:{write:!0},type:String})],_.prototype,"field",void 0),(0,p._)([(0,d.Cb)({type:v.Z.fieldTransformTypeKebabDict.apiValues,json:{type:v.Z.fieldTransformTypeKebabDict.jsonValues,read:v.Z.fieldTransformTypeKebabDict.read,write:v.Z.fieldTransformTypeKebabDict.write}})],_.prototype,"fieldTransformType",void 0),(0,p._)([(0,d.Cb)({type:[m],json:{write:!0}})],_.prototype,"colorUniqueValueInfos",void 0),(0,p._)([(0,d.Cb)({type:b.I,json:{write:!0}})],_.prototype,"legendOptions",void 0);var j=_=w=(0,p._)([(0,f.j)("esri.renderers.PointCloudUniqueValueRenderer")],_)},87125:function(e,t,o){o.d(t,{I:function(){return c}});var r,n=o(15671),i=o(43144),l=o(60136),s=o(29388),u=o(27366),p=o(46784),a=o(49861),d=(o(25243),o(63780),o(93169),o(69912)),c=r=function(e){(0,l.Z)(o,e);var t=(0,s.Z)(o);function o(){var e;return(0,n.Z)(this,o),(e=t.apply(this,arguments)).title=null,e}return(0,i.Z)(o,[{key:"clone",value:function(){return new r({title:this.title})}}]),o}(p.wq);(0,u._)([(0,a.Cb)({type:String,json:{write:!0}})],c.prototype,"title",void 0),c=r=(0,u._)([(0,d.j)("esri.renderers.support.LegendOptions")],c)},57203:function(e,t,o){o.d(t,{Z:function(){return b}});var r,n=o(15671),i=o(43144),l=o(60136),s=o(29388),u=o(27366),p=o(51995),a=o(46784),d=o(49861),c=o(25243),y=(o(63780),o(93169),o(69912)),f=o(31201),v=r=function(e){(0,l.Z)(o,e);var t=(0,s.Z)(o);function o(e){var r;return(0,n.Z)(this,o),(r=t.call(this,e)).color=null,r.label=null,r.value=null,r}return(0,i.Z)(o,[{key:"writeValue",value:function(e,t,o){t[o]=null!==e&&void 0!==e?e:0}},{key:"clone",value:function(){return new r({color:this.color&&this.color.clone(),label:this.label,value:this.value})}}]),o}(a.wq);(0,u._)([(0,d.Cb)({type:p.Z,json:{type:[c.z8],write:!0}})],v.prototype,"color",void 0),(0,u._)([(0,d.Cb)({type:String,json:{write:!0}})],v.prototype,"label",void 0),(0,u._)([(0,d.Cb)({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],v.prototype,"value",void 0),(0,u._)([(0,f.c)("value")],v.prototype,"writeValue",null);var b=v=r=(0,u._)([(0,y.j)("esri.renderers.visualVariables.support.ColorStop")],v)}}]);
//# sourceMappingURL=172.8fe1e4cc.chunk.js.map