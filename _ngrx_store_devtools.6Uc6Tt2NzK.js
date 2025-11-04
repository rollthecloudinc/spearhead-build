import { a as k, b as D } from "@nf-internal/chunk-GL2BOVXA";
import * as f from "@angular/core";
import { InjectionToken as z, inject as Nt, NgZone as Rt, makeEnvironmentProviders as Mt } from "@angular/core";
import * as C from "@ngrx/store";
import { ActionsSubject as jt, UPDATE as dt, INIT as ht, INITIAL_STATE as _t, StateObservable as Pt, ReducerManagerDispatcher as Lt } from "@ngrx/store";
import { EMPTY as $t, Observable as ft, of as nt, merge as st, queueScheduler as zt, ReplaySubject as Ft } from "rxjs";
import { share as Bt, filter as N, map as v, concatMap as Ut, timeout as Gt, debounceTime as Ht, catchError as Zt, take as Vt, takeUntil as B, switchMap as it, skip as Kt, observeOn as Xt, withLatestFrom as Wt, scan as qt } from "rxjs/operators";
import { toSignal as Jt } from "@angular/core/rxjs-interop";
var M = "PERFORM_ACTION", Yt = "REFRESH", pt = "RESET", gt = "ROLLBACK", mt = "COMMIT", St = "SWEEP", It = "TOGGLE_ACTION", Qt = "SET_ACTIONS_ACTIVE", yt = "JUMP_TO_STATE", xt = "JUMP_TO_ACTION", tt = "IMPORT_STATE", Et = "LOCK_CHANGES", Ot = "PAUSE_RECORDING", w = class {
    constructor(n, t) { if (this.action = n, this.timestamp = t, this.type = M, typeof n.type > "u")
        throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?'); }
}, U = class {
    constructor() { this.type = Yt; }
}, G = class {
    constructor(n) { this.timestamp = n, this.type = pt; }
}, H = class {
    constructor(n) { this.timestamp = n, this.type = gt; }
}, Z = class {
    constructor(n) { this.timestamp = n, this.type = mt; }
}, V = class {
    constructor() { this.type = St; }
}, K = class {
    constructor(n) { this.id = n, this.type = It; }
};
var X = class {
    constructor(n) { this.index = n, this.type = yt; }
}, W = class {
    constructor(n) { this.actionId = n, this.type = xt; }
}, q = class {
    constructor(n) { this.nextLiftedState = n, this.type = tt; }
}, J = class {
    constructor(n) { this.status = n, this.type = Et; }
}, Y = class {
    constructor(n) { this.status = n, this.type = Ot; }
}, ot = class {
    constructor() { this.maxAge = !1; }
}, L = new z("@ngrx/store-devtools Options"), rt = new z("@ngrx/store-devtools Initial Config");
function At() { return null; }
var te = "NgRx Store DevTools";
function ee(e) { let n = { maxAge: !1, monitor: At, actionSanitizer: void 0, stateSanitizer: void 0, name: te, serialize: !1, logOnly: !1, autoPause: !1, trace: !1, traceLimit: 75, features: { pause: !0, lock: !0, persist: !0, export: !0, import: "custom", jump: !0, skip: !0, reorder: !0, dispatch: !0, test: !0 }, connectInZone: !1 }, t = typeof e == "function" ? e() : e, s = t.logOnly ? { pause: !0, export: !0, test: !0 } : !1, i = t.features || s || n.features; i.import === !0 && (i.import = "custom"); let a = Object.assign({}, n, { features: i }, t); if (a.maxAge && a.maxAge < 2)
    throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${a.maxAge}`); return a; }
function ct(e, n) { return e.filter(t => n.indexOf(t) < 0); }
function Tt(e) { let { computedStates: n, currentStateIndex: t } = e; if (t >= n.length) {
    let { state: i } = n[n.length - 1];
    return i;
} let { state: s } = n[t]; return s; }
function R(e) { return new w(e, +Date.now()); }
function ne(e, n) { return Object.keys(n).reduce((t, s) => { let i = Number(s); return t[i] = bt(e, n[i], i), t; }, {}); }
function bt(e, n, t) { return D(k({}, n), { action: e(n.action, t) }); }
function se(e, n) { return n.map((t, s) => ({ state: vt(e, t.state, s), error: t.error })); }
function vt(e, n, t) { return e(n, t); }
function wt(e) { return e.predicate || e.actionsSafelist || e.actionsBlocklist; }
function ie(e, n, t, s) { let i = [], a = {}, m = []; return e.stagedActionIds.forEach((l, S) => { let o = e.actionsById[l]; o && (S && et(e.computedStates[S], o, n, t, s) || (a[l] = o, i.push(l), m.push(e.computedStates[S]))); }), D(k({}, e), { stagedActionIds: i, actionsById: a, computedStates: m }); }
function et(e, n, t, s, i) { let a = t && !t(e, n.action), m = s && !n.action.type.match(s.map(S => at(S)).join("|")), l = i && n.action.type.match(i.map(S => at(S)).join("|")); return a || m || l; }
function at(e) { return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
function Ct(e) { return { ngZone: e ? Nt(Rt) : null, connectInZone: e }; }
var $ = (() => { class e extends jt {
    static { this.\u0275fac = (() => { let t; return function (i) { return (t || (t = f.\u0275\u0275getInheritedFactory(e)))(i || e); }; })(); }
    static { this.\u0275prov = f.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac }); }
} return e; })(), j = { START: "START", DISPATCH: "DISPATCH", STOP: "STOP", ACTION: "ACTION" }, Q = new z("@ngrx/store-devtools Redux Devtools Extension"), kt = (() => { class e {
    constructor(t, s, i) { this.config = s, this.dispatcher = i, this.zoneConfig = Ct(this.config.connectInZone), this.devtoolsExtension = t, this.createActionStreams(); }
    notify(t, s) { if (this.devtoolsExtension)
        if (t.type === M) {
            if (s.isLocked || s.isPaused)
                return;
            let i = Tt(s);
            if (wt(this.config) && et(i, t, this.config.predicate, this.config.actionsSafelist, this.config.actionsBlocklist))
                return;
            let a = this.config.stateSanitizer ? vt(this.config.stateSanitizer, i, s.currentStateIndex) : i, m = this.config.actionSanitizer ? bt(this.config.actionSanitizer, t, s.nextActionId) : t;
            this.sendToReduxDevtools(() => this.extensionConnection.send(m, a));
        }
        else {
            let i = D(k({}, s), { stagedActionIds: s.stagedActionIds, actionsById: this.config.actionSanitizer ? ne(this.config.actionSanitizer, s.actionsById) : s.actionsById, computedStates: this.config.stateSanitizer ? se(this.config.stateSanitizer, s.computedStates) : s.computedStates });
            this.sendToReduxDevtools(() => this.devtoolsExtension.send(null, i, this.getExtensionConfig(this.config)));
        } }
    createChangesObservable() { return this.devtoolsExtension ? new ft(t => { let s = this.zoneConfig.connectInZone ? this.zoneConfig.ngZone.runOutsideAngular(() => this.devtoolsExtension.connect(this.getExtensionConfig(this.config))) : this.devtoolsExtension.connect(this.getExtensionConfig(this.config)); return this.extensionConnection = s, s.init(), s.subscribe(i => t.next(i)), s.unsubscribe; }) : $t; }
    createActionStreams() { let t = this.createChangesObservable().pipe(Bt()), s = t.pipe(N(o => o.type === j.START)), i = t.pipe(N(o => o.type === j.STOP)), a = t.pipe(N(o => o.type === j.DISPATCH), v(o => this.unwrapAction(o.payload)), Ut(o => o.type === tt ? this.dispatcher.pipe(N(I => I.type === dt), Gt(1e3), Ht(1e3), v(() => o), Zt(() => nt(o)), Vt(1)) : nt(o))), l = t.pipe(N(o => o.type === j.ACTION), v(o => this.unwrapAction(o.payload))).pipe(B(i)), S = a.pipe(B(i)); this.start$ = s.pipe(B(i)), this.actions$ = this.start$.pipe(it(() => l)), this.liftedActions$ = this.start$.pipe(it(() => S)); }
    unwrapAction(t) { return typeof t == "string" ? (0, eval)(`(${t})`) : t; }
    getExtensionConfig(t) { let s = { name: t.name, features: t.features, serialize: t.serialize, autoPause: t.autoPause ?? !1, trace: t.trace ?? !1, traceLimit: t.traceLimit ?? 75 }; return t.maxAge !== !1 && (s.maxAge = t.maxAge), s; }
    sendToReduxDevtools(t) { try {
        t();
    }
    catch (s) {
        console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools", s);
    } }
    static { this.\u0275fac = function (s) { return new (s || e)(f.\u0275\u0275inject(Q), f.\u0275\u0275inject(L), f.\u0275\u0275inject($)); }; }
    static { this.\u0275prov = f.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac }); }
} return e; })(), P = { type: ht }, oe = "@ngrx/store-devtools/recompute", re = { type: oe };
function Dt(e, n, t, s, i) { if (s)
    return { state: t, error: "Interrupted by an error up the chain" }; let a = t, m; try {
    a = e(t, n);
}
catch (l) {
    m = l.toString(), i.handleError(l);
} return { state: a, error: m }; }
function _(e, n, t, s, i, a, m, l, S) { if (n >= e.length && e.length === a.length)
    return e; let o = e.slice(0, n), I = a.length - (S ? 1 : 0); for (let r = n; r < I; r++) {
    let d = a[r], x = i[d].action, u = o[r - 1], c = u ? u.state : s, O = u ? u.error : void 0, A = m.indexOf(d) > -1 ? u : Dt(t, x, c, O, l);
    o.push(A);
} return S && o.push(e[e.length - 1]), o; }
function ce(e, n) { return { monitorState: n(void 0, {}), nextActionId: 1, actionsById: { 0: R(P) }, stagedActionIds: [0], skippedActionIds: [], committedState: e, currentStateIndex: 0, computedStates: [], isLocked: !1, isPaused: !1 }; }
function ae(e, n, t, s, i = {}) { return a => (m, l) => { let { monitorState: S, actionsById: o, nextActionId: I, stagedActionIds: r, skippedActionIds: d, committedState: x, currentStateIndex: u, computedStates: c, isLocked: O, isPaused: y } = m || n; m || (o = Object.create(o)); function A(g) { let p = g, b = r.slice(1, p + 1); for (let E = 0; E < b.length; E++)
    if (c[E + 1].error) {
        p = E, b = r.slice(1, p + 1);
        break;
    }
    else
        delete o[b[E]]; d = d.filter(E => b.indexOf(E) === -1), r = [0, ...r.slice(p + 1)], x = c[p].state, c = c.slice(p), u = u > p ? u - p : 0; } function T() { o = { 0: R(P) }, I = 1, r = [0], d = [], x = c[u].state, u = 0, c = []; } let h = 0; switch (l.type) {
    case Et: {
        O = l.status, h = 1 / 0;
        break;
    }
    case Ot: {
        y = l.status, y ? (r = [...r, I], o[I] = new w({ type: "@ngrx/devtools/pause" }, +Date.now()), I++, h = r.length - 1, c = c.concat(c[c.length - 1]), u === r.length - 2 && u++, h = 1 / 0) : T();
        break;
    }
    case pt: {
        o = { 0: R(P) }, I = 1, r = [0], d = [], x = e, u = 0, c = [];
        break;
    }
    case mt: {
        T();
        break;
    }
    case gt: {
        o = { 0: R(P) }, I = 1, r = [0], d = [], u = 0, c = [];
        break;
    }
    case It: {
        let { id: g } = l;
        d.indexOf(g) === -1 ? d = [g, ...d] : d = d.filter(b => b !== g), h = r.indexOf(g);
        break;
    }
    case Qt: {
        let { start: g, end: p, active: b } = l, E = [];
        for (let F = g; F < p; F++)
            E.push(F);
        b ? d = ct(d, E) : d = [...d, ...E], h = r.indexOf(g);
        break;
    }
    case yt: {
        u = l.index, h = 1 / 0;
        break;
    }
    case xt: {
        let g = r.indexOf(l.actionId);
        g !== -1 && (u = g), h = 1 / 0;
        break;
    }
    case St: {
        r = ct(r, d), d = [], u = Math.min(u, r.length - 1);
        break;
    }
    case M: {
        if (O)
            return m || n;
        if (y || m && et(m.computedStates[u], l, i.predicate, i.actionsSafelist, i.actionsBlocklist)) {
            let p = c[c.length - 1];
            c = [...c.slice(0, -1), Dt(a, l.action, p.state, p.error, t)], h = 1 / 0;
            break;
        }
        i.maxAge && r.length === i.maxAge && A(1), u === r.length - 1 && u++;
        let g = I++;
        o[g] = l, r = [...r, g], h = r.length - 1;
        break;
    }
    case tt: {
        ({ monitorState: S, actionsById: o, nextActionId: I, stagedActionIds: r, skippedActionIds: d, committedState: x, currentStateIndex: u, computedStates: c, isLocked: O, isPaused: y } = l.nextLiftedState);
        break;
    }
    case ht: {
        h = 0, i.maxAge && r.length > i.maxAge && (c = _(c, h, a, x, o, r, d, t, y), A(r.length - i.maxAge), h = 1 / 0);
        break;
    }
    case dt: {
        if (c.filter(p => p.error).length > 0)
            h = 0, i.maxAge && r.length > i.maxAge && (c = _(c, h, a, x, o, r, d, t, y), A(r.length - i.maxAge), h = 1 / 0);
        else {
            if (!y && !O) {
                u === r.length - 1 && u++;
                let p = I++;
                o[p] = new w(l, +Date.now()), r = [...r, p], h = r.length - 1, c = _(c, h, a, x, o, r, d, t, y);
            }
            c = c.map(p => D(k({}, p), { state: a(p.state, re) })), u = r.length - 1, i.maxAge && r.length > i.maxAge && A(r.length - i.maxAge), h = 1 / 0;
        }
        break;
    }
    default: {
        h = 1 / 0;
        break;
    }
} return c = _(c, h, a, x, o, r, d, t, y), S = s(S, l), { monitorState: S, actionsById: o, nextActionId: I, stagedActionIds: r, skippedActionIds: d, committedState: x, currentStateIndex: u, computedStates: c, isLocked: O, isPaused: y }; }; }
var ut = (() => { class e {
    constructor(t, s, i, a, m, l, S, o) { let I = ce(S, o.monitor), r = ae(S, I, l, o.monitor, o), d = st(st(s.asObservable().pipe(Kt(1)), a.actions$).pipe(v(R)), t, a.liftedActions$).pipe(Xt(zt)), x = i.pipe(v(r)), u = Ct(o.connectInZone), c = new Ft(1); this.liftedStateSubscription = d.pipe(Wt(x), lt(u), qt(({ state: A }, [T, h]) => { let g = h(A, T); return T.type !== M && wt(o) && (g = ie(g, o.predicate, o.actionsSafelist, o.actionsBlocklist)), a.notify(T, g), { state: g, action: T }; }, { state: I, action: null })).subscribe(({ state: A, action: T }) => { if (c.next(A), T.type === M) {
        let h = T.action;
        m.next(h);
    } }), this.extensionStartSubscription = a.start$.pipe(lt(u)).subscribe(() => { this.refresh(); }); let O = c.asObservable(), y = O.pipe(v(Tt)); Object.defineProperty(y, "state", { value: Jt(y, { manualCleanup: !0, requireSync: !0 }) }), this.dispatcher = t, this.liftedState = O, this.state = y; }
    ngOnDestroy() { this.liftedStateSubscription.unsubscribe(), this.extensionStartSubscription.unsubscribe(); }
    dispatch(t) { this.dispatcher.next(t); }
    next(t) { this.dispatcher.next(t); }
    error(t) { }
    complete() { }
    performAction(t) { this.dispatch(new w(t, +Date.now())); }
    refresh() { this.dispatch(new U); }
    reset() { this.dispatch(new G(+Date.now())); }
    rollback() { this.dispatch(new H(+Date.now())); }
    commit() { this.dispatch(new Z(+Date.now())); }
    sweep() { this.dispatch(new V); }
    toggleAction(t) { this.dispatch(new K(t)); }
    jumpToAction(t) { this.dispatch(new W(t)); }
    jumpToState(t) { this.dispatch(new X(t)); }
    importState(t) { this.dispatch(new q(t)); }
    lockChanges(t) { this.dispatch(new J(t)); }
    pauseRecording(t) { this.dispatch(new Y(t)); }
    static { this.\u0275fac = function (s) { return new (s || e)(f.\u0275\u0275inject($), f.\u0275\u0275inject(C.ActionsSubject), f.\u0275\u0275inject(C.ReducerObservable), f.\u0275\u0275inject(kt), f.\u0275\u0275inject(C.ScannedActionsSubject), f.\u0275\u0275inject(f.ErrorHandler), f.\u0275\u0275inject(_t), f.\u0275\u0275inject(L)); }; }
    static { this.\u0275prov = f.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac }); }
} return e; })();
function lt({ ngZone: e, connectInZone: n }) { return t => n ? new ft(s => t.subscribe({ next: i => e.run(() => s.next(i)), error: i => e.run(() => s.error(i)), complete: () => e.run(() => s.complete()) })) : t; }
var ue = new z("@ngrx/store-devtools Is Devtools Extension or Monitor Present");
function le(e, n) { return !!e || n.monitor !== At; }
function de() { let e = "__REDUX_DEVTOOLS_EXTENSION__"; return typeof window == "object" && typeof window[e] < "u" ? window[e] : null; }
function he(e) { return e.state; }
function fe(e = {}) { return Mt([kt, $, ut, { provide: rt, useValue: e }, { provide: ue, deps: [Q, L], useFactory: le }, { provide: Q, useFactory: de }, { provide: L, deps: [rt], useFactory: ee }, { provide: Pt, deps: [ut], useFactory: he }, { provide: Lt, useExisting: $ }]); }
var Oe = (() => { class e {
    static instrument(t = {}) { return { ngModule: e, providers: [fe(t)] }; }
    static { this.\u0275fac = function (s) { return new (s || e); }; }
    static { this.\u0275mod = f.\u0275\u0275defineNgModule({ type: e }); }
    static { this.\u0275inj = f.\u0275\u0275defineInjector({}); }
} return e; })();
export { rt as INITIAL_OPTIONS, oe as RECOMPUTE, Q as REDUX_DEVTOOLS_EXTENSION, ut as StoreDevtools, ot as StoreDevtoolsConfig, Oe as StoreDevtoolsModule, fe as provideStoreDevtools };
//# sourceMappingURL=_ngrx_store_devtools.6Uc6Tt2NzK.js.map
