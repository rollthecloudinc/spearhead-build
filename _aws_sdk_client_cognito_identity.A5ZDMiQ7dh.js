import { $ as m, Aa as Ot, B as k, Ba as $t, Ca as Ft, I as Y, L as ot, M as nt, N as rt, O as it, P as st, Q as at, R as dt, T as ct, Y as pt, Z as lt, _ as ft, a as Ge, aa as D, b as He, ba as ut, c as Be, ca as yt, da as E, e as Me, ea as ht, f as We, fa as gt, g as Je, ga as xt, h as je, ha as Ct, i as Le, ia as It, j as qe, k as d, ka as B, la as vt, m as Ke, ma as St, n as Ve, na as bt, o as Ye, oa as Pt, pa as Et, q as Xe, qa as wt, r as Qe, ra as c, s as et, sa as _t, t as tt, ta as At, ua as Rt, va as Dt, w as H, wa as Lt, xa as z, y as K, ya as Ut, z as V, za as zt } from "@nf-internal/chunk-MAY6DYNV";
import { a as Ze } from "@nf-internal/chunk-QPPNTWLE";
import { b as Tt, c as kt } from "@nf-internal/chunk-AGTQQUR5";
import "@nf-internal/chunk-VD7OH2TE";
import { b as mt } from "@nf-internal/chunk-Z75LNJIL";
import { a as s, b as q, k as i } from "@nf-internal/chunk-GL2BOVXA";
var a = e => { if (e == null)
    return {}; if (Array.isArray(e))
    return e.filter(t => t != null).map(a); if (typeof e == "object") {
    let t = {};
    for (let n of Object.keys(e))
        e[n] != null && (t[n] = a(e[n]));
    return t;
} return e; };
var x = (e, t) => vt(e, t).then(n => { if (n.length)
    try {
        return JSON.parse(n);
    }
    catch (o) {
        throw o?.name === "SyntaxError" && Object.defineProperty(o, "$responseBodyText", { value: n }), o;
    } return {}; }), Nt = (e, t) => i(null, null, function* () { let n = yield x(e, t); return n.message = n.message ?? n.Message, n; }), Gt = (e, t) => { let n = (u, f) => Object.keys(u).find(R => R.toLowerCase() === f.toLowerCase()), o = u => { let f = u; return typeof f == "number" && (f = f.toString()), f.indexOf(",") >= 0 && (f = f.split(",")[0]), f.indexOf(":") >= 0 && (f = f.split(":")[0]), f.indexOf("#") >= 0 && (f = f.split("#")[1]), f; }, r = n(e.headers, "x-amzn-errortype"); if (r !== void 0)
    return o(e.headers[r]); if (t && typeof t == "object") {
    let u = n(t, "code");
    if (u && t[u] !== void 0)
        return o(t[u]);
    if (t.__type !== void 0)
        return o(t.__type);
} };
var Ht = (e, t, n) => i(null, null, function* () { return { operation: je(t).operation, region: (yield Le(e.region)()) || (() => { throw new Error("expected `region` to be configured for `aws.auth#sigv4`"); })() }; });
function wn(e) { return { schemeId: "aws.auth#sigv4", signingProperties: { name: "cognito-identity", region: e.region }, propertiesExtractor: (t, n) => ({ signingProperties: { config: t, context: n } }) }; }
function Z(e) { return { schemeId: "smithy.api#noAuth" }; }
var Bt = e => { let t = []; switch (e.operation) {
    case "GetCredentialsForIdentity": {
        t.push(Z(e));
        break;
    }
    case "GetId": {
        t.push(Z(e));
        break;
    }
    case "GetOpenIdToken": {
        t.push(Z(e));
        break;
    }
    case "UnlinkIdentity": {
        t.push(Z(e));
        break;
    }
    default: t.push(wn(e));
} return t; }, Mt = e => { let t = pt(e); return Object.assign(t, { authSchemePreference: Le(e.authSchemePreference ?? []) }); };
var Wt = e => Object.assign(e, { useDualstackEndpoint: e.useDualstackEndpoint ?? !1, useFipsEndpoint: e.useFipsEndpoint ?? !1, defaultSigningName: "cognito-identity" }), p = { UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
var Jt = { name: "@aws-sdk/client-cognito-identity", description: "AWS SDK for JavaScript Cognito Identity Client for Node.js, Browser and React Native", version: "3.916.0", scripts: { build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'", "build:cjs": "node ../../scripts/compilation/inline client-cognito-identity", "build:es": "tsc -p tsconfig.es.json", "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build", "build:types": "tsc -p tsconfig.types.json", "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4", clean: "rimraf ./dist-* && rimraf *.tsbuildinfo", "extract:docs": "api-extractor run --local", "generate:client": "node ../../scripts/generate-clients/single-service --solo cognito-identity", "test:e2e": "yarn g:vitest run -c vitest.config.e2e.mts --mode development", "test:e2e:watch": "yarn g:vitest watch -c vitest.config.e2e.mts" }, main: "./dist-cjs/index.js", types: "./dist-types/index.d.ts", module: "./dist-es/index.js", sideEffects: !1, dependencies: { "@aws-crypto/sha256-browser": "5.2.0", "@aws-crypto/sha256-js": "5.2.0", "@aws-sdk/core": "3.916.0", "@aws-sdk/credential-provider-node": "3.916.0", "@aws-sdk/middleware-host-header": "3.914.0", "@aws-sdk/middleware-logger": "3.914.0", "@aws-sdk/middleware-recursion-detection": "3.914.0", "@aws-sdk/middleware-user-agent": "3.916.0", "@aws-sdk/region-config-resolver": "3.914.0", "@aws-sdk/types": "3.914.0", "@aws-sdk/util-endpoints": "3.916.0", "@aws-sdk/util-user-agent-browser": "3.914.0", "@aws-sdk/util-user-agent-node": "3.916.0", "@smithy/config-resolver": "^4.4.0", "@smithy/core": "^3.17.1", "@smithy/fetch-http-handler": "^5.3.4", "@smithy/hash-node": "^4.2.3", "@smithy/invalid-dependency": "^4.2.3", "@smithy/middleware-content-length": "^4.2.3", "@smithy/middleware-endpoint": "^4.3.5", "@smithy/middleware-retry": "^4.4.5", "@smithy/middleware-serde": "^4.2.3", "@smithy/middleware-stack": "^4.2.3", "@smithy/node-config-provider": "^4.3.3", "@smithy/node-http-handler": "^4.4.3", "@smithy/protocol-http": "^5.3.3", "@smithy/smithy-client": "^4.9.1", "@smithy/types": "^4.8.0", "@smithy/url-parser": "^4.2.3", "@smithy/util-base64": "^4.3.0", "@smithy/util-body-length-browser": "^4.2.0", "@smithy/util-body-length-node": "^4.2.1", "@smithy/util-defaults-mode-browser": "^4.3.4", "@smithy/util-defaults-mode-node": "^4.2.6", "@smithy/util-endpoints": "^3.2.3", "@smithy/util-middleware": "^4.2.3", "@smithy/util-retry": "^4.2.3", "@smithy/util-utf8": "^4.2.0", tslib: "^2.6.2" }, devDependencies: { "@aws-sdk/client-iam": "3.916.0", "@tsconfig/node18": "18.2.4", "@types/chai": "^4.2.11", "@types/node": "^18.19.69", concurrently: "7.0.0", "downlevel-dts": "0.10.1", rimraf: "3.0.2", typescript: "~5.8.3" }, engines: { node: ">=18.0.0" }, typesVersions: { "<4.0": { "dist-types/*": ["dist-types/ts3.4/*"] } }, files: ["dist-*/**"], author: { name: "AWS SDK for JavaScript Team", url: "https://aws.amazon.com/javascript/" }, license: "Apache-2.0", browser: { "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser" }, "react-native": { "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native" }, homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cognito-identity", repository: { type: "git", url: "https://github.com/aws/aws-sdk-js-v3.git", directory: "clients/client-cognito-identity" } };
var Te = e => new TextEncoder().encode(e);
var An = typeof Buffer < "u" && Buffer.from ? function (e) { return Buffer.from(e, "utf8"); } : Te;
function L(e) { return e instanceof Uint8Array ? e : typeof e == "string" ? An(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e); }
function O(e) { return typeof e == "string" ? e.length === 0 : e.byteLength === 0; }
var ke = { name: "SHA-256" }, Ue = { name: "HMAC", hash: ke }, jt = new Uint8Array([227, 176, 196, 66, 152, 252, 28, 20, 154, 251, 244, 200, 153, 111, 185, 36, 39, 174, 65, 228, 100, 155, 147, 76, 164, 149, 153, 27, 120, 82, 184, 85]);
var ze = (function () { function e(t) { this.toHash = new Uint8Array(0), this.secret = t, this.reset(); } return e.prototype.update = function (t) { if (!O(t)) {
    var n = L(t), o = new Uint8Array(this.toHash.byteLength + n.byteLength);
    o.set(this.toHash, 0), o.set(n, this.toHash.byteLength), this.toHash = o;
} }, e.prototype.digest = function () { var t = this; return this.key ? this.key.then(function (n) { return z().crypto.subtle.sign(Ue, n, t.toHash).then(function (o) { return new Uint8Array(o); }); }) : O(this.toHash) ? Promise.resolve(jt) : Promise.resolve().then(function () { return z().crypto.subtle.digest(ke, t.toHash); }).then(function (n) { return Promise.resolve(new Uint8Array(n)); }); }, e.prototype.reset = function () { var t = this; this.toHash = new Uint8Array(0), this.secret && this.secret !== void 0 && (this.key = new Promise(function (n, o) { z().crypto.subtle.importKey("raw", L(t.secret), Ue, !1, ["sign"]).then(n, o); }), this.key.catch(function () { })); }, e; })();
var P = 64, qt = 32, Kt = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), Vt = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], Yt = Math.pow(2, 53) - 1;
var M = (function () { function e() { this.state = Int32Array.from(Vt), this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1; } return e.prototype.update = function (t) { if (this.finished)
    throw new Error("Attempted to update an already finished hash."); var n = 0, o = t.byteLength; if (this.bytesHashed += o, this.bytesHashed * 8 > Yt)
    throw new Error("Cannot hash more than 2^53 - 1 bits"); for (; o > 0;)
    this.buffer[this.bufferLength++] = t[n++], o--, this.bufferLength === P && (this.hashBuffer(), this.bufferLength = 0); }, e.prototype.digest = function () { if (!this.finished) {
    var t = this.bytesHashed * 8, n = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength), o = this.bufferLength;
    if (n.setUint8(this.bufferLength++, 128), o % P >= P - 8) {
        for (var r = this.bufferLength; r < P; r++)
            n.setUint8(r, 0);
        this.hashBuffer(), this.bufferLength = 0;
    }
    for (var r = this.bufferLength; r < P - 8; r++)
        n.setUint8(r, 0);
    n.setUint32(P - 8, Math.floor(t / 4294967296), !0), n.setUint32(P - 4, t), this.hashBuffer(), this.finished = !0;
} for (var u = new Uint8Array(qt), r = 0; r < 8; r++)
    u[r * 4] = this.state[r] >>> 24 & 255, u[r * 4 + 1] = this.state[r] >>> 16 & 255, u[r * 4 + 2] = this.state[r] >>> 8 & 255, u[r * 4 + 3] = this.state[r] >>> 0 & 255; return u; }, e.prototype.hashBuffer = function () { for (var t = this, n = t.buffer, o = t.state, r = o[0], u = o[1], f = o[2], R = o[3], I = o[4], _ = o[5], U = o[6], G = o[7], b = 0; b < P; b++) {
    if (b < 16)
        this.temp[b] = (n[b * 4] & 255) << 24 | (n[b * 4 + 1] & 255) << 16 | (n[b * 4 + 2] & 255) << 8 | n[b * 4 + 3] & 255;
    else {
        var w = this.temp[b - 2], bn = (w >>> 17 | w << 15) ^ (w >>> 19 | w << 13) ^ w >>> 10;
        w = this.temp[b - 15];
        var Pn = (w >>> 7 | w << 25) ^ (w >>> 18 | w << 14) ^ w >>> 3;
        this.temp[b] = (bn + this.temp[b - 7] | 0) + (Pn + this.temp[b - 16] | 0);
    }
    var Ne = (((I >>> 6 | I << 26) ^ (I >>> 11 | I << 21) ^ (I >>> 25 | I << 7)) + (I & _ ^ ~I & U) | 0) + (G + (Kt[b] + this.temp[b] | 0) | 0) | 0, En = ((r >>> 2 | r << 30) ^ (r >>> 13 | r << 19) ^ (r >>> 22 | r << 10)) + (r & u ^ r & f ^ u & f) | 0;
    G = U, U = _, _ = I, I = R + Ne | 0, R = f, f = u, u = r, r = Ne + En | 0;
} o[0] += r, o[1] += u, o[2] += f, o[3] += R, o[4] += I, o[5] += _, o[6] += U, o[7] += G; }, e; })();
var Zt = (function () { function e(t) { this.secret = t, this.hash = new M, this.reset(); } return e.prototype.update = function (t) { if (!(O(t) || this.error))
    try {
        this.hash.update(L(t));
    }
    catch (n) {
        this.error = n;
    } }, e.prototype.digestSync = function () { if (this.error)
    throw this.error; return this.outer ? (this.outer.finished || this.outer.update(this.hash.digest()), this.outer.digest()) : this.hash.digest(); }, e.prototype.digest = function () { return Tt(this, void 0, void 0, function () { return kt(this, function (t) { return [2, this.digestSync()]; }); }); }, e.prototype.reset = function () { if (this.hash = new M, this.secret) {
    this.outer = new M;
    var t = Rn(this.secret), n = new Uint8Array(P);
    n.set(t);
    for (var o = 0; o < P; o++)
        t[o] ^= 54, n[o] ^= 92;
    this.hash.update(t), this.outer.update(n);
    for (var o = 0; o < t.byteLength; o++)
        t[o] = 0;
} }, e; })();
function Rn(e) { var t = L(e); if (t.byteLength > P) {
    var n = new M;
    n.update(t), t = n.digest();
} var o = new Uint8Array(P); return o.set(t), o; }
var Dn = ["decrypt", "digest", "encrypt", "exportKey", "generateKey", "importKey", "sign", "verify"];
function Xt(e) { if (Ln(e) && typeof e.crypto.subtle == "object") {
    var t = e.crypto.subtle;
    return Tn(t);
} return !1; }
function Ln(e) { if (typeof e == "object" && typeof e.crypto == "object") {
    var t = e.crypto.getRandomValues;
    return typeof t == "function";
} return !1; }
function Tn(e) { return e && Dn.every(function (t) { return typeof e[t] == "function"; }); }
var Qt = (function () { function e(t) { Xt(z()) ? this.hash = new ze(t) : this.hash = new Zt(t); } return e.prototype.update = function (t, n) { this.hash.update(L(t)); }, e.prototype.digest = function () { return this.hash.digest(); }, e.prototype.reset = function () { this.hash.reset(); }, e; })();
var co = "required";
var S = "argv";
var eo = "isSet", j = "booleanEquals", $ = "error", A = "endpoint", T = "tree", Oe = "PartitionResult", $e = "getAttr", W = "stringEquals", to = { [co]: !1, type: "string" }, oo = { [co]: !0, default: !1, type: "boolean" }, no = { ref: "Endpoint" }, po = { fn: j, [S]: [{ ref: "UseFIPS" }, !0] }, lo = { fn: j, [S]: [{ ref: "UseDualStack" }, !0] }, C = {}, J = { ref: "Region" }, ro = { fn: $e, [S]: [{ ref: Oe }, "supportsFIPS"] }, fo = { ref: Oe }, io = { fn: j, [S]: [!0, { fn: $e, [S]: [fo, "supportsDualStack"] }] }, so = [po], ao = [lo], mo = [J], kn = { version: "1.0", parameters: { Region: to, UseDualStack: oo, UseFIPS: oo, Endpoint: to }, rules: [{ conditions: [{ fn: eo, [S]: [no] }], rules: [{ conditions: so, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: $ }, { conditions: ao, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: $ }, { endpoint: { url: no, properties: C, headers: C }, type: A }], type: T }, { conditions: [{ fn: eo, [S]: mo }], rules: [{ conditions: [{ fn: "aws.partition", [S]: mo, assign: Oe }], rules: [{ conditions: [po, lo], rules: [{ conditions: [{ fn: j, [S]: [!0, ro] }, io], rules: [{ conditions: [{ fn: W, [S]: [J, "us-east-1"] }], endpoint: { url: "https://cognito-identity-fips.us-east-1.amazonaws.com", properties: C, headers: C }, type: A }, { conditions: [{ fn: W, [S]: [J, "us-east-2"] }], endpoint: { url: "https://cognito-identity-fips.us-east-2.amazonaws.com", properties: C, headers: C }, type: A }, { conditions: [{ fn: W, [S]: [J, "us-west-1"] }], endpoint: { url: "https://cognito-identity-fips.us-west-1.amazonaws.com", properties: C, headers: C }, type: A }, { conditions: [{ fn: W, [S]: [J, "us-west-2"] }], endpoint: { url: "https://cognito-identity-fips.us-west-2.amazonaws.com", properties: C, headers: C }, type: A }, { endpoint: { url: "https://cognito-identity-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: C, headers: C }, type: A }], type: T }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: $ }], type: T }, { conditions: so, rules: [{ conditions: [{ fn: j, [S]: [ro, !0] }], rules: [{ endpoint: { url: "https://cognito-identity-fips.{Region}.{PartitionResult#dnsSuffix}", properties: C, headers: C }, type: A }], type: T }, { error: "FIPS is enabled but this partition does not support FIPS", type: $ }], type: T }, { conditions: ao, rules: [{ conditions: [io], rules: [{ conditions: [{ fn: W, [S]: ["aws", { fn: $e, [S]: [fo, "name"] }] }], endpoint: { url: "https://cognito-identity.{Region}.amazonaws.com", properties: C, headers: C }, type: A }, { endpoint: { url: "https://cognito-identity.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: C, headers: C }, type: A }], type: T }, { error: "DualStack is enabled but this partition does not support DualStack", type: $ }], type: T }, { endpoint: { url: "https://cognito-identity.{Region}.{PartitionResult#dnsSuffix}", properties: C, headers: C }, type: A }], type: T }], type: T }, { error: "Invalid Configuration: Missing Region", type: $ }] }, uo = kn;
var Un = new it({ size: 50, params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"] }), yo = (e, t = {}) => Un.get(e, () => at(uo, { endpointParams: e, logger: t.logger }));
st.aws = dt;
var ho = e => ({ apiVersion: "2014-06-30", base64Decoder: e?.base64Decoder ?? Ye, base64Encoder: e?.base64Encoder ?? Qe, disableHostPrefix: e?.disableHostPrefix ?? !1, endpointProvider: e?.endpointProvider ?? yo, extensions: e?.extensions ?? [], httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? Bt, httpAuthSchemes: e?.httpAuthSchemes ?? [{ schemeId: "aws.auth#sigv4", identityProvider: t => t.getIdentityProvider("aws.auth#sigv4"), signer: new ct }, { schemeId: "smithy.api#noAuth", identityProvider: t => t.getIdentityProvider("smithy.api#noAuth") || (() => i(null, null, function* () { return {}; })), signer: new nt }], logger: e?.logger ?? new It, serviceId: e?.serviceId ?? "Cognito Identity", urlParser: e?.urlParser ?? mt, utf8Decoder: e?.utf8Decoder ?? Ze, utf8Encoder: e?.utf8Encoder ?? Xe });
var go = e => { let t = Ot(e), n = () => t().then(gt), o = ho(e); return q(s(s({}, o), e), { runtime: "browser", defaultsMode: t, bodyLengthChecker: e?.bodyLengthChecker ?? lt, credentialDefaultProvider: e?.credentialDefaultProvider ?? (r => () => Promise.reject(new Error("Credential is missing"))), defaultUserAgentProvider: e?.defaultUserAgentProvider ?? Ut({ serviceId: o.serviceId, clientVersion: Jt.version }), maxAttempts: e?.maxAttempts ?? At, region: e?.region ?? zt("Region is missing"), requestHandler: et.create(e?.requestHandler ?? n), retryMode: e?.retryMode ?? (() => i(null, null, function* () { return (yield n()).retryMode || Rt; })), sha256: e?.sha256 ?? Qt, streamCollector: e?.streamCollector ?? tt, useDualstackEndpoint: e?.useDualstackEndpoint ?? (() => Promise.resolve(bt)), useFipsEndpoint: e?.useFipsEndpoint ?? (() => Promise.resolve(Pt)) }); };
var xo = e => { let t = e.httpAuthSchemes, n = e.httpAuthSchemeProvider, o = e.credentials; return { setHttpAuthScheme(r) { let u = t.findIndex(f => f.schemeId === r.schemeId); u === -1 ? t.push(r) : t.splice(u, 1, r); }, httpAuthSchemes() { return t; }, setHttpAuthSchemeProvider(r) { n = r; }, httpAuthSchemeProvider() { return n; }, setCredentials(r) { o = r; }, credentials() { return o; } }; }, Co = e => ({ httpAuthSchemes: e.httpAuthSchemes(), httpAuthSchemeProvider: e.httpAuthSchemeProvider(), credentials: e.credentials() });
var Io = (e, t) => { let n = Object.assign($t(e), xt(e), Ge(e), xo(e)); return t.forEach(o => o.configure(n)), Object.assign(e, Ft(n), Ct(n), He(n), Co(n)); };
var F = class extends ft {
    config;
    constructor(...[t]) { let n = go(t || {}); super(n), this.initConfig = n; let o = Wt(n), r = rt(o), u = Dt(r), f = Et(u), R = f, I = _t(R), _ = Mt(I), U = Io(_, t?.extensions || []); this.config = U, this.middlewareStack.use(St(this.config)), this.middlewareStack.use(Lt(this.config)), this.middlewareStack.use(wt(this.config)), this.middlewareStack.use(Me(this.config)), this.middlewareStack.use(We(this.config)), this.middlewareStack.use(Je(this.config)), this.middlewareStack.use(qe(this.config, { httpAuthSchemeParametersProvider: Ht, identityProviderConfigProvider: G => i(this, null, function* () { return new ot({ "aws.auth#sigv4": G.credentials }); }) })), this.middlewareStack.use(Ke(this.config)); }
    destroy() { super.destroy(); }
};
var v = class e extends yt {
    constructor(t) { super(t), Object.setPrototypeOf(this, e.prototype); }
};
var ns = { AUTHENTICATED_ROLE: "AuthenticatedRole", DENY: "Deny" }, X = class e extends v {
    name = "InternalErrorException";
    $fault = "server";
    constructor(t) { super(s({ name: "InternalErrorException", $fault: "server" }, t)), Object.setPrototypeOf(this, e.prototype); }
}, Q = class e extends v {
    name = "InvalidParameterException";
    $fault = "client";
    constructor(t) { super(s({ name: "InvalidParameterException", $fault: "client" }, t)), Object.setPrototypeOf(this, e.prototype); }
}, ee = class e extends v {
    name = "LimitExceededException";
    $fault = "client";
    constructor(t) { super(s({ name: "LimitExceededException", $fault: "client" }, t)), Object.setPrototypeOf(this, e.prototype); }
}, te = class e extends v {
    name = "NotAuthorizedException";
    $fault = "client";
    constructor(t) { super(s({ name: "NotAuthorizedException", $fault: "client" }, t)), Object.setPrototypeOf(this, e.prototype); }
}, oe = class e extends v {
    name = "ResourceConflictException";
    $fault = "client";
    constructor(t) { super(s({ name: "ResourceConflictException", $fault: "client" }, t)), Object.setPrototypeOf(this, e.prototype); }
}, ne = class e extends v {
    name = "TooManyRequestsException";
    $fault = "client";
    constructor(t) { super(s({ name: "TooManyRequestsException", $fault: "client" }, t)), Object.setPrototypeOf(this, e.prototype); }
}, rs = { ACCESS_DENIED: "AccessDenied", INTERNAL_SERVER_ERROR: "InternalServerError" }, re = class e extends v {
    name = "ResourceNotFoundException";
    $fault = "client";
    constructor(t) { super(s({ name: "ResourceNotFoundException", $fault: "client" }, t)), Object.setPrototypeOf(this, e.prototype); }
}, ie = class e extends v {
    name = "ExternalServiceException";
    $fault = "client";
    constructor(t) { super(s({ name: "ExternalServiceException", $fault: "client" }, t)), Object.setPrototypeOf(this, e.prototype); }
}, se = class e extends v {
    name = "InvalidIdentityPoolConfigurationException";
    $fault = "client";
    constructor(t) { super(s({ name: "InvalidIdentityPoolConfigurationException", $fault: "client" }, t)), Object.setPrototypeOf(this, e.prototype); }
}, is = { CONTAINS: "Contains", EQUALS: "Equals", NOT_EQUAL: "NotEqual", STARTS_WITH: "StartsWith" }, ss = { RULES: "Rules", TOKEN: "Token" }, ae = class e extends v {
    name = "DeveloperUserAlreadyRegisteredException";
    $fault = "client";
    constructor(t) { super(s({ name: "DeveloperUserAlreadyRegisteredException", $fault: "client" }, t)), Object.setPrototypeOf(this, e.prototype); }
}, de = class e extends v {
    name = "ConcurrentModificationException";
    $fault = "client";
    constructor(t) { super(s({ name: "ConcurrentModificationException", $fault: "client" }, t)), Object.setPrototypeOf(this, e.prototype); }
}, vo = e => s(s({}, e), e.Logins && { Logins: D }), zn = e => s(s({}, e), e.SecretKey && { SecretKey: D }), So = e => s(s({}, e), e.Credentials && { Credentials: zn(e.Credentials) }), bo = e => s(s({}, e), e.Logins && { Logins: D }), Po = e => s(s({}, e), e.Logins && { Logins: D }), Eo = e => s(s({}, e), e.Token && { Token: D }), wo = e => s(s({}, e), e.Logins && { Logins: D }), _o = e => s(s({}, e), e.Token && { Token: D }), Ao = e => s(s({}, e), e.Logins && { Logins: D });
var Ro = (e, t) => i(null, null, function* () { let n = g("CreateIdentityPool"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Do = (e, t) => i(null, null, function* () { let n = g("DeleteIdentities"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Lo = (e, t) => i(null, null, function* () { let n = g("DeleteIdentityPool"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), To = (e, t) => i(null, null, function* () { let n = g("DescribeIdentity"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), ko = (e, t) => i(null, null, function* () { let n = g("DescribeIdentityPool"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Uo = (e, t) => i(null, null, function* () { let n = g("GetCredentialsForIdentity"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), zo = (e, t) => i(null, null, function* () { let n = g("GetId"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Oo = (e, t) => i(null, null, function* () { let n = g("GetIdentityPoolRoles"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), $o = (e, t) => i(null, null, function* () { let n = g("GetOpenIdToken"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Fo = (e, t) => i(null, null, function* () { let n = g("GetOpenIdTokenForDeveloperIdentity"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), No = (e, t) => i(null, null, function* () { let n = g("GetPrincipalTagAttributeMap"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Go = (e, t) => i(null, null, function* () { let n = g("ListIdentities"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Ho = (e, t) => i(null, null, function* () { let n = g("ListIdentityPools"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Bo = (e, t) => i(null, null, function* () { let n = g("ListTagsForResource"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Mo = (e, t) => i(null, null, function* () { let n = g("LookupDeveloperIdentity"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Wo = (e, t) => i(null, null, function* () { let n = g("MergeDeveloperIdentities"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Jo = (e, t) => i(null, null, function* () { let n = g("SetIdentityPoolRoles"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), jo = (e, t) => i(null, null, function* () { let n = g("SetPrincipalTagAttributeMap"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), qo = (e, t) => i(null, null, function* () { let n = g("TagResource"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Ko = (e, t) => i(null, null, function* () { let n = g("UnlinkDeveloperIdentity"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Vo = (e, t) => i(null, null, function* () { let n = g("UnlinkIdentity"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Yo = (e, t) => i(null, null, function* () { let n = g("UntagResource"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Zo = (e, t) => i(null, null, function* () { let n = g("UpdateIdentityPool"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Xo = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), Qo = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), en = (e, t) => i(null, null, function* () { return e.statusCode >= 300 ? y(e, t) : (yield H(e.body, t), { $metadata: l(e) }); }), tn = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = Sn(n, t), s({ $metadata: l(e) }, o); }), on = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), nn = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = Kn(n, t), s({ $metadata: l(e) }, o); }), rn = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), sn = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), an = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), dn = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), mn = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), cn = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = Yn(n, t), s({ $metadata: l(e) }, o); }), pn = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), ln = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), fn = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), un = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), yn = (e, t) => i(null, null, function* () { return e.statusCode >= 300 ? y(e, t) : (yield H(e.body, t), { $metadata: l(e) }); }), hn = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), gn = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), xn = (e, t) => i(null, null, function* () { return e.statusCode >= 300 ? y(e, t) : (yield H(e.body, t), { $metadata: l(e) }); }), Cn = (e, t) => i(null, null, function* () { return e.statusCode >= 300 ? y(e, t) : (yield H(e.body, t), { $metadata: l(e) }); }), In = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), vn = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), y = (e, t) => i(null, null, function* () { let n = q(s({}, e), { body: yield Nt(e.body, t) }), o = Gt(e, n.body); switch (o) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException": throw yield Nn(n, t);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException": throw yield Hn(n, t);
    case "LimitExceededException":
    case "com.amazonaws.cognitoidentity#LimitExceededException": throw yield Bn(n, t);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException": throw yield Mn(n, t);
    case "ResourceConflictException":
    case "com.amazonaws.cognitoidentity#ResourceConflictException": throw yield Wn(n, t);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException": throw yield jn(n, t);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException": throw yield Jn(n, t);
    case "ExternalServiceException":
    case "com.amazonaws.cognitoidentity#ExternalServiceException": throw yield Fn(n, t);
    case "InvalidIdentityPoolConfigurationException":
    case "com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException": throw yield Gn(n, t);
    case "DeveloperUserAlreadyRegisteredException":
    case "com.amazonaws.cognitoidentity#DeveloperUserAlreadyRegisteredException": throw yield $n(n, t);
    case "ConcurrentModificationException":
    case "com.amazonaws.cognitoidentity#ConcurrentModificationException": throw yield On(n, t);
    default:
        let r = n.body;
        return Zn({ output: e, parsedBody: r, errorCode: o });
} }), On = (e, t) => i(null, null, function* () { let n = e.body, o = a(n), r = new de(s({ $metadata: l(e) }, o)); return E(r, n); }), $n = (e, t) => i(null, null, function* () { let n = e.body, o = a(n), r = new ae(s({ $metadata: l(e) }, o)); return E(r, n); }), Fn = (e, t) => i(null, null, function* () { let n = e.body, o = a(n), r = new ie(s({ $metadata: l(e) }, o)); return E(r, n); }), Nn = (e, t) => i(null, null, function* () { let n = e.body, o = a(n), r = new X(s({ $metadata: l(e) }, o)); return E(r, n); }), Gn = (e, t) => i(null, null, function* () { let n = e.body, o = a(n), r = new se(s({ $metadata: l(e) }, o)); return E(r, n); }), Hn = (e, t) => i(null, null, function* () { let n = e.body, o = a(n), r = new Q(s({ $metadata: l(e) }, o)); return E(r, n); }), Bn = (e, t) => i(null, null, function* () { let n = e.body, o = a(n), r = new ee(s({ $metadata: l(e) }, o)); return E(r, n); }), Mn = (e, t) => i(null, null, function* () { let n = e.body, o = a(n), r = new te(s({ $metadata: l(e) }, o)); return E(r, n); }), Wn = (e, t) => i(null, null, function* () { let n = e.body, o = a(n), r = new oe(s({ $metadata: l(e) }, o)); return E(r, n); }), Jn = (e, t) => i(null, null, function* () { let n = e.body, o = a(n), r = new re(s({ $metadata: l(e) }, o)); return E(r, n); }), jn = (e, t) => i(null, null, function* () { let n = e.body, o = a(n), r = new ne(s({ $metadata: l(e) }, o)); return E(r, n); }), qn = (e, t) => B(e, { AccessKeyId: k, Expiration: n => V(Y(K(n))), SecretKey: k, SessionToken: k }), Kn = (e, t) => B(e, { Credentials: n => qn(n, t), IdentityId: k }), Vn = (e, t) => (e || []).filter(o => o != null).map(o => Sn(o, t)), Sn = (e, t) => B(e, { CreationDate: n => V(Y(K(n))), IdentityId: k, LastModifiedDate: n => V(Y(K(n))), Logins: a }), Yn = (e, t) => B(e, { Identities: n => Vn(n, t), IdentityPoolId: k, NextToken: k }), l = e => ({ httpStatusCode: e.statusCode, requestId: e.headers["x-amzn-requestid"] ?? e.headers["x-amzn-request-id"] ?? e.headers["x-amz-request-id"], extendedRequestId: e.headers["x-amz-id-2"], cfId: e.headers["x-amz-cf-id"] });
var Zn = ht(v), h = (e, t, n, o, r) => i(null, null, function* () { let { hostname: u, protocol: f = "https", port: R, path: I } = yield e.endpoint(), _ = { protocol: f, hostname: u, port: R, method: "POST", path: I.endsWith("/") ? I.slice(0, -1) + n : I + n, headers: t }; return o !== void 0 && (_.hostname = o), r !== void 0 && (_.body = r), new Be(_); });
function g(e) { return { "content-type": "application/x-amz-json-1.1", "x-amz-target": `AWSCognitoIdentityService.${e}` }; }
var me = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "CreateIdentityPool", {}).n("CognitoIdentityClient", "CreateIdentityPoolCommand").f(void 0, void 0).ser(Ro).de(Xo).build() {
};
var ce = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "DeleteIdentities", {}).n("CognitoIdentityClient", "DeleteIdentitiesCommand").f(void 0, void 0).ser(Do).de(Qo).build() {
};
var pe = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "DeleteIdentityPool", {}).n("CognitoIdentityClient", "DeleteIdentityPoolCommand").f(void 0, void 0).ser(Lo).de(en).build() {
};
var le = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "DescribeIdentity", {}).n("CognitoIdentityClient", "DescribeIdentityCommand").f(void 0, void 0).ser(To).de(tn).build() {
};
var fe = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "DescribeIdentityPool", {}).n("CognitoIdentityClient", "DescribeIdentityPoolCommand").f(void 0, void 0).ser(ko).de(on).build() {
};
var ue = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "GetCredentialsForIdentity", {}).n("CognitoIdentityClient", "GetCredentialsForIdentityCommand").f(vo, So).ser(Uo).de(nn).build() {
};
var ye = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "GetId", {}).n("CognitoIdentityClient", "GetIdCommand").f(bo, void 0).ser(zo).de(rn).build() {
};
var he = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "GetIdentityPoolRoles", {}).n("CognitoIdentityClient", "GetIdentityPoolRolesCommand").f(void 0, void 0).ser(Oo).de(sn).build() {
};
var ge = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "GetOpenIdToken", {}).n("CognitoIdentityClient", "GetOpenIdTokenCommand").f(Po, Eo).ser($o).de(an).build() {
};
var xe = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "GetOpenIdTokenForDeveloperIdentity", {}).n("CognitoIdentityClient", "GetOpenIdTokenForDeveloperIdentityCommand").f(wo, _o).ser(Fo).de(dn).build() {
};
var Ce = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "GetPrincipalTagAttributeMap", {}).n("CognitoIdentityClient", "GetPrincipalTagAttributeMapCommand").f(void 0, void 0).ser(No).de(mn).build() {
};
var Ie = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "ListIdentities", {}).n("CognitoIdentityClient", "ListIdentitiesCommand").f(void 0, void 0).ser(Go).de(cn).build() {
};
var N = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "ListIdentityPools", {}).n("CognitoIdentityClient", "ListIdentityPoolsCommand").f(void 0, void 0).ser(Ho).de(pn).build() {
};
var ve = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "ListTagsForResource", {}).n("CognitoIdentityClient", "ListTagsForResourceCommand").f(void 0, void 0).ser(Bo).de(ln).build() {
};
var Se = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "LookupDeveloperIdentity", {}).n("CognitoIdentityClient", "LookupDeveloperIdentityCommand").f(void 0, void 0).ser(Mo).de(fn).build() {
};
var be = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "MergeDeveloperIdentities", {}).n("CognitoIdentityClient", "MergeDeveloperIdentitiesCommand").f(void 0, void 0).ser(Wo).de(un).build() {
};
var Pe = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "SetIdentityPoolRoles", {}).n("CognitoIdentityClient", "SetIdentityPoolRolesCommand").f(void 0, void 0).ser(Jo).de(yn).build() {
};
var Ee = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "SetPrincipalTagAttributeMap", {}).n("CognitoIdentityClient", "SetPrincipalTagAttributeMapCommand").f(void 0, void 0).ser(jo).de(hn).build() {
};
var we = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "TagResource", {}).n("CognitoIdentityClient", "TagResourceCommand").f(void 0, void 0).ser(qo).de(gn).build() {
};
var _e = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "UnlinkDeveloperIdentity", {}).n("CognitoIdentityClient", "UnlinkDeveloperIdentityCommand").f(void 0, void 0).ser(Ko).de(xn).build() {
};
var Ae = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "UnlinkIdentity", {}).n("CognitoIdentityClient", "UnlinkIdentityCommand").f(Ao, void 0).ser(Vo).de(Cn).build() {
};
var Re = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "UntagResource", {}).n("CognitoIdentityClient", "UntagResourceCommand").f(void 0, void 0).ser(Yo).de(In).build() {
};
var De = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "UpdateIdentityPool", {}).n("CognitoIdentityClient", "UpdateIdentityPoolCommand").f(void 0, void 0).ser(Zo).de(vn).build() {
};
var Xn = { CreateIdentityPoolCommand: me, DeleteIdentitiesCommand: ce, DeleteIdentityPoolCommand: pe, DescribeIdentityCommand: le, DescribeIdentityPoolCommand: fe, GetCredentialsForIdentityCommand: ue, GetIdCommand: ye, GetIdentityPoolRolesCommand: he, GetOpenIdTokenCommand: ge, GetOpenIdTokenForDeveloperIdentityCommand: xe, GetPrincipalTagAttributeMapCommand: Ce, ListIdentitiesCommand: Ie, ListIdentityPoolsCommand: N, ListTagsForResourceCommand: ve, LookupDeveloperIdentityCommand: Se, MergeDeveloperIdentitiesCommand: be, SetIdentityPoolRolesCommand: Pe, SetPrincipalTagAttributeMapCommand: Ee, TagResourceCommand: we, UnlinkDeveloperIdentityCommand: _e, UnlinkIdentityCommand: Ae, UntagResourceCommand: Re, UpdateIdentityPoolCommand: De }, Fe = class extends F {
};
ut(Xn, Fe);
var wm = Ve(F, N, "NextToken", "NextToken", "MaxResults");
export { m as $Command, ns as AmbiguousRoleResolutionType, Fe as CognitoIdentity, F as CognitoIdentityClient, v as CognitoIdentityServiceException, de as ConcurrentModificationException, me as CreateIdentityPoolCommand, zn as CredentialsFilterSensitiveLog, ce as DeleteIdentitiesCommand, pe as DeleteIdentityPoolCommand, le as DescribeIdentityCommand, fe as DescribeIdentityPoolCommand, ae as DeveloperUserAlreadyRegisteredException, rs as ErrorCode, ie as ExternalServiceException, ue as GetCredentialsForIdentityCommand, vo as GetCredentialsForIdentityInputFilterSensitiveLog, So as GetCredentialsForIdentityResponseFilterSensitiveLog, ye as GetIdCommand, bo as GetIdInputFilterSensitiveLog, he as GetIdentityPoolRolesCommand, ge as GetOpenIdTokenCommand, xe as GetOpenIdTokenForDeveloperIdentityCommand, wo as GetOpenIdTokenForDeveloperIdentityInputFilterSensitiveLog, _o as GetOpenIdTokenForDeveloperIdentityResponseFilterSensitiveLog, Po as GetOpenIdTokenInputFilterSensitiveLog, Eo as GetOpenIdTokenResponseFilterSensitiveLog, Ce as GetPrincipalTagAttributeMapCommand, X as InternalErrorException, se as InvalidIdentityPoolConfigurationException, Q as InvalidParameterException, ee as LimitExceededException, Ie as ListIdentitiesCommand, N as ListIdentityPoolsCommand, ve as ListTagsForResourceCommand, Se as LookupDeveloperIdentityCommand, is as MappingRuleMatchType, be as MergeDeveloperIdentitiesCommand, te as NotAuthorizedException, oe as ResourceConflictException, re as ResourceNotFoundException, ss as RoleMappingType, Pe as SetIdentityPoolRolesCommand, Ee as SetPrincipalTagAttributeMapCommand, we as TagResourceCommand, ne as TooManyRequestsException, _e as UnlinkDeveloperIdentityCommand, Ae as UnlinkIdentityCommand, Ao as UnlinkIdentityInputFilterSensitiveLog, Re as UntagResourceCommand, De as UpdateIdentityPoolCommand, ft as __Client, wm as paginateListIdentityPools };
//# sourceMappingURL=_aws_sdk_client_cognito_identity.A5ZDMiQ7dh.js.map
