(self.webpackChunkspear=self.webpackChunkspear||[]).push([[9684],{4707:(B,E,t)=>{t.d(E,{t:()=>h});var y=t(15671),R=t(43144),w=t(73237),m=t(61120),I=t(60136),d=t(18486),v=t(77579),c=t(26063),h=function(k){(0,I.Z)(D,k);var i=(0,d.Z)(D);function D(){var S,M=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1/0,p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0,f=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c.l;return(0,y.Z)(this,D),(S=i.call(this))._bufferSize=M,S._windowTime=p,S._timestampProvider=f,S._buffer=[],S._infiniteTimeWindow=!0,S._infiniteTimeWindow=p===1/0,S._bufferSize=Math.max(1,M),S._windowTime=Math.max(1,p),S}return(0,R.Z)(D,[{key:"next",value:function(M){var f=this._buffer,O=this._infiniteTimeWindow,T=this._timestampProvider,_=this._windowTime;this.isStopped||(f.push(M),!O&&f.push(T.now()+_)),this._trimBuffer(),(0,w.Z)((0,m.Z)(D.prototype),"next",this).call(this,M)}},{key:"_subscribe",value:function(M){this._throwIfClosed(),this._trimBuffer();for(var p=this._innerSubscribe(M),f=this._infiniteTimeWindow,T=this._buffer.slice(),_=0;_<T.length&&!M.closed;_+=f?1:2)M.next(T[_]);return this._checkFinalizedStatuses(M),p}},{key:"_trimBuffer",value:function(){var M=this._bufferSize,p=this._timestampProvider,f=this._buffer,O=this._infiniteTimeWindow,T=(O?1:2)*M;if(M<1/0&&T<f.length&&f.splice(0,f.length-T),!O){for(var _=p.now(),V=0,A=1;A<f.length&&f[A]<=_;A+=2)V=A;V&&f.splice(0,V+1)}}}]),D}(v.x)},97272:(B,E,t)=>{t.d(E,{z:()=>I});var y=t(8189),w=t(63269),m=t(50457);function I(){for(var d=arguments.length,v=new Array(d),c=0;c<d;c++)v[c]=arguments[c];return function R(){return(0,y.J)(1)}()((0,m.D)(v,(0,w.yG)(v)))}},54968:(B,E,t)=>{t.d(E,{R:()=>i});var y=t(97685),R=t(38421),w=t(69751),m=t(95577),I=t(81144),d=t(30576),v=t(83268),c=["addListener","removeListener"],h=["addEventListener","removeEventListener"],k=["on","off"];function i(f,O,T,_){if((0,d.m)(T)&&(_=T,T=void 0),_)return i(f,O,T).pipe((0,v.Z)(_));var V=function p(f){return(0,d.m)(f.addEventListener)&&(0,d.m)(f.removeEventListener)}(f)?h.map(function(b){return function(K){return f[b](O,K,T)}}):function S(f){return(0,d.m)(f.addListener)&&(0,d.m)(f.removeListener)}(f)?c.map(D(f,O)):function M(f){return(0,d.m)(f.on)&&(0,d.m)(f.off)}(f)?k.map(D(f,O)):[],A=(0,y.Z)(V,2),L=A[0],z=A[1];if(!L&&(0,I.z)(f))return(0,m.z)(function(b){return i(b,O,T)})((0,R.Xf)(f));if(!L)throw new TypeError("Invalid event target");return new w.y(function(b){var K=function(){for(var W=arguments.length,Z=new Array(W),j=0;j<W;j++)Z[j]=arguments[j];return b.next(1<Z.length?Z:Z[0])};return L(K),function(){return z(K)}})}function D(f,O){return function(T){return function(_){return f[T](O,_)}}}},23601:(B,E,t)=>{t.d(E,{e:()=>v});var y=t(34986),R=t(54482),w=t(38421),m=t(25403),d=t(82805);function v(c){var h=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y.z;return function I(c){return(0,R.e)(function(h,k){var i=!1,D=null,S=null,M=!1,p=function(){if(S?.unsubscribe(),S=null,i){i=!1;var T=D;D=null,k.next(T)}M&&k.complete()},f=function(){S=null,M&&k.complete()};h.subscribe((0,m.x)(k,function(O){i=!0,D=O,S||(0,w.Xf)(c(O)).subscribe(S=(0,m.x)(k,p,f))},function(){M=!0,(!i||!S||S.closed)&&k.complete()}))})}(function(){return(0,d.H)(c,h)})}},71884:(B,E,t)=>{t.d(E,{x:()=>m});var y=t(44671),R=t(54482),w=t(25403);function m(d){var v=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y.y;return d=d??I,(0,R.e)(function(c,h){var k,i=!0;c.subscribe((0,w.x)(h,function(D){var S=v(D);(i||!d(k,S))&&(i=!1,k=S,h.next(D))}))})}function I(d,v){return d===v}},39300:(B,E,t)=>{t.d(E,{h:()=>w});var y=t(54482),R=t(25403);function w(m,I){return(0,y.e)(function(d,v){var c=0;d.subscribe((0,R.x)(v,function(h){return m.call(I,h,c++)&&v.next(h)}))})}},54004:(B,E,t)=>{t.d(E,{U:()=>w});var y=t(54482),R=t(25403);function w(m,I){return(0,y.e)(function(d,v){var c=0;d.subscribe((0,R.x)(v,function(h){v.next(m.call(I,h,c++))}))})}},8189:(B,E,t)=>{t.d(E,{J:()=>w});var y=t(95577),R=t(44671);function w(){return(0,y.z)(R.y,arguments.length>0&&void 0!==arguments[0]?arguments[0]:1/0)}},34782:(B,E,t)=>{t.d(E,{d:()=>w});var y=t(4707),R=t(13099);function w(m,I,d){var v,c=!1;if(m&&"object"==typeof m){var h=m.bufferSize;v=void 0===h?1/0:h;var k=m.windowTime;I=void 0===k?1/0:k;var i=m.refCount;c=void 0!==i&&i,d=m.scheduler}else v=m??1/0;return(0,R.B)({connector:function(){return new y.t(v,I,d)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:c})}},68675:(B,E,t)=>{t.d(E,{O:()=>m});var y=t(97272),R=t(63269),w=t(54482);function m(){for(var I=arguments.length,d=new Array(I),v=0;v<I;v++)d[v]=arguments[v];var c=(0,R.yG)(d);return(0,w.e)(function(h,k){(c?(0,y.z)(d,h,c):(0,y.z)(d,h)).subscribe(k)})}},63900:(B,E,t)=>{t.d(E,{w:()=>m});var y=t(38421),R=t(54482),w=t(25403);function m(I,d){return(0,R.e)(function(v,c){var h=null,k=0,i=!1,D=function(){return i&&!h&&c.complete()};v.subscribe((0,w.x)(c,function(S){h?.unsubscribe();var M=0,p=k++;(0,y.Xf)(I(S,p)).subscribe(h=(0,w.x)(c,function(f){return c.next(d?d(S,f,p,M++):f)},function(){h=null,D()}))},function(){i=!0,D()}))})}},82722:(B,E,t)=>{t.d(E,{R:()=>I});var y=t(54482),R=t(25403),w=t(38421),m=t(25032);function I(d){return(0,y.e)(function(v,c){(0,w.Xf)(d).subscribe((0,R.x)(c,function(){return c.complete()},m.Z)),!c.closed&&v.subscribe(c)})}},66406:(B,E,t)=>{t.d(E,{Z:()=>S});var y=t(15671),R=t(43144),w=t(73237),m=t(61120),I=t(60136),d=t(18486),v=t(84408),c=t(50727),h={schedule:function(f){var O=requestAnimationFrame,T=cancelAnimationFrame,_=h.delegate;_&&(O=_.requestAnimationFrame,T=_.cancelAnimationFrame);var V=O(function(A){T=void 0,f(A)});return new c.w0(function(){return T?.(V)})},requestAnimationFrame:function(p){function f(){return p.apply(this,arguments)}return f.toString=function(){return p.toString()},f}(function(){var p=h.delegate;return(p?.requestAnimationFrame||requestAnimationFrame).apply(void 0,arguments)}),cancelAnimationFrame:function(p){function f(){return p.apply(this,arguments)}return f.toString=function(){return p.toString()},f}(function(){var p=h.delegate;return(p?.cancelAnimationFrame||cancelAnimationFrame).apply(void 0,arguments)}),delegate:void 0},k=function(p){(0,I.Z)(O,p);var f=(0,d.Z)(O);function O(T,_){var V;return(0,y.Z)(this,O),(V=f.call(this,T,_)).scheduler=T,V.work=_,V}return(0,R.Z)(O,[{key:"requestAsyncId",value:function(_,V){var A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return null!==A&&A>0?(0,w.Z)((0,m.Z)(O.prototype),"requestAsyncId",this).call(this,_,V,A):(_.actions.push(this),_._scheduled||(_._scheduled=h.requestAnimationFrame(function(){return _.flush(void 0)})))}},{key:"recycleAsyncId",value:function(_,V){var L,A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(null!=A?A>0:this.delay>0)return(0,w.Z)((0,m.Z)(O.prototype),"recycleAsyncId",this).call(this,_,V,A);var z=_.actions;null!=V&&(null===(L=z[z.length-1])||void 0===L?void 0:L.id)!==V&&(h.cancelAnimationFrame(V),_._scheduled=void 0)}}]),O}(v.o),S=new(function(p){(0,I.Z)(O,p);var f=(0,d.Z)(O);function O(){return(0,y.Z)(this,O),f.apply(this,arguments)}return(0,R.Z)(O,[{key:"flush",value:function(_){this._active=!0;var V=this._scheduled;this._scheduled=void 0;var L,A=this.actions;_=_||A.shift();do{if(L=_.execute(_.state,_.delay))break}while((_=A[0])&&_.id===V&&A.shift());if(this._active=!1,L){for(;(_=A[0])&&_.id===V&&A.shift();)_.unsubscribe();throw L}}}]),O}(t(97565).v))(k)},53101:(B,E,t)=>{t.d(E,{E:()=>V});var h,y=t(15671),R=t(43144),w=t(73237),m=t(61120),I=t(60136),d=t(18486),v=t(84408),c=1,k={};function i(L){return L in k&&(delete k[L],!0)}var M=function(z){var b=c++;return k[b]=!0,h||(h=Promise.resolve()),h.then(function(){return i(b)&&z()}),b},p=function(z){i(z)},f={setImmediate:function(){var z=f.delegate;return(z?.setImmediate||M).apply(void 0,arguments)},clearImmediate:function(z){var b=f.delegate;return(b?.clearImmediate||p)(z)},delegate:void 0},O=function(L){(0,I.Z)(b,L);var z=(0,d.Z)(b);function b(K,x){var W;return(0,y.Z)(this,b),(W=z.call(this,K,x)).scheduler=K,W.work=x,W}return(0,R.Z)(b,[{key:"requestAsyncId",value:function(x,W){var Z=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return null!==Z&&Z>0?(0,w.Z)((0,m.Z)(b.prototype),"requestAsyncId",this).call(this,x,W,Z):(x.actions.push(this),x._scheduled||(x._scheduled=f.setImmediate(x.flush.bind(x,void 0))))}},{key:"recycleAsyncId",value:function(x,W){var j,Z=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(null!=Z?Z>0:this.delay>0)return(0,w.Z)((0,m.Z)(b.prototype),"recycleAsyncId",this).call(this,x,W,Z);var N=x.actions;null!=W&&(null===(j=N[N.length-1])||void 0===j?void 0:j.id)!==W&&(f.clearImmediate(W),x._scheduled=void 0)}}]),b}(v.o),V=new(function(L){(0,I.Z)(b,L);var z=(0,d.Z)(b);function b(){return(0,y.Z)(this,b),z.apply(this,arguments)}return(0,R.Z)(b,[{key:"flush",value:function(x){this._active=!0;var W=this._scheduled;this._scheduled=void 0;var j,Z=this.actions;x=x||Z.shift();do{if(j=x.execute(x.state,x.delay))break}while((x=Z[0])&&x.id===W&&Z.shift());if(this._active=!1,j){for(;(x=Z[0])&&x.id===W&&Z.shift();)x.unsubscribe();throw j}}}]),b}(t(97565).v))(O)},45191:(B,E,t)=>{t.d(E,{b:()=>w});var y=t(69751),R=t(30576);function w(m){return!!m&&(m instanceof y.y||(0,R.m)(m.lift)&&(0,R.m)(m.subscribe))}},83268:(B,E,t)=>{t.d(E,{Z:()=>I});var y=t(74902),R=t(54004),w=Array.isArray;function I(d){return(0,R.U)(function(v){return function m(d,v){return w(v)?d.apply(void 0,(0,y.Z)(v)):d(v)}(d,v)})}},69684:(B,E,t)=>{t.r(E),t.d(E,{CdkFixedSizeVirtualScroll:()=>ce,CdkScrollable:()=>q,CdkScrollableModule:()=>ee,CdkVirtualForOf:()=>ve,CdkVirtualScrollViewport:()=>le,CdkVirtualScrollable:()=>Q,CdkVirtualScrollableElement:()=>me,CdkVirtualScrollableWindow:()=>ge,DEFAULT_RESIZE_TIME:()=>ae,DEFAULT_SCROLL_TIME:()=>ie,FixedSizeVirtualScrollStrategy:()=>ne,ScrollDispatcher:()=>G,ScrollingModule:()=>_e,VIRTUAL_SCROLLABLE:()=>X,VIRTUAL_SCROLL_STRATEGY:()=>$,ViewportRuler:()=>oe,_fixedSizeVirtualScrollStrategyFactory:()=>re});var y=t(97685),R=t(37762),w=t(97326),m=t(73237),I=t(61120),d=t(60136),v=t(18486),c=t(15671),h=t(43144),k=t(35333),i=t(56718),D=t(77579),S=t(39646),M=t(69751),p=t(54968),f=t(66406),O=t(53101),T=t(50727),_=t(45191),V=t(71884),A=t(23601),L=t(39300),z=t(82722),b=t(68675),K=t(54482),x=t(25403),Z=t(63900),j=t(34782),N=t(23675),te=t(94055),H=t(43068),Y=t(81382),ue=["contentWrapper"],de=["*"],$=new i.InjectionToken("VIRTUAL_SCROLL_STRATEGY"),ne=function(){function l(s,a,e){(0,c.Z)(this,l),this._scrolledIndexChange=new D.x,this.scrolledIndexChange=this._scrolledIndexChange.pipe((0,V.x)()),this._viewport=null,this._itemSize=s,this._minBufferPx=a,this._maxBufferPx=e}return(0,h.Z)(l,[{key:"attach",value:function(a){this._viewport=a,this._updateTotalContentSize(),this._updateRenderedRange()}},{key:"detach",value:function(){this._scrolledIndexChange.complete(),this._viewport=null}},{key:"updateItemAndBufferSize",value:function(a,e,r){this._itemSize=a,this._minBufferPx=e,this._maxBufferPx=r,this._updateTotalContentSize(),this._updateRenderedRange()}},{key:"onContentScrolled",value:function(){this._updateRenderedRange()}},{key:"onDataLengthChanged",value:function(){this._updateTotalContentSize(),this._updateRenderedRange()}},{key:"onContentRendered",value:function(){}},{key:"onRenderedOffsetChanged",value:function(){}},{key:"scrollToIndex",value:function(a,e){this._viewport&&this._viewport.scrollToOffset(a*this._itemSize,e)}},{key:"_updateTotalContentSize",value:function(){this._viewport&&this._viewport.setTotalContentSize(this._viewport.getDataLength()*this._itemSize)}},{key:"_updateRenderedRange",value:function(){if(this._viewport){var a=this._viewport.getRenderedRange(),e={start:a.start,end:a.end},r=this._viewport.getViewportSize(),n=this._viewport.getDataLength(),o=this._viewport.measureScrollOffset(),u=this._itemSize>0?o/this._itemSize:0;if(e.end>n){var C=Math.ceil(r/this._itemSize),P=Math.max(0,Math.min(u,n-C));u!=P&&(u=P,o=P*this._itemSize,e.start=Math.floor(u)),e.end=Math.max(0,Math.min(n,e.start+C))}var F=o-e.start*this._itemSize;if(F<this._minBufferPx&&0!=e.start){var U=Math.ceil((this._maxBufferPx-F)/this._itemSize);e.start=Math.max(0,e.start-U),e.end=Math.min(n,Math.ceil(u+(r+this._minBufferPx)/this._itemSize))}else{var g=e.end*this._itemSize-(o+r);if(g<this._minBufferPx&&e.end!=n){var J=Math.ceil((this._maxBufferPx-g)/this._itemSize);J>0&&(e.end=Math.min(n,e.end+J),e.start=Math.max(0,Math.floor(u-this._minBufferPx/this._itemSize)))}}this._viewport.setRenderedRange(e),this._viewport.setRenderedContentOffset(this._itemSize*e.start),this._scrolledIndexChange.next(Math.floor(u))}}}]),l}();function re(l){return l._scrollStrategy}var ce=function(){var l=function(){function s(){(0,c.Z)(this,s),this._itemSize=20,this._minBufferPx=100,this._maxBufferPx=200,this._scrollStrategy=new ne(this.itemSize,this.minBufferPx,this.maxBufferPx)}return(0,h.Z)(s,[{key:"itemSize",get:function(){return this._itemSize},set:function(e){this._itemSize=(0,k.coerceNumberProperty)(e)}},{key:"minBufferPx",get:function(){return this._minBufferPx},set:function(e){this._minBufferPx=(0,k.coerceNumberProperty)(e)}},{key:"maxBufferPx",get:function(){return this._maxBufferPx},set:function(e){this._maxBufferPx=(0,k.coerceNumberProperty)(e)}},{key:"ngOnChanges",value:function(){this._scrollStrategy.updateItemAndBufferSize(this.itemSize,this.minBufferPx,this.maxBufferPx)}}]),s}();return l.\u0275fac=function(a){return new(a||l)},l.\u0275dir=i.\u0275\u0275defineDirective({type:l,selectors:[["cdk-virtual-scroll-viewport","itemSize",""]],inputs:{itemSize:"itemSize",minBufferPx:"minBufferPx",maxBufferPx:"maxBufferPx"},standalone:!0,features:[i.\u0275\u0275ProvidersFeature([{provide:$,useFactory:re,deps:[(0,i.forwardRef)(function(){return l})]}]),i.\u0275\u0275NgOnChangesFeature]}),l}(),ie=20,G=function(){var l=function(){function s(a,e,r){(0,c.Z)(this,s),this._ngZone=a,this._platform=e,this._scrolled=new D.x,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=r}return(0,h.Z)(s,[{key:"register",value:function(e){var r=this;this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(function(){return r._scrolled.next(e)}))}},{key:"deregister",value:function(e){var r=this.scrollContainers.get(e);r&&(r.unsubscribe(),this.scrollContainers.delete(e))}},{key:"scrolled",value:function(){var e=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie;return this._platform.isBrowser?new M.y(function(n){e._globalSubscription||e._addGlobalListener();var o=r>0?e._scrolled.pipe((0,A.e)(r)).subscribe(n):e._scrolled.subscribe(n);return e._scrolledCount++,function(){o.unsubscribe(),e._scrolledCount--,e._scrolledCount||e._removeGlobalListener()}}):(0,S.of)()}},{key:"ngOnDestroy",value:function(){var e=this;this._removeGlobalListener(),this.scrollContainers.forEach(function(r,n){return e.deregister(n)}),this._scrolled.complete()}},{key:"ancestorScrolled",value:function(e,r){var n=this.getAncestorScrollContainers(e);return this.scrolled(r).pipe((0,L.h)(function(o){return!o||n.indexOf(o)>-1}))}},{key:"getAncestorScrollContainers",value:function(e){var r=this,n=[];return this.scrollContainers.forEach(function(o,u){r._scrollableContainsElement(u,e)&&n.push(u)}),n}},{key:"_getWindow",value:function(){return this._document.defaultView||window}},{key:"_scrollableContainsElement",value:function(e,r){var n=(0,k.coerceElement)(r),o=e.getElementRef().nativeElement;do{if(n==o)return!0}while(n=n.parentElement);return!1}},{key:"_addGlobalListener",value:function(){var e=this;this._globalSubscription=this._ngZone.runOutsideAngular(function(){var r=e._getWindow();return(0,p.R)(r.document,"scroll").subscribe(function(){return e._scrolled.next()})})}},{key:"_removeGlobalListener",value:function(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}}]),s}();return l.\u0275fac=function(a){return new(a||l)(i.\u0275\u0275inject(i.NgZone),i.\u0275\u0275inject(N.Platform),i.\u0275\u0275inject(te.DOCUMENT,8))},l.\u0275prov=i.\u0275\u0275defineInjectable({token:l,factory:l.\u0275fac,providedIn:"root"}),l}(),q=function(){var l=function(){function s(a,e,r,n){var o=this;(0,c.Z)(this,s),this.elementRef=a,this.scrollDispatcher=e,this.ngZone=r,this.dir=n,this._destroyed=new D.x,this._elementScrolled=new M.y(function(u){return o.ngZone.runOutsideAngular(function(){return(0,p.R)(o.elementRef.nativeElement,"scroll").pipe((0,z.R)(o._destroyed)).subscribe(u)})})}return(0,h.Z)(s,[{key:"ngOnInit",value:function(){this.scrollDispatcher.register(this)}},{key:"ngOnDestroy",value:function(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}},{key:"elementScrolled",value:function(){return this._elementScrolled}},{key:"getElementRef",value:function(){return this.elementRef}},{key:"scrollTo",value:function(e){var r=this.elementRef.nativeElement,n=this.dir&&"rtl"==this.dir.value;null==e.left&&(e.left=n?e.end:e.start),null==e.right&&(e.right=n?e.start:e.end),null!=e.bottom&&(e.top=r.scrollHeight-r.clientHeight-e.bottom),n&&0!=(0,N.getRtlScrollAxisType)()?(null!=e.left&&(e.right=r.scrollWidth-r.clientWidth-e.left),2==(0,N.getRtlScrollAxisType)()?e.left=e.right:1==(0,N.getRtlScrollAxisType)()&&(e.left=e.right?-e.right:e.right)):null!=e.right&&(e.left=r.scrollWidth-r.clientWidth-e.right),this._applyScrollToOptions(e)}},{key:"_applyScrollToOptions",value:function(e){var r=this.elementRef.nativeElement;(0,N.supportsScrollBehavior)()?r.scrollTo(e):(null!=e.top&&(r.scrollTop=e.top),null!=e.left&&(r.scrollLeft=e.left))}},{key:"measureScrollOffset",value:function(e){var r="left",n="right",o=this.elementRef.nativeElement;if("top"==e)return o.scrollTop;if("bottom"==e)return o.scrollHeight-o.clientHeight-o.scrollTop;var u=this.dir&&"rtl"==this.dir.value;return"start"==e?e=u?n:r:"end"==e&&(e=u?r:n),u&&2==(0,N.getRtlScrollAxisType)()?e==r?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:u&&1==(0,N.getRtlScrollAxisType)()?e==r?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==r?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}}]),s}();return l.\u0275fac=function(a){return new(a||l)(i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(G),i.\u0275\u0275directiveInject(i.NgZone),i.\u0275\u0275directiveInject(H.Directionality,8))},l.\u0275dir=i.\u0275\u0275defineDirective({type:l,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]],standalone:!0}),l}(),ae=20,oe=function(){var l=function(){function s(a,e,r){var n=this;(0,c.Z)(this,s),this._platform=a,this._change=new D.x,this._changeListener=function(o){n._change.next(o)},this._document=r,e.runOutsideAngular(function(){if(a.isBrowser){var o=n._getWindow();o.addEventListener("resize",n._changeListener),o.addEventListener("orientationchange",n._changeListener)}n.change().subscribe(function(){return n._viewportSize=null})})}return(0,h.Z)(s,[{key:"ngOnDestroy",value:function(){if(this._platform.isBrowser){var e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}},{key:"getViewportSize",value:function(){this._viewportSize||this._updateViewportSize();var e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}},{key:"getViewportRect",value:function(){var e=this.getViewportScrollPosition(),r=this.getViewportSize(),n=r.width,o=r.height;return{top:e.top,left:e.left,bottom:e.top+o,right:e.left+n,height:o,width:n}}},{key:"getViewportScrollPosition",value:function(){if(!this._platform.isBrowser)return{top:0,left:0};var e=this._document,r=this._getWindow(),n=e.documentElement,o=n.getBoundingClientRect();return{top:-o.top||e.body.scrollTop||r.scrollY||n.scrollTop||0,left:-o.left||e.body.scrollLeft||r.scrollX||n.scrollLeft||0}}},{key:"change",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae;return e>0?this._change.pipe((0,A.e)(e)):this._change}},{key:"_getWindow",value:function(){return this._document.defaultView||window}},{key:"_updateViewportSize",value:function(){var e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}}]),s}();return l.\u0275fac=function(a){return new(a||l)(i.\u0275\u0275inject(N.Platform),i.\u0275\u0275inject(i.NgZone),i.\u0275\u0275inject(te.DOCUMENT,8))},l.\u0275prov=i.\u0275\u0275defineInjectable({token:l,factory:l.\u0275fac,providedIn:"root"}),l}(),X=new i.InjectionToken("VIRTUAL_SCROLLABLE"),Q=function(){var l=function(s){(0,d.Z)(e,s);var a=(0,v.Z)(e);function e(r,n,o,u){return(0,c.Z)(this,e),a.call(this,r,n,o,u)}return(0,h.Z)(e,[{key:"measureViewportSize",value:function(n){var o=this.elementRef.nativeElement;return"horizontal"===n?o.clientWidth:o.clientHeight}}]),e}(q);return l.\u0275fac=function(a){return new(a||l)(i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(G),i.\u0275\u0275directiveInject(i.NgZone),i.\u0275\u0275directiveInject(H.Directionality,8))},l.\u0275dir=i.\u0275\u0275defineDirective({type:l,features:[i.\u0275\u0275InheritDefinitionFeature]}),l}(),he=typeof requestAnimationFrame<"u"?f.Z:O.E,le=function(){var l=function(s){(0,d.Z)(e,s);var a=(0,v.Z)(e);function e(r,n,o,u,C,P,F,U){var g;return(0,c.Z)(this,e),(g=a.call(this,r,P,o,C)).elementRef=r,g._changeDetectorRef=n,g._scrollStrategy=u,g.scrollable=U,g._platform=(0,i.inject)(N.Platform),g._detachedSubject=new D.x,g._renderedRangeSubject=new D.x,g._orientation="vertical",g._appendOnly=!1,g.scrolledIndexChange=new M.y(function(J){return g._scrollStrategy.scrolledIndexChange.subscribe(function(pe){return Promise.resolve().then(function(){return g.ngZone.run(function(){return J.next(pe)})})})}),g.renderedRangeStream=g._renderedRangeSubject,g._totalContentSize=0,g._totalContentWidth="",g._totalContentHeight="",g._renderedRange={start:0,end:0},g._dataLength=0,g._viewportSize=0,g._renderedContentOffset=0,g._renderedContentOffsetNeedsRewrite=!1,g._isChangeDetectionPending=!1,g._runAfterChangeDetection=[],g._viewportChanges=T.w0.EMPTY,g._viewportChanges=F.change().subscribe(function(){g.checkViewportSize()}),g.scrollable||(g.elementRef.nativeElement.classList.add("cdk-virtual-scrollable"),g.scrollable=(0,w.Z)(g)),g}return(0,h.Z)(e,[{key:"orientation",get:function(){return this._orientation},set:function(n){this._orientation!==n&&(this._orientation=n,this._calculateSpacerSize())}},{key:"appendOnly",get:function(){return this._appendOnly},set:function(n){this._appendOnly=(0,k.coerceBooleanProperty)(n)}},{key:"ngOnInit",value:function(){var n=this;this._platform.isBrowser&&(this.scrollable===this&&(0,m.Z)((0,I.Z)(e.prototype),"ngOnInit",this).call(this),this.ngZone.runOutsideAngular(function(){return Promise.resolve().then(function(){n._measureViewportSize(),n._scrollStrategy.attach(n),n.scrollable.elementScrolled().pipe((0,b.O)(null),(0,A.e)(0,he)).subscribe(function(){return n._scrollStrategy.onContentScrolled()}),n._markChangeDetectionNeeded()})}))}},{key:"ngOnDestroy",value:function(){this.detach(),this._scrollStrategy.detach(),this._renderedRangeSubject.complete(),this._detachedSubject.complete(),this._viewportChanges.unsubscribe(),(0,m.Z)((0,I.Z)(e.prototype),"ngOnDestroy",this).call(this)}},{key:"attach",value:function(n){var o=this;this.ngZone.runOutsideAngular(function(){o._forOf=n,o._forOf.dataStream.pipe((0,z.R)(o._detachedSubject)).subscribe(function(u){var C=u.length;C!==o._dataLength&&(o._dataLength=C,o._scrollStrategy.onDataLengthChanged()),o._doChangeDetection()})})}},{key:"detach",value:function(){this._forOf=null,this._detachedSubject.next()}},{key:"getDataLength",value:function(){return this._dataLength}},{key:"getViewportSize",value:function(){return this._viewportSize}},{key:"getRenderedRange",value:function(){return this._renderedRange}},{key:"measureBoundingClientRectWithScrollOffset",value:function(n){return this.getElementRef().nativeElement.getBoundingClientRect()[n]}},{key:"setTotalContentSize",value:function(n){this._totalContentSize!==n&&(this._totalContentSize=n,this._calculateSpacerSize(),this._markChangeDetectionNeeded())}},{key:"setRenderedRange",value:function(n){var o=this;(function fe(l,s){return l.start==s.start&&l.end==s.end})(this._renderedRange,n)||(this.appendOnly&&(n={start:0,end:Math.max(this._renderedRange.end,n.end)}),this._renderedRangeSubject.next(this._renderedRange=n),this._markChangeDetectionNeeded(function(){return o._scrollStrategy.onContentRendered()}))}},{key:"getOffsetToRenderedContentStart",value:function(){return this._renderedContentOffsetNeedsRewrite?null:this._renderedContentOffset}},{key:"setRenderedContentOffset",value:function(n){var o=this,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"to-start";n=this.appendOnly&&"to-start"===u?0:n;var P="horizontal"==this.orientation,F=P?"X":"Y",U=P&&this.dir&&"rtl"==this.dir.value?-1:1,g="translate".concat(F,"(").concat(Number(U*n),"px)");this._renderedContentOffset=n,"to-end"===u&&(g+=" translate".concat(F,"(-100%)"),this._renderedContentOffsetNeedsRewrite=!0),this._renderedContentTransform!=g&&(this._renderedContentTransform=g,this._markChangeDetectionNeeded(function(){o._renderedContentOffsetNeedsRewrite?(o._renderedContentOffset-=o.measureRenderedContentSize(),o._renderedContentOffsetNeedsRewrite=!1,o.setRenderedContentOffset(o._renderedContentOffset)):o._scrollStrategy.onRenderedOffsetChanged()}))}},{key:"scrollToOffset",value:function(n){var u={behavior:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"auto"};"horizontal"===this.orientation?u.start=n:u.top=n,this.scrollable.scrollTo(u)}},{key:"scrollToIndex",value:function(n){this._scrollStrategy.scrollToIndex(n,arguments.length>1&&void 0!==arguments[1]?arguments[1]:"auto")}},{key:"measureScrollOffset",value:function(n){var o=this;return Math.max(0,(this.scrollable==this?function(P){return(0,m.Z)((0,I.Z)(e.prototype),"measureScrollOffset",o).call(o,P)}:function(P){return o.scrollable.measureScrollOffset(P)})(n??("horizontal"===this.orientation?"start":"top"))-this.measureViewportOffset())}},{key:"measureViewportOffset",value:function(n){var o,u,C="left",P="right",F="rtl"==(null===(o=this.dir)||void 0===o?void 0:o.value),U=this.scrollable.measureBoundingClientRectWithScrollOffset(u="start"==n?F?P:C:"end"==n?F?C:P:n||("horizontal"===this.orientation?"left":"top"));return this.elementRef.nativeElement.getBoundingClientRect()[u]-U}},{key:"measureRenderedContentSize",value:function(){var n=this._contentWrapper.nativeElement;return"horizontal"===this.orientation?n.offsetWidth:n.offsetHeight}},{key:"measureRangeSize",value:function(n){return this._forOf?this._forOf.measureRangeSize(n,this.orientation):0}},{key:"checkViewportSize",value:function(){this._measureViewportSize(),this._scrollStrategy.onDataLengthChanged()}},{key:"_measureViewportSize",value:function(){this._viewportSize=this.scrollable.measureViewportSize(this.orientation)}},{key:"_markChangeDetectionNeeded",value:function(n){var o=this;n&&this._runAfterChangeDetection.push(n),this._isChangeDetectionPending||(this._isChangeDetectionPending=!0,this.ngZone.runOutsideAngular(function(){return Promise.resolve().then(function(){o._doChangeDetection()})}))}},{key:"_doChangeDetection",value:function(){var n=this;this._isChangeDetectionPending=!1,this._contentWrapper.nativeElement.style.transform=this._renderedContentTransform,this.ngZone.run(function(){return n._changeDetectorRef.markForCheck()});var o=this._runAfterChangeDetection;this._runAfterChangeDetection=[];var C,u=(0,R.Z)(o);try{for(u.s();!(C=u.n()).done;)(0,C.value)()}catch(F){u.e(F)}finally{u.f()}}},{key:"_calculateSpacerSize",value:function(){this._totalContentHeight="horizontal"===this.orientation?"":"".concat(this._totalContentSize,"px"),this._totalContentWidth="horizontal"===this.orientation?"".concat(this._totalContentSize,"px"):""}}]),e}(Q);return l.\u0275fac=function(a){return new(a||l)(i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(i.ChangeDetectorRef),i.\u0275\u0275directiveInject(i.NgZone),i.\u0275\u0275directiveInject($,8),i.\u0275\u0275directiveInject(H.Directionality,8),i.\u0275\u0275directiveInject(G),i.\u0275\u0275directiveInject(oe),i.\u0275\u0275directiveInject(X,8))},l.\u0275cmp=i.\u0275\u0275defineComponent({type:l,selectors:[["cdk-virtual-scroll-viewport"]],viewQuery:function(a,e){var r;1&a&&i.\u0275\u0275viewQuery(ue,7),2&a&&i.\u0275\u0275queryRefresh(r=i.\u0275\u0275loadQuery())&&(e._contentWrapper=r.first)},hostAttrs:[1,"cdk-virtual-scroll-viewport"],hostVars:4,hostBindings:function(a,e){2&a&&i.\u0275\u0275classProp("cdk-virtual-scroll-orientation-horizontal","horizontal"===e.orientation)("cdk-virtual-scroll-orientation-vertical","horizontal"!==e.orientation)},inputs:{orientation:"orientation",appendOnly:"appendOnly"},outputs:{scrolledIndexChange:"scrolledIndexChange"},standalone:!0,features:[i.\u0275\u0275ProvidersFeature([{provide:q,useFactory:function(a,e){return a||e},deps:[[new i.Optional,new i.Inject(X)],l]}]),i.\u0275\u0275InheritDefinitionFeature,i.\u0275\u0275StandaloneFeature],ngContentSelectors:de,decls:4,vars:4,consts:[[1,"cdk-virtual-scroll-content-wrapper"],["contentWrapper",""],[1,"cdk-virtual-scroll-spacer"]],template:function(a,e){1&a&&(i.\u0275\u0275projectionDef(),i.\u0275\u0275elementStart(0,"div",0,1),i.\u0275\u0275projection(2),i.\u0275\u0275elementEnd(),i.\u0275\u0275element(3,"div",2)),2&a&&(i.\u0275\u0275advance(3),i.\u0275\u0275styleProp("width",e._totalContentWidth)("height",e._totalContentHeight))},styles:["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"],encapsulation:2,changeDetection:0}),l}();function se(l,s,a){if(!a.getBoundingClientRect)return 0;var r=a.getBoundingClientRect();return"horizontal"===l?"start"===s?r.left:r.right:"start"===s?r.top:r.bottom}var ve=function(){var l=function(){function s(a,e,r,n,o,u){var C=this;(0,c.Z)(this,s),this._viewContainerRef=a,this._template=e,this._differs=r,this._viewRepeater=n,this._viewport=o,this.viewChange=new D.x,this._dataSourceChanges=new D.x,this.dataStream=this._dataSourceChanges.pipe((0,b.O)(null),function W(){return(0,K.e)(function(l,s){var a,e=!1;l.subscribe((0,x.x)(s,function(r){var n=a;a=r,e&&s.next([n,r]),e=!0}))})}(),(0,Z.w)(function(P){var F=(0,y.Z)(P,2);return C._changeDataSource(F[0],F[1])}),(0,j.d)(1)),this._differ=null,this._needsUpdate=!1,this._destroyed=new D.x,this.dataStream.subscribe(function(P){C._data=P,C._onRenderedDataChange()}),this._viewport.renderedRangeStream.pipe((0,z.R)(this._destroyed)).subscribe(function(P){C._renderedRange=P,C.viewChange.observers.length&&u.run(function(){return C.viewChange.next(C._renderedRange)}),C._onRenderedDataChange()}),this._viewport.attach(this)}return(0,h.Z)(s,[{key:"cdkVirtualForOf",get:function(){return this._cdkVirtualForOf},set:function(e){this._cdkVirtualForOf=e,(0,Y.isDataSource)(e)?this._dataSourceChanges.next(e):this._dataSourceChanges.next(new Y.ArrayDataSource((0,_.b)(e)?e:Array.from(e||[])))}},{key:"cdkVirtualForTrackBy",get:function(){return this._cdkVirtualForTrackBy},set:function(e){var r=this;this._needsUpdate=!0,this._cdkVirtualForTrackBy=e?function(n,o){return e(n+(r._renderedRange?r._renderedRange.start:0),o)}:void 0}},{key:"cdkVirtualForTemplate",set:function(e){e&&(this._needsUpdate=!0,this._template=e)}},{key:"cdkVirtualForTemplateCacheSize",get:function(){return this._viewRepeater.viewCacheSize},set:function(e){this._viewRepeater.viewCacheSize=(0,k.coerceNumberProperty)(e)}},{key:"measureRangeSize",value:function(e,r){if(e.start>=e.end)return 0;for(var u,C,n=e.start-this._renderedRange.start,o=e.end-e.start,P=0;P<o;P++){var F=this._viewContainerRef.get(P+n);if(F&&F.rootNodes.length){u=C=F.rootNodes[0];break}}for(var U=o-1;U>-1;U--){var g=this._viewContainerRef.get(U+n);if(g&&g.rootNodes.length){C=g.rootNodes[g.rootNodes.length-1];break}}return u&&C?se(r,"end",C)-se(r,"start",u):0}},{key:"ngDoCheck",value:function(){if(this._differ&&this._needsUpdate){var e=this._differ.diff(this._renderedItems);e?this._applyChanges(e):this._updateContext(),this._needsUpdate=!1}}},{key:"ngOnDestroy",value:function(){this._viewport.detach(),this._dataSourceChanges.next(void 0),this._dataSourceChanges.complete(),this.viewChange.complete(),this._destroyed.next(),this._destroyed.complete(),this._viewRepeater.detach()}},{key:"_onRenderedDataChange",value:function(){var e=this;this._renderedRange&&(this._renderedItems=this._data.slice(this._renderedRange.start,this._renderedRange.end),this._differ||(this._differ=this._differs.find(this._renderedItems).create(function(r,n){return e.cdkVirtualForTrackBy?e.cdkVirtualForTrackBy(r,n):n})),this._needsUpdate=!0)}},{key:"_changeDataSource",value:function(e,r){return e&&e.disconnect(this),this._needsUpdate=!0,r?r.connect(this):(0,S.of)()}},{key:"_updateContext",value:function(){for(var e=this._data.length,r=this._viewContainerRef.length;r--;){var n=this._viewContainerRef.get(r);n.context.index=this._renderedRange.start+r,n.context.count=e,this._updateComputedContextProperties(n.context),n.detectChanges()}}},{key:"_applyChanges",value:function(e){var r=this;this._viewRepeater.applyChanges(e,this._viewContainerRef,function(C,P,F){return r._getEmbeddedViewArgs(C,F)},function(C){return C.item}),e.forEachIdentityChange(function(C){r._viewContainerRef.get(C.currentIndex).context.$implicit=C.item});for(var n=this._data.length,o=this._viewContainerRef.length;o--;){var u=this._viewContainerRef.get(o);u.context.index=this._renderedRange.start+o,u.context.count=n,this._updateComputedContextProperties(u.context)}}},{key:"_updateComputedContextProperties",value:function(e){e.first=0===e.index,e.last=e.index===e.count-1,e.even=e.index%2==0,e.odd=!e.even}},{key:"_getEmbeddedViewArgs",value:function(e,r){return{templateRef:this._template,context:{$implicit:e.item,cdkVirtualForOf:this._cdkVirtualForOf,index:-1,count:-1,first:!1,last:!1,odd:!1,even:!1},index:r}}}]),s}();return l.\u0275fac=function(a){return new(a||l)(i.\u0275\u0275directiveInject(i.ViewContainerRef),i.\u0275\u0275directiveInject(i.TemplateRef),i.\u0275\u0275directiveInject(i.IterableDiffers),i.\u0275\u0275directiveInject(Y._VIEW_REPEATER_STRATEGY),i.\u0275\u0275directiveInject(le,4),i.\u0275\u0275directiveInject(i.NgZone))},l.\u0275dir=i.\u0275\u0275defineDirective({type:l,selectors:[["","cdkVirtualFor","","cdkVirtualForOf",""]],inputs:{cdkVirtualForOf:"cdkVirtualForOf",cdkVirtualForTrackBy:"cdkVirtualForTrackBy",cdkVirtualForTemplate:"cdkVirtualForTemplate",cdkVirtualForTemplateCacheSize:"cdkVirtualForTemplateCacheSize"},standalone:!0,features:[i.\u0275\u0275ProvidersFeature([{provide:Y._VIEW_REPEATER_STRATEGY,useClass:Y._RecycleViewRepeaterStrategy}])]}),l}(),me=function(){var l=function(s){(0,d.Z)(e,s);var a=(0,v.Z)(e);function e(r,n,o,u){return(0,c.Z)(this,e),a.call(this,r,n,o,u)}return(0,h.Z)(e,[{key:"measureBoundingClientRectWithScrollOffset",value:function(n){return this.getElementRef().nativeElement.getBoundingClientRect()[n]-this.measureScrollOffset(n)}}]),e}(Q);return l.\u0275fac=function(a){return new(a||l)(i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(G),i.\u0275\u0275directiveInject(i.NgZone),i.\u0275\u0275directiveInject(H.Directionality,8))},l.\u0275dir=i.\u0275\u0275defineDirective({type:l,selectors:[["","cdkVirtualScrollingElement",""]],hostAttrs:[1,"cdk-virtual-scrollable"],standalone:!0,features:[i.\u0275\u0275ProvidersFeature([{provide:X,useExisting:l}]),i.\u0275\u0275InheritDefinitionFeature]}),l}(),ge=function(){var l=function(s){(0,d.Z)(e,s);var a=(0,v.Z)(e);function e(r,n,o){var u;return(0,c.Z)(this,e),(u=a.call(this,new i.ElementRef(document.documentElement),r,n,o))._elementScrolled=new M.y(function(C){return u.ngZone.runOutsideAngular(function(){return(0,p.R)(document,"scroll").pipe((0,z.R)(u._destroyed)).subscribe(C)})}),u}return(0,h.Z)(e,[{key:"measureBoundingClientRectWithScrollOffset",value:function(n){return this.getElementRef().nativeElement.getBoundingClientRect()[n]}}]),e}(Q);return l.\u0275fac=function(a){return new(a||l)(i.\u0275\u0275directiveInject(G),i.\u0275\u0275directiveInject(i.NgZone),i.\u0275\u0275directiveInject(H.Directionality,8))},l.\u0275dir=i.\u0275\u0275defineDirective({type:l,selectors:[["cdk-virtual-scroll-viewport","scrollWindow",""]],standalone:!0,features:[i.\u0275\u0275ProvidersFeature([{provide:X,useExisting:l}]),i.\u0275\u0275InheritDefinitionFeature]}),l}(),ee=function(){var l=(0,h.Z)(function s(){(0,c.Z)(this,s)});return l.\u0275fac=function(a){return new(a||l)},l.\u0275mod=i.\u0275\u0275defineNgModule({type:l}),l.\u0275inj=i.\u0275\u0275defineInjector({}),l}(),_e=function(){var l=(0,h.Z)(function s(){(0,c.Z)(this,s)});return l.\u0275fac=function(a){return new(a||l)},l.\u0275mod=i.\u0275\u0275defineNgModule({type:l}),l.\u0275inj=i.\u0275\u0275defineInjector({imports:[H.BidiModule,ee,H.BidiModule,ee]}),l}()},83878:(B,E,t)=>{function y(R){if(Array.isArray(R))return R}t.d(E,{Z:()=>y})},25267:(B,E,t)=>{function y(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}t.d(E,{Z:()=>y})},97685:(B,E,t)=>{t.d(E,{Z:()=>I});var y=t(83878),w=t(40181),m=t(25267);function I(d,v){return(0,y.Z)(d)||function R(d,v){var c=null==d?null:typeof Symbol<"u"&&d[Symbol.iterator]||d["@@iterator"];if(null!=c){var h,k,i,D,S=[],M=!0,p=!1;try{if(i=(c=c.call(d)).next,0===v){if(Object(c)!==c)return;M=!1}else for(;!(M=(h=i.call(c)).done)&&(S.push(h.value),S.length!==v);M=!0);}catch(f){p=!0,k=f}finally{try{if(!M&&null!=c.return&&(D=c.return(),Object(D)!==D))return}finally{if(p)throw k}}return S}}(d,v)||(0,w.Z)(d,v)||(0,m.Z)()}}}]);