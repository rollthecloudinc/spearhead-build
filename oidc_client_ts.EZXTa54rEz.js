import { a as p, b as D, d as S, j as K, k as a } from "@nf-internal/chunk-GL2BOVXA";
var H = class extends Error {
};
H.prototype.name = "InvalidTokenError";
function Ce(t) { return decodeURIComponent(atob(t).replace(/(.)/g, (e, s) => { let i = s.charCodeAt(0).toString(16).toUpperCase(); return i.length < 2 && (i = "0" + i), "%" + i; })); }
function Ue(t) { let e = t.replace(/-/g, "+").replace(/_/g, "/"); switch (e.length % 4) {
    case 0: break;
    case 2:
        e += "==";
        break;
    case 3:
        e += "=";
        break;
    default: throw new Error("base64 string is not of the correct length");
} try {
    return Ce(e);
}
catch {
    return atob(e);
} }
function oe(t, e) { if (typeof t != "string")
    throw new H("Invalid token specified: must be a string"); e || (e = {}); let s = e.header === !0 ? 0 : 1, i = t.split(".")[s]; if (typeof i != "string")
    throw new H(`Invalid token specified: missing part #${s + 1}`); let r; try {
    r = Ue(i);
}
catch (n) {
    throw new H(`Invalid token specified: invalid base64 for part #${s + 1} (${n.message})`);
} try {
    return JSON.parse(r);
}
catch (n) {
    throw new H(`Invalid token specified: invalid json for part #${s + 1} (${n.message})`);
} }
var Ae = { debug: () => { }, info: () => { }, warn: () => { }, error: () => { } }, T, R, F = (t => (t[t.NONE = 0] = "NONE", t[t.ERROR = 1] = "ERROR", t[t.WARN = 2] = "WARN", t[t.INFO = 3] = "INFO", t[t.DEBUG = 4] = "DEBUG", t))(F || {});
(t => { function e() { T = 3, R = Ae; } t.reset = e; function s(r) { if (!(0 <= r && r <= 4))
    throw new Error("Invalid log level"); T = r; } t.setLevel = s; function i(r) { R = r; } t.setLogger = i; })(F || (F = {}));
var u = class k {
    constructor(e) { this._name = e; }
    debug(...e) { T >= 4 && R.debug(k._format(this._name, this._method), ...e); }
    info(...e) { T >= 3 && R.info(k._format(this._name, this._method), ...e); }
    warn(...e) { T >= 2 && R.warn(k._format(this._name, this._method), ...e); }
    error(...e) { T >= 1 && R.error(k._format(this._name, this._method), ...e); }
    throw(e) { throw this.error(e), e; }
    create(e) { let s = Object.create(this); return s._method = e, s.debug("begin"), s; }
    static createStatic(e, s) { let i = new k(`${e}.${s}`); return i.debug("begin"), i; }
    static _format(e, s) { let i = `[${e}]`; return s ? `${i} ${s}:` : i; }
    static debug(e, ...s) { T >= 4 && R.debug(k._format(e), ...s); }
    static info(e, ...s) { T >= 3 && R.info(k._format(e), ...s); }
    static warn(e, ...s) { T >= 2 && R.warn(k._format(e), ...s); }
    static error(e, ...s) { T >= 1 && R.error(k._format(e), ...s); }
};
F.reset();
var z = class {
    static decode(t) { try {
        return oe(t);
    }
    catch (e) {
        throw u.error("JwtUtils.decode", e), e;
    } }
    static generateSignedJwt(t, e, s) { return a(this, null, function* () { let i = v.encodeBase64Url(new TextEncoder().encode(JSON.stringify(t))), r = v.encodeBase64Url(new TextEncoder().encode(JSON.stringify(e))), n = `${i}.${r}`, o = yield window.crypto.subtle.sign({ name: "ECDSA", hash: { name: "SHA-256" } }, s, new TextEncoder().encode(n)), l = v.encodeBase64Url(new Uint8Array(o)); return `${n}.${l}`; }); }
}, Oe = "10000000-1000-4000-8000-100000000000", V = t => btoa([...new Uint8Array(t)].map(e => String.fromCharCode(e)).join("")), qe = (() => { let t = class E {
    static _randomWord() { let s = new Uint32Array(1); return crypto.getRandomValues(s), s[0]; }
    static generateUUIDv4() { return Oe.replace(/[018]/g, i => (+i ^ E._randomWord() & 15 >> +i / 4).toString(16)).replace(/-/g, ""); }
    static generateCodeVerifier() { return E.generateUUIDv4() + E.generateUUIDv4() + E.generateUUIDv4(); }
    static generateCodeChallenge(s) { return a(this, null, function* () { if (!crypto.subtle)
        throw new Error("Crypto.subtle is available only in secure contexts (HTTPS)."); try {
        let r = new TextEncoder().encode(s), n = yield crypto.subtle.digest("SHA-256", r);
        return V(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    }
    catch (i) {
        throw u.error("CryptoUtils.generateCodeChallenge", i), i;
    } }); }
    static generateBasicAuth(s, i) { let n = new TextEncoder().encode([s, i].join(":")); return V(n); }
    static hash(s, i) { return a(this, null, function* () { let r = new TextEncoder().encode(i), n = yield crypto.subtle.digest(s, r); return new Uint8Array(n); }); }
    static customCalculateJwkThumbprint(s) { return a(this, null, function* () { let i; switch (s.kty) {
        case "RSA":
            i = { e: s.e, kty: s.kty, n: s.n };
            break;
        case "EC":
            i = { crv: s.crv, kty: s.kty, x: s.x, y: s.y };
            break;
        case "OKP":
            i = { crv: s.crv, kty: s.kty, x: s.x };
            break;
        case "oct":
            i = { crv: s.k, kty: s.kty };
            break;
        default: throw new Error("Unknown jwk type");
    } let r = yield E.hash("SHA-256", JSON.stringify(i)); return E.encodeBase64Url(r); }); }
    static generateDPoPProof(l) { return a(this, arguments, function* ({ url: s, accessToken: i, httpMethod: r, keyPair: n, nonce: o }) { let c, h, d = { jti: window.crypto.randomUUID(), htm: r ?? "GET", htu: s, iat: Math.floor(Date.now() / 1e3) }; i && (c = yield E.hash("SHA-256", i), h = E.encodeBase64Url(c), d.ath = h), o && (d.nonce = o); try {
        let g = yield crypto.subtle.exportKey("jwk", n.publicKey), _ = { alg: "ES256", typ: "dpop+jwt", jwk: { crv: g.crv, kty: g.kty, x: g.x, y: g.y } };
        return yield z.generateSignedJwt(_, d, n.privateKey);
    }
    catch (g) {
        throw g instanceof TypeError ? new Error(`Error exporting dpop public key: ${g.message}`) : g;
    } }); }
    static generateDPoPJkt(s) { return a(this, null, function* () { try {
        let i = yield crypto.subtle.exportKey("jwk", s.publicKey);
        return yield E.customCalculateJwkThumbprint(i);
    }
    catch (i) {
        throw i instanceof TypeError ? new Error(`Could not retrieve dpop keys from storage: ${i.message}`) : i;
    } }); }
    static generateDPoPKeys() { return a(this, null, function* () { return yield window.crypto.subtle.generateKey({ name: "ECDSA", namedCurve: "P-256" }, !1, ["sign", "verify"]); }); }
}; return t.encodeBase64Url = e => V(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_"), t; })(), v = qe, O = class {
    constructor(t) { this._name = t, this._callbacks = [], this._logger = new u(`Event('${this._name}')`); }
    addHandler(t) { return this._callbacks.push(t), () => this.removeHandler(t); }
    removeHandler(t) { let e = this._callbacks.lastIndexOf(t); e >= 0 && this._callbacks.splice(e, 1); }
    raise(...t) { return a(this, null, function* () { this._logger.debug("raise:", ...t); for (let e of this._callbacks)
        yield e(...t); }); }
}, ae = class {
    static center(e) { var t = S(e, []); var s, i, r; return t.width == null && (t.width = (s = [800, 720, 600, 480].find(n => n <= window.outerWidth / 1.618)) != null ? s : 360), (i = t.left) != null || (t.left = Math.max(0, Math.round(window.screenX + (window.outerWidth - t.width) / 2))), t.height != null && ((r = t.top) != null || (t.top = Math.max(0, Math.round(window.screenY + (window.outerHeight - t.height) / 2)))), t; }
    static serialize(t) { return Object.entries(t).filter(([, e]) => e != null).map(([e, s]) => `${e}=${typeof s != "boolean" ? s : s ? "yes" : "no"}`).join(","); }
}, I = class L extends O {
    constructor() { super(...arguments), this._logger = new u(`Timer('${this._name}')`), this._timerHandle = null, this._expiration = 0, this._callback = () => { let e = this._expiration - L.getEpochTime(); this._logger.debug("timer completes in", e), this._expiration <= L.getEpochTime() && (this.cancel(), super.raise()); }; }
    static getEpochTime() { return Math.floor(Date.now() / 1e3); }
    init(e) { let s = this._logger.create("init"); e = Math.max(Math.floor(e), 1); let i = L.getEpochTime() + e; if (this.expiration === i && this._timerHandle) {
        s.debug("skipping since already initialized for expiration at", this.expiration);
        return;
    } this.cancel(), s.debug("using duration", e), this._expiration = i; let r = Math.min(e, 5); this._timerHandle = setInterval(this._callback, r * 1e3); }
    get expiration() { return this._expiration; }
    cancel() { this._logger.create("cancel"), this._timerHandle && (clearInterval(this._timerHandle), this._timerHandle = null); }
}, X = class {
    static readParams(t, e = "query") { if (!t)
        throw new TypeError("Invalid URL"); let i = new URL(t, "http://127.0.0.1")[e === "fragment" ? "hash" : "search"]; return new URLSearchParams(i.slice(1)); }
}, J = ";", $ = class extends Error {
    constructor(t, e) { var s, i, r; if (super(t.error_description || t.error || ""), this.form = e, this.name = "ErrorResponse", !t.error)
        throw u.error("ErrorResponse", "No error passed"), new Error("No error passed"); this.error = t.error, this.error_description = (s = t.error_description) != null ? s : null, this.error_uri = (i = t.error_uri) != null ? i : null, this.state = t.userState, this.session_state = (r = t.session_state) != null ? r : null, this.url_state = t.url_state; }
}, ie = class extends Error {
    constructor(t) { super(t), this.name = "ErrorTimeout"; }
}, Ne = class {
    constructor(t) { this._logger = new u("AccessTokenEvents"), this._expiringTimer = new I("Access token expiring"), this._expiredTimer = new I("Access token expired"), this._expiringNotificationTimeInSeconds = t.expiringNotificationTimeInSeconds; }
    load(t) { return a(this, null, function* () { let e = this._logger.create("load"); if (t.access_token && t.expires_in !== void 0) {
        let s = t.expires_in;
        if (e.debug("access token present, remaining duration:", s), s > 0) {
            let r = s - this._expiringNotificationTimeInSeconds;
            r <= 0 && (r = 1), e.debug("registering expiring timer, raising in", r, "seconds"), this._expiringTimer.init(r);
        }
        else
            e.debug("canceling existing expiring timer because we're past expiration."), this._expiringTimer.cancel();
        let i = s + 1;
        e.debug("registering expired timer, raising in", i, "seconds"), this._expiredTimer.init(i);
    }
    else
        this._expiringTimer.cancel(), this._expiredTimer.cancel(); }); }
    unload() { return a(this, null, function* () { this._logger.debug("unload: canceling existing access token timers"), this._expiringTimer.cancel(), this._expiredTimer.cancel(); }); }
    addAccessTokenExpiring(t) { return this._expiringTimer.addHandler(t); }
    removeAccessTokenExpiring(t) { this._expiringTimer.removeHandler(t); }
    addAccessTokenExpired(t) { return this._expiredTimer.addHandler(t); }
    removeAccessTokenExpired(t) { this._expiredTimer.removeHandler(t); }
}, Me = class {
    constructor(t, e, s, i, r) { this._callback = t, this._client_id = e, this._intervalInSeconds = i, this._stopOnError = r, this._logger = new u("CheckSessionIFrame"), this._timer = null, this._session_state = null, this._message = o => { o.origin === this._frame_origin && o.source === this._frame.contentWindow && (o.data === "error" ? (this._logger.error("error message from check session op iframe"), this._stopOnError && this.stop()) : o.data === "changed" ? (this._logger.debug("changed message from check session op iframe"), this.stop(), this._callback()) : this._logger.debug(o.data + " message from check session op iframe")); }; let n = new URL(s); this._frame_origin = n.origin, this._frame = window.document.createElement("iframe"), this._frame.style.visibility = "hidden", this._frame.style.position = "fixed", this._frame.style.left = "-1000px", this._frame.style.top = "0", this._frame.width = "0", this._frame.height = "0", this._frame.src = n.href; }
    load() { return new Promise(t => { this._frame.onload = () => { t(); }, window.document.body.appendChild(this._frame), window.addEventListener("message", this._message, !1); }); }
    start(t) { if (this._session_state === t)
        return; this._logger.create("start"), this.stop(), this._session_state = t; let e = () => { !this._frame.contentWindow || !this._session_state || this._frame.contentWindow.postMessage(this._client_id + " " + this._session_state, this._frame_origin); }; e(), this._timer = setInterval(e, this._intervalInSeconds * 1e3); }
    stop() { this._logger.create("stop"), this._session_state = null, this._timer && (clearInterval(this._timer), this._timer = null); }
}, he = class {
    constructor() { this._logger = new u("InMemoryWebStorage"), this._data = {}; }
    clear() { this._logger.create("clear"), this._data = {}; }
    getItem(t) { return this._logger.create(`getItem('${t}')`), this._data[t]; }
    setItem(t, e) { this._logger.create(`setItem('${t}')`), this._data[t] = e; }
    removeItem(t) { this._logger.create(`removeItem('${t}')`), delete this._data[t]; }
    get length() { return Object.getOwnPropertyNames(this._data).length; }
    key(t) { return Object.getOwnPropertyNames(this._data)[t]; }
}, Y = class extends Error {
    constructor(t, e) { super(e), this.name = "ErrorDPoPNonce", this.nonce = t; }
}, re = class {
    constructor(t = [], e = null, s = {}) { this._jwtHandler = e, this._extraHeaders = s, this._logger = new u("JsonService"), this._contentTypes = [], this._contentTypes.push(...t, "application/json"), e && this._contentTypes.push("application/jwt"); }
    fetchWithTimeout(s) { return a(this, arguments, function* (t, e = {}) { let l = e, { timeoutInSeconds: i } = l, r = S(l, ["timeoutInSeconds"]); if (!i)
        return yield fetch(t, r); let n = new AbortController, o = setTimeout(() => n.abort(), i * 1e3); try {
        return yield fetch(t, D(p({}, e), { signal: n.signal }));
    }
    catch (c) {
        throw c instanceof DOMException && c.name === "AbortError" ? new ie("Network timed out") : c;
    }
    finally {
        clearTimeout(o);
    } }); }
    getJson(r) { return a(this, arguments, function* (t, { token: e, credentials: s, timeoutInSeconds: i } = {}) { let n = this._logger.create("getJson"), o = { Accept: this._contentTypes.join(", ") }; e && (n.debug("token passed, setting Authorization header"), o.Authorization = "Bearer " + e), this._appendExtraHeaders(o); let l; try {
        n.debug("url:", t), l = yield this.fetchWithTimeout(t, { method: "GET", headers: o, timeoutInSeconds: i, credentials: s });
    }
    catch (d) {
        throw n.error("Network Error"), d;
    } n.debug("HTTP response received, status", l.status); let c = l.headers.get("Content-Type"); if (c && !this._contentTypes.find(d => c.startsWith(d)) && n.throw(new Error(`Invalid response Content-Type: ${c ?? "undefined"}, from URL: ${t}`)), l.ok && this._jwtHandler && c?.startsWith("application/jwt"))
        return yield this._jwtHandler(yield l.text()); let h; try {
        h = yield l.json();
    }
    catch (d) {
        throw n.error("Error parsing JSON response", d), l.ok ? d : new Error(`${l.statusText} (${l.status})`);
    } if (!l.ok)
        throw n.error("Error from server:", h), h.error ? new $(h) : new Error(`${l.statusText} (${l.status}): ${JSON.stringify(h)}`); return h; }); }
    postForm(o, l) { return a(this, arguments, function* (t, { body: e, basicAuth: s, timeoutInSeconds: i, initCredentials: r, extraHeaders: n }) { let c = this._logger.create("postForm"), h = p({ Accept: this._contentTypes.join(", "), "Content-Type": "application/x-www-form-urlencoded" }, n); s !== void 0 && (h.Authorization = "Basic " + s), this._appendExtraHeaders(h); let d; try {
        c.debug("url:", t), d = yield this.fetchWithTimeout(t, { method: "POST", headers: h, body: e, timeoutInSeconds: i, credentials: r });
    }
    catch (w) {
        throw c.error("Network error"), w;
    } c.debug("HTTP response received, status", d.status); let g = d.headers.get("Content-Type"); if (g && !this._contentTypes.find(w => g.startsWith(w)))
        throw new Error(`Invalid response Content-Type: ${g ?? "undefined"}, from URL: ${t}`); let _ = yield d.text(), f = {}; if (_)
        try {
            f = JSON.parse(_);
        }
        catch (w) {
            throw c.error("Error parsing JSON response", w), d.ok ? w : new Error(`${d.statusText} (${d.status})`);
        } if (!d.ok) {
        if (c.error("Error from server:", f), d.headers.has("dpop-nonce")) {
            let w = d.headers.get("dpop-nonce");
            throw new Y(w, `${JSON.stringify(f)}`);
        }
        throw f.error ? new $(f, e) : new Error(`${d.statusText} (${d.status}): ${JSON.stringify(f)}`);
    } return f; }); }
    _appendExtraHeaders(t) { let e = this._logger.create("appendExtraHeaders"), s = Object.keys(this._extraHeaders), i = ["accept", "content-type"], r = ["authorization"]; s.length !== 0 && s.forEach(n => { if (i.includes(n.toLocaleLowerCase())) {
        e.warn("Protected header could not be set", n, i);
        return;
    } if (r.includes(n.toLocaleLowerCase()) && Object.keys(t).includes(n)) {
        e.warn("Header could not be overridden", n, r);
        return;
    } let o = typeof this._extraHeaders[n] == "function" ? this._extraHeaders[n]() : this._extraHeaders[n]; o && o !== "" && (t[n] = o); }); }
}, je = class {
    constructor(t) { this._settings = t, this._logger = new u("MetadataService"), this._signingKeys = null, this._metadata = null, this._metadataUrl = this._settings.metadataUrl, this._jsonService = new re(["application/jwk-set+json"], null, this._settings.extraHeaders), this._settings.signingKeys && (this._logger.debug("using signingKeys from settings"), this._signingKeys = this._settings.signingKeys), this._settings.metadata && (this._logger.debug("using metadata from settings"), this._metadata = this._settings.metadata), this._settings.fetchRequestCredentials && (this._logger.debug("using fetchRequestCredentials from settings"), this._fetchRequestCredentials = this._settings.fetchRequestCredentials); }
    resetSigningKeys() { this._signingKeys = null; }
    getMetadata() { return a(this, null, function* () { let t = this._logger.create("getMetadata"); if (this._metadata)
        return t.debug("using cached values"), this._metadata; if (!this._metadataUrl)
        throw t.throw(new Error("No authority or metadataUrl configured on settings")), null; t.debug("getting metadata from", this._metadataUrl); let e = yield this._jsonService.getJson(this._metadataUrl, { credentials: this._fetchRequestCredentials, timeoutInSeconds: this._settings.requestTimeoutInSeconds }); return t.debug("merging remote JSON with seed metadata"), this._metadata = Object.assign({}, e, this._settings.metadataSeed), this._metadata; }); }
    getIssuer() { return this._getMetadataProperty("issuer"); }
    getAuthorizationEndpoint() { return this._getMetadataProperty("authorization_endpoint"); }
    getUserInfoEndpoint() { return this._getMetadataProperty("userinfo_endpoint"); }
    getTokenEndpoint(t = !0) { return this._getMetadataProperty("token_endpoint", t); }
    getCheckSessionIframe() { return this._getMetadataProperty("check_session_iframe", !0); }
    getEndSessionEndpoint() { return this._getMetadataProperty("end_session_endpoint", !0); }
    getRevocationEndpoint(t = !0) { return this._getMetadataProperty("revocation_endpoint", t); }
    getKeysEndpoint(t = !0) { return this._getMetadataProperty("jwks_uri", t); }
    _getMetadataProperty(t, e = !1) { return a(this, null, function* () { let s = this._logger.create(`_getMetadataProperty('${t}')`), i = yield this.getMetadata(); if (s.debug("resolved"), i[t] === void 0) {
        if (e === !0) {
            s.warn("Metadata does not contain optional property");
            return;
        }
        s.throw(new Error("Metadata does not contain property " + t));
    } return i[t]; }); }
    getSigningKeys() { return a(this, null, function* () { let t = this._logger.create("getSigningKeys"); if (this._signingKeys)
        return t.debug("returning signingKeys from cache"), this._signingKeys; let e = yield this.getKeysEndpoint(!1); t.debug("got jwks_uri", e); let s = yield this._jsonService.getJson(e, { timeoutInSeconds: this._settings.requestTimeoutInSeconds }); if (t.debug("got key set", s), !Array.isArray(s.keys))
        throw t.throw(new Error("Missing keys on keyset")), null; return this._signingKeys = s.keys, this._signingKeys; }); }
}, ge = class {
    constructor({ prefix: t = "oidc.", store: e = localStorage } = {}) { this._logger = new u("WebStorageStateStore"), this._store = e, this._prefix = t; }
    set(t, e) { return a(this, null, function* () { this._logger.create(`set('${t}')`), t = this._prefix + t, yield this._store.setItem(t, e); }); }
    get(t) { return a(this, null, function* () { return this._logger.create(`get('${t}')`), t = this._prefix + t, yield this._store.getItem(t); }); }
    remove(t) { return a(this, null, function* () { this._logger.create(`remove('${t}')`), t = this._prefix + t; let e = yield this._store.getItem(t); return yield this._store.removeItem(t), e; }); }
    getAllKeys() { return a(this, null, function* () { this._logger.create("getAllKeys"); let t = yield this._store.length, e = []; for (let s = 0; s < t; s++) {
        let i = yield this._store.key(s);
        i && i.indexOf(this._prefix) === 0 && e.push(i.substr(this._prefix.length));
    } return e; }); }
}, De = "code", He = "openid", $e = "client_secret_post", We = 900, Z = class {
    constructor({ authority: t, metadataUrl: e, metadata: s, signingKeys: i, metadataSeed: r, client_id: n, client_secret: o, response_type: l = De, scope: c = He, redirect_uri: h, post_logout_redirect_uri: d, client_authentication: g = $e, prompt: _, display: f, max_age: w, ui_locales: P, acr_values: q, resource: N, response_mode: x, filterProtocolClaims: C = !0, loadUserInfo: M = !1, requestTimeoutInSeconds: W, staleStateAgeInSeconds: U = We, mergeClaimsStrategy: A = { array: "replace" }, disablePKCE: m = !1, stateStore: y, revokeTokenAdditionalContentTypes: j, fetchRequestCredentials: b, refreshTokenAllowedScope: ke, extraQueryParams: Ee = {}, extraTokenParams: Te = {}, extraHeaders: Re = {}, dpop: Pe, omitScopeWhenRequesting: Ie = !1 }) { var ne; if (this.authority = t, e ? this.metadataUrl = e : (this.metadataUrl = t, t && (this.metadataUrl.endsWith("/") || (this.metadataUrl += "/"), this.metadataUrl += ".well-known/openid-configuration")), this.metadata = s, this.metadataSeed = r, this.signingKeys = i, this.client_id = n, this.client_secret = o, this.response_type = l, this.scope = c, this.redirect_uri = h, this.post_logout_redirect_uri = d, this.client_authentication = g, this.prompt = _, this.display = f, this.max_age = w, this.ui_locales = P, this.acr_values = q, this.resource = N, this.response_mode = x, this.filterProtocolClaims = C ?? !0, this.loadUserInfo = !!M, this.staleStateAgeInSeconds = U, this.mergeClaimsStrategy = A, this.omitScopeWhenRequesting = Ie, this.disablePKCE = !!m, this.revokeTokenAdditionalContentTypes = j, this.fetchRequestCredentials = b || "same-origin", this.requestTimeoutInSeconds = W, y)
        this.stateStore = y;
    else {
        let xe = typeof window < "u" ? window.localStorage : new he;
        this.stateStore = new ge({ store: xe });
    } if (this.refreshTokenAllowedScope = ke, this.extraQueryParams = Ee, this.extraTokenParams = Te, this.extraHeaders = Re, this.dpop = Pe, this.dpop && !((ne = this.dpop) != null && ne.store))
        throw new Error("A DPoPStore is required when dpop is enabled"); }
}, Je = class {
    constructor(t, e) { this._settings = t, this._metadataService = e, this._logger = new u("UserInfoService"), this._getClaimsFromJwt = s => a(this, null, function* () { let i = this._logger.create("_getClaimsFromJwt"); try {
        let r = z.decode(s);
        return i.debug("JWT decoding successful"), r;
    }
    catch (r) {
        throw i.error("Error parsing JWT response"), r;
    } }), this._jsonService = new re(void 0, this._getClaimsFromJwt, this._settings.extraHeaders); }
    getClaims(t) { return a(this, null, function* () { let e = this._logger.create("getClaims"); t || this._logger.throw(new Error("No token passed")); let s = yield this._metadataService.getUserInfoEndpoint(); e.debug("got userinfo url", s); let i = yield this._jsonService.getJson(s, { token: t, credentials: this._settings.fetchRequestCredentials, timeoutInSeconds: this._settings.requestTimeoutInSeconds }); return e.debug("got claims", i), i; }); }
}, ue = class {
    constructor(t, e) { this._settings = t, this._metadataService = e, this._logger = new u("TokenClient"), this._jsonService = new re(this._settings.revokeTokenAdditionalContentTypes, null, this._settings.extraHeaders); }
    exchangeCode(o) { return a(this, null, function* () { var l = o, { grant_type: t = "authorization_code", redirect_uri: e = this._settings.redirect_uri, client_id: s = this._settings.client_id, client_secret: i = this._settings.client_secret, extraHeaders: r } = l, n = S(l, ["grant_type", "redirect_uri", "client_id", "client_secret", "extraHeaders"]); let c = this._logger.create("exchangeCode"); s || c.throw(new Error("A client_id is required")), e || c.throw(new Error("A redirect_uri is required")), n.code || c.throw(new Error("A code is required")); let h = new URLSearchParams({ grant_type: t, redirect_uri: e }); for (let [f, w] of Object.entries(n))
        w != null && h.set(f, w); let d; switch (this._settings.client_authentication) {
        case "client_secret_basic":
            if (i == null)
                throw c.throw(new Error("A client_secret is required")), null;
            d = v.generateBasicAuth(s, i);
            break;
        case "client_secret_post":
            h.append("client_id", s), i && h.append("client_secret", i);
            break;
    } let g = yield this._metadataService.getTokenEndpoint(!1); c.debug("got token endpoint"); let _ = yield this._jsonService.postForm(g, { body: h, basicAuth: d, timeoutInSeconds: this._settings.requestTimeoutInSeconds, initCredentials: this._settings.fetchRequestCredentials, extraHeaders: r }); return c.debug("got response"), _; }); }
    exchangeCredentials(n) { return a(this, null, function* () { var o = n, { grant_type: t = "password", client_id: e = this._settings.client_id, client_secret: s = this._settings.client_secret, scope: i = this._settings.scope } = o, r = S(o, ["grant_type", "client_id", "client_secret", "scope"]); let l = this._logger.create("exchangeCredentials"); e || l.throw(new Error("A client_id is required")); let c = new URLSearchParams({ grant_type: t }); this._settings.omitScopeWhenRequesting || c.set("scope", i); for (let [_, f] of Object.entries(r))
        f != null && c.set(_, f); let h; switch (this._settings.client_authentication) {
        case "client_secret_basic":
            if (s == null)
                throw l.throw(new Error("A client_secret is required")), null;
            h = v.generateBasicAuth(e, s);
            break;
        case "client_secret_post":
            c.append("client_id", e), s && c.append("client_secret", s);
            break;
    } let d = yield this._metadataService.getTokenEndpoint(!1); l.debug("got token endpoint"); let g = yield this._jsonService.postForm(d, { body: c, basicAuth: h, timeoutInSeconds: this._settings.requestTimeoutInSeconds, initCredentials: this._settings.fetchRequestCredentials }); return l.debug("got response"), g; }); }
    exchangeRefreshToken(o) { return a(this, null, function* () { var l = o, { grant_type: t = "refresh_token", client_id: e = this._settings.client_id, client_secret: s = this._settings.client_secret, timeoutInSeconds: i, extraHeaders: r } = l, n = S(l, ["grant_type", "client_id", "client_secret", "timeoutInSeconds", "extraHeaders"]); let c = this._logger.create("exchangeRefreshToken"); e || c.throw(new Error("A client_id is required")), n.refresh_token || c.throw(new Error("A refresh_token is required")); let h = new URLSearchParams({ grant_type: t }); for (let [f, w] of Object.entries(n))
        Array.isArray(w) ? w.forEach(P => h.append(f, P)) : w != null && h.set(f, w); let d; switch (this._settings.client_authentication) {
        case "client_secret_basic":
            if (s == null)
                throw c.throw(new Error("A client_secret is required")), null;
            d = v.generateBasicAuth(e, s);
            break;
        case "client_secret_post":
            h.append("client_id", e), s && h.append("client_secret", s);
            break;
    } let g = yield this._metadataService.getTokenEndpoint(!1); c.debug("got token endpoint"); let _ = yield this._jsonService.postForm(g, { body: h, basicAuth: d, timeoutInSeconds: i, initCredentials: this._settings.fetchRequestCredentials, extraHeaders: r }); return c.debug("got response"), _; }); }
    revoke(t) { return a(this, null, function* () { var e; let s = this._logger.create("revoke"); t.token || s.throw(new Error("A token is required")); let i = yield this._metadataService.getRevocationEndpoint(!1); s.debug(`got revocation endpoint, revoking ${(e = t.token_type_hint) != null ? e : "default token type"}`); let r = new URLSearchParams; for (let [n, o] of Object.entries(t))
        o != null && r.set(n, o); r.set("client_id", this._settings.client_id), this._settings.client_secret && r.set("client_secret", this._settings.client_secret), yield this._jsonService.postForm(i, { body: r, timeoutInSeconds: this._settings.requestTimeoutInSeconds }), s.debug("got response"); }); }
}, Ke = class {
    constructor(t, e, s) { this._settings = t, this._metadataService = e, this._claimsService = s, this._logger = new u("ResponseValidator"), this._userInfoService = new Je(this._settings, this._metadataService), this._tokenClient = new ue(this._settings, this._metadataService); }
    validateSigninResponse(t, e, s) { return a(this, null, function* () { let i = this._logger.create("validateSigninResponse"); this._processSigninState(t, e), i.debug("state processed"), yield this._processCode(t, e, s), i.debug("code processed"), t.isOpenId && this._validateIdTokenAttributes(t), i.debug("tokens validated"), yield this._processClaims(t, e?.skipUserInfo, t.isOpenId), i.debug("claims processed"); }); }
    validateCredentialsResponse(t, e) { return a(this, null, function* () { let s = this._logger.create("validateCredentialsResponse"), i = t.isOpenId && !!t.id_token; i && this._validateIdTokenAttributes(t), s.debug("tokens validated"), yield this._processClaims(t, e, i), s.debug("claims processed"); }); }
    validateRefreshResponse(t, e) { return a(this, null, function* () { var s, i; let r = this._logger.create("validateRefreshResponse"); t.userState = e.data, (s = t.session_state) != null || (t.session_state = e.session_state), (i = t.scope) != null || (t.scope = e.scope), t.isOpenId && t.id_token && (this._validateIdTokenAttributes(t, e.id_token), r.debug("ID Token validated")), t.id_token || (t.id_token = e.id_token, t.profile = e.profile); let n = t.isOpenId && !!t.id_token; yield this._processClaims(t, !1, n), r.debug("claims processed"); }); }
    validateSignoutResponse(t, e) { let s = this._logger.create("validateSignoutResponse"); if (e.id !== t.state && s.throw(new Error("State does not match")), s.debug("state validated"), t.userState = e.data, t.error)
        throw s.warn("Response was error", t.error), new $(t); }
    _processSigninState(t, e) { var s; let i = this._logger.create("_processSigninState"); if (e.id !== t.state && i.throw(new Error("State does not match")), e.client_id || i.throw(new Error("No client_id on state")), e.authority || i.throw(new Error("No authority on state")), this._settings.authority !== e.authority && i.throw(new Error("authority mismatch on settings vs. signin state")), this._settings.client_id && this._settings.client_id !== e.client_id && i.throw(new Error("client_id mismatch on settings vs. signin state")), i.debug("state validated"), t.userState = e.data, t.url_state = e.url_state, (s = t.scope) != null || (t.scope = e.scope), t.error)
        throw i.warn("Response was error", t.error), new $(t); e.code_verifier && !t.code && i.throw(new Error("Expected code in response")); }
    _processClaims(t, e = !1, s = !0) { return a(this, null, function* () { let i = this._logger.create("_processClaims"); if (t.profile = this._claimsService.filterProtocolClaims(t.profile), e || !this._settings.loadUserInfo || !t.access_token) {
        i.debug("not loading user info");
        return;
    } i.debug("loading user info"); let r = yield this._userInfoService.getClaims(t.access_token); i.debug("user info claims received from user info endpoint"), s && r.sub !== t.profile.sub && i.throw(new Error("subject from UserInfo response does not match subject in ID Token")), t.profile = this._claimsService.mergeClaims(t.profile, this._claimsService.filterProtocolClaims(r)), i.debug("user info claims received, updated profile:", t.profile); }); }
    _processCode(t, e, s) { return a(this, null, function* () { let i = this._logger.create("_processCode"); if (t.code) {
        i.debug("Validating code");
        let r = yield this._tokenClient.exchangeCode(p({ client_id: e.client_id, client_secret: e.client_secret, code: t.code, redirect_uri: e.redirect_uri, code_verifier: e.code_verifier, extraHeaders: s }, e.extraTokenParams));
        Object.assign(t, r);
    }
    else
        i.debug("No code to process"); }); }
    _validateIdTokenAttributes(t, e) { var s; let i = this._logger.create("_validateIdTokenAttributes"); i.debug("decoding ID Token JWT"); let r = z.decode((s = t.id_token) != null ? s : ""); if (r.sub || i.throw(new Error("ID Token is missing a subject claim")), e) {
        let n = z.decode(e);
        r.sub !== n.sub && i.throw(new Error("sub in id_token does not match current sub")), r.auth_time && r.auth_time !== n.auth_time && i.throw(new Error("auth_time in id_token does not match original auth_time")), r.azp && r.azp !== n.azp && i.throw(new Error("azp in id_token does not match original azp")), !r.azp && n.azp && i.throw(new Error("azp not in id_token, but present in original id_token"));
    } t.profile = r; }
}, B = class ee {
    constructor(e) { this.id = e.id || v.generateUUIDv4(), this.data = e.data, e.created && e.created > 0 ? this.created = e.created : this.created = I.getEpochTime(), this.request_type = e.request_type, this.url_state = e.url_state; }
    toStorageString() { return new u("State").create("toStorageString"), JSON.stringify({ id: this.id, data: this.data, created: this.created, request_type: this.request_type, url_state: this.url_state }); }
    static fromStorageString(e) { return u.createStatic("State", "fromStorageString"), Promise.resolve(new ee(JSON.parse(e))); }
    static clearStaleState(e, s) { return a(this, null, function* () { let i = u.createStatic("State", "clearStaleState"), r = I.getEpochTime() - s, n = yield e.getAllKeys(); i.debug("got keys", n); for (let o = 0; o < n.length; o++) {
        let l = n[o], c = yield e.get(l), h = !1;
        if (c)
            try {
                let d = yield ee.fromStorageString(c);
                i.debug("got item from key:", l, d.created), d.created <= r && (h = !0);
            }
            catch (d) {
                i.error("Error parsing state for key:", l, d), h = !0;
            }
        else
            i.debug("no item in storage for key:", l), h = !0;
        h && (i.debug("removed item for key:", l), e.remove(l));
    } }); }
}, _e = class te extends B {
    constructor(e) { super(e), this.code_verifier = e.code_verifier, this.code_challenge = e.code_challenge, this.authority = e.authority, this.client_id = e.client_id, this.redirect_uri = e.redirect_uri, this.scope = e.scope, this.client_secret = e.client_secret, this.extraTokenParams = e.extraTokenParams, this.response_mode = e.response_mode, this.skipUserInfo = e.skipUserInfo; }
    static create(e) { return a(this, null, function* () { let s = e.code_verifier === !0 ? v.generateCodeVerifier() : e.code_verifier || void 0, i = s ? yield v.generateCodeChallenge(s) : void 0; return new te(D(p({}, e), { code_verifier: s, code_challenge: i })); }); }
    toStorageString() { return new u("SigninState").create("toStorageString"), JSON.stringify({ id: this.id, data: this.data, created: this.created, request_type: this.request_type, url_state: this.url_state, code_verifier: this.code_verifier, authority: this.authority, client_id: this.client_id, redirect_uri: this.redirect_uri, scope: this.scope, client_secret: this.client_secret, extraTokenParams: this.extraTokenParams, response_mode: this.response_mode, skipUserInfo: this.skipUserInfo }); }
    static fromStorageString(e) { u.createStatic("SigninState", "fromStorageString"); let s = JSON.parse(e); return te.create(s); }
}, pe = class fe {
    constructor(e) { this.url = e.url, this.state = e.state; }
    static create(W) { return a(this, null, function* () { var U = W, { url: e, authority: s, client_id: i, redirect_uri: r, response_type: n, scope: o, state_data: l, response_mode: c, request_type: h, client_secret: d, nonce: g, url_state: _, resource: f, skipUserInfo: w, extraQueryParams: P, extraTokenParams: q, disablePKCE: N, dpopJkt: x, omitScopeWhenRequesting: C } = U, M = S(U, ["url", "authority", "client_id", "redirect_uri", "response_type", "scope", "state_data", "response_mode", "request_type", "client_secret", "nonce", "url_state", "resource", "skipUserInfo", "extraQueryParams", "extraTokenParams", "disablePKCE", "dpopJkt", "omitScopeWhenRequesting"]); if (!e)
        throw this._logger.error("create: No url passed"), new Error("url"); if (!i)
        throw this._logger.error("create: No client_id passed"), new Error("client_id"); if (!r)
        throw this._logger.error("create: No redirect_uri passed"), new Error("redirect_uri"); if (!n)
        throw this._logger.error("create: No response_type passed"), new Error("response_type"); if (!o)
        throw this._logger.error("create: No scope passed"), new Error("scope"); if (!s)
        throw this._logger.error("create: No authority passed"), new Error("authority"); let A = yield _e.create({ data: l, request_type: h, url_state: _, code_verifier: !N, client_id: i, authority: s, redirect_uri: r, response_mode: c, client_secret: d, scope: o, extraTokenParams: q, skipUserInfo: w }), m = new URL(e); m.searchParams.append("client_id", i), m.searchParams.append("redirect_uri", r), m.searchParams.append("response_type", n), C || m.searchParams.append("scope", o), g && m.searchParams.append("nonce", g), x && m.searchParams.append("dpop_jkt", x); let y = A.id; _ && (y = `${y}${J}${_}`), m.searchParams.append("state", y), A.code_challenge && (m.searchParams.append("code_challenge", A.code_challenge), m.searchParams.append("code_challenge_method", "S256")), f && (Array.isArray(f) ? f : [f]).forEach(b => m.searchParams.append("resource", b)); for (let [j, b] of Object.entries(p(p({ response_mode: c }, M), P)))
        b != null && m.searchParams.append(j, b.toString()); return new fe({ url: m.href, state: A }); }); }
};
pe._logger = new u("SigninRequest");
var Le = pe, Fe = "openid", G = class {
    constructor(t) { if (this.access_token = "", this.token_type = "", this.profile = {}, this.state = t.get("state"), this.session_state = t.get("session_state"), this.state) {
        let e = decodeURIComponent(this.state).split(J);
        this.state = e[0], e.length > 1 && (this.url_state = e.slice(1).join(J));
    } this.error = t.get("error"), this.error_description = t.get("error_description"), this.error_uri = t.get("error_uri"), this.code = t.get("code"); }
    get expires_in() { if (this.expires_at !== void 0)
        return this.expires_at - I.getEpochTime(); }
    set expires_in(t) { typeof t == "string" && (t = Number(t)), t !== void 0 && t >= 0 && (this.expires_at = Math.floor(t) + I.getEpochTime()); }
    get isOpenId() { var t; return ((t = this.scope) == null ? void 0 : t.split(" ").includes(Fe)) || !!this.id_token; }
}, ze = class {
    constructor({ url: t, state_data: e, id_token_hint: s, post_logout_redirect_uri: i, extraQueryParams: r, request_type: n, client_id: o, url_state: l }) { if (this._logger = new u("SignoutRequest"), !t)
        throw this._logger.error("ctor: No url passed"), new Error("url"); let c = new URL(t); if (s && c.searchParams.append("id_token_hint", s), o && c.searchParams.append("client_id", o), i && (c.searchParams.append("post_logout_redirect_uri", i), e || l)) {
        this.state = new B({ data: e, request_type: n, url_state: l });
        let h = this.state.id;
        l && (h = `${h}${J}${l}`), c.searchParams.append("state", h);
    } for (let [h, d] of Object.entries(p({}, r)))
        d != null && c.searchParams.append(h, d.toString()); this.url = c.href; }
}, Be = class {
    constructor(t) { if (this.state = t.get("state"), this.state) {
        let e = decodeURIComponent(this.state).split(J);
        this.state = e[0], e.length > 1 && (this.url_state = e.slice(1).join(J));
    } this.error = t.get("error"), this.error_description = t.get("error_description"), this.error_uri = t.get("error_uri"); }
}, Ve = ["nbf", "jti", "auth_time", "nonce", "acr", "amr", "azp", "at_hash"], Ge = ["sub", "iss", "aud", "exp", "iat"], Qe = class {
    constructor(t) { this._settings = t, this._logger = new u("ClaimsService"); }
    filterProtocolClaims(t) { let e = p({}, t); if (this._settings.filterProtocolClaims) {
        let s;
        Array.isArray(this._settings.filterProtocolClaims) ? s = this._settings.filterProtocolClaims : s = Ve;
        for (let i of s)
            Ge.includes(i) || delete e[i];
    } return e; }
    mergeClaims(t, e) { let s = p({}, t); for (let [i, r] of Object.entries(e))
        if (s[i] !== r)
            if (Array.isArray(s[i]) || Array.isArray(r))
                if (this._settings.mergeClaimsStrategy.array == "replace")
                    s[i] = r;
                else {
                    let n = Array.isArray(s[i]) ? s[i] : [s[i]];
                    for (let o of Array.isArray(r) ? r : [r])
                        n.includes(o) || n.push(o);
                    s[i] = n;
                }
            else
                typeof s[i] == "object" && typeof r == "object" ? s[i] = this.mergeClaims(s[i], r) : s[i] = r; return s; }
}, we = class {
    constructor(t, e) { this.keys = t, this.nonce = e; }
}, Xe = class {
    constructor(t, e) { this._logger = new u("OidcClient"), this.settings = t instanceof Z ? t : new Z(t), this.metadataService = e ?? new je(this.settings), this._claimsService = new Qe(this.settings), this._validator = new Ke(this.settings, this.metadataService, this._claimsService), this._tokenClient = new ue(this.settings, this.metadataService); }
    createSigninRequest(A) { return a(this, arguments, function* ({ state: t, request: e, request_uri: s, request_type: i, id_token_hint: r, login_hint: n, skipUserInfo: o, nonce: l, url_state: c, response_type: h = this.settings.response_type, scope: d = this.settings.scope, redirect_uri: g = this.settings.redirect_uri, prompt: _ = this.settings.prompt, display: f = this.settings.display, max_age: w = this.settings.max_age, ui_locales: P = this.settings.ui_locales, acr_values: q = this.settings.acr_values, resource: N = this.settings.resource, response_mode: x = this.settings.response_mode, extraQueryParams: C = this.settings.extraQueryParams, extraTokenParams: M = this.settings.extraTokenParams, dpopJkt: W, omitScopeWhenRequesting: U = this.settings.omitScopeWhenRequesting }) { let m = this._logger.create("createSigninRequest"); if (h !== "code")
        throw new Error("Only the Authorization Code flow (with PKCE) is supported"); let y = yield this.metadataService.getAuthorizationEndpoint(); m.debug("Received authorization endpoint", y); let j = yield Le.create({ url: y, authority: this.settings.authority, client_id: this.settings.client_id, redirect_uri: g, response_type: h, scope: d, state_data: t, url_state: c, prompt: _, display: f, max_age: w, ui_locales: P, id_token_hint: r, login_hint: n, acr_values: q, dpopJkt: W, resource: N, request: e, request_uri: s, extraQueryParams: C, extraTokenParams: M, request_type: i, response_mode: x, client_secret: this.settings.client_secret, skipUserInfo: o, nonce: l, disablePKCE: this.settings.disablePKCE, omitScopeWhenRequesting: U }); yield this.clearStaleState(); let b = j.state; return yield this.settings.stateStore.set(b.id, b.toStorageString()), j; }); }
    readSigninResponseState(t, e = !1) { return a(this, null, function* () { let s = this._logger.create("readSigninResponseState"), i = new G(X.readParams(t, this.settings.response_mode)); if (!i.state)
        throw s.throw(new Error("No state in response")), null; let r = yield this.settings.stateStore[e ? "remove" : "get"](i.state); if (!r)
        throw s.throw(new Error("No matching state found in storage")), null; return { state: yield _e.fromStorageString(r), response: i }; }); }
    processSigninResponse(t, e, s = !0) { return a(this, null, function* () { let i = this._logger.create("processSigninResponse"), { state: r, response: n } = yield this.readSigninResponseState(t, s); if (i.debug("received state from storage; validating response"), this.settings.dpop && this.settings.dpop.store) {
        let o = yield this.getDpopProof(this.settings.dpop.store);
        e = D(p({}, e), { DPoP: o });
    } try {
        yield this._validator.validateSigninResponse(n, r, e);
    }
    catch (o) {
        if (o instanceof Y && this.settings.dpop) {
            let l = yield this.getDpopProof(this.settings.dpop.store, o.nonce);
            e.DPoP = l, yield this._validator.validateSigninResponse(n, r, e);
        }
        else
            throw o;
    } return n; }); }
    getDpopProof(t, e) { return a(this, null, function* () { let s, i; return (yield t.getAllKeys()).includes(this.settings.client_id) ? (i = yield t.get(this.settings.client_id), i.nonce !== e && e && (i.nonce = e, yield t.set(this.settings.client_id, i))) : (s = yield v.generateDPoPKeys(), i = new we(s, e), yield t.set(this.settings.client_id, i)), yield v.generateDPoPProof({ url: yield this.metadataService.getTokenEndpoint(!1), httpMethod: "POST", keyPair: i.keys, nonce: i.nonce }); }); }
    processResourceOwnerPasswordCredentials(r) { return a(this, arguments, function* ({ username: t, password: e, skipUserInfo: s = !1, extraTokenParams: i = {} }) { let n = yield this._tokenClient.exchangeCredentials(p({ username: t, password: e }, i)), o = new G(new URLSearchParams); return Object.assign(o, n), yield this._validator.validateCredentialsResponse(o, s), o; }); }
    useRefreshToken(o) { return a(this, arguments, function* ({ state: t, redirect_uri: e, resource: s, timeoutInSeconds: i, extraHeaders: r, extraTokenParams: n }) { var l; let c = this._logger.create("useRefreshToken"), h; if (this.settings.refreshTokenAllowedScope === void 0)
        h = t.scope;
    else {
        let _ = this.settings.refreshTokenAllowedScope.split(" ");
        h = (((l = t.scope) == null ? void 0 : l.split(" ")) || []).filter(w => _.includes(w)).join(" ");
    } if (this.settings.dpop && this.settings.dpop.store) {
        let _ = yield this.getDpopProof(this.settings.dpop.store);
        r = D(p({}, r), { DPoP: _ });
    } let d; try {
        d = yield this._tokenClient.exchangeRefreshToken(p({ refresh_token: t.refresh_token, scope: h, redirect_uri: e, resource: s, timeoutInSeconds: i, extraHeaders: r }, n));
    }
    catch (_) {
        if (_ instanceof Y && this.settings.dpop)
            r.DPoP = yield this.getDpopProof(this.settings.dpop.store, _.nonce), d = yield this._tokenClient.exchangeRefreshToken(p({ refresh_token: t.refresh_token, scope: h, redirect_uri: e, resource: s, timeoutInSeconds: i, extraHeaders: r }, n));
        else
            throw _;
    } let g = new G(new URLSearchParams); return Object.assign(g, d), c.debug("validating response", g), yield this._validator.validateRefreshResponse(g, D(p({}, t), { scope: h })), g; }); }
    createSignoutRequest() { return a(this, arguments, function* ({ state: t, id_token_hint: e, client_id: s, request_type: i, url_state: r, post_logout_redirect_uri: n = this.settings.post_logout_redirect_uri, extraQueryParams: o = this.settings.extraQueryParams } = {}) { let l = this._logger.create("createSignoutRequest"), c = yield this.metadataService.getEndSessionEndpoint(); if (!c)
        throw l.throw(new Error("No end session endpoint")), null; l.debug("Received end session endpoint", c), !s && n && !e && (s = this.settings.client_id); let h = new ze({ url: c, id_token_hint: e, client_id: s, post_logout_redirect_uri: n, state_data: t, extraQueryParams: o, request_type: i, url_state: r }); yield this.clearStaleState(); let d = h.state; return d && (l.debug("Signout request has state to persist"), yield this.settings.stateStore.set(d.id, d.toStorageString())), h; }); }
    readSignoutResponseState(t, e = !1) { return a(this, null, function* () { let s = this._logger.create("readSignoutResponseState"), i = new Be(X.readParams(t, this.settings.response_mode)); if (!i.state) {
        if (s.debug("No state in response"), i.error)
            throw s.warn("Response was error:", i.error), new $(i);
        return { state: void 0, response: i };
    } let r = yield this.settings.stateStore[e ? "remove" : "get"](i.state); if (!r)
        throw s.throw(new Error("No matching state found in storage")), null; return { state: yield B.fromStorageString(r), response: i }; }); }
    processSignoutResponse(t) { return a(this, null, function* () { let e = this._logger.create("processSignoutResponse"), { state: s, response: i } = yield this.readSignoutResponseState(t, !0); return s ? (e.debug("Received state from storage; validating response"), this._validator.validateSignoutResponse(i, s)) : e.debug("No state from storage; skipping response validation"), i; }); }
    clearStaleState() { return this._logger.create("clearStaleState"), B.clearStaleState(this.settings.stateStore, this.settings.staleStateAgeInSeconds); }
    revokeToken(t, e) { return a(this, null, function* () { return this._logger.create("revokeToken"), yield this._tokenClient.revoke({ token: t, token_type_hint: e }); }); }
}, Ye = class {
    constructor(t) { this._userManager = t, this._logger = new u("SessionMonitor"), this._start = e => a(this, null, function* () { let s = e.session_state; if (!s)
        return; let i = this._logger.create("_start"); if (e.profile ? (this._sub = e.profile.sub, i.debug("session_state", s, ", sub", this._sub)) : (this._sub = void 0, i.debug("session_state", s, ", anonymous user")), this._checkSessionIFrame) {
        this._checkSessionIFrame.start(s);
        return;
    } try {
        let r = yield this._userManager.metadataService.getCheckSessionIframe();
        if (r) {
            i.debug("initializing check session iframe");
            let n = this._userManager.settings.client_id, o = this._userManager.settings.checkSessionIntervalInSeconds, l = this._userManager.settings.stopCheckSessionOnError, c = new Me(this._callback, n, r, o, l);
            yield c.load(), this._checkSessionIFrame = c, c.start(s);
        }
        else
            i.warn("no check session iframe found in the metadata");
    }
    catch (r) {
        i.error("Error from getCheckSessionIframe:", r instanceof Error ? r.message : r);
    } }), this._stop = () => { let e = this._logger.create("_stop"); if (this._sub = void 0, this._checkSessionIFrame && this._checkSessionIFrame.stop(), this._userManager.settings.monitorAnonymousSession) {
        let s = setInterval(() => a(this, null, function* () { clearInterval(s); try {
            let i = yield this._userManager.querySessionStatus();
            if (i) {
                let r = { session_state: i.session_state, profile: i.sub ? { sub: i.sub } : null };
                this._start(r);
            }
        }
        catch (i) {
            e.error("error from querySessionStatus", i instanceof Error ? i.message : i);
        } }), 1e3);
    } }, this._callback = () => a(this, null, function* () { let e = this._logger.create("_callback"); try {
        let s = yield this._userManager.querySessionStatus(), i = !0;
        s && this._checkSessionIFrame ? s.sub === this._sub ? (i = !1, this._checkSessionIFrame.start(s.session_state), e.debug("same sub still logged in at OP, session state has changed, restarting check session iframe; session_state", s.session_state), yield this._userManager.events._raiseUserSessionChanged()) : e.debug("different subject signed into OP", s.sub) : e.debug("subject no longer signed into OP"), i ? this._sub ? yield this._userManager.events._raiseUserSignedOut() : yield this._userManager.events._raiseUserSignedIn() : e.debug("no change in session detected, no event to raise");
    }
    catch (s) {
        this._sub && (e.debug("Error calling queryCurrentSigninSession; raising signed out event", s), yield this._userManager.events._raiseUserSignedOut());
    } }), t || this._logger.throw(new Error("No user manager passed")), this._userManager.events.addUserLoaded(this._start), this._userManager.events.addUserUnloaded(this._stop), this._init().catch(e => { this._logger.error(e); }); }
    _init() { return a(this, null, function* () { this._logger.create("_init"); let t = yield this._userManager.getUser(); if (t)
        this._start(t);
    else if (this._userManager.settings.monitorAnonymousSession) {
        let e = yield this._userManager.querySessionStatus();
        if (e) {
            let s = { session_state: e.session_state, profile: e.sub ? { sub: e.sub } : null };
            this._start(s);
        }
    } }); }
}, Q = class me {
    constructor(e) { var s; this.id_token = e.id_token, this.session_state = (s = e.session_state) != null ? s : null, this.access_token = e.access_token, this.refresh_token = e.refresh_token, this.token_type = e.token_type, this.scope = e.scope, this.profile = e.profile, this.expires_at = e.expires_at, this.state = e.userState, this.url_state = e.url_state; }
    get expires_in() { if (this.expires_at !== void 0)
        return this.expires_at - I.getEpochTime(); }
    set expires_in(e) { e !== void 0 && (this.expires_at = Math.floor(e) + I.getEpochTime()); }
    get expired() { let e = this.expires_in; if (e !== void 0)
        return e <= 0; }
    get scopes() { var e, s; return (s = (e = this.scope) == null ? void 0 : e.split(" ")) != null ? s : []; }
    toStorageString() { return new u("User").create("toStorageString"), JSON.stringify({ id_token: this.id_token, session_state: this.session_state, access_token: this.access_token, refresh_token: this.refresh_token, token_type: this.token_type, scope: this.scope, profile: this.profile, expires_at: this.expires_at }); }
    static fromStorageString(e) { return u.createStatic("User", "fromStorageString"), new me(JSON.parse(e)); }
}, ce = "oidc-client", Se = class {
    constructor() { this._abort = new O("Window navigation aborted"), this._disposeHandlers = new Set, this._window = null; }
    navigate(t) { return a(this, null, function* () { let e = this._logger.create("navigate"); if (!this._window)
        throw new Error("Attempted to navigate on a disposed window"); e.debug("setting URL in window"), this._window.location.replace(t.url); let { url: s, keepOpen: i } = yield new Promise((r, n) => { let o = c => { var h; let d = c.data, g = (h = t.scriptOrigin) != null ? h : window.location.origin; if (!(c.origin !== g || d?.source !== ce)) {
        try {
            let _ = X.readParams(d.url, t.response_mode).get("state");
            if (_ || e.warn("no state found in response url"), c.source !== this._window && _ !== t.state)
                return;
        }
        catch {
            this._dispose(), n(new Error("Invalid response from window"));
        }
        r(d);
    } }; window.addEventListener("message", o, !1), this._disposeHandlers.add(() => window.removeEventListener("message", o, !1)); let l = new BroadcastChannel(`oidc-client-popup-${t.state}`); l.addEventListener("message", o, !1), this._disposeHandlers.add(() => l.close()), this._disposeHandlers.add(this._abort.addHandler(c => { this._dispose(), n(c); })); }); return e.debug("got response from window"), this._dispose(), i || this.close(), { url: s }; }); }
    _dispose() { this._logger.create("_dispose"); for (let t of this._disposeHandlers)
        t(); this._disposeHandlers.clear(); }
    static _notifyParent(t, e, s = !1, i = window.location.origin) { let r = { source: ce, url: e, keepOpen: s }, n = new u("_notifyParent"); if (t)
        n.debug("With parent. Using parent.postMessage."), t.postMessage(r, i);
    else {
        n.debug("No parent. Using BroadcastChannel.");
        let o = new URL(e).searchParams.get("state");
        if (!o)
            throw new Error("No parent and no state in URL. Can't complete notification.");
        let l = new BroadcastChannel(`oidc-client-popup-${o}`);
        l.postMessage(r), l.close();
    } }
}, ve = { location: !1, toolbar: !1, height: 640, closePopupWindowAfterInSeconds: -1 }, ye = "_blank", Ze = 60, et = 2, be = 10, tt = class extends Z {
    constructor(t) { let { popup_redirect_uri: e = t.redirect_uri, popup_post_logout_redirect_uri: s = t.post_logout_redirect_uri, popupWindowFeatures: i = ve, popupWindowTarget: r = ye, redirectMethod: n = "assign", redirectTarget: o = "self", iframeNotifyParentOrigin: l = t.iframeNotifyParentOrigin, iframeScriptOrigin: c = t.iframeScriptOrigin, requestTimeoutInSeconds: h, silent_redirect_uri: d = t.redirect_uri, silentRequestTimeoutInSeconds: g, automaticSilentRenew: _ = !0, validateSubOnSilentRenew: f = !0, includeIdTokenInSilentRenew: w = !1, monitorSession: P = !1, monitorAnonymousSession: q = !1, checkSessionIntervalInSeconds: N = et, query_status_response_type: x = "code", stopCheckSessionOnError: C = !0, revokeTokenTypes: M = ["access_token", "refresh_token"], revokeTokensOnSignout: W = !1, includeIdTokenInSilentSignout: U = !1, accessTokenExpiringNotificationTimeInSeconds: A = Ze, userStore: m } = t; if (super(t), this.popup_redirect_uri = e, this.popup_post_logout_redirect_uri = s, this.popupWindowFeatures = i, this.popupWindowTarget = r, this.redirectMethod = n, this.redirectTarget = o, this.iframeNotifyParentOrigin = l, this.iframeScriptOrigin = c, this.silent_redirect_uri = d, this.silentRequestTimeoutInSeconds = g || h || be, this.automaticSilentRenew = _, this.validateSubOnSilentRenew = f, this.includeIdTokenInSilentRenew = w, this.monitorSession = P, this.monitorAnonymousSession = q, this.checkSessionIntervalInSeconds = N, this.stopCheckSessionOnError = C, this.query_status_response_type = x, this.revokeTokenTypes = M, this.revokeTokensOnSignout = W, this.includeIdTokenInSilentSignout = U, this.accessTokenExpiringNotificationTimeInSeconds = A, m)
        this.userStore = m;
    else {
        let y = typeof window < "u" ? window.sessionStorage : new he;
        this.userStore = new ge({ store: y });
    } }
}, le = class se extends Se {
    constructor({ silentRequestTimeoutInSeconds: e = be }) { super(), this._logger = new u("IFrameWindow"), this._timeoutInSeconds = e, this._frame = se.createHiddenIframe(), this._window = this._frame.contentWindow; }
    static createHiddenIframe() { let e = window.document.createElement("iframe"); return e.style.visibility = "hidden", e.style.position = "fixed", e.style.left = "-1000px", e.style.top = "0", e.width = "0", e.height = "0", window.document.body.appendChild(e), e; }
    navigate(e) { return a(this, null, function* () { this._logger.debug("navigate: Using timeout of:", this._timeoutInSeconds); let s = setTimeout(() => void this._abort.raise(new ie("IFrame timed out without a response")), this._timeoutInSeconds * 1e3); return this._disposeHandlers.add(() => clearTimeout(s)), yield K(se.prototype, this, "navigate").call(this, e); }); }
    close() { var e; this._frame && (this._frame.parentNode && (this._frame.addEventListener("load", s => { var i; let r = s.target; (i = r.parentNode) == null || i.removeChild(r), this._abort.raise(new Error("IFrame removed from DOM")); }, !0), (e = this._frame.contentWindow) == null || e.location.replace("about:blank")), this._frame = null), this._window = null; }
    static notifyParent(e, s) { return super._notifyParent(window.parent, e, !1, s); }
}, st = class {
    constructor(t) { this._settings = t, this._logger = new u("IFrameNavigator"); }
    prepare(e) { return a(this, arguments, function* ({ silentRequestTimeoutInSeconds: t = this._settings.silentRequestTimeoutInSeconds }) { return new le({ silentRequestTimeoutInSeconds: t }); }); }
    callback(t) { return a(this, null, function* () { this._logger.create("callback"), le.notifyParent(t, this._settings.iframeNotifyParentOrigin); }); }
}, it = 500, rt = 1e3, de = class t extends Se {
    constructor({ popupWindowTarget: e = ye, popupWindowFeatures: s = {}, popupSignal: i }) { super(), this._logger = new u("PopupWindow"); let r = ae.center(p(p({}, ve), s)); this._window = window.open(void 0, e, ae.serialize(r)), i && i.addEventListener("abort", () => { var n; this._abort.raise(new Error((n = i.reason) != null ? n : "Popup aborted")); }), s.closePopupWindowAfterInSeconds && s.closePopupWindowAfterInSeconds > 0 && setTimeout(() => { if (!this._window || typeof this._window.closed != "boolean" || this._window.closed) {
        this._abort.raise(new Error("Popup blocked by user"));
        return;
    } this.close(); }, s.closePopupWindowAfterInSeconds * rt); }
    navigate(e) { return a(this, null, function* () { var s; (s = this._window) == null || s.focus(); let i = setInterval(() => { (!this._window || this._window.closed) && (this._logger.debug("Popup closed by user or isolated by redirect"), r(), this._disposeHandlers.delete(r)); }, it), r = () => clearInterval(i); return this._disposeHandlers.add(r), yield K(t.prototype, this, "navigate").call(this, e); }); }
    close() { this._window && (this._window.closed || (this._window.close(), this._abort.raise(new Error("Popup closed")))), this._window = null; }
    static notifyOpener(e, s) { super._notifyParent(window.opener, e, s), !s && !window.opener && window.close(); }
}, nt = class {
    constructor(t) { this._settings = t, this._logger = new u("PopupNavigator"); }
    prepare(i) { return a(this, arguments, function* ({ popupWindowFeatures: t = this._settings.popupWindowFeatures, popupWindowTarget: e = this._settings.popupWindowTarget, popupSignal: s }) { return new de({ popupWindowFeatures: t, popupWindowTarget: e, popupSignal: s }); }); }
    callback(s, i) { return a(this, arguments, function* (t, { keepOpen: e = !1 }) { this._logger.create("callback"), de.notifyOpener(t, e); }); }
}, ot = class {
    constructor(t) { this._settings = t, this._logger = new u("RedirectNavigator"); }
    prepare(s) { return a(this, arguments, function* ({ redirectMethod: t = this._settings.redirectMethod, redirectTarget: e = this._settings.redirectTarget }) { var i; this._logger.create("prepare"); let r = window.self; e === "top" && (r = (i = window.top) != null ? i : window.self); let n = r.location[t].bind(r.location), o; return { navigate: l => a(this, null, function* () { this._logger.create("navigate"); let c = new Promise((h, d) => { o = d; }); return n(l.url), yield c; }), close: () => { this._logger.create("close"), o?.(new Error("Redirect aborted")), r.stop(); } }; }); }
    callback() { return a(this, null, function* () { }); }
}, at = class t extends Ne {
    constructor(e) { super({ expiringNotificationTimeInSeconds: e.accessTokenExpiringNotificationTimeInSeconds }), this._logger = new u("UserManagerEvents"), this._userLoaded = new O("User loaded"), this._userUnloaded = new O("User unloaded"), this._silentRenewError = new O("Silent renew error"), this._userSignedIn = new O("User signed in"), this._userSignedOut = new O("User signed out"), this._userSessionChanged = new O("User session changed"); }
    load(e, s = !0) { return a(this, null, function* () { yield K(t.prototype, this, "load").call(this, e), s && (yield this._userLoaded.raise(e)); }); }
    unload() { return a(this, null, function* () { yield K(t.prototype, this, "unload").call(this), yield this._userUnloaded.raise(); }); }
    addUserLoaded(e) { return this._userLoaded.addHandler(e); }
    removeUserLoaded(e) { return this._userLoaded.removeHandler(e); }
    addUserUnloaded(e) { return this._userUnloaded.addHandler(e); }
    removeUserUnloaded(e) { return this._userUnloaded.removeHandler(e); }
    addSilentRenewError(e) { return this._silentRenewError.addHandler(e); }
    removeSilentRenewError(e) { return this._silentRenewError.removeHandler(e); }
    _raiseSilentRenewError(e) { return a(this, null, function* () { yield this._silentRenewError.raise(e); }); }
    addUserSignedIn(e) { return this._userSignedIn.addHandler(e); }
    removeUserSignedIn(e) { this._userSignedIn.removeHandler(e); }
    _raiseUserSignedIn() { return a(this, null, function* () { yield this._userSignedIn.raise(); }); }
    addUserSignedOut(e) { return this._userSignedOut.addHandler(e); }
    removeUserSignedOut(e) { this._userSignedOut.removeHandler(e); }
    _raiseUserSignedOut() { return a(this, null, function* () { yield this._userSignedOut.raise(); }); }
    addUserSessionChanged(e) { return this._userSessionChanged.addHandler(e); }
    removeUserSessionChanged(e) { this._userSessionChanged.removeHandler(e); }
    _raiseUserSessionChanged() { return a(this, null, function* () { yield this._userSessionChanged.raise(); }); }
}, ct = class {
    constructor(t) { this._userManager = t, this._logger = new u("SilentRenewService"), this._isStarted = !1, this._retryTimer = new I("Retry Silent Renew"), this._tokenExpiring = () => a(this, null, function* () { let e = this._logger.create("_tokenExpiring"); try {
        yield this._userManager.signinSilent(), e.debug("silent token renewal successful");
    }
    catch (s) {
        if (s instanceof ie) {
            e.warn("ErrorTimeout from signinSilent:", s, "retry in 5s"), this._retryTimer.init(5);
            return;
        }
        e.error("Error from signinSilent:", s), yield this._userManager.events._raiseSilentRenewError(s);
    } }); }
    start() { return a(this, null, function* () { let t = this._logger.create("start"); if (!this._isStarted) {
        this._isStarted = !0, this._userManager.events.addAccessTokenExpiring(this._tokenExpiring), this._retryTimer.addHandler(this._tokenExpiring);
        try {
            yield this._userManager.getUser();
        }
        catch (e) {
            t.error("getUser error", e);
        }
    } }); }
    stop() { this._isStarted && (this._retryTimer.cancel(), this._retryTimer.removeHandler(this._tokenExpiring), this._userManager.events.removeAccessTokenExpiring(this._tokenExpiring), this._isStarted = !1); }
}, lt = class {
    constructor(t) { this.refresh_token = t.refresh_token, this.id_token = t.id_token, this.session_state = t.session_state, this.scope = t.scope, this.profile = t.profile, this.data = t.state; }
}, ut = class {
    constructor(t, e, s, i) { this._logger = new u("UserManager"), this.settings = new tt(t), this._client = new Xe(t), this._redirectNavigator = e ?? new ot(this.settings), this._popupNavigator = s ?? new nt(this.settings), this._iframeNavigator = i ?? new st(this.settings), this._events = new at(this.settings), this._silentRenewService = new ct(this), this.settings.automaticSilentRenew && this.startSilentRenew(), this._sessionMonitor = null, this.settings.monitorSession && (this._sessionMonitor = new Ye(this)); }
    get events() { return this._events; }
    get metadataService() { return this._client.metadataService; }
    getUser(t = !1) { return a(this, null, function* () { let e = this._logger.create("getUser"), s = yield this._loadUser(); return s ? (e.info("user loaded"), yield this._events.load(s, t), s) : (e.info("user not found in storage"), null); }); }
    removeUser() { return a(this, null, function* () { let t = this._logger.create("removeUser"); yield this.storeUser(null), t.info("user removed from storage"), yield this._events.unload(); }); }
    signinRedirect() { return a(this, arguments, function* (t = {}) { var e; this._logger.create("signinRedirect"); let o = t, { redirectMethod: s } = o, i = S(o, ["redirectMethod"]), r; (e = this.settings.dpop) != null && e.bind_authorization_code && (r = yield this.generateDPoPJkt(this.settings.dpop)); let n = yield this._redirectNavigator.prepare({ redirectMethod: s }); yield this._signinStart(p({ request_type: "si:r", dpopJkt: r }, i), n); }); }
    signinRedirectCallback() { return a(this, arguments, function* (t = window.location.href) { let e = this._logger.create("signinRedirectCallback"), s = yield this._signinEnd(t); return s.profile && s.profile.sub ? e.info("success, signed in subject", s.profile.sub) : e.info("no subject"), s; }); }
    signinResourceOwnerCredentials(i) { return a(this, arguments, function* ({ username: t, password: e, skipUserInfo: s = !1 }) { let r = this._logger.create("signinResourceOwnerCredential"), n = yield this._client.processResourceOwnerPasswordCredentials({ username: t, password: e, skipUserInfo: s, extraTokenParams: this.settings.extraTokenParams }); r.debug("got signin response"); let o = yield this._buildUser(n); return o.profile && o.profile.sub ? r.info("success, signed in subject", o.profile.sub) : r.info("no subject"), o; }); }
    signinPopup() { return a(this, arguments, function* (t = {}) { var e; let s = this._logger.create("signinPopup"), i; (e = this.settings.dpop) != null && e.bind_authorization_code && (i = yield this.generateDPoPJkt(this.settings.dpop)); let g = t, { popupWindowFeatures: r, popupWindowTarget: n, popupSignal: o } = g, l = S(g, ["popupWindowFeatures", "popupWindowTarget", "popupSignal"]), c = this.settings.popup_redirect_uri; c || s.throw(new Error("No popup_redirect_uri configured")); let h = yield this._popupNavigator.prepare({ popupWindowFeatures: r, popupWindowTarget: n, popupSignal: o }), d = yield this._signin(p({ request_type: "si:p", redirect_uri: c, display: "popup", dpopJkt: i }, l), h); return d && (d.profile && d.profile.sub ? s.info("success, signed in subject", d.profile.sub) : s.info("no subject")), d; }); }
    signinPopupCallback() { return a(this, arguments, function* (t = window.location.href, e = !1) { let s = this._logger.create("signinPopupCallback"); yield this._popupNavigator.callback(t, { keepOpen: e }), s.info("success"); }); }
    signinSilent() { return a(this, arguments, function* (t = {}) { var e, s; let i = this._logger.create("signinSilent"), g = t, { silentRequestTimeoutInSeconds: r } = g, n = S(g, ["silentRequestTimeoutInSeconds"]), o = yield this._loadUser(); if (o?.refresh_token) {
        i.debug("using refresh token");
        let _ = new lt(o);
        return yield this._useRefreshToken({ state: _, redirect_uri: n.redirect_uri, resource: n.resource, extraTokenParams: n.extraTokenParams, timeoutInSeconds: r });
    } let l; (e = this.settings.dpop) != null && e.bind_authorization_code && (l = yield this.generateDPoPJkt(this.settings.dpop)); let c = this.settings.silent_redirect_uri; c || i.throw(new Error("No silent_redirect_uri configured")); let h; o && this.settings.validateSubOnSilentRenew && (i.debug("subject prior to silent renew:", o.profile.sub), h = o.profile.sub); let d = yield this._iframeNavigator.prepare({ silentRequestTimeoutInSeconds: r }); return o = yield this._signin(p({ request_type: "si:s", redirect_uri: c, prompt: "none", id_token_hint: this.settings.includeIdTokenInSilentRenew ? o?.id_token : void 0, dpopJkt: l }, n), d, h), o && ((s = o.profile) != null && s.sub ? i.info("success, signed in subject", o.profile.sub) : i.info("no subject")), o; }); }
    _useRefreshToken(t) { return a(this, null, function* () { let e = yield this._client.useRefreshToken(p({ timeoutInSeconds: this.settings.silentRequestTimeoutInSeconds }, t)), s = new Q(p(p({}, t.state), e)); return yield this.storeUser(s), yield this._events.load(s), s; }); }
    signinSilentCallback() { return a(this, arguments, function* (t = window.location.href) { let e = this._logger.create("signinSilentCallback"); yield this._iframeNavigator.callback(t), e.info("success"); }); }
    signinCallback() { return a(this, arguments, function* (t = window.location.href) { let { state: e } = yield this._client.readSigninResponseState(t); switch (e.request_type) {
        case "si:r": return yield this.signinRedirectCallback(t);
        case "si:p":
            yield this.signinPopupCallback(t);
            break;
        case "si:s":
            yield this.signinSilentCallback(t);
            break;
        default: throw new Error("invalid response_type in state");
    } }); }
    signoutCallback() { return a(this, arguments, function* (t = window.location.href, e = !1) { let { state: s } = yield this._client.readSignoutResponseState(t); if (s)
        switch (s.request_type) {
            case "so:r": return yield this.signoutRedirectCallback(t);
            case "so:p":
                yield this.signoutPopupCallback(t, e);
                break;
            case "so:s":
                yield this.signoutSilentCallback(t);
                break;
            default: throw new Error("invalid response_type in state");
        } }); }
    querySessionStatus() { return a(this, arguments, function* (t = {}) { let e = this._logger.create("querySessionStatus"), c = t, { silentRequestTimeoutInSeconds: s } = c, i = S(c, ["silentRequestTimeoutInSeconds"]), r = this.settings.silent_redirect_uri; r || e.throw(new Error("No silent_redirect_uri configured")); let n = yield this._loadUser(), o = yield this._iframeNavigator.prepare({ silentRequestTimeoutInSeconds: s }), l = yield this._signinStart(p({ request_type: "si:s", redirect_uri: r, prompt: "none", id_token_hint: this.settings.includeIdTokenInSilentRenew ? n?.id_token : void 0, response_type: this.settings.query_status_response_type, scope: "openid", skipUserInfo: !0 }, i), o); try {
        let h = {}, d = yield this._client.processSigninResponse(l.url, h);
        return e.debug("got signin response"), d.session_state && d.profile.sub ? (e.info("success for subject", d.profile.sub), { session_state: d.session_state, sub: d.profile.sub }) : (e.info("success, user not authenticated"), null);
    }
    catch (h) {
        if (this.settings.monitorAnonymousSession && h instanceof $)
            switch (h.error) {
                case "login_required":
                case "consent_required":
                case "interaction_required":
                case "account_selection_required": return e.info("success for anonymous user"), { session_state: h.session_state };
            }
        throw h;
    } }); }
    _signin(t, e, s) { return a(this, null, function* () { let i = yield this._signinStart(t, e); return yield this._signinEnd(i.url, s); }); }
    _signinStart(t, e) { return a(this, null, function* () { let s = this._logger.create("_signinStart"); try {
        let i = yield this._client.createSigninRequest(t);
        return s.debug("got signin request"), yield e.navigate({ url: i.url, state: i.state.id, response_mode: i.state.response_mode, scriptOrigin: this.settings.iframeScriptOrigin });
    }
    catch (i) {
        throw s.debug("error after preparing navigator, closing navigator window"), e.close(), i;
    } }); }
    _signinEnd(t, e) { return a(this, null, function* () { let s = this._logger.create("_signinEnd"), i = {}, r = yield this._client.processSigninResponse(t, i); return s.debug("got signin response"), yield this._buildUser(r, e); }); }
    _buildUser(t, e) { return a(this, null, function* () { let s = this._logger.create("_buildUser"), i = new Q(t); if (e) {
        if (e !== i.profile.sub)
            throw s.debug("current user does not match user returned from signin. sub from signin:", i.profile.sub), new $(D(p({}, t), { error: "login_required" }));
        s.debug("current user matches user returned from signin");
    } return yield this.storeUser(i), s.debug("user stored"), yield this._events.load(i), i; }); }
    signoutRedirect() { return a(this, arguments, function* (t = {}) { let e = this._logger.create("signoutRedirect"), n = t, { redirectMethod: s } = n, i = S(n, ["redirectMethod"]), r = yield this._redirectNavigator.prepare({ redirectMethod: s }); yield this._signoutStart(p({ request_type: "so:r", post_logout_redirect_uri: this.settings.post_logout_redirect_uri }, i), r), e.info("success"); }); }
    signoutRedirectCallback() { return a(this, arguments, function* (t = window.location.href) { let e = this._logger.create("signoutRedirectCallback"), s = yield this._signoutEnd(t); return e.info("success"), s; }); }
    signoutPopup() { return a(this, arguments, function* (t = {}) { let e = this._logger.create("signoutPopup"), c = t, { popupWindowFeatures: s, popupWindowTarget: i, popupSignal: r } = c, n = S(c, ["popupWindowFeatures", "popupWindowTarget", "popupSignal"]), o = this.settings.popup_post_logout_redirect_uri, l = yield this._popupNavigator.prepare({ popupWindowFeatures: s, popupWindowTarget: i, popupSignal: r }); yield this._signout(p({ request_type: "so:p", post_logout_redirect_uri: o, state: o == null ? void 0 : {} }, n), l), e.info("success"); }); }
    signoutPopupCallback() { return a(this, arguments, function* (t = window.location.href, e = !1) { let s = this._logger.create("signoutPopupCallback"); yield this._popupNavigator.callback(t, { keepOpen: e }), s.info("success"); }); }
    _signout(t, e) { return a(this, null, function* () { let s = yield this._signoutStart(t, e); return yield this._signoutEnd(s.url); }); }
    _signoutStart() { return a(this, arguments, function* (t = {}, e) { var s; let i = this._logger.create("_signoutStart"); try {
        let r = yield this._loadUser();
        i.debug("loaded current user from storage"), this.settings.revokeTokensOnSignout && (yield this._revokeInternal(r));
        let n = t.id_token_hint || r && r.id_token;
        n && (i.debug("setting id_token_hint in signout request"), t.id_token_hint = n), yield this.removeUser(), i.debug("user removed, creating signout request");
        let o = yield this._client.createSignoutRequest(t);
        return i.debug("got signout request"), yield e.navigate({ url: o.url, state: (s = o.state) == null ? void 0 : s.id, scriptOrigin: this.settings.iframeScriptOrigin });
    }
    catch (r) {
        throw i.debug("error after preparing navigator, closing navigator window"), e.close(), r;
    } }); }
    _signoutEnd(t) { return a(this, null, function* () { let e = this._logger.create("_signoutEnd"), s = yield this._client.processSignoutResponse(t); return e.debug("got signout response"), s; }); }
    signoutSilent() { return a(this, arguments, function* (t = {}) { var e; let s = this._logger.create("signoutSilent"), c = t, { silentRequestTimeoutInSeconds: i } = c, r = S(c, ["silentRequestTimeoutInSeconds"]), n = this.settings.includeIdTokenInSilentSignout ? (e = yield this._loadUser()) == null ? void 0 : e.id_token : void 0, o = this.settings.popup_post_logout_redirect_uri, l = yield this._iframeNavigator.prepare({ silentRequestTimeoutInSeconds: i }); yield this._signout(p({ request_type: "so:s", post_logout_redirect_uri: o, id_token_hint: n }, r), l), s.info("success"); }); }
    signoutSilentCallback() { return a(this, arguments, function* (t = window.location.href) { let e = this._logger.create("signoutSilentCallback"); yield this._iframeNavigator.callback(t), e.info("success"); }); }
    revokeTokens(t) { return a(this, null, function* () { let e = yield this._loadUser(); yield this._revokeInternal(e, t); }); }
    _revokeInternal(s) { return a(this, arguments, function* (t, e = this.settings.revokeTokenTypes) { let i = this._logger.create("_revokeInternal"); if (!t)
        return; let r = e.filter(n => typeof t[n] == "string"); if (!r.length) {
        i.debug("no need to revoke due to no token(s)");
        return;
    } for (let n of r)
        yield this._client.revokeToken(t[n], n), i.info(`${n} revoked successfully`), n !== "access_token" && (t[n] = null); yield this.storeUser(t), i.debug("user stored"), yield this._events.load(t); }); }
    startSilentRenew() { this._logger.create("startSilentRenew"), this._silentRenewService.start(); }
    stopSilentRenew() { this._silentRenewService.stop(); }
    get _userStoreKey() { return `user:${this.settings.authority}:${this.settings.client_id}`; }
    _loadUser() { return a(this, null, function* () { let t = this._logger.create("_loadUser"), e = yield this.settings.userStore.get(this._userStoreKey); return e ? (t.debug("user storageString loaded"), Q.fromStorageString(e)) : (t.debug("no user storageString"), null); }); }
    storeUser(t) { return a(this, null, function* () { let e = this._logger.create("storeUser"); if (t) {
        e.debug("storing user");
        let s = t.toStorageString();
        yield this.settings.userStore.set(this._userStoreKey, s);
    }
    else
        this._logger.debug("removing user"), yield this.settings.userStore.remove(this._userStoreKey), this.settings.dpop && (yield this.settings.dpop.store.remove(this.settings.client_id)); }); }
    clearStaleState() { return a(this, null, function* () { yield this._client.clearStaleState(); }); }
    dpopProof(t, e, s, i) { return a(this, null, function* () { var r, n; let o = yield (n = (r = this.settings.dpop) == null ? void 0 : r.store) == null ? void 0 : n.get(this.settings.client_id); if (o)
        return yield v.generateDPoPProof({ url: t, accessToken: e?.access_token, httpMethod: s, keyPair: o.keys, nonce: i }); }); }
    generateDPoPJkt(t) { return a(this, null, function* () { let e = yield t.store.get(this.settings.client_id); if (!e) {
        let s = yield v.generateDPoPKeys();
        e = new we(s), yield t.store.set(this.settings.client_id, e);
    } return yield v.generateDPoPJkt(e.keys); }); }
}, dt = "3.3.0", _t = dt, pt = class {
    constructor() { this._dbName = "oidc", this._storeName = "dpop"; }
    set(t, e) { return a(this, null, function* () { yield (yield this.createStore(this._dbName, this._storeName))("readwrite", i => (i.put(e, t), this.promisifyRequest(i.transaction))); }); }
    get(t) { return a(this, null, function* () { return yield (yield this.createStore(this._dbName, this._storeName))("readonly", s => this.promisifyRequest(s.get(t))); }); }
    remove(t) { return a(this, null, function* () { let e = yield this.get(t); return yield (yield this.createStore(this._dbName, this._storeName))("readwrite", i => this.promisifyRequest(i.delete(t))), e; }); }
    getAllKeys() { return a(this, null, function* () { return yield (yield this.createStore(this._dbName, this._storeName))("readonly", e => this.promisifyRequest(e.getAllKeys())); }); }
    promisifyRequest(t) { return new Promise((e, s) => { t.oncomplete = t.onsuccess = () => e(t.result), t.onabort = t.onerror = () => s(t.error); }); }
    createStore(t, e) { return a(this, null, function* () { let s = indexedDB.open(t); s.onupgradeneeded = () => s.result.createObjectStore(e); let i = yield this.promisifyRequest(s); return (r, n) => a(this, null, function* () { let l = i.transaction(e, r).objectStore(e); return yield n(l); }); }); }
};
export { Ne as AccessTokenEvents, Me as CheckSessionIFrame, we as DPoPState, $ as ErrorResponse, ie as ErrorTimeout, he as InMemoryWebStorage, pt as IndexedDbDPoPStore, F as Log, u as Logger, je as MetadataService, Xe as OidcClient, Z as OidcClientSettingsStore, Ye as SessionMonitor, G as SigninResponse, _e as SigninState, Be as SignoutResponse, B as State, Q as User, ut as UserManager, tt as UserManagerSettingsStore, _t as Version, ge as WebStorageStateStore };
//# sourceMappingURL=oidc_client_ts.EZXTa54rEz.js.map
