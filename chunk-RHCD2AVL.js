import { a as $ } from "@nf-internal/chunk-QPPNTWLE";
import { a as ee } from "@nf-internal/chunk-OKDO625G";
import { a as He, c as It, d as Nt, e as Ot } from "@nf-internal/chunk-Z75LNJIL";
import { a as h, b as S, d as he, k as f, l as _t, m as Ct } from "@nf-internal/chunk-GL2BOVXA";
var q = (e, t) => { let r = []; if (e && r.push(e), t)
    for (let n of t)
        r.push(n); return r; }, F = (e, t) => `${e || "anonymous"}${t && t.length > 0 ? ` (a.k.a. ${t.join(",")})` : ""}`, W = () => { let e = [], t = [], r = !1, n = new Set, o = d => d.sort((l, m) => Dt[m.step] - Dt[l.step] || Pt[m.priority || "normal"] - Pt[l.priority || "normal"]), s = d => { let l = !1, m = y => { let w = q(y.name, y.aliases); if (w.includes(d)) {
    l = !0;
    for (let g of w)
        n.delete(g);
    return !1;
} return !0; }; return e = e.filter(m), t = t.filter(m), l; }, i = d => { let l = !1, m = y => { if (y.middleware === d) {
    l = !0;
    for (let w of q(y.name, y.aliases))
        n.delete(w);
    return !1;
} return !0; }; return e = e.filter(m), t = t.filter(m), l; }, a = d => (e.forEach(l => { d.add(l.middleware, h({}, l)); }), t.forEach(l => { d.addRelativeTo(l.middleware, h({}, l)); }), d.identifyOnResolve?.(p.identifyOnResolve()), d), u = d => { let l = []; return d.before.forEach(m => { m.before.length === 0 && m.after.length === 0 ? l.push(m) : l.push(...u(m)); }), l.push(d), d.after.reverse().forEach(m => { m.before.length === 0 && m.after.length === 0 ? l.push(m) : l.push(...u(m)); }), l; }, c = (d = !1) => { let l = [], m = [], y = {}; return e.forEach(g => { let E = S(h({}, g), { before: [], after: [] }); for (let x of q(E.name, E.aliases))
    y[x] = E; l.push(E); }), t.forEach(g => { let E = S(h({}, g), { before: [], after: [] }); for (let x of q(E.name, E.aliases))
    y[x] = E; m.push(E); }), m.forEach(g => { if (g.toMiddleware) {
    let E = y[g.toMiddleware];
    if (E === void 0) {
        if (d)
            return;
        throw new Error(`${g.toMiddleware} is not found when adding ${F(g.name, g.aliases)} middleware ${g.relation} ${g.toMiddleware}`);
    }
    g.relation === "after" && E.after.push(g), g.relation === "before" && E.before.push(g);
} }), o(l).map(u).reduce((g, E) => (g.push(...E), g), []); }, p = { add: (d, l = {}) => { let { name: m, override: y, aliases: w } = l, g = h({ step: "initialize", priority: "normal", middleware: d }, l), E = q(m, w); if (E.length > 0) {
        if (E.some(x => n.has(x))) {
            if (!y)
                throw new Error(`Duplicate middleware name '${F(m, w)}'`);
            for (let x of E) {
                let R = e.findIndex(C => C.name === x || C.aliases?.some(P => P === x));
                if (R === -1)
                    continue;
                let b = e[R];
                if (b.step !== g.step || g.priority !== b.priority)
                    throw new Error(`"${F(b.name, b.aliases)}" middleware with ${b.priority} priority in ${b.step} step cannot be overridden by "${F(m, w)}" middleware with ${g.priority} priority in ${g.step} step.`);
                e.splice(R, 1);
            }
        }
        for (let x of E)
            n.add(x);
    } e.push(g); }, addRelativeTo: (d, l) => { let { name: m, override: y, aliases: w } = l, g = h({ middleware: d }, l), E = q(m, w); if (E.length > 0) {
        if (E.some(x => n.has(x))) {
            if (!y)
                throw new Error(`Duplicate middleware name '${F(m, w)}'`);
            for (let x of E) {
                let R = t.findIndex(C => C.name === x || C.aliases?.some(P => P === x));
                if (R === -1)
                    continue;
                let b = t[R];
                if (b.toMiddleware !== g.toMiddleware || b.relation !== g.relation)
                    throw new Error(`"${F(b.name, b.aliases)}" middleware ${b.relation} "${b.toMiddleware}" middleware cannot be overridden by "${F(m, w)}" middleware ${g.relation} "${g.toMiddleware}" middleware.`);
                t.splice(R, 1);
            }
        }
        for (let x of E)
            n.add(x);
    } t.push(g); }, clone: () => a(W()), use: d => { d.applyToStack(p); }, remove: d => typeof d == "string" ? s(d) : i(d), removeByTag: d => { let l = !1, m = y => { let { tags: w, name: g, aliases: E } = y; if (w && w.includes(d)) {
        let x = q(g, E);
        for (let R of x)
            n.delete(R);
        return l = !0, !1;
    } return !0; }; return e = e.filter(m), t = t.filter(m), l; }, concat: d => { let l = a(W()); return l.use(d), l.identifyOnResolve(r || l.identifyOnResolve() || (d.identifyOnResolve?.() ?? !1)), l; }, applyToStack: a, identify: () => c(!0).map(d => { let l = d.step ?? d.relation + " " + d.toMiddleware; return F(d.name, d.aliases) + " - " + l; }), identifyOnResolve(d) { return typeof d == "boolean" && (r = d), r; }, resolve: (d, l) => { for (let m of c().map(y => y.middleware).reverse())
        d = m(d, l); return r && console.log(p.identify()), d; } }; return p; }, Dt = { initialize: 5, serialize: 4, build: 3, finalizeRequest: 2, deserialize: 1 }, Pt = { high: 3, normal: 2, low: 1 };
var Mt = class {
    config;
    middlewareStack = W();
    initConfig;
    handlers;
    constructor(t) { this.config = t; }
    send(t, r, n) { let o = typeof r != "function" ? r : void 0, s = typeof r == "function" ? r : n, i = o === void 0 && this.config.cacheMiddleware === !0, a; if (i) {
        this.handlers || (this.handlers = new WeakMap);
        let u = this.handlers;
        u.has(t.constructor) ? a = u.get(t.constructor) : (a = t.resolveMiddleware(this.middlewareStack, this.config, o), u.set(t.constructor, a));
    }
    else
        delete this.handlers, a = t.resolveMiddleware(this.middlewareStack, this.config, o); if (s)
        a(t).then(u => s(null, u.output), u => s(u)).catch(() => { });
    else
        return a(t).then(u => u.output); }
    destroy() { this.config?.requestHandler?.destroy?.(), delete this.handlers; }
};
var te = (function (e) { return e.HTTP = "http", e.HTTPS = "https", e; })(te || {});
var re = (function (e) { return e.MD5 = "md5", e.CRC32 = "crc32", e.CRC32C = "crc32c", e.SHA1 = "sha1", e.SHA256 = "sha256", e; })(re || {});
var ge = e => typeof e == "function" ? e() : e;
var Ts = e => ({ setHttpHandler(t) { e.httpHandler = t; }, httpHandler() { return e.httpHandler; }, updateHttpClientConfig(t, r) { e.httpHandler?.updateHttpClientConfig(t, r); }, httpHandlerConfigs() { return e.httpHandler.httpHandlerConfigs(); } }), As = e => ({ httpHandler: e.httpHandler() });
var A = class e {
    method;
    protocol;
    hostname;
    port;
    path;
    query;
    headers;
    username;
    password;
    fragment;
    body;
    constructor(t) { this.method = t.method || "GET", this.hostname = t.hostname || "localhost", this.port = t.port, this.query = t.query || {}, this.headers = t.headers || {}, this.body = t.body, this.protocol = t.protocol ? t.protocol.slice(-1) !== ":" ? `${t.protocol}:` : t.protocol : "https:", this.path = t.path ? t.path.charAt(0) !== "/" ? `/${t.path}` : t.path : "/", this.username = t.username, this.password = t.password, this.fragment = t.fragment; }
    static clone(t) { let r = new e(S(h({}, t), { headers: h({}, t.headers) })); return r.query && (r.query = Bn(r.query)), r; }
    static isInstance(t) { if (!t)
        return !1; let r = t; return "method" in r && "protocol" in r && "hostname" in r && "path" in r && typeof r.query == "object" && typeof r.headers == "object"; }
    clone() { return e.clone(this); }
};
function Bn(e) { return Object.keys(e).reduce((t, r) => { let n = e[r]; return S(h({}, t), { [r]: Array.isArray(n) ? [...n] : n }); }, {}); }
var O = class {
    statusCode;
    reason;
    headers;
    body;
    constructor(t) { this.statusCode = t.statusCode, this.reason = t.reason, this.headers = t.headers || {}, this.body = t.body; }
    static isInstance(t) { if (!t)
        return !1; let r = t; return typeof r.statusCode == "number" && typeof r.headers == "object"; }
};
var Y = e => e[ee] || (e[ee] = {});
var M = e => { if (typeof e == "function")
    return e; let t = Promise.resolve(e); return () => t; };
function ne(e) { if (typeof e == "object")
    return e; e = e | 0; let t = {}, r = 0; for (let n of ["httpLabel", "idempotent", "idempotencyToken", "sensitive", "httpPayload", "httpResponseCode", "httpQueryParams"])
    (e >> r++ & 1) === 1 && (t[n] = 1); return t; }
var ye = (() => { class e {
    ref;
    memberName;
    static symbol = Symbol.for("@smithy/nor");
    symbol = e.symbol;
    name;
    schema;
    _isMemberSchema;
    traits;
    memberTraits;
    normalizedTraits;
    constructor(r, n) { this.ref = r, this.memberName = n; let o = [], s = r, i = r; for (this._isMemberSchema = !1; Be(s);)
        o.push(s[1]), s = s[0], i = ge(s), this._isMemberSchema = !0; if (o.length > 0) {
        this.memberTraits = {};
        for (let a = o.length - 1; a >= 0; --a) {
            let u = o[a];
            Object.assign(this.memberTraits, ne(u));
        }
    }
    else
        this.memberTraits = 0; if (i instanceof e) {
        let a = this.memberTraits;
        Object.assign(this, i), this.memberTraits = Object.assign({}, a, i.getMemberTraits(), this.getMemberTraits()), this.normalizedTraits = void 0, this.memberName = n ?? i.memberName;
        return;
    } if (this.schema = ge(i), jn(this.schema) ? (this.name = `${this.schema[1]}#${this.schema[2]}`, this.traits = this.schema[3]) : (this.name = this.memberName ?? String(i), this.traits = 0), this._isMemberSchema && !n)
        throw new Error(`@smithy/core/schema - NormalizedSchema member init ${this.getName(!0)} missing member name.`); }
    static [Symbol.hasInstance](r) { let n = this.prototype.isPrototypeOf(r); return !n && typeof r == "object" && r !== null ? r.symbol === this.symbol : n; }
    static of(r) { let n = ge(r); if (n instanceof e)
        return n; if (Be(n)) {
        let [o, s] = n;
        if (o instanceof e)
            return Object.assign(o.getMergedTraits(), ne(s)), o;
        throw new Error(`@smithy/core/schema - may not init unwrapped member schema=${JSON.stringify(r, null, 2)}.`);
    } return new e(n); }
    getSchema() { let r = this.schema; return r[0] === 0 ? r[4] : r; }
    getName(r = !1) { let { name: n } = this; return !r && n && n.includes("#") ? n.split("#")[1] : n || void 0; }
    getMemberName() { return this.memberName; }
    isMemberSchema() { return this._isMemberSchema; }
    isListSchema() { let r = this.getSchema(); return typeof r == "number" ? r >= 64 && r < 128 : r[0] === 1; }
    isMapSchema() { let r = this.getSchema(); return typeof r == "number" ? r >= 128 && r <= 255 : r[0] === 2; }
    isStructSchema() { let r = this.getSchema(); return r[0] === 3 || r[0] === -3; }
    isBlobSchema() { let r = this.getSchema(); return r === 21 || r === 42; }
    isTimestampSchema() { let r = this.getSchema(); return typeof r == "number" && r >= 4 && r <= 7; }
    isUnitSchema() { return this.getSchema() === "unit"; }
    isDocumentSchema() { return this.getSchema() === 15; }
    isStringSchema() { return this.getSchema() === 0; }
    isBooleanSchema() { return this.getSchema() === 2; }
    isNumericSchema() { return this.getSchema() === 1; }
    isBigIntegerSchema() { return this.getSchema() === 17; }
    isBigDecimalSchema() { return this.getSchema() === 19; }
    isStreaming() { let { streaming: r } = this.getMergedTraits(); return !!r || this.getSchema() === 42; }
    isIdempotencyToken() { let r = i => (i & 4) === 4 || !!i?.idempotencyToken, { normalizedTraits: n, traits: o, memberTraits: s } = this; return r(n) || r(o) || r(s); }
    getMergedTraits() { return this.normalizedTraits ?? (this.normalizedTraits = h(h({}, this.getOwnTraits()), this.getMemberTraits())); }
    getMemberTraits() { return ne(this.memberTraits); }
    getOwnTraits() { return ne(this.traits); }
    getKeySchema() { let [r, n] = [this.isDocumentSchema(), this.isMapSchema()]; if (!r && !n)
        throw new Error(`@smithy/core/schema - cannot get key for non-map: ${this.getName(!0)}`); let o = this.getSchema(), s = r ? 15 : o[4] ?? 0; return oe([s, 0], "key"); }
    getValueSchema() { let r = this.getSchema(), [n, o, s] = [this.isDocumentSchema(), this.isMapSchema(), this.isListSchema()], i = typeof r == "number" ? 63 & r : r && typeof r == "object" && (o || s) ? r[3 + r[0]] : n ? 15 : void 0; if (i != null)
        return oe([i, 0], o ? "value" : "member"); throw new Error(`@smithy/core/schema - ${this.getName(!0)} has no value member.`); }
    getMemberSchema(r) { let n = this.getSchema(); if (this.isStructSchema() && n[4].includes(r)) {
        let o = n[4].indexOf(r), s = n[5][o];
        return oe(Be(s) ? s : [s, 0], r);
    } if (this.isDocumentSchema())
        return oe([15, 0], r); throw new Error(`@smithy/core/schema - ${this.getName(!0)} has no no member=${r}.`); }
    getMemberSchemas() { let r = {}; try {
        for (let [n, o] of this.structIterator())
            r[n] = o;
    }
    catch { } return r; }
    getEventStreamMember() { if (this.isStructSchema()) {
        for (let [r, n] of this.structIterator())
            if (n.isStreaming() && n.isStructSchema())
                return r;
    } return ""; }
    *structIterator() { if (this.isUnitSchema())
        return; if (!this.isStructSchema())
        throw new Error("@smithy/core/schema - cannot iterate non-struct schema."); let r = this.getSchema(); for (let n = 0; n < r[4].length; ++n)
        yield [r[4][n], oe([r[5][n], 0], r[4][n])]; }
} return e; })();
function oe(e, t) { if (e instanceof ye)
    return Object.assign(e, { memberName: t, _isMemberSchema: !0 }); let r = ye; return new r(e, t); }
var Be = e => Array.isArray(e) && e.length === 2, jn = e => Array.isArray(e) && e.length >= 5;
var je = "***SensitiveInformation***";
function Ee(e, t) { if (t == null)
    return t; let r = ye.of(e); if (r.getMergedTraits().sensitive)
    return je; if (r.isListSchema()) {
    if (!!r.getValueSchema().getMergedTraits().sensitive)
        return je;
}
else if (r.isMapSchema()) {
    if (!!r.getKeySchema().getMergedTraits().sensitive || !!r.getValueSchema().getMergedTraits().sensitive)
        return je;
}
else if (r.isStructSchema() && typeof t == "object") {
    let n = t, o = {};
    for (let [s, i] of r.structIterator())
        n[s] != null && (o[s] = Ee(i, n[s]));
    return o;
} return t; }
var qe = class {
    middlewareStack = W();
    schema;
    static classBuilder() { return new ze; }
    resolveMiddlewareWithContext(t, r, n, { middlewareFn: o, clientName: s, commandName: i, inputFilterSensitiveLog: a, outputFilterSensitiveLog: u, smithyContext: c, additionalContext: p, CommandCtor: d }) { for (let g of o.bind(this)(d, t, r, n))
        this.middlewareStack.use(g); let l = t.concat(this.middlewareStack), { logger: m } = r, y = h({ logger: m, clientName: s, commandName: i, inputFilterSensitiveLog: a, outputFilterSensitiveLog: u, [ee]: h({ commandInstance: this }, c) }, p), { requestHandler: w } = r; return l.resolve(g => w.handle(g.request, n || {}), y); }
}, ze = class {
    _init = () => { };
    _ep = {};
    _middlewareFn = () => [];
    _commandName = "";
    _clientName = "";
    _additionalContext = {};
    _smithyContext = {};
    _inputFilterSensitiveLog = void 0;
    _outputFilterSensitiveLog = void 0;
    _serializer = null;
    _deserializer = null;
    _operationSchema;
    init(t) { this._init = t; }
    ep(t) { return this._ep = t, this; }
    m(t) { return this._middlewareFn = t, this; }
    s(t, r, n = {}) { return this._smithyContext = h({ service: t, operation: r }, n), this; }
    c(t = {}) { return this._additionalContext = t, this; }
    n(t, r) { return this._clientName = t, this._commandName = r, this; }
    f(t = n => n, r = n => n) { return this._inputFilterSensitiveLog = t, this._outputFilterSensitiveLog = r, this; }
    ser(t) { return this._serializer = t, this; }
    de(t) { return this._deserializer = t, this; }
    sc(t) { return this._operationSchema = t, this._smithyContext.operationSchema = t, this; }
    build() { let t = this, r; return r = class extends qe {
        input;
        static getEndpointParameterInstructions() { return t._ep; }
        constructor(...[n]) { super(), this.input = n ?? {}, t._init(this), this.schema = t._operationSchema; }
        resolveMiddleware(n, o, s) { let i = t._operationSchema, a = i?.[4] ?? i?.input, u = i?.[5] ?? i?.output; return this.resolveMiddlewareWithContext(n, o, s, { CommandCtor: r, middlewareFn: t._middlewareFn, clientName: t._clientName, commandName: t._commandName, inputFilterSensitiveLog: t._inputFilterSensitiveLog ?? (i ? Ee.bind(null, a) : c => c), outputFilterSensitiveLog: t._outputFilterSensitiveLog ?? (i ? Ee.bind(null, u) : c => c), smithyContext: t._smithyContext, additionalContext: t._additionalContext }); }
        serialize = t._serializer;
        deserialize = t._deserializer;
    }; }
};
var qn = e => t => r => f(null, null, function* () { if (!A.isInstance(r.request))
    return t(r); let { request: n } = r, { handlerProtocol: o = "" } = e.requestHandler.metadata || {}; if (o.indexOf("h2") >= 0 && !n.headers[":authority"])
    delete n.headers.host, n.headers[":authority"] = n.hostname + (n.port ? ":" + n.port : "");
else if (!n.headers.host) {
    let s = n.hostname;
    n.port != null && (s += `:${n.port}`), n.headers.host = s;
} return t(r); }), zn = { name: "hostHeaderMiddleware", step: "build", priority: "low", tags: ["HOST"], override: !0 }, Vs = e => ({ applyToStack: t => { t.add(qn(e), zn); } });
var Gn = () => (e, t) => r => f(null, null, function* () { try {
    let o = yield e(r), { clientName: s, commandName: i, logger: a, dynamoDbDocumentClientOptions: u = {} } = t, { overrideInputFilterSensitiveLog: c, overrideOutputFilterSensitiveLog: p } = u, d = c ?? t.inputFilterSensitiveLog, l = p ?? t.outputFilterSensitiveLog, n = o.output, { $metadata: m } = n, y = he(n, ["$metadata"]);
    return a?.info?.({ clientName: s, commandName: i, input: d(r.input), output: l(y), metadata: m }), o;
}
catch (o) {
    let { clientName: s, commandName: i, logger: a, dynamoDbDocumentClientOptions: u = {} } = t, { overrideInputFilterSensitiveLog: c } = u, p = c ?? t.inputFilterSensitiveLog;
    throw a?.error?.({ clientName: s, commandName: i, input: p(r.input), error: o, metadata: o.$metadata }), o;
} }), Vn = { name: "loggerMiddleware", tags: ["LOGGER"], step: "initialize", override: !0 }, Xs = e => ({ applyToStack: t => { t.add(Gn(), Vn); } });
var vt = { step: "build", tags: ["RECURSION_DETECTION"], name: "recursionDetectionMiddleware", override: !0, priority: "low" };
var $t = () => e => t => f(null, null, function* () { return e(t); });
var ni = e => ({ applyToStack: t => { t.add($t(), vt); } });
var kt = (e, t) => { if (!t || t.length === 0)
    return e; let r = []; for (let n of t)
    for (let o of e)
        o.schemeId.split("#")[1] === n && r.push(o); for (let n of e)
    r.find(({ schemeId: o }) => o === n.schemeId) || r.push(n); return r; };
function Wn(e) { let t = new Map; for (let r of e)
    t.set(r.schemeId, r); return t; }
var Ut = (e, t) => (r, n) => o => f(null, null, function* () {
    let s = e.httpAuthSchemeProvider(yield t.httpAuthSchemeParametersProvider(e, n, o.input)), i = e.authSchemePreference ? yield e.authSchemePreference() : [], a = kt(s, i), u = Wn(e.httpAuthSchemes), c = Y(n), p = [];
    for (let d of a) {
        let l = u.get(d.schemeId);
        if (!l) {
            p.push(`HttpAuthScheme \`${d.schemeId}\` was not enabled for this service.`);
            continue;
        }
        let m = l.identityProvider(yield t.identityProviderConfigProvider(e));
        if (!m) {
            p.push(`HttpAuthScheme \`${d.schemeId}\` did not have an IdentityProvider configured.`);
            continue;
        }
        let { identityProperties: y = {}, signingProperties: w = {} } = d.propertiesExtractor?.(e, n) || {};
        d.identityProperties = Object.assign(d.identityProperties || {}, y), d.signingProperties = Object.assign(d.signingProperties || {}, w), c.selectedHttpAuthScheme = { httpAuthOption: d, identity: yield m(d.identityProperties), signer: l.signer };
        break;
    }
    if (!c.selectedHttpAuthScheme)
        throw new Error(p.join(`
`));
    return r(o);
});
var Yn = { step: "serialize", tags: ["HTTP_AUTH_SCHEME"], name: "httpAuthSchemeMiddleware", override: !0, relation: "before", toMiddleware: "endpointV2Middleware" }, fi = (e, { httpAuthSchemeParametersProvider: t, identityProviderConfigProvider: r }) => ({ applyToStack: n => { n.addRelativeTo(Ut(e, { httpAuthSchemeParametersProvider: t, identityProviderConfigProvider: r }), Yn); } });
var Lt = (e, t) => (r, n) => o => f(null, null, function* () {
    let { response: s } = yield r(o);
    try {
        let i = yield t(s, e);
        return { response: s, output: i };
    }
    catch (i) {
        if (Object.defineProperty(i, "$response", { value: s }), !("$metadata" in i)) {
            let a = "Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.";
            try {
                i.message += `
  ` + a;
            }
            catch {
                !n.logger || n.logger?.constructor?.name === "NoOpLogger" ? console.warn(a) : n.logger?.warn?.(a);
            }
            typeof i.$responseBodyText < "u" && i.$response && (i.$response.body = i.$responseBodyText);
            try {
                if (O.isInstance(s)) {
                    let { headers: u = {} } = s, c = Object.entries(u);
                    i.$metadata = { httpStatusCode: s.statusCode, requestId: Ge(/^x-[\w-]+-request-?id$/, c), extendedRequestId: Ge(/^x-[\w-]+-id-2$/, c), cfId: Ge(/^x-[\w-]+-cf-id$/, c) };
                }
            }
            catch { }
        }
        throw i;
    }
}), Ge = (e, t) => (t.find(([r]) => r.match(e)) || [void 0, void 0])[1];
var Ft = (e, t) => (r, n) => o => f(null, null, function* () { let s = e, i = n.endpointV2?.url && s.urlParser ? () => f(null, null, function* () { return s.urlParser(n.endpointV2.url); }) : s.endpoint; if (!i)
    throw new Error("No valid endpoint provider available."); let a = yield t(o.input, S(h({}, e), { endpoint: i })); return r(S(h({}, o), { request: a })); });
var Xn = { name: "deserializerMiddleware", step: "deserialize", tags: ["DESERIALIZER"], override: !0 }, Ve = { name: "serializerMiddleware", step: "serialize", tags: ["SERIALIZER"], override: !0 };
function Si(e, t, r) { return { applyToStack: n => { n.add(Lt(e, r), Xn), n.add(Ft(e, t), Ve); } }; }
var Kn = e => t => { throw t; }, Qn = (e, t) => { }, Ht = e => (t, r) => n => f(null, null, function* () { if (!A.isInstance(n.request))
    return t(n); let s = Y(r).selectedHttpAuthScheme; if (!s)
    throw new Error("No HttpAuthScheme was selected: unable to sign request"); let { httpAuthOption: { signingProperties: i = {} }, identity: a, signer: u } = s, c = yield t(S(h({}, n), { request: yield u.sign(n.request, a, i) })).catch((u.errorHandler || Kn)(i)); return (u.successHandler || Qn)(c.response, i), c; });
var Jn = { step: "finalizeRequest", tags: ["HTTP_SIGNING"], name: "httpSigningMiddleware", aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"], override: !0, relation: "after", toMiddleware: "retryMiddleware" }, Ci = e => ({ applyToStack: t => { t.addRelativeTo(Ht(e), Jn); } });
var Zn = (e, t, r, n = s => s, ...o) => f(null, null, function* () { let s = new e(r); return s = n(s) ?? s, yield t.send(s, ...o); });
function eo(e, t, r, n, o) { return function (i, a, ...u) { return Ct(this, null, function* () { let c = a, p = i.startingToken ?? c[r], d = !0, l; for (; d;) {
    if (c[r] = p, o && (c[o] = c[o] ?? i.pageSize), i.client instanceof e)
        l = yield new _t(Zn(t, i.client, a, i.withCommand, ...u));
    else
        throw new Error(`Invalid client, expected instance of ${e.name}`);
    yield l;
    let m = p;
    p = to(l, n), d = !!(p && (!i.stopOnSameToken || p !== m));
} return void 0; }); }; }
var to = (e, t) => { let r = e, n = t.split("."); for (let o of n) {
    if (!r || typeof r != "object")
        return;
    r = r[o];
} return r; };
var Bt = class {
    authSchemes = new Map;
    constructor(t) { for (let [r, n] of Object.entries(t))
        n !== void 0 && this.authSchemes.set(r, n); }
    getIdentityProvider(t) { return this.authSchemes.get(t); }
};
var k = e => { if (typeof e == "function")
    return e; let t = Promise.resolve(e); return () => t; };
var jt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", We = Object.entries(jt).reduce((e, [t, r]) => (e[r] = Number(t), e), {}), qt = jt.split(""), H = 6, z = 8, zt = 63;
var we = e => { let t = e.length / 4 * 3; e.slice(-2) === "==" ? t -= 2 : e.slice(-1) === "=" && t--; let r = new ArrayBuffer(t), n = new DataView(r); for (let o = 0; o < e.length; o += 4) {
    let s = 0, i = 0;
    for (let c = o, p = o + 3; c <= p; c++)
        if (e[c] !== "=") {
            if (!(e[c] in We))
                throw new TypeError(`Invalid character ${e[c]} in base64 string.`);
            s |= We[e[c]] << (p - c) * H, i += H;
        }
        else
            s >>= H;
    let a = o / 4 * 3;
    s >>= i % z;
    let u = Math.floor(i / z);
    for (let c = 0; c < u; c++) {
        let p = (u - c - 1) * z;
        n.setUint8(a + c, (s & 255 << p) >> p);
    }
} return new Uint8Array(r); };
var U = e => typeof e == "string" ? $(e) : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT) : new Uint8Array(e);
var Se = e => { if (typeof e == "string")
    return e; if (typeof e != "object" || typeof e.byteOffset != "number" || typeof e.byteLength != "number")
    throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array."); return new TextDecoder("utf-8").decode(e); };
function Gt(e) { let t; typeof e == "string" ? t = $(e) : t = e; let r = typeof t == "object" && typeof t.length == "number", n = typeof t == "object" && typeof t.byteOffset == "number" && typeof t.byteLength == "number"; if (!r && !n)
    throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array."); let o = ""; for (let s = 0; s < t.length; s += 3) {
    let i = 0, a = 0;
    for (let c = s, p = Math.min(s + 3, t.length); c < p; c++)
        i |= t[c] << (p - c - 1) * z, a += z;
    let u = Math.ceil(a / H);
    i <<= u * H - a;
    for (let c = 1; c <= u; c++) {
        let p = (u - c) * H;
        o += qt[(i & zt << p) >> p];
    }
    o += "==".slice(0, 4 - u);
} return o; }
var X = class e extends Uint8Array {
    static fromString(t, r = "utf-8") { if (typeof t == "string")
        return r === "base64" ? e.mutate(we(t)) : e.mutate($(t)); throw new Error(`Unsupported conversion from ${typeof t} to Uint8ArrayBlobAdapter.`); }
    static mutate(t) { return Object.setPrototypeOf(t, e.prototype), t; }
    transformToString(t = "utf-8") { return t === "base64" ? Gt(this) : Se(this); }
};
var v = e => encodeURIComponent(e).replace(/[!'()*]/g, ro), ro = e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`;
function Vt(e) { let t = []; for (let r of Object.keys(e).sort()) {
    let n = e[r];
    if (r = v(r), Array.isArray(n))
        for (let o = 0, s = n.length; o < s; o++)
            t.push(`${r}=${v(n[o])}`);
    else {
        let o = r;
        (n || typeof n == "string") && (o += `=${v(n)}`), t.push(o);
    }
} return t.join("&"); }
function Ye(e, t) { return new Request(e, t); }
function Wt(e = 0) { return new Promise((t, r) => { e && setTimeout(() => { let n = new Error(`Request did not complete within ${e} ms`); n.name = "TimeoutError", r(n); }, e); }); }
var Xe = { supported: void 0 }, Yt = class e {
    config;
    configProvider;
    static create(t) { return typeof t?.handle == "function" ? t : new e(t); }
    constructor(t) { typeof t == "function" ? this.configProvider = t().then(r => r || {}) : (this.config = t ?? {}, this.configProvider = Promise.resolve(this.config)), Xe.supported === void 0 && (Xe.supported = typeof Request < "u" && "keepalive" in Ye("https://[::1]")); }
    destroy() { }
    handle(o) { return f(this, arguments, function* (t, { abortSignal: r, requestTimeout: n } = {}) { this.config || (this.config = yield this.configProvider); let s = n ?? this.config.requestTimeout, i = this.config.keepAlive === !0, a = this.config.credentials; if (r?.aborted) {
        let R = new Error("Request aborted");
        return R.name = "AbortError", Promise.reject(R);
    } let u = t.path, c = Vt(t.query || {}); c && (u += `?${c}`), t.fragment && (u += `#${t.fragment}`); let p = ""; if (t.username != null || t.password != null) {
        let R = t.username ?? "", b = t.password ?? "";
        p = `${R}:${b}@`;
    } let { port: d, method: l } = t, m = `${t.protocol}//${p}${t.hostname}${d ? `:${d}` : ""}${u}`, y = l === "GET" || l === "HEAD" ? void 0 : t.body, w = { body: y, headers: new Headers(t.headers), method: l, credentials: a }; this.config?.cache && (w.cache = this.config.cache), y && (w.duplex = "half"), typeof AbortController < "u" && (w.signal = r), Xe.supported && (w.keepalive = i), typeof this.config.requestInit == "function" && Object.assign(w, this.config.requestInit(t)); let g = () => { }, E = Ye(m, w), x = [fetch(E).then(R => { let b = R.headers, C = {}; for (let me of b.entries())
            C[me[0]] = me[1]; return R.body != null ? { response: new O({ headers: C, reason: R.statusText, statusCode: R.status, body: R.body }) } : R.blob().then(me => ({ response: new O({ headers: C, reason: R.statusText, statusCode: R.status, body: me }) })); }), Wt(s)]; return r && x.push(new Promise((R, b) => { let C = () => { let P = new Error("Request aborted"); P.name = "AbortError", b(P); }; if (typeof r.addEventListener == "function") {
        let P = r;
        P.addEventListener("abort", C, { once: !0 }), g = () => P.removeEventListener("abort", C);
    }
    else
        r.onabort = C; })), Promise.race(x).finally(g); }); }
    updateHttpClientConfig(t, r) { this.config = void 0, this.configProvider = this.configProvider.then(n => (n[t] = r, n)); }
    httpHandlerConfigs() { return this.config ?? {}; }
};
var na = e => f(null, null, function* () { return typeof Blob == "function" && e instanceof Blob || e.constructor?.name === "Blob" ? Blob.prototype.arrayBuffer !== void 0 ? new Uint8Array(yield e.arrayBuffer()) : no(e) : oo(e); });
function no(e) { return f(this, null, function* () { let t = yield so(e), r = we(t); return new Uint8Array(r); }); }
function oo(e) { return f(this, null, function* () { let t = [], r = e.getReader(), n = !1, o = 0; for (; !n;) {
    let { done: a, value: u } = yield r.read();
    u && (t.push(u), o += u.length), n = a;
} let s = new Uint8Array(o), i = 0; for (let a of t)
    s.set(a, i), i += a.length; return s; }); }
function so(e) { return new Promise((t, r) => { let n = new FileReader; n.onloadend = () => { if (n.readyState !== 2)
    return r(new Error("Reader aborted too early")); let o = n.result ?? "", s = o.indexOf(","), i = s > -1 ? s + 1 : o.length; t(o.substring(i)); }, n.onabort = () => r(new Error("Read aborted")), n.onerror = () => r(n.error), n.readAsDataURL(e); }); }
var Xt = {}, Ke = {};
for (let e = 0; e < 256; e++) {
    let t = e.toString(16).toLowerCase();
    t.length === 1 && (t = `0${t}`), Xt[e] = t, Ke[t] = e;
}
function Kt(e) { if (e.length % 2 !== 0)
    throw new Error("Hex encoded strings must have an even number length"); let t = new Uint8Array(e.length / 2); for (let r = 0; r < e.length; r += 2) {
    let n = e.slice(r, r + 2).toLowerCase();
    if (n in Ke)
        t[r / 2] = Ke[n];
    else
        throw new Error(`Cannot decode unrecognized sequence ${n} as hexadecimal`);
} return t; }
function I(e) { let t = ""; for (let r = 0; r < e.byteLength; r++)
    t += Xt[e[r]]; return t; }
var Qe = (...r) => f(null, [...r], function* (e = new Uint8Array, t) { if (e instanceof Uint8Array)
    return X.mutate(e); if (!e)
    return X.mutate(new Uint8Array); let n = t.streamCollector(e); return X.mutate(yield n); });
var da = e => { switch (e) {
    case "true": return !0;
    case "false": return !1;
    default: throw new Error(`Unable to parse boolean value "${e}"`);
} };
var Je = e => { if (e != null) {
    if (typeof e == "string") {
        let t = parseFloat(e);
        if (!Number.isNaN(t))
            return String(t) !== String(e) && sr.warn(or(`Expected number but observed string: ${e}`)), t;
    }
    if (typeof e == "number")
        return e;
    throw new TypeError(`Expected number, got ${typeof e}: ${e}`);
} }, io = Math.ceil(34028234663852886e22), Qt = e => { let t = Je(e); if (t !== void 0 && !Number.isNaN(t) && t !== 1 / 0 && t !== -1 / 0 && Math.abs(t) > io)
    throw new TypeError(`Expected 32-bit float, got ${e}`); return t; }, Ze = e => { if (e != null) {
    if (Number.isInteger(e) && !Number.isNaN(e))
        return e;
    throw new TypeError(`Expected integer, got ${typeof e}: ${e}`);
} };
var Jt = e => et(e, 32), Zt = e => et(e, 16), er = e => et(e, 8), et = (e, t) => { let r = Ze(e); if (r !== void 0 && ao(r, t) !== r)
    throw new TypeError(`Expected ${t}-bit integer, got ${e}`); return r; }, ao = (e, t) => { switch (t) {
    case 32: return Int32Array.of(e)[0];
    case 16: return Int16Array.of(e)[0];
    case 8: return Int8Array.of(e)[0];
} }, fa = (e, t) => { if (e == null)
    throw t ? new TypeError(`Expected a non-null value for ${t}`) : new TypeError("Expected a non-null value"); return e; }, co = e => { if (e == null)
    return; if (typeof e == "object" && !Array.isArray(e))
    return e; let t = Array.isArray(e) ? "array" : typeof e; throw new TypeError(`Expected object, got ${t}: ${e}`); }, la = e => { if (e != null) {
    if (typeof e == "string")
        return e;
    if (["boolean", "number", "bigint"].includes(typeof e))
        return sr.warn(or(`Expected string, got ${typeof e}: ${e}`)), String(e);
    throw new TypeError(`Expected string, got ${typeof e}: ${e}`);
} }, pa = e => { if (e == null)
    return; let t = co(e), r = Object.entries(t).filter(([, n]) => n != null).map(([n]) => n); if (r.length === 0)
    throw new TypeError("Unions must have exactly one non-null member. None were found."); if (r.length > 1)
    throw new TypeError(`Unions must have exactly one non-null member. Keys ${r} were not null.`); return t; }, tr = e => Je(typeof e == "string" ? K(e) : e);
var rr = e => Qt(typeof e == "string" ? K(e) : e), uo = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g, K = e => { let t = e.match(uo); if (t === null || t[0].length !== e.length)
    throw new TypeError("Expected real number, got implicit NaN"); return parseFloat(e); };
var ma = e => Ze(typeof e == "string" ? K(e) : e);
var ha = e => Jt(typeof e == "string" ? K(e) : e), se = e => Zt(typeof e == "string" ? K(e) : e), nr = e => er(typeof e == "string" ? K(e) : e), or = e => String(new TypeError(e).stack || e).split(`
`).slice(0, 5).filter(t => !t.includes("stackTraceWarning")).join(`
`), sr = { warn: console.warn };
var fo = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], rt = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function Ea(e) { let t = e.getUTCFullYear(), r = e.getUTCMonth(), n = e.getUTCDay(), o = e.getUTCDate(), s = e.getUTCHours(), i = e.getUTCMinutes(), a = e.getUTCSeconds(), u = o < 10 ? `0${o}` : `${o}`, c = s < 10 ? `0${s}` : `${s}`, p = i < 10 ? `0${i}` : `${i}`, d = a < 10 ? `0${a}` : `${a}`; return `${fo[n]}, ${u} ${rt[r]} ${t} ${c}:${p}:${d} GMT`; }
var wa = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
var lo = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/), Sa = e => { if (e == null)
    return; if (typeof e != "string")
    throw new TypeError("RFC-3339 date-times must be expressed as strings"); let t = lo.exec(e); if (!t)
    throw new TypeError("Invalid RFC-3339 date-time value"); let [r, n, o, s, i, a, u, c, p] = t, d = se(ie(n)), l = B(o, "month", 1, 12), m = B(s, "day", 1, 31), y = xe(d, l, m, { hours: i, minutes: a, seconds: u, fractionalMilliseconds: c }); return p.toUpperCase() != "Z" && y.setTime(y.getTime() - To(p)), y; }, po = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/), mo = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/), ho = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/), xa = e => { if (e == null)
    return; if (typeof e != "string")
    throw new TypeError("RFC-7231 date-times must be expressed as strings"); let t = po.exec(e); if (t) {
    let [r, n, o, s, i, a, u, c] = t;
    return xe(se(ie(s)), tt(o), B(n, "day", 1, 31), { hours: i, minutes: a, seconds: u, fractionalMilliseconds: c });
} if (t = mo.exec(e), t) {
    let [r, n, o, s, i, a, u, c] = t;
    return Eo(xe(go(s), tt(o), B(n, "day", 1, 31), { hours: i, minutes: a, seconds: u, fractionalMilliseconds: c }));
} if (t = ho.exec(e), t) {
    let [r, n, o, s, i, a, u, c] = t;
    return xe(se(ie(c)), tt(n), B(o.trimLeft(), "day", 1, 31), { hours: s, minutes: i, seconds: a, fractionalMilliseconds: u });
} throw new TypeError("Invalid RFC-7231 date-time value"); }, Ra = e => { if (e == null)
    return; let t; if (typeof e == "number")
    t = e;
else if (typeof e == "string")
    t = tr(e);
else if (typeof e == "object" && e.tag === 1)
    t = e.value;
else
    throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation"); if (Number.isNaN(t) || t === 1 / 0 || t === -1 / 0)
    throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics"); return new Date(Math.round(t * 1e3)); }, xe = (e, t, r, n) => { let o = t - 1; return So(e, o, r), new Date(Date.UTC(e, o, r, B(n.hours, "hour", 0, 23), B(n.minutes, "minute", 0, 59), B(n.seconds, "seconds", 0, 60), Ro(n.fractionalMilliseconds))); }, go = e => { let t = new Date().getUTCFullYear(), r = Math.floor(t / 100) * 100 + se(ie(e)); return r < t ? r + 100 : r; }, yo = 50 * 365 * 24 * 60 * 60 * 1e3, Eo = e => e.getTime() - new Date().getTime() > yo ? new Date(Date.UTC(e.getUTCFullYear() - 100, e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds())) : e, tt = e => { let t = rt.indexOf(e); if (t < 0)
    throw new TypeError(`Invalid month: ${e}`); return t + 1; }, wo = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], So = (e, t, r) => { let n = wo[t]; if (t === 1 && xo(e) && (n = 29), r > n)
    throw new TypeError(`Invalid day for ${rt[t]} in ${e}: ${r}`); }, xo = e => e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0), B = (e, t, r, n) => { let o = nr(ie(e)); if (o < r || o > n)
    throw new TypeError(`${t} must be between ${r} and ${n}, inclusive`); return o; }, Ro = e => e == null ? 0 : rr("0." + e) * 1e3, To = e => { let t = e[0], r = 1; if (t == "+")
    r = 1;
else if (t == "-")
    r = -1;
else
    throw new TypeError(`Offset direction, ${t}, must be "+" or "-"`); let n = Number(e.substring(1, 3)), o = Number(e.substring(4, 6)); return r * (n * 60 + o) * 60 * 1e3; }, ie = e => { let t = 0; for (; t < e.length - 1 && e.charAt(t) === "0";)
    t++; return t === 0 ? e : e.slice(t); };
var nt = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var _ = Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0")), ir = () => { if (nt)
    return nt(); let e = new Uint8Array(16); return crypto.getRandomValues(e), e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, _[e[0]] + _[e[1]] + _[e[2]] + _[e[3]] + "-" + _[e[4]] + _[e[5]] + "-" + _[e[6]] + _[e[7]] + "-" + _[e[8]] + _[e[9]] + "-" + _[e[10]] + _[e[11]] + _[e[12]] + _[e[13]] + _[e[14]] + _[e[15]]; };
var ar = (e, t, r, n, o, s) => { if (t != null && t[r] !== void 0) {
    let i = n();
    if (i.length <= 0)
        throw new Error("Empty value provided for input HTTP label: " + r + ".");
    e = e.replace(o, s ? i.split("/").map(a => He(a)).join("/") : He(i));
}
else
    throw new Error("No value provided for input HTTP label: " + r + "."); return e; };
function Ao(e, t) { return new ot(e, t); }
var ot = class {
    input;
    context;
    query = {};
    method = "";
    headers = {};
    path = "";
    body = null;
    hostname = "";
    resolvePathStack = [];
    constructor(t, r) { this.input = t, this.context = r; }
    build() { return f(this, null, function* () { let { hostname: t, protocol: r = "https", port: n, path: o } = yield this.context.endpoint(); this.path = o; for (let s of this.resolvePathStack)
        s(this.path); return new A({ protocol: r, hostname: this.hostname || t, port: n, method: this.method, path: this.path, query: this.query, body: this.body, headers: this.headers }); }); }
    hn(t) { return this.hostname = t, this; }
    bp(t) { return this.resolvePathStack.push(r => { this.path = `${r?.endsWith("/") ? r.slice(0, -1) : r || ""}` + t; }), this; }
    p(t, r, n, o) { return this.resolvePathStack.push(s => { this.path = ar(s, this.input, t, r, n, o); }), this; }
    h(t) { return this.headers = t, this; }
    q(t) { return this.query = t, this; }
    b(t) { return this.body = t, this; }
    m(t) { return this.method = t, this; }
};
function cr(e, t, r) { e.__smithy_context ? e.__smithy_context.features || (e.__smithy_context.features = {}) : e.__smithy_context = { features: {} }, e.__smithy_context.features[t] = r; }
var ur = class {
    sign(t, r, n) { return f(this, null, function* () { return t; }); }
};
var bo = e => function (r) { return st(r) && r.expiration.getTime() - Date.now() < e; };
var dr = bo(3e5), st = e => e.expiration !== void 0, fr = (e, t, r) => { if (e === void 0)
    return; let n = typeof e != "function" ? () => f(null, null, function* () { return Promise.resolve(e); }) : e, o, s, i, a = !1, u = c => f(null, null, function* () { s || (s = n(c)); try {
    o = yield s, i = !0, a = !1;
}
finally {
    s = void 0;
} return o; }); return t === void 0 ? c => f(null, null, function* () { return (!i || c?.forceRefresh) && (o = yield u(c)), o; }) : c => f(null, null, function* () { return (!i || c?.forceRefresh) && (o = yield u(c)), a ? o : r(o) ? (t(o) && (yield u(c)), o) : (a = !0, o); }); };
var _o = void 0;
function Co(e) { return e === void 0 ? !0 : typeof e == "string" && e.length <= 50; }
function Ka(e) { let t = k(e.userAgentAppId ?? _o), { customUserAgent: r } = e; return Object.assign(e, { customUserAgent: typeof r == "string" ? [[r]] : r, userAgentAppId: () => f(null, null, function* () { let n = yield t(); if (!Co(n)) {
        let o = e.logger?.constructor?.name === "NoOpLogger" || !e.logger ? console : e.logger;
        typeof n != "string" ? o?.warn("userAgentAppId must be a string or undefined.") : n.length > 50 && o?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
    } return n; }) }); }
var Za = "***SensitiveInformation***";
var tc = (e, t) => { for (let r of Object.keys(e)) {
    let n = e[r], o = function (i, a, u) { return f(this, null, function* () { let c = new n(i); if (typeof a == "function")
        this.send(c, a);
    else if (typeof u == "function") {
        if (typeof a != "object")
            throw new Error(`Expected http options but got ${typeof a}`);
        this.send(c, a || {}, u);
    }
    else
        return this.send(c, a); }); }, s = (r[0].toLowerCase() + r.slice(1)).replace(/Command$/, "");
    t.prototype[s] = o;
} };
var lr = class e extends Error {
    $fault;
    $response;
    $retryable;
    $metadata;
    constructor(t) { super(t.message), Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype), this.name = t.name, this.$fault = t.$fault, this.$metadata = t.$metadata; }
    static isInstance(t) { if (!t)
        return !1; let r = t; return e.prototype.isPrototypeOf(r) || !!r.$fault && !!r.$metadata && (r.$fault === "client" || r.$fault === "server"); }
    static [Symbol.hasInstance](t) { if (!t)
        return !1; let r = t; return this === e ? e.isInstance(t) : e.isInstance(t) ? r.name && this.name ? this.prototype.isPrototypeOf(t) || r.name === this.name : this.prototype.isPrototypeOf(t) : !1; }
}, pr = (e, t = {}) => { Object.entries(t).filter(([, n]) => n !== void 0).forEach(([n, o]) => { (e[n] == null || e[n] === "") && (e[n] = o); }); let r = e.message || e.Message || "UnknownError"; return e.message = r, delete e.Message, e; };
var mr = class {
    capacity;
    data = new Map;
    parameters = [];
    constructor({ size: t, params: r }) { this.capacity = t ?? 50, r && (this.parameters = r); }
    get(t, r) { let n = this.hash(t); if (n === !1)
        return r(); if (!this.data.has(n)) {
        if (this.data.size > this.capacity + 10) {
            let o = this.data.keys(), s = 0;
            for (;;) {
                let { value: i, done: a } = o.next();
                if (this.data.delete(i), a || ++s > 10)
                    break;
            }
        }
        this.data.set(n, r());
    } return this.data.get(n); }
    size() { return this.data.size; }
    hash(t) { let r = "", { parameters: n } = this; if (n.length === 0)
        return !1; for (let o of n) {
        let s = String(t[o] ?? "");
        if (s.includes("|;"))
            return !1;
        r += s + "|;";
    } return r; }
};
var Io = new RegExp("^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$"), ae = e => Io.test(e) || e.startsWith("[") && e.endsWith("]");
var No = new RegExp("^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$"), G = (e, t = !1) => { if (!t)
    return No.test(e); let r = e.split("."); for (let n of r)
    if (!G(n))
        return !1; return !0; };
var ce = {};
var L = "endpoints";
function N(e) { return typeof e != "object" || e == null ? e : "ref" in e ? `$${N(e.ref)}` : "fn" in e ? `${e.fn}(${(e.argv || []).map(N).join(", ")})` : JSON.stringify(e, null, 2); }
var T = class extends Error {
    constructor(t) { super(t), this.name = "EndpointError"; }
};
var hr = (e, t) => e === t;
var gr = e => { let t = e.split("."), r = []; for (let n of t) {
    let o = n.indexOf("[");
    if (o !== -1) {
        if (n.indexOf("]") !== n.length - 1)
            throw new T(`Path: '${e}' does not end with ']'`);
        let s = n.slice(o + 1, -1);
        if (Number.isNaN(parseInt(s)))
            throw new T(`Invalid array index: '${s}' in path: '${e}'`);
        o !== 0 && r.push(n.slice(0, o)), r.push(s);
    }
    else
        r.push(n);
} return r; };
var Re = (e, t) => gr(t).reduce((r, n) => { if (typeof r != "object")
    throw new T(`Index '${n}' in '${t}' not found in '${JSON.stringify(e)}'`); return Array.isArray(r) ? r[parseInt(n)] : r[n]; }, e);
var yr = e => e != null;
var Er = e => !e;
var it = { [te.HTTP]: 80, [te.HTTPS]: 443 }, wr = e => { let t = (() => { try {
    if (e instanceof URL)
        return e;
    if (typeof e == "object" && "hostname" in e) {
        let { hostname: l, port: m, protocol: y = "", path: w = "", query: g = {} } = e, E = new URL(`${y}//${l}${m ? `:${m}` : ""}${w}`);
        return E.search = Object.entries(g).map(([x, R]) => `${x}=${R}`).join("&"), E;
    }
    return new URL(e);
}
catch {
    return null;
} })(); if (!t)
    return console.error(`Unable to parse ${JSON.stringify(e)} as a whatwg URL.`), null; let r = t.href, { host: n, hostname: o, pathname: s, protocol: i, search: a } = t; if (a)
    return null; let u = i.slice(0, -1); if (!Object.values(te).includes(u))
    return null; let c = ae(o), p = r.includes(`${n}:${it[u]}`) || typeof e == "string" && e.includes(`${n}:${it[u]}`), d = `${n}${p ? `:${it[u]}` : ""}`; return { scheme: u, authority: d, path: s, normalizedPath: s.endsWith("/") ? s : `${s}/`, isIp: c }; };
var Sr = (e, t) => e === t;
var xr = (e, t, r, n) => t >= r || e.length < r ? null : n ? e.substring(e.length - r, e.length - t) : e.substring(t, r);
var Rr = e => encodeURIComponent(e).replace(/[!*'()]/g, t => `%${t.charCodeAt(0).toString(16).toUpperCase()}`);
var Tr = { booleanEquals: hr, getAttr: Re, isSet: yr, isValidHostLabel: G, not: Er, parseURL: wr, stringEquals: Sr, substring: xr, uriEncode: Rr };
var Te = (e, t) => { let r = [], n = h(h({}, t.endpointParams), t.referenceRecord), o = 0; for (; o < e.length;) {
    let s = e.indexOf("{", o);
    if (s === -1) {
        r.push(e.slice(o));
        break;
    }
    r.push(e.slice(o, s));
    let i = e.indexOf("}", s);
    if (i === -1) {
        r.push(e.slice(s));
        break;
    }
    e[s + 1] === "{" && e[i + 1] === "}" && (r.push(e.slice(s + 1, i)), o = i + 2);
    let a = e.substring(s + 1, i);
    if (a.includes("#")) {
        let [u, c] = a.split("#");
        r.push(Re(n[u], c));
    }
    else
        r.push(n[a]);
    o = i + 1;
} return r.join(""); };
var Ar = ({ ref: e }, t) => h(h({}, t.endpointParams), t.referenceRecord)[e];
var V = (e, t, r) => { if (typeof e == "string")
    return Te(e, r); if (e.fn)
    return br.callFunction(e, r); if (e.ref)
    return Ar(e, r); throw new T(`'${t}': ${String(e)} is not a string, function or reference.`); }, Ae = ({ fn: e, argv: t }, r) => { let n = t.map(s => ["boolean", "number"].includes(typeof s) ? s : br.evaluateExpression(s, "arg", r)), o = e.split("."); return o[0] in ce && o[1] != null ? ce[o[0]][o[1]](...n) : Tr[e](...n); }, br = { evaluateExpression: V, callFunction: Ae };
var _r = (n, r) => { var o = n, { assign: e } = o, t = he(o, ["assign"]); if (e && e in r.referenceRecord)
    throw new T(`'${e}' is already defined in Reference Record.`); let s = Ae(t, r); return r.logger?.debug?.(`${L} evaluateCondition: ${N(t)} = ${N(s)}`), h({ result: s === "" ? !0 : !!s }, e != null && { toAssign: { name: e, value: s } }); };
var Q = (e = [], t) => { let r = {}; for (let n of e) {
    let { result: o, toAssign: s } = _r(n, S(h({}, t), { referenceRecord: h(h({}, t.referenceRecord), r) }));
    if (!o)
        return { result: o };
    s && (r[s.name] = s.value, t.logger?.debug?.(`${L} assign: ${s.name} := ${N(s.value)}`));
} return { result: !0, referenceRecord: r }; };
var Cr = (e, t) => Object.entries(e).reduce((r, [n, o]) => S(h({}, r), { [n]: o.map(s => { let i = V(s, "Header value entry", t); if (typeof i != "string")
        throw new T(`Header '${n}' value '${i}' is not a string`); return i; }) }), {});
var at = (e, t) => Object.entries(e).reduce((r, [n, o]) => S(h({}, r), { [n]: Nr.getEndpointProperty(o, t) }), {}), Ir = (e, t) => { if (Array.isArray(e))
    return e.map(r => Ir(r, t)); switch (typeof e) {
    case "string": return Te(e, t);
    case "object":
        if (e === null)
            throw new T(`Unexpected endpoint property: ${e}`);
        return Nr.getEndpointProperties(e, t);
    case "boolean": return e;
    default: throw new T(`Unexpected endpoint property type: ${typeof e}`);
} }, Nr = { getEndpointProperty: Ir, getEndpointProperties: at };
var Or = (e, t) => { let r = V(e, "Endpoint URL", t); if (typeof r == "string")
    try {
        return new URL(r);
    }
    catch (n) {
        throw console.error(`Failed to construct URL with ${r}`, n), n;
    } throw new T(`Endpoint URL must be a string, got ${typeof r}`); };
var Dr = (e, t) => { let { conditions: r, endpoint: n } = e, { result: o, referenceRecord: s } = Q(r, t); if (!o)
    return; let i = S(h({}, t), { referenceRecord: h(h({}, t.referenceRecord), s) }), { url: a, properties: u, headers: c } = n; return t.logger?.debug?.(`${L} Resolving endpoint from template: ${N(n)}`), S(h(h({}, c != null && { headers: Cr(c, i) }), u != null && { properties: at(u, i) }), { url: Or(a, i) }); };
var Pr = (e, t) => { let { conditions: r, error: n } = e, { result: o, referenceRecord: s } = Q(r, t); if (o)
    throw new T(V(n, "Error", S(h({}, t), { referenceRecord: h(h({}, t.referenceRecord), s) }))); };
var ct = (e, t) => { for (let r of e)
    if (r.type === "endpoint") {
        let n = Dr(r, t);
        if (n)
            return n;
    }
    else if (r.type === "error")
        Pr(r, t);
    else if (r.type === "tree") {
        let n = Mr.evaluateTreeRule(r, t);
        if (n)
            return n;
    }
    else
        throw new T(`Unknown endpoint rule: ${r}`); throw new T("Rules evaluation failed"); }, Oo = (e, t) => { let { conditions: r, rules: n } = e, { result: o, referenceRecord: s } = Q(r, t); if (o)
    return Mr.evaluateRules(n, S(h({}, t), { referenceRecord: h(h({}, t.referenceRecord), s) })); }, Mr = { evaluateRules: ct, evaluateTreeRule: Oo };
var Iu = (e, t) => { let { endpointParams: r, logger: n } = t, { parameters: o, rules: s } = e; t.logger?.debug?.(`${L} Initial EndpointParams: ${N(r)}`); let i = Object.entries(o).filter(([, c]) => c.default != null).map(([c, p]) => [c, p.default]); if (i.length > 0)
    for (let [c, p] of i)
        r[c] = r[c] ?? p; let a = Object.entries(o).filter(([, c]) => c.required).map(([c]) => c); for (let c of a)
    if (r[c] == null)
        throw new T(`Missing required parameter: '${c}'`); let u = ct(s, { endpointParams: r, logger: n, referenceRecord: {} }); return t.logger?.debug?.(`${L} Resolved endpoint: ${N(u)}`), u; };
var ut = (e, t = !1) => { if (t) {
    for (let r of e.split("."))
        if (!ut(r))
            return !1;
    return !0;
} return !(!G(e) || e.length < 3 || e.length > 63 || e !== e.toLowerCase() || ae(e)); };
var vr = e => { let t = e.split(":"); if (t.length < 6)
    return null; let [r, n, o, s, i, ...a] = t; if (r !== "arn" || n === "" || o === "" || a.join(":") === "")
    return null; let u = a.map(c => c.split("/")).flat(); return { partition: n, service: o, region: s, accountId: i, resourceId: u }; };
var $r = { partitions: [{ id: "aws", outputs: { dnsSuffix: "amazonaws.com", dualStackDnsSuffix: "api.aws", implicitGlobalRegion: "us-east-1", name: "aws", supportsDualStack: !0, supportsFIPS: !0 }, regionRegex: "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$", regions: { "af-south-1": { description: "Africa (Cape Town)" }, "ap-east-1": { description: "Asia Pacific (Hong Kong)" }, "ap-east-2": { description: "Asia Pacific (Taipei)" }, "ap-northeast-1": { description: "Asia Pacific (Tokyo)" }, "ap-northeast-2": { description: "Asia Pacific (Seoul)" }, "ap-northeast-3": { description: "Asia Pacific (Osaka)" }, "ap-south-1": { description: "Asia Pacific (Mumbai)" }, "ap-south-2": { description: "Asia Pacific (Hyderabad)" }, "ap-southeast-1": { description: "Asia Pacific (Singapore)" }, "ap-southeast-2": { description: "Asia Pacific (Sydney)" }, "ap-southeast-3": { description: "Asia Pacific (Jakarta)" }, "ap-southeast-4": { description: "Asia Pacific (Melbourne)" }, "ap-southeast-5": { description: "Asia Pacific (Malaysia)" }, "ap-southeast-6": { description: "Asia Pacific (New Zealand)" }, "ap-southeast-7": { description: "Asia Pacific (Thailand)" }, "aws-global": { description: "aws global region" }, "ca-central-1": { description: "Canada (Central)" }, "ca-west-1": { description: "Canada West (Calgary)" }, "eu-central-1": { description: "Europe (Frankfurt)" }, "eu-central-2": { description: "Europe (Zurich)" }, "eu-north-1": { description: "Europe (Stockholm)" }, "eu-south-1": { description: "Europe (Milan)" }, "eu-south-2": { description: "Europe (Spain)" }, "eu-west-1": { description: "Europe (Ireland)" }, "eu-west-2": { description: "Europe (London)" }, "eu-west-3": { description: "Europe (Paris)" }, "il-central-1": { description: "Israel (Tel Aviv)" }, "me-central-1": { description: "Middle East (UAE)" }, "me-south-1": { description: "Middle East (Bahrain)" }, "mx-central-1": { description: "Mexico (Central)" }, "sa-east-1": { description: "South America (Sao Paulo)" }, "us-east-1": { description: "US East (N. Virginia)" }, "us-east-2": { description: "US East (Ohio)" }, "us-west-1": { description: "US West (N. California)" }, "us-west-2": { description: "US West (Oregon)" } } }, { id: "aws-cn", outputs: { dnsSuffix: "amazonaws.com.cn", dualStackDnsSuffix: "api.amazonwebservices.com.cn", implicitGlobalRegion: "cn-northwest-1", name: "aws-cn", supportsDualStack: !0, supportsFIPS: !0 }, regionRegex: "^cn\\-\\w+\\-\\d+$", regions: { "aws-cn-global": { description: "aws-cn global region" }, "cn-north-1": { description: "China (Beijing)" }, "cn-northwest-1": { description: "China (Ningxia)" } } }, { id: "aws-eusc", outputs: { dnsSuffix: "amazonaws.eu", dualStackDnsSuffix: "api.amazonwebservices.eu", implicitGlobalRegion: "eusc-de-east-1", name: "aws-eusc", supportsDualStack: !0, supportsFIPS: !0 }, regionRegex: "^eusc\\-(de)\\-\\w+\\-\\d+$", regions: { "eusc-de-east-1": { description: "EU (Germany)" } } }, { id: "aws-iso", outputs: { dnsSuffix: "c2s.ic.gov", dualStackDnsSuffix: "api.aws.ic.gov", implicitGlobalRegion: "us-iso-east-1", name: "aws-iso", supportsDualStack: !0, supportsFIPS: !0 }, regionRegex: "^us\\-iso\\-\\w+\\-\\d+$", regions: { "aws-iso-global": { description: "aws-iso global region" }, "us-iso-east-1": { description: "US ISO East" }, "us-iso-west-1": { description: "US ISO WEST" } } }, { id: "aws-iso-b", outputs: { dnsSuffix: "sc2s.sgov.gov", dualStackDnsSuffix: "api.aws.scloud", implicitGlobalRegion: "us-isob-east-1", name: "aws-iso-b", supportsDualStack: !0, supportsFIPS: !0 }, regionRegex: "^us\\-isob\\-\\w+\\-\\d+$", regions: { "aws-iso-b-global": { description: "aws-iso-b global region" }, "us-isob-east-1": { description: "US ISOB East (Ohio)" }, "us-isob-west-1": { description: "US ISOB West" } } }, { id: "aws-iso-e", outputs: { dnsSuffix: "cloud.adc-e.uk", dualStackDnsSuffix: "api.cloud-aws.adc-e.uk", implicitGlobalRegion: "eu-isoe-west-1", name: "aws-iso-e", supportsDualStack: !0, supportsFIPS: !0 }, regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$", regions: { "aws-iso-e-global": { description: "aws-iso-e global region" }, "eu-isoe-west-1": { description: "EU ISOE West" } } }, { id: "aws-iso-f", outputs: { dnsSuffix: "csp.hci.ic.gov", dualStackDnsSuffix: "api.aws.hci.ic.gov", implicitGlobalRegion: "us-isof-south-1", name: "aws-iso-f", supportsDualStack: !0, supportsFIPS: !0 }, regionRegex: "^us\\-isof\\-\\w+\\-\\d+$", regions: { "aws-iso-f-global": { description: "aws-iso-f global region" }, "us-isof-east-1": { description: "US ISOF EAST" }, "us-isof-south-1": { description: "US ISOF SOUTH" } } }, { id: "aws-us-gov", outputs: { dnsSuffix: "amazonaws.com", dualStackDnsSuffix: "api.aws", implicitGlobalRegion: "us-gov-west-1", name: "aws-us-gov", supportsDualStack: !0, supportsFIPS: !0 }, regionRegex: "^us\\-gov\\-\\w+\\-\\d+$", regions: { "aws-us-gov-global": { description: "aws-us-gov global region" }, "us-gov-east-1": { description: "AWS GovCloud (US-East)" }, "us-gov-west-1": { description: "AWS GovCloud (US-West)" } } }], version: "1.1" };
var Po = $r, Mo = "", kr = e => { let { partitions: t } = Po; for (let n of t) {
    let { regions: o, outputs: s } = n;
    for (let [i, a] of Object.entries(o))
        if (i === e)
            return h(h({}, s), a);
} for (let n of t) {
    let { regionRegex: o, outputs: s } = n;
    if (new RegExp(o).test(e))
        return h({}, s);
} let r = t.find(n => n.id === "aws"); if (!r)
    throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist."); return h({}, r.outputs); };
var Ur = () => Mo;
var vo = { isVirtualHostableS3Bucket: ut, parseArn: vr, partition: kr };
ce.aws = vo;
function Lr(e, t, r) { return e.$source || (e.$source = {}), e.$source[t] = r, e; }
function D(e, t, r) { e.__aws_sdk_context ? e.__aws_sdk_context.features || (e.__aws_sdk_context.features = {}) : e.__aws_sdk_context = { features: {} }, e.__aws_sdk_context.features[t] = r; }
var dt = e => O.isInstance(e) ? e.headers?.date ?? e.headers?.Date : void 0;
var J = e => new Date(Date.now() + e);
var Fr = (e, t) => Math.abs(J(t).getTime() - e) >= 3e5;
var ft = (e, t) => { let r = Date.parse(e); return Fr(r, t) ? r - Date.now() : t; };
var ue = (e, t) => { if (!t)
    throw new Error(`Property \`${e}\` is not resolved for AWS SDK SigV4Auth`); return t; }, be = e => f(null, null, function* () { let t = ue("context", e.context), r = ue("config", e.config), n = t.endpointV2?.properties?.authSchemes?.[0], s = yield ue("signer", r.signer)(n), i = e?.signingRegion, a = e?.signingRegionSet, u = e?.signingName; return { config: r, signer: s, signingRegion: i, signingRegionSet: a, signingName: u }; }), de = class {
    sign(t, r, n) { return f(this, null, function* () { if (!A.isInstance(t))
        throw new Error("The request is not an instance of `HttpRequest` and cannot be signed"); let o = yield be(n), { config: s, signer: i } = o, { signingRegion: a, signingName: u } = o, c = n.context; if (c?.authSchemes?.length ?? !1) {
        let [d, l] = c.authSchemes;
        d?.name === "sigv4a" && l?.name === "sigv4" && (a = l?.signingRegion ?? a, u = l?.signingName ?? u);
    } return yield i.sign(t, { signingDate: J(s.systemClockOffset), signingRegion: a, signingService: u }); }); }
    errorHandler(t) { return r => { let n = r.ServerTime ?? dt(r.$response); if (n) {
        let o = ue("config", t.config), s = o.systemClockOffset;
        o.systemClockOffset = ft(n, o.systemClockOffset), o.systemClockOffset !== s && r.$metadata && (r.$metadata.clockSkewCorrected = !0);
    } throw r; }; }
    successHandler(t, r) { let n = dt(t); if (n) {
        let o = ue("config", r.config);
        o.systemClockOffset = ft(n, o.systemClockOffset);
    } }
};
var lt = class extends de {
    sign(t, r, n) { return f(this, null, function* () { if (!A.isInstance(t))
        throw new Error("The request is not an instance of `HttpRequest` and cannot be signed"); let { config: o, signer: s, signingRegion: i, signingRegionSet: a, signingName: u } = yield be(n), p = ((yield o.sigv4aSigningRegionSet?.()) ?? a ?? [i]).join(","); return yield s.sign(t, { signingDate: J(o.systemClockOffset), signingRegion: p, signingService: u }); }); }
};
var Hr = (e, t, r) => { let n, o, s, i = !1, a = () => f(null, null, function* () { o || (o = e()); try {
    n = yield o, s = !0, i = !1;
}
finally {
    o = void 0;
} return n; }); return t === void 0 ? u => f(null, null, function* () { return (!s || u?.forceRefresh) && (n = yield a()), n; }) : u => f(null, null, function* () { return (!s || u?.forceRefresh) && (n = yield a()), i ? n : r && !r(n) ? (i = !0, n) : (t(n) && (yield a()), n); }); };
var Od = e => (e.sigv4aSigningRegionSet = k(e.sigv4aSigningRegionSet), e);
var Br = "X-Amz-Algorithm", jr = "X-Amz-Credential", pt = "X-Amz-Date", qr = "X-Amz-SignedHeaders", zr = "X-Amz-Expires", mt = "X-Amz-Signature", ht = "X-Amz-Security-Token";
var gt = "authorization", yt = pt.toLowerCase(), $o = "date", Gr = [gt, yt, $o], Vr = mt.toLowerCase(), fe = "x-amz-content-sha256", Wr = ht.toLowerCase();
var Yr = { authorization: !0, "cache-control": !0, connection: !0, expect: !0, from: !0, "keep-alive": !0, "max-forwards": !0, pragma: !0, referer: !0, te: !0, trailer: !0, "transfer-encoding": !0, upgrade: !0, "user-agent": !0, "x-amzn-trace-id": !0 }, Xr = /^proxy-/, Kr = /^sec-/;
var _e = "AWS4-HMAC-SHA256";
var Qr = "AWS4-HMAC-SHA256-PAYLOAD", Jr = "UNSIGNED-PAYLOAD", Zr = 50, Et = "aws4_request", en = 3600 * 24 * 7;
var Ce = {}, wt = [], Ie = (e, t, r) => `${e}/${t}/${r}/${Et}`, rn = (e, t, r, n, o) => f(null, null, function* () { let s = yield tn(e, t.secretAccessKey, t.accessKeyId), i = `${r}:${n}:${o}:${I(s)}:${t.sessionToken}`; if (i in Ce)
    return Ce[i]; for (wt.push(i); wt.length > Zr;)
    delete Ce[wt.shift()]; let a = `AWS4${t.secretAccessKey}`; for (let u of [r, n, o, Et])
    a = yield tn(e, a, u); return Ce[i] = a; });
var tn = (e, t, r) => { let n = new e(t); return n.update(U(r)), n.digest(); };
var St = ({ headers: e }, t, r) => { let n = {}; for (let o of Object.keys(e).sort()) {
    if (e[o] == null)
        continue;
    let s = o.toLowerCase();
    (s in Yr || t?.has(s) || Xr.test(s) || Kr.test(s)) && (!r || r && !r.has(s)) || (n[s] = e[o].trim().replace(/\s+/g, " "));
} return n; };
var nn = e => typeof ArrayBuffer == "function" && e instanceof ArrayBuffer || Object.prototype.toString.call(e) === "[object ArrayBuffer]";
var Ne = (n, o) => f(null, [n, o], function* ({ headers: e, body: t }, r) { for (let s of Object.keys(e))
    if (s.toLowerCase() === fe)
        return e[s]; if (t == null)
    return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"; if (typeof t == "string" || ArrayBuffer.isView(t) || nn(t)) {
    let s = new r;
    return s.update(U(t)), I(yield s.digest());
} return Jr; });
var Oe = class {
    format(t) { let r = []; for (let s of Object.keys(t)) {
        let i = $(s);
        r.push(Uint8Array.from([i.byteLength]), i, this.formatHeaderValue(t[s]));
    } let n = new Uint8Array(r.reduce((s, i) => s + i.byteLength, 0)), o = 0; for (let s of r)
        n.set(s, o), o += s.byteLength; return n; }
    formatHeaderValue(t) { switch (t.type) {
        case "boolean": return Uint8Array.from([t.value ? 0 : 1]);
        case "byte": return Uint8Array.from([2, t.value]);
        case "short":
            let r = new DataView(new ArrayBuffer(3));
            return r.setUint8(0, 3), r.setInt16(1, t.value, !1), new Uint8Array(r.buffer);
        case "integer":
            let n = new DataView(new ArrayBuffer(5));
            return n.setUint8(0, 4), n.setInt32(1, t.value, !1), new Uint8Array(n.buffer);
        case "long":
            let o = new Uint8Array(9);
            return o[0] = 5, o.set(t.value.bytes, 1), o;
        case "binary":
            let s = new DataView(new ArrayBuffer(3 + t.value.byteLength));
            s.setUint8(0, 6), s.setUint16(1, t.value.byteLength, !1);
            let i = new Uint8Array(s.buffer);
            return i.set(t.value, 3), i;
        case "string":
            let a = $(t.value), u = new DataView(new ArrayBuffer(3 + a.byteLength));
            u.setUint8(0, 7), u.setUint16(1, a.byteLength, !1);
            let c = new Uint8Array(u.buffer);
            return c.set(a, 3), c;
        case "timestamp":
            let p = new Uint8Array(9);
            return p[0] = 8, p.set(xt.fromNumber(t.value.valueOf()).bytes, 1), p;
        case "uuid":
            if (!ko.test(t.value))
                throw new Error(`Invalid UUID received: ${t.value}`);
            let d = new Uint8Array(17);
            return d[0] = 9, d.set(Kt(t.value.replace(/\-/g, "")), 1), d;
    } }
};
var ko = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/, xt = class e {
    bytes;
    constructor(t) { if (this.bytes = t, t.byteLength !== 8)
        throw new Error("Int64 buffers must be exactly 8 bytes"); }
    static fromNumber(t) { if (t > 9223372036854776e3 || t < -9223372036854776e3)
        throw new Error(`${t} is too large (or, if negative, too small) to represent as an Int64`); let r = new Uint8Array(8); for (let n = 7, o = Math.abs(Math.round(t)); n > -1 && o > 0; n--, o /= 256)
        r[n] = o; return t < 0 && on(r), new e(r); }
    valueOf() { let t = this.bytes.slice(0), r = t[0] & 128; return r && on(t), parseInt(I(t), 16) * (r ? -1 : 1); }
    toString() { return String(this.valueOf()); }
};
function on(e) { for (let t = 0; t < 8; t++)
    e[t] ^= 255; for (let t = 7; t > -1 && (e[t]++, e[t] === 0); t--)
    ; }
var sn = (e, t) => { e = e.toLowerCase(); for (let r of Object.keys(t))
    if (e === r.toLowerCase())
        return !0; return !1; };
var an = (e, t = {}) => { let { headers: r, query: n = {} } = A.clone(e); for (let o of Object.keys(r)) {
    let s = o.toLowerCase();
    (s.slice(0, 6) === "x-amz-" && !t.unhoistableHeaders?.has(s) || t.hoistableHeaders?.has(s)) && (n[o] = r[o], delete r[o]);
} return S(h({}, e), { headers: r, query: n }); };
var Rt = e => { e = A.clone(e); for (let t of Object.keys(e.headers))
    Gr.indexOf(t.toLowerCase()) > -1 && delete e.headers[t]; return e; };
var cn = ({ query: e = {} }) => { let t = [], r = {}; for (let n of Object.keys(e)) {
    if (n.toLowerCase() === Vr)
        continue;
    let o = v(n);
    t.push(o);
    let s = e[n];
    typeof s == "string" ? r[o] = `${o}=${v(s)}` : Array.isArray(s) && (r[o] = s.slice(0).reduce((i, a) => i.concat([`${o}=${v(a)}`]), []).sort().join("&"));
} return t.sort().map(n => r[n]).filter(n => n).join("&"); };
var un = e => Uo(e).toISOString().replace(/\.\d{3}Z$/, "Z"), Uo = e => typeof e == "number" ? new Date(e * 1e3) : typeof e == "string" ? Number(e) ? new Date(Number(e) * 1e3) : new Date(e) : e;
var De = class {
    service;
    regionProvider;
    credentialProvider;
    sha256;
    uriEscapePath;
    applyChecksum;
    constructor({ applyChecksum: t, credentials: r, region: n, service: o, sha256: s, uriEscapePath: i = !0 }) { this.service = o, this.sha256 = s, this.uriEscapePath = i, this.applyChecksum = typeof t == "boolean" ? t : !0, this.regionProvider = M(n), this.credentialProvider = M(r); }
    createCanonicalRequest(t, r, n) {
        let o = Object.keys(r).sort();
        return `${t.method}
${this.getCanonicalPath(t)}
${cn(t)}
${o.map(s => `${s}:${r[s]}`).join(`
`)}

${o.join(";")}
${n}`;
    }
    createStringToSign(t, r, n, o) {
        return f(this, null, function* () {
            let s = new this.sha256;
            s.update(U(n));
            let i = yield s.digest();
            return `${o}
${t}
${r}
${I(i)}`;
        });
    }
    getCanonicalPath({ path: t }) { if (this.uriEscapePath) {
        let r = [];
        for (let s of t.split("/"))
            s?.length !== 0 && s !== "." && (s === ".." ? r.pop() : r.push(s));
        let n = `${t?.startsWith("/") ? "/" : ""}${r.join("/")}${r.length > 0 && t?.endsWith("/") ? "/" : ""}`;
        return v(n).replace(/%2F/g, "/");
    } return t; }
    validateResolvedCredentials(t) { if (typeof t != "object" || typeof t.accessKeyId != "string" || typeof t.secretAccessKey != "string")
        throw new Error("Resolved credential object is not valid"); }
    formatDate(t) { let r = un(t).replace(/[\-:]/g, ""); return { longDate: r, shortDate: r.slice(0, 8) }; }
    getCanonicalHeaderList(t) { return Object.keys(t).sort().join(";"); }
};
var le = class extends De {
    headerFormatter = new Oe;
    constructor({ applyChecksum: t, credentials: r, region: n, service: o, sha256: s, uriEscapePath: i = !0 }) { super({ applyChecksum: t, credentials: r, region: n, service: o, sha256: s, uriEscapePath: i }); }
    presign(n) { return f(this, arguments, function* (t, r = {}) { let { signingDate: o = new Date, expiresIn: s = 3600, unsignableHeaders: i, unhoistableHeaders: a, signableHeaders: u, hoistableHeaders: c, signingRegion: p, signingService: d } = r, l = yield this.credentialProvider(); this.validateResolvedCredentials(l); let m = p ?? (yield this.regionProvider()), { longDate: y, shortDate: w } = this.formatDate(o); if (s > en)
        return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future"); let g = Ie(w, m, d ?? this.service), E = an(Rt(t), { unhoistableHeaders: a, hoistableHeaders: c }); l.sessionToken && (E.query[ht] = l.sessionToken), E.query[Br] = _e, E.query[jr] = `${l.accessKeyId}/${g}`, E.query[pt] = y, E.query[zr] = s.toString(10); let x = St(E, i, u); return E.query[qr] = this.getCanonicalHeaderList(x), E.query[mt] = yield this.getSignature(y, g, this.getSigningKey(l, m, w, d), this.createCanonicalRequest(E, x, yield Ne(t, this.sha256))), E; }); }
    sign(t, r) { return f(this, null, function* () { return typeof t == "string" ? this.signString(t, r) : t.headers && t.payload ? this.signEvent(t, r) : t.message ? this.signMessage(t, r) : this.signRequest(t, r); }); }
    signEvent(a, u) {
        return f(this, arguments, function* ({ headers: t, payload: r }, { signingDate: n = new Date, priorSignature: o, signingRegion: s, signingService: i }) {
            let c = s ?? (yield this.regionProvider()), { shortDate: p, longDate: d } = this.formatDate(n), l = Ie(p, c, i ?? this.service), m = yield Ne({ headers: {}, body: r }, this.sha256), y = new this.sha256;
            y.update(t);
            let w = I(yield y.digest()), g = [Qr, d, l, o, w, m].join(`
`);
            return this.signString(g, { signingDate: n, signingRegion: c, signingService: i });
        });
    }
    signMessage(s, i) { return f(this, arguments, function* (t, { signingDate: r = new Date, signingRegion: n, signingService: o }) { return this.signEvent({ headers: this.headerFormatter.format(t.message.headers), payload: t.message.body }, { signingDate: r, signingRegion: n, signingService: o, priorSignature: t.priorSignature }).then(u => ({ message: t.message, signature: u })); }); }
    signString(s) { return f(this, arguments, function* (t, { signingDate: r = new Date, signingRegion: n, signingService: o } = {}) { let i = yield this.credentialProvider(); this.validateResolvedCredentials(i); let a = n ?? (yield this.regionProvider()), { shortDate: u } = this.formatDate(r), c = new this.sha256(yield this.getSigningKey(i, a, u, o)); return c.update(U(t)), I(yield c.digest()); }); }
    signRequest(a) { return f(this, arguments, function* (t, { signingDate: r = new Date, signableHeaders: n, unsignableHeaders: o, signingRegion: s, signingService: i } = {}) { let u = yield this.credentialProvider(); this.validateResolvedCredentials(u); let c = s ?? (yield this.regionProvider()), p = Rt(t), { longDate: d, shortDate: l } = this.formatDate(r), m = Ie(l, c, i ?? this.service); p.headers[yt] = d, u.sessionToken && (p.headers[Wr] = u.sessionToken); let y = yield Ne(p, this.sha256); !sn(fe, p.headers) && this.applyChecksum && (p.headers[fe] = y); let w = St(p, o, n), g = yield this.getSignature(d, m, this.getSigningKey(u, c, l, i), this.createCanonicalRequest(p, w, y)); return p.headers[gt] = `${_e} Credential=${u.accessKeyId}/${m}, SignedHeaders=${this.getCanonicalHeaderList(w)}, Signature=${g}`, p; }); }
    getSignature(t, r, n, o) { return f(this, null, function* () { let s = yield this.createStringToSign(t, r, o, _e), i = new this.sha256(yield n); return i.update(U(s)), I(yield i.digest()); }); }
    getSigningKey(t, r, n, o) { return rn(this.sha256, t, n, r, o || this.service); }
};
var Pf = e => { let t = e.credentials, r = !!e.credentials, n; Object.defineProperty(e, "credentials", { set(c) { c && c !== t && c !== n && (r = !0), t = c; let p = Lo(e, { credentials: t, credentialDefaultProvider: e.credentialDefaultProvider }), d = Fo(e, p); r && !d.attributed ? (n = l => f(null, null, function* () { return d(l).then(m => Lr(m, "CREDENTIALS_CODE", "e")); }), n.memoized = d.memoized, n.configBound = d.configBound, n.attributed = !0) : n = d; }, get() { return n; }, enumerable: !0, configurable: !0 }), e.credentials = t; let { signingEscapePath: o = !0, systemClockOffset: s = e.systemClockOffset || 0, sha256: i } = e, a; return e.signer ? a = k(e.signer) : e.regionInfoProvider ? a = () => k(e.region)().then(c => f(null, null, function* () { return [(yield e.regionInfoProvider(c, { useFipsEndpoint: yield e.useFipsEndpoint(), useDualstackEndpoint: yield e.useDualstackEndpoint() })) || {}, c]; })).then(([c, p]) => { let { signingRegion: d, signingService: l } = c; e.signingRegion = e.signingRegion || d || p, e.signingName = e.signingName || l || e.serviceId; let m = S(h({}, e), { credentials: e.credentials, region: e.signingRegion, service: e.signingName, sha256: i, uriEscapePath: o }), y = e.signerConstructor || le; return new y(m); }) : a = c => f(null, null, function* () { c = Object.assign({}, { name: "sigv4", signingName: e.signingName || e.defaultSigningName, signingRegion: yield k(e.region)(), properties: {} }, c); let p = c.signingRegion, d = c.signingName; e.signingRegion = e.signingRegion || p, e.signingName = e.signingName || d || e.serviceId; let l = S(h({}, e), { credentials: e.credentials, region: e.signingRegion, service: e.signingName, sha256: i, uriEscapePath: o }), m = e.signerConstructor || le; return new m(l); }), Object.assign(e, { systemClockOffset: s, signingEscapePath: o, signer: a }); };
function Lo(e, { credentials: t, credentialDefaultProvider: r }) { let n; return t ? t?.memoized ? n = t : n = fr(t, dr, st) : r ? n = k(r(Object.assign({}, e, { parentClientConfig: e }))) : n = () => f(null, null, function* () { throw new Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured."); }), n.memoized = !0, n; }
function Fo(e, t) { if (t.configBound)
    return t; let r = n => f(null, null, function* () { return t(S(h({}, n), { callerClientConfig: e })); }); return r.memoized = t.memoized, r.configBound = !0, r; }
var dn = typeof TextEncoder == "function" ? new TextEncoder : null, jf = e => { if (typeof e == "string") {
    if (dn)
        return dn.encode(e).byteLength;
    let t = e.length;
    for (let r = t - 1; r >= 0; r--) {
        let n = e.charCodeAt(r);
        n > 127 && n <= 2047 ? t++ : n > 2047 && n <= 65535 && (t += 2), n >= 56320 && n <= 57343 && r--;
    }
    return t;
}
else {
    if (typeof e.byteLength == "number")
        return e.byteLength;
    if (typeof e.size == "number")
        return e.size;
} throw new Error(`Body Length computation failed for ${e}`); };
var Ho = ({ output: e, parsedBody: t, exceptionCtor: r, errorCode: n }) => { let o = Bo(e), s = o.httpStatusCode ? o.httpStatusCode + "" : void 0, i = new r({ name: t?.code || t?.Code || n || s || "UnknownError", $fault: "client", $metadata: o }); throw pr(i, t); }, Wf = e => ({ output: t, parsedBody: r, errorCode: n }) => { Ho({ output: t, parsedBody: r, exceptionCtor: e, errorCode: n }); }, Bo = e => ({ httpStatusCode: e.statusCode, requestId: e.headers["x-amzn-requestid"] ?? e.headers["x-amzn-request-id"] ?? e.headers["x-amz-request-id"], extendedRequestId: e.headers["x-amz-id-2"], cfId: e.headers["x-amz-cf-id"] });
var Xf = e => { switch (e) {
    case "standard": return { retryMode: "standard", connectionTimeout: 3100 };
    case "in-region": return { retryMode: "standard", connectionTimeout: 1100 };
    case "cross-region": return { retryMode: "standard", connectionTimeout: 3100 };
    case "mobile": return { retryMode: "standard", connectionTimeout: 3e4 };
    default: return {};
} };
var fn = e => { let t = []; for (let r in re) {
    let n = re[r];
    e[n] !== void 0 && t.push({ algorithmId: () => n, checksumConstructor: () => e[n] });
} return { addChecksumAlgorithm(r) { t.push(r); }, checksumAlgorithms() { return t; } }; }, ln = e => { let t = {}; return e.checksumAlgorithms().forEach(r => { t[r.algorithmId()] = r.checksumConstructor(); }), t; };
var pn = e => ({ setRetryStrategy(t) { e.retryStrategy = t; }, retryStrategy() { return e.retryStrategy; } }), mn = e => { let t = {}; return t.retryStrategy = e.retryStrategy(), t; };
var rl = e => Object.assign(fn(e), pn(e));
var nl = e => Object.assign(ln(e), mn(e));
var Pe = class {
    trace() { }
    debug() { }
    info() { }
    warn() { }
    error() { }
};
function jo(e, t, r) { let n, o, s; if (typeof t > "u" && typeof r > "u")
    n = {}, s = e;
else {
    if (n = e, typeof t == "function")
        return o = t, s = r, qo(n, o, s);
    s = t;
} for (let i of Object.keys(s)) {
    if (!Array.isArray(s[i])) {
        n[i] = s[i];
        continue;
    }
    hn(n, null, s, i);
} return n; }
var il = (e, t) => { let r = {}; for (let n in t)
    hn(r, e, t, n); return r; }, qo = (e, t, r) => jo(e, Object.entries(r).reduce((n, [o, s]) => (Array.isArray(s) ? n[o] = s : typeof s == "function" ? n[o] = [t, s()] : n[o] = [t, s], n), {})), hn = (e, t, r, n) => { if (t !== null) {
    let i = r[n];
    typeof i == "function" && (i = [, i]);
    let [a = zo, u = Go, c = n] = i;
    (typeof a == "function" && a(t[c]) || typeof a != "function" && a) && (e[n] = u(t[c]));
    return;
} let [o, s] = r[n]; if (typeof s == "function") {
    let i, a = o === void 0 && (i = s()) != null, u = typeof o == "function" && !!o(void 0) || typeof o != "function" && !!o;
    a ? e[n] = i : u && (e[n] = s());
}
else {
    let i = o === void 0 && s != null, a = typeof o == "function" && !!o(s) || typeof o != "function" && !!o;
    (i || a) && (e[n] = s);
} }, zo = e => e != null, Go = e => e;
var dl = (e, t) => Qe(e, t).then(r => (t?.utf8Encoder ?? Se)(r));
var Vo = /\d{12}\.ddb/;
function gn(e, t, r) { return f(this, null, function* () { if (r.request?.headers?.["smithy-protocol"] === "rpc-v2-cbor" && D(e, "PROTOCOL_RPC_V2_CBOR", "M"), typeof t.retryStrategy == "function") {
    let s = yield t.retryStrategy();
    typeof s.acquireInitialRetryToken == "function" ? s.constructor?.name?.includes("Adaptive") ? D(e, "RETRY_MODE_ADAPTIVE", "F") : D(e, "RETRY_MODE_STANDARD", "E") : D(e, "RETRY_MODE_LEGACY", "D");
} if (typeof t.accountIdEndpointMode == "function") {
    let s = e.endpointV2;
    switch (String(s?.url?.hostname).match(Vo) && D(e, "ACCOUNT_ID_ENDPOINT", "O"), yield t.accountIdEndpointMode?.()) {
        case "disabled":
            D(e, "ACCOUNT_ID_MODE_DISABLED", "Q");
            break;
        case "preferred":
            D(e, "ACCOUNT_ID_MODE_PREFERRED", "P");
            break;
        case "required":
            D(e, "ACCOUNT_ID_MODE_REQUIRED", "R");
            break;
    }
} let o = e.__smithy_context?.selectedHttpAuthScheme?.identity; if (o?.$source) {
    let s = o;
    s.accountId && D(e, "RESOLVED_ACCOUNT_ID", "T");
    for (let [i, a] of Object.entries(s.$source ?? {}))
        D(e, i, a);
} }); }
var Tt = "user-agent", Me = "x-amz-user-agent";
var yn = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g, En = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g;
function wn(e) { let t = ""; for (let r in e) {
    let n = e[r];
    if (t.length + n.length + 1 <= 1024) {
        t.length ? t += "," + n : t += n;
        continue;
    }
    break;
} return t; }
var Wo = e => (t, r) => n => f(null, null, function* () { let { request: o } = n; if (!A.isInstance(o))
    return t(n); let { headers: s } = o, i = r?.userAgent?.map(ve) || [], a = (yield e.defaultUserAgentProvider()).map(ve); yield gn(r, e, n); let u = r; a.push(`m/${wn(Object.assign({}, r.__smithy_context?.features, u.__aws_sdk_context?.features))}`); let c = e?.customUserAgent?.map(ve) || [], p = yield e.userAgentAppId(); p && a.push(ve([`app/${p}`])); let d = Ur(), l = (d ? [d] : []).concat([...a, ...i, ...c]).join(" "), m = [...a.filter(y => y.startsWith("aws-sdk-")), ...c].join(" "); return e.runtime !== "browser" ? (m && (s[Me] = s[Me] ? `${s[Tt]} ${m}` : m), s[Tt] = l) : s[Me] = l, t(S(h({}, n), { request: o })); }), ve = e => { let t = e[0].split("/").map(i => i.replace(yn, "-")).join("/"), r = e[1]?.replace(En, "-"), n = t.indexOf("/"), o = t.substring(0, n), s = t.substring(n + 1); return o === "api" && (s = s.toLowerCase()), [o, s, r].filter(i => i && i.length > 0).reduce((i, a, u) => { switch (u) {
    case 0: return a;
    case 1: return `${i}/${a}`;
    default: return `${i}#${a}`;
} }, ""); }, Yo = { name: "getUserAgentMiddleware", step: "build", priority: "low", tags: ["SET_USER_AGENT", "USER_AGENT"], override: !0 }, Rl = e => ({ applyToStack: t => { t.add(Wo(e), Yo); } });
var Rn = new Set, Tn = (e, t = G) => { if (!Rn.has(e) && !t(e))
    throw new Error(`Region not accepted: region="${e}" is not a valid hostname component.`); Rn.add(e); };
var $e = e => typeof e == "string" && (e.startsWith("fips-") || e.endsWith("-fips"));
var An = e => $e(e) ? ["fips-aws-global", "aws-fips"].includes(e) ? "us-east-1" : e.replace(/fips-(dkr-|prod-)?|-fips/, "") : e;
var Ml = e => { let { region: t, useFipsEndpoint: r } = e; if (!t)
    throw new Error("Region is missing"); return Object.assign(e, { region: () => f(null, null, function* () { let n = typeof t == "function" ? yield t() : t, o = An(n); return Tn(o), o; }), useFipsEndpoint: () => f(null, null, function* () { let n = typeof t == "string" ? t : yield t(); return $e(n) ? !0 : typeof r != "function" ? Promise.resolve(!!r) : r(); }) }); };
var bn = "content-length";
function Xo(e) { return t => r => f(null, null, function* () { let n = r.request; if (A.isInstance(n)) {
    let { body: o, headers: s } = n;
    if (o && Object.keys(s).map(i => i.toLowerCase()).indexOf(bn) === -1)
        try {
            let i = e(o);
            n.headers = S(h({}, n.headers), { [bn]: String(i) });
        }
        catch { }
} return t(S(h({}, r), { request: n })); }); }
var Ko = { step: "build", tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"], name: "contentLengthMiddleware", override: !0 }, Ul = e => ({ applyToStack: t => { t.add(Xo(e.bodyLengthChecker), Ko); } });
var _n = ({ config: e, instructions: t }) => (r, n) => o => f(null, null, function* () { e.isCustomEndpoint && cr(n, "ENDPOINT_OVERRIDE", "N"); let s = yield Ot(o.input, { getEndpointParameterInstructions() { return t; } }, h({}, e), n); n.endpointV2 = s, n.authSchemes = s.properties?.authSchemes; let i = n.authSchemes?.[0]; if (i) {
    n.signing_region = i.signingRegion, n.signing_service = i.signingName;
    let u = Y(n)?.selectedHttpAuthScheme?.httpAuthOption;
    u && (u.signingProperties = Object.assign(u.signingProperties || {}, { signing_region: i.signingRegion, signingRegion: i.signingRegion, signing_service: i.signingName, signingName: i.signingName, signingRegionSet: i.signingRegionSet }, i.properties));
} return r(h({}, o)); });
var Qo = { step: "serialize", tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"], name: "endpointV2Middleware", override: !0, relation: "before", toMiddleware: Ve.name }, Wl = (e, t) => ({ applyToStack: r => { r.addRelativeTo(_n({ config: e, instructions: t }), Qo); } });
var Jl = e => { let t = e.tls ?? !0, { endpoint: r, useDualstackEndpoint: n, useFipsEndpoint: o } = e, s = r != null ? () => f(null, null, function* () { return Nt(yield M(r)()); }) : void 0, a = Object.assign(e, { endpoint: s, tls: t, isCustomEndpoint: !!r, useDualstackEndpoint: M(n ?? !1), useFipsEndpoint: M(o ?? !1) }), u; return a.serviceConfiguredEndpoint = () => f(null, null, function* () { return e.serviceId && !u && (u = It(e.serviceId)), u; }), a; };
var j = (function (e) { return e.STANDARD = "standard", e.ADAPTIVE = "adaptive", e; })(j || {}), pe = 3, Jo = j.STANDARD;
var Cn = ["BandwidthLimitExceeded", "EC2ThrottledException", "LimitExceededException", "PriorRequestNotComplete", "ProvisionedThroughputExceededException", "RequestLimitExceeded", "RequestThrottled", "RequestThrottledException", "SlowDown", "ThrottledException", "Throttling", "ThrottlingException", "TooManyRequestsException", "TransactionInProgressException"], In = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"], Nn = [500, 502, 503, 504], On = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"], Dn = ["EHOSTUNREACH", "ENETUNREACH", "ENOTFOUND"];
var Zo = e => e?.$retryable !== void 0;
var es = e => e.$metadata?.clockSkewCorrected, ts = e => { let t = new Set(["Failed to fetch", "NetworkError when attempting to fetch resource", "The Internet connection appears to be offline", "Load failed", "Network request failed"]); return e && e instanceof TypeError ? t.has(e.message) : !1; }, ke = e => e.$metadata?.httpStatusCode === 429 || Cn.includes(e.name) || e.$retryable?.throttling == !0, Ue = (e, t = 0) => Zo(e) || es(e) || In.includes(e.name) || On.includes(e?.code || "") || Dn.includes(e?.code || "") || Nn.includes(e.$metadata?.httpStatusCode || 0) || ts(e) || e.cause !== void 0 && t <= 10 && Ue(e.cause, t + 1), Pn = e => { if (e.$metadata?.httpStatusCode !== void 0) {
    let t = e.$metadata.httpStatusCode;
    return 500 <= t && t <= 599 && !Ue(e);
} return !1; };
var Le = class e {
    static setTimeoutFn = setTimeout;
    beta;
    minCapacity;
    minFillRate;
    scaleConstant;
    smooth;
    currentCapacity = 0;
    enabled = !1;
    lastMaxRate = 0;
    measuredTxRate = 0;
    requestCount = 0;
    fillRate;
    lastThrottleTime;
    lastTimestamp = 0;
    lastTxRateBucket;
    maxCapacity;
    timeWindow = 0;
    constructor(t) { this.beta = t?.beta ?? .7, this.minCapacity = t?.minCapacity ?? 1, this.minFillRate = t?.minFillRate ?? .5, this.scaleConstant = t?.scaleConstant ?? .4, this.smooth = t?.smooth ?? .8; let r = this.getCurrentTimeInSeconds(); this.lastThrottleTime = r, this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds()), this.fillRate = this.minFillRate, this.maxCapacity = this.minCapacity; }
    getCurrentTimeInSeconds() { return Date.now() / 1e3; }
    getSendToken() { return f(this, null, function* () { return this.acquireTokenBucket(1); }); }
    acquireTokenBucket(t) { return f(this, null, function* () { if (this.enabled) {
        if (this.refillTokenBucket(), t > this.currentCapacity) {
            let r = (t - this.currentCapacity) / this.fillRate * 1e3;
            yield new Promise(n => e.setTimeoutFn(n, r));
        }
        this.currentCapacity = this.currentCapacity - t;
    } }); }
    refillTokenBucket() { let t = this.getCurrentTimeInSeconds(); if (!this.lastTimestamp) {
        this.lastTimestamp = t;
        return;
    } let r = (t - this.lastTimestamp) * this.fillRate; this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + r), this.lastTimestamp = t; }
    updateClientSendingRate(t) { let r; if (this.updateMeasuredRate(), ke(t)) {
        let o = this.enabled ? Math.min(this.measuredTxRate, this.fillRate) : this.measuredTxRate;
        this.lastMaxRate = o, this.calculateTimeWindow(), this.lastThrottleTime = this.getCurrentTimeInSeconds(), r = this.cubicThrottle(o), this.enableTokenBucket();
    }
    else
        this.calculateTimeWindow(), r = this.cubicSuccess(this.getCurrentTimeInSeconds()); let n = Math.min(r, 2 * this.measuredTxRate); this.updateTokenBucketRate(n); }
    calculateTimeWindow() { this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3)); }
    cubicThrottle(t) { return this.getPrecise(t * this.beta); }
    cubicSuccess(t) { return this.getPrecise(this.scaleConstant * Math.pow(t - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate); }
    enableTokenBucket() { this.enabled = !0; }
    updateTokenBucketRate(t) { this.refillTokenBucket(), this.fillRate = Math.max(t, this.minFillRate), this.maxCapacity = Math.max(t, this.minCapacity), this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity); }
    updateMeasuredRate() { let t = this.getCurrentTimeInSeconds(), r = Math.floor(t * 2) / 2; if (this.requestCount++, r > this.lastTxRateBucket) {
        let n = this.requestCount / (r - this.lastTxRateBucket);
        this.measuredTxRate = this.getPrecise(n * this.smooth + this.measuredTxRate * (1 - this.smooth)), this.requestCount = 0, this.lastTxRateBucket = r;
    } }
    getPrecise(t) { return parseFloat(t.toFixed(8)); }
};
var Mn = "amz-sdk-invocation-id", vn = "amz-sdk-request";
var kn = () => { let e = 100; return { computeNextBackoffDelay: n => Math.floor(Math.min(2e4, Math.random() * 2 ** n * e)), setDelayBase: n => { e = n; } }; };
var bt = ({ retryDelay: e, retryCount: t, retryCost: r }) => ({ getRetryCount: () => t, getRetryDelay: () => Math.min(2e4, e), getRetryCost: () => r });
var Z = class {
    maxAttempts;
    mode = j.STANDARD;
    capacity = 500;
    retryBackoffStrategy = kn();
    maxAttemptsProvider;
    constructor(t) { this.maxAttempts = t, this.maxAttemptsProvider = typeof t == "function" ? t : () => f(this, null, function* () { return t; }); }
    acquireInitialRetryToken(t) { return f(this, null, function* () { return bt({ retryDelay: 100, retryCount: 0 }); }); }
    refreshRetryTokenForRetry(t, r) { return f(this, null, function* () { let n = yield this.getMaxAttempts(); if (this.shouldRetry(t, r, n)) {
        let o = r.errorType;
        this.retryBackoffStrategy.setDelayBase(o === "THROTTLING" ? 500 : 100);
        let s = this.retryBackoffStrategy.computeNextBackoffDelay(t.getRetryCount()), i = r.retryAfterHint ? Math.max(r.retryAfterHint.getTime() - Date.now() || 0, s) : s, a = this.getCapacityCost(o);
        return this.capacity -= a, bt({ retryDelay: i, retryCount: t.getRetryCount() + 1, retryCost: a });
    } throw new Error("No retry token available"); }); }
    recordSuccess(t) { this.capacity = Math.max(500, this.capacity + (t.getRetryCost() ?? 1)); }
    getCapacity() { return this.capacity; }
    getMaxAttempts() { return f(this, null, function* () { try {
        return yield this.maxAttemptsProvider();
    }
    catch {
        return console.warn(`Max attempts provider could not resolve. Using default of ${pe}`), pe;
    } }); }
    shouldRetry(t, r, n) { return t.getRetryCount() + 1 < n && this.capacity >= this.getCapacityCost(r.errorType) && this.isRetryableError(r.errorType); }
    getCapacityCost(t) { return t === "TRANSIENT" ? 10 : 5; }
    isRetryableError(t) { return t === "THROTTLING" || t === "TRANSIENT"; }
};
var Fe = class {
    maxAttemptsProvider;
    rateLimiter;
    standardRetryStrategy;
    mode = j.ADAPTIVE;
    constructor(t, r) { this.maxAttemptsProvider = t; let { rateLimiter: n } = r ?? {}; this.rateLimiter = n ?? new Le, this.standardRetryStrategy = new Z(t); }
    acquireInitialRetryToken(t) { return f(this, null, function* () { return yield this.rateLimiter.getSendToken(), this.standardRetryStrategy.acquireInitialRetryToken(t); }); }
    refreshRetryTokenForRetry(t, r) { return f(this, null, function* () { return this.rateLimiter.updateClientSendingRate(r), this.standardRetryStrategy.refreshRetryTokenForRetry(t, r); }); }
    recordSuccess(t) { this.rateLimiter.updateClientSendingRate({}), this.standardRetryStrategy.recordSuccess(t); }
};
var Ip = e => { let { retryStrategy: t, retryMode: r, maxAttempts: n } = e, o = M(n ?? pe); return Object.assign(e, { maxAttempts: o, retryStrategy: () => f(null, null, function* () { return t || ((yield M(r)()) === j.ADAPTIVE ? new Fe(o) : new Z(o)); }) }); };
var Un = e => e?.body instanceof ReadableStream;
var Ln = e => e instanceof Error ? e : e instanceof Object ? Object.assign(new Error, e) : typeof e == "string" ? new Error(e) : new Error(`AWS SDK error wrapper for ${e}`);
var os = e => (t, r) => n => f(null, null, function* () { let o = yield e.retryStrategy(), s = yield e.maxAttempts(); if (ss(o)) {
    o = o;
    let i = yield o.acquireInitialRetryToken(r.partition_id), a = new Error, u = 0, c = 0, { request: p } = n, d = A.isInstance(p);
    for (d && (p.headers[Mn] = ir());;)
        try {
            d && (p.headers[vn] = `attempt=${u + 1}; max=${s}`);
            let { response: l, output: m } = yield t(n);
            return o.recordSuccess(i), m.$metadata.attempts = u + 1, m.$metadata.totalRetryDelay = c, { response: l, output: m };
        }
        catch (l) {
            let m = is(l);
            if (a = Ln(l), d && Un(p))
                throw (r.logger instanceof Pe ? console : r.logger)?.warn("An error was encountered in a non-retryable streaming request."), a;
            try {
                i = yield o.refreshRetryTokenForRetry(i, m);
            }
            catch {
                throw a.$metadata || (a.$metadata = {}), a.$metadata.attempts = u + 1, a.$metadata.totalRetryDelay = c, a;
            }
            u = i.getRetryCount();
            let y = i.getRetryDelay();
            c += y, yield new Promise(w => setTimeout(w, y));
        }
}
else
    return o = o, o?.mode && (r.userAgent = [...r.userAgent || [], ["cfg/retry-mode", o.mode]]), o.retry(t, n); }), ss = e => typeof e.acquireInitialRetryToken < "u" && typeof e.refreshRetryTokenForRetry < "u" && typeof e.recordSuccess < "u", is = e => { let t = { error: e, errorType: as(e) }, r = us(e.$response); return r && (t.retryAfterHint = r), t; }, as = e => ke(e) ? "THROTTLING" : Ue(e) ? "TRANSIENT" : Pn(e) ? "SERVER_ERROR" : "CLIENT_ERROR", cs = { name: "retryMiddleware", tags: ["RETRY"], step: "finalizeRequest", priority: "high", override: !0 }, Hp = e => ({ applyToStack: t => { t.add(os(e), cs); } }), us = e => { if (!O.isInstance(e))
    return; let t = Object.keys(e.headers).find(s => s.toLowerCase() === "retry-after"); if (!t)
    return; let r = e.headers[t], n = Number(r); return Number.isNaN(n) ? new Date(r) : new Date(n * 1e3); };
var qp = !1;
var Gp = !1;
var Wp = ({ serviceId: e, clientVersion: t }) => r => f(null, null, function* () { let n = typeof window < "u" ? window.navigator : void 0, o = n?.userAgent ?? "", s = n?.userAgentData?.platform ?? Fn.os(o) ?? "other", i = void 0, a = n?.userAgentData?.brands ?? [], u = a[a.length - 1], c = u?.brand ?? Fn.browser(o) ?? "unknown", p = u?.version ?? "unknown", d = [["aws-sdk-js", t], ["ua", "2.1"], [`os/${s}`, i], ["lang/js"], ["md/browser", `${c}_${p}`]]; e && d.push([`api/${e}`, t]); let l = yield r?.userAgentAppId?.(); return l && d.push([`app/${l}`]), d; }), Fn = { os(e) { if (/iPhone|iPad|iPod/.test(e))
        return "iOS"; if (/Macintosh|Mac OS X/.test(e))
        return "macOS"; if (/Windows NT/.test(e))
        return "Windows"; if (/Android/.test(e))
        return "Android"; if (/Linux/.test(e))
        return "Linux"; }, browser(e) { if (/EdgiOS|EdgA|Edg\//.test(e))
        return "Microsoft Edge"; if (/Firefox\//.test(e))
        return "Firefox"; if (/Chrome\//.test(e))
        return "Chrome"; if (/Safari\//.test(e))
        return "Safari"; } };
var Kp = e => () => Promise.reject(e);
var Hn = ["in-region", "cross-region", "mobile", "standard", "legacy"];
var tm = ({ defaultsMode: e } = {}) => Hr(() => f(null, null, function* () { let t = typeof e == "function" ? yield e() : e; switch (t?.toLowerCase()) {
    case "auto": return Promise.resolve(ds() ? "mobile" : "standard");
    case "mobile":
    case "in-region":
    case "cross-region":
    case "standard":
    case "legacy": return Promise.resolve(t?.toLocaleLowerCase());
    case void 0: return Promise.resolve("legacy");
    default: throw new Error(`Invalid parameter for "defaultsMode", expect ${Hn.join(", ")}, got ${t}`);
} })), ds = () => { let e = window?.navigator; if (e?.connection) {
    let { effectiveType: t, rtt: r, downlink: n } = e?.connection;
    if (typeof t == "string" && t !== "4g" || Number(r) > 100 || Number(n) < 10)
        return !0;
} return e?.userAgentData?.mobile || typeof e?.maxTouchPoints == "number" && e?.maxTouchPoints > 1; };
var om = e => ({ setRegion(t) { e.region = t; }, region() { return e.region; } }), sm = e => ({ region: e.region() });
var fs = {};
function am() { return typeof window < "u" ? window : typeof self < "u" ? self : fs; }
export { Ts as a, As as b, A as c, O as d, Vs as e, Xs as f, ni as g, Y as h, M as i, fi as j, Si as k, Jn as l, Ci as m, eo as n, we as o, U as p, Se as q, Gt as r, Yt as s, na as t, Kt as u, I as v, Qe as w, da as x, Je as y, fa as z, co as A, la as B, pa as C, ma as D, ha as E, Ea as F, Sa as G, xa as H, Ra as I, ir as J, Ao as K, Bt as L, ur as M, Ka as N, mr as O, ce as P, Iu as Q, vo as R, D as S, de as T, lt as U, Od as V, nn as W, le as X, Pf as Y, jf as Z, Mt as _, qe as $, Za as aa, tc as ba, lr as ca, pr as da, Wf as ea, Xf as fa, rl as ga, nl as ha, Pe as ia, jo as ja, il as ka, dl as la, Rl as ma, qp as na, Gp as oa, Ml as pa, Ul as qa, Wl as ra, Jl as sa, pe as ta, Jo as ua, Ip as va, Hp as wa, am as xa, Wp as ya, Kp as za, tm as Aa, om as Ba, sm as Ca };
//# sourceMappingURL=chunk-RHCD2AVL.js.map
