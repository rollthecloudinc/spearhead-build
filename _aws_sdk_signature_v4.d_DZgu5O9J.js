import { a as _ } from "@nf-internal/chunk-236A42LZ";
import { a as Je } from "@nf-internal/chunk-ONHZ3TL5";
import { a as w, b as v, d as ye, e as Ze, f as B, g as Ve, h as pe, i as he, k as A } from "@nf-internal/chunk-GL2BOVXA";
var Y = {};
Ve(Y, { __assign: () => Q, __asyncDelegator: () => xt, __asyncGenerator: () => lt, __asyncValues: () => yt, __await: () => F, __awaiter: () => st, __classPrivateFieldGet: () => mt, __classPrivateFieldSet: () => Dt, __createBinding: () => at, __decorate: () => rt, __exportStar: () => ct, __extends: () => et, __generator: () => it, __importDefault: () => At, __importStar: () => ht, __makeTemplateObject: () => pt, __metadata: () => ot, __param: () => nt, __read: () => Ae, __rest: () => tt, __spread: () => ft, __spreadArrays: () => ut, __values: () => X });
function et(t, e) { K(t, e); function r() { this.constructor = t; } t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r); }
function tt(t, e) { var r = {}; for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]); if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
        e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (r[n[s]] = t[n[s]]); return r; }
function rt(t, e, r, n) { var s = arguments.length, o = s < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, i; if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(t, e, r, n);
else
    for (var c = t.length - 1; c >= 0; c--)
        (i = t[c]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, r, o) : i(e, r)) || o); return s > 3 && o && Object.defineProperty(e, r, o), o; }
function nt(t, e) { return function (r, n) { e(r, n, t); }; }
function ot(t, e) { if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e); }
function st(t, e, r, n) { function s(o) { return o instanceof r ? o : new r(function (i) { i(o); }); } return new (r || (r = Promise))(function (o, i) { function c(u) { try {
    a(n.next(u));
}
catch (x) {
    i(x);
} } function f(u) { try {
    a(n.throw(u));
}
catch (x) {
    i(x);
} } function a(u) { u.done ? o(u.value) : s(u.value).then(c, f); } a((n = n.apply(t, e || [])).next()); }); }
function it(t, e) { var r = { label: 0, sent: function () { if (o[0] & 1)
        throw o[1]; return o[1]; }, trys: [], ops: [] }, n, s, o, i; return i = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function () { return this; }), i; function c(a) { return function (u) { return f([a, u]); }; } function f(a) { if (n)
    throw new TypeError("Generator is already executing."); for (; r;)
    try {
        if (n = 1, s && (o = a[0] & 2 ? s.return : a[0] ? s.throw || ((o = s.return) && o.call(s), 0) : s.next) && !(o = o.call(s, a[1])).done)
            return o;
        switch (s = 0, o && (a = [a[0] & 2, o.value]), a[0]) {
            case 0:
            case 1:
                o = a;
                break;
            case 4: return r.label++, { value: a[1], done: !1 };
            case 5:
                r.label++, s = a[1], a = [0];
                continue;
            case 7:
                a = r.ops.pop(), r.trys.pop();
                continue;
            default:
                if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (a[0] === 6 || a[0] === 2)) {
                    r = 0;
                    continue;
                }
                if (a[0] === 3 && (!o || a[1] > o[0] && a[1] < o[3])) {
                    r.label = a[1];
                    break;
                }
                if (a[0] === 6 && r.label < o[1]) {
                    r.label = o[1], o = a;
                    break;
                }
                if (o && r.label < o[2]) {
                    r.label = o[2], r.ops.push(a);
                    break;
                }
                o[2] && r.ops.pop(), r.trys.pop();
                continue;
        }
        a = e.call(t, r);
    }
    catch (u) {
        a = [6, u], s = 0;
    }
    finally {
        n = o = 0;
    } if (a[0] & 5)
    throw a[1]; return { value: a[0] ? a[1] : void 0, done: !0 }; } }
function at(t, e, r, n) { n === void 0 && (n = r), t[n] = e[r]; }
function ct(t, e) { for (var r in t)
    r !== "default" && !e.hasOwnProperty(r) && (e[r] = t[r]); }
function X(t) { var e = typeof Symbol == "function" && Symbol.iterator, r = e && t[e], n = 0; if (r)
    return r.call(t); if (t && typeof t.length == "number")
    return { next: function () { return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t }; } }; throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined."); }
function Ae(t, e) { var r = typeof Symbol == "function" && t[Symbol.iterator]; if (!r)
    return t; var n = r.call(t), s, o = [], i; try {
    for (; (e === void 0 || e-- > 0) && !(s = n.next()).done;)
        o.push(s.value);
}
catch (c) {
    i = { error: c };
}
finally {
    try {
        s && !s.done && (r = n.return) && r.call(n);
    }
    finally {
        if (i)
            throw i.error;
    }
} return o; }
function ft() { for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(Ae(arguments[e])); return t; }
function ut() { for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length; for (var n = Array(t), s = 0, e = 0; e < r; e++)
    for (var o = arguments[e], i = 0, c = o.length; i < c; i++, s++)
        n[s] = o[i]; return n; }
function F(t) { return this instanceof F ? (this.v = t, this) : new F(t); }
function lt(t, e, r) { if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined."); var n = r.apply(t, e || []), s, o = []; return s = {}, i("next"), i("throw"), i("return"), s[Symbol.asyncIterator] = function () { return this; }, s; function i(l) { n[l] && (s[l] = function (p) { return new Promise(function (m, d) { o.push([l, p, m, d]) > 1 || c(l, p); }); }); } function c(l, p) { try {
    f(n[l](p));
}
catch (m) {
    x(o[0][3], m);
} } function f(l) { l.value instanceof F ? Promise.resolve(l.value.v).then(a, u) : x(o[0][2], l); } function a(l) { c("next", l); } function u(l) { c("throw", l); } function x(l, p) { l(p), o.shift(), o.length && c(o[0][0], o[0][1]); } }
function xt(t) { var e, r; return e = {}, n("next"), n("throw", function (s) { throw s; }), n("return"), e[Symbol.iterator] = function () { return this; }, e; function n(s, o) { e[s] = t[s] ? function (i) { return (r = !r) ? { value: F(t[s](i)), done: s === "return" } : o ? o(i) : i; } : o; } }
function yt(t) { if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined."); var e = t[Symbol.asyncIterator], r; return e ? e.call(t) : (t = typeof X == "function" ? X(t) : t[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function () { return this; }, r); function n(o) { r[o] = t[o] && function (i) { return new Promise(function (c, f) { i = t[o](i), s(c, f, i.done, i.value); }); }; } function s(o, i, c, f) { Promise.resolve(f).then(function (a) { o({ value: a, done: c }); }, i); } }
function pt(t, e) { return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t; }
function ht(t) { if (t && t.__esModule)
    return t; var e = {}; if (t != null)
    for (var r in t)
        Object.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e.default = t, e; }
function At(t) { return t && t.__esModule ? t : { default: t }; }
function mt(t, e) { if (!e.has(t))
    throw new TypeError("attempted to get private field on non-instance"); return e.get(t); }
function Dt(t, e, r) { if (!e.has(t))
    throw new TypeError("attempted to set private field on non-instance"); return e.set(t, r), r; }
var K, Q, W = Ze(() => { K = function (t, e) { return K = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (r, n) { r.__proto__ = n; } || function (r, n) { for (var s in n)
    n.hasOwnProperty(s) && (r[s] = n[s]); }, K(t, e); }; Q = function () { return Q = Object.assign || function (e) { for (var r, n = 1, s = arguments.length; n < s; n++) {
    r = arguments[n];
    for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
} return e; }, Q.apply(this, arguments); }; });
var me = B(O => {
    "use strict";
    Object.defineProperty(O, "__esModule", { value: !0 });
    O.convertToBuffer = void 0;
    var dt = Je(), gt = typeof Buffer < "u" && Buffer.from ? function (t) { return Buffer.from(t, "utf8"); } : dt.fromUtf8;
    function Et(t) { return t instanceof Uint8Array ? t : typeof t == "string" ? gt(t) : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(t); }
    O.convertToBuffer = Et;
});
var De = B(U => {
    "use strict";
    Object.defineProperty(U, "__esModule", { value: !0 });
    U.isEmptyData = void 0;
    function Bt(t) { return typeof t == "string" ? t.length === 0 : t.byteLength === 0; }
    U.isEmptyData = Bt;
});
var de = B(I => {
    "use strict";
    Object.defineProperty(I, "__esModule", { value: !0 });
    I.numToUint8 = void 0;
    function wt(t) { return new Uint8Array([(t & 4278190080) >> 24, (t & 16711680) >> 16, (t & 65280) >> 8, t & 255]); }
    I.numToUint8 = wt;
});
var ge = B(P => {
    "use strict";
    Object.defineProperty(P, "__esModule", { value: !0 });
    P.uint32ArrayFrom = void 0;
    function Ct(t) { if (!Uint32Array.from) {
        for (var e = new Uint32Array(t.length), r = 0; r < t.length;)
            e[r] = t[r], r += 1;
        return e;
    } return Uint32Array.from(t); }
    P.uint32ArrayFrom = Ct;
});
var Z = B(D => {
    "use strict";
    Object.defineProperty(D, "__esModule", { value: !0 });
    D.uint32ArrayFrom = D.numToUint8 = D.isEmptyData = D.convertToBuffer = void 0;
    var bt = me();
    Object.defineProperty(D, "convertToBuffer", { enumerable: !0, get: function () { return bt.convertToBuffer; } });
    var vt = De();
    Object.defineProperty(D, "isEmptyData", { enumerable: !0, get: function () { return vt.isEmptyData; } });
    var _t = de();
    Object.defineProperty(D, "numToUint8", { enumerable: !0, get: function () { return _t.numToUint8; } });
    var Ft = ge();
    Object.defineProperty(D, "uint32ArrayFrom", { enumerable: !0, get: function () { return Ft.uint32ArrayFrom; } });
});
var we = B(N => {
    "use strict";
    Object.defineProperty(N, "__esModule", { value: !0 });
    N.AwsCrc32 = void 0;
    var Ee = (W(), he(Y)), V = Z(), Be = H(), St = (function () { function t() { this.crc32 = new Be.Crc32; } return t.prototype.update = function (e) { (0, V.isEmptyData)(e) || this.crc32.update((0, V.convertToBuffer)(e)); }, t.prototype.digest = function () { return Ee.__awaiter(this, void 0, void 0, function () { return Ee.__generator(this, function (e) { return [2, (0, V.numToUint8)(this.crc32.digest())]; }); }); }, t.prototype.reset = function () { this.crc32 = new Be.Crc32; }, t; })();
    N.AwsCrc32 = St;
});
var H = B(g => {
    "use strict";
    Object.defineProperty(g, "__esModule", { value: !0 });
    g.AwsCrc32 = g.Crc32 = g.crc32 = void 0;
    var Rt = (W(), he(Y)), Tt = Z();
    function Ot(t) { return new Ce().update(t).digest(); }
    g.crc32 = Ot;
    var Ce = (function () { function t() { this.checksum = 4294967295; } return t.prototype.update = function (e) { var r, n; try {
        for (var s = Rt.__values(e), o = s.next(); !o.done; o = s.next()) {
            var i = o.value;
            this.checksum = this.checksum >>> 8 ^ It[(this.checksum ^ i) & 255];
        }
    }
    catch (c) {
        r = { error: c };
    }
    finally {
        try {
            o && !o.done && (n = s.return) && n.call(s);
        }
        finally {
            if (r)
                throw r.error;
        }
    } return this; }, t.prototype.digest = function () { return (this.checksum ^ 4294967295) >>> 0; }, t; })();
    g.Crc32 = Ce;
    var Ut = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117], It = (0, Tt.uint32ArrayFrom)(Ut), Pt = we();
    Object.defineProperty(g, "AwsCrc32", { enumerable: !0, get: function () { return Pt.AwsCrc32; } });
});
var Yt = pe(H());
var be = {}, J = {};
for (let t = 0; t < 256; t++) {
    let e = t.toString(16).toLowerCase();
    e.length === 1 && (e = `0${e}`), be[t] = e, J[e] = t;
}
function ve(t) { if (t.length % 2 !== 0)
    throw new Error("Hex encoded strings must have an even number length"); let e = new Uint8Array(t.length / 2); for (let r = 0; r < t.length; r += 2) {
    let n = t.slice(r, r + 2).toLowerCase();
    if (n in J)
        e[r / 2] = J[n];
    else
        throw new Error(`Cannot decode unrecognized sequence ${n} as hexadecimal`);
} return e; }
function y(t) { let e = ""; for (let r = 0; r < t.byteLength; r++)
    e += be[t[r]]; return e; }
var C = class t {
    constructor(e) { if (this.bytes = e, e.byteLength !== 8)
        throw new Error("Int64 buffers must be exactly 8 bytes"); }
    static fromNumber(e) { if (e > 9223372036854776e3 || e < -9223372036854776e3)
        throw new Error(`${e} is too large (or, if negative, too small) to represent as an Int64`); let r = new Uint8Array(8); for (let n = 7, s = Math.abs(Math.round(e)); n > -1 && s > 0; n--, s /= 256)
        r[n] = s; return e < 0 && _e(r), new t(r); }
    valueOf() { let e = this.bytes.slice(0), r = e[0] & 128; return r && _e(e), parseInt(y(e), 16) * (r ? -1 : 1); }
    toString() { return String(this.valueOf()); }
};
function _e(t) { for (let e = 0; e < 8; e++)
    t[e] ^= 255; for (let e = 7; e > -1 && (t[e]++, t[e] === 0); e--)
    ; }
var S = class {
    constructor(e, r) { this.toUtf8 = e, this.fromUtf8 = r; }
    format(e) { let r = []; for (let o of Object.keys(e)) {
        let i = this.fromUtf8(o);
        r.push(Uint8Array.from([i.byteLength]), i, this.formatHeaderValue(e[o]));
    } let n = new Uint8Array(r.reduce((o, i) => o + i.byteLength, 0)), s = 0; for (let o of r)
        n.set(o, s), s += o.byteLength; return n; }
    formatHeaderValue(e) { switch (e.type) {
        case "boolean": return Uint8Array.from([e.value ? 0 : 1]);
        case "byte": return Uint8Array.from([2, e.value]);
        case "short":
            let r = new DataView(new ArrayBuffer(3));
            return r.setUint8(0, 3), r.setInt16(1, e.value, !1), new Uint8Array(r.buffer);
        case "integer":
            let n = new DataView(new ArrayBuffer(5));
            return n.setUint8(0, 4), n.setInt32(1, e.value, !1), new Uint8Array(n.buffer);
        case "long":
            let s = new Uint8Array(9);
            return s[0] = 5, s.set(e.value.bytes, 1), s;
        case "binary":
            let o = new DataView(new ArrayBuffer(3 + e.value.byteLength));
            o.setUint8(0, 6), o.setUint16(1, e.value.byteLength, !1);
            let i = new Uint8Array(o.buffer);
            return i.set(e.value, 3), i;
        case "string":
            let c = this.fromUtf8(e.value), f = new DataView(new ArrayBuffer(3 + c.byteLength));
            f.setUint8(0, 7), f.setUint16(1, c.byteLength, !1);
            let a = new Uint8Array(f.buffer);
            return a.set(c, 3), a;
        case "timestamp":
            let u = new Uint8Array(9);
            return u[0] = 8, u.set(C.fromNumber(e.value.valueOf()).bytes, 1), u;
        case "uuid":
            if (!zt.test(e.value))
                throw new Error(`Invalid UUID received: ${e.value}`);
            let x = new Uint8Array(17);
            return x[0] = 9, x.set(ve(e.value.replace(/\-/g, "")), 1), x;
    } }
    parse(e) { let r = {}, n = 0; for (; n < e.byteLength;) {
        let s = e.getUint8(n++), o = this.toUtf8(new Uint8Array(e.buffer, e.byteOffset + n, s));
        switch (n += s, e.getUint8(n++)) {
            case 0:
                r[o] = { type: Fe, value: !0 };
                break;
            case 1:
                r[o] = { type: Fe, value: !1 };
                break;
            case 2:
                r[o] = { type: Nt, value: e.getInt8(n++) };
                break;
            case 3:
                r[o] = { type: Ht, value: e.getInt16(n, !1) }, n += 2;
                break;
            case 4:
                r[o] = { type: Mt, value: e.getInt32(n, !1) }, n += 4;
                break;
            case 5:
                r[o] = { type: jt, value: new C(new Uint8Array(e.buffer, e.byteOffset + n, 8)) }, n += 8;
                break;
            case 6:
                let i = e.getUint16(n, !1);
                n += 2, r[o] = { type: $t, value: new Uint8Array(e.buffer, e.byteOffset + n, i) }, n += i;
                break;
            case 7:
                let c = e.getUint16(n, !1);
                n += 2, r[o] = { type: Lt, value: this.toUtf8(new Uint8Array(e.buffer, e.byteOffset + n, c)) }, n += c;
                break;
            case 8:
                r[o] = { type: kt, value: new Date(new C(new Uint8Array(e.buffer, e.byteOffset + n, 8)).valueOf()) }, n += 8;
                break;
            case 9:
                let f = new Uint8Array(e.buffer, e.byteOffset + n, 16);
                n += 16, r[o] = { type: Gt, value: `${y(f.subarray(0, 4))}-${y(f.subarray(4, 6))}-${y(f.subarray(6, 8))}-${y(f.subarray(8, 10))}-${y(f.subarray(10))}` };
                break;
            default: throw new Error("Unrecognized header type tag");
        }
    } return r; }
};
var Fe = "boolean", Nt = "byte", Ht = "short", Mt = "integer", jt = "long", $t = "binary", Lt = "string", kt = "timestamp", Gt = "uuid", zt = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
var qt = pe(H()), Kt = 4, Qt = Kt * 2, Xt = 4, xr = Qt + Xt * 2;
var ne = t => { if (typeof t == "function")
    return t; let e = Promise.resolve(t); return () => e; };
var M = t => new TextEncoder().encode(t);
var E = t => typeof t == "string" ? M(t) : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(t);
var Se = t => new TextDecoder("utf-8").decode(t);
var Re = "X-Amz-Algorithm", Te = "X-Amz-Credential", oe = "X-Amz-Date", Oe = "X-Amz-SignedHeaders", Ue = "X-Amz-Expires", se = "X-Amz-Signature", ie = "X-Amz-Security-Token";
var ae = "authorization", ce = oe.toLowerCase(), Wt = "date", Ie = [ae, ce, Wt], Pe = se.toLowerCase(), R = "x-amz-content-sha256", Ne = ie.toLowerCase();
var He = { authorization: !0, "cache-control": !0, connection: !0, expect: !0, from: !0, "keep-alive": !0, "max-forwards": !0, pragma: !0, referer: !0, te: !0, trailer: !0, "transfer-encoding": !0, upgrade: !0, "user-agent": !0, "x-amzn-trace-id": !0 }, Me = /^proxy-/, je = /^sec-/;
var j = "AWS4-HMAC-SHA256";
var $e = "AWS4-HMAC-SHA256-PAYLOAD", Le = "UNSIGNED-PAYLOAD", ke = 50, fe = "aws4_request", Ge = 3600 * 24 * 7;
var b = {}, $ = [], L = (t, e, r) => `${t}/${e}/${r}/${fe}`, qe = (t, e, r, n, s) => A(null, null, function* () { let o = yield ze(t, e.secretAccessKey, e.accessKeyId), i = `${r}:${n}:${s}:${y(o)}:${e.sessionToken}`; if (i in b)
    return b[i]; for ($.push(i); $.length > ke;)
    delete b[$.shift()]; let c = `AWS4${e.secretAccessKey}`; for (let f of [r, n, s, fe])
    c = yield ze(t, c, f); return b[i] = c; }), Wr = () => { $.length = 0, Object.keys(b).forEach(t => { delete b[t]; }); }, ze = (t, e, r) => { let n = new t(e); return n.update(E(r)), n.digest(); };
var k = ({ headers: t }, e, r) => { let n = {}; for (let s of Object.keys(t).sort()) {
    if (t[s] == null)
        continue;
    let o = s.toLowerCase();
    (o in He || e?.has(o) || Me.test(o) || je.test(o)) && (!r || r && !r.has(o)) || (n[o] = t[s].trim().replace(/\s+/g, " "));
} return n; };
var ue = ({ query: t = {} }) => { let e = [], r = {}; for (let n of Object.keys(t).sort()) {
    if (n.toLowerCase() === Pe)
        continue;
    e.push(n);
    let s = t[n];
    typeof s == "string" ? r[n] = `${_(n)}=${_(s)}` : Array.isArray(s) && (r[n] = s.slice(0).sort().reduce((o, i) => o.concat([`${_(n)}=${_(i)}`]), []).join("&"));
} return e.map(n => r[n]).filter(n => n).join("&"); };
var Ke = t => typeof ArrayBuffer == "function" && t instanceof ArrayBuffer || Object.prototype.toString.call(t) === "[object ArrayBuffer]";
var T = (n, s) => A(null, [n, s], function* ({ headers: t, body: e }, r) { for (let o of Object.keys(t))
    if (o.toLowerCase() === R)
        return t[o]; if (e == null)
    return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"; if (typeof e == "string" || ArrayBuffer.isView(e) || Ke(e)) {
    let o = new r;
    return o.update(E(e)), y(yield o.digest());
} return Le; });
var Qe = (t, e) => { t = t.toLowerCase(); for (let r of Object.keys(e))
    if (t === r.toLowerCase())
        return !0; return !1; };
var G = n => { var s = n, { headers: t, query: e } = s, r = ye(s, ["headers", "query"]); return v(w({}, r), { headers: w({}, t), query: e ? Zt(e) : void 0 }); }, Zt = t => Object.keys(t).reduce((e, r) => { let n = t[r]; return v(w({}, e), { [r]: Array.isArray(n) ? [...n] : n }); }, {});
var le = (t, e = {}) => { let { headers: r, query: n = {} } = typeof t.clone == "function" ? t.clone() : G(t); for (let s of Object.keys(r)) {
    let o = s.toLowerCase();
    o.slice(0, 6) === "x-amz-" && !e.unhoistableHeaders?.has(o) && (n[s] = r[s], delete r[s]);
} return v(w({}, t), { headers: r, query: n }); };
var z = t => { t = typeof t.clone == "function" ? t.clone() : G(t); for (let e of Object.keys(t.headers))
    Ie.indexOf(e.toLowerCase()) > -1 && delete t.headers[e]; return t; };
var Xe = t => Vt(t).toISOString().replace(/\.\d{3}Z$/, "Z"), Vt = t => typeof t == "number" ? new Date(t * 1e3) : typeof t == "string" ? Number(t) ? new Date(Number(t) * 1e3) : new Date(t) : t;
var Ye = class {
    constructor({ applyChecksum: e, credentials: r, region: n, service: s, sha256: o, uriEscapePath: i = !0 }) { this.headerMarshaller = new S(Se, M), this.service = s, this.sha256 = o, this.uriEscapePath = i, this.applyChecksum = typeof e == "boolean" ? e : !0, this.regionProvider = ne(n), this.credentialProvider = ne(r); }
    presign(n) { return A(this, arguments, function* (e, r = {}) { let { signingDate: s = new Date, expiresIn: o = 3600, unsignableHeaders: i, unhoistableHeaders: c, signableHeaders: f, signingRegion: a, signingService: u } = r, x = yield this.credentialProvider(); this.validateResolvedCredentials(x); let l = a ?? (yield this.regionProvider()), { longDate: p, shortDate: m } = q(s); if (o > Ge)
        return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future"); let d = L(m, l, u ?? this.service), h = le(z(e), { unhoistableHeaders: c }); x.sessionToken && (h.query[ie] = x.sessionToken), h.query[Re] = j, h.query[Te] = `${x.accessKeyId}/${d}`, h.query[oe] = p, h.query[Ue] = o.toString(10); let xe = k(h, i, f); return h.query[Oe] = We(xe), h.query[se] = yield this.getSignature(p, d, this.getSigningKey(x, l, m, u), this.createCanonicalRequest(h, xe, yield T(e, this.sha256))), h; }); }
    sign(e, r) { return A(this, null, function* () { return typeof e == "string" ? this.signString(e, r) : e.headers && e.payload ? this.signEvent(e, r) : e.message ? this.signMessage(e, r) : this.signRequest(e, r); }); }
    signEvent(c, f) {
        return A(this, arguments, function* ({ headers: e, payload: r }, { signingDate: n = new Date, priorSignature: s, signingRegion: o, signingService: i }) {
            let a = o ?? (yield this.regionProvider()), { shortDate: u, longDate: x } = q(n), l = L(u, a, i ?? this.service), p = yield T({ headers: {}, body: r }, this.sha256), m = new this.sha256;
            m.update(e);
            let d = y(yield m.digest()), h = [$e, x, l, s, d, p].join(`
`);
            return this.signString(h, { signingDate: n, signingRegion: a, signingService: i });
        });
    }
    signMessage(o, i) { return A(this, arguments, function* (e, { signingDate: r = new Date, signingRegion: n, signingService: s }) { return this.signEvent({ headers: this.headerMarshaller.format(e.message.headers), payload: e.message.body }, { signingDate: r, signingRegion: n, signingService: s, priorSignature: e.priorSignature }).then(f => ({ message: e.message, signature: f })); }); }
    signString(o) { return A(this, arguments, function* (e, { signingDate: r = new Date, signingRegion: n, signingService: s } = {}) { let i = yield this.credentialProvider(); this.validateResolvedCredentials(i); let c = n ?? (yield this.regionProvider()), { shortDate: f } = q(r), a = new this.sha256(yield this.getSigningKey(i, c, f, s)); return a.update(E(e)), y(yield a.digest()); }); }
    signRequest(c) { return A(this, arguments, function* (e, { signingDate: r = new Date, signableHeaders: n, unsignableHeaders: s, signingRegion: o, signingService: i } = {}) { let f = yield this.credentialProvider(); this.validateResolvedCredentials(f); let a = o ?? (yield this.regionProvider()), u = z(e), { longDate: x, shortDate: l } = q(r), p = L(l, a, i ?? this.service); u.headers[ce] = x, f.sessionToken && (u.headers[Ne] = f.sessionToken); let m = yield T(u, this.sha256); !Qe(R, u.headers) && this.applyChecksum && (u.headers[R] = m); let d = k(u, s, n), h = yield this.getSignature(x, p, this.getSigningKey(f, a, l, i), this.createCanonicalRequest(u, d, m)); return u.headers[ae] = `${j} Credential=${f.accessKeyId}/${p}, SignedHeaders=${We(d)}, Signature=${h}`, u; }); }
    createCanonicalRequest(e, r, n) {
        let s = Object.keys(r).sort();
        return `${e.method}
${this.getCanonicalPath(e)}
${ue(e)}
${s.map(o => `${o}:${r[o]}`).join(`
`)}

${s.join(";")}
${n}`;
    }
    createStringToSign(e, r, n) {
        return A(this, null, function* () {
            let s = new this.sha256;
            s.update(E(n));
            let o = yield s.digest();
            return `${j}
${e}
${r}
${y(o)}`;
        });
    }
    getCanonicalPath({ path: e }) { if (this.uriEscapePath) {
        let r = [];
        for (let o of e.split("/"))
            o?.length !== 0 && o !== "." && (o === ".." ? r.pop() : r.push(o));
        let n = `${e?.startsWith("/") ? "/" : ""}${r.join("/")}${r.length > 0 && e?.endsWith("/") ? "/" : ""}`;
        return encodeURIComponent(n).replace(/%2F/g, "/");
    } return e; }
    getSignature(e, r, n, s) { return A(this, null, function* () { let o = yield this.createStringToSign(e, r, s), i = new this.sha256(yield n); return i.update(E(o)), y(yield i.digest()); }); }
    getSigningKey(e, r, n, s) { return qe(this.sha256, e, n, r, s || this.service); }
    validateResolvedCredentials(e) { if (typeof e != "object" || typeof e.accessKeyId != "string" || typeof e.secretAccessKey != "string")
        throw new Error("Resolved credential object is not valid"); }
}, q = t => { let e = Xe(t).replace(/[\-:]/g, ""); return { longDate: e, shortDate: e.slice(0, 8) }; }, We = t => Object.keys(t).sort().join(";");
export { Ye as SignatureV4, Wr as clearCredentialCache, L as createScope, k as getCanonicalHeaders, ue as getCanonicalQuery, T as getPayloadHash, qe as getSigningKey, le as moveHeadersToQuery, z as prepareRequest };
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
//# sourceMappingURL=_aws_sdk_signature_v4.d_DZgu5O9J.js.map
