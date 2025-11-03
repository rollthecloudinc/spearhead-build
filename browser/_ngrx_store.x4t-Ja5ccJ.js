import { a as p, b as R } from "@nf-internal/chunk-J4XOFOAH";
import * as s from "@angular/core";
import { InjectionToken as u, Inject as fe, computed as Oe, effect as Ce, untracked as _e, inject as l, Injector as Me, isDevMode as le, makeEnvironmentProviders as pe, provideEnvironmentInitializer as ye } from "@angular/core";
import { BehaviorSubject as U, Observable as N, Subject as De, queueScheduler as ke } from "rxjs";
import { observeOn as Ue, withLatestFrom as Ne, scan as Pe, pluck as ze, map as $e, distinctUntilChanged as Ve } from "rxjs/operators";
import { toSignal as Ke } from "@angular/core/rxjs-interop";
var O = {};
function qe(e, r) { if (O[e] = (O[e] || 0) + 1, typeof r == "function")
    return T(e, (...n) => R(p({}, r(...n)), { type: e })); switch (r ? r._as : "empty") {
    case "empty": return T(e, () => ({ type: e }));
    case "props": return T(e, n => R(p({}, n), { type: e }));
    default: throw new Error("Unexpected config.");
} }
function Le() { return { _as: "props", _p: void 0 }; }
function Ht(e) { }
function T(e, r) { return Object.defineProperty(r, "type", { value: e, writable: !1 }); }
function P(e) { return e.charAt(0).toUpperCase() + e.substring(1); }
function Be(e) { return e.charAt(0).toLowerCase() + e.substring(1); }
function Ge(e, r) { if (e == null)
    throw new Error(`${r} must be defined.`); }
function Yt(e) { let { source: r, events: t } = e; return Object.keys(t).reduce((n, o) => R(p({}, n), { [Ze(o)]: qe(He(r, o), t[o]) }), {}); }
function Qt() { return Le(); }
function Ze(e) { return e.trim().split(" ").map((r, t) => t === 0 ? Be(r) : P(r)).join(""); }
function He(e, r) { return `[${e}] ${r}`; }
var he = "@ngrx/store/init", m = (() => {
    class e extends U {
        constructor() { super({ type: he }); }
        next(t) {
            if (typeof t == "function")
                throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);
            if (typeof t > "u")
                throw new TypeError("Actions must be objects");
            if (typeof t.type > "u")
                throw new TypeError("Actions must have a type property");
            super.next(t);
        }
        complete() { }
        ngOnDestroy() { super.complete(); }
        static { this.\u0275fac = function (n) { return new (n || e); }; }
        static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac }); }
    }
    return e;
})(), Ye = [m], z = new u("@ngrx/store Internal Root Guard"), Q = new u("@ngrx/store Internal Initial State"), $ = new u("@ngrx/store Initial State"), Re = new u("@ngrx/store Reducer Factory"), W = new u("@ngrx/store Internal Reducer Factory Provider"), me = new u("@ngrx/store Initial Reducers"), w = new u("@ngrx/store Internal Initial Reducers"), J = new u("@ngrx/store Store Features"), X = new u("@ngrx/store Internal Store Reducers"), x = new u("@ngrx/store Internal Feature Reducers"), ee = new u("@ngrx/store Internal Feature Configs"), V = new u("@ngrx/store Internal Store Features"), te = new u("@ngrx/store Internal Feature Reducers Token"), K = new u("@ngrx/store Feature Reducers"), ne = new u("@ngrx/store User Provided Meta Reducers"), F = new u("@ngrx/store Meta Reducers"), re = new u("@ngrx/store Internal Resolved Meta Reducers"), oe = new u("@ngrx/store User Runtime Checks Config"), ie = new u("@ngrx/store Internal User Runtime Checks Config"), v = new u("@ngrx/store Internal Runtime Checks"), S = new u("@ngrx/store Check if Action types are unique"), C = new u("@ngrx/store Root Store Provider"), se = new u("@ngrx/store Feature State Provider");
function q(e, r = {}) { let t = Object.keys(e), n = {}; for (let i = 0; i < t.length; i++) {
    let c = t[i];
    typeof e[c] == "function" && (n[c] = e[c]);
} let o = Object.keys(n); return function (c, d) { c = c === void 0 ? r : c; let f = !1, y = {}; for (let a = 0; a < o.length; a++) {
    let h = o[a], xe = n[h], H = c[h], Y = xe(H, d);
    y[h] = Y, f = f || Y !== H;
} return f ? y : c; }; }
function Qe(e, r) { return Object.keys(e).filter(t => t !== r).reduce((t, n) => Object.assign(t, { [n]: e[n] }), {}); }
function Ee(...e) { return function (r) { if (e.length === 0)
    return r; let t = e[e.length - 1]; return e.slice(0, -1).reduceRight((o, i) => i(o), t(r)); }; }
function ve(e, r) { return Array.isArray(r) && r.length > 0 && (e = Ee.apply(null, [...r, e])), (t, n) => { let o = e(t); return (i, c) => (i = i === void 0 ? n : i, o(i, c)); }; }
function We(e) { let r = Array.isArray(e) && e.length > 0 ? Ee(...e) : t => t; return (t, n) => (t = r(t), (o, i) => (o = o === void 0 ? n : o, t(o, i))); }
var E = class extends N {
}, j = class extends m {
}, Je = "@ngrx/store/update-reducers", g = (() => { class e extends U {
    get currentReducers() { return this.reducers; }
    constructor(t, n, o, i) { super(i(o, n)), this.dispatcher = t, this.initialState = n, this.reducers = o, this.reducerFactory = i; }
    addFeature(t) { this.addFeatures([t]); }
    addFeatures(t) { let n = t.reduce((o, { reducers: i, reducerFactory: c, metaReducers: d, initialState: f, key: y }) => { let a = typeof i == "function" ? We(d)(i, f) : ve(c, d)(i, f); return o[y] = a, o; }, {}); this.addReducers(n); }
    removeFeature(t) { this.removeFeatures([t]); }
    removeFeatures(t) { this.removeReducers(t.map(n => n.key)); }
    addReducer(t, n) { this.addReducers({ [t]: n }); }
    addReducers(t) { this.reducers = p(p({}, this.reducers), t), this.updateReducers(Object.keys(t)); }
    removeReducer(t) { this.removeReducers([t]); }
    removeReducers(t) { t.forEach(n => { this.reducers = Qe(this.reducers, n); }), this.updateReducers(t); }
    updateReducers(t) { this.next(this.reducerFactory(this.reducers, this.initialState)), this.dispatcher.next({ type: Je, features: t }); }
    ngOnDestroy() { this.complete(); }
    static { this.\u0275fac = function (n) { return new (n || e)(s.\u0275\u0275inject(j), s.\u0275\u0275inject($), s.\u0275\u0275inject(me), s.\u0275\u0275inject(Re)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac }); }
} return e; })(), Xe = [g, { provide: E, useExisting: g }, { provide: j, useExisting: m }], b = (() => { class e extends De {
    ngOnDestroy() { this.complete(); }
    static { this.\u0275fac = (() => { let t; return function (o) { return (t || (t = s.\u0275\u0275getInheritedFactory(e)))(o || e); }; })(); }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac }); }
} return e; })(), et = [b], I = class extends N {
}, ce = (() => { class e extends U {
    static { this.INIT = he; }
    constructor(t, n, o, i) { super(i); let d = t.pipe(Ue(ke)).pipe(Ne(n)), f = { state: i }, y = d.pipe(Pe(tt, f)); this.stateSubscription = y.subscribe(({ state: a, action: h }) => { this.next(a), o.next(h); }), this.state = Ke(this, { manualCleanup: !0, requireSync: !0 }); }
    ngOnDestroy() { this.stateSubscription.unsubscribe(), this.complete(); }
    static { this.\u0275fac = function (n) { return new (n || e)(s.\u0275\u0275inject(m), s.\u0275\u0275inject(E), s.\u0275\u0275inject(b), s.\u0275\u0275inject($)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac }); }
} return e; })();
function tt(e = { state: void 0 }, [r, t]) { let { state: n } = e; return { state: t(n, r), action: r }; }
var nt = [ce, { provide: I, useExisting: ce }], A = (() => { class e extends N {
    constructor(t, n, o, i) { super(), this.actionsObserver = n, this.reducerManager = o, this.injector = i, this.source = t, this.state = t.state; }
    select(t, ...n) { return ot.call(null, t, ...n)(this); }
    selectSignal(t, n) { return Oe(() => t(this.state()), n); }
    lift(t) { let n = new e(this, this.actionsObserver, this.reducerManager); return n.operator = t, n; }
    dispatch(t, n) { if (typeof t == "function")
        return this.processDispatchFn(t, n); this.actionsObserver.next(t); }
    next(t) { this.actionsObserver.next(t); }
    error(t) { this.actionsObserver.error(t); }
    complete() { this.actionsObserver.complete(); }
    addReducer(t, n) { this.reducerManager.addReducer(t, n); }
    removeReducer(t) { this.reducerManager.removeReducer(t); }
    processDispatchFn(t, n) { Ge(this.injector, "Store Injector"); let o = n?.injector ?? it() ?? this.injector; return Ce(() => { let i = t(); _e(() => this.dispatch(i)); }, { injector: o }); }
    static { this.\u0275fac = function (n) { return new (n || e)(s.\u0275\u0275inject(I), s.\u0275\u0275inject(m), s.\u0275\u0275inject(g), s.\u0275\u0275inject(s.Injector)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac }); }
} return e; })(), rt = [A];
function ot(e, r, ...t) { return function (o) { let i; if (typeof e == "string") {
    let c = [r, ...t].filter(Boolean);
    i = o.pipe(ze(e, ...c));
}
else if (typeof e == "function")
    i = o.pipe($e(c => e(c, r)));
else
    throw new TypeError(`Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`); return i.pipe(Ve()); }; }
function it() { try {
    return l(Me);
}
catch {
    return;
} }
var L = "https://ngrx.io/guide/store/configuration/runtime-checks";
function ue(e) { return e === void 0; }
function ae(e) { return e === null; }
function ge(e) { return Array.isArray(e); }
function st(e) { return typeof e == "string"; }
function ct(e) { return typeof e == "boolean"; }
function ut(e) { return typeof e == "number"; }
function Se(e) { return typeof e == "object" && e !== null; }
function at(e) { return Se(e) && !ge(e); }
function Fe(e) { if (!at(e))
    return !1; let r = Object.getPrototypeOf(e); return r === Object.prototype || r === null; }
function _(e) { return typeof e == "function"; }
function dt(e) { return _(e) && e.hasOwnProperty("\u0275cmp"); }
function ft(e, r) { return Object.prototype.hasOwnProperty.call(e, r); }
var je = !1;
function Wt(e) { je = e; }
function lt() { return je; }
function M(e, r) { return e === r; }
function pt(e, r, t) { for (let n = 0; n < e.length; n++)
    if (!t(e[n], r[n]))
        return !0; return !1; }
function Jt(e, r) { return B(e, M, r); }
function B(e, r = M, t = M) { let n = null, o = null, i; function c() { n = null, o = null; } function d(a = void 0) { i = { result: a }; } function f() { i = void 0; } function y() { if (i !== void 0)
    return i.result; if (!n)
    return o = e.apply(null, arguments), n = arguments, o; if (!pt(arguments, n, r))
    return o; let a = e.apply(null, arguments); return n = arguments, t(o, a) ? o : (o = a, a); } return { memoized: y, reset: c, setResult: d, clearResult: f }; }
function Ie(...e) { return ht(B)(...e); }
function yt(e, r, t, n) { if (t === void 0) {
    let i = r.map(c => c(e));
    return n.memoized.apply(null, i);
} let o = r.map(i => i(e, t)); return n.memoized.apply(null, [...o, t]); }
function ht(e, r = { stateFn: yt }) { return function (...t) { let n = t; if (Array.isArray(n[0])) {
    let [a, ...h] = n;
    n = [...a, ...h];
}
else
    n.length === 1 && mt(n[0]) && (n = Et(n[0])); let o = n.slice(0, n.length - 1), i = n[n.length - 1], c = o.filter(a => a.release && typeof a.release == "function"), d = e(function (...a) { return i.apply(null, a); }), f = B(function (a, h) { return r.stateFn.apply(null, [a, o, h, d]); }); function y() { f.reset(), d.reset(), c.forEach(a => a.release()); } return Object.assign(f.memoized, { release: y, projector: d.memoized, setResult: f.setResult, clearResult: f.clearResult }); }; }
function Rt(e) { return Ie(r => { let t = r[e]; return !lt() && le() && !(e in r) && console.warn(`@ngrx/store: The feature name "${e}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${e}', ...) or StoreModule.forFeature('${e}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`), t; }, r => r); }
function mt(e) { return !!e && typeof e == "object" && Object.values(e).every(r => typeof r == "function"); }
function Et(e) { let r = Object.values(e), t = Object.keys(e), n = (...o) => t.reduce((i, c, d) => R(p({}, i), { [c]: o[d] }), {}); return [...r, n]; }
function Xt(e) { let { name: r, reducer: t, extraSelectors: n } = e, o = Rt(r), i = vt(o, t), c = p({ [`select${P(r)}State`]: o }, i), d = n ? n(c) : {}; return p(p({ name: r, reducer: t }, c), d); }
function vt(e, r) { let t = gt(r); return (Fe(t) ? Object.keys(t) : []).reduce((o, i) => R(p({}, o), { [`select${P(i)}`]: Ie(e, c => c?.[i]) }), {}); }
function gt(e) { return e(void 0, { type: "@ngrx/feature/init" }); }
function St(e) { return e instanceof u ? l(e) : e; }
function Ft(e, r) { return r.map((t, n) => { if (e[n] instanceof u) {
    let o = l(e[n]);
    return { key: t.key, reducerFactory: o.reducerFactory ? o.reducerFactory : q, metaReducers: o.metaReducers ? o.metaReducers : [], initialState: o.initialState };
} return t; }); }
function jt(e) { return e.map(r => r instanceof u ? l(r) : r); }
function G(e) { return typeof e == "function" ? e() : e; }
function It(e, r) { return e.concat(r); }
function bt() { if (l(A, { optional: !0, skipSelf: !0 }))
    throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead."); return "guarded"; }
function At(e, r) { return function (t, n) { let o = r.action(n) ? D(n) : n, i = e(t, o); return r.state() ? D(i) : i; }; }
function D(e) { Object.freeze(e); let r = _(e); return Object.getOwnPropertyNames(e).forEach(t => { if (!t.startsWith("\u0275") && ft(e, t) && (!r || t !== "caller" && t !== "callee" && t !== "arguments")) {
    let n = e[t];
    (Se(n) || _(n)) && !Object.isFrozen(n) && D(n);
} }), e; }
function Tt(e, r) { return function (t, n) { if (r.action(n)) {
    let i = k(n);
    de(i, "action");
} let o = e(t, n); if (r.state()) {
    let i = k(o);
    de(i, "state");
} return o; }; }
function k(e, r = []) { return (ue(e) || ae(e)) && r.length === 0 ? { path: ["root"], value: e } : Object.keys(e).reduce((n, o) => { if (n)
    return n; let i = e[o]; return dt(i) ? n : ue(i) || ae(i) || ut(i) || ct(i) || st(i) || ge(i) ? !1 : Fe(i) ? k(i, [...r, o]) : { path: [...r, o], value: i }; }, !1); }
function de(e, r) { if (e === !1)
    return; let t = e.path.join("."), n = new Error(`Detected unserializable ${r} at "${t}". ${L}#strict${r}serializability`); throw n.value = e.value, n.unserializablePath = t, n; }
function wt(e, r) { return function (t, n) { if (r.action(n) && !s.NgZone.isInAngularZone())
    throw new Error(`Action '${n.type}' running outside NgZone. ${L}#strictactionwithinngzone`); return e(t, n); }; }
function xt(e) { return le() ? p({ strictStateSerializability: !1, strictActionSerializability: !1, strictStateImmutability: !0, strictActionImmutability: !0, strictActionWithinNgZone: !1, strictActionTypeUniqueness: !1 }, e) : { strictStateSerializability: !1, strictActionSerializability: !1, strictStateImmutability: !1, strictActionImmutability: !1, strictActionWithinNgZone: !1, strictActionTypeUniqueness: !1 }; }
function Ot({ strictActionSerializability: e, strictStateSerializability: r }) { return t => e || r ? Tt(t, { action: n => e && !Z(n), state: () => r }) : t; }
function Ct({ strictActionImmutability: e, strictStateImmutability: r }) { return t => e || r ? At(t, { action: n => e && !Z(n), state: () => r }) : t; }
function Z(e) { return e.type.startsWith("@ngrx"); }
function _t({ strictActionWithinNgZone: e }) { return r => e ? wt(r, { action: t => e && !Z(t) }) : r; }
function Mt(e) { return [{ provide: ie, useValue: e }, { provide: oe, useFactory: Dt, deps: [ie] }, { provide: v, deps: [oe], useFactory: xt }, { provide: F, multi: !0, deps: [v], useFactory: Ct }, { provide: F, multi: !0, deps: [v], useFactory: Ot }, { provide: F, multi: !0, deps: [v], useFactory: _t }]; }
function be() { return [{ provide: S, multi: !0, deps: [v], useFactory: kt }]; }
function Dt(e) { return e; }
function kt(e) { if (!e.strictActionTypeUniqueness)
    return; let r = Object.entries(O).filter(([, t]) => t > 1).map(([t]) => t); if (r.length)
    throw new Error(`Action types are registered more than once, ${r.map(t => `"${t}"`).join(", ")}. ${L}#strictactiontypeuniqueness`); }
function en(e, r, t = {}) { return pe([...Te(e, r, t), zt]); }
function Ae(e = {}, r = {}) { return [{ provide: z, useFactory: bt }, { provide: Q, useValue: r.initialState }, { provide: $, useFactory: G, deps: [Q] }, { provide: w, useValue: e }, { provide: X, useExisting: e instanceof u ? e : w }, { provide: me, deps: [w, [new fe(X)]], useFactory: St }, { provide: ne, useValue: r.metaReducers ? r.metaReducers : [] }, { provide: re, deps: [F, ne], useFactory: It }, { provide: W, useValue: r.reducerFactory ? r.reducerFactory : q }, { provide: Re, deps: [W, re], useFactory: ve }, Ye, Xe, et, nt, rt, Mt(r.runtimeChecks), be()]; }
function Ut() { l(m), l(E), l(b), l(A), l(z, { optional: !0 }), l(S, { optional: !0 }); }
var Nt = [{ provide: C, useFactory: Ut }, ye(() => l(C))];
function tn(e, r) { return pe([...Ae(e, r), Nt]); }
function Pt() { l(C); let e = l(V), r = l(K), t = l(g); l(S, { optional: !0 }); let n = e.map((o, i) => { let d = r.shift()[i]; return R(p({}, o), { reducers: d, initialState: G(o.initialState) }); }); t.addFeatures(n); }
var zt = [{ provide: se, useFactory: Pt }, ye(() => l(se))];
function Te(e, r, t = {}) { return [{ provide: ee, multi: !0, useValue: e instanceof Object ? {} : t }, { provide: J, multi: !0, useValue: { key: e instanceof Object ? e.name : e, reducerFactory: !(t instanceof u) && t.reducerFactory ? t.reducerFactory : q, metaReducers: !(t instanceof u) && t.metaReducers ? t.metaReducers : [], initialState: !(t instanceof u) && t.initialState ? t.initialState : void 0 } }, { provide: V, deps: [ee, J], useFactory: Ft }, { provide: x, multi: !0, useValue: e instanceof Object ? e.reducer : r }, { provide: te, multi: !0, useExisting: r instanceof u ? r : x }, { provide: K, multi: !0, deps: [x, [new fe(te)]], useFactory: jt }, be()]; }
var we = (() => { class e {
    constructor(t, n, o, i, c, d) { }
    static { this.\u0275fac = function (n) { return new (n || e)(s.\u0275\u0275inject(m), s.\u0275\u0275inject(E), s.\u0275\u0275inject(b), s.\u0275\u0275inject(A), s.\u0275\u0275inject(z, 8), s.\u0275\u0275inject(S, 8)); }; }
    static { this.\u0275mod = s.\u0275\u0275defineNgModule({ type: e }); }
    static { this.\u0275inj = s.\u0275\u0275defineInjector({}); }
} return e; })(), $t = (() => { class e {
    constructor(t, n, o, i, c) { this.features = t, this.featureReducers = n, this.reducerManager = o; let d = t.map((f, y) => { let h = n.shift()[y]; return R(p({}, f), { reducers: h, initialState: G(f.initialState) }); }); o.addFeatures(d); }
    ngOnDestroy() { this.reducerManager.removeFeatures(this.features); }
    static { this.\u0275fac = function (n) { return new (n || e)(s.\u0275\u0275inject(V), s.\u0275\u0275inject(K), s.\u0275\u0275inject(g), s.\u0275\u0275inject(we), s.\u0275\u0275inject(S, 8)); }; }
    static { this.\u0275mod = s.\u0275\u0275defineNgModule({ type: e }); }
    static { this.\u0275inj = s.\u0275\u0275defineInjector({}); }
} return e; })(), nn = (() => { class e {
    static forRoot(t, n) { return { ngModule: we, providers: [...Ae(t, n)] }; }
    static forFeature(t, n, o = {}) { return { ngModule: $t, providers: [...Te(t, n, o)] }; }
    static { this.\u0275fac = function (n) { return new (n || e); }; }
    static { this.\u0275mod = s.\u0275\u0275defineNgModule({ type: e }); }
    static { this.\u0275inj = s.\u0275\u0275defineInjector({}); }
} return e; })();
function rn(...e) { let r = e.pop(), t = e.map(n => n.type); return { reducer: r, types: t }; }
function on(e, ...r) { let t = new Map; for (let n of r)
    for (let o of n.types) {
        let i = t.get(o);
        if (i) {
            let c = (d, f) => n.reducer(i(d, f), f);
            t.set(o, c);
        }
        else
            t.set(o, n.reducer);
    } return function (n = e, o) { let i = t.get(o.type); return i ? i(n, o) : n; }; }
export { v as ACTIVE_RUNTIME_CHECKS, m as ActionsSubject, K as FEATURE_REDUCERS, se as FEATURE_STATE_PROVIDER, he as INIT, me as INITIAL_REDUCERS, $ as INITIAL_STATE, F as META_REDUCERS, Re as REDUCER_FACTORY, C as ROOT_STORE_PROVIDER, g as ReducerManager, j as ReducerManagerDispatcher, E as ReducerObservable, J as STORE_FEATURES, b as ScannedActionsSubject, ce as State, I as StateObservable, A as Store, $t as StoreFeatureModule, nn as StoreModule, we as StoreRootModule, Je as UPDATE, ne as USER_PROVIDED_META_REDUCERS, oe as USER_RUNTIME_CHECKS, q as combineReducers, Ee as compose, qe as createAction, Yt as createActionGroup, Xt as createFeature, Rt as createFeatureSelector, on as createReducer, ve as createReducerFactory, Ie as createSelector, ht as createSelectorFactory, B as defaultMemoize, yt as defaultStateFn, Qt as emptyProps, lt as isNgrxMockEnvironment, rn as on, Le as props, en as provideState, tn as provideStore, tt as reduceState, Jt as resultMemoize, ot as select, Wt as setNgrxMockEnvironment, Ht as union };
