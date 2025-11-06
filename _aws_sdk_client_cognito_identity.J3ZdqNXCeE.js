import { $ as m, Aa as $t, B as L, Ba as Ft, Ca as Gt, I as Y, L as nt, M as rt, N as it, O as st, P as at, Q as dt, R as mt, T as pt, Y as lt, Z as ut, _ as ft, a as He, aa as D, b as Me, ba as yt, c as Be, ca as ht, da as E, e as We, ea as gt, f as Je, fa as xt, g as je, ga as Ct, h as qe, ha as It, i as Le, ia as vt, j as Ke, k as d, ka as H, la as St, m as Ve, ma as Pt, n as Ye, na as bt, o as Ze, oa as Et, pa as _t, q as Qe, qa as wt, r as et, ra as c, s as tt, sa as At, t as ot, ta as Rt, ua as Dt, va as kt, w as N, wa as Lt, xa as z, y as K, ya as Ot, z as V, za as Ut } from "@nf-internal/chunk-RHCD2AVL";
import { a as Xe } from "@nf-internal/chunk-QPPNTWLE";
import "@nf-internal/chunk-OKDO625G";
import "@nf-internal/chunk-VD7OH2TE";
import { b as ct } from "@nf-internal/chunk-Z75LNJIL";
import { a as Te } from "@nf-internal/chunk-7QKABEPV";
import { b as Tt, c as zt, k as An } from "@nf-internal/chunk-XE5S2H6D";
import { a as s, b as q, h as ke, k as i } from "@nf-internal/chunk-GL2BOVXA";
var a = e => { if (e == null)
    return {}; if (Array.isArray(e))
    return e.filter(t => t != null).map(a); if (typeof e == "object") {
    let t = {};
    for (let n of Object.keys(e))
        e[n] != null && (t[n] = a(e[n]));
    return t;
} return e; };
var x = (e, t) => St(e, t).then(n => { if (n.length)
    try {
        return JSON.parse(n);
    }
    catch (o) {
        throw o?.name === "SyntaxError" && Object.defineProperty(o, "$responseBodyText", { value: n }), o;
    } return {}; }), Nt = (e, t) => i(null, null, function* () { let n = yield x(e, t); return n.message = n.message ?? n.Message, n; }), Ht = (e, t) => { let n = (f, u) => Object.keys(f).find(R => R.toLowerCase() === u.toLowerCase()), o = f => { let u = f; return typeof u == "number" && (u = u.toString()), u.indexOf(",") >= 0 && (u = u.split(",")[0]), u.indexOf(":") >= 0 && (u = u.split(":")[0]), u.indexOf("#") >= 0 && (u = u.split("#")[1]), u; }, r = n(e.headers, "x-amzn-errortype"); if (r !== void 0)
    return o(e.headers[r]); if (t && typeof t == "object") {
    let f = n(t, "code");
    if (f && t[f] !== void 0)
        return o(t[f]);
    if (t.__type !== void 0)
        return o(t.__type);
} };
var Mt = (e, t, n) => i(null, null, function* () { return { operation: qe(t).operation, region: (yield Le(e.region)()) || (() => { throw new Error("expected `region` to be configured for `aws.auth#sigv4`"); })() }; });
function Rn(e) { return { schemeId: "aws.auth#sigv4", signingProperties: { name: "cognito-identity", region: e.region }, propertiesExtractor: (t, n) => ({ signingProperties: { config: t, context: n } }) }; }
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
    default: t.push(Rn(e));
} return t; }, Wt = e => { let t = lt(e); return Object.assign(t, { authSchemePreference: Le(e.authSchemePreference ?? []) }); };
var Jt = e => Object.assign(e, { useDualstackEndpoint: e.useDualstackEndpoint ?? !1, useFipsEndpoint: e.useFipsEndpoint ?? !1, defaultSigningName: "cognito-identity" }), p = { UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" }, Endpoint: { type: "builtInParams", name: "endpoint" }, Region: { type: "builtInParams", name: "region" }, UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" } };
var jt = { name: "@aws-sdk/client-cognito-identity", description: "AWS SDK for JavaScript Cognito Identity Client for Node.js, Browser and React Native", version: "3.916.0", scripts: { build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'", "build:cjs": "node ../../scripts/compilation/inline client-cognito-identity", "build:es": "tsc -p tsconfig.es.json", "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build", "build:types": "tsc -p tsconfig.types.json", "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4", clean: "rimraf ./dist-* && rimraf *.tsbuildinfo", "extract:docs": "api-extractor run --local", "generate:client": "node ../../scripts/generate-clients/single-service --solo cognito-identity", "test:e2e": "yarn g:vitest run -c vitest.config.e2e.mts --mode development", "test:e2e:watch": "yarn g:vitest watch -c vitest.config.e2e.mts" }, main: "./dist-cjs/index.js", types: "./dist-types/index.d.ts", module: "./dist-es/index.js", sideEffects: !1, dependencies: { "@aws-crypto/sha256-browser": "5.2.0", "@aws-crypto/sha256-js": "5.2.0", "@aws-sdk/core": "3.916.0", "@aws-sdk/credential-provider-node": "3.916.0", "@aws-sdk/middleware-host-header": "3.914.0", "@aws-sdk/middleware-logger": "3.914.0", "@aws-sdk/middleware-recursion-detection": "3.914.0", "@aws-sdk/middleware-user-agent": "3.916.0", "@aws-sdk/region-config-resolver": "3.914.0", "@aws-sdk/types": "3.914.0", "@aws-sdk/util-endpoints": "3.916.0", "@aws-sdk/util-user-agent-browser": "3.914.0", "@aws-sdk/util-user-agent-node": "3.916.0", "@smithy/config-resolver": "^4.4.0", "@smithy/core": "^3.17.1", "@smithy/fetch-http-handler": "^5.3.4", "@smithy/hash-node": "^4.2.3", "@smithy/invalid-dependency": "^4.2.3", "@smithy/middleware-content-length": "^4.2.3", "@smithy/middleware-endpoint": "^4.3.5", "@smithy/middleware-retry": "^4.4.5", "@smithy/middleware-serde": "^4.2.3", "@smithy/middleware-stack": "^4.2.3", "@smithy/node-config-provider": "^4.3.3", "@smithy/node-http-handler": "^4.4.3", "@smithy/protocol-http": "^5.3.3", "@smithy/smithy-client": "^4.9.1", "@smithy/types": "^4.8.0", "@smithy/url-parser": "^4.2.3", "@smithy/util-base64": "^4.3.0", "@smithy/util-body-length-browser": "^4.2.0", "@smithy/util-body-length-node": "^4.2.1", "@smithy/util-defaults-mode-browser": "^4.3.4", "@smithy/util-defaults-mode-node": "^4.2.6", "@smithy/util-endpoints": "^3.2.3", "@smithy/util-middleware": "^4.2.3", "@smithy/util-retry": "^4.2.3", "@smithy/util-utf8": "^4.2.0", tslib: "^2.6.2" }, devDependencies: { "@aws-sdk/client-iam": "3.916.0", "@tsconfig/node18": "18.2.4", "@types/chai": "^4.2.11", "@types/node": "^18.19.69", concurrently: "7.0.0", "downlevel-dts": "0.10.1", rimraf: "3.0.2", typescript: "~5.8.3" }, engines: { node: ">=18.0.0" }, typesVersions: { "<4.0": { "dist-types/*": ["dist-types/ts3.4/*"] } }, files: ["dist-*/**"], author: { name: "AWS SDK for JavaScript Team", url: "https://aws.amazon.com/javascript/" }, license: "Apache-2.0", browser: { "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser" }, "react-native": { "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native" }, homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cognito-identity", repository: { type: "git", url: "https://github.com/aws/aws-sdk-js-v3.git", directory: "clients/client-cognito-identity" } };
var O = ke(Te());
var ze = { name: "SHA-256" }, Oe = { name: "HMAC", hash: ze }, qt = new Uint8Array([227, 176, 196, 66, 152, 252, 28, 20, 154, 251, 244, 200, 153, 111, 185, 36, 39, 174, 65, 228, 100, 155, 147, 76, 164, 149, 153, 27, 120, 82, 184, 85]);
var Ue = (function () { function e(t) { this.toHash = new Uint8Array(0), this.secret = t, this.reset(); } return e.prototype.update = function (t) { if (!(0, O.isEmptyData)(t)) {
    var n = (0, O.convertToBuffer)(t), o = new Uint8Array(this.toHash.byteLength + n.byteLength);
    o.set(this.toHash, 0), o.set(n, this.toHash.byteLength), this.toHash = o;
} }, e.prototype.digest = function () { var t = this; return this.key ? this.key.then(function (n) { return z().crypto.subtle.sign(Oe, n, t.toHash).then(function (o) { return new Uint8Array(o); }); }) : (0, O.isEmptyData)(this.toHash) ? Promise.resolve(qt) : Promise.resolve().then(function () { return z().crypto.subtle.digest(ze, t.toHash); }).then(function (n) { return Promise.resolve(new Uint8Array(n)); }); }, e.prototype.reset = function () { var t = this; this.toHash = new Uint8Array(0), this.secret && this.secret !== void 0 && (this.key = new Promise(function (n, o) { z().crypto.subtle.importKey("raw", (0, O.convertToBuffer)(t.secret), Oe, !1, ["sign"]).then(n, o); }), this.key.catch(function () { })); }, e; })();
An();
var b = 64, Kt = 32, Vt = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), Yt = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], Zt = Math.pow(2, 53) - 1;
var M = (function () { function e() { this.state = Int32Array.from(Yt), this.temp = new Int32Array(64), this.buffer = new Uint8Array(64), this.bufferLength = 0, this.bytesHashed = 0, this.finished = !1; } return e.prototype.update = function (t) { if (this.finished)
    throw new Error("Attempted to update an already finished hash."); var n = 0, o = t.byteLength; if (this.bytesHashed += o, this.bytesHashed * 8 > Zt)
    throw new Error("Cannot hash more than 2^53 - 1 bits"); for (; o > 0;)
    this.buffer[this.bufferLength++] = t[n++], o--, this.bufferLength === b && (this.hashBuffer(), this.bufferLength = 0); }, e.prototype.digest = function () { if (!this.finished) {
    var t = this.bytesHashed * 8, n = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength), o = this.bufferLength;
    if (n.setUint8(this.bufferLength++, 128), o % b >= b - 8) {
        for (var r = this.bufferLength; r < b; r++)
            n.setUint8(r, 0);
        this.hashBuffer(), this.bufferLength = 0;
    }
    for (var r = this.bufferLength; r < b - 8; r++)
        n.setUint8(r, 0);
    n.setUint32(b - 8, Math.floor(t / 4294967296), !0), n.setUint32(b - 4, t), this.hashBuffer(), this.finished = !0;
} for (var f = new Uint8Array(Kt), r = 0; r < 8; r++)
    f[r * 4] = this.state[r] >>> 24 & 255, f[r * 4 + 1] = this.state[r] >>> 16 & 255, f[r * 4 + 2] = this.state[r] >>> 8 & 255, f[r * 4 + 3] = this.state[r] >>> 0 & 255; return f; }, e.prototype.hashBuffer = function () { for (var t = this, n = t.buffer, o = t.state, r = o[0], f = o[1], u = o[2], R = o[3], I = o[4], w = o[5], T = o[6], G = o[7], P = 0; P < b; P++) {
    if (P < 16)
        this.temp[P] = (n[P * 4] & 255) << 24 | (n[P * 4 + 1] & 255) << 16 | (n[P * 4 + 2] & 255) << 8 | n[P * 4 + 3] & 255;
    else {
        var _ = this.temp[P - 2], En = (_ >>> 17 | _ << 15) ^ (_ >>> 19 | _ << 13) ^ _ >>> 10;
        _ = this.temp[P - 15];
        var _n = (_ >>> 7 | _ << 25) ^ (_ >>> 18 | _ << 14) ^ _ >>> 3;
        this.temp[P] = (En + this.temp[P - 7] | 0) + (_n + this.temp[P - 16] | 0);
    }
    var Ne = (((I >>> 6 | I << 26) ^ (I >>> 11 | I << 21) ^ (I >>> 25 | I << 7)) + (I & w ^ ~I & T) | 0) + (G + (Vt[P] + this.temp[P] | 0) | 0) | 0, wn = ((r >>> 2 | r << 30) ^ (r >>> 13 | r << 19) ^ (r >>> 22 | r << 10)) + (r & f ^ r & u ^ f & u) | 0;
    G = T, T = w, w = I, I = R + Ne | 0, R = u, u = f, f = r, r = Ne + wn | 0;
} o[0] += r, o[1] += f, o[2] += u, o[3] += R, o[4] += I, o[5] += w, o[6] += T, o[7] += G; }, e; })();
var B = ke(Te()), Xt = (function () { function e(t) { this.secret = t, this.hash = new M, this.reset(); } return e.prototype.update = function (t) { if (!((0, B.isEmptyData)(t) || this.error))
    try {
        this.hash.update((0, B.convertToBuffer)(t));
    }
    catch (n) {
        this.error = n;
    } }, e.prototype.digestSync = function () { if (this.error)
    throw this.error; return this.outer ? (this.outer.finished || this.outer.update(this.hash.digest()), this.outer.digest()) : this.hash.digest(); }, e.prototype.digest = function () { return Tt(this, void 0, void 0, function () { return zt(this, function (t) { return [2, this.digestSync()]; }); }); }, e.prototype.reset = function () { if (this.hash = new M, this.secret) {
    this.outer = new M;
    var t = kn(this.secret), n = new Uint8Array(b);
    n.set(t);
    for (var o = 0; o < b; o++)
        t[o] ^= 54, n[o] ^= 92;
    this.hash.update(t), this.outer.update(n);
    for (var o = 0; o < t.byteLength; o++)
        t[o] = 0;
} }, e; })();
function kn(e) { var t = (0, B.convertToBuffer)(e); if (t.byteLength > b) {
    var n = new M;
    n.update(t), t = n.digest();
} var o = new Uint8Array(b); return o.set(t), o; }
var Ln = ["decrypt", "digest", "encrypt", "exportKey", "generateKey", "importKey", "sign", "verify"];
function Qt(e) { if (Tn(e) && typeof e.crypto.subtle == "object") {
    var t = e.crypto.subtle;
    return zn(t);
} return !1; }
function Tn(e) { if (typeof e == "object" && typeof e.crypto == "object") {
    var t = e.crypto.getRandomValues;
    return typeof t == "function";
} return !1; }
function zn(e) { return e && Ln.every(function (t) { return typeof e[t] == "function"; }); }
var eo = ke(Te()), to = (function () { function e(t) { Qt(z()) ? this.hash = new Ue(t) : this.hash = new Xt(t); } return e.prototype.update = function (t, n) { this.hash.update((0, eo.convertToBuffer)(t)); }, e.prototype.digest = function () { return this.hash.digest(); }, e.prototype.reset = function () { this.hash.reset(); }, e; })();
var lo = "required";
var S = "argv";
var oo = "isSet", j = "booleanEquals", U = "error", A = "endpoint", k = "tree", $e = "PartitionResult", Fe = "getAttr", W = "stringEquals", no = { [lo]: !1, type: "string" }, ro = { [lo]: !0, default: !1, type: "boolean" }, io = { ref: "Endpoint" }, uo = { fn: j, [S]: [{ ref: "UseFIPS" }, !0] }, fo = { fn: j, [S]: [{ ref: "UseDualStack" }, !0] }, C = {}, J = { ref: "Region" }, so = { fn: Fe, [S]: [{ ref: $e }, "supportsFIPS"] }, yo = { ref: $e }, ao = { fn: j, [S]: [!0, { fn: Fe, [S]: [yo, "supportsDualStack"] }] }, mo = [uo], co = [fo], po = [J], On = { version: "1.0", parameters: { Region: no, UseDualStack: ro, UseFIPS: ro, Endpoint: no }, rules: [{ conditions: [{ fn: oo, [S]: [io] }], rules: [{ conditions: mo, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: U }, { conditions: co, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: U }, { endpoint: { url: io, properties: C, headers: C }, type: A }], type: k }, { conditions: [{ fn: oo, [S]: po }], rules: [{ conditions: [{ fn: "aws.partition", [S]: po, assign: $e }], rules: [{ conditions: [uo, fo], rules: [{ conditions: [{ fn: j, [S]: [!0, so] }, ao], rules: [{ conditions: [{ fn: W, [S]: [J, "us-east-1"] }], endpoint: { url: "https://cognito-identity-fips.us-east-1.amazonaws.com", properties: C, headers: C }, type: A }, { conditions: [{ fn: W, [S]: [J, "us-east-2"] }], endpoint: { url: "https://cognito-identity-fips.us-east-2.amazonaws.com", properties: C, headers: C }, type: A }, { conditions: [{ fn: W, [S]: [J, "us-west-1"] }], endpoint: { url: "https://cognito-identity-fips.us-west-1.amazonaws.com", properties: C, headers: C }, type: A }, { conditions: [{ fn: W, [S]: [J, "us-west-2"] }], endpoint: { url: "https://cognito-identity-fips.us-west-2.amazonaws.com", properties: C, headers: C }, type: A }, { endpoint: { url: "https://cognito-identity-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: C, headers: C }, type: A }], type: k }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: U }], type: k }, { conditions: mo, rules: [{ conditions: [{ fn: j, [S]: [so, !0] }], rules: [{ endpoint: { url: "https://cognito-identity-fips.{Region}.{PartitionResult#dnsSuffix}", properties: C, headers: C }, type: A }], type: k }, { error: "FIPS is enabled but this partition does not support FIPS", type: U }], type: k }, { conditions: co, rules: [{ conditions: [ao], rules: [{ conditions: [{ fn: W, [S]: ["aws", { fn: Fe, [S]: [yo, "name"] }] }], endpoint: { url: "https://cognito-identity.{Region}.amazonaws.com", properties: C, headers: C }, type: A }, { endpoint: { url: "https://cognito-identity.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: C, headers: C }, type: A }], type: k }, { error: "DualStack is enabled but this partition does not support DualStack", type: U }], type: k }, { endpoint: { url: "https://cognito-identity.{Region}.{PartitionResult#dnsSuffix}", properties: C, headers: C }, type: A }], type: k }], type: k }, { error: "Invalid Configuration: Missing Region", type: U }] }, ho = On;
var Un = new st({ size: 50, params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"] }), go = (e, t = {}) => Un.get(e, () => dt(ho, { endpointParams: e, logger: t.logger }));
at.aws = mt;
var xo = e => ({ apiVersion: "2014-06-30", base64Decoder: e?.base64Decoder ?? Ze, base64Encoder: e?.base64Encoder ?? et, disableHostPrefix: e?.disableHostPrefix ?? !1, endpointProvider: e?.endpointProvider ?? go, extensions: e?.extensions ?? [], httpAuthSchemeProvider: e?.httpAuthSchemeProvider ?? Bt, httpAuthSchemes: e?.httpAuthSchemes ?? [{ schemeId: "aws.auth#sigv4", identityProvider: t => t.getIdentityProvider("aws.auth#sigv4"), signer: new pt }, { schemeId: "smithy.api#noAuth", identityProvider: t => t.getIdentityProvider("smithy.api#noAuth") || (() => i(null, null, function* () { return {}; })), signer: new rt }], logger: e?.logger ?? new vt, serviceId: e?.serviceId ?? "Cognito Identity", urlParser: e?.urlParser ?? ct, utf8Decoder: e?.utf8Decoder ?? Xe, utf8Encoder: e?.utf8Encoder ?? Qe });
var Co = e => { let t = $t(e), n = () => t().then(xt), o = xo(e); return q(s(s({}, o), e), { runtime: "browser", defaultsMode: t, bodyLengthChecker: e?.bodyLengthChecker ?? ut, credentialDefaultProvider: e?.credentialDefaultProvider ?? (r => () => Promise.reject(new Error("Credential is missing"))), defaultUserAgentProvider: e?.defaultUserAgentProvider ?? Ot({ serviceId: o.serviceId, clientVersion: jt.version }), maxAttempts: e?.maxAttempts ?? Rt, region: e?.region ?? Ut("Region is missing"), requestHandler: tt.create(e?.requestHandler ?? n), retryMode: e?.retryMode ?? (() => i(null, null, function* () { return (yield n()).retryMode || Dt; })), sha256: e?.sha256 ?? to, streamCollector: e?.streamCollector ?? ot, useDualstackEndpoint: e?.useDualstackEndpoint ?? (() => Promise.resolve(bt)), useFipsEndpoint: e?.useFipsEndpoint ?? (() => Promise.resolve(Et)) }); };
var Io = e => { let t = e.httpAuthSchemes, n = e.httpAuthSchemeProvider, o = e.credentials; return { setHttpAuthScheme(r) { let f = t.findIndex(u => u.schemeId === r.schemeId); f === -1 ? t.push(r) : t.splice(f, 1, r); }, httpAuthSchemes() { return t; }, setHttpAuthSchemeProvider(r) { n = r; }, httpAuthSchemeProvider() { return n; }, setCredentials(r) { o = r; }, credentials() { return o; } }; }, vo = e => ({ httpAuthSchemes: e.httpAuthSchemes(), httpAuthSchemeProvider: e.httpAuthSchemeProvider(), credentials: e.credentials() });
var So = (e, t) => { let n = Object.assign(Ft(e), Ct(e), He(e), Io(e)); return t.forEach(o => o.configure(n)), Object.assign(e, Gt(n), It(n), Me(n), vo(n)); };
var $ = class extends ft {
    config;
    constructor(...[t]) { let n = Co(t || {}); super(n), this.initConfig = n; let o = Jt(n), r = it(o), f = kt(r), u = _t(f), R = u, I = At(R), w = Wt(I), T = So(w, t?.extensions || []); this.config = T, this.middlewareStack.use(Pt(this.config)), this.middlewareStack.use(Lt(this.config)), this.middlewareStack.use(wt(this.config)), this.middlewareStack.use(We(this.config)), this.middlewareStack.use(Je(this.config)), this.middlewareStack.use(je(this.config)), this.middlewareStack.use(Ke(this.config, { httpAuthSchemeParametersProvider: Mt, identityProviderConfigProvider: G => i(this, null, function* () { return new nt({ "aws.auth#sigv4": G.credentials }); }) })), this.middlewareStack.use(Ve(this.config)); }
    destroy() { super.destroy(); }
};
var v = class e extends ht {
    constructor(t) { super(t), Object.setPrototypeOf(this, e.prototype); }
};
var Ui = { AUTHENTICATED_ROLE: "AuthenticatedRole", DENY: "Deny" }, X = class e extends v {
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
}, $i = { ACCESS_DENIED: "AccessDenied", INTERNAL_SERVER_ERROR: "InternalServerError" }, re = class e extends v {
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
}, Fi = { CONTAINS: "Contains", EQUALS: "Equals", NOT_EQUAL: "NotEqual", STARTS_WITH: "StartsWith" }, Gi = { RULES: "Rules", TOKEN: "Token" }, ae = class e extends v {
    name = "DeveloperUserAlreadyRegisteredException";
    $fault = "client";
    constructor(t) { super(s({ name: "DeveloperUserAlreadyRegisteredException", $fault: "client" }, t)), Object.setPrototypeOf(this, e.prototype); }
}, de = class e extends v {
    name = "ConcurrentModificationException";
    $fault = "client";
    constructor(t) { super(s({ name: "ConcurrentModificationException", $fault: "client" }, t)), Object.setPrototypeOf(this, e.prototype); }
}, Po = e => s(s({}, e), e.Logins && { Logins: D }), $n = e => s(s({}, e), e.SecretKey && { SecretKey: D }), bo = e => s(s({}, e), e.Credentials && { Credentials: $n(e.Credentials) }), Eo = e => s(s({}, e), e.Logins && { Logins: D }), _o = e => s(s({}, e), e.Logins && { Logins: D }), wo = e => s(s({}, e), e.Token && { Token: D }), Ao = e => s(s({}, e), e.Logins && { Logins: D }), Ro = e => s(s({}, e), e.Token && { Token: D }), Do = e => s(s({}, e), e.Logins && { Logins: D });
var ko = (e, t) => i(null, null, function* () { let n = g("CreateIdentityPool"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Lo = (e, t) => i(null, null, function* () { let n = g("DeleteIdentities"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), To = (e, t) => i(null, null, function* () { let n = g("DeleteIdentityPool"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), zo = (e, t) => i(null, null, function* () { let n = g("DescribeIdentity"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Oo = (e, t) => i(null, null, function* () { let n = g("DescribeIdentityPool"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Uo = (e, t) => i(null, null, function* () { let n = g("GetCredentialsForIdentity"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), $o = (e, t) => i(null, null, function* () { let n = g("GetId"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Fo = (e, t) => i(null, null, function* () { let n = g("GetIdentityPoolRoles"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Go = (e, t) => i(null, null, function* () { let n = g("GetOpenIdToken"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), No = (e, t) => i(null, null, function* () { let n = g("GetOpenIdTokenForDeveloperIdentity"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Ho = (e, t) => i(null, null, function* () { let n = g("GetPrincipalTagAttributeMap"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Mo = (e, t) => i(null, null, function* () { let n = g("ListIdentities"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Bo = (e, t) => i(null, null, function* () { let n = g("ListIdentityPools"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Wo = (e, t) => i(null, null, function* () { let n = g("ListTagsForResource"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Jo = (e, t) => i(null, null, function* () { let n = g("LookupDeveloperIdentity"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), jo = (e, t) => i(null, null, function* () { let n = g("MergeDeveloperIdentities"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), qo = (e, t) => i(null, null, function* () { let n = g("SetIdentityPoolRoles"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Ko = (e, t) => i(null, null, function* () { let n = g("SetPrincipalTagAttributeMap"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Vo = (e, t) => i(null, null, function* () { let n = g("TagResource"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Yo = (e, t) => i(null, null, function* () { let n = g("UnlinkDeveloperIdentity"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Zo = (e, t) => i(null, null, function* () { let n = g("UnlinkIdentity"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Xo = (e, t) => i(null, null, function* () { let n = g("UntagResource"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), Qo = (e, t) => i(null, null, function* () { let n = g("UpdateIdentityPool"), o; return o = JSON.stringify(a(e)), h(t, n, "/", void 0, o); }), en = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), tn = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), on = (e, t) => i(null, null, function* () { return e.statusCode >= 300 ? y(e, t) : (yield N(e.body, t), { $metadata: l(e) }); }), nn = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = bn(n, t), s({ $metadata: l(e) }, o); }), rn = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), sn = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = Yn(n, t), s({ $metadata: l(e) }, o); }), an = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), dn = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), mn = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), cn = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), pn = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), ln = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = Xn(n, t), s({ $metadata: l(e) }, o); }), un = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), fn = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), yn = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), hn = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), gn = (e, t) => i(null, null, function* () { return e.statusCode >= 300 ? y(e, t) : (yield N(e.body, t), { $metadata: l(e) }); }), xn = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), Cn = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), In = (e, t) => i(null, null, function* () { return e.statusCode >= 300 ? y(e, t) : (yield N(e.body, t), { $metadata: l(e) }); }), vn = (e, t) => i(null, null, function* () { return e.statusCode >= 300 ? y(e, t) : (yield N(e.body, t), { $metadata: l(e) }); }), Sn = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), Pn = (e, t) => i(null, null, function* () { if (e.statusCode >= 300)
    return y(e, t); let n = yield x(e.body, t), o = {}; return o = a(n), s({ $metadata: l(e) }, o); }), y = (e, t) => i(null, null, function* () { let n = q(s({}, e), { body: yield Nt(e.body, t) }), o = Ht(e, n.body); switch (o) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException": throw yield Hn(n, t);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException": throw yield Bn(n, t);
    case "LimitExceededException":
    case "com.amazonaws.cognitoidentity#LimitExceededException": throw yield Wn(n, t);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException": throw yield Jn(n, t);
    case "ResourceConflictException":
    case "com.amazonaws.cognitoidentity#ResourceConflictException": throw yield jn(n, t);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException": throw yield Kn(n, t);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException": throw yield qn(n, t);
    case "ExternalServiceException":
    case "com.amazonaws.cognitoidentity#ExternalServiceException": throw yield Nn(n, t);
    case "InvalidIdentityPoolConfigurationException":
    case "com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException": throw yield Mn(n, t);
    case "DeveloperUserAlreadyRegisteredException":
    case "com.amazonaws.cognitoidentity#DeveloperUserAlreadyRegisteredException": throw yield Gn(n, t);
    case "ConcurrentModificationException":
    case "com.amazonaws.cognitoidentity#ConcurrentModificationException": throw yield Fn(n, t);
    default:
        let r = n.body;
        return Qn({ output: e, parsedBody: r, errorCode: o });
} }), Fn = (e, t) => i(null, null, function* () { let n = e.body, o = a(n), r = new de(s({ $metadata: l(e) }, o)); return E(r, n); }), Gn = (e, t) => i(null, null, function* () { let n = e.body, o = a(n), r = new ae(s({ $metadata: l(e) }, o)); return E(r, n); }), Nn = (e, t) => i(null, null, function* () { let n = e.body, o = a(n), r = new ie(s({ $metadata: l(e) }, o)); return E(r, n); }), Hn = (e, t) => i(null, null, function* () { let n = e.body, o = a(n), r = new X(s({ $metadata: l(e) }, o)); return E(r, n); }), Mn = (e, t) => i(null, null, function* () { let n = e.body, o = a(n), r = new se(s({ $metadata: l(e) }, o)); return E(r, n); }), Bn = (e, t) => i(null, null, function* () { let n = e.body, o = a(n), r = new Q(s({ $metadata: l(e) }, o)); return E(r, n); }), Wn = (e, t) => i(null, null, function* () { let n = e.body, o = a(n), r = new ee(s({ $metadata: l(e) }, o)); return E(r, n); }), Jn = (e, t) => i(null, null, function* () { let n = e.body, o = a(n), r = new te(s({ $metadata: l(e) }, o)); return E(r, n); }), jn = (e, t) => i(null, null, function* () { let n = e.body, o = a(n), r = new oe(s({ $metadata: l(e) }, o)); return E(r, n); }), qn = (e, t) => i(null, null, function* () { let n = e.body, o = a(n), r = new re(s({ $metadata: l(e) }, o)); return E(r, n); }), Kn = (e, t) => i(null, null, function* () { let n = e.body, o = a(n), r = new ne(s({ $metadata: l(e) }, o)); return E(r, n); }), Vn = (e, t) => H(e, { AccessKeyId: L, Expiration: n => V(Y(K(n))), SecretKey: L, SessionToken: L }), Yn = (e, t) => H(e, { Credentials: n => Vn(n, t), IdentityId: L }), Zn = (e, t) => (e || []).filter(o => o != null).map(o => bn(o, t)), bn = (e, t) => H(e, { CreationDate: n => V(Y(K(n))), IdentityId: L, LastModifiedDate: n => V(Y(K(n))), Logins: a }), Xn = (e, t) => H(e, { Identities: n => Zn(n, t), IdentityPoolId: L, NextToken: L }), l = e => ({ httpStatusCode: e.statusCode, requestId: e.headers["x-amzn-requestid"] ?? e.headers["x-amzn-request-id"] ?? e.headers["x-amz-request-id"], extendedRequestId: e.headers["x-amz-id-2"], cfId: e.headers["x-amz-cf-id"] });
var Qn = gt(v), h = (e, t, n, o, r) => i(null, null, function* () { let { hostname: f, protocol: u = "https", port: R, path: I } = yield e.endpoint(), w = { protocol: u, hostname: f, port: R, method: "POST", path: I.endsWith("/") ? I.slice(0, -1) + n : I + n, headers: t }; return o !== void 0 && (w.hostname = o), r !== void 0 && (w.body = r), new Be(w); });
function g(e) { return { "content-type": "application/x-amz-json-1.1", "x-amz-target": `AWSCognitoIdentityService.${e}` }; }
var me = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "CreateIdentityPool", {}).n("CognitoIdentityClient", "CreateIdentityPoolCommand").f(void 0, void 0).ser(ko).de(en).build() {
};
var ce = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "DeleteIdentities", {}).n("CognitoIdentityClient", "DeleteIdentitiesCommand").f(void 0, void 0).ser(Lo).de(tn).build() {
};
var pe = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "DeleteIdentityPool", {}).n("CognitoIdentityClient", "DeleteIdentityPoolCommand").f(void 0, void 0).ser(To).de(on).build() {
};
var le = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "DescribeIdentity", {}).n("CognitoIdentityClient", "DescribeIdentityCommand").f(void 0, void 0).ser(zo).de(nn).build() {
};
var ue = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "DescribeIdentityPool", {}).n("CognitoIdentityClient", "DescribeIdentityPoolCommand").f(void 0, void 0).ser(Oo).de(rn).build() {
};
var fe = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "GetCredentialsForIdentity", {}).n("CognitoIdentityClient", "GetCredentialsForIdentityCommand").f(Po, bo).ser(Uo).de(sn).build() {
};
var ye = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "GetId", {}).n("CognitoIdentityClient", "GetIdCommand").f(Eo, void 0).ser($o).de(an).build() {
};
var he = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "GetIdentityPoolRoles", {}).n("CognitoIdentityClient", "GetIdentityPoolRolesCommand").f(void 0, void 0).ser(Fo).de(dn).build() {
};
var ge = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "GetOpenIdToken", {}).n("CognitoIdentityClient", "GetOpenIdTokenCommand").f(_o, wo).ser(Go).de(mn).build() {
};
var xe = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "GetOpenIdTokenForDeveloperIdentity", {}).n("CognitoIdentityClient", "GetOpenIdTokenForDeveloperIdentityCommand").f(Ao, Ro).ser(No).de(cn).build() {
};
var Ce = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "GetPrincipalTagAttributeMap", {}).n("CognitoIdentityClient", "GetPrincipalTagAttributeMapCommand").f(void 0, void 0).ser(Ho).de(pn).build() {
};
var Ie = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "ListIdentities", {}).n("CognitoIdentityClient", "ListIdentitiesCommand").f(void 0, void 0).ser(Mo).de(ln).build() {
};
var F = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "ListIdentityPools", {}).n("CognitoIdentityClient", "ListIdentityPoolsCommand").f(void 0, void 0).ser(Bo).de(un).build() {
};
var ve = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "ListTagsForResource", {}).n("CognitoIdentityClient", "ListTagsForResourceCommand").f(void 0, void 0).ser(Wo).de(fn).build() {
};
var Se = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "LookupDeveloperIdentity", {}).n("CognitoIdentityClient", "LookupDeveloperIdentityCommand").f(void 0, void 0).ser(Jo).de(yn).build() {
};
var Pe = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "MergeDeveloperIdentities", {}).n("CognitoIdentityClient", "MergeDeveloperIdentitiesCommand").f(void 0, void 0).ser(jo).de(hn).build() {
};
var be = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "SetIdentityPoolRoles", {}).n("CognitoIdentityClient", "SetIdentityPoolRolesCommand").f(void 0, void 0).ser(qo).de(gn).build() {
};
var Ee = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "SetPrincipalTagAttributeMap", {}).n("CognitoIdentityClient", "SetPrincipalTagAttributeMapCommand").f(void 0, void 0).ser(Ko).de(xn).build() {
};
var _e = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "TagResource", {}).n("CognitoIdentityClient", "TagResourceCommand").f(void 0, void 0).ser(Vo).de(Cn).build() {
};
var we = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "UnlinkDeveloperIdentity", {}).n("CognitoIdentityClient", "UnlinkDeveloperIdentityCommand").f(void 0, void 0).ser(Yo).de(In).build() {
};
var Ae = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "UnlinkIdentity", {}).n("CognitoIdentityClient", "UnlinkIdentityCommand").f(Do, void 0).ser(Zo).de(vn).build() {
};
var Re = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "UntagResource", {}).n("CognitoIdentityClient", "UntagResourceCommand").f(void 0, void 0).ser(Xo).de(Sn).build() {
};
var De = class extends m.classBuilder().ep(p).m(function (t, n, o, r) { return [d(o, this.serialize, this.deserialize), c(o, t.getEndpointParameterInstructions())]; }).s("AWSCognitoIdentityService", "UpdateIdentityPool", {}).n("CognitoIdentityClient", "UpdateIdentityPoolCommand").f(void 0, void 0).ser(Qo).de(Pn).build() {
};
var er = { CreateIdentityPoolCommand: me, DeleteIdentitiesCommand: ce, DeleteIdentityPoolCommand: pe, DescribeIdentityCommand: le, DescribeIdentityPoolCommand: ue, GetCredentialsForIdentityCommand: fe, GetIdCommand: ye, GetIdentityPoolRolesCommand: he, GetOpenIdTokenCommand: ge, GetOpenIdTokenForDeveloperIdentityCommand: xe, GetPrincipalTagAttributeMapCommand: Ce, ListIdentitiesCommand: Ie, ListIdentityPoolsCommand: F, ListTagsForResourceCommand: ve, LookupDeveloperIdentityCommand: Se, MergeDeveloperIdentitiesCommand: Pe, SetIdentityPoolRolesCommand: be, SetPrincipalTagAttributeMapCommand: Ee, TagResourceCommand: _e, UnlinkDeveloperIdentityCommand: we, UnlinkIdentityCommand: Ae, UntagResourceCommand: Re, UpdateIdentityPoolCommand: De }, Ge = class extends $ {
};
yt(er, Ge);
var im = Ye($, F, "NextToken", "NextToken", "MaxResults");
export { m as $Command, Ui as AmbiguousRoleResolutionType, Ge as CognitoIdentity, $ as CognitoIdentityClient, v as CognitoIdentityServiceException, de as ConcurrentModificationException, me as CreateIdentityPoolCommand, $n as CredentialsFilterSensitiveLog, ce as DeleteIdentitiesCommand, pe as DeleteIdentityPoolCommand, le as DescribeIdentityCommand, ue as DescribeIdentityPoolCommand, ae as DeveloperUserAlreadyRegisteredException, $i as ErrorCode, ie as ExternalServiceException, fe as GetCredentialsForIdentityCommand, Po as GetCredentialsForIdentityInputFilterSensitiveLog, bo as GetCredentialsForIdentityResponseFilterSensitiveLog, ye as GetIdCommand, Eo as GetIdInputFilterSensitiveLog, he as GetIdentityPoolRolesCommand, ge as GetOpenIdTokenCommand, xe as GetOpenIdTokenForDeveloperIdentityCommand, Ao as GetOpenIdTokenForDeveloperIdentityInputFilterSensitiveLog, Ro as GetOpenIdTokenForDeveloperIdentityResponseFilterSensitiveLog, _o as GetOpenIdTokenInputFilterSensitiveLog, wo as GetOpenIdTokenResponseFilterSensitiveLog, Ce as GetPrincipalTagAttributeMapCommand, X as InternalErrorException, se as InvalidIdentityPoolConfigurationException, Q as InvalidParameterException, ee as LimitExceededException, Ie as ListIdentitiesCommand, F as ListIdentityPoolsCommand, ve as ListTagsForResourceCommand, Se as LookupDeveloperIdentityCommand, Fi as MappingRuleMatchType, Pe as MergeDeveloperIdentitiesCommand, te as NotAuthorizedException, oe as ResourceConflictException, re as ResourceNotFoundException, Gi as RoleMappingType, be as SetIdentityPoolRolesCommand, Ee as SetPrincipalTagAttributeMapCommand, _e as TagResourceCommand, ne as TooManyRequestsException, we as UnlinkDeveloperIdentityCommand, Ae as UnlinkIdentityCommand, Do as UnlinkIdentityInputFilterSensitiveLog, Re as UntagResourceCommand, De as UpdateIdentityPoolCommand, ft as __Client, im as paginateListIdentityPools };
//# sourceMappingURL=_aws_sdk_client_cognito_identity.J3ZdqNXCeE.js.map
