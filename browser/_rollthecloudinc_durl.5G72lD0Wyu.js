import { a as h, b as x } from "@nf-internal/chunk-J4XOFOAH";
import * as c from "@angular/core";
import "@angular/core";
import * as S from "@rollthecloudinc/dparam";
import { ParamPlugin as v, DparamModule as C } from "@rollthecloudinc/dparam";
import { of as d, forkJoin as j } from "rxjs";
import { getRouterSelectors as Q } from "@ngrx/router-store";
import * as O from "@ngrx/store";
import { select as R } from "@ngrx/store";
import { map as g, switchMap as _, defaultIfEmpty as F, tap as I } from "rxjs/operators";
import * as P from "qs";
var V = () => new v({ id: "page", title: "Page", usedContexts: () => d(["_page"]), condition: ({ param: t, metadata: n }) => t.flags.findIndex(e => e.enabled && e.name === "page") > -1 && n.has("page"), evalParam: ({ param: t, metadata: n }) => d(`${n.get("page")}`) }), k = () => new v({ id: "searchstring", title: "Searchstring", condition: ({ param: t, metadata: n }) => t.flags.findIndex(e => e.enabled) > -1 && n.has("searchString"), evalParam: ({ param: t, metadata: n }) => d(`${n.get("searchString")}`) }), q = () => new v({ id: "route", title: "Route", usedContexts: () => d(["_route"]), evalParam: ({ param: t, metadata: n }) => { let e = n.get("_route"); return d(e.params[t.mapping.value]); } }), J = () => new v({ id: "querystring", title: "Querystring", usedContexts: () => d(["_page"]), evalParam: ({ param: t, metadata: n }) => { let e = n.get("_route"); return d(e.queryParams[t.mapping.value]); } }), U = () => new v({ id: "standardpagination", title: "Standard Pagination", usedContexts: () => d(["_page"]), condition: ({ param: t, metadata: n }) => t.flags.findIndex(e => e.enabled && e.name === "offset") > -1 && n.has("limit") && n.has("page"), evalParam: ({ param: t, metadata: n }) => d(`${+n.get("limit") * (+n.get("page") - 1)}`) }), X = (() => { class t {
    constructor(e) { [V(), k(), q(), J(), U()].forEach(i => e.register(i)); }
    static { this.\u0275fac = function (i) { return new (i || t)(c.\u0275\u0275inject(S.ParamPluginManager)); }; }
    static { this.\u0275mod = c.\u0275\u0275defineNgModule({ type: t }); }
    static { this.\u0275inj = c.\u0275\u0275defineInjector({ imports: [C] }); }
} return t; })(), Y = (() => { class t {
    constructor(e, i, o) { this.routerStore = e, this.paramPluginManager = i, this.paramEvaluatorService = o; }
    getUrl(e, i, o) { let { selectCurrentRoute: l } = Q(); return this.routerStore.pipe(R(l), g(f => [f, e, e ? e.indexOf("?") : -1]), g(([f, s, u]) => [f, u > -1 ? s.substring(0, u) : s, u > -1 ? s.substring(u + 1) : ""]), _(([f, s, u]) => { let m = P.parse(u), E = s ? s.split("/") : [], b = new Map([...o, ["_route", f]]), D = this.paramNames(e), w = i.reduce((r, a, p) => new Map([...r, [D[p], a]]), new Map), N = E.reduce((r, a, p) => a.indexOf(":") === 0 ? [...r, this.paramEvaluatorService.paramValue(w.get(a), b)] : [...r, d(E[p])], []), M = []; for (let r in m)
        Array.isArray(m[r]) ? m[r].forEach(a => M.push(this.paramEvaluatorService.paramValue(w.get(a), b).pipe(g(p => [r, p, !0])))) : typeof m[r] == "string" && m[r].indexOf(":") > -1 ? M.push(this.paramEvaluatorService.paramValue(w.get(m[r]), b).pipe(g(a => [r, a, !1]))) : M.push(d([r, m[r], Array.isArray(m[r])])); return j([j(N).pipe(g(r => r.filter(a => a != null && a !== "" && a !== "undefined").map((a, p) => p === 0 && a.indexOf("http") === 0 ? `${a}/` : a).join("/")), F(s)), j(M).pipe(I(r => console.log(r)), g(r => r.reduce((a, [p, y, $]) => { if (y == null || y === "" || y === "undefined") {
            let A = h({}, a);
            return delete A[p], A;
        }
        else
            return $ ? x(h({}, a), { [p]: [...a[p] !== void 0 ? a[p] : [], y] }) : x(h({}, a), { [p]: y }); }, this.rebuildQueryString(m))), I(r => console.log(r)), g(r => P.stringify(r, { arrayFormat: "repeat", indices: !1 })), F(u))]).pipe(g(r => r.join("?"))); })); }
    paramNames(e) { let i = e ? e.indexOf("?") : -1, o = (i > -1 ? e.substring(0, i) : e || "").split("/").reduce((s, u, m) => u.indexOf(":") === 0 ? x(h({}, s), { [u.substr(1)]: u }) : s, {}), l = h(h({}, o), P.parse(e ? e.substring(e.indexOf("?") + 1) : "")), f = []; for (let s in l)
        Array.isArray(l[s]) ? l[s].forEach(u => f.push(u)) : l[s].indexOf(":") === 0 && f.push(l[s]); return f; }
    rebuildQueryString(e) { let i = {}; for (let o in e)
        Array.isArray(e[o]) ? i[o] = [] : o[e] !== void 0 && o[e] !== null && o[e] !== "" && o[e] !== "undefined" && (i[o] = o[e]); return P.parse(i); }
    static { this.\u0275fac = function (i) { return new (i || t)(c.\u0275\u0275inject(O.Store), c.\u0275\u0275inject(S.ParamPluginManager), c.\u0275\u0275inject(S.ParamEvaluatorService)); }; }
    static { this.\u0275prov = c.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); }
} return t; })();
export { X as DurlModule, Y as UrlGeneratorService };
