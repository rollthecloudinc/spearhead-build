import { a as $ } from "@nf-internal/chunk-SMWSTNHZ";
import { a as u } from "@nf-internal/chunk-GL2BOVXA";
import * as s from "@angular/core";
import { InjectionToken as k, PLATFORM_ID as _ } from "@angular/core";
import * as h from "@rollthecloudinc/crud";
import { CrudDataService as q } from "@rollthecloudinc/crud";
import { SITE_NAME as x } from "@rollthecloudinc/utils";
import * as M from "@rollthecloudinc/alias";
import { AliasPlugin as L } from "@rollthecloudinc/alias";
import { map as l, tap as A, defaultIfEmpty as j, catchError as R } from "rxjs/operators";
import { of as U } from "rxjs";
import * as p from "qs";
import { isPlatformServer as S } from "@angular/common";
import * as E from "@angular/router";
import * as c from "@ngrx/data";
var O = new k("AlienaliasSettings"), m = class extends L {
}, d = class {
    constructor(e) { e && (this.id = e.id, this.site = e.site, this.path = e.path, this.remoteEntry = e.remoteEntry, this.moduleName = e.moduleName); }
}, w = class {
    constructor(e) { e && (this.openSearchDomain = e.openSearchDomain); }
}, f = class {
    get alienAliasService() { return this.es.getEntityCollectionService("AlienAlias"); }
    constructor(e, t, i) { this.siteName = e, this.es = t, this.router = i, this.routesLoaded = !1; }
    isLoaded() { return this.routesLoaded; }
    load() { return this.alienAliasService.getWithQuery(`site=${encodeURIComponent(`{"term":{"site.keyword":{"value":"${this.siteName}"}}}`)}&path=${encodeURIComponent('{"wildcard":{"path.keyword":{"value":"*"}}}')}`).pipe(l(e => e.filter(t => t.path !== void 0 && t.path !== "")), l(e => e.map(t => new d(t)).sort((t, i) => t.path.split("/").length === i.path.split("/").length ? t.path.split("/")[t.path.split("/").length - 1] > i.path.split("/")[i.path.split("/").length - 1] ? -1 : 1 : t.path.split("/").length > i.path.split("/").length ? -1 : 1)), A(e => { e.forEach(t => { this.router.config.unshift({ matcher: this.createMatcher(t), loadChildren: () => { console.log(`loading remote module remote entry ${t.remoteEntry} module ${t.moduleName}`); let i = { remoteName: "plugin", remoteEntry: t.remoteEntry, exposedModule: "./Module" }; return $(i).then(r => r[t.moduleName]); } }); }), this.routesLoaded = !0; }), A(() => console.log("alien alias routes loaded")), l(() => !0), j(!0)); }
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
    match(e) { let t = "path=" + e.url.substr(1).split("/").reduce((i, r, n) => [...i, n === 0 ? `/${r}` : `${i[n - 1]}/${r}`], []).map(i => this.encodePathComponent(i)).join("&path=") + `&site=${encodeURIComponent(`{"term":{"site.keyword":{"value":"${this.siteName}"}}}`)}`; return this.alienAliasService.getWithQuery(t).pipe(R(i => U([])), l(i => i.reduce((r, n) => r === void 0 || r.path.split("/").length < n.path.split("/").length ? n : r, void 0)), l(i => !!i), j(!1)); }
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
}, Q = (o, e, t) => { let i = new f(o, e, t), r = new g(o, e, t), n = new y(o, e, t); return new m({ id: "module", title: "module", loadingStrategy: i, matchingStrategy: r, redirectHandler: n }); }, T = (o, e) => ({ AlienAlias: { entityName: "AlienAlias", crud: u(u({}, S(o) ? {} : { aws_opensearch_template: { ops: ["query"], params: { id: "panelpagelistitems", index: "classified_alienalias", hits: !0, source: !0, domain: e.openSearchDomain, region: "us-east-1" } } }), S(o) ? {} : { idb_keyval: { params: { prefix: "alienalias__" }, queryMappings: new Map([["site", { defaultOperator: "term||wildcard" }], ["path", { defaultOperator: "term||wildcard" }]]) } }) } }), X = (() => { class o {
    constructor(t, i, r, n, a, v, C, N, I, D) { let P = T(i, r); v.registerMetadataMap(P), n.register(Q(t, C, a)), N.registerService("AlienAlias", new q("AlienAlias", I, v, D)); }
    static { this.\u0275fac = function (i) { return new (i || o)(s.\u0275\u0275inject(x), s.\u0275\u0275inject(_), s.\u0275\u0275inject(O), s.\u0275\u0275inject(M.AliasPluginManager), s.\u0275\u0275inject(E.Router), s.\u0275\u0275inject(c.EntityDefinitionService), s.\u0275\u0275inject(c.EntityServices), s.\u0275\u0275inject(c.EntityDataService), s.\u0275\u0275inject(h.CrudAdaptorPluginManager), s.\u0275\u0275inject(h.CrudDataHelperService)); }; }
    static { this.\u0275mod = s.\u0275\u0275defineNgModule({ type: o }); }
    static { this.\u0275inj = s.\u0275\u0275defineInjector({}); }
} return o; })();
export { O as ALIENALIAS_SETTINGS, d as AlienAlias, X as AlienaliasModule, m as AlienaliasPlugin, w as AlienaliasSettings };
//# sourceMappingURL=_rollthecloudinc_alienalias.VjJxe6r1n_.js.map
