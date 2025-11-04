import "@nf-internal/chunk-GL2BOVXA";
import * as t from "@angular/core";
import { forwardRef as h } from "@angular/core";
import * as n from "@angular/forms";
import { NG_VALUE_ACCESSOR as x, NG_VALIDATORS as E, ReactiveFormsModule as F, FormsModule as j } from "@angular/forms";
import { BehaviorSubject as y, of as c } from "rxjs";
import { map as u, debounceTime as q, switchMap as d } from "rxjs/operators";
import * as C from "qs";
import * as g from "@rollthecloudinc/attributes";
import * as f from "@angular/material/input";
import * as S from "@rollthecloudinc/dparam";
import { Param as V, DparamModule as A } from "@rollthecloudinc/dparam";
import { CommonModule as P } from "@angular/common";
import { MaterialModule as O } from "@rollthecloudinc/material";
import * as b from "@rollthecloudinc/context";
import { ContextModule as $ } from "@rollthecloudinc/context";
import * as G from "@rollthecloudinc/datasource";
import { DatasourcePlugin as I, DatasourceEditorOptions as T, Dataset as v } from "@rollthecloudinc/datasource";
import * as N from "@rollthecloudinc/refinery";
import { DataductPlugin as z, DuctdataOutput as R } from "@rollthecloudinc/refinery";
import { ContentBinding as B } from "@rollthecloudinc/content";
import * as D from "@rollthecloudinc/durl";
import * as M from "@ngrx/data";
var U = (() => { class r {
    set settings(e) { this.settings$.next(e); }
    constructor(e, s) { this.fb = e, this.attributeSerializer = s, this.contexts = [], this.settings$ = new y(void 0), this.paramValues$ = new y([]), this.formGroup = this.fb.group({ entityName: this.fb.control(""), queryString: this.fb.control(""), params: this.fb.control([]) }), this.settingsSub = this.settings$.pipe(u(i => i ? this.attributeSerializer.deserializeAsObject(i) : void 0)).subscribe(i => { i ? (this.formGroup.get("entityName").setValue(i.entityName), this.formGroup.get("queryString").setValue(i.queryString)) : (this.formGroup.get("entityName").setValue(""), this.formGroup.get("queryString").setValue("")); }), this.queryStringChangeSub = this.formGroup.get("queryString").valueChanges.pipe(q(500)).subscribe(i => { let p = C.parse("?" + i); this.paramsParsed = p; }), this.onTouched = () => { }; }
    ngOnInit() { }
    writeValue(e) { e && this.formGroup.setValue(e, { emitEvent: !1 }); }
    registerOnChange(e) { this.formGroup.valueChanges.subscribe(e); }
    registerOnTouched(e) { this.onTouched = e; }
    setDisabledState(e) { e ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(e) { return this.formGroup.valid ? null : this.formGroup.errors; }
    static { this.\u0275fac = function (s) { return new (s || r)(t.\u0275\u0275directiveInject(n.UntypedFormBuilder), t.\u0275\u0275directiveInject(g.AttributeSerializerService)); }; }
    static { this.\u0275cmp = t.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-entity-datasource-form"]], inputs: { contexts: "contexts", settings: "settings" }, standalone: !1, features: [t.\u0275\u0275ProvidersFeature([{ provide: x, useExisting: h(() => r), multi: !0 }, { provide: E, useExisting: h(() => r), multi: !0 }])], decls: 8, vars: 4, consts: [[3, "formGroup"], ["matInput", "", "placeholder", "Name", "formControlName", "entityName", "required", ""], ["matInput", "", "placeholder", "Query String", "formControlName", "queryString"], ["formControlName", "params", 3, "params", "paramValues", "contexts"]], template: function (s, i) { s & 1 && (t.\u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "mat-form-field"), t.\u0275\u0275element(3, "input", 1), t.\u0275\u0275elementEnd()(), t.\u0275\u0275elementStart(4, "div")(5, "mat-form-field"), t.\u0275\u0275element(6, "input", 2), t.\u0275\u0275elementEnd()(), t.\u0275\u0275element(7, "classifieds-ui-params-form", 3), t.\u0275\u0275elementEnd()), s & 2 && (t.\u0275\u0275property("formGroup", i.formGroup), t.\u0275\u0275advance(7), t.\u0275\u0275property("params", i.paramsParsed)("paramValues", i.paramValues$.value)("contexts", i.contexts)); }, dependencies: [n.DefaultValueAccessor, n.NgControlStatus, n.NgControlStatusGroup, n.RequiredValidator, n.FormGroupDirective, n.FormControlName, f.MatInput, f.MatFormField, S.ParamsFormComponent], encapsulation: 2 }); }
} return r; })(), w = (() => { class r {
    constructor(e) { this.controlContainer = e, this.settings = [], this.contexts = []; }
    static { this.\u0275fac = function (s) { return new (s || r)(t.\u0275\u0275directiveInject(n.ControlContainer)); }; }
    static { this.\u0275cmp = t.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-entity-datasource"]], inputs: { settings: "settings", contexts: "contexts" }, standalone: !1, decls: 2, vars: 3, consts: [[3, "formGroup"], ["formControlName", "settings", 3, "settings", "contexts"]], template: function (s, i) { s & 1 && (t.\u0275\u0275elementContainerStart(0, 0), t.\u0275\u0275element(1, "classifieds-ui-entity-datasource-form", 1), t.\u0275\u0275elementContainerEnd()), s & 2 && (t.\u0275\u0275property("formGroup", i.controlContainer.control), t.\u0275\u0275advance(), t.\u0275\u0275property("settings", i.settings)("contexts", i.contexts)); }, dependencies: [n.NgControlStatus, n.NgControlStatusGroup, n.FormGroupDirective, n.FormControlName, U], encapsulation: 2 }); }
} return r; })(), l = class {
    constructor(m) { this.params = [], m && (this.entityName = m.entityName, this.queryString = m.queryString ? m.queryString : "", m.params && Array.isArray(m.params) && (this.params = m.params.map(e => new V(e)))); }
}, L = (r, m, e, s) => new I({ id: "entity", title: "Entity", editor: w, fetch: ({ settings: i, metadata: p }) => c(new v).pipe(u(() => m.deserializeAsObject(i)), u(o => new l(o)), d(o => e.getUrl("?" + o.queryString, o.params, p).pipe(u(a => ({ e: o, queryString: a })))), u(({ e: o, queryString: a }) => ({ e: o, queryString: a.substr(1) })), d(({ e: o, queryString: a }) => a && a !== "" ? s.getEntityCollectionService(o.entityName).getWithQuery(a) : s.getEntityCollectionService(o.entityName).getAll()), u(o => new v({ results: o }))), editorOptions: () => c(new T({ fullscreen: !0 })), getBindings: ({ settings: i, metadata: p }) => c([]).pipe(u(() => m.deserializeAsObject(i)), u(o => new l(o)), d(o => r.extractContexts(o.params)), u(o => o.map(a => new B({ id: a, type: "context" })))) }), Q = () => new z({ id: "entity", title: "Entity", editor: w, send: r => c(new R({})) }), nt = (() => { class r {
    constructor(e, s, i, p, o, a) { e.register(L(i, p, o, a)), s.register(Q()); }
    static { this.\u0275fac = function (s) { return new (s || r)(t.\u0275\u0275inject(G.DatasourcePluginManager), t.\u0275\u0275inject(N.DataductPluginManager), t.\u0275\u0275inject(b.ParamContextExtractorService), t.\u0275\u0275inject(g.AttributeSerializerService), t.\u0275\u0275inject(D.UrlGeneratorService), t.\u0275\u0275inject(M.EntityServices)); }; }
    static { this.\u0275mod = t.\u0275\u0275defineNgModule({ type: r }); }
    static { this.\u0275inj = t.\u0275\u0275defineInjector({ imports: [P, F, j, O, $, A] }); }
} return r; })();
export { nt as DeityModule, U as EntityDataSourceFormComponent, l as EntityDatasource, w as EntityDatasourceComponent };
//# sourceMappingURL=_rollthecloudinc_deity.nA5V1gqZYK.js.map
