import { a as l } from "@nf-internal/chunk-SMWSTNHZ";
import "@nf-internal/chunk-GL2BOVXA";
import { CommonModule as $ } from "@angular/common";
import * as e from "@angular/core";
import { forwardRef as h } from "@angular/core";
import * as r from "@angular/forms";
import { Validators as u, NG_VALUE_ACCESSOR as I, NG_VALIDATORS as G, FormsModule as D, ReactiveFormsModule as w } from "@angular/forms";
import * as N from "@ngrx/effects";
import { createEffect as v, ofType as g, EffectsModule as P } from "@ngrx/effects";
import * as S from "@rollthecloudinc/context";
import { ContextPlugin as L, ContextModule as A } from "@rollthecloudinc/context";
import { MaterialModule as V } from "@rollthecloudinc/material";
import { BehaviorSubject as q, tap as f, switchMap as B, of as y, forkJoin as R } from "rxjs";
import * as s from "@angular/material/input";
import * as F from "@rollthecloudinc/panels";
import { setPage as T, setPageInfo as O } from "@rollthecloudinc/panels";
import * as m from "@rollthecloudinc/utils";
import * as p from "@ngrx/data";
import * as j from "@rollthecloudinc/content";
import { tap as M, switchMap as x, defaultIfEmpty as C, delay as k, map as Q, take as U } from "rxjs/operators";
var E = (() => { class i {
    set context(t) { this.context$.next(t); }
    constructor(t, o) { this.fb = t, this.controlContainer = o, this.context$ = new q(void 0), this.formGroup = this.fb.group({ remoteEntry: this.fb.control("", [u.required]), exposedModule: this.fb.control("", [u.required]), moduleName: this.fb.control("", [u.required]) }), this.onTouched = () => { }; }
    ngOnInit() { this.context$.subscribe(t => { t ? this.formGroup.setValue({ remoteEntry: t.data.remoteEntry, exposedModule: t.data.exposedModule, moduleName: t.data.moduleName }) : this.formGroup.setValue({ remoteEntry: "", exposedModule: "", moduleName: "" }); }); }
    writeValue(t) { t && this.formGroup.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.formGroup.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(t) { return this.formGroup.valid ? null : { invalidForm: { valid: !1, message: "source is invalid" } }; }
    static { this.\u0275fac = function (o) { return new (o || i)(e.\u0275\u0275directiveInject(r.UntypedFormBuilder), e.\u0275\u0275directiveInject(r.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-context-module-form"]], inputs: { context: "context" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: I, useExisting: h(() => i), multi: !0 }, { provide: G, useExisting: h(() => i), multi: !0 }])], decls: 16, vars: 1, consts: [[3, "formGroup"], ["matInput", "", "formControlName", "remoteEntry", "required", ""], ["matInput", "", "formControlName", "exposedModule", "required", ""], ["matInput", "", "formControlName", "moduleName", "required", ""]], template: function (o, a) { o & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "mat-form-field")(3, "mat-label"), e.\u0275\u0275text(4, "Remote Entry"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(5, "input", 1), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(6, "div")(7, "mat-form-field")(8, "mat-label"), e.\u0275\u0275text(9, "Exposed Module"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(10, "input", 2), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(11, "div")(12, "mat-form-field")(13, "mat-label"), e.\u0275\u0275text(14, "Module Name"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(15, "input", 3), e.\u0275\u0275elementEnd()()()), o & 2 && e.\u0275\u0275property("formGroup", a.formGroup); }, dependencies: [r.DefaultValueAccessor, r.NgControlStatus, r.NgControlStatusGroup, r.RequiredValidator, r.FormGroupDirective, r.FormControlName, s.MatInput, s.MatFormField, s.MatLabel], encapsulation: 2 }); }
} return i; })(), K = (() => { class i {
    constructor(t, o) { this.fb = t, this.controlContainer = o; }
    ngOnInit() { this.controlContainer.control.addControl("adaptor", this.fb.control("data", u.required)), this.controlContainer.control.addControl("data", this.fb.control("")); }
    static { this.\u0275fac = function (o) { return new (o || i)(e.\u0275\u0275directiveInject(r.UntypedFormBuilder), e.\u0275\u0275directiveInject(r.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-context-module-editor"]], viewQuery: function (o, a) { if (o & 1 && e.\u0275\u0275viewQuery(E, 7), o & 2) {
            let n;
            e.\u0275\u0275queryRefresh(n = e.\u0275\u0275loadQuery()) && (a.contextModuleFormComp = n.first);
        } }, inputs: { context: "context" }, standalone: !1, decls: 2, vars: 2, consts: [[3, "formGroup"], ["formControlName", "data", 3, "context"]], template: function (o, a) { o & 1 && (e.\u0275\u0275elementContainerStart(0, 0), e.\u0275\u0275element(1, "classifieds-ui-context-module-form", 1), e.\u0275\u0275elementContainerEnd()), o & 2 && (e.\u0275\u0275property("formGroup", a.controlContainer.control), e.\u0275\u0275advance(), e.\u0275\u0275property("context", a.context)); }, dependencies: [r.NgControlStatus, r.NgControlStatusGroup, r.FormGroupDirective, r.FormControlName, E], encapsulation: 2 }); }
} return i; })(), J = (() => { class i {
    constructor(t, o, a) { this.actions$ = t, this.moduleLoaderService = o, this.es = a, this.setPage$ = v(() => this.actions$.pipe(g(T), f(({ page: n }) => { console.log("tractor beam capture page", n), n.contexts && Array.isArray(n.contexts) && n.contexts.forEach(d => { if (d.plugin === "module")
        return this.moduleLoaderService.loadModule(() => l({ remoteEntry: d.data.remoteEntry, remoteName: "plugin", exposedModule: d.data.exposedModule }).then(c => c[d.data.moduleName])).subscribe(); }); })), { dispatch: !1 }), this.setPageInfo$ = v(() => this.actions$.pipe(g(O), f(({ info: n }) => { console.log("tractor beam info", n); }), B(({ info: n }) => this.es.getEntityCollectionService("PanelPage").getByKey(n.id)), f(n => { n.contexts && Array.isArray(n.contexts) && n.contexts.forEach(d => { if (d.plugin === "module")
        return this.moduleLoaderService.loadModule(() => l({ remoteEntry: d.data.remoteEntry, remoteName: "plugin", exposedModule: d.data.exposedModule }).then(c => c[d.data.moduleName])).subscribe(); }); })), { dispatch: !1 }); }
    static { this.\u0275fac = function (o) { return new (o || i)(e.\u0275\u0275inject(N.Actions), e.\u0275\u0275inject(m.ModuleLoaderService), e.\u0275\u0275inject(p.EntityServices)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac }); }
} return i; })(), b = (() => { class i {
    constructor(t) { this.moduleLoaderService = t; }
    resolve(t, o, a) { return console.log("module resolver context", t, o, a), this.moduleLoaderService.loadModule(() => l({ remoteEntry: o.remoteEntry, remoteName: "plugin", exposedModule: o.exposedModule }).then(n => n[o.moduleName])); }
    static { this.\u0275fac = function (o) { return new (o || i)(e.\u0275\u0275inject(m.ModuleLoaderService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac }); }
} return i; })(), z = ({ moduleResolver: i }) => new L({ id: "module", name: "module", title: "Module", baseObject: {}, resolver: i, editorComponent: K }), H = (() => { class i {
    constructor(t, o, a) { this.moduleLoader = t, this.pageBuilderFacade = o, this.es = a; }
    loadPlugins() { return this.pageBuilderFacade.getPageInfo$.pipe(M(() => console.log("started loading external modules")), x(t => (t && t.id ? this.es.getEntityCollectionService("PanelPage").getByKey(t.id) : y(void 0)).pipe(C(void 0))), x(t => t ? R(t.contexts.filter(o => o.plugin === "module").map(o => this.moduleLoader.loadModule(() => l({ remoteEntry: o.data.remoteEntry, remoteName: "plugin", exposedModule: o.data.exposedModule }).then(a => a[o.data.moduleName])))).pipe(k(1), C([])) : y([])), M(() => console.log("completed loading external modules")), Q(() => !0), U(1)); }
    static { this.\u0275fac = function (o) { return new (o || i)(e.\u0275\u0275inject(m.ModuleLoaderService), e.\u0275\u0275inject(F.PageBuilderFacade), e.\u0275\u0275inject(p.EntityServices)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }); }
} return i; })(), ue = (() => { class i {
    constructor(t, o, a, n) { o.addDiscovery(n), t.register(z({ moduleResolver: a })); }
    static { this.\u0275fac = function (o) { return new (o || i)(e.\u0275\u0275inject(S.ContextPluginManager), e.\u0275\u0275inject(j.ContentPluginManager), e.\u0275\u0275inject(b), e.\u0275\u0275inject(H)); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: i }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ providers: [b], imports: [$, D, w, A, V, P.forFeature([J])] }); }
} return i; })();
export { K as ContextModuleEditorComponent, E as ContextModuleFormComponent, ue as TractorbeamModule };
//# sourceMappingURL=_rollthecloudinc_tractorbeam.O9taZqYaUF.js.map
