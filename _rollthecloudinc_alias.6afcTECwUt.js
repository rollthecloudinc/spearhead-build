import "@nf-internal/chunk-GL2BOVXA";
import * as e from "@angular/core";
import "@angular/core";
import * as u from "@angular/router";
import { RouterModule as j } from "@angular/router";
import * as g from "@rollthecloudinc/utils";
import { UtilsModule as S, SITE_NAME as I } from "@rollthecloudinc/utils";
import * as y from "@ngrx/store";
import * as m from "@ngrx/data";
import * as v from "@rollthecloudinc/plugin";
import { Plugin as D, BasePluginManager as P, PluginDef as C } from "@rollthecloudinc/plugin";
import { of as M, forkJoin as p } from "rxjs";
import { tap as s, switchMap as d, defaultIfEmpty as k, map as w } from "rxjs/operators";
var B = (() => { class t {
    constructor(o, i, a) { this.routerStore = o, this.router = i; }
    ngOnInit() { }
    static { this.\u0275fac = function (i) { return new (i || t)(e.\u0275\u0275directiveInject(y.Store), e.\u0275\u0275directiveInject(u.Router), e.\u0275\u0275directiveInject(m.EntityServices)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: t, selectors: [["druid-alias-catch-all-router"]], standalone: !1, decls: 2, vars: 0, template: function (i, a) { i & 1 && (e.\u0275\u0275elementStart(0, "p"), e.\u0275\u0275text(1, "Page Not Found"), e.\u0275\u0275elementEnd()); }, encapsulation: 2 }); }
} return t; })(), $ = [], J = (() => { class t {
    static { this.\u0275fac = function (i) { return new (i || t); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: t }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ imports: [S, j.forChild($)] }); }
} return t; })(), h = class extends D {
    constructor(c) { super(c), c && (this.loadingStrategy = c.loadingStrategy, this.matchingStrategy = c.matchingStrategy, this.redirectHandler = c.redirectHandler); }
}, A = (() => { class t extends P {
    constructor(o, i) { super(o, i); }
    pluginDef() { return M(new C({ name: "alias" })); }
    static { this.\u0275fac = function (i) { return new (i || t)(e.\u0275\u0275inject(v.PluginConfigurationManager), e.\u0275\u0275inject(g.ModuleLoaderService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); }
} return t; })(), O = (() => { class t {
    constructor(o, i, a, r) { this.siteName = o, this.router = i, this.apm = a, this.routesLoaded = !1; }
    canActivate(o, i) { return console.log("catch all alias hit"), new Promise(a => { console.log("catch all promise top"), this.apm.getPlugins().pipe(s(r => console.log("catch all stream checkpoint 1", r ? r.size : 0)), d(r => p(this.routesLoaded ? [] : Array.from(r).map(([f, n]) => n.loadingStrategy.load())).pipe(k(void 0))), s(() => console.log("catch all stream checkpoint 2")), s(() => this.routesLoaded = !0), d(() => this.apm.getPlugins()), s(() => console.log("catch all stream checkpoint 3")), d(r => r.size === 0 ? M([]) : p(Array.from(r).map(([f, n]) => n.matchingStrategy.match(i).pipe(w(l => [n, l]))))), s(() => console.log("catch all stream checkpoint 4"))).subscribe(r => { if (console.log(`routes loaded: ${this.routesLoaded ? "y" : "n"}`), r.map(([n, l], E) => l ? n : void 0).find(n => n !== void 0) !== void 0) {
        console.log(`alias gaurd state: ${i.url}`);
        let n = this.router.parseUrl(i.url);
        a(n);
    }
    else
        a(!0); }); }); }
    static { this.\u0275fac = function (i) { return new (i || t)(e.\u0275\u0275inject(I), e.\u0275\u0275inject(u.Router), e.\u0275\u0275inject(A), e.\u0275\u0275inject(m.EntityServices)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac }); }
} return t; })();
export { J as AliasModule, h as AliasPlugin, A as AliasPluginManager, O as CatchAllGuard, B as CatchAllRouterComponent };
//# sourceMappingURL=_rollthecloudinc_alias.6afcTECwUt.js.map
