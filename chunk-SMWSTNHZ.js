import { a as g, b as h, k as a } from "@nf-internal/chunk-GL2BOVXA";
var y = "__NATIVE_FEDERATION__", E = globalThis;
E[y] ??= { externals: new Map, remoteNamesToRemote: new Map, baseUrlToRemoteNames: new Map };
var f = E[y], N = f.externals;
function I(e) { return `${e.packageName}@${e.version}`; }
function T(e) { let t = I(e); return N.get(t); }
function M(e, t) { let o = I(e); N.set(o, t); }
var b = f.remoteNamesToRemote, m = f.baseUrlToRemoteNames;
function F(e, t) { b.set(e, t), m.set(t.baseUrl, e); }
function k(e) { return m.get(e); }
function O(e) { return m.has(e); }
function _(e) { return b.get(e); }
function S(e) { document.head.appendChild(Object.assign(document.createElement("script"), { type: "importmap-shim", innerHTML: JSON.stringify(e) })); }
function p(e) { let t = e.split("/"); return t.pop(), t.join("/"); }
function l(e, t) { for (; e.endsWith("/");)
    e = e.substring(0, e.length - 1); return t.startsWith("./") && (t = t.substring(2, t.length)), `${e}/${t}`; }
var R = (function (e) { return e.COMPLETED = "federation-rebuild-complete", e.ERROR = "federation-rebuild-error", e; })(R || {});
function $(e) { let t = new EventSource(e); t.onmessage = function (o) { JSON.parse(o.data).type === R.COMPLETED && (console.log("[Federation] Rebuild completed, reloading..."), window.location.reload()); }, t.onerror = function (o) { console.warn("[Federation] SSE connection error:", o); }; }
function P(e, t) { return a(this, null, function* () { let o = p(e), n = yield v(e); t || (t = n.name), n.buildNotificationsEndpoint && $(o + n.buildNotificationsEndpoint); let r = j(n, t, o); return F(t, h(g({}, n), { baseUrl: o })), r; }); }
function j(e, t, o) { let n = D(e, t, o), r = C(e, o); return { imports: n, scopes: r }; }
function v(e) { return a(this, null, function* () { return yield fetch(e).then(o => o.json()); }); }
function C(e, t) { let o = {}, n = {}; for (let r of e.shared) {
    let s = T(r) ?? l(t, r.outFileName);
    M(r, s), n[r.packageName] = s;
} return o[t + "/"] = n, o; }
function D(e, t, o) { let n = {}; for (let r of e.exposes) {
    let s = l(t, r.key), c = l(o, r.outFileName);
    n[s] = c;
} return n; }
function W(e, t) { return a(this, null, function* () { let o = V(e, t); yield K(o); let n = A(o), r = _(n), s = o.fallback, c = r ? "" : "unknown remote " + n; if (!r && !s)
    throw new Error(c); if (!r)
    return w(c), Promise.resolve(s); let u = r.exposes.find(i => i.key === o.exposedModule), d = u ? "" : `Unknown exposed module ${o.exposedModule} in remote ${n}`; if (!u && !s)
    throw new Error(d); if (!u)
    return w(d), Promise.resolve(s); let x = l(r.baseUrl, u.outFileName); try {
    return U(x);
}
catch (i) {
    if (s)
        return console.error("error loading remote module", i), s;
    throw i;
} }); }
function U(e) { return typeof importShim < "u" ? importShim(e) : import(e); }
function A(e) { let t; if (e.remoteName)
    t = e.remoteName;
else if (e.remoteEntry) {
    let o = p(e.remoteEntry);
    t = k(o);
}
else
    throw new Error("unexpcted arguments: Please pass remoteName or remoteEntry"); if (!t)
    throw new Error("unknown remoteName " + t); return t; }
function K(e) { return a(this, null, function* () { if (e.remoteEntry && !O(p(e.remoteEntry))) {
    let t = yield P(e.remoteEntry);
    S(t);
} }); }
function V(e, t) { let o; if (typeof e == "string" && t)
    o = { remoteName: e, exposedModule: t };
else if (typeof e == "object" && !t)
    o = e;
else
    throw new Error("unexpected arguments: please pass options or a remoteName/exposedModule-pair"); return o; }
function w(e) { typeof window < "u" && console.error(e); }
export { W as a };
//# sourceMappingURL=chunk-SMWSTNHZ.js.map
