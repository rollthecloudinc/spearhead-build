import { c as ee, l as Le, m as Ne } from "@nf-internal/chunk-VANWXVE2";
import { f as O } from "@nf-internal/chunk-J4XOFOAH";
var $e = O(() => { });
var J = O((tn, je) => {
    var we = typeof Map == "function" && Map.prototype, pe = Object.getOwnPropertyDescriptor && we ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, te = we && pe && typeof pe.get == "function" ? pe.get : null, Ce = we && Map.prototype.forEach, Oe = typeof Set == "function" && Set.prototype, se = Object.getOwnPropertyDescriptor && Oe ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, ne = Oe && se && typeof se.get == "function" ? se.get : null, qe = Oe && Set.prototype.forEach, br = typeof WeakMap == "function" && WeakMap.prototype, V = br ? WeakMap.prototype.has : null, xr = typeof WeakSet == "function" && WeakSet.prototype, G = xr ? WeakSet.prototype.has : null, Dr = typeof WeakRef == "function" && WeakRef.prototype, Fe = Dr ? WeakRef.prototype.deref : null, Ar = Boolean.prototype.valueOf, Tr = Object.prototype.toString, Mr = Function.prototype.toString, _r = String.prototype.match, Ee = String.prototype.slice, N = String.prototype.replace, Ir = String.prototype.toUpperCase, Re = String.prototype.toLowerCase, Ve = RegExp.prototype.test, Pe = Array.prototype.concat, E = Array.prototype.join, Lr = Array.prototype.slice, We = Math.floor, ve = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, ye = Object.getOwnPropertySymbols, he = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, H = typeof Symbol == "function" && typeof Symbol.iterator == "object", U = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === H || !0) ? Symbol.toStringTag : null, Ge = Object.prototype.propertyIsEnumerable, Be = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function (r) { return r.__proto__; } : null);
    function He(r, e) { if (r === 1 / 0 || r === -1 / 0 || r !== r || r && r > -1e3 && r < 1e3 || Ve.call(/e/, e))
        return e; var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g; if (typeof r == "number") {
        var t = r < 0 ? -We(-r) : We(r);
        if (t !== r) {
            var a = String(t), i = Ee.call(e, a.length + 1);
            return N.call(a, n, "$&_") + "." + N.call(N.call(i, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
    } return N.call(e, n, "$&_"); }
    var me = $e(), Ke = me.custom, ze = Xe(Ke) ? Ke : null, Ue = { __proto__: null, double: '"', single: "'" }, Nr = { __proto__: null, double: /(["\\])/g, single: /(['\\])/g };
    je.exports = function r(e, n, t, a) { var i = n || {}; if (A(i, "quoteStyle") && !A(Ue, i.quoteStyle))
        throw new TypeError('option "quoteStyle" must be "single" or "double"'); if (A(i, "maxStringLength") && (typeof i.maxStringLength == "number" ? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0 : i.maxStringLength !== null))
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'); var o = A(i, "customInspect") ? i.customInspect : !0; if (typeof o != "boolean" && o !== "symbol")
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`"); if (A(i, "indent") && i.indent !== null && i.indent !== "	" && !(parseInt(i.indent, 10) === i.indent && i.indent > 0))
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`'); if (A(i, "numericSeparator") && typeof i.numericSeparator != "boolean")
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`'); var p = i.numericSeparator; if (typeof e > "u")
        return "undefined"; if (e === null)
        return "null"; if (typeof e == "boolean")
        return e ? "true" : "false"; if (typeof e == "string")
        return Ze(e, i); if (typeof e == "number") {
        if (e === 0)
            return 1 / 0 / e > 0 ? "0" : "-0";
        var l = String(e);
        return p ? He(e, l) : l;
    } if (typeof e == "bigint") {
        var u = String(e) + "n";
        return p ? He(e, u) : u;
    } var c = typeof i.depth > "u" ? 5 : i.depth; if (typeof t > "u" && (t = 0), t >= c && c > 0 && typeof e == "object")
        return ge(e) ? "[Array]" : "[Object]"; var s = Xr(i, t); if (typeof a > "u")
        a = [];
    else if (Ye(a, e) >= 0)
        return "[Circular]"; function f(w, L, D) { if (L && (a = Lr.call(a), a.push(L)), D) {
        var Q = { depth: i.depth };
        return A(i, "quoteStyle") && (Q.quoteStyle = i.quoteStyle), r(w, Q, t + 1, a);
    } return r(w, i, t + 1, a); } if (typeof e == "function" && !Qe(e)) {
        var h = Hr(e), d = re(e, f);
        return "[Function" + (h ? ": " + h : " (anonymous)") + "]" + (d.length > 0 ? " { " + E.call(d, ", ") + " }" : "");
    } if (Xe(e)) {
        var S = H ? N.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : he.call(e);
        return typeof e == "object" && !H ? k(S) : S;
    } if (Gr(e)) {
        for (var g = "<" + Re.call(String(e.nodeName)), T = e.attributes || [], M = 0; M < T.length; M++)
            g += " " + T[M].name + "=" + Je($r(T[M].value), "double", i);
        return g += ">", e.childNodes && e.childNodes.length && (g += "..."), g += "</" + Re.call(String(e.nodeName)) + ">", g;
    } if (ge(e)) {
        if (e.length === 0)
            return "[]";
        var y = re(e, f);
        return s && !Jr(y) ? "[" + Se(y, s) + "]" : "[ " + E.call(y, ", ") + " ]";
    } if (qr(e)) {
        var _ = re(e, f);
        return !("cause" in Error.prototype) && "cause" in e && !Ge.call(e, "cause") ? "{ [" + String(e) + "] " + E.call(Pe.call("[cause]: " + f(e.cause), _), ", ") + " }" : _.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + E.call(_, ", ") + " }";
    } if (typeof e == "object" && o) {
        if (ze && typeof e[ze] == "function" && me)
            return me(e, { depth: c - t });
        if (o !== "symbol" && typeof e.inspect == "function")
            return e.inspect();
    } if (Kr(e)) {
        var C = [];
        return Ce && Ce.call(e, function (w, L) { C.push(f(L, e, !0) + " => " + f(w, e)); }), ke("Map", te.call(e), C, s);
    } if (kr(e)) {
        var z = [];
        return qe && qe.call(e, function (w) { z.push(f(w, e)); }), ke("Set", ne.call(e), z, s);
    } if (zr(e))
        return de("WeakMap"); if (Vr(e))
        return de("WeakSet"); if (Qr(e))
        return de("WeakRef"); if (Rr(e))
        return k(f(Number(e))); if (Wr(e))
        return k(f(ve.call(e))); if (Pr(e))
        return k(Ar.call(e)); if (Fr(e))
        return k(f(String(e))); if (typeof window < "u" && e === window)
        return "{ [object Window] }"; if (typeof globalThis < "u" && e === globalThis || typeof global < "u" && e === global)
        return "{ [object globalThis] }"; if (!Cr(e) && !Qe(e)) {
        var W = re(e, f), Z = Be ? Be(e) === Object.prototype : e instanceof Object || e.constructor === Object, q = e instanceof Object ? "" : "null prototype", I = !Z && U && Object(e) === e && U in e ? Ee.call($(e), 8, -1) : q ? "Object" : "", j = Z || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", B = j + (I || q ? "[" + E.call(Pe.call([], I || [], q || []), ": ") + "] " : "");
        return W.length === 0 ? B + "{}" : s ? B + "{" + Se(W, s) + "}" : B + "{ " + E.call(W, ", ") + " }";
    } return String(e); };
    function Je(r, e, n) { var t = n.quoteStyle || e, a = Ue[t]; return a + r + a; }
    function $r(r) { return N.call(String(r), /"/g, "&quot;"); }
    function F(r) { return !U || !(typeof r == "object" && (U in r || typeof r[U] < "u")); }
    function ge(r) { return $(r) === "[object Array]" && F(r); }
    function Cr(r) { return $(r) === "[object Date]" && F(r); }
    function Qe(r) { return $(r) === "[object RegExp]" && F(r); }
    function qr(r) { return $(r) === "[object Error]" && F(r); }
    function Fr(r) { return $(r) === "[object String]" && F(r); }
    function Rr(r) { return $(r) === "[object Number]" && F(r); }
    function Pr(r) { return $(r) === "[object Boolean]" && F(r); }
    function Xe(r) { if (H)
        return r && typeof r == "object" && r instanceof Symbol; if (typeof r == "symbol")
        return !0; if (!r || typeof r != "object" || !he)
        return !1; try {
        return he.call(r), !0;
    }
    catch { } return !1; }
    function Wr(r) { if (!r || typeof r != "object" || !ve)
        return !1; try {
        return ve.call(r), !0;
    }
    catch { } return !1; }
    var Br = Object.prototype.hasOwnProperty || function (r) { return r in this; };
    function A(r, e) { return Br.call(r, e); }
    function $(r) { return Tr.call(r); }
    function Hr(r) { if (r.name)
        return r.name; var e = _r.call(Mr.call(r), /^function\s*([\w$]+)/); return e ? e[1] : null; }
    function Ye(r, e) { if (r.indexOf)
        return r.indexOf(e); for (var n = 0, t = r.length; n < t; n++)
        if (r[n] === e)
            return n; return -1; }
    function Kr(r) { if (!te || !r || typeof r != "object")
        return !1; try {
        te.call(r);
        try {
            ne.call(r);
        }
        catch {
            return !0;
        }
        return r instanceof Map;
    }
    catch { } return !1; }
    function zr(r) { if (!V || !r || typeof r != "object")
        return !1; try {
        V.call(r, V);
        try {
            G.call(r, G);
        }
        catch {
            return !0;
        }
        return r instanceof WeakMap;
    }
    catch { } return !1; }
    function Qr(r) { if (!Fe || !r || typeof r != "object")
        return !1; try {
        return Fe.call(r), !0;
    }
    catch { } return !1; }
    function kr(r) { if (!ne || !r || typeof r != "object")
        return !1; try {
        ne.call(r);
        try {
            te.call(r);
        }
        catch {
            return !0;
        }
        return r instanceof Set;
    }
    catch { } return !1; }
    function Vr(r) { if (!G || !r || typeof r != "object")
        return !1; try {
        G.call(r, G);
        try {
            V.call(r, V);
        }
        catch {
            return !0;
        }
        return r instanceof WeakSet;
    }
    catch { } return !1; }
    function Gr(r) { return !r || typeof r != "object" ? !1 : typeof HTMLElement < "u" && r instanceof HTMLElement ? !0 : typeof r.nodeName == "string" && typeof r.getAttribute == "function"; }
    function Ze(r, e) { if (r.length > e.maxStringLength) {
        var n = r.length - e.maxStringLength, t = "... " + n + " more character" + (n > 1 ? "s" : "");
        return Ze(Ee.call(r, 0, e.maxStringLength), e) + t;
    } var a = Nr[e.quoteStyle || "single"]; a.lastIndex = 0; var i = N.call(N.call(r, a, "\\$1"), /[\x00-\x1f]/g, Ur); return Je(i, "single", e); }
    function Ur(r) { var e = r.charCodeAt(0), n = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[e]; return n ? "\\" + n : "\\x" + (e < 16 ? "0" : "") + Ir.call(e.toString(16)); }
    function k(r) { return "Object(" + r + ")"; }
    function de(r) { return r + " { ? }"; }
    function ke(r, e, n, t) { var a = t ? Se(n, t) : E.call(n, ", "); return r + " (" + e + ") {" + a + "}"; }
    function Jr(r) {
        for (var e = 0; e < r.length; e++)
            if (Ye(r[e], `
`) >= 0)
                return !1;
        return !0;
    }
    function Xr(r, e) { var n; if (r.indent === "	")
        n = "	";
    else if (typeof r.indent == "number" && r.indent > 0)
        n = E.call(Array(r.indent + 1), " ");
    else
        return null; return { base: n, prev: E.call(Array(e + 1), n) }; }
    function Se(r, e) {
        if (r.length === 0)
            return "";
        var n = `
` + e.prev + e.base;
        return n + E.call(r, "," + n) + `
` + e.prev;
    }
    function re(r, e) { var n = ge(r), t = []; if (n) {
        t.length = r.length;
        for (var a = 0; a < r.length; a++)
            t[a] = A(r, a) ? e(r[a], r) : "";
    } var i = typeof ye == "function" ? ye(r) : [], o; if (H) {
        o = {};
        for (var p = 0; p < i.length; p++)
            o["$" + i[p]] = i[p];
    } for (var l in r)
        A(r, l) && (n && String(Number(l)) === l && l < r.length || H && o["$" + l] instanceof Symbol || (Ve.call(/[^\w$]/, l) ? t.push(e(l, r) + ": " + e(r[l], r)) : t.push(l + ": " + e(r[l], r)))); if (typeof ye == "function")
        for (var u = 0; u < i.length; u++)
            Ge.call(r, i[u]) && t.push("[" + e(i[u]) + "]: " + e(r[i[u]], r)); return t; }
});
var rr = O((nn, er) => {
    "use strict";
    var Yr = J(), Zr = ee(), ae = function (r, e, n) { for (var t = r, a; (a = t.next) != null; t = a)
        if (a.key === e)
            return t.next = a.next, n || (a.next = r.next, r.next = a), a; }, jr = function (r, e) { if (r) {
        var n = ae(r, e);
        return n && n.value;
    } }, et = function (r, e, n) { var t = ae(r, e); t ? t.value = n : r.next = { key: e, next: r.next, value: n }; }, rt = function (r, e) { return r ? !!ae(r, e) : !1; }, tt = function (r, e) { if (r)
        return ae(r, e, !0); };
    er.exports = function () { var e, n = { assert: function (t) { if (!n.has(t))
            throw new Zr("Side channel does not contain " + Yr(t)); }, delete: function (t) { var a = e && e.next, i = tt(e, t); return i && a && a === i && (e = void 0), !!i; }, get: function (t) { return jr(e, t); }, has: function (t) { return rt(e, t); }, set: function (t, a) { e || (e = { next: void 0 }), et(e, t, a); } }; return n; };
});
var be = O((an, nr) => {
    "use strict";
    var nt = Le(), X = Ne(), at = J(), it = ee(), tr = nt("%Map%", !0), ot = X("Map.prototype.get", !0), lt = X("Map.prototype.set", !0), ft = X("Map.prototype.has", !0), ut = X("Map.prototype.delete", !0), ct = X("Map.prototype.size", !0);
    nr.exports = !!tr && function () { var e, n = { assert: function (t) { if (!n.has(t))
            throw new it("Side channel does not contain " + at(t)); }, delete: function (t) { if (e) {
            var a = ut(e, t);
            return ct(e) === 0 && (e = void 0), a;
        } return !1; }, get: function (t) { if (e)
            return ot(e, t); }, has: function (t) { return e ? ft(e, t) : !1; }, set: function (t, a) { e || (e = new tr), lt(e, t, a); } }; return n; };
});
var ir = O((on, ar) => {
    "use strict";
    var pt = Le(), oe = Ne(), st = J(), ie = be(), yt = ee(), K = pt("%WeakMap%", !0), dt = oe("WeakMap.prototype.get", !0), vt = oe("WeakMap.prototype.set", !0), ht = oe("WeakMap.prototype.has", !0), mt = oe("WeakMap.prototype.delete", !0);
    ar.exports = K ? function () { var e, n, t = { assert: function (a) { if (!t.has(a))
            throw new yt("Side channel does not contain " + st(a)); }, delete: function (a) { if (K && a && (typeof a == "object" || typeof a == "function")) {
            if (e)
                return mt(e, a);
        }
        else if (ie && n)
            return n.delete(a); return !1; }, get: function (a) { return K && a && (typeof a == "object" || typeof a == "function") && e ? dt(e, a) : n && n.get(a); }, has: function (a) { return K && a && (typeof a == "object" || typeof a == "function") && e ? ht(e, a) : !!n && n.has(a); }, set: function (a, i) { K && a && (typeof a == "object" || typeof a == "function") ? (e || (e = new K), vt(e, a, i)) : ie && (n || (n = ie()), n.set(a, i)); } }; return t; } : ie;
});
var lr = O((ln, or) => {
    "use strict";
    var gt = ee(), St = J(), wt = rr(), Ot = be(), Et = ir(), bt = Et || Ot || wt;
    or.exports = function () { var e, n = { assert: function (t) { if (!n.has(t))
            throw new gt("Side channel does not contain " + St(t)); }, delete: function (t) { return !!e && e.delete(t); }, get: function (t) { return e && e.get(t); }, has: function (t) { return !!e && e.has(t); }, set: function (t, a) { e || (e = bt()), e.set(t, a); } }; return n; };
});
var le = O((fn, fr) => {
    "use strict";
    var xt = String.prototype.replace, Dt = /%20/g, xe = { RFC1738: "RFC1738", RFC3986: "RFC3986" };
    fr.exports = { default: xe.RFC3986, formatters: { RFC1738: function (r) { return xt.call(r, Dt, "+"); }, RFC3986: function (r) { return String(r); } }, RFC1738: xe.RFC1738, RFC3986: xe.RFC3986 };
});
var Te = O((un, cr) => {
    "use strict";
    var At = le(), De = Object.prototype.hasOwnProperty, R = Array.isArray, b = (function () { for (var r = [], e = 0; e < 256; ++e)
        r.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase()); return r; })(), Tt = function (e) { for (; e.length > 1;) {
        var n = e.pop(), t = n.obj[n.prop];
        if (R(t)) {
            for (var a = [], i = 0; i < t.length; ++i)
                typeof t[i] < "u" && a.push(t[i]);
            n.obj[n.prop] = a;
        }
    } }, ur = function (e, n) { for (var t = n && n.plainObjects ? { __proto__: null } : {}, a = 0; a < e.length; ++a)
        typeof e[a] < "u" && (t[a] = e[a]); return t; }, Mt = function r(e, n, t) { if (!n)
        return e; if (typeof n != "object" && typeof n != "function") {
        if (R(e))
            e.push(n);
        else if (e && typeof e == "object")
            (t && (t.plainObjects || t.allowPrototypes) || !De.call(Object.prototype, n)) && (e[n] = !0);
        else
            return [e, n];
        return e;
    } if (!e || typeof e != "object")
        return [e].concat(n); var a = e; return R(e) && !R(n) && (a = ur(e, t)), R(e) && R(n) ? (n.forEach(function (i, o) { if (De.call(e, o)) {
        var p = e[o];
        p && typeof p == "object" && i && typeof i == "object" ? e[o] = r(p, i, t) : e.push(i);
    }
    else
        e[o] = i; }), e) : Object.keys(n).reduce(function (i, o) { var p = n[o]; return De.call(i, o) ? i[o] = r(i[o], p, t) : i[o] = p, i; }, a); }, _t = function (e, n) { return Object.keys(n).reduce(function (t, a) { return t[a] = n[a], t; }, e); }, It = function (r, e, n) { var t = r.replace(/\+/g, " "); if (n === "iso-8859-1")
        return t.replace(/%[0-9a-f]{2}/gi, unescape); try {
        return decodeURIComponent(t);
    }
    catch {
        return t;
    } }, Ae = 1024, Lt = function (e, n, t, a, i) { if (e.length === 0)
        return e; var o = e; if (typeof e == "symbol" ? o = Symbol.prototype.toString.call(e) : typeof e != "string" && (o = String(e)), t === "iso-8859-1")
        return escape(o).replace(/%u[0-9a-f]{4}/gi, function (h) { return "%26%23" + parseInt(h.slice(2), 16) + "%3B"; }); for (var p = "", l = 0; l < o.length; l += Ae) {
        for (var u = o.length >= Ae ? o.slice(l, l + Ae) : o, c = [], s = 0; s < u.length; ++s) {
            var f = u.charCodeAt(s);
            if (f === 45 || f === 46 || f === 95 || f === 126 || f >= 48 && f <= 57 || f >= 65 && f <= 90 || f >= 97 && f <= 122 || i === At.RFC1738 && (f === 40 || f === 41)) {
                c[c.length] = u.charAt(s);
                continue;
            }
            if (f < 128) {
                c[c.length] = b[f];
                continue;
            }
            if (f < 2048) {
                c[c.length] = b[192 | f >> 6] + b[128 | f & 63];
                continue;
            }
            if (f < 55296 || f >= 57344) {
                c[c.length] = b[224 | f >> 12] + b[128 | f >> 6 & 63] + b[128 | f & 63];
                continue;
            }
            s += 1, f = 65536 + ((f & 1023) << 10 | u.charCodeAt(s) & 1023), c[c.length] = b[240 | f >> 18] + b[128 | f >> 12 & 63] + b[128 | f >> 6 & 63] + b[128 | f & 63];
        }
        p += c.join("");
    } return p; }, Nt = function (e) { for (var n = [{ obj: { o: e }, prop: "o" }], t = [], a = 0; a < n.length; ++a)
        for (var i = n[a], o = i.obj[i.prop], p = Object.keys(o), l = 0; l < p.length; ++l) {
            var u = p[l], c = o[u];
            typeof c == "object" && c !== null && t.indexOf(c) === -1 && (n.push({ obj: o, prop: u }), t.push(c));
        } return Tt(n), e; }, $t = function (e) { return Object.prototype.toString.call(e) === "[object RegExp]"; }, Ct = function (e) { return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e)); }, qt = function (e, n) { return [].concat(e, n); }, Ft = function (e, n) { if (R(e)) {
        for (var t = [], a = 0; a < e.length; a += 1)
            t.push(n(e[a]));
        return t;
    } return n(e); };
    cr.exports = { arrayToObject: ur, assign: _t, combine: qt, compact: Nt, decode: It, encode: Lt, isBuffer: Ct, isRegExp: $t, maybeMap: Ft, merge: Mt };
});
var hr = O((cn, vr) => {
    "use strict";
    var sr = lr(), fe = Te(), Y = le(), Rt = Object.prototype.hasOwnProperty, yr = { brackets: function (e) { return e + "[]"; }, comma: "comma", indices: function (e, n) { return e + "[" + n + "]"; }, repeat: function (e) { return e; } }, x = Array.isArray, Pt = Array.prototype.push, dr = function (r, e) { Pt.apply(r, x(e) ? e : [e]); }, Wt = Date.prototype.toISOString, pr = Y.default, m = { addQueryPrefix: !1, allowDots: !1, allowEmptyArrays: !1, arrayFormat: "indices", charset: "utf-8", charsetSentinel: !1, commaRoundTrip: !1, delimiter: "&", encode: !0, encodeDotInKeys: !1, encoder: fe.encode, encodeValuesOnly: !1, filter: void 0, format: pr, formatter: Y.formatters[pr], indices: !1, serializeDate: function (e) { return Wt.call(e); }, skipNulls: !1, strictNullHandling: !1 }, Bt = function (e) { return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint"; }, Me = {}, Ht = function r(e, n, t, a, i, o, p, l, u, c, s, f, h, d, S, g, T, M) { for (var y = e, _ = M, C = 0, z = !1; (_ = _.get(Me)) !== void 0 && !z;) {
        var W = _.get(e);
        if (C += 1, typeof W < "u") {
            if (W === C)
                throw new RangeError("Cyclic object value");
            z = !0;
        }
        typeof _.get(Me) > "u" && (C = 0);
    } if (typeof c == "function" ? y = c(n, y) : y instanceof Date ? y = h(y) : t === "comma" && x(y) && (y = fe.maybeMap(y, function (ce) { return ce instanceof Date ? h(ce) : ce; })), y === null) {
        if (o)
            return u && !g ? u(n, m.encoder, T, "key", d) : n;
        y = "";
    } if (Bt(y) || fe.isBuffer(y)) {
        if (u) {
            var Z = g ? n : u(n, m.encoder, T, "key", d);
            return [S(Z) + "=" + S(u(y, m.encoder, T, "value", d))];
        }
        return [S(n) + "=" + S(String(y))];
    } var q = []; if (typeof y > "u")
        return q; var I; if (t === "comma" && x(y))
        g && u && (y = fe.maybeMap(y, u)), I = [{ value: y.length > 0 ? y.join(",") || null : void 0 }];
    else if (x(c))
        I = c;
    else {
        var j = Object.keys(y);
        I = s ? j.sort(s) : j;
    } var B = l ? String(n).replace(/\./g, "%2E") : String(n), w = a && x(y) && y.length === 1 ? B + "[]" : B; if (i && x(y) && y.length === 0)
        return w + "[]"; for (var L = 0; L < I.length; ++L) {
        var D = I[L], Q = typeof D == "object" && D && typeof D.value < "u" ? D.value : y[D];
        if (!(p && Q === null)) {
            var ue = f && l ? String(D).replace(/\./g, "%2E") : String(D), Er = x(y) ? typeof t == "function" ? t(w, ue) : w : w + (f ? "." + ue : "[" + ue + "]");
            M.set(e, C);
            var Ie = sr();
            Ie.set(Me, M), dr(q, r(Q, Er, t, a, i, o, p, l, t === "comma" && g && x(y) ? null : u, c, s, f, h, d, S, g, T, Ie));
        }
    } return q; }, Kt = function (e) { if (!e)
        return m; if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided"); if (typeof e.encodeDotInKeys < "u" && typeof e.encodeDotInKeys != "boolean")
        throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided"); if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
        throw new TypeError("Encoder has to be a function."); var n = e.charset || m.charset; if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined"); var t = Y.default; if (typeof e.format < "u") {
        if (!Rt.call(Y.formatters, e.format))
            throw new TypeError("Unknown format option provided.");
        t = e.format;
    } var a = Y.formatters[t], i = m.filter; (typeof e.filter == "function" || x(e.filter)) && (i = e.filter); var o; if (e.arrayFormat in yr ? o = e.arrayFormat : "indices" in e ? o = e.indices ? "indices" : "repeat" : o = m.arrayFormat, "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent"); var p = typeof e.allowDots > "u" ? e.encodeDotInKeys === !0 ? !0 : m.allowDots : !!e.allowDots; return { addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : m.addQueryPrefix, allowDots: p, allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : m.allowEmptyArrays, arrayFormat: o, charset: n, charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : m.charsetSentinel, commaRoundTrip: !!e.commaRoundTrip, delimiter: typeof e.delimiter > "u" ? m.delimiter : e.delimiter, encode: typeof e.encode == "boolean" ? e.encode : m.encode, encodeDotInKeys: typeof e.encodeDotInKeys == "boolean" ? e.encodeDotInKeys : m.encodeDotInKeys, encoder: typeof e.encoder == "function" ? e.encoder : m.encoder, encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : m.encodeValuesOnly, filter: i, format: t, formatter: a, serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : m.serializeDate, skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : m.skipNulls, sort: typeof e.sort == "function" ? e.sort : null, strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : m.strictNullHandling }; };
    vr.exports = function (r, e) { var n = r, t = Kt(e), a, i; typeof t.filter == "function" ? (i = t.filter, n = i("", n)) : x(t.filter) && (i = t.filter, a = i); var o = []; if (typeof n != "object" || n === null)
        return ""; var p = yr[t.arrayFormat], l = p === "comma" && t.commaRoundTrip; a || (a = Object.keys(n)), t.sort && a.sort(t.sort); for (var u = sr(), c = 0; c < a.length; ++c) {
        var s = a[c], f = n[s];
        t.skipNulls && f === null || dr(o, Ht(f, s, p, l, t.allowEmptyArrays, t.strictNullHandling, t.skipNulls, t.encodeDotInKeys, t.encode ? t.encoder : null, t.filter, t.sort, t.allowDots, t.serializeDate, t.format, t.formatter, t.encodeValuesOnly, t.charset, u));
    } var h = o.join(t.delimiter), d = t.addQueryPrefix === !0 ? "?" : ""; return t.charsetSentinel && (t.charset === "iso-8859-1" ? d += "utf8=%26%2310003%3B&" : d += "utf8=%E2%9C%93&"), h.length > 0 ? d + h : ""; };
});
var wr = O((pn, Sr) => {
    "use strict";
    var P = Te(), _e = Object.prototype.hasOwnProperty, mr = Array.isArray, v = { allowDots: !1, allowEmptyArrays: !1, allowPrototypes: !1, allowSparse: !1, arrayLimit: 20, charset: "utf-8", charsetSentinel: !1, comma: !1, decodeDotInKeys: !1, decoder: P.decode, delimiter: "&", depth: 5, duplicates: "combine", ignoreQueryPrefix: !1, interpretNumericEntities: !1, parameterLimit: 1e3, parseArrays: !0, plainObjects: !1, strictDepth: !1, strictNullHandling: !1, throwOnLimitExceeded: !1 }, zt = function (r) { return r.replace(/&#(\d+);/g, function (e, n) { return String.fromCharCode(parseInt(n, 10)); }); }, gr = function (r, e, n) { if (r && typeof r == "string" && e.comma && r.indexOf(",") > -1)
        return r.split(","); if (e.throwOnLimitExceeded && n >= e.arrayLimit)
        throw new RangeError("Array limit exceeded. Only " + e.arrayLimit + " element" + (e.arrayLimit === 1 ? "" : "s") + " allowed in an array."); return r; }, Qt = "utf8=%26%2310003%3B", kt = "utf8=%E2%9C%93", Vt = function (e, n) { var t = { __proto__: null }, a = n.ignoreQueryPrefix ? e.replace(/^\?/, "") : e; a = a.replace(/%5B/gi, "[").replace(/%5D/gi, "]"); var i = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit, o = a.split(n.delimiter, n.throwOnLimitExceeded ? i + 1 : i); if (n.throwOnLimitExceeded && o.length > i)
        throw new RangeError("Parameter limit exceeded. Only " + i + " parameter" + (i === 1 ? "" : "s") + " allowed."); var p = -1, l, u = n.charset; if (n.charsetSentinel)
        for (l = 0; l < o.length; ++l)
            o[l].indexOf("utf8=") === 0 && (o[l] === kt ? u = "utf-8" : o[l] === Qt && (u = "iso-8859-1"), p = l, l = o.length); for (l = 0; l < o.length; ++l)
        if (l !== p) {
            var c = o[l], s = c.indexOf("]="), f = s === -1 ? c.indexOf("=") : s + 1, h, d;
            f === -1 ? (h = n.decoder(c, v.decoder, u, "key"), d = n.strictNullHandling ? null : "") : (h = n.decoder(c.slice(0, f), v.decoder, u, "key"), d = P.maybeMap(gr(c.slice(f + 1), n, mr(t[h]) ? t[h].length : 0), function (g) { return n.decoder(g, v.decoder, u, "value"); })), d && n.interpretNumericEntities && u === "iso-8859-1" && (d = zt(String(d))), c.indexOf("[]=") > -1 && (d = mr(d) ? [d] : d);
            var S = _e.call(t, h);
            S && n.duplicates === "combine" ? t[h] = P.combine(t[h], d) : (!S || n.duplicates === "last") && (t[h] = d);
        } return t; }, Gt = function (r, e, n, t) { var a = 0; if (r.length > 0 && r[r.length - 1] === "[]") {
        var i = r.slice(0, -1).join("");
        a = Array.isArray(e) && e[i] ? e[i].length : 0;
    } for (var o = t ? e : gr(e, n, a), p = r.length - 1; p >= 0; --p) {
        var l, u = r[p];
        if (u === "[]" && n.parseArrays)
            l = n.allowEmptyArrays && (o === "" || n.strictNullHandling && o === null) ? [] : P.combine([], o);
        else {
            l = n.plainObjects ? { __proto__: null } : {};
            var c = u.charAt(0) === "[" && u.charAt(u.length - 1) === "]" ? u.slice(1, -1) : u, s = n.decodeDotInKeys ? c.replace(/%2E/g, ".") : c, f = parseInt(s, 10);
            !n.parseArrays && s === "" ? l = { 0: o } : !isNaN(f) && u !== s && String(f) === s && f >= 0 && n.parseArrays && f <= n.arrayLimit ? (l = [], l[f] = o) : s !== "__proto__" && (l[s] = o);
        }
        o = l;
    } return o; }, Ut = function (e, n, t, a) { if (e) {
        var i = t.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, o = /(\[[^[\]]*])/, p = /(\[[^[\]]*])/g, l = t.depth > 0 && o.exec(i), u = l ? i.slice(0, l.index) : i, c = [];
        if (u) {
            if (!t.plainObjects && _e.call(Object.prototype, u) && !t.allowPrototypes)
                return;
            c.push(u);
        }
        for (var s = 0; t.depth > 0 && (l = p.exec(i)) !== null && s < t.depth;) {
            if (s += 1, !t.plainObjects && _e.call(Object.prototype, l[1].slice(1, -1)) && !t.allowPrototypes)
                return;
            c.push(l[1]);
        }
        if (l) {
            if (t.strictDepth === !0)
                throw new RangeError("Input depth exceeded depth option of " + t.depth + " and strictDepth is true");
            c.push("[" + i.slice(l.index) + "]");
        }
        return Gt(c, n, t, a);
    } }, Jt = function (e) { if (!e)
        return v; if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean")
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided"); if (typeof e.decodeDotInKeys < "u" && typeof e.decodeDotInKeys != "boolean")
        throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided"); if (e.decoder !== null && typeof e.decoder < "u" && typeof e.decoder != "function")
        throw new TypeError("Decoder has to be a function."); if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined"); if (typeof e.throwOnLimitExceeded < "u" && typeof e.throwOnLimitExceeded != "boolean")
        throw new TypeError("`throwOnLimitExceeded` option must be a boolean"); var n = typeof e.charset > "u" ? v.charset : e.charset, t = typeof e.duplicates > "u" ? v.duplicates : e.duplicates; if (t !== "combine" && t !== "first" && t !== "last")
        throw new TypeError("The duplicates option must be either combine, first, or last"); var a = typeof e.allowDots > "u" ? e.decodeDotInKeys === !0 ? !0 : v.allowDots : !!e.allowDots; return { allowDots: a, allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : v.allowEmptyArrays, allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : v.allowPrototypes, allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : v.allowSparse, arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : v.arrayLimit, charset: n, charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : v.charsetSentinel, comma: typeof e.comma == "boolean" ? e.comma : v.comma, decodeDotInKeys: typeof e.decodeDotInKeys == "boolean" ? e.decodeDotInKeys : v.decodeDotInKeys, decoder: typeof e.decoder == "function" ? e.decoder : v.decoder, delimiter: typeof e.delimiter == "string" || P.isRegExp(e.delimiter) ? e.delimiter : v.delimiter, depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : v.depth, duplicates: t, ignoreQueryPrefix: e.ignoreQueryPrefix === !0, interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : v.interpretNumericEntities, parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : v.parameterLimit, parseArrays: e.parseArrays !== !1, plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : v.plainObjects, strictDepth: typeof e.strictDepth == "boolean" ? !!e.strictDepth : v.strictDepth, strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : v.strictNullHandling, throwOnLimitExceeded: typeof e.throwOnLimitExceeded == "boolean" ? e.throwOnLimitExceeded : !1 }; };
    Sr.exports = function (r, e) { var n = Jt(e); if (r === "" || r === null || typeof r > "u")
        return n.plainObjects ? { __proto__: null } : {}; for (var t = typeof r == "string" ? Vt(r, n) : r, a = n.plainObjects ? { __proto__: null } : {}, i = Object.keys(t), o = 0; o < i.length; ++o) {
        var p = i[o], l = Ut(p, t[p], n, typeof r == "string");
        a = P.merge(a, l, n);
    } return n.allowSparse === !0 ? a : P.compact(a); };
});
var jt = O((sn, Or) => { var Xt = hr(), Yt = wr(), Zt = le(); Or.exports = { formats: Zt, parse: Yt, stringify: Xt }; });
export default jt();
