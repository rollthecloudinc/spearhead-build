import "@nf-internal/chunk-GL2BOVXA";
import * as h from "@angular/common";
import { CommonModule as j } from "@angular/common";
import * as e from "@angular/core";
import { forwardRef as m } from "@angular/core";
import * as r from "@angular/forms";
import { NG_VALUE_ACCESSOR as w, NG_VALIDATORS as C, FormsModule as A, ReactiveFormsModule as E } from "@angular/forms";
import { MaterialModule as T } from "@rollthecloudinc/material";
import * as D from "@rollthecloudinc/dparam";
import { ParamPluginInstance as c, DparamModule as G } from "@rollthecloudinc/dparam";
import { of as M, BehaviorSubject as u, tap as L, Subject as v, combineLatest as V } from "rxjs";
import * as $ from "@rollthecloudinc/plugin";
import { BasePluginManager as x, PluginDef as S, Plugin as I } from "@rollthecloudinc/plugin";
import * as F from "@rollthecloudinc/utils";
import * as l from "@angular/material/dialog";
import { MAT_DIALOG_DATA as P } from "@angular/material/dialog";
import * as N from "@angular/material/button";
import { tap as g, map as O, filter as B } from "rxjs/operators";
function k(i, o) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div"), e.\u0275\u0275element(1, "druid-detour-interaction-listener", 4), e.\u0275\u0275elementStart(2, "button", 3), e.\u0275\u0275listener("click", function () { let s = e.\u0275\u0275restoreView(t).index, a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.deleteListener$.next(s)); }), e.\u0275\u0275text(3, "Delete"), e.\u0275\u0275elementEnd()();
} if (i & 2) {
    let t = o.index, n = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("formControlName", t)("listener", n.interactions$.value.interactions.listeners[t]);
} }
var d = class {
    constructor(o) { this.interactions = o && o.interactions ? new p(o.interactions) : new p; }
}, p = class {
    constructor(o) { this.listeners = [], o && o.listeners && Array.isArray(o.listeners) && (this.listeners = o.listeners.map(t => new f(t))); }
}, f = class {
    constructor(o) { this.handler = o && o.handler ? new c(o.handler) : new c, this.event = o && o.event ? new c(o.event) : new c; }
}, _ = (() => { class i extends x {
    constructor(t, n) { super(t, n); }
    pluginDef() { return M(new S({ name: "interaction_event" })); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275inject($.PluginConfigurationManager), e.\u0275\u0275inject(F.ModuleLoaderService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }); }
} return i; })(), R = (() => { class i extends x {
    constructor(t, n) { super(t, n); }
    pluginDef() { return M(new S({ name: "interaction_handler" })); }
    discovery() { super.discovery(); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275inject($.PluginConfigurationManager), e.\u0275\u0275inject(F.ModuleLoaderService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }); }
} return i; })(), U = (() => { class i {
    set listener(t) { this.listener$.next(t); }
    constructor(t, n, s) { this.fb = t, this.iepm = n, this.ihpm = s, this.eventPlugins$ = this.iepm.getPlugins(), this.handlerPlugins$ = this.ihpm.getPlugins(), this.listenerForm = this.fb.group({ event: this.fb.control(""), handler: this.fb.control("") }), this.contexts = [], this.listener$ = new u(new f), this.event$ = new u(new c), this.handler$ = new u(new c), this.listenerSub = this.listener$.pipe(L(a => { this.event$.next(a && a.event ? a.event : new c), this.handler$.next(a && a.handler ? a.handler : new c); })).subscribe(), this.onTouched = () => { }; }
    writeValue(t) { t && this.listenerForm.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.listenerForm.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.listenerForm.disable() : this.listenerForm.enable(); }
    validate(t) { return this.listenerForm.valid ? null : this.listenerForm.errors; }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(r.UntypedFormBuilder), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(R)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-detour-interaction-listener"]], inputs: { contexts: "contexts", listener: "listener" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: w, useExisting: m(() => i), multi: !0 }, { provide: C, useExisting: m(() => i), multi: !0 }])], decls: 5, vars: 9, consts: [[3, "formGroup"], ["formControlName", "event", "title", "Event", 3, "plugins", "instance"], ["formControlName", "handler", "title", "Handler", 3, "plugins", "instance"]], template: function (n, s) { n & 1 && (e.\u0275\u0275elementStart(0, "div", 0), e.\u0275\u0275element(1, "druid-params-plugin-instance", 1), e.\u0275\u0275pipe(2, "async"), e.\u0275\u0275element(3, "druid-params-plugin-instance", 2), e.\u0275\u0275pipe(4, "async"), e.\u0275\u0275elementEnd()), n & 2 && (e.\u0275\u0275property("formGroup", s.listenerForm), e.\u0275\u0275advance(), e.\u0275\u0275property("plugins", e.\u0275\u0275pipeBind1(2, 5, s.eventPlugins$))("instance", s.event$.value), e.\u0275\u0275advance(2), e.\u0275\u0275property("plugins", e.\u0275\u0275pipeBind1(4, 7, s.handlerPlugins$))("instance", s.handler$.value)); }, dependencies: [r.NgControlStatus, r.NgControlStatusGroup, r.FormGroupDirective, r.FormControlName, D.PluginInstanceComponent, h.AsyncPipe], encapsulation: 2 }); }
} return i; })(), q = (() => { class i {
    set interactions(t) { this.interactions$.next(t); }
    set contexts(t) { this.contexts$.next(t); }
    get listeners() { return this.interactionsForm.get("listeners"); }
    constructor(t) { this.fb = t, this.interactions$ = new u(new d({ interactions: { listeners: [] } })), this.contexts$ = new u([]), this.afterViewInit$ = new v, this.interactionsForm = this.fb.group({ listeners: this.fb.array([]) }), this.addListener$ = new v, this.deleteListener$ = new v, this.addListenerSub = this.addListener$.pipe(g(() => this.listeners.push(this.fb.control("")))).subscribe(), this.deleteListenerSub = this.deleteListener$.pipe(g(n => { this.interactions$.value.interactions.listeners.splice(n, 1), this.listeners.removeAt(n); })).subscribe(), this.interactionsSub = V([this.interactions$, this.afterViewInit$]).pipe(O(([n]) => n), B(n => n.interactions.listeners.length !== 0), g(n => { this.listeners.clear(), n.interactions.listeners.forEach((s, a) => { this.listeners.push(this.fb.control("")); }); })).subscribe(), this.onTouched = () => { }; }
    ngAfterViewInit() { this.afterViewInit$.next(void 0), this.afterViewInit$.complete(); }
    writeValue(t) { t && this.interactionsForm.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.interactionsForm.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.interactionsForm.disable() : this.interactionsForm.enable(); }
    validate(t) { return this.interactionsForm.valid ? null : this.interactionsForm.errors; }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(r.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-detour-interactions-form"]], inputs: { interactions: "interactions", contexts: "contexts" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: w, useExisting: m(() => i), multi: !0 }, { provide: C, useExisting: m(() => i), multi: !0 }])], decls: 5, vars: 2, consts: [[3, "formGroup"], ["formArrayName", "listeners"], [4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [3, "formControlName", "listener"]], template: function (n, s) { n & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1), e.\u0275\u0275template(2, k, 4, 2, "div", 2), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(3, "button", 3), e.\u0275\u0275listener("click", function () { return s.addListener$.next(void 0); }), e.\u0275\u0275text(4, "Add Listener"), e.\u0275\u0275elementEnd()), n & 2 && (e.\u0275\u0275property("formGroup", s.interactionsForm), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", s.listeners.controls)); }, dependencies: [h.NgForOf, r.NgControlStatus, r.NgControlStatusGroup, r.FormGroupDirective, r.FormControlName, r.FormArrayName, U], encapsulation: 2 }); }
} return i; })(), se = (() => { class i {
    constructor(t, n, s) { this.data = t, this.dialogRef = n, this.fb = s, this.interactionsForm = this.fb.group({ interactions: this.fb.control("") }), this.contexts = [], this.interactions = new d, this.contexts = t.contexts, this.interactions = t.interactions; }
    submit() { let t = new d(this.interactionsForm.value); console.log("interactions payload", t), this.dialogRef.close(t); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(P), e.\u0275\u0275directiveInject(l.MatDialogRef), e.\u0275\u0275directiveInject(r.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-detour-interactions-dialog"]], standalone: !1, decls: 8, vars: 4, consts: [[1, "interactions-form", 3, "ngSubmit", "formGroup"], [1, "content-inner"], ["fxLayout", "column"], ["formControlName", "interactions", 3, "contexts", "interactions"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]], template: function (n, s) { n & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return s.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "div", 1)(3, "div", 2), e.\u0275\u0275element(4, "druid-detour-interactions-form", 3), e.\u0275\u0275elementEnd()()(), e.\u0275\u0275elementStart(5, "mat-dialog-actions")(6, "button", 4), e.\u0275\u0275text(7, "Save"), e.\u0275\u0275elementEnd()()()), n & 2 && (e.\u0275\u0275property("formGroup", s.interactionsForm), e.\u0275\u0275advance(4), e.\u0275\u0275property("contexts", s.contexts)("interactions", s.interactions), e.\u0275\u0275advance(2), e.\u0275\u0275property("disabled", !s.interactionsForm.valid)); }, dependencies: [r.\u0275NgNoValidate, r.NgControlStatus, r.NgControlStatusGroup, r.FormGroupDirective, r.FormControlName, N.MatButton, l.MatDialogClose, l.MatDialogActions, l.MatDialogContent, q], encapsulation: 2 }); }
} return i; })(), b = class extends I {
    constructor(o) { super(o); }
}, z = () => new b({ title: "DOM", id: "dom" }), ae = (() => { class i {
    constructor(t) { t.register(z()); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275inject(_)); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: i }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ imports: [j, A, E, T, G] }); }
} return i; })(), y = class extends I {
    constructor(o) { super(o); }
};
export { ae as DetourModule, b as InteractionEventPlugin, _ as InteractionEventPluginManager, y as InteractionHandlerPlugin, R as InteractionHandlerPluginManager, p as InteractionInteractions, f as InteractionListener, U as InteractionListenerComponent, se as InteractionsDialogComponent, q as InteractionsFormComponent, d as InteractionsFormPayload };
//# sourceMappingURL=_rollthecloudinc_detour.J5Hlw2yPod.js.map
