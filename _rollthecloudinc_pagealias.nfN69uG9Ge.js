import "@nf-internal/chunk-GL2BOVXA";
import { CommonModule as v } from "@angular/common";
import * as s from "@angular/core";
import "@angular/core";
import { SITE_NAME as y } from "@rollthecloudinc/utils";
import * as g from "@rollthecloudinc/alias";
import { AliasPlugin as C } from "@rollthecloudinc/alias";
import { map as l, tap as h, catchError as I } from "rxjs/operators";
import { PanelPage as $ } from "@rollthecloudinc/panels";
import { PanelPageRouterComponent as w, createMatcher as L, EditPanelPageComponent as S, createEditMatcher as E } from "@rollthecloudinc/pages";
import { of as M } from "rxjs";
import * as f from "@angular/router";
import * as P from "@ngrx/data";
var c = class extends C {
}, u = class {
    get panelPageListItemsService() { return this.es.getEntityCollectionService("PanelPageListItem"); }
    constructor(t, e, i) { this.siteName = t, this.es = e, this.router = i, this.routesLoaded = !1; }
    isLoaded() { return this.routesLoaded; }
    load() { return this.panelPageListItemsService.getWithQuery(`site=${encodeURIComponent(`{"term":{"site.keyword":{"value":"${this.siteName}"}}}`)}&path=${encodeURIComponent('{"wildcard":{"path.keyword":{"value":"*"}}}')}`).pipe(l(t => t.filter(e => e.path !== void 0 && e.path !== "")), l(t => t.map(e => new $(e)).sort((e, i) => e.path.split("/").length === i.path.split("/").length ? e.path.split("/")[e.path.split("/").length - 1] > i.path.split("/")[i.path.split("/").length - 1] ? -1 : 1 : e.path.split("/").length > i.path.split("/").length ? -1 : 1)), h(t => t.sort((e, i) => e.path.length > i.path.length ? 1 : -1)), h(t => { t.forEach(e => { this.router.config.unshift({ matcher: L(e), component: w, data: { panelPageListItem: e } }), this.router.config.unshift({ matcher: E(e), component: S, data: { panelPageListItem: e } }); }), this.routesLoaded = !0; }), h(() => console.log("panels routes loaded")), l(() => !0)); }
}, m = class {
    get panelPageListItemsService() { return this.es.getEntityCollectionService("PanelPageListItem"); }
    constructor(t, e, i) { this.siteName = t, this.es = e, this.router = i; }
    match(t) { let e = t.url; e.indexOf("?") !== -1 && (e = t.url.substr(0, e.indexOf("?"))); let i = "path=" + e.substr(1).split("/").reduce((o, n, r) => [...o, r === 0 ? `/${n}` : `${o[r - 1]}/${n}`], []).map(o => this.encodePathComponent(o)).join("&path=") + `&site=${encodeURIComponent(`{"term":{"site.keyword":{"value":"${this.siteName}"}}}`)}`; return this.panelPageListItemsService.getWithQuery(i).pipe(I(o => M([])), l(o => o.reduce((n, r) => n === void 0 || n.path.split("/").length < r.path.split("/").length ? r : n, void 0)), l(o => !!o || t.url.indexOf("pages") > -1)); }
    encodePathComponent(t) { return `{"term":{"path.keyword":{"value":"${t}"}}}`; }
}, d = class {
    get panelPageListItemsService() { return this.es.getEntityCollectionService("PanelPageListItem"); }
    constructor(t, e, i) { this.siteName = t, this.es = e, this.router = i; }
    redirect(t, e) { if (e.url.indexOf("pages") > -1)
        console.log(`redirect: ${e.url}`), this.router.navigateByUrl(e.url);
    else {
        let i = e.url;
        i.indexOf("?") !== -1 && (i = e.url.substr(0, i.indexOf("?")));
        let o = "path=" + i.substr(1).split("/").reduce((n, r, p) => [...n, p === 0 ? `/${r}` : `${n[p - 1]}/${r}`], []).map(n => this.encodePathComponent(n)).join("&path=") + `&site=${encodeURIComponent(`{"term":{"site.keyword":{"value":"${this.siteName}"}}}`)}`;
        this.panelPageListItemsService.getWithQuery(o).pipe(l(n => n.reduce((r, p) => r === void 0 || r.path.split("/").length < p.path.split("/").length ? p : r, void 0)), l(n => { let r = e.url.substr(1).split("/").slice(n.path.split("/").length - 1).join("/"); return [n, r]; })).subscribe(([n, r]) => { this.router.navigate(["reload"]); });
    } }
    encodePathComponent(t) { return `{"term":{"path.keyword":{"value":"${t}"}}}`; }
}, j = (a, t, e) => { let i = new u(a, t, e), o = new m(a, t, e), n = new d(a, t, e); return new c({ id: "panels", title: "Panels", loadingStrategy: i, matchingStrategy: o, redirectHandler: n }); }, W = (() => { class a {
    constructor(e, i, o, n) { e.register(j(o, n, i)); }
    static { this.\u0275fac = function (i) { return new (i || a)(s.\u0275\u0275inject(g.AliasPluginManager), s.\u0275\u0275inject(f.Router), s.\u0275\u0275inject(y), s.\u0275\u0275inject(P.EntityServices)); }; }
    static { this.\u0275mod = s.\u0275\u0275defineNgModule({ type: a }); }
    static { this.\u0275inj = s.\u0275\u0275defineInjector({ imports: [v] }); }
} return a; })();
export { W as PagealiasModule };
//# sourceMappingURL=_rollthecloudinc_pagealias.nfN69uG9Ge.js.map
