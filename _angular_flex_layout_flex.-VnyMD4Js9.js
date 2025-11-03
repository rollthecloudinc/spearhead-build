import { a as b, b as M } from "@nf-internal/chunk-GL2BOVXA";
import * as i from "@angular/core";
import "@angular/core";
import * as w from "@angular/cdk/bidi";
import { BidiModule as $ } from "@angular/cdk/bidi";
import * as o from "@angular/flex-layout/core";
import { StyleBuilder as g, BaseDirective2 as y, LAYOUT_CONFIG as v, \u0275multiply as D, validateBasis as S, CoreModule as U } from "@angular/flex-layout/core";
import { buildLayoutCSS as N, LAYOUT_VALUES as C, isFlowHorizontal as p, extendObject as c } from "@angular/flex-layout/_private-utils";
import { Subject as T } from "rxjs";
import { takeUntil as L } from "rxjs/operators";
var V = (() => { class e extends g {
    buildStyles(t, { display: n }) { let l = N(t); return M(b({}, l), { display: n === "none" ? n : l.display }); }
} return e.\u0275fac = (() => { let s; return function (n) { return (s || (s = i.\u0275\u0275getInheritedFactory(e)))(n || e); }; })(), e.\u0275prov = i.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" }), e; })(), W = ["fxLayout", "fxLayout.xs", "fxLayout.sm", "fxLayout.md", "fxLayout.lg", "fxLayout.xl", "fxLayout.lt-sm", "fxLayout.lt-md", "fxLayout.lt-lg", "fxLayout.lt-xl", "fxLayout.gt-xs", "fxLayout.gt-sm", "fxLayout.gt-md", "fxLayout.gt-lg"];
var z = (() => { class e extends y {
    constructor(t, n, l, x, f) { super(t, l, n, x), this._config = f, this.DIRECTIVE_KEY = "layout", this.init(); }
    updateWithValue(t) { let l = this._config.detectLayoutDisplay ? this.styler.lookupStyle(this.nativeElement, "display") : ""; this.styleCache = G.get(l) ?? new Map, G.set(l, this.styleCache), this.currentValue !== t && (this.addStyles(t, { display: l }), this.currentValue = t); }
} return e.\u0275fac = function (t) { return new (t || e)(i.\u0275\u0275directiveInject(i.ElementRef), i.\u0275\u0275directiveInject(o.StyleUtils), i.\u0275\u0275directiveInject(V), i.\u0275\u0275directiveInject(o.MediaMarshaller), i.\u0275\u0275directiveInject(v)); }, e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })(), He = (() => { class e extends z {
    constructor() { super(...arguments), this.inputs = W; }
} return e.\u0275fac = (() => { let s; return function (n) { return (s || (s = i.\u0275\u0275getInheritedFactory(e)))(n || e); }; })(), e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, selectors: [["", "fxLayout", ""], ["", "fxLayout.xs", ""], ["", "fxLayout.sm", ""], ["", "fxLayout.md", ""], ["", "fxLayout.lg", ""], ["", "fxLayout.xl", ""], ["", "fxLayout.lt-sm", ""], ["", "fxLayout.lt-md", ""], ["", "fxLayout.lt-lg", ""], ["", "fxLayout.lt-xl", ""], ["", "fxLayout.gt-xs", ""], ["", "fxLayout.gt-sm", ""], ["", "fxLayout.gt-md", ""], ["", "fxLayout.gt-lg", ""]], inputs: { fxLayout: "fxLayout", "fxLayout.xs": "fxLayout.xs", "fxLayout.sm": "fxLayout.sm", "fxLayout.md": "fxLayout.md", "fxLayout.lg": "fxLayout.lg", "fxLayout.xl": "fxLayout.xl", "fxLayout.lt-sm": "fxLayout.lt-sm", "fxLayout.lt-md": "fxLayout.lt-md", "fxLayout.lt-lg": "fxLayout.lt-lg", "fxLayout.lt-xl": "fxLayout.lt-xl", "fxLayout.gt-xs": "fxLayout.gt-xs", "fxLayout.gt-sm": "fxLayout.gt-sm", "fxLayout.gt-md": "fxLayout.gt-md", "fxLayout.gt-lg": "fxLayout.gt-lg" }, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })(), G = new Map;
var j = { "margin-left": null, "margin-right": null, "margin-top": null, "margin-bottom": null }, K = (() => { class e extends g {
    constructor(t, n) { super(), this._styler = t, this._config = n; }
    buildStyles(t, n) { return t.endsWith(A) ? (t = t.slice(0, t.indexOf(A)), t = D(t, this._config.multiplier), Q(t, n.directionality)) : {}; }
    sideEffect(t, n, l) { let x = l.items; if (t.endsWith(A)) {
        t = t.slice(0, t.indexOf(A)), t = D(t, this._config.multiplier);
        let f = J(t, l.directionality);
        this._styler.applyStyleToElements(f, l.items);
    }
    else {
        t = D(t, this._config.multiplier), t = this.addFallbackUnit(t);
        let f = x.pop(), r = ee(t, l);
        this._styler.applyStyleToElements(r, x), this._styler.applyStyleToElements(j, [f]);
    } }
    addFallbackUnit(t) { return isNaN(+t) ? t : `${t}${this._config.defaultUnit}`; }
} return e.\u0275fac = function (t) { return new (t || e)(i.\u0275\u0275inject(o.StyleUtils), i.\u0275\u0275inject(v)); }, e.\u0275prov = i.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" }), e; })(), P = ["fxLayoutGap", "fxLayoutGap.xs", "fxLayoutGap.sm", "fxLayoutGap.md", "fxLayoutGap.lg", "fxLayoutGap.xl", "fxLayoutGap.lt-sm", "fxLayoutGap.lt-md", "fxLayoutGap.lt-lg", "fxLayoutGap.lt-xl", "fxLayoutGap.gt-xs", "fxLayoutGap.gt-sm", "fxLayoutGap.gt-md", "fxLayoutGap.gt-lg"];
var Y = (() => { class e extends y {
    constructor(t, n, l, x, f, r) { super(t, f, x, r), this.zone = n, this.directionality = l, this.styleUtils = x, this.layout = "row", this.DIRECTIVE_KEY = "layout-gap", this.observerSubject = new T; let u = [this.directionality.change, this.observerSubject.asObservable()]; this.init(u), this.marshal.trackValue(this.nativeElement, "layout").pipe(L(this.destroySubject)).subscribe(this.onLayoutChange.bind(this)); }
    get childrenNodes() { let t = this.nativeElement.children, n = []; for (let l = t.length; l--;)
        n[l] = t[l]; return n; }
    ngAfterContentInit() { this.buildChildObservable(), this.triggerUpdate(); }
    ngOnDestroy() { super.ngOnDestroy(), this.observer && this.observer.disconnect(); }
    onLayoutChange(t) { let l = t.value.split(" "); this.layout = l[0], C.find(x => x === this.layout) || (this.layout = "row"), this.triggerUpdate(); }
    updateWithValue(t) { let n = this.childrenNodes.filter(l => l.nodeType === 1 && this.willDisplay(l)).sort((l, x) => { let f = +this.styler.lookupStyle(l, "order"), r = +this.styler.lookupStyle(x, "order"); return isNaN(f) || isNaN(r) || f === r ? 0 : f > r ? 1 : -1; }); if (n.length > 0) {
        let l = this.directionality.value, x = this.layout;
        x === "row" && l === "rtl" ? this.styleCache = H : x === "row" && l !== "rtl" ? this.styleCache = X : x === "column" && l === "rtl" ? this.styleCache = Z : x === "column" && l !== "rtl" && (this.styleCache = q), this.addStyles(t, { directionality: l, items: n, layout: x });
    } }
    clearStyles() { let t = Object.keys(this.mru).length > 0, n = t ? "padding" : _(this.directionality.value, this.layout); t && super.clearStyles(), this.styleUtils.applyStyleToElements({ [n]: "" }, this.childrenNodes); }
    willDisplay(t) { let n = this.marshal.getValue(t, "show-hide"); return n === !0 || n === void 0 && this.styleUtils.lookupStyle(t, "display") !== "none"; }
    buildChildObservable() { this.zone.runOutsideAngular(() => { typeof MutationObserver < "u" && (this.observer = new MutationObserver(t => { let n = l => l.addedNodes && l.addedNodes.length > 0 || l.removedNodes && l.removedNodes.length > 0; t.some(n) && this.observerSubject.next(); }), this.observer.observe(this.nativeElement, { childList: !0 })); }); }
} return e.\u0275fac = function (t) { return new (t || e)(i.\u0275\u0275directiveInject(i.ElementRef), i.\u0275\u0275directiveInject(i.NgZone), i.\u0275\u0275directiveInject(w.Directionality), i.\u0275\u0275directiveInject(o.StyleUtils), i.\u0275\u0275directiveInject(K), i.\u0275\u0275directiveInject(o.MediaMarshaller)); }, e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })(), Ze = (() => { class e extends Y {
    constructor() { super(...arguments), this.inputs = P; }
} return e.\u0275fac = (() => { let s; return function (n) { return (s || (s = i.\u0275\u0275getInheritedFactory(e)))(n || e); }; })(), e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, selectors: [["", "fxLayoutGap", ""], ["", "fxLayoutGap.xs", ""], ["", "fxLayoutGap.sm", ""], ["", "fxLayoutGap.md", ""], ["", "fxLayoutGap.lg", ""], ["", "fxLayoutGap.xl", ""], ["", "fxLayoutGap.lt-sm", ""], ["", "fxLayoutGap.lt-md", ""], ["", "fxLayoutGap.lt-lg", ""], ["", "fxLayoutGap.lt-xl", ""], ["", "fxLayoutGap.gt-xs", ""], ["", "fxLayoutGap.gt-sm", ""], ["", "fxLayoutGap.gt-md", ""], ["", "fxLayoutGap.gt-lg", ""]], inputs: { fxLayoutGap: "fxLayoutGap", "fxLayoutGap.xs": "fxLayoutGap.xs", "fxLayoutGap.sm": "fxLayoutGap.sm", "fxLayoutGap.md": "fxLayoutGap.md", "fxLayoutGap.lg": "fxLayoutGap.lg", "fxLayoutGap.xl": "fxLayoutGap.xl", "fxLayoutGap.lt-sm": "fxLayoutGap.lt-sm", "fxLayoutGap.lt-md": "fxLayoutGap.lt-md", "fxLayoutGap.lt-lg": "fxLayoutGap.lt-lg", "fxLayoutGap.lt-xl": "fxLayoutGap.lt-xl", "fxLayoutGap.gt-xs": "fxLayoutGap.gt-xs", "fxLayoutGap.gt-sm": "fxLayoutGap.gt-sm", "fxLayoutGap.gt-md": "fxLayoutGap.gt-md", "fxLayoutGap.gt-lg": "fxLayoutGap.gt-lg" }, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })(), H = new Map, Z = new Map, X = new Map, q = new Map, A = " grid";
function J(e, s) { let [t, n] = e.split(" "), l = n ?? t, x = "0px", f = l, r = "0px"; return s === "rtl" ? r = t : x = t, { padding: `0px ${x} ${f} ${r}` }; }
function Q(e, s) { let [t, n] = e.split(" "), l = n ?? t, x = F => `-${F}`, f = "0px", r = x(l), u = "0px"; return s === "rtl" ? u = x(t) : f = x(t), { margin: `0px ${f} ${r} ${u}` }; }
function _(e, s) { switch (s) {
    case "column": return "margin-bottom";
    case "column-reverse": return "margin-top";
    case "row": return e === "rtl" ? "margin-left" : "margin-right";
    case "row-reverse": return e === "rtl" ? "margin-right" : "margin-left";
    default: return e === "rtl" ? "margin-left" : "margin-right";
} }
function ee(e, s) { let t = _(s.directionality, s.layout), n = b({}, j); return n[t] = e, n; }
var te = (() => { class e extends g {
    constructor(t) { super(), this.layoutConfig = t; }
    buildStyles(t, n) { let [l, x, ...f] = t.split(" "), r = f.join(" "), u = n.direction.indexOf("column") > -1 ? "column" : "row", F = p(u) ? "max-width" : "max-height", O = p(u) ? "min-width" : "min-height", d = String(r).indexOf("calc") > -1, k = d || r === "auto", E = String(r).indexOf("%") > -1 && !d, B = String(r).indexOf("px") > -1 || String(r).indexOf("rem") > -1 || String(r).indexOf("em") > -1 || String(r).indexOf("vw") > -1 || String(r).indexOf("vh") > -1, m = d || B; l = l == "0" ? 0 : l, x = x == "0" ? 0 : x; let I = !l && !x, a = {}, h = { "max-width": null, "max-height": null, "min-width": null, "min-height": null }; switch (r || "") {
        case "":
            let R = this.layoutConfig.useColumnBasisZero !== !1;
            r = u === "row" ? "0%" : R ? "0.000000001px" : "auto";
            break;
        case "initial":
        case "nogrow":
            l = 0, r = "auto";
            break;
        case "grow":
            r = "100%";
            break;
        case "noshrink":
            x = 0, r = "auto";
            break;
        case "auto": break;
        case "none":
            l = 0, x = 0, r = "auto";
            break;
        default:
            !m && !E && !isNaN(r) && (r = r + "%"), r === "0%" && (m = !0), r === "0px" && (r = "0%"), d ? a = c(h, { "flex-grow": l, "flex-shrink": x, "flex-basis": m ? r : "100%" }) : a = c(h, { flex: `${l} ${x} ${m ? r : "100%"}` });
            break;
    } return a.flex || a["flex-grow"] || (d ? a = c(h, { "flex-grow": l, "flex-shrink": x, "flex-basis": r }) : a = c(h, { flex: `${l} ${x} ${r}` })), r !== "0%" && r !== "0px" && r !== "0.000000001px" && r !== "auto" && (a[O] = I || m && l ? r : null, a[F] = I || !k && x ? r : null), !a[O] && !a[F] ? d ? a = c(h, { "flex-grow": l, "flex-shrink": x, "flex-basis": r }) : a = c(h, { flex: `${l} ${x} ${r}` }) : n.hasWrap && (a[d ? "flex-basis" : "flex"] = a[F] ? d ? a[F] : `${l} ${x} ${a[F]}` : d ? a[O] : `${l} ${x} ${a[O]}`), c(a, { "box-sizing": "border-box" }); }
} return e.\u0275fac = function (t) { return new (t || e)(i.\u0275\u0275inject(v)); }, e.\u0275prov = i.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" }), e; })(), le = ["fxFlex", "fxFlex.xs", "fxFlex.sm", "fxFlex.md", "fxFlex.lg", "fxFlex.xl", "fxFlex.lt-sm", "fxFlex.lt-md", "fxFlex.lt-lg", "fxFlex.lt-xl", "fxFlex.gt-xs", "fxFlex.gt-sm", "fxFlex.gt-md", "fxFlex.gt-lg"];
var ie = (() => { class e extends y {
    constructor(t, n, l, x, f) { super(t, x, n, f), this.layoutConfig = l, this.marshal = f, this.DIRECTIVE_KEY = "flex", this.direction = void 0, this.wrap = void 0, this.flexGrow = "1", this.flexShrink = "1", this.init(); }
    get shrink() { return this.flexShrink; }
    set shrink(t) { this.flexShrink = t || "1", this.triggerReflow(); }
    get grow() { return this.flexGrow; }
    set grow(t) { this.flexGrow = t || "1", this.triggerReflow(); }
    ngOnInit() { this.parentElement && (this.marshal.trackValue(this.parentElement, "layout").pipe(L(this.destroySubject)).subscribe(this.onLayoutChange.bind(this)), this.marshal.trackValue(this.nativeElement, "layout-align").pipe(L(this.destroySubject)).subscribe(this.triggerReflow.bind(this))); }
    onLayoutChange(t) { let l = t.value.split(" "); this.direction = l[0], this.wrap = l[1] !== void 0 && l[1] === "wrap", this.triggerUpdate(); }
    updateWithValue(t) { let n = this.layoutConfig.addFlexToParent !== !1; this.direction === void 0 && (this.direction = this.getFlexFlowDirection(this.parentElement, n)), this.wrap === void 0 && (this.wrap = this.hasWrap(this.parentElement)); let l = this.direction, x = l.startsWith("row"), f = this.wrap; x && f ? this.styleCache = xe : x && !f ? this.styleCache = ne : !x && f ? this.styleCache = re : !x && !f && (this.styleCache = se); let r = String(t).replace(";", ""), u = S(r, this.flexGrow, this.flexShrink); this.addStyles(u.join(" "), { direction: l, hasWrap: f }); }
    triggerReflow() { let t = this.activatedValue; if (t !== void 0) {
        let n = S(t + "", this.flexGrow, this.flexShrink);
        this.marshal.updateElement(this.nativeElement, this.DIRECTIVE_KEY, n.join(" "));
    } }
} return e.\u0275fac = function (t) { return new (t || e)(i.\u0275\u0275directiveInject(i.ElementRef), i.\u0275\u0275directiveInject(o.StyleUtils), i.\u0275\u0275directiveInject(v), i.\u0275\u0275directiveInject(te), i.\u0275\u0275directiveInject(o.MediaMarshaller)); }, e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, inputs: { shrink: [0, "fxShrink", "shrink"], grow: [0, "fxGrow", "grow"] }, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })(), Xe = (() => { class e extends ie {
    constructor() { super(...arguments), this.inputs = le; }
} return e.\u0275fac = (() => { let s; return function (n) { return (s || (s = i.\u0275\u0275getInheritedFactory(e)))(n || e); }; })(), e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, selectors: [["", "fxFlex", ""], ["", "fxFlex.xs", ""], ["", "fxFlex.sm", ""], ["", "fxFlex.md", ""], ["", "fxFlex.lg", ""], ["", "fxFlex.xl", ""], ["", "fxFlex.lt-sm", ""], ["", "fxFlex.lt-md", ""], ["", "fxFlex.lt-lg", ""], ["", "fxFlex.lt-xl", ""], ["", "fxFlex.gt-xs", ""], ["", "fxFlex.gt-sm", ""], ["", "fxFlex.gt-md", ""], ["", "fxFlex.gt-lg", ""]], inputs: { fxFlex: "fxFlex", "fxFlex.xs": "fxFlex.xs", "fxFlex.sm": "fxFlex.sm", "fxFlex.md": "fxFlex.md", "fxFlex.lg": "fxFlex.lg", "fxFlex.xl": "fxFlex.xl", "fxFlex.lt-sm": "fxFlex.lt-sm", "fxFlex.lt-md": "fxFlex.lt-md", "fxFlex.lt-lg": "fxFlex.lt-lg", "fxFlex.lt-xl": "fxFlex.lt-xl", "fxFlex.gt-xs": "fxFlex.gt-xs", "fxFlex.gt-sm": "fxFlex.gt-sm", "fxFlex.gt-md": "fxFlex.gt-md", "fxFlex.gt-lg": "fxFlex.gt-lg" }, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })(), ne = new Map, se = new Map, xe = new Map, re = new Map;
var fe = (() => { class e extends g {
    buildStyles(t) { return { order: t && parseInt(t, 10) || "" }; }
} return e.\u0275fac = (() => { let s; return function (n) { return (s || (s = i.\u0275\u0275getInheritedFactory(e)))(n || e); }; })(), e.\u0275prov = i.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" }), e; })(), ae = ["fxFlexOrder", "fxFlexOrder.xs", "fxFlexOrder.sm", "fxFlexOrder.md", "fxFlexOrder.lg", "fxFlexOrder.xl", "fxFlexOrder.lt-sm", "fxFlexOrder.lt-md", "fxFlexOrder.lt-lg", "fxFlexOrder.lt-xl", "fxFlexOrder.gt-xs", "fxFlexOrder.gt-sm", "fxFlexOrder.gt-md", "fxFlexOrder.gt-lg"];
var oe = (() => { class e extends y {
    constructor(t, n, l, x) { super(t, l, n, x), this.DIRECTIVE_KEY = "flex-order", this.styleCache = ue, this.init(); }
} return e.\u0275fac = function (t) { return new (t || e)(i.\u0275\u0275directiveInject(i.ElementRef), i.\u0275\u0275directiveInject(o.StyleUtils), i.\u0275\u0275directiveInject(fe), i.\u0275\u0275directiveInject(o.MediaMarshaller)); }, e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })(), ue = new Map, qe = (() => { class e extends oe {
    constructor() { super(...arguments), this.inputs = ae; }
} return e.\u0275fac = (() => { let s; return function (n) { return (s || (s = i.\u0275\u0275getInheritedFactory(e)))(n || e); }; })(), e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, selectors: [["", "fxFlexOrder", ""], ["", "fxFlexOrder.xs", ""], ["", "fxFlexOrder.sm", ""], ["", "fxFlexOrder.md", ""], ["", "fxFlexOrder.lg", ""], ["", "fxFlexOrder.xl", ""], ["", "fxFlexOrder.lt-sm", ""], ["", "fxFlexOrder.lt-md", ""], ["", "fxFlexOrder.lt-lg", ""], ["", "fxFlexOrder.lt-xl", ""], ["", "fxFlexOrder.gt-xs", ""], ["", "fxFlexOrder.gt-sm", ""], ["", "fxFlexOrder.gt-md", ""], ["", "fxFlexOrder.gt-lg", ""]], inputs: { fxFlexOrder: "fxFlexOrder", "fxFlexOrder.xs": "fxFlexOrder.xs", "fxFlexOrder.sm": "fxFlexOrder.sm", "fxFlexOrder.md": "fxFlexOrder.md", "fxFlexOrder.lg": "fxFlexOrder.lg", "fxFlexOrder.xl": "fxFlexOrder.xl", "fxFlexOrder.lt-sm": "fxFlexOrder.lt-sm", "fxFlexOrder.lt-md": "fxFlexOrder.lt-md", "fxFlexOrder.lt-lg": "fxFlexOrder.lt-lg", "fxFlexOrder.lt-xl": "fxFlexOrder.lt-xl", "fxFlexOrder.gt-xs": "fxFlexOrder.gt-xs", "fxFlexOrder.gt-sm": "fxFlexOrder.gt-sm", "fxFlexOrder.gt-md": "fxFlexOrder.gt-md", "fxFlexOrder.gt-lg": "fxFlexOrder.gt-lg" }, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })();
var de = (() => { class e extends g {
    constructor(t) { super(), this._config = t; }
    buildStyles(t, n) { t || (t = "0"), t = D(t, this._config.multiplier); let l = String(t).indexOf("%") > -1; !(String(t).indexOf("px") > -1) && !l && !isNaN(+t) && (t = `${t}%`); let f = n.isRtl ? "margin-right" : "margin-left"; return p(n.layout) ? { [f]: t } : { "margin-top": t }; }
} return e.\u0275fac = function (t) { return new (t || e)(i.\u0275\u0275inject(v)); }, e.\u0275prov = i.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" }), e; })(), ce = ["fxFlexOffset", "fxFlexOffset.xs", "fxFlexOffset.sm", "fxFlexOffset.md", "fxFlexOffset.lg", "fxFlexOffset.xl", "fxFlexOffset.lt-sm", "fxFlexOffset.lt-md", "fxFlexOffset.lt-lg", "fxFlexOffset.lt-xl", "fxFlexOffset.gt-xs", "fxFlexOffset.gt-sm", "fxFlexOffset.gt-md", "fxFlexOffset.gt-lg"];
var ge = (() => { class e extends y {
    constructor(t, n, l, x, f) { super(t, l, f, x), this.directionality = n, this.DIRECTIVE_KEY = "flex-offset", this.init([this.directionality.change]), this.parentElement && this.marshal.trackValue(this.parentElement, "layout-gap").pipe(L(this.destroySubject)).subscribe(this.triggerUpdate.bind(this)); }
    updateWithValue(t = "") { let n = this.getFlexFlowDirection(this.parentElement, !0), l = this.directionality.value === "rtl"; n === "row" && l ? this.styleCache = ye : n === "row" && !l ? this.styleCache = he : n === "column" && l ? this.styleCache = Fe : n === "column" && !l && (this.styleCache = me), this.addStyles(t + "", { layout: n, isRtl: l }); }
} return e.\u0275fac = function (t) { return new (t || e)(i.\u0275\u0275directiveInject(i.ElementRef), i.\u0275\u0275directiveInject(w.Directionality), i.\u0275\u0275directiveInject(de), i.\u0275\u0275directiveInject(o.MediaMarshaller), i.\u0275\u0275directiveInject(o.StyleUtils)); }, e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })(), Je = (() => { class e extends ge {
    constructor() { super(...arguments), this.inputs = ce; }
} return e.\u0275fac = (() => { let s; return function (n) { return (s || (s = i.\u0275\u0275getInheritedFactory(e)))(n || e); }; })(), e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, selectors: [["", "fxFlexOffset", ""], ["", "fxFlexOffset.xs", ""], ["", "fxFlexOffset.sm", ""], ["", "fxFlexOffset.md", ""], ["", "fxFlexOffset.lg", ""], ["", "fxFlexOffset.xl", ""], ["", "fxFlexOffset.lt-sm", ""], ["", "fxFlexOffset.lt-md", ""], ["", "fxFlexOffset.lt-lg", ""], ["", "fxFlexOffset.lt-xl", ""], ["", "fxFlexOffset.gt-xs", ""], ["", "fxFlexOffset.gt-sm", ""], ["", "fxFlexOffset.gt-md", ""], ["", "fxFlexOffset.gt-lg", ""]], inputs: { fxFlexOffset: "fxFlexOffset", "fxFlexOffset.xs": "fxFlexOffset.xs", "fxFlexOffset.sm": "fxFlexOffset.sm", "fxFlexOffset.md": "fxFlexOffset.md", "fxFlexOffset.lg": "fxFlexOffset.lg", "fxFlexOffset.xl": "fxFlexOffset.xl", "fxFlexOffset.lt-sm": "fxFlexOffset.lt-sm", "fxFlexOffset.lt-md": "fxFlexOffset.lt-md", "fxFlexOffset.lt-lg": "fxFlexOffset.lt-lg", "fxFlexOffset.lt-xl": "fxFlexOffset.lt-xl", "fxFlexOffset.gt-xs": "fxFlexOffset.gt-xs", "fxFlexOffset.gt-sm": "fxFlexOffset.gt-sm", "fxFlexOffset.gt-md": "fxFlexOffset.gt-md", "fxFlexOffset.gt-lg": "fxFlexOffset.gt-lg" }, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })(), ye = new Map, Fe = new Map, he = new Map, me = new Map;
var pe = (() => { class e extends g {
    buildStyles(t) { t = t || "stretch"; let n = {}; switch (t) {
        case "start":
            n["align-self"] = "flex-start";
            break;
        case "end":
            n["align-self"] = "flex-end";
            break;
        default:
            n["align-self"] = t;
            break;
    } return n; }
} return e.\u0275fac = (() => { let s; return function (n) { return (s || (s = i.\u0275\u0275getInheritedFactory(e)))(n || e); }; })(), e.\u0275prov = i.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" }), e; })(), Le = ["fxFlexAlign", "fxFlexAlign.xs", "fxFlexAlign.sm", "fxFlexAlign.md", "fxFlexAlign.lg", "fxFlexAlign.xl", "fxFlexAlign.lt-sm", "fxFlexAlign.lt-md", "fxFlexAlign.lt-lg", "fxFlexAlign.lt-xl", "fxFlexAlign.gt-xs", "fxFlexAlign.gt-sm", "fxFlexAlign.gt-md", "fxFlexAlign.gt-lg"];
var ve = (() => { class e extends y {
    constructor(t, n, l, x) { super(t, l, n, x), this.DIRECTIVE_KEY = "flex-align", this.styleCache = Oe, this.init(); }
} return e.\u0275fac = function (t) { return new (t || e)(i.\u0275\u0275directiveInject(i.ElementRef), i.\u0275\u0275directiveInject(o.StyleUtils), i.\u0275\u0275directiveInject(pe), i.\u0275\u0275directiveInject(o.MediaMarshaller)); }, e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })(), Oe = new Map, Qe = (() => { class e extends ve {
    constructor() { super(...arguments), this.inputs = Le; }
} return e.\u0275fac = (() => { let s; return function (n) { return (s || (s = i.\u0275\u0275getInheritedFactory(e)))(n || e); }; })(), e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, selectors: [["", "fxFlexAlign", ""], ["", "fxFlexAlign.xs", ""], ["", "fxFlexAlign.sm", ""], ["", "fxFlexAlign.md", ""], ["", "fxFlexAlign.lg", ""], ["", "fxFlexAlign.xl", ""], ["", "fxFlexAlign.lt-sm", ""], ["", "fxFlexAlign.lt-md", ""], ["", "fxFlexAlign.lt-lg", ""], ["", "fxFlexAlign.lt-xl", ""], ["", "fxFlexAlign.gt-xs", ""], ["", "fxFlexAlign.gt-sm", ""], ["", "fxFlexAlign.gt-md", ""], ["", "fxFlexAlign.gt-lg", ""]], inputs: { fxFlexAlign: "fxFlexAlign", "fxFlexAlign.xs": "fxFlexAlign.xs", "fxFlexAlign.sm": "fxFlexAlign.sm", "fxFlexAlign.md": "fxFlexAlign.md", "fxFlexAlign.lg": "fxFlexAlign.lg", "fxFlexAlign.xl": "fxFlexAlign.xl", "fxFlexAlign.lt-sm": "fxFlexAlign.lt-sm", "fxFlexAlign.lt-md": "fxFlexAlign.lt-md", "fxFlexAlign.lt-lg": "fxFlexAlign.lt-lg", "fxFlexAlign.lt-xl": "fxFlexAlign.lt-xl", "fxFlexAlign.gt-xs": "fxFlexAlign.gt-xs", "fxFlexAlign.gt-sm": "fxFlexAlign.gt-sm", "fxFlexAlign.gt-md": "fxFlexAlign.gt-md", "fxFlexAlign.gt-lg": "fxFlexAlign.gt-lg" }, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })();
var Ae = { margin: 0, width: "100%", height: "100%", "min-width": "100%", "min-height": "100%" }, De = (() => { class e extends g {
    buildStyles(t) { return Ae; }
} return e.\u0275fac = (() => { let s; return function (n) { return (s || (s = i.\u0275\u0275getInheritedFactory(e)))(n || e); }; })(), e.\u0275prov = i.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" }), e; })(), et = (() => { class e extends y {
    constructor(t, n, l, x) { super(t, l, n, x), this.styleCache = be, this.addStyles(""); }
} return e.\u0275fac = function (t) { return new (t || e)(i.\u0275\u0275directiveInject(i.ElementRef), i.\u0275\u0275directiveInject(o.StyleUtils), i.\u0275\u0275directiveInject(De), i.\u0275\u0275directiveInject(o.MediaMarshaller)); }, e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, selectors: [["", "fxFill", ""], ["", "fxFlexFill", ""]], standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })(), be = new Map;
var we = (() => { class e extends g {
    buildStyles(t, n) { let l = {}, [x, f] = t.split(" "); switch (x) {
        case "center":
            l["justify-content"] = "center";
            break;
        case "space-around":
            l["justify-content"] = "space-around";
            break;
        case "space-between":
            l["justify-content"] = "space-between";
            break;
        case "space-evenly":
            l["justify-content"] = "space-evenly";
            break;
        case "end":
        case "flex-end":
            l["justify-content"] = "flex-end";
            break;
        case "start":
        case "flex-start":
        default:
            l["justify-content"] = "flex-start";
            break;
    } switch (f) {
        case "start":
        case "flex-start":
            l["align-items"] = l["align-content"] = "flex-start";
            break;
        case "center":
            l["align-items"] = l["align-content"] = "center";
            break;
        case "end":
        case "flex-end":
            l["align-items"] = l["align-content"] = "flex-end";
            break;
        case "space-between":
            l["align-content"] = "space-between", l["align-items"] = "stretch";
            break;
        case "space-around":
            l["align-content"] = "space-around", l["align-items"] = "stretch";
            break;
        case "baseline":
            l["align-content"] = "stretch", l["align-items"] = "baseline";
            break;
        case "stretch":
        default:
            l["align-items"] = l["align-content"] = "stretch";
            break;
    } return c(l, { display: n.inline ? "inline-flex" : "flex", "flex-direction": n.layout, "box-sizing": "border-box", "max-width": f === "stretch" ? p(n.layout) ? null : "100%" : null, "max-height": f === "stretch" && p(n.layout) ? "100%" : null }); }
} return e.\u0275fac = (() => { let s; return function (n) { return (s || (s = i.\u0275\u0275getInheritedFactory(e)))(n || e); }; })(), e.\u0275prov = i.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" }), e; })(), Ie = ["fxLayoutAlign", "fxLayoutAlign.xs", "fxLayoutAlign.sm", "fxLayoutAlign.md", "fxLayoutAlign.lg", "fxLayoutAlign.xl", "fxLayoutAlign.lt-sm", "fxLayoutAlign.lt-md", "fxLayoutAlign.lt-lg", "fxLayoutAlign.lt-xl", "fxLayoutAlign.gt-xs", "fxLayoutAlign.gt-sm", "fxLayoutAlign.gt-md", "fxLayoutAlign.gt-lg"];
var Me = (() => { class e extends y {
    constructor(t, n, l, x) { super(t, l, n, x), this.DIRECTIVE_KEY = "layout-align", this.layout = "row", this.inline = !1, this.init(), this.marshal.trackValue(this.nativeElement, "layout").pipe(L(this.destroySubject)).subscribe(this.onLayoutChange.bind(this)); }
    updateWithValue(t) { let n = this.layout || "row", l = this.inline; n === "row" && l ? this.styleCache = _e : n === "row" && !l ? this.styleCache = Se : n === "row-reverse" && l ? this.styleCache = Ee : n === "row-reverse" && !l ? this.styleCache = Ce : n === "column" && l ? this.styleCache = ke : n === "column" && !l ? this.styleCache = Ge : n === "column-reverse" && l ? this.styleCache = Be : n === "column-reverse" && !l && (this.styleCache = je), this.addStyles(t, { layout: n, inline: l }); }
    onLayoutChange(t) { let n = t.value.split(" "); this.layout = n[0], this.inline = t.value.includes("inline"), C.find(l => l === this.layout) || (this.layout = "row"), this.triggerUpdate(); }
} return e.\u0275fac = function (t) { return new (t || e)(i.\u0275\u0275directiveInject(i.ElementRef), i.\u0275\u0275directiveInject(o.StyleUtils), i.\u0275\u0275directiveInject(we), i.\u0275\u0275directiveInject(o.MediaMarshaller)); }, e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })(), tt = (() => { class e extends Me {
    constructor() { super(...arguments), this.inputs = Ie; }
} return e.\u0275fac = (() => { let s; return function (n) { return (s || (s = i.\u0275\u0275getInheritedFactory(e)))(n || e); }; })(), e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, selectors: [["", "fxLayoutAlign", ""], ["", "fxLayoutAlign.xs", ""], ["", "fxLayoutAlign.sm", ""], ["", "fxLayoutAlign.md", ""], ["", "fxLayoutAlign.lg", ""], ["", "fxLayoutAlign.xl", ""], ["", "fxLayoutAlign.lt-sm", ""], ["", "fxLayoutAlign.lt-md", ""], ["", "fxLayoutAlign.lt-lg", ""], ["", "fxLayoutAlign.lt-xl", ""], ["", "fxLayoutAlign.gt-xs", ""], ["", "fxLayoutAlign.gt-sm", ""], ["", "fxLayoutAlign.gt-md", ""], ["", "fxLayoutAlign.gt-lg", ""]], inputs: { fxLayoutAlign: "fxLayoutAlign", "fxLayoutAlign.xs": "fxLayoutAlign.xs", "fxLayoutAlign.sm": "fxLayoutAlign.sm", "fxLayoutAlign.md": "fxLayoutAlign.md", "fxLayoutAlign.lg": "fxLayoutAlign.lg", "fxLayoutAlign.xl": "fxLayoutAlign.xl", "fxLayoutAlign.lt-sm": "fxLayoutAlign.lt-sm", "fxLayoutAlign.lt-md": "fxLayoutAlign.lt-md", "fxLayoutAlign.lt-lg": "fxLayoutAlign.lt-lg", "fxLayoutAlign.lt-xl": "fxLayoutAlign.lt-xl", "fxLayoutAlign.gt-xs": "fxLayoutAlign.gt-xs", "fxLayoutAlign.gt-sm": "fxLayoutAlign.gt-sm", "fxLayoutAlign.gt-md": "fxLayoutAlign.gt-md", "fxLayoutAlign.gt-lg": "fxLayoutAlign.gt-lg" }, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })(), Se = new Map, Ge = new Map, Ce = new Map, je = new Map, _e = new Map, ke = new Map, Ee = new Map, Be = new Map;
var lt = (() => { class e {
} return e.\u0275fac = function (t) { return new (t || e); }, e.\u0275mod = i.\u0275\u0275defineNgModule({ type: e }), e.\u0275inj = i.\u0275\u0275defineInjector({ imports: [U, $] }), e; })();
export { Qe as DefaultFlexAlignDirective, Xe as DefaultFlexDirective, Je as DefaultFlexOffsetDirective, qe as DefaultFlexOrderDirective, tt as DefaultLayoutAlignDirective, He as DefaultLayoutDirective, Ze as DefaultLayoutGapDirective, ve as FlexAlignDirective, pe as FlexAlignStyleBuilder, ie as FlexDirective, et as FlexFillDirective, De as FlexFillStyleBuilder, lt as FlexModule, ge as FlexOffsetDirective, de as FlexOffsetStyleBuilder, oe as FlexOrderDirective, fe as FlexOrderStyleBuilder, te as FlexStyleBuilder, Me as LayoutAlignDirective, we as LayoutAlignStyleBuilder, z as LayoutDirective, Y as LayoutGapDirective, K as LayoutGapStyleBuilder, V as LayoutStyleBuilder };
/*! Bundled license information:

@angular/flex-layout/fesm2020/angular-flex-layout-flex.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-flex.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-flex.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-flex.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-flex.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-flex.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-flex.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-flex.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-flex.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
//# sourceMappingURL=_angular_flex_layout_flex.-VnyMD4Js9.js.map
