import { a as Na, b as ka, c as xr, d as Le, e as Tr, f as Da, g as ja, h as qa, i as Wa, j as qt, k as Ha, l as $a, m as ve } from "@nf-internal/chunk-6P7TK745";
import { a as Ue } from "@nf-internal/chunk-LVWEWWR5";
import { a as Ie, d as Dt, e as jt } from "@nf-internal/chunk-Z75LNJIL";
import { a as A, b as L, f as p, h as Z, k as N, l as H, m as $, n as ue } from "@nf-internal/chunk-GL2BOVXA";
var $t = p(De => {
    "use strict";
    De.byteLength = Ga;
    De.toByteArray = Ka;
    De.fromByteArray = Za;
    var P = [], x = [], za = typeof Uint8Array < "u" ? Uint8Array : Array, Br = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (J = 0, Wt = Br.length; J < Wt; ++J)
        P[J] = Br[J], x[Br.charCodeAt(J)] = J;
    var J, Wt;
    x[45] = 62;
    x[95] = 63;
    function Ht(r) { var e = r.length; if (e % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4"); var t = r.indexOf("="); t === -1 && (t = e); var n = t === e ? 0 : 4 - t % 4; return [t, n]; }
    function Ga(r) { var e = Ht(r), t = e[0], n = e[1]; return (t + n) * 3 / 4 - n; }
    function Va(r, e, t) { return (e + t) * 3 / 4 - t; }
    function Ka(r) { var e, t = Ht(r), n = t[0], i = t[1], a = new za(Va(r, n, i)), o = 0, u = i > 0 ? n - 4 : n, f; for (f = 0; f < u; f += 4)
        e = x[r.charCodeAt(f)] << 18 | x[r.charCodeAt(f + 1)] << 12 | x[r.charCodeAt(f + 2)] << 6 | x[r.charCodeAt(f + 3)], a[o++] = e >> 16 & 255, a[o++] = e >> 8 & 255, a[o++] = e & 255; return i === 2 && (e = x[r.charCodeAt(f)] << 2 | x[r.charCodeAt(f + 1)] >> 4, a[o++] = e & 255), i === 1 && (e = x[r.charCodeAt(f)] << 10 | x[r.charCodeAt(f + 1)] << 4 | x[r.charCodeAt(f + 2)] >> 2, a[o++] = e >> 8 & 255, a[o++] = e & 255), a; }
    function Ya(r) { return P[r >> 18 & 63] + P[r >> 12 & 63] + P[r >> 6 & 63] + P[r & 63]; }
    function Xa(r, e, t) { for (var n, i = [], a = e; a < t; a += 3)
        n = (r[a] << 16 & 16711680) + (r[a + 1] << 8 & 65280) + (r[a + 2] & 255), i.push(Ya(n)); return i.join(""); }
    function Za(r) { for (var e, t = r.length, n = t % 3, i = [], a = 16383, o = 0, u = t - n; o < u; o += a)
        i.push(Xa(r, o, o + a > u ? u : o + a)); return n === 1 ? (e = r[t - 1], i.push(P[e >> 2] + P[e << 4 & 63] + "==")) : n === 2 && (e = (r[t - 2] << 8) + r[t - 1], i.push(P[e >> 10] + P[e >> 4 & 63] + P[e << 2 & 63] + "=")), i.join(""); }
});
var zt = p(Cr => { Cr.read = function (r, e, t, n, i) { var a, o, u = i * 8 - n - 1, f = (1 << u) - 1, l = f >> 1, c = -7, h = t ? i - 1 : 0, m = t ? -1 : 1, d = r[e + h]; for (h += m, a = d & (1 << -c) - 1, d >>= -c, c += u; c > 0; a = a * 256 + r[e + h], h += m, c -= 8)
    ; for (o = a & (1 << -c) - 1, a >>= -c, c += n; c > 0; o = o * 256 + r[e + h], h += m, c -= 8)
    ; if (a === 0)
    a = 1 - l;
else {
    if (a === f)
        return o ? NaN : (d ? -1 : 1) * (1 / 0);
    o = o + Math.pow(2, n), a = a - l;
} return (d ? -1 : 1) * o * Math.pow(2, a - n); }; Cr.write = function (r, e, t, n, i, a) { var o, u, f, l = a * 8 - i - 1, c = (1 << l) - 1, h = c >> 1, m = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = n ? 0 : a - 1, v = n ? 1 : -1, _ = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0; for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (u = isNaN(e) ? 1 : 0, o = c) : (o = Math.floor(Math.log(e) / Math.LN2), e * (f = Math.pow(2, -o)) < 1 && (o--, f *= 2), o + h >= 1 ? e += m / f : e += m * Math.pow(2, 1 - h), e * f >= 2 && (o++, f /= 2), o + h >= c ? (u = 0, o = c) : o + h >= 1 ? (u = (e * f - 1) * Math.pow(2, i), o = o + h) : (u = e * Math.pow(2, h - 1) * Math.pow(2, i), o = 0)); i >= 8; r[t + d] = u & 255, d += v, u /= 256, i -= 8)
    ; for (o = o << i | u, l += i; l > 0; r[t + d] = o & 255, d += v, o /= 256, l -= 8)
    ; r[t + d - v] |= _ * 128; }; });
var O = p(se => {
    "use strict";
    var Mr = $t(), fe = zt(), Gt = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    se.Buffer = s;
    se.SlowBuffer = to;
    se.INSPECT_MAX_BYTES = 50;
    var je = 2147483647;
    se.kMaxLength = je;
    s.TYPED_ARRAY_SUPPORT = Ja();
    !s.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function Ja() { try {
        var r = new Uint8Array(1), e = { foo: function () { return 42; } };
        return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(r, e), r.foo() === 42;
    }
    catch {
        return !1;
    } }
    Object.defineProperty(s.prototype, "parent", { enumerable: !0, get: function () { if (s.isBuffer(this))
            return this.buffer; } });
    Object.defineProperty(s.prototype, "offset", { enumerable: !0, get: function () { if (s.isBuffer(this))
            return this.byteOffset; } });
    function k(r) { if (r > je)
        throw new RangeError('The value "' + r + '" is invalid for option "size"'); var e = new Uint8Array(r); return Object.setPrototypeOf(e, s.prototype), e; }
    function s(r, e, t) { if (typeof r == "number") {
        if (typeof e == "string")
            throw new TypeError('The "string" argument must be of type string. Received type number');
        return Or(r);
    } return Xt(r, e, t); }
    s.poolSize = 8192;
    function Xt(r, e, t) { if (typeof r == "string")
        return eo(r, e); if (ArrayBuffer.isView(r))
        return Fr(r); if (r == null)
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r); if (D(r, ArrayBuffer) || r && D(r.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (D(r, SharedArrayBuffer) || r && D(r.buffer, SharedArrayBuffer)))
        return Vt(r, e, t); if (typeof r == "number")
        throw new TypeError('The "value" argument must not be of type number. Received type number'); var n = r.valueOf && r.valueOf(); if (n != null && n !== r)
        return s.from(n, e, t); var i = ro(r); if (i)
        return i; if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof r[Symbol.toPrimitive] == "function")
        return s.from(r[Symbol.toPrimitive]("string"), e, t); throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r); }
    s.from = function (r, e, t) { return Xt(r, e, t); };
    Object.setPrototypeOf(s.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(s, Uint8Array);
    function Zt(r) { if (typeof r != "number")
        throw new TypeError('"size" argument must be of type number'); if (r < 0)
        throw new RangeError('The value "' + r + '" is invalid for option "size"'); }
    function Qa(r, e, t) { return Zt(r), r <= 0 ? k(r) : e !== void 0 ? typeof t == "string" ? k(r).fill(e, t) : k(r).fill(e) : k(r); }
    s.alloc = function (r, e, t) { return Qa(r, e, t); };
    function Or(r) { return Zt(r), k(r < 0 ? 0 : Ir(r) | 0); }
    s.allocUnsafe = function (r) { return Or(r); };
    s.allocUnsafeSlow = function (r) { return Or(r); };
    function eo(r, e) { if ((typeof e != "string" || e === "") && (e = "utf8"), !s.isEncoding(e))
        throw new TypeError("Unknown encoding: " + e); var t = Jt(r, e) | 0, n = k(t), i = n.write(r, e); return i !== t && (n = n.slice(0, i)), n; }
    function Fr(r) { for (var e = r.length < 0 ? 0 : Ir(r.length) | 0, t = k(e), n = 0; n < e; n += 1)
        t[n] = r[n] & 255; return t; }
    function Vt(r, e, t) { if (e < 0 || r.byteLength < e)
        throw new RangeError('"offset" is outside of buffer bounds'); if (r.byteLength < e + (t || 0))
        throw new RangeError('"length" is outside of buffer bounds'); var n; return e === void 0 && t === void 0 ? n = new Uint8Array(r) : t === void 0 ? n = new Uint8Array(r, e) : n = new Uint8Array(r, e, t), Object.setPrototypeOf(n, s.prototype), n; }
    function ro(r) { if (s.isBuffer(r)) {
        var e = Ir(r.length) | 0, t = k(e);
        return t.length === 0 || r.copy(t, 0, 0, e), t;
    } if (r.length !== void 0)
        return typeof r.length != "number" || Ur(r.length) ? k(0) : Fr(r); if (r.type === "Buffer" && Array.isArray(r.data))
        return Fr(r.data); }
    function Ir(r) { if (r >= je)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + je.toString(16) + " bytes"); return r | 0; }
    function to(r) { return +r != r && (r = 0), s.alloc(+r); }
    s.isBuffer = function (e) { return e != null && e._isBuffer === !0 && e !== s.prototype; };
    s.compare = function (e, t) { if (D(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), D(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t))
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'); if (e === t)
        return 0; for (var n = e.length, i = t.length, a = 0, o = Math.min(n, i); a < o; ++a)
        if (e[a] !== t[a]) {
            n = e[a], i = t[a];
            break;
        } return n < i ? -1 : i < n ? 1 : 0; };
    s.isEncoding = function (e) { switch (String(e).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le": return !0;
        default: return !1;
    } };
    s.concat = function (e, t) { if (!Array.isArray(e))
        throw new TypeError('"list" argument must be an Array of Buffers'); if (e.length === 0)
        return s.alloc(0); var n; if (t === void 0)
        for (t = 0, n = 0; n < e.length; ++n)
            t += e[n].length; var i = s.allocUnsafe(t), a = 0; for (n = 0; n < e.length; ++n) {
        var o = e[n];
        if (D(o, Uint8Array) && (o = s.from(o)), !s.isBuffer(o))
            throw new TypeError('"list" argument must be an Array of Buffers');
        o.copy(i, a), a += o.length;
    } return i; };
    function Jt(r, e) { if (s.isBuffer(r))
        return r.length; if (ArrayBuffer.isView(r) || D(r, ArrayBuffer))
        return r.byteLength; if (typeof r != "string")
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof r); var t = r.length, n = arguments.length > 2 && arguments[2] === !0; if (!n && t === 0)
        return 0; for (var i = !1;;)
        switch (e) {
            case "ascii":
            case "latin1":
            case "binary": return t;
            case "utf8":
            case "utf-8": return Pr(r).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le": return t * 2;
            case "hex": return t >>> 1;
            case "base64": return on(r).length;
            default:
                if (i)
                    return n ? -1 : Pr(r).length;
                e = ("" + e).toLowerCase(), i = !0;
        } }
    s.byteLength = Jt;
    function no(r, e, t) { var n = !1; if ((e === void 0 || e < 0) && (e = 0), e > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, e >>>= 0, t <= e))
        return ""; for (r || (r = "utf8");;)
        switch (r) {
            case "hex": return po(this, e, t);
            case "utf8":
            case "utf-8": return rn(this, e, t);
            case "ascii": return co(this, e, t);
            case "latin1":
            case "binary": return ho(this, e, t);
            case "base64": return so(this, e, t);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le": return yo(this, e, t);
            default:
                if (n)
                    throw new TypeError("Unknown encoding: " + r);
                r = (r + "").toLowerCase(), n = !0;
        } }
    s.prototype._isBuffer = !0;
    function Q(r, e, t) { var n = r[e]; r[e] = r[t], r[t] = n; }
    s.prototype.swap16 = function () { var e = this.length; if (e % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits"); for (var t = 0; t < e; t += 2)
        Q(this, t, t + 1); return this; };
    s.prototype.swap32 = function () { var e = this.length; if (e % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits"); for (var t = 0; t < e; t += 4)
        Q(this, t, t + 3), Q(this, t + 1, t + 2); return this; };
    s.prototype.swap64 = function () { var e = this.length; if (e % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits"); for (var t = 0; t < e; t += 8)
        Q(this, t, t + 7), Q(this, t + 1, t + 6), Q(this, t + 2, t + 5), Q(this, t + 3, t + 4); return this; };
    s.prototype.toString = function () { var e = this.length; return e === 0 ? "" : arguments.length === 0 ? rn(this, 0, e) : no.apply(this, arguments); };
    s.prototype.toLocaleString = s.prototype.toString;
    s.prototype.equals = function (e) { if (!s.isBuffer(e))
        throw new TypeError("Argument must be a Buffer"); return this === e ? !0 : s.compare(this, e) === 0; };
    s.prototype.inspect = function () { var e = "", t = se.INSPECT_MAX_BYTES; return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">"; };
    Gt && (s.prototype[Gt] = s.prototype.inspect);
    s.prototype.compare = function (e, t, n, i, a) { if (D(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e))
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e); if (t === void 0 && (t = 0), n === void 0 && (n = e ? e.length : 0), i === void 0 && (i = 0), a === void 0 && (a = this.length), t < 0 || n > e.length || i < 0 || a > this.length)
        throw new RangeError("out of range index"); if (i >= a && t >= n)
        return 0; if (i >= a)
        return -1; if (t >= n)
        return 1; if (t >>>= 0, n >>>= 0, i >>>= 0, a >>>= 0, this === e)
        return 0; for (var o = a - i, u = n - t, f = Math.min(o, u), l = this.slice(i, a), c = e.slice(t, n), h = 0; h < f; ++h)
        if (l[h] !== c[h]) {
            o = l[h], u = c[h];
            break;
        } return o < u ? -1 : u < o ? 1 : 0; };
    function Qt(r, e, t, n, i) { if (r.length === 0)
        return -1; if (typeof t == "string" ? (n = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, Ur(t) && (t = i ? 0 : r.length - 1), t < 0 && (t = r.length + t), t >= r.length) {
        if (i)
            return -1;
        t = r.length - 1;
    }
    else if (t < 0)
        if (i)
            t = 0;
        else
            return -1; if (typeof e == "string" && (e = s.from(e, n)), s.isBuffer(e))
        return e.length === 0 ? -1 : Kt(r, e, t, n, i); if (typeof e == "number")
        return e = e & 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(r, e, t) : Uint8Array.prototype.lastIndexOf.call(r, e, t) : Kt(r, [e], t, n, i); throw new TypeError("val must be string, number or Buffer"); }
    function Kt(r, e, t, n, i) { var a = 1, o = r.length, u = e.length; if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
        if (r.length < 2 || e.length < 2)
            return -1;
        a = 2, o /= 2, u /= 2, t /= 2;
    } function f(d, v) { return a === 1 ? d[v] : d.readUInt16BE(v * a); } var l; if (i) {
        var c = -1;
        for (l = t; l < o; l++)
            if (f(r, l) === f(e, c === -1 ? 0 : l - c)) {
                if (c === -1 && (c = l), l - c + 1 === u)
                    return c * a;
            }
            else
                c !== -1 && (l -= l - c), c = -1;
    }
    else
        for (t + u > o && (t = o - u), l = t; l >= 0; l--) {
            for (var h = !0, m = 0; m < u; m++)
                if (f(r, l + m) !== f(e, m)) {
                    h = !1;
                    break;
                }
            if (h)
                return l;
        } return -1; }
    s.prototype.includes = function (e, t, n) { return this.indexOf(e, t, n) !== -1; };
    s.prototype.indexOf = function (e, t, n) { return Qt(this, e, t, n, !0); };
    s.prototype.lastIndexOf = function (e, t, n) { return Qt(this, e, t, n, !1); };
    function io(r, e, t, n) { t = Number(t) || 0; var i = r.length - t; n ? (n = Number(n), n > i && (n = i)) : n = i; var a = e.length; n > a / 2 && (n = a / 2); for (var o = 0; o < n; ++o) {
        var u = parseInt(e.substr(o * 2, 2), 16);
        if (Ur(u))
            return o;
        r[t + o] = u;
    } return o; }
    function ao(r, e, t, n) { return qe(Pr(e, r.length - t), r, t, n); }
    function en(r, e, t, n) { return qe(wo(e), r, t, n); }
    function oo(r, e, t, n) { return en(r, e, t, n); }
    function uo(r, e, t, n) { return qe(on(e), r, t, n); }
    function fo(r, e, t, n) { return qe(mo(e, r.length - t), r, t, n); }
    s.prototype.write = function (e, t, n, i) { if (t === void 0)
        i = "utf8", n = this.length, t = 0;
    else if (n === void 0 && typeof t == "string")
        i = t, n = this.length, t = 0;
    else if (isFinite(t))
        t = t >>> 0, isFinite(n) ? (n = n >>> 0, i === void 0 && (i = "utf8")) : (i = n, n = void 0);
    else
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported"); var a = this.length - t; if ((n === void 0 || n > a) && (n = a), e.length > 0 && (n < 0 || t < 0) || t > this.length)
        throw new RangeError("Attempt to write outside buffer bounds"); i || (i = "utf8"); for (var o = !1;;)
        switch (i) {
            case "hex": return io(this, e, t, n);
            case "utf8":
            case "utf-8": return ao(this, e, t, n);
            case "ascii": return en(this, e, t, n);
            case "latin1":
            case "binary": return oo(this, e, t, n);
            case "base64": return uo(this, e, t, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le": return fo(this, e, t, n);
            default:
                if (o)
                    throw new TypeError("Unknown encoding: " + i);
                i = ("" + i).toLowerCase(), o = !0;
        } };
    s.prototype.toJSON = function () { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) }; };
    function so(r, e, t) { return e === 0 && t === r.length ? Mr.fromByteArray(r) : Mr.fromByteArray(r.slice(e, t)); }
    function rn(r, e, t) { t = Math.min(r.length, t); for (var n = [], i = e; i < t;) {
        var a = r[i], o = null, u = a > 239 ? 4 : a > 223 ? 3 : a > 191 ? 2 : 1;
        if (i + u <= t) {
            var f, l, c, h;
            switch (u) {
                case 1:
                    a < 128 && (o = a);
                    break;
                case 2:
                    f = r[i + 1], (f & 192) === 128 && (h = (a & 31) << 6 | f & 63, h > 127 && (o = h));
                    break;
                case 3:
                    f = r[i + 1], l = r[i + 2], (f & 192) === 128 && (l & 192) === 128 && (h = (a & 15) << 12 | (f & 63) << 6 | l & 63, h > 2047 && (h < 55296 || h > 57343) && (o = h));
                    break;
                case 4: f = r[i + 1], l = r[i + 2], c = r[i + 3], (f & 192) === 128 && (l & 192) === 128 && (c & 192) === 128 && (h = (a & 15) << 18 | (f & 63) << 12 | (l & 63) << 6 | c & 63, h > 65535 && h < 1114112 && (o = h));
            }
        }
        o === null ? (o = 65533, u = 1) : o > 65535 && (o -= 65536, n.push(o >>> 10 & 1023 | 55296), o = 56320 | o & 1023), n.push(o), i += u;
    } return lo(n); }
    var Yt = 4096;
    function lo(r) { var e = r.length; if (e <= Yt)
        return String.fromCharCode.apply(String, r); for (var t = "", n = 0; n < e;)
        t += String.fromCharCode.apply(String, r.slice(n, n += Yt)); return t; }
    function co(r, e, t) { var n = ""; t = Math.min(r.length, t); for (var i = e; i < t; ++i)
        n += String.fromCharCode(r[i] & 127); return n; }
    function ho(r, e, t) { var n = ""; t = Math.min(r.length, t); for (var i = e; i < t; ++i)
        n += String.fromCharCode(r[i]); return n; }
    function po(r, e, t) { var n = r.length; (!e || e < 0) && (e = 0), (!t || t < 0 || t > n) && (t = n); for (var i = "", a = e; a < t; ++a)
        i += vo[r[a]]; return i; }
    function yo(r, e, t) { for (var n = r.slice(e, t), i = "", a = 0; a < n.length; a += 2)
        i += String.fromCharCode(n[a] + n[a + 1] * 256); return i; }
    s.prototype.slice = function (e, t) { var n = this.length; e = ~~e, t = t === void 0 ? n : ~~t, e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), t < e && (t = e); var i = this.subarray(e, t); return Object.setPrototypeOf(i, s.prototype), i; };
    function S(r, e, t) { if (r % 1 !== 0 || r < 0)
        throw new RangeError("offset is not uint"); if (r + e > t)
        throw new RangeError("Trying to access beyond buffer length"); }
    s.prototype.readUIntLE = function (e, t, n) { e = e >>> 0, t = t >>> 0, n || S(e, t, this.length); for (var i = this[e], a = 1, o = 0; ++o < t && (a *= 256);)
        i += this[e + o] * a; return i; };
    s.prototype.readUIntBE = function (e, t, n) { e = e >>> 0, t = t >>> 0, n || S(e, t, this.length); for (var i = this[e + --t], a = 1; t > 0 && (a *= 256);)
        i += this[e + --t] * a; return i; };
    s.prototype.readUInt8 = function (e, t) { return e = e >>> 0, t || S(e, 1, this.length), this[e]; };
    s.prototype.readUInt16LE = function (e, t) { return e = e >>> 0, t || S(e, 2, this.length), this[e] | this[e + 1] << 8; };
    s.prototype.readUInt16BE = function (e, t) { return e = e >>> 0, t || S(e, 2, this.length), this[e] << 8 | this[e + 1]; };
    s.prototype.readUInt32LE = function (e, t) { return e = e >>> 0, t || S(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216; };
    s.prototype.readUInt32BE = function (e, t) { return e = e >>> 0, t || S(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]); };
    s.prototype.readIntLE = function (e, t, n) { e = e >>> 0, t = t >>> 0, n || S(e, t, this.length); for (var i = this[e], a = 1, o = 0; ++o < t && (a *= 256);)
        i += this[e + o] * a; return a *= 128, i >= a && (i -= Math.pow(2, 8 * t)), i; };
    s.prototype.readIntBE = function (e, t, n) { e = e >>> 0, t = t >>> 0, n || S(e, t, this.length); for (var i = t, a = 1, o = this[e + --i]; i > 0 && (a *= 256);)
        o += this[e + --i] * a; return a *= 128, o >= a && (o -= Math.pow(2, 8 * t)), o; };
    s.prototype.readInt8 = function (e, t) { return e = e >>> 0, t || S(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e]; };
    s.prototype.readInt16LE = function (e, t) { e = e >>> 0, t || S(e, 2, this.length); var n = this[e] | this[e + 1] << 8; return n & 32768 ? n | 4294901760 : n; };
    s.prototype.readInt16BE = function (e, t) { e = e >>> 0, t || S(e, 2, this.length); var n = this[e + 1] | this[e] << 8; return n & 32768 ? n | 4294901760 : n; };
    s.prototype.readInt32LE = function (e, t) { return e = e >>> 0, t || S(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24; };
    s.prototype.readInt32BE = function (e, t) { return e = e >>> 0, t || S(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]; };
    s.prototype.readFloatLE = function (e, t) { return e = e >>> 0, t || S(e, 4, this.length), fe.read(this, e, !0, 23, 4); };
    s.prototype.readFloatBE = function (e, t) { return e = e >>> 0, t || S(e, 4, this.length), fe.read(this, e, !1, 23, 4); };
    s.prototype.readDoubleLE = function (e, t) { return e = e >>> 0, t || S(e, 8, this.length), fe.read(this, e, !0, 52, 8); };
    s.prototype.readDoubleBE = function (e, t) { return e = e >>> 0, t || S(e, 8, this.length), fe.read(this, e, !1, 52, 8); };
    function R(r, e, t, n, i, a) { if (!s.isBuffer(r))
        throw new TypeError('"buffer" argument must be a Buffer instance'); if (e > i || e < a)
        throw new RangeError('"value" argument is out of bounds'); if (t + n > r.length)
        throw new RangeError("Index out of range"); }
    s.prototype.writeUIntLE = function (e, t, n, i) { if (e = +e, t = t >>> 0, n = n >>> 0, !i) {
        var a = Math.pow(2, 8 * n) - 1;
        R(this, e, t, n, a, 0);
    } var o = 1, u = 0; for (this[t] = e & 255; ++u < n && (o *= 256);)
        this[t + u] = e / o & 255; return t + n; };
    s.prototype.writeUIntBE = function (e, t, n, i) { if (e = +e, t = t >>> 0, n = n >>> 0, !i) {
        var a = Math.pow(2, 8 * n) - 1;
        R(this, e, t, n, a, 0);
    } var o = n - 1, u = 1; for (this[t + o] = e & 255; --o >= 0 && (u *= 256);)
        this[t + o] = e / u & 255; return t + n; };
    s.prototype.writeUInt8 = function (e, t, n) { return e = +e, t = t >>> 0, n || R(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1; };
    s.prototype.writeUInt16LE = function (e, t, n) { return e = +e, t = t >>> 0, n || R(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2; };
    s.prototype.writeUInt16BE = function (e, t, n) { return e = +e, t = t >>> 0, n || R(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2; };
    s.prototype.writeUInt32LE = function (e, t, n) { return e = +e, t = t >>> 0, n || R(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4; };
    s.prototype.writeUInt32BE = function (e, t, n) { return e = +e, t = t >>> 0, n || R(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4; };
    s.prototype.writeIntLE = function (e, t, n, i) { if (e = +e, t = t >>> 0, !i) {
        var a = Math.pow(2, 8 * n - 1);
        R(this, e, t, n, a - 1, -a);
    } var o = 0, u = 1, f = 0; for (this[t] = e & 255; ++o < n && (u *= 256);)
        e < 0 && f === 0 && this[t + o - 1] !== 0 && (f = 1), this[t + o] = (e / u >> 0) - f & 255; return t + n; };
    s.prototype.writeIntBE = function (e, t, n, i) { if (e = +e, t = t >>> 0, !i) {
        var a = Math.pow(2, 8 * n - 1);
        R(this, e, t, n, a - 1, -a);
    } var o = n - 1, u = 1, f = 0; for (this[t + o] = e & 255; --o >= 0 && (u *= 256);)
        e < 0 && f === 0 && this[t + o + 1] !== 0 && (f = 1), this[t + o] = (e / u >> 0) - f & 255; return t + n; };
    s.prototype.writeInt8 = function (e, t, n) { return e = +e, t = t >>> 0, n || R(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1; };
    s.prototype.writeInt16LE = function (e, t, n) { return e = +e, t = t >>> 0, n || R(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2; };
    s.prototype.writeInt16BE = function (e, t, n) { return e = +e, t = t >>> 0, n || R(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2; };
    s.prototype.writeInt32LE = function (e, t, n) { return e = +e, t = t >>> 0, n || R(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4; };
    s.prototype.writeInt32BE = function (e, t, n) { return e = +e, t = t >>> 0, n || R(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4; };
    function tn(r, e, t, n, i, a) { if (t + n > r.length)
        throw new RangeError("Index out of range"); if (t < 0)
        throw new RangeError("Index out of range"); }
    function nn(r, e, t, n, i) { return e = +e, t = t >>> 0, i || tn(r, e, t, 4, 34028234663852886e22, -34028234663852886e22), fe.write(r, e, t, n, 23, 4), t + 4; }
    s.prototype.writeFloatLE = function (e, t, n) { return nn(this, e, t, !0, n); };
    s.prototype.writeFloatBE = function (e, t, n) { return nn(this, e, t, !1, n); };
    function an(r, e, t, n, i) { return e = +e, t = t >>> 0, i || tn(r, e, t, 8, 17976931348623157e292, -17976931348623157e292), fe.write(r, e, t, n, 52, 8), t + 8; }
    s.prototype.writeDoubleLE = function (e, t, n) { return an(this, e, t, !0, n); };
    s.prototype.writeDoubleBE = function (e, t, n) { return an(this, e, t, !1, n); };
    s.prototype.copy = function (e, t, n, i) { if (!s.isBuffer(e))
        throw new TypeError("argument should be a Buffer"); if (n || (n = 0), !i && i !== 0 && (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < n && (i = n), i === n || e.length === 0 || this.length === 0)
        return 0; if (t < 0)
        throw new RangeError("targetStart out of bounds"); if (n < 0 || n >= this.length)
        throw new RangeError("Index out of range"); if (i < 0)
        throw new RangeError("sourceEnd out of bounds"); i > this.length && (i = this.length), e.length - t < i - n && (i = e.length - t + n); var a = i - n; if (this === e && typeof Uint8Array.prototype.copyWithin == "function")
        this.copyWithin(t, n, i);
    else if (this === e && n < t && t < i)
        for (var o = a - 1; o >= 0; --o)
            e[o + t] = this[o + n];
    else
        Uint8Array.prototype.set.call(e, this.subarray(n, i), t); return a; };
    s.prototype.fill = function (e, t, n, i) { if (typeof e == "string") {
        if (typeof t == "string" ? (i = t, t = 0, n = this.length) : typeof n == "string" && (i = n, n = this.length), i !== void 0 && typeof i != "string")
            throw new TypeError("encoding must be a string");
        if (typeof i == "string" && !s.isEncoding(i))
            throw new TypeError("Unknown encoding: " + i);
        if (e.length === 1) {
            var a = e.charCodeAt(0);
            (i === "utf8" && a < 128 || i === "latin1") && (e = a);
        }
    }
    else
        typeof e == "number" ? e = e & 255 : typeof e == "boolean" && (e = Number(e)); if (t < 0 || this.length < t || this.length < n)
        throw new RangeError("Out of range index"); if (n <= t)
        return this; t = t >>> 0, n = n === void 0 ? this.length : n >>> 0, e || (e = 0); var o; if (typeof e == "number")
        for (o = t; o < n; ++o)
            this[o] = e;
    else {
        var u = s.isBuffer(e) ? e : s.from(e, i), f = u.length;
        if (f === 0)
            throw new TypeError('The value "' + e + '" is invalid for argument "value"');
        for (o = 0; o < n - t; ++o)
            this[o + t] = u[o % f];
    } return this; };
    var go = /[^+/0-9A-Za-z-_]/g;
    function bo(r) { if (r = r.split("=")[0], r = r.trim().replace(go, ""), r.length < 2)
        return ""; for (; r.length % 4 !== 0;)
        r = r + "="; return r; }
    function Pr(r, e) { e = e || 1 / 0; for (var t, n = r.length, i = null, a = [], o = 0; o < n; ++o) {
        if (t = r.charCodeAt(o), t > 55295 && t < 57344) {
            if (!i) {
                if (t > 56319) {
                    (e -= 3) > -1 && a.push(239, 191, 189);
                    continue;
                }
                else if (o + 1 === n) {
                    (e -= 3) > -1 && a.push(239, 191, 189);
                    continue;
                }
                i = t;
                continue;
            }
            if (t < 56320) {
                (e -= 3) > -1 && a.push(239, 191, 189), i = t;
                continue;
            }
            t = (i - 55296 << 10 | t - 56320) + 65536;
        }
        else
            i && (e -= 3) > -1 && a.push(239, 191, 189);
        if (i = null, t < 128) {
            if ((e -= 1) < 0)
                break;
            a.push(t);
        }
        else if (t < 2048) {
            if ((e -= 2) < 0)
                break;
            a.push(t >> 6 | 192, t & 63 | 128);
        }
        else if (t < 65536) {
            if ((e -= 3) < 0)
                break;
            a.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
        }
        else if (t < 1114112) {
            if ((e -= 4) < 0)
                break;
            a.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
        }
        else
            throw new Error("Invalid code point");
    } return a; }
    function wo(r) { for (var e = [], t = 0; t < r.length; ++t)
        e.push(r.charCodeAt(t) & 255); return e; }
    function mo(r, e) { for (var t, n, i, a = [], o = 0; o < r.length && !((e -= 2) < 0); ++o)
        t = r.charCodeAt(o), n = t >> 8, i = t % 256, a.push(i), a.push(n); return a; }
    function on(r) { return Mr.toByteArray(bo(r)); }
    function qe(r, e, t, n) { for (var i = 0; i < n && !(i + t >= e.length || i >= r.length); ++i)
        e[i + t] = r[i]; return i; }
    function D(r, e) { return r instanceof e || r != null && r.constructor != null && r.constructor.name != null && r.constructor.name === e.name; }
    function Ur(r) { return r !== r; }
    var vo = (function () { for (var r = "0123456789abcdef", e = new Array(256), t = 0; t < 16; ++t)
        for (var n = t * 16, i = 0; i < 16; ++i)
            e[n + i] = r[t] + r[i]; return e; })();
});
var z = p((Cl, Lr) => { typeof Object.create == "function" ? Lr.exports = function (e, t) { t && (e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })); } : Lr.exports = function (e, t) { if (t) {
    e.super_ = t;
    var n = function () { };
    n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e;
} }; });
var Nr = p((Ml, ln) => { ln.exports = Ue().EventEmitter; });
var Se = p((Fl, cn) => {
    "use strict";
    var Eo = Na();
    cn.exports = function () { return Eo() && !!Symbol.toStringTag; };
});
var dn = p((Pl, pn) => {
    "use strict";
    var So = Se()(), _o = ve(), kr = _o("Object.prototype.toString"), We = function (e) { return So && e && typeof e == "object" && Symbol.toStringTag in e ? !1 : kr(e) === "[object Arguments]"; }, hn = function (e) { return We(e) ? !0 : e !== null && typeof e == "object" && "length" in e && typeof e.length == "number" && e.length >= 0 && kr(e) !== "[object Array]" && "callee" in e && kr(e.callee) === "[object Function]"; }, Ao = (function () { return We(arguments); })();
    We.isLegacyArguments = hn;
    pn.exports = Ao ? We : hn;
});
var vn = p((Ol, mn) => {
    "use strict";
    var yn = ve(), Ro = Se()(), xo = Ha(), To = Le(), qr;
    Ro ? (gn = yn("RegExp.prototype.exec"), Dr = {}, He = function () { throw Dr; }, jr = { toString: He, valueOf: He }, typeof Symbol.toPrimitive == "symbol" && (jr[Symbol.toPrimitive] = He), qr = function (e) { if (!e || typeof e != "object")
        return !1; var t = To(e, "lastIndex"), n = t && xo(t, "value"); if (!n)
        return !1; try {
        gn(e, jr);
    }
    catch (i) {
        return i === Dr;
    } }) : (bn = yn("Object.prototype.toString"), wn = "[object RegExp]", qr = function (e) { return !e || typeof e != "object" && typeof e != "function" ? !1 : bn(e) === wn; });
    var gn, Dr, He, jr, bn, wn;
    mn.exports = qr;
});
var Sn = p((Il, En) => {
    "use strict";
    var Bo = ve(), Co = vn(), Mo = Bo("RegExp.prototype.exec"), Fo = xr();
    En.exports = function (e) { if (!Co(e))
        throw new Fo("`regex` must be a RegExp"); return function (n) { return Mo(e, n) !== null; }; };
});
var An = p((Ul, _n) => {
    "use strict";
    var Po = function* () { }.constructor;
    _n.exports = () => Po;
});
var Bn = p((Ll, Tn) => {
    "use strict";
    var xn = ve(), Oo = Sn(), Io = Oo(/^\s*(?:function)?\*/), Uo = Se()(), Rn = qt(), Lo = xn("Object.prototype.toString"), No = xn("Function.prototype.toString"), ko = An();
    Tn.exports = function (e) { if (typeof e != "function")
        return !1; if (Io(No(e)))
        return !0; if (!Uo) {
        var t = Lo(e);
        return t === "[object GeneratorFunction]";
    } if (!Rn)
        return !1; var n = ko(); return n && Rn(e) === n.prototype; };
});
var Pn = p((Nl, Fn) => {
    "use strict";
    var Mn = Function.prototype.toString, ce = typeof Reflect == "object" && Reflect !== null && Reflect.apply, Hr, $e;
    if (typeof ce == "function" && typeof Object.defineProperty == "function")
        try {
            Hr = Object.defineProperty({}, "length", { get: function () { throw $e; } }), $e = {}, ce(function () { throw 42; }, null, Hr);
        }
        catch (r) {
            r !== $e && (ce = null);
        }
    else
        ce = null;
    var Do = /^\s*class\b/, $r = function (e) { try {
        var t = Mn.call(e);
        return Do.test(t);
    }
    catch {
        return !1;
    } }, Wr = function (e) { try {
        return $r(e) ? !1 : (Mn.call(e), !0);
    }
    catch {
        return !1;
    } }, ze = Object.prototype.toString, jo = "[object Object]", qo = "[object Function]", Wo = "[object GeneratorFunction]", Ho = "[object HTMLAllCollection]", $o = "[object HTML document.all class]", zo = "[object HTMLCollection]", Go = typeof Symbol == "function" && !!Symbol.toStringTag, Vo = !(0 in [,]), zr = function () { return !1; };
    typeof document == "object" && (Cn = document.all, ze.call(Cn) === ze.call(document.all) && (zr = function (e) { if ((Vo || !e) && (typeof e > "u" || typeof e == "object"))
        try {
            var t = ze.call(e);
            return (t === Ho || t === $o || t === zo || t === jo) && e("") == null;
        }
        catch { } return !1; }));
    var Cn;
    Fn.exports = ce ? function (e) { if (zr(e))
        return !0; if (!e || typeof e != "function" && typeof e != "object")
        return !1; try {
        ce(e, null, Hr);
    }
    catch (t) {
        if (t !== $e)
            return !1;
    } return !$r(e) && Wr(e); } : function (e) { if (zr(e))
        return !0; if (!e || typeof e != "function" && typeof e != "object")
        return !1; if (Go)
        return Wr(e); if ($r(e))
        return !1; var t = ze.call(e); return t !== qo && t !== Wo && !/^\[object HTML/.test(t) ? !1 : Wr(e); };
});
var Un = p((kl, In) => {
    "use strict";
    var Ko = Pn(), Yo = Object.prototype.toString, On = Object.prototype.hasOwnProperty, Xo = function (e, t, n) { for (var i = 0, a = e.length; i < a; i++)
        On.call(e, i) && (n == null ? t(e[i], i, e) : t.call(n, e[i], i, e)); }, Zo = function (e, t, n) { for (var i = 0, a = e.length; i < a; i++)
        n == null ? t(e.charAt(i), i, e) : t.call(n, e.charAt(i), i, e); }, Jo = function (e, t, n) { for (var i in e)
        On.call(e, i) && (n == null ? t(e[i], i, e) : t.call(n, e[i], i, e)); };
    function Qo(r) { return Yo.call(r) === "[object Array]"; }
    In.exports = function (e, t, n) { if (!Ko(t))
        throw new TypeError("iterator must be a function"); var i; arguments.length >= 3 && (i = n), Qo(e) ? Xo(e, t, i) : typeof e == "string" ? Zo(e, t, i) : Jo(e, t, i); };
});
var Nn = p((Dl, Ln) => {
    "use strict";
    Ln.exports = ["Float16Array", "Float32Array", "Float64Array", "Int8Array", "Int16Array", "Int32Array", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array"];
});
var Dn = p((jl, kn) => {
    "use strict";
    var Gr = Nn(), eu = typeof globalThis > "u" ? global : globalThis;
    kn.exports = function () { for (var e = [], t = 0; t < Gr.length; t++)
        typeof eu[Gr[t]] == "function" && (e[e.length] = Gr[t]); return e; };
});
var Hn = p((ql, Wn) => {
    "use strict";
    var jn = Tr(), ru = ka(), he = xr(), qn = Le();
    Wn.exports = function (e, t, n) { if (!e || typeof e != "object" && typeof e != "function")
        throw new he("`obj` must be an object or a function`"); if (typeof t != "string" && typeof t != "symbol")
        throw new he("`property` must be a string or a symbol`"); if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
        throw new he("`nonEnumerable`, if provided, must be a boolean or null"); if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
        throw new he("`nonWritable`, if provided, must be a boolean or null"); if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
        throw new he("`nonConfigurable`, if provided, must be a boolean or null"); if (arguments.length > 6 && typeof arguments[6] != "boolean")
        throw new he("`loose`, if provided, must be a boolean"); var i = arguments.length > 3 ? arguments[3] : null, a = arguments.length > 4 ? arguments[4] : null, o = arguments.length > 5 ? arguments[5] : null, u = arguments.length > 6 ? arguments[6] : !1, f = !!qn && qn(e, t); if (jn)
        jn(e, t, { configurable: o === null && f ? f.configurable : !o, enumerable: i === null && f ? f.enumerable : !i, value: n, writable: a === null && f ? f.writable : !a });
    else if (u || !i && !a && !o)
        e[t] = n;
    else
        throw new ru("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable."); };
});
var Gn = p((Wl, zn) => {
    "use strict";
    var Vr = Tr(), $n = function () { return !!Vr; };
    $n.hasArrayLengthDefineBug = function () { if (!Vr)
        return null; try {
        return Vr([], "length", { value: 1 }).length !== 1;
    }
    catch {
        return !0;
    } };
    zn.exports = $n;
});
var Zn = p((Hl, Xn) => {
    "use strict";
    var tu = $a(), Vn = Hn(), nu = Gn()(), Kn = Le(), Yn = xr(), iu = tu("%Math.floor%");
    Xn.exports = function (e, t) { if (typeof e != "function")
        throw new Yn("`fn` is not a function"); if (typeof t != "number" || t < 0 || t > 4294967295 || iu(t) !== t)
        throw new Yn("`length` must be a positive 32-bit integer"); var n = arguments.length > 2 && !!arguments[2], i = !0, a = !0; if ("length" in e && Kn) {
        var o = Kn(e, "length");
        o && !o.configurable && (i = !1), o && !o.writable && (a = !1);
    } return (i || a || !n) && (nu ? Vn(e, "length", t, !0, !0) : Vn(e, "length", t)), e; };
});
var Qn = p(($l, Jn) => {
    "use strict";
    var au = Da(), ou = ja(), uu = qa();
    Jn.exports = function () { return uu(au, ou, arguments); };
});
var ti = p((zl, Ge) => {
    "use strict";
    var fu = Zn(), ei = Tr(), su = Wa(), ri = Qn();
    Ge.exports = function (e) { var t = su(arguments), n = e.length - (arguments.length - 1); return fu(t, 1 + (n > 0 ? n : 0), !0); };
    ei ? ei(Ge.exports, "apply", { value: ri }) : Ge.exports.apply = ri;
});
var Zr = p((Gl, oi) => {
    "use strict";
    var Ye = Un(), lu = Dn(), ni = ti(), Yr = ve(), Ke = Le(), Ve = qt(), cu = Yr("Object.prototype.toString"), ai = Se()(), ii = typeof globalThis > "u" ? global : globalThis, Kr = lu(), Xr = Yr("String.prototype.slice"), hu = Yr("Array.prototype.indexOf", !0) || function (e, t) { for (var n = 0; n < e.length; n += 1)
        if (e[n] === t)
            return n; return -1; }, Xe = { __proto__: null };
    ai && Ke && Ve ? Ye(Kr, function (r) { var e = new ii[r]; if (Symbol.toStringTag in e && Ve) {
        var t = Ve(e), n = Ke(t, Symbol.toStringTag);
        if (!n && t) {
            var i = Ve(t);
            n = Ke(i, Symbol.toStringTag);
        }
        Xe["$" + r] = ni(n.get);
    } }) : Ye(Kr, function (r) { var e = new ii[r], t = e.slice || e.set; t && (Xe["$" + r] = ni(t)); });
    var pu = function (e) { var t = !1; return Ye(Xe, function (n, i) { if (!t)
        try {
            "$" + n(e) === i && (t = Xr(i, 1));
        }
        catch { } }), t; }, du = function (e) { var t = !1; return Ye(Xe, function (n, i) { if (!t)
        try {
            n(e), t = Xr(i, 1);
        }
        catch { } }), t; };
    oi.exports = function (e) { if (!e || typeof e != "object")
        return !1; if (!ai) {
        var t = Xr(cu(e), 8, -1);
        return hu(Kr, t) > -1 ? t : t !== "Object" ? !1 : du(e);
    } return Ke ? pu(e) : null; };
});
var fi = p((Vl, ui) => {
    "use strict";
    var yu = Zr();
    ui.exports = function (e) { return !!yu(e); };
});
var Si = p(g => {
    "use strict";
    var gu = dn(), bu = Bn(), M = Zr(), si = fi();
    function pe(r) { return r.call.bind(r); }
    var li = typeof BigInt < "u", ci = typeof Symbol < "u", T = pe(Object.prototype.toString), wu = pe(Number.prototype.valueOf), mu = pe(String.prototype.valueOf), vu = pe(Boolean.prototype.valueOf);
    li && (hi = pe(BigInt.prototype.valueOf));
    var hi;
    ci && (pi = pe(Symbol.prototype.valueOf));
    var pi;
    function Ae(r, e) { if (typeof r != "object")
        return !1; try {
        return e(r), !0;
    }
    catch {
        return !1;
    } }
    g.isArgumentsObject = gu;
    g.isGeneratorFunction = bu;
    g.isTypedArray = si;
    function Eu(r) { return typeof Promise < "u" && r instanceof Promise || r !== null && typeof r == "object" && typeof r.then == "function" && typeof r.catch == "function"; }
    g.isPromise = Eu;
    function Su(r) { return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(r) : si(r) || yi(r); }
    g.isArrayBufferView = Su;
    function _u(r) { return M(r) === "Uint8Array"; }
    g.isUint8Array = _u;
    function Au(r) { return M(r) === "Uint8ClampedArray"; }
    g.isUint8ClampedArray = Au;
    function Ru(r) { return M(r) === "Uint16Array"; }
    g.isUint16Array = Ru;
    function xu(r) { return M(r) === "Uint32Array"; }
    g.isUint32Array = xu;
    function Tu(r) { return M(r) === "Int8Array"; }
    g.isInt8Array = Tu;
    function Bu(r) { return M(r) === "Int16Array"; }
    g.isInt16Array = Bu;
    function Cu(r) { return M(r) === "Int32Array"; }
    g.isInt32Array = Cu;
    function Mu(r) { return M(r) === "Float32Array"; }
    g.isFloat32Array = Mu;
    function Fu(r) { return M(r) === "Float64Array"; }
    g.isFloat64Array = Fu;
    function Pu(r) { return M(r) === "BigInt64Array"; }
    g.isBigInt64Array = Pu;
    function Ou(r) { return M(r) === "BigUint64Array"; }
    g.isBigUint64Array = Ou;
    function Ze(r) { return T(r) === "[object Map]"; }
    Ze.working = typeof Map < "u" && Ze(new Map);
    function Iu(r) { return typeof Map > "u" ? !1 : Ze.working ? Ze(r) : r instanceof Map; }
    g.isMap = Iu;
    function Je(r) { return T(r) === "[object Set]"; }
    Je.working = typeof Set < "u" && Je(new Set);
    function Uu(r) { return typeof Set > "u" ? !1 : Je.working ? Je(r) : r instanceof Set; }
    g.isSet = Uu;
    function Qe(r) { return T(r) === "[object WeakMap]"; }
    Qe.working = typeof WeakMap < "u" && Qe(new WeakMap);
    function Lu(r) { return typeof WeakMap > "u" ? !1 : Qe.working ? Qe(r) : r instanceof WeakMap; }
    g.isWeakMap = Lu;
    function Qr(r) { return T(r) === "[object WeakSet]"; }
    Qr.working = typeof WeakSet < "u" && Qr(new WeakSet);
    function Nu(r) { return Qr(r); }
    g.isWeakSet = Nu;
    function er(r) { return T(r) === "[object ArrayBuffer]"; }
    er.working = typeof ArrayBuffer < "u" && er(new ArrayBuffer);
    function di(r) { return typeof ArrayBuffer > "u" ? !1 : er.working ? er(r) : r instanceof ArrayBuffer; }
    g.isArrayBuffer = di;
    function rr(r) { return T(r) === "[object DataView]"; }
    rr.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && rr(new DataView(new ArrayBuffer(1), 0, 1));
    function yi(r) { return typeof DataView > "u" ? !1 : rr.working ? rr(r) : r instanceof DataView; }
    g.isDataView = yi;
    var Jr = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
    function _e(r) { return T(r) === "[object SharedArrayBuffer]"; }
    function gi(r) { return typeof Jr > "u" ? !1 : (typeof _e.working > "u" && (_e.working = _e(new Jr)), _e.working ? _e(r) : r instanceof Jr); }
    g.isSharedArrayBuffer = gi;
    function ku(r) { return T(r) === "[object AsyncFunction]"; }
    g.isAsyncFunction = ku;
    function Du(r) { return T(r) === "[object Map Iterator]"; }
    g.isMapIterator = Du;
    function ju(r) { return T(r) === "[object Set Iterator]"; }
    g.isSetIterator = ju;
    function qu(r) { return T(r) === "[object Generator]"; }
    g.isGeneratorObject = qu;
    function Wu(r) { return T(r) === "[object WebAssembly.Module]"; }
    g.isWebAssemblyCompiledModule = Wu;
    function bi(r) { return Ae(r, wu); }
    g.isNumberObject = bi;
    function wi(r) { return Ae(r, mu); }
    g.isStringObject = wi;
    function mi(r) { return Ae(r, vu); }
    g.isBooleanObject = mi;
    function vi(r) { return li && Ae(r, hi); }
    g.isBigIntObject = vi;
    function Ei(r) { return ci && Ae(r, pi); }
    g.isSymbolObject = Ei;
    function Hu(r) { return bi(r) || wi(r) || mi(r) || vi(r) || Ei(r); }
    g.isBoxedPrimitive = Hu;
    function $u(r) { return typeof Uint8Array < "u" && (di(r) || gi(r)); }
    g.isAnyArrayBuffer = $u;
    ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function (r) { Object.defineProperty(g, r, { enumerable: !1, value: function () { throw new Error(r + " is not supported in userland"); } }); });
});
var Ai = p((Yl, _i) => { _i.exports = function (e) { return e && typeof e == "object" && typeof e.copy == "function" && typeof e.fill == "function" && typeof e.readUInt8 == "function"; }; });
var at = p(b => {
    var Ri = Object.getOwnPropertyDescriptors || function (e) { for (var t = Object.keys(e), n = {}, i = 0; i < t.length; i++)
        n[t[i]] = Object.getOwnPropertyDescriptor(e, t[i]); return n; }, zu = /%[sdj%]/g;
    b.format = function (r) { if (!fr(r)) {
        for (var e = [], t = 0; t < arguments.length; t++)
            e.push(G(arguments[t]));
        return e.join(" ");
    } for (var t = 1, n = arguments, i = n.length, a = String(r).replace(zu, function (u) { if (u === "%%")
        return "%"; if (t >= i)
        return u; switch (u) {
        case "%s": return String(n[t++]);
        case "%d": return Number(n[t++]);
        case "%j": try {
            return JSON.stringify(n[t++]);
        }
        catch {
            return "[Circular]";
        }
        default: return u;
    } }), o = n[t]; t < i; o = n[++t])
        ur(o) || !de(o) ? a += " " + o : a += " " + G(o); return a; };
    b.deprecate = function (r, e) { if (typeof process < "u" && process.noDeprecation === !0)
        return r; if (typeof process > "u")
        return function () { return b.deprecate(r, e).apply(this, arguments); }; var t = !1; function n() { if (!t) {
        if (process.throwDeprecation)
            throw new Error(e);
        process.traceDeprecation ? console.trace(e) : console.error(e), t = !0;
    } return r.apply(this, arguments); } return n; };
    var tr = {}, xi = /^$/;
    process.env.NODE_DEBUG && (nr = process.env.NODE_DEBUG, nr = nr.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), xi = new RegExp("^" + nr + "$", "i"));
    var nr;
    b.debuglog = function (r) { if (r = r.toUpperCase(), !tr[r])
        if (xi.test(r)) {
            var e = process.pid;
            tr[r] = function () { var t = b.format.apply(b, arguments); console.error("%s %d: %s", r, e, t); };
        }
        else
            tr[r] = function () { }; return tr[r]; };
    function G(r, e) { var t = { seen: [], stylize: Vu }; return arguments.length >= 3 && (t.depth = arguments[2]), arguments.length >= 4 && (t.colors = arguments[3]), nt(e) ? t.showHidden = e : e && b._extend(t, e), re(t.showHidden) && (t.showHidden = !1), re(t.depth) && (t.depth = 2), re(t.colors) && (t.colors = !1), re(t.customInspect) && (t.customInspect = !0), t.colors && (t.stylize = Gu), ar(t, r, t.depth); }
    b.inspect = G;
    G.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] };
    G.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" };
    function Gu(r, e) { var t = G.styles[e]; return t ? "\x1B[" + G.colors[t][0] + "m" + r + "\x1B[" + G.colors[t][1] + "m" : r; }
    function Vu(r, e) { return r; }
    function Ku(r) { var e = {}; return r.forEach(function (t, n) { e[t] = !0; }), e; }
    function ar(r, e, t) { if (r.customInspect && e && ir(e.inspect) && e.inspect !== b.inspect && !(e.constructor && e.constructor.prototype === e)) {
        var n = e.inspect(t, r);
        return fr(n) || (n = ar(r, n, t)), n;
    } var i = Yu(r, e); if (i)
        return i; var a = Object.keys(e), o = Ku(a); if (r.showHidden && (a = Object.getOwnPropertyNames(e)), xe(e) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0))
        return et(e); if (a.length === 0) {
        if (ir(e)) {
            var u = e.name ? ": " + e.name : "";
            return r.stylize("[Function" + u + "]", "special");
        }
        if (Re(e))
            return r.stylize(RegExp.prototype.toString.call(e), "regexp");
        if (or(e))
            return r.stylize(Date.prototype.toString.call(e), "date");
        if (xe(e))
            return et(e);
    } var f = "", l = !1, c = ["{", "}"]; if (Ti(e) && (l = !0, c = ["[", "]"]), ir(e)) {
        var h = e.name ? ": " + e.name : "";
        f = " [Function" + h + "]";
    } if (Re(e) && (f = " " + RegExp.prototype.toString.call(e)), or(e) && (f = " " + Date.prototype.toUTCString.call(e)), xe(e) && (f = " " + et(e)), a.length === 0 && (!l || e.length == 0))
        return c[0] + f + c[1]; if (t < 0)
        return Re(e) ? r.stylize(RegExp.prototype.toString.call(e), "regexp") : r.stylize("[Object]", "special"); r.seen.push(e); var m; return l ? m = Xu(r, e, t, o, a) : m = a.map(function (d) { return tt(r, e, t, o, d, l); }), r.seen.pop(), Zu(m, f, c); }
    function Yu(r, e) { if (re(e))
        return r.stylize("undefined", "undefined"); if (fr(e)) {
        var t = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return r.stylize(t, "string");
    } if (Bi(e))
        return r.stylize("" + e, "number"); if (nt(e))
        return r.stylize("" + e, "boolean"); if (ur(e))
        return r.stylize("null", "null"); }
    function et(r) { return "[" + Error.prototype.toString.call(r) + "]"; }
    function Xu(r, e, t, n, i) { for (var a = [], o = 0, u = e.length; o < u; ++o)
        Ci(e, String(o)) ? a.push(tt(r, e, t, n, String(o), !0)) : a.push(""); return i.forEach(function (f) { f.match(/^\d+$/) || a.push(tt(r, e, t, n, f, !0)); }), a; }
    function tt(r, e, t, n, i, a) {
        var o, u, f;
        if (f = Object.getOwnPropertyDescriptor(e, i) || { value: e[i] }, f.get ? f.set ? u = r.stylize("[Getter/Setter]", "special") : u = r.stylize("[Getter]", "special") : f.set && (u = r.stylize("[Setter]", "special")), Ci(n, i) || (o = "[" + i + "]"), u || (r.seen.indexOf(f.value) < 0 ? (ur(t) ? u = ar(r, f.value, null) : u = ar(r, f.value, t - 1), u.indexOf(`
`) > -1 && (a ? u = u.split(`
`).map(function (l) { return "  " + l; }).join(`
`).slice(2) : u = `
` + u.split(`
`).map(function (l) { return "   " + l; }).join(`
`))) : u = r.stylize("[Circular]", "special")), re(o)) {
            if (a && i.match(/^\d+$/))
                return u;
            o = JSON.stringify("" + i), o.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (o = o.slice(1, -1), o = r.stylize(o, "name")) : (o = o.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), o = r.stylize(o, "string"));
        }
        return o + ": " + u;
    }
    function Zu(r, e, t) {
        var n = 0, i = r.reduce(function (a, o) {
            return n++, o.indexOf(`
`) >= 0 && n++, a + o.replace(/\u001b\[\d\d?m/g, "").length + 1;
        }, 0);
        return i > 60 ? t[0] + (e === "" ? "" : e + `
 `) + " " + r.join(`,
  `) + " " + t[1] : t[0] + e + " " + r.join(", ") + " " + t[1];
    }
    b.types = Si();
    function Ti(r) { return Array.isArray(r); }
    b.isArray = Ti;
    function nt(r) { return typeof r == "boolean"; }
    b.isBoolean = nt;
    function ur(r) { return r === null; }
    b.isNull = ur;
    function Ju(r) { return r == null; }
    b.isNullOrUndefined = Ju;
    function Bi(r) { return typeof r == "number"; }
    b.isNumber = Bi;
    function fr(r) { return typeof r == "string"; }
    b.isString = fr;
    function Qu(r) { return typeof r == "symbol"; }
    b.isSymbol = Qu;
    function re(r) { return r === void 0; }
    b.isUndefined = re;
    function Re(r) { return de(r) && it(r) === "[object RegExp]"; }
    b.isRegExp = Re;
    b.types.isRegExp = Re;
    function de(r) { return typeof r == "object" && r !== null; }
    b.isObject = de;
    function or(r) { return de(r) && it(r) === "[object Date]"; }
    b.isDate = or;
    b.types.isDate = or;
    function xe(r) { return de(r) && (it(r) === "[object Error]" || r instanceof Error); }
    b.isError = xe;
    b.types.isNativeError = xe;
    function ir(r) { return typeof r == "function"; }
    b.isFunction = ir;
    function ef(r) { return r === null || typeof r == "boolean" || typeof r == "number" || typeof r == "string" || typeof r == "symbol" || typeof r > "u"; }
    b.isPrimitive = ef;
    b.isBuffer = Ai();
    function it(r) { return Object.prototype.toString.call(r); }
    function rt(r) { return r < 10 ? "0" + r.toString(10) : r.toString(10); }
    var rf = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    function tf() { var r = new Date, e = [rt(r.getHours()), rt(r.getMinutes()), rt(r.getSeconds())].join(":"); return [r.getDate(), rf[r.getMonth()], e].join(" "); }
    b.log = function () { console.log("%s - %s", tf(), b.format.apply(b, arguments)); };
    b.inherits = z();
    b._extend = function (r, e) { if (!e || !de(e))
        return r; for (var t = Object.keys(e), n = t.length; n--;)
        r[t[n]] = e[t[n]]; return r; };
    function Ci(r, e) { return Object.prototype.hasOwnProperty.call(r, e); }
    var ee = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
    b.promisify = function (e) { if (typeof e != "function")
        throw new TypeError('The "original" argument must be of type Function'); if (ee && e[ee]) {
        var t = e[ee];
        if (typeof t != "function")
            throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(t, ee, { value: t, enumerable: !1, writable: !1, configurable: !0 }), t;
    } function t() { for (var n, i, a = new Promise(function (f, l) { n = f, i = l; }), o = [], u = 0; u < arguments.length; u++)
        o.push(arguments[u]); o.push(function (f, l) { f ? i(f) : n(l); }); try {
        e.apply(this, o);
    }
    catch (f) {
        i(f);
    } return a; } return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), ee && Object.defineProperty(t, ee, { value: t, enumerable: !1, writable: !1, configurable: !0 }), Object.defineProperties(t, Ri(e)); };
    b.promisify.custom = ee;
    function nf(r, e) { if (!r) {
        var t = new Error("Promise was rejected with a falsy value");
        t.reason = r, r = t;
    } return e(r); }
    function af(r) { if (typeof r != "function")
        throw new TypeError('The "original" argument must be of type Function'); function e() { for (var t = [], n = 0; n < arguments.length; n++)
        t.push(arguments[n]); var i = t.pop(); if (typeof i != "function")
        throw new TypeError("The last argument must be of type Function"); var a = this, o = function () { return i.apply(a, arguments); }; r.apply(this, t).then(function (u) { process.nextTick(o.bind(null, null, u)); }, function (u) { process.nextTick(nf.bind(null, u, o)); }); } return Object.setPrototypeOf(e, Object.getPrototypeOf(r)), Object.defineProperties(e, Ri(r)), e; }
    b.callbackify = af;
});
var Ui = p((Zl, Ii) => {
    "use strict";
    function Mi(r, e) { var t = Object.keys(r); if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(r);
        e && (n = n.filter(function (i) { return Object.getOwnPropertyDescriptor(r, i).enumerable; })), t.push.apply(t, n);
    } return t; }
    function Fi(r) { for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e] != null ? arguments[e] : {};
        e % 2 ? Mi(Object(t), !0).forEach(function (n) { of(r, n, t[n]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Mi(Object(t)).forEach(function (n) { Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n)); });
    } return r; }
    function of(r, e, t) { return e = Oi(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r; }
    function uf(r, e) { if (!(r instanceof e))
        throw new TypeError("Cannot call a class as a function"); }
    function Pi(r, e) { for (var t = 0; t < e.length; t++) {
        var n = e[t];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, Oi(n.key), n);
    } }
    function ff(r, e, t) { return e && Pi(r.prototype, e), t && Pi(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r; }
    function Oi(r) { var e = sf(r, "string"); return typeof e == "symbol" ? e : String(e); }
    function sf(r, e) { if (typeof r != "object" || r === null)
        return r; var t = r[Symbol.toPrimitive]; if (t !== void 0) {
        var n = t.call(r, e || "default");
        if (typeof n != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    } return (e === "string" ? String : Number)(r); }
    var lf = O(), sr = lf.Buffer, cf = at(), ot = cf.inspect, hf = ot && ot.custom || "inspect";
    function pf(r, e, t) { sr.prototype.copy.call(r, e, t); }
    Ii.exports = (function () { function r() { uf(this, r), this.head = null, this.tail = null, this.length = 0; } return ff(r, [{ key: "push", value: function (t) { var n = { data: t, next: null }; this.length > 0 ? this.tail.next = n : this.head = n, this.tail = n, ++this.length; } }, { key: "unshift", value: function (t) { var n = { data: t, next: this.head }; this.length === 0 && (this.tail = n), this.head = n, ++this.length; } }, { key: "shift", value: function () { if (this.length !== 0) {
                var t = this.head.data;
                return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, t;
            } } }, { key: "clear", value: function () { this.head = this.tail = null, this.length = 0; } }, { key: "join", value: function (t) { if (this.length === 0)
                return ""; for (var n = this.head, i = "" + n.data; n = n.next;)
                i += t + n.data; return i; } }, { key: "concat", value: function (t) { if (this.length === 0)
                return sr.alloc(0); for (var n = sr.allocUnsafe(t >>> 0), i = this.head, a = 0; i;)
                pf(i.data, n, a), a += i.data.length, i = i.next; return n; } }, { key: "consume", value: function (t, n) { var i; return t < this.head.data.length ? (i = this.head.data.slice(0, t), this.head.data = this.head.data.slice(t)) : t === this.head.data.length ? i = this.shift() : i = n ? this._getString(t) : this._getBuffer(t), i; } }, { key: "first", value: function () { return this.head.data; } }, { key: "_getString", value: function (t) { var n = this.head, i = 1, a = n.data; for (t -= a.length; n = n.next;) {
                var o = n.data, u = t > o.length ? o.length : t;
                if (u === o.length ? a += o : a += o.slice(0, t), t -= u, t === 0) {
                    u === o.length ? (++i, n.next ? this.head = n.next : this.head = this.tail = null) : (this.head = n, n.data = o.slice(u));
                    break;
                }
                ++i;
            } return this.length -= i, a; } }, { key: "_getBuffer", value: function (t) { var n = sr.allocUnsafe(t), i = this.head, a = 1; for (i.data.copy(n), t -= i.data.length; i = i.next;) {
                var o = i.data, u = t > o.length ? o.length : t;
                if (o.copy(n, n.length - t, 0, u), t -= u, t === 0) {
                    u === o.length ? (++a, i.next ? this.head = i.next : this.head = this.tail = null) : (this.head = i, i.data = o.slice(u));
                    break;
                }
                ++a;
            } return this.length -= a, n; } }, { key: hf, value: function (t, n) { return ot(this, Fi(Fi({}, n), {}, { depth: 0, customInspect: !1 })); } }]), r; })();
});
var ft = p((Jl, Ni) => {
    "use strict";
    function df(r, e) { var t = this, n = this._readableState && this._readableState.destroyed, i = this._writableState && this._writableState.destroyed; return n || i ? (e ? e(r) : r && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, process.nextTick(ut, this, r)) : process.nextTick(ut, this, r)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(r || null, function (a) { !e && a ? t._writableState ? t._writableState.errorEmitted ? process.nextTick(lr, t) : (t._writableState.errorEmitted = !0, process.nextTick(Li, t, a)) : process.nextTick(Li, t, a) : e ? (process.nextTick(lr, t), e(a)) : process.nextTick(lr, t); }), this); }
    function Li(r, e) { ut(r, e), lr(r); }
    function lr(r) { r._writableState && !r._writableState.emitClose || r._readableState && !r._readableState.emitClose || r.emit("close"); }
    function yf() { this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1); }
    function ut(r, e) { r.emit("error", e); }
    function gf(r, e) { var t = r._readableState, n = r._writableState; t && t.autoDestroy || n && n.autoDestroy ? r.destroy(e) : r.emit("error", e); }
    Ni.exports = { destroy: df, undestroy: yf, errorOrDestroy: gf };
});
var te = p((Ql, ji) => {
    "use strict";
    function bf(r, e) { r.prototype = Object.create(e.prototype), r.prototype.constructor = r, r.__proto__ = e; }
    var Di = {};
    function B(r, e, t) { t || (t = Error); function n(a, o, u) { return typeof e == "string" ? e : e(a, o, u); } var i = (function (a) { bf(o, a); function o(u, f, l) { return a.call(this, n(u, f, l)) || this; } return o; })(t); i.prototype.name = t.name, i.prototype.code = r, Di[r] = i; }
    function ki(r, e) { if (Array.isArray(r)) {
        var t = r.length;
        return r = r.map(function (n) { return String(n); }), t > 2 ? "one of ".concat(e, " ").concat(r.slice(0, t - 1).join(", "), ", or ") + r[t - 1] : t === 2 ? "one of ".concat(e, " ").concat(r[0], " or ").concat(r[1]) : "of ".concat(e, " ").concat(r[0]);
    }
    else
        return "of ".concat(e, " ").concat(String(r)); }
    function wf(r, e, t) { return r.substr(!t || t < 0 ? 0 : +t, e.length) === e; }
    function mf(r, e, t) { return (t === void 0 || t > r.length) && (t = r.length), r.substring(t - e.length, t) === e; }
    function vf(r, e, t) { return typeof t != "number" && (t = 0), t + e.length > r.length ? !1 : r.indexOf(e, t) !== -1; }
    B("ERR_INVALID_OPT_VALUE", function (r, e) { return 'The value "' + e + '" is invalid for option "' + r + '"'; }, TypeError);
    B("ERR_INVALID_ARG_TYPE", function (r, e, t) { var n; typeof e == "string" && wf(e, "not ") ? (n = "must not be", e = e.replace(/^not /, "")) : n = "must be"; var i; if (mf(r, " argument"))
        i = "The ".concat(r, " ").concat(n, " ").concat(ki(e, "type"));
    else {
        var a = vf(r, ".") ? "property" : "argument";
        i = 'The "'.concat(r, '" ').concat(a, " ").concat(n, " ").concat(ki(e, "type"));
    } return i += ". Received type ".concat(typeof t), i; }, TypeError);
    B("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
    B("ERR_METHOD_NOT_IMPLEMENTED", function (r) { return "The " + r + " method is not implemented"; });
    B("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
    B("ERR_STREAM_DESTROYED", function (r) { return "Cannot call " + r + " after a stream was destroyed"; });
    B("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
    B("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
    B("ERR_STREAM_WRITE_AFTER_END", "write after end");
    B("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
    B("ERR_UNKNOWN_ENCODING", function (r) { return "Unknown encoding: " + r; }, TypeError);
    B("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
    ji.exports.codes = Di;
});
var st = p((ec, qi) => {
    "use strict";
    var Ef = te().codes.ERR_INVALID_OPT_VALUE;
    function Sf(r, e, t) { return r.highWaterMark != null ? r.highWaterMark : e ? r[t] : null; }
    function _f(r, e, t, n) { var i = Sf(e, n, t); if (i != null) {
        if (!(isFinite(i) && Math.floor(i) === i) || i < 0) {
            var a = n ? t : "highWaterMark";
            throw new Ef(a, i);
        }
        return Math.floor(i);
    } return r.objectMode ? 16 : 16 * 1024; }
    qi.exports = { getHighWaterMark: _f };
});
var Hi = p((rc, Wi) => { Wi.exports = Af; function Af(r, e) { if (lt("noDeprecation"))
    return r; var t = !1; function n() { if (!t) {
    if (lt("throwDeprecation"))
        throw new Error(e);
    lt("traceDeprecation") ? console.trace(e) : console.warn(e), t = !0;
} return r.apply(this, arguments); } return n; } function lt(r) { try {
    if (!global.localStorage)
        return !1;
}
catch {
    return !1;
} var e = global.localStorage[r]; return e == null ? !1 : String(e).toLowerCase() === "true"; } });
var pt = p((tc, Yi) => {
    "use strict";
    Yi.exports = E;
    function zi(r) { var e = this; this.next = null, this.entry = null, this.finish = function () { Zf(e, r); }; }
    var ye;
    E.WritableState = Be;
    var Rf = { deprecate: Hi() }, Gi = Nr(), hr = O().Buffer, xf = (typeof global < "u" ? global : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function () { };
    function Tf(r) { return hr.from(r); }
    function Bf(r) { return hr.isBuffer(r) || r instanceof xf; }
    var ht = ft(), Cf = st(), Mf = Cf.getHighWaterMark, V = te().codes, Ff = V.ERR_INVALID_ARG_TYPE, Pf = V.ERR_METHOD_NOT_IMPLEMENTED, Of = V.ERR_MULTIPLE_CALLBACK, If = V.ERR_STREAM_CANNOT_PIPE, Uf = V.ERR_STREAM_DESTROYED, Lf = V.ERR_STREAM_NULL_VALUES, Nf = V.ERR_STREAM_WRITE_AFTER_END, kf = V.ERR_UNKNOWN_ENCODING, ge = ht.errorOrDestroy;
    z()(E, Gi);
    function Df() { }
    function Be(r, e, t) { ye = ye || ne(), r = r || {}, typeof t != "boolean" && (t = e instanceof ye), this.objectMode = !!r.objectMode, t && (this.objectMode = this.objectMode || !!r.writableObjectMode), this.highWaterMark = Mf(this, r, "writableHighWaterMark", t), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1; var n = r.decodeStrings === !1; this.decodeStrings = !n, this.defaultEncoding = r.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (i) { Gf(e, i); }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = r.emitClose !== !1, this.autoDestroy = !!r.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new zi(this); }
    Be.prototype.getBuffer = function () { for (var e = this.bufferedRequest, t = []; e;)
        t.push(e), e = e.next; return t; };
    (function () { try {
        Object.defineProperty(Be.prototype, "buffer", { get: Rf.deprecate(function () { return this.getBuffer(); }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003") });
    }
    catch { } })();
    var cr;
    typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (cr = Function.prototype[Symbol.hasInstance], Object.defineProperty(E, Symbol.hasInstance, { value: function (e) { return cr.call(this, e) ? !0 : this !== E ? !1 : e && e._writableState instanceof Be; } })) : cr = function (e) { return e instanceof this; };
    function E(r) { ye = ye || ne(); var e = this instanceof ye; if (!e && !cr.call(E, this))
        return new E(r); this._writableState = new Be(r, this, e), this.writable = !0, r && (typeof r.write == "function" && (this._write = r.write), typeof r.writev == "function" && (this._writev = r.writev), typeof r.destroy == "function" && (this._destroy = r.destroy), typeof r.final == "function" && (this._final = r.final)), Gi.call(this); }
    E.prototype.pipe = function () { ge(this, new If); };
    function jf(r, e) { var t = new Nf; ge(r, t), process.nextTick(e, t); }
    function qf(r, e, t, n) { var i; return t === null ? i = new Lf : typeof t != "string" && !e.objectMode && (i = new Ff("chunk", ["string", "Buffer"], t)), i ? (ge(r, i), process.nextTick(n, i), !1) : !0; }
    E.prototype.write = function (r, e, t) { var n = this._writableState, i = !1, a = !n.objectMode && Bf(r); return a && !hr.isBuffer(r) && (r = Tf(r)), typeof e == "function" && (t = e, e = null), a ? e = "buffer" : e || (e = n.defaultEncoding), typeof t != "function" && (t = Df), n.ending ? jf(this, t) : (a || qf(this, n, r, t)) && (n.pendingcb++, i = Hf(this, n, a, r, e, t)), i; };
    E.prototype.cork = function () { this._writableState.corked++; };
    E.prototype.uncork = function () { var r = this._writableState; r.corked && (r.corked--, !r.writing && !r.corked && !r.bufferProcessing && r.bufferedRequest && Vi(this, r)); };
    E.prototype.setDefaultEncoding = function (e) { if (typeof e == "string" && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1))
        throw new kf(e); return this._writableState.defaultEncoding = e, this; };
    Object.defineProperty(E.prototype, "writableBuffer", { enumerable: !1, get: function () { return this._writableState && this._writableState.getBuffer(); } });
    function Wf(r, e, t) { return !r.objectMode && r.decodeStrings !== !1 && typeof e == "string" && (e = hr.from(e, t)), e; }
    Object.defineProperty(E.prototype, "writableHighWaterMark", { enumerable: !1, get: function () { return this._writableState.highWaterMark; } });
    function Hf(r, e, t, n, i, a) { if (!t) {
        var o = Wf(e, n, i);
        n !== o && (t = !0, i = "buffer", n = o);
    } var u = e.objectMode ? 1 : n.length; e.length += u; var f = e.length < e.highWaterMark; if (f || (e.needDrain = !0), e.writing || e.corked) {
        var l = e.lastBufferedRequest;
        e.lastBufferedRequest = { chunk: n, encoding: i, isBuf: t, callback: a, next: null }, l ? l.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, e.bufferedRequestCount += 1;
    }
    else
        ct(r, e, !1, u, n, i, a); return f; }
    function ct(r, e, t, n, i, a, o) { e.writelen = n, e.writecb = o, e.writing = !0, e.sync = !0, e.destroyed ? e.onwrite(new Uf("write")) : t ? r._writev(i, e.onwrite) : r._write(i, a, e.onwrite), e.sync = !1; }
    function $f(r, e, t, n, i) { --e.pendingcb, t ? (process.nextTick(i, n), process.nextTick(Te, r, e), r._writableState.errorEmitted = !0, ge(r, n)) : (i(n), r._writableState.errorEmitted = !0, ge(r, n), Te(r, e)); }
    function zf(r) { r.writing = !1, r.writecb = null, r.length -= r.writelen, r.writelen = 0; }
    function Gf(r, e) { var t = r._writableState, n = t.sync, i = t.writecb; if (typeof i != "function")
        throw new Of; if (zf(t), e)
        $f(r, t, n, e, i);
    else {
        var a = Ki(t) || r.destroyed;
        !a && !t.corked && !t.bufferProcessing && t.bufferedRequest && Vi(r, t), n ? process.nextTick($i, r, t, a, i) : $i(r, t, a, i);
    } }
    function $i(r, e, t, n) { t || Vf(r, e), e.pendingcb--, n(), Te(r, e); }
    function Vf(r, e) { e.length === 0 && e.needDrain && (e.needDrain = !1, r.emit("drain")); }
    function Vi(r, e) { e.bufferProcessing = !0; var t = e.bufferedRequest; if (r._writev && t && t.next) {
        var n = e.bufferedRequestCount, i = new Array(n), a = e.corkedRequestsFree;
        a.entry = t;
        for (var o = 0, u = !0; t;)
            i[o] = t, t.isBuf || (u = !1), t = t.next, o += 1;
        i.allBuffers = u, ct(r, e, !0, e.length, i, "", a.finish), e.pendingcb++, e.lastBufferedRequest = null, a.next ? (e.corkedRequestsFree = a.next, a.next = null) : e.corkedRequestsFree = new zi(e), e.bufferedRequestCount = 0;
    }
    else {
        for (; t;) {
            var f = t.chunk, l = t.encoding, c = t.callback, h = e.objectMode ? 1 : f.length;
            if (ct(r, e, !1, h, f, l, c), t = t.next, e.bufferedRequestCount--, e.writing)
                break;
        }
        t === null && (e.lastBufferedRequest = null);
    } e.bufferedRequest = t, e.bufferProcessing = !1; }
    E.prototype._write = function (r, e, t) { t(new Pf("_write()")); };
    E.prototype._writev = null;
    E.prototype.end = function (r, e, t) { var n = this._writableState; return typeof r == "function" ? (t = r, r = null, e = null) : typeof e == "function" && (t = e, e = null), r != null && this.write(r, e), n.corked && (n.corked = 1, this.uncork()), n.ending || Xf(this, n, t), this; };
    Object.defineProperty(E.prototype, "writableLength", { enumerable: !1, get: function () { return this._writableState.length; } });
    function Ki(r) { return r.ending && r.length === 0 && r.bufferedRequest === null && !r.finished && !r.writing; }
    function Kf(r, e) { r._final(function (t) { e.pendingcb--, t && ge(r, t), e.prefinished = !0, r.emit("prefinish"), Te(r, e); }); }
    function Yf(r, e) { !e.prefinished && !e.finalCalled && (typeof r._final == "function" && !e.destroyed ? (e.pendingcb++, e.finalCalled = !0, process.nextTick(Kf, r, e)) : (e.prefinished = !0, r.emit("prefinish"))); }
    function Te(r, e) { var t = Ki(e); if (t && (Yf(r, e), e.pendingcb === 0 && (e.finished = !0, r.emit("finish"), e.autoDestroy))) {
        var n = r._readableState;
        (!n || n.autoDestroy && n.endEmitted) && r.destroy();
    } return t; }
    function Xf(r, e, t) { e.ending = !0, Te(r, e), t && (e.finished ? process.nextTick(t) : r.once("finish", t)), e.ended = !0, r.writable = !1; }
    function Zf(r, e, t) { var n = r.entry; for (r.entry = null; n;) {
        var i = n.callback;
        e.pendingcb--, i(t), n = n.next;
    } e.corkedRequestsFree.next = r; }
    Object.defineProperty(E.prototype, "destroyed", { enumerable: !1, get: function () { return this._writableState === void 0 ? !1 : this._writableState.destroyed; }, set: function (e) { this._writableState && (this._writableState.destroyed = e); } });
    E.prototype.destroy = ht.destroy;
    E.prototype._undestroy = ht.undestroy;
    E.prototype._destroy = function (r, e) { e(r); };
});
var ne = p((nc, Zi) => {
    "use strict";
    var Jf = Object.keys || function (r) { var e = []; for (var t in r)
        e.push(t); return e; };
    Zi.exports = I;
    var Xi = gt(), yt = pt();
    z()(I, Xi);
    for (dt = Jf(yt.prototype), pr = 0; pr < dt.length; pr++)
        dr = dt[pr], I.prototype[dr] || (I.prototype[dr] = yt.prototype[dr]);
    var dt, dr, pr;
    function I(r) { if (!(this instanceof I))
        return new I(r); Xi.call(this, r), yt.call(this, r), this.allowHalfOpen = !0, r && (r.readable === !1 && (this.readable = !1), r.writable === !1 && (this.writable = !1), r.allowHalfOpen === !1 && (this.allowHalfOpen = !1, this.once("end", Qf))); }
    Object.defineProperty(I.prototype, "writableHighWaterMark", { enumerable: !1, get: function () { return this._writableState.highWaterMark; } });
    Object.defineProperty(I.prototype, "writableBuffer", { enumerable: !1, get: function () { return this._writableState && this._writableState.getBuffer(); } });
    Object.defineProperty(I.prototype, "writableLength", { enumerable: !1, get: function () { return this._writableState.length; } });
    function Qf() { this._writableState.ended || process.nextTick(es, this); }
    function es(r) { r.end(); }
    Object.defineProperty(I.prototype, "destroyed", { enumerable: !1, get: function () { return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed; }, set: function (e) { this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = e, this._writableState.destroyed = e); } });
});
var ea = p((bt, Qi) => { var yr = O(), q = yr.Buffer; function Ji(r, e) { for (var t in r)
    e[t] = r[t]; } q.from && q.alloc && q.allocUnsafe && q.allocUnsafeSlow ? Qi.exports = yr : (Ji(yr, bt), bt.Buffer = be); function be(r, e, t) { return q(r, e, t); } Ji(q, be); be.from = function (r, e, t) { if (typeof r == "number")
    throw new TypeError("Argument must not be a number"); return q(r, e, t); }; be.alloc = function (r, e, t) { if (typeof r != "number")
    throw new TypeError("Argument must be a number"); var n = q(r); return e !== void 0 ? typeof t == "string" ? n.fill(e, t) : n.fill(e) : n.fill(0), n; }; be.allocUnsafe = function (r) { if (typeof r != "number")
    throw new TypeError("Argument must be a number"); return q(r); }; be.allocUnsafeSlow = function (r) { if (typeof r != "number")
    throw new TypeError("Argument must be a number"); return yr.SlowBuffer(r); }; });
var vt = p(ta => {
    "use strict";
    var mt = ea().Buffer, ra = mt.isEncoding || function (r) { switch (r = "" + r, r && r.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw": return !0;
        default: return !1;
    } };
    function rs(r) { if (!r)
        return "utf8"; for (var e;;)
        switch (r) {
            case "utf8":
            case "utf-8": return "utf8";
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le": return "utf16le";
            case "latin1":
            case "binary": return "latin1";
            case "base64":
            case "ascii":
            case "hex": return r;
            default:
                if (e)
                    return;
                r = ("" + r).toLowerCase(), e = !0;
        } }
    function ts(r) { var e = rs(r); if (typeof e != "string" && (mt.isEncoding === ra || !ra(r)))
        throw new Error("Unknown encoding: " + r); return e || r; }
    ta.StringDecoder = Ce;
    function Ce(r) { this.encoding = ts(r); var e; switch (this.encoding) {
        case "utf16le":
            this.text = fs, this.end = ss, e = 4;
            break;
        case "utf8":
            this.fillLast = as, e = 4;
            break;
        case "base64":
            this.text = ls, this.end = cs, e = 3;
            break;
        default:
            this.write = hs, this.end = ps;
            return;
    } this.lastNeed = 0, this.lastTotal = 0, this.lastChar = mt.allocUnsafe(e); }
    Ce.prototype.write = function (r) { if (r.length === 0)
        return ""; var e, t; if (this.lastNeed) {
        if (e = this.fillLast(r), e === void 0)
            return "";
        t = this.lastNeed, this.lastNeed = 0;
    }
    else
        t = 0; return t < r.length ? e ? e + this.text(r, t) : this.text(r, t) : e || ""; };
    Ce.prototype.end = us;
    Ce.prototype.text = os;
    Ce.prototype.fillLast = function (r) { if (this.lastNeed <= r.length)
        return r.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal); r.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, r.length), this.lastNeed -= r.length; };
    function wt(r) { return r <= 127 ? 0 : r >> 5 === 6 ? 2 : r >> 4 === 14 ? 3 : r >> 3 === 30 ? 4 : r >> 6 === 2 ? -1 : -2; }
    function ns(r, e, t) { var n = e.length - 1; if (n < t)
        return 0; var i = wt(e[n]); return i >= 0 ? (i > 0 && (r.lastNeed = i - 1), i) : --n < t || i === -2 ? 0 : (i = wt(e[n]), i >= 0 ? (i > 0 && (r.lastNeed = i - 2), i) : --n < t || i === -2 ? 0 : (i = wt(e[n]), i >= 0 ? (i > 0 && (i === 2 ? i = 0 : r.lastNeed = i - 3), i) : 0)); }
    function is(r, e, t) { if ((e[0] & 192) !== 128)
        return r.lastNeed = 0, "\uFFFD"; if (r.lastNeed > 1 && e.length > 1) {
        if ((e[1] & 192) !== 128)
            return r.lastNeed = 1, "\uFFFD";
        if (r.lastNeed > 2 && e.length > 2 && (e[2] & 192) !== 128)
            return r.lastNeed = 2, "\uFFFD";
    } }
    function as(r) { var e = this.lastTotal - this.lastNeed, t = is(this, r, e); if (t !== void 0)
        return t; if (this.lastNeed <= r.length)
        return r.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal); r.copy(this.lastChar, e, 0, r.length), this.lastNeed -= r.length; }
    function os(r, e) { var t = ns(this, r, e); if (!this.lastNeed)
        return r.toString("utf8", e); this.lastTotal = t; var n = r.length - (t - this.lastNeed); return r.copy(this.lastChar, 0, n), r.toString("utf8", e, n); }
    function us(r) { var e = r && r.length ? this.write(r) : ""; return this.lastNeed ? e + "\uFFFD" : e; }
    function fs(r, e) { if ((r.length - e) % 2 === 0) {
        var t = r.toString("utf16le", e);
        if (t) {
            var n = t.charCodeAt(t.length - 1);
            if (n >= 55296 && n <= 56319)
                return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = r[r.length - 2], this.lastChar[1] = r[r.length - 1], t.slice(0, -1);
        }
        return t;
    } return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = r[r.length - 1], r.toString("utf16le", e, r.length - 1); }
    function ss(r) { var e = r && r.length ? this.write(r) : ""; if (this.lastNeed) {
        var t = this.lastTotal - this.lastNeed;
        return e + this.lastChar.toString("utf16le", 0, t);
    } return e; }
    function ls(r, e) { var t = (r.length - e) % 3; return t === 0 ? r.toString("base64", e) : (this.lastNeed = 3 - t, this.lastTotal = 3, t === 1 ? this.lastChar[0] = r[r.length - 1] : (this.lastChar[0] = r[r.length - 2], this.lastChar[1] = r[r.length - 1]), r.toString("base64", e, r.length - t)); }
    function cs(r) { var e = r && r.length ? this.write(r) : ""; return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e; }
    function hs(r) { return r.toString(this.encoding); }
    function ps(r) { return r && r.length ? this.write(r) : ""; }
});
var gr = p((ac, aa) => {
    "use strict";
    var na = te().codes.ERR_STREAM_PREMATURE_CLOSE;
    function ds(r) { var e = !1; return function () { if (!e) {
        e = !0;
        for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
            n[i] = arguments[i];
        r.apply(this, n);
    } }; }
    function ys() { }
    function gs(r) { return r.setHeader && typeof r.abort == "function"; }
    function ia(r, e, t) { if (typeof e == "function")
        return ia(r, null, e); e || (e = {}), t = ds(t || ys); var n = e.readable || e.readable !== !1 && r.readable, i = e.writable || e.writable !== !1 && r.writable, a = function () { r.writable || u(); }, o = r._writableState && r._writableState.finished, u = function () { i = !1, o = !0, n || t.call(r); }, f = r._readableState && r._readableState.endEmitted, l = function () { n = !1, f = !0, i || t.call(r); }, c = function (v) { t.call(r, v); }, h = function () { var v; if (n && !f)
        return (!r._readableState || !r._readableState.ended) && (v = new na), t.call(r, v); if (i && !o)
        return (!r._writableState || !r._writableState.ended) && (v = new na), t.call(r, v); }, m = function () { r.req.on("finish", u); }; return gs(r) ? (r.on("complete", u), r.on("abort", h), r.req ? m() : r.on("request", m)) : i && !r._writableState && (r.on("end", a), r.on("close", a)), r.on("end", l), r.on("finish", u), e.error !== !1 && r.on("error", c), r.on("close", h), function () { r.removeListener("complete", u), r.removeListener("abort", h), r.removeListener("request", m), r.req && r.req.removeListener("finish", u), r.removeListener("end", a), r.removeListener("close", a), r.removeListener("finish", u), r.removeListener("end", l), r.removeListener("error", c), r.removeListener("close", h); }; }
    aa.exports = ia;
});
var ua = p((oc, oa) => {
    "use strict";
    var br;
    function K(r, e, t) { return e = bs(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r; }
    function bs(r) { var e = ws(r, "string"); return typeof e == "symbol" ? e : String(e); }
    function ws(r, e) { if (typeof r != "object" || r === null)
        return r; var t = r[Symbol.toPrimitive]; if (t !== void 0) {
        var n = t.call(r, e || "default");
        if (typeof n != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    } return (e === "string" ? String : Number)(r); }
    var ms = gr(), Y = Symbol("lastResolve"), ie = Symbol("lastReject"), Me = Symbol("error"), wr = Symbol("ended"), ae = Symbol("lastPromise"), Et = Symbol("handlePromise"), oe = Symbol("stream");
    function X(r, e) { return { value: r, done: e }; }
    function vs(r) { var e = r[Y]; if (e !== null) {
        var t = r[oe].read();
        t !== null && (r[ae] = null, r[Y] = null, r[ie] = null, e(X(t, !1)));
    } }
    function Es(r) { process.nextTick(vs, r); }
    function Ss(r, e) { return function (t, n) { r.then(function () { if (e[wr]) {
        t(X(void 0, !0));
        return;
    } e[Et](t, n); }, n); }; }
    var _s = Object.getPrototypeOf(function () { }), As = Object.setPrototypeOf((br = { get stream() { return this[oe]; }, next: function () { var e = this, t = this[Me]; if (t !== null)
            return Promise.reject(t); if (this[wr])
            return Promise.resolve(X(void 0, !0)); if (this[oe].destroyed)
            return new Promise(function (o, u) { process.nextTick(function () { e[Me] ? u(e[Me]) : o(X(void 0, !0)); }); }); var n = this[ae], i; if (n)
            i = new Promise(Ss(n, this));
        else {
            var a = this[oe].read();
            if (a !== null)
                return Promise.resolve(X(a, !1));
            i = new Promise(this[Et]);
        } return this[ae] = i, i; } }, K(br, Symbol.asyncIterator, function () { return this; }), K(br, "return", function () { var e = this; return new Promise(function (t, n) { e[oe].destroy(null, function (i) { if (i) {
        n(i);
        return;
    } t(X(void 0, !0)); }); }); }), br), _s), Rs = function (e) { var t, n = Object.create(As, (t = {}, K(t, oe, { value: e, writable: !0 }), K(t, Y, { value: null, writable: !0 }), K(t, ie, { value: null, writable: !0 }), K(t, Me, { value: null, writable: !0 }), K(t, wr, { value: e._readableState.endEmitted, writable: !0 }), K(t, Et, { value: function (a, o) { var u = n[oe].read(); u ? (n[ae] = null, n[Y] = null, n[ie] = null, a(X(u, !1))) : (n[Y] = a, n[ie] = o); }, writable: !0 }), t)); return n[ae] = null, ms(e, function (i) { if (i && i.code !== "ERR_STREAM_PREMATURE_CLOSE") {
        var a = n[ie];
        a !== null && (n[ae] = null, n[Y] = null, n[ie] = null, a(i)), n[Me] = i;
        return;
    } var o = n[Y]; o !== null && (n[ae] = null, n[Y] = null, n[ie] = null, o(X(void 0, !0))), n[wr] = !0; }), e.on("readable", Es.bind(null, n)), n; };
    oa.exports = Rs;
});
var sa = p((uc, fa) => { fa.exports = function () { throw new Error("Readable.from is not available in the browser"); }; });
var gt = p((sc, ma) => {
    "use strict";
    ma.exports = w;
    var we;
    w.ReadableState = pa;
    var fc = Ue().EventEmitter, ha = function (e, t) { return e.listeners(t).length; }, Pe = Nr(), mr = O().Buffer, xs = (typeof global < "u" ? global : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function () { };
    function Ts(r) { return mr.from(r); }
    function Bs(r) { return mr.isBuffer(r) || r instanceof xs; }
    var St = at(), y;
    St && St.debuglog ? y = St.debuglog("stream") : y = function () { };
    var Cs = Ui(), Ct = ft(), Ms = st(), Fs = Ms.getHighWaterMark, vr = te().codes, Ps = vr.ERR_INVALID_ARG_TYPE, Os = vr.ERR_STREAM_PUSH_AFTER_EOF, Is = vr.ERR_METHOD_NOT_IMPLEMENTED, Us = vr.ERR_STREAM_UNSHIFT_AFTER_END_EVENT, me, _t, At;
    z()(w, Pe);
    var Fe = Ct.errorOrDestroy, Rt = ["error", "close", "destroy", "pause", "resume"];
    function Ls(r, e, t) { if (typeof r.prependListener == "function")
        return r.prependListener(e, t); !r._events || !r._events[e] ? r.on(e, t) : Array.isArray(r._events[e]) ? r._events[e].unshift(t) : r._events[e] = [t, r._events[e]]; }
    function pa(r, e, t) { we = we || ne(), r = r || {}, typeof t != "boolean" && (t = e instanceof we), this.objectMode = !!r.objectMode, t && (this.objectMode = this.objectMode || !!r.readableObjectMode), this.highWaterMark = Fs(this, r, "readableHighWaterMark", t), this.buffer = new Cs, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = r.emitClose !== !1, this.autoDestroy = !!r.autoDestroy, this.destroyed = !1, this.defaultEncoding = r.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, r.encoding && (me || (me = vt().StringDecoder), this.decoder = new me(r.encoding), this.encoding = r.encoding); }
    function w(r) { if (we = we || ne(), !(this instanceof w))
        return new w(r); var e = this instanceof we; this._readableState = new pa(r, this, e), this.readable = !0, r && (typeof r.read == "function" && (this._read = r.read), typeof r.destroy == "function" && (this._destroy = r.destroy)), Pe.call(this); }
    Object.defineProperty(w.prototype, "destroyed", { enumerable: !1, get: function () { return this._readableState === void 0 ? !1 : this._readableState.destroyed; }, set: function (e) { this._readableState && (this._readableState.destroyed = e); } });
    w.prototype.destroy = Ct.destroy;
    w.prototype._undestroy = Ct.undestroy;
    w.prototype._destroy = function (r, e) { e(r); };
    w.prototype.push = function (r, e) { var t = this._readableState, n; return t.objectMode ? n = !0 : typeof r == "string" && (e = e || t.defaultEncoding, e !== t.encoding && (r = mr.from(r, e), e = ""), n = !0), da(this, r, e, !1, n); };
    w.prototype.unshift = function (r) { return da(this, r, null, !0, !1); };
    function da(r, e, t, n, i) { y("readableAddChunk", e); var a = r._readableState; if (e === null)
        a.reading = !1, Ds(r, a);
    else {
        var o;
        if (i || (o = Ns(a, e)), o)
            Fe(r, o);
        else if (a.objectMode || e && e.length > 0)
            if (typeof e != "string" && !a.objectMode && Object.getPrototypeOf(e) !== mr.prototype && (e = Ts(e)), n)
                a.endEmitted ? Fe(r, new Us) : xt(r, a, e, !0);
            else if (a.ended)
                Fe(r, new Os);
            else {
                if (a.destroyed)
                    return !1;
                a.reading = !1, a.decoder && !t ? (e = a.decoder.write(e), a.objectMode || e.length !== 0 ? xt(r, a, e, !1) : Bt(r, a)) : xt(r, a, e, !1);
            }
        else
            n || (a.reading = !1, Bt(r, a));
    } return !a.ended && (a.length < a.highWaterMark || a.length === 0); }
    function xt(r, e, t, n) { e.flowing && e.length === 0 && !e.sync ? (e.awaitDrain = 0, r.emit("data", t)) : (e.length += e.objectMode ? 1 : t.length, n ? e.buffer.unshift(t) : e.buffer.push(t), e.needReadable && Er(r)), Bt(r, e); }
    function Ns(r, e) { var t; return !Bs(e) && typeof e != "string" && e !== void 0 && !r.objectMode && (t = new Ps("chunk", ["string", "Buffer", "Uint8Array"], e)), t; }
    w.prototype.isPaused = function () { return this._readableState.flowing === !1; };
    w.prototype.setEncoding = function (r) { me || (me = vt().StringDecoder); var e = new me(r); this._readableState.decoder = e, this._readableState.encoding = this._readableState.decoder.encoding; for (var t = this._readableState.buffer.head, n = ""; t !== null;)
        n += e.write(t.data), t = t.next; return this._readableState.buffer.clear(), n !== "" && this._readableState.buffer.push(n), this._readableState.length = n.length, this; };
    var la = 1073741824;
    function ks(r) { return r >= la ? r = la : (r--, r |= r >>> 1, r |= r >>> 2, r |= r >>> 4, r |= r >>> 8, r |= r >>> 16, r++), r; }
    function ca(r, e) { return r <= 0 || e.length === 0 && e.ended ? 0 : e.objectMode ? 1 : r !== r ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (r > e.highWaterMark && (e.highWaterMark = ks(r)), r <= e.length ? r : e.ended ? e.length : (e.needReadable = !0, 0)); }
    w.prototype.read = function (r) { y("read", r), r = parseInt(r, 10); var e = this._readableState, t = r; if (r !== 0 && (e.emittedReadable = !1), r === 0 && e.needReadable && ((e.highWaterMark !== 0 ? e.length >= e.highWaterMark : e.length > 0) || e.ended))
        return y("read: emitReadable", e.length, e.ended), e.length === 0 && e.ended ? Tt(this) : Er(this), null; if (r = ca(r, e), r === 0 && e.ended)
        return e.length === 0 && Tt(this), null; var n = e.needReadable; y("need readable", n), (e.length === 0 || e.length - r < e.highWaterMark) && (n = !0, y("length less than watermark", n)), e.ended || e.reading ? (n = !1, y("reading or ended", n)) : n && (y("do read"), e.reading = !0, e.sync = !0, e.length === 0 && (e.needReadable = !0), this._read(e.highWaterMark), e.sync = !1, e.reading || (r = ca(t, e))); var i; return r > 0 ? i = ba(r, e) : i = null, i === null ? (e.needReadable = e.length <= e.highWaterMark, r = 0) : (e.length -= r, e.awaitDrain = 0), e.length === 0 && (e.ended || (e.needReadable = !0), t !== r && e.ended && Tt(this)), i !== null && this.emit("data", i), i; };
    function Ds(r, e) { if (y("onEofChunk"), !e.ended) {
        if (e.decoder) {
            var t = e.decoder.end();
            t && t.length && (e.buffer.push(t), e.length += e.objectMode ? 1 : t.length);
        }
        e.ended = !0, e.sync ? Er(r) : (e.needReadable = !1, e.emittedReadable || (e.emittedReadable = !0, ya(r)));
    } }
    function Er(r) { var e = r._readableState; y("emitReadable", e.needReadable, e.emittedReadable), e.needReadable = !1, e.emittedReadable || (y("emitReadable", e.flowing), e.emittedReadable = !0, process.nextTick(ya, r)); }
    function ya(r) { var e = r._readableState; y("emitReadable_", e.destroyed, e.length, e.ended), !e.destroyed && (e.length || e.ended) && (r.emit("readable"), e.emittedReadable = !1), e.needReadable = !e.flowing && !e.ended && e.length <= e.highWaterMark, Mt(r); }
    function Bt(r, e) { e.readingMore || (e.readingMore = !0, process.nextTick(js, r, e)); }
    function js(r, e) { for (; !e.reading && !e.ended && (e.length < e.highWaterMark || e.flowing && e.length === 0);) {
        var t = e.length;
        if (y("maybeReadMore read 0"), r.read(0), t === e.length)
            break;
    } e.readingMore = !1; }
    w.prototype._read = function (r) { Fe(this, new Is("_read()")); };
    w.prototype.pipe = function (r, e) { var t = this, n = this._readableState; switch (n.pipesCount) {
        case 0:
            n.pipes = r;
            break;
        case 1:
            n.pipes = [n.pipes, r];
            break;
        default:
            n.pipes.push(r);
            break;
    } n.pipesCount += 1, y("pipe count=%d opts=%j", n.pipesCount, e); var i = (!e || e.end !== !1) && r !== process.stdout && r !== process.stderr, a = i ? u : _; n.endEmitted ? process.nextTick(a) : t.once("end", a), r.on("unpipe", o); function o(U, F) { y("onunpipe"), U === t && F && F.hasUnpiped === !1 && (F.hasUnpiped = !0, c()); } function u() { y("onend"), r.end(); } var f = qs(t); r.on("drain", f); var l = !1; function c() { y("cleanup"), r.removeListener("close", d), r.removeListener("finish", v), r.removeListener("drain", f), r.removeListener("error", m), r.removeListener("unpipe", o), t.removeListener("end", u), t.removeListener("end", _), t.removeListener("data", h), l = !0, n.awaitDrain && (!r._writableState || r._writableState.needDrain) && f(); } t.on("data", h); function h(U) { y("ondata"); var F = r.write(U); y("dest.write", F), F === !1 && ((n.pipesCount === 1 && n.pipes === r || n.pipesCount > 1 && wa(n.pipes, r) !== -1) && !l && (y("false write response, pause", n.awaitDrain), n.awaitDrain++), t.pause()); } function m(U) { y("onerror", U), _(), r.removeListener("error", m), ha(r, "error") === 0 && Fe(r, U); } Ls(r, "error", m); function d() { r.removeListener("finish", v), _(); } r.once("close", d); function v() { y("onfinish"), r.removeListener("close", d), _(); } r.once("finish", v); function _() { y("unpipe"), t.unpipe(r); } return r.emit("pipe", t), n.flowing || (y("pipe resume"), t.resume()), r; };
    function qs(r) { return function () { var t = r._readableState; y("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, t.awaitDrain === 0 && ha(r, "data") && (t.flowing = !0, Mt(r)); }; }
    w.prototype.unpipe = function (r) { var e = this._readableState, t = { hasUnpiped: !1 }; if (e.pipesCount === 0)
        return this; if (e.pipesCount === 1)
        return r && r !== e.pipes ? this : (r || (r = e.pipes), e.pipes = null, e.pipesCount = 0, e.flowing = !1, r && r.emit("unpipe", this, t), this); if (!r) {
        var n = e.pipes, i = e.pipesCount;
        e.pipes = null, e.pipesCount = 0, e.flowing = !1;
        for (var a = 0; a < i; a++)
            n[a].emit("unpipe", this, { hasUnpiped: !1 });
        return this;
    } var o = wa(e.pipes, r); return o === -1 ? this : (e.pipes.splice(o, 1), e.pipesCount -= 1, e.pipesCount === 1 && (e.pipes = e.pipes[0]), r.emit("unpipe", this, t), this); };
    w.prototype.on = function (r, e) { var t = Pe.prototype.on.call(this, r, e), n = this._readableState; return r === "data" ? (n.readableListening = this.listenerCount("readable") > 0, n.flowing !== !1 && this.resume()) : r === "readable" && !n.endEmitted && !n.readableListening && (n.readableListening = n.needReadable = !0, n.flowing = !1, n.emittedReadable = !1, y("on readable", n.length, n.reading), n.length ? Er(this) : n.reading || process.nextTick(Ws, this)), t; };
    w.prototype.addListener = w.prototype.on;
    w.prototype.removeListener = function (r, e) { var t = Pe.prototype.removeListener.call(this, r, e); return r === "readable" && process.nextTick(ga, this), t; };
    w.prototype.removeAllListeners = function (r) { var e = Pe.prototype.removeAllListeners.apply(this, arguments); return (r === "readable" || r === void 0) && process.nextTick(ga, this), e; };
    function ga(r) { var e = r._readableState; e.readableListening = r.listenerCount("readable") > 0, e.resumeScheduled && !e.paused ? e.flowing = !0 : r.listenerCount("data") > 0 && r.resume(); }
    function Ws(r) { y("readable nexttick read 0"), r.read(0); }
    w.prototype.resume = function () { var r = this._readableState; return r.flowing || (y("resume"), r.flowing = !r.readableListening, Hs(this, r)), r.paused = !1, this; };
    function Hs(r, e) { e.resumeScheduled || (e.resumeScheduled = !0, process.nextTick($s, r, e)); }
    function $s(r, e) { y("resume", e.reading), e.reading || r.read(0), e.resumeScheduled = !1, r.emit("resume"), Mt(r), e.flowing && !e.reading && r.read(0); }
    w.prototype.pause = function () { return y("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (y("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this; };
    function Mt(r) { var e = r._readableState; for (y("flow", e.flowing); e.flowing && r.read() !== null;)
        ; }
    w.prototype.wrap = function (r) { var e = this, t = this._readableState, n = !1; r.on("end", function () { if (y("wrapped end"), t.decoder && !t.ended) {
        var o = t.decoder.end();
        o && o.length && e.push(o);
    } e.push(null); }), r.on("data", function (o) { if (y("wrapped data"), t.decoder && (o = t.decoder.write(o)), !(t.objectMode && o == null) && !(!t.objectMode && (!o || !o.length))) {
        var u = e.push(o);
        u || (n = !0, r.pause());
    } }); for (var i in r)
        this[i] === void 0 && typeof r[i] == "function" && (this[i] = (function (u) { return function () { return r[u].apply(r, arguments); }; })(i)); for (var a = 0; a < Rt.length; a++)
        r.on(Rt[a], this.emit.bind(this, Rt[a])); return this._read = function (o) { y("wrapped _read", o), n && (n = !1, r.resume()); }, this; };
    typeof Symbol == "function" && (w.prototype[Symbol.asyncIterator] = function () { return _t === void 0 && (_t = ua()), _t(this); });
    Object.defineProperty(w.prototype, "readableHighWaterMark", { enumerable: !1, get: function () { return this._readableState.highWaterMark; } });
    Object.defineProperty(w.prototype, "readableBuffer", { enumerable: !1, get: function () { return this._readableState && this._readableState.buffer; } });
    Object.defineProperty(w.prototype, "readableFlowing", { enumerable: !1, get: function () { return this._readableState.flowing; }, set: function (e) { this._readableState && (this._readableState.flowing = e); } });
    w._fromList = ba;
    Object.defineProperty(w.prototype, "readableLength", { enumerable: !1, get: function () { return this._readableState.length; } });
    function ba(r, e) { if (e.length === 0)
        return null; var t; return e.objectMode ? t = e.buffer.shift() : !r || r >= e.length ? (e.decoder ? t = e.buffer.join("") : e.buffer.length === 1 ? t = e.buffer.first() : t = e.buffer.concat(e.length), e.buffer.clear()) : t = e.buffer.consume(r, e.decoder), t; }
    function Tt(r) { var e = r._readableState; y("endReadable", e.endEmitted), e.endEmitted || (e.ended = !0, process.nextTick(zs, e, r)); }
    function zs(r, e) { if (y("endReadableNT", r.endEmitted, r.length), !r.endEmitted && r.length === 0 && (r.endEmitted = !0, e.readable = !1, e.emit("end"), r.autoDestroy)) {
        var t = e._writableState;
        (!t || t.autoDestroy && t.finished) && e.destroy();
    } }
    typeof Symbol == "function" && (w.from = function (r, e) { return At === void 0 && (At = sa()), At(w, r, e); });
    function wa(r, e) { for (var t = 0, n = r.length; t < n; t++)
        if (r[t] === e)
            return t; return -1; }
});
var Ft = p((lc, Ea) => {
    "use strict";
    Ea.exports = W;
    var Sr = te().codes, Gs = Sr.ERR_METHOD_NOT_IMPLEMENTED, Vs = Sr.ERR_MULTIPLE_CALLBACK, Ks = Sr.ERR_TRANSFORM_ALREADY_TRANSFORMING, Ys = Sr.ERR_TRANSFORM_WITH_LENGTH_0, _r = ne();
    z()(W, _r);
    function Xs(r, e) { var t = this._transformState; t.transforming = !1; var n = t.writecb; if (n === null)
        return this.emit("error", new Vs); t.writechunk = null, t.writecb = null, e != null && this.push(e), n(r); var i = this._readableState; i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark); }
    function W(r) { if (!(this instanceof W))
        return new W(r); _r.call(this, r), this._transformState = { afterTransform: Xs.bind(this), needTransform: !1, transforming: !1, writecb: null, writechunk: null, writeencoding: null }, this._readableState.needReadable = !0, this._readableState.sync = !1, r && (typeof r.transform == "function" && (this._transform = r.transform), typeof r.flush == "function" && (this._flush = r.flush)), this.on("prefinish", Zs); }
    function Zs() { var r = this; typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function (e, t) { va(r, e, t); }) : va(this, null, null); }
    W.prototype.push = function (r, e) { return this._transformState.needTransform = !1, _r.prototype.push.call(this, r, e); };
    W.prototype._transform = function (r, e, t) { t(new Gs("_transform()")); };
    W.prototype._write = function (r, e, t) { var n = this._transformState; if (n.writecb = t, n.writechunk = r, n.writeencoding = e, !n.transforming) {
        var i = this._readableState;
        (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
    } };
    W.prototype._read = function (r) { var e = this._transformState; e.writechunk !== null && !e.transforming ? (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0; };
    W.prototype._destroy = function (r, e) { _r.prototype._destroy.call(this, r, function (t) { e(t); }); };
    function va(r, e, t) { if (e)
        return r.emit("error", e); if (t != null && r.push(t), r._writableState.length)
        throw new Ys; if (r._transformState.transforming)
        throw new Ks; return r.push(null); }
});
var Aa = p((cc, _a) => {
    "use strict";
    _a.exports = Oe;
    var Sa = Ft();
    z()(Oe, Sa);
    function Oe(r) { if (!(this instanceof Oe))
        return new Oe(r); Sa.call(this, r); }
    Oe.prototype._transform = function (r, e, t) { t(null, r); };
});
var Ca = p((hc, Ba) => {
    "use strict";
    var Pt;
    function Js(r) { var e = !1; return function () { e || (e = !0, r.apply(void 0, arguments)); }; }
    var Ta = te().codes, Qs = Ta.ERR_MISSING_ARGS, el = Ta.ERR_STREAM_DESTROYED;
    function Ra(r) { if (r)
        throw r; }
    function rl(r) { return r.setHeader && typeof r.abort == "function"; }
    function tl(r, e, t, n) { n = Js(n); var i = !1; r.on("close", function () { i = !0; }), Pt === void 0 && (Pt = gr()), Pt(r, { readable: e, writable: t }, function (o) { if (o)
        return n(o); i = !0, n(); }); var a = !1; return function (o) { if (!i && !a) {
        if (a = !0, rl(r))
            return r.abort();
        if (typeof r.destroy == "function")
            return r.destroy();
        n(o || new el("pipe"));
    } }; }
    function xa(r) { r(); }
    function nl(r, e) { return r.pipe(e); }
    function il(r) { return !r.length || typeof r[r.length - 1] != "function" ? Ra : r.pop(); }
    function al() { for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
        e[t] = arguments[t]; var n = il(e); if (Array.isArray(e[0]) && (e = e[0]), e.length < 2)
        throw new Qs("streams"); var i, a = e.map(function (o, u) { var f = u < e.length - 1, l = u > 0; return tl(o, f, l, function (c) { i || (i = c), c && a.forEach(xa), !f && (a.forEach(xa), n(i)); }); }); return e.reduce(nl); }
    Ba.exports = al;
});
var Fa = p((pc, Ma) => { Ma.exports = C; var Ot = Ue().EventEmitter, ol = z(); ol(C, Ot); C.Readable = gt(); C.Writable = pt(); C.Duplex = ne(); C.Transform = Ft(); C.PassThrough = Aa(); C.finished = gr(); C.pipeline = Ca(); C.Stream = C; function C() { Ot.call(this); } C.prototype.pipe = function (r, e) { var t = this; function n(c) { r.writable && r.write(c) === !1 && t.pause && t.pause(); } t.on("data", n); function i() { t.readable && t.resume && t.resume(); } r.on("drain", i), !r._isStdio && (!e || e.end !== !1) && (t.on("end", o), t.on("close", u)); var a = !1; function o() { a || (a = !0, r.end()); } function u() { a || (a = !0, typeof r.destroy == "function" && r.destroy()); } function f(c) { if (l(), Ot.listenerCount(this, "error") === 0)
    throw c; } t.on("error", f), r.on("error", f); function l() { t.removeListener("data", n), r.removeListener("drain", i), t.removeListener("end", o), t.removeListener("close", u), t.removeListener("error", f), r.removeListener("error", f), t.removeListener("end", l), t.removeListener("close", l), r.removeListener("close", l); } return t.on("end", l), t.on("close", l), r.on("close", l), r.emit("pipe", t), r; }; });
import { AbortMultipartUploadCommand as ul, ChecksumAlgorithm as fl, CompleteMultipartUploadCommand as sl, CreateMultipartUploadCommand as ll, PutObjectCommand as La, PutObjectTaggingCommand as cl, UploadPartCommand as hl } from "@aws-sdk/client-s3";
var Ne = class {
    onabort = null;
    _aborted = !1;
    constructor() { Object.defineProperty(this, "_aborted", { value: !1, writable: !0 }); }
    get aborted() { return this._aborted; }
    abort() { this._aborted = !0, this.onabort && (this.onabort(this), this.onabort = null); }
};
var ke = class {
    signal = new Ne;
    abort() { this.signal.abort(); }
};
var Rr = Z(Ue());
var fn = Z(O());
var un = { lstatSync: () => { }, isFileReadStream(r) { return !1; } };
var le = L(A({}, un), { runtime: "browser" });
var Ee = r => { if (r == null)
    return 0; if (typeof r == "string")
    return fn.Buffer.byteLength(r); if (typeof r.byteLength == "number")
    return r.byteLength; if (typeof r.length == "number")
    return r.length; if (typeof r.size == "number")
    return r.size; if (typeof r.start == "number" && typeof r.end == "number")
    return r.end + 1 - r.start; if (le.isFileReadStream(r))
    try {
        return le.lstatSync(r.path).size;
    }
    catch {
        return;
    } };
var j = (function (r) { return r.EMPTY_INPUT = "a null or undefined Body", r.CONTENT_LENGTH = "the ContentLength property of the params set by the caller", r.STRING_LENGTH = "the encoded byte length of the Body string", r.TYPED_ARRAY = "the byteLength of a typed byte array such as Uint8Array", r.LENGTH = "the value of Body.length", r.SIZE = "the value of Body.size", r.START_END_DIFF = "the numeric difference between Body.start and Body.end", r.LSTAT = "the size of the file given by Body.path on disk as reported by lstatSync", r; })(j || {}), sn = (r, e) => { if (e != null)
    return j.CONTENT_LENGTH; if (r == null)
    return j.EMPTY_INPUT; if (typeof r == "string")
    return j.STRING_LENGTH; if (typeof r.byteLength == "number")
    return j.TYPED_ARRAY; if (typeof r.length == "number")
    return j.LENGTH; if (typeof r.size == "number")
    return j.SIZE; if (typeof r.start == "number" && typeof r.end == "number")
    return j.START_END_DIFF; if (le.isFileReadStream(r))
    try {
        return le.lstatSync(r.path).size, j.LSTAT;
    }
    catch {
        return;
    } };
var Oa = Z(O()), Ia = Z(Fa());
var It = Z(O());
function Ar(r, e, t) { return $(this, null, function* () { let n = 1, i = { chunks: [], length: 0 }; try {
    for (var a = ue(t(r)), o, u, f; o = !(u = yield new H(a.next())).done; o = !1) {
        let l = u.value;
        for (i.chunks.push(l), i.length += l.byteLength; i.length > e;) {
            let c = i.chunks.length > 1 ? It.Buffer.concat(i.chunks) : i.chunks[0];
            yield { partNumber: n, data: c.subarray(0, e) }, i.chunks = [c.subarray(e)], i.length = i.chunks[0].byteLength, n += 1;
        }
    }
}
catch {
    f = [u];
}
finally {
    try {
        o && (u = a.return) && (yield new H(u.call(a)));
    }
    finally {
        if (f)
            throw f[0];
    }
} yield { partNumber: n, data: i.chunks.length !== 1 ? It.Buffer.concat(i.chunks) : i.chunks[0], lastPart: !0 }; }); }
function Ut(r, e) { return $(this, null, function* () { let t = 1, n = 0, i = e; for (; i < r.byteLength;)
    yield { partNumber: t, data: r.subarray(n, i) }, t += 1, n = i, i = n + e; yield { partNumber: t, data: r.subarray(n), lastPart: !0 }; }); }
var Lt = Z(O());
function Pa(r) { return $(this, null, function* () { try {
    for (var e = ue(r), t, n, i; t = !(n = yield new H(e.next())).done; t = !1) {
        let a = n.value;
        Lt.Buffer.isBuffer(a) || a instanceof Uint8Array ? yield a : yield Lt.Buffer.from(a);
    }
}
catch {
    i = [n];
}
finally {
    try {
        t && (n = e.return) && (yield new H(n.call(e)));
    }
    finally {
        if (i)
            throw i[0];
    }
} }); }
var Nt = Z(O());
function kt(r) { return $(this, null, function* () { let e = r.getReader(); try {
    for (;;) {
        let { done: t, value: n } = yield new H(e.read());
        if (t)
            return;
        Nt.Buffer.isBuffer(n) || n instanceof Uint8Array ? yield n : yield Nt.Buffer.from(n);
    }
}
catch (t) {
    throw t;
}
finally {
    e.releaseLock();
} }); }
var Ua = (r, e) => { if (r instanceof Uint8Array)
    return Ut(r, e); if (r instanceof Ia.Readable)
    return Ar(r, e, Pa); if (r instanceof String || typeof r == "string")
    return Ut(Oa.Buffer.from(r), e); if (typeof r.stream == "function")
    return Ar(r.stream(), e, kt); if (r instanceof ReadableStream)
    return Ar(r, e, kt); throw new Error("Body Data is unsupported format, expected data to be one of: string | Uint8Array | Buffer | Readable | ReadableStream | Blob;."); };
var Ic = (() => {
    class r extends Rr.EventEmitter {
        static MIN_PART_SIZE = 1024 * 1024 * 5;
        MAX_PARTS = 1e4;
        queueSize = 4;
        partSize;
        leavePartsOnError = !1;
        tags = [];
        client;
        params;
        totalBytes;
        totalBytesSource;
        bytesUploadedSoFar;
        abortController;
        concurrentUploaders = [];
        createMultiPartPromise;
        abortMultipartUploadCommand = null;
        uploadedParts = [];
        uploadEnqueuedPartsCount = 0;
        expectedPartsCount;
        uploadId;
        uploadEvent;
        isMultiPart = !0;
        singleUploadResult;
        sent = !1;
        constructor(t) { if (super(), this.queueSize = t.queueSize || this.queueSize, this.leavePartsOnError = t.leavePartsOnError || this.leavePartsOnError, this.tags = t.tags || this.tags, this.client = t.client, this.params = t.params, !this.params)
            throw new Error("InputError: Upload requires params to be passed to upload."); this.totalBytes = this.params.ContentLength ?? Ee(this.params.Body), this.totalBytesSource = sn(this.params.Body, this.params.ContentLength), this.bytesUploadedSoFar = 0, this.abortController = t.abortController ?? new ke, this.partSize = t.partSize || Math.max(r.MIN_PART_SIZE, Math.floor((this.totalBytes || 0) / this.MAX_PARTS)), this.totalBytes !== void 0 && (this.expectedPartsCount = Math.ceil(this.totalBytes / this.partSize)), this.__validateInput(); }
        abort() { return N(this, null, function* () { this.abortController.abort(); }); }
        done() { return N(this, null, function* () { if (this.sent)
            throw new Error("@aws-sdk/lib-storage: this instance of Upload has already executed .done(). Create a new instance."); return this.sent = !0, yield Promise.race([this.__doMultipartUpload(), this.__abortTimeout(this.abortController.signal)]); }); }
        on(t, n) { return this.uploadEvent = t, super.on(t, n); }
        __uploadUsingPut(t) { return N(this, null, function* () { this.isMultiPart = !1; let n = L(A({}, this.params), { Body: t.data }), i = this.client.config, a = i.requestHandler, o = a instanceof Rr.EventEmitter ? a : null, u = _ => { this.bytesUploadedSoFar = _.loaded, this.totalBytes = _.total, this.__notifyProgress({ loaded: this.bytesUploadedSoFar, total: this.totalBytes, part: t.partNumber, Key: this.params.Key, Bucket: this.params.Bucket }); }; o !== null && o.on("xhr.upload.progress", u); let f = yield Promise.all([this.client.send(new La(n)), i?.endpoint?.()]), l = f[0], c = f[1]; if (c || (c = Dt(yield jt(n, La, A({}, i)))), !c)
            throw new Error('Could not resolve endpoint from S3 "client.config.endpoint()" nor EndpointsV2.'); o !== null && o.off("xhr.upload.progress", u); let h = this.params.Key.split("/").map(_ => Ie(_)).join("/"), m = Ie(this.params.Bucket), d = (() => { let _ = c.hostname.startsWith(`${m}.`), U = this.client.config.forcePathStyle, F = c.port ? `:${c.port}` : ""; return U ? `${c.protocol}//${c.hostname}${F}/${m}/${h}` : _ ? `${c.protocol}//${c.hostname}${F}/${h}` : `${c.protocol}//${m}.${c.hostname}${F}/${h}`; })(); this.singleUploadResult = L(A({}, l), { Bucket: this.params.Bucket, Key: this.params.Key, Location: d }); let v = Ee(t.data); this.__notifyProgress({ loaded: v, total: v, part: 1, Key: this.params.Key, Bucket: this.params.Bucket }); }); }
        __createMultipartUpload() { return N(this, null, function* () { let t = yield this.client.config.requestChecksumCalculation(); if (!this.createMultiPartPromise) {
            let n = L(A({}, this.params), { Body: void 0 });
            t === "WHEN_SUPPORTED" && (n.ChecksumAlgorithm = this.params.ChecksumAlgorithm || fl.CRC32), this.createMultiPartPromise = this.client.send(new ll(n)).then(i => (this.abortMultipartUploadCommand = new ul({ Bucket: this.params.Bucket, Key: this.params.Key, UploadId: i.UploadId }), i));
        } return this.createMultiPartPromise; }); }
        __doConcurrentUpload(t) { return N(this, null, function* () { try {
            for (var n = ue(t), i, a, o; i = !(a = yield n.next()).done; i = !1) {
                let u = a.value;
                if (this.uploadEnqueuedPartsCount > this.MAX_PARTS)
                    throw new Error(`Exceeded ${this.MAX_PARTS} parts in multipart upload to Bucket: ${this.params.Bucket} Key: ${this.params.Key}.`);
                if (this.abortController.signal.aborted)
                    return;
                if (u.partNumber === 1 && u.lastPart)
                    return yield this.__uploadUsingPut(u);
                if (!this.uploadId) {
                    let { UploadId: v } = yield this.__createMultipartUpload();
                    if (this.uploadId = v, this.abortController.signal.aborted)
                        return;
                }
                let f = Ee(u.data) || 0, l = this.client.config.requestHandler, c = l instanceof Rr.EventEmitter ? l : null, h = 0, m = (v, _) => { (Number(_.query.partNumber) || -1) === u.partNumber && (v.total && f && (this.bytesUploadedSoFar += v.loaded - h, h = v.loaded), this.__notifyProgress({ loaded: this.bytesUploadedSoFar, total: this.totalBytes, part: u.partNumber, Key: this.params.Key, Bucket: this.params.Bucket })); };
                c !== null && c.on("xhr.upload.progress", m), this.uploadEnqueuedPartsCount += 1, this.__validateUploadPart(u);
                let d = yield this.client.send(new hl(L(A({}, this.params), { ContentLength: void 0, UploadId: this.uploadId, Body: u.data, PartNumber: u.partNumber })));
                if (c !== null && c.off("xhr.upload.progress", m), this.abortController.signal.aborted)
                    return;
                if (!d.ETag)
                    throw new Error(`Part ${u.partNumber} is missing ETag in UploadPart response. Missing Bucket CORS configuration for ETag header?`);
                this.uploadedParts.push(A(A(A(A({ PartNumber: u.partNumber, ETag: d.ETag }, d.ChecksumCRC32 && { ChecksumCRC32: d.ChecksumCRC32 }), d.ChecksumCRC32C && { ChecksumCRC32C: d.ChecksumCRC32C }), d.ChecksumSHA1 && { ChecksumSHA1: d.ChecksumSHA1 }), d.ChecksumSHA256 && { ChecksumSHA256: d.ChecksumSHA256 })), c === null && (this.bytesUploadedSoFar += f), this.__notifyProgress({ loaded: this.bytesUploadedSoFar, total: this.totalBytes, part: u.partNumber, Key: this.params.Key, Bucket: this.params.Bucket });
            }
        }
        catch {
            o = [a];
        }
        finally {
            try {
                i && (a = n.return) && (yield a.call(n));
            }
            finally {
                if (o)
                    throw o[0];
            }
        } }); }
        __doMultipartUpload() {
            return N(this, null, function* () {
                let t = Ua(this.params.Body, this.partSize), n = [];
                for (let a = 0; a < this.queueSize; a++) {
                    let o = this.__doConcurrentUpload(t).catch(u => { n.push(u); });
                    this.concurrentUploaders.push(o);
                }
                if (yield Promise.all(this.concurrentUploaders), n.length >= 1)
                    throw yield this.markUploadAsAborted(), n[0];
                if (this.abortController.signal.aborted)
                    throw yield this.markUploadAsAborted(), Object.assign(new Error("Upload aborted."), { name: "AbortError" });
                let i;
                if (this.isMultiPart) {
                    let { expectedPartsCount: a, uploadedParts: o, totalBytes: u, totalBytesSource: f } = this;
                    if (u !== void 0 && a !== void 0 && o.length !== a)
                        throw new Error(`Expected ${a} part(s) but uploaded ${o.length} part(s).
The expected part count is based on the byte-count of the input.params.Body,
which was read from ${f} and is ${u}.
If this is not correct, provide an override value by setting a number
to input.params.ContentLength in bytes.
`);
                    this.uploadedParts.sort((c, h) => c.PartNumber - h.PartNumber);
                    let l = L(A({}, this.params), { Body: void 0, UploadId: this.uploadId, MultipartUpload: { Parts: this.uploadedParts } });
                    i = yield this.client.send(new sl(l)), typeof i?.Location == "string" && i.Location.includes("%2F") && (i.Location = i.Location.replace(/%2F/g, "/"));
                }
                else
                    i = this.singleUploadResult;
                return this.abortMultipartUploadCommand = null, this.tags.length && (yield this.client.send(new cl(L(A({}, this.params), { Tagging: { TagSet: this.tags } })))), i;
            });
        }
        markUploadAsAborted() { return N(this, null, function* () { this.uploadId && !this.leavePartsOnError && this.abortMultipartUploadCommand !== null && (yield this.client.send(this.abortMultipartUploadCommand), this.abortMultipartUploadCommand = null); }); }
        __notifyProgress(t) { this.uploadEvent && this.emit(this.uploadEvent, t); }
        __abortTimeout(t) { return N(this, null, function* () { return new Promise((n, i) => { t.onabort = () => { let a = new Error("Upload aborted."); a.name = "AbortError", i(a); }; }); }); }
        __validateUploadPart(t) { let n = Ee(t.data); if (n === void 0)
            throw new Error(`A dataPart was generated without a measurable data chunk size for part number ${t.partNumber}`); if (!(t.partNumber === 1 && t.lastPart) && !t.lastPart && n !== this.partSize)
            throw new Error(`The byte size for part number ${t.partNumber}, size ${n} does not match expected size ${this.partSize}`); }
        __validateInput() { if (!this.client)
            throw new Error("InputError: Upload requires a AWS client to do uploads with."); if (this.partSize < r.MIN_PART_SIZE)
            throw new Error(`EntityTooSmall: Your proposed upload part size [${this.partSize}] is smaller than the minimum allowed size [${r.MIN_PART_SIZE}] (5MB)`); if (this.queueSize < 1)
            throw new Error("Queue size: Must have at least one uploading queue."); }
    }
    return r;
})();
export { Ic as Upload };
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/
//# sourceMappingURL=_aws_sdk_lib_storage.txMb96_opl.js.map
