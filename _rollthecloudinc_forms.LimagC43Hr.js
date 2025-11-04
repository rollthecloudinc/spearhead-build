import { a as xe } from "@nf-internal/chunk-6A46ZHUO";
import { a as be } from "@nf-internal/chunk-CAFTJBEE";
import { a as re } from "@nf-internal/chunk-7XNIKSHD";
import { a as ie, b as ne, h as oe } from "@nf-internal/chunk-GL2BOVXA";
import * as x from "@angular/common";
import { CommonModule as ye } from "@angular/common";
import * as e from "@angular/core";
import "@angular/core";
import * as a from "@angular/forms";
import { UntypedFormControl as B, FormsModule as Fe, ReactiveFormsModule as Ie } from "@angular/forms";
import { MaterialModule as _e } from "@rollthecloudinc/material";
import * as ce from "@rollthecloudinc/content";
import { ContentBinding as Me, ContentPluginEditorOptions as $e, ContentPlugin as w } from "@rollthecloudinc/content";
import * as pe from "@rollthecloudinc/datasource";
import { DatasourceOptions as we, SelectOption as je, Dataset as De, mockDatasourceOptions as Q, DatasourceModule as ze } from "@rollthecloudinc/datasource";
import * as h from "@rollthecloudinc/ordain";
import { FormValidation as U, OrdainModule as Te } from "@rollthecloudinc/ordain";
import { of as S, Subject as I, tap as N, ReplaySubject as Oe, take as Ae, BehaviorSubject as V, combineLatest as q, forkJoin as ae, iif as ke, mergeMap as Ve, map as se, filter as Pe, switchMap as Ee } from "rxjs";
import { switchMap as $, map as v, tap as y, defaultIfEmpty as le, take as Ne, debounceTime as Ge, distinctUntilChanged as Re, withLatestFrom as Be } from "rxjs/operators";
var Y = oe(be(), 1), me = oe(xe(), 1);
import * as g from "@rollthecloudinc/attributes";
import * as b from "@rollthecloudinc/token";
import * as G from "@rollthecloudinc/panels";
import { PanelPageForm as Le, Pane as de, StylePlugin as He } from "@rollthecloudinc/panels";
import * as u from "@angular/material/input";
import * as P from "@angular/material/autocomplete";
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
import * as R from "@angular/material/datepicker";
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
function Ze(i, d) { if (i & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 9), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let t = d.$implicit;
    e.\u0275\u0275property("value", t), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t);
} }
function et(i, d) { if (i & 1 && (e.\u0275\u0275elementStart(0, "mat-radio-button", 2), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let t = d.$implicit;
    e.\u0275\u0275property("value", t.value), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label);
} }
function tt(i, d) { if (i & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 4), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let t = d.$implicit;
    e.\u0275\u0275property("value", t), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label);
} }
function it(i, d) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "ngx-dropzone-image-preview", 4), e.\u0275\u0275listener("removed", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext().$implicit, r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r.onRemove(o)); }), e.\u0275\u0275elementStart(1, "ngx-dropzone-label"), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275property("file", t)("removable", !0), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate2("", t.name, " (", t.type, ")");
} }
function nt(i, d) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "ngx-dropzone-video-preview", 4), e.\u0275\u0275listener("removed", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext().$implicit, r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r.onRemove(o)); }), e.\u0275\u0275elementStart(1, "ngx-dropzone-label"), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275property("file", t)("removable", !0), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate2("", t.name, " (", t.type, ")");
} }
function ot(i, d) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "ngx-dropzone-preview", 5), e.\u0275\u0275listener("removed", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext().$implicit, r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r.onRemove(o)); }), e.\u0275\u0275elementStart(1, "ngx-dropzone-label"), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275property("removable", !0), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate2("", t.name, " (", t.type, ")");
} }
function rt(i, d) { if (i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, it, 3, 4, "ngx-dropzone-image-preview", 2)(2, nt, 3, 4, "ngx-dropzone-video-preview", 2)(3, ot, 3, 3, "ngx-dropzone-preview", 3), e.\u0275\u0275elementContainerEnd()), i & 2) {
    let t = d.$implicit, n = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", n.isType(t, "image")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", n.isType(t, "video")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !n.isType(t, "image") && !n.isType(t, "video"));
} }
var L = class {
    constructor(d) { d && (this.value = d.value ? d.value : "", d.datasourceBinding && typeof d.datasourceBinding == "object" && (this.datasourceBinding = new Me(d.datasourceBinding)), d.datasourceOptions && typeof d.datasourceOptions == "object" && (this.datasourceOptions = new we(d.datasourceOptions)), d.validation && (this.validation = new U(d.validation))); }
}, X = class {
    constructor(d) { d && (this.valuesMapping = d.valuesMapping); }
}, _ = (() => { class i {
    constructor(t, n, o, r) { this.tokenizerService = t, this.datasourceContentHandler = n, this.panelResolver = o, this.attributeSerializer = r; }
    resolveElementOptions(t, n) { return S(t).pipe($(o => { if (o.datasourceBinding && o.datasourceBinding.id && o.datasourceBinding.id !== "") {
        let r = n.has("panes") ? n.get("panes").find(l => l.name === o.datasourceBinding.id) : void 0;
        return this.panelResolver.dataPanes(n.get("panes")).pipe($(l => r ? this.datasourceContentHandler.fetchDynamicData(r.settings, new Map([...n, ["dataPanes", l]])) : S([])), v(l => [o, l.results]));
    }
    else
        return S([o, []]); }), v(([o, r]) => [o, o.datasourceOptions && o.datasourceOptions.query !== "" ? Y.JSONPath({ path: o.datasourceOptions.query, json: r }) : r]), $(([o, r]) => this.mapDataOptions(o, r))); }
    mapDataOptions(t, n) { return S([t, n]).pipe(v(([o, r]) => [o, r, r ? r.map(l => this.tokenizerService.generateGenericTokens(l)) : []]), v(([o, r, l]) => l.map(p => this.mapDataItem(o, p)))); }
    mapDataItem(t, n) { return new je({ value: this.tokenizerService.replaceTokens(`${t.datasourceOptions.valueMapping}`, n), label: this.tokenizerService.replaceTokens(`${t.datasourceOptions.labelMapping}`, n), dataItem: void 0 }); }
    hasDataOptions(t) { return t.datasourceBinding && t.datasourceBinding.id && t.datasourceBinding.id !== ""; }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275inject(b.TokenizerService), e.\u0275\u0275inject(G.DatasourceContentHandler), e.\u0275\u0275inject(G.PanelResolverService), e.\u0275\u0275inject(g.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }); }
} return i; })(), M = (() => { class i {
    constructor(t) { this.tokenizerService = t, this.cachedResolvedContexts = [], this.scheduleResolution$ = new I, this.scheduleResolutionSub = this.scheduleResolution$.pipe(N(({ resolvedContext: n, index: o }) => { let r = new Map; if (n)
        for (let l in n)
            n[l] instanceof Le || (r = new Map([...r, ...this.tokenizerService.generateGenericTokens(n[l], l === "_root" ? "" : l)])); this.cachedResolvedContexts[o].resolution$.next(r); })).subscribe(); }
    resolveContexts({ resolvedContext: t }) { let n = this.cachedResolvedContexts.findIndex(({ rContext: o }) => me.getDiff(o, t).length === 0); return n === -1 ? (console.log("resolved context no cache", t), n = this.cachedResolvedContexts.length, this.cachedResolvedContexts.push({ rContext: t, resolution$: new Oe }), this.scheduleResolution$.next({ resolvedContext: t, index: n })) : console.log("resolved context cache hit", t), this.cachedResolvedContexts[n].resolution$.pipe(Ae(1)); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275inject(b.TokenizerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }); }
} return i; })(), j = (() => { class i {
    set settings(t) { this.settings$.next(t); }
    set panes(t) { this.panes$.next(t); }
    set originPanes(t) { this.originPanes$.next(t); }
    set contexts(t) { this.contexts$.next(t); }
    set resolvedContext(t) { this.resolvedContext$.next(t); }
    constructor(t, n, o, r, l, p) { this.attributeSerializer = t, this.optionsResolver = n, this.tokenizerService = o, this.formsContextHelper = r, this.vpm = l, this.controlContainer = p, this.formControl = new B(""), this.formControlValueChangesSub = this.formControl.valueChanges.pipe(y(s => console.log("serialized form value", this.attributeSerializer.serialize(s, "value"))), y(s => this.controlContainer.control.get("settings").setValue([this.attributeSerializer.serialize(s, "value")]))).subscribe(), this.formSettings$ = new V(void 0), this.settings$ = new V([]), this.options$ = new V([]), this.init$ = new I, this.afterViewInit$ = new I, this.panes$ = new V([]), this.originPanes$ = new V([]), this.contexts$ = new V([]), this.resolvedContext$ = new V(void 0), this.value$ = new I, this.settingsSub = this.settings$.pipe(v(s => s ? this.settingsToObject(this.attributeSerializer.deserializeAsObject(s)) : void 0), y(s => this.formSettings$.next(s))).subscribe(), this.loadOptionsSub = q([this.formSettings$, this.panes$, this.originPanes$, this.contexts$, this.init$]).pipe(v(([s, c, m, f]) => ({ settings: s, metadata: new Map([["panes", [...c && Array.isArray(c) ? c : [], ...m && Array.isArray(m) ? m : []]], ["contexts", f]]) })), $(({ settings: s, metadata: c }) => this.optionsResolver.resolveElementOptions(s, c)), y(s => this.options$.next(s))).subscribe(), this.renderContentSub = q([this.formSettings$, this.resolvedContext$, this.afterViewInit$]).pipe(v(([s, c]) => ({ settings: s, resolvedContext: c })), $(({ settings: s, resolvedContext: c }) => this.formsContextHelper.resolveContexts({ resolvedContext: c }).pipe(v(m => ({ settings: s, tokens: m })))), $(({ settings: s, tokens: c }) => ae(s.validation && s.validation.validators ? s.validation.validators.map(m => this.vpm.getPlugin(m.validator).pipe($(f => f.builder({ v: m, serialized: !1 }).pipe(v(C => ({ v: m, vf: C })))))) : []).pipe(v(m => ({ settings: s, tokens: c, validators: m })), le({ settings: s, tokens: c, validators: [] }))), $(({ settings: s, tokens: c, validators: m }) => ae(s.validation && s.validation.validators ? s.validation.validators.map(f => this.vpm.getPlugin(f.validator).pipe($(C => C.builder({ v: f, serialized: !0 }).pipe(v(O => ({ v: f, vf: O })))))) : []).pipe(v(f => ({ settings: s, tokens: c, validators: m, validatorsSerialized: f })), le({ settings: s, tokens: c, validators: m, validatorsSerialized: [] }))), y(({ settings: s, tokens: c, validators: m, validatorsSerialized: f }) => { if (this.formControl.setAsyncValidators(m.map(({ vf: C }) => C)), this.controlContainer.control.get("settings").setAsyncValidators(f.map(({ vf: C }) => C)), this.formControl.updateValueAndValidity(), this.controlContainer.control.updateValueAndValidity(), c !== void 0 && (this.tokens = c), s.value && s.value !== null && s.value !== "") {
        (s.value.indexOf(".$i.") !== -1 || s.value.indexOf(".$j.") !== -1 || s.value.indexOf(".$k.") !== -1) && console.log(s.value, this.ancestory);
        let C = s.value.split("$i"), O = C.map((k, F) => this.ancestory[F * 1 + (3 + (F === 0 ? 0 : 3))]), A = C.reduce((k, F, E) => [...k, E === 0 ? "" : E - 1 < O.length ? `${O[E - 1]}` : "", F], []).join("");
        console.log("path", A);
        let K = this.replaceTokens(A);
        this.formControl.setValue(K);
        let H = this.tokenizerService.discoverTokens(K, !0);
        if (H.length !== 0)
            if (H[0].trim().lastIndexOf(".id") === H[0].trim().length - 3) {
                let k = re();
                this.formControl.setValue(k), this.value$.next(k);
            }
            else {
                let k = Array.from(c).filter(([F]) => F.indexOf(A.substr(1, A.length - 2)) === 0);
                if (k.length !== 0) {
                    let F = k.reduce((E, [te, Se]) => ne(ie({}, E), { [te.substr(te.lastIndexOf(".") + 1)]: Se }), {});
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
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(g.AttributeSerializerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(M), e.\u0275\u0275directiveInject(h.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275dir = e.\u0275\u0275defineDirective({ type: i, selectors: [["", "druid-forms-form-element-base", ""]], inputs: { tokens: "tokens", settings: "settings", panes: "panes", originPanes: "originPanes", contexts: "contexts", resolvedContext: "resolvedContext", ancestory: "ancestory" }, standalone: !1 }); }
} return i; })(), at = (() => { class i extends j {
    constructor(t, n, o, r, l, p) { super(t, n, o, r, l, p); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(g.AttributeSerializerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(M), e.\u0275\u0275directiveInject(h.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-forms-form-input"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 2, consts: [["matInput", "", 3, "formControl"], [4, "ngIf"], [3, "validators", "errors", "resolvedContext"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "mat-form-field"), e.\u0275\u0275element(1, "input", 0), e.\u0275\u0275template(2, Qe, 2, 3, "mat-error", 1), e.\u0275\u0275elementEnd()), n & 2 && (e.\u0275\u0275advance(), e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", o.formControl.invalid)); }, dependencies: [x.NgIf, a.DefaultValueAccessor, a.NgControlStatus, a.FormControlDirective, u.MatInput, u.MatFormField, u.MatError, h.DefaultValidationError], encapsulation: 2 }); }
} return i; })(), st = (() => { class i extends j {
    constructor(t, n, o, r, l, p) { super(t, n, o, r, l, p); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(g.AttributeSerializerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(M), e.\u0275\u0275directiveInject(h.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-forms-form-select"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 4, consts: [[3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-select", 0), e.\u0275\u0275template(2, Xe, 2, 2, "mat-option", 1), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd()()), n & 2 && (e.\u0275\u0275advance(), e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(3, 2, o.options$))); }, dependencies: [x.NgForOf, a.NgControlStatus, a.FormControlDirective, P.MatOption, u.MatFormField, Z.MatSelect, x.AsyncPipe], encapsulation: 2 }); }
} return i; })(), lt = (() => { class i {
    set settings(t) { this.settings$.next(t); }
    set resolvedContext(t) { this.resolvedContext$.next(t); }
    set panel(t) { this.panel$.next(t); }
    get panesFormArray() { return this.controlContainer.control.get("panes"); }
    constructor(t, n, o) { this.attributeSerializer = t, this.fb = n, this.controlContainer = o, this.panes = [], this.originMappings = [], this.ancestory = [], this.add$ = new I, this.remove$ = new I, this.panes$ = new V([]), this.settings$ = new I, this.resolvedContext$ = new I, this.panel$ = new I, this.afterViewInit$ = new I, this.addSub = this.add$.pipe(v(() => new de(this.panes[0])), y(() => this.panesFormArray.push(this.fb.control(""))), y(r => this.panes.push(r))).subscribe(), this.removeSub = this.remove$.pipe(y(r => this.panesFormArray.removeAt(r)), y(r => this.panes.splice(r, 1))).subscribe(), this.populateDefaultValues = q([this.settings$.pipe(v(r => r ? new X(this.attributeSerializer.deserializeAsObject(r)) : void 0)), this.resolvedContext$, this.panel$, this.afterViewInit$]).pipe(v(([r, l, p]) => ({ s: r, rc: l, p })), y(({ s: r }) => console.log(r.valuesMapping, this.ancestory)), v(({ s: r, rc: l, p }) => { if (l && r && r.valuesMapping && r.valuesMapping.trim() !== "") {
        let s = r.valuesMapping.split("[$i]"), c = s.map((C, O) => this.ancestory[O * 1 + 3]), m = s.reduce((C, O, A) => [...C, A === 0 ? "" : A - 1 < c.length ? `[${c[A - 1]}]` : "", O], []).join("");
        return console.log("path", m), { items: Y.JSONPath({ path: `$.${m}.*`, json: l }), s: r, p };
    }
    else
        return { items: [], p }; }), y(({ items: r }) => { let l = r.length - this.panesFormArray.length; for (let p = 0; p < l; p++)
        this.add$.next(void 0); })).subscribe(); }
    ngOnInit() { }
    ngAfterViewInit() { this.afterViewInit$.next(void 0); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(g.AttributeSerializerService), e.\u0275\u0275directiveInject(a.UntypedFormBuilder), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-form-section"]], inputs: { panes: "panes", originPanes: "originPanes", originMappings: "originMappings", ancestory: "ancestory", settings: "settings", resolvedContext: "resolvedContext", panel: "panel" }, standalone: !1, decls: 5, vars: 2, consts: [[3, "formGroup"], ["formArrayName", "panes"], [4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [3, "formControlName", "pluginName", "settings", "name", "label", "contexts", "panes", "resolvedContext", "indexPosition", "ancestory"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementContainerStart(0, 0)(1, 1), e.\u0275\u0275template(2, Ye, 4, 10, "div", 2), e.\u0275\u0275elementContainerEnd()(), e.\u0275\u0275elementStart(3, "button", 3), e.\u0275\u0275listener("click", function () { return o.add$.next(void 0); }), e.\u0275\u0275text(4, "Add Item"), e.\u0275\u0275elementEnd()), n & 2 && (e.\u0275\u0275property("formGroup", o.controlContainer.control), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", o.panes)); }, dependencies: [x.NgForOf, a.NgControlStatus, a.NgControlStatusGroup, a.FormGroupDirective, a.FormControlName, a.FormArrayName, ue.RenderPaneComponent], encapsulation: 2 }); }
} return i; })(), ct = (() => { class i extends j {
    constructor(t, n, o, r, l, p) { super(t, n, o, r, l, p), this.cols = 20, this.rows = 20; }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(g.AttributeSerializerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(M), e.\u0275\u0275directiveInject(h.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-forms-form-textarea"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 3, consts: [[3, "formControl", "cols", "rows"]], template: function (n, o) { n & 1 && e.\u0275\u0275element(0, "textarea", 0), n & 2 && e.\u0275\u0275property("formControl", o.formControl)("cols", o.cols)("rows", o.rows); }, dependencies: [a.DefaultValueAccessor, a.NgControlStatus, a.FormControlDirective], encapsulation: 2 }); }
} return i; })(), pt = (() => { class i {
    constructor(t) { this.attributeSerializer = t; }
    handleFile(t) { return S([]); }
    handlesType(t) { return !1; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(t) { return S(!1); }
    isDynamic(t) { return !1; }
    isData(t) { return !1; }
    getBindings(t, n, o) { return n === "pane" ? this.toObject(t).pipe($(r => ke(() => r.datasourceBinding && r.datasourceBinding.id && r.datasourceBinding.id !== null, S([r.datasourceBinding]), S([])))) : n === "context" ? S([]) : S([]); }
    fetchDynamicData(t, n) { return S(new De); }
    buildDynamicItems(t, n) { return S([]); }
    toObject(t) { return S(new L(this.attributeSerializer.deserializeAsObject(t))); }
    buildSettings(t) { return this.attributeSerializer.serialize(t, "root").attributes; }
    stateDefinition(t) { return S({ autocomplete: { input: "" }, value: void 0 }); }
    editorOptions(t) { return S(new $e); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275inject(g.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac }); }
} return i; })(), Ce = (() => { class i extends pt {
    static { this.\u0275fac = (() => { let t; return function (o) { return (t || (t = e.\u0275\u0275getInheritedFactory(i)))(o || i); }; })(); }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }); }
} return i; })(), D = (() => { class i {
    get paneGroup() { return this.data.panelFormGroup.get("panes").at(this.paneIndex); }
    constructor(t, n, o, r, l) { this.data = t, this.dialogRef = n, this.fb = o, this.handler = r, this.attributeSerializer = l, this.datasourceOptions = Q, this.validation = new U({ validators: [] }), this.bindableOptions = [], this.formGroup = this.fb.group({ value: this.fb.control(""), datasourceOptions: this.fb.control(""), validation: this.fb.control(""), datasourceBinding: this.fb.group({ id: this.fb.control(""), type: this.fb.control("pane") }) }), this.paneIndex = t.paneIndex, this.pane = t.pane; }
    ngOnInit() { this.data.pane ? this.handler.toObject(this.data.pane.settings).subscribe(t => { console.log("Form Editor Data Pane Data", t), this.formGroup.patchValue({ value: t.value, datasourceOptions: t.datasourceOptions || Q, datasourceBinding: { id: t.datasourceBinding?.id || "", type: "pane" } }), this.datasourceOptions = t.datasourceOptions || Q, this.validation = t.validation ? new U(t.validation) : new U({ validators: [] }); }) : (this.data.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: this.data.plugin.id, name: new B(""), label: new B(""), rule: new B(""), settings: this.fb.array([]) })), this.paneIndex = this.data.panelFormGroup.get("panes").length - 1, this.pane = new de(this.data.panelFormGroup.get("panes").at(this.paneIndex).value)), this.bindableOptions = this.data.panelFormGroup.get("panes").controls.reduce((t, n) => n.get("name").value ? [...t, n.get("name").value] : t, []); }
    submit() { console.log(this.formGroup.value); let t = new L(this.formGroup.value); console.log("losing options debug", t), this.paneGroup.get("settings").clear(), this.handler.buildSettings(t).map(o => this.attributeSerializer.convertToGroup(o)).forEach(o => this.paneGroup.get("settings").push(o)), this.dialogRef.close(); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(fe), e.\u0275\u0275directiveInject(z.MatDialogRef), e.\u0275\u0275directiveInject(a.UntypedFormBuilder), e.\u0275\u0275directiveInject(Ce), e.\u0275\u0275directiveInject(g.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-forms-form-element-editor"]], inputs: { bindableOptions: "bindableOptions" }, standalone: !1, decls: 17, vars: 3, consts: [[3, "ngSubmit", "formGroup"], ["fxLayout", "column"], ["matInput", "", "formControlName", "value"], ["formGroupName", "datasourceBinding"], ["required", "", "formControlName", "id"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "datasourceOptions"], ["formControlName", "validation", 3, "validation"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", ""], [3, "value"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return o.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content", 1)(2, "div")(3, "mat-form-field")(4, "mat-label"), e.\u0275\u0275text(5, "Value"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(6, "input", 2), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(7, "mat-form-field", 3)(8, "mat-label"), e.\u0275\u0275text(9, "Datasource"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(10, "mat-select", 4), e.\u0275\u0275template(11, Ze, 2, 2, "mat-option", 5), e.\u0275\u0275elementEnd()(), e.\u0275\u0275element(12, "classifieds-ui-datasource-options", 6)(13, "druid-ordain-validation-editor", 7), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(14, "mat-dialog-actions")(15, "button", 8), e.\u0275\u0275text(16, "Save"), e.\u0275\u0275elementEnd()()()), n & 2 && (e.\u0275\u0275property("formGroup", o.formGroup), e.\u0275\u0275advance(11), e.\u0275\u0275property("ngForOf", o.bindableOptions), e.\u0275\u0275advance(2), e.\u0275\u0275property("validation", o.validation)); }, dependencies: [x.NgForOf, a.\u0275NgNoValidate, a.DefaultValueAccessor, a.NgControlStatus, a.NgControlStatusGroup, a.RequiredValidator, a.FormGroupDirective, a.FormControlName, a.FormGroupName, P.MatOption, ee.MatButton, z.MatDialogClose, z.MatDialogActions, z.MatDialogContent, u.MatInput, u.MatFormField, u.MatLabel, Z.MatSelect, pe.DatasourceOptionsComponent, h.ValidationEditorComponent], encapsulation: 2 }); }
} return i; })(), dt = (() => { class i extends j {
    constructor(t, n, o, r, l, p) { super(t, n, o, r, l, p); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(g.AttributeSerializerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(M), e.\u0275\u0275directiveInject(h.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-forms-form-radiogroup"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 4, consts: [[3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "mat-radio-group", 0), e.\u0275\u0275template(1, et, 2, 2, "mat-radio-button", 1), e.\u0275\u0275pipe(2, "async"), e.\u0275\u0275elementEnd()), n & 2 && (e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(2, 2, o.options$))); }, dependencies: [x.NgForOf, a.NgControlStatus, a.FormControlDirective, J.MatRadioGroup, J.MatRadioButton, x.AsyncPipe], encapsulation: 2 }); }
} return i; })(), mt = (() => { class i extends j {
    constructor(t, n, o, r, l, p) { super(t, n, o, r, l, p); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(g.AttributeSerializerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(M), e.\u0275\u0275directiveInject(h.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-forms-form-slider"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 1, consts: [[3, "formControl"], ["matSliderThumb", ""]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "mat-slider", 0), e.\u0275\u0275element(1, "input", 1), e.\u0275\u0275elementEnd()), n & 2 && e.\u0275\u0275property("formControl", o.formControl); }, dependencies: [a.NgControlStatus, a.FormControlDirective, W.MatSlider, W.MatSliderThumb], encapsulation: 2 }); }
} return i; })(), ut = (() => { class i extends j {
    constructor(t, n, o, r, l, p) { super(t, n, o, r, l, p); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(g.AttributeSerializerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(M), e.\u0275\u0275directiveInject(h.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-forms-form-toggle"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 1, consts: [[3, "formControl"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "mat-slide-toggle", 0), e.\u0275\u0275text(1, "Toggle Label"), e.\u0275\u0275elementEnd()), n & 2 && e.\u0275\u0275property("formControl", o.formControl); }, dependencies: [a.NgControlStatus, a.FormControlDirective, ve.MatSlideToggle], encapsulation: 2 }); }
} return i; })(), ft = (() => { class i extends j {
    constructor(t, n, o, r, l, p) { super(t, n, o, r, l, p); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(g.AttributeSerializerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(M), e.\u0275\u0275directiveInject(h.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-forms-form-checkbox"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "formControl"]], template: function (n, o) { n & 1 && e.\u0275\u0275element(0, "mat-checkbox", 0), n & 2 && e.\u0275\u0275property("formControl", o.formControl); }, dependencies: [a.NgControlStatus, a.FormControlDirective, ge.MatCheckbox], encapsulation: 2 }); }
} return i; })(), vt = (() => { class i extends j {
    constructor(t, n, o, r, l, p) { super(t, n, o, r, l, p); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(g.AttributeSerializerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(M), e.\u0275\u0275directiveInject(h.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-forms-form-datepicker"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 3, consts: [["picker", ""], ["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"]], template: function (n, o) { if (n & 1 && (e.\u0275\u0275elementStart(0, "mat-form-field", 1)(1, "mat-label"), e.\u0275\u0275text(2, "Choose a date"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(3, "input", 2)(4, "mat-datepicker-toggle", 3)(5, "mat-datepicker", null, 0), e.\u0275\u0275elementEnd()), n & 2) {
            let r = e.\u0275\u0275reference(6);
            e.\u0275\u0275advance(3), e.\u0275\u0275property("matDatepicker", r)("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275property("for", r);
        } }, dependencies: [a.DefaultValueAccessor, a.NgControlStatus, a.FormControlDirective, R.MatDatepicker, R.MatDatepickerInput, R.MatDatepickerToggle, u.MatInput, u.MatFormField, u.MatLabel, u.MatSuffix], encapsulation: 2 }); }
} return i; })(), gt = (() => { class i extends j {
    constructor(t, n, o, r, l, p) { super(t, n, o, r, l, p), this.proxyControl = new B(""), this.optionSelected$ = new I, this.proxyControlValueChangesSub = this.proxyControl.valueChanges.pipe(Ge(1e3), Re(), Be(q([this.formSettings$, this.panes$, this.originPanes$, this.contexts$]).pipe(v(([s, c, m, f]) => ({ settings: s, panes: c, originPanes: m, contexts: f })))), v(([s, { settings: c, panes: m, originPanes: f, contexts: C }]) => ({ term: s, settings: c, metadata: new Map([["panes", [...m && Array.isArray(m) ? m : [], ...f && Array.isArray(f) ? f : []]], ["contexts", C], ["inputparams", new Map([["term", new qe({ flags: [], mapping: new Je({ value: s, testValue: s, type: "static", context: void 0 }) })]])]]) })), $(({ settings: s, metadata: c }) => this.optionsResolver.resolveElementOptions(s, c)), y(s => this.options$.next(s))).subscribe(), this.optionSelectedSub = this.optionSelected$.pipe(y(s => this.formControl.setValue(s.option && s.option.value ? s.option.value.value : ""))).subscribe(), this.displayAuto = s => s.label; }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(g.AttributeSerializerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(M), e.\u0275\u0275directiveInject(h.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-forms-form-autocomplete"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 6, consts: [["autocomplete", "matAutocomplete"], ["matInput", "", 3, "matAutocomplete", "formControl"], [3, "optionSelected", "displayWith"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function (n, o) { if (n & 1) {
            let r = e.\u0275\u0275getCurrentView();
            e.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label"), e.\u0275\u0275text(2, "Autocomplete"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(3, "input", 1), e.\u0275\u0275elementStart(4, "mat-autocomplete", 2, 0), e.\u0275\u0275listener("optionSelected", function (p) { return e.\u0275\u0275restoreView(r), e.\u0275\u0275resetView(o.optionSelected$.next(p)); }), e.\u0275\u0275template(6, tt, 2, 2, "mat-option", 3), e.\u0275\u0275pipe(7, "async"), e.\u0275\u0275elementEnd()();
        } if (n & 2) {
            let r = e.\u0275\u0275reference(5);
            e.\u0275\u0275advance(3), e.\u0275\u0275property("matAutocomplete", r)("formControl", o.proxyControl), e.\u0275\u0275advance(), e.\u0275\u0275property("displayWith", o.displayAuto), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(7, 4, o.options$));
        } }, dependencies: [x.NgForOf, a.DefaultValueAccessor, a.NgControlStatus, a.FormControlDirective, P.MatAutocomplete, P.MatOption, P.MatAutocompleteTrigger, u.MatInput, u.MatFormField, u.MatLabel, x.AsyncPipe], encapsulation: 2 }); }
} return i; })(), ht = (() => { class i extends j {
    constructor(t, n, o, r, l, p, s) { super(t, n, r, l, p, s), this.files = [], this.select$ = new I, this.selectSub = this.select$.pipe(N(c => console.log(c)), Ve(c => this.filesService.bulkUpload({ files: [c.addedFiles[0]] }).pipe(se(m => ({ mfs: m, e: c })))), N(({ mfs: c }) => this.formControl.setValue(c[0])), N(({ e: c }) => this.files.push(...c.addedFiles))).subscribe(), this.valueSub = this.value$.pipe(Pe(c => typeof c == "object"), se(c => new We(c)), N(c => { console.log("populate value", c); }), Ee(c => this.filesService.convertToFiles([c])), N(c => { console.log("populate as file", c), this.files = c; })).subscribe(), this.filesService = o; }
    onSelect(t) { this.select$.next(t); }
    onRemove(t) { console.log(t), this.formControl.setValue(""), this.files.splice(this.files.indexOf(t), 1); }
    isType(t, n) { switch (n) {
        case "image": return this.filesService.isImage({ file: t });
        case "video": return this.filesService.isVideo({ file: t });
        default: return !1;
    } }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(g.AttributeSerializerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(he.FilesService), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(M), e.\u0275\u0275directiveInject(h.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-forms-form-media"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 1, consts: [[3, "change"], [4, "ngFor", "ngForOf"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed", 4, "ngIf"], [3, "removable", "removed", 4, "ngIf"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "removed", "file", "removable"], [3, "removed", "removable"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "ngx-dropzone", 0), e.\u0275\u0275listener("change", function (l) { return o.onSelect(l); }), e.\u0275\u0275elementStart(1, "ngx-dropzone-label"), e.\u0275\u0275text(2, "Drop it, baby!"), e.\u0275\u0275elementEnd(), e.\u0275\u0275template(3, rt, 4, 3, "ng-container", 1), e.\u0275\u0275elementEnd()), n & 2 && (e.\u0275\u0275advance(3), e.\u0275\u0275property("ngForOf", o.files)); }, dependencies: [x.NgForOf, x.NgIf, T.NgxDropzoneComponent, T.NgxDropzoneLabelDirective, T.NgxDropzonePreviewComponent, T.NgxDropzoneImagePreviewComponent, T.NgxDropzoneVideoPreviewComponent], encapsulation: 2 }); }
} return i; })(), Ct = (() => { class i extends j {
    constructor(t, n, o, r, l, p) { super(t, n, o, r, l, p); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(g.AttributeSerializerService), e.\u0275\u0275directiveInject(_), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(M), e.\u0275\u0275directiveInject(h.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-forms-form-hidden"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function (n, o) { }, encapsulation: 2 }); }
} return i; })(), St = (() => { class i {
    constructor(t, n, o, r) { this.data = t, this.dialogRef = n, this.fb = o, this.attributeSerializer = r, this.contexts = [], this.formGroup = this.fb.group({ valuesMapping: this.fb.control("") }); }
    ngOnInit() { }
    submit() { this.data.panelFormGroup.get("settings").clear(), this.attributeSerializer.serialize(this.formGroup.value, "root").attributes.forEach(t => { console.log("formly repeating editor form"), console.log(this.attributeSerializer.convertToGroup(t)), this.data.panelFormGroup.get("settings").push(this.attributeSerializer.convertToGroup(t)); }); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(fe), e.\u0275\u0275directiveInject(z.MatDialogRef), e.\u0275\u0275directiveInject(a.UntypedFormBuilder), e.\u0275\u0275directiveInject(g.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-form-section-editor"]], standalone: !1, decls: 8, vars: 2, consts: [[3, "ngSubmit", "formGroup"], ["matInput", "", "formControlName", "valuesMapping"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return o.submit(); }), e.\u0275\u0275elementStart(1, "div")(2, "mat-form-field")(3, "mat-label"), e.\u0275\u0275text(4, "Values Mapping"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(5, "input", 1), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(6, "button", 2), e.\u0275\u0275text(7, "Save"), e.\u0275\u0275elementEnd()()), n & 2 && (e.\u0275\u0275property("formGroup", o.formGroup), e.\u0275\u0275advance(6), e.\u0275\u0275property("disabled", !o.formGroup.valid)); }, dependencies: [a.\u0275NgNoValidate, a.DefaultValueAccessor, a.NgControlStatus, a.NgControlStatusGroup, a.FormGroupDirective, a.FormControlName, ee.MatButton, z.MatDialogClose, u.MatInput, u.MatFormField, u.MatLabel], encapsulation: 2 }); }
} return i; })(), bt = ({ handler: i }) => new w({ id: "form_input", title: "Form Input", selectionComponent: void 0, editorComponent: D, renderComponent: at, handler: i }), xt = ({ handler: i }) => new w({ id: "form_select", title: "Form Select", selectionComponent: void 0, editorComponent: D, renderComponent: st, handler: i }), yt = ({ handler: i }) => new w({ id: "form_radiogroup", title: "Form Radiogroup", selectionComponent: void 0, editorComponent: D, renderComponent: dt, handler: i }), Ft = ({ handler: i }) => new w({ id: "form_textarea", title: "Form Textarea", selectionComponent: void 0, editorComponent: D, renderComponent: ct, handler: i }), It = ({ handler: i }) => new w({ id: "form_slider", title: "Form Slider", selectionComponent: void 0, editorComponent: D, renderComponent: mt, handler: i }), _t = ({ handler: i }) => new w({ id: "form_toggle", title: "Form Toggle", selectionComponent: void 0, editorComponent: D, renderComponent: ut, handler: i }), Mt = ({ handler: i }) => new w({ id: "form_checkbox", title: "Form Checkbox", selectionComponent: void 0, editorComponent: D, renderComponent: ft, handler: i }), $t = ({ handler: i }) => new w({ id: "form_datepicker", title: "Form Datepicker", selectionComponent: void 0, editorComponent: D, renderComponent: vt, handler: i }), wt = ({ handler: i }) => new w({ id: "form_autocomplete", title: "Form Autocomplete", selectionComponent: void 0, editorComponent: D, renderComponent: gt, handler: i }), jt = ({ handler: i }) => new w({ id: "form_media", title: "Form Media", selectionComponent: void 0, editorComponent: D, renderComponent: ht, handler: i }), Dt = ({ handler: i }) => new w({ id: "form_hidden", title: "Form Hidden", selectionComponent: void 0, editorComponent: D, renderComponent: Ct, handler: i }), zt = () => new He({ id: "form_section", name: "form_section", title: "Form Section", editorComponent: St, renderComponent: lt }), ei = (() => { class i {
    constructor(t, n, o) { [bt({ handler: o }), xt({ handler: o }), Ft({ handler: o }), yt({ handler: o }), It({ handler: o }), _t({ handler: o }), Mt({ handler: o }), $t({ handler: o }), wt({ handler: o }), jt({ handler: o }), Dt({ handler: o })].forEach(r => t.register(r)), [zt()].forEach(r => n.register(r)); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275inject(ce.ContentPluginManager), e.\u0275\u0275inject(G.StylePluginManager), e.\u0275\u0275inject(Ce)); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: i }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ imports: [ye, Fe, Ie, _e, Ue, ze, Ke, Te] }); }
} return i; })();
export { pt as AbstractFormContentHandler, gt as FormAutocompleteComponent, ft as FormCheckboxComponent, vt as FormDatepickerComponent, j as FormElementBase, D as FormElementEditorComponent, Ce as FormElementHandler, Ct as FormHiddenComponent, at as FormInputComponent, ht as FormMediaComponent, dt as FormRadiogroupComponent, lt as FormSectionComponent, St as FormSectionEditorComponent, st as FormSelectComponent, mt as FormSliderComponent, ct as FormTextareaComponent, ut as FormToggleComponent, ei as FormsModule, _ as OptionsResolverService };
//# sourceMappingURL=_rollthecloudinc_forms.LimagC43Hr.js.map
