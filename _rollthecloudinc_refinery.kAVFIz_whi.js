import { a as p, b as m } from "@nf-internal/chunk-GL2BOVXA";
import * as u from "@angular/common";
import { CommonModule as V } from "@angular/common";
import * as e from "@angular/core";
import { forwardRef as h } from "@angular/core";
import * as o from "@angular/forms";
import { Validators as N, NG_VALUE_ACCESSOR as P, NG_VALIDATORS as _, FormsModule as E, ReactiveFormsModule as G } from "@angular/forms";
import { MaterialModule as T } from "@rollthecloudinc/material";
import * as a from "@angular/material/dialog";
import { MAT_DIALOG_DATA as O } from "@angular/material/dialog";
import * as w from "@rollthecloudinc/plugin";
import { Plugin as B, BasePluginManager as L, PluginDef as H } from "@rollthecloudinc/plugin";
import * as C from "@rollthecloudinc/attributes";
import { AttributeValue as S } from "@rollthecloudinc/attributes";
import * as D from "@angular/material/button";
import { of as I, BehaviorSubject as v, Subject as U, combineLatest as b, switchMap as q, map as z } from "rxjs";
import { filter as Q, map as k, tap as y, delay as K, switchMap as J } from "rxjs/operators";
import * as R from "@rollthecloudinc/utils";
import * as x from "@angular/material/autocomplete";
import * as l from "@angular/material/input";
import * as j from "@angular/material/select";
function W(i, r) { if (i & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 4), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let t = r.$implicit;
    e.\u0275\u0275property("value", t.value.id), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.value.title);
} }
function X(i, r) { }
var $ = class extends B {
    constructor(r) { super(r), r && (this.editor = r.editor, this.send = r.send); }
}, f = class {
    constructor(r) { this.settings = [], r && (this.data = r.data, r.settings && Array.isArray(r.settings) && (this.settings = r.settings.map(t => new S(t)))); }
}, F = class {
    constructor(r) { }
}, d = class {
    constructor(r) { r && (this.dataduct = new g(r.dataduct)); }
}, g = class {
    constructor(r) { this.settings = [], r && (this.plugin = r.plugin, r.settings && Array.isArray(r.settings) && (this.settings = r.settings.map(t => new S(t)))); }
}, M = (() => { class i {
    constructor(t) { this.viewContainerRef = t; }
    static { this.\u0275fac = function (s) { return new (s || i)(e.\u0275\u0275directiveInject(e.ViewContainerRef)); }; }
    static { this.\u0275dir = e.\u0275\u0275defineDirective({ type: i, selectors: [["", "classifiedsUiDataductRendererHost", ""]], standalone: !1 }); }
} return i; })(), A = (() => { class i extends L {
    constructor(t, s) { super(t, s); }
    pluginDef() { return I(new H({ name: "dataduct" })); }
    static { this.\u0275fac = function (s) { return new (s || i)(e.\u0275\u0275inject(w.PluginConfigurationManager), e.\u0275\u0275inject(R.ModuleLoaderService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }); }
} return i; })(), Y = (() => { class i {
    set persistence(t) { this.persistence$.next(t); }
    constructor(t, s) { this.dpm = t, this.fb = s, this.contexts = [], this.ductForm = this.fb.group({ plugin: this.fb.control("", [N.required]), settings: this.fb.control("") }), this.ducts$ = this.dpm.getPlugins(), this.componentRef$ = new v(void 0), this.persistence$ = new v(void 0), this.afterViewInit$ = new U, this.contextForwardingSub = this.componentRef$.pipe(Q(n => !!n)).subscribe(n => { n.instance.contexts = this.contexts, n.instance.settings = this.persistence$.value && this.persistence$.value.dataduct ? this.persistence$.value.dataduct.settings : []; }), this.persistenceSub = b([this.persistence$, this.afterViewInit$]).pipe(k(([n]) => n), y(n => { this.ductForm.get("plugin").setValue(n && n.dataduct ? n.dataduct.plugin : ""); }), K(1), y(n => { this.componentRef$.value && this.componentRef$.value.instance && n && (this.componentRef$.value.instance.settings = n.dataduct ? n.dataduct.settings : []); })).subscribe(), this.rendererSub = b([this.ductForm.get("plugin").valueChanges, this.afterViewInit$]).pipe(J(([n, c]) => n && n !== "" ? this.dpm.getPlugin(n) : I(void 0))).subscribe(n => { n && this.renderPlugin(n); }), this.onTouched = () => { }; }
    ngAfterViewInit() { this.afterViewInit$.next(void 0); }
    writeValue(t) { t && this.ductForm.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.ductForm.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.ductForm.disable() : this.ductForm.enable(); }
    validate(t) { return this.ductForm.valid ? null : this.ductForm.errors; }
    renderPlugin(t) { let s = this.datasourceHost.viewContainerRef; s.clear(), this.componentRef$.next(s.createComponent(t.editor)); }
    static { this.\u0275fac = function (s) { return new (s || i)(e.\u0275\u0275directiveInject(A), e.\u0275\u0275directiveInject(o.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-persistence-form"]], viewQuery: function (s, n) { if (s & 1 && e.\u0275\u0275viewQuery(M, 7), s & 2) {
            let c;
            e.\u0275\u0275queryRefresh(c = e.\u0275\u0275loadQuery()) && (n.datasourceHost = c.first);
        } }, inputs: { contexts: "contexts", persistence: "persistence" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: P, useExisting: h(() => i), multi: !0 }, { provide: _, useExisting: h(() => i), multi: !0 }])], decls: 10, vars: 6, consts: [[3, "formGroup"], ["required", "", "formControlName", "plugin"], [3, "value", 4, "ngFor", "ngForOf"], ["classifiedsUiDataductRendererHost", ""], [3, "value"]], template: function (s, n) { s & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field")(2, "mat-label"), e.\u0275\u0275text(3, "Plugin"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(4, "mat-select", 1), e.\u0275\u0275template(5, W, 2, 2, "mat-option", 2), e.\u0275\u0275pipe(6, "async"), e.\u0275\u0275pipe(7, "keyvalue"), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementContainerStart(8), e.\u0275\u0275template(9, X, 0, 0, "ng-template", 3), e.\u0275\u0275elementContainerEnd(), e.\u0275\u0275elementEnd()), s & 2 && (e.\u0275\u0275property("formGroup", n.ductForm), e.\u0275\u0275advance(5), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(7, 4, e.\u0275\u0275pipeBind1(6, 2, n.ducts$)))); }, dependencies: [u.NgForOf, o.NgControlStatus, o.NgControlStatusGroup, o.RequiredValidator, o.FormGroupDirective, o.FormControlName, x.MatOption, l.MatFormField, l.MatLabel, j.MatSelect, M, u.AsyncPipe, u.KeyValuePipe], encapsulation: 2 }); }
} return i; })(), ge = (() => { class i {
    constructor(t, s, n, c) { this.data = t, this.dialogRef = s, this.fb = n, this.attributeSerializer = c, this.persistenceForm = this.fb.group({ dataduct: this.fb.control("") }), this.contexts = [], this.persistence = new d, this.contexts = t.contexts, this.persistence = t.persistence; }
    submit() { let t = this.persistenceForm.value; console.log("persistence form", t); let s = this.attributeSerializer.serialize(t.dataduct.settings, "settings"); console.log("persistence settings", s), this.dialogRef.close(new d(m(p({}, this.persistenceForm.value), { dataduct: m(p({}, t.dataduct), { settings: s.attributes }) }))); }
    static { this.\u0275fac = function (s) { return new (s || i)(e.\u0275\u0275directiveInject(O), e.\u0275\u0275directiveInject(a.MatDialogRef), e.\u0275\u0275directiveInject(o.UntypedFormBuilder), e.\u0275\u0275directiveInject(C.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-persistence-dialog"]], standalone: !1, decls: 8, vars: 4, consts: [[1, "persistence-form", 3, "ngSubmit", "formGroup"], [1, "content-inner"], ["fxLayout", "column"], ["formControlName", "dataduct", 3, "contexts", "persistence"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]], template: function (s, n) { s & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "div", 1)(3, "div", 2), e.\u0275\u0275element(4, "classifieds-ui-persistence-form", 3), e.\u0275\u0275elementEnd()()(), e.\u0275\u0275elementStart(5, "mat-dialog-actions")(6, "button", 4), e.\u0275\u0275text(7, "Save"), e.\u0275\u0275elementEnd()()()), s & 2 && (e.\u0275\u0275property("formGroup", n.persistenceForm), e.\u0275\u0275advance(4), e.\u0275\u0275property("contexts", n.contexts)("persistence", n.persistence), e.\u0275\u0275advance(2), e.\u0275\u0275property("disabled", !n.persistenceForm.valid)); }, dependencies: [o.\u0275NgNoValidate, o.NgControlStatus, o.NgControlStatusGroup, o.FormGroupDirective, o.FormControlName, D.MatButton, a.MatDialogClose, a.MatDialogActions, a.MatDialogContent, Y], encapsulation: 2 }); }
} return i; })(), he = (() => { class i {
    static { this.\u0275fac = function (s) { return new (s || i); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: i }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ imports: [V, E, G, T] }); }
} return i; })(), ve = (() => { class i {
    constructor(t) { this.dpm = t; }
    persist({ data: t, persistence: s }) { return this.dpm.getPlugin(s.dataduct.plugin).pipe(q(n => n.send(new f({ data: t, settings: s.dataduct.settings }))), z(() => { })); }
    static { this.\u0275fac = function (s) { return new (s || i)(e.\u0275\u0275inject(A)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }); }
} return i; })();
export { $ as DataductPlugin, A as DataductPluginManager, f as DuctdataInput, F as DuctdataOutput, ve as PersistService, ge as PersistenceDialogComponent, Y as PersistenceFormComponent, g as PersistenceFormDataduct, d as PersistenceFormPayload, he as RefineryModule };
//# sourceMappingURL=_rollthecloudinc_refinery.kAVFIz_whi.js.map
