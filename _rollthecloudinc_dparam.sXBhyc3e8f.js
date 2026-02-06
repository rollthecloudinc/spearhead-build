import { a as x, b as k } from "@nf-internal/chunk-J4XOFOAH";
import * as e from "@angular/core";
import { forwardRef as y } from "@angular/core";
import * as q from "@rollthecloudinc/plugin";
import { Plugin as H, BasePluginManager as Q, PluginDef as W } from "@rollthecloudinc/plugin";
import { of as f, iif as F, BehaviorSubject as h, Subject as B, combineLatest as z, filter as X, tap as Y, forkJoin as T } from "rxjs";
import { map as c, switchMap as M, filter as L, tap as w, debounceTime as Z, delay as ee, defaultIfEmpty as te } from "rxjs/operators";
import * as a from "@angular/forms";
import { Validators as D, NG_VALUE_ACCESSOR as N, NG_VALIDATORS as A, FormsModule as ie, ReactiveFormsModule as re } from "@angular/forms";
import * as R from "@rollthecloudinc/utils";
import * as p from "@angular/common";
import { CommonModule as ne } from "@angular/common";
import * as G from "@angular/material/autocomplete";
import * as U from "@angular/material/checkbox";
import * as d from "@angular/material/input";
import * as O from "@angular/material/select";
import { MaterialModule as se } from "@rollthecloudinc/material";
import ae from "qs";
import * as j from "@rollthecloudinc/token";
function oe(r, s) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 10), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = s.$implicit;
    e.\u0275\u0275property("value", t.value.id), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.value.title);
} }
function le(r, s) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 10), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = s.$implicit;
    e.\u0275\u0275property("value", t), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t);
} }
function pe(r, s) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-form-field", 2)(1, "mat-label"), e.\u0275\u0275text(2, "Context"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(3, "mat-select", 11), e.\u0275\u0275template(4, le, 2, 2, "mat-option", 4), e.\u0275\u0275elementEnd()()), r & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(4), e.\u0275\u0275property("ngForOf", t.contexts);
} }
function me(r, s) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div", 12)(1, "mat-checkbox", 13), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()()), r & 2) {
    let t = s.index, i = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275property("formGroupName", t), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(i.flagsAsArray[t]);
} }
function ue(r, s) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div", 1)(1, "div"), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(3, "mat-form-field", 2)(4, "mat-label"), e.\u0275\u0275text(5, "Type"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(6, "mat-select", 3), e.\u0275\u0275template(7, oe, 2, 2, "mat-option", 4), e.\u0275\u0275pipe(8, "async"), e.\u0275\u0275pipe(9, "keyvalue"), e.\u0275\u0275elementEnd()(), e.\u0275\u0275template(10, pe, 5, 1, "mat-form-field", 5), e.\u0275\u0275elementStart(11, "mat-form-field", 2), e.\u0275\u0275element(12, "input", 6), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(13, "mat-form-field", 2), e.\u0275\u0275element(14, "input", 7), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(15, "div", 8), e.\u0275\u0275template(16, me, 3, 2, "div", 9), e.\u0275\u0275elementEnd()()), r & 2) {
    let t = s.$implicit, i = s.index, n = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("formGroup", t), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(n.paramName(i)), e.\u0275\u0275advance(5), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(9, 7, e.\u0275\u0275pipeBind1(8, 5, n.paramPlugins$))), e.\u0275\u0275advance(3), e.\u0275\u0275property("ngIf", t.get("mapping").get("type").value == "context"), e.\u0275\u0275advance(6), e.\u0275\u0275property("ngForOf", t.get("flags").controls);
} }
function ce(r, s) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 4), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = s.$implicit;
    e.\u0275\u0275property("value", t.value.id), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.value.title);
} }
var S = class extends H {
    constructor(s) { super(s), s && (this.evalParam = s.evalParam, s.condition && (this.condition = s.condition), s.usedContexts && (this.usedContexts = s.usedContexts)); }
}, fe = () => new S({ id: "static", title: "Static", evalParam: ({ param: r, metadata: s }) => f(r.mapping.value) }), de = r => new S({ id: "inputparam", title: "Input Param", evalParam: ({ param: s, metadata: t }) => f(s.mapping.value).pipe(c(i => t.has("inputparams") && t.get("inputparams").has(i) ? t.get("inputparams").get(i) : void 0), M(i => F(() => i !== void 0, i !== void 0 ? r.paramValue(i, t) : f(s.mapping.testValue), f(s.mapping.testValue)))) }), E = (() => { class r extends Q {
    constructor(t, i) { super(t, i); }
    pluginDef() { return f(new W({ name: "param" })); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(q.PluginConfigurationManager), e.\u0275\u0275inject(R.ModuleLoaderService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" }); }
} return r; })(), ge = (() => { class r {
    set params(t) { console.log('Input "params" set:', t), this.params$.next(t); }
    set paramValues(t) { console.log('Input "paramValues" set:', t), this.paramValues$.next(t || []); }
    constructor(t, i) { this.fb = t, this.ppm = i, this.contexts = [], this.params$ = new h({}), this.paramValues$ = new h([]), this.init$ = new B, this.formArray = this.fb.array([]), this.paramPlugins$ = this.ppm.getPlugins(), this.flags = new Map, this.savedParams = new Map, this.paramIndexes = new Map, this.onTouched = () => { }, this.flags.set("page", "Page"), this.flags.set("limit", "Limit"), this.flags.set("offset", "Offset"), this.flags.set("searchString", "Search String"), z([this.params$, this.paramValues$, this.init$]).pipe(L(([n, o]) => !!n && !!o), w(([n, o]) => { console.log("params$ emitted value:", n), console.log("paramValues$.value (current):", o); let m = new Map(this.paramIndexes); this.formArray.clear(), this.paramIndexes.clear(); let u = 0; for (let l in n)
        console.log("Processing param:", l), Array.isArray(n[l]) ? n[l].forEach(v => this.buildParams(v, u++, m)) : n[l].indexOf(":") === 0 && this.buildParams(n[l], u++, m); })).subscribe(); }
    ngOnInit() { this.init$.next(void 0); }
    writeValue(t) { t && this.formArray.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.formArray.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.formArray.disable() : this.formArray.enable(); }
    validate(t) { return this.formArray.valid ? null : this.formArray.errors; }
    buildParams(t, i, n) { console.log(`Building param: ${t}, index: ${i}`), this.paramIndexes.set(t, i); let o = this.fb.group({ mapping: this.fb.group({ type: this.fb.control("", D.required), value: this.fb.control("", D.required), testValue: this.fb.control(""), context: this.fb.control("") }), flags: this.fb.array(this.flagsAsArray.map(m => this.fb.group({ name: m, enabled: this.fb.control(!1) }))) }); this.formArray.push(o), this.savedParams.has(t) ? o.setValue(this.savedParams.get(t)) : i < this.paramValues$.value.length && Array.from(n).findIndex(([u, l]) => l === i) === -1 && o.setValue(this.paramValues$.value[i]); }
    paramName(t) { let i = 0; for (let n in this.params$.value)
        if (Array.isArray(this.params$.value[n]))
            for (let o = 0; o < this.params$.value[n].length; o++) {
                if (t === i)
                    return this.params$.value[n][o];
                i++;
            }
        else if (this.params$.value[n].indexOf(":") === 0) {
            if (i === t)
                return this.params$.value[n];
            i++;
        } }
    get flagsAsArray() { return Array.from(this.flags.keys()); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(a.UntypedFormBuilder), e.\u0275\u0275directiveInject(E)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-params-form"]], inputs: { contexts: "contexts", params: "params", paramValues: "paramValues" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: N, useExisting: y(() => r), multi: !0 }, { provide: A, useExisting: y(() => r), multi: !0 }])], decls: 1, vars: 1, consts: [[3, "formGroup", 4, "ngFor", "ngForOf"], [3, "formGroup"], ["formGroupName", "mapping"], ["required", "", "formControlName", "type"], [3, "value", 4, "ngFor", "ngForOf"], ["formGroupName", "mapping", 4, "ngIf"], ["matInput", "", "formControlName", "value", "placeholder", "value", "required", ""], ["matInput", "", "formControlName", "testValue", "placeholder", "Test Value", "required", ""], ["formArrayName", "flags"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [3, "value"], ["formControlName", "context"], [3, "formGroupName"], ["formControlName", "enabled"]], template: function (i, n) { i & 1 && e.\u0275\u0275template(0, ue, 17, 9, "div", 0), i & 2 && e.\u0275\u0275property("ngForOf", n.formArray.controls); }, dependencies: [p.NgForOf, p.NgIf, a.DefaultValueAccessor, a.NgControlStatus, a.NgControlStatusGroup, a.RequiredValidator, a.FormGroupDirective, a.FormControlName, a.FormGroupName, a.FormArrayName, G.MatOption, U.MatCheckbox, d.MatInput, d.MatFormField, d.MatLabel, O.MatSelect, p.AsyncPipe, p.KeyValuePipe], encapsulation: 2 }); }
} return r; })(), he = (() => { class r {
    set settings(t) { this.settings$.next(t); }
    constructor(t) { this.fb = t, this.contexts = [], this.settings$ = new h(void 0), this.afterViewInit$ = new B, this.paramValues$ = new h([]), this.formGroup = this.fb.group({ paramsString: this.fb.control(""), params: this.fb.control([]) }), this.paramsStringChangeSub = this.formGroup.get("paramsString").valueChanges.pipe(Z(500)).subscribe(i => { let n = ae.parse("?" + i); this.paramsParsed = n; }), this.settingsSub = this.settings$.pipe(w(i => { i && this.formGroup.get("paramsString").setValue(i.paramsString ? i.paramsString : ""); })).subscribe(), this.settingsParamsSub = z([this.settings$, this.formGroup.get("paramsString").valueChanges]).pipe(L(([i]) => i !== void 0), ee(1), w(([i]) => this.paramValues$.next(i.params))).subscribe(), this.onTouched = () => { }; }
    writeValue(t) { t && this.formGroup.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.formGroup.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(t) { return this.formGroup.valid ? null : this.formGroup.errors; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(a.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["druid-params-querystring"]], inputs: { contexts: "contexts", settings: "settings" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: N, useExisting: y(() => r), multi: !0 }, { provide: A, useExisting: y(() => r), multi: !0 }])], decls: 6, vars: 4, consts: [[3, "formGroup"], [1, "params-container"], ["matInput", "", "placeholder", "Params", "formControlName", "paramsString"], ["formControlName", "params", 3, "params", "paramValues", "contexts"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "mat-form-field"), e.\u0275\u0275element(4, "input", 2), e.\u0275\u0275elementEnd()(), e.\u0275\u0275element(5, "classifieds-ui-params-form", 3), e.\u0275\u0275elementEnd()()), i & 2 && (e.\u0275\u0275property("formGroup", n.formGroup), e.\u0275\u0275advance(5), e.\u0275\u0275property("params", n.paramsParsed)("paramValues", n.paramValues$.value)("contexts", n.contexts)); }, dependencies: [a.DefaultValueAccessor, a.NgControlStatus, a.NgControlStatusGroup, a.FormGroupDirective, a.FormControlName, d.MatInput, d.MatFormField, ge], encapsulation: 2 }); }
} return r; })(), C = class {
    constructor(s) { s && (this.mapping = new I(s.mapping), s.flags !== void 0 && (this.flags = s.flags.map(t => new P(t)))); }
}, I = class {
    constructor(s) { s && (this.type = s.type, this.value = s.value, this.testValue = s.testValue, this.context = s.context); }
}, P = class {
    constructor(s) { s && (this.name = s.name, this.enabled = s.enabled); }
}, _ = class {
    constructor(s) { s && (this.plugin = s.plugin, this.settings = s.settings ? new V(s.settings) : new V); }
}, V = class {
    constructor(s) { s && (this.paramsString = s.paramsString, s.params && Array.isArray(s.params) && (this.params = s.params.map(t => new C(t)))); }
}, Pe = (() => { class r {
    set title(t) { this.title$.next(t); }
    set plugins(t) { this.plugins$.next(t); }
    set instance(t) { this.instance$.next(t); }
    constructor(t) { this.fb = t, this.plugins$ = new h([]), this.title$ = new h("Plugin"), this.instance$ = new h(new _), this.instanceForm = this.fb.group({ plugin: this.fb.control(""), settings: this.fb.control("") }), this.instanceSub = this.instance$.pipe(X(i => !!i), Y(i => { this.instanceForm.get("plugin").setValue(i.plugin); })).subscribe(), this.onTouched = () => { }; }
    writeValue(t) { t && this.instanceForm.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.instanceForm.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.instanceForm.disable() : this.instanceForm.enable(); }
    validate(t) { return this.instanceForm.valid ? null : this.instanceForm.errors; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(a.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["druid-params-plugin-instance"]], inputs: { title: "title", plugins: "plugins", instance: "instance" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: N, useExisting: y(() => r), multi: !0 }, { provide: A, useExisting: y(() => r), multi: !0 }])], decls: 10, vars: 10, consts: [[3, "formGroup"], ["required", "", "formControlName", "plugin"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "settings", 3, "settings"], [3, "value"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field")(2, "mat-label"), e.\u0275\u0275text(3), e.\u0275\u0275pipe(4, "async"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(5, "mat-select", 1), e.\u0275\u0275template(6, ce, 2, 2, "mat-option", 2), e.\u0275\u0275pipe(7, "async"), e.\u0275\u0275pipe(8, "keyvalue"), e.\u0275\u0275elementEnd()(), e.\u0275\u0275element(9, "druid-params-querystring", 3), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("formGroup", n.instanceForm), e.\u0275\u0275advance(3), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(4, 4, n.title$)), e.\u0275\u0275advance(3), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(8, 8, e.\u0275\u0275pipeBind1(7, 6, n.plugins$))), e.\u0275\u0275advance(3), e.\u0275\u0275property("settings", n.instance$.value.settings)); }, dependencies: [p.NgForOf, a.NgControlStatus, a.NgControlStatusGroup, a.RequiredValidator, a.FormGroupDirective, a.FormControlName, G.MatOption, d.MatFormField, d.MatLabel, O.MatSelect, he, p.AsyncPipe, p.KeyValuePipe], encapsulation: 2 }); }
} return r; })(), K = (() => { class r {
    constructor(t, i) { this.paramPluginManager = t, this.tokenizerService = i; }
    paramValue(t, i) { return this.paramPluginManager.getPlugins().pipe(c(n => Array.from(n).map(([o, m]) => m)), c(n => n.find(o => o.condition && o.condition({ param: t, metadata: i }) || !o.condition && o.id === t.mapping.type)), M(n => F(() => !!n, n ? n.evalParam({ param: t, metadata: i }) : f(), f(t.mapping.value))), c(n => t.mapping.value && typeof n == "string" && this.tokenizerService.discoverTokens(n).length === 0 ? n : t.mapping.testValue)); }
    paramValues(t) { return T(Array.from(t.keys()).map(i => this.paramValue(t.get(i), new Map).pipe(c(n => [i, n])))).pipe(c(i => i.reduce((n, o) => new Map([...n, o]), new Map)), te(new Map)); }
    resolveParams({ params: t }) { return M(() => F(() => Object.keys(t).length > 1, T(Object.keys(t).map(i => this.paramValue(t[i], new Map).pipe(c(n => ({ [i]: n }))))).pipe(c(i => i.reduce((n, o) => x(x({}, n), o), {})), c(i => ({ options: i }))), F(() => Object.keys(t).length !== 0, this.paramValue(Object.keys(t).length !== 0 ? t[Object.keys(t)[0]] : new C, new Map).pipe(c(i => ({ options: { [Object.keys(t)[0]]: i } }))), f({ options: {} })))); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(E), e.\u0275\u0275inject(j.TokenizerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" }); }
} return r; })(), _e = (() => { class r {
    constructor(t, i) { t.register(fe()), t.register(de(i)); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(E), e.\u0275\u0275inject(K)); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: r }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ imports: [ne, ie, re, se] }); }
} return r; })(), Ne = (() => { class r {
    constructor(t, i) { this.evaluator = t, this.tokenizer = i; }
    resolveParamsForTarget(t, i, n) { if (!t || !i || i.length === 0)
        return f({}); let o = t.split("&").map(u => u.split("=", 2)[0]), m = i.reduce((u, l, v) => { let b = o[v]; return u.set(b, l), u; }, new Map); return console.log("Resolving params for target:", { paramsString: t, paramsArray: i, paramMap: m }), this.evaluator.paramValues(m).pipe(M(u => { let l = new Map, v = Array.from(u.entries()).reduce((g, [$, J]) => k(x({}, g), { [$]: J }), {}); for (let g in n)
        l = new Map([...l, ...this.tokenizer.generateGenericTokens(n[g], g === "_root" ? "" : g)]); let b = {}; for (let g of Object.keys(v)) {
        let $ = v[g];
        typeof $ == "string" ? b[g] = this.tokenizer.replaceTokens($, l) : b[g] = $;
    } return f(b); })); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(K), e.\u0275\u0275inject(j.TokenizerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" }); }
} return r; })();
export { _e as DparamModule, P as Flag, I as Mapping, C as Param, K as ParamEvaluatorService, S as ParamPlugin, _ as ParamPluginInstance, E as ParamPluginManager, V as ParamSettings, ge as ParamsFormComponent, he as ParamsQuerystringComponent, Pe as PluginInstanceComponent, Ne as TargetParamResolverService };
