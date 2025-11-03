import { a as $, b as y } from "@nf-internal/chunk-GL2BOVXA";
import * as b from "@angular/common";
import { CommonModule as z } from "@angular/common";
import * as e from "@angular/core";
import { forwardRef as M } from "@angular/core";
import * as s from "@angular/forms";
import { NG_VALUE_ACCESSOR as k, NG_VALIDATORS as P, Validators as p, UntypedFormControl as B, FormsModule as H, ReactiveFormsModule as Q } from "@angular/forms";
import { MaterialModule as K } from "@rollthecloudinc/material";
import * as x from "@rollthecloudinc/dparam";
import { Param as J, DparamModule as W } from "@rollthecloudinc/dparam";
import { BehaviorSubject as f, Subject as C, combineLatest as V, of as l, map as T, switchMap as X, Observable as Y } from "rxjs";
import * as _ from "@rollthecloudinc/plugin";
import { Plugin as Z, BasePluginManager as ee, PluginDef as te } from "@rollthecloudinc/plugin";
import { debounceTime as ie, tap as m, filter as S, delay as re, map as u, switchMap as G } from "rxjs/operators";
import * as j from "qs";
import * as g from "@angular/material/input";
import * as R from "@rollthecloudinc/attributes";
import * as O from "@rollthecloudinc/utils";
import * as A from "@angular/material/autocomplete";
import * as U from "@angular/material/select";
import * as q from "@rollthecloudinc/token";
function ne(r, o) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 6), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = o.$implicit;
    e.\u0275\u0275property("value", t.value.id), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.value.title);
} }
function ae(r, o) { }
function oe(r, o) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div"), e.\u0275\u0275element(1, "druid-ordain-validation-validator", 4), e.\u0275\u0275elementStart(2, "button", 3), e.\u0275\u0275listener("click", function () { let n = e.\u0275\u0275restoreView(t).index, a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.deleteValidator$.next(n)); }), e.\u0275\u0275text(3, "Delete"), e.\u0275\u0275elementEnd()();
} if (r & 2) {
    let t = o.index, i = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("formControlName", t)("validation", i.validation$.value.validators[t]);
} }
var c = class extends Z {
    constructor(o) { super(o), o && (this.editor = o.editor, this.errorMessage = o.errorMessage, this.builder = o.builder); }
}, E = class {
    constructor(o) { o && (this.name = o.name, this.validator = o.validator, this.overrideErrorMessage = o.overrideErrorMessage, o.paramSettings && typeof o.paramSettings != "string" && (this.paramSettings = new F(o.paramSettings))); }
}, F = class {
    constructor(o) { this.params = [], o && (this.paramsString = o.paramsString, o.params && Array.isArray(o.params) && (this.params = o.params.map(t => new J(t)))); }
}, I = class {
    constructor(o) { o && Array.isArray(o.validators) && (this.validators = o.validators.map(t => new E(t))); }
}, N = (() => { class r {
    constructor(t) { this.viewContainerRef = t; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(e.ViewContainerRef)); }; }
    static { this.\u0275dir = e.\u0275\u0275defineDirective({ type: r, selectors: [["", "druidValidationRendererHost", ""]], standalone: !1 }); }
} return r; })(), se = (() => { class r {
    set settings(t) { this.settings$.next(t); }
    constructor(t) { this.fb = t, this.contexts = [], this.settings$ = new f(void 0), this.afterViewInit$ = new C, this.paramValues$ = new f([]), this.formGroup = this.fb.group({ paramsString: this.fb.control(""), params: this.fb.control([]) }), this.paramsStringChangeSub = this.formGroup.get("paramsString").valueChanges.pipe(ie(500)).subscribe(i => { let n = j.parse("?" + i); this.paramsParsed = n; }), this.settingsSub = this.settings$.pipe(m(i => { i && this.formGroup.get("paramsString").setValue(i.paramsString ? i.paramsString : ""); })).subscribe(), this.settingsParamsSub = V([this.settings$, this.formGroup.get("paramsString").valueChanges]).pipe(S(([i]) => i !== void 0), re(1), m(([i]) => this.paramValues$.next(i.params))).subscribe(), this.onTouched = () => { }; }
    writeValue(t) { t && this.formGroup.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.formGroup.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(t) { return this.formGroup.valid ? null : this.formGroup.errors; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(s.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["druid-ordain-validation-params-editor-form"]], inputs: { contexts: "contexts", settings: "settings" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: k, useExisting: M(() => r), multi: !0 }, { provide: P, useExisting: M(() => r), multi: !0 }])], decls: 6, vars: 4, consts: [[3, "formGroup"], [1, "params-container"], ["matInput", "", "placeholder", "Params", "formControlName", "paramsString"], ["formControlName", "params", 3, "params", "paramValues", "contexts"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "mat-form-field"), e.\u0275\u0275element(4, "input", 2), e.\u0275\u0275elementEnd()(), e.\u0275\u0275element(5, "classifieds-ui-params-form", 3), e.\u0275\u0275elementEnd()()), i & 2 && (e.\u0275\u0275property("formGroup", n.formGroup), e.\u0275\u0275advance(5), e.\u0275\u0275property("params", n.paramsParsed)("paramValues", n.paramValues$.value)("contexts", n.contexts)); }, dependencies: [s.DefaultValueAccessor, s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, g.MatInput, g.MatFormField, x.ParamsFormComponent], encapsulation: 2 }); }
} return r; })(), v = (() => { class r {
    constructor(t) { this.controlContainer = t, this.settings = [], this.contexts = []; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(s.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["druid-ordain-validation-params-editor"]], inputs: { settings: "settings", contexts: "contexts" }, standalone: !1, decls: 2, vars: 3, consts: [[3, "formGroup"], ["formControlName", "paramSettings", 3, "settings", "contexts"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementContainerStart(0, 0), e.\u0275\u0275element(1, "druid-ordain-validation-params-editor-form", 1), e.\u0275\u0275elementContainerEnd()), i & 2 && (e.\u0275\u0275property("formGroup", n.controlContainer.control), e.\u0275\u0275advance(), e.\u0275\u0275property("settings", n.settings)("contexts", n.contexts)); }, dependencies: [s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, se], encapsulation: 2 }); }
} return r; })(), D = class {
    constructor(o, t) { this.pluginManager = o, this.formsValidationUtils = t; }
    loadPlugins(o, t = []) { return l(!1).pipe(m(() => this.pluginManager.register(this.makeRequired())), m(() => this.pluginManager.register(this.makeRequiredTrue())), m(() => { this.pluginManager.register(this.makeMin()), this.pluginManager.register(this.makeMax()), this.pluginManager.register(this.makeMinLength()), this.pluginManager.register(this.makeMaxLength()); }), u(() => this.pluginManager.register(this.makeEmail())), u(() => this.pluginManager.register(this.makePattern())), u(() => this.pluginManager.register(this.nullValidator())), u(() => !0)); }
    makeRequired() { return new c({ id: "required", title: "Required", errorMessage: "Field is required", editor: v, builder: ({ serialized: o }) => l(t => l(p.required(this.formsValidationUtils.rebuildControl({ c: t, serialized: o })))) }); }
    makeRequiredTrue() { return new c({ id: "required_true", title: "Required True", errorMessage: "Field is required", editor: v, builder: ({ serialized: o }) => l(t => l(p.requiredTrue(this.formsValidationUtils.rebuildControl({ c: t, serialized: o })))) }); }
    makeEmail() { return new c({ id: "email", title: "Email", errorMessage: "Invalid email", editor: v, builder: ({ serialized: o }) => l(t => l(p.email(this.formsValidationUtils.rebuildControl({ c: t, serialized: o })))) }); }
    nullValidator() { return new c({ id: "null", title: "Null", errorMessage: "nota", editor: v, builder: ({ serialized: o }) => l(t => l(p.nullValidator(this.formsValidationUtils.rebuildControl({ c: t, serialized: o })))) }); }
    makeMin() { return new c({ id: "min", title: "Min", errorMessage: "Field min [.min]", editor: v, builder: ({ v: o, serialized: t }) => l(i => this.formsValidationUtils.resolveParams({ v: o }).pipe(u(n => p.min(+n.min)(this.formsValidationUtils.rebuildControl({ c: i, serialized: t }))))) }); }
    makeMax() { return new c({ id: "max", title: "Max", errorMessage: "Field max [.max]", editor: v, builder: ({ v: o, serialized: t }) => l(i => this.formsValidationUtils.resolveParams({ v: o }).pipe(u(n => p.max(+n.max)(this.formsValidationUtils.rebuildControl({ c: i, serialized: t }))))) }); }
    makeMinLength() { return new c({ id: "min_length", title: "Min Length", errorMessage: "minimum of [.min] characters", editor: v, builder: ({ v: o, serialized: t }) => l(i => this.formsValidationUtils.resolveParams({ v: o }).pipe(u(n => p.minLength(+n.minLength)(this.formsValidationUtils.rebuildControl({ c: i, serialized: t }))))) }); }
    makeMaxLength() { return new c({ id: "max_length", title: "Max Length", errorMessage: "Maximum of [.max] characters", editor: v, builder: ({ v: o, serialized: t }) => l(i => this.formsValidationUtils.resolveParams({ v: o }).pipe(u(n => p.maxLength(+n.maxLength)(this.formsValidationUtils.rebuildControl({ c: i, serialized: t }))))) }); }
    makePattern() { return new c({ id: "pattern", title: "Pattern", errorMessage: "Must match pattern", editor: v, builder: ({ v: o, serialized: t }) => l(i => this.formsValidationUtils.resolveParams({ v: o }).pipe(u(n => p.pattern(new RegExp(n.pattern))(this.formsValidationUtils.rebuildControl({ c: i, serialized: t }))))) }); }
}, le = (() => { class r {
    constructor(t, i) { this.paramEvaluatorService = t, this.attributesSerializerService = i; }
    resolveParams({ v: t }) { return l({}).pipe(T(() => ({ paramNames: t.paramSettings.paramsString ? t.paramSettings.paramsString.split("&").filter(i => i.indexOf("=:") !== -1).map(i => i.split("=", 2)[1].substr(1)) : [] })), X(({ paramNames: i }) => this.paramEvaluatorService.paramValues(t.paramSettings.params.reduce((n, a, d) => new Map([...n, [i[d], a]]), new Map)).pipe(T(n => Array.from(n).reduce((a, [d, h]) => y($({}, a), { [d]: h }), {}))))); }
    rebuildControl({ c: t, serialized: i }) { return i ? new B(this.attributesSerializerService.deserializeAsObject(t.value).value) : t; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(x.ParamEvaluatorService), e.\u0275\u0275inject(R.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" }); }
} return r; })(), L = (() => { class r extends ee {
    constructor(t, i, n) { super(i, n), this.addDiscovery(new D(this, t)); }
    pluginDef() { return l(new te({ name: "validation" })); }
    discovery() { super.discovery(); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(le), e.\u0275\u0275inject(_.PluginConfigurationManager), e.\u0275\u0275inject(O.ModuleLoaderService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" }); }
} return r; })(), de = (() => { class r {
    set validation(t) { this.validation$.next(t); }
    constructor(t, i, n) { this.fb = t, this.vpm = i, this.componentFactoryResolver = n, this.contexts = [], this.settings$ = new f(void 0), this.formGroup = this.fb.group({ name: this.fb.control("", [p.required]), validator: this.fb.control("", [p.required]), overrideErrorMessage: this.fb.control(""), paramSettings: this.fb.control("") }), this.validationPlugins$ = this.vpm.getPlugins(), this.componentRef$ = new f(void 0), this.afterViewInit$ = new C, this.onInit$ = new C, this.validation$ = new f(void 0), this.validatorChangeSub = this.formGroup.get("validator").valueChanges.pipe(m(a => { console.log("validator change", a); })).subscribe(), this.validatorSub = V([this.formGroup.get("validator").valueChanges, this.afterViewInit$]).pipe(u(([a]) => a), G(a => a && a !== "" ? this.vpm.getPlugin(a) : l(void 0)), m(a => { a && this.renderValidation(a); })).subscribe(), this.validationSub = this.validation$.pipe(m(a => { a ? (this.formGroup.get("name").setValue(a.name), this.formGroup.get("validator").setValue(a.validator), this.formGroup.get("overrideErrorMessage").setValue(a.overrideErrorMessage), setTimeout(() => this.formGroup.get("paramSettings").setValue(a.paramSettings))) : (this.formGroup.get("name").setValue(""), this.formGroup.get("overrideErrorMessage").setValue(""), this.formGroup.get("validator").setValue("")); })).subscribe(), this.contextForwardingSub = this.componentRef$.pipe(S(a => !!a)).subscribe(a => { a.instance.contexts = this.contexts, a.instance.settings = this.validation$.value ? this.validation$.value.paramSettings : void 0; }), this.onTouched = () => { }; }
    ngOnInit() { this.onInit$.next(void 0), this.onInit$.complete(); }
    ngAfterViewInit() { this.afterViewInit$.next(void 0), this.afterViewInit$.complete(); }
    writeValue(t) { t && this.formGroup.setValue(y($({}, t), { settings: t.settings ? t.settings : "" }), { emitEvent: !1 }); }
    registerOnChange(t) { this.formGroup.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(t) { return this.formGroup.valid ? null : { invalidForm: { valid: !1, message: "content is invalid" } }; }
    renderValidation(t) { let i = this.componentFactoryResolver.resolveComponentFactory(t.editor), n = this.validationHost.viewContainerRef; n.clear(), this.componentRef$.next(n.createComponent(i)); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(L), e.\u0275\u0275directiveInject(e.ComponentFactoryResolver)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["druid-ordain-validation-validator"]], viewQuery: function (i, n) { if (i & 1 && e.\u0275\u0275viewQuery(N, 7), i & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.validationHost = a.first);
        } }, inputs: { contexts: "contexts", validation: "validation" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: k, useExisting: M(() => r), multi: !0 }, { provide: P, useExisting: M(() => r), multi: !0 }])], decls: 19, vars: 6, consts: [[3, "formGroup"], ["matInput", "", "type", "text", "formControlName", "name"], ["required", "", "formControlName", "validator"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "text", "formControlName", "overrideErrorMessage"], ["druidValidationRendererHost", ""], [3, "value"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "mat-form-field")(3, "mat-label"), e.\u0275\u0275text(4, "Name"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(5, "input", 1), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(6, "mat-form-field")(7, "mat-label"), e.\u0275\u0275text(8, "Validator"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(9, "mat-select", 2), e.\u0275\u0275template(10, ne, 2, 2, "mat-option", 3), e.\u0275\u0275pipe(11, "async"), e.\u0275\u0275pipe(12, "keyvalue"), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(13, "mat-form-field")(14, "mat-label"), e.\u0275\u0275text(15, "Error Message"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(16, "input", 4), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementContainerStart(17), e.\u0275\u0275template(18, ae, 0, 0, "ng-template", 5), e.\u0275\u0275elementContainerEnd(), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("formGroup", n.formGroup), e.\u0275\u0275advance(10), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(12, 4, e.\u0275\u0275pipeBind1(11, 2, n.validationPlugins$)))); }, dependencies: [b.NgForOf, s.DefaultValueAccessor, s.NgControlStatus, s.NgControlStatusGroup, s.RequiredValidator, s.FormGroupDirective, s.FormControlName, A.MatOption, g.MatInput, g.MatFormField, g.MatLabel, U.MatSelect, N, b.AsyncPipe, b.KeyValuePipe], encapsulation: 2 }); }
} return r; })(), we = (() => { class r {
    set validation(t) { this.validation$.next(t); }
    get validators() { return this.formGroup.get("validators"); }
    constructor(t) { this.fb = t, this.formGroup = this.fb.group({ validators: this.fb.array([]) }), this.addValidator$ = new C, this.deleteValidator$ = new C, this.afterViewInit$ = new C, this.validation$ = new f(new I({ validators: [] })), this.addValidatorSub = this.addValidator$.pipe(m(() => { this.validators.push(this.fb.control("")); })).subscribe(), this.deleteValidatorSub = this.deleteValidator$.pipe(m(i => { this.validation$.value.validators.splice(i, 1), this.validators.removeAt(i); })).subscribe(), this.validationSub = V([this.validation$, this.afterViewInit$]).pipe(u(([i]) => i), S(i => i.validators.length !== 0), m(i => { this.validators.clear(), i.validators.forEach((n, a) => { this.validators.push(this.fb.control("")); }); })).subscribe(), this.onTouched = () => { }; }
    ngAfterViewInit() { this.afterViewInit$.next(void 0), this.afterViewInit$.complete(); }
    writeValue(t) { t && this.formGroup.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.formGroup.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(t) { return this.formGroup.valid ? null : { invalidForm: { valid: !1, message: "content is invalid" } }; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(s.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["druid-ordain-validation-editor"]], inputs: { validation: "validation" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: k, useExisting: M(() => r), multi: !0 }, { provide: P, useExisting: M(() => r), multi: !0 }])], decls: 5, vars: 2, consts: [[3, "formGroup"], ["formArrayName", "validators"], [4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [3, "formControlName", "validation"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1), e.\u0275\u0275template(2, oe, 4, 2, "div", 2), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(3, "button", 3), e.\u0275\u0275listener("click", function () { return n.addValidator$.next(void 0); }), e.\u0275\u0275text(4, "Add Validator"), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("formGroup", n.formGroup), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", n.validators.controls)); }, dependencies: [b.NgForOf, s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, s.FormArrayName, de], encapsulation: 2 }); }
} return r; })(), $e = (() => { class r {
    set validators(t) { this.validators$.next(t); }
    set errors(t) { this.errors$.next(t); }
    set resolvedContext(t) { this.resolvedContext$.next(t); }
    constructor(t, i) { this.vpm = t, this.tokenizerService = i, this.validators$ = new f([]), this.errors$ = new f(null), this.message$ = new f("Field is invalid"), this.resolvedContext$ = new f(void 0), this.messageSub = V([this.validators$, this.errors$, this.resolvedContext$]).pipe(S(([n, a]) => a !== null && Object.keys(a).length !== 0), u(([n, a]) => { let [d] = Object.keys(a), h = n.find(w => w.validator === d); return { k: d, v: h, e: a[d] }; }), G(({ k: n, v: a, e: d }) => this.vpm.getPlugin(a.validator).pipe(u(h => ({ k: n, v: a, p: h, e: d })))), G(({ k: n, v: a, p: d, e: h }) => this.resolveContexts({ errors: h }).pipe(u(w => ({ k: n, v: a, p: d, t: w })))), m(({ p: n, t: a, v: d }) => { let h = this.replaceTokens({ message: d.overrideErrorMessage && d.overrideErrorMessage !== "" ? d.overrideErrorMessage : n.errorMessage, tokens: a }); this.message$.next(h); })).subscribe(); }
    replaceTokens({ message: t, tokens: i }) { return i !== void 0 && i.forEach((n, a) => { t = t.split(`[${a}]`).join(`${n}`); }), t; }
    resolveContexts({ errors: t }) { return new Y(i => { let n = new Map(this.tokenizerService.generateGenericTokens(t, "")); if (this.resolvedContext$.value)
        for (let a in this.resolvedContext$.value)
            n = new Map([...n, ...this.tokenizerService.generateGenericTokens(this.resolvedContext$.value[a], a === "_root" ? "" : a)]); i.next(n), i.complete(); }); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(L), e.\u0275\u0275directiveInject(q.TokenizerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["druid-ordain-default-validation-error"]], inputs: { validators: "validators", errors: "errors", resolvedContext: "resolvedContext" }, standalone: !1, decls: 1, vars: 1, template: function (i, n) { i & 1 && e.\u0275\u0275text(0), i & 2 && e.\u0275\u0275textInterpolate(n.message$.value); }, encapsulation: 2 }); }
} return r; })(), ye = (() => { class r {
    static { this.\u0275fac = function (i) { return new (i || r); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: r }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ imports: [z, H, Q, K, W] }); }
} return r; })();
export { $e as DefaultValidationError, I as FormValidation, ye as OrdainModule, we as ValidationEditorComponent, v as ValidationParamsEditorComponent, c as ValidationPlugin, L as ValidationPluginManager, E as ValidationValidator, F as ValidationValidatorSettings };
//# sourceMappingURL=_rollthecloudinc_ordain.bMPJTB2Tfo.js.map
