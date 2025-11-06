import { a as E, b as T } from "@nf-internal/chunk-GL2BOVXA";
import * as w from "@angular/common";
import { CommonModule as K } from "@angular/common";
import * as e from "@angular/core";
import { forwardRef as b } from "@angular/core";
import * as s from "@angular/forms";
import { NG_VALUE_ACCESSOR as V, NG_VALIDATORS as G, FormsModule as Q, ReactiveFormsModule as X } from "@angular/forms";
import { MaterialModule as Y } from "@rollthecloudinc/material";
import * as F from "@rollthecloudinc/dparam";
import { ParamPluginInstance as p, DparamModule as Z } from "@rollthecloudinc/dparam";
import { of as P, BehaviorSubject as g, tap as ee, Subject as D, combineLatest as te, Observable as ie } from "rxjs";
import * as I from "@rollthecloudinc/plugin";
import { BasePluginManager as O, PluginDef as L, Plugin as B } from "@rollthecloudinc/plugin";
import * as N from "@rollthecloudinc/utils";
import * as h from "@angular/material/dialog";
import { MAT_DIALOG_DATA as ne } from "@angular/material/dialog";
import * as k from "@angular/material/button";
import { tap as M, map as R, filter as re } from "rxjs/operators";
function oe(i, r) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div"), e.\u0275\u0275element(1, "druid-detour-interaction-listener", 4), e.\u0275\u0275elementStart(2, "button", 3), e.\u0275\u0275listener("click", function () { let o = e.\u0275\u0275restoreView(t).index, a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.deleteListener$.next(o)); }), e.\u0275\u0275text(3, "Delete"), e.\u0275\u0275elementEnd()();
} if (i & 2) {
    let t = r.index, n = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("formControlName", t)("listener", n.interactions$.value.interactions.listeners[t]);
} }
var v = class {
    constructor(r) { this.interactions = r && r.interactions ? new $(r.interactions) : new $; }
}, $ = class {
    constructor(r) { this.listeners = [], r && r.listeners && Array.isArray(r.listeners) && (this.listeners = r.listeners.map(t => new y(t))); }
}, y = class {
    constructor(r) { this.handler = r && r.handler ? new p(r.handler) : new p, this.event = r && r.event ? new p(r.event) : new p; }
}, H = (() => { class i extends O {
    constructor(t, n) { super(t, n); }
    pluginDef() { return P(new L({ name: "interaction_event" })); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275inject(I.PluginConfigurationManager), e.\u0275\u0275inject(N.ModuleLoaderService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }); }
} return i; })(), U = (() => { class i extends O {
    constructor(t, n) { super(t, n); }
    pluginDef() { return P(new L({ name: "interaction_handler" })); }
    discovery() { super.discovery(); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275inject(I.PluginConfigurationManager), e.\u0275\u0275inject(N.ModuleLoaderService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }); }
} return i; })(), se = (() => { class i {
    set listener(t) { this.listener$.next(t); }
    constructor(t, n, o) { this.fb = t, this.iepm = n, this.ihpm = o, this.eventPlugins$ = this.iepm.getPlugins(), this.handlerPlugins$ = this.ihpm.getPlugins(), this.listenerForm = this.fb.group({ event: this.fb.control(""), handler: this.fb.control("") }), this.contexts = [], this.listener$ = new g(new y), this.event$ = new g(new p), this.handler$ = new g(new p), this.listenerSub = this.listener$.pipe(ee(a => { this.event$.next(a && a.event ? a.event : new p), this.handler$.next(a && a.handler ? a.handler : new p); })).subscribe(), this.onTouched = () => { }; }
    writeValue(t) { t && this.listenerForm.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.listenerForm.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.listenerForm.disable() : this.listenerForm.enable(); }
    validate(t) { return this.listenerForm.valid ? null : this.listenerForm.errors; }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(H), e.\u0275\u0275directiveInject(U)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-detour-interaction-listener"]], inputs: { contexts: "contexts", listener: "listener" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: V, useExisting: b(() => i), multi: !0 }, { provide: G, useExisting: b(() => i), multi: !0 }])], decls: 5, vars: 9, consts: [[3, "formGroup"], ["formControlName", "event", "title", "Event", 3, "plugins", "instance"], ["formControlName", "handler", "title", "Handler", 3, "plugins", "instance"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "div", 0), e.\u0275\u0275element(1, "druid-params-plugin-instance", 1), e.\u0275\u0275pipe(2, "async"), e.\u0275\u0275element(3, "druid-params-plugin-instance", 2), e.\u0275\u0275pipe(4, "async"), e.\u0275\u0275elementEnd()), n & 2 && (e.\u0275\u0275property("formGroup", o.listenerForm), e.\u0275\u0275advance(), e.\u0275\u0275property("plugins", e.\u0275\u0275pipeBind1(2, 5, o.eventPlugins$))("instance", o.event$.value), e.\u0275\u0275advance(2), e.\u0275\u0275property("plugins", e.\u0275\u0275pipeBind1(4, 7, o.handlerPlugins$))("instance", o.handler$.value)); }, dependencies: [s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, F.PluginInstanceComponent, w.AsyncPipe], encapsulation: 2 }); }
} return i; })(), ae = (() => { class i {
    set interactions(t) { this.interactions$.next(t); }
    set contexts(t) { this.contexts$.next(t); }
    get listeners() { return this.interactionsForm.get("listeners"); }
    constructor(t) { this.fb = t, this.interactions$ = new g(new v({ interactions: { listeners: [] } })), this.contexts$ = new g([]), this.afterViewInit$ = new D, this.interactionsForm = this.fb.group({ listeners: this.fb.array([]) }), this.addListener$ = new D, this.deleteListener$ = new D, this.addListenerSub = this.addListener$.pipe(M(() => this.listeners.push(this.fb.control("")))).subscribe(), this.deleteListenerSub = this.deleteListener$.pipe(M(n => { this.interactions$.value.interactions.listeners.splice(n, 1), this.listeners.removeAt(n); })).subscribe(), this.interactionsSub = te([this.interactions$, this.afterViewInit$]).pipe(R(([n]) => n), re(n => n.interactions.listeners.length !== 0), M(n => { this.listeners.clear(), n.interactions.listeners.forEach((o, a) => { this.listeners.push(this.fb.control("")); }); })).subscribe(), this.onTouched = () => { }; }
    ngAfterViewInit() { this.afterViewInit$.next(void 0), this.afterViewInit$.complete(); }
    writeValue(t) { t && this.interactionsForm.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.interactionsForm.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.interactionsForm.disable() : this.interactionsForm.enable(); }
    validate(t) { return this.interactionsForm.valid ? null : this.interactionsForm.errors; }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(s.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-detour-interactions-form"]], inputs: { interactions: "interactions", contexts: "contexts" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: V, useExisting: b(() => i), multi: !0 }, { provide: G, useExisting: b(() => i), multi: !0 }])], decls: 5, vars: 2, consts: [[3, "formGroup"], ["formArrayName", "listeners"], [4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [3, "formControlName", "listener"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1), e.\u0275\u0275template(2, oe, 4, 2, "div", 2), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(3, "button", 3), e.\u0275\u0275listener("click", function () { return o.addListener$.next(void 0); }), e.\u0275\u0275text(4, "Add Listener"), e.\u0275\u0275elementEnd()), n & 2 && (e.\u0275\u0275property("formGroup", o.interactionsForm), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", o.listeners.controls)); }, dependencies: [w.NgForOf, s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, s.FormArrayName, se], encapsulation: 2 }); }
} return i; })(), Me = (() => { class i {
    constructor(t, n, o) { this.data = t, this.dialogRef = n, this.fb = o, this.interactionsForm = this.fb.group({ interactions: this.fb.control("") }), this.contexts = [], this.interactions = new v, this.contexts = t.contexts, this.interactions = t.interactions; }
    submit() { let t = new v(this.interactionsForm.value); console.log("interactions payload", t), this.dialogRef.close(t); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(ne), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(s.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-detour-interactions-dialog"]], standalone: !1, decls: 8, vars: 4, consts: [[1, "interactions-form", 3, "ngSubmit", "formGroup"], [1, "content-inner"], ["fxLayout", "column"], ["formControlName", "interactions", 3, "contexts", "interactions"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return o.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "div", 1)(3, "div", 2), e.\u0275\u0275element(4, "druid-detour-interactions-form", 3), e.\u0275\u0275elementEnd()()(), e.\u0275\u0275elementStart(5, "mat-dialog-actions")(6, "button", 4), e.\u0275\u0275text(7, "Save"), e.\u0275\u0275elementEnd()()()), n & 2 && (e.\u0275\u0275property("formGroup", o.interactionsForm), e.\u0275\u0275advance(4), e.\u0275\u0275property("contexts", o.contexts)("interactions", o.interactions), e.\u0275\u0275advance(2), e.\u0275\u0275property("disabled", !o.interactionsForm.valid)); }, dependencies: [s.\u0275NgNoValidate, s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, k.MatButton, h.MatDialogClose, h.MatDialogActions, h.MatDialogContent, ae], encapsulation: 2 }); }
} return i; })(), S = class extends B {
    constructor(r) { super(r), r && (this.connect = r.connect); }
}, _ = class extends B {
    constructor(r) { super(r), r && (this.handle = r.handle); }
}, le = i => new S({ title: "DOM", id: "dom", connect: ({ filteredListeners: r, listenerParams: t, renderer: n, callback: o }) => new ie(a => { let f = new Map, W = r.length; for (let l = 0; l < W; l++) {
        let c = t[l].type;
        if (f.has(c)) {
            let m = f.get(c);
            m.push(l), f.set(c, m);
        }
        else
            f.set(c, [l]);
    } let q = (l => c => { if (l.has(c.type)) {
        let m = l.get(c.type), ue = m.length;
        m.forEach((de, u) => { let A = t[m[u]].target; if (c.target.matches(A))
            if (console.log(`delegated target match ${A}`), r[u].handler.settings.params) {
                let z = r[u].handler.settings.paramsString ? r[u].handler.settings.paramsString.split("&").filter(d => d.indexOf("=:") !== -1).map(d => d.split("=", 2)[1].substr(1)) : [];
                i.paramValues(r[u].handler.settings.params.reduce((d, C, x) => new Map([...d, [z[x], C]]), new Map)).pipe(R(d => Array.from(d).reduce((C, [x, J]) => T(E({}, C), { [x]: J }), {}))).subscribe(d => { o({ handlerParams: d, plugin: r[u].handler.plugin, index: u, evt: c }); });
            }
            else
                o({ handlerParams: {}, plugin: r[u].handler.plugin, index: u, evt: c }); });
    } })(f), j = Array.from(f); for (let l = 0; l < j.length; l++) {
        let c = j[l][0];
        n.listen("document", c, m => { q(m); });
    } a.next({}), a.complete(); }) }), ce = () => new _({ title: "Hello World", id: "hello_world", handle: ({}) => { console.log("Hello World"); } }), Se = (() => { class i {
    constructor(t, n, o) { t.register(le(o)), n.register(ce()); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275inject(H), e.\u0275\u0275inject(U), e.\u0275\u0275inject(F.ParamEvaluatorService)); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: i }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ imports: [K, Q, X, Y, Z] }); }
} return i; })();
export { Se as DetourModule, S as InteractionEventPlugin, H as InteractionEventPluginManager, _ as InteractionHandlerPlugin, U as InteractionHandlerPluginManager, $ as InteractionInteractions, y as InteractionListener, se as InteractionListenerComponent, Me as InteractionsDialogComponent, ae as InteractionsFormComponent, v as InteractionsFormPayload };
//# sourceMappingURL=_rollthecloudinc_detour.2hOHVsrOzD.js.map
