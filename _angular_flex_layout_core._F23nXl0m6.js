import { a as S } from "@nf-internal/chunk-GL2BOVXA";
import * as o from "@angular/core";
import { APP_BOOTSTRAP_LISTENER as U, PLATFORM_ID as g, InjectionToken as A, inject as T } from "@angular/core";
import { isPlatformBrowser as u, DOCUMENT as v, isPlatformServer as q } from "@angular/common";
import { BehaviorSubject as z, Observable as Y, merge as W, Subject as P, asapScheduler as Z, of as G, fromEvent as X } from "rxjs";
import { applyCssPrefixes as I, extendObject as J, buildLayoutCSS as tt } from "@angular/flex-layout/_private-utils";
import { filter as m, tap as et, debounceTime as it, switchMap as st, map as rt, distinctUntilChanged as at, takeUntil as nt, take as ot } from "rxjs/operators";
function ct(s, a) { return () => { if (u(a)) {
    let t = Array.from(s.querySelectorAll(`[class*=${Q}]`)), e = /\bflex-layout-.+?\b/g;
    t.forEach(i => { i.classList.contains(`${Q}ssr`) && i.parentNode ? i.parentNode.removeChild(i) : i.className.replace(e, ""); });
} }; }
var lt = { provide: U, useFactory: ct, deps: [v, g], multi: !0 }, Q = "flex-layout-";
var qt = (() => { class s {
} return s.\u0275fac = function (t) { return new (t || s); }, s.\u0275mod = o.\u0275\u0275defineNgModule({ type: s }), s.\u0275inj = o.\u0275\u0275defineInjector({ providers: [lt] }), s; })(), h = class s {
    constructor(a = !1, t = "all", e = "", i = "", r = 0) { this.matches = a, this.mediaQuery = t, this.mqAlias = e, this.suffix = i, this.priority = r, this.property = ""; }
    clone() { return new s(this.matches, this.mediaQuery, this.mqAlias, this.suffix); }
};
var ht = (() => { class s {
    constructor() { this.stylesheet = new Map; }
    addStyleToElement(t, e, i) { let r = this.stylesheet.get(t); r ? r.set(e, i) : this.stylesheet.set(t, new Map([[e, i]])); }
    clearStyles() { this.stylesheet.clear(); }
    getStyleForElement(t, e) { let i = this.stylesheet.get(t), r = ""; if (i) {
        let n = i.get(e);
        (typeof n == "number" || typeof n == "string") && (r = n + "");
    } return r; }
} return s.\u0275fac = function (t) { return new (t || s); }, s.\u0275prov = o.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac, providedIn: "root" }), s; })();
var dt = { addFlexToParent: !0, addOrientationBps: !1, disableDefaultBps: !1, disableVendorPrefixes: !1, serverLoaded: !1, useColumnBasisZero: !0, printWithBreakpoints: [], mediaTriggerAutoRestore: !0, ssrObserveBreakpoints: [], multiplier: void 0, defaultUnit: "px", detectLayoutDisplay: !1 }, b = new A("Flex Layout token, config options for the library", { providedIn: "root", factory: () => dt });
var ut = new A("FlexLayoutServerLoaded", { providedIn: "root", factory: () => !1 });
var pt = new A("Flex Layout token, collect all breakpoints into one provider", { providedIn: "root", factory: () => null });
function _(s, a) { return s = s?.clone() ?? new h, a && (s.mqAlias = a.alias, s.mediaQuery = a.mediaQuery, s.suffix = a.suffix, s.priority = a.priority), s; }
var B = class {
    constructor() { this.shouldCache = !0; }
    sideEffect(a, t, e) { }
};
var ft = (() => { class s {
    constructor(t, e, i, r) { this._serverStylesheet = t, this._serverModuleLoaded = e, this._platformId = i, this.layoutConfig = r; }
    applyStyleToElement(t, e, i = null) { let r = {}; typeof e == "string" && (r[e] = i, e = r), r = this.layoutConfig.disableVendorPrefixes ? e : I(e), this._applyMultiValueStyleToElement(r, t); }
    applyStyleToElements(t, e = []) { let i = this.layoutConfig.disableVendorPrefixes ? t : I(t); e.forEach(r => { this._applyMultiValueStyleToElement(i, r); }); }
    getFlowDirection(t) { let e = "flex-direction", i = this.lookupStyle(t, e), r = this.lookupInlineStyle(t, e) || q(this._platformId) && this._serverModuleLoaded ? i : ""; return [i || "row", r]; }
    hasWrap(t) { return this.lookupStyle(t, "flex-wrap") === "wrap"; }
    lookupAttributeValue(t, e) { return t.getAttribute(e) ?? ""; }
    lookupInlineStyle(t, e) { return u(this._platformId) ? t.style.getPropertyValue(e) : yt(t, e); }
    lookupStyle(t, e, i = !1) { let r = ""; return t && ((r = this.lookupInlineStyle(t, e)) || (u(this._platformId) ? i || (r = getComputedStyle(t).getPropertyValue(e)) : this._serverModuleLoaded && (r = this._serverStylesheet.getStyleForElement(t, e)))), r ? r.trim() : ""; }
    _applyMultiValueStyleToElement(t, e) { Object.keys(t).sort().forEach(i => { let r = t[i], n = Array.isArray(r) ? r : [r]; n.sort(); for (let c of n)
        c = c ? c + "" : "", u(this._platformId) || !this._serverModuleLoaded ? u(this._platformId) ? e.style.setProperty(i, c) : mt(e, i, c) : this._serverStylesheet.addStyleToElement(e, i, c); }); }
} return s.\u0275fac = function (t) { return new (t || s)(o.\u0275\u0275inject(ht), o.\u0275\u0275inject(ut), o.\u0275\u0275inject(g), o.\u0275\u0275inject(b)); }, s.\u0275prov = o.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac, providedIn: "root" }), s; })();
function yt(s, a) { return H(s)[a] ?? ""; }
function mt(s, a, t) { a = a.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(); let e = H(s); e[a] = t ?? "", gt(s, e); }
function gt(s, a) { let t = ""; for (let e in a)
    a[e] && (t += `${e}:${a[e]};`); s.setAttribute("style", t); }
function H(s) { let a = {}, t = s.getAttribute("style"); if (t) {
    let e = t.split(/;+/g);
    for (let i = 0; i < e.length; i++) {
        let r = e[i].trim();
        if (r.length > 0) {
            let n = r.indexOf(":");
            if (n === -1)
                throw new Error(`Invalid CSS style: ${r}`);
            let c = r.substr(0, n).trim();
            a[c] = r.substr(n + 1).trim();
        }
    }
} return a; }
function p(s, a) { let t = s && s.priority || 0; return (a && a.priority || 0) - t; }
function vt(s, a) { let t = s.priority || 0, e = a.priority || 0; return t - e; }
var M = (() => { class s {
    constructor(t, e, i) { this._zone = t, this._platformId = e, this._document = i, this.source = new z(new h(!0)), this.registry = new Map, this.pendingRemoveListenerFns = [], this._observable$ = this.source.asObservable(); }
    get activations() { let t = []; return this.registry.forEach((e, i) => { e.matches && t.push(i); }), t; }
    isActive(t) { return this.registry.get(t)?.matches ?? this.registerQuery(t).some(i => i.matches); }
    observe(t, e = !1) { if (t && t.length) {
        let i = this._observable$.pipe(m(n => e ? t.indexOf(n.mediaQuery) > -1 : !0)), r = new Y(n => { let c = this.registerQuery(t); if (c.length) {
            let l = c.pop();
            c.forEach(w => { n.next(w); }), this.source.next(l);
        } n.complete(); });
        return W(r, i);
    } return this._observable$; }
    registerQuery(t) { let e = Array.isArray(t) ? t : [t], i = []; return Mt(e, this._document), e.forEach(r => { let n = l => { this._zone.run(() => this.source.next(new h(l.matches, r))); }, c = this.registry.get(r); c || (c = this.buildMQL(r), c.addListener(n), this.pendingRemoveListenerFns.push(() => c.removeListener(n)), this.registry.set(r, c)), c.matches && i.push(new h(!0, r)); }), i; }
    ngOnDestroy() { let t; for (; t = this.pendingRemoveListenerFns.pop();)
        t(); }
    buildMQL(t) { return At(t, u(this._platformId)); }
} return s.\u0275fac = function (t) { return new (t || s)(o.\u0275\u0275inject(o.NgZone), o.\u0275\u0275inject(g), o.\u0275\u0275inject(v)); }, s.\u0275prov = o.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac, providedIn: "root" }), s; })(), R = {};
function Mt(s, a) {
    let t = s.filter(e => !R[e]);
    if (t.length > 0) {
        let e = t.join(", ");
        try {
            let i = a.createElement("style");
            if (i.setAttribute("type", "text/css"), !i.styleSheet) {
                let r = `
/*
  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners
  see http://bit.ly/2sd4HMP
*/
@media ${e} {.fx-query-test{ }}
`;
                i.appendChild(a.createTextNode(r));
            }
            a.head.appendChild(i), t.forEach(r => R[r] = i);
        }
        catch (i) {
            console.error(i);
        }
    }
}
function Et(s) { let a = new EventTarget; return a.matches = s === "all" || s === "", a.media = s, a.addListener = () => { }, a.removeListener = () => { }, a.addEventListener = () => { }, a.dispatchEvent = () => !1, a.onchange = null, a; }
function At(s, a) { return a && !!window.matchMedia("all").addListener ? window.matchMedia(s) : Et(s); }
var bt = [{ alias: "xs", mediaQuery: "screen and (min-width: 0px) and (max-width: 599.98px)", priority: 1e3 }, { alias: "sm", mediaQuery: "screen and (min-width: 600px) and (max-width: 959.98px)", priority: 900 }, { alias: "md", mediaQuery: "screen and (min-width: 960px) and (max-width: 1279.98px)", priority: 800 }, { alias: "lg", mediaQuery: "screen and (min-width: 1280px) and (max-width: 1919.98px)", priority: 700 }, { alias: "xl", mediaQuery: "screen and (min-width: 1920px) and (max-width: 4999.98px)", priority: 600 }, { alias: "lt-sm", overlapping: !0, mediaQuery: "screen and (max-width: 599.98px)", priority: 950 }, { alias: "lt-md", overlapping: !0, mediaQuery: "screen and (max-width: 959.98px)", priority: 850 }, { alias: "lt-lg", overlapping: !0, mediaQuery: "screen and (max-width: 1279.98px)", priority: 750 }, { alias: "lt-xl", overlapping: !0, priority: 650, mediaQuery: "screen and (max-width: 1919.98px)" }, { alias: "gt-xs", overlapping: !0, mediaQuery: "screen and (min-width: 600px)", priority: -950 }, { alias: "gt-sm", overlapping: !0, mediaQuery: "screen and (min-width: 960px)", priority: -850 }, { alias: "gt-md", overlapping: !0, mediaQuery: "screen and (min-width: 1280px)", priority: -750 }, { alias: "gt-lg", overlapping: !0, mediaQuery: "screen and (min-width: 1920px)", priority: -650 }];
var D = "(orientation: portrait) and (max-width: 599.98px)", C = "(orientation: landscape) and (max-width: 959.98px)", L = "(orientation: portrait) and (min-width: 600px) and (max-width: 839.98px)", j = "(orientation: landscape) and (min-width: 960px) and (max-width: 1279.98px)", O = "(orientation: portrait) and (min-width: 840px)", V = "(orientation: landscape) and (min-width: 1280px)", d = { HANDSET: `${D}, ${C}`, TABLET: `${L} , ${j}`, WEB: `${O}, ${V} `, HANDSET_PORTRAIT: `${D}`, TABLET_PORTRAIT: `${L} `, WEB_PORTRAIT: `${O}`, HANDSET_LANDSCAPE: `${C}`, TABLET_LANDSCAPE: `${j}`, WEB_LANDSCAPE: `${V}` }, _t = [{ alias: "handset", priority: 2e3, mediaQuery: d.HANDSET }, { alias: "handset.landscape", priority: 2e3, mediaQuery: d.HANDSET_LANDSCAPE }, { alias: "handset.portrait", priority: 2e3, mediaQuery: d.HANDSET_PORTRAIT }, { alias: "tablet", priority: 2100, mediaQuery: d.TABLET }, { alias: "tablet.landscape", priority: 2100, mediaQuery: d.TABLET_LANDSCAPE }, { alias: "tablet.portrait", priority: 2100, mediaQuery: d.TABLET_PORTRAIT }, { alias: "web", priority: 2200, mediaQuery: d.WEB, overlapping: !0 }, { alias: "web.landscape", priority: 2200, mediaQuery: d.WEB_LANDSCAPE, overlapping: !0 }, { alias: "web.portrait", priority: 2200, mediaQuery: d.WEB_PORTRAIT, overlapping: !0 }], wt = /(\.|-|_)/g;
function Bt(s) { let a = s.length > 0 ? s.charAt(0) : "", t = s.length > 1 ? s.slice(1) : ""; return a.toUpperCase() + t; }
function kt(s) { return s.replace(wt, "|").split("|").map(Bt).join(""); }
function xt(s) { return s.forEach(a => { a.suffix || (a.suffix = kt(a.alias), a.overlapping = !!a.overlapping); }), s; }
function Pt(s, a = []) { let t = {}; return s.forEach(e => { t[e.alias] = e; }), a.forEach(e => { t[e.alias] ? J(t[e.alias], e) : t[e.alias] = e; }), xt(Object.keys(t).map(e => t[e])); }
var St = new A("Token (@angular/flex-layout) Breakpoints", { providedIn: "root", factory: () => { let s = T(pt), a = T(b), t = [].concat.apply([], (s || []).map(i => Array.isArray(i) ? i : [i])), e = (a.disableDefaultBps ? [] : bt).concat(a.addOrientationBps ? _t : []); return Pt(e, t); } });
var E = (() => { class s {
    constructor(t) { this.findByMap = new Map, this.items = [...t].sort(vt); }
    findByAlias(t) { return t ? this.findWithPredicate(t, e => e.alias === t) : null; }
    findByQuery(t) { return this.findWithPredicate(t, e => e.mediaQuery === t); }
    get overlappings() { return this.items.filter(t => t.overlapping); }
    get aliases() { return this.items.map(t => t.alias); }
    get suffixes() { return this.items.map(t => t?.suffix ?? ""); }
    findWithPredicate(t, e) { let i = this.findByMap.get(t); return i || (i = this.items.find(e) ?? null, this.findByMap.set(t, i)), i ?? null; }
} return s.\u0275fac = function (t) { return new (t || s)(o.\u0275\u0275inject(St)); }, s.\u0275prov = o.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac, providedIn: "root" }), s; })();
var f = "print", Tt = { alias: f, mediaQuery: f, priority: 1e3 }, K = (() => { class s {
    constructor(t, e, i) { this.breakpoints = t, this.layoutConfig = e, this._document = i, this.registeredBeforeAfterPrintHooks = !1, this.isPrintingBeforeAfterEvent = !1, this.beforePrintEventListeners = [], this.afterPrintEventListeners = [], this.formerActivations = null, this.isPrinting = !1, this.queue = new k, this.deactivations = []; }
    withPrintQuery(t) { return [...t, f]; }
    isPrintEvent(t) { return t.mediaQuery.startsWith(f); }
    get printAlias() { return [...this.layoutConfig.printWithBreakpoints ?? []]; }
    get printBreakPoints() { return this.printAlias.map(t => this.breakpoints.findByAlias(t)).filter(t => t !== null); }
    getEventBreakpoints({ mediaQuery: t }) { let e = this.breakpoints.findByQuery(t); return (e ? [...this.printBreakPoints, e] : this.printBreakPoints).sort(p); }
    updateEvent(t) { let e = this.breakpoints.findByQuery(t.mediaQuery); return this.isPrintEvent(t) && (e = this.getEventBreakpoints(t)[0], t.mediaQuery = e?.mediaQuery ?? ""), _(t, e); }
    registerBeforeAfterPrintHooks(t) { if (!this._document.defaultView || this.registeredBeforeAfterPrintHooks)
        return; this.registeredBeforeAfterPrintHooks = !0; let e = () => { this.isPrinting || (this.isPrintingBeforeAfterEvent = !0, this.startPrinting(t, this.getEventBreakpoints(new h(!0, f))), t.updateStyles()); }, i = () => { this.isPrintingBeforeAfterEvent = !1, this.isPrinting && (this.stopPrinting(t), t.updateStyles()); }; this._document.defaultView.addEventListener("beforeprint", e), this._document.defaultView.addEventListener("afterprint", i), this.beforePrintEventListeners.push(e), this.afterPrintEventListeners.push(i); }
    interceptEvents(t) { return e => { if (this.isPrintEvent(e)) {
        e.matches && !this.isPrinting ? (this.startPrinting(t, this.getEventBreakpoints(e)), t.updateStyles()) : !e.matches && this.isPrinting && !this.isPrintingBeforeAfterEvent && (this.stopPrinting(t), t.updateStyles());
        return;
    } this.collectActivations(t, e); }; }
    blockPropagation() { return t => !(this.isPrinting || this.isPrintEvent(t)); }
    startPrinting(t, e) { this.isPrinting = !0, this.formerActivations = t.activatedBreakpoints, t.activatedBreakpoints = this.queue.addPrintBreakpoints(e); }
    stopPrinting(t) { t.activatedBreakpoints = this.deactivations, this.deactivations = [], this.formerActivations = null, this.queue.clear(), this.isPrinting = !1; }
    collectActivations(t, e) { if (!this.isPrinting || this.isPrintingBeforeAfterEvent) {
        if (!this.isPrintingBeforeAfterEvent) {
            this.deactivations = [];
            return;
        }
        if (!e.matches) {
            let i = this.breakpoints.findByQuery(e.mediaQuery);
            if (i) {
                let r = this.formerActivations && this.formerActivations.includes(i), n = !this.formerActivations && t.activatedBreakpoints.includes(i);
                (r || n) && (this.deactivations.push(i), this.deactivations.sort(p));
            }
        }
    } }
    ngOnDestroy() { this._document.defaultView && (this.beforePrintEventListeners.forEach(t => this._document.defaultView.removeEventListener("beforeprint", t)), this.afterPrintEventListeners.forEach(t => this._document.defaultView.removeEventListener("afterprint", t))); }
} return s.\u0275fac = function (t) { return new (t || s)(o.\u0275\u0275inject(E), o.\u0275\u0275inject(b), o.\u0275\u0275inject(v)); }, s.\u0275prov = o.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac, providedIn: "root" }), s; })(), k = class {
    constructor() { this.printBreakpoints = []; }
    addPrintBreakpoints(a) { return a.push(Tt), a.sort(p), a.forEach(t => this.addBreakpoint(t)), this.printBreakpoints; }
    addBreakpoint(a) { a && this.printBreakpoints.find(e => e.mediaQuery === a.mediaQuery) === void 0 && (this.printBreakpoints = It(a) ? [a, ...this.printBreakpoints] : [...this.printBreakpoints, a]); }
    clear() { this.printBreakpoints = []; }
};
function It(s) { return s?.mediaQuery.startsWith(f) ?? !1; }
var Qt = (() => { class s {
    constructor(t, e, i) { this.matchMedia = t, this.breakpoints = e, this.hook = i, this._useFallbacks = !0, this._activatedBreakpoints = [], this.elementMap = new Map, this.elementKeyMap = new WeakMap, this.watcherMap = new WeakMap, this.updateMap = new WeakMap, this.clearMap = new WeakMap, this.subject = new P, this.observeActivations(); }
    get activatedAlias() { return this.activatedBreakpoints[0]?.alias ?? ""; }
    set activatedBreakpoints(t) { this._activatedBreakpoints = [...t]; }
    get activatedBreakpoints() { return [...this._activatedBreakpoints]; }
    set useFallbacks(t) { this._useFallbacks = t; }
    onMediaChange(t) { let e = this.findByQuery(t.mediaQuery); if (e) {
        t = _(t, e);
        let i = this.activatedBreakpoints.indexOf(e);
        t.matches && i === -1 ? (this._activatedBreakpoints.push(e), this._activatedBreakpoints.sort(p), this.updateStyles()) : !t.matches && i !== -1 && (this._activatedBreakpoints.splice(i, 1), this._activatedBreakpoints.sort(p), this.updateStyles());
    } }
    init(t, e, i, r, n = []) { F(this.updateMap, t, e, i), F(this.clearMap, t, e, r), this.buildElementKeyMap(t, e), this.watchExtraTriggers(t, e, n); }
    getValue(t, e, i) { let r = this.elementMap.get(t); if (r) {
        let n = i !== void 0 ? r.get(i) : this.getActivatedValues(r, e);
        if (n)
            return n.get(e);
    } }
    hasValue(t, e) { let i = this.elementMap.get(t); if (i) {
        let r = this.getActivatedValues(i, e);
        if (r)
            return r.get(e) !== void 0 || !1;
    } return !1; }
    setValue(t, e, i, r) { let n = this.elementMap.get(t); if (!n)
        n = new Map().set(r, new Map().set(e, i)), this.elementMap.set(t, n);
    else {
        let l = (n.get(r) ?? new Map).set(e, i);
        n.set(r, l), this.elementMap.set(t, n);
    } let c = this.getValue(t, e); c !== void 0 && this.updateElement(t, e, c); }
    trackValue(t, e) { return this.subject.asObservable().pipe(m(i => i.element === t && i.key === e)); }
    updateStyles() { this.elementMap.forEach((t, e) => { let i = new Set(this.elementKeyMap.get(e)), r = this.getActivatedValues(t); r && r.forEach((n, c) => { this.updateElement(e, c, n), i.delete(c); }), i.forEach(n => { if (r = this.getActivatedValues(t, n), r) {
        let c = r.get(n);
        this.updateElement(e, n, c);
    }
    else
        this.clearElement(e, n); }); }); }
    clearElement(t, e) { let i = this.clearMap.get(t); if (i) {
        let r = i.get(e);
        r && (r(), this.subject.next({ element: t, key: e, value: "" }));
    } }
    updateElement(t, e, i) { let r = this.updateMap.get(t); if (r) {
        let n = r.get(e);
        n && (n(i), this.subject.next({ element: t, key: e, value: i }));
    } }
    releaseElement(t) { let e = this.watcherMap.get(t); e && (e.forEach(r => r.unsubscribe()), this.watcherMap.delete(t)); let i = this.elementMap.get(t); i && (i.forEach((r, n) => i.delete(n)), this.elementMap.delete(t)); }
    triggerUpdate(t, e) { let i = this.elementMap.get(t); if (i) {
        let r = this.getActivatedValues(i, e);
        r && (e ? this.updateElement(t, e, r.get(e)) : r.forEach((n, c) => this.updateElement(t, c, n)));
    } }
    buildElementKeyMap(t, e) { let i = this.elementKeyMap.get(t); i || (i = new Set, this.elementKeyMap.set(t, i)), i.add(e); }
    watchExtraTriggers(t, e, i) { if (i && i.length) {
        let r = this.watcherMap.get(t);
        if (r || (r = new Map, this.watcherMap.set(t, r)), !r.get(e)) {
            let c = W(...i).subscribe(() => { let l = this.getValue(t, e); this.updateElement(t, e, l); });
            r.set(e, c);
        }
    } }
    findByQuery(t) { return this.breakpoints.findByQuery(t); }
    getActivatedValues(t, e) { for (let r = 0; r < this.activatedBreakpoints.length; r++) {
        let n = this.activatedBreakpoints[r], c = t.get(n.alias);
        if (c && (e === void 0 || c.has(e) && c.get(e) != null))
            return c;
    } if (!this._useFallbacks)
        return; let i = t.get(""); return e === void 0 || i && i.has(e) ? i : void 0; }
    observeActivations() { let t = this.breakpoints.items.map(e => e.mediaQuery); this.hook.registerBeforeAfterPrintHooks(this), this.matchMedia.observe(this.hook.withPrintQuery(t)).pipe(et(this.hook.interceptEvents(this)), m(this.hook.blockPropagation())).subscribe(this.onMediaChange.bind(this)); }
} return s.\u0275fac = function (t) { return new (t || s)(o.\u0275\u0275inject(M), o.\u0275\u0275inject(E), o.\u0275\u0275inject(K)); }, s.\u0275prov = o.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac, providedIn: "root" }), s; })();
function F(s, a, t, e) { if (e !== void 0) {
    let i = s.get(a) ?? new Map;
    i.set(t, e), s.set(a, i);
} }
var zt = (() => { class s {
    constructor(t, e, i, r) { this.elementRef = t, this.styleBuilder = e, this.styler = i, this.marshal = r, this.DIRECTIVE_KEY = "", this.inputs = [], this.mru = {}, this.destroySubject = new P, this.styleCache = new Map; }
    get parentElement() { return this.elementRef.nativeElement.parentElement; }
    get nativeElement() { return this.elementRef.nativeElement; }
    get activatedValue() { return this.marshal.getValue(this.nativeElement, this.DIRECTIVE_KEY); }
    set activatedValue(t) { this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, t, this.marshal.activatedAlias); }
    ngOnChanges(t) { Object.keys(t).forEach(e => { if (this.inputs.indexOf(e) !== -1) {
        let i = e.split(".").slice(1).join("."), r = t[e].currentValue;
        this.setValue(r, i);
    } }); }
    ngOnDestroy() { this.destroySubject.next(), this.destroySubject.complete(), this.marshal.releaseElement(this.nativeElement); }
    init(t = []) { this.marshal.init(this.elementRef.nativeElement, this.DIRECTIVE_KEY, this.updateWithValue.bind(this), this.clearStyles.bind(this), t); }
    addStyles(t, e) { let i = this.styleBuilder, r = i.shouldCache, n = this.styleCache.get(t); (!n || !r) && (n = i.buildStyles(t, e), r && this.styleCache.set(t, n)), this.mru = S({}, n), this.applyStyleToElement(n), i.sideEffect(t, n, e); }
    clearStyles() { Object.keys(this.mru).forEach(t => { this.mru[t] = ""; }), this.applyStyleToElement(this.mru), this.mru = {}, this.currentValue = void 0; }
    triggerUpdate() { this.marshal.triggerUpdate(this.nativeElement, this.DIRECTIVE_KEY); }
    getFlexFlowDirection(t, e = !1) { if (t) {
        let [i, r] = this.styler.getFlowDirection(t);
        if (!r && e) {
            let n = tt(i), c = [t];
            this.styler.applyStyleToElements(n, c);
        }
        return i.trim();
    } return "row"; }
    hasWrap(t) { return this.styler.hasWrap(t); }
    applyStyleToElement(t, e, i = this.nativeElement) { this.styler.applyStyleToElement(i, t, e); }
    setValue(t, e) { this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, t, e); }
    updateWithValue(t) { this.currentValue !== t && (this.addStyles(t), this.currentValue = t); }
} return s.\u0275fac = function (t) { return new (t || s)(o.\u0275\u0275directiveInject(o.ElementRef), o.\u0275\u0275directiveInject(B), o.\u0275\u0275directiveInject(ft), o.\u0275\u0275directiveInject(Qt)); }, s.\u0275dir = o.\u0275\u0275defineDirective({ type: s, standalone: !1, features: [o.\u0275\u0275NgOnChangesFeature] }), s; })();
var Rt = (() => { class s extends M {
    constructor(t, e, i, r) { super(t, e, i), this._breakpoints = r, this.autoRegisterQueries = !0, this.useOverlaps = !1; }
    clearAll() { this.registry.forEach(t => { t.destroy(); }), this.registry.clear(), this.useOverlaps = !1; }
    activate(t, e = this.useOverlaps) { return t = this._validateQuery(t), (e || !this.isActive(t)) && (this._deactivateAll(), this._registerMediaQuery(t), this._activateWithOverlaps(t, e)), this.hasActivated; }
    _validateQuery(t) { return this._breakpoints.findByAlias(t)?.mediaQuery ?? t; }
    _activateWithOverlaps(t, e) { if (e) {
        let r = this._breakpoints.findByQuery(t)?.alias ?? "unknown";
        switch (r) {
            case "lg":
                this._activateByAlias(["lt-xl"]);
                break;
            case "md":
                this._activateByAlias(["lt-xl", "lt-lg"]);
                break;
            case "sm":
                this._activateByAlias(["lt-xl", "lt-lg", "lt-md"]);
                break;
            case "xs":
                this._activateByAlias(["lt-xl", "lt-lg", "lt-md", "lt-sm"]);
                break;
        }
        switch (r) {
            case "xl":
                this._activateByAlias(["gt-lg", "gt-md", "gt-sm", "gt-xs"]);
                break;
            case "lg":
                this._activateByAlias(["gt-md", "gt-sm", "gt-xs"]);
                break;
            case "md":
                this._activateByAlias(["gt-sm", "gt-xs"]);
                break;
            case "sm":
                this._activateByAlias(["gt-xs"]);
                break;
        }
    } return this._activateByQuery(t); }
    _activateByAlias(t) { let e = i => { let r = this._breakpoints.findByAlias(i); this._activateByQuery(r?.mediaQuery ?? i); }; t.forEach(e); }
    _activateByQuery(t) { !this.registry.has(t) && this.autoRegisterQueries && this._registerMediaQuery(t); let e = this.registry.get(t); return e && !this.isActive(t) && this.registry.set(t, e.activate()), this.hasActivated; }
    _deactivateAll() { return this.registry.forEach(t => { t.deactivate(); }), this; }
    _registerMediaQuery(t) { !this.registry.has(t) && this.autoRegisterQueries && this.registerQuery(t); }
    buildMQL(t) { return new x(t); }
    get hasActivated() { return this.activations.length > 0; }
} return s.\u0275fac = function (t) { return new (t || s)(o.\u0275\u0275inject(o.NgZone), o.\u0275\u0275inject(g), o.\u0275\u0275inject(v), o.\u0275\u0275inject(E)); }, s.\u0275prov = o.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac }), s; })(), x = class extends EventTarget {
    constructor(a) { super(), this._mediaQuery = a, this._isActive = !1, this._listeners = [], this.onchange = null; }
    get matches() { return this._isActive; }
    get media() { return this._mediaQuery; }
    destroy() { this.deactivate(), this._listeners = []; }
    activate() { return this._isActive || (this._isActive = !0, this._listeners.forEach(a => { a.call(this, { matches: this.matches, media: this.media }); })), this; }
    deactivate() { return this._isActive && (this._isActive = !1, this._listeners.forEach(a => { a.call(this, { matches: this.matches, media: this.media }); })), this; }
    addListener(a) { this._listeners.indexOf(a) === -1 && this._listeners.push(a), this._isActive && a.call(this, { matches: this.matches, media: this.media }); }
    removeListener(a) { }
    dispatchEvent(a) { return !1; }
}, Yt = { provide: M, useClass: Rt };
function Dt(s) { return Array.isArray(s) ? s : [s]; }
var Zt = (() => { class s {
    constructor(t, e, i) { this.breakpoints = t, this.matchMedia = e, this.hook = i, this.filterOverlaps = !1, this.destroyed$ = new P, this._media$ = this.watchActivations(); }
    ngOnDestroy() { this.destroyed$.next(), this.destroyed$.complete(); }
    asObservable() { return this._media$; }
    isActive(t) { return Lt(Dt(t)).some(i => { let r = Ct(i, this.breakpoints); return r !== null && this.matchMedia.isActive(r); }); }
    watchActivations() { let t = this.breakpoints.items.map(e => e.mediaQuery); return this.buildObservable(t); }
    buildObservable(t) { let e = n => { let c = l => l.mediaQuery.length > 0; return n.filter(c).length > 0; }, i = n => this.filterOverlaps ? n.filter(c => this.breakpoints.findByQuery(c.mediaQuery)?.overlapping ?? !0) : n, r = (n, c) => { if (n.length !== c.length)
        return !1; let l = n.map(y => y.mediaQuery), w = new Set(c.map(y => y.mediaQuery)); return new Set(l.filter(y => !w.has(y))).size === 0; }; return this.matchMedia.observe(this.hook.withPrintQuery(t)).pipe(m(n => n.matches), it(0, Z), st(n => G(this.findAllActivations())), rt(i), m(e), at(r), nt(this.destroyed$)); }
    findAllActivations() { let t = i => { let r = this.breakpoints.findByQuery(i.mediaQuery); return _(i, r); }, e = i => this.hook.isPrintEvent(i) ? this.hook.updateEvent(i) : i; return this.matchMedia.activations.map(i => new h(!0, i)).map(e).map(t).sort(p); }
} return s.\u0275fac = function (t) { return new (t || s)(o.\u0275\u0275inject(E), o.\u0275\u0275inject(M), o.\u0275\u0275inject(K)); }, s.\u0275prov = o.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac, providedIn: "root" }), s; })();
function Ct(s, a) { return (a.findByAlias(s) ?? a.findByQuery(s))?.mediaQuery ?? null; }
function Lt(s) { return s.flatMap(a => a.split(",")).map(a => a.trim()); }
var Gt = (() => { class s {
    constructor(t, e, i, r, n) { this.breakpoints = t, this.matchMedia = e, this.layoutConfig = i, this._platformId = r, this._document = n, this.hasCachedRegistryMatches = !1, this.originalActivations = [], this.originalRegistry = new Map; }
    activate(t) { t = t.map(e => e.trim()), this.saveActivations(), this.deactivateAll(), this.setActivations(t), this.prepareAutoRestore(); }
    restore() { if (this.hasCachedRegistryMatches) {
        let t = i => i.mediaQuery, e = this.originalActivations.map(t);
        try {
            this.deactivateAll(), this.restoreRegistryMatches(), this.setActivations(e);
        }
        finally {
            this.originalActivations = [], this.resizeSubscription && this.resizeSubscription.unsubscribe();
        }
    } }
    prepareAutoRestore() { if (u(this._platformId) && this._document && this.layoutConfig.mediaTriggerAutoRestore) {
        let i = X(window, "resize").pipe(ot(1));
        this.resizeSubscription = i.subscribe(this.restore.bind(this));
    } }
    deactivateAll() { let t = this.currentActivations; this.forceRegistryMatches(t, !1), this.simulateMediaChanges(t, !1); }
    saveActivations() { if (!this.hasCachedRegistryMatches) {
        let t = i => new h(!0, i), e = i => { let r = this.breakpoints.findByQuery(i.mediaQuery); return _(i, r); };
        this.originalActivations = this.currentActivations.map(t).map(e).sort(p), this.cacheRegistryMatches();
    } }
    setActivations(t) { this.originalRegistry && this.forceRegistryMatches(t, !0), this.simulateMediaChanges(t); }
    simulateMediaChanges(t, e = !0) { let i = n => { let c = this.breakpoints, l = c.findByAlias(n) || c.findByQuery(n); return l ? l.mediaQuery : n; }, r = n => this.emitChangeEvent(e, n); t.map(i).forEach(r); }
    forceRegistryMatches(t, e) { let i = new Map; t.forEach(r => { i.set(r, { matches: e }); }), this.matchMedia.registry = i; }
    cacheRegistryMatches() { let t = this.originalRegistry; t.clear(), this.matchMedia.registry.forEach((e, i) => { t.set(i, e); }), this.hasCachedRegistryMatches = !0; }
    restoreRegistryMatches() { let t = this.matchMedia.registry; t.clear(), this.originalRegistry.forEach((e, i) => { t.set(i, e); }), this.originalRegistry.clear(), this.hasCachedRegistryMatches = !1; }
    emitChangeEvent(t, e) { this.matchMedia.source.next(new h(t, e)); }
    get currentActivations() { return this.matchMedia.activations; }
} return s.\u0275fac = function (t) { return new (t || s)(o.\u0275\u0275inject(E), o.\u0275\u0275inject(M), o.\u0275\u0275inject(b), o.\u0275\u0275inject(g), o.\u0275\u0275inject(v)); }, s.\u0275prov = o.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac, providedIn: "root" }), s; })();
function Xt(s, a = "1", t = "1") { let e = [a, t, s], i = s.indexOf("calc"); if (i > 0) {
    e[2] = N(s.substring(i).trim());
    let r = s.substr(0, i).trim().split(" ");
    r.length == 2 && (e[0] = r[0], e[1] = r[1]);
}
else if (i == 0)
    e[2] = N(s.trim());
else {
    let r = s.split(" ");
    e = r.length === 3 ? r : [a, t, s];
} return e; }
function N(s) { return s.replace(/[\s]/g, "").replace(/[\/\*\+\-]/g, " $& "); }
var $ = "x";
function Jt(s, a) { if (a === void 0)
    return s; let t = e => { let i = +e.slice(0, -$.length); return s.endsWith($) && !isNaN(i) ? `${i * a.value}${a.unit}` : s; }; return s.includes(" ") ? s.split(" ").map(t).join(" ") : t(s); }
export { pt as BREAKPOINT, St as BREAKPOINTS, Tt as BREAKPOINT_PRINT, lt as BROWSER_PROVIDER, zt as BaseDirective2, E as BreakPointRegistry, Q as CLASS_NAME, qt as CoreModule, bt as DEFAULT_BREAKPOINTS, dt as DEFAULT_CONFIG, b as LAYOUT_CONFIG, h as MediaChange, Qt as MediaMarshaller, Zt as MediaObserver, Gt as MediaTrigger, _t as ORIENTATION_BREAKPOINTS, K as PrintHook, ut as SERVER_TOKEN, d as ScreenTypes, B as StyleBuilder, ft as StyleUtils, ht as StylesheetMap, Dt as coerceArray, _ as mergeAlias, ct as removeStyles, vt as sortAscendingPriority, p as sortDescendingPriority, Xt as validateBasis, M as \u0275MatchMedia, Rt as \u0275MockMatchMedia, Yt as \u0275MockMatchMediaProvider, Jt as \u0275multiply };
/*! Bundled license information:

@angular/flex-layout/fesm2020/angular-flex-layout-core.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
//# sourceMappingURL=_angular_flex_layout_core._F23nXl0m6.js.map
