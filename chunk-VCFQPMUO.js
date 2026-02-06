import { a as $ } from "@nf-internal/chunk-UKAP7HNY";
import { e as Q, f as p, g as W, i as R } from "@nf-internal/chunk-J4XOFOAH";
var P = {};
W(P, { __assign: () => T, __asyncDelegator: () => ct, __asyncGenerator: () => st, __asyncValues: () => ht, __await: () => d, __awaiter: () => nt, __classPrivateFieldGet: () => xt, __classPrivateFieldSet: () => _t, __createBinding: () => it, __decorate: () => tt, __exportStar: () => at, __extends: () => V, __generator: () => ft, __importDefault: () => bt, __importStar: () => yt, __makeTemplateObject: () => lt, __metadata: () => rt, __param: () => et, __read: () => Z, __rest: () => k, __spread: () => ot, __spreadArrays: () => ut, __values: () => I });
function V(t, r) { B(t, r); function e() { this.constructor = t; } t.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e); }
function k(t, r) { var e = {}; for (var f in t)
    Object.prototype.hasOwnProperty.call(t, f) && r.indexOf(f) < 0 && (e[f] = t[f]); if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, f = Object.getOwnPropertySymbols(t); n < f.length; n++)
        r.indexOf(f[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, f[n]) && (e[f[n]] = t[f[n]]); return e; }
function tt(t, r, e, f) { var n = arguments.length, i = n < 3 ? r : f === null ? f = Object.getOwnPropertyDescriptor(r, e) : f, a; if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(t, r, e, f);
else
    for (var s = t.length - 1; s >= 0; s--)
        (a = t[s]) && (i = (n < 3 ? a(i) : n > 3 ? a(r, e, i) : a(r, e)) || i); return n > 3 && i && Object.defineProperty(r, e, i), i; }
function et(t, r) { return function (e, f) { r(e, f, t); }; }
function rt(t, r) { if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, r); }
function nt(t, r, e, f) { function n(i) { return i instanceof e ? i : new e(function (a) { a(i); }); } return new (e || (e = Promise))(function (i, a) { function s(h) { try {
    o(f.next(h));
}
catch (x) {
    a(x);
} } function c(h) { try {
    o(f.throw(h));
}
catch (x) {
    a(x);
} } function o(h) { h.done ? i(h.value) : n(h.value).then(s, c); } o((f = f.apply(t, r || [])).next()); }); }
function ft(t, r) { var e = { label: 0, sent: function () { if (i[0] & 1)
        throw i[1]; return i[1]; }, trys: [], ops: [] }, f, n, i, a; return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function () { return this; }), a; function s(o) { return function (h) { return c([o, h]); }; } function c(o) { if (f)
    throw new TypeError("Generator is already executing."); for (; e;)
    try {
        if (f = 1, n && (i = o[0] & 2 ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done)
            return i;
        switch (n = 0, i && (o = [o[0] & 2, i.value]), o[0]) {
            case 0:
            case 1:
                i = o;
                break;
            case 4: return e.label++, { value: o[1], done: !1 };
            case 5:
                e.label++, n = o[1], o = [0];
                continue;
            case 7:
                o = e.ops.pop(), e.trys.pop();
                continue;
            default:
                if (i = e.trys, !(i = i.length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                    e = 0;
                    continue;
                }
                if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) {
                    e.label = o[1];
                    break;
                }
                if (o[0] === 6 && e.label < i[1]) {
                    e.label = i[1], i = o;
                    break;
                }
                if (i && e.label < i[2]) {
                    e.label = i[2], e.ops.push(o);
                    break;
                }
                i[2] && e.ops.pop(), e.trys.pop();
                continue;
        }
        o = r.call(t, e);
    }
    catch (h) {
        o = [6, h], n = 0;
    }
    finally {
        f = i = 0;
    } if (o[0] & 5)
    throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; } }
function it(t, r, e, f) { f === void 0 && (f = e), t[f] = r[e]; }
function at(t, r) { for (var e in t)
    e !== "default" && !r.hasOwnProperty(e) && (r[e] = t[e]); }
function I(t) { var r = typeof Symbol == "function" && Symbol.iterator, e = r && t[r], f = 0; if (e)
    return e.call(t); if (t && typeof t.length == "number")
    return { next: function () { return t && f >= t.length && (t = void 0), { value: t && t[f++], done: !t }; } }; throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined."); }
function Z(t, r) { var e = typeof Symbol == "function" && t[Symbol.iterator]; if (!e)
    return t; var f = e.call(t), n, i = [], a; try {
    for (; (r === void 0 || r-- > 0) && !(n = f.next()).done;)
        i.push(n.value);
}
catch (s) {
    a = { error: s };
}
finally {
    try {
        n && !n.done && (e = f.return) && e.call(f);
    }
    finally {
        if (a)
            throw a.error;
    }
} return i; }
function ot() { for (var t = [], r = 0; r < arguments.length; r++)
    t = t.concat(Z(arguments[r])); return t; }
function ut() { for (var t = 0, r = 0, e = arguments.length; r < e; r++)
    t += arguments[r].length; for (var f = Array(t), n = 0, r = 0; r < e; r++)
    for (var i = arguments[r], a = 0, s = i.length; a < s; a++, n++)
        f[n] = i[a]; return f; }
function d(t) { return this instanceof d ? (this.v = t, this) : new d(t); }
function st(t, r, e) { if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined."); var f = e.apply(t, r || []), n, i = []; return n = {}, a("next"), a("throw"), a("return"), n[Symbol.asyncIterator] = function () { return this; }, n; function a(u) { f[u] && (n[u] = function (l) { return new Promise(function (v, A) { i.push([u, l, v, A]) > 1 || s(u, l); }); }); } function s(u, l) { try {
    c(f[u](l));
}
catch (v) {
    x(i[0][3], v);
} } function c(u) { u.value instanceof d ? Promise.resolve(u.value.v).then(o, h) : x(i[0][2], u); } function o(u) { s("next", u); } function h(u) { s("throw", u); } function x(u, l) { u(l), i.shift(), i.length && s(i[0][0], i[0][1]); } }
function ct(t) { var r, e; return r = {}, f("next"), f("throw", function (n) { throw n; }), f("return"), r[Symbol.iterator] = function () { return this; }, r; function f(n, i) { r[n] = t[n] ? function (a) { return (e = !e) ? { value: d(t[n](a)), done: n === "return" } : i ? i(a) : a; } : i; } }
function ht(t) { if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined."); var r = t[Symbol.asyncIterator], e; return r ? r.call(t) : (t = typeof I == "function" ? I(t) : t[Symbol.iterator](), e = {}, f("next"), f("throw"), f("return"), e[Symbol.asyncIterator] = function () { return this; }, e); function f(i) { e[i] = t[i] && function (a) { return new Promise(function (s, c) { a = t[i](a), n(s, c, a.done, a.value); }); }; } function n(i, a, s, c) { Promise.resolve(c).then(function (o) { i({ value: o, done: s }); }, a); } }
function lt(t, r) { return Object.defineProperty ? Object.defineProperty(t, "raw", { value: r }) : t.raw = r, t; }
function yt(t) { if (t && t.__esModule)
    return t; var r = {}; if (t != null)
    for (var e in t)
        Object.hasOwnProperty.call(t, e) && (r[e] = t[e]); return r.default = t, r; }
function bt(t) { return t && t.__esModule ? t : { default: t }; }
function xt(t, r) { if (!r.has(t))
    throw new TypeError("attempted to get private field on non-instance"); return r.get(t); }
function _t(t, r, e) { if (!r.has(t))
    throw new TypeError("attempted to set private field on non-instance"); return r.set(t, e), e; }
var B, T, j = Q(() => { B = function (t, r) { return B = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, f) { e.__proto__ = f; } || function (e, f) { for (var n in f)
    f.hasOwnProperty(n) && (e[n] = f[n]); }, B(t, r); }; T = function () { return T = Object.assign || function (r) { for (var e, f = 1, n = arguments.length; f < n; f++) {
    e = arguments[f];
    for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
} return r; }, T.apply(this, arguments); }; });
var U = p(y => {
    "use strict";
    Object.defineProperty(y, "__esModule", { value: !0 });
    y.MAX_HASHABLE_LENGTH = y.INIT = y.KEY = y.DIGEST_LENGTH = y.BLOCK_SIZE = void 0;
    y.BLOCK_SIZE = 64;
    y.DIGEST_LENGTH = 32;
    y.KEY = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
    y.INIT = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
    y.MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;
});
var q = p(m => {
    "use strict";
    Object.defineProperty(m, "__esModule", { value: !0 });
    m.RawSha256 = void 0;
    var b = U(), pt = (function () { function t() { this.state = Int32Array.from(b.INIT), this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1; } return t.prototype.update = function (r) { if (this.finished)
        throw new Error("Attempted to update an already finished hash."); var e = 0, f = r.byteLength; if (this.bytesHashed += f, this.bytesHashed * 8 > b.MAX_HASHABLE_LENGTH)
        throw new Error("Cannot hash more than 2^53 - 1 bits"); for (; f > 0;)
        this.buffer[this.bufferLength++] = r[e++], f--, this.bufferLength === b.BLOCK_SIZE && (this.hashBuffer(), this.bufferLength = 0); }, t.prototype.digest = function () { if (!this.finished) {
        var r = this.bytesHashed * 8, e = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength), f = this.bufferLength;
        if (e.setUint8(this.bufferLength++, 128), f % b.BLOCK_SIZE >= b.BLOCK_SIZE - 8) {
            for (var n = this.bufferLength; n < b.BLOCK_SIZE; n++)
                e.setUint8(n, 0);
            this.hashBuffer(), this.bufferLength = 0;
        }
        for (var n = this.bufferLength; n < b.BLOCK_SIZE - 8; n++)
            e.setUint8(n, 0);
        e.setUint32(b.BLOCK_SIZE - 8, Math.floor(r / 4294967296), !0), e.setUint32(b.BLOCK_SIZE - 4, r), this.hashBuffer(), this.finished = !0;
    } for (var i = new Uint8Array(b.DIGEST_LENGTH), n = 0; n < 8; n++)
        i[n * 4] = this.state[n] >>> 24 & 255, i[n * 4 + 1] = this.state[n] >>> 16 & 255, i[n * 4 + 2] = this.state[n] >>> 8 & 255, i[n * 4 + 3] = this.state[n] >>> 0 & 255; return i; }, t.prototype.hashBuffer = function () { for (var r = this, e = r.buffer, f = r.state, n = f[0], i = f[1], a = f[2], s = f[3], c = f[4], o = f[5], h = f[6], x = f[7], u = 0; u < b.BLOCK_SIZE; u++) {
        if (u < 16)
            this.temp[u] = (e[u * 4] & 255) << 24 | (e[u * 4 + 1] & 255) << 16 | (e[u * 4 + 2] & 255) << 8 | e[u * 4 + 3] & 255;
        else {
            var l = this.temp[u - 2], v = (l >>> 17 | l << 15) ^ (l >>> 19 | l << 13) ^ l >>> 10;
            l = this.temp[u - 15];
            var A = (l >>> 7 | l << 25) ^ (l >>> 18 | l << 14) ^ l >>> 3;
            this.temp[u] = (v + this.temp[u - 7] | 0) + (A + this.temp[u - 16] | 0);
        }
        var M = (((c >>> 6 | c << 26) ^ (c >>> 11 | c << 21) ^ (c >>> 25 | c << 7)) + (c & o ^ ~c & h) | 0) + (x + (b.KEY[u] + this.temp[u] | 0) | 0) | 0, J = ((n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)) + (n & i ^ n & a ^ i & a) | 0;
        x = h, h = o, o = c, c = s + M | 0, s = a, a = i, i = n, n = M + J | 0;
    } f[0] += n, f[1] += i, f[2] += a, f[3] += s, f[4] += c, f[5] += o, f[6] += h, f[7] += x; }, t; })();
    m.RawSha256 = pt;
});
var H = p(w => {
    "use strict";
    Object.defineProperty(w, "__esModule", { value: !0 });
    w.convertToBuffer = void 0;
    var vt = $(), dt = typeof Buffer < "u" && Buffer.from ? function (t) { return Buffer.from(t, "utf8"); } : vt.fromUtf8;
    function mt(t) { return t instanceof Uint8Array ? t : typeof t == "string" ? dt(t) : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(t); }
    w.convertToBuffer = mt;
});
var G = p(g => {
    "use strict";
    Object.defineProperty(g, "__esModule", { value: !0 });
    g.isEmptyData = void 0;
    function wt(t) { return typeof t == "string" ? t.length === 0 : t.byteLength === 0; }
    g.isEmptyData = wt;
});
var F = p(S => {
    "use strict";
    Object.defineProperty(S, "__esModule", { value: !0 });
    S.numToUint8 = void 0;
    function gt(t) { return new Uint8Array([(t & 4278190080) >> 24, (t & 16711680) >> 16, (t & 65280) >> 8, t & 255]); }
    S.numToUint8 = gt;
});
var N = p(O => {
    "use strict";
    Object.defineProperty(O, "__esModule", { value: !0 });
    O.uint32ArrayFrom = void 0;
    function St(t) { if (!Array.from) {
        for (var r = new Uint32Array(t.length), e = 0; e < t.length;)
            r[e] = t[e];
        return r;
    } return Uint32Array.from(t); }
    O.uint32ArrayFrom = St;
});
var Y = p(_ => {
    "use strict";
    Object.defineProperty(_, "__esModule", { value: !0 });
    _.uint32ArrayFrom = _.numToUint8 = _.isEmptyData = _.convertToBuffer = void 0;
    var Ot = H();
    Object.defineProperty(_, "convertToBuffer", { enumerable: !0, get: function () { return Ot.convertToBuffer; } });
    var Et = G();
    Object.defineProperty(_, "isEmptyData", { enumerable: !0, get: function () { return Et.isEmptyData; } });
    var Lt = F();
    Object.defineProperty(_, "numToUint8", { enumerable: !0, get: function () { return Lt.numToUint8; } });
    var At = N();
    Object.defineProperty(_, "uint32ArrayFrom", { enumerable: !0, get: function () { return At.uint32ArrayFrom; } });
});
var z = p(L => {
    "use strict";
    Object.defineProperty(L, "__esModule", { value: !0 });
    L.Sha256 = void 0;
    var X = (j(), R(P)), E = U(), K = q(), C = Y(), Bt = (function () { function t(r) { if (this.hash = new K.RawSha256, r) {
        this.outer = new K.RawSha256;
        var e = Tt(r), f = new Uint8Array(E.BLOCK_SIZE);
        f.set(e);
        for (var n = 0; n < E.BLOCK_SIZE; n++)
            e[n] ^= 54, f[n] ^= 92;
        this.hash.update(e), this.outer.update(f);
        for (var n = 0; n < e.byteLength; n++)
            e[n] = 0;
    } } return t.prototype.update = function (r) { if (!((0, C.isEmptyData)(r) || this.error))
        try {
            this.hash.update((0, C.convertToBuffer)(r));
        }
        catch (e) {
            this.error = e;
        } }, t.prototype.digestSync = function () { if (this.error)
        throw this.error; return this.outer ? (this.outer.finished || this.outer.update(this.hash.digest()), this.outer.digest()) : this.hash.digest(); }, t.prototype.digest = function () { return (0, X.__awaiter)(this, void 0, void 0, function () { return (0, X.__generator)(this, function (r) { return [2, this.digestSync()]; }); }); }, t; })();
    L.Sha256 = Bt;
    function Tt(t) { var r = (0, C.convertToBuffer)(t); if (r.byteLength > E.BLOCK_SIZE) {
        var e = new K.RawSha256;
        e.update(r), r = e.digest();
    } var f = new Uint8Array(E.BLOCK_SIZE); return f.set(r), f; }
});
var Pt = p(D => {
    "use strict";
    Object.defineProperty(D, "__esModule", { value: !0 });
    var It = (j(), R(P));
    (0, It.__exportStar)(z(), D);
});
export { Pt as a };
/*! Bundled license information:

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
