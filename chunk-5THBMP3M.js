import { a as F, c as lt, d as dr, e as j, f as w, g as E, h as hr, i as st, j as vt } from "@nf-internal/chunk-CGWVJG5C";
function U(r) { var t = function (o) { Error.call(o), o.stack = new Error().stack; }, e = r(t); return e.prototype = Object.create(Error.prototype), e.prototype.constructor = e, e; }
var br = U(function (r) {
    return function (e) {
        r(this), this.message = e ? e.length + ` errors occurred during unsubscription:
` + e.map(function (o, n) { return n + 1 + ") " + o.toString(); }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = e;
    };
});
function y(r) { return typeof r == "function"; }
function k(r, t) { if (r) {
    var e = r.indexOf(t);
    0 <= e && r.splice(e, 1);
} }
var P = (function () { function r(t) { this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null; } return r.prototype.unsubscribe = function () { var t, e, o, n, i; if (!this.closed) {
    this.closed = !0;
    var u = this._parentage;
    if (u)
        if (this._parentage = null, Array.isArray(u))
            try {
                for (var f = j(u), a = f.next(); !a.done; a = f.next()) {
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
            i = b instanceof br ? b.errors : [b];
        }
    var s = this._finalizers;
    if (s) {
        this._finalizers = null;
        try {
            for (var v = j(s), g = v.next(); !g.done; g = v.next()) {
                var d = g.value;
                try {
                    dt(d);
                }
                catch (b) {
                    i = i ?? [], b instanceof br ? i = E(E([], w(i)), w(b.errors)) : i.push(b);
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
        throw new br(i);
} }, r.prototype.add = function (t) { var e; if (t && t !== this)
    if (this.closed)
        dt(t);
    else {
        if (t instanceof r) {
            if (t.closed || t._hasParent(this))
                return;
            t._addParent(this);
        }
        (this._finalizers = (e = this._finalizers) !== null && e !== void 0 ? e : []).push(t);
    } }, r.prototype._hasParent = function (t) { var e = this._parentage; return e === t || Array.isArray(e) && e.includes(t); }, r.prototype._addParent = function (t) { var e = this._parentage; this._parentage = Array.isArray(e) ? (e.push(t), e) : e ? [e, t] : t; }, r.prototype._removeParent = function (t) { var e = this._parentage; e === t ? this._parentage = null : Array.isArray(e) && k(e, t); }, r.prototype.remove = function (t) { var e = this._finalizers; e && k(e, t), t instanceof r && t._removeParent(this); }, r.EMPTY = (function () { var t = new r; return t.closed = !0, t; })(), r; })();
var Kr = P.EMPTY;
function yr(r) { return r instanceof P || r && "closed" in r && y(r.remove) && y(r.add) && y(r.unsubscribe); }
function dt(r) { y(r) ? r() : r.unsubscribe(); }
var D = { onUnhandledError: null, onStoppedNotification: null, Promise: void 0, useDeprecatedSynchronousErrorHandling: !1, useDeprecatedNextContext: !1 };
function A() { }
var nr = { setTimeout: function (r, t) { for (var e = [], o = 2; o < arguments.length; o++)
        e[o - 2] = arguments[o]; var n = nr.delegate; return n?.setTimeout ? n.setTimeout.apply(n, E([r, t], w(e))) : setTimeout.apply(void 0, E([r, t], w(e))); }, clearTimeout: function (r) { var t = nr.delegate; return (t?.clearTimeout || clearTimeout)(r); }, delegate: void 0 };
function xr(r) { nr.setTimeout(function () { var t = D.onUnhandledError; if (t)
    t(r);
else
    throw r; }); }
var ht = (function () { return Zr("C", void 0, void 0); })();
function bt(r) { return Zr("E", void 0, r); }
function yt(r) { return Zr("N", r, void 0); }
function Zr(r, t, e) { return { kind: r, value: t, error: e }; }
var H = null;
function ir(r) { if (D.useDeprecatedSynchronousErrorHandling) {
    var t = !H;
    if (t && (H = { errorThrown: !1, error: null }), r(), t) {
        var e = H, o = e.errorThrown, n = e.error;
        if (H = null, o)
            throw n;
    }
}
else
    r(); }
function xt(r) { D.useDeprecatedSynchronousErrorHandling && H && (H.errorThrown = !0, H.error = r); }
var sr = (function (r) { F(t, r); function t(e) { var o = r.call(this) || this; return o.isStopped = !1, e ? (o.destination = e, yr(e) && e.add(o)) : o.destination = le, o; } return t.create = function (e, o, n) { return new Q(e, o, n); }, t.prototype.next = function (e) { this.isStopped ? Br(yt(e), this) : this._next(e); }, t.prototype.error = function (e) { this.isStopped ? Br(bt(e), this) : (this.isStopped = !0, this._error(e)); }, t.prototype.complete = function () { this.isStopped ? Br(ht, this) : (this.isStopped = !0, this._complete()); }, t.prototype.unsubscribe = function () { this.closed || (this.isStopped = !0, r.prototype.unsubscribe.call(this), this.destination = null); }, t.prototype._next = function (e) { this.destination.next(e); }, t.prototype._error = function (e) { try {
    this.destination.error(e);
}
finally {
    this.unsubscribe();
} }, t.prototype._complete = function () { try {
    this.destination.complete();
}
finally {
    this.unsubscribe();
} }, t; })(P);
var ce = Function.prototype.bind;
function $r(r, t) { return ce.call(r, t); }
var pe = (function () { function r(t) { this.partialObserver = t; } return r.prototype.next = function (t) { var e = this.partialObserver; if (e.next)
    try {
        e.next(t);
    }
    catch (o) {
        gr(o);
    } }, r.prototype.error = function (t) { var e = this.partialObserver; if (e.error)
    try {
        e.error(t);
    }
    catch (o) {
        gr(o);
    }
else
    gr(t); }, r.prototype.complete = function () { var t = this.partialObserver; if (t.complete)
    try {
        t.complete();
    }
    catch (e) {
        gr(e);
    } }, r; })(), Q = (function (r) { F(t, r); function t(e, o, n) { var i = r.call(this) || this, u; if (y(e) || !e)
    u = { next: e ?? void 0, error: o ?? void 0, complete: n ?? void 0 };
else {
    var f;
    i && D.useDeprecatedNextContext ? (f = Object.create(e), f.unsubscribe = function () { return i.unsubscribe(); }, u = { next: e.next && $r(e.next, f), error: e.error && $r(e.error, f), complete: e.complete && $r(e.complete, f) }) : u = e;
} return i.destination = new pe(u), i; } return t; })(sr);
function gr(r) { D.useDeprecatedSynchronousErrorHandling ? xt(r) : xr(r); }
function me(r) { throw r; }
function Br(r, t) { var e = D.onStoppedNotification; e && nr.setTimeout(function () { return e(r, t); }); }
var le = { closed: !0, next: A, error: me, complete: A };
var ur = (function () { return typeof Symbol == "function" && Symbol.observable || "@@observable"; })();
function I(r) { return r; }
function Sr() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return Jr(r); }
function Jr(r) { return r.length === 0 ? I : r.length === 1 ? r[0] : function (e) { return r.reduce(function (o, n) { return n(o); }, e); }; }
var O = (function () { function r(t) { t && (this._subscribe = t); } return r.prototype.lift = function (t) { var e = new r; return e.source = this, e.operator = t, e; }, r.prototype.subscribe = function (t, e, o) { var n = this, i = ve(t) ? t : new Q(t, e, o); return ir(function () { var u = n, f = u.operator, a = u.source; i.add(f ? f.call(i, a) : a ? n._subscribe(i) : n._trySubscribe(i)); }), i; }, r.prototype._trySubscribe = function (t) { try {
    return this._subscribe(t);
}
catch (e) {
    t.error(e);
} }, r.prototype.forEach = function (t, e) { var o = this; return e = gt(e), new e(function (n, i) { var u = new Q({ next: function (f) { try {
        t(f);
    }
    catch (a) {
        i(a), u.unsubscribe();
    } }, error: i, complete: n }); o.subscribe(u); }); }, r.prototype._subscribe = function (t) { var e; return (e = this.source) === null || e === void 0 ? void 0 : e.subscribe(t); }, r.prototype[ur] = function () { return this; }, r.prototype.pipe = function () { for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e]; return Jr(t)(this); }, r.prototype.toPromise = function (t) { var e = this; return t = gt(t), new t(function (o, n) { var i; e.subscribe(function (u) { return i = u; }, function (u) { return n(u); }, function () { return o(i); }); }); }, r.create = function (t) { return new r(t); }, r; })();
function gt(r) { var t; return (t = r ?? D.Promise) !== null && t !== void 0 ? t : Promise; }
function se(r) { return r && y(r.next) && y(r.error) && y(r.complete); }
function ve(r) { return r && r instanceof sr || se(r) && yr(r); }
function Xr(r) { return y(r?.lift); }
function c(r) { return function (t) { if (Xr(t))
    return t.lift(function (e) { try {
        return r(e, this);
    }
    catch (o) {
        this.error(o);
    } }); throw new TypeError("Unable to lift unknown Observable type"); }; }
function p(r, t, e, o, n) { return new Hr(r, t, e, o, n); }
var Hr = (function (r) { F(t, r); function t(e, o, n, i, u, f) { var a = r.call(this, e) || this; return a.onFinalize = u, a.shouldUnsubscribe = f, a._next = o ? function (m) { try {
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
} }, t; })(sr);
function St() { return c(function (r, t) { var e = null; r._refCount++; var o = p(t, void 0, void 0, void 0, function () { if (!r || r._refCount <= 0 || 0 < --r._refCount) {
    e = null;
    return;
} var n = r._connection, i = e; e = null, n && (!i || n === i) && n.unsubscribe(), t.unsubscribe(); }); r.subscribe(o), o.closed || (e = r.connect()); }); }
var fr = (function (r) { F(t, r); function t(e, o) { var n = r.call(this) || this; return n.source = e, n.subjectFactory = o, n._subject = null, n._refCount = 0, n._connection = null, Xr(e) && (n.lift = e.lift), n; } return t.prototype._subscribe = function (e) { return this.getSubject().subscribe(e); }, t.prototype.getSubject = function () { var e = this._subject; return (!e || e.isStopped) && (this._subject = this.subjectFactory()), this._subject; }, t.prototype._teardown = function () { this._refCount = 0; var e = this._connection; this._subject = this._connection = null, e?.unsubscribe(); }, t.prototype.connect = function () { var e = this, o = this._connection; if (!o) {
    o = this._connection = new P;
    var n = this.getSubject();
    o.add(this.source.subscribe(p(n, void 0, function () { e._teardown(), n.complete(); }, function (i) { e._teardown(), n.error(i); }, function () { return e._teardown(); }))), o.closed && (this._connection = null, o = P.EMPTY);
} return o; }, t.prototype.refCount = function () { return St()(this); }, t; })(O);
var wt = U(function (r) { return function () { r(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"; }; });
var _ = (function (r) { F(t, r); function t() { var e = r.call(this) || this; return e.closed = !1, e.currentObservers = null, e.observers = [], e.isStopped = !1, e.hasError = !1, e.thrownError = null, e; } return t.prototype.lift = function (e) { var o = new Et(this, this); return o.operator = e, o; }, t.prototype._throwIfClosed = function () { if (this.closed)
    throw new wt; }, t.prototype.next = function (e) { var o = this; ir(function () { var n, i; if (o._throwIfClosed(), !o.isStopped) {
    o.currentObservers || (o.currentObservers = Array.from(o.observers));
    try {
        for (var u = j(o.currentObservers), f = u.next(); !f.done; f = u.next()) {
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
} }); }, t.prototype.error = function (e) { var o = this; ir(function () { if (o._throwIfClosed(), !o.isStopped) {
    o.hasError = o.isStopped = !0, o.thrownError = e;
    for (var n = o.observers; n.length;)
        n.shift().error(e);
} }); }, t.prototype.complete = function () { var e = this; ir(function () { if (e._throwIfClosed(), !e.isStopped) {
    e.isStopped = !0;
    for (var o = e.observers; o.length;)
        o.shift().complete();
} }); }, t.prototype.unsubscribe = function () { this.isStopped = this.closed = !0, this.observers = this.currentObservers = null; }, Object.defineProperty(t.prototype, "observed", { get: function () { var e; return ((e = this.observers) === null || e === void 0 ? void 0 : e.length) > 0; }, enumerable: !1, configurable: !0 }), t.prototype._trySubscribe = function (e) { return this._throwIfClosed(), r.prototype._trySubscribe.call(this, e); }, t.prototype._subscribe = function (e) { return this._throwIfClosed(), this._checkFinalizedStatuses(e), this._innerSubscribe(e); }, t.prototype._innerSubscribe = function (e) { var o = this, n = this, i = n.hasError, u = n.isStopped, f = n.observers; return i || u ? Kr : (this.currentObservers = null, f.push(e), new P(function () { o.currentObservers = null, k(f, e); })); }, t.prototype._checkFinalizedStatuses = function (e) { var o = this, n = o.hasError, i = o.thrownError, u = o.isStopped; n ? e.error(i) : u && e.complete(); }, t.prototype.asObservable = function () { var e = new O; return e.source = this, e; }, t.create = function (e, o) { return new Et(e, o); }, t; })(O);
var Et = (function (r) { F(t, r); function t(e, o) { var n = r.call(this) || this; return n.destination = e, n.source = o, n; } return t.prototype.next = function (e) { var o, n; (n = (o = this.destination) === null || o === void 0 ? void 0 : o.next) === null || n === void 0 || n.call(o, e); }, t.prototype.error = function (e) { var o, n; (n = (o = this.destination) === null || o === void 0 ? void 0 : o.error) === null || n === void 0 || n.call(o, e); }, t.prototype.complete = function () { var e, o; (o = (e = this.destination) === null || e === void 0 ? void 0 : e.complete) === null || o === void 0 || o.call(e); }, t.prototype._subscribe = function (e) { var o, n; return (n = (o = this.source) === null || o === void 0 ? void 0 : o.subscribe(e)) !== null && n !== void 0 ? n : Kr; }, t; })(_);
var Ot = (function (r) { F(t, r); function t(e) { var o = r.call(this) || this; return o._value = e, o; } return Object.defineProperty(t.prototype, "value", { get: function () { return this.getValue(); }, enumerable: !1, configurable: !0 }), t.prototype._subscribe = function (e) { var o = r.prototype._subscribe.call(this, e); return !o.closed && e.next(this._value), o; }, t.prototype.getValue = function () { var e = this, o = e.hasError, n = e.thrownError, i = e._value; if (o)
    throw n; return this._throwIfClosed(), i; }, t.prototype.next = function (e) { r.prototype.next.call(this, this._value = e); }, t; })(_);
var rr = { now: function () { return (rr.delegate || Date).now(); }, delegate: void 0 };
var wr = (function (r) { F(t, r); function t(e, o, n) { e === void 0 && (e = 1 / 0), o === void 0 && (o = 1 / 0), n === void 0 && (n = rr); var i = r.call(this) || this; return i._bufferSize = e, i._windowTime = o, i._timestampProvider = n, i._buffer = [], i._infiniteTimeWindow = !0, i._infiniteTimeWindow = o === 1 / 0, i._bufferSize = Math.max(1, e), i._windowTime = Math.max(1, o), i; } return t.prototype.next = function (e) { var o = this, n = o.isStopped, i = o._buffer, u = o._infiniteTimeWindow, f = o._timestampProvider, a = o._windowTime; n || (i.push(e), !u && i.push(f.now() + a)), this._trimBuffer(), r.prototype.next.call(this, e); }, t.prototype._subscribe = function (e) { this._throwIfClosed(), this._trimBuffer(); for (var o = this._innerSubscribe(e), n = this, i = n._infiniteTimeWindow, u = n._buffer, f = u.slice(), a = 0; a < f.length && !e.closed; a += i ? 1 : 2)
    e.next(f[a]); return this._checkFinalizedStatuses(e), o; }, t.prototype._trimBuffer = function () { var e = this, o = e._bufferSize, n = e._timestampProvider, i = e._buffer, u = e._infiniteTimeWindow, f = (u ? 1 : 2) * o; if (o < 1 / 0 && f < i.length && i.splice(0, i.length - f), !u) {
    for (var a = n.now(), m = 0, l = 1; l < i.length && i[l] <= a; l += 2)
        m = l;
    m && i.splice(0, m + 1);
} }, t; })(_);
var At = (function (r) { F(t, r); function t() { var e = r !== null && r.apply(this, arguments) || this; return e._value = null, e._hasValue = !1, e._isComplete = !1, e; } return t.prototype._checkFinalizedStatuses = function (e) { var o = this, n = o.hasError, i = o._hasValue, u = o._value, f = o.thrownError, a = o.isStopped, m = o._isComplete; n ? e.error(f) : (a || m) && (i && e.next(u), e.complete()); }, t.prototype.next = function (e) { this.isStopped || (this._value = e, this._hasValue = !0); }, t.prototype.complete = function () { var e = this, o = e._hasValue, n = e._value, i = e._isComplete; i || (this._isComplete = !0, o && r.prototype.next.call(this, n), r.prototype.complete.call(this)); }, t; })(_);
var Qr = (function () { function r(t, e) { e === void 0 && (e = r.now), this.schedulerActionCtor = t, this.now = e; } return r.prototype.schedule = function (t, e, o) { return e === void 0 && (e = 0), new this.schedulerActionCtor(this, t).schedule(o, e); }, r.now = rr.now, r; })();
var _t = (function (r) { F(t, r); function t(e, o) { return r.call(this) || this; } return t.prototype.schedule = function (e, o) { return o === void 0 && (o = 0), this; }, t; })(P);
var vr = { setInterval: function (r, t) { for (var e = [], o = 2; o < arguments.length; o++)
        e[o - 2] = arguments[o]; var n = vr.delegate; return n?.setInterval ? n.setInterval.apply(n, E([r, t], w(e))) : setInterval.apply(void 0, E([r, t], w(e))); }, clearInterval: function (r) { var t = vr.delegate; return (t?.clearInterval || clearInterval)(r); }, delegate: void 0 };
var It = (function (r) { F(t, r); function t(e, o) { var n = r.call(this, e, o) || this; return n.scheduler = e, n.work = o, n.pending = !1, n; } return t.prototype.schedule = function (e, o) { var n; if (o === void 0 && (o = 0), this.closed)
    return this; this.state = e; var i = this.id, u = this.scheduler; return i != null && (this.id = this.recycleAsyncId(u, i, o)), this.pending = !0, this.delay = o, this.id = (n = this.id) !== null && n !== void 0 ? n : this.requestAsyncId(u, this.id, o), this; }, t.prototype.requestAsyncId = function (e, o, n) { return n === void 0 && (n = 0), vr.setInterval(e.flush.bind(e, this), n); }, t.prototype.recycleAsyncId = function (e, o, n) { if (n === void 0 && (n = 0), n != null && this.delay === n && this.pending === !1)
    return o; o != null && vr.clearInterval(o); }, t.prototype.execute = function (e, o) { if (this.closed)
    return new Error("executing a cancelled action"); this.pending = !1; var n = this._execute(e, o); if (n)
    return n; this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null)); }, t.prototype._execute = function (e, o) { var n = !1, i; try {
    this.work(e);
}
catch (u) {
    n = !0, i = u || new Error("Scheduled action threw falsy error");
} if (n)
    return this.unsubscribe(), i; }, t.prototype.unsubscribe = function () { if (!this.closed) {
    var e = this, o = e.id, n = e.scheduler, i = n.actions;
    this.work = this.state = this.scheduler = null, this.pending = !1, k(i, this), o != null && (this.id = this.recycleAsyncId(n, o, null)), this.delay = null, r.prototype.unsubscribe.call(this);
} }, t; })(_t);
var Tt = (function (r) { F(t, r); function t(e, o) { o === void 0 && (o = Qr.now); var n = r.call(this, e, o) || this; return n.actions = [], n._active = !1, n; } return t.prototype.flush = function (e) { var o = this.actions; if (this._active) {
    o.push(e);
    return;
} var n; this._active = !0; do
    if (n = e.execute(e.state, e.delay))
        break;
while (e = o.shift()); if (this._active = !1, n) {
    for (; e = o.shift();)
        e.unsubscribe();
    throw n;
} }, t; })(Qr);
var R = new Tt(It), Er = R;
var Y = new O(function (r) { return r.complete(); });
function Cn(r) { return r ? de(r) : Y; }
function de(r) { return new O(function (t) { return r.schedule(function () { return t.complete(); }); }); }
function C(r, t, e, o, n) { o === void 0 && (o = 0), n === void 0 && (n = !1); var i = t.schedule(function () { e(), n ? r.add(this.schedule(null, o)) : this.unsubscribe(); }, o); if (r.add(i), !n)
    return i; }
function Or(r, t) { return t === void 0 && (t = 0), c(function (e, o) { e.subscribe(p(o, function (n) { return C(o, r, function () { return o.next(n); }, t); }, function () { return C(o, r, function () { return o.complete(); }, t); }, function (n) { return C(o, r, function () { return o.error(n); }, t); })); }); }
function Ar(r, t) { return t === void 0 && (t = 0), c(function (e, o) { o.add(r.schedule(function () { return e.subscribe(o); }, t)); }); }
var _r = function (r) { return r && typeof r.length == "number" && typeof r != "function"; };
function Ir(r) { return y(r?.then); }
function Tr(r) { return y(r[ur]); }
function Fr(r) { return Symbol.asyncIterator && y(r?.[Symbol.asyncIterator]); }
function Cr(r) { return new TypeError("You provided " + (r !== null && typeof r == "object" ? "an invalid object" : "'" + r + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable."); }
function he() { return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator; }
var jr = he();
function Rr(r) { return y(r?.[jr]); }
function Pr(r) { return st(this, arguments, function () { var e, o, n, i; return dr(this, function (u) { switch (u.label) {
    case 0: e = r.getReader(), u.label = 1;
    case 1: u.trys.push([1, , 9, 10]), u.label = 2;
    case 2: return [4, hr(e.read())];
    case 3: return o = u.sent(), n = o.value, i = o.done, i ? [4, hr(void 0)] : [3, 5];
    case 4: return [2, u.sent()];
    case 5: return [4, hr(n)];
    case 6: return [4, u.sent()];
    case 7: return u.sent(), [3, 2];
    case 8: return [3, 10];
    case 9: return e.releaseLock(), [7];
    case 10: return [2];
} }); }); }
function kr(r) { return y(r?.getReader); }
function x(r) { if (r instanceof O)
    return r; if (r != null) {
    if (Tr(r))
        return be(r);
    if (_r(r))
        return ye(r);
    if (Ir(r))
        return xe(r);
    if (Fr(r))
        return Ft(r);
    if (Rr(r))
        return ge(r);
    if (kr(r))
        return Se(r);
} throw Cr(r); }
function be(r) { return new O(function (t) { var e = r[ur](); if (y(e.subscribe))
    return e.subscribe(t); throw new TypeError("Provided object does not correctly implement Symbol.observable"); }); }
function ye(r) { return new O(function (t) { for (var e = 0; e < r.length && !t.closed; e++)
    t.next(r[e]); t.complete(); }); }
function xe(r) { return new O(function (t) { r.then(function (e) { t.closed || (t.next(e), t.complete()); }, function (e) { return t.error(e); }).then(null, xr); }); }
function ge(r) { return new O(function (t) { var e, o; try {
    for (var n = j(r), i = n.next(); !i.done; i = n.next()) {
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
function Ft(r) { return new O(function (t) { we(r, t).catch(function (e) { return t.error(e); }); }); }
function Se(r) { return Ft(Pr(r)); }
function we(r, t) { var e, o, n, i; return lt(this, void 0, void 0, function () { var u, f; return dr(this, function (a) { switch (a.label) {
    case 0: a.trys.push([0, 5, 6, 11]), e = vt(r), a.label = 1;
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
function Ct(r, t) { return x(r).pipe(Ar(t), Or(t)); }
function jt(r, t) { return x(r).pipe(Ar(t), Or(t)); }
function Rt(r, t) { return new O(function (e) { var o = 0; return t.schedule(function () { o === r.length ? e.complete() : (e.next(r[o++]), e.closed || this.schedule()); }); }); }
function Pt(r, t) { return new O(function (e) { var o; return C(e, t, function () { o = r[jr](), C(e, t, function () { var n, i, u; try {
    n = o.next(), i = n.value, u = n.done;
}
catch (f) {
    e.error(f);
    return;
} u ? e.complete() : e.next(i); }, 0, !0); }), function () { return y(o?.return) && o.return(); }; }); }
function Mr(r, t) { if (!r)
    throw new Error("Iterable cannot be null"); return new O(function (e) { C(e, t, function () { var o = r[Symbol.asyncIterator](); C(e, t, function () { o.next().then(function (n) { n.done ? e.complete() : e.next(n.value); }); }, 0, !0); }); }); }
function kt(r, t) { return Mr(Pr(r), t); }
function Mt(r, t) { if (r != null) {
    if (Tr(r))
        return Ct(r, t);
    if (_r(r))
        return Rt(r, t);
    if (Ir(r))
        return jt(r, t);
    if (Fr(r))
        return Mr(r, t);
    if (Rr(r))
        return Pt(r, t);
    if (kr(r))
        return kt(r, t);
} throw Cr(r); }
function q(r, t) { return t ? Mt(r, t) : x(r); }
function Vr(r) { return r && y(r.schedule); }
function rt(r) { return r[r.length - 1]; }
function K(r) { return y(rt(r)) ? r.pop() : void 0; }
function M(r) { return Vr(rt(r)) ? r.pop() : void 0; }
function Vt(r, t) { return typeof rt(r) == "number" ? r.pop() : t; }
function Lr() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = M(r); return q(r, e); }
function Lt(r, t) { var e = y(r) ? r : function () { return r; }, o = function (n) { return n.error(e()); }; return new O(t ? function (n) { return t.schedule(o, 0, n); } : o); }
var Ee = (function (r) { return r.NEXT = "N", r.ERROR = "E", r.COMPLETE = "C", r; })(Ee || {}), Ur = (function () { function r(t, e, o) { this.kind = t, this.value = e, this.error = o, this.hasValue = t === "N"; } return r.prototype.observe = function (t) { return tt(this, t); }, r.prototype.do = function (t, e, o) { var n = this, i = n.kind, u = n.value, f = n.error; return i === "N" ? t?.(u) : i === "E" ? e?.(f) : o?.(); }, r.prototype.accept = function (t, e, o) { var n; return y((n = t) === null || n === void 0 ? void 0 : n.next) ? this.observe(t) : this.do(t, e, o); }, r.prototype.toObservable = function () { var t = this, e = t.kind, o = t.value, n = t.error, i = e === "N" ? Lr(o) : e === "E" ? Lt(function () { return n; }) : e === "C" ? Y : 0; if (!i)
    throw new TypeError("Unexpected notification kind " + e); return i; }, r.createNext = function (t) { return new r("N", t); }, r.createError = function (t) { return new r("E", void 0, t); }, r.createComplete = function () { return r.completeNotification; }, r.completeNotification = new r("C"), r; })();
function tt(r, t) { var e, o, n, i = r, u = i.kind, f = i.value, a = i.error; if (typeof u != "string")
    throw new TypeError('Invalid notification, missing "kind"'); u === "N" ? (e = t.next) === null || e === void 0 || e.call(t, f) : u === "E" ? (o = t.error) === null || o === void 0 || o.call(t, a) : (n = t.complete) === null || n === void 0 || n.call(t); }
var Z = U(function (r) { return function () { r(this), this.name = "EmptyError", this.message = "no elements in sequence"; }; });
var et = U(function (r) { return function () { r(this), this.name = "ArgumentOutOfRangeError", this.message = "argument out of range"; }; });
var Ut = U(function (r) { return function (e) { r(this), this.name = "NotFoundError", this.message = e; }; });
var Nt = U(function (r) { return function (e) { r(this), this.name = "SequenceError", this.message = e; }; });
function ar(r) { return r instanceof Date && !isNaN(r); }
var Oe = U(function (r) { return function (e) { e === void 0 && (e = null), r(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = e; }; });
function Wt(r, t) { var e = ar(r) ? { first: r } : typeof r == "number" ? { each: r } : r, o = e.first, n = e.each, i = e.with, u = i === void 0 ? Ae : i, f = e.scheduler, a = f === void 0 ? t ?? R : f, m = e.meta, l = m === void 0 ? null : m; if (o == null && n == null)
    throw new TypeError("No timeout provided."); return c(function (s, v) { var g, d, b = null, h = 0, S = function (T) { d = C(v, a, function () { try {
    g.unsubscribe(), x(u({ meta: l, lastValue: b, seen: h })).subscribe(v);
}
catch (L) {
    v.error(L);
} }, T); }; g = s.subscribe(p(v, function (T) { d?.unsubscribe(), h++, v.next(b = T), n > 0 && S(n); }, void 0, void 0, function () { d?.closed || d?.unsubscribe(), b = null; })), !h && S(o != null ? typeof o == "number" ? o : +o - a.now() : n); }); }
function Ae(r) { throw new Oe(r); }
function N(r, t) { return c(function (e, o) { var n = 0; e.subscribe(p(o, function (i) { o.next(r.call(t, i, n++)); })); }); }
var _e = Array.isArray, Ie = Object.getPrototypeOf, Te = Object.prototype, Fe = Object.keys;
function Dt(r) { if (r.length === 1) {
    var t = r[0];
    if (_e(t))
        return { args: t, keys: null };
    if (Ce(t)) {
        var e = Fe(t);
        return { args: e.map(function (o) { return t[o]; }), keys: e };
    }
} return { args: r, keys: null }; }
function Ce(r) { return r && typeof r == "object" && Ie(r) === Te; }
var je = Array.isArray;
function Re(r, t) { return je(t) ? r.apply(void 0, E([], w(t))) : r(t); }
function cr(r) { return N(function (t) { return Re(r, t); }); }
function Yt(r, t) { return r.reduce(function (e, o, n) { return e[o] = t[n], e; }, {}); }
function zt() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = M(r), o = K(r), n = Dt(r), i = n.args, u = n.keys; if (i.length === 0)
    return q([], e); var f = new O(ot(i, e, u ? function (a) { return Yt(u, a); } : I)); return o ? f.pipe(cr(o)) : f; }
function ot(r, t, e) { return e === void 0 && (e = I), function (o) { qt(t, function () { for (var n = r.length, i = new Array(n), u = n, f = n, a = function (l) { qt(t, function () { var s = q(r[l], t), v = !1; s.subscribe(p(o, function (g) { i[l] = g, v || (v = !0, f--), f || o.next(e(i.slice())); }, function () { --u || o.complete(); })); }, o); }, m = 0; m < n; m++)
    a(m); }, o); }; }
function qt(r, t, e) { r ? C(e, r, t) : t(); }
function pr(r, t, e, o, n, i, u, f) { var a = [], m = 0, l = 0, s = !1, v = function () { s && !a.length && !m && t.complete(); }, g = function (b) { return m < o ? d(b) : a.push(b); }, d = function (b) { i && t.next(b), m++; var h = !1; x(e(b, l++)).subscribe(p(t, function (S) { n?.(S), i ? g(S) : t.next(S); }, function () { h = !0; }, void 0, function () { if (h)
    try {
        m--;
        for (var S = function () { var T = a.shift(); u ? C(t, u, function () { return d(T); }) : d(T); }; a.length && m < o;)
            S();
        v();
    }
    catch (T) {
        t.error(T);
    } })); }; return r.subscribe(p(t, g, function () { s = !0, v(); })), function () { f?.(); }; }
function V(r, t, e) { return e === void 0 && (e = 1 / 0), y(t) ? V(function (o, n) { return N(function (i, u) { return t(o, i, n, u); })(x(r(o, n))); }, e) : (typeof t == "number" && (e = t), c(function (o, n) { return pr(o, n, r, e); })); }
function Nr(r) { return r === void 0 && (r = 1 / 0), V(I, r); }
function Wr() { return Nr(1); }
function tr() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return Wr()(q(r, M(r))); }
function W(r, t, e) { r === void 0 && (r = 0), e === void 0 && (e = Er); var o = -1; return t != null && (Vr(t) ? e = t : o = t), new O(function (n) { var i = ar(r) ? +r - e.now() : r; i < 0 && (i = 0); var u = 0; return e.schedule(function () { n.closed || (n.next(u++), 0 <= o ? this.schedule(void 0, o) : n.complete()); }, i); }); }
function Gt(r, t) { return r === void 0 && (r = 0), t === void 0 && (t = R), r < 0 && (r = 0), W(r, r, t); }
var Pe = Array.isArray;
function z(r) { return r.length === 1 && Pe(r[0]) ? r[0] : r; }
function Cf() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = z(r); return c(function (o, n) { var i = E([o], w(e)), u = function () { if (!n.closed)
    if (i.length > 0) {
        var f = void 0;
        try {
            f = x(i.shift());
        }
        catch {
            u();
            return;
        }
        var a = p(n, void 0, A, A);
        f.subscribe(a), a.add(u);
    }
    else
        n.complete(); }; u(); }); }
function $(r, t) { return c(function (e, o) { var n = 0; e.subscribe(p(o, function (i) { return r.call(t, i, n++) && o.next(i); })); }); }
function Nf() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return r = z(r), r.length === 1 ? x(r[0]) : new O(nt(r)); }
function nt(r) { return function (t) { for (var e = [], o = function (i) { e.push(x(r[i]).subscribe(p(t, function (u) { if (e) {
    for (var f = 0; f < e.length; f++)
        f !== i && e[f].unsubscribe();
    e = null;
} t.next(u); }))); }, n = 0; e && !t.closed && n < r.length; n++)
    o(n); }; }
function Dr() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = K(r), o = z(r); return o.length ? new O(function (n) { var i = o.map(function () { return []; }), u = o.map(function () { return !1; }); n.add(function () { i = u = null; }); for (var f = function (m) { x(o[m]).subscribe(p(n, function (l) { if (i[m].push(l), i.every(function (v) { return v.length; })) {
    var s = i.map(function (v) { return v.shift(); });
    n.next(e ? e.apply(void 0, E([], w(s))) : s), i.some(function (v, g) { return !v.length && u[g]; }) && n.complete();
} }, function () { u[m] = !0, !i[m].length && n.complete(); })); }, a = 0; !n.closed && a < o.length; a++)
    f(a); return function () { i = u = null; }; }) : Y; }
function Kt(r) { return c(function (t, e) { var o = !1, n = null, i = null, u = !1, f = function () { if (i?.unsubscribe(), i = null, o) {
    o = !1;
    var m = n;
    n = null, e.next(m);
} u && e.complete(); }, a = function () { i = null, u && e.complete(); }; t.subscribe(p(e, function (m) { o = !0, n = m, i || x(r(m)).subscribe(i = p(e, f, a)); }, function () { u = !0, (!o || !i || i.closed) && e.complete(); })); }); }
function ea(r, t) { return t === void 0 && (t = R), Kt(function () { return W(r, t); }); }
function fa(r) { return c(function (t, e) { var o = []; return t.subscribe(p(e, function (n) { return o.push(n); }, function () { e.next(o), e.complete(); })), r.subscribe(p(e, function () { var n = o; o = [], e.next(n); }, A)), function () { o = null; }; }); }
function sa(r, t) { return t === void 0 && (t = null), t = t ?? r, c(function (e, o) { var n = [], i = 0; e.subscribe(p(o, function (u) { var f, a, m, l, s = null; i++ % t === 0 && n.push([]); try {
    for (var v = j(n), g = v.next(); !g.done; g = v.next()) {
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
        for (var b = j(s), h = b.next(); !h.done; h = b.next()) {
            var d = h.value;
            k(n, d), o.next(d);
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
    for (var a = j(n), m = a.next(); !m.done; m = a.next()) {
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
function Ea(r) { for (var t, e, o = [], n = 1; n < arguments.length; n++)
    o[n - 1] = arguments[n]; var i = (t = M(o)) !== null && t !== void 0 ? t : R, u = (e = o[0]) !== null && e !== void 0 ? e : null, f = o[1] || 1 / 0; return c(function (a, m) { var l = [], s = !1, v = function (b) { var h = b.buffer, S = b.subs; S.unsubscribe(), k(l, b), m.next(h), s && g(); }, g = function () { if (l) {
    var b = new P;
    m.add(b);
    var h = [], S = { buffer: h, subs: b };
    l.push(S), C(b, i, function () { return v(S); }, r);
} }; u !== null && u >= 0 ? C(m, i, g, u, !0) : s = !0, g(); var d = p(m, function (b) { var h, S, T = l.slice(); try {
    for (var L = j(T), G = L.next(); !G.done; G = L.next()) {
        var J = G.value, X = J.buffer;
        X.push(b), f <= X.length && v(J);
    }
}
catch (ae) {
    h = { error: ae };
}
finally {
    try {
        G && !G.done && (S = L.return) && S.call(L);
    }
    finally {
        if (h)
            throw h.error;
    }
} }, function () { for (; l?.length;)
    m.next(l.shift().buffer); d?.unsubscribe(), m.complete(), m.unsubscribe(); }, void 0, function () { return l = null; }); a.subscribe(d); }); }
function Ra(r, t) { return c(function (e, o) { var n = []; x(r).subscribe(p(o, function (i) { var u = []; n.push(u); var f = new P, a = function () { k(n, u), o.next(u), f.unsubscribe(); }; f.add(x(t(i)).subscribe(p(o, a, A))); }, A)), e.subscribe(p(o, function (i) { var u, f; try {
    for (var a = j(n), m = a.next(); !m.done; m = a.next()) {
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
function Ua(r) { return c(function (t, e) { var o = null, n = null, i = function () { n?.unsubscribe(); var u = o; o = [], u && e.next(u), x(r()).subscribe(n = p(e, i, A)); }; i(), t.subscribe(p(e, function (u) { return o?.push(u); }, function () { o && e.next(o), e.complete(); }, void 0, function () { return o = n = null; })); }); }
function ke(r) { return c(function (t, e) { var o = null, n = !1, i; o = t.subscribe(p(e, void 0, void 0, function (u) { i = x(r(u, ke(r)(t))), o ? (o.unsubscribe(), o = null, i.subscribe(e)) : n = !0; })), n && (o.unsubscribe(), o = null, i.subscribe(e)); }); }
function Yr(r, t, e, o, n) { return function (i, u) { var f = e, a = t, m = 0; i.subscribe(p(u, function (l) { var s = m++; a = f ? r(a, l, s) : (f = !0, l), o && u.next(a); }, n && function () { f && u.next(a), u.complete(); })); }; }
function B(r, t) { return c(Yr(r, t, arguments.length >= 2, !1, !0)); }
var Me = function (r, t) { return r.push(t), r; };
function Zt() { return c(function (r, t) { B(Me, [])(r).subscribe(t); }); }
function qr(r, t) { return Sr(Zt(), V(function (e) { return r(e); }), t ? cr(t) : I); }
function $t(r) { return qr(zt, r); }
var ac = $t;
function it() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = K(r); return e ? Sr(it.apply(void 0, E([], w(r))), cr(e)) : c(function (o, n) { ot(E([o], w(z(r))))(n); }); }
function gc() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return it.apply(void 0, E([], w(r))); }
function ut(r, t) { return y(t) ? V(r, t, 1) : V(r, 1); }
function Ic(r, t) { return y(t) ? ut(function () { return r; }, t) : ut(function () { return r; }); }
function Bt() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = M(r); return c(function (o, n) { Wr()(q(E([o], w(r)), e)).subscribe(n); }); }
function Lc() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return Bt.apply(void 0, E([], w(r))); }
function Jt(r) { return new O(function (t) { return r.subscribe(t); }); }
var Ve = { connector: function () { return new _; } };
function zr(r, t) { t === void 0 && (t = Ve); var e = t.connector; return c(function (o, n) { var i = e(); x(r(Jt(i))).subscribe(n), n.add(o.subscribe(i)); }); }
function Zc(r) { return B(function (t, e, o) { return !r || r(e, o) ? t + 1 : t; }, 0); }
function Qc(r) { return c(function (t, e) { var o = !1, n = null, i = null, u = function () { if (i?.unsubscribe(), i = null, o) {
    o = !1;
    var f = n;
    n = null, e.next(f);
} }; t.subscribe(p(e, function (f) { i?.unsubscribe(), o = !0, n = f, i = p(e, u, A), x(r(f)).subscribe(i); }, function () { u(), e.complete(); }, void 0, function () { n = i = null; })); }); }
function np(r, t) { return t === void 0 && (t = R), c(function (e, o) { var n = null, i = null, u = null, f = function () { if (n) {
    n.unsubscribe(), n = null;
    var m = i;
    i = null, o.next(m);
} }; function a() { var m = u + r, l = t.now(); if (l < m) {
    n = this.schedule(void 0, m - l), o.add(n);
    return;
} f(); } e.subscribe(p(o, function (m) { i = m, u = t.now(), n || (n = t.schedule(a, r), o.add(n)); }, function () { f(), o.complete(); }, void 0, function () { i = n = null; })); }); }
function mr(r) { return c(function (t, e) { var o = !1; t.subscribe(p(e, function (n) { o = !0, e.next(n); }, function () { o || e.next(r), e.complete(); })); }); }
function er(r) { return r <= 0 ? function () { return Y; } : c(function (t, e) { var o = 0; t.subscribe(p(e, function (n) { ++o <= r && (e.next(n), r <= o && e.complete()); })); }); }
function Xt() { return c(function (r, t) { r.subscribe(p(t, A)); }); }
function Ht(r) { return N(function () { return r; }); }
function ft(r, t) { return t ? function (e) { return tr(t.pipe(er(1), Xt()), e.pipe(ft(r))); } : V(function (e, o) { return r(e, o).pipe(er(1), Ht(e)); }); }
function Tp(r, t) { t === void 0 && (t = R); var e = W(r, t); return ft(function () { return e; }); }
function Pp() { return c(function (r, t) { r.subscribe(p(t, function (e) { return tt(e, t); })); }); }
function Up(r, t) { return c(function (e, o) { var n = new Set; e.subscribe(p(o, function (i) { var u = r ? r(i) : i; n.has(u) || (n.add(u), o.next(i)); })), t?.subscribe(p(o, function () { return n.clear(); }, A)); }); }
function Qt(r, t) { return t === void 0 && (t = I), r = r ?? Le, c(function (e, o) { var n, i = !0; e.subscribe(p(o, function (u) { var f = t(u); (i || !r(n, f)) && (i = !1, n = f, o.next(u)); })); }); }
function Le(r, t) { return r === t; }
function Gp(r, t) { return Qt(function (e, o) { return t ? t(e[r], o[r]) : e[r] === o[r]; }); }
function lr(r) { return r === void 0 && (r = Ue), c(function (t, e) { var o = !1; t.subscribe(p(e, function (n) { o = !0, e.next(n); }, function () { return o ? e.complete() : e.error(r()); })); }); }
function Ue() { return new Z; }
function em(r, t) { if (r < 0)
    throw new et; var e = arguments.length >= 2; return function (o) { return o.pipe($(function (n, i) { return i === r; }), er(1), e ? mr(t) : lr(function () { return new et; })); }; }
function fm() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return function (e) { return tr(e, Lr.apply(void 0, E([], w(r)))); }; }
function mm(r, t) { return c(function (e, o) { var n = 0; e.subscribe(p(o, function (i) { r.call(t, i, n++, e) || (o.next(!1), o.complete()); }, function () { o.next(!0), o.complete(); })); }); }
function at(r, t) { return t ? function (e) { return e.pipe(at(function (o, n) { return x(r(o, n)).pipe(N(function (i, u) { return t(o, i, n, u); })); })); } : c(function (e, o) { var n = 0, i = null, u = !1; e.subscribe(p(o, function (f) { i || (i = p(o, void 0, function () { i = null, u && o.complete(); }), x(r(f, n++)).subscribe(i)); }, function () { u = !0, !i && o.complete(); })); }); }
function re() { return at(I); }
var wm = re;
function _m(r, t, e) { return t === void 0 && (t = 1 / 0), t = (t || 0) < 1 ? 1 / 0 : t, c(function (o, n) { return pr(o, n, r, t, void 0, !0, e); }); }
function Fm(r) { return c(function (t, e) { try {
    t.subscribe(e);
}
finally {
    e.add(r);
} }); }
function Pm(r, t) { return c(ct(r, t, "value")); }
function ct(r, t, e) { var o = e === "index"; return function (n, i) { var u = 0; n.subscribe(p(i, function (f) { var a = u++; r.call(t, f, a, n) && (i.next(o ? a : f), i.complete()); }, function () { i.next(o ? -1 : void 0), i.complete(); })); }; }
function Lm(r, t) { return c(ct(r, t, "index")); }
function Gm(r, t) { var e = arguments.length >= 2; return function (o) { return o.pipe(r ? $(function (n, i) { return r(n, i, o); }) : I, er(1), e ? mr(t) : lr(function () { return new Z; })); }; }
function Hm(r, t, e, o) { return c(function (n, i) { var u; !t || typeof t == "function" ? u = t : (e = t.duration, u = t.element, o = t.connector); var f = new Map, a = function (d) { f.forEach(d), d(i); }, m = function (d) { return a(function (b) { return b.error(d); }); }, l = 0, s = !1, v = new Hr(i, function (d) { try {
    var b = r(d), h = f.get(b);
    if (!h) {
        f.set(b, h = o ? o() : new _);
        var S = g(b, h);
        if (i.next(S), e) {
            var T = p(h, function () { h.complete(), T?.unsubscribe(); }, void 0, void 0, function () { return f.delete(b); });
            v.add(x(e(S)).subscribe(T));
        }
    }
    h.next(u ? u(d) : d);
}
catch (L) {
    m(L);
} }, function () { return a(function (d) { return d.complete(); }); }, m, function () { return f.clear(); }, function () { return s = !0, l === 0; }); n.subscribe(v); function g(d, b) { var h = new O(function (S) { l++; var T = b.subscribe(S); return function () { T.unsubscribe(), --l === 0 && s && v.unsubscribe(); }; }); return h.key = d, h; } }); }
function el() { return c(function (r, t) { r.subscribe(p(t, function () { t.next(!1), t.complete(); }, function () { t.next(!0), t.complete(); })); }); }
function te(r) { return r <= 0 ? function () { return Y; } : c(function (t, e) { var o = []; t.subscribe(p(e, function (n) { o.push(n), r < o.length && o.shift(); }, function () { var n, i; try {
    for (var u = j(o), f = u.next(); !f.done; f = u.next()) {
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
function dl(r, t) { var e = arguments.length >= 2; return function (o) { return o.pipe(r ? $(function (n, i) { return r(n, i, o); }) : I, te(1), e ? mr(t) : lr(function () { return new Z; })); }; }
function gl() { return c(function (r, t) { r.subscribe(p(t, function (e) { t.next(Ur.createNext(e)); }, function () { t.next(Ur.createComplete()), t.complete(); }, function (e) { t.next(Ur.createError(e)), t.complete(); })); }); }
function Ol(r) { return B(y(r) ? function (t, e) { return r(t, e) > 0 ? t : e; } : function (t, e) { return t > e ? t : e; }); }
var Il = V;
function jl(r, t, e) { return e === void 0 && (e = 1 / 0), y(t) ? V(function () { return r; }, t, e) : (typeof t == "number" && (e = t), V(function () { return r; }, e)); }
function Ml(r, t, e) { return e === void 0 && (e = 1 / 0), c(function (o, n) { var i = t; return pr(o, n, function (u, f) { return r(i, u, f); }, e, function (u) { i = u; }, !1, void 0, function () { return i = null; }); }); }
function ee() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = M(r), o = Vt(r, 1 / 0); return r = z(r), c(function (n, i) { Nr(o)(q(E([n], w(r)), e)).subscribe(i); }); }
function Kl() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return ee.apply(void 0, E([], w(r))); }
function Jl(r) { return B(y(r) ? function (t, e) { return r(t, e) < 0 ? t : e; } : function (t, e) { return t < e ? t : e; }); }
function Gr(r, t) { var e = y(r) ? r : function () { return r; }; return y(t) ? zr(t, { connector: e }) : function (o) { return new fr(o, e); }; }
function ns() { return c(function (r, t) { var e, o = !1; r.subscribe(p(t, function (n) { var i = e; e = n, o && t.next([i, n]), o = !0; })); }); }
function fs() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = r.length; if (e === 0)
    throw new Error("list of properties cannot be empty."); return N(function (o) { for (var n = o, i = 0; i < e; i++) {
    var u = n?.[r[i]];
    if (typeof u < "u")
        n = u;
    else
        return;
} return n; }); }
function ls(r) { return r ? function (t) { return zr(r)(t); } : function (t) { return Gr(new _)(t); }; }
function hs(r) { return function (t) { var e = new Ot(r); return new fr(t, function () { return e; }); }; }
function gs() { return function (r) { var t = new At; return new fr(r, function () { return t; }); }; }
function As(r, t, e, o) { e && !y(e) && (o = e); var n = y(e) ? e : void 0; return function (i) { return Gr(new wr(r, t, o), n)(i); }; }
function js() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return r.length ? c(function (e, o) { nt(E([e], w(r)))(o); }) : I; }
function Us(r) { var t, e = 1 / 0, o; return r != null && (typeof r == "object" ? (t = r.count, e = t === void 0 ? 1 / 0 : t, o = r.delay) : e = r), e <= 0 ? function () { return Y; } : c(function (n, i) { var u = 0, f, a = function () { if (f?.unsubscribe(), f = null, o != null) {
    var l = typeof o == "number" ? W(o) : x(o(u)), s = p(i, function () { s.unsubscribe(), m(); });
    l.subscribe(s);
}
else
    m(); }, m = function () { var l = !1; f = n.subscribe(p(i, void 0, function () { ++u < e ? f ? a() : l = !0 : i.complete(); })), l && a(); }; m(); }); }
function qs(r) { return c(function (t, e) { var o, n = !1, i, u = !1, f = !1, a = function () { return f && u && (e.complete(), !0); }, m = function () { return i || (i = new _, r(i).subscribe(p(e, function () { o ? l() : n = !0; }, function () { u = !0, a(); }))), i; }, l = function () { f = !1, o = t.subscribe(p(e, void 0, function () { f = !0, !a() && m().next(); })), n && (o.unsubscribe(), o = null, n = !1, l()); }; l(); }); }
function Js(r) { r === void 0 && (r = 1 / 0); var t; r && typeof r == "object" ? t = r : t = { count: r }; var e = t.count, o = e === void 0 ? 1 / 0 : e, n = t.delay, i = t.resetOnSuccess, u = i === void 0 ? !1 : i; return o <= 0 ? I : c(function (f, a) { var m = 0, l, s = function () { var v = !1; l = f.subscribe(p(a, function (g) { u && (m = 0), a.next(g); }, void 0, function (g) { if (m++ < o) {
    var d = function () { l ? (l.unsubscribe(), l = null, s()) : v = !0; };
    if (n != null) {
        var b = typeof n == "number" ? W(n) : x(n(g, m)), h = p(a, function () { h.unsubscribe(), d(); }, function () { a.complete(); });
        b.subscribe(h);
    }
    else
        d();
}
else
    a.error(g); })), v && (l.unsubscribe(), l = null, s()); }; s(); }); }
function tv(r) { return c(function (t, e) { var o, n = !1, i, u = function () { o = t.subscribe(p(e, void 0, void 0, function (f) { i || (i = new _, r(i).subscribe(p(e, function () { return o ? u() : n = !0; }))), i && i.next(f); })), n && (o.unsubscribe(), o = null, n = !1, u()); }; u(); }); }
function oe(r) { return c(function (t, e) { var o = !1, n = null; t.subscribe(p(e, function (i) { o = !0, n = i; })), r.subscribe(p(e, function () { if (o) {
    o = !1;
    var i = n;
    n = null, e.next(i);
} }, A)); }); }
function pv(r, t) { return t === void 0 && (t = R), oe(Gt(r, t)); }
function vv(r, t) { return c(Yr(r, t, arguments.length >= 2, !0)); }
function yv(r, t) { return t === void 0 && (t = function (e, o) { return e === o; }), c(function (e, o) { var n = ne(), i = ne(), u = function (a) { o.next(a), o.complete(); }, f = function (a, m) { var l = p(o, function (s) { var v = m.buffer, g = m.complete; v.length === 0 ? g ? u(!1) : a.buffer.push(s) : !t(s, v.shift()) && u(!1); }, function () { a.complete = !0; var s = m.complete, v = m.buffer; s && u(v.length === 0), l?.unsubscribe(); }); return l; }; e.subscribe(f(n, i)), r.subscribe(f(i, n)); }); }
function ne() { return { buffer: [], complete: !1 }; }
function ie(r) { r === void 0 && (r = {}); var t = r.connector, e = t === void 0 ? function () { return new _; } : t, o = r.resetOnError, n = o === void 0 ? !0 : o, i = r.resetOnComplete, u = i === void 0 ? !0 : i, f = r.resetOnRefCountZero, a = f === void 0 ? !0 : f; return function (m) { var l, s, v, g = 0, d = !1, b = !1, h = function () { s?.unsubscribe(), s = void 0; }, S = function () { h(), l = v = void 0, d = b = !1; }, T = function () { var L = l; S(), L?.unsubscribe(); }; return c(function (L, G) { g++, !b && !d && h(); var J = v = v ?? e(); G.add(function () { g--, g === 0 && !b && !d && (s = pt(T, a)); }), J.subscribe(G), !l && g > 0 && (l = new Q({ next: function (X) { return J.next(X); }, error: function (X) { b = !0, h(), s = pt(S, n, X), J.error(X); }, complete: function () { d = !0, h(), s = pt(S, u), J.complete(); } }), x(L).subscribe(l)); })(m); }; }
function pt(r, t) { for (var e = [], o = 2; o < arguments.length; o++)
    e[o - 2] = arguments[o]; if (t === !0) {
    r();
    return;
} if (t !== !1) {
    var n = new Q({ next: function () { n.unsubscribe(), r(); } });
    return t.apply(void 0, E([], w(e))).subscribe(n);
} }
function Tv(r, t, e) { var o, n, i, u, f = !1; return r && typeof r == "object" ? (o = r.bufferSize, u = o === void 0 ? 1 / 0 : o, n = r.windowTime, t = n === void 0 ? 1 / 0 : n, i = r.refCount, f = i === void 0 ? !1 : i, e = r.scheduler) : u = r ?? 1 / 0, ie({ connector: function () { return new wr(u, t, e); }, resetOnError: !0, resetOnComplete: !1, resetOnRefCountZero: f }); }
function Mv(r) { return c(function (t, e) { var o = !1, n, i = !1, u = 0; t.subscribe(p(e, function (f) { i = !0, (!r || r(f, u++, t)) && (o && e.error(new Nt("Too many matching values")), o = !0, n = f); }, function () { o ? (e.next(n), e.complete()) : e.error(i ? new Ut("No matching values") : new Z); })); }); }
function Uv(r) { return $(function (t, e) { return r <= e; }); }
function qv(r) { return r <= 0 ? I : c(function (t, e) { var o = new Array(r), n = 0; return t.subscribe(p(e, function (i) { var u = n++; if (u < r)
    o[u] = i;
else {
    var f = u % r, a = o[f];
    o[f] = i, e.next(a);
} })), function () { o = null; }; }); }
function Bv(r) { return c(function (t, e) { var o = !1, n = p(e, function () { n?.unsubscribe(), o = !0; }, A); x(r).subscribe(n), t.subscribe(p(e, function (i) { return o && e.next(i); })); }); }
function Qv(r) { return c(function (t, e) { var o = !1, n = 0; t.subscribe(p(e, function (i) { return (o || (o = !r(i, n++))) && e.next(i); })); }); }
function nd() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = M(r); return c(function (o, n) { (e ? tr(r, o, e) : tr(r, o)).subscribe(n); }); }
function or(r, t) { return c(function (e, o) { var n = null, i = 0, u = !1, f = function () { return u && !n && o.complete(); }; e.subscribe(p(o, function (a) { n?.unsubscribe(); var m = 0, l = i++; x(r(a, l)).subscribe(n = p(o, function (s) { return o.next(t ? t(a, s, l, m++) : s); }, function () { n = null, f(); })); }, function () { u = !0, f(); })); }); }
function ld() { return or(I); }
function hd(r, t) { return y(t) ? or(function () { return r; }, t) : or(function () { return r; }); }
function gd(r, t) { return c(function (e, o) { var n = t; return or(function (i, u) { return r(n, i, u); }, function (i, u) { return n = u, u; })(e).subscribe(o), function () { n = null; }; }); }
function _d(r) { return c(function (t, e) { x(r).subscribe(p(e, function () { return e.complete(); }, A)), !e.closed && t.subscribe(e); }); }
function Cd(r, t) { return t === void 0 && (t = !1), c(function (e, o) { var n = 0; e.subscribe(p(o, function (i) { var u = r(i, n++); (u || t) && o.next(i), !u && o.complete(); })); }); }
function Vd(r, t, e) { var o = y(r) || t || e ? { next: r, error: t, complete: e } : r; return o ? c(function (n, i) { var u; (u = o.subscribe) === null || u === void 0 || u.call(o); var f = !0; n.subscribe(p(i, function (a) { var m; (m = o.next) === null || m === void 0 || m.call(o, a), i.next(a); }, function () { var a; f = !1, (a = o.complete) === null || a === void 0 || a.call(o), i.complete(); }, function (a) { var m; f = !1, (m = o.error) === null || m === void 0 || m.call(o, a), i.error(a); }, function () { var a, m; f && ((a = o.unsubscribe) === null || a === void 0 || a.call(o)), (m = o.finalize) === null || m === void 0 || m.call(o); })); }) : I; }
var mt = { leading: !0, trailing: !1 };
function ue(r, t) { return t === void 0 && (t = mt), c(function (e, o) { var n = t.leading, i = t.trailing, u = !1, f = null, a = null, m = !1, l = function () { a?.unsubscribe(), a = null, i && (g(), m && o.complete()); }, s = function () { a = null, m && o.complete(); }, v = function (d) { return a = x(r(d)).subscribe(p(o, l, s)); }, g = function () { if (u) {
    u = !1;
    var d = f;
    f = null, o.next(d), !m && v(d);
} }; e.subscribe(p(o, function (d) { u = !0, f = d, !(a && !a.closed) && (n ? g() : v(d)); }, function () { m = !0, !(i && u && a && !a.closed) && o.complete(); })); }); }
function Gd(r, t, e) { t === void 0 && (t = R), e === void 0 && (e = mt); var o = W(r, t); return ue(function () { return o; }, e); }
function Jd(r) { return r === void 0 && (r = R), c(function (t, e) { var o = r.now(); t.subscribe(p(e, function (n) { var i = r.now(), u = i - o; o = i, e.next(new Ne(n, u)); })); }); }
var Ne = (function () { function r(t, e) { this.value = t, this.interval = e; } return r; })();
function th(r, t, e) { var o, n, i; if (e = e ?? Er, ar(r) ? o = r : typeof r == "number" && (n = r), t)
    i = function () { return t; };
else
    throw new TypeError("No observable provided to switch to"); if (o == null && n == null)
    throw new TypeError("No timeout provided."); return Wt({ first: o, each: n, scheduler: e, with: i }); }
function ih(r) { return r === void 0 && (r = rr), N(function (t) { return { value: t, timestamp: r.now() }; }); }
function mh(r) { return c(function (t, e) { var o = new _; e.next(o.asObservable()); var n = function (i) { o.error(i), e.error(i); }; return t.subscribe(p(e, function (i) { return o?.next(i); }, function () { o.complete(), e.complete(); }, n)), r.subscribe(p(e, function () { o.complete(), e.next(o = new _); }, A, n)), function () { o?.unsubscribe(), o = null; }; }); }
function bh(r, t) { t === void 0 && (t = 0); var e = t > 0 ? t : r; return c(function (o, n) { var i = [new _], u = [], f = 0; n.next(i[0].asObservable()), o.subscribe(p(n, function (a) { var m, l; try {
    for (var s = j(i), v = s.next(); !v.done; v = s.next()) {
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
    var b = new _;
    i.push(b), n.next(b.asObservable());
} }, function () { for (; i.length > 0;)
    i.shift().complete(); n.complete(); }, function (a) { for (; i.length > 0;)
    i.shift().error(a); n.error(a); }, function () { u = null, i = null; })); }); }
function Ih(r) { for (var t, e, o = [], n = 1; n < arguments.length; n++)
    o[n - 1] = arguments[n]; var i = (t = M(o)) !== null && t !== void 0 ? t : R, u = (e = o[0]) !== null && e !== void 0 ? e : null, f = o[1] || 1 / 0; return c(function (a, m) { var l = [], s = !1, v = function (h) { var S = h.window, T = h.subs; S.complete(), T.unsubscribe(), k(l, h), s && g(); }, g = function () { if (l) {
    var h = new P;
    m.add(h);
    var S = new _, T = { window: S, subs: h, seen: 0 };
    l.push(T), m.next(S.asObservable()), C(h, i, function () { return v(T); }, r);
} }; u !== null && u >= 0 ? C(m, i, g, u, !0) : s = !0, g(); var d = function (h) { return l.slice().forEach(h); }, b = function (h) { d(function (S) { var T = S.window; return h(T); }), h(m), m.unsubscribe(); }; return a.subscribe(p(m, function (h) { d(function (S) { S.window.next(h), f <= ++S.seen && v(S); }); }, function () { return b(function (h) { return h.complete(); }); }, function (h) { return b(function (S) { return S.error(h); }); })), function () { l = null; }; }); }
function Lh(r, t) { return c(function (e, o) { var n = [], i = function (u) { for (; 0 < n.length;)
    n.shift().error(u); o.error(u); }; x(r).subscribe(p(o, function (u) { var f = new _; n.push(f); var a = new P, m = function () { k(n, f), f.complete(), a.unsubscribe(); }, l; try {
    l = x(t(u));
}
catch (s) {
    i(s);
    return;
} o.next(f.asObservable()), a.add(l.subscribe(p(o, m, A, i))); }, A)), e.subscribe(p(o, function (u) { var f, a, m = n.slice(); try {
    for (var l = j(m), s = l.next(); !s.done; s = l.next()) {
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
function qh(r) { return c(function (t, e) { var o, n, i = function (f) { o.error(f), e.error(f); }, u = function () { n?.unsubscribe(), o?.complete(), o = new _, e.next(o.asObservable()); var f; try {
    f = x(r());
}
catch (a) {
    i(a);
    return;
} f.subscribe(n = p(e, u, u, i)); }; u(), t.subscribe(p(e, function (f) { return o.next(f); }, function () { o.complete(), e.complete(); }, i, function () { n?.unsubscribe(), o = null; })); }); }
function Hh() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; var e = K(r); return c(function (o, n) { for (var i = r.length, u = new Array(i), f = r.map(function () { return !1; }), a = !1, m = function (s) { x(r[s]).subscribe(p(n, function (v) { u[s] = v, !a && !f[s] && (f[s] = !0, (a = f.every(I)) && (f = null)); }, A)); }, l = 0; l < i; l++)
    m(l); o.subscribe(p(n, function (s) { if (a) {
    var v = E([s], w(u));
    n.next(e ? e.apply(void 0, E([], w(v))) : v);
} })); }); }
function eb(r) { return qr(Dr, r); }
function fe() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return c(function (e, o) { Dr.apply(void 0, E([e], w(r))).subscribe(o); }); }
function pb() { for (var r = [], t = 0; t < arguments.length; t++)
    r[t] = arguments[t]; return fe.apply(void 0, E([], w(r))); }
function lb(r, t) { return function (e, o) { return !r.call(t, e, o); }; }
export { y as a, br as b, P as c, D as d, A as e, sr as f, Q as g, ur as h, I as i, Sr as j, O as k, p as l, St as m, fr as n, wt as o, _ as p, Ot as q, wr as r, At as s, It as t, Qr as u, Tt as v, R as w, Er as x, Y as y, Cn as z, Vr as A, K as B, M as C, Vt as D, _r as E, x as F, Or as G, Ar as H, Pt as I, Mt as J, q as K, Lr as L, Lt as M, Ee as N, Ur as O, Z as P, et as Q, Ut as R, Nt as S, Oe as T, Wt as U, N as V, cr as W, Dt as X, Yt as Y, zt as Z, V as _, Nr as $, Wr as aa, tr as ba, W as ca, Gt as da, z as ea, Cf as fa, lb as ga, $ as ha, Nf as ia, Dr as ja, Kt as ka, ea as la, fa as ma, sa as na, Ea as oa, Ra as pa, Ua as qa, ke as ra, B as sa, Zt as ta, $t as ua, ac as va, it as wa, gc as xa, ut as ya, Ic as za, Bt as Aa, Lc as Ba, zr as Ca, Zc as Da, Qc as Ea, np as Fa, mr as Ga, er as Ha, Xt as Ia, Ht as Ja, ft as Ka, Tp as La, Pp as Ma, Up as Na, Qt as Oa, Gp as Pa, lr as Qa, em as Ra, fm as Sa, mm as Ta, at as Ua, re as Va, wm as Wa, _m as Xa, Fm as Ya, Pm as Za, Lm as _a, Gm as $a, Hm as ab, el as bb, te as cb, dl as db, gl as eb, Ol as fb, Il as gb, jl as hb, Ml as ib, ee as jb, Kl as kb, Jl as lb, Gr as mb, ns as nb, fs as ob, ls as pb, hs as qb, gs as rb, As as sb, js as tb, Us as ub, qs as vb, Js as wb, tv as xb, oe as yb, pv as zb, vv as Ab, yv as Bb, ie as Cb, Tv as Db, Mv as Eb, Uv as Fb, qv as Gb, Bv as Hb, Qv as Ib, nd as Jb, or as Kb, ld as Lb, hd as Mb, gd as Nb, _d as Ob, Cd as Pb, Vd as Qb, ue as Rb, Gd as Sb, Jd as Tb, th as Ub, ih as Vb, mh as Wb, bh as Xb, Ih as Yb, Lh as Zb, qh as _b, Hh as $b, eb as ac, fe as bc, pb as cc };
