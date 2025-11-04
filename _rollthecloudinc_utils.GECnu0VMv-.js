import { a as D } from "@nf-internal/chunk-5UJJQDJK";
import { h as C } from "@nf-internal/chunk-J4XOFOAH";
var b = C(D(), 1);
import * as o from "@angular/core";
import { InjectionToken as h, EventEmitter as j, DOCUMENT as I } from "@angular/core";
import { CommonModule as k } from "@angular/common";
import { Observable as g, of as a } from "rxjs";
var q = (() => { class n {
    transform(e, t) { if (!(e === void 0 || e === ""))
        return b.toNumber(`${e}`); }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275pipe = o.\u0275\u0275definePipe({ name: "numeral", type: n, pure: !0, standalone: !1 }); }
} return n; })(), U = (() => { class n {
    transform(e, t) { return !e || e === "" ? t : e; }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275pipe = o.\u0275\u0275definePipe({ name: "na", type: n, pure: !0, standalone: !1 }); }
} return n; })(), T = new h("EmbeddableComponent"), $ = new h("Site Name"), z = new h("Host Name"), Q = new h("Request Protocol"), W = (() => { class n {
    constructor(e, t, i, s) { this.injector = s, this.embeddedComponentFactories = new Map, this.embeddedComponents = [], this.docRendered = new j, this.hostElement = t.nativeElement, i.forEach(c => { let d = e.resolveComponentFactory(c); this.embeddedComponentFactories.set(d.selector, d); }); }
    set content(e) { this.ngOnDestroy(), e && (this.build(e), this.docRendered.emit()); }
    build(e) { this.hostElement.innerHTML = e || "", e && this.embeddedComponentFactories.forEach((t, i) => { this.hostElement.querySelectorAll(i).forEach(c => { let d = [Array.prototype.slice.call(c.childNodes)], l = t.create(this.injector, d, c); for (let u of c.attributes)
        l.instance[u.nodeName] = u.nodeValue; this.embeddedComponents.push(l); }); }); }
    ngDoCheck() { this.embeddedComponents.forEach(e => e.changeDetectorRef.detectChanges()); }
    ngOnDestroy() { this.embeddedComponents.forEach(e => e.destroy()), this.embeddedComponents.length = 0; }
    static { this.\u0275fac = function (t) { return new (t || n)(o.\u0275\u0275directiveInject(o.ComponentFactoryResolver), o.\u0275\u0275directiveInject(o.ElementRef), o.\u0275\u0275directiveInject(T), o.\u0275\u0275directiveInject(o.Injector)); }; }
    static { this.\u0275cmp = o.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-dynamic-content-viewer"]], inputs: { data: "data", content: "content" }, outputs: { docRendered: "docRendered" }, standalone: !1, decls: 0, vars: 0, template: function (t, i) { }, encapsulation: 2 }); }
} return n; })(), p = class {
    constructor(r, e) { this.index = r, this.length = e; }
    get even() { return this.index % 2 === 0; }
    get odd() { return this.index % 2 === 1; }
    get first() { return this.index === 0; }
    get last() { return this.index === this.length - 1; }
}, Z = (() => { class n {
    constructor(e, t) { this.templateRef = e, this.viewContainer = t; }
    set loop(e) { this.viewContainer.clear(); for (var t = 0; t < e; t++)
        this.viewContainer.createEmbeddedView(this.templateRef, new p(t, e)); }
    static { this.\u0275fac = function (t) { return new (t || n)(o.\u0275\u0275directiveInject(o.TemplateRef), o.\u0275\u0275directiveInject(o.ViewContainerRef)); }; }
    static { this.\u0275dir = o.\u0275\u0275defineDirective({ type: n, selectors: [["", "for", "", 5, "label"]], inputs: { loop: [0, "for", "loop"] }, standalone: !1 }); }
} return n; })(), G = (() => { class n {
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275mod = o.\u0275\u0275defineNgModule({ type: n }); }
    static { this.\u0275inj = o.\u0275\u0275defineInjector({ imports: [k] }); }
} return n; })(), J = (() => { class n {
    constructor(e, t) { this.compiler = e, this.injector = t, this.loadedModules = []; }
    loadModule(e) { return new g(t => { e().then(i => { if (this.loadedModules.indexOf(s => s == i.name) !== -1)
        throw ""; return this.loadedModules.push(i.name), i; }).then(i => this.compiler.compileModuleAndAllComponentsAsync(i)).then(i => { let s = i.ngModuleFactory.create(this.injector); t.next(!0), t.complete(); }).catch(() => { t.next(!0), t.complete(); }); }); }
    static { this.\u0275fac = function (t) { return new (t || n)(o.\u0275\u0275inject(o.Compiler), o.\u0275\u0275inject(o.Injector)); }; }
    static { this.\u0275prov = o.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), K = (() => { class n {
    constructor(e) { this.document = e; }
    loadStyle(e) { let t = this.document.getElementsByTagName("head")[0], i = this.document.getElementById("client-theme"); if (i)
        i.href = e;
    else {
        let s = this.document.createElement("link");
        s.id = "client-theme", s.rel = "stylesheet", s.href = `${e}`, t.appendChild(s);
    } }
    static { this.\u0275fac = function (t) { return new (t || n)(o.\u0275\u0275inject(I)); }; }
    static { this.\u0275prov = o.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), w = class {
    constructor(r) { this.entities = new Map, this.name = r; }
    add(r) { return a(r); }
    delete(r) { return this.entities.delete(r), a(r); }
    getAll() { let r = []; return this.entities.forEach(e => { r.push(e); }), a(r); }
    getById(r) { return a(this.entities.get(r)); }
    getWithQuery(r) { let e = []; return this.entities.forEach(t => { e.push(t); }), a(e); }
    update(r) { return a(void 0); }
    upsert(r) { return a(r); }
}, X = (() => { class n {
    constructor() { this.taskProcessor = new v; }
    doTask(e) { return this.taskProcessor.doTask(e); }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = o.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), m = class {
    wrap(r) { return new g(e => { let t, i = !1, s = null, c = null, d = null, l = y => { t = y, i = !0, s = this.delegate(r).subscribe(f => c = f, f => { if (!i)
        throw new Error("An http observable was completed twice. This shouldn't happen, please file a bug."); d = f, i = !1, t.invoke(); }, () => { if (!i)
        throw new Error("An http observable was completed twice. This shouldn't happen, please file a bug."); i = !1, t.invoke(); }); }, u = y => { i && (i = !1, s && (s.unsubscribe(), s = null)); }, M = () => { d !== null ? e.error(d) : (e.next(c), e.complete()); }, E = Zone.current.scheduleMacroTask("ZoneMacroTaskWrapper.subscribe", M, {}, () => null, u); return l(E), () => { i && t && (t.zone.cancelTask(t), i = !1), s && (s.unsubscribe(), s = null); }; }); }
}, v = class extends m {
    constructor() { super(); }
    doTask(r) { return this.wrap(r); }
    delegate(r) { return new g(e => { r.then(t => { e.next(t), e.complete(); }).catch(t => e.error(t)); }); }
};
export { X as AsyncApiCallHelperService, W as DynamicContentViewer, T as EMBEDDABLE_COMPONENT, Z as ForDirective, z as HOST_NAME, J as ModuleLoaderService, v as MyAsyncTaskProcessor, w as NoopDataService, U as NotAvailablePipe, q as NumeralPipe, Q as PROTOCOL, $ as SITE_NAME, K as StyleLoaderService, G as UtilsModule, m as ZoneMacroTaskWrapper };
