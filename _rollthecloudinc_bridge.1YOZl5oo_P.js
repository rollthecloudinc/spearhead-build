import "@nf-internal/chunk-GL2BOVXA";
import * as i from "@angular/core";
import { provideAppInitializer as l, inject as u } from "@angular/core";
import * as c from "@rollthecloudinc/plugin";
import { Plugin as f, BasePluginManager as g, PluginDef as p } from "@rollthecloudinc/plugin";
import { of as b } from "rxjs";
import * as s from "@rollthecloudinc/utils";
var v = (() => { class e {
    static { this.\u0275fac = function (o) { return new (o || e); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" }); }
} return e; })(), n = class extends f {
    constructor(r) { super(r), r && (this.build = r.build); }
}, m = e => () => new Promise(r => { e.build(), r(); }), y = () => new n({ id: "test", title: "Test", build: () => { v.prototype.sayHello2 = () => { alert("say hello 2"); }; } }), d = (() => { class e extends g {
    constructor(t, o) { super(t, o); }
    pluginDef() { return b(new p({ name: "bridgebuilder" })); }
    static { this.\u0275fac = function (o) { return new (o || e)(i.\u0275\u0275inject(c.PluginConfigurationManager), i.\u0275\u0275inject(s.ModuleLoaderService)); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" }); }
} return e; })(), h = (() => { class e {
    constructor(t) { this.bpm = t; }
    build() { try {
        console.log("build bridge..."), this.bpm.getPlugins().subscribe(t => { Array.from(t).forEach(([o, a]) => { a.build(), console.log("bridge build: " + o); }); }), console.log("bridge built.");
    }
    catch { } }
    static { this.\u0275fac = function (o) { return new (o || e)(i.\u0275\u0275inject(d)); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" }); }
} return e; })(), F = (() => { class e {
    constructor(t) { console.log("bridge constructor"), t.register(y()); }
    static { this.\u0275fac = function (o) { return new (o || e)(i.\u0275\u0275inject(d)); }; }
    static { this.\u0275mod = i.\u0275\u0275defineNgModule({ type: e }); }
    static { this.\u0275inj = i.\u0275\u0275defineInjector({ providers: [l(() => m(u(h))())] }); }
} return e; })();
export { n as BridgeBuilderPlugin, d as BridgeBuilderPluginManager, F as BridgeModule, v as PublicApiBridgeService };
//# sourceMappingURL=_rollthecloudinc_bridge.1YOZl5oo_P.js.map
