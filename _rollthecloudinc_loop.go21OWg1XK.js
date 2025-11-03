import "@nf-internal/chunk-GL2BOVXA";
import { CommonModule as D } from "@angular/common";
import * as e from "@angular/core";
import { forwardRef as g } from "@angular/core";
import * as r from "@angular/forms";
import { NG_VALUE_ACCESSOR as x, NG_VALIDATORS as G, ReactiveFormsModule as M } from "@angular/forms";
import { MaterialModule as w } from "@rollthecloudinc/material";
import { InlineContext as S, ContextModule as b } from "@rollthecloudinc/context";
import * as u from "@rollthecloudinc/datasource";
import { DatasourcePlugin as F, Dataset as d, Datasource as N, DatasourceModule as j } from "@rollthecloudinc/datasource";
import { BehaviorSubject as h, of as A, forkJoin as E } from "rxjs";
import { map as f, switchMap as I, take as O, defaultIfEmpty as T } from "rxjs/operators";
import * as v from "@rollthecloudinc/attributes";
var $ = (() => { class o {
    set settings(t) { this.settings$.next(t); }
    constructor(t) { this.fb = t, this.contexts = [], this.settings$ = new h(void 0), this.datasource$ = new h(void 0), this.formGroup = this.fb.group({}), this.onTouched = () => { }; }
    ngOnInit() { }
    writeValue(t) { t && this.formGroup.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.formGroup.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(t) { return this.formGroup.valid ? null : this.formGroup.errors; }
    static { this.\u0275fac = function (i) { return new (i || o)(e.\u0275\u0275directiveInject(r.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: o, selectors: [["classifieds-ui-loop-datasource-form"]], inputs: { contexts: "contexts", settings: "settings" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: x, useExisting: g(() => o), multi: !0 }, { provide: G, useExisting: g(() => o), multi: !0 }])], decls: 1, vars: 1, consts: [[3, "formGroup"]], template: function (i, n) { i & 1 && e.\u0275\u0275element(0, "div", 0), i & 2 && e.\u0275\u0275property("formGroup", n.formGroup); }, dependencies: [r.NgControlStatusGroup, r.FormGroupDirective], encapsulation: 2 }); }
} return o; })(), L = (() => { class o {
    constructor(t) { this.controlContainer = t, this.settings = [], this.contexts = []; }
    static { this.\u0275fac = function (i) { return new (i || o)(e.\u0275\u0275directiveInject(r.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: o, selectors: [["classifieds-ui-loop-datasource"]], inputs: { settings: "settings", contexts: "contexts" }, standalone: !1, decls: 2, vars: 3, consts: [[3, "formGroup"], ["formControlName", "settings", 3, "settings", "contexts"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementContainerStart(0, 0), e.\u0275\u0275element(1, "classifieds-ui-loop-datasource-form", 1), e.\u0275\u0275elementContainerEnd()), i & 2 && (e.\u0275\u0275property("formGroup", n.controlContainer.control), e.\u0275\u0275advance(), e.\u0275\u0275property("settings", n.settings)("contexts", n.contexts)); }, dependencies: [r.NgControlStatus, r.NgControlStatusGroup, r.FormGroupDirective, r.FormControlName, $], encapsulation: 2 }); }
} return o; })(), m = class {
    constructor(c) { }
}, P = (o, c) => new F({ id: "loop", title: "loop", editor: L, fetch: ({ settings: t, dataset: i, datasource: n, metadata: s, datasources: C }) => A(new d).pipe(f(() => o.deserializeAsObject(t)), f(p => p ? new m(p) : void 0), I(p => E(i ? i.results.map(l => c.evalDatasource({ datasource: new N({ plugin: "data", renderer: n.renderer, settings: o.serialize({ data: JSON.stringify(i.results) }, "root").attributes }), datasources: C, metadata: new Map([...s ? Array.from(s).filter(([a]) => a !== "contexts") : [], ["contexts", [...s.has("contexts") && Array.isArray(s.get("contexts")) ? s.get("contexts").filter(a => a.name !== "_root") : [], new S({ name: "_root", adaptor: "data", data: l })]]]) }).pipe(O(1))) : []).pipe(f(l => new d({ results: l.reduce((a, y) => [...a, ...y.results], []) })), T(new d({ results: [] }))))) }), Q = (() => { class o {
    constructor(t, i, n) { [P(i, n)].forEach(s => t.register(s)); }
    static { this.\u0275fac = function (i) { return new (i || o)(e.\u0275\u0275inject(u.DatasourcePluginManager), e.\u0275\u0275inject(v.AttributeSerializerService), e.\u0275\u0275inject(u.DatasourceEvaluator)); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: o }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ imports: [D, M, w, b, j] }); }
} return o; })();
export { m as LoopDatasource, L as LoopDatasourceComponent, $ as LoopDatasourceFormComponent, Q as LoopModule };
//# sourceMappingURL=_rollthecloudinc_loop.go21OWg1XK.js.map
