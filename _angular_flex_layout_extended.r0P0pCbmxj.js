import { a as h } from "@nf-internal/chunk-J4XOFOAH";
import * as s from "@angular/core";
import { PLATFORM_ID as S, SecurityContext as F } from "@angular/core";
import * as a from "@angular/flex-layout/core";
import { StyleBuilder as C, BaseDirective2 as f, SERVER_TOKEN as y, LAYOUT_CONFIG as b, CoreModule as V } from "@angular/flex-layout/core";
import * as x from "@angular/common";
import { isPlatformServer as o, NgClass as _, NgStyle as k } from "@angular/common";
import { coerceBooleanProperty as B } from "@angular/cdk/coercion";
import { takeUntil as L } from "rxjs/operators";
import * as D from "@angular/platform-browser";
var T = (() => { class e extends C {
    buildStyles(t) { return { content: t ? `url(${t})` : "" }; }
} return e.\u0275fac = (() => { let l; return function (i) { return (l || (l = s.\u0275\u0275getInheritedFactory(e)))(i || e); }; })(), e.\u0275prov = s.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" }), e; })(), R = (() => { class e extends f {
    constructor(t, i, n, d, r, g) { super(t, i, n, d), this.platformId = r, this.serverModuleLoaded = g, this.DIRECTIVE_KEY = "img-src", this.defaultSrc = "", this.styleCache = A, this.init(), this.setValue(this.nativeElement.getAttribute("src") || "", ""), o(this.platformId) && this.serverModuleLoaded && this.nativeElement.setAttribute("src", ""); }
    set src(t) { this.defaultSrc = t, this.setValue(this.defaultSrc, ""); }
    updateWithValue(t) { let i = t || this.defaultSrc; o(this.platformId) && this.serverModuleLoaded ? this.addStyles(i) : this.nativeElement.setAttribute("src", i); }
} return e.\u0275fac = function (t) { return new (t || e)(s.\u0275\u0275directiveInject(s.ElementRef), s.\u0275\u0275directiveInject(T), s.\u0275\u0275directiveInject(a.StyleUtils), s.\u0275\u0275directiveInject(a.MediaMarshaller), s.\u0275\u0275directiveInject(S), s.\u0275\u0275directiveInject(y)); }, e.\u0275dir = s.\u0275\u0275defineDirective({ type: e, inputs: { src: "src" }, standalone: !1, features: [s.\u0275\u0275InheritDefinitionFeature] }), e; })(), A = new Map, $ = ["src.xs", "src.sm", "src.md", "src.lg", "src.xl", "src.lt-sm", "src.lt-md", "src.lt-lg", "src.lt-xl", "src.gt-xs", "src.gt-sm", "src.gt-md", "src.gt-lg"];
var ge = (() => { class e extends R {
    constructor() { super(...arguments), this.inputs = $; }
} return e.\u0275fac = (() => { let l; return function (i) { return (l || (l = s.\u0275\u0275getInheritedFactory(e)))(i || e); }; })(), e.\u0275dir = s.\u0275\u0275defineDirective({ type: e, selectors: [["img", "src.xs", ""], ["img", "src.sm", ""], ["img", "src.md", ""], ["img", "src.lg", ""], ["img", "src.xl", ""], ["img", "src.lt-sm", ""], ["img", "src.lt-md", ""], ["img", "src.lt-lg", ""], ["img", "src.lt-xl", ""], ["img", "src.gt-xs", ""], ["img", "src.gt-sm", ""], ["img", "src.gt-md", ""], ["img", "src.gt-lg", ""]], inputs: { "src.xs": "src.xs", "src.sm": "src.sm", "src.md": "src.md", "src.lg": "src.lg", "src.xl": "src.xl", "src.lt-sm": "src.lt-sm", "src.lt-md": "src.lt-md", "src.lt-lg": "src.lt-lg", "src.lt-xl": "src.lt-xl", "src.gt-xs": "src.gt-xs", "src.gt-sm": "src.gt-sm", "src.gt-md": "src.gt-md", "src.gt-lg": "src.gt-lg" }, standalone: !1, features: [s.\u0275\u0275InheritDefinitionFeature] }), e; })();
var O = (() => { class e extends f {
    constructor(t, i, n, d, r, g, c) { super(t, null, i, n), this.ngClassInstance = c, this.DIRECTIVE_KEY = "ngClass", this.ngClassInstance || (this.ngClassInstance = new _(d, r, t, g)), this.init(), this.setValue("", ""); }
    set klass(t) { this.ngClassInstance.klass = t, this.setValue(t, ""); }
    updateWithValue(t) { this.ngClassInstance.ngClass = t, this.ngClassInstance.ngDoCheck(); }
    ngDoCheck() { this.ngClassInstance.ngDoCheck(); }
} return e.\u0275fac = function (t) { return new (t || e)(s.\u0275\u0275directiveInject(s.ElementRef), s.\u0275\u0275directiveInject(a.StyleUtils), s.\u0275\u0275directiveInject(a.MediaMarshaller), s.\u0275\u0275directiveInject(s.IterableDiffers), s.\u0275\u0275directiveInject(s.KeyValueDiffers), s.\u0275\u0275directiveInject(s.Renderer2), s.\u0275\u0275directiveInject(x.NgClass, 10)); }, e.\u0275dir = s.\u0275\u0275defineDirective({ type: e, inputs: { klass: [0, "class", "klass"] }, standalone: !1, features: [s.\u0275\u0275InheritDefinitionFeature] }), e; })(), K = ["ngClass", "ngClass.xs", "ngClass.sm", "ngClass.md", "ngClass.lg", "ngClass.xl", "ngClass.lt-sm", "ngClass.lt-md", "ngClass.lt-lg", "ngClass.lt-xl", "ngClass.gt-xs", "ngClass.gt-sm", "ngClass.gt-md", "ngClass.gt-lg"];
var ae = (() => { class e extends O {
    constructor() { super(...arguments), this.inputs = K; }
} return e.\u0275fac = (() => { let l; return function (i) { return (l || (l = s.\u0275\u0275getInheritedFactory(e)))(i || e); }; })(), e.\u0275dir = s.\u0275\u0275defineDirective({ type: e, selectors: [["", "ngClass", ""], ["", "ngClass.xs", ""], ["", "ngClass.sm", ""], ["", "ngClass.md", ""], ["", "ngClass.lg", ""], ["", "ngClass.xl", ""], ["", "ngClass.lt-sm", ""], ["", "ngClass.lt-md", ""], ["", "ngClass.lt-lg", ""], ["", "ngClass.lt-xl", ""], ["", "ngClass.gt-xs", ""], ["", "ngClass.gt-sm", ""], ["", "ngClass.gt-md", ""], ["", "ngClass.gt-lg", ""]], inputs: { ngClass: "ngClass", "ngClass.xs": "ngClass.xs", "ngClass.sm": "ngClass.sm", "ngClass.md": "ngClass.md", "ngClass.lg": "ngClass.lg", "ngClass.xl": "ngClass.xl", "ngClass.lt-sm": "ngClass.lt-sm", "ngClass.lt-md": "ngClass.lt-md", "ngClass.lt-lg": "ngClass.lt-lg", "ngClass.lt-xl": "ngClass.lt-xl", "ngClass.gt-xs": "ngClass.gt-xs", "ngClass.gt-sm": "ngClass.gt-sm", "ngClass.gt-md": "ngClass.gt-md", "ngClass.gt-lg": "ngClass.gt-lg" }, standalone: !1, features: [s.\u0275\u0275InheritDefinitionFeature] }), e; })();
var U = (() => { class e extends C {
    buildStyles(t, i) { return { display: t === "true" ? i.display || (i.isServer ? "initial" : "") : "none" }; }
} return e.\u0275fac = (() => { let l; return function (i) { return (l || (l = s.\u0275\u0275getInheritedFactory(e)))(i || e); }; })(), e.\u0275prov = s.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" }), e; })(), N = (() => { class e extends f {
    constructor(t, i, n, d, r, g, c) { super(t, i, n, d), this.layoutConfig = r, this.platformId = g, this.serverModuleLoaded = c, this.DIRECTIVE_KEY = "show-hide", this.display = "", this.hasLayout = !1, this.hasFlexChild = !1; }
    ngAfterViewInit() { this.trackExtraTriggers(); let t = Array.from(this.nativeElement.children); for (let n = 0; n < t.length; n++)
        if (this.marshal.hasValue(t[n], "flex")) {
            this.hasFlexChild = !0;
            break;
        } m.has(this.nativeElement) ? this.display = m.get(this.nativeElement) : (this.display = this.getDisplayStyle(), m.set(this.nativeElement, this.display)), this.init(); let i = this.marshal.getValue(this.nativeElement, this.DIRECTIVE_KEY, ""); i === void 0 || i === "" ? this.setValue(!0, "") : this.triggerUpdate(); }
    ngOnChanges(t) { Object.keys(t).forEach(i => { if (this.inputs.indexOf(i) !== -1) {
        let n = i.split("."), d = n.slice(1).join("."), r = t[i].currentValue, g = r !== "" ? r !== 0 ? B(r) : !1 : !0;
        n[0] === "fxHide" && (g = !g), this.setValue(g, d);
    } }); }
    trackExtraTriggers() { this.hasLayout = this.marshal.hasValue(this.nativeElement, "layout"), ["layout", "layout-align"].forEach(t => { this.marshal.trackValue(this.nativeElement, t).pipe(L(this.destroySubject)).subscribe(this.triggerUpdate.bind(this)); }); }
    getDisplayStyle() { return this.hasLayout || this.hasFlexChild && this.layoutConfig.addFlexToParent ? "flex" : this.styler.lookupStyle(this.nativeElement, "display", !0); }
    updateWithValue(t = !0) { if (t === "")
        return; let i = o(this.platformId); this.addStyles(t ? "true" : "false", { display: this.display, isServer: i }), i && this.serverModuleLoaded && this.nativeElement.style.setProperty("display", ""), this.marshal.triggerUpdate(this.parentElement, "layout-gap"); }
} return e.\u0275fac = function (t) { return new (t || e)(s.\u0275\u0275directiveInject(s.ElementRef), s.\u0275\u0275directiveInject(U), s.\u0275\u0275directiveInject(a.StyleUtils), s.\u0275\u0275directiveInject(a.MediaMarshaller), s.\u0275\u0275directiveInject(b), s.\u0275\u0275directiveInject(S), s.\u0275\u0275directiveInject(y)); }, e.\u0275dir = s.\u0275\u0275defineDirective({ type: e, standalone: !1, features: [s.\u0275\u0275InheritDefinitionFeature, s.\u0275\u0275NgOnChangesFeature] }), e; })(), m = new WeakMap, Y = ["fxShow", "fxShow.print", "fxShow.xs", "fxShow.sm", "fxShow.md", "fxShow.lg", "fxShow.xl", "fxShow.lt-sm", "fxShow.lt-md", "fxShow.lt-lg", "fxShow.lt-xl", "fxShow.gt-xs", "fxShow.gt-sm", "fxShow.gt-md", "fxShow.gt-lg", "fxHide", "fxHide.print", "fxHide.xs", "fxHide.sm", "fxHide.md", "fxHide.lg", "fxHide.xl", "fxHide.lt-sm", "fxHide.lt-md", "fxHide.lt-lg", "fxHide.lt-xl", "fxHide.gt-xs", "fxHide.gt-sm", "fxHide.gt-md", "fxHide.gt-lg"];
var de = (() => { class e extends N {
    constructor() { super(...arguments), this.inputs = Y; }
} return e.\u0275fac = (() => { let l; return function (i) { return (l || (l = s.\u0275\u0275getInheritedFactory(e)))(i || e); }; })(), e.\u0275dir = s.\u0275\u0275defineDirective({ type: e, selectors: [["", "fxShow", ""], ["", "fxShow.print", ""], ["", "fxShow.xs", ""], ["", "fxShow.sm", ""], ["", "fxShow.md", ""], ["", "fxShow.lg", ""], ["", "fxShow.xl", ""], ["", "fxShow.lt-sm", ""], ["", "fxShow.lt-md", ""], ["", "fxShow.lt-lg", ""], ["", "fxShow.lt-xl", ""], ["", "fxShow.gt-xs", ""], ["", "fxShow.gt-sm", ""], ["", "fxShow.gt-md", ""], ["", "fxShow.gt-lg", ""], ["", "fxHide", ""], ["", "fxHide.print", ""], ["", "fxHide.xs", ""], ["", "fxHide.sm", ""], ["", "fxHide.md", ""], ["", "fxHide.lg", ""], ["", "fxHide.xl", ""], ["", "fxHide.lt-sm", ""], ["", "fxHide.lt-md", ""], ["", "fxHide.lt-lg", ""], ["", "fxHide.lt-xl", ""], ["", "fxHide.gt-xs", ""], ["", "fxHide.gt-sm", ""], ["", "fxHide.gt-md", ""], ["", "fxHide.gt-lg", ""]], inputs: { fxShow: "fxShow", "fxShow.print": "fxShow.print", "fxShow.xs": "fxShow.xs", "fxShow.sm": "fxShow.sm", "fxShow.md": "fxShow.md", "fxShow.lg": "fxShow.lg", "fxShow.xl": "fxShow.xl", "fxShow.lt-sm": "fxShow.lt-sm", "fxShow.lt-md": "fxShow.lt-md", "fxShow.lt-lg": "fxShow.lt-lg", "fxShow.lt-xl": "fxShow.lt-xl", "fxShow.gt-xs": "fxShow.gt-xs", "fxShow.gt-sm": "fxShow.gt-sm", "fxShow.gt-md": "fxShow.gt-md", "fxShow.gt-lg": "fxShow.gt-lg", fxHide: "fxHide", "fxHide.print": "fxHide.print", "fxHide.xs": "fxHide.xs", "fxHide.sm": "fxHide.sm", "fxHide.md": "fxHide.md", "fxHide.lg": "fxHide.lg", "fxHide.xl": "fxHide.xl", "fxHide.lt-sm": "fxHide.lt-sm", "fxHide.lt-md": "fxHide.lt-md", "fxHide.lt-lg": "fxHide.lt-lg", "fxHide.lt-xl": "fxHide.lt-xl", "fxHide.gt-xs": "fxHide.gt-xs", "fxHide.gt-sm": "fxHide.gt-sm", "fxHide.gt-md": "fxHide.gt-md", "fxHide.gt-lg": "fxHide.gt-lg" }, standalone: !1, features: [s.\u0275\u0275InheritDefinitionFeature] }), e; })();
var u = class {
    constructor(l, t, i = !0) { this.key = l, this.value = t, this.key = i ? l.replace(/['"]/g, "").trim() : l.trim(), this.value = i ? t.replace(/['"]/g, "").trim() : t.trim(), this.value = this.value.replace(/;/, ""); }
};
function w(e) { let l = typeof e; return l === "object" ? e.constructor === Array ? "array" : e.constructor === Set ? "set" : "object" : l; }
function P(e, l = ";") { return String(e).trim().split(l).map(t => t.trim()).filter(t => t !== ""); }
function z(e, l) { let t = i => (l && (i.value = l(i.value)), i); return e.map(I).filter(i => !!i).map(t).reduce(H, {}); }
function v(e, l) { let t = []; return w(e) === "set" ? e.forEach(i => t.push(i)) : Object.keys(e).forEach(i => { t.push(`${i}:${e[i]}`); }), z(t, l); }
function I(e) { let [l, ...t] = e.split(":"); return new u(l, t.join(":")); }
function H(e, l) { return l.key && (e[l.key] = l.value), e; }
var W = (() => { class e extends f {
    constructor(t, i, n, d, r, g, c, M, E) { super(t, null, i, n), this.sanitizer = d, this.ngStyleInstance = c, this.DIRECTIVE_KEY = "ngStyle", this.ngStyleInstance || (this.ngStyleInstance = new k(t, r, g)), this.init(); let j = this.nativeElement.getAttribute("style") ?? ""; this.fallbackStyles = this.buildStyleMap(j), this.isServer = M && o(E); }
    updateWithValue(t) { let i = this.buildStyleMap(t); this.ngStyleInstance.ngStyle = h(h({}, this.fallbackStyles), i), this.isServer && this.applyStyleToElement(i), this.ngStyleInstance.ngDoCheck(); }
    clearStyles() { this.ngStyleInstance.ngStyle = this.fallbackStyles, this.ngStyleInstance.ngDoCheck(); }
    buildStyleMap(t) { let i = n => this.sanitizer.sanitize(F.STYLE, n) ?? ""; if (t)
        switch (w(t)) {
            case "string": return p(P(t), i);
            case "array": return p(t, i);
            case "set": return v(t, i);
            default: return v(t, i);
        } return {}; }
    ngDoCheck() { this.ngStyleInstance.ngDoCheck(); }
} return e.\u0275fac = function (t) { return new (t || e)(s.\u0275\u0275directiveInject(s.ElementRef), s.\u0275\u0275directiveInject(a.StyleUtils), s.\u0275\u0275directiveInject(a.MediaMarshaller), s.\u0275\u0275directiveInject(D.DomSanitizer), s.\u0275\u0275directiveInject(s.KeyValueDiffers), s.\u0275\u0275directiveInject(s.Renderer2), s.\u0275\u0275directiveInject(x.NgStyle, 10), s.\u0275\u0275directiveInject(y), s.\u0275\u0275directiveInject(S)); }, e.\u0275dir = s.\u0275\u0275defineDirective({ type: e, standalone: !1, features: [s.\u0275\u0275InheritDefinitionFeature] }), e; })(), G = ["ngStyle", "ngStyle.xs", "ngStyle.sm", "ngStyle.md", "ngStyle.lg", "ngStyle.xl", "ngStyle.lt-sm", "ngStyle.lt-md", "ngStyle.lt-lg", "ngStyle.lt-xl", "ngStyle.gt-xs", "ngStyle.gt-sm", "ngStyle.gt-md", "ngStyle.gt-lg"];
var ce = (() => { class e extends W {
    constructor() { super(...arguments), this.inputs = G; }
} return e.\u0275fac = (() => { let l; return function (i) { return (l || (l = s.\u0275\u0275getInheritedFactory(e)))(i || e); }; })(), e.\u0275dir = s.\u0275\u0275defineDirective({ type: e, selectors: [["", "ngStyle", ""], ["", "ngStyle.xs", ""], ["", "ngStyle.sm", ""], ["", "ngStyle.md", ""], ["", "ngStyle.lg", ""], ["", "ngStyle.xl", ""], ["", "ngStyle.lt-sm", ""], ["", "ngStyle.lt-md", ""], ["", "ngStyle.lt-lg", ""], ["", "ngStyle.lt-xl", ""], ["", "ngStyle.gt-xs", ""], ["", "ngStyle.gt-sm", ""], ["", "ngStyle.gt-md", ""], ["", "ngStyle.gt-lg", ""]], inputs: { ngStyle: "ngStyle", "ngStyle.xs": "ngStyle.xs", "ngStyle.sm": "ngStyle.sm", "ngStyle.md": "ngStyle.md", "ngStyle.lg": "ngStyle.lg", "ngStyle.xl": "ngStyle.xl", "ngStyle.lt-sm": "ngStyle.lt-sm", "ngStyle.lt-md": "ngStyle.lt-md", "ngStyle.lt-lg": "ngStyle.lt-lg", "ngStyle.lt-xl": "ngStyle.lt-xl", "ngStyle.gt-xs": "ngStyle.gt-xs", "ngStyle.gt-sm": "ngStyle.gt-sm", "ngStyle.gt-md": "ngStyle.gt-md", "ngStyle.gt-lg": "ngStyle.gt-lg" }, standalone: !1, features: [s.\u0275\u0275InheritDefinitionFeature] }), e; })();
function p(e, l) { let t = i => (l && (i.value = l(i.value)), i); return e.map(I).filter(i => !!i).map(t).reduce(H, {}); }
var oe = (() => { class e {
} return e.\u0275fac = function (t) { return new (t || e); }, e.\u0275mod = s.\u0275\u0275defineNgModule({ type: e }), e.\u0275inj = s.\u0275\u0275defineInjector({ imports: [V] }), e; })();
export { O as ClassDirective, ae as DefaultClassDirective, ge as DefaultImgSrcDirective, de as DefaultShowHideDirective, ce as DefaultStyleDirective, oe as ExtendedModule, R as ImgSrcDirective, T as ImgSrcStyleBuilder, N as ShowHideDirective, U as ShowHideStyleBuilder, W as StyleDirective };
/*! Bundled license information:

@angular/flex-layout/fesm2020/angular-flex-layout-extended.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-extended.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-extended.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-extended.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-extended.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-extended.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
