var d = function (r, o) { return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, n) { t.__proto__ = n; } || function (t, n) { for (var i in n)
    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]); }, d(r, o); };
function g(r, o) { if (typeof o != "function" && o !== null)
    throw new TypeError("Class extends value " + String(o) + " is not a constructor or null"); d(r, o); function t() { this.constructor = r; } r.prototype = o === null ? Object.create(o) : (t.prototype = o.prototype, new t); }
function O(r, o, t, n) { var i = arguments.length, e = i < 3 ? o : n === null ? n = Object.getOwnPropertyDescriptor(o, t) : n, c; if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    e = Reflect.decorate(r, o, t, n);
else
    for (var u = r.length - 1; u >= 0; u--)
        (c = r[u]) && (e = (i < 3 ? c(e) : i > 3 ? c(o, t, e) : c(o, t)) || e); return i > 3 && e && Object.defineProperty(o, t, e), e; }
function j(r, o, t, n) { function i(e) { return e instanceof t ? e : new t(function (c) { c(e); }); } return new (t || (t = Promise))(function (e, c) { function u(s) { try {
    a(n.next(s));
}
catch (y) {
    c(y);
} } function l(s) { try {
    a(n.throw(s));
}
catch (y) {
    c(y);
} } function a(s) { s.done ? e(s.value) : i(s.value).then(u, l); } a((n = n.apply(r, o || [])).next()); }); }
function x(r, o) { var t = { label: 0, sent: function () { if (e[0] & 1)
        throw e[1]; return e[1]; }, trys: [], ops: [] }, n, i, e, c = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype); return c.next = u(0), c.throw = u(1), c.return = u(2), typeof Symbol == "function" && (c[Symbol.iterator] = function () { return this; }), c; function u(a) { return function (s) { return l([a, s]); }; } function l(a) { if (n)
    throw new TypeError("Generator is already executing."); for (; c && (c = 0, a[0] && (t = 0)), t;)
    try {
        if (n = 1, i && (e = a[0] & 2 ? i.return : a[0] ? i.throw || ((e = i.return) && e.call(i), 0) : i.next) && !(e = e.call(i, a[1])).done)
            return e;
        switch (i = 0, e && (a = [a[0] & 2, e.value]), a[0]) {
            case 0:
            case 1:
                e = a;
                break;
            case 4: return t.label++, { value: a[1], done: !1 };
            case 5:
                t.label++, i = a[1], a = [0];
                continue;
            case 7:
                a = t.ops.pop(), t.trys.pop();
                continue;
            default:
                if (e = t.trys, !(e = e.length > 0 && e[e.length - 1]) && (a[0] === 6 || a[0] === 2)) {
                    t = 0;
                    continue;
                }
                if (a[0] === 3 && (!e || a[1] > e[0] && a[1] < e[3])) {
                    t.label = a[1];
                    break;
                }
                if (a[0] === 6 && t.label < e[1]) {
                    t.label = e[1], e = a;
                    break;
                }
                if (e && t.label < e[2]) {
                    t.label = e[2], t.ops.push(a);
                    break;
                }
                e[2] && t.ops.pop(), t.trys.pop();
                continue;
        }
        a = o.call(r, t);
    }
    catch (s) {
        a = [6, s], i = 0;
    }
    finally {
        n = e = 0;
    } if (a[0] & 5)
    throw a[1]; return { value: a[0] ? a[1] : void 0, done: !0 }; } }
function _(r) { var o = typeof Symbol == "function" && Symbol.iterator, t = o && r[o], n = 0; if (t)
    return t.call(r); if (r && typeof r.length == "number")
    return { next: function () { return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r }; } }; throw new TypeError(o ? "Object is not iterable." : "Symbol.iterator is not defined."); }
function P(r, o) { var t = typeof Symbol == "function" && r[Symbol.iterator]; if (!t)
    return r; var n = t.call(r), i, e = [], c; try {
    for (; (o === void 0 || o-- > 0) && !(i = n.next()).done;)
        e.push(i.value);
}
catch (u) {
    c = { error: u };
}
finally {
    try {
        i && !i.done && (t = n.return) && t.call(n);
    }
    finally {
        if (c)
            throw c.error;
    }
} return e; }
function S(r, o, t) { if (t || arguments.length === 2)
    for (var n = 0, i = o.length, e; n < i; n++)
        (e || !(n in o)) && (e || (e = Array.prototype.slice.call(o, 0, n)), e[n] = o[n]); return r.concat(e || Array.prototype.slice.call(o)); }
function b(r) { return this instanceof b ? (this.v = r, this) : new b(r); }
function E(r, o, t) { if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined."); var n = t.apply(r, o || []), i, e = []; return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), u("next"), u("throw"), u("return", c), i[Symbol.asyncIterator] = function () { return this; }, i; function c(f) { return function (p) { return Promise.resolve(p).then(f, y); }; } function u(f, p) { n[f] && (i[f] = function (h) { return new Promise(function (m, v) { e.push([f, h, m, v]) > 1 || l(f, h); }); }, p && (i[f] = p(i[f]))); } function l(f, p) { try {
    a(n[f](p));
}
catch (h) {
    w(e[0][3], h);
} } function a(f) { f.value instanceof b ? Promise.resolve(f.value.v).then(s, y) : w(e[0][2], f); } function s(f) { l("next", f); } function y(f) { l("throw", f); } function w(f, p) { f(p), e.shift(), e.length && l(e[0][0], e[0][1]); } }
function T(r) { if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined."); var o = r[Symbol.asyncIterator], t; return o ? o.call(r) : (r = typeof _ == "function" ? _(r) : r[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function () { return this; }, t); function n(e) { t[e] = r[e] && function (c) { return new Promise(function (u, l) { c = r[e](c), i(u, l, c.done, c.value); }); }; } function i(e, c, u, l) { Promise.resolve(l).then(function (a) { e({ value: a, done: u }); }, c); } }
export { g as a, O as b, j as c, x as d, _ as e, P as f, S as g, b as h, E as i, T as j };
