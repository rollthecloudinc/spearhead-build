import { a as F } from "@nf-internal/chunk-236A42LZ";
import { a as ne } from "@nf-internal/chunk-7QKABEPV";
import { j as se, k as ae } from "@nf-internal/chunk-XE5S2H6D";
import { a as d, b as w, d as ee, f as te, h as re, i as oe, k as p } from "@nf-internal/chunk-GL2BOVXA";
var xe = te(S => {
    "use strict";
    Object.defineProperty(S, "__esModule", { value: !0 });
    S.AwsCrc32 = void 0;
    var ie = (ae(), oe(se)), $ = ne(), ce = I(), Me = (function () { function t() { this.crc32 = new ce.Crc32; } return t.prototype.update = function (e) { (0, $.isEmptyData)(e) || this.crc32.update((0, $.convertToBuffer)(e)); }, t.prototype.digest = function () { return ie.__awaiter(this, void 0, void 0, function () { return ie.__generator(this, function (e) { return [2, (0, $.numToUint8)(this.crc32.digest())]; }); }); }, t.prototype.reset = function () { this.crc32 = new ce.Crc32; }, t; })();
    S.AwsCrc32 = Me;
});
var I = te(D => {
    "use strict";
    Object.defineProperty(D, "__esModule", { value: !0 });
    D.AwsCrc32 = D.Crc32 = D.crc32 = void 0;
    var ke = (ae(), oe(se)), $e = ne();
    function Pe(t) { return new fe().update(t).digest(); }
    D.crc32 = Pe;
    var fe = (function () { function t() { this.checksum = 4294967295; } return t.prototype.update = function (e) { var r, o; try {
        for (var s = ke.__values(e), n = s.next(); !n.done; n = s.next()) {
            var a = n.value;
            this.checksum = this.checksum >>> 8 ^ Ge[(this.checksum ^ a) & 255];
        }
    }
    catch (x) {
        r = { error: x };
    }
    finally {
        try {
            n && !n.done && (o = s.return) && o.call(s);
        }
        finally {
            if (r)
                throw r.error;
        }
    } return this; }, t.prototype.digest = function () { return (this.checksum ^ 4294967295) >>> 0; }, t; })();
    D.Crc32 = fe;
    var Le = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117], Ge = (0, $e.uint32ArrayFrom)(Le), je = xe();
    Object.defineProperty(D, "AwsCrc32", { enumerable: !0, get: function () { return je.AwsCrc32; } });
});
var ot = re(I());
var ue = {}, P = {};
for (let t = 0; t < 256; t++) {
    let e = t.toString(16).toLowerCase();
    e.length === 1 && (e = `0${e}`), ue[t] = e, P[e] = t;
}
function Ae(t) { if (t.length % 2 !== 0)
    throw new Error("Hex encoded strings must have an even number length"); let e = new Uint8Array(t.length / 2); for (let r = 0; r < t.length; r += 2) {
    let o = t.slice(r, r + 2).toLowerCase();
    if (o in P)
        e[r / 2] = P[o];
    else
        throw new Error(`Cannot decode unrecognized sequence ${o} as hexadecimal`);
} return e; }
function f(t) { let e = ""; for (let r = 0; r < t.byteLength; r++)
    e += ue[t[r]]; return e; }
var g = class t {
    constructor(e) { if (this.bytes = e, e.byteLength !== 8)
        throw new Error("Int64 buffers must be exactly 8 bytes"); }
    static fromNumber(e) { if (e > 9223372036854776e3 || e < -9223372036854776e3)
        throw new Error(`${e} is too large (or, if negative, too small) to represent as an Int64`); let r = new Uint8Array(8); for (let o = 7, s = Math.abs(Math.round(e)); o > -1 && s > 0; o--, s /= 256)
        r[o] = s; return e < 0 && le(r), new t(r); }
    valueOf() { let e = this.bytes.slice(0), r = e[0] & 128; return r && le(e), parseInt(f(e), 16) * (r ? -1 : 1); }
    toString() { return String(this.valueOf()); }
};
function le(t) { for (let e = 0; e < 8; e++)
    t[e] ^= 255; for (let e = 7; e > -1 && (t[e]++, t[e] === 0); e--)
    ; }
var b = class {
    constructor(e, r) { this.toUtf8 = e, this.fromUtf8 = r; }
    format(e) { let r = []; for (let n of Object.keys(e)) {
        let a = this.fromUtf8(n);
        r.push(Uint8Array.from([a.byteLength]), a, this.formatHeaderValue(e[n]));
    } let o = new Uint8Array(r.reduce((n, a) => n + a.byteLength, 0)), s = 0; for (let n of r)
        o.set(n, s), s += n.byteLength; return o; }
    formatHeaderValue(e) { switch (e.type) {
        case "boolean": return Uint8Array.from([e.value ? 0 : 1]);
        case "byte": return Uint8Array.from([2, e.value]);
        case "short":
            let r = new DataView(new ArrayBuffer(3));
            return r.setUint8(0, 3), r.setInt16(1, e.value, !1), new Uint8Array(r.buffer);
        case "integer":
            let o = new DataView(new ArrayBuffer(5));
            return o.setUint8(0, 4), o.setInt32(1, e.value, !1), new Uint8Array(o.buffer);
        case "long":
            let s = new Uint8Array(9);
            return s[0] = 5, s.set(e.value.bytes, 1), s;
        case "binary":
            let n = new DataView(new ArrayBuffer(3 + e.value.byteLength));
            n.setUint8(0, 6), n.setUint16(1, e.value.byteLength, !1);
            let a = new Uint8Array(n.buffer);
            return a.set(e.value, 3), a;
        case "string":
            let x = this.fromUtf8(e.value), i = new DataView(new ArrayBuffer(3 + x.byteLength));
            i.setUint8(0, 7), i.setUint16(1, x.byteLength, !1);
            let l = new Uint8Array(i.buffer);
            return l.set(x, 3), l;
        case "timestamp":
            let c = new Uint8Array(9);
            return c[0] = 8, c.set(g.fromNumber(e.value.valueOf()).bytes, 1), c;
        case "uuid":
            if (!Je.test(e.value))
                throw new Error(`Invalid UUID received: ${e.value}`);
            let u = new Uint8Array(17);
            return u[0] = 9, u.set(Ae(e.value.replace(/\-/g, "")), 1), u;
    } }
    parse(e) { let r = {}, o = 0; for (; o < e.byteLength;) {
        let s = e.getUint8(o++), n = this.toUtf8(new Uint8Array(e.buffer, e.byteOffset + o, s));
        switch (o += s, e.getUint8(o++)) {
            case 0:
                r[n] = { type: pe, value: !0 };
                break;
            case 1:
                r[n] = { type: pe, value: !1 };
                break;
            case 2:
                r[n] = { type: ze, value: e.getInt8(o++) };
                break;
            case 3:
                r[n] = { type: Ke, value: e.getInt16(o, !1) }, o += 2;
                break;
            case 4:
                r[n] = { type: Qe, value: e.getInt32(o, !1) }, o += 4;
                break;
            case 5:
                r[n] = { type: Xe, value: new g(new Uint8Array(e.buffer, e.byteOffset + o, 8)) }, o += 8;
                break;
            case 6:
                let a = e.getUint16(o, !1);
                o += 2, r[n] = { type: qe, value: new Uint8Array(e.buffer, e.byteOffset + o, a) }, o += a;
                break;
            case 7:
                let x = e.getUint16(o, !1);
                o += 2, r[n] = { type: Ye, value: this.toUtf8(new Uint8Array(e.buffer, e.byteOffset + o, x)) }, o += x;
                break;
            case 8:
                r[n] = { type: We, value: new Date(new g(new Uint8Array(e.buffer, e.byteOffset + o, 8)).valueOf()) }, o += 8;
                break;
            case 9:
                let i = new Uint8Array(e.buffer, e.byteOffset + o, 16);
                o += 16, r[n] = { type: Ze, value: `${f(i.subarray(0, 4))}-${f(i.subarray(4, 6))}-${f(i.subarray(6, 8))}-${f(i.subarray(8, 10))}-${f(i.subarray(10))}` };
                break;
            default: throw new Error("Unrecognized header type tag");
        }
    } return r; }
};
var pe = "boolean", ze = "byte", Ke = "short", Qe = "integer", Xe = "long", qe = "binary", Ye = "string", We = "timestamp", Ze = "uuid", Je = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
var Ve = re(I()), et = 4, tt = et * 2, rt = 4, ht = tt + rt * 2;
var z = t => { if (typeof t == "function")
    return t; let e = Promise.resolve(t); return () => e; };
var T = t => new TextEncoder().encode(t);
var y = t => typeof t == "string" ? T(t) : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(t);
var he = t => new TextDecoder("utf-8").decode(t);
var De = "X-Amz-Algorithm", ye = "X-Amz-Credential", K = "X-Amz-Date", Ee = "X-Amz-SignedHeaders", me = "X-Amz-Expires", Q = "X-Amz-Signature", X = "X-Amz-Security-Token";
var q = "authorization", Y = K.toLowerCase(), nt = "date", Be = [q, Y, nt], de = Q.toLowerCase(), R = "x-amz-content-sha256", ge = X.toLowerCase();
var Ce = { authorization: !0, "cache-control": !0, connection: !0, expect: !0, from: !0, "keep-alive": !0, "max-forwards": !0, pragma: !0, referer: !0, te: !0, trailer: !0, "transfer-encoding": !0, upgrade: !0, "user-agent": !0, "x-amzn-trace-id": !0 }, we = /^proxy-/, Fe = /^sec-/;
var U = "AWS4-HMAC-SHA256";
var be = "AWS4-HMAC-SHA256-PAYLOAD", Re = "UNSIGNED-PAYLOAD", ve = 50, W = "aws4_request", Se = 3600 * 24 * 7;
var C = {}, _ = [], N = (t, e, r) => `${t}/${e}/${r}/${W}`, Te = (t, e, r, o, s) => p(null, null, function* () { let n = yield Ie(t, e.secretAccessKey, e.accessKeyId), a = `${r}:${o}:${s}:${f(n)}:${e.sessionToken}`; if (a in C)
    return C[a]; for (_.push(a); _.length > ve;)
    delete C[_.shift()]; let x = `AWS4${e.secretAccessKey}`; for (let i of [r, o, s, W])
    x = yield Ie(t, x, i); return C[a] = x; }), Vt = () => { _.length = 0, Object.keys(C).forEach(t => { delete C[t]; }); }, Ie = (t, e, r) => { let o = new t(e); return o.update(y(r)), o.digest(); };
var H = ({ headers: t }, e, r) => { let o = {}; for (let s of Object.keys(t).sort()) {
    if (t[s] == null)
        continue;
    let n = s.toLowerCase();
    (n in Ce || e?.has(n) || we.test(n) || Fe.test(n)) && (!r || r && !r.has(n)) || (o[n] = t[s].trim().replace(/\s+/g, " "));
} return o; };
var Z = ({ query: t = {} }) => { let e = [], r = {}; for (let o of Object.keys(t).sort()) {
    if (o.toLowerCase() === de)
        continue;
    e.push(o);
    let s = t[o];
    typeof s == "string" ? r[o] = `${F(o)}=${F(s)}` : Array.isArray(s) && (r[o] = s.slice(0).sort().reduce((n, a) => n.concat([`${F(o)}=${F(a)}`]), []).join("&"));
} return e.map(o => r[o]).filter(o => o).join("&"); };
var Ue = t => typeof ArrayBuffer == "function" && t instanceof ArrayBuffer || Object.prototype.toString.call(t) === "[object ArrayBuffer]";
var v = (o, s) => p(null, [o, s], function* ({ headers: t, body: e }, r) { for (let n of Object.keys(t))
    if (n.toLowerCase() === R)
        return t[n]; if (e == null)
    return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"; if (typeof e == "string" || ArrayBuffer.isView(e) || Ue(e)) {
    let n = new r;
    return n.update(y(e)), f(yield n.digest());
} return Re; });
var _e = (t, e) => { t = t.toLowerCase(); for (let r of Object.keys(e))
    if (t === r.toLowerCase())
        return !0; return !1; };
var O = o => { var s = o, { headers: t, query: e } = s, r = ee(s, ["headers", "query"]); return w(d({}, r), { headers: d({}, t), query: e ? st(e) : void 0 }); }, st = t => Object.keys(t).reduce((e, r) => { let o = t[r]; return w(d({}, e), { [r]: Array.isArray(o) ? [...o] : o }); }, {});
var J = (t, e = {}) => { let { headers: r, query: o = {} } = typeof t.clone == "function" ? t.clone() : O(t); for (let s of Object.keys(r)) {
    let n = s.toLowerCase();
    n.slice(0, 6) === "x-amz-" && !e.unhoistableHeaders?.has(n) && (o[s] = r[s], delete r[s]);
} return w(d({}, t), { headers: r, query: o }); };
var M = t => { t = typeof t.clone == "function" ? t.clone() : O(t); for (let e of Object.keys(t.headers))
    Be.indexOf(e.toLowerCase()) > -1 && delete t.headers[e]; return t; };
var Ne = t => at(t).toISOString().replace(/\.\d{3}Z$/, "Z"), at = t => typeof t == "number" ? new Date(t * 1e3) : typeof t == "string" ? Number(t) ? new Date(Number(t) * 1e3) : new Date(t) : t;
var He = class {
    constructor({ applyChecksum: e, credentials: r, region: o, service: s, sha256: n, uriEscapePath: a = !0 }) { this.headerMarshaller = new b(he, T), this.service = s, this.sha256 = n, this.uriEscapePath = a, this.applyChecksum = typeof e == "boolean" ? e : !0, this.regionProvider = z(o), this.credentialProvider = z(r); }
    presign(o) { return p(this, arguments, function* (e, r = {}) { let { signingDate: s = new Date, expiresIn: n = 3600, unsignableHeaders: a, unhoistableHeaders: x, signableHeaders: i, signingRegion: l, signingService: c } = r, u = yield this.credentialProvider(); this.validateResolvedCredentials(u); let E = l ?? (yield this.regionProvider()), { longDate: m, shortDate: h } = k(s); if (n > Se)
        return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future"); let B = N(h, E, c ?? this.service), A = J(M(e), { unhoistableHeaders: x }); u.sessionToken && (A.query[X] = u.sessionToken), A.query[De] = U, A.query[ye] = `${u.accessKeyId}/${B}`, A.query[K] = m, A.query[me] = n.toString(10); let V = H(A, a, i); return A.query[Ee] = Oe(V), A.query[Q] = yield this.getSignature(m, B, this.getSigningKey(u, E, h, c), this.createCanonicalRequest(A, V, yield v(e, this.sha256))), A; }); }
    sign(e, r) { return p(this, null, function* () { return typeof e == "string" ? this.signString(e, r) : e.headers && e.payload ? this.signEvent(e, r) : e.message ? this.signMessage(e, r) : this.signRequest(e, r); }); }
    signEvent(x, i) {
        return p(this, arguments, function* ({ headers: e, payload: r }, { signingDate: o = new Date, priorSignature: s, signingRegion: n, signingService: a }) {
            let l = n ?? (yield this.regionProvider()), { shortDate: c, longDate: u } = k(o), E = N(c, l, a ?? this.service), m = yield v({ headers: {}, body: r }, this.sha256), h = new this.sha256;
            h.update(e);
            let B = f(yield h.digest()), A = [be, u, E, s, B, m].join(`
`);
            return this.signString(A, { signingDate: o, signingRegion: l, signingService: a });
        });
    }
    signMessage(n, a) { return p(this, arguments, function* (e, { signingDate: r = new Date, signingRegion: o, signingService: s }) { return this.signEvent({ headers: this.headerMarshaller.format(e.message.headers), payload: e.message.body }, { signingDate: r, signingRegion: o, signingService: s, priorSignature: e.priorSignature }).then(i => ({ message: e.message, signature: i })); }); }
    signString(n) { return p(this, arguments, function* (e, { signingDate: r = new Date, signingRegion: o, signingService: s } = {}) { let a = yield this.credentialProvider(); this.validateResolvedCredentials(a); let x = o ?? (yield this.regionProvider()), { shortDate: i } = k(r), l = new this.sha256(yield this.getSigningKey(a, x, i, s)); return l.update(y(e)), f(yield l.digest()); }); }
    signRequest(x) { return p(this, arguments, function* (e, { signingDate: r = new Date, signableHeaders: o, unsignableHeaders: s, signingRegion: n, signingService: a } = {}) { let i = yield this.credentialProvider(); this.validateResolvedCredentials(i); let l = n ?? (yield this.regionProvider()), c = M(e), { longDate: u, shortDate: E } = k(r), m = N(E, l, a ?? this.service); c.headers[Y] = u, i.sessionToken && (c.headers[ge] = i.sessionToken); let h = yield v(c, this.sha256); !_e(R, c.headers) && this.applyChecksum && (c.headers[R] = h); let B = H(c, s, o), A = yield this.getSignature(u, m, this.getSigningKey(i, l, E, a), this.createCanonicalRequest(c, B, h)); return c.headers[q] = `${U} Credential=${i.accessKeyId}/${m}, SignedHeaders=${Oe(B)}, Signature=${A}`, c; }); }
    createCanonicalRequest(e, r, o) {
        let s = Object.keys(r).sort();
        return `${e.method}
${this.getCanonicalPath(e)}
${Z(e)}
${s.map(n => `${n}:${r[n]}`).join(`
`)}

${s.join(";")}
${o}`;
    }
    createStringToSign(e, r, o) {
        return p(this, null, function* () {
            let s = new this.sha256;
            s.update(y(o));
            let n = yield s.digest();
            return `${U}
${e}
${r}
${f(n)}`;
        });
    }
    getCanonicalPath({ path: e }) { if (this.uriEscapePath) {
        let r = [];
        for (let n of e.split("/"))
            n?.length !== 0 && n !== "." && (n === ".." ? r.pop() : r.push(n));
        let o = `${e?.startsWith("/") ? "/" : ""}${r.join("/")}${r.length > 0 && e?.endsWith("/") ? "/" : ""}`;
        return encodeURIComponent(o).replace(/%2F/g, "/");
    } return e; }
    getSignature(e, r, o, s) { return p(this, null, function* () { let n = yield this.createStringToSign(e, r, s), a = new this.sha256(yield o); return a.update(y(n)), f(yield a.digest()); }); }
    getSigningKey(e, r, o, s) { return Te(this.sha256, e, o, r, s || this.service); }
    validateResolvedCredentials(e) { if (typeof e != "object" || typeof e.accessKeyId != "string" || typeof e.secretAccessKey != "string")
        throw new Error("Resolved credential object is not valid"); }
}, k = t => { let e = Ne(t).replace(/[\-:]/g, ""); return { longDate: e, shortDate: e.slice(0, 8) }; }, Oe = t => Object.keys(t).sort().join(";");
export { He as SignatureV4, Vt as clearCredentialCache, N as createScope, H as getCanonicalHeaders, Z as getCanonicalQuery, v as getPayloadHash, Te as getSigningKey, J as moveHeadersToQuery, M as prepareRequest };
//# sourceMappingURL=_aws_sdk_signature_v4.AypRpv5fCS.js.map
