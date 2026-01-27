import { a as U } from "@nf-internal/chunk-GL2BOVXA";
import * as i from "@angular/core";
import { InjectionToken as H, inject as g, TemplateRef as at, ElementRef as B, ViewContainerRef as At, input as h, effect as St, Injector as _t, NgZone as ot, numberAttribute as xt, output as x, contentChildren as Ct, contentChild as vt, booleanAttribute as z, computed as A, signal as Dt, isDevMode as D, afterRenderEffect as X, linkedSignal as Mt } from "@angular/core";
import { DOCUMENT as lt, NgStyle as zt, NgTemplateOutlet as bt } from "@angular/common";
import { takeUntilDestroyed as E } from "@angular/core/rxjs-interop";
import { merge as k, fromEvent as S, filter as T, Observable as kt, switchMap as P, take as V, map as N, takeUntil as I, tap as w, timeInterval as tt, scan as yt, mergeMap as wt, of as et, delay as Et, repeat as Tt, Subject as it, startWith as Pt, pairwise as It, skipWhile as Ot } from "rxjs";
var ut = ["*"], Gt = (n, o, t, e, r, a) => ({ areaBefore: n, areaAfter: o, gutterNum: t, first: e, last: r, isDragged: a });
function Bt(n, o) { n & 1 && i.\u0275\u0275elementContainer(0); }
function Rt(n, o) { if (n & 1 && (i.\u0275\u0275elementContainerStart(0), i.\u0275\u0275template(1, Bt, 1, 0, "ng-container", 5), i.\u0275\u0275elementContainerEnd()), n & 2) {
    let t = o.$implicit, e = i.\u0275\u0275nextContext(3), r = e.$implicit, a = e.$index, s = e.$index, l = i.\u0275\u0275nextContext();
    i.\u0275\u0275advance(), i.\u0275\u0275property("ngTemplateOutlet", l.customGutter().template)("ngTemplateOutletContext", i.\u0275\u0275pureFunction6(3, Gt, r, l._areas()[a + 1], a + 1, s === 0, a === l._areas().length - 2, l.draggedGutterIndex() === a))("ngTemplateOutletInjector", t);
} }
function Ft(n, o) { if (n & 1 && i.\u0275\u0275template(0, Rt, 2, 10, "ng-container", 4), n & 2) {
    let t = i.\u0275\u0275nextContext(2).$index;
    i.\u0275\u0275property("asSplitGutterDynamicInjector", t + 1);
} }
function $t(n, o) { n & 1 && i.\u0275\u0275element(0, "div", 3); }
function jt(n, o) { if (n & 1) {
    let t = i.\u0275\u0275getCurrentView();
    i.\u0275\u0275elementStart(0, "div", 2, 0), i.\u0275\u0275listener("asSplitCustomClick", function () { i.\u0275\u0275restoreView(t); let r = i.\u0275\u0275nextContext().$index, a = i.\u0275\u0275nextContext(); return i.\u0275\u0275resetView(a.gutterClicked(r)); })("asSplitCustomDblClick", function () { i.\u0275\u0275restoreView(t); let r = i.\u0275\u0275nextContext().$index, a = i.\u0275\u0275nextContext(); return i.\u0275\u0275resetView(a.gutterDoubleClicked(r)); })("asSplitCustomMouseDown", function (r) { i.\u0275\u0275restoreView(t); let a = i.\u0275\u0275reference(1), s = i.\u0275\u0275nextContext().$index, l = i.\u0275\u0275nextContext(); return i.\u0275\u0275resetView(l.gutterMouseDown(r, a, s, s, s + 1)); })("asSplitCustomKeyDown", function (r) { i.\u0275\u0275restoreView(t); let a = i.\u0275\u0275nextContext().$index, s = i.\u0275\u0275nextContext(); return i.\u0275\u0275resetView(s.gutterKeyDown(r, a, a, a + 1)); }), i.\u0275\u0275conditionalCreate(2, Ft, 1, 1, "ng-container")(3, $t, 1, 0, "div", 3), i.\u0275\u0275elementEnd();
} if (n & 2) {
    let t, e = i.\u0275\u0275nextContext(), r = e.$implicit, a = e.$index, s = i.\u0275\u0275nextContext();
    i.\u0275\u0275classProp("as-dragged", s.draggedGutterIndex() === a), i.\u0275\u0275property("ngStyle", s.getGutterGridStyle(a + 1))("asSplitCustomMultiClickThreshold", s.gutterDblClickDuration())("asSplitCustomClickDeltaInPx", s.gutterClickDeltaPx()), i.\u0275\u0275attribute("aria-label", s.gutterAriaLabel())("aria-orientation", s.direction())("aria-valuemin", s.getAriaValue(r.minSize()))("aria-valuemax", s.getAriaValue(r.maxSize()))("aria-valuenow", s.getAriaValue(r._internalSize()))("aria-valuetext", s.getAriaAreaSizeText(r)), i.\u0275\u0275advance(2), i.\u0275\u0275conditional((t = s.customGutter()) != null && t.template ? 2 : 3);
} }
function Ut(n, o) { if (n & 1 && i.\u0275\u0275conditionalCreate(0, jt, 4, 12, "div", 1), n & 2) {
    let t = o.$index, e = o.$count;
    i.\u0275\u0275conditional(t !== e - 1 ? 0 : -1);
} }
function Vt(n, o) { n & 1 && i.\u0275\u0275domElement(0, "div", 0); }
var ct = { dir: "ltr", direction: "horizontal", disabled: !1, gutterDblClickDuration: 0, gutterSize: 11, gutterStep: 1, gutterClickDeltaPx: 2, restrictMove: !1, unit: "percent", useTransition: !1 }, K = new H("angular-split-global-config", { providedIn: "root", factory: () => ct });
function re(n) { return { provide: K, useFactory: () => U(U({}, g(K, { skipSelf: !0, optional: !0 }) ?? ct), n) }; }
var O = (() => { class n {
    constructor() { this.template = g(at), this._gutterToHandleElementMap = new Map, this._gutterToExcludeDragElementMap = new Map; }
    _canStartDragging(t, e) { return this._gutterToExcludeDragElementMap.has(e) && this._gutterToExcludeDragElementMap.get(e).some(a => a.nativeElement.contains(t)) ? !1 : this._gutterToHandleElementMap.has(e) ? this._gutterToHandleElementMap.get(e).some(r => r.nativeElement.contains(t)) : !0; }
    _addToMap(t, e, r) { t.has(e) ? t.get(e).push(r) : t.set(e, [r]); }
    _removedFromMap(t, e, r) { let a = t.get(e); a.splice(a.indexOf(r), 1), a.length === 0 && t.delete(e); }
    static ngTemplateContextGuard(t, e) { return !0; }
    static { this.\u0275fac = function (e) { return new (e || n); }; }
    static { this.\u0275dir = i.\u0275\u0275defineDirective({ type: n, selectors: [["", "asSplitGutter", ""]] }); }
} return n; })(), J = new H("Gutter num"), se = (() => { class n {
    constructor() { this.gutterNum = g(J), this.elementRef = g(B), this.gutterDir = g(O), this.gutterDir._addToMap(this.gutterDir._gutterToHandleElementMap, this.gutterNum, this.elementRef); }
    ngOnDestroy() { this.gutterDir._removedFromMap(this.gutterDir._gutterToHandleElementMap, this.gutterNum, this.elementRef); }
    static { this.\u0275fac = function (e) { return new (e || n); }; }
    static { this.\u0275dir = i.\u0275\u0275defineDirective({ type: n, selectors: [["", "asSplitGutterDragHandle", ""]] }); }
} return n; })(), ae = (() => { class n {
    constructor() { this.gutterNum = g(J), this.elementRef = g(B), this.gutterDir = g(O), this.gutterDir._addToMap(this.gutterDir._gutterToExcludeDragElementMap, this.gutterNum, this.elementRef); }
    ngOnDestroy() { this.gutterDir._removedFromMap(this.gutterDir._gutterToExcludeDragElementMap, this.gutterNum, this.elementRef); }
    static { this.\u0275fac = function (e) { return new (e || n); }; }
    static { this.\u0275dir = i.\u0275\u0275defineDirective({ type: n, selectors: [["", "asSplitGutterExcludeFromDrag", ""]] }); }
} return n; })(), Nt = (() => { class n {
    constructor() { this.vcr = g(At), this.templateRef = g(at), this.gutterNum = h.required({ alias: "asSplitGutterDynamicInjector" }), St(() => { this.vcr.clear(); let t = _t.create({ providers: [{ provide: J, useValue: this.gutterNum() }], parent: this.vcr.injector }); this.vcr.createEmbeddedView(this.templateRef, { $implicit: t }); }); }
    static ngTemplateContextGuard(t, e) { return !0; }
    static { this.\u0275fac = function (e) { return new (e || n); }; }
    static { this.\u0275dir = i.\u0275\u0275defineDirective({ type: n, selectors: [["", "asSplitGutterDynamicInjector", ""]], inputs: { gutterNum: [1, "asSplitGutterDynamicInjector", "gutterNum"] } }); }
} return n; })();
function b(n) { if ((t => window.TouchEvent && n instanceof TouchEvent)(n)) {
    if (n.changedTouches.length === 0)
        return;
    let { clientX: t, clientY: e } = n.changedTouches[0];
    return { x: t, y: e };
} if (n instanceof KeyboardEvent) {
    let t = n.target;
    return { x: t.offsetLeft + t.offsetWidth / 2, y: t.offsetTop + t.offsetHeight / 2 };
} return { x: n.clientX, y: n.clientY }; }
function dt(n, o, t, e) { if (!e.contains(n.target) || !e.contains(o.target))
    return !1; let r = b(n), a = b(o); return Math.abs(a.x - r.x) <= t && Math.abs(a.y - r.y) <= t; }
function nt(n) { return k(S(n, "mousedown").pipe(T(o => o.button === 0)), S(n, "touchstart", { passive: !1 })); }
function Y(n) { return k(S(n, "mousemove"), S(n, "touchmove")); }
function G(n, o = !1) { let t = k(S(n, "mouseup"), S(n, "touchend")); return o ? k(t, S(n, "touchcancel")) : t; }
function L(n, o) { return n.reduce((t, e) => t + o(e), 0); }
function Kt(n, o) { return n.reduce((t, e, r) => { let [a, s] = o(e, r); return t[a] = s, t; }, {}); }
function ht(n) { return Object.entries(n).filter(([, o]) => o).map(([o]) => o).join(" "); }
function Q() { return n => new kt(o => g(ot).runOutsideAngular(() => n.subscribe(o))); }
var y = n => o => xt(o, n), Yt = (n, o) => { throw new Error(`as-split: unknown value "${n}" for "${o}"`); }, Lt = (() => { class n {
    constructor() { this.elementRef = g(B), this.document = g(lt), this.multiClickThreshold = h.required({ alias: "asSplitCustomMultiClickThreshold" }), this.deltaInPx = h.required({ alias: "asSplitCustomClickDeltaInPx" }), this.mouseDown = x({ alias: "asSplitCustomMouseDown" }), this.click = x({ alias: "asSplitCustomClick" }), this.dblClick = x({ alias: "asSplitCustomDblClick" }), this.keyDown = x({ alias: "asSplitCustomKeyDown" }), S(this.elementRef.nativeElement, "keydown").pipe(Q(), E()).subscribe(e => this.keyDown.emit(e)); let t = nt(this.elementRef.nativeElement).pipe(P(e => Y(this.document).pipe(T(r => !dt(e, r, this.deltaInPx(), this.elementRef.nativeElement)), V(1), N(() => !0), I(G(this.document))))); nt(this.elementRef.nativeElement).pipe(w(e => this.mouseDown.emit(e)), tt(), yt((e, { interval: r }) => r >= this.multiClickThreshold() ? 1 : e + 1, 0), P(e => G(this.elementRef.nativeElement).pipe(tt(), V(1), e === 2 ? N(() => e) : wt(({ interval: r }) => r >= this.multiClickThreshold() ? et(e) : et(e).pipe(Et(this.multiClickThreshold() - r))))), I(t), Tt(), Q(), E()).subscribe(e => { e === 1 ? this.click.emit() : e === 2 && this.dblClick.emit(); }); }
    static { this.\u0275fac = function (e) { return new (e || n); }; }
    static { this.\u0275dir = i.\u0275\u0275defineDirective({ type: n, selectors: [["", "asSplitCustomEventsBehavior", ""]], inputs: { multiClickThreshold: [1, "asSplitCustomMultiClickThreshold", "multiClickThreshold"], deltaInPx: [1, "asSplitCustomClickDeltaInPx", "deltaInPx"] }, outputs: { mouseDown: "asSplitCustomMouseDown", click: "asSplitCustomClick", dblClick: "asSplitCustomDblClick", keyDown: "asSplitCustomKeyDown" } }); }
} return n; })();
function rt(n, o, t) { if (n.length === 0)
    return !0; let e = n.map(s => { let l = s.size(); return l === "auto" ? "*" : l; }), r = e.filter(s => s === "*"); if (r.length > 1)
    return t && console.warn("as-split: Maximum one * area is allowed"), !1; if (o === "pixel")
    return r.length === 1 ? !0 : (t && console.warn("as-split: Pixel mode must have exactly one * area"), !1); let a = L(e, s => s === "*" ? 0 : s); return r.length === 1 ? a <= 100.1 ? !0 : (t && console.warn("as-split: Percent areas must total 100%"), !1) : a < 99.9 || a > 100.1 ? (t && console.warn("as-split: Percent areas must total 100%"), !1) : !0; }
var Z = new H("Split Area Contract"), Qt = (() => { class n {
    get hostClassesBinding() { return this.hostClasses(); }
    get hostDirBinding() { return this.dir(); }
    constructor() { this.document = g(lt), this.elementRef = g(B), this.ngZone = g(ot), this.defaultOptions = g(K), this.gutterMouseDownSubject = new it, this.dragProgressSubject = new it, this._areas = Ct(Z), this.customGutter = vt(O), this.gutterSize = h(this.defaultOptions.gutterSize, { transform: y(this.defaultOptions.gutterSize) }), this.gutterStep = h(this.defaultOptions.gutterStep, { transform: y(this.defaultOptions.gutterStep) }), this.disabled = h(this.defaultOptions.disabled, { transform: z }), this.gutterClickDeltaPx = h(this.defaultOptions.gutterClickDeltaPx, { transform: y(this.defaultOptions.gutterClickDeltaPx) }), this.direction = h(this.defaultOptions.direction), this.dir = h(this.defaultOptions.dir), this.unit = h(this.defaultOptions.unit), this.gutterAriaLabel = h(), this.restrictMove = h(this.defaultOptions.restrictMove, { transform: z }), this.useTransition = h(this.defaultOptions.useTransition, { transform: z }), this.gutterDblClickDuration = h(this.defaultOptions.gutterDblClickDuration, { transform: y(this.defaultOptions.gutterDblClickDuration) }), this.gutterClick = x(), this.gutterDblClick = x(), this.dragStart = x(), this.dragEnd = x(), this.transitionEnd = x(), this.dragProgress$ = this.dragProgressSubject.asObservable(), this._visibleAreas = A(() => this._areas().filter(t => t.visible())), this.gridTemplateColumnsStyle = A(() => this.createGridTemplateColumnsStyle()), this.hostClasses = A(() => ht({ [`as-${this.direction()}`]: !0, [`as-${this.unit()}`]: !0, "as-disabled": this.disabled(), "as-dragging": this._isDragging(), "as-transition": this.useTransition() && !this._isDragging() })), this.draggedGutterIndex = Dt(void 0), this._isDragging = A(() => this.draggedGutterIndex() !== void 0), this._alignedVisibleAreasSizes = A(() => this.createAlignedVisibleAreasSize()), D() && X({ read: () => { this.unit() === "percent" && this._visibleAreas().every(t => t.size() === "auto") || rt(this._visibleAreas(), this.unit(), !0); } }), X({ write: () => { this.elementRef.nativeElement.style.gridTemplate = this.gridTemplateColumnsStyle(); } }), this.gutterMouseDownSubject.pipe(T(t => !this.customGutter() || this.customGutter()._canStartDragging(t.mouseDownEvent.target, t.gutterIndex + 1)), P(t => Y(this.document).pipe(Pt(t.mouseDownEvent), It(), Ot(([, e]) => dt(t.mouseDownEvent, e, this.gutterClickDeltaPx(), t.gutterElement)), V(1), I(k(G(this.document, !0), S(this.document, "blur"))), w(() => { this.ngZone.run(() => { this.dragStart.emit(this.createDragInteractionEvent(t.gutterIndex)), this.draggedGutterIndex.set(t.gutterIndex); }); }), N(([e]) => this.createDragStartContext(e, t.areaBeforeGutterIndex, t.areaAfterGutterIndex)), P(e => Y(this.document).pipe(w(r => this.mouseDragMove(r, e)), I(G(this.document, !0)), w({ complete: () => this.ngZone.run(() => { this.dragEnd.emit(this.createDragInteractionEvent(this.draggedGutterIndex())), this.draggedGutterIndex.set(void 0); }) }))))), E()).subscribe(), S(this.elementRef.nativeElement, "transitionend").pipe(T(t => t.propertyName.startsWith("grid-template")), Q(), E()).subscribe(() => this.ngZone.run(() => this.transitionEnd.emit(this.createAreaSizes()))); }
    gutterClicked(t) { this.ngZone.run(() => this.gutterClick.emit(this.createDragInteractionEvent(t))); }
    gutterDoubleClicked(t) { this.ngZone.run(() => this.gutterDblClick.emit(this.createDragInteractionEvent(t))); }
    gutterMouseDown(t, e, r, a, s) { t.preventDefault(), t.stopPropagation(), !this.disabled() && this.gutterMouseDownSubject.next({ mouseDownEvent: t, gutterElement: e, gutterIndex: r, areaBeforeGutterIndex: a, areaAfterGutterIndex: s }); }
    gutterKeyDown(t, e, r, a) { if (this.disabled())
        return; let s = 50, l = 10, c = 0, u = 0; if (this.direction() === "horizontal")
        switch (t.key) {
            case "ArrowLeft":
                c -= s;
                break;
            case "ArrowRight":
                c += s;
                break;
            case "PageUp":
                this.dir() === "rtl" ? c -= s * l : c += s * l;
                break;
            case "PageDown":
                this.dir() === "rtl" ? c += s * l : c -= s * l;
                break;
            default: return;
        }
    else
        switch (t.key) {
            case "ArrowUp":
                u -= s;
                break;
            case "ArrowDown":
                u += s;
                break;
            case "PageUp":
                u -= s * l;
                break;
            case "PageDown":
                u += s * l;
                break;
            default: return;
        } t.preventDefault(), t.stopPropagation(); let p = b(t), d = this.createDragStartContext(t, r, a); this.ngZone.run(() => { this.dragStart.emit(this.createDragInteractionEvent(e)), this.draggedGutterIndex.set(e); }), this.dragMoveToPoint({ x: p.x + c, y: p.y + u }, d), this.ngZone.run(() => { this.dragEnd.emit(this.createDragInteractionEvent(e)), this.draggedGutterIndex.set(void 0); }); }
    getGutterGridStyle(t) { let e = t * 2, r = `${e} / ${e}`; return { "grid-column": this.direction() === "horizontal" ? r : "1", "grid-row": this.direction() === "vertical" ? r : "1" }; }
    getAriaAreaSizeText(t) { let e = t._internalSize(); if (e !== "*")
        return `${e.toFixed(0)} ${this.unit()}`; }
    getAriaValue(t) { return t === "*" ? void 0 : t; }
    createDragInteractionEvent(t) { return { gutterNum: t + 1, sizes: this.createAreaSizes() }; }
    createAreaSizes() { return this._visibleAreas().map(t => t._internalSize()); }
    createDragStartContext(t, e, r) { let a = this.elementRef.nativeElement.getBoundingClientRect(), l = (this.direction() === "horizontal" ? a.width : a.height) - (this._visibleAreas().length - 1) * this.gutterSize(), c = this._areas().map(d => { if (this.unit() === "pixel")
        return d._internalSize(); {
        let f = d._internalSize();
        return f === "*" ? f : f / 100 * l;
    } }), u = Math.max(0, l - L(c, d => d === "*" ? 0 : d)), p = c.map(d => d === "*" ? u : d); return { startEvent: t, areaBeforeGutterIndex: e, areaAfterGutterIndex: r, areasPixelSizes: p, totalAreasPixelSize: l, areaIndexToBoundaries: Kt(this._areas(), (d, f) => { let C = M => M / 100 * l, v = this.unit() === "pixel" ? { min: d._normalizedMinSize(), max: d._normalizedMaxSize() } : { min: C(d._normalizedMinSize()), max: C(d._normalizedMaxSize()) }; return [f.toString(), v]; }) }; }
    mouseDragMove(t, e) { t.preventDefault(), t.stopPropagation(); let r = b(t); this.dragMoveToPoint(r, e); }
    dragMoveToPoint(t, e) { let r = b(e.startEvent), a = this.direction() === "horizontal" ? t.x - r.x : t.y - r.y, s = this.direction() === "horizontal" && this.dir() === "rtl" ? -a : a, l = s > 0, c = Math.abs(Math.round(s / this.gutterStep()) * this.gutterStep()), u = [...e.areasPixelSizes], p = u.map((m, _) => _), d = this.restrictMove() ? [e.areaBeforeGutterIndex] : p.slice(0, e.areaBeforeGutterIndex + 1).filter(m => this._areas()[m].visible()).reverse(), f = this.restrictMove() ? [e.areaAfterGutterIndex] : p.slice(e.areaAfterGutterIndex).filter(m => this._areas()[m].visible()), C = l ? f : d, v = l ? d : f, M = c, R = 0, F = 0; for (; M !== 0 && R < C.length && F < v.length;) {
        let m = C[R], _ = v[F], $ = u[m], pt = u[_], W = e.areaIndexToBoundaries[m].min, q = e.areaIndexToBoundaries[_].max, mt = $ - W, ft = q - pt, j = Math.min(mt, ft, M);
        u[m] -= j, u[_] += j, M -= j, u[m] === W && R++, u[_] === q && F++;
    } this._areas().forEach((m, _) => { if (m._internalSize() !== "*")
        if (this.unit() === "pixel")
            m._internalSize.set(u[_]);
        else {
            let $ = u[_] / e.totalAreasPixelSize * 100;
            m._internalSize.set(parseFloat($.toFixed(10)));
        } }), this.dragProgressSubject.next(this.createDragInteractionEvent(this.draggedGutterIndex())); }
    createGridTemplateColumnsStyle() { let t = [], e = L(this._visibleAreas(), s => { let l = s._internalSize(); return l === "*" ? 0 : l; }), r = this._visibleAreas().length, a = 0; return this._areas().forEach((s, l, c) => { let u = this.unit(), p = s._internalSize(); if (!s.visible())
        t.push(u === "percent" || p === "*" ? "0fr" : "0px");
    else {
        if (u === "pixel") {
            let C = p === "*" ? "1fr" : `${p}px`;
            t.push(C);
        }
        else {
            let v = `${p === "*" ? 100 - e : p}fr`;
            t.push(v);
        }
        a++;
    } if (l === c.length - 1)
        return; let f = r - a; s.visible() && f > 0 ? t.push(`${this.gutterSize()}px`) : t.push("0px"); }), this.direction() === "horizontal" ? `1fr / ${t.join(" ")}` : `${t.join(" ")} / 1fr`; }
    createAlignedVisibleAreasSize() { let t = this._visibleAreas().map(a => { let s = a.size(); return s === "auto" ? "*" : s; }); if (rt(this._visibleAreas(), this.unit(), !1))
        return t; let r = this.unit(); if (r === "percent") {
        let a = 100 / t.length;
        return t.map(() => a);
    } if (r === "pixel") {
        if (t.filter(s => s === "*").length === 0)
            return ["*", ...t.slice(1)];
        {
            let s = t.findIndex(c => c === "*"), l = 100;
            return t.map((c, u) => u === s || c !== "*" ? c : l);
        }
    } return Yt(r, "SplitUnit"); }
    static { this.\u0275fac = function (e) { return new (e || n); }; }
    static { this.\u0275cmp = i.\u0275\u0275defineComponent({ type: n, selectors: [["as-split"]], contentQueries: function (e, r, a) { e & 1 && (i.\u0275\u0275contentQuerySignal(a, r._areas, Z, 4), i.\u0275\u0275contentQuerySignal(a, r.customGutter, O, 5)), e & 2 && i.\u0275\u0275queryAdvance(2); }, hostVars: 3, hostBindings: function (e, r) { e & 2 && (i.\u0275\u0275domProperty("dir", r.hostDirBinding), i.\u0275\u0275classMap(r.hostClassesBinding)); }, inputs: { gutterSize: [1, "gutterSize"], gutterStep: [1, "gutterStep"], disabled: [1, "disabled"], gutterClickDeltaPx: [1, "gutterClickDeltaPx"], direction: [1, "direction"], dir: [1, "dir"], unit: [1, "unit"], gutterAriaLabel: [1, "gutterAriaLabel"], restrictMove: [1, "restrictMove"], useTransition: [1, "useTransition"], gutterDblClickDuration: [1, "gutterDblClickDuration"] }, outputs: { gutterClick: "gutterClick", gutterDblClick: "gutterDblClick", dragStart: "dragStart", dragEnd: "dragEnd", transitionEnd: "transitionEnd" }, exportAs: ["asSplit"], ngContentSelectors: ut, decls: 3, vars: 0, consts: [["gutter", ""], ["role", "separator", "tabindex", "0", "asSplitCustomEventsBehavior", "", 1, "as-split-gutter", 3, "ngStyle", "as-dragged", "asSplitCustomMultiClickThreshold", "asSplitCustomClickDeltaInPx"], ["role", "separator", "tabindex", "0", "asSplitCustomEventsBehavior", "", 1, "as-split-gutter", 3, "asSplitCustomClick", "asSplitCustomDblClick", "asSplitCustomMouseDown", "asSplitCustomKeyDown", "ngStyle", "asSplitCustomMultiClickThreshold", "asSplitCustomClickDeltaInPx"], [1, "as-split-gutter-icon"], [4, "asSplitGutterDynamicInjector"], [4, "ngTemplateOutlet", "ngTemplateOutletContext", "ngTemplateOutletInjector"]], template: function (e, r) { e & 1 && (i.\u0275\u0275projectionDef(), i.\u0275\u0275projection(0), i.\u0275\u0275repeaterCreate(1, Ut, 1, 1, null, null, i.\u0275\u0275repeaterTrackByIdentity)), e & 2 && (i.\u0275\u0275advance(), i.\u0275\u0275repeater(r._areas())); }, dependencies: [zt, Lt, Nt, bt], styles: ['@property --as-gutter-background-color{syntax: "<color>"; inherits: true; initial-value: #eeeeee;}@property --as-gutter-icon-horizontal{syntax: "<url>"; inherits: true; initial-value: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==);}@property --as-gutter-icon-vertical{syntax: "<url>"; inherits: true; initial-value: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFCAMAAABl/6zIAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAABRJREFUeAFjYGRkwIMJSeMHlBkOABP7AEGzSuPKAAAAAElFTkSuQmCC);}@property --as-gutter-icon-disabled{syntax: "<url>"; inherits: true; initial-value: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==);}@property --as-transition-duration{syntax: "<time>"; inherits: true; initial-value: .3s;}@property --as-gutter-disabled-cursor{syntax: "*"; inherits: true; initial-value: default;}[_nghost-%COMP%]{--_as-gutter-background-color: var(--as-gutter-background-color, #eeeeee);--_as-gutter-icon-horizontal: var( --as-gutter-icon-horizontal, url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==) );--_as-gutter-icon-vertical: var( --as-gutter-icon-vertical, url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFCAMAAABl/6zIAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAABRJREFUeAFjYGRkwIMJSeMHlBkOABP7AEGzSuPKAAAAAElFTkSuQmCC) );--_as-gutter-icon-disabled: var( --as-gutter-icon-disabled, url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==) );--_as-transition-duration: var(--as-transition-duration, .3s);--_as-gutter-disabled-cursor: var(--as-gutter-disabled-cursor, default)}[_nghost-%COMP%]{display:grid;overflow:hidden;height:100%;width:100%}.as-transition[_nghost-%COMP%]{transition:grid-template var(--_as-transition-duration)}.as-split-gutter[_ngcontent-%COMP%]{background-color:var(--_as-gutter-background-color);display:flex;align-items:center;justify-content:center;touch-action:none}.as-horizontal[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{cursor:col-resize;height:100%}.as-vertical[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{cursor:row-resize;width:100%}.as-disabled[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%]{cursor:var(--_as-gutter-disabled-cursor)}.as-split-gutter-icon[_ngcontent-%COMP%]{width:100%;height:100%;background-position:center center;background-repeat:no-repeat}.as-horizontal[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%] > .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:var(--_as-gutter-icon-horizontal)}.as-vertical[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%] > .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:var(--_as-gutter-icon-vertical)}.as-disabled[_nghost-%COMP%] > .as-split-gutter[_ngcontent-%COMP%] > .as-split-gutter-icon[_ngcontent-%COMP%]{background-image:var(--_as-gutter-icon-disabled)}'], changeDetection: 0 }); }
} return n; })(), gt = n => n == null || n === "*" ? "*" : +n, Zt = n => gt(n), st = n => gt(n), oe = (() => { class n {
    constructor() { this.split = g(Qt), this.size = h("auto", { transform: Zt }), this.minSize = h("*", { transform: st }), this.maxSize = h("*", { transform: st }), this.lockSize = h(!1, { transform: z }), this.visible = h(!0, { transform: z }), this._internalSize = Mt(() => { if (!this.visible())
        return 0; let t = this.split._visibleAreas().findIndex(e => e === this); return this.split._alignedVisibleAreasSizes()[t]; }), this._normalizedMinSize = A(() => this.normalizeMinSize()), this._normalizedMaxSize = A(() => this.normalizeMaxSize()), this.index = A(() => this.split._areas().findIndex(t => t === this)), this.gridAreaNum = A(() => this.index() * 2 + 1), this.hostClasses = A(() => ht({ "as-split-area": !0, "as-min": this.visible() && this._internalSize() === this._normalizedMinSize(), "as-max": this.visible() && this._internalSize() === this._normalizedMaxSize(), "as-hidden": !this.visible() })); }
    get hostClassesBinding() { return this.hostClasses(); }
    get hostGridColumnStyleBinding() { return this.split.direction() === "horizontal" ? `${this.gridAreaNum()} / ${this.gridAreaNum()}` : void 0; }
    get hostGridRowStyleBinding() { return this.split.direction() === "vertical" ? `${this.gridAreaNum()} / ${this.gridAreaNum()}` : void 0; }
    get hostPositionStyleBinding() { return this.split._isDragging() ? "relative" : void 0; }
    normalizeMinSize() { if (!this.visible())
        return 0; let e = this.normalizeSizeBoundary(this.minSize, 0), r = this.size(); return r !== "*" && r !== "auto" && r < e ? (D() && console.warn("as-split: size cannot be smaller than minSize"), 0) : e; }
    normalizeMaxSize() { if (!this.visible())
        return 1 / 0; let e = this.normalizeSizeBoundary(this.maxSize, 1 / 0), r = this.size(); return r !== "*" && r !== "auto" && r > e ? (D() && console.warn("as-split: size cannot be larger than maxSize"), 1 / 0) : e; }
    normalizeSizeBoundary(t, e) { let r = this.size(), a = this.lockSize(), s = t(); return a ? (D() && s !== "*" && console.warn("as-split: lockSize overwrites maxSize/minSize"), r === "*" || r === "auto" ? (D() && console.warn("as-split: lockSize isn't supported on area with * size or without size"), e) : r) : s === "*" ? e : r === "*" || r === "auto" ? (D() && console.warn("as-split: maxSize/minSize not allowed on * or without size"), e) : s; }
    static { this.\u0275fac = function (e) { return new (e || n); }; }
    static { this.\u0275cmp = i.\u0275\u0275defineComponent({ type: n, selectors: [["as-split-area"]], hostVars: 8, hostBindings: function (e, r) { e & 2 && (i.\u0275\u0275classMap(r.hostClassesBinding), i.\u0275\u0275styleProp("grid-column", r.hostGridColumnStyleBinding)("grid-row", r.hostGridRowStyleBinding)("position", r.hostPositionStyleBinding)); }, inputs: { size: [1, "size"], minSize: [1, "minSize"], maxSize: [1, "maxSize"], lockSize: [1, "lockSize"], visible: [1, "visible"] }, exportAs: ["asSplitArea"], features: [i.\u0275\u0275ProvidersFeature([{ provide: Z, useExisting: n }])], ngContentSelectors: ut, decls: 2, vars: 1, consts: [[1, "as-iframe-fix"]], template: function (e, r) { e & 1 && (i.\u0275\u0275projectionDef(), i.\u0275\u0275projection(0), i.\u0275\u0275conditionalCreate(1, Vt, 1, 0, "div", 0)), e & 2 && (i.\u0275\u0275advance(), i.\u0275\u0275conditional(r.split._isDragging() ? 1 : -1)); }, styles: ["[_nghost-%COMP%]{overflow-x:hidden;overflow-y:auto}.as-horizontal > [_nghost-%COMP%]{height:100%}.as-vertical > [_nghost-%COMP%]{width:100%}.as-iframe-fix[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}"], changeDetection: 0 }); }
} return n; })(), le = (() => { class n {
    static { this.\u0275fac = function (e) { return new (e || n); }; }
    static { this.\u0275mod = i.\u0275\u0275defineNgModule({ type: n }); }
    static { this.\u0275inj = i.\u0275\u0275defineInjector({}); }
} return n; })();
export { le as AngularSplitModule, oe as SplitAreaComponent, Qt as SplitComponent, O as SplitGutterDirective, se as SplitGutterDragHandleDirective, ae as SplitGutterExcludeFromDragDirective, re as provideAngularSplitOptions };
//# sourceMappingURL=angular_split.HhHg3doiPO.js.map
