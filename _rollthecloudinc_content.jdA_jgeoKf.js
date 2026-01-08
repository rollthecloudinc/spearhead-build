import "@nf-internal/chunk-J4XOFOAH";
import * as i from "@angular/core";
import { InjectionToken as m } from "@angular/core";
import { CommonModule as p } from "@angular/common";
import { AttributeValue as d } from "@rollthecloudinc/attributes";
import * as u from "@rollthecloudinc/plugin";
import { Plugin as h, BasePluginManager as g, PluginDef as M } from "@rollthecloudinc/plugin";
import { of as C } from "rxjs";
import * as l from "@rollthecloudinc/utils";
var I = (() => { class n {
    static { this.\u0275fac = function (o) { return new (o || n); }; }
    static { this.\u0275mod = i.\u0275\u0275defineNgModule({ type: n }); }
    static { this.\u0275inj = i.\u0275\u0275defineInjector({ imports: [p] }); }
} return n; })(), r = class extends h {
    constructor(e) { super(e), this.fileTypes = [], e && (this.name = this.id, this.handler = e.handler !== void 0 ? e.handler : void 0, this.selectionComponent = e.selectionComponent ? e.selectionComponent : void 0, this.renderComponent = e.renderComponent ? e.renderComponent : void 0, this.editorComponent = e.editorComponent ? e.editorComponent : void 0); }
}, s = class {
    constructor(e) { e && (this.type = e.type, this.id = e.id); }
}, c = class {
    constructor(e) { this.settings = [], e && (this.pluginName = e.pluginName, e.settings && (this.settings = e.settings.map(t => new d(t)))); }
}, f = class {
    constructor(e) { this.fullscreen = !1, e && (this.fullscreen = e.fullscreen); }
}, P = new m("ContentPlugin"), T = (() => { class n extends g {
    constructor(t, o) { super(t, o); }
    pluginDef() { return C(new M({ name: "content" })); }
    static { this.\u0275fac = function (o) { return new (o || n)(i.\u0275\u0275inject(u.PluginConfigurationManager), i.\u0275\u0275inject(l.ModuleLoaderService)); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })();
export { P as CONTENT_PLUGIN, s as ContentBinding, c as ContentInstance, I as ContentModule, r as ContentPlugin, f as ContentPluginEditorOptions, T as ContentPluginManager };
