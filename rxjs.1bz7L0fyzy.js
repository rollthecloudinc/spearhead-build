import { $ as _, $a as _e, $b as Qt, A as P, Ab as dt, B as Z, Ba as he, Bb as vt, C as $, Ca as be, Cb as ht, D as rr, Da as ge, Db as bt, E as er, Ea as Ae, Eb as gt, F as x, Fa as ye, Fb as At, G as U, Ga as we, Gb as yt, H as z, Ha as Ee, Hb as wt, I as tr, Ia as Fe, Ib as Et, J as jr, Ja as Ie, Jb as Ft, K as M, Ka as Oe, Kb as It, L as Nr, La as Se, Lb as Ot, M as Ur, Ma as Te, Mb as St, N as zr, Na as ke, Nb as Tt, O as Qr, Oa as Me, Ob as kt, P as q, Pa as qe, Pb as Mt, Q as _r, Qa as Le, Qb as qt, R as Yr, Ra as Ve, Rb as Lt, S as Dr, Sa as Ce, Sb as Vt, T as Br, Ta as Pe, Tb as Ct, U as Jr, Ua as We, Ub as Pt, V as Kr, Va as Re, Vb as Wt, W as F, Wa as je, Wb as Rt, X as or, Xa as Ne, Xb as jt, Y as nr, Ya as Ue, Yb as Nt, Z as Gr, Za as ze, Zb as Ut, _ as Q, _a as Qe, _b as zt, a as l, aa as Hr, ab as Ye, ac as _t, b as Fr, ba as Xr, bb as De, c as k, ca as Zr, cb as Be, cc as Yt, d as Ir, da as $r, db as Je, e as R, ea as ir, eb as Ke, f as Or, fa as mr, fb as Ge, g as H, ga as fr, gb as He, h as Sr, ha as W, hb as Xe, i as C, ia as re, ib as Ze, j as Tr, ja as ee, k as a, ka as te, kb as $e, l as X, la as oe, lb as rt, m as kr, ma as ne, mb as et, n as Mr, na as ie, nb as tt, o as qr, oa as me, ob as ot, p as j, pa as fe, pb as nt, q as Lr, qa as ae, qb as it, r as Vr, ra as ue, rb as mt, s as N, sa as pe, sb as ft, t as w, ta as se, tb as at, u as Cr, ua as ce, ub as ut, v as E, va as le, vb as pt, w as Pr, wb as st, x as Wr, xa as xe, xb as ct, y as g, ya as de, yb as lt, z as Rr, za as ve, zb as xt } from "@nf-internal/chunk-DL6YAKTI";
import { a as s, c as G, e as b, f as y, k as d } from "@nf-internal/chunk-XE5S2H6D";
import "@nf-internal/chunk-GL2BOVXA";
var Y = { now: function () { return (Y.delegate || performance).now(); }, delegate: void 0 };
d();
var A = { schedule: function (e) { var t = requestAnimationFrame, r = cancelAnimationFrame, n = A.delegate; n && (t = n.requestAnimationFrame, r = n.cancelAnimationFrame); var o = t(function (i) { r = void 0, e(i); }); return new k(function () { return r?.(o); }); }, requestAnimationFrame: function () { for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t]; var r = A.delegate; return (r?.requestAnimationFrame || requestAnimationFrame).apply(void 0, y([], b(e))); }, cancelAnimationFrame: function () { for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t]; var r = A.delegate; return (r?.cancelAnimationFrame || cancelAnimationFrame).apply(void 0, y([], b(e))); }, delegate: void 0 };
function Dt(e) { return e ? ar(e) : Bt; }
function ar(e) { return new a(function (t) { var r = e || Y, n = r.now(), o = 0, i = function () { t.closed || (o = A.requestAnimationFrame(function (m) { o = 0; var f = r.now(); t.next({ timestamp: e ? f : m, elapsed: f - n }), i(); })); }; return i(), function () { o && A.cancelAnimationFrame(o); }; }); }
var Bt = ar();
d();
d();
var Jt = 1, D, B = {};
function ur(e) { return e in B ? (delete B[e], !0) : !1; }
var J = { setImmediate: function (e) { var t = Jt++; return B[t] = !0, D || (D = Promise.resolve()), D.then(function () { return ur(t) && e(); }), t; }, clearImmediate: function (e) { ur(e); } };
var Kt = J.setImmediate, Gt = J.clearImmediate, L = { setImmediate: function () { for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t]; var r = L.delegate; return (r?.setImmediate || Kt).apply(void 0, y([], b(e))); }, clearImmediate: function (e) { var t = L.delegate; return (t?.clearImmediate || Gt)(e); }, delegate: void 0 };
var pr = (function (e) { s(t, e); function t(r, n) { var o = e.call(this, r, n) || this; return o.scheduler = r, o.work = n, o; } return t.prototype.requestAsyncId = function (r, n, o) { return o === void 0 && (o = 0), o !== null && o > 0 ? e.prototype.requestAsyncId.call(this, r, n, o) : (r.actions.push(this), r._scheduled || (r._scheduled = L.setImmediate(r.flush.bind(r, void 0)))); }, t.prototype.recycleAsyncId = function (r, n, o) { var i; if (o === void 0 && (o = 0), o != null ? o > 0 : this.delay > 0)
    return e.prototype.recycleAsyncId.call(this, r, n, o); var m = r.actions; n != null && ((i = m[m.length - 1]) === null || i === void 0 ? void 0 : i.id) !== n && (L.clearImmediate(n), r._scheduled = void 0); }, t; })(w);
d();
var sr = (function (e) { s(t, e); function t() { return e !== null && e.apply(this, arguments) || this; } return t.prototype.flush = function (r) { this._active = !0; var n = this._scheduled; this._scheduled = void 0; var o = this.actions, i; r = r || o.shift(); do
    if (i = r.execute(r.state, r.delay))
        break;
while ((r = o[0]) && r.id === n && o.shift()); if (this._active = !1, i) {
    for (; (r = o[0]) && r.id === n && o.shift();)
        r.unsubscribe();
    throw i;
} }, t; })(E);
var cr = new sr(pr), Ht = cr;
d();
var lr = (function (e) { s(t, e); function t(r, n) { var o = e.call(this, r, n) || this; return o.scheduler = r, o.work = n, o; } return t.prototype.schedule = function (r, n) { return n === void 0 && (n = 0), n > 0 ? e.prototype.schedule.call(this, r, n) : (this.delay = n, this.state = r, this.scheduler.flush(this), this); }, t.prototype.execute = function (r, n) { return n > 0 || this.closed ? e.prototype.execute.call(this, r, n) : this._execute(r, n); }, t.prototype.requestAsyncId = function (r, n, o) { return o === void 0 && (o = 0), o != null && o > 0 || o == null && this.delay > 0 ? e.prototype.requestAsyncId.call(this, r, n, o) : (r.flush(this), 0); }, t; })(w);
d();
var xr = (function (e) { s(t, e); function t() { return e !== null && e.apply(this, arguments) || this; } return t; })(E);
var dr = new xr(lr), Xt = dr;
d();
var vr = (function (e) { s(t, e); function t(r, n) { var o = e.call(this, r, n) || this; return o.scheduler = r, o.work = n, o; } return t.prototype.requestAsyncId = function (r, n, o) { return o === void 0 && (o = 0), o !== null && o > 0 ? e.prototype.requestAsyncId.call(this, r, n, o) : (r.actions.push(this), r._scheduled || (r._scheduled = A.requestAnimationFrame(function () { return r.flush(void 0); }))); }, t.prototype.recycleAsyncId = function (r, n, o) { var i; if (o === void 0 && (o = 0), o != null ? o > 0 : this.delay > 0)
    return e.prototype.recycleAsyncId.call(this, r, n, o); var m = r.actions; n != null && ((i = m[m.length - 1]) === null || i === void 0 ? void 0 : i.id) !== n && (A.cancelAnimationFrame(n), r._scheduled = void 0); }, t; })(w);
d();
var hr = (function (e) { s(t, e); function t() { return e !== null && e.apply(this, arguments) || this; } return t.prototype.flush = function (r) { this._active = !0; var n = this._scheduled; this._scheduled = void 0; var o = this.actions, i; r = r || o.shift(); do
    if (i = r.execute(r.state, r.delay))
        break;
while ((r = o[0]) && r.id === n && o.shift()); if (this._active = !1, i) {
    for (; (r = o[0]) && r.id === n && o.shift();)
        r.unsubscribe();
    throw i;
} }, t; })(E);
var br = new hr(vr), Zt = br;
d();
var $t = (function (e) { s(t, e); function t(r, n) { r === void 0 && (r = gr), n === void 0 && (n = 1 / 0); var o = e.call(this, r, function () { return o.frame; }) || this; return o.maxFrames = n, o.frame = 0, o.index = -1, o; } return t.prototype.flush = function () { for (var r = this, n = r.actions, o = r.maxFrames, i, m; (m = n[0]) && m.delay <= o && (n.shift(), this.frame = m.delay, !(i = m.execute(m.state, m.delay)));)
    ; if (i) {
    for (; m = n.shift();)
        m.unsubscribe();
    throw i;
} }, t.frameTimeFactor = 10, t; })(E);
var gr = (function (e) { s(t, e); function t(r, n, o) { o === void 0 && (o = r.index += 1); var i = e.call(this, r, n) || this; return i.scheduler = r, i.work = n, i.index = o, i.active = !0, i.index = r.index = o, i; } return t.prototype.schedule = function (r, n) { if (n === void 0 && (n = 0), Number.isFinite(n)) {
    if (!this.id)
        return e.prototype.schedule.call(this, r, n);
    this.active = !1;
    var o = new t(this.scheduler, this.work);
    return this.add(o), o.schedule(r, n);
}
else
    return k.EMPTY; }, t.prototype.requestAsyncId = function (r, n, o) { o === void 0 && (o = 0), this.delay = r.frame + o; var i = r.actions; return i.push(this), i.sort(t.sortActions), 1; }, t.prototype.recycleAsyncId = function (r, n, o) { o === void 0 && (o = 0); }, t.prototype._execute = function (r, n) { if (this.active === !0)
    return e.prototype._execute.call(this, r, n); }, t.sortActions = function (r, n) { return r.delay === n.delay ? r.index === n.index ? 0 : r.index > n.index ? 1 : -1 : r.delay > n.delay ? 1 : -1; }, t; })(w);
function ro(e) { return !!e && (e instanceof a || l(e.lift) && l(e.subscribe)); }
function eo(e, t) { var r = typeof t == "object"; return new Promise(function (n, o) { var i = !1, m; e.subscribe({ next: function (f) { m = f, i = !0; }, error: o, complete: function () { i ? n(m) : r ? n(t.defaultValue) : o(new q); } }); }); }
function to(e, t) { var r = typeof t == "object"; return new Promise(function (n, o) { var i = new H({ next: function (m) { n(m), i.unsubscribe(); }, error: o, complete: function () { r ? n(t.defaultValue) : o(new q); } }); e.subscribe(i); }); }
d();
function T(e, t, r, n) { if (r)
    if (P(r))
        n = r;
    else
        return function () { for (var o = [], i = 0; i < arguments.length; i++)
            o[i] = arguments[i]; return T(e, t, n).apply(this, o).pipe(F(r)); }; return n ? function () { for (var o = [], i = 0; i < arguments.length; i++)
    o[i] = arguments[i]; return T(e, t).apply(this, o).pipe(z(n), U(n)); } : function () { for (var o = this, i = [], m = 0; m < arguments.length; m++)
    i[m] = arguments[m]; var f = new N, u = !0; return new a(function (c) { var p = f.subscribe(c); if (u) {
    u = !1;
    var v = !1, V = !1;
    t.apply(o, y(y([], b(i)), [function () { for (var h = [], I = 0; I < arguments.length; I++)
            h[I] = arguments[I]; if (e) {
            var S = h.shift();
            if (S != null) {
                f.error(S);
                return;
            }
        } f.next(1 < h.length ? h : h[0]), V = !0, v && f.complete(); }])), V && f.complete(), v = !0;
} return p; }); }; }
function oo(e, t, r) { return T(!1, e, t, r); }
function no(e, t, r) { return T(!0, e, t, r); }
function O(e) { return new a(function (t) { x(e()).subscribe(t); }); }
var io = { connector: function () { return new j; }, resetOnDisconnect: !0 };
function mo(e, t) { t === void 0 && (t = io); var r = null, n = t.connector, o = t.resetOnDisconnect, i = o === void 0 ? !0 : o, m = n(), f = new a(function (u) { return m.subscribe(u); }); return f.connect = function () { return (!r || r.closed) && (r = O(function () { return e; }).subscribe(m), i && r.add(function () { return m = n(); })), r; }, f; }
function fo() { for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t]; var r = Z(e), n = or(e), o = n.args, i = n.keys, m = new a(function (f) { var u = o.length; if (!u) {
    f.complete();
    return;
} for (var c = new Array(u), p = u, v = u, V = function (I) { var S = !1; x(o[I]).subscribe(X(f, function (Er) { S || (S = !0, v--), c[I] = Er; }, function () { return p--; }, void 0, function () { (!p || !S) && (v || f.next(i ? nr(i, c) : c), f.complete()); })); }, h = 0; h < u; h++)
    V(h); }); return r ? m.pipe(F(r)) : m; }
d();
var ao = ["addListener", "removeListener"], uo = ["addEventListener", "removeEventListener"], po = ["on", "off"];
function K(e, t, r, n) { if (l(r) && (n = r, r = void 0), n)
    return K(e, t, r).pipe(F(n)); var o = b(lo(e) ? uo.map(function (f) { return function (u) { return e[f](t, u, r); }; }) : so(e) ? ao.map(Ar(e, t)) : co(e) ? po.map(Ar(e, t)) : [], 2), i = o[0], m = o[1]; if (!i && er(e))
    return Q(function (f) { return K(f, t, r); })(x(e)); if (!i)
    throw new TypeError("Invalid event target"); return new a(function (f) { var u = function () { for (var c = [], p = 0; p < arguments.length; p++)
    c[p] = arguments[p]; return f.next(1 < c.length ? c : c[0]); }; return i(u), function () { return m(u); }; }); }
function Ar(e, t) { return function (r) { return function (n) { return e[r](t, n); }; }; }
function so(e) { return l(e.addListener) && l(e.removeListener); }
function co(e) { return l(e.on) && l(e.off); }
function lo(e) { return l(e.addEventListener) && l(e.removeEventListener); }
function yr(e, t, r) { return r ? yr(e, t).pipe(F(r)) : new a(function (n) { var o = function () { for (var m = [], f = 0; f < arguments.length; f++)
    m[f] = arguments[f]; return n.next(m.length === 1 ? m[0] : m); }, i = e(o); return l(t) ? function () { return t(o, i); } : void 0; }); }
d();
function xo(e, t, r, n, o) { var i, m, f, u; arguments.length === 1 ? (i = e, u = i.initialState, t = i.condition, r = i.iterate, m = i.resultSelector, f = m === void 0 ? C : m, o = i.scheduler) : (u = e, !n || P(n) ? (f = C, o = n) : f = n); function c() { var p; return G(this, function (v) { switch (v.label) {
    case 0: p = u, v.label = 1;
    case 1: return !t || t(p) ? [4, f(p)] : [3, 4];
    case 2: v.sent(), v.label = 3;
    case 3: return p = r(p), [3, 1];
    case 4: return [2];
} }); } return O(o ? function () { return tr(c(), o); } : c); }
function vo(e, t, r) { return O(function () { return e() ? t : r; }); }
function ho() { for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t]; var r = $(e), n = rr(e, 1 / 0), o = e; return o.length ? o.length === 1 ? x(o[0]) : _(n)(M(o, r)) : g; }
var wr = new a(R);
function bo() { return wr; }
function go() { for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t]; return mr(ir(e))(g); }
function Ao(e, t) { return M(Object.entries(e), t); }
function yo(e, t, r) { return [W(t, r)(x(e)), W(fr(t, r))(x(e))]; }
function wo(e, t, r) { if (t == null && (t = e, e = 0), t <= 0)
    return g; var n = t + e; return new a(r ? function (o) { var i = e; return r.schedule(function () { i < n ? (o.next(i++), this.schedule()) : o.complete(); }); } : function (o) { for (var i = e; i < n && !o.closed;)
    o.next(i++); o.complete(); }); }
function Eo(e, t) { return new a(function (r) { var n = e(), o = t(n), i = o ? x(o) : g; return i.subscribe(r), function () { n && n.unsubscribe(); }; }); }
export { _r as ArgumentOutOfRangeError, N as AsyncSubject, Lr as BehaviorSubject, Mr as ConnectableObservable, g as EMPTY, q as EmptyError, wr as NEVER, Yr as NotFoundError, Qr as Notification, zr as NotificationKind, qr as ObjectUnsubscribedError, a as Observable, Vr as ReplaySubject, Cr as Scheduler, Dr as SequenceError, j as Subject, Or as Subscriber, k as Subscription, Br as TimeoutError, Fr as UnsubscriptionError, gr as VirtualAction, $t as VirtualTimeScheduler, Zt as animationFrame, br as animationFrameScheduler, Dt as animationFrames, Ht as asap, cr as asapScheduler, Wr as async, Pr as asyncScheduler, te as audit, oe as auditTime, oo as bindCallback, no as bindNodeCallback, ne as buffer, ie as bufferCount, me as bufferTime, fe as bufferToggle, ae as bufferWhen, ue as catchError, le as combineAll, Gr as combineLatest, ce as combineLatestAll, xe as combineLatestWith, Xr as concat, Hr as concatAll, de as concatMap, ve as concatMapTo, he as concatWith, Ir as config, be as connect, mo as connectable, ge as count, Ae as debounce, ye as debounceTime, we as defaultIfEmpty, O as defer, Se as delay, Oe as delayWhen, Te as dematerialize, ke as distinct, Me as distinctUntilChanged, qe as distinctUntilKeyChanged, Ve as elementAt, Rr as empty, Ce as endWith, Pe as every, je as exhaust, Re as exhaustAll, We as exhaustMap, Ne as expand, W as filter, Ue as finalize, ze as find, Qe as findIndex, _e as first, to as firstValueFrom, He as flatMap, fo as forkJoin, M as from, K as fromEvent, yr as fromEventPattern, xo as generate, Ye as groupBy, C as identity, Fe as ignoreElements, vo as iif, $r as interval, De as isEmpty, ro as isObservable, Je as last, eo as lastValueFrom, Kr as map, Ie as mapTo, Ke as materialize, Ge as max, ho as merge, _ as mergeAll, Q as mergeMap, Xe as mergeMapTo, Ze as mergeScan, $e as mergeWith, rt as min, et as multicast, bo as never, R as noop, Sr as observable, U as observeOn, Nr as of, go as onErrorResumeNext, Ao as pairs, tt as pairwise, yo as partition, Tr as pipe, ot as pluck, nt as publish, it as publishBehavior, mt as publishLast, ft as publishReplay, Xt as queue, dr as queueScheduler, re as race, at as raceWith, wo as range, pe as reduce, kr as refCount, ut as repeat, pt as repeatWhen, st as retry, ct as retryWhen, lt as sample, xt as sampleTime, dt as scan, jr as scheduled, vt as sequenceEqual, ht as share, bt as shareReplay, gt as single, At as skip, yt as skipLast, wt as skipUntil, Et as skipWhile, Ft as startWith, z as subscribeOn, Ot as switchAll, It as switchMap, St as switchMapTo, Tt as switchScan, Ee as take, Be as takeLast, kt as takeUntil, Mt as takeWhile, qt as tap, Lt as throttle, Vt as throttleTime, Ur as throwError, Le as throwIfEmpty, Ct as timeInterval, Jr as timeout, Pt as timeoutWith, Zr as timer, Wt as timestamp, se as toArray, Eo as using, Rt as window, jt as windowCount, Nt as windowTime, Ut as windowToggle, zt as windowWhen, Qt as withLatestFrom, ee as zip, _t as zipAll, Yt as zipWith };
//# sourceMappingURL=rxjs.1bz7L0fyzy.js.map
