import { $ as Q, $a as Qe, $b as zt, A as C, Ab as xt, B as X, Ba as ve, Bb as dt, C as Z, Ca as he, Cb as vt, D as $, Da as be, Db as ht, E as rr, Ea as ge, Eb as bt, F as x, Fa as Ae, Fb as gt, G as N, Ga as ye, Gb as At, H as U, Ha as we, Hb as yt, I as er, Ia as Ee, Ib as wt, J as Rr, Ja as Fe, Jb as Et, K as k, Ka as Ie, Kb as Ft, L as jr, La as Oe, Lb as It, M as Nr, Ma as Se, Mb as Ot, N as Ur, Na as Te, Nb as St, O as zr, Oa as ke, Ob as Tt, P as M, Pa as Me, Pb as kt, Q as Qr, Qa as qe, Qb as Mt, R as _r, Ra as Le, Rb as qt, S as Yr, Sa as Ve, Sb as Lt, T as Dr, Ta as Ce, Tb as Vt, U as Br, Ua as Pe, Ub as Ct, V as Jr, Va as We, Vb as Pt, W as E, Wa as Re, Wb as Wt, X as tr, Xa as je, Xb as Rt, Y as or, Ya as Ne, Yb as jt, Z as Kr, Za as Ue, Zb as Nt, _ as z, _a as ze, _b as Ut, a as l, aa as Gr, ab as _e, ac as Qt, b as Er, ba as Hr, bb as Ye, c as T, ca as Xr, cb as De, cc as _t, d as Fr, da as Zr, db as Be, e as W, ea as nr, eb as Je, f as Ir, fa as ir, fb as Ke, g as G, ga as mr, gb as Ge, h as Or, ha as P, hb as He, i as V, ia as $r, ib as Xe, j as Sr, ja as re, k as a, ka as ee, kb as Ze, l as H, la as te, lb as $e, m as Tr, ma as oe, mb as rt, n as kr, na as ne, nb as et, o as Mr, oa as ie, ob as tt, p as R, pa as me, pb as ot, q as qr, qa as fe, qb as nt, r as Lr, ra as ae, rb as it, s as j, sa as ue, sb as mt, t as y, ta as pe, tb as ft, u as Vr, ua as se, ub as at, v as w, va as ce, vb as ut, w as Cr, wb as pt, x as Pr, xa as le, xb as st, y as b, ya as xe, yb as ct, z as Wr, za as de, zb as lt } from "@nf-internal/chunk-S2VQEJCM";
import { a as s, c as K, e as h, f as A } from "@nf-internal/chunk-AGTQQUR5";
import "@nf-internal/chunk-GL2BOVXA";
var _ = { now: function () { return (_.delegate || performance).now(); }, delegate: void 0 };
var g = { schedule: function (e) { var t = requestAnimationFrame, r = cancelAnimationFrame, n = g.delegate; n && (t = n.requestAnimationFrame, r = n.cancelAnimationFrame); var o = t(function (i) { r = void 0, e(i); }); return new T(function () { return r?.(o); }); }, requestAnimationFrame: function () { for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t]; var r = g.delegate; return (r?.requestAnimationFrame || requestAnimationFrame).apply(void 0, A([], h(e))); }, cancelAnimationFrame: function () { for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t]; var r = g.delegate; return (r?.cancelAnimationFrame || cancelAnimationFrame).apply(void 0, A([], h(e))); }, delegate: void 0 };
function Yt(e) { return e ? fr(e) : Dt; }
function fr(e) { return new a(function (t) { var r = e || _, n = r.now(), o = 0, i = function () { t.closed || (o = g.requestAnimationFrame(function (m) { o = 0; var f = r.now(); t.next({ timestamp: e ? f : m, elapsed: f - n }), i(); })); }; return i(), function () { o && g.cancelAnimationFrame(o); }; }); }
var Dt = fr();
var Bt = 1, Y, D = {};
function ar(e) { return e in D ? (delete D[e], !0) : !1; }
var B = { setImmediate: function (e) { var t = Bt++; return D[t] = !0, Y || (Y = Promise.resolve()), Y.then(function () { return ar(t) && e(); }), t; }, clearImmediate: function (e) { ar(e); } };
var Jt = B.setImmediate, Kt = B.clearImmediate, q = { setImmediate: function () { for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t]; var r = q.delegate; return (r?.setImmediate || Jt).apply(void 0, A([], h(e))); }, clearImmediate: function (e) { var t = q.delegate; return (t?.clearImmediate || Kt)(e); }, delegate: void 0 };
var ur = (function (e) { s(t, e); function t(r, n) { var o = e.call(this, r, n) || this; return o.scheduler = r, o.work = n, o; } return t.prototype.requestAsyncId = function (r, n, o) { return o === void 0 && (o = 0), o !== null && o > 0 ? e.prototype.requestAsyncId.call(this, r, n, o) : (r.actions.push(this), r._scheduled || (r._scheduled = q.setImmediate(r.flush.bind(r, void 0)))); }, t.prototype.recycleAsyncId = function (r, n, o) { var i; if (o === void 0 && (o = 0), o != null ? o > 0 : this.delay > 0)
    return e.prototype.recycleAsyncId.call(this, r, n, o); var m = r.actions; n != null && ((i = m[m.length - 1]) === null || i === void 0 ? void 0 : i.id) !== n && (q.clearImmediate(n), r._scheduled = void 0); }, t; })(y);
var pr = (function (e) { s(t, e); function t() { return e !== null && e.apply(this, arguments) || this; } return t.prototype.flush = function (r) { this._active = !0; var n = this._scheduled; this._scheduled = void 0; var o = this.actions, i; r = r || o.shift(); do
    if (i = r.execute(r.state, r.delay))
        break;
while ((r = o[0]) && r.id === n && o.shift()); if (this._active = !1, i) {
    for (; (r = o[0]) && r.id === n && o.shift();)
        r.unsubscribe();
    throw i;
} }, t; })(w);
var sr = new pr(ur), Gt = sr;
var cr = (function (e) { s(t, e); function t(r, n) { var o = e.call(this, r, n) || this; return o.scheduler = r, o.work = n, o; } return t.prototype.schedule = function (r, n) { return n === void 0 && (n = 0), n > 0 ? e.prototype.schedule.call(this, r, n) : (this.delay = n, this.state = r, this.scheduler.flush(this), this); }, t.prototype.execute = function (r, n) { return n > 0 || this.closed ? e.prototype.execute.call(this, r, n) : this._execute(r, n); }, t.prototype.requestAsyncId = function (r, n, o) { return o === void 0 && (o = 0), o != null && o > 0 || o == null && this.delay > 0 ? e.prototype.requestAsyncId.call(this, r, n, o) : (r.flush(this), 0); }, t; })(y);
var lr = (function (e) { s(t, e); function t() { return e !== null && e.apply(this, arguments) || this; } return t; })(w);
var xr = new lr(cr), Ht = xr;
var dr = (function (e) { s(t, e); function t(r, n) { var o = e.call(this, r, n) || this; return o.scheduler = r, o.work = n, o; } return t.prototype.requestAsyncId = function (r, n, o) { return o === void 0 && (o = 0), o !== null && o > 0 ? e.prototype.requestAsyncId.call(this, r, n, o) : (r.actions.push(this), r._scheduled || (r._scheduled = g.requestAnimationFrame(function () { return r.flush(void 0); }))); }, t.prototype.recycleAsyncId = function (r, n, o) { var i; if (o === void 0 && (o = 0), o != null ? o > 0 : this.delay > 0)
    return e.prototype.recycleAsyncId.call(this, r, n, o); var m = r.actions; n != null && ((i = m[m.length - 1]) === null || i === void 0 ? void 0 : i.id) !== n && (g.cancelAnimationFrame(n), r._scheduled = void 0); }, t; })(y);
var vr = (function (e) { s(t, e); function t() { return e !== null && e.apply(this, arguments) || this; } return t.prototype.flush = function (r) { this._active = !0; var n = this._scheduled; this._scheduled = void 0; var o = this.actions, i; r = r || o.shift(); do
    if (i = r.execute(r.state, r.delay))
        break;
while ((r = o[0]) && r.id === n && o.shift()); if (this._active = !1, i) {
    for (; (r = o[0]) && r.id === n && o.shift();)
        r.unsubscribe();
    throw i;
} }, t; })(w);
var hr = new vr(dr), Xt = hr;
var Zt = (function (e) { s(t, e); function t(r, n) { r === void 0 && (r = br), n === void 0 && (n = 1 / 0); var o = e.call(this, r, function () { return o.frame; }) || this; return o.maxFrames = n, o.frame = 0, o.index = -1, o; } return t.prototype.flush = function () { for (var r = this, n = r.actions, o = r.maxFrames, i, m; (m = n[0]) && m.delay <= o && (n.shift(), this.frame = m.delay, !(i = m.execute(m.state, m.delay)));)
    ; if (i) {
    for (; m = n.shift();)
        m.unsubscribe();
    throw i;
} }, t.frameTimeFactor = 10, t; })(w);
var br = (function (e) { s(t, e); function t(r, n, o) { o === void 0 && (o = r.index += 1); var i = e.call(this, r, n) || this; return i.scheduler = r, i.work = n, i.index = o, i.active = !0, i.index = r.index = o, i; } return t.prototype.schedule = function (r, n) { if (n === void 0 && (n = 0), Number.isFinite(n)) {
    if (!this.id)
        return e.prototype.schedule.call(this, r, n);
    this.active = !1;
    var o = new t(this.scheduler, this.work);
    return this.add(o), o.schedule(r, n);
}
else
    return T.EMPTY; }, t.prototype.requestAsyncId = function (r, n, o) { o === void 0 && (o = 0), this.delay = r.frame + o; var i = r.actions; return i.push(this), i.sort(t.sortActions), 1; }, t.prototype.recycleAsyncId = function (r, n, o) { o === void 0 && (o = 0); }, t.prototype._execute = function (r, n) { if (this.active === !0)
    return e.prototype._execute.call(this, r, n); }, t.sortActions = function (r, n) { return r.delay === n.delay ? r.index === n.index ? 0 : r.index > n.index ? 1 : -1 : r.delay > n.delay ? 1 : -1; }, t; })(y);
function $t(e) { return !!e && (e instanceof a || l(e.lift) && l(e.subscribe)); }
function ro(e, t) { var r = typeof t == "object"; return new Promise(function (n, o) { var i = !1, m; e.subscribe({ next: function (f) { m = f, i = !0; }, error: o, complete: function () { i ? n(m) : r ? n(t.defaultValue) : o(new M); } }); }); }
function eo(e, t) { var r = typeof t == "object"; return new Promise(function (n, o) { var i = new G({ next: function (m) { n(m), i.unsubscribe(); }, error: o, complete: function () { r ? n(t.defaultValue) : o(new M); } }); e.subscribe(i); }); }
function S(e, t, r, n) { if (r)
    if (C(r))
        n = r;
    else
        return function () { for (var o = [], i = 0; i < arguments.length; i++)
            o[i] = arguments[i]; return S(e, t, n).apply(this, o).pipe(E(r)); }; return n ? function () { for (var o = [], i = 0; i < arguments.length; i++)
    o[i] = arguments[i]; return S(e, t).apply(this, o).pipe(U(n), N(n)); } : function () { for (var o = this, i = [], m = 0; m < arguments.length; m++)
    i[m] = arguments[m]; var f = new j, u = !0; return new a(function (c) { var p = f.subscribe(c); if (u) {
    u = !1;
    var d = !1, L = !1;
    t.apply(o, A(A([], h(i)), [function () { for (var v = [], F = 0; F < arguments.length; F++)
            v[F] = arguments[F]; if (e) {
            var O = v.shift();
            if (O != null) {
                f.error(O);
                return;
            }
        } f.next(1 < v.length ? v : v[0]), L = !0, d && f.complete(); }])), L && f.complete(), d = !0;
} return p; }); }; }
function to(e, t, r) { return S(!1, e, t, r); }
function oo(e, t, r) { return S(!0, e, t, r); }
function I(e) { return new a(function (t) { x(e()).subscribe(t); }); }
var no = { connector: function () { return new R; }, resetOnDisconnect: !0 };
function io(e, t) { t === void 0 && (t = no); var r = null, n = t.connector, o = t.resetOnDisconnect, i = o === void 0 ? !0 : o, m = n(), f = new a(function (u) { return m.subscribe(u); }); return f.connect = function () { return (!r || r.closed) && (r = I(function () { return e; }).subscribe(m), i && r.add(function () { return m = n(); })), r; }, f; }
function mo() { for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t]; var r = X(e), n = tr(e), o = n.args, i = n.keys, m = new a(function (f) { var u = o.length; if (!u) {
    f.complete();
    return;
} for (var c = new Array(u), p = u, d = u, L = function (F) { var O = !1; x(o[F]).subscribe(H(f, function (wr) { O || (O = !0, d--), c[F] = wr; }, function () { return p--; }, void 0, function () { (!p || !O) && (d || f.next(i ? or(i, c) : c), f.complete()); })); }, v = 0; v < u; v++)
    L(v); }); return r ? m.pipe(E(r)) : m; }
var fo = ["addListener", "removeListener"], ao = ["addEventListener", "removeEventListener"], uo = ["on", "off"];
function J(e, t, r, n) { if (l(r) && (n = r, r = void 0), n)
    return J(e, t, r).pipe(E(n)); var o = h(co(e) ? ao.map(function (f) { return function (u) { return e[f](t, u, r); }; }) : po(e) ? fo.map(gr(e, t)) : so(e) ? uo.map(gr(e, t)) : [], 2), i = o[0], m = o[1]; if (!i && rr(e))
    return z(function (f) { return J(f, t, r); })(x(e)); if (!i)
    throw new TypeError("Invalid event target"); return new a(function (f) { var u = function () { for (var c = [], p = 0; p < arguments.length; p++)
    c[p] = arguments[p]; return f.next(1 < c.length ? c : c[0]); }; return i(u), function () { return m(u); }; }); }
function gr(e, t) { return function (r) { return function (n) { return e[r](t, n); }; }; }
function po(e) { return l(e.addListener) && l(e.removeListener); }
function so(e) { return l(e.on) && l(e.off); }
function co(e) { return l(e.addEventListener) && l(e.removeEventListener); }
function Ar(e, t, r) { return r ? Ar(e, t).pipe(E(r)) : new a(function (n) { var o = function () { for (var m = [], f = 0; f < arguments.length; f++)
    m[f] = arguments[f]; return n.next(m.length === 1 ? m[0] : m); }, i = e(o); return l(t) ? function () { return t(o, i); } : void 0; }); }
function lo(e, t, r, n, o) { var i, m, f, u; arguments.length === 1 ? (i = e, u = i.initialState, t = i.condition, r = i.iterate, m = i.resultSelector, f = m === void 0 ? V : m, o = i.scheduler) : (u = e, !n || C(n) ? (f = V, o = n) : f = n); function c() { var p; return K(this, function (d) { switch (d.label) {
    case 0: p = u, d.label = 1;
    case 1: return !t || t(p) ? [4, f(p)] : [3, 4];
    case 2: d.sent(), d.label = 3;
    case 3: return p = r(p), [3, 1];
    case 4: return [2];
} }); } return I(o ? function () { return er(c(), o); } : c); }
function xo(e, t, r) { return I(function () { return e() ? t : r; }); }
function vo() { for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t]; var r = Z(e), n = $(e, 1 / 0), o = e; return o.length ? o.length === 1 ? x(o[0]) : Q(n)(k(o, r)) : b; }
var yr = new a(W);
function ho() { return yr; }
function bo() { for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t]; return ir(nr(e))(b); }
function go(e, t) { return k(Object.entries(e), t); }
function Ao(e, t, r) { return [P(t, r)(x(e)), P(mr(t, r))(x(e))]; }
function yo(e, t, r) { if (t == null && (t = e, e = 0), t <= 0)
    return b; var n = t + e; return new a(r ? function (o) { var i = e; return r.schedule(function () { i < n ? (o.next(i++), this.schedule()) : o.complete(); }); } : function (o) { for (var i = e; i < n && !o.closed;)
    o.next(i++); o.complete(); }); }
function wo(e, t) { return new a(function (r) { var n = e(), o = t(n), i = o ? x(o) : b; return i.subscribe(r), function () { n && n.unsubscribe(); }; }); }
export { Qr as ArgumentOutOfRangeError, j as AsyncSubject, qr as BehaviorSubject, kr as ConnectableObservable, b as EMPTY, M as EmptyError, yr as NEVER, _r as NotFoundError, zr as Notification, Ur as NotificationKind, Mr as ObjectUnsubscribedError, a as Observable, Lr as ReplaySubject, Vr as Scheduler, Yr as SequenceError, R as Subject, Ir as Subscriber, T as Subscription, Dr as TimeoutError, Er as UnsubscriptionError, br as VirtualAction, Zt as VirtualTimeScheduler, Xt as animationFrame, hr as animationFrameScheduler, Yt as animationFrames, Gt as asap, sr as asapScheduler, Pr as async, Cr as asyncScheduler, ee as audit, te as auditTime, to as bindCallback, oo as bindNodeCallback, oe as buffer, ne as bufferCount, ie as bufferTime, me as bufferToggle, fe as bufferWhen, ae as catchError, ce as combineAll, Kr as combineLatest, se as combineLatestAll, le as combineLatestWith, Hr as concat, Gr as concatAll, xe as concatMap, de as concatMapTo, ve as concatWith, Fr as config, he as connect, io as connectable, be as count, ge as debounce, Ae as debounceTime, ye as defaultIfEmpty, I as defer, Oe as delay, Ie as delayWhen, Se as dematerialize, Te as distinct, ke as distinctUntilChanged, Me as distinctUntilKeyChanged, Le as elementAt, Wr as empty, Ve as endWith, Ce as every, Re as exhaust, We as exhaustAll, Pe as exhaustMap, je as expand, P as filter, Ne as finalize, Ue as find, ze as findIndex, Qe as first, eo as firstValueFrom, Ge as flatMap, mo as forkJoin, k as from, J as fromEvent, Ar as fromEventPattern, lo as generate, _e as groupBy, V as identity, Ee as ignoreElements, xo as iif, Zr as interval, Ye as isEmpty, $t as isObservable, Be as last, ro as lastValueFrom, Jr as map, Fe as mapTo, Je as materialize, Ke as max, vo as merge, Q as mergeAll, z as mergeMap, He as mergeMapTo, Xe as mergeScan, Ze as mergeWith, $e as min, rt as multicast, ho as never, W as noop, Or as observable, N as observeOn, jr as of, bo as onErrorResumeNext, go as pairs, et as pairwise, Ao as partition, Sr as pipe, tt as pluck, ot as publish, nt as publishBehavior, it as publishLast, mt as publishReplay, Ht as queue, xr as queueScheduler, $r as race, ft as raceWith, yo as range, ue as reduce, Tr as refCount, at as repeat, ut as repeatWhen, pt as retry, st as retryWhen, ct as sample, lt as sampleTime, xt as scan, Rr as scheduled, dt as sequenceEqual, vt as share, ht as shareReplay, bt as single, gt as skip, At as skipLast, yt as skipUntil, wt as skipWhile, Et as startWith, U as subscribeOn, It as switchAll, Ft as switchMap, Ot as switchMapTo, St as switchScan, we as take, De as takeLast, Tt as takeUntil, kt as takeWhile, Mt as tap, qt as throttle, Lt as throttleTime, Nr as throwError, qe as throwIfEmpty, Vt as timeInterval, Br as timeout, Ct as timeoutWith, Xr as timer, Pt as timestamp, pe as toArray, wo as using, Wt as window, Rt as windowCount, jt as windowTime, Nt as windowToggle, Ut as windowWhen, zt as withLatestFrom, re as zip, Qt as zipAll, _t as zipWith };
//# sourceMappingURL=rxjs.xWM9kLW-DW.js.map
