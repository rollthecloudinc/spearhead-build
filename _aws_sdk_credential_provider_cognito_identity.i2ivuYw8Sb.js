import { a as S } from "@nf-internal/chunk-VD7OH2TE";
import { k as f } from "@nf-internal/chunk-GL2BOVXA";
var c = class t extends S {
    name = "CredentialsProviderError";
    constructor(e, r = !0) { super(e, r), Object.setPrototypeOf(this, t.prototype); }
};
function h(t) { return Promise.all(Object.keys(t).reduce((e, r) => { let o = t[r]; return typeof o == "string" ? e.push([r, o]) : e.push(o().then(n => [r, n])), e; }, [])).then(e => e.reduce((r, [o, n]) => (r[o] = n, r), {})); }
function v(t) { return e => f(null, null, function* () { t.logger?.debug("@aws-sdk/credential-provider-cognito-identity - fromCognitoIdentity"); let { GetCredentialsForIdentityCommand: r, CognitoIdentityClient: o } = yield import("@nf-internal/loadCognitoIdentity-Q4ZFEPTX"), n = l => t.clientConfig?.[l] ?? t.parentClientConfig?.[l] ?? e?.callerClientConfig?.[l], { Credentials: { AccessKeyId: i = A(t.logger), Expiration: s, SecretKey: m = D(t.logger), SessionToken: a } = k(t.logger) } = yield (t.client ?? new o(Object.assign({}, t.clientConfig ?? {}, { region: n("region"), profile: n("profile") }))).send(new r({ CustomRoleArn: t.customRoleArn, IdentityId: t.identityId, Logins: t.logins ? yield h(t.logins) : void 0 })); return { identityId: t.identityId, accessKeyId: i, secretAccessKey: m, sessionToken: a, expiration: s }; }); }
function A(t) { throw new c("Response from Amazon Cognito contained no access key ID", { logger: t }); }
function k(t) { throw new c("Response from Amazon Cognito contained no credentials", { logger: t }); }
function D(t) { throw new c("Response from Amazon Cognito contained no secret key", { logger: t }); }
var b = "IdentityIds", y = class {
    dbName;
    constructor(e = "aws:cognito-identity-ids") { this.dbName = e; }
    getItem(e) { return this.withObjectStore("readonly", r => { let o = r.get(e); return new Promise(n => { o.onerror = () => n(null), o.onsuccess = () => n(o.result ? o.result.value : null); }); }).catch(() => null); }
    removeItem(e) { return this.withObjectStore("readwrite", r => { let o = r.delete(e); return new Promise((n, i) => { o.onerror = () => i(o.error), o.onsuccess = () => n(); }); }); }
    setItem(e, r) { return this.withObjectStore("readwrite", o => { let n = o.put({ id: e, value: r }); return new Promise((i, s) => { n.onerror = () => s(n.error), n.onsuccess = () => i(); }); }); }
    getDb() { let e = self.indexedDB.open(this.dbName, 1); return new Promise((r, o) => { e.onsuccess = () => { r(e.result); }, e.onerror = () => { o(e.error); }, e.onblocked = () => { o(new Error("Unable to access DB")); }, e.onupgradeneeded = () => { let n = e.result; n.onerror = () => { o(new Error("Failed to create object store")); }, n.createObjectStore(b, { keyPath: "id" }); }; }); }
    withObjectStore(e, r) { return this.getDb().then(o => { let n = o.transaction(b, e); return n.oncomplete = () => o.close(), new Promise((i, s) => { n.onerror = () => s(n.error), i(r(n.objectStore(b))); }).catch(i => { throw o.close(), i; }); }); }
};
var I = class {
    store;
    constructor(e = {}) { this.store = e; }
    getItem(e) { return e in this.store ? this.store[e] : null; }
    removeItem(e) { delete this.store[e]; }
    setItem(e, r) { this.store[e] = r; }
};
var E = new I;
function P() { return typeof self == "object" && self.indexedDB ? new y : typeof window == "object" && window.localStorage ? window.localStorage : E; }
function Q({ accountId: t, cache: e = P(), client: r, clientConfig: o, customRoleArn: n, identityPoolId: i, logins: s, userIdentifier: m = !s || Object.keys(s).length === 0 ? "ANONYMOUS" : void 0, logger: a, parentClientConfig: l }) { a?.debug("@aws-sdk/credential-provider-cognito-identity - fromCognitoIdentity"); let d = m ? `aws:cognito-identity-credentials:${i}:${m}` : void 0, p = g => f(null, null, function* () { let { GetIdCommand: C, CognitoIdentityClient: j } = yield import("@nf-internal/loadCognitoIdentity-Q4ZFEPTX"), O = u => o?.[u] ?? l?.[u] ?? g?.callerClientConfig?.[u], x = r ?? new j(Object.assign({}, o ?? {}, { region: O("region"), profile: O("profile") })), w = d && (yield e.getItem(d)); if (!w) {
    let { IdentityId: u = R(a) } = yield x.send(new C({ AccountId: t, IdentityPoolId: i, Logins: s ? yield h(s) : void 0 }));
    w = u, d && Promise.resolve(e.setItem(d, w)).catch(() => { });
} return p = v({ client: x, customRoleArn: n, logins: s, identityId: w }), p(g); }); return g => p(g).catch(C => f(null, null, function* () { throw d && Promise.resolve(e.removeItem(d)).catch(() => { }), C; })); }
function R(t) { throw new c("Response from Amazon Cognito contained no identity ID", { logger: t }); }
export { v as fromCognitoIdentity, Q as fromCognitoIdentityPool };
//# sourceMappingURL=_aws_sdk_credential_provider_cognito_identity.i2ivuYw8Sb.js.map
