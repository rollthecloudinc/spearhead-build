import "@nf-internal/chunk-GL2BOVXA";
import * as i from "@angular/core";
import "@angular/core";
import * as s from "@angular/flex-layout/core";
import { StyleBuilder as r, BaseDirective2 as o, CoreModule as G } from "@angular/flex-layout/core";
import { coerceBooleanProperty as a } from "@angular/cdk/coercion";
var A = "stretch", R = "stretch", v = (() => { class e extends r {
    buildStyles(t) { return h(t || A); }
} return e.\u0275fac = (() => { let d; return function (g) { return (d || (d = i.\u0275\u0275getInheritedFactory(e)))(g || e); }; })(), e.\u0275prov = i.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" }), e; })(), x = (() => { class e extends o {
    constructor(t, g, l, n) { super(t, g, l, n), this.DIRECTIVE_KEY = "grid-align", this.styleCache = D, this.init(); }
} return e.\u0275fac = function (t) { return new (t || e)(i.\u0275\u0275directiveInject(i.ElementRef), i.\u0275\u0275directiveInject(v), i.\u0275\u0275directiveInject(s.StyleUtils), i.\u0275\u0275directiveInject(s.MediaMarshaller)); }, e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })(), D = new Map, y = ["gdGridAlign", "gdGridAlign.xs", "gdGridAlign.sm", "gdGridAlign.md", "gdGridAlign.lg", "gdGridAlign.xl", "gdGridAlign.lt-sm", "gdGridAlign.lt-md", "gdGridAlign.lt-lg", "gdGridAlign.lt-xl", "gdGridAlign.gt-xs", "gdGridAlign.gt-sm", "gdGridAlign.gt-md", "gdGridAlign.gt-lg"];
var Ue = (() => { class e extends x {
    constructor() { super(...arguments), this.inputs = y; }
} return e.\u0275fac = (() => { let d; return function (g) { return (d || (d = i.\u0275\u0275getInheritedFactory(e)))(g || e); }; })(), e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, selectors: [["", "gdGridAlign", ""], ["", "gdGridAlign.xs", ""], ["", "gdGridAlign.sm", ""], ["", "gdGridAlign.md", ""], ["", "gdGridAlign.lg", ""], ["", "gdGridAlign.xl", ""], ["", "gdGridAlign.lt-sm", ""], ["", "gdGridAlign.lt-md", ""], ["", "gdGridAlign.lt-lg", ""], ["", "gdGridAlign.lt-xl", ""], ["", "gdGridAlign.gt-xs", ""], ["", "gdGridAlign.gt-sm", ""], ["", "gdGridAlign.gt-md", ""], ["", "gdGridAlign.gt-lg", ""]], inputs: { gdGridAlign: "gdGridAlign", "gdGridAlign.xs": "gdGridAlign.xs", "gdGridAlign.sm": "gdGridAlign.sm", "gdGridAlign.md": "gdGridAlign.md", "gdGridAlign.lg": "gdGridAlign.lg", "gdGridAlign.xl": "gdGridAlign.xl", "gdGridAlign.lt-sm": "gdGridAlign.lt-sm", "gdGridAlign.lt-md": "gdGridAlign.lt-md", "gdGridAlign.lt-lg": "gdGridAlign.lt-lg", "gdGridAlign.lt-xl": "gdGridAlign.lt-xl", "gdGridAlign.gt-xs": "gdGridAlign.gt-xs", "gdGridAlign.gt-sm": "gdGridAlign.gt-sm", "gdGridAlign.gt-md": "gdGridAlign.gt-md", "gdGridAlign.gt-lg": "gdGridAlign.gt-lg" }, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })();
function h(e = "") { let d = {}, [t, g] = e.split(" "); switch (t) {
    case "end":
        d["justify-self"] = "end";
        break;
    case "center":
        d["justify-self"] = "center";
        break;
    case "stretch":
        d["justify-self"] = "stretch";
        break;
    case "start":
        d["justify-self"] = "start";
        break;
    default:
        d["justify-self"] = A;
        break;
} switch (g) {
    case "end":
        d["align-self"] = "end";
        break;
    case "center":
        d["align-self"] = "center";
        break;
    case "stretch":
        d["align-self"] = "stretch";
        break;
    case "start":
        d["align-self"] = "start";
        break;
    default:
        d["align-self"] = R;
        break;
} return d; }
var f = "start", w = "stretch", I = (() => { class e extends r {
    buildStyles(t, g) { return E(t || `${f} ${w}`, g.inline); }
} return e.\u0275fac = (() => { let d; return function (g) { return (d || (d = i.\u0275\u0275getInheritedFactory(e)))(g || e); }; })(), e.\u0275prov = i.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" }), e; })(), M = (() => { class e extends o {
    constructor(t, g, l, n) { super(t, g, l, n), this.DIRECTIVE_KEY = "grid-align-columns", this._inline = !1, this.init(); }
    get inline() { return this._inline; }
    set inline(t) { this._inline = a(t); }
    updateWithValue(t) { this.styleCache = this.inline ? _ : F, this.addStyles(t, { inline: this.inline }); }
} return e.\u0275fac = function (t) { return new (t || e)(i.\u0275\u0275directiveInject(i.ElementRef), i.\u0275\u0275directiveInject(I), i.\u0275\u0275directiveInject(s.StyleUtils), i.\u0275\u0275directiveInject(s.MediaMarshaller)); }, e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, inputs: { inline: [0, "gdInline", "inline"] }, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })(), F = new Map, _ = new Map, S = ["gdAlignColumns", "gdAlignColumns.xs", "gdAlignColumns.sm", "gdAlignColumns.md", "gdAlignColumns.lg", "gdAlignColumns.xl", "gdAlignColumns.lt-sm", "gdAlignColumns.lt-md", "gdAlignColumns.lt-lg", "gdAlignColumns.lt-xl", "gdAlignColumns.gt-xs", "gdAlignColumns.gt-sm", "gdAlignColumns.gt-md", "gdAlignColumns.gt-lg"];
var Te = (() => { class e extends M {
    constructor() { super(...arguments), this.inputs = S; }
} return e.\u0275fac = (() => { let d; return function (g) { return (d || (d = i.\u0275\u0275getInheritedFactory(e)))(g || e); }; })(), e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, selectors: [["", "gdAlignColumns", ""], ["", "gdAlignColumns.xs", ""], ["", "gdAlignColumns.sm", ""], ["", "gdAlignColumns.md", ""], ["", "gdAlignColumns.lg", ""], ["", "gdAlignColumns.xl", ""], ["", "gdAlignColumns.lt-sm", ""], ["", "gdAlignColumns.lt-md", ""], ["", "gdAlignColumns.lt-lg", ""], ["", "gdAlignColumns.lt-xl", ""], ["", "gdAlignColumns.gt-xs", ""], ["", "gdAlignColumns.gt-sm", ""], ["", "gdAlignColumns.gt-md", ""], ["", "gdAlignColumns.gt-lg", ""]], inputs: { gdAlignColumns: "gdAlignColumns", "gdAlignColumns.xs": "gdAlignColumns.xs", "gdAlignColumns.sm": "gdAlignColumns.sm", "gdAlignColumns.md": "gdAlignColumns.md", "gdAlignColumns.lg": "gdAlignColumns.lg", "gdAlignColumns.xl": "gdAlignColumns.xl", "gdAlignColumns.lt-sm": "gdAlignColumns.lt-sm", "gdAlignColumns.lt-md": "gdAlignColumns.lt-md", "gdAlignColumns.lt-lg": "gdAlignColumns.lt-lg", "gdAlignColumns.lt-xl": "gdAlignColumns.lt-xl", "gdAlignColumns.gt-xs": "gdAlignColumns.gt-xs", "gdAlignColumns.gt-sm": "gdAlignColumns.gt-sm", "gdAlignColumns.gt-md": "gdAlignColumns.gt-md", "gdAlignColumns.gt-lg": "gdAlignColumns.gt-lg" }, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })();
function E(e, d) { let t = {}, [g, l] = e.split(" "); switch (g) {
    case "center":
        t["align-content"] = "center";
        break;
    case "space-around":
        t["align-content"] = "space-around";
        break;
    case "space-between":
        t["align-content"] = "space-between";
        break;
    case "space-evenly":
        t["align-content"] = "space-evenly";
        break;
    case "end":
        t["align-content"] = "end";
        break;
    case "start":
        t["align-content"] = "start";
        break;
    case "stretch":
        t["align-content"] = "stretch";
        break;
    default:
        t["align-content"] = f;
        break;
} switch (l) {
    case "start":
        t["align-items"] = "start";
        break;
    case "center":
        t["align-items"] = "center";
        break;
    case "end":
        t["align-items"] = "end";
        break;
    case "stretch":
        t["align-items"] = "stretch";
        break;
    default:
        t["align-items"] = w;
        break;
} return t.display = d ? "inline-grid" : "grid", t; }
var C = "start", p = "stretch", B = (() => { class e extends r {
    buildStyles(t, g) { return U(t || `${C} ${p}`, g.inline); }
} return e.\u0275fac = (() => { let d; return function (g) { return (d || (d = i.\u0275\u0275getInheritedFactory(e)))(g || e); }; })(), e.\u0275prov = i.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" }), e; })(), j = (() => { class e extends o {
    constructor(t, g, l, n) { super(t, g, l, n), this.DIRECTIVE_KEY = "grid-align-rows", this._inline = !1, this.init(); }
    get inline() { return this._inline; }
    set inline(t) { this._inline = a(t); }
    updateWithValue(t) { this.styleCache = this.inline ? k : b, this.addStyles(t, { inline: this.inline }); }
} return e.\u0275fac = function (t) { return new (t || e)(i.\u0275\u0275directiveInject(i.ElementRef), i.\u0275\u0275directiveInject(B), i.\u0275\u0275directiveInject(s.StyleUtils), i.\u0275\u0275directiveInject(s.MediaMarshaller)); }, e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, inputs: { inline: [0, "gdInline", "inline"] }, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })(), b = new Map, k = new Map, $ = ["gdAlignRows", "gdAlignRows.xs", "gdAlignRows.sm", "gdAlignRows.md", "gdAlignRows.lg", "gdAlignRows.xl", "gdAlignRows.lt-sm", "gdAlignRows.lt-md", "gdAlignRows.lt-lg", "gdAlignRows.lt-xl", "gdAlignRows.gt-xs", "gdAlignRows.gt-sm", "gdAlignRows.gt-md", "gdAlignRows.gt-lg"];
var Ve = (() => { class e extends j {
    constructor() { super(...arguments), this.inputs = $; }
} return e.\u0275fac = (() => { let d; return function (g) { return (d || (d = i.\u0275\u0275getInheritedFactory(e)))(g || e); }; })(), e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, selectors: [["", "gdAlignRows", ""], ["", "gdAlignRows.xs", ""], ["", "gdAlignRows.sm", ""], ["", "gdAlignRows.md", ""], ["", "gdAlignRows.lg", ""], ["", "gdAlignRows.xl", ""], ["", "gdAlignRows.lt-sm", ""], ["", "gdAlignRows.lt-md", ""], ["", "gdAlignRows.lt-lg", ""], ["", "gdAlignRows.lt-xl", ""], ["", "gdAlignRows.gt-xs", ""], ["", "gdAlignRows.gt-sm", ""], ["", "gdAlignRows.gt-md", ""], ["", "gdAlignRows.gt-lg", ""]], inputs: { gdAlignRows: "gdAlignRows", "gdAlignRows.xs": "gdAlignRows.xs", "gdAlignRows.sm": "gdAlignRows.sm", "gdAlignRows.md": "gdAlignRows.md", "gdAlignRows.lg": "gdAlignRows.lg", "gdAlignRows.xl": "gdAlignRows.xl", "gdAlignRows.lt-sm": "gdAlignRows.lt-sm", "gdAlignRows.lt-md": "gdAlignRows.lt-md", "gdAlignRows.lt-lg": "gdAlignRows.lt-lg", "gdAlignRows.lt-xl": "gdAlignRows.lt-xl", "gdAlignRows.gt-xs": "gdAlignRows.gt-xs", "gdAlignRows.gt-sm": "gdAlignRows.gt-sm", "gdAlignRows.gt-md": "gdAlignRows.gt-md", "gdAlignRows.gt-lg": "gdAlignRows.gt-lg" }, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })();
function U(e, d) { let t = {}, [g, l] = e.split(" "); switch (g) {
    case "center":
    case "space-around":
    case "space-between":
    case "space-evenly":
    case "end":
    case "start":
    case "stretch":
        t["justify-content"] = g;
        break;
    default:
        t["justify-content"] = C;
        break;
} switch (l) {
    case "start":
    case "center":
    case "end":
    case "stretch":
        t["justify-items"] = l;
        break;
    default:
        t["justify-items"] = p;
        break;
} return t.display = d ? "inline-grid" : "grid", t; }
var T = "auto", V = (() => { class e extends r {
    buildStyles(t) { return { "grid-area": t || T }; }
} return e.\u0275fac = (() => { let d; return function (g) { return (d || (d = i.\u0275\u0275getInheritedFactory(e)))(g || e); }; })(), e.\u0275prov = i.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" }), e; })(), L = (() => { class e extends o {
    constructor(t, g, l, n) { super(t, l, g, n), this.DIRECTIVE_KEY = "grid-area", this.styleCache = K, this.init(); }
} return e.\u0275fac = function (t) { return new (t || e)(i.\u0275\u0275directiveInject(i.ElementRef), i.\u0275\u0275directiveInject(s.StyleUtils), i.\u0275\u0275directiveInject(V), i.\u0275\u0275directiveInject(s.MediaMarshaller)); }, e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })(), K = new Map, Y = ["gdArea", "gdArea.xs", "gdArea.sm", "gdArea.md", "gdArea.lg", "gdArea.xl", "gdArea.lt-sm", "gdArea.lt-md", "gdArea.lt-lg", "gdArea.lt-xl", "gdArea.gt-xs", "gdArea.gt-sm", "gdArea.gt-md", "gdArea.gt-lg"];
var Le = (() => { class e extends L {
    constructor() { super(...arguments), this.inputs = Y; }
} return e.\u0275fac = (() => { let d; return function (g) { return (d || (d = i.\u0275\u0275getInheritedFactory(e)))(g || e); }; })(), e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, selectors: [["", "gdArea", ""], ["", "gdArea.xs", ""], ["", "gdArea.sm", ""], ["", "gdArea.md", ""], ["", "gdArea.lg", ""], ["", "gdArea.xl", ""], ["", "gdArea.lt-sm", ""], ["", "gdArea.lt-md", ""], ["", "gdArea.lt-lg", ""], ["", "gdArea.lt-xl", ""], ["", "gdArea.gt-xs", ""], ["", "gdArea.gt-sm", ""], ["", "gdArea.gt-md", ""], ["", "gdArea.gt-lg", ""]], inputs: { gdArea: "gdArea", "gdArea.xs": "gdArea.xs", "gdArea.sm": "gdArea.sm", "gdArea.md": "gdArea.md", "gdArea.lg": "gdArea.lg", "gdArea.xl": "gdArea.xl", "gdArea.lt-sm": "gdArea.lt-sm", "gdArea.lt-md": "gdArea.lt-md", "gdArea.lt-lg": "gdArea.lt-lg", "gdArea.lt-xl": "gdArea.lt-xl", "gdArea.gt-xs": "gdArea.gt-xs", "gdArea.gt-sm": "gdArea.gt-sm", "gdArea.gt-md": "gdArea.gt-md", "gdArea.gt-lg": "gdArea.gt-lg" }, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })();
var W = "none", O = "|", N = (() => { class e extends r {
    buildStyles(t, g) { let l = (t || W).split(O).map(n => `"${n.trim()}"`); return { display: g.inline ? "inline-grid" : "grid", "grid-template-areas": l.join(" ") }; }
} return e.\u0275fac = (() => { let d; return function (g) { return (d || (d = i.\u0275\u0275getInheritedFactory(e)))(g || e); }; })(), e.\u0275prov = i.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" }), e; })(), P = (() => { class e extends o {
    constructor(t, g, l, n) { super(t, l, g, n), this.DIRECTIVE_KEY = "grid-areas", this._inline = !1, this.init(); }
    get inline() { return this._inline; }
    set inline(t) { this._inline = a(t); }
    updateWithValue(t) { this.styleCache = this.inline ? z : q, this.addStyles(t, { inline: this.inline }); }
} return e.\u0275fac = function (t) { return new (t || e)(i.\u0275\u0275directiveInject(i.ElementRef), i.\u0275\u0275directiveInject(s.StyleUtils), i.\u0275\u0275directiveInject(N), i.\u0275\u0275directiveInject(s.MediaMarshaller)); }, e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, inputs: { inline: [0, "gdInline", "inline"] }, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })(), q = new Map, z = new Map, H = ["gdAreas", "gdAreas.xs", "gdAreas.sm", "gdAreas.md", "gdAreas.lg", "gdAreas.xl", "gdAreas.lt-sm", "gdAreas.lt-md", "gdAreas.lt-lg", "gdAreas.lt-xl", "gdAreas.gt-xs", "gdAreas.gt-sm", "gdAreas.gt-md", "gdAreas.gt-lg"];
var Ke = (() => { class e extends P {
    constructor() { super(...arguments), this.inputs = H; }
} return e.\u0275fac = (() => { let d; return function (g) { return (d || (d = i.\u0275\u0275getInheritedFactory(e)))(g || e); }; })(), e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, selectors: [["", "gdAreas", ""], ["", "gdAreas.xs", ""], ["", "gdAreas.sm", ""], ["", "gdAreas.md", ""], ["", "gdAreas.lg", ""], ["", "gdAreas.xl", ""], ["", "gdAreas.lt-sm", ""], ["", "gdAreas.lt-md", ""], ["", "gdAreas.lt-lg", ""], ["", "gdAreas.lt-xl", ""], ["", "gdAreas.gt-xs", ""], ["", "gdAreas.gt-sm", ""], ["", "gdAreas.gt-md", ""], ["", "gdAreas.gt-lg", ""]], inputs: { gdAreas: "gdAreas", "gdAreas.xs": "gdAreas.xs", "gdAreas.sm": "gdAreas.sm", "gdAreas.md": "gdAreas.md", "gdAreas.lg": "gdAreas.lg", "gdAreas.xl": "gdAreas.xl", "gdAreas.lt-sm": "gdAreas.lt-sm", "gdAreas.lt-md": "gdAreas.lt-md", "gdAreas.lt-lg": "gdAreas.lt-lg", "gdAreas.lt-xl": "gdAreas.lt-xl", "gdAreas.gt-xs": "gdAreas.gt-xs", "gdAreas.gt-sm": "gdAreas.gt-sm", "gdAreas.gt-md": "gdAreas.gt-md", "gdAreas.gt-lg": "gdAreas.gt-lg" }, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })();
var J = "initial", Q = (() => { class e extends r {
    buildStyles(t, g) { let [l, n] = (t || J).split(" "); return l !== "column" && l !== "row" && l !== "dense" && (l = "row"), n = n === "dense" && l !== "dense" ? " dense" : "", { display: g.inline ? "inline-grid" : "grid", "grid-auto-flow": l + n }; }
} return e.\u0275fac = (() => { let d; return function (g) { return (d || (d = i.\u0275\u0275getInheritedFactory(e)))(g || e); }; })(), e.\u0275prov = i.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" }), e; })(), X = (() => { class e extends o {
    constructor(t, g, l, n) { super(t, g, l, n), this._inline = !1, this.DIRECTIVE_KEY = "grid-auto", this.init(); }
    get inline() { return this._inline; }
    set inline(t) { this._inline = a(t); }
    updateWithValue(t) { this.styleCache = this.inline ? ee : Z, this.addStyles(t, { inline: this.inline }); }
} return e.\u0275fac = function (t) { return new (t || e)(i.\u0275\u0275directiveInject(i.ElementRef), i.\u0275\u0275directiveInject(Q), i.\u0275\u0275directiveInject(s.StyleUtils), i.\u0275\u0275directiveInject(s.MediaMarshaller)); }, e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, inputs: { inline: [0, "gdInline", "inline"] }, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })(), Z = new Map, ee = new Map, te = ["gdAuto", "gdAuto.xs", "gdAuto.sm", "gdAuto.md", "gdAuto.lg", "gdAuto.xl", "gdAuto.lt-sm", "gdAuto.lt-md", "gdAuto.lt-lg", "gdAuto.lt-xl", "gdAuto.gt-xs", "gdAuto.gt-sm", "gdAuto.gt-md", "gdAuto.gt-lg"];
var Ye = (() => { class e extends X {
    constructor() { super(...arguments), this.inputs = te; }
} return e.\u0275fac = (() => { let d; return function (g) { return (d || (d = i.\u0275\u0275getInheritedFactory(e)))(g || e); }; })(), e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, selectors: [["", "gdAuto", ""], ["", "gdAuto.xs", ""], ["", "gdAuto.sm", ""], ["", "gdAuto.md", ""], ["", "gdAuto.lg", ""], ["", "gdAuto.xl", ""], ["", "gdAuto.lt-sm", ""], ["", "gdAuto.lt-md", ""], ["", "gdAuto.lt-lg", ""], ["", "gdAuto.lt-xl", ""], ["", "gdAuto.gt-xs", ""], ["", "gdAuto.gt-sm", ""], ["", "gdAuto.gt-md", ""], ["", "gdAuto.gt-lg", ""]], inputs: { gdAuto: "gdAuto", "gdAuto.xs": "gdAuto.xs", "gdAuto.sm": "gdAuto.sm", "gdAuto.md": "gdAuto.md", "gdAuto.lg": "gdAuto.lg", "gdAuto.xl": "gdAuto.xl", "gdAuto.lt-sm": "gdAuto.lt-sm", "gdAuto.lt-md": "gdAuto.lt-md", "gdAuto.lt-lg": "gdAuto.lt-lg", "gdAuto.lt-xl": "gdAuto.lt-xl", "gdAuto.gt-xs": "gdAuto.gt-xs", "gdAuto.gt-sm": "gdAuto.gt-sm", "gdAuto.gt-md": "gdAuto.gt-md", "gdAuto.gt-lg": "gdAuto.gt-lg" }, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })();
var ie = "auto", de = (() => { class e extends r {
    buildStyles(t) { return { "grid-column": t || ie }; }
} return e.\u0275fac = (() => { let d; return function (g) { return (d || (d = i.\u0275\u0275getInheritedFactory(e)))(g || e); }; })(), e.\u0275prov = i.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" }), e; })(), ge = (() => { class e extends o {
    constructor(t, g, l, n) { super(t, g, l, n), this.DIRECTIVE_KEY = "grid-column", this.styleCache = le, this.init(); }
} return e.\u0275fac = function (t) { return new (t || e)(i.\u0275\u0275directiveInject(i.ElementRef), i.\u0275\u0275directiveInject(de), i.\u0275\u0275directiveInject(s.StyleUtils), i.\u0275\u0275directiveInject(s.MediaMarshaller)); }, e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })(), le = new Map, ne = ["gdColumn", "gdColumn.xs", "gdColumn.sm", "gdColumn.md", "gdColumn.lg", "gdColumn.xl", "gdColumn.lt-sm", "gdColumn.lt-md", "gdColumn.lt-lg", "gdColumn.lt-xl", "gdColumn.gt-xs", "gdColumn.gt-sm", "gdColumn.gt-md", "gdColumn.gt-lg"];
var We = (() => { class e extends ge {
    constructor() { super(...arguments), this.inputs = ne; }
} return e.\u0275fac = (() => { let d; return function (g) { return (d || (d = i.\u0275\u0275getInheritedFactory(e)))(g || e); }; })(), e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, selectors: [["", "gdColumn", ""], ["", "gdColumn.xs", ""], ["", "gdColumn.sm", ""], ["", "gdColumn.md", ""], ["", "gdColumn.lg", ""], ["", "gdColumn.xl", ""], ["", "gdColumn.lt-sm", ""], ["", "gdColumn.lt-md", ""], ["", "gdColumn.lt-lg", ""], ["", "gdColumn.lt-xl", ""], ["", "gdColumn.gt-xs", ""], ["", "gdColumn.gt-sm", ""], ["", "gdColumn.gt-md", ""], ["", "gdColumn.gt-lg", ""]], inputs: { gdColumn: "gdColumn", "gdColumn.xs": "gdColumn.xs", "gdColumn.sm": "gdColumn.sm", "gdColumn.md": "gdColumn.md", "gdColumn.lg": "gdColumn.lg", "gdColumn.xl": "gdColumn.xl", "gdColumn.lt-sm": "gdColumn.lt-sm", "gdColumn.lt-md": "gdColumn.lt-md", "gdColumn.lt-lg": "gdColumn.lt-lg", "gdColumn.lt-xl": "gdColumn.lt-xl", "gdColumn.gt-xs": "gdColumn.gt-xs", "gdColumn.gt-sm": "gdColumn.gt-sm", "gdColumn.gt-md": "gdColumn.gt-md", "gdColumn.gt-lg": "gdColumn.gt-lg" }, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })();
var se = "none", c = "!", re = (() => { class e extends r {
    buildStyles(t, g) { t = t || se; let l = !1; t.endsWith(c) && (t = t.substring(0, t.indexOf(c)), l = !0); let n = { display: g.inline ? "inline-grid" : "grid", "grid-auto-columns": "", "grid-template-columns": "" }, u = l ? "grid-auto-columns" : "grid-template-columns"; return n[u] = t, n; }
} return e.\u0275fac = (() => { let d; return function (g) { return (d || (d = i.\u0275\u0275getInheritedFactory(e)))(g || e); }; })(), e.\u0275prov = i.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" }), e; })(), oe = (() => { class e extends o {
    constructor(t, g, l, n) { super(t, g, l, n), this.DIRECTIVE_KEY = "grid-columns", this._inline = !1, this.init(); }
    get inline() { return this._inline; }
    set inline(t) { this._inline = a(t); }
    updateWithValue(t) { this.styleCache = this.inline ? ue : ae, this.addStyles(t, { inline: this.inline }); }
} return e.\u0275fac = function (t) { return new (t || e)(i.\u0275\u0275directiveInject(i.ElementRef), i.\u0275\u0275directiveInject(re), i.\u0275\u0275directiveInject(s.StyleUtils), i.\u0275\u0275directiveInject(s.MediaMarshaller)); }, e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, inputs: { inline: [0, "gdInline", "inline"] }, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })(), ae = new Map, ue = new Map, ce = ["gdColumns", "gdColumns.xs", "gdColumns.sm", "gdColumns.md", "gdColumns.lg", "gdColumns.xl", "gdColumns.lt-sm", "gdColumns.lt-md", "gdColumns.lt-lg", "gdColumns.lt-xl", "gdColumns.gt-xs", "gdColumns.gt-sm", "gdColumns.gt-md", "gdColumns.gt-lg"];
var Oe = (() => { class e extends oe {
    constructor() { super(...arguments), this.inputs = ce; }
} return e.\u0275fac = (() => { let d; return function (g) { return (d || (d = i.\u0275\u0275getInheritedFactory(e)))(g || e); }; })(), e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, selectors: [["", "gdColumns", ""], ["", "gdColumns.xs", ""], ["", "gdColumns.sm", ""], ["", "gdColumns.md", ""], ["", "gdColumns.lg", ""], ["", "gdColumns.xl", ""], ["", "gdColumns.lt-sm", ""], ["", "gdColumns.lt-md", ""], ["", "gdColumns.lt-lg", ""], ["", "gdColumns.lt-xl", ""], ["", "gdColumns.gt-xs", ""], ["", "gdColumns.gt-sm", ""], ["", "gdColumns.gt-md", ""], ["", "gdColumns.gt-lg", ""]], inputs: { gdColumns: "gdColumns", "gdColumns.xs": "gdColumns.xs", "gdColumns.sm": "gdColumns.sm", "gdColumns.md": "gdColumns.md", "gdColumns.lg": "gdColumns.lg", "gdColumns.xl": "gdColumns.xl", "gdColumns.lt-sm": "gdColumns.lt-sm", "gdColumns.lt-md": "gdColumns.lt-md", "gdColumns.lt-lg": "gdColumns.lt-lg", "gdColumns.lt-xl": "gdColumns.lt-xl", "gdColumns.gt-xs": "gdColumns.gt-xs", "gdColumns.gt-sm": "gdColumns.gt-sm", "gdColumns.gt-md": "gdColumns.gt-md", "gdColumns.gt-lg": "gdColumns.gt-lg" }, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })();
var me = "0", Ae = (() => { class e extends r {
    buildStyles(t, g) { return { display: g.inline ? "inline-grid" : "grid", "grid-gap": t || me }; }
} return e.\u0275fac = (() => { let d; return function (g) { return (d || (d = i.\u0275\u0275getInheritedFactory(e)))(g || e); }; })(), e.\u0275prov = i.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" }), e; })(), fe = (() => { class e extends o {
    constructor(t, g, l, n) { super(t, l, g, n), this.DIRECTIVE_KEY = "grid-gap", this._inline = !1, this.init(); }
    get inline() { return this._inline; }
    set inline(t) { this._inline = a(t); }
    updateWithValue(t) { this.styleCache = this.inline ? Ce : we, this.addStyles(t, { inline: this.inline }); }
} return e.\u0275fac = function (t) { return new (t || e)(i.\u0275\u0275directiveInject(i.ElementRef), i.\u0275\u0275directiveInject(s.StyleUtils), i.\u0275\u0275directiveInject(Ae), i.\u0275\u0275directiveInject(s.MediaMarshaller)); }, e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, inputs: { inline: [0, "gdInline", "inline"] }, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })(), we = new Map, Ce = new Map, pe = ["gdGap", "gdGap.xs", "gdGap.sm", "gdGap.md", "gdGap.lg", "gdGap.xl", "gdGap.lt-sm", "gdGap.lt-md", "gdGap.lt-lg", "gdGap.lt-xl", "gdGap.gt-xs", "gdGap.gt-sm", "gdGap.gt-md", "gdGap.gt-lg"];
var Ne = (() => { class e extends fe {
    constructor() { super(...arguments), this.inputs = pe; }
} return e.\u0275fac = (() => { let d; return function (g) { return (d || (d = i.\u0275\u0275getInheritedFactory(e)))(g || e); }; })(), e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, selectors: [["", "gdGap", ""], ["", "gdGap.xs", ""], ["", "gdGap.sm", ""], ["", "gdGap.md", ""], ["", "gdGap.lg", ""], ["", "gdGap.xl", ""], ["", "gdGap.lt-sm", ""], ["", "gdGap.lt-md", ""], ["", "gdGap.lt-lg", ""], ["", "gdGap.lt-xl", ""], ["", "gdGap.gt-xs", ""], ["", "gdGap.gt-sm", ""], ["", "gdGap.gt-md", ""], ["", "gdGap.gt-lg", ""]], inputs: { gdGap: "gdGap", "gdGap.xs": "gdGap.xs", "gdGap.sm": "gdGap.sm", "gdGap.md": "gdGap.md", "gdGap.lg": "gdGap.lg", "gdGap.xl": "gdGap.xl", "gdGap.lt-sm": "gdGap.lt-sm", "gdGap.lt-md": "gdGap.lt-md", "gdGap.lt-lg": "gdGap.lt-lg", "gdGap.lt-xl": "gdGap.lt-xl", "gdGap.gt-xs": "gdGap.gt-xs", "gdGap.gt-sm": "gdGap.gt-sm", "gdGap.gt-md": "gdGap.gt-md", "gdGap.gt-lg": "gdGap.gt-lg" }, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })();
var Ge = "auto", Re = (() => { class e extends r {
    buildStyles(t) { return { "grid-row": t || Ge }; }
} return e.\u0275fac = (() => { let d; return function (g) { return (d || (d = i.\u0275\u0275getInheritedFactory(e)))(g || e); }; })(), e.\u0275prov = i.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" }), e; })(), ve = (() => { class e extends o {
    constructor(t, g, l, n) { super(t, g, l, n), this.DIRECTIVE_KEY = "grid-row", this.styleCache = xe, this.init(); }
} return e.\u0275fac = function (t) { return new (t || e)(i.\u0275\u0275directiveInject(i.ElementRef), i.\u0275\u0275directiveInject(Re), i.\u0275\u0275directiveInject(s.StyleUtils), i.\u0275\u0275directiveInject(s.MediaMarshaller)); }, e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })(), xe = new Map, De = ["gdRow", "gdRow.xs", "gdRow.sm", "gdRow.md", "gdRow.lg", "gdRow.xl", "gdRow.lt-sm", "gdRow.lt-md", "gdRow.lt-lg", "gdRow.lt-xl", "gdRow.gt-xs", "gdRow.gt-sm", "gdRow.gt-md", "gdRow.gt-lg"];
var Pe = (() => { class e extends ve {
    constructor() { super(...arguments), this.inputs = De; }
} return e.\u0275fac = (() => { let d; return function (g) { return (d || (d = i.\u0275\u0275getInheritedFactory(e)))(g || e); }; })(), e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, selectors: [["", "gdRow", ""], ["", "gdRow.xs", ""], ["", "gdRow.sm", ""], ["", "gdRow.md", ""], ["", "gdRow.lg", ""], ["", "gdRow.xl", ""], ["", "gdRow.lt-sm", ""], ["", "gdRow.lt-md", ""], ["", "gdRow.lt-lg", ""], ["", "gdRow.lt-xl", ""], ["", "gdRow.gt-xs", ""], ["", "gdRow.gt-sm", ""], ["", "gdRow.gt-md", ""], ["", "gdRow.gt-lg", ""]], inputs: { gdRow: "gdRow", "gdRow.xs": "gdRow.xs", "gdRow.sm": "gdRow.sm", "gdRow.md": "gdRow.md", "gdRow.lg": "gdRow.lg", "gdRow.xl": "gdRow.xl", "gdRow.lt-sm": "gdRow.lt-sm", "gdRow.lt-md": "gdRow.lt-md", "gdRow.lt-lg": "gdRow.lt-lg", "gdRow.lt-xl": "gdRow.lt-xl", "gdRow.gt-xs": "gdRow.gt-xs", "gdRow.gt-sm": "gdRow.gt-sm", "gdRow.gt-md": "gdRow.gt-md", "gdRow.gt-lg": "gdRow.gt-lg" }, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })();
var ye = "none", m = "!", he = (() => { class e extends r {
    buildStyles(t, g) { t = t || ye; let l = !1; t.endsWith(m) && (t = t.substring(0, t.indexOf(m)), l = !0); let n = { display: g.inline ? "inline-grid" : "grid", "grid-auto-rows": "", "grid-template-rows": "" }, u = l ? "grid-auto-rows" : "grid-template-rows"; return n[u] = t, n; }
} return e.\u0275fac = (() => { let d; return function (g) { return (d || (d = i.\u0275\u0275getInheritedFactory(e)))(g || e); }; })(), e.\u0275prov = i.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" }), e; })(), Ie = (() => { class e extends o {
    constructor(t, g, l, n) { super(t, g, l, n), this.DIRECTIVE_KEY = "grid-rows", this._inline = !1, this.init(); }
    get inline() { return this._inline; }
    set inline(t) { this._inline = a(t); }
    updateWithValue(t) { this.styleCache = this.inline ? Fe : Me, this.addStyles(t, { inline: this.inline }); }
} return e.\u0275fac = function (t) { return new (t || e)(i.\u0275\u0275directiveInject(i.ElementRef), i.\u0275\u0275directiveInject(he), i.\u0275\u0275directiveInject(s.StyleUtils), i.\u0275\u0275directiveInject(s.MediaMarshaller)); }, e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, inputs: { inline: [0, "gdInline", "inline"] }, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })(), Me = new Map, Fe = new Map, _e = ["gdRows", "gdRows.xs", "gdRows.sm", "gdRows.md", "gdRows.lg", "gdRows.xl", "gdRows.lt-sm", "gdRows.lt-md", "gdRows.lt-lg", "gdRows.lt-xl", "gdRows.gt-xs", "gdRows.gt-sm", "gdRows.gt-md", "gdRows.gt-lg"];
var qe = (() => { class e extends Ie {
    constructor() { super(...arguments), this.inputs = _e; }
} return e.\u0275fac = (() => { let d; return function (g) { return (d || (d = i.\u0275\u0275getInheritedFactory(e)))(g || e); }; })(), e.\u0275dir = i.\u0275\u0275defineDirective({ type: e, selectors: [["", "gdRows", ""], ["", "gdRows.xs", ""], ["", "gdRows.sm", ""], ["", "gdRows.md", ""], ["", "gdRows.lg", ""], ["", "gdRows.xl", ""], ["", "gdRows.lt-sm", ""], ["", "gdRows.lt-md", ""], ["", "gdRows.lt-lg", ""], ["", "gdRows.lt-xl", ""], ["", "gdRows.gt-xs", ""], ["", "gdRows.gt-sm", ""], ["", "gdRows.gt-md", ""], ["", "gdRows.gt-lg", ""]], inputs: { gdRows: "gdRows", "gdRows.xs": "gdRows.xs", "gdRows.sm": "gdRows.sm", "gdRows.md": "gdRows.md", "gdRows.lg": "gdRows.lg", "gdRows.xl": "gdRows.xl", "gdRows.lt-sm": "gdRows.lt-sm", "gdRows.lt-md": "gdRows.lt-md", "gdRows.lt-lg": "gdRows.lt-lg", "gdRows.lt-xl": "gdRows.lt-xl", "gdRows.gt-xs": "gdRows.gt-xs", "gdRows.gt-sm": "gdRows.gt-sm", "gdRows.gt-md": "gdRows.gt-md", "gdRows.gt-lg": "gdRows.gt-lg" }, standalone: !1, features: [i.\u0275\u0275InheritDefinitionFeature] }), e; })();
var ze = (() => { class e {
} return e.\u0275fac = function (t) { return new (t || e); }, e.\u0275mod = i.\u0275\u0275defineNgModule({ type: e }), e.\u0275inj = i.\u0275\u0275defineInjector({ imports: [G] }), e; })();
export { Te as DefaultGridAlignColumnsDirective, Ue as DefaultGridAlignDirective, Ve as DefaultGridAlignRowsDirective, Le as DefaultGridAreaDirective, Ke as DefaultGridAreasDirective, Ye as DefaultGridAutoDirective, We as DefaultGridColumnDirective, Oe as DefaultGridColumnsDirective, Ne as DefaultGridGapDirective, Pe as DefaultGridRowDirective, qe as DefaultGridRowsDirective, M as GridAlignColumnsDirective, I as GridAlignColumnsStyleBuilder, x as GridAlignDirective, j as GridAlignRowsDirective, B as GridAlignRowsStyleBuilder, v as GridAlignStyleBuilder, L as GridAreaDirective, V as GridAreaStyleBuilder, P as GridAreasDirective, N as GridAreasStyleBuiler, X as GridAutoDirective, Q as GridAutoStyleBuilder, ge as GridColumnDirective, de as GridColumnStyleBuilder, oe as GridColumnsDirective, re as GridColumnsStyleBuilder, fe as GridGapDirective, Ae as GridGapStyleBuilder, ze as GridModule, ve as GridRowDirective, Re as GridRowStyleBuilder, Ie as GridRowsDirective, he as GridRowsStyleBuilder };
/*! Bundled license information:

@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
//# sourceMappingURL=_angular_flex_layout_grid.SzGPhA0M75.js.map
