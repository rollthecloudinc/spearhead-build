import { a as y } from "@nf-internal/chunk-CAFTJBEE";
import { h as v } from "@nf-internal/chunk-GL2BOVXA";
var h = v(y(), 1);
import * as e from "@angular/core";
import { forwardRef as p } from "@angular/core";
import { CommonModule as C } from "@angular/common";
import * as o from "@angular/forms";
import { Validators as M, NG_VALUE_ACCESSOR as S, NG_VALIDATORS as b, FormsModule as D, ReactiveFormsModule as G } from "@angular/forms";
import { MaterialModule as F } from "@rollthecloudinc/material";
import * as d from "@rollthecloudinc/datasource";
import { DatasourcePlugin as g, Dataset as l, DatasourceModule as w } from "@rollthecloudinc/datasource";
import { BehaviorSubject as j, iif as N, of as c } from "rxjs";
import { map as m } from "rxjs/operators";
import * as f from "@rollthecloudinc/attributes";
import * as s from "@angular/material/input";
var u = class {
    constructor(a) { a && (this.query = a.query); }
}, q = (() => { class i {
    set settings(t) { this.settings$.next(t); }
    constructor(t, r) { this.fb = t, this.attributeSerializer = r, this.settings$ = new j(void 0), this.formGroup = this.fb.group({ query: this.fb.control("", [M.required]) }), this.settingsSub = this.settings$.pipe(m(n => n ? new u(this.attributeSerializer.deserializeAsObject(n)) : void 0)).subscribe(n => { n ? this.formGroup.get("query").setValue(n.query) : this.formGroup.get("query").setValue(""); }), this.onTouched = () => { }; }
    ngOnInit() { }
    writeValue(t) { t && this.formGroup.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.formGroup.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(t) { return this.formGroup.valid ? null : { invalidForm: { valid: !1, message: "content is invalid" } }; }
    static { this.\u0275fac = function (r) { return new (r || i)(e.\u0275\u0275directiveInject(o.UntypedFormBuilder), e.\u0275\u0275directiveInject(f.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-select-source-form"]], inputs: { settings: "settings" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: S, useExisting: p(() => i), multi: !0 }, { provide: b, useExisting: p(() => i), multi: !0 }])], decls: 5, vars: 1, consts: [[3, "formGroup"], ["matInput", "", "formControlName", "query", "required", ""]], template: function (r, n) { r & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field")(2, "mat-label"), e.\u0275\u0275text(3, "Query"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(4, "input", 1), e.\u0275\u0275elementEnd()()), r & 2 && e.\u0275\u0275property("formGroup", n.formGroup); }, dependencies: [o.DefaultValueAccessor, o.NgControlStatus, o.NgControlStatusGroup, o.RequiredValidator, o.FormGroupDirective, o.FormControlName, s.MatInput, s.MatFormField, s.MatLabel], encapsulation: 2 }); }
} return i; })(), T = (() => { class i {
    constructor(t) { this.controlContainer = t, this.settings = []; }
    static { this.\u0275fac = function (r) { return new (r || i)(e.\u0275\u0275directiveInject(o.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-transform-select"]], inputs: { settings: "settings" }, standalone: !1, decls: 2, vars: 2, consts: [[3, "formGroup"], ["formControlName", "settings", 3, "settings"]], template: function (r, n) { r & 1 && (e.\u0275\u0275elementContainerStart(0, 0), e.\u0275\u0275element(1, "classifieds-ui-select-source-form", 1), e.\u0275\u0275elementContainerEnd()), r & 2 && (e.\u0275\u0275property("formGroup", n.controlContainer.control), e.\u0275\u0275advance(), e.\u0275\u0275property("settings", n.settings)); }, dependencies: [o.NgControlStatus, o.NgControlStatusGroup, o.FormGroupDirective, o.FormControlName, q], encapsulation: 2 }); }
} return i; })(), E = (() => { class i {
    constructor() { }
    ngOnInit() { }
    static { this.\u0275fac = function (r) { return new (r || i); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-transform-merge"]], standalone: !1, decls: 2, vars: 0, template: function (r, n) { r & 1 && (e.\u0275\u0275elementStart(0, "p"), e.\u0275\u0275text(1, "transform merge"), e.\u0275\u0275elementEnd()); }, encapsulation: 2 }); }
} return i; })(), I = i => new g({ id: "select", title: "Select", editor: T, fetch: ({ settings: a, dataset: t }) => N(() => !!t, c(t).pipe(m(() => new u(i.deserializeAsObject(a))), m(r => new l({ results: h.JSONPath({ path: r.query, json: t.results }) }))), c(new l)) }), A = () => new g({ id: "merge", title: "Merge", editor: E, fetch: ({ settings: i }) => c(new l) }), J = (() => { class i {
    constructor(t, r) { [I(r), A()].forEach(n => t.register(n)); }
    static { this.\u0275fac = function (r) { return new (r || i)(e.\u0275\u0275inject(d.DatasourcePluginManager), e.\u0275\u0275inject(f.AttributeSerializerService)); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: i }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ imports: [C, D, G, F, w] }); }
} return i; })();
export { q as SelectSourceFormComponent, u as SelectTransform, E as TransformMergeComponent, J as TransformModule, T as TransformSelectComponent };
//# sourceMappingURL=_rollthecloudinc_transform.-6JTLIbAFJ.js.map
