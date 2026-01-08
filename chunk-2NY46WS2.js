var d = function (r, a) { return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, o) { t.__proto__ = o; } || function (t, o) { for (var i in o)
    Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i]); }, d(r, a); };
function g(r, a) { if (typeof a != "function" && a !== null)
    throw new TypeError("Class extends value " + String(a) + " is not a constructor or null"); d(r, a); function t() { this.constructor = r; } r.prototype = a === null ? Object.create(a) : (t.prototype = a.prototype, new t); }
function O(r, a, t, o) { function i(e) { return e instanceof t ? e : new t(function (c) { c(e); }); } return new (t || (t = Promise))(function (e, c) { function u(s) { try {
    n(o.next(s));
}
catch (y) {
    c(y);
} } function l(s) { try {
    n(o.throw(s));
}
catch (y) {
    c(y);
} } function n(s) { s.done ? e(s.value) : i(s.value).then(u, l); } n((o = o.apply(r, a || [])).next()); }); }
function j(r, a) { var t = { label: 0, sent: function () { if (e[0] & 1)
        throw e[1]; return e[1]; }, trys: [], ops: [] }, o, i, e, c = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype); return c.next = u(0), c.throw = u(1), c.return = u(2), typeof Symbol == "function" && (c[Symbol.iterator] = function () { return this; }), c; function u(n) { return function (s) { return l([n, s]); }; } function l(n) { if (o)
    throw new TypeError("Generator is already executing."); for (; c && (c = 0, n[0] && (t = 0)), t;)
    try {
        if (o = 1, i && (e = n[0] & 2 ? i.return : n[0] ? i.throw || ((e = i.return) && e.call(i), 0) : i.next) && !(e = e.call(i, n[1])).done)
            return e;
        switch (i = 0, e && (n = [n[0] & 2, e.value]), n[0]) {
            case 0:
            case 1:
                e = n;
                break;
            case 4: return t.label++, { value: n[1], done: !1 };
            case 5:
                t.label++, i = n[1], n = [0];
                continue;
            case 7:
                n = t.ops.pop(), t.trys.pop();
                continue;
            default:
                if (e = t.trys, !(e = e.length > 0 && e[e.length - 1]) && (n[0] === 6 || n[0] === 2)) {
                    t = 0;
                    continue;
                }
                if (n[0] === 3 && (!e || n[1] > e[0] && n[1] < e[3])) {
                    t.label = n[1];
                    break;
                }
                if (n[0] === 6 && t.label < e[1]) {
                    t.label = e[1], e = n;
                    break;
                }
                if (e && t.label < e[2]) {
                    t.label = e[2], t.ops.push(n);
                    break;
                }
                e[2] && t.ops.pop(), t.trys.pop();
                continue;
        }
        n = a.call(r, t);
    }
    catch (s) {
        n = [6, s], i = 0;
    }
    finally {
        o = e = 0;
    } if (n[0] & 5)
    throw n[1]; return { value: n[0] ? n[1] : void 0, done: !0 }; } }
function _(r) { var a = typeof Symbol == "function" && Symbol.iterator, t = a && r[a], o = 0; if (t)
    return t.call(r); if (r && typeof r.length == "number")
    return { next: function () { return r && o >= r.length && (r = void 0), { value: r && r[o++], done: !r }; } }; throw new TypeError(a ? "Object is not iterable." : "Symbol.iterator is not defined."); }
function x(r, a) { var t = typeof Symbol == "function" && r[Symbol.iterator]; if (!t)
    return r; var o = t.call(r), i, e = [], c; try {
    for (; (a === void 0 || a-- > 0) && !(i = o.next()).done;)
        e.push(i.value);
}
catch (u) {
    c = { error: u };
}
finally {
    try {
        i && !i.done && (t = o.return) && t.call(o);
    }
    finally {
        if (c)
            throw c.error;
    }
} return e; }
function P(r, a, t) { if (t || arguments.length === 2)
    for (var o = 0, i = a.length, e; o < i; o++)
        (e || !(o in a)) && (e || (e = Array.prototype.slice.call(a, 0, o)), e[o] = a[o]); return r.concat(e || Array.prototype.slice.call(a)); }
function b(r) { return this instanceof b ? (this.v = r, this) : new b(r); }
function S(r, a, t) { if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined."); var o = t.apply(r, a || []), i, e = []; return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), u("next"), u("throw"), u("return", c), i[Symbol.asyncIterator] = function () { return this; }, i; function c(f) { return function (p) { return Promise.resolve(p).then(f, y); }; } function u(f, p) { o[f] && (i[f] = function (h) { return new Promise(function (m, v) { e.push([f, h, m, v]) > 1 || l(f, h); }); }, p && (i[f] = p(i[f]))); } function l(f, p) { try {
    n(o[f](p));
}
catch (h) {
    w(e[0][3], h);
} } function n(f) { f.value instanceof b ? Promise.resolve(f.value.v).then(s, y) : w(e[0][2], f); } function s(f) { l("next", f); } function y(f) { l("throw", f); } function w(f, p) { f(p), e.shift(), e.length && l(e[0][0], e[0][1]); } }
function E(r) { if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined."); var a = r[Symbol.asyncIterator], t; return a ? a.call(r) : (r = typeof _ == "function" ? _(r) : r[Symbol.iterator](), t = {}, o("next"), o("throw"), o("return"), t[Symbol.asyncIterator] = function () { return this; }, t); function o(e) { t[e] = r[e] && function (c) { return new Promise(function (u, l) { c = r[e](c), i(u, l, c.done, c.value); }); }; } function i(e, c, u, l) { Promise.resolve(l).then(function (n) { e({ value: n, done: u }); }, c); } }
export { g as a, O as b, j as c, _ as d, x as e, P as f, b as g, S as h, E as i };
