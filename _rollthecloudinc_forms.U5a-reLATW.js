import { a as xe } from "@nf-internal/chunk-6A46ZHUO";
import { a as Se } from "@nf-internal/chunk-CAFTJBEE";
import { a as se } from "@nf-internal/chunk-7XNIKSHD";
import { a as oe, b as re, h as ae } from "@nf-internal/chunk-GL2BOVXA";
import * as v from "@angular/common";
import { CommonModule as Fe } from "@angular/common";
import * as e from "@angular/core";
import "@angular/core";
import * as a from "@angular/forms";
import { UntypedFormControl as G, FormsModule as Ie, ReactiveFormsModule as _e } from "@angular/forms";
import { MaterialModule as $e } from "@rollthecloudinc/material";
import * as de from "@rollthecloudinc/content";
import { ContentBinding as Me, ContentPluginEditorOptions as we, ContentPlugin as M } from "@rollthecloudinc/content";
import * as me from "@rollthecloudinc/datasource";
import { DatasourceOptions as je, SelectOption as De, Dataset as ze, mockDatasourceOptions as X, DatasourceModule as Oe } from "@rollthecloudinc/datasource";
import * as g from "@rollthecloudinc/ordain";
import { FormValidation as q, OrdainModule as Te } from "@rollthecloudinc/ordain";
import { of as y, Subject as D, tap as V, ReplaySubject as Ae, take as ke, BehaviorSubject as _, combineLatest as J, forkJoin as le, iif as Pe, mergeMap as Ve, map as ce, filter as Ee, switchMap as Ne } from "rxjs";
import { switchMap as $, map as C, tap as A, defaultIfEmpty as pe, take as Be, takeUntil as Y, debounceTime as Ge, distinctUntilChanged as Re, withLatestFrom as Le } from "rxjs/operators";
var ee = ae(Se(), 1), ue = ae(xe(), 1);
import * as h from "@rollthecloudinc/attributes";
import * as b from "@rollthecloudinc/token";
import * as E from "@rollthecloudinc/panels";
import { PanelPageForm as He, Pane as B, StylePlugin as Ue } from "@rollthecloudinc/panels";
import * as u from "@angular/material/input";
import * as k from "@angular/material/autocomplete";
import * as te from "@angular/material/select";
import * as fe from "@rollthecloudinc/render";
import { RenderModule as qe } from "@rollthecloudinc/render";
import * as z from "@angular/material/dialog";
import { MAT_DIALOG_DATA as ve } from "@angular/material/dialog";
import * as ie from "@angular/material/button";
import * as W from "@angular/material/radio";
import * as K from "@angular/material/slider";
import * as ge from "@angular/material/slide-toggle";
import * as he from "@angular/material/checkbox";
import * as N from "@angular/material/datepicker";
import { Param as Je, Mapping as We } from "@rollthecloudinc/dparam";
import * as Ce from "@rollthecloudinc/media";
import { MediaFile as Ke } from "@rollthecloudinc/media";
import * as O from "ngx-dropzone";
import { NgxDropzoneModule as Qe } from "ngx-dropzone";
function Xe(n, p) { if (n & 1 && (e.\u0275\u0275elementStart(0, "mat-error"), e.\u0275\u0275element(1, "druid-ordain-default-validation-error", 2), e.\u0275\u0275elementEnd()), n & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("validators", t.formSettings$.value == null || t.formSettings$.value.validation == null ? null : t.formSettings$.value.validation.validators)("errors", t.formControl.errors)("resolvedContext", t.resolvedContext$.value);
} }
function Ye(n, p) { if (n & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 2), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), n & 2) {
    let t = p.$implicit;
    e.\u0275\u0275property("value", t.value), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label);
} }
function Ze(n, p) { if (n & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div"), e.\u0275\u0275element(1, "classifieds-ui-render-pane", 4), e.\u0275\u0275elementStart(2, "button", 3), e.\u0275\u0275listener("click", function () { let o = e.\u0275\u0275restoreView(t).index, r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r.remove$.next(o)); }), e.\u0275\u0275text(3, "Remove"), e.\u0275\u0275elementEnd()();
} if (n & 2) {
    let t = p.$implicit, i = p.index, o = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("formControlName", i)("pluginName", t.contentPlugin)("settings", t.settings)("name", t.name)("label", t.label)("contexts", t.contexts)("panes", o.panes)("resolvedContext", t.resolvedContext)("indexPosition", i)("ancestory", o.ancestory);
} }
function et(n, p) { if (n & 1 && (e.\u0275\u0275elementStart(0, "mat-error"), e.\u0275\u0275element(1, "druid-ordain-default-validation-error", 2), e.\u0275\u0275elementEnd()), n & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("validators", t.formSettings$.value == null || t.formSettings$.value.validation == null ? null : t.formSettings$.value.validation.validators)("errors", t.formControl.errors)("resolvedContext", t.resolvedContext$.value);
} }
function tt(n, p) { if (n & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 9), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), n & 2) {
    let t = p.$implicit;
    e.\u0275\u0275property("value", t), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t);
} }
function it(n, p) { if (n & 1 && (e.\u0275\u0275elementStart(0, "mat-radio-button", 2), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), n & 2) {
    let t = p.$implicit;
    e.\u0275\u0275property("value", t.value), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label);
} }
function nt(n, p) { if (n & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 4), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), n & 2) {
    let t = p.$implicit;
    e.\u0275\u0275property("value", t), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label);
} }
function ot(n, p) { if (n & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "ngx-dropzone-image-preview", 4), e.\u0275\u0275listener("removed", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext().$implicit, r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r.onRemove(o)); }), e.\u0275\u0275elementStart(1, "ngx-dropzone-label"), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()();
} if (n & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275property("file", t)("removable", !0), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate2("", t.name, " (", t.type, ")");
} }
function rt(n, p) { if (n & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "ngx-dropzone-video-preview", 4), e.\u0275\u0275listener("removed", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext().$implicit, r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r.onRemove(o)); }), e.\u0275\u0275elementStart(1, "ngx-dropzone-label"), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()();
} if (n & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275property("file", t)("removable", !0), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate2("", t.name, " (", t.type, ")");
} }
function at(n, p) { if (n & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "ngx-dropzone-preview", 5), e.\u0275\u0275listener("removed", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext().$implicit, r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r.onRemove(o)); }), e.\u0275\u0275elementStart(1, "ngx-dropzone-label"), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()();
} if (n & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275property("removable", !0), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate2("", t.name, " (", t.type, ")");
} }
function st(n, p) { if (n & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, ot, 3, 4, "ngx-dropzone-image-preview", 2)(2, rt, 3, 4, "ngx-dropzone-video-preview", 2)(3, at, 3, 3, "ngx-dropzone-preview", 3), e.\u0275\u0275elementContainerEnd()), n & 2) {
    let t = p.$implicit, i = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", i.isType(t, "image")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", i.isType(t, "video")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !i.isType(t, "image") && !i.isType(t, "video"));
} }
var R = class {
    constructor(p) { p && (this.value = p.value ? p.value : "", p.datasourceBinding && typeof p.datasourceBinding == "object" && (this.datasourceBinding = new Me(p.datasourceBinding)), p.datasourceOptions && typeof p.datasourceOptions == "object" && (this.datasourceOptions = new je(p.datasourceOptions)), p.validation && (this.validation = new q(p.validation))); }
}, Z = class {
    constructor(p) { p && (this.valuesMapping = p.valuesMapping); }
}, F = (() => { class n {
    constructor(t, i, o, r) { this.tokenizerService = t, this.datasourceContentHandler = i, this.panelResolver = o, this.attributeSerializer = r; }
    resolveElementOptions(t, i) { return y(t).pipe($(o => { if (o.datasourceBinding && o.datasourceBinding.id && o.datasourceBinding.id !== "") {
        let r = i.has("panes") ? i.get("panes").find(c => c.name === o.datasourceBinding.id) : void 0;
        return this.panelResolver.dataPanes(i.get("panes")).pipe($(c => r ? this.datasourceContentHandler.fetchDynamicData(r.settings, new Map([...i, ["dataPanes", c]])) : y([])), C(c => [o, c.results]));
    }
    else
        return y([o, []]); }), C(([o, r]) => [o, o.datasourceOptions && o.datasourceOptions.query !== "" ? ee.JSONPath({ path: o.datasourceOptions.query, json: r }) : r]), $(([o, r]) => this.mapDataOptions(o, r))); }
    mapDataOptions(t, i) { return y([t, i]).pipe(C(([o, r]) => [o, r, r ? r.map(c => this.tokenizerService.generateGenericTokens(c)) : []]), C(([o, r, c]) => c.map(d => this.mapDataItem(o, d)))); }
    mapDataItem(t, i) { return new De({ value: this.tokenizerService.replaceTokens(`${t.datasourceOptions.valueMapping}`, i), label: this.tokenizerService.replaceTokens(`${t.datasourceOptions.labelMapping}`, i), dataItem: void 0 }); }
    hasDataOptions(t) { return t.datasourceBinding && t.datasourceBinding.id && t.datasourceBinding.id !== ""; }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275inject(b.TokenizerService), e.\u0275\u0275inject(E.DatasourceContentHandler), e.\u0275\u0275inject(E.PanelResolverService), e.\u0275\u0275inject(h.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), I = (() => { class n {
    constructor(t) { this.tokenizerService = t, this.cachedResolvedContexts = [], this.scheduleResolution$ = new D, this.scheduleResolutionSub = this.scheduleResolution$.pipe(V(({ resolvedContext: i, index: o }) => { let r = new Map; if (i)
        for (let c in i)
            i[c] instanceof He || (r = new Map([...r, ...this.tokenizerService.generateGenericTokens(i[c], c === "_root" ? "" : c)])); this.cachedResolvedContexts[o].resolution$.next(r); })).subscribe(); }
    resolveContexts({ resolvedContext: t }) { let i = this.cachedResolvedContexts.findIndex(({ rContext: o }) => ue.getDiff(o, t).length === 0); return i === -1 ? (console.log("resolved context no cache", t), i = this.cachedResolvedContexts.length, this.cachedResolvedContexts.push({ rContext: t, resolution$: new Ae }), this.scheduleResolution$.next({ resolvedContext: t, index: i })) : console.log("resolved context cache hit", t), this.cachedResolvedContexts[i].resolution$.pipe(ke(1)); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275inject(b.TokenizerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), w = (() => { class n {
    set label(t) { this.label$.next(t); }
    set settings(t) { this.settings$.next(t); }
    set panes(t) { this.panes$.next(t); }
    set originPanes(t) { this.originPanes$.next(t); }
    set contexts(t) { this.contexts$.next(t); }
    set resolvedContext(t) { this.resolvedContext$.next(t); }
    constructor(t, i, o, r, c, d) { this.attributeSerializer = t, this.optionsResolver = i, this.tokenizerService = o, this.formsContextHelper = r, this.vpm = c, this.controlContainer = d, this.formControl = new G(""), this.formControlValueChangesSub = this.formControl.valueChanges.pipe(A(s => console.log("serialized form value", this.attributeSerializer.serialize(s, "value"))), A(s => this.controlContainer.control.get("settings").setValue([this.attributeSerializer.serialize(s, "value")]))).subscribe(), this.formSettings$ = new _(void 0), this.settings$ = new _([]), this.options$ = new _([]), this.init$ = new D, this.afterViewInit$ = new D, this.panes$ = new _([]), this.originPanes$ = new _([]), this.contexts$ = new _([]), this.resolvedContext$ = new _(void 0), this.value$ = new D, this.label$ = new _(void 0), this.settingsSub = this.settings$.pipe(C(s => s ? this.settingsToObject(this.attributeSerializer.deserializeAsObject(s)) : void 0), A(s => this.formSettings$.next(s))).subscribe(), this.loadOptionsSub = J([this.formSettings$, this.panes$, this.originPanes$, this.contexts$, this.init$]).pipe(C(([s, l, m, f]) => ({ settings: s, metadata: new Map([["panes", [...l && Array.isArray(l) ? l : [], ...m && Array.isArray(m) ? m : []]], ["contexts", f]]) })), $(({ settings: s, metadata: l }) => this.optionsResolver.resolveElementOptions(s, l)), A(s => this.options$.next(s))).subscribe(), this.renderContentSub = J([this.formSettings$, this.resolvedContext$, this.afterViewInit$]).pipe(C(([s, l]) => ({ settings: s, resolvedContext: l })), $(({ settings: s, resolvedContext: l }) => this.formsContextHelper.resolveContexts({ resolvedContext: l }).pipe(C(m => ({ settings: s, tokens: m })))), $(({ settings: s, tokens: l }) => le(s.validation && s.validation.validators ? s.validation.validators.map(m => this.vpm.getPlugin(m.validator).pipe($(f => f.builder({ v: m, serialized: !1 }).pipe(C(S => ({ v: m, vf: S })))))) : []).pipe(C(m => ({ settings: s, tokens: l, validators: m })), pe({ settings: s, tokens: l, validators: [] }))), $(({ settings: s, tokens: l, validators: m }) => le(s.validation && s.validation.validators ? s.validation.validators.map(f => this.vpm.getPlugin(f.validator).pipe($(S => S.builder({ v: f, serialized: !0 }).pipe(C(L => ({ v: f, vf: L })))))) : []).pipe(C(f => ({ settings: s, tokens: l, validators: m, validatorsSerialized: f })), pe({ settings: s, tokens: l, validators: m, validatorsSerialized: [] }))), A(({ settings: s, tokens: l, validators: m, validatorsSerialized: f }) => { if (this.formControl.setAsyncValidators(m.map(({ vf: S }) => S)), this.controlContainer.control.get("settings").setAsyncValidators(f.map(({ vf: S }) => S)), this.formControl.updateValueAndValidity(), this.controlContainer.control.updateValueAndValidity(), l !== void 0 && (this.tokens = l), s.value && s.value !== null && s.value !== "") {
        (s.value.indexOf(".$i.") !== -1 || s.value.indexOf(".$j.") !== -1 || s.value.indexOf(".$k.") !== -1) && console.log(s.value, this.ancestory);
        let S = s.value.split("$i"), L = S.map((T, x) => this.ancestory[x * 1 + (3 + (x === 0 ? 0 : 3))]), H = S.reduce((T, x, P) => [...T, P === 0 ? "" : P - 1 < L.length ? `${L[P - 1]}` : "", x], []).join("");
        console.log("path", H);
        let Q = this.replaceTokens(H);
        this.formControl.setValue(Q);
        let U = this.tokenizerService.discoverTokens(Q, !0);
        if (U.length !== 0)
            if (U[0].trim().lastIndexOf(".id") === U[0].trim().length - 3) {
                let T = se();
                this.formControl.setValue(T), this.value$.next(T);
            }
            else {
                let T = Array.from(l).filter(([x]) => x.indexOf(H.substr(1, H.length - 2)) === 0);
                if (T.length !== 0) {
                    let x = T.reduce((P, [ne, be]) => re(oe({}, P), { [ne.substr(ne.lastIndexOf(".") + 1)]: be }), {});
                    this.formControl.setValue(x), this.value$.next(x);
                }
                else {
                    let x = this.tokenizerService.replaceTokens(s.value, new Map(Array.from(U).map(P => [P, ""])));
                    this.formControl.setValue(x), this.value$.next(x);
                }
            }
        else
            this.value$.next(Q);
    }
    else
        this.formControl.setValue(""); }), Be(1)).subscribe(); }
    ngOnInit() { this.init$.next(void 0); }
    ngAfterViewInit() { this.afterViewInit$.next(void 0); }
    settingsToObject(t) { return new R(t); }
    replaceTokens(t) { return this.tokens !== void 0 && this.tokens.forEach((i, o) => { t = t.split(`[${o}]`).join(`${i}`); }), t; }
    markAsTouched() { this.formControl.markAllAsTouched(); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(I), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275dir = e.\u0275\u0275defineDirective({ type: n, selectors: [["", "druid-forms-form-element-base", ""]], inputs: { tokens: "tokens", label: "label", settings: "settings", panes: "panes", originPanes: "originPanes", contexts: "contexts", resolvedContext: "resolvedContext", ancestory: "ancestory" }, standalone: !1 }); }
} return n; })(), lt = (() => { class n extends w {
    constructor(t, i, o, r, c, d) { super(t, i, o, r, c, d); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(I), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-input"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 5, consts: [["matInput", "", 3, "formControl"], [4, "ngIf"], [3, "validators", "errors", "resolvedContext"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label"), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(4, "input", 0), e.\u0275\u0275template(5, Xe, 2, 3, "mat-error", 1), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 3, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", o.formControl.invalid)); }, dependencies: [v.NgIf, a.DefaultValueAccessor, a.NgControlStatus, a.FormControlDirective, u.MatInput, u.MatFormField, u.MatLabel, u.MatError, g.DefaultValidationError, v.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{display:block}"] }); }
} return n; })(), ct = (() => { class n extends w {
    constructor(t, i, o, r, c, d) { super(t, i, o, r, c, d); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(I), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-select"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 7, consts: [[3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label"), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(4, "mat-select", 0), e.\u0275\u0275template(5, Ye, 2, 2, "mat-option", 1), e.\u0275\u0275pipe(6, "async"), e.\u0275\u0275elementEnd()()), i & 2 && (e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 3, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(6, 5, o.options$))); }, dependencies: [v.NgForOf, a.NgControlStatus, a.FormControlDirective, k.MatOption, u.MatFormField, u.MatLabel, te.MatSelect, v.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{display:block}"] }); }
} return n; })(), pt = (() => { class n {
    set settings(t) { this.settings$.next(t); }
    set resolvedContext(t) { this.resolvedContext$.next(t); }
    set panel(t) { this.panel$.next(t); }
    get panesFormArray() { let t = this.controlContainer?.control; return t ? t.get("panes") : null; }
    constructor(t, i, o) { this.attributeSerializer = t, this.fb = i, this.controlContainer = o, this.panes = [], this.originMappings = [], this.ancestory = [], this.add$ = new D, this.remove$ = new D, this.settings$ = new _([]), this.resolvedContext$ = new _(null), this.panel$ = new _(null), this.afterViewInit$ = new D, this.destroy$ = new D; }
    ngOnInit() { this.add$.pipe(Y(this.destroy$)).subscribe(() => { let t = this.panes && this.panes.length > 0 ? new B(this.panes[0]) : new B; this.panes.push(t), this.syncFormArray(); }), this.remove$.pipe(Y(this.destroy$)).subscribe(t => { t > -1 && t < this.panes.length && (this.panes.splice(t, 1), this.syncFormArray()); }), J([this.settings$.pipe(C(t => t ? new Z(this.attributeSerializer.deserializeAsObject(t)) : void 0)), this.resolvedContext$, this.panel$, this.afterViewInit$]).pipe(C(([t, i, o]) => { if (i && t?.valuesMapping?.trim()) {
        let r = t.valuesMapping.split("[$i]"), c = r.map((l, m) => this.ancestory[m * 1 + 3]), d = r.reduce((l, m, f) => [...l, f === 0 ? "" : f - 1 < c.length ? `[${c[f - 1]}]` : "", m], []).join("");
        return { items: ee.JSONPath({ path: `$.${d}.*`, json: i }) };
    } return { items: [] }; }), A(({ items: t }) => { if (t && t.length > this.panes.length) {
        let i = t.length - this.panes.length;
        for (let o = 0; o < i; o++) {
            let r = this.panes.length > 0 ? this.panes[0] : new B;
            this.panes.push(new B(r));
        }
        this.syncFormArray();
    } }), Y(this.destroy$)).subscribe(); }
    ngOnChanges(t) { t.panes && this.syncFormArray(); }
    ngAfterViewInit() { this.afterViewInit$.next(void 0); }
    ngOnDestroy() { this.destroy$.next(), this.destroy$.complete(); }
    syncFormArray() { let t = this.panesFormArray; if (!t || !this.panes)
        return; let i = this.panes.length, o = t.length; if (i > o)
        for (let r = o; r < i; r++)
            t.push(this.fb.control(""), { emitEvent: !1 });
    else if (i < o)
        for (let r = o - 1; r >= i; r--)
            t.removeAt(r, { emitEvent: !1 }); }
    trackByFn(t) { return t; }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(a.UntypedFormBuilder), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-form-section"]], inputs: { panes: "panes", originPanes: "originPanes", originMappings: "originMappings", ancestory: "ancestory", settings: "settings", resolvedContext: "resolvedContext", panel: "panel" }, standalone: !1, features: [e.\u0275\u0275NgOnChangesFeature], decls: 5, vars: 2, consts: [[3, "formGroup"], ["formArrayName", "panes"], [4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [3, "formControlName", "pluginName", "settings", "name", "label", "contexts", "panes", "resolvedContext", "indexPosition", "ancestory"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementContainerStart(0, 0)(1, 1), e.\u0275\u0275template(2, Ze, 4, 10, "div", 2), e.\u0275\u0275elementContainerEnd()(), e.\u0275\u0275elementStart(3, "button", 3), e.\u0275\u0275listener("click", function () { return o.add$.next(void 0); }), e.\u0275\u0275text(4, "Add Item"), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("formGroup", o.controlContainer.control), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", o.panes)); }, dependencies: [v.NgForOf, a.NgControlStatus, a.NgControlStatusGroup, a.FormGroupDirective, a.FormControlName, a.FormArrayName, fe.RenderPaneComponent], encapsulation: 2 }); }
} return n; })(), dt = (() => { class n extends w {
    constructor(t, i, o, r, c, d) { super(t, i, o, r, c, d), this.cols = 20, this.rows = 20; }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(I), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-textarea"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 7, consts: [["matInput", "", 3, "formControl", "cols", "rows"], [4, "ngIf"], [3, "validators", "errors", "resolvedContext"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label"), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(4, "textarea", 0), e.\u0275\u0275template(5, et, 2, 3, "mat-error", 1), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 5, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("formControl", o.formControl)("cols", o.cols)("rows", o.rows), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", o.formControl.invalid)); }, dependencies: [v.NgIf, a.DefaultValueAccessor, a.NgControlStatus, a.FormControlDirective, u.MatInput, u.MatFormField, u.MatLabel, u.MatError, g.DefaultValidationError, v.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{display:block}"] }); }
} return n; })(), mt = (() => { class n {
    constructor(t) { this.attributeSerializer = t; }
    handleFile(t) { return y([]); }
    handlesType(t) { return !1; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(t) { return y(!1); }
    isDynamic(t) { return !1; }
    isData(t) { return !1; }
    getBindings(t, i, o) { return i === "pane" ? this.toObject(t).pipe($(r => Pe(() => r.datasourceBinding && r.datasourceBinding.id && r.datasourceBinding.id !== null, y([r.datasourceBinding]), y([])))) : i === "context" ? y([]) : y([]); }
    fetchDynamicData(t, i) { return y(new ze); }
    buildDynamicItems(t, i) { return y([]); }
    toObject(t) { return y(new R(this.attributeSerializer.deserializeAsObject(t))); }
    buildSettings(t) { return this.attributeSerializer.serialize(t, "root").attributes; }
    stateDefinition(t) { return y({ autocomplete: { input: "" }, value: void 0 }); }
    editorOptions(t) { return y(new we); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275inject(h.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac }); }
} return n; })(), ye = (() => { class n extends mt {
    static { this.\u0275fac = (() => { let t; return function (o) { return (t || (t = e.\u0275\u0275getInheritedFactory(n)))(o || n); }; })(); }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), j = (() => { class n {
    get paneGroup() { return this.data.panelFormGroup.get("panes").at(this.paneIndex); }
    constructor(t, i, o, r, c) { this.data = t, this.dialogRef = i, this.fb = o, this.handler = r, this.attributeSerializer = c, this.datasourceOptions = X, this.validation = new q({ validators: [] }), this.bindableOptions = [], this.formGroup = this.fb.group({ value: this.fb.control(""), datasourceOptions: this.fb.control(""), validation: this.fb.control(""), datasourceBinding: this.fb.group({ id: this.fb.control(""), type: this.fb.control("pane") }) }), this.paneIndex = t.paneIndex, this.pane = t.pane; }
    ngOnInit() { this.data.pane ? this.handler.toObject(this.data.pane.settings).subscribe(t => { console.log("Form Editor Data Pane Data", t), this.formGroup.patchValue({ value: t.value, datasourceOptions: t.datasourceOptions || X, datasourceBinding: { id: t.datasourceBinding?.id || "", type: "pane" } }), this.datasourceOptions = t.datasourceOptions || X, this.validation = t.validation ? new q(t.validation) : new q({ validators: [] }); }) : (this.data.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: this.data.plugin.id, name: new G(""), label: new G(""), rule: new G(""), settings: this.fb.array([]) })), this.paneIndex = this.data.panelFormGroup.get("panes").length - 1, this.pane = new B(this.data.panelFormGroup.get("panes").at(this.paneIndex).value)), this.bindableOptions = this.data.panelFormGroup.get("panes").controls.reduce((t, i) => i.get("name").value ? [...t, i.get("name").value] : t, []); }
    submit() { console.log(this.formGroup.value); let t = new R(this.formGroup.value); console.log("losing options debug", t), this.paneGroup.get("settings").clear(), this.handler.buildSettings(t).map(o => this.attributeSerializer.convertToGroup(o)).forEach(o => this.paneGroup.get("settings").push(o)), this.dialogRef.close(); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(ve), e.\u0275\u0275directiveInject(z.MatDialogRef), e.\u0275\u0275directiveInject(a.UntypedFormBuilder), e.\u0275\u0275directiveInject(ye), e.\u0275\u0275directiveInject(h.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-element-editor"]], inputs: { bindableOptions: "bindableOptions" }, standalone: !1, decls: 17, vars: 3, consts: [[3, "ngSubmit", "formGroup"], ["fxLayout", "column"], ["matInput", "", "formControlName", "value"], ["formGroupName", "datasourceBinding"], ["required", "", "formControlName", "id"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "datasourceOptions"], ["formControlName", "validation", 3, "validation"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", ""], [3, "value"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return o.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content", 1)(2, "div")(3, "mat-form-field")(4, "mat-label"), e.\u0275\u0275text(5, "Value"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(6, "input", 2), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(7, "mat-form-field", 3)(8, "mat-label"), e.\u0275\u0275text(9, "Datasource"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(10, "mat-select", 4), e.\u0275\u0275template(11, tt, 2, 2, "mat-option", 5), e.\u0275\u0275elementEnd()(), e.\u0275\u0275element(12, "classifieds-ui-datasource-options", 6)(13, "druid-ordain-validation-editor", 7), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(14, "mat-dialog-actions")(15, "button", 8), e.\u0275\u0275text(16, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", o.formGroup), e.\u0275\u0275advance(11), e.\u0275\u0275property("ngForOf", o.bindableOptions), e.\u0275\u0275advance(2), e.\u0275\u0275property("validation", o.validation)); }, dependencies: [v.NgForOf, a.\u0275NgNoValidate, a.DefaultValueAccessor, a.NgControlStatus, a.NgControlStatusGroup, a.RequiredValidator, a.FormGroupDirective, a.FormControlName, a.FormGroupName, k.MatOption, ie.MatButton, z.MatDialogClose, z.MatDialogActions, z.MatDialogContent, u.MatInput, u.MatFormField, u.MatLabel, te.MatSelect, me.DatasourceOptionsComponent, g.ValidationEditorComponent], encapsulation: 2 }); }
} return n; })(), ut = (() => { class n extends w {
    constructor(t, i, o, r, c, d) { super(t, i, o, r, c, d); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(I), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-radiogroup"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 7, consts: [[3, "formControl", "aria-label"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "mat-radio-group", 0), e.\u0275\u0275pipe(1, "async"), e.\u0275\u0275template(2, it, 2, 2, "mat-radio-button", 1), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275ariaProperty("aria-label", e.\u0275\u0275pipeBind1(1, 3, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(3, 5, o.options$))); }, dependencies: [v.NgForOf, a.NgControlStatus, a.FormControlDirective, W.MatRadioGroup, W.MatRadioButton, v.AsyncPipe], encapsulation: 2 }); }
} return n; })(), ft = (() => { class n extends w {
    constructor(t, i, o, r, c, d) { super(t, i, o, r, c, d); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(I), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-slider"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 4, consts: [[3, "formControl", "aria-label"], ["matSliderThumb", ""]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "mat-slider", 0), e.\u0275\u0275pipe(1, "async"), e.\u0275\u0275element(2, "input", 1), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275ariaProperty("aria-label", e.\u0275\u0275pipeBind1(1, 2, o.label$))); }, dependencies: [a.NgControlStatus, a.FormControlDirective, K.MatSlider, K.MatSliderThumb, v.AsyncPipe], styles: ["mat-slider[_ngcontent-%COMP%]{display:block}"] }); }
} return n; })(), vt = (() => { class n extends w {
    constructor(t, i, o, r, c, d) { super(t, i, o, r, c, d); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(I), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-toggle"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 4, consts: [[1, "toggle-container"], [3, "formControl"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "mat-slide-toggle", 1), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd()()), i & 2 && (e.\u0275\u0275advance(), e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 2, o.label$))); }, dependencies: [a.NgControlStatus, a.FormControlDirective, ge.MatSlideToggle, v.AsyncPipe], styles: [".toggle-container[_ngcontent-%COMP%]{padding-bottom:1em}"] }); }
} return n; })(), gt = (() => { class n extends w {
    constructor(t, i, o, r, c, d) { super(t, i, o, r, c, d); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(I), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-checkbox"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 4, consts: [[3, "formControl"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "mat-checkbox", 0), e.\u0275\u0275text(1), e.\u0275\u0275pipe(2, "async"), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(2, 2, o.label$))); }, dependencies: [a.NgControlStatus, a.FormControlDirective, he.MatCheckbox, v.AsyncPipe], encapsulation: 2 }); }
} return n; })(), ht = (() => { class n extends w {
    constructor(t, i, o, r, c, d) { super(t, i, o, r, c, d); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(I), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-datepicker"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 6, consts: [["picker", ""], ["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"]], template: function (i, o) { if (i & 1 && (e.\u0275\u0275elementStart(0, "mat-form-field", 1)(1, "mat-label"), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(4, "input", 2)(5, "mat-datepicker-toggle", 3)(6, "mat-datepicker", null, 0), e.\u0275\u0275elementEnd()), i & 2) {
            let r = e.\u0275\u0275reference(7);
            e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 4, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("matDatepicker", r)("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275property("for", r);
        } }, dependencies: [a.DefaultValueAccessor, a.NgControlStatus, a.FormControlDirective, N.MatDatepicker, N.MatDatepickerInput, N.MatDatepickerToggle, u.MatInput, u.MatFormField, u.MatLabel, u.MatSuffix, v.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{display:block}"] }); }
} return n; })(), Ct = (() => { class n extends w {
    constructor(t, i, o, r, c, d) { super(t, i, o, r, c, d), this.proxyControl = new G(""), this.optionSelected$ = new D, this.proxyControlValueChangesSub = this.proxyControl.valueChanges.pipe(Ge(1e3), Re(), Le(J([this.formSettings$, this.panes$, this.originPanes$, this.contexts$]).pipe(C(([s, l, m, f]) => ({ settings: s, panes: l, originPanes: m, contexts: f })))), C(([s, { settings: l, panes: m, originPanes: f, contexts: S }]) => ({ term: s, settings: l, metadata: new Map([["panes", [...m && Array.isArray(m) ? m : [], ...f && Array.isArray(f) ? f : []]], ["contexts", S], ["inputparams", new Map([["term", new Je({ flags: [], mapping: new We({ value: s, testValue: s, type: "static", context: void 0 }) })]])]]) })), $(({ settings: s, metadata: l }) => this.optionsResolver.resolveElementOptions(s, l)), A(s => this.options$.next(s))).subscribe(), this.optionSelectedSub = this.optionSelected$.pipe(A(s => this.formControl.setValue(s.option && s.option.value ? s.option.value.value : ""))).subscribe(), this.displayAuto = s => s.label; }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(I), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-autocomplete"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 9, consts: [["autocomplete", "matAutocomplete"], ["matInput", "", 3, "matAutocomplete", "formControl"], [3, "optionSelected", "displayWith"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function (i, o) { if (i & 1) {
            let r = e.\u0275\u0275getCurrentView();
            e.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label"), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(4, "input", 1), e.\u0275\u0275elementStart(5, "mat-autocomplete", 2, 0), e.\u0275\u0275listener("optionSelected", function (d) { return e.\u0275\u0275restoreView(r), e.\u0275\u0275resetView(o.optionSelected$.next(d)); }), e.\u0275\u0275template(7, nt, 2, 2, "mat-option", 3), e.\u0275\u0275pipe(8, "async"), e.\u0275\u0275elementEnd()();
        } if (i & 2) {
            let r = e.\u0275\u0275reference(6);
            e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 5, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("matAutocomplete", r)("formControl", o.proxyControl), e.\u0275\u0275advance(), e.\u0275\u0275property("displayWith", o.displayAuto), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(8, 7, o.options$));
        } }, dependencies: [v.NgForOf, a.DefaultValueAccessor, a.NgControlStatus, a.FormControlDirective, k.MatAutocomplete, k.MatOption, k.MatAutocompleteTrigger, u.MatInput, u.MatFormField, u.MatLabel, v.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{display:block}"] }); }
} return n; })(), yt = (() => { class n extends w {
    constructor(t, i, o, r, c, d, s) { super(t, i, r, c, d, s), this.files = [], this.select$ = new D, this.selectSub = this.select$.pipe(V(l => console.log(l)), Ve(l => this.filesService.bulkUpload({ files: [l.addedFiles[0]] }).pipe(ce(m => ({ mfs: m, e: l })))), V(({ mfs: l }) => this.formControl.setValue(l[0])), V(({ e: l }) => this.files.push(...l.addedFiles))).subscribe(), this.valueSub = this.value$.pipe(Ee(l => typeof l == "object"), ce(l => new Ke(l)), V(l => { console.log("populate value", l); }), Ne(l => this.filesService.convertToFiles([l])), V(l => { console.log("populate as file", l), this.files = l; })).subscribe(), this.filesService = o; }
    onSelect(t) { this.select$.next(t); }
    onRemove(t) { console.log(t), this.formControl.setValue(""), this.files.splice(this.files.indexOf(t), 1); }
    isType(t, i) { switch (i) {
        case "image": return this.filesService.isImage({ file: t });
        case "video": return this.filesService.isVideo({ file: t });
        default: return !1;
    } }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(Ce.FilesService), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(I), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-media"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 1, consts: [[3, "change"], [4, "ngFor", "ngForOf"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed", 4, "ngIf"], [3, "removable", "removed", 4, "ngIf"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "removed", "file", "removable"], [3, "removed", "removable"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "ngx-dropzone", 0), e.\u0275\u0275listener("change", function (c) { return o.onSelect(c); }), e.\u0275\u0275elementStart(1, "ngx-dropzone-label"), e.\u0275\u0275text(2, "Drop it, baby!"), e.\u0275\u0275elementEnd(), e.\u0275\u0275template(3, st, 4, 3, "ng-container", 1), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275advance(3), e.\u0275\u0275property("ngForOf", o.files)); }, dependencies: [v.NgForOf, v.NgIf, O.NgxDropzoneComponent, O.NgxDropzoneLabelDirective, O.NgxDropzonePreviewComponent, O.NgxDropzoneImagePreviewComponent, O.NgxDropzoneVideoPreviewComponent], encapsulation: 2 }); }
} return n; })(), bt = (() => { class n extends w {
    constructor(t, i, o, r, c, d) { super(t, i, o, r, c, d); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(I), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-hidden"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function (i, o) { }, encapsulation: 2 }); }
} return n; })(), St = (() => { class n {
    constructor(t, i, o, r) { this.data = t, this.dialogRef = i, this.fb = o, this.attributeSerializer = r, this.contexts = [], this.formGroup = this.fb.group({ valuesMapping: this.fb.control("") }); }
    ngOnInit() { }
    submit() { this.data.panelFormGroup.get("settings").clear(), this.attributeSerializer.serialize(this.formGroup.value, "root").attributes.forEach(t => { console.log("formly repeating editor form"), console.log(this.attributeSerializer.convertToGroup(t)), this.data.panelFormGroup.get("settings").push(this.attributeSerializer.convertToGroup(t)); }); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(ve), e.\u0275\u0275directiveInject(z.MatDialogRef), e.\u0275\u0275directiveInject(a.UntypedFormBuilder), e.\u0275\u0275directiveInject(h.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-form-section-editor"]], standalone: !1, decls: 8, vars: 2, consts: [[3, "ngSubmit", "formGroup"], ["matInput", "", "formControlName", "valuesMapping"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return o.submit(); }), e.\u0275\u0275elementStart(1, "div")(2, "mat-form-field")(3, "mat-label"), e.\u0275\u0275text(4, "Values Mapping"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(5, "input", 1), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(6, "button", 2), e.\u0275\u0275text(7, "Save"), e.\u0275\u0275elementEnd()()), i & 2 && (e.\u0275\u0275property("formGroup", o.formGroup), e.\u0275\u0275advance(6), e.\u0275\u0275property("disabled", !o.formGroup.valid)); }, dependencies: [a.\u0275NgNoValidate, a.DefaultValueAccessor, a.NgControlStatus, a.NgControlStatusGroup, a.FormGroupDirective, a.FormControlName, ie.MatButton, z.MatDialogClose, u.MatInput, u.MatFormField, u.MatLabel], encapsulation: 2 }); }
} return n; })(), xt = ({ handler: n }) => new M({ id: "form_input", title: "Form Input", selectionComponent: void 0, editorComponent: j, renderComponent: lt, handler: n }), Ft = ({ handler: n }) => new M({ id: "form_select", title: "Form Select", selectionComponent: void 0, editorComponent: j, renderComponent: ct, handler: n }), It = ({ handler: n }) => new M({ id: "form_radiogroup", title: "Form Radiogroup", selectionComponent: void 0, editorComponent: j, renderComponent: ut, handler: n }), _t = ({ handler: n }) => new M({ id: "form_textarea", title: "Form Textarea", selectionComponent: void 0, editorComponent: j, renderComponent: dt, handler: n }), $t = ({ handler: n }) => new M({ id: "form_slider", title: "Form Slider", selectionComponent: void 0, editorComponent: j, renderComponent: ft, handler: n }), Mt = ({ handler: n }) => new M({ id: "form_toggle", title: "Form Toggle", selectionComponent: void 0, editorComponent: j, renderComponent: vt, handler: n }), wt = ({ handler: n }) => new M({ id: "form_checkbox", title: "Form Checkbox", selectionComponent: void 0, editorComponent: j, renderComponent: gt, handler: n }), jt = ({ handler: n }) => new M({ id: "form_datepicker", title: "Form Datepicker", selectionComponent: void 0, editorComponent: j, renderComponent: ht, handler: n }), Dt = ({ handler: n }) => new M({ id: "form_autocomplete", title: "Form Autocomplete", selectionComponent: void 0, editorComponent: j, renderComponent: Ct, handler: n }), zt = ({ handler: n }) => new M({ id: "form_media", title: "Form Media", selectionComponent: void 0, editorComponent: j, renderComponent: yt, handler: n }), Ot = ({ handler: n }) => new M({ id: "form_hidden", title: "Form Hidden", selectionComponent: void 0, editorComponent: j, renderComponent: bt, handler: n }), Tt = () => new Ue({ id: "form_section", name: "form_section", title: "Form Section", editorComponent: St, renderComponent: pt }), ii = (() => { class n {
    constructor(t, i, o) { [xt({ handler: o }), Ft({ handler: o }), _t({ handler: o }), It({ handler: o }), $t({ handler: o }), Mt({ handler: o }), wt({ handler: o }), jt({ handler: o }), Dt({ handler: o }), zt({ handler: o }), Ot({ handler: o })].forEach(r => t.register(r)), [Tt()].forEach(r => i.register(r)); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275inject(de.ContentPluginManager), e.\u0275\u0275inject(E.StylePluginManager), e.\u0275\u0275inject(ye)); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: n }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ imports: [Fe, Ie, _e, $e, qe, Oe, Qe, Te] }); }
} return n; })();
export { mt as AbstractFormContentHandler, Ct as FormAutocompleteComponent, gt as FormCheckboxComponent, ht as FormDatepickerComponent, w as FormElementBase, j as FormElementEditorComponent, ye as FormElementHandler, bt as FormHiddenComponent, lt as FormInputComponent, yt as FormMediaComponent, ut as FormRadiogroupComponent, pt as FormSectionComponent, St as FormSectionEditorComponent, ct as FormSelectComponent, ft as FormSliderComponent, dt as FormTextareaComponent, vt as FormToggleComponent, ii as FormsModule, F as OptionsResolverService };
//# sourceMappingURL=_rollthecloudinc_forms.U5a-reLATW.js.map
