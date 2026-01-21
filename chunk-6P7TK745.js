import { f as a } from "@nf-internal/chunk-GL2BOVXA";
var $ = a((pt, W) => {
    "use strict";
    W.exports = TypeError;
});
var B = a((yt, J) => {
    "use strict";
    J.exports = Object;
});
var z = a((ut, V) => {
    "use strict";
    V.exports = Error;
});
var Y = a((st, L) => {
    "use strict";
    L.exports = EvalError;
});
var K = a((ct, H) => {
    "use strict";
    H.exports = RangeError;
});
var X = a((ft, Q) => {
    "use strict";
    Q.exports = ReferenceError;
});
var rr = a((lt, Z) => {
    "use strict";
    Z.exports = SyntaxError;
});
var tr = a((vt, er) => {
    "use strict";
    er.exports = URIError;
});
var nr = a((dt, or) => {
    "use strict";
    or.exports = Math.abs;
});
var ir = a((gt, ar) => {
    "use strict";
    ar.exports = Math.floor;
});
var yr = a((At, pr) => {
    "use strict";
    pr.exports = Math.max;
});
var sr = a((Pt, ur) => {
    "use strict";
    ur.exports = Math.min;
});
var fr = a((bt, cr) => {
    "use strict";
    cr.exports = Math.pow;
});
var vr = a((ht, lr) => {
    "use strict";
    lr.exports = Math.round;
});
var gr = a((mt, dr) => {
    "use strict";
    dr.exports = Number.isNaN || function (r) { return r !== r; };
});
var Pr = a((St, Ar) => {
    "use strict";
    var ce = gr();
    Ar.exports = function (r) { return ce(r) || r === 0 ? r : r < 0 ? -1 : 1; };
});
var hr = a((Et, br) => {
    "use strict";
    br.exports = Object.getOwnPropertyDescriptor;
});
var N = a((Ot, mr) => {
    "use strict";
    var w = hr();
    if (w)
        try {
            w([], "length");
        }
        catch {
            w = null;
        }
    mr.exports = w;
});
var Er = a((xt, Sr) => {
    "use strict";
    var q = Object.defineProperty || !1;
    if (q)
        try {
            q({}, "a", { value: 1 });
        }
        catch {
            q = !1;
        }
    Sr.exports = q;
});
var xr = a((It, Or) => {
    "use strict";
    Or.exports = function () { if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
        return !1; if (typeof Symbol.iterator == "symbol")
        return !0; var r = {}, e = Symbol("test"), t = Object(e); if (typeof e == "string" || Object.prototype.toString.call(e) !== "[object Symbol]" || Object.prototype.toString.call(t) !== "[object Symbol]")
        return !1; var i = 42; r[e] = i; for (var p in r)
        return !1; if (typeof Object.keys == "function" && Object.keys(r).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(r).length !== 0)
        return !1; var s = Object.getOwnPropertySymbols(r); if (s.length !== 1 || s[0] !== e || !Object.prototype.propertyIsEnumerable.call(r, e))
        return !1; if (typeof Object.getOwnPropertyDescriptor == "function") {
        var y = Object.getOwnPropertyDescriptor(r, e);
        if (y.value !== i || y.enumerable !== !0)
            return !1;
    } return !0; };
});
var wr = a((Rt, Rr) => {
    "use strict";
    var Ir = typeof Symbol < "u" && Symbol, fe = xr();
    Rr.exports = function () { return typeof Ir != "function" || typeof Symbol != "function" || typeof Ir("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : fe(); };
});
var _ = a((wt, qr) => {
    "use strict";
    qr.exports = typeof Reflect < "u" && Reflect.getPrototypeOf || null;
});
var M = a((qt, Fr) => {
    "use strict";
    var le = B();
    Fr.exports = le.getPrototypeOf || null;
});
var $r = a((Ft, Ur) => {
    "use strict";
    var ve = "Function.prototype.bind called on incompatible ", de = Object.prototype.toString, ge = Math.max, Ae = "[object Function]", jr = function (r, e) { for (var t = [], i = 0; i < r.length; i += 1)
        t[i] = r[i]; for (var p = 0; p < e.length; p += 1)
        t[p + r.length] = e[p]; return t; }, Pe = function (r, e) { for (var t = [], i = e || 0, p = 0; i < r.length; i += 1, p += 1)
        t[p] = r[i]; return t; }, be = function (n, r) { for (var e = "", t = 0; t < n.length; t += 1)
        e += n[t], t + 1 < n.length && (e += r); return e; };
    Ur.exports = function (r) { var e = this; if (typeof e != "function" || de.apply(e) !== Ae)
        throw new TypeError(ve + e); for (var t = Pe(arguments, 1), i, p = function () { if (this instanceof i) {
        var f = e.apply(this, jr(t, arguments));
        return Object(f) === f ? f : this;
    } return e.apply(r, jr(t, arguments)); }, s = ge(0, e.length - t.length), y = [], c = 0; c < s; c++)
        y[c] = "$" + c; if (i = Function("binder", "return function (" + be(y, ",") + "){ return binder.apply(this,arguments); }")(p), e.prototype) {
        var v = function () { };
        v.prototype = e.prototype, i.prototype = new v, v.prototype = null;
    } return i; };
});
var m = a((jt, Br) => {
    "use strict";
    var he = $r();
    Br.exports = Function.prototype.bind || he;
});
var F = a((Ut, Nr) => {
    "use strict";
    Nr.exports = Function.prototype.call;
});
var G = a(($t, _r) => {
    "use strict";
    _r.exports = Function.prototype.apply;
});
var Gr = a((Bt, Mr) => {
    "use strict";
    Mr.exports = typeof Reflect < "u" && Reflect && Reflect.apply;
});
var Dr = a((Nt, Tr) => {
    "use strict";
    var me = m(), Se = G(), Ee = F(), Oe = Gr();
    Tr.exports = Oe || me.call(Ee, Se);
});
var T = a((_t, kr) => {
    "use strict";
    var xe = m(), Ie = $(), Re = F(), we = Dr();
    kr.exports = function (r) { if (r.length < 1 || typeof r[0] != "function")
        throw new Ie("a function is required"); return we(xe, Re, r); };
});
var Lr = a((Mt, zr) => {
    "use strict";
    var qe = T(), Cr = N(), Jr;
    try {
        Jr = [].__proto__ === Array.prototype;
    }
    catch (n) {
        if (!n || typeof n != "object" || !("code" in n) || n.code !== "ERR_PROTO_ACCESS")
            throw n;
    }
    var D = !!Jr && Cr && Cr(Object.prototype, "__proto__"), Vr = Object, Wr = Vr.getPrototypeOf;
    zr.exports = D && typeof D.get == "function" ? qe([D.get]) : typeof Wr == "function" ? function (r) { return Wr(r == null ? r : Vr(r)); } : !1;
});
var Xr = a((Gt, Qr) => {
    "use strict";
    var Yr = _(), Hr = M(), Kr = Lr();
    Qr.exports = Yr ? function (r) { return Yr(r); } : Hr ? function (r) { if (!r || typeof r != "object" && typeof r != "function")
        throw new TypeError("getProto: not an object"); return Hr(r); } : Kr ? function (r) { return Kr(r); } : null;
});
var re = a((Tt, Zr) => {
    "use strict";
    var Fe = Function.prototype.call, je = Object.prototype.hasOwnProperty, Ue = m();
    Zr.exports = Ue.call(Fe, je);
});
var pe = a((Dt, ie) => {
    "use strict";
    var o, $e = B(), Be = z(), Ne = Y(), _e = K(), Me = X(), b = rr(), P = $(), Ge = tr(), Te = nr(), De = ir(), ke = yr(), Ce = sr(), We = fr(), Je = vr(), Ve = Pr(), ne = Function, k = function (n) { try {
        return ne('"use strict"; return (' + n + ").constructor;")();
    }
    catch { } }, S = N(), ze = Er(), C = function () { throw new P; }, Le = S ? (function () { try {
        return arguments.callee, C;
    }
    catch {
        try {
            return S(arguments, "callee").get;
        }
        catch {
            return C;
        }
    } })() : C, g = wr()(), u = Xr(), Ye = M(), He = _(), ae = G(), E = F(), A = {}, Ke = typeof Uint8Array > "u" || !u ? o : u(Uint8Array), d = { __proto__: null, "%AggregateError%": typeof AggregateError > "u" ? o : AggregateError, "%Array%": Array, "%ArrayBuffer%": typeof ArrayBuffer > "u" ? o : ArrayBuffer, "%ArrayIteratorPrototype%": g && u ? u([][Symbol.iterator]()) : o, "%AsyncFromSyncIteratorPrototype%": o, "%AsyncFunction%": A, "%AsyncGenerator%": A, "%AsyncGeneratorFunction%": A, "%AsyncIteratorPrototype%": A, "%Atomics%": typeof Atomics > "u" ? o : Atomics, "%BigInt%": typeof BigInt > "u" ? o : BigInt, "%BigInt64Array%": typeof BigInt64Array > "u" ? o : BigInt64Array, "%BigUint64Array%": typeof BigUint64Array > "u" ? o : BigUint64Array, "%Boolean%": Boolean, "%DataView%": typeof DataView > "u" ? o : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": Be, "%eval%": eval, "%EvalError%": Ne, "%Float16Array%": typeof Float16Array > "u" ? o : Float16Array, "%Float32Array%": typeof Float32Array > "u" ? o : Float32Array, "%Float64Array%": typeof Float64Array > "u" ? o : Float64Array, "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? o : FinalizationRegistry, "%Function%": ne, "%GeneratorFunction%": A, "%Int8Array%": typeof Int8Array > "u" ? o : Int8Array, "%Int16Array%": typeof Int16Array > "u" ? o : Int16Array, "%Int32Array%": typeof Int32Array > "u" ? o : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": g && u ? u(u([][Symbol.iterator]())) : o, "%JSON%": typeof JSON == "object" ? JSON : o, "%Map%": typeof Map > "u" ? o : Map, "%MapIteratorPrototype%": typeof Map > "u" || !g || !u ? o : u(new Map()[Symbol.iterator]()), "%Math%": Math, "%Number%": Number, "%Object%": $e, "%Object.getOwnPropertyDescriptor%": S, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": typeof Promise > "u" ? o : Promise, "%Proxy%": typeof Proxy > "u" ? o : Proxy, "%RangeError%": _e, "%ReferenceError%": Me, "%Reflect%": typeof Reflect > "u" ? o : Reflect, "%RegExp%": RegExp, "%Set%": typeof Set > "u" ? o : Set, "%SetIteratorPrototype%": typeof Set > "u" || !g || !u ? o : u(new Set()[Symbol.iterator]()), "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? o : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": g && u ? u(""[Symbol.iterator]()) : o, "%Symbol%": g ? Symbol : o, "%SyntaxError%": b, "%ThrowTypeError%": Le, "%TypedArray%": Ke, "%TypeError%": P, "%Uint8Array%": typeof Uint8Array > "u" ? o : Uint8Array, "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? o : Uint8ClampedArray, "%Uint16Array%": typeof Uint16Array > "u" ? o : Uint16Array, "%Uint32Array%": typeof Uint32Array > "u" ? o : Uint32Array, "%URIError%": Ge, "%WeakMap%": typeof WeakMap > "u" ? o : WeakMap, "%WeakRef%": typeof WeakRef > "u" ? o : WeakRef, "%WeakSet%": typeof WeakSet > "u" ? o : WeakSet, "%Function.prototype.call%": E, "%Function.prototype.apply%": ae, "%Object.defineProperty%": ze, "%Object.getPrototypeOf%": Ye, "%Math.abs%": Te, "%Math.floor%": De, "%Math.max%": ke, "%Math.min%": Ce, "%Math.pow%": We, "%Math.round%": Je, "%Math.sign%": Ve, "%Reflect.getPrototypeOf%": He };
    if (u)
        try {
            null.error;
        }
        catch (n) {
            ee = u(u(n)), d["%Error.prototype%"] = ee;
        }
    var ee, Qe = function n(r) { var e; if (r === "%AsyncFunction%")
        e = k("async function () {}");
    else if (r === "%GeneratorFunction%")
        e = k("function* () {}");
    else if (r === "%AsyncGeneratorFunction%")
        e = k("async function* () {}");
    else if (r === "%AsyncGenerator%") {
        var t = n("%AsyncGeneratorFunction%");
        t && (e = t.prototype);
    }
    else if (r === "%AsyncIteratorPrototype%") {
        var i = n("%AsyncGenerator%");
        i && u && (e = u(i.prototype));
    } return d[r] = e, e; }, te = { __proto__: null, "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] }, O = m(), j = re(), Xe = O.call(E, Array.prototype.concat), Ze = O.call(ae, Array.prototype.splice), oe = O.call(E, String.prototype.replace), U = O.call(E, String.prototype.slice), rt = O.call(E, RegExp.prototype.exec), et = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, tt = /\\(\\)?/g, ot = function (r) { var e = U(r, 0, 1), t = U(r, -1); if (e === "%" && t !== "%")
        throw new b("invalid intrinsic syntax, expected closing `%`"); if (t === "%" && e !== "%")
        throw new b("invalid intrinsic syntax, expected opening `%`"); var i = []; return oe(r, et, function (p, s, y, c) { i[i.length] = y ? oe(c, tt, "$1") : s || p; }), i; }, nt = function (r, e) { var t = r, i; if (j(te, t) && (i = te[t], t = "%" + i[0] + "%"), j(d, t)) {
        var p = d[t];
        if (p === A && (p = Qe(t)), typeof p > "u" && !e)
            throw new P("intrinsic " + r + " exists, but is not available. Please file an issue!");
        return { alias: i, name: t, value: p };
    } throw new b("intrinsic " + r + " does not exist!"); };
    ie.exports = function (r, e) { if (typeof r != "string" || r.length === 0)
        throw new P("intrinsic name must be a non-empty string"); if (arguments.length > 1 && typeof e != "boolean")
        throw new P('"allowMissing" argument must be a boolean'); if (rt(/^%?[^%]*%?$/, r) === null)
        throw new b("`%` may not be present anywhere but at the beginning and end of the intrinsic name"); var t = ot(r), i = t.length > 0 ? t[0] : "", p = nt("%" + i + "%", e), s = p.name, y = p.value, c = !1, v = p.alias; v && (i = v[0], Ze(t, Xe([0, 1], v))); for (var f = 1, h = !0; f < t.length; f += 1) {
        var l = t[f], x = U(l, 0, 1), I = U(l, -1);
        if ((x === '"' || x === "'" || x === "`" || I === '"' || I === "'" || I === "`") && x !== I)
            throw new b("property names with quotes must have matching quotes");
        if ((l === "constructor" || !h) && (c = !0), i += "." + l, s = "%" + i + "%", j(d, s))
            y = d[s];
        else if (y != null) {
            if (!(l in y)) {
                if (!e)
                    throw new P("base intrinsic for " + r + " exists, but the property is not available.");
                return;
            }
            if (S && f + 1 >= t.length) {
                var R = S(y, l);
                h = !!R, h && "get" in R && !("originalValue" in R.get) ? y = R.get : y = y[l];
            }
            else
                h = j(y, l), y = y[l];
            h && !c && (d[s] = y);
        }
    } return y; };
});
var it = a((kt, se) => {
    "use strict";
    var ye = pe(), ue = T(), at = ue([ye("%String.prototype.indexOf%")]);
    se.exports = function (r, e) { var t = ye(r, !!e); return typeof t == "function" && at(r, ".prototype.") > -1 ? ue([t]) : t; };
});
export { xr as a, rr as b, $ as c, N as d, Er as e, m as f, G as g, Dr as h, T as i, Xr as j, re as k, pe as l, it as m };
//# sourceMappingURL=chunk-6P7TK745.js.map
