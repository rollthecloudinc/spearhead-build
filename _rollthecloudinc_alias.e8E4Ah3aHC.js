import "@nf-internal/chunk-GL2BOVXA";
import * as e from "@angular/core";
import "@angular/core";
import * as u from "@angular/router";
import { RouterModule as v } from "@angular/router";
import * as g from "@rollthecloudinc/utils";
import { UtilsModule as M, SITE_NAME as j } from "@rollthecloudinc/utils";
import * as h from "@ngrx/store";
import * as l from "@ngrx/data";
import * as y from "@rollthecloudinc/plugin";
import { Plugin as S, BasePluginManager as I, PluginDef as D } from "@rollthecloudinc/plugin";
import { of as P, forkJoin as m } from "rxjs";
import { switchMap as d, defaultIfEmpty as C, tap as w, map as $ } from "rxjs/operators";
var J = (() => { class t {
    constructor(o, i, n) { this.routerStore = o, this.router = i; }
    ngOnInit() { }
    static { this.\u0275fac = function (i) { return new (i || t)(e.\u0275\u0275directiveInject(h.Store), e.\u0275\u0275directiveInject(u.Router), e.\u0275\u0275directiveInject(l.EntityServices)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: t, selectors: [["druid-alias-catch-all-router"]], standalone: !1, decls: 2, vars: 0, template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "p"), e.\u0275\u0275text(1, "Page Not Found"), e.\u0275\u0275elementEnd()); }, encapsulation: 2 }); }
} return t; })(), A = [], O = (() => { class t {
    static { this.\u0275fac = function (i) { return new (i || t); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: t }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ imports: [M, v.forChild(A)] }); }
} return t; })(), p = class extends S {
    constructor(s) { super(s), s && (this.loadingStrategy = s.loadingStrategy, this.matchingStrategy = s.matchingStrategy, this.redirectHandler = s.redirectHandler); }
}, E = (() => { class t extends I {
    constructor(o, i) { super(o, i); }
    pluginDef() { return P(new D({ name: "alias" })); }
    static { this.\u0275fac = function (i) { return new (i || t)(e.\u0275\u0275inject(y.PluginConfigurationManager), e.\u0275\u0275inject(g.ModuleLoaderService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); }
} return t; })(), q = (() => { class t {
    constructor(o, i, n, a) { this.siteName = o, this.router = i, this.apm = n, this.routesLoaded = !1; }
    canActivate(o, i) { return console.log("catch all alias hit"), new Promise(n => { this.apm.getPlugins().pipe(d(a => m(this.routesLoaded ? [] : Array.from(a).map(([f, r]) => r.loadingStrategy.load())).pipe(C(void 0))), w(() => this.routesLoaded = !0), d(() => this.apm.getPlugins()), d(a => m(Array.from(a).map(([f, r]) => r.matchingStrategy.match(i).pipe($(c => [r, c])))))).subscribe(a => { if (console.log(`routes loaded: ${this.routesLoaded ? "y" : "n"}`), a.map(([r, c], b) => c ? r : void 0).find(r => r !== void 0) !== void 0) {
        console.log(`alias gaurd state: ${i.url}`);
        let r = this.router.parseUrl(i.url);
        n(r);
    }
    else
        n(!0); }); }); }
    static { this.\u0275fac = function (i) { return new (i || t)(e.\u0275\u0275inject(j), e.\u0275\u0275inject(u.Router), e.\u0275\u0275inject(E), e.\u0275\u0275inject(l.EntityServices)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac }); }
} return t; })();
export { O as AliasModule, p as AliasPlugin, E as AliasPluginManager, q as CatchAllGuard, J as CatchAllRouterComponent };
//# sourceMappingURL=_rollthecloudinc_alias.e8E4Ah3aHC.js.map
