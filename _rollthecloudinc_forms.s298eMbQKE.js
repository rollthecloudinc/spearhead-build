import { a as Se } from "@nf-internal/chunk-6A46ZHUO";
import { a as ye } from "@nf-internal/chunk-CAFTJBEE";
import { a as re } from "@nf-internal/chunk-7XNIKSHD";
import { a as ie, b as ne, h as oe } from "@nf-internal/chunk-GL2BOVXA";
import * as f from "@angular/common";
import { CommonModule as xe } from "@angular/common";
import * as e from "@angular/core";
import "@angular/core";
import * as a from "@angular/forms";
import { UntypedFormControl as R, FormsModule as Fe, ReactiveFormsModule as Ie } from "@angular/forms";
import { MaterialModule as _e } from "@rollthecloudinc/material";
import * as ce from "@rollthecloudinc/content";
import { ContentBinding as Me, ContentPluginEditorOptions as $e, ContentPlugin as w } from "@rollthecloudinc/content";
import * as pe from "@rollthecloudinc/datasource";
import { DatasourceOptions as we, SelectOption as je, Dataset as De, mockDatasourceOptions as Q, DatasourceModule as ze } from "@rollthecloudinc/datasource";
import * as h from "@rollthecloudinc/ordain";
import { FormValidation as U, OrdainModule as Te } from "@rollthecloudinc/ordain";
import { of as y, Subject as I, tap as N, ReplaySubject as Oe, take as Ae, BehaviorSubject as O, combineLatest as q, forkJoin as ae, iif as ke, mergeMap as Pe, map as se, filter as Ve, switchMap as Ee } from "rxjs";
import { switchMap as $, map as g, tap as x, defaultIfEmpty as le, take as Ne, debounceTime as Be, distinctUntilChanged as Ge, withLatestFrom as Re } from "rxjs/operators";
var Y = oe(ye(), 1), me = oe(Se(), 1);
import * as C from "@rollthecloudinc/attributes";
import * as S from "@rollthecloudinc/token";
import * as B from "@rollthecloudinc/panels";
import { PanelPageForm as Le, Pane as de, StylePlugin as He } from "@rollthecloudinc/panels";
import * as m from "@angular/material/input";
import * as V from "@angular/material/autocomplete";
import * as Z from "@angular/material/select";
import * as ue from "@rollthecloudinc/render";
import { RenderModule as Ue } from "@rollthecloudinc/render";
import * as z from "@angular/material/dialog";
import { MAT_DIALOG_DATA as fe } from "@angular/material/dialog";
import * as ee from "@angular/material/button";
import * as J from "@angular/material/radio";
import * as W from "@angular/material/slider";
import * as ve from "@angular/material/slide-toggle";
import * as ge from "@angular/material/checkbox";
import * as G from "@angular/material/datepicker";
import { Param as qe, Mapping as Je } from "@rollthecloudinc/dparam";
import * as he from "@rollthecloudinc/media";
import { MediaFile as We } from "@rollthecloudinc/media";
import * as T from "ngx-dropzone";
import { NgxDropzoneModule as Ke } from "ngx-dropzone";
function Qe(i, d) { if (i & 1 && (e.\u0275\u0275elementStart(0, "mat-error"), e.\u0275\u0275element(1, "druid-ordain-default-validation-error", 2), e.\u0275\u0275elementEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("validators", t.formSettings$.value == null || t.formSettings$.value.validation == null ? null : t.formSettings$.value.validation.validators)("errors", t.formControl.errors)("resolvedContext", t.resolvedContext$.value);
} }
function Xe(i, d) { if (i & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 2), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let t = d.$implicit;
    e.\u0275\u0275property("value", t.value), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label);
} }
function Ye(i, d) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div"), e.\u0275\u0275element(1, "classifieds-ui-render-pane", 4), e.\u0275\u0275elementStart(2, "button", 3), e.\u0275\u0275listener("click", function () { let o = e.\u0275\u0275restoreView(t).index, r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r.remove$.next(o)); }), e.\u0275\u0275text(3, "Remove"), e.\u0275\u0275elementEnd()();
} if (i & 2) {
    let t = d.$implicit, n = d.index, o = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("formControlName", n)("pluginName", t.contentPlugin)("settings", t.settings)("name", t.name)("label", t.label)("contexts", t.contexts)("panes", o.panes)("resolvedContext", t.resolvedContext)("indexPosition", n)("ancestory", o.ancestory);
} }
function Ze(i, d) { if (i & 1 && (e.\u0275\u0275elementStart(0, "mat-error"), e.\u0275\u0275element(1, "druid-ordain-default-validation-error", 2), e.\u0275\u0275elementEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("validators", t.formSettings$.value == null || t.formSettings$.value.validation == null ? null : t.formSettings$.value.validation.validators)("errors", t.formControl.errors)("resolvedContext", t.resolvedContext$.value);
} }
function et(i, d) { if (i & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 9), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let t = d.$implicit;
    e.\u0275\u0275property("value", t), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t);
} }
function tt(i, d) { if (i & 1 && (e.\u0275\u0275elementStart(0, "mat-radio-button", 2), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let t = d.$implicit;
    e.\u0275\u0275property("value", t.value), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label);
} }
function it(i, d) { if (i & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 4), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let t = d.$implicit;
    e.\u0275\u0275property("value", t), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label);
} }
function nt(i, d) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "ngx-dropzone-image-preview", 4), e.\u0275\u0275listener("removed", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext().$implicit, r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r.onRemove(o)); }), e.\u0275\u0275elementStart(1, "ngx-dropzone-label"), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275property("file", t)("removable", !0), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate2("", t.name, " (", t.type, ")");
} }
function ot(i, d) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "ngx-dropzone-video-preview", 4), e.\u0275\u0275listener("removed", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext().$implicit, r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r.onRemove(o)); }), e.\u0275\u0275elementStart(1, "ngx-dropzone-label"), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275property("file", t)("removable", !0), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate2("", t.name, " (", t.type, ")");
} }
function rt(i, d) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "ngx-dropzone-preview", 5), e.\u0275\u0275listener("removed", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext().$implicit, r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r.onRemove(o)); }), e.\u0275\u0275elementStart(1, "ngx-dropzone-label"), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275property("removable", !0), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate2("", t.name, " (", t.type, ")");
} }
function at(i, d) { if (i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, nt, 3, 4, "ngx-dropzone-image-preview", 2)(2, ot, 3, 4, "ngx-dropzone-video-preview", 2)(3, rt, 3, 3, "ngx-dropzone-preview", 3), e.\u0275\u0275elementContainerEnd()), i & 2) {
    let t = d.$implicit, n = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", n.isType(t, "image")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", n.isType(t, "video")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !n.isType(t, "image") && !n.isType(t, "video"));
} }
var L = class {
    constructor(d) { d && (this.value = d.value ? d.value : "", d.datasourceBinding && typeof d.datasourceBinding == "object" && (this.datasourceBinding = new Me(d.datasourceBinding)), d.datasourceOptions && typeof d.datasourceOptions == "object" && (this.datasourceOptions = new we(d.datasourceOptions)), d.validation && (this.validation = new U(d.validation))); }
}, X = class {
    constructor(d) { d && (this.valuesMapping = d.valuesMapping); }
}, _ = (() => { class i {
    constructor(t, n, o, r) { this.tokenizerService = t, this.datasourceContentHandler = n, this.panelResolver = o, this.attributeSerializer = r; }
    resolveElementOptions(t, n) { return y(t).pipe($(o => { if (o.datasourceBinding && o.datasourceBinding.id && o.datasourceBinding.id !== "") {
        let r = n.has("panes") ? n.get("panes").find(l => l.name === o.datasourceBinding.id) : void 0;
        return this.panelResolver.dataPanes(n.get("panes")).pipe($(l => r ? this.datasourceContentHandler.fetchDynamicData(r.settings, new Map([...n, ["dataPanes", l]])) : y([])), g(l => [o, l.results]));
    }
    else
        return y([o, []]); }), g(([o, r]) => [o, o.datasourceOptions && o.datasourceOptions.query !== "" ? Y.JSONPath({ path: o.datasourceOptions.query, json: r }) : r]), $(([o, r]) => this.mapDataOptions(o, r))); }
    mapDataOptions(t, n) { return y([t, n]).pipe(g(([o, r]) => [o, r, r ? r.map(l => this.tokenizerService.generateGenericTokens(l)) : []]), g(([o, r, l]) => l.map(p => this.mapDataItem(o, p)))); }
    mapDataItem(t, n) { return new je({ value: this.tokenizerService.replaceTokens(`${t.datasourceOptions.valueMapping}`, n), label: this.tokenizerService.replaceTokens(`${t.datasourceOptions.labelMapping}`, n), dataItem: void 0 }); }
    hasDataOptions(t) { return t.datasourceBinding && t.datasourceBinding.id && t.datasourceBinding.id !== ""; }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275inject(S.TokenizerService), e.\u0275\u0275inject(B.DatasourceContentHandler), e.\u0275\u0275inject(B.PanelResolverService), e.\u0275\u0275inject(C.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }); }
} return i; })(), M = (() => { class i {
    constructor(t) { this.tokenizerService = t, this.cachedResolvedContexts = [], this.scheduleResolution$ = new I, this.scheduleResolutionSub = this.scheduleResolution$.pipe(N(({ resolvedContext: n, index: o }) => { let r = new Map; if (n)
        for (let l in n)
            n[l] instanceof Le || (r = new Map([...r, ...this.tokenizerService.generateGenericTokens(n[l], l === "_root" ? "" : l)])); this.cachedResolvedContexts[o].resolution$.next(r); })).subscribe(); }
    resolveContexts({ resolvedContext: t }) { let n = this.cachedResolvedContexts.findIndex(({ rContext: o }) => me.getDiff(o, t).length === 0); return n === -1 ? (console.log("resolved context no cache", t), n = this.cachedResolvedContexts.length, this.cachedResolvedContexts.push({ rContext: t, resolution$: new Oe }), this.scheduleResolution$.next({ resolvedContext: t, index: n })) : console.log("resolved context cache hit", t), this.cachedResolvedContexts[n].resolution$.pipe(Ae(1)); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275inject(S.TokenizerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }); }
} return i; })(), j = (() => { class i {
    set label(t) { this.label$.next(t); }
    set settings(t) { this.settings$.next(t); }
    set panes(t) { this.panes$.next(t); }
    set originPanes(t) { this.originPanes$.next(t); }
    set contexts(t) { this.contexts$.next(t); }
    set resolvedContext(t) { this.resolvedContext$.next(t); }
    constructor(t, n, o, r, l, p) { this.attributeSerializer = t, this.optionsResolver = n, this.tokenizerService = o, this.formsContextHelper = r, this.vpm = l, this.controlContainer = p, this.formControl = new R(""), this.formControlValueChangesSub = this.formControl.valueChanges.pipe(x(s => console.log("serialized form value", this.attributeSerializer.serialize(s, "value"))), x(s => this.controlContainer.control.get("settings").setValue([this.attributeSerializer.serialize(s, "value")]))).subscribe(), this.formSettings$ = new O(void 0), this.settings$ = new O([]), this.options$ = new O([]), this.init$ = new I, this.afterViewInit$ = new I, this.panes$ = new O([]), this.originPanes$ = new O([]), this.contexts$ = new O([]), this.resolvedContext$ = new O(void 0), this.value$ = new I, this.label$ = new O(void 0), this.settingsSub = this.settings$.pipe(g(s => s ? this.settingsToObject(this.attributeSerializer.deserializeAsObject(s)) : void 0), x(s => this.formSettings$.next(s))).subscribe(), this.loadOptionsSub = q([this.formSettings$, this.panes$, this.originPanes$, this.contexts$, this.init$]).pipe(g(([s, c, u, v]) => ({ settings: s, metadata: new Map([["panes", [...c && Array.isArray(c) ? c : [], ...u && Array.isArray(u) ? u : []]], ["contexts", v]]) })), $(({ settings: s, metadata: c }) => this.optionsResolver.resolveElementOptions(s, c)), x(s => this.options$.next(s))).subscribe(), this.renderContentSub = q([this.formSettings$, this.resolvedContext$, this.afterViewInit$]).pipe(g(([s, c]) => ({ settings: s, resolvedContext: c })), $(({ settings: s, resolvedContext: c }) => this.formsContextHelper.resolveContexts({ resolvedContext: c }).pipe(g(u => ({ settings: s, tokens: u })))), $(({ settings: s, tokens: c }) => ae(s.validation && s.validation.validators ? s.validation.validators.map(u => this.vpm.getPlugin(u.validator).pipe($(v => v.builder({ v: u, serialized: !1 }).pipe(g(b => ({ v: u, vf: b })))))) : []).pipe(g(u => ({ settings: s, tokens: c, validators: u })), le({ settings: s, tokens: c, validators: [] }))), $(({ settings: s, tokens: c, validators: u }) => ae(s.validation && s.validation.validators ? s.validation.validators.map(v => this.vpm.getPlugin(v.validator).pipe($(b => b.builder({ v, serialized: !0 }).pipe(g(A => ({ v, vf: A })))))) : []).pipe(g(v => ({ settings: s, tokens: c, validators: u, validatorsSerialized: v })), le({ settings: s, tokens: c, validators: u, validatorsSerialized: [] }))), x(({ settings: s, tokens: c, validators: u, validatorsSerialized: v }) => { if (this.formControl.setAsyncValidators(u.map(({ vf: b }) => b)), this.controlContainer.control.get("settings").setAsyncValidators(v.map(({ vf: b }) => b)), this.formControl.updateValueAndValidity(), this.controlContainer.control.updateValueAndValidity(), c !== void 0 && (this.tokens = c), s.value && s.value !== null && s.value !== "") {
        (s.value.indexOf(".$i.") !== -1 || s.value.indexOf(".$j.") !== -1 || s.value.indexOf(".$k.") !== -1) && console.log(s.value, this.ancestory);
        let b = s.value.split("$i"), A = b.map((P, F) => this.ancestory[F * 1 + (3 + (F === 0 ? 0 : 3))]), k = b.reduce((P, F, E) => [...P, E === 0 ? "" : E - 1 < A.length ? `${A[E - 1]}` : "", F], []).join("");
        console.log("path", k);
        let K = this.replaceTokens(k);
        this.formControl.setValue(K);
        let H = this.tokenizerService.discoverTokens(K, !0);
        if (H.length !== 0)
            if (H[0].trim().lastIndexOf(".id") === H[0].trim().length - 3) {
                let P = re();
                this.formControl.setValue(P), this.value$.next(P);
            }
            else {
                let P = Array.from(c).filter(([F]) => F.indexOf(k.substr(1, k.length - 2)) === 0);
                if (P.length !== 0) {
                    let F = P.reduce((E, [te, be]) => ne(ie({}, E), { [te.substr(te.lastIndexOf(".") + 1)]: be }), {});
                    this.formControl.setValue(F), this.value$.next(F);
                }
                else {
                    let F = this.tokenizerService.replaceTokens(s.value, new Map(Array.from(H).map(E => [E, ""])));
                    this.formControl.setValue(F), this.value$.next(F);
                }
            }
        else
            this.value$.next(K);
    }
    else
        this.formControl.setValue(""); }), Ne(1)).subscribe(); }
    ngOnInit() { this.init$.next(void 0); }
    ngAfterViewInit() { this.afterViewInit$.next(void 0); }
    settingsToObject(t) { return new L(t); }
    replaceTokens(t) { return this.tokens !== void 0 && this.tokens.forEach((n, o) => { t = t.split(`[${o}]`).join(`${n}`); }), t; }
    markAsTouched() { this.formControl.markAllAsTouched(); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(C.AttributeSerializerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(S.TokenizerService), e.\u0275\u0275directiveInject(M), e.\u0275\u0275directiveInject(h.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275dir = e.\u0275\u0275defineDirective({ type: i, selectors: [["", "druid-forms-form-element-base", ""]], inputs: { tokens: "tokens", label: "label", settings: "settings", panes: "panes", originPanes: "originPanes", contexts: "contexts", resolvedContext: "resolvedContext", ancestory: "ancestory" }, standalone: !1 }); }
} return i; })(), st = (() => { class i extends j {
    constructor(t, n, o, r, l, p) { super(t, n, o, r, l, p); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(C.AttributeSerializerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(S.TokenizerService), e.\u0275\u0275directiveInject(M), e.\u0275\u0275directiveInject(h.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-forms-form-input"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 5, consts: [["matInput", "", 3, "formControl"], [4, "ngIf"], [3, "validators", "errors", "resolvedContext"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label"), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(4, "input", 0), e.\u0275\u0275template(5, Qe, 2, 3, "mat-error", 1), e.\u0275\u0275elementEnd()), n & 2 && (e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 3, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", o.formControl.invalid)); }, dependencies: [f.NgIf, a.DefaultValueAccessor, a.NgControlStatus, a.FormControlDirective, m.MatInput, m.MatFormField, m.MatLabel, m.MatError, h.DefaultValidationError, f.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{display:block}"] }); }
} return i; })(), lt = (() => { class i extends j {
    constructor(t, n, o, r, l, p) { super(t, n, o, r, l, p); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(C.AttributeSerializerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(S.TokenizerService), e.\u0275\u0275directiveInject(M), e.\u0275\u0275directiveInject(h.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-forms-form-select"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 7, consts: [[3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label"), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(4, "mat-select", 0), e.\u0275\u0275template(5, Xe, 2, 2, "mat-option", 1), e.\u0275\u0275pipe(6, "async"), e.\u0275\u0275elementEnd()()), n & 2 && (e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 3, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(6, 5, o.options$))); }, dependencies: [f.NgForOf, a.NgControlStatus, a.FormControlDirective, V.MatOption, m.MatFormField, m.MatLabel, Z.MatSelect, f.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{display:block}"] }); }
} return i; })(), ct = (() => { class i {
    set settings(t) { this.settings$.next(t); }
    set resolvedContext(t) { this.resolvedContext$.next(t); }
    set panel(t) { this.panel$.next(t); }
    get panesFormArray() { return this.controlContainer.control.get("panes"); }
    constructor(t, n, o) { this.attributeSerializer = t, this.fb = n, this.controlContainer = o, this.panes = [], this.originMappings = [], this.ancestory = [], this.add$ = new I, this.remove$ = new I, this.panes$ = new O([]), this.settings$ = new I, this.resolvedContext$ = new I, this.panel$ = new I, this.afterViewInit$ = new I, this.addSub = this.add$.pipe(g(() => new de(this.panes[0])), x(() => this.panesFormArray.push(this.fb.control(""))), x(r => this.panes.push(r))).subscribe(), this.removeSub = this.remove$.pipe(x(r => this.panesFormArray.removeAt(r)), x(r => this.panes.splice(r, 1))).subscribe(), this.populateDefaultValues = q([this.settings$.pipe(g(r => r ? new X(this.attributeSerializer.deserializeAsObject(r)) : void 0)), this.resolvedContext$, this.panel$, this.afterViewInit$]).pipe(g(([r, l, p]) => ({ s: r, rc: l, p })), x(({ s: r }) => console.log(r.valuesMapping, this.ancestory)), g(({ s: r, rc: l, p }) => { if (l && r && r.valuesMapping && r.valuesMapping.trim() !== "") {
        let s = r.valuesMapping.split("[$i]"), c = s.map((b, A) => this.ancestory[A * 1 + 3]), u = s.reduce((b, A, k) => [...b, k === 0 ? "" : k - 1 < c.length ? `[${c[k - 1]}]` : "", A], []).join("");
        return console.log("path", u), { items: Y.JSONPath({ path: `$.${u}.*`, json: l }), s: r, p };
    }
    else
        return { items: [], p }; }), x(({ items: r }) => { let l = r.length - this.panesFormArray.length; for (let p = 0; p < l; p++)
        this.add$.next(void 0); })).subscribe(); }
    ngOnInit() { }
    ngAfterViewInit() { this.afterViewInit$.next(void 0); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(C.AttributeSerializerService), e.\u0275\u0275directiveInject(a.UntypedFormBuilder), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-form-section"]], inputs: { panes: "panes", originPanes: "originPanes", originMappings: "originMappings", ancestory: "ancestory", settings: "settings", resolvedContext: "resolvedContext", panel: "panel" }, standalone: !1, decls: 5, vars: 2, consts: [[3, "formGroup"], ["formArrayName", "panes"], [4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [3, "formControlName", "pluginName", "settings", "name", "label", "contexts", "panes", "resolvedContext", "indexPosition", "ancestory"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementContainerStart(0, 0)(1, 1), e.\u0275\u0275template(2, Ye, 4, 10, "div", 2), e.\u0275\u0275elementContainerEnd()(), e.\u0275\u0275elementStart(3, "button", 3), e.\u0275\u0275listener("click", function () { return o.add$.next(void 0); }), e.\u0275\u0275text(4, "Add Item"), e.\u0275\u0275elementEnd()), n & 2 && (e.\u0275\u0275property("formGroup", o.controlContainer.control), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", o.panes)); }, dependencies: [f.NgForOf, a.NgControlStatus, a.NgControlStatusGroup, a.FormGroupDirective, a.FormControlName, a.FormArrayName, ue.RenderPaneComponent], encapsulation: 2 }); }
} return i; })(), pt = (() => { class i extends j {
    constructor(t, n, o, r, l, p) { super(t, n, o, r, l, p), this.cols = 20, this.rows = 20; }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(C.AttributeSerializerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(S.TokenizerService), e.\u0275\u0275directiveInject(M), e.\u0275\u0275directiveInject(h.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-forms-form-textarea"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 7, consts: [["matInput", "", 3, "formControl", "cols", "rows"], [4, "ngIf"], [3, "validators", "errors", "resolvedContext"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label"), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(4, "textarea", 0), e.\u0275\u0275template(5, Ze, 2, 3, "mat-error", 1), e.\u0275\u0275elementEnd()), n & 2 && (e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 5, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("formControl", o.formControl)("cols", o.cols)("rows", o.rows), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", o.formControl.invalid)); }, dependencies: [f.NgIf, a.DefaultValueAccessor, a.NgControlStatus, a.FormControlDirective, m.MatInput, m.MatFormField, m.MatLabel, m.MatError, h.DefaultValidationError, f.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{display:block}"] }); }
} return i; })(), dt = (() => { class i {
    constructor(t) { this.attributeSerializer = t; }
    handleFile(t) { return y([]); }
    handlesType(t) { return !1; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(t) { return y(!1); }
    isDynamic(t) { return !1; }
    isData(t) { return !1; }
    getBindings(t, n, o) { return n === "pane" ? this.toObject(t).pipe($(r => ke(() => r.datasourceBinding && r.datasourceBinding.id && r.datasourceBinding.id !== null, y([r.datasourceBinding]), y([])))) : n === "context" ? y([]) : y([]); }
    fetchDynamicData(t, n) { return y(new De); }
    buildDynamicItems(t, n) { return y([]); }
    toObject(t) { return y(new L(this.attributeSerializer.deserializeAsObject(t))); }
    buildSettings(t) { return this.attributeSerializer.serialize(t, "root").attributes; }
    stateDefinition(t) { return y({ autocomplete: { input: "" }, value: void 0 }); }
    editorOptions(t) { return y(new $e); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275inject(C.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac }); }
} return i; })(), Ce = (() => { class i extends dt {
    static { this.\u0275fac = (() => { let t; return function (o) { return (t || (t = e.\u0275\u0275getInheritedFactory(i)))(o || i); }; })(); }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }); }
} return i; })(), D = (() => { class i {
    get paneGroup() { return this.data.panelFormGroup.get("panes").at(this.paneIndex); }
    constructor(t, n, o, r, l) { this.data = t, this.dialogRef = n, this.fb = o, this.handler = r, this.attributeSerializer = l, this.datasourceOptions = Q, this.validation = new U({ validators: [] }), this.bindableOptions = [], this.formGroup = this.fb.group({ value: this.fb.control(""), datasourceOptions: this.fb.control(""), validation: this.fb.control(""), datasourceBinding: this.fb.group({ id: this.fb.control(""), type: this.fb.control("pane") }) }), this.paneIndex = t.paneIndex, this.pane = t.pane; }
    ngOnInit() { this.data.pane ? this.handler.toObject(this.data.pane.settings).subscribe(t => { console.log("Form Editor Data Pane Data", t), this.formGroup.patchValue({ value: t.value, datasourceOptions: t.datasourceOptions || Q, datasourceBinding: { id: t.datasourceBinding?.id || "", type: "pane" } }), this.datasourceOptions = t.datasourceOptions || Q, this.validation = t.validation ? new U(t.validation) : new U({ validators: [] }); }) : (this.data.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: this.data.plugin.id, name: new R(""), label: new R(""), rule: new R(""), settings: this.fb.array([]) })), this.paneIndex = this.data.panelFormGroup.get("panes").length - 1, this.pane = new de(this.data.panelFormGroup.get("panes").at(this.paneIndex).value)), this.bindableOptions = this.data.panelFormGroup.get("panes").controls.reduce((t, n) => n.get("name").value ? [...t, n.get("name").value] : t, []); }
    submit() { console.log(this.formGroup.value); let t = new L(this.formGroup.value); console.log("losing options debug", t), this.paneGroup.get("settings").clear(), this.handler.buildSettings(t).map(o => this.attributeSerializer.convertToGroup(o)).forEach(o => this.paneGroup.get("settings").push(o)), this.dialogRef.close(); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(fe), e.\u0275\u0275directiveInject(z.MatDialogRef), e.\u0275\u0275directiveInject(a.UntypedFormBuilder), e.\u0275\u0275directiveInject(Ce), e.\u0275\u0275directiveInject(C.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-forms-form-element-editor"]], inputs: { bindableOptions: "bindableOptions" }, standalone: !1, decls: 17, vars: 3, consts: [[3, "ngSubmit", "formGroup"], ["fxLayout", "column"], ["matInput", "", "formControlName", "value"], ["formGroupName", "datasourceBinding"], ["required", "", "formControlName", "id"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "datasourceOptions"], ["formControlName", "validation", 3, "validation"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", ""], [3, "value"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return o.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content", 1)(2, "div")(3, "mat-form-field")(4, "mat-label"), e.\u0275\u0275text(5, "Value"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(6, "input", 2), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(7, "mat-form-field", 3)(8, "mat-label"), e.\u0275\u0275text(9, "Datasource"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(10, "mat-select", 4), e.\u0275\u0275template(11, et, 2, 2, "mat-option", 5), e.\u0275\u0275elementEnd()(), e.\u0275\u0275element(12, "classifieds-ui-datasource-options", 6)(13, "druid-ordain-validation-editor", 7), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(14, "mat-dialog-actions")(15, "button", 8), e.\u0275\u0275text(16, "Save"), e.\u0275\u0275elementEnd()()()), n & 2 && (e.\u0275\u0275property("formGroup", o.formGroup), e.\u0275\u0275advance(11), e.\u0275\u0275property("ngForOf", o.bindableOptions), e.\u0275\u0275advance(2), e.\u0275\u0275property("validation", o.validation)); }, dependencies: [f.NgForOf, a.\u0275NgNoValidate, a.DefaultValueAccessor, a.NgControlStatus, a.NgControlStatusGroup, a.RequiredValidator, a.FormGroupDirective, a.FormControlName, a.FormGroupName, V.MatOption, ee.MatButton, z.MatDialogClose, z.MatDialogActions, z.MatDialogContent, m.MatInput, m.MatFormField, m.MatLabel, Z.MatSelect, pe.DatasourceOptionsComponent, h.ValidationEditorComponent], encapsulation: 2 }); }
} return i; })(), mt = (() => { class i extends j {
    constructor(t, n, o, r, l, p) { super(t, n, o, r, l, p); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(C.AttributeSerializerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(S.TokenizerService), e.\u0275\u0275directiveInject(M), e.\u0275\u0275directiveInject(h.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-forms-form-radiogroup"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 7, consts: [[3, "formControl", "aria-label"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "mat-radio-group", 0), e.\u0275\u0275pipe(1, "async"), e.\u0275\u0275template(2, tt, 2, 2, "mat-radio-button", 1), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd()), n & 2 && (e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275ariaProperty("aria-label", e.\u0275\u0275pipeBind1(1, 3, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(3, 5, o.options$))); }, dependencies: [f.NgForOf, a.NgControlStatus, a.FormControlDirective, J.MatRadioGroup, J.MatRadioButton, f.AsyncPipe], encapsulation: 2 }); }
} return i; })(), ut = (() => { class i extends j {
    constructor(t, n, o, r, l, p) { super(t, n, o, r, l, p); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(C.AttributeSerializerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(S.TokenizerService), e.\u0275\u0275directiveInject(M), e.\u0275\u0275directiveInject(h.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-forms-form-slider"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 4, consts: [[3, "formControl", "aria-label"], ["matSliderThumb", ""]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "mat-slider", 0), e.\u0275\u0275pipe(1, "async"), e.\u0275\u0275element(2, "input", 1), e.\u0275\u0275elementEnd()), n & 2 && (e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275ariaProperty("aria-label", e.\u0275\u0275pipeBind1(1, 2, o.label$))); }, dependencies: [a.NgControlStatus, a.FormControlDirective, W.MatSlider, W.MatSliderThumb, f.AsyncPipe], styles: ["mat-slider[_ngcontent-%COMP%]{display:block}"] }); }
} return i; })(), ft = (() => { class i extends j {
    constructor(t, n, o, r, l, p) { super(t, n, o, r, l, p); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(C.AttributeSerializerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(S.TokenizerService), e.\u0275\u0275directiveInject(M), e.\u0275\u0275directiveInject(h.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-forms-form-toggle"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 4, consts: [[1, "toggle-container"], [3, "formControl"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "mat-slide-toggle", 1), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd()()), n & 2 && (e.\u0275\u0275advance(), e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 2, o.label$))); }, dependencies: [a.NgControlStatus, a.FormControlDirective, ve.MatSlideToggle, f.AsyncPipe], styles: [".toggle-container[_ngcontent-%COMP%]{padding-bottom:1em}"] }); }
} return i; })(), vt = (() => { class i extends j {
    constructor(t, n, o, r, l, p) { super(t, n, o, r, l, p); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(C.AttributeSerializerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(S.TokenizerService), e.\u0275\u0275directiveInject(M), e.\u0275\u0275directiveInject(h.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-forms-form-checkbox"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 4, consts: [[3, "formControl"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "mat-checkbox", 0), e.\u0275\u0275text(1), e.\u0275\u0275pipe(2, "async"), e.\u0275\u0275elementEnd()), n & 2 && (e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(2, 2, o.label$))); }, dependencies: [a.NgControlStatus, a.FormControlDirective, ge.MatCheckbox, f.AsyncPipe], encapsulation: 2 }); }
} return i; })(), gt = (() => { class i extends j {
    constructor(t, n, o, r, l, p) { super(t, n, o, r, l, p); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(C.AttributeSerializerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(S.TokenizerService), e.\u0275\u0275directiveInject(M), e.\u0275\u0275directiveInject(h.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-forms-form-datepicker"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 6, consts: [["picker", ""], ["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"]], template: function (n, o) { if (n & 1 && (e.\u0275\u0275elementStart(0, "mat-form-field", 1)(1, "mat-label"), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(4, "input", 2)(5, "mat-datepicker-toggle", 3)(6, "mat-datepicker", null, 0), e.\u0275\u0275elementEnd()), n & 2) {
            let r = e.\u0275\u0275reference(7);
            e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 4, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("matDatepicker", r)("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275property("for", r);
        } }, dependencies: [a.DefaultValueAccessor, a.NgControlStatus, a.FormControlDirective, G.MatDatepicker, G.MatDatepickerInput, G.MatDatepickerToggle, m.MatInput, m.MatFormField, m.MatLabel, m.MatSuffix, f.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{display:block}"] }); }
} return i; })(), ht = (() => { class i extends j {
    constructor(t, n, o, r, l, p) { super(t, n, o, r, l, p), this.proxyControl = new R(""), this.optionSelected$ = new I, this.proxyControlValueChangesSub = this.proxyControl.valueChanges.pipe(Be(1e3), Ge(), Re(q([this.formSettings$, this.panes$, this.originPanes$, this.contexts$]).pipe(g(([s, c, u, v]) => ({ settings: s, panes: c, originPanes: u, contexts: v })))), g(([s, { settings: c, panes: u, originPanes: v, contexts: b }]) => ({ term: s, settings: c, metadata: new Map([["panes", [...u && Array.isArray(u) ? u : [], ...v && Array.isArray(v) ? v : []]], ["contexts", b], ["inputparams", new Map([["term", new qe({ flags: [], mapping: new Je({ value: s, testValue: s, type: "static", context: void 0 }) })]])]]) })), $(({ settings: s, metadata: c }) => this.optionsResolver.resolveElementOptions(s, c)), x(s => this.options$.next(s))).subscribe(), this.optionSelectedSub = this.optionSelected$.pipe(x(s => this.formControl.setValue(s.option && s.option.value ? s.option.value.value : ""))).subscribe(), this.displayAuto = s => s.label; }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(C.AttributeSerializerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(S.TokenizerService), e.\u0275\u0275directiveInject(M), e.\u0275\u0275directiveInject(h.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-forms-form-autocomplete"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 9, consts: [["autocomplete", "matAutocomplete"], ["matInput", "", 3, "matAutocomplete", "formControl"], [3, "optionSelected", "displayWith"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function (n, o) { if (n & 1) {
            let r = e.\u0275\u0275getCurrentView();
            e.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label"), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(4, "input", 1), e.\u0275\u0275elementStart(5, "mat-autocomplete", 2, 0), e.\u0275\u0275listener("optionSelected", function (p) { return e.\u0275\u0275restoreView(r), e.\u0275\u0275resetView(o.optionSelected$.next(p)); }), e.\u0275\u0275template(7, it, 2, 2, "mat-option", 3), e.\u0275\u0275pipe(8, "async"), e.\u0275\u0275elementEnd()();
        } if (n & 2) {
            let r = e.\u0275\u0275reference(6);
            e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 5, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("matAutocomplete", r)("formControl", o.proxyControl), e.\u0275\u0275advance(), e.\u0275\u0275property("displayWith", o.displayAuto), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(8, 7, o.options$));
        } }, dependencies: [f.NgForOf, a.DefaultValueAccessor, a.NgControlStatus, a.FormControlDirective, V.MatAutocomplete, V.MatOption, V.MatAutocompleteTrigger, m.MatInput, m.MatFormField, m.MatLabel, f.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{display:block}"] }); }
} return i; })(), Ct = (() => { class i extends j {
    constructor(t, n, o, r, l, p, s) { super(t, n, r, l, p, s), this.files = [], this.select$ = new I, this.selectSub = this.select$.pipe(N(c => console.log(c)), Pe(c => this.filesService.bulkUpload({ files: [c.addedFiles[0]] }).pipe(se(u => ({ mfs: u, e: c })))), N(({ mfs: c }) => this.formControl.setValue(c[0])), N(({ e: c }) => this.files.push(...c.addedFiles))).subscribe(), this.valueSub = this.value$.pipe(Ve(c => typeof c == "object"), se(c => new We(c)), N(c => { console.log("populate value", c); }), Ee(c => this.filesService.convertToFiles([c])), N(c => { console.log("populate as file", c), this.files = c; })).subscribe(), this.filesService = o; }
    onSelect(t) { this.select$.next(t); }
    onRemove(t) { console.log(t), this.formControl.setValue(""), this.files.splice(this.files.indexOf(t), 1); }
    isType(t, n) { switch (n) {
        case "image": return this.filesService.isImage({ file: t });
        case "video": return this.filesService.isVideo({ file: t });
        default: return !1;
    } }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(C.AttributeSerializerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(he.FilesService), e.\u0275\u0275directiveInject(S.TokenizerService), e.\u0275\u0275directiveInject(M), e.\u0275\u0275directiveInject(h.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-forms-form-media"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 1, consts: [[3, "change"], [4, "ngFor", "ngForOf"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed", 4, "ngIf"], [3, "removable", "removed", 4, "ngIf"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "removed", "file", "removable"], [3, "removed", "removable"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "ngx-dropzone", 0), e.\u0275\u0275listener("change", function (l) { return o.onSelect(l); }), e.\u0275\u0275elementStart(1, "ngx-dropzone-label"), e.\u0275\u0275text(2, "Drop it, baby!"), e.\u0275\u0275elementEnd(), e.\u0275\u0275template(3, at, 4, 3, "ng-container", 1), e.\u0275\u0275elementEnd()), n & 2 && (e.\u0275\u0275advance(3), e.\u0275\u0275property("ngForOf", o.files)); }, dependencies: [f.NgForOf, f.NgIf, T.NgxDropzoneComponent, T.NgxDropzoneLabelDirective, T.NgxDropzonePreviewComponent, T.NgxDropzoneImagePreviewComponent, T.NgxDropzoneVideoPreviewComponent], encapsulation: 2 }); }
} return i; })(), bt = (() => { class i extends j {
    constructor(t, n, o, r, l, p) { super(t, n, o, r, l, p); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(C.AttributeSerializerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(S.TokenizerService), e.\u0275\u0275directiveInject(M), e.\u0275\u0275directiveInject(h.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-forms-form-hidden"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function (n, o) { }, encapsulation: 2 }); }
} return i; })(), yt = (() => { class i {
    constructor(t, n, o, r) { this.data = t, this.dialogRef = n, this.fb = o, this.attributeSerializer = r, this.contexts = [], this.formGroup = this.fb.group({ valuesMapping: this.fb.control("") }); }
    ngOnInit() { }
    submit() { this.data.panelFormGroup.get("settings").clear(), this.attributeSerializer.serialize(this.formGroup.value, "root").attributes.forEach(t => { console.log("formly repeating editor form"), console.log(this.attributeSerializer.convertToGroup(t)), this.data.panelFormGroup.get("settings").push(this.attributeSerializer.convertToGroup(t)); }); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(fe), e.\u0275\u0275directiveInject(z.MatDialogRef), e.\u0275\u0275directiveInject(a.UntypedFormBuilder), e.\u0275\u0275directiveInject(C.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-form-section-editor"]], standalone: !1, decls: 8, vars: 2, consts: [[3, "ngSubmit", "formGroup"], ["matInput", "", "formControlName", "valuesMapping"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return o.submit(); }), e.\u0275\u0275elementStart(1, "div")(2, "mat-form-field")(3, "mat-label"), e.\u0275\u0275text(4, "Values Mapping"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(5, "input", 1), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(6, "button", 2), e.\u0275\u0275text(7, "Save"), e.\u0275\u0275elementEnd()()), n & 2 && (e.\u0275\u0275property("formGroup", o.formGroup), e.\u0275\u0275advance(6), e.\u0275\u0275property("disabled", !o.formGroup.valid)); }, dependencies: [a.\u0275NgNoValidate, a.DefaultValueAccessor, a.NgControlStatus, a.NgControlStatusGroup, a.FormGroupDirective, a.FormControlName, ee.MatButton, z.MatDialogClose, m.MatInput, m.MatFormField, m.MatLabel], encapsulation: 2 }); }
} return i; })(), St = ({ handler: i }) => new w({ id: "form_input", title: "Form Input", selectionComponent: void 0, editorComponent: D, renderComponent: st, handler: i }), xt = ({ handler: i }) => new w({ id: "form_select", title: "Form Select", selectionComponent: void 0, editorComponent: D, renderComponent: lt, handler: i }), Ft = ({ handler: i }) => new w({ id: "form_radiogroup", title: "Form Radiogroup", selectionComponent: void 0, editorComponent: D, renderComponent: mt, handler: i }), It = ({ handler: i }) => new w({ id: "form_textarea", title: "Form Textarea", selectionComponent: void 0, editorComponent: D, renderComponent: pt, handler: i }), _t = ({ handler: i }) => new w({ id: "form_slider", title: "Form Slider", selectionComponent: void 0, editorComponent: D, renderComponent: ut, handler: i }), Mt = ({ handler: i }) => new w({ id: "form_toggle", title: "Form Toggle", selectionComponent: void 0, editorComponent: D, renderComponent: ft, handler: i }), $t = ({ handler: i }) => new w({ id: "form_checkbox", title: "Form Checkbox", selectionComponent: void 0, editorComponent: D, renderComponent: vt, handler: i }), wt = ({ handler: i }) => new w({ id: "form_datepicker", title: "Form Datepicker", selectionComponent: void 0, editorComponent: D, renderComponent: gt, handler: i }), jt = ({ handler: i }) => new w({ id: "form_autocomplete", title: "Form Autocomplete", selectionComponent: void 0, editorComponent: D, renderComponent: ht, handler: i }), Dt = ({ handler: i }) => new w({ id: "form_media", title: "Form Media", selectionComponent: void 0, editorComponent: D, renderComponent: Ct, handler: i }), zt = ({ handler: i }) => new w({ id: "form_hidden", title: "Form Hidden", selectionComponent: void 0, editorComponent: D, renderComponent: bt, handler: i }), Tt = () => new He({ id: "form_section", name: "form_section", title: "Form Section", editorComponent: yt, renderComponent: ct }), ti = (() => { class i {
    constructor(t, n, o) { [St({ handler: o }), xt({ handler: o }), It({ handler: o }), Ft({ handler: o }), _t({ handler: o }), Mt({ handler: o }), $t({ handler: o }), wt({ handler: o }), jt({ handler: o }), Dt({ handler: o }), zt({ handler: o })].forEach(r => t.register(r)), [Tt()].forEach(r => n.register(r)); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275inject(ce.ContentPluginManager), e.\u0275\u0275inject(B.StylePluginManager), e.\u0275\u0275inject(Ce)); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: i }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ imports: [xe, Fe, Ie, _e, Ue, ze, Ke, Te] }); }
} return i; })();
export { dt as AbstractFormContentHandler, ht as FormAutocompleteComponent, vt as FormCheckboxComponent, gt as FormDatepickerComponent, j as FormElementBase, D as FormElementEditorComponent, Ce as FormElementHandler, bt as FormHiddenComponent, st as FormInputComponent, Ct as FormMediaComponent, mt as FormRadiogroupComponent, ct as FormSectionComponent, yt as FormSectionEditorComponent, lt as FormSelectComponent, ut as FormSliderComponent, pt as FormTextareaComponent, ft as FormToggleComponent, ti as FormsModule, _ as OptionsResolverService };
//# sourceMappingURL=_rollthecloudinc_forms.s298eMbQKE.js.map
