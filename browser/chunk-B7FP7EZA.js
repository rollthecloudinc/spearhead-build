import { k as a } from "@nf-internal/chunk-J4XOFOAH";
function I(e) { return encodeURIComponent(e).replace(/[!'()*]/g, function (r) { return "%" + r.charCodeAt(0).toString(16).toUpperCase(); }); }
function u(e) { let r = {}; if (e = e.replace(/^\?/, ""), e)
    for (let n of e.split("&")) {
        let [o, t = null] = n.split("=");
        o = decodeURIComponent(o), t && (t = decodeURIComponent(t)), o in r ? Array.isArray(r[o]) ? r[o].push(t) : r[o] = [r[o], t] : r[o] = t;
    } return r; }
var c = e => { if (typeof e == "string")
    return c(new URL(e)); let { hostname: r, pathname: n, port: o, protocol: t, search: i } = e, s; return i && (s = u(i)), { hostname: r, port: o ? parseInt(o) : void 0, protocol: t, path: n, query: s }; };
var d = e => typeof e == "object" ? "url" in e ? c(e.url) : e : c(e);
var l = e => a(null, null, function* () { let r = e?.Bucket || ""; if (typeof e.Bucket == "string" && (e.Bucket = r.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"))), y(r)) {
    if (e.ForcePathStyle === !0)
        throw new Error("Path-style addressing cannot be used with ARN buckets");
}
else
    (!v(r) || r.indexOf(".") !== -1 && !String(e.Endpoint).startsWith("http:") || r.toLowerCase() !== r || r.length < 3) && (e.ForcePathStyle = !0); return e.DisableMultiRegionAccessPoints && (e.disableMultiRegionAccessPoints = !0, e.DisableMRAP = !0), e; }), w = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/, A = /(\d+\.){3}\d+/, E = /\.\./;
var v = e => w.test(e) && !A.test(e) && !E.test(e), y = e => { let [r, n, o, , , t] = e.split(":"), i = r === "arn" && e.split(":").length >= 6, s = !!(i && n && o && t); if (i && !s)
    throw new Error(`Invalid ARN: ${e} was an invalid ARN.`); return s; };
var f = (e, r, n) => { let o = () => a(null, null, function* () { let t = n[e] ?? n[r]; return typeof t == "function" ? t() : t; }); return e === "credentialScope" || r === "CredentialScope" ? () => a(null, null, function* () { let t = typeof n.credentials == "function" ? yield n.credentials() : n.credentials; return t?.credentialScope ?? t?.CredentialScope; }) : e === "accountId" || r === "AccountId" ? () => a(null, null, function* () { let t = typeof n.credentials == "function" ? yield n.credentials() : n.credentials; return t?.accountId ?? t?.AccountId; }) : e === "endpoint" || r === "endpoint" ? () => a(null, null, function* () { if (n.isCustomEndpoint === !1)
    return; let t = yield o(); if (t && typeof t == "object") {
    if ("url" in t)
        return t.url.href;
    if ("hostname" in t) {
        let { protocol: i, hostname: s, port: p, path: h } = t;
        return `${i}//${s}${p ? ":" + p : ""}${h}`;
    }
} return t; }) : o; };
var m = e => a(null, null, function* () { });
var $ = (e, r, n, o) => a(null, null, function* () { if (!n.isCustomEndpoint) {
    let s;
    n.serviceConfiguredEndpoint ? s = yield n.serviceConfiguredEndpoint() : s = yield m(n.serviceId), s && (n.endpoint = () => Promise.resolve(d(s)), n.isCustomEndpoint = !0);
} let t = yield x(e, r, n); if (typeof n.endpointProvider != "function")
    throw new Error("config.endpointProvider is not set."); return n.endpointProvider(t, o); }), x = (e, r, n) => a(null, null, function* () { let o = {}, t = r?.getEndpointParameterInstructions?.() || {}; for (let [i, s] of Object.entries(t))
    switch (s.type) {
        case "staticContextParams":
            o[i] = s.value;
            break;
        case "contextParams":
            o[i] = e[s.name];
            break;
        case "clientContextParams":
        case "builtInParams":
            o[i] = yield f(s.name, i, n)();
            break;
        case "operationContextParams":
            o[i] = s.get(e);
            break;
        default: throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(s));
    } return Object.keys(t).length === 0 && Object.assign(o, n), String(n.serviceId).toLowerCase() === "s3" && (yield l(o)), o; });
export { I as a, c as b, m as c, d, $ as e, x as f };
