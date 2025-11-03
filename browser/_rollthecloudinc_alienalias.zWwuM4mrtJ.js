import { a as u } from "@nf-internal/chunk-GL2BOVXA";
import * as s from "@angular/core";
import { InjectionToken as P, PLATFORM_ID as k } from "@angular/core";
import * as h from "@rollthecloudinc/crud";
import { CrudDataService as _ } from "@rollthecloudinc/crud";
import { SITE_NAME as q } from "@rollthecloudinc/utils";
import * as w from "@rollthecloudinc/alias";
import { AliasPlugin as x } from "@rollthecloudinc/alias";
import { map as l, tap as $, defaultIfEmpty as M, catchError as L } from "rxjs/operators";
import { loadRemoteModule as R } from "@softarc/native-federation-runtime";
import { of as U } from "rxjs";
import * as p from "qs";
import { isPlatformServer as A } from "@angular/common";
import * as j from "@angular/router";
import * as c from "@ngrx/data";
var O = new P("AlienaliasSettings"), m = class extends x {
}, d = class {
    constructor(e) { e && (this.id = e.id, this.site = e.site, this.path = e.path, this.remoteEntry = e.remoteEntry, this.moduleName = e.moduleName); }
}, S = class {
    constructor(e) { e && (this.openSearchDomain = e.openSearchDomain); }
}, f = class {
    get alienAliasService() { return this.es.getEntityCollectionService("AlienAlias"); }
    constructor(e, t, i) { this.siteName = e, this.es = t, this.router = i, this.routesLoaded = !1; }
    isLoaded() { return this.routesLoaded; }
    load() { return this.alienAliasService.getWithQuery(`site=${encodeURIComponent(`{"term":{"site.keyword":{"value":"${this.siteName}"}}}`)}&path=${encodeURIComponent('{"wildcard":{"path.keyword":{"value":"*"}}}')}`).pipe(l(e => e.filter(t => t.path !== void 0 && t.path !== "")), l(e => e.map(t => new d(t)).sort((t, i) => t.path.split("/").length === i.path.split("/").length ? t.path.split("/")[t.path.split("/").length - 1] > i.path.split("/")[i.path.split("/").length - 1] ? -1 : 1 : t.path.split("/").length > i.path.split("/").length ? -1 : 1)), $(e => { e.forEach(t => { this.router.config.unshift({ matcher: this.createMatcher(t), loadChildren: () => { console.log(`loading remote module remote entry ${t.remoteEntry} module ${t.moduleName}`); let i = { remoteName: "plugin", remoteEntry: t.remoteEntry, exposedModule: "./Module" }; return R(i).then(r => r[t.moduleName]); } }); }), this.routesLoaded = !0; }), $(() => console.log("alien alias routes loaded")), l(() => !0), M(!0)); }
    createMatcher(e) { return t => { if (("/" + t.map(i => i.path).join("/")).indexOf(e.path) === 0) {
        console.log(`matcher matched: ${e.path}`);
        let i = e.path.substr(1).split("/").length;
        return { consumed: [t[0]] };
    }
    else
        return null; }; }
}, g = class {
    get alienAliasService() { return this.es.getEntityCollectionService("AlienAlias"); }
    constructor(e, t, i) { this.siteName = e, this.es = t, this.router = i; }
    match(e) { let t = "path=" + e.url.substr(1).split("/").reduce((i, r, n) => [...i, n === 0 ? `/${r}` : `${i[n - 1]}/${r}`], []).map(i => this.encodePathComponent(i)).join("&path=") + `&site=${encodeURIComponent(`{"term":{"site.keyword":{"value":"${this.siteName}"}}}`)}`; return this.alienAliasService.getWithQuery(t).pipe(L(i => U([])), l(i => i.reduce((r, n) => r === void 0 || r.path.split("/").length < n.path.split("/").length ? n : r, void 0)), l(i => !!i), M(!1)); }
    encodePathComponent(e) { return `{"term":{"path.keyword":{"value":"${e}"}}}`; }
}, y = class {
    get alienAliasService() { return this.es.getEntityCollectionService("AlienAlias"); }
    constructor(e, t, i) { this.siteName = e, this.es = t, this.router = i; }
    redirect(e, t) { if (t.url.indexOf("pages") > -1)
        console.log(`redirect: ${t.url}`), this.router.navigateByUrl(t.url);
    else {
        let i = "path=" + t.url.substr(1).split("/").reduce((r, n, a) => [...r, a === 0 ? `/${n}` : `${r[a - 1]}/${n}`], []).map(r => this.encodePathComponent(r)).join("&path=") + `&site=${encodeURIComponent(`{"term":{"site.keyword":{"value":"${this.siteName}"}}}`)}`;
        this.alienAliasService.getWithQuery(i).pipe(l(r => r.reduce((n, a) => n === void 0 || n.path.split("/").length < a.path.split("/").length ? a : n, void 0)), l(r => { let n = t.url.substr(1).split("/").slice(r.path.split("/").length - 1).join("/"); return [r, n]; })).subscribe(([r, n]) => { console.log(`nagigvate to: ${r.path}${n === "" ? "" : `/${n}`}?${p.stringify(e.queryParams)}`), this.router.navigateByUrl(`${r.path}${n === "" ? "" : `/${n}`}?${p.stringify(e.queryParams)}`, {}); });
    } }
    encodePathComponent(e) { return `{"term":{"path.keyword":{"value":"${e}"}}}`; }
}, Q = (o, e, t) => { let i = new f(o, e, t), r = new g(o, e, t), n = new y(o, e, t); return new m({ id: "module", title: "module", loadingStrategy: i, matchingStrategy: r, redirectHandler: n }); }, T = (o, e) => ({ AlienAlias: { entityName: "AlienAlias", crud: u(u({}, A(o) ? {} : { aws_opensearch_template: { ops: ["query"], params: { id: "panelpagelistitems", index: "classified_alienalias", hits: !0, source: !0, domain: e.openSearchDomain, region: "us-east-1" } } }), A(o) ? {} : { idb_keyval: { params: { prefix: "alienalias__" }, queryMappings: new Map([["site", { defaultOperator: "term||wildcard" }], ["path", { defaultOperator: "term||wildcard" }]]) } }) } }), X = (() => { class o {
    constructor(t, i, r, n, a, v, E, C, N, I) { let D = T(i, r); v.registerMetadataMap(D), n.register(Q(t, E, a)), C.registerService("AlienAlias", new _("AlienAlias", N, v, I)); }
    static { this.\u0275fac = function (i) { return new (i || o)(s.\u0275\u0275inject(q), s.\u0275\u0275inject(k), s.\u0275\u0275inject(O), s.\u0275\u0275inject(w.AliasPluginManager), s.\u0275\u0275inject(j.Router), s.\u0275\u0275inject(c.EntityDefinitionService), s.\u0275\u0275inject(c.EntityServices), s.\u0275\u0275inject(c.EntityDataService), s.\u0275\u0275inject(h.CrudAdaptorPluginManager), s.\u0275\u0275inject(h.CrudDataHelperService)); }; }
    static { this.\u0275mod = s.\u0275\u0275defineNgModule({ type: o }); }
    static { this.\u0275inj = s.\u0275\u0275defineInjector({}); }
} return o; })();
export { O as ALIENALIAS_SETTINGS, d as AlienAlias, X as AlienaliasModule, m as AlienaliasPlugin, S as AlienaliasSettings };
//# sourceMappingURL=_rollthecloudinc_alienalias.zWwuM4mrtJ.js.map
