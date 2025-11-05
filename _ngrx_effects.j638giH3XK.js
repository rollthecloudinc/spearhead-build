import { a as l } from "@nf-internal/chunk-GL2BOVXA";
import "rxjs";
import { merge as D, Observable as k, Subject as V } from "rxjs";
import { ignoreElements as B, materialize as z, map as g, catchError as K, filter as v, groupBy as T, mergeMap as _, exhaustMap as Y, dematerialize as J, take as L } from "rxjs/operators";
import * as o from "@angular/core";
import { InjectionToken as d, inject as u, makeEnvironmentProviders as X, provideEnvironmentInitializer as q } from "@angular/core";
import * as a from "@ngrx/store";
import { ScannedActionsSubject as Q, createAction as W, ROOT_STORE_PROVIDER as Z, FEATURE_STATE_PROVIDER as tt, Store as et } from "@ngrx/store";
var nt = { dispatch: !0, functional: !1, useEffectsErrorHandler: !0 }, p = "__@ngrx/effects_create__";
function xt(t, r = {}) { let e = r.functional ? t : t(), n = l(l({}, nt), r); return Object.defineProperty(e, p, { value: n }), e; }
function rt(t) { return Object.getOwnPropertyNames(t).filter(n => t[n] && t[n].hasOwnProperty(p) ? t[n][p].hasOwnProperty("dispatch") : !1).map(n => { let s = t[n][p]; return l({ propertyName: n }, s); }); }
function Pt(t) { return w(t).reduce((r, { propertyName: e, dispatch: n, useEffectsErrorHandler: s }) => (r[e] = { dispatch: n, useEffectsErrorHandler: s }, r), {}); }
function w(t) { return rt(t); }
function A(t) { return Object.getPrototypeOf(t); }
function ot(t) { return !!t.constructor && t.constructor.name !== "Object" && t.constructor.name !== "Function"; }
function S(t) { return typeof t == "function"; }
function F(t) { return t.filter(S); }
function st(t) { return t instanceof d || S(t); }
function it(t, r, e) { let n = A(t), i = !!n && n.constructor.name !== "Object" ? n.constructor.name : null, c = w(t).map(({ propertyName: f, dispatch: I, useEffectsErrorHandler: h }) => { let O = typeof t[f] == "function" ? t[f]() : t[f], j = h ? e(O, r) : O; return I === !1 ? j.pipe(B()) : j.pipe(z()).pipe(g(H => ({ effect: t[f], notification: H, propertyName: f, sourceName: i, sourceInstance: t }))); }); return D(...c); }
var ft = 10;
function x(t, r, e = ft) { return t.pipe(K(n => (r && r.handleError(n), e <= 1 ? t : x(t, r, e - 1)))); }
var $t = (() => { class t extends k {
    constructor(e) { super(), e && (this.source = e); }
    lift(e) { let n = new t; return n.source = this, n.operator = e, n; }
    static { this.\u0275fac = function (n) { return new (n || t)(o.\u0275\u0275inject(Q)); }; }
    static { this.\u0275prov = o.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); }
} return t; })();
function Nt(...t) { return v(r => t.some(e => typeof e == "string" ? e === r.type : e.type === r.type)); }
var P = new d("@ngrx/effects Internal Root Guard"), E = new d("@ngrx/effects User Provided Effects"), y = new d("@ngrx/effects Internal Root Effects"), $ = new d("@ngrx/effects Internal Root Effects Instances"), C = new d("@ngrx/effects Internal Feature Effects"), N = new d("@ngrx/effects Internal Feature Effects Instance Groups"), ct = new d("@ngrx/effects Effects Error Handler", { providedIn: "root", factory: () => x }), U = "@ngrx/effects/init", ut = W(U);
function at(t, r) { if (t.notification.kind === "N") {
    let e = t.notification.value;
    !dt(e) && r.handleError(new Error(`Effect ${lt(t)} dispatched an invalid action: ${Et(e)}`));
} }
function dt(t) { return typeof t != "function" && t && t.type && typeof t.type == "string"; }
function lt({ propertyName: t, sourceInstance: r, sourceName: e }) { let n = typeof r[t] == "function"; return !!e ? `"${e}.${String(t)}${n ? "()" : ""}"` : `"${String(t)}()"`; }
function Et(t) { try {
    return JSON.stringify(t);
}
catch {
    return t;
} }
var pt = "ngrxOnIdentifyEffects";
function ht(t) { return M(t, pt); }
var gt = "ngrxOnRunEffects";
function vt(t) { return M(t, gt); }
var Ft = "ngrxOnInitEffects";
function yt(t) { return M(t, Ft); }
function M(t, r) { return t && r in t && typeof t[r] == "function"; }
var R = (() => { class t extends V {
    constructor(e, n) { super(), this.errorHandler = e, this.effectsErrorHandler = n; }
    addEffects(e) { this.next(e); }
    toActions() { return this.pipe(T(e => ot(e) ? A(e) : e), _(e => e.pipe(T(St))), _(e => { let n = e.pipe(Y(i => Mt(this.errorHandler, this.effectsErrorHandler)(i)), g(i => (at(i, this.errorHandler), i.notification)), v(i => i.kind === "N" && i.value != null), J()), s = e.pipe(L(1), v(yt), g(i => i.ngrxOnInitEffects())); return D(n, s); })); }
    static { this.\u0275fac = function (n) { return new (n || t)(o.\u0275\u0275inject(o.ErrorHandler), o.\u0275\u0275inject(ct)); }; }
    static { this.\u0275prov = o.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); }
} return t; })();
function St(t) { return ht(t) ? t.ngrxOnIdentifyEffects() : ""; }
function Mt(t, r) { return e => { let n = it(e, t, r); return vt(e) ? e.ngrxOnRunEffects(n) : n; }; }
var m = (() => { class t {
    get isStarted() { return !!this.effectsSubscription; }
    constructor(e, n) { this.effectSources = e, this.store = n, this.effectsSubscription = null; }
    start() { this.effectsSubscription || (this.effectsSubscription = this.effectSources.toActions().subscribe(this.store)); }
    ngOnDestroy() { this.effectsSubscription && (this.effectsSubscription.unsubscribe(), this.effectsSubscription = null); }
    static { this.\u0275fac = function (n) { return new (n || t)(o.\u0275\u0275inject(R), o.\u0275\u0275inject(a.Store)); }; }
    static { this.\u0275prov = o.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); }
} return t; })(), G = (() => { class t {
    constructor(e, n, s, i, c, f, I) { this.sources = e, n.start(); for (let h of i)
        e.addEffects(h); s.dispatch({ type: U }); }
    addEffects(e) { this.sources.addEffects(e); }
    static { this.\u0275fac = function (n) { return new (n || t)(o.\u0275\u0275inject(R), o.\u0275\u0275inject(m), o.\u0275\u0275inject(a.Store), o.\u0275\u0275inject($), o.\u0275\u0275inject(a.StoreRootModule, 8), o.\u0275\u0275inject(a.StoreFeatureModule, 8), o.\u0275\u0275inject(P, 8)); }; }
    static { this.\u0275mod = o.\u0275\u0275defineNgModule({ type: t }); }
    static { this.\u0275inj = o.\u0275\u0275defineInjector({}); }
} return t; })(), Rt = (() => { class t {
    constructor(e, n, s, i) { let c = n.flat(); for (let f of c)
        e.addEffects(f); }
    static { this.\u0275fac = function (n) { return new (n || t)(o.\u0275\u0275inject(G), o.\u0275\u0275inject(N), o.\u0275\u0275inject(a.StoreRootModule, 8), o.\u0275\u0275inject(a.StoreFeatureModule, 8)); }; }
    static { this.\u0275mod = o.\u0275\u0275defineNgModule({ type: t }); }
    static { this.\u0275inj = o.\u0275\u0275defineInjector({}); }
} return t; })(), Ut = (() => { class t {
    static forFeature(...e) { let n = e.flat(), s = F(n); return { ngModule: Rt, providers: [s, { provide: C, multi: !0, useValue: n }, { provide: E, multi: !0, useValue: [] }, { provide: N, multi: !0, useFactory: b, deps: [C, E] }] }; }
    static forRoot(...e) { let n = e.flat(), s = F(n); return { ngModule: G, providers: [s, { provide: y, useValue: [n] }, { provide: P, useFactory: mt }, { provide: E, multi: !0, useValue: [] }, { provide: $, useFactory: b, deps: [y, E] }] }; }
    static { this.\u0275fac = function (n) { return new (n || t); }; }
    static { this.\u0275mod = o.\u0275\u0275defineNgModule({ type: t }); }
    static { this.\u0275inj = o.\u0275\u0275defineInjector({}); }
} return t; })();
function b(t, r) { let e = []; for (let n of t)
    e.push(...n); for (let n of r)
    e.push(...n); return e.map(n => st(n) ? u(n) : n); }
function mt() { let t = u(m, { optional: !0, skipSelf: !0 }), r = u(y, { self: !0 }); if (!(r.length === 1 && r[0].length === 0) && t)
    throw new TypeError("EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead."); return "guarded"; }
function Gt(...t) { let r = t.flat(), e = F(r); return X([e, q(() => { u(Z), u(tt, { optional: !0 }); let n = u(m), s = u(R), i = !n.isStarted; i && n.start(); for (let c of r) {
        let f = S(c) ? u(c) : c;
        s.addEffects(f);
    } i && u(et).dispatch(ut()); })]); }
export { $t as Actions, ct as EFFECTS_ERROR_HANDLER, R as EffectSources, Rt as EffectsFeatureModule, Ut as EffectsModule, G as EffectsRootModule, m as EffectsRunner, U as ROOT_EFFECTS_INIT, E as USER_PROVIDED_EFFECTS, xt as createEffect, x as defaultEffectsErrorHandler, Pt as getEffectsMetadata, it as mergeEffects, Nt as ofType, Gt as provideEffects, ut as rootEffectsInit };
//# sourceMappingURL=_ngrx_effects.j638giH3XK.js.map
