(self.webpackChunkspear=self.webpackChunkspear||[]).push([[8023,7924,3770,9735,9935,7590,3389,9464,77,8992,2919,3119,4666,1504,9363,8905,4802,416,8085,5115,6866,8358,1256,691,7054,8441,5158,583,9317,5890,3893,8059,7280,515,9380,6344,7387,8403,6833,7322,6847,792,8547],{78023:(w,y,c)=>{c.r(y),c.d(y,{BasePortalHost:()=>N,BasePortalOutlet:()=>O,CdkPortal:()=>F,CdkPortalOutlet:()=>j,ComponentPortal:()=>b,DomPortal:()=>I,DomPortalHost:()=>H,DomPortalOutlet:()=>T,Portal:()=>R,PortalHostDirective:()=>x,PortalInjector:()=>L,PortalModule:()=>U,TemplatePortal:()=>M,TemplatePortalDirective:()=>B});var _=c(97326),h=c(73237),d=c(61120),u=c(60136),v=c(18486),p=c(15671),m=c(43144),s=c(56718),Z=c(94055),R=function(){function e(){(0,p.Z)(this,e)}return(0,m.Z)(e,[{key:"attach",value:function(t){return this._attachedHost=t,t.attach(this)}},{key:"detach",value:function(){var t=this._attachedHost;null!=t&&(this._attachedHost=null,t.detach())}},{key:"isAttached",get:function(){return null!=this._attachedHost}},{key:"setAttachedHost",value:function(t){this._attachedHost=t}}]),e}(),b=function(e){(0,u.Z)(t,e);var r=(0,v.Z)(t);function t(o,n,i,P,l){var a;return(0,p.Z)(this,t),(a=r.call(this)).component=o,a.viewContainerRef=n,a.injector=i,a.componentFactoryResolver=P,a.projectableNodes=l,a}return(0,m.Z)(t)}(R),M=function(e){(0,u.Z)(t,e);var r=(0,v.Z)(t);function t(o,n,i,P){var l;return(0,p.Z)(this,t),(l=r.call(this)).templateRef=o,l.viewContainerRef=n,l.context=i,l.injector=P,l}return(0,m.Z)(t,[{key:"origin",get:function(){return this.templateRef.elementRef}},{key:"attach",value:function(n){return this.context=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.context,(0,h.Z)((0,d.Z)(t.prototype),"attach",this).call(this,n)}},{key:"detach",value:function(){return this.context=void 0,(0,h.Z)((0,d.Z)(t.prototype),"detach",this).call(this)}}]),t}(R),I=function(e){(0,u.Z)(t,e);var r=(0,v.Z)(t);function t(o){var n;return(0,p.Z)(this,t),(n=r.call(this)).element=o instanceof s.ElementRef?o.nativeElement:o,n}return(0,m.Z)(t)}(R),O=function(){function e(){(0,p.Z)(this,e),this._isDisposed=!1,this.attachDomPortal=null}return(0,m.Z)(e,[{key:"hasAttached",value:function(){return!!this._attachedPortal}},{key:"attach",value:function(t){return t instanceof b?(this._attachedPortal=t,this.attachComponentPortal(t)):t instanceof M?(this._attachedPortal=t,this.attachTemplatePortal(t)):this.attachDomPortal&&t instanceof I?(this._attachedPortal=t,this.attachDomPortal(t)):void 0}},{key:"detach",value:function(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}},{key:"dispose",value:function(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}},{key:"setDisposeFn",value:function(t){this._disposeFn=t}},{key:"_invokeDisposeFn",value:function(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}}]),e}(),N=function(e){(0,u.Z)(t,e);var r=(0,v.Z)(t);function t(){return(0,p.Z)(this,t),r.apply(this,arguments)}return(0,m.Z)(t)}(O),T=function(e){(0,u.Z)(t,e);var r=(0,v.Z)(t);function t(o,n,i,P,l){var a,f;return(0,p.Z)(this,t),(f=r.call(this)).outletElement=o,f._componentFactoryResolver=n,f._appRef=i,f._defaultInjector=P,f.attachDomPortal=function(g){var D=g.element,C=f._document.createComment("dom-portal");D.parentNode.insertBefore(C,D),f.outletElement.appendChild(D),f._attachedPortal=g,(0,h.Z)((a=(0,_.Z)(f),(0,d.Z)(t.prototype)),"setDisposeFn",a).call(a,function(){C.parentNode&&C.parentNode.replaceChild(D,C)})},f._document=l,f}return(0,m.Z)(t,[{key:"attachComponentPortal",value:function(n){var a,i=this,l=(n.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(n.component);return n.viewContainerRef?(a=n.viewContainerRef.createComponent(l,n.viewContainerRef.length,n.injector||n.viewContainerRef.injector,n.projectableNodes||void 0),this.setDisposeFn(function(){return a.destroy()})):(a=l.create(n.injector||this._defaultInjector||s.Injector.NULL),this._appRef.attachView(a.hostView),this.setDisposeFn(function(){i._appRef.viewCount>0&&i._appRef.detachView(a.hostView),a.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(a)),this._attachedPortal=n,a}},{key:"attachTemplatePortal",value:function(n){var i=this,P=n.viewContainerRef,l=P.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return l.rootNodes.forEach(function(a){return i.outletElement.appendChild(a)}),l.detectChanges(),this.setDisposeFn(function(){var a=P.indexOf(l);-1!==a&&P.remove(a)}),this._attachedPortal=n,l}},{key:"dispose",value:function(){(0,h.Z)((0,d.Z)(t.prototype),"dispose",this).call(this),this.outletElement.remove()}},{key:"_getComponentRootNode",value:function(n){return n.hostView.rootNodes[0]}}]),t}(O),H=function(e){(0,u.Z)(t,e);var r=(0,v.Z)(t);function t(){return(0,p.Z)(this,t),r.apply(this,arguments)}return(0,m.Z)(t)}(T),F=function(){var e=function(r){(0,u.Z)(o,r);var t=(0,v.Z)(o);function o(n,i){return(0,p.Z)(this,o),t.call(this,n,i)}return(0,m.Z)(o)}(M);return e.\u0275fac=function(t){return new(t||e)(s.\u0275\u0275directiveInject(s.TemplateRef),s.\u0275\u0275directiveInject(s.ViewContainerRef))},e.\u0275dir=s.\u0275\u0275defineDirective({type:e,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[s.\u0275\u0275InheritDefinitionFeature]}),e}(),B=function(){var e=function(r){(0,u.Z)(o,r);var t=(0,v.Z)(o);function o(){return(0,p.Z)(this,o),t.apply(this,arguments)}return(0,m.Z)(o)}(F);return e.\u0275fac=function(){var r;return function(o){return(r||(r=s.\u0275\u0275getInheritedFactory(e)))(o||e)}}(),e.\u0275dir=s.\u0275\u0275defineDirective({type:e,selectors:[["","cdk-portal",""],["","portal",""]],exportAs:["cdkPortal"],features:[s.\u0275\u0275ProvidersFeature([{provide:F,useExisting:e}]),s.\u0275\u0275InheritDefinitionFeature]}),e}(),j=function(){var e=function(r){(0,u.Z)(o,r);var t=(0,v.Z)(o);function o(n,i,P){var l,a;return(0,p.Z)(this,o),(a=t.call(this))._componentFactoryResolver=n,a._viewContainerRef=i,a._isInitialized=!1,a.attached=new s.EventEmitter,a.attachDomPortal=function(f){var g=f.element,D=a._document.createComment("dom-portal");f.setAttachedHost((0,_.Z)(a)),g.parentNode.insertBefore(D,g),a._getRootNode().appendChild(g),a._attachedPortal=f,(0,h.Z)((l=(0,_.Z)(a),(0,d.Z)(o.prototype)),"setDisposeFn",l).call(l,function(){D.parentNode&&D.parentNode.replaceChild(g,D)})},a._document=P,a}return(0,m.Z)(o,[{key:"portal",get:function(){return this._attachedPortal},set:function(i){this.hasAttached()&&!i&&!this._isInitialized||(this.hasAttached()&&(0,h.Z)((0,d.Z)(o.prototype),"detach",this).call(this),i&&(0,h.Z)((0,d.Z)(o.prototype),"attach",this).call(this,i),this._attachedPortal=i||null)}},{key:"attachedRef",get:function(){return this._attachedRef}},{key:"ngOnInit",value:function(){this._isInitialized=!0}},{key:"ngOnDestroy",value:function(){(0,h.Z)((0,d.Z)(o.prototype),"dispose",this).call(this),this._attachedRef=this._attachedPortal=null}},{key:"attachComponentPortal",value:function(i){i.setAttachedHost(this);var P=null!=i.viewContainerRef?i.viewContainerRef:this._viewContainerRef,a=(i.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(i.component),f=P.createComponent(a,P.length,i.injector||P.injector,i.projectableNodes||void 0);return P!==this._viewContainerRef&&this._getRootNode().appendChild(f.hostView.rootNodes[0]),(0,h.Z)((0,d.Z)(o.prototype),"setDisposeFn",this).call(this,function(){return f.destroy()}),this._attachedPortal=i,this._attachedRef=f,this.attached.emit(f),f}},{key:"attachTemplatePortal",value:function(i){var P=this;i.setAttachedHost(this);var l=this._viewContainerRef.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return(0,h.Z)((0,d.Z)(o.prototype),"setDisposeFn",this).call(this,function(){return P._viewContainerRef.clear()}),this._attachedPortal=i,this._attachedRef=l,this.attached.emit(l),l}},{key:"_getRootNode",value:function(){var i=this._viewContainerRef.element.nativeElement;return i.nodeType===i.ELEMENT_NODE?i:i.parentNode}}]),o}(O);return e.\u0275fac=function(t){return new(t||e)(s.\u0275\u0275directiveInject(s.ComponentFactoryResolver),s.\u0275\u0275directiveInject(s.ViewContainerRef),s.\u0275\u0275directiveInject(Z.DOCUMENT))},e.\u0275dir=s.\u0275\u0275defineDirective({type:e,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:["cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[s.\u0275\u0275InheritDefinitionFeature]}),e}(),x=function(){var e=function(r){(0,u.Z)(o,r);var t=(0,v.Z)(o);function o(){return(0,p.Z)(this,o),t.apply(this,arguments)}return(0,m.Z)(o)}(j);return e.\u0275fac=function(){var r;return function(o){return(r||(r=s.\u0275\u0275getInheritedFactory(e)))(o||e)}}(),e.\u0275dir=s.\u0275\u0275defineDirective({type:e,selectors:[["","cdkPortalHost",""],["","portalHost",""]],inputs:{portal:["cdkPortalHost","portal"]},exportAs:["cdkPortalHost"],features:[s.\u0275\u0275ProvidersFeature([{provide:j,useExisting:e}]),s.\u0275\u0275InheritDefinitionFeature]}),e}(),U=function(){var e=(0,m.Z)(function r(){(0,p.Z)(this,r)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=s.\u0275\u0275defineInjector({}),e}(),L=function(){function e(r,t){(0,p.Z)(this,e),this._parentInjector=r,this._customTokens=t}return(0,m.Z)(e,[{key:"get",value:function(t,o){var n=this._customTokens.get(t);return typeof n<"u"?n:this._parentInjector.get(t,o)}}]),e}()},97326:(w,y,c)=>{function _(h){if(void 0===h)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return h}c.d(y,{Z:()=>_})},18486:(w,y,c)=>{c.d(y,{Z:()=>p});var _=c(61120),h=c(78814),d=c(71002),u=c(97326);function p(m){var s=(0,h.Z)();return function(){var E,k=(0,_.Z)(m);if(s){var A=(0,_.Z)(this).constructor;E=Reflect.construct(k,arguments,A)}else E=k.apply(this,arguments);return function v(m,s){if(s&&("object"===(0,d.Z)(s)||"function"==typeof s))return s;if(void 0!==s)throw new TypeError("Derived constructors may only return object or undefined");return(0,u.Z)(m)}(this,E)}}},73237:(w,y,c)=>{c.d(y,{Z:()=>d});var _=c(61120);function d(){return d=typeof Reflect<"u"&&Reflect.get?Reflect.get.bind():function(v,p,m){var s=function h(u,v){for(;!Object.prototype.hasOwnProperty.call(u,v)&&null!==(u=(0,_.Z)(u)););return u}(v,p);if(s){var Z=Object.getOwnPropertyDescriptor(s,p);return Z.get?Z.get.call(arguments.length<3?v:m):Z.value}},d.apply(this,arguments)}},61120:(w,y,c)=>{function _(h){return(_=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)})(h)}c.d(y,{Z:()=>_})},60136:(w,y,c)=>{c.d(y,{Z:()=>h});var _=c(89611);function h(d,u){if("function"!=typeof u&&null!==u)throw new TypeError("Super expression must either be null or a function");d.prototype=Object.create(u&&u.prototype,{constructor:{value:d,writable:!0,configurable:!0}}),Object.defineProperty(d,"prototype",{writable:!1}),u&&(0,_.Z)(d,u)}},78814:(w,y,c)=>{function _(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}c.d(y,{Z:()=>_})},89611:(w,y,c)=>{function _(h,d){return(_=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(v,p){return v.__proto__=p,v})(h,d)}c.d(y,{Z:()=>_})}}]);