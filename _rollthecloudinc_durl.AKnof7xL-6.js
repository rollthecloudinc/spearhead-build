import { a as h, b as M } from "@nf-internal/chunk-GL2BOVXA";
import * as c from "@angular/core";
import "@angular/core";
import * as P from "@rollthecloudinc/dparam";
import { ParamPlugin as S, DparamModule as C } from "@rollthecloudinc/dparam";
import { of as d, forkJoin as j } from "rxjs";
import { getRouterSelectors as Q } from "@ngrx/router-store";
import * as O from "@ngrx/store";
import { select as R } from "@ngrx/store";
import { map as g, switchMap as _, defaultIfEmpty as F, tap as I } from "rxjs/operators";
import x from "qs";
var V = () => new S({ id: "page", title: "Page", usedContexts: () => d(["_page"]), condition: ({ param: t, metadata: n }) => t.flags.findIndex(e => e.enabled && e.name === "page") > -1 && n.has("page"), evalParam: ({ param: t, metadata: n }) => d(`${n.get("page")}`) }), k = () => new S({ id: "searchstring", title: "Searchstring", condition: ({ param: t, metadata: n }) => t.flags.findIndex(e => e.enabled) > -1 && n.has("searchString"), evalParam: ({ param: t, metadata: n }) => d(`${n.get("searchString")}`) }), J = () => new S({ id: "route", title: "Route", usedContexts: () => d(["_route"]), evalParam: ({ param: t, metadata: n }) => { let e = n.get("_route"); return d(e.params[t.mapping.value]); } }), U = () => new S({ id: "querystring", title: "Querystring", usedContexts: () => d(["_page"]), evalParam: ({ param: t, metadata: n }) => { let e = n.get("_route"); return d(e.queryParams[t.mapping.value]); } }), z = () => new S({ id: "standardpagination", title: "Standard Pagination", usedContexts: () => d(["_page"]), condition: ({ param: t, metadata: n }) => t.flags.findIndex(e => e.enabled && e.name === "offset") > -1 && n.has("limit") && n.has("page"), evalParam: ({ param: t, metadata: n }) => d(`${+n.get("limit") * (+n.get("page") - 1)}`) }), Z = (() => { class t {
    constructor(e) { [V(), k(), J(), U(), z()].forEach(i => e.register(i)); }
    static { this.\u0275fac = function (i) { return new (i || t)(c.\u0275\u0275inject(P.ParamPluginManager)); }; }
    static { this.\u0275mod = c.\u0275\u0275defineNgModule({ type: t }); }
    static { this.\u0275inj = c.\u0275\u0275defineInjector({ imports: [C] }); }
} return t; })(), q = (() => { class t {
    constructor(e, i, s) { this.routerStore = e, this.paramPluginManager = i, this.paramEvaluatorService = s; }
    getUrl(e, i, s) { let { selectCurrentRoute: l } = Q(); return this.routerStore.pipe(R(l), g(f => [f, e, e ? e.indexOf("?") : -1]), g(([f, o, u]) => [f, u > -1 ? o.substring(0, u) : o, u > -1 ? o.substring(u + 1) : ""]), _(([f, o, u]) => { let m = x.parse(u), E = o ? o.split("/") : [], b = new Map([...s, ["_route", f]]), D = this.paramNames(e), w = i.reduce((r, a, p) => new Map([...r, [D[p], a]]), new Map), N = E.reduce((r, a, p) => a.indexOf(":") === 0 ? [...r, this.paramEvaluatorService.paramValue(w.get(a), b)] : [...r, d(E[p])], []), v = []; for (let r in m)
        Array.isArray(m[r]) ? m[r].forEach(a => v.push(this.paramEvaluatorService.paramValue(w.get(a), b).pipe(g(p => [r, p, !0])))) : typeof m[r] == "string" && m[r].indexOf(":") > -1 ? v.push(this.paramEvaluatorService.paramValue(w.get(m[r]), b).pipe(g(a => [r, a, !1]))) : v.push(d([r, m[r], Array.isArray(m[r])])); return j([j(N).pipe(g(r => r.filter(a => a != null && a !== "" && a !== "undefined").map((a, p) => p === 0 && a.indexOf("http") === 0 ? `${a}/` : a).join("/")), F(o)), j(v).pipe(I(r => console.log(r)), g(r => r.reduce((a, [p, y, $]) => { if (y == null || y === "" || y === "undefined") {
            let A = h({}, a);
            return delete A[p], A;
        }
        else
            return $ ? M(h({}, a), { [p]: [...a[p] !== void 0 ? a[p] : [], y] }) : M(h({}, a), { [p]: y }); }, this.rebuildQueryString(m))), I(r => console.log(r)), g(r => x.stringify(r, { arrayFormat: "repeat", indices: !1 })), F(u))]).pipe(g(r => r.join("?"))); })); }
    paramNames(e) { let i = e ? e.indexOf("?") : -1, s = (i > -1 ? e.substring(0, i) : e || "").split("/").reduce((o, u, m) => u.indexOf(":") === 0 ? M(h({}, o), { [u.substr(1)]: u }) : o, {}), l = h(h({}, s), x.parse(e ? e.substring(e.indexOf("?") + 1) : "")), f = []; for (let o in l)
        Array.isArray(l[o]) ? l[o].forEach(u => f.push(u)) : l[o].indexOf(":") === 0 && f.push(l[o]); return f; }
    rebuildQueryString(e) { let i = {}; for (let s in e)
        Array.isArray(e[s]) ? i[s] = [] : s[e] !== void 0 && s[e] !== null && s[e] !== "" && s[e] !== "undefined" && (i[s] = s[e]); return x.parse(i); }
    static { this.\u0275fac = function (i) { return new (i || t)(c.\u0275\u0275inject(O.Store), c.\u0275\u0275inject(P.ParamPluginManager), c.\u0275\u0275inject(P.ParamEvaluatorService)); }; }
    static { this.\u0275prov = c.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); }
} return t; })();
export { Z as DurlModule, q as UrlGeneratorService };
//# sourceMappingURL=_rollthecloudinc_durl.AKnof7xL-6.js.map
