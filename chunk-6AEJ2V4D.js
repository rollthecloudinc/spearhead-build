import { a as C, b as st, c as hr, d as R, e as w, f as E, g as br, h as vt, i as dt, k as O } from "@nf-internal/chunk-WBNJJ673";
function N(r) { var t = function (o) { Error.call(o), o.stack = new Error().stack; }, e = r(t); return e.prototype = Object.create(Error.prototype), e.prototype.constructor = e, e; }
var yr = N(function (r) {
    return function (e) {
        r(this), this.message = e ? e.length + ` errors occurred during unsubscription:
` + e.map(function (o, n) { return n + 1 + ") " + o.toString(); }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = e;
    };
});
O();
function y(r) { return typeof r == "function"; }
function M(r, t) { if (r) {
    var e = r.indexOf(t);
    0 <= e && r.splice(e, 1);
} }
var k = (function () { function r(t) { this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null; } return r.prototype.unsubscribe = function () { var t, e, o, n, i; if (!this.closed) {
    this.closed = !0;
    var u = this._parentage;
    if (u)
        if (this._parentage = null, Array.isArray(u))
            try {
                for (var f = R(u), a = f.next(); !a.done; a = f.next()) {
                    var m = a.value;
                    m.remove(this);
                }
            }
            catch (b) {
                t = { error: b };
            }
            finally {
                try {
                    a && !a.done && (e = f.return) && e.call(f);
                }
                finally {
                    if (t)
                        throw t.error;
                }
            }
        else
            u.remove(this);
    var l = this.initialTeardown;
    if (y(l))
        try {
            l();
        }
        catch (b) {
            i = b instanceof yr ? b.errors : [b];
        }
    var s = this._finalizers;
    if (s) {
        this._finalizers = null;
        try {
            for (var v = R(s), g = v.next(); !g.done; g = v.next()) {
                var d = g.value;
                try {
                    ht(d);
                }
                catch (b) {
                    i = i ?? [], b instanceof yr ? i = E(E([], w(i)), w(b.errors)) : i.push(b);
                }
            }
        }
        catch (b) {
            o = { error: b };
        }
        finally {
            try {
                g && !g.done && (n = v.return) && n.call(v);
            }
            finally {
                if (o)
                    throw o.error;
            }
        }
    }
    if (i)
        throw new yr(i);
} }, r.prototype.add = function (t) { var e; if (t && t !== this)
    if (this.closed)
        ht(t);
    else {
        if (t instanceof r) {
            if (t.closed || t._hasParent(this))
                return;
            t._addParent(this);
        }
        (this._finalizers = (e = this._finalizers) !== null && e !== void 0 ? e : []).push(t);
    } }, r.prototype._hasParent = function (t) { var e = this._parentage; return e === t || Array.isArray(e) && e.includes(t); }, r.prototype._addParent = function (t) { var e = this._parentage; this._parentage = Array.isArray(e) ? (e.push(t), e) : e ? [e, t] : t; }, r.prototype._removeParent = function (t) { var e = this._parentage; e === t ? this._parentage = null : Array.isArray(e) && M(e, t); }, r.prototype.remove = function (t) { var e = this._finalizers; e && M(e, t), t instanceof r && t._removeParent(this); }, r.EMPTY = (function () { var t = new r; return t.closed = !0, t; })(), r; })();
var Zr = k.EMPTY;
function xr(r) { return r instanceof k || r && "closed" in r && y(r.remove) && y(r.add) && y(r.unsubscribe); }
function ht(r) { y(r) ? r() : r.unsubscribe(); }
var Y = { onUnhandledError: null, onStoppedNotification: null, Promise: void 0, useDeprecatedSynchronousErrorHandling: !1, useDeprecatedNextContext: !1 };
function _() { }
O();
O();
var ir = { setTimeout: function (r, t) { for (var e = [], o = 2; o < arguments.length; o++)
        e[o - 2] = arguments[o]; var n = ir.delegate; return n?.setTimeout ? n.setTimeout.apply(n, E([r, t], w(e))) : setTimeout.apply(void 0, E([r, t], w(e))); }, clearTimeout: function (r) { var t = ir.delegate; return (t?.clearTimeout || clearTimeout)(r); }, delegate: void 0 };
function gr(r) { ir.setTimeout(function () { var t = Y.onUnhandledError; if (t)
    t(r);
else
    throw r; }); }
var bt = (function () { return $r("C", void 0, void 0); })();
function yt(r) { return $r("E", void 0, r); }
function xt(r) { return $r("N", r, void 0); }
function $r(r, t, e) { return { kind: r, value: t, error: e }; }
var Q = null;
function ur(r) { if (Y.useDeprecatedSynchronousErrorHandling) {
    var t = !Q;
    if (t && (Q = { errorThrown: !1, error: null }), r(), t) {
        var e = Q, o = e.errorThrown, n = e.error;
        if (Q = null, o)
            throw n;
    }
}
else
    r(); }
function gt(r) { Y.useDeprecatedSynchronousErrorHandling && Q && (Q.errorThrown = !0, Q.error = r); }
var vr = (function (r) { C(t, r); function t(e) { var o = r.call(this) || this; return o.isStopped = !1, e ? (o.destination = e, xr(e) && e.add(o)) : o.destination = se, o; } return t.create = function (e, o, n) { return new rr(e, o, n); }, t.prototype.next = function (e) { this.isStopped ? Jr(xt(e), this) : this._next(e); }, t.prototype.error = function (e) { this.isStopped ? Jr(yt(e), this) : (this.isStopped = !0, this._error(e)); }, t.prototype.complete = function () { this.isStopped ? Jr(bt, this) : (this.isStopped = !0, this._complete()); }, t.prototype.unsubscribe = function () { this.closed || (this.isStopped = !0, r.prototype.unsubscribe.call(this), this.destination = null); }, t.prototype._next = function (e) { this.destination.next(e); }, t.prototype._error = function (e) { try {
    this.destination.error(e);
}
finally {
    this.unsubscribe();
} }, t.prototype._complete = function () { try {
    this.destination.complete();
}
finally {
    this.unsubscribe();
} }, t; })(k);
var pe = Function.prototype.bind;
function Br(r, t) { return pe.call(r, t); }
var me = (function () { function r(t) { this.partialObserver = t; } return r.prototype.next = function (t) { var e = this.partialObserver; if (e.next)
    try {
        e.next(t);
    }
    catch (o) {
        Sr(o);
    } }, r.prototype.error = function (t) { var e = this.partialObserver; if (e.error)
    try {
        e.error(t);
    }
    catch (o) {
        Sr(o);
    }
else
    Sr(t); }, r.prototype.complete = function () { var t = this.partialObserver; if (t.complete)
    try {
        t.complete();
    }
    catch (e) {
        Sr(e);
    } }, r; })(), rr = (function (r) { C(t, r); function t(e, o, n) { var i = r.call(this) || this, u; if (y(e) || !e)
    u = { next: e ?? void 0, error: o ?? void 0, complete: n ?? void 0 };
else {
    var f;
    i && Y.useDeprecatedNextContext ? (f = Object.create(e), f.unsubscribe = function () { return i.unsubscribe(); }, u = { next: e.next && Br(e.next, f), error: e.error && Br(e.error, f), complete: e.complete && Br(e.complete, f) }) : u = e;
} return i.destination = new me(u), i; } return t; })(vr);
function Sr(r) { Y.useDeprecatedSynchronousErrorHandling ? gt(r) : gr(r); }
function le(r) { throw r; }
function Jr(r, t) { var e = Y.onStoppedNotification; e && ir.setTimeout(function () { return e(r, t); }); }
var se = { closed: !0, next: _, error: le, complete: _ };
var fr = (function () { return typeof Symbol == "function" && Symbol.observable || "@@observable"; })();
function T(r) { return r; }
function wr() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return Xr(r); }
function Xr(r) { return r.length === 0 ? T : r.length === 1 ? r[0] : function (e) { return r.reduce(function (o, n) { return n(o); }, e); }; }
var A = (function () { function r(t) { t && (this._subscribe = t); } return r.prototype.lift = function (t) { var e = new r; return e.source = this, e.operator = t, e; }, r.prototype.subscribe = function (t, e, o) { var n = this, i = de(t) ? t : new rr(t, e, o); return ur(function () { var u = n, f = u.operator, a = u.source; i.add(f ? f.call(i, a) : a ? n._subscribe(i) : n._trySubscribe(i)); }), i; }, r.prototype._trySubscribe = function (t) { try {
    return this._subscribe(t);
}
catch (e) {
    t.error(e);
} }, r.prototype.forEach = function (t, e) { var o = this; return e = St(e), new e(function (n, i) { var u = new rr({ next: function (f) { try {
        t(f);
    }
    catch (a) {
        i(a), u.unsubscribe();
    } }, error: i, complete: n }); o.subscribe(u); }); }, r.prototype._subscribe = function (t) { var e; return (e = this.source) === null || e === void 0 ? void 0 : e.subscribe(t); }, r.prototype[fr] = function () { return this; }, r.prototype.pipe = function () { for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e]; return Xr(t)(this); }, r.prototype.toPromise = function (t) { var e = this; return t = St(t), new t(function (o, n) { var i; e.subscribe(function (u) { return i = u; }, function (u) { return n(u); }, function () { return o(i); }); }); }, r.create = function (t) { return new r(t); }, r; })();
function St(r) { var t; return (t = r ?? Y.Promise) !== null && t !== void 0 ? t : Promise; }
function ve(r) { return r && y(r.next) && y(r.error) && y(r.complete); }
function de(r) { return r && r instanceof vr || ve(r) && xr(r); }
function Hr(r) { return y(r?.lift); }
function c(r) { return function (t) { if (Hr(t))
    return t.lift(function (e) { try {
        return r(e, this);
    }
    catch (o) {
        this.error(o);
    } }); throw new TypeError("Unable to lift unknown Observable type"); }; }
O();
function p(r, t, e, o, n) { return new Qr(r, t, e, o, n); }
var Qr = (function (r) { C(t, r); function t(e, o, n, i, u, f) { var a = r.call(this, e) || this; return a.onFinalize = u, a.shouldUnsubscribe = f, a._next = o ? function (m) { try {
    o(m);
}
catch (l) {
    e.error(l);
} } : r.prototype._next, a._error = i ? function (m) { try {
    i(m);
}
catch (l) {
    e.error(l);
}
finally {
    this.unsubscribe();
} } : r.prototype._error, a._complete = n ? function () { try {
    n();
}
catch (m) {
    e.error(m);
}
finally {
    this.unsubscribe();
} } : r.prototype._complete, a; } return t.prototype.unsubscribe = function () { var e; if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
    var o = this.closed;
    r.prototype.unsubscribe.call(this), !o && ((e = this.onFinalize) === null || e === void 0 || e.call(this));
} }, t; })(vr);
function wt() { return c(function (r, t) { var e = null; r._refCount++; var o = p(t, void 0, void 0, void 0, function () { if (!r || r._refCount <= 0 || 0 < --r._refCount) {
    e = null;
    return;
} var n = r._connection, i = e; e = null, n && (!i || n === i) && n.unsubscribe(), t.unsubscribe(); }); r.subscribe(o), o.closed || (e = r.connect()); }); }
O();
var ar = (function (r) { C(t, r); function t(e, o) { var n = r.call(this) || this; return n.source = e, n.subjectFactory = o, n._subject = null, n._refCount = 0, n._connection = null, Hr(e) && (n.lift = e.lift), n; } return t.prototype._subscribe = function (e) { return this.getSubject().subscribe(e); }, t.prototype.getSubject = function () { var e = this._subject; return (!e || e.isStopped) && (this._subject = this.subjectFactory()), this._subject; }, t.prototype._teardown = function () { this._refCount = 0; var e = this._connection; this._subject = this._connection = null, e?.unsubscribe(); }, t.prototype.connect = function () { var e = this, o = this._connection; if (!o) {
    o = this._connection = new k;
    var n = this.getSubject();
    o.add(this.source.subscribe(p(n, void 0, function () { e._teardown(), n.complete(); }, function (i) { e._teardown(), n.error(i); }, function () { return e._teardown(); }))), o.closed && (this._connection = null, o = k.EMPTY);
} return o; }, t.prototype.refCount = function () { return wt()(this); }, t; })(A);
var Et = N(function (r) { return function () { r(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"; }; });
O();
var I = (function (r) { C(t, r); function t() { var e = r.call(this) || this; return e.closed = !1, e.currentObservers = null, e.observers = [], e.isStopped = !1, e.hasError = !1, e.thrownError = null, e; } return t.prototype.lift = function (e) { var o = new Ot(this, this); return o.operator = e, o; }, t.prototype._throwIfClosed = function () { if (this.closed)
    throw new Et; }, t.prototype.next = function (e) { var o = this; ur(function () { var n, i; if (o._throwIfClosed(), !o.isStopped) {
    o.currentObservers || (o.currentObservers = Array.from(o.observers));
    try {
        for (var u = R(o.currentObservers), f = u.next(); !f.done; f = u.next()) {
            var a = f.value;
            a.next(e);
        }
    }
    catch (m) {
        n = { error: m };
    }
    finally {
        try {
            f && !f.done && (i = u.return) && i.call(u);
        }
        finally {
            if (n)
                throw n.error;
        }
    }
} }); }, t.prototype.error = function (e) { var o = this; ur(function () { if (o._throwIfClosed(), !o.isStopped) {
    o.hasError = o.isStopped = !0, o.thrownError = e;
    for (var n = o.observers; n.length;)
        n.shift().error(e);
} }); }, t.prototype.complete = function () { var e = this; ur(function () { if (e._throwIfClosed(), !e.isStopped) {
    e.isStopped = !0;
    for (var o = e.observers; o.length;)
        o.shift().complete();
} }); }, t.prototype.unsubscribe = function () { this.isStopped = this.closed = !0, this.observers = this.currentObservers = null; }, Object.defineProperty(t.prototype, "observed", { get: function () { var e; return ((e = this.observers) === null || e === void 0 ? void 0 : e.length) > 0; }, enumerable: !1, configurable: !0 }), t.prototype._trySubscribe = function (e) { return this._throwIfClosed(), r.prototype._trySubscribe.call(this, e); }, t.prototype._subscribe = function (e) { return this._throwIfClosed(), this._checkFinalizedStatuses(e), this._innerSubscribe(e); }, t.prototype._innerSubscribe = function (e) { var o = this, n = this, i = n.hasError, u = n.isStopped, f = n.observers; return i || u ? Zr : (this.currentObservers = null, f.push(e), new k(function () { o.currentObservers = null, M(f, e); })); }, t.prototype._checkFinalizedStatuses = function (e) { var o = this, n = o.hasError, i = o.thrownError, u = o.isStopped; n ? e.error(i) : u && e.complete(); }, t.prototype.asObservable = function () { var e = new A; return e.source = this, e; }, t.create = function (e, o) { return new Ot(e, o); }, t; })(A);
var Ot = (function (r) { C(t, r); function t(e, o) { var n = r.call(this) || this; return n.destination = e, n.source = o, n; } return t.prototype.next = function (e) { var o, n; (n = (o = this.destination) === null || o === void 0 ? void 0 : o.next) === null || n === void 0 || n.call(o, e); }, t.prototype.error = function (e) { var o, n; (n = (o = this.destination) === null || o === void 0 ? void 0 : o.error) === null || n === void 0 || n.call(o, e); }, t.prototype.complete = function () { var e, o; (o = (e = this.destination) === null || e === void 0 ? void 0 : e.complete) === null || o === void 0 || o.call(e); }, t.prototype._subscribe = function (e) { var o, n; return (n = (o = this.source) === null || o === void 0 ? void 0 : o.subscribe(e)) !== null && n !== void 0 ? n : Zr; }, t; })(I);
O();
var At = (function (r) { C(t, r); function t(e) { var o = r.call(this) || this; return o._value = e, o; } return Object.defineProperty(t.prototype, "value", { get: function () { return this.getValue(); }, enumerable: !1, configurable: !0 }), t.prototype._subscribe = function (e) { var o = r.prototype._subscribe.call(this, e); return !o.closed && e.next(this._value), o; }, t.prototype.getValue = function () { var e = this, o = e.hasError, n = e.thrownError, i = e._value; if (o)
    throw n; return this._throwIfClosed(), i; }, t.prototype.next = function (e) { r.prototype.next.call(this, this._value = e); }, t; })(I);
O();
var tr = { now: function () { return (tr.delegate || Date).now(); }, delegate: void 0 };
var Er = (function (r) { C(t, r); function t(e, o, n) { e === void 0 && (e = 1 / 0), o === void 0 && (o = 1 / 0), n === void 0 && (n = tr); var i = r.call(this) || this; return i._bufferSize = e, i._windowTime = o, i._timestampProvider = n, i._buffer = [], i._infiniteTimeWindow = !0, i._infiniteTimeWindow = o === 1 / 0, i._bufferSize = Math.max(1, e), i._windowTime = Math.max(1, o), i; } return t.prototype.next = function (e) { var o = this, n = o.isStopped, i = o._buffer, u = o._infiniteTimeWindow, f = o._timestampProvider, a = o._windowTime; n || (i.push(e), !u && i.push(f.now() + a)), this._trimBuffer(), r.prototype.next.call(this, e); }, t.prototype._subscribe = function (e) { this._throwIfClosed(), this._trimBuffer(); for (var o = this._innerSubscribe(e), n = this, i = n._infiniteTimeWindow, u = n._buffer, f = u.slice(), a = 0; a < f.length && !e.closed; a += i ? 1 : 2)
    e.next(f[a]); return this._checkFinalizedStatuses(e), o; }, t.prototype._trimBuffer = function () { var e = this, o = e._bufferSize, n = e._timestampProvider, i = e._buffer, u = e._infiniteTimeWindow, f = (u ? 1 : 2) * o; if (o < 1 / 0 && f < i.length && i.splice(0, i.length - f), !u) {
    for (var a = n.now(), m = 0, l = 1; l < i.length && i[l] <= a; l += 2)
        m = l;
    m && i.splice(0, m + 1);
} }, t; })(I);
O();
var _t = (function (r) { C(t, r); function t() { var e = r !== null && r.apply(this, arguments) || this; return e._value = null, e._hasValue = !1, e._isComplete = !1, e; } return t.prototype._checkFinalizedStatuses = function (e) { var o = this, n = o.hasError, i = o._hasValue, u = o._value, f = o.thrownError, a = o.isStopped, m = o._isComplete; n ? e.error(f) : (a || m) && (i && e.next(u), e.complete()); }, t.prototype.next = function (e) { this.isStopped || (this._value = e, this._hasValue = !0); }, t.prototype.complete = function () { var e = this, o = e._hasValue, n = e._value, i = e._isComplete; i || (this._isComplete = !0, o && r.prototype.next.call(this, n), r.prototype.complete.call(this)); }, t; })(I);
var rt = (function () { function r(t, e) { e === void 0 && (e = r.now), this.schedulerActionCtor = t, this.now = e; } return r.prototype.schedule = function (t, e, o) { return e === void 0 && (e = 0), new this.schedulerActionCtor(this, t).schedule(o, e); }, r.now = tr.now, r; })();
O();
O();
var It = (function (r) { C(t, r); function t(e, o) { return r.call(this) || this; } return t.prototype.schedule = function (e, o) { return o === void 0 && (o = 0), this; }, t; })(k);
O();
var dr = { setInterval: function (r, t) { for (var e = [], o = 2; o < arguments.length; o++)
        e[o - 2] = arguments[o]; var n = dr.delegate; return n?.setInterval ? n.setInterval.apply(n, E([r, t], w(e))) : setInterval.apply(void 0, E([r, t], w(e))); }, clearInterval: function (r) { var t = dr.delegate; return (t?.clearInterval || clearInterval)(r); }, delegate: void 0 };
var Tt = (function (r) { C(t, r); function t(e, o) { var n = r.call(this, e, o) || this; return n.scheduler = e, n.work = o, n.pending = !1, n; } return t.prototype.schedule = function (e, o) { var n; if (o === void 0 && (o = 0), this.closed)
    return this; this.state = e; var i = this.id, u = this.scheduler; return i != null && (this.id = this.recycleAsyncId(u, i, o)), this.pending = !0, this.delay = o, this.id = (n = this.id) !== null && n !== void 0 ? n : this.requestAsyncId(u, this.id, o), this; }, t.prototype.requestAsyncId = function (e, o, n) { return n === void 0 && (n = 0), dr.setInterval(e.flush.bind(e, this), n); }, t.prototype.recycleAsyncId = function (e, o, n) { if (n === void 0 && (n = 0), n != null && this.delay === n && this.pending === !1)
    return o; o != null && dr.clearInterval(o); }, t.prototype.execute = function (e, o) { if (this.closed)
    return new Error("executing a cancelled action"); this.pending = !1; var n = this._execute(e, o); if (n)
    return n; this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null)); }, t.prototype._execute = function (e, o) { var n = !1, i; try {
    this.work(e);
}
catch (u) {
    n = !0, i = u || new Error("Scheduled action threw falsy error");
} if (n)
    return this.unsubscribe(), i; }, t.prototype.unsubscribe = function () { if (!this.closed) {
    var e = this, o = e.id, n = e.scheduler, i = n.actions;
    this.work = this.state = this.scheduler = null, this.pending = !1, M(i, this), o != null && (this.id = this.recycleAsyncId(n, o, null)), this.delay = null, r.prototype.unsubscribe.call(this);
} }, t; })(It);
O();
var Ft = (function (r) { C(t, r); function t(e, o) { o === void 0 && (o = rt.now); var n = r.call(this, e, o) || this; return n.actions = [], n._active = !1, n; } return t.prototype.flush = function (e) { var o = this.actions; if (this._active) {
    o.push(e);
    return;
} var n; this._active = !0; do
    if (n = e.execute(e.state, e.delay))
        break;
while (e = o.shift()); if (this._active = !1, n) {
    for (; e = o.shift();)
        e.unsubscribe();
    throw n;
} }, t; })(rt);
var P = new Ft(Tt), Or = P;
var q = new A(function (r) { return r.complete(); });
function jn(r) { return r ? he(r) : q; }
function he(r) { return new A(function (t) { return r.schedule(function () { return t.complete(); }); }); }
function j(r, t, e, o, n) { o === void 0 && (o = 0), n === void 0 && (n = !1); var i = t.schedule(function () { e(), n ? r.add(this.schedule(null, o)) : this.unsubscribe(); }, o); if (r.add(i), !n)
    return i; }
function Ar(r, t) { return t === void 0 && (t = 0), c(function (e, o) { e.subscribe(p(o, function (n) { return j(o, r, function () { return o.next(n); }, t); }, function () { return j(o, r, function () { return o.complete(); }, t); }, function (n) { return j(o, r, function () { return o.error(n); }, t); })); }); }
function _r(r, t) { return t === void 0 && (t = 0), c(function (e, o) { o.add(r.schedule(function () { return e.subscribe(o); }, t)); }); }
O();
var Ir = function (r) { return r && typeof r.length == "number" && typeof r != "function"; };
function Tr(r) { return y(r?.then); }
function Fr(r) { return y(r[fr]); }
function Cr(r) { return Symbol.asyncIterator && y(r?.[Symbol.asyncIterator]); }
function jr(r) { return new TypeError("You provided " + (r !== null && typeof r == "object" ? "an invalid object" : "'" + r + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable."); }
function be() { return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator; }
var Rr = be();
function Pr(r) { return y(r?.[Rr]); }
O();
function kr(r) { return vt(this, arguments, function () { var e, o, n, i; return hr(this, function (u) { switch (u.label) {
    case 0: e = r.getReader(), u.label = 1;
    case 1: u.trys.push([1, , 9, 10]), u.label = 2;
    case 2: return [4, br(e.read())];
    case 3: return o = u.sent(), n = o.value, i = o.done, i ? [4, br(void 0)] : [3, 5];
    case 4: return [2, u.sent()];
    case 5: return [4, br(n)];
    case 6: return [4, u.sent()];
    case 7: return u.sent(), [3, 2];
    case 8: return [3, 10];
    case 9: return e.releaseLock(), [7];
    case 10: return [2];
} }); }); }
function Mr(r) { return y(r?.getReader); }
function x(r) { if (r instanceof A)
    return r; if (r != null) {
    if (Fr(r))
        return ye(r);
    if (Ir(r))
        return xe(r);
    if (Tr(r))
        return ge(r);
    if (Cr(r))
        return Ct(r);
    if (Pr(r))
        return Se(r);
    if (Mr(r))
        return we(r);
} throw jr(r); }
function ye(r) { return new A(function (t) { var e = r[fr](); if (y(e.subscribe))
    return e.subscribe(t); throw new TypeError("Provided object does not correctly implement Symbol.observable"); }); }
function xe(r) { return new A(function (t) { for (var e = 0; e < r.length && !t.closed; e++)
    t.next(r[e]); t.complete(); }); }
function ge(r) { return new A(function (t) { r.then(function (e) { t.closed || (t.next(e), t.complete()); }, function (e) { return t.error(e); }).then(null, gr); }); }
function Se(r) { return new A(function (t) { var e, o; try {
    for (var n = R(r), i = n.next(); !i.done; i = n.next()) {
        var u = i.value;
        if (t.next(u), t.closed)
            return;
    }
}
catch (f) {
    e = { error: f };
}
finally {
    try {
        i && !i.done && (o = n.return) && o.call(n);
    }
    finally {
        if (e)
            throw e.error;
    }
} t.complete(); }); }
function Ct(r) { return new A(function (t) { Ee(r, t).catch(function (e) { return t.error(e); }); }); }
function we(r) { return Ct(kr(r)); }
function Ee(r, t) { var e, o, n, i; return st(this, void 0, void 0, function () { var u, f; return hr(this, function (a) { switch (a.label) {
    case 0: a.trys.push([0, 5, 6, 11]), e = dt(r), a.label = 1;
    case 1: return [4, e.next()];
    case 2:
        if (o = a.sent(), !!o.done)
            return [3, 4];
        if (u = o.value, t.next(u), t.closed)
            return [2];
        a.label = 3;
    case 3: return [3, 1];
    case 4: return [3, 11];
    case 5: return f = a.sent(), n = { error: f }, [3, 11];
    case 6: return a.trys.push([6, , 9, 10]), o && !o.done && (i = e.return) ? [4, i.call(e)] : [3, 8];
    case 7: a.sent(), a.label = 8;
    case 8: return [3, 10];
    case 9:
        if (n)
            throw n.error;
        return [7];
    case 10: return [7];
    case 11: return t.complete(), [2];
} }); }); }
function jt(r, t) { return x(r).pipe(_r(t), Ar(t)); }
function Rt(r, t) { return x(r).pipe(_r(t), Ar(t)); }
function Pt(r, t) { return new A(function (e) { var o = 0; return t.schedule(function () { o === r.length ? e.complete() : (e.next(r[o++]), e.closed || this.schedule()); }); }); }
function kt(r, t) { return new A(function (e) { var o; return j(e, t, function () { o = r[Rr](), j(e, t, function () { var n, i, u; try {
    n = o.next(), i = n.value, u = n.done;
}
catch (f) {
    e.error(f);
    return;
} u ? e.complete() : e.next(i); }, 0, !0); }), function () { return y(o?.return) && o.return(); }; }); }
function Vr(r, t) { if (!r)
    throw new Error("Iterable cannot be null"); return new A(function (e) { j(e, t, function () { var o = r[Symbol.asyncIterator](); j(e, t, function () { o.next().then(function (n) { n.done ? e.complete() : e.next(n.value); }); }, 0, !0); }); }); }
function Mt(r, t) { return Vr(kr(r), t); }
function Vt(r, t) { if (r != null) {
    if (Fr(r))
        return jt(r, t);
    if (Ir(r))
        return Pt(r, t);
    if (Tr(r))
        return Rt(r, t);
    if (Cr(r))
        return Vr(r, t);
    if (Pr(r))
        return kt(r, t);
    if (Mr(r))
        return Mt(r, t);
} throw jr(r); }
function z(r, t) { return t ? Vt(r, t) : x(r); }
function Lr(r) { return r && y(r.schedule); }
function tt(r) { return r[r.length - 1]; }
function Z(r) { return y(tt(r)) ? r.pop() : void 0; }
function V(r) { return Lr(tt(r)) ? r.pop() : void 0; }
function Lt(r, t) { return typeof tt(r) == "number" ? r.pop() : t; }
function Ur() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = V(r); return z(r, e); }
function Ut(r, t) { var e = y(r) ? r : function () { return r; }, o = function (n) { return n.error(e()); }; return new A(t ? function (n) { return t.schedule(o, 0, n); } : o); }
var Oe = (function (r) { return r.NEXT = "N", r.ERROR = "E", r.COMPLETE = "C", r; })(Oe || {}), Nr = (function () { function r(t, e, o) { this.kind = t, this.value = e, this.error = o, this.hasValue = t === "N"; } return r.prototype.observe = function (t) { return et(this, t); }, r.prototype.do = function (t, e, o) { var n = this, i = n.kind, u = n.value, f = n.error; return i === "N" ? t?.(u) : i === "E" ? e?.(f) : o?.(); }, r.prototype.accept = function (t, e, o) { var n; return y((n = t) === null || n === void 0 ? void 0 : n.next) ? this.observe(t) : this.do(t, e, o); }, r.prototype.toObservable = function () { var t = this, e = t.kind, o = t.value, n = t.error, i = e === "N" ? Ur(o) : e === "E" ? Ut(function () { return n; }) : e === "C" ? q : 0; if (!i)
    throw new TypeError("Unexpected notification kind " + e); return i; }, r.createNext = function (t) { return new r("N", t); }, r.createError = function (t) { return new r("E", void 0, t); }, r.createComplete = function () { return r.completeNotification; }, r.completeNotification = new r("C"), r; })();
function et(r, t) { var e, o, n, i = r, u = i.kind, f = i.value, a = i.error; if (typeof u != "string")
    throw new TypeError('Invalid notification, missing "kind"'); u === "N" ? (e = t.next) === null || e === void 0 || e.call(t, f) : u === "E" ? (o = t.error) === null || o === void 0 || o.call(t, a) : (n = t.complete) === null || n === void 0 || n.call(t); }
var $ = N(function (r) { return function () { r(this), this.name = "EmptyError", this.message = "no elements in sequence"; }; });
var ot = N(function (r) { return function () { r(this), this.name = "ArgumentOutOfRangeError", this.message = "argument out of range"; }; });
var Nt = N(function (r) { return function (e) { r(this), this.name = "NotFoundError", this.message = e; }; });
var Wt = N(function (r) { return function (e) { r(this), this.name = "SequenceError", this.message = e; }; });
function cr(r) { return r instanceof Date && !isNaN(r); }
var Ae = N(function (r) { return function (e) { e === void 0 && (e = null), r(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = e; }; });
function Dt(r, t) { var e = cr(r) ? { first: r } : typeof r == "number" ? { each: r } : r, o = e.first, n = e.each, i = e.with, u = i === void 0 ? _e : i, f = e.scheduler, a = f === void 0 ? t ?? P : f, m = e.meta, l = m === void 0 ? null : m; if (o == null && n == null)
    throw new TypeError("No timeout provided."); return c(function (s, v) { var g, d, b = null, h = 0, S = function (F) { d = j(v, a, function () { try {
    g.unsubscribe(), x(u({ meta: l, lastValue: b, seen: h })).subscribe(v);
}
catch (U) {
    v.error(U);
} }, F); }; g = s.subscribe(p(v, function (F) { d?.unsubscribe(), h++, v.next(b = F), n > 0 && S(n); }, void 0, void 0, function () { d?.closed || d?.unsubscribe(), b = null; })), !h && S(o != null ? typeof o == "number" ? o : +o - a.now() : n); }); }
function _e(r) { throw new Ae(r); }
function W(r, t) { return c(function (e, o) { var n = 0; e.subscribe(p(o, function (i) { o.next(r.call(t, i, n++)); })); }); }
var Ie = Array.isArray, Te = Object.getPrototypeOf, Fe = Object.prototype, Ce = Object.keys;
function Yt(r) { if (r.length === 1) {
    var t = r[0];
    if (Ie(t))
        return { args: t, keys: null };
    if (je(t)) {
        var e = Ce(t);
        return { args: e.map(function (o) { return t[o]; }), keys: e };
    }
} return { args: r, keys: null }; }
function je(r) { return r && typeof r == "object" && Te(r) === Fe; }
O();
var Re = Array.isArray;
function Pe(r, t) { return Re(t) ? r.apply(void 0, E([], w(t))) : r(t); }
function pr(r) { return W(function (t) { return Pe(r, t); }); }
function qt(r, t) { return r.reduce(function (e, o, n) { return e[o] = t[n], e; }, {}); }
function Gt() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = V(r), o = Z(r), n = Yt(r), i = n.args, u = n.keys; if (i.length === 0)
    return z([], e); var f = new A(nt(i, e, u ? function (a) { return qt(u, a); } : T)); return o ? f.pipe(pr(o)) : f; }
function nt(r, t, e) { return e === void 0 && (e = T), function (o) { zt(t, function () { for (var n = r.length, i = new Array(n), u = n, f = n, a = function (l) { zt(t, function () { var s = z(r[l], t), v = !1; s.subscribe(p(o, function (g) { i[l] = g, v || (v = !0, f--), f || o.next(e(i.slice())); }, function () { --u || o.complete(); })); }, o); }, m = 0; m < n; m++)
    a(m); }, o); }; }
function zt(r, t, e) { r ? j(e, r, t) : t(); }
function mr(r, t, e, o, n, i, u, f) { var a = [], m = 0, l = 0, s = !1, v = function () { s && !a.length && !m && t.complete(); }, g = function (b) { return m < o ? d(b) : a.push(b); }, d = function (b) { i && t.next(b), m++; var h = !1; x(e(b, l++)).subscribe(p(t, function (S) { n?.(S), i ? g(S) : t.next(S); }, function () { h = !0; }, void 0, function () { if (h)
    try {
        m--;
        for (var S = function () { var F = a.shift(); u ? j(t, u, function () { return d(F); }) : d(F); }; a.length && m < o;)
            S();
        v();
    }
    catch (F) {
        t.error(F);
    } })); }; return r.subscribe(p(t, g, function () { s = !0, v(); })), function () { f?.(); }; }
function L(r, t, e) { return e === void 0 && (e = 1 / 0), y(t) ? L(function (o, n) { return W(function (i, u) { return t(o, i, n, u); })(x(r(o, n))); }, e) : (typeof t == "number" && (e = t), c(function (o, n) { return mr(o, n, r, e); })); }
function Wr(r) { return r === void 0 && (r = 1 / 0), L(T, r); }
function Dr() { return Wr(1); }
function er() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return Dr()(z(r, V(r))); }
function D(r, t, e) { r === void 0 && (r = 0), e === void 0 && (e = Or); var o = -1; return t != null && (Lr(t) ? e = t : o = t), new A(function (n) { var i = cr(r) ? +r - e.now() : r; i < 0 && (i = 0); var u = 0; return e.schedule(function () { n.closed || (n.next(u++), 0 <= o ? this.schedule(void 0, o) : n.complete()); }, i); }); }
function Kt(r, t) { return r === void 0 && (r = 0), t === void 0 && (t = P), r < 0 && (r = 0), D(r, r, t); }
O();
var ke = Array.isArray;
function G(r) { return r.length === 1 && ke(r[0]) ? r[0] : r; }
function jf() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = G(r); return c(function (o, n) { var i = E([o], w(e)), u = function () { if (!n.closed)
    if (i.length > 0) {
        var f = void 0;
        try {
            f = x(i.shift());
        }
        catch {
            u();
            return;
        }
        var a = p(n, void 0, _, _);
        f.subscribe(a), a.add(u);
    }
    else
        n.complete(); }; u(); }); }
function B(r, t) { return c(function (e, o) { var n = 0; e.subscribe(p(o, function (i) { return r.call(t, i, n++) && o.next(i); })); }); }
function Wf() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return r = G(r), r.length === 1 ? x(r[0]) : new A(it(r)); }
function it(r) { return function (t) { for (var e = [], o = function (i) { e.push(x(r[i]).subscribe(p(t, function (u) { if (e) {
    for (var f = 0; f < e.length; f++)
        f !== i && e[f].unsubscribe();
    e = null;
} t.next(u); }))); }, n = 0; e && !t.closed && n < r.length; n++)
    o(n); }; }
O();
function Yr() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = Z(r), o = G(r); return o.length ? new A(function (n) { var i = o.map(function () { return []; }), u = o.map(function () { return !1; }); n.add(function () { i = u = null; }); for (var f = function (m) { x(o[m]).subscribe(p(n, function (l) { if (i[m].push(l), i.every(function (v) { return v.length; })) {
    var s = i.map(function (v) { return v.shift(); });
    n.next(e ? e.apply(void 0, E([], w(s))) : s), i.some(function (v, g) { return !v.length && u[g]; }) && n.complete();
} }, function () { u[m] = !0, !i[m].length && n.complete(); })); }, a = 0; !n.closed && a < o.length; a++)
    f(a); return function () { i = u = null; }; }) : q; }
function Zt(r) { return c(function (t, e) { var o = !1, n = null, i = null, u = !1, f = function () { if (i?.unsubscribe(), i = null, o) {
    o = !1;
    var m = n;
    n = null, e.next(m);
} u && e.complete(); }, a = function () { i = null, u && e.complete(); }; t.subscribe(p(e, function (m) { o = !0, n = m, i || x(r(m)).subscribe(i = p(e, f, a)); }, function () { u = !0, (!o || !i || i.closed) && e.complete(); })); }); }
function oa(r, t) { return t === void 0 && (t = P), Zt(function () { return D(r, t); }); }
function aa(r) { return c(function (t, e) { var o = []; return t.subscribe(p(e, function (n) { return o.push(n); }, function () { e.next(o), e.complete(); })), r.subscribe(p(e, function () { var n = o; o = [], e.next(n); }, _)), function () { o = null; }; }); }
O();
function va(r, t) { return t === void 0 && (t = null), t = t ?? r, c(function (e, o) { var n = [], i = 0; e.subscribe(p(o, function (u) { var f, a, m, l, s = null; i++ % t === 0 && n.push([]); try {
    for (var v = R(n), g = v.next(); !g.done; g = v.next()) {
        var d = g.value;
        d.push(u), r <= d.length && (s = s ?? [], s.push(d));
    }
}
catch (S) {
    f = { error: S };
}
finally {
    try {
        g && !g.done && (a = v.return) && a.call(v);
    }
    finally {
        if (f)
            throw f.error;
    }
} if (s)
    try {
        for (var b = R(s), h = b.next(); !h.done; h = b.next()) {
            var d = h.value;
            M(n, d), o.next(d);
        }
    }
    catch (S) {
        m = { error: S };
    }
    finally {
        try {
            h && !h.done && (l = b.return) && l.call(b);
        }
        finally {
            if (m)
                throw m.error;
        }
    } }, function () { var u, f; try {
    for (var a = R(n), m = a.next(); !m.done; m = a.next()) {
        var l = m.value;
        o.next(l);
    }
}
catch (s) {
    u = { error: s };
}
finally {
    try {
        m && !m.done && (f = a.return) && f.call(a);
    }
    finally {
        if (u)
            throw u.error;
    }
} o.complete(); }, void 0, function () { n = null; })); }); }
O();
function Oa(r) { for (var t, e, o = [], n = 1; n < arguments.length; n++)
    o[n - 1] = arguments[n]; var i = (t = V(o)) !== null && t !== void 0 ? t : P, u = (e = o[0]) !== null && e !== void 0 ? e : null, f = o[1] || 1 / 0; return c(function (a, m) { var l = [], s = !1, v = function (b) { var h = b.buffer, S = b.subs; S.unsubscribe(), M(l, b), m.next(h), s && g(); }, g = function () { if (l) {
    var b = new k;
    m.add(b);
    var h = [], S = { buffer: h, subs: b };
    l.push(S), j(b, i, function () { return v(S); }, r);
} }; u !== null && u >= 0 ? j(m, i, g, u, !0) : s = !0, g(); var d = p(m, function (b) { var h, S, F = l.slice(); try {
    for (var U = R(F), K = U.next(); !K.done; K = U.next()) {
        var X = K.value, H = X.buffer;
        H.push(b), f <= H.length && v(X);
    }
}
catch (ce) {
    h = { error: ce };
}
finally {
    try {
        K && !K.done && (S = U.return) && S.call(U);
    }
    finally {
        if (h)
            throw h.error;
    }
} }, function () { for (; l?.length;)
    m.next(l.shift().buffer); d?.unsubscribe(), m.complete(), m.unsubscribe(); }, void 0, function () { return l = null; }); a.subscribe(d); }); }
O();
function Pa(r, t) { return c(function (e, o) { var n = []; x(r).subscribe(p(o, function (i) { var u = []; n.push(u); var f = new k, a = function () { M(n, u), o.next(u), f.unsubscribe(); }; f.add(x(t(i)).subscribe(p(o, a, _))); }, _)), e.subscribe(p(o, function (i) { var u, f; try {
    for (var a = R(n), m = a.next(); !m.done; m = a.next()) {
        var l = m.value;
        l.push(i);
    }
}
catch (s) {
    u = { error: s };
}
finally {
    try {
        m && !m.done && (f = a.return) && f.call(a);
    }
    finally {
        if (u)
            throw u.error;
    }
} }, function () { for (; n.length > 0;)
    o.next(n.shift()); o.complete(); })); }); }
function Na(r) { return c(function (t, e) { var o = null, n = null, i = function () { n?.unsubscribe(); var u = o; o = [], u && e.next(u), x(r()).subscribe(n = p(e, i, _)); }; i(), t.subscribe(p(e, function (u) { return o?.push(u); }, function () { o && e.next(o), e.complete(); }, void 0, function () { return o = n = null; })); }); }
function Me(r) { return c(function (t, e) { var o = null, n = !1, i; o = t.subscribe(p(e, void 0, void 0, function (u) { i = x(r(u, Me(r)(t))), o ? (o.unsubscribe(), o = null, i.subscribe(e)) : n = !0; })), n && (o.unsubscribe(), o = null, i.subscribe(e)); }); }
function qr(r, t, e, o, n) { return function (i, u) { var f = e, a = t, m = 0; i.subscribe(p(u, function (l) { var s = m++; a = f ? r(a, l, s) : (f = !0, l), o && u.next(a); }, n && function () { f && u.next(a), u.complete(); })); }; }
function J(r, t) { return c(qr(r, t, arguments.length >= 2, !1, !0)); }
var Ve = function (r, t) { return r.push(t), r; };
function $t() { return c(function (r, t) { J(Ve, [])(r).subscribe(t); }); }
function zr(r, t) { return wr($t(), L(function (e) { return r(e); }), t ? pr(t) : T); }
function Bt(r) { return zr(Gt, r); }
var cc = Bt;
O();
function ut() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = Z(r); return e ? wr(ut.apply(void 0, E([], w(r))), pr(e)) : c(function (o, n) { nt(E([o], w(G(r))))(n); }); }
O();
function Sc() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return ut.apply(void 0, E([], w(r))); }
function ft(r, t) { return y(t) ? L(r, t, 1) : L(r, 1); }
function Tc(r, t) { return y(t) ? ft(function () { return r; }, t) : ft(function () { return r; }); }
O();
function Jt() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = V(r); return c(function (o, n) { Dr()(z(E([o], w(r)), e)).subscribe(n); }); }
O();
function Uc() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return Jt.apply(void 0, E([], w(r))); }
function Xt(r) { return new A(function (t) { return r.subscribe(t); }); }
var Le = { connector: function () { return new I; } };
function Gr(r, t) { t === void 0 && (t = Le); var e = t.connector; return c(function (o, n) { var i = e(); x(r(Xt(i))).subscribe(n), n.add(o.subscribe(i)); }); }
function $c(r) { return J(function (t, e, o) { return !r || r(e, o) ? t + 1 : t; }, 0); }
function rp(r) { return c(function (t, e) { var o = !1, n = null, i = null, u = function () { if (i?.unsubscribe(), i = null, o) {
    o = !1;
    var f = n;
    n = null, e.next(f);
} }; t.subscribe(p(e, function (f) { i?.unsubscribe(), o = !0, n = f, i = p(e, u, _), x(r(f)).subscribe(i); }, function () { u(), e.complete(); }, void 0, function () { n = i = null; })); }); }
function ip(r, t) { return t === void 0 && (t = P), c(function (e, o) { var n = null, i = null, u = null, f = function () { if (n) {
    n.unsubscribe(), n = null;
    var m = i;
    i = null, o.next(m);
} }; function a() { var m = u + r, l = t.now(); if (l < m) {
    n = this.schedule(void 0, m - l), o.add(n);
    return;
} f(); } e.subscribe(p(o, function (m) { i = m, u = t.now(), n || (n = t.schedule(a, r), o.add(n)); }, function () { f(), o.complete(); }, void 0, function () { i = n = null; })); }); }
function lr(r) { return c(function (t, e) { var o = !1; t.subscribe(p(e, function (n) { o = !0, e.next(n); }, function () { o || e.next(r), e.complete(); })); }); }
function or(r) { return r <= 0 ? function () { return q; } : c(function (t, e) { var o = 0; t.subscribe(p(e, function (n) { ++o <= r && (e.next(n), r <= o && e.complete()); })); }); }
function Ht() { return c(function (r, t) { r.subscribe(p(t, _)); }); }
function Qt(r) { return W(function () { return r; }); }
function at(r, t) { return t ? function (e) { return er(t.pipe(or(1), Ht()), e.pipe(at(r))); } : L(function (e, o) { return r(e, o).pipe(or(1), Qt(e)); }); }
function Fp(r, t) { t === void 0 && (t = P); var e = D(r, t); return at(function () { return e; }); }
function kp() { return c(function (r, t) { r.subscribe(p(t, function (e) { return et(e, t); })); }); }
function Np(r, t) { return c(function (e, o) { var n = new Set; e.subscribe(p(o, function (i) { var u = r ? r(i) : i; n.has(u) || (n.add(u), o.next(i)); })), t?.subscribe(p(o, function () { return n.clear(); }, _)); }); }
function re(r, t) { return t === void 0 && (t = T), r = r ?? Ue, c(function (e, o) { var n, i = !0; e.subscribe(p(o, function (u) { var f = t(u); (i || !r(n, f)) && (i = !1, n = f, o.next(u)); })); }); }
function Ue(r, t) { return r === t; }
function Kp(r, t) { return re(function (e, o) { return t ? t(e[r], o[r]) : e[r] === o[r]; }); }
function sr(r) { return r === void 0 && (r = Ne), c(function (t, e) { var o = !1; t.subscribe(p(e, function (n) { o = !0, e.next(n); }, function () { return o ? e.complete() : e.error(r()); })); }); }
function Ne() { return new $; }
function om(r, t) { if (r < 0)
    throw new ot; var e = arguments.length >= 2; return function (o) { return o.pipe(B(function (n, i) { return i === r; }), or(1), e ? lr(t) : sr(function () { return new ot; })); }; }
O();
function am() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return function (e) { return er(e, Ur.apply(void 0, E([], w(r)))); }; }
function lm(r, t) { return c(function (e, o) { var n = 0; e.subscribe(p(o, function (i) { r.call(t, i, n++, e) || (o.next(!1), o.complete()); }, function () { o.next(!0), o.complete(); })); }); }
function ct(r, t) { return t ? function (e) { return e.pipe(ct(function (o, n) { return x(r(o, n)).pipe(W(function (i, u) { return t(o, i, n, u); })); })); } : c(function (e, o) { var n = 0, i = null, u = !1; e.subscribe(p(o, function (f) { i || (i = p(o, void 0, function () { i = null, u && o.complete(); }), x(r(f, n++)).subscribe(i)); }, function () { u = !0, !i && o.complete(); })); }); }
function te() { return ct(T); }
var Em = te;
function Im(r, t, e) { return t === void 0 && (t = 1 / 0), t = (t || 0) < 1 ? 1 / 0 : t, c(function (o, n) { return mr(o, n, r, t, void 0, !0, e); }); }
function Cm(r) { return c(function (t, e) { try {
    t.subscribe(e);
}
finally {
    e.add(r);
} }); }
function km(r, t) { return c(pt(r, t, "value")); }
function pt(r, t, e) { var o = e === "index"; return function (n, i) { var u = 0; n.subscribe(p(i, function (f) { var a = u++; r.call(t, f, a, n) && (i.next(o ? a : f), i.complete()); }, function () { i.next(o ? -1 : void 0), i.complete(); })); }; }
function Um(r, t) { return c(pt(r, t, "index")); }
function Km(r, t) { var e = arguments.length >= 2; return function (o) { return o.pipe(r ? B(function (n, i) { return r(n, i, o); }) : T, or(1), e ? lr(t) : sr(function () { return new $; })); }; }
function Qm(r, t, e, o) { return c(function (n, i) { var u; !t || typeof t == "function" ? u = t : (e = t.duration, u = t.element, o = t.connector); var f = new Map, a = function (d) { f.forEach(d), d(i); }, m = function (d) { return a(function (b) { return b.error(d); }); }, l = 0, s = !1, v = new Qr(i, function (d) { try {
    var b = r(d), h = f.get(b);
    if (!h) {
        f.set(b, h = o ? o() : new I);
        var S = g(b, h);
        if (i.next(S), e) {
            var F = p(h, function () { h.complete(), F?.unsubscribe(); }, void 0, void 0, function () { return f.delete(b); });
            v.add(x(e(S)).subscribe(F));
        }
    }
    h.next(u ? u(d) : d);
}
catch (U) {
    m(U);
} }, function () { return a(function (d) { return d.complete(); }); }, m, function () { return f.clear(); }, function () { return s = !0, l === 0; }); n.subscribe(v); function g(d, b) { var h = new A(function (S) { l++; var F = b.subscribe(S); return function () { F.unsubscribe(), --l === 0 && s && v.unsubscribe(); }; }); return h.key = d, h; } }); }
function ol() { return c(function (r, t) { r.subscribe(p(t, function () { t.next(!1), t.complete(); }, function () { t.next(!0), t.complete(); })); }); }
O();
function ee(r) { return r <= 0 ? function () { return q; } : c(function (t, e) { var o = []; t.subscribe(p(e, function (n) { o.push(n), r < o.length && o.shift(); }, function () { var n, i; try {
    for (var u = R(o), f = u.next(); !f.done; f = u.next()) {
        var a = f.value;
        e.next(a);
    }
}
catch (m) {
    n = { error: m };
}
finally {
    try {
        f && !f.done && (i = u.return) && i.call(u);
    }
    finally {
        if (n)
            throw n.error;
    }
} e.complete(); }, void 0, function () { o = null; })); }); }
function hl(r, t) { var e = arguments.length >= 2; return function (o) { return o.pipe(r ? B(function (n, i) { return r(n, i, o); }) : T, ee(1), e ? lr(t) : sr(function () { return new $; })); }; }
function Sl() { return c(function (r, t) { r.subscribe(p(t, function (e) { t.next(Nr.createNext(e)); }, function () { t.next(Nr.createComplete()), t.complete(); }, function (e) { t.next(Nr.createError(e)), t.complete(); })); }); }
function Al(r) { return J(y(r) ? function (t, e) { return r(t, e) > 0 ? t : e; } : function (t, e) { return t > e ? t : e; }); }
var Tl = L;
function Rl(r, t, e) { return e === void 0 && (e = 1 / 0), y(t) ? L(function () { return r; }, t, e) : (typeof t == "number" && (e = t), L(function () { return r; }, e)); }
function Vl(r, t, e) { return e === void 0 && (e = 1 / 0), c(function (o, n) { var i = t; return mr(o, n, function (u, f) { return r(i, u, f); }, e, function (u) { i = u; }, !1, void 0, function () { return i = null; }); }); }
O();
function oe() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = V(r), o = Lt(r, 1 / 0); return r = G(r), c(function (n, i) { Wr(o)(z(E([n], w(r)), e)).subscribe(i); }); }
O();
function Zl() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return oe.apply(void 0, E([], w(r))); }
function Xl(r) { return J(y(r) ? function (t, e) { return r(t, e) < 0 ? t : e; } : function (t, e) { return t < e ? t : e; }); }
function Kr(r, t) { var e = y(r) ? r : function () { return r; }; return y(t) ? Gr(t, { connector: e }) : function (o) { return new ar(o, e); }; }
function is() { return c(function (r, t) { var e, o = !1; r.subscribe(p(t, function (n) { var i = e; e = n, o && t.next([i, n]), o = !0; })); }); }
function as() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = r.length; if (e === 0)
    throw new Error("list of properties cannot be empty."); return W(function (o) { for (var n = o, i = 0; i < e; i++) {
    var u = n?.[r[i]];
    if (typeof u < "u")
        n = u;
    else
        return;
} return n; }); }
function ss(r) { return r ? function (t) { return Gr(r)(t); } : function (t) { return Kr(new I)(t); }; }
function bs(r) { return function (t) { var e = new At(r); return new ar(t, function () { return e; }); }; }
function Ss() { return function (r) { var t = new _t; return new ar(r, function () { return t; }); }; }
function _s(r, t, e, o) { e && !y(e) && (o = e); var n = y(e) ? e : void 0; return function (i) { return Kr(new Er(r, t, o), n)(i); }; }
O();
function Rs() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return r.length ? c(function (e, o) { it(E([e], w(r)))(o); }) : T; }
function Ns(r) { var t, e = 1 / 0, o; return r != null && (typeof r == "object" ? (t = r.count, e = t === void 0 ? 1 / 0 : t, o = r.delay) : e = r), e <= 0 ? function () { return q; } : c(function (n, i) { var u = 0, f, a = function () { if (f?.unsubscribe(), f = null, o != null) {
    var l = typeof o == "number" ? D(o) : x(o(u)), s = p(i, function () { s.unsubscribe(), m(); });
    l.subscribe(s);
}
else
    m(); }, m = function () { var l = !1; f = n.subscribe(p(i, void 0, function () { ++u < e ? f ? a() : l = !0 : i.complete(); })), l && a(); }; m(); }); }
function zs(r) { return c(function (t, e) { var o, n = !1, i, u = !1, f = !1, a = function () { return f && u && (e.complete(), !0); }, m = function () { return i || (i = new I, r(i).subscribe(p(e, function () { o ? l() : n = !0; }, function () { u = !0, a(); }))), i; }, l = function () { f = !1, o = t.subscribe(p(e, void 0, function () { f = !0, !a() && m().next(); })), n && (o.unsubscribe(), o = null, n = !1, l()); }; l(); }); }
function Xs(r) { r === void 0 && (r = 1 / 0); var t; r && typeof r == "object" ? t = r : t = { count: r }; var e = t.count, o = e === void 0 ? 1 / 0 : e, n = t.delay, i = t.resetOnSuccess, u = i === void 0 ? !1 : i; return o <= 0 ? T : c(function (f, a) { var m = 0, l, s = function () { var v = !1; l = f.subscribe(p(a, function (g) { u && (m = 0), a.next(g); }, void 0, function (g) { if (m++ < o) {
    var d = function () { l ? (l.unsubscribe(), l = null, s()) : v = !0; };
    if (n != null) {
        var b = typeof n == "number" ? D(n) : x(n(g, m)), h = p(a, function () { h.unsubscribe(), d(); }, function () { a.complete(); });
        b.subscribe(h);
    }
    else
        d();
}
else
    a.error(g); })), v && (l.unsubscribe(), l = null, s()); }; s(); }); }
function ev(r) { return c(function (t, e) { var o, n = !1, i, u = function () { o = t.subscribe(p(e, void 0, void 0, function (f) { i || (i = new I, r(i).subscribe(p(e, function () { return o ? u() : n = !0; }))), i && i.next(f); })), n && (o.unsubscribe(), o = null, n = !1, u()); }; u(); }); }
function ne(r) { return c(function (t, e) { var o = !1, n = null; t.subscribe(p(e, function (i) { o = !0, n = i; })), r.subscribe(p(e, function () { if (o) {
    o = !1;
    var i = n;
    n = null, e.next(i);
} }, _)); }); }
function mv(r, t) { return t === void 0 && (t = P), ne(Kt(r, t)); }
function dv(r, t) { return c(qr(r, t, arguments.length >= 2, !0)); }
function xv(r, t) { return t === void 0 && (t = function (e, o) { return e === o; }), c(function (e, o) { var n = ie(), i = ie(), u = function (a) { o.next(a), o.complete(); }, f = function (a, m) { var l = p(o, function (s) { var v = m.buffer, g = m.complete; v.length === 0 ? g ? u(!1) : a.buffer.push(s) : !t(s, v.shift()) && u(!1); }, function () { a.complete = !0; var s = m.complete, v = m.buffer; s && u(v.length === 0), l?.unsubscribe(); }); return l; }; e.subscribe(f(n, i)), r.subscribe(f(i, n)); }); }
function ie() { return { buffer: [], complete: !1 }; }
O();
function ue(r) { r === void 0 && (r = {}); var t = r.connector, e = t === void 0 ? function () { return new I; } : t, o = r.resetOnError, n = o === void 0 ? !0 : o, i = r.resetOnComplete, u = i === void 0 ? !0 : i, f = r.resetOnRefCountZero, a = f === void 0 ? !0 : f; return function (m) { var l, s, v, g = 0, d = !1, b = !1, h = function () { s?.unsubscribe(), s = void 0; }, S = function () { h(), l = v = void 0, d = b = !1; }, F = function () { var U = l; S(), U?.unsubscribe(); }; return c(function (U, K) { g++, !b && !d && h(); var X = v = v ?? e(); K.add(function () { g--, g === 0 && !b && !d && (s = mt(F, a)); }), X.subscribe(K), !l && g > 0 && (l = new rr({ next: function (H) { return X.next(H); }, error: function (H) { b = !0, h(), s = mt(S, n, H), X.error(H); }, complete: function () { d = !0, h(), s = mt(S, u), X.complete(); } }), x(U).subscribe(l)); })(m); }; }
function mt(r, t) { for (var e = [], o = 2; o < arguments.length; o++)
    e[o - 2] = arguments[o]; if (t === !0) {
    r();
    return;
} if (t !== !1) {
    var n = new rr({ next: function () { n.unsubscribe(), r(); } });
    return t.apply(void 0, E([], w(e))).subscribe(n);
} }
function Fv(r, t, e) { var o, n, i, u, f = !1; return r && typeof r == "object" ? (o = r.bufferSize, u = o === void 0 ? 1 / 0 : o, n = r.windowTime, t = n === void 0 ? 1 / 0 : n, i = r.refCount, f = i === void 0 ? !1 : i, e = r.scheduler) : u = r ?? 1 / 0, ue({ connector: function () { return new Er(u, t, e); }, resetOnError: !0, resetOnComplete: !1, resetOnRefCountZero: f }); }
function Vv(r) { return c(function (t, e) { var o = !1, n, i = !1, u = 0; t.subscribe(p(e, function (f) { i = !0, (!r || r(f, u++, t)) && (o && e.error(new Wt("Too many matching values")), o = !0, n = f); }, function () { o ? (e.next(n), e.complete()) : e.error(i ? new Nt("No matching values") : new $); })); }); }
function Nv(r) { return B(function (t, e) { return r <= e; }); }
function zv(r) { return r <= 0 ? T : c(function (t, e) { var o = new Array(r), n = 0; return t.subscribe(p(e, function (i) { var u = n++; if (u < r)
    o[u] = i;
else {
    var f = u % r, a = o[f];
    o[f] = i, e.next(a);
} })), function () { o = null; }; }); }
function Jv(r) { return c(function (t, e) { var o = !1, n = p(e, function () { n?.unsubscribe(), o = !0; }, _); x(r).subscribe(n), t.subscribe(p(e, function (i) { return o && e.next(i); })); }); }
function rd(r) { return c(function (t, e) { var o = !1, n = 0; t.subscribe(p(e, function (i) { return (o || (o = !r(i, n++))) && e.next(i); })); }); }
function id() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = V(r); return c(function (o, n) { (e ? er(r, o, e) : er(r, o)).subscribe(n); }); }
function nr(r, t) { return c(function (e, o) { var n = null, i = 0, u = !1, f = function () { return u && !n && o.complete(); }; e.subscribe(p(o, function (a) { n?.unsubscribe(); var m = 0, l = i++; x(r(a, l)).subscribe(n = p(o, function (s) { return o.next(t ? t(a, s, l, m++) : s); }, function () { n = null, f(); })); }, function () { u = !0, f(); })); }); }
function sd() { return nr(T); }
function bd(r, t) { return y(t) ? nr(function () { return r; }, t) : nr(function () { return r; }); }
function Sd(r, t) { return c(function (e, o) { var n = t; return nr(function (i, u) { return r(n, i, u); }, function (i, u) { return n = u, u; })(e).subscribe(o), function () { n = null; }; }); }
function Id(r) { return c(function (t, e) { x(r).subscribe(p(e, function () { return e.complete(); }, _)), !e.closed && t.subscribe(e); }); }
function jd(r, t) { return t === void 0 && (t = !1), c(function (e, o) { var n = 0; e.subscribe(p(o, function (i) { var u = r(i, n++); (u || t) && o.next(i), !u && o.complete(); })); }); }
function Ld(r, t, e) { var o = y(r) || t || e ? { next: r, error: t, complete: e } : r; return o ? c(function (n, i) { var u; (u = o.subscribe) === null || u === void 0 || u.call(o); var f = !0; n.subscribe(p(i, function (a) { var m; (m = o.next) === null || m === void 0 || m.call(o, a), i.next(a); }, function () { var a; f = !1, (a = o.complete) === null || a === void 0 || a.call(o), i.complete(); }, function (a) { var m; f = !1, (m = o.error) === null || m === void 0 || m.call(o, a), i.error(a); }, function () { var a, m; f && ((a = o.unsubscribe) === null || a === void 0 || a.call(o)), (m = o.finalize) === null || m === void 0 || m.call(o); })); }) : T; }
var lt = { leading: !0, trailing: !1 };
function fe(r, t) { return t === void 0 && (t = lt), c(function (e, o) { var n = t.leading, i = t.trailing, u = !1, f = null, a = null, m = !1, l = function () { a?.unsubscribe(), a = null, i && (g(), m && o.complete()); }, s = function () { a = null, m && o.complete(); }, v = function (d) { return a = x(r(d)).subscribe(p(o, l, s)); }, g = function () { if (u) {
    u = !1;
    var d = f;
    f = null, o.next(d), !m && v(d);
} }; e.subscribe(p(o, function (d) { u = !0, f = d, !(a && !a.closed) && (n ? g() : v(d)); }, function () { m = !0, !(i && u && a && !a.closed) && o.complete(); })); }); }
function Kd(r, t, e) { t === void 0 && (t = P), e === void 0 && (e = lt); var o = D(r, t); return fe(function () { return o; }, e); }
function Xd(r) { return r === void 0 && (r = P), c(function (t, e) { var o = r.now(); t.subscribe(p(e, function (n) { var i = r.now(), u = i - o; o = i, e.next(new We(n, u)); })); }); }
var We = (function () { function r(t, e) { this.value = t, this.interval = e; } return r; })();
function eh(r, t, e) { var o, n, i; if (e = e ?? Or, cr(r) ? o = r : typeof r == "number" && (n = r), t)
    i = function () { return t; };
else
    throw new TypeError("No observable provided to switch to"); if (o == null && n == null)
    throw new TypeError("No timeout provided."); return Dt({ first: o, each: n, scheduler: e, with: i }); }
function uh(r) { return r === void 0 && (r = tr), W(function (t) { return { value: t, timestamp: r.now() }; }); }
function lh(r) { return c(function (t, e) { var o = new I; e.next(o.asObservable()); var n = function (i) { o.error(i), e.error(i); }; return t.subscribe(p(e, function (i) { return o?.next(i); }, function () { o.complete(), e.complete(); }, n)), r.subscribe(p(e, function () { o.complete(), e.next(o = new I); }, _, n)), function () { o?.unsubscribe(), o = null; }; }); }
O();
function yh(r, t) { t === void 0 && (t = 0); var e = t > 0 ? t : r; return c(function (o, n) { var i = [new I], u = [], f = 0; n.next(i[0].asObservable()), o.subscribe(p(n, function (a) { var m, l; try {
    for (var s = R(i), v = s.next(); !v.done; v = s.next()) {
        var g = v.value;
        g.next(a);
    }
}
catch (h) {
    m = { error: h };
}
finally {
    try {
        v && !v.done && (l = s.return) && l.call(s);
    }
    finally {
        if (m)
            throw m.error;
    }
} var d = f - r + 1; if (d >= 0 && d % e === 0 && i.shift().complete(), ++f % e === 0) {
    var b = new I;
    i.push(b), n.next(b.asObservable());
} }, function () { for (; i.length > 0;)
    i.shift().complete(); n.complete(); }, function (a) { for (; i.length > 0;)
    i.shift().error(a); n.error(a); }, function () { u = null, i = null; })); }); }
function Th(r) { for (var t, e, o = [], n = 1; n < arguments.length; n++)
    o[n - 1] = arguments[n]; var i = (t = V(o)) !== null && t !== void 0 ? t : P, u = (e = o[0]) !== null && e !== void 0 ? e : null, f = o[1] || 1 / 0; return c(function (a, m) { var l = [], s = !1, v = function (h) { var S = h.window, F = h.subs; S.complete(), F.unsubscribe(), M(l, h), s && g(); }, g = function () { if (l) {
    var h = new k;
    m.add(h);
    var S = new I, F = { window: S, subs: h, seen: 0 };
    l.push(F), m.next(S.asObservable()), j(h, i, function () { return v(F); }, r);
} }; u !== null && u >= 0 ? j(m, i, g, u, !0) : s = !0, g(); var d = function (h) { return l.slice().forEach(h); }, b = function (h) { d(function (S) { var F = S.window; return h(F); }), h(m), m.unsubscribe(); }; return a.subscribe(p(m, function (h) { d(function (S) { S.window.next(h), f <= ++S.seen && v(S); }); }, function () { return b(function (h) { return h.complete(); }); }, function (h) { return b(function (S) { return S.error(h); }); })), function () { l = null; }; }); }
O();
function Uh(r, t) { return c(function (e, o) { var n = [], i = function (u) { for (; 0 < n.length;)
    n.shift().error(u); o.error(u); }; x(r).subscribe(p(o, function (u) { var f = new I; n.push(f); var a = new k, m = function () { M(n, f), f.complete(), a.unsubscribe(); }, l; try {
    l = x(t(u));
}
catch (s) {
    i(s);
    return;
} o.next(f.asObservable()), a.add(l.subscribe(p(o, m, _, i))); }, _)), e.subscribe(p(o, function (u) { var f, a, m = n.slice(); try {
    for (var l = R(m), s = l.next(); !s.done; s = l.next()) {
        var v = s.value;
        v.next(u);
    }
}
catch (g) {
    f = { error: g };
}
finally {
    try {
        s && !s.done && (a = l.return) && a.call(l);
    }
    finally {
        if (f)
            throw f.error;
    }
} }, function () { for (; 0 < n.length;)
    n.shift().complete(); o.complete(); }, i, function () { for (; 0 < n.length;)
    n.shift().unsubscribe(); })); }); }
function zh(r) { return c(function (t, e) { var o, n, i = function (f) { o.error(f), e.error(f); }, u = function () { n?.unsubscribe(), o?.complete(), o = new I, e.next(o.asObservable()); var f; try {
    f = x(r());
}
catch (a) {
    i(a);
    return;
} f.subscribe(n = p(e, u, u, i)); }; u(), t.subscribe(p(e, function (f) { return o.next(f); }, function () { o.complete(), e.complete(); }, i, function () { n?.unsubscribe(), o = null; })); }); }
O();
function Qh() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = Z(r); return c(function (o, n) { for (var i = r.length, u = new Array(i), f = r.map(function () { return !1; }), a = !1, m = function (s) { x(r[s]).subscribe(p(n, function (v) { u[s] = v, !a && !f[s] && (f[s] = !0, (a = f.every(T)) && (f = null)); }, _)); }, l = 0; l < i; l++)
    m(l); o.subscribe(p(n, function (s) { if (a) {
    var v = E([s], w(u));
    n.next(e ? e.apply(void 0, E([], w(v))) : v);
} })); }); }
function ob(r) { return zr(Yr, r); }
O();
function ae() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return c(function (e, o) { Yr.apply(void 0, E([e], w(r))).subscribe(o); }); }
O();
function mb() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return ae.apply(void 0, E([], w(r))); }
function sb(r, t) { return function (e, o) { return !r.call(t, e, o); }; }
export { y as a, yr as b, k as c, Y as d, _ as e, vr as f, rr as g, fr as h, T as i, wr as j, A as k, p as l, wt as m, ar as n, Et as o, I as p, At as q, Er as r, _t as s, Tt as t, rt as u, Ft as v, P as w, Or as x, q as y, jn as z, Lr as A, Z as B, V as C, Lt as D, Ir as E, x as F, Ar as G, _r as H, kt as I, Vt as J, z as K, Ur as L, Ut as M, Oe as N, Nr as O, $ as P, ot as Q, Nt as R, Wt as S, Ae as T, Dt as U, W as V, pr as W, Yt as X, qt as Y, Gt as Z, L as _, Wr as $, Dr as aa, er as ba, D as ca, Kt as da, G as ea, jf as fa, sb as ga, B as ha, Wf as ia, Yr as ja, Zt as ka, oa as la, aa as ma, va as na, Oa as oa, Pa as pa, Na as qa, Me as ra, J as sa, $t as ta, Bt as ua, cc as va, ut as wa, Sc as xa, ft as ya, Tc as za, Jt as Aa, Uc as Ba, Gr as Ca, $c as Da, rp as Ea, ip as Fa, lr as Ga, or as Ha, Ht as Ia, Qt as Ja, at as Ka, Fp as La, kp as Ma, Np as Na, re as Oa, Kp as Pa, sr as Qa, om as Ra, am as Sa, lm as Ta, ct as Ua, te as Va, Em as Wa, Im as Xa, Cm as Ya, km as Za, Um as _a, Km as $a, Qm as ab, ol as bb, ee as cb, hl as db, Sl as eb, Al as fb, Tl as gb, Rl as hb, Vl as ib, oe as jb, Zl as kb, Xl as lb, Kr as mb, is as nb, as as ob, ss as pb, bs as qb, Ss as rb, _s as sb, Rs as tb, Ns as ub, zs as vb, Xs as wb, ev as xb, ne as yb, mv as zb, dv as Ab, xv as Bb, ue as Cb, Fv as Db, Vv as Eb, Nv as Fb, zv as Gb, Jv as Hb, rd as Ib, id as Jb, nr as Kb, sd as Lb, bd as Mb, Sd as Nb, Id as Ob, jd as Pb, Ld as Qb, fe as Rb, Kd as Sb, Xd as Tb, eh as Ub, uh as Vb, lh as Wb, yh as Xb, Th as Yb, Uh as Zb, zh as _b, Qh as $b, ob as ac, ae as bc, mb as cc };
