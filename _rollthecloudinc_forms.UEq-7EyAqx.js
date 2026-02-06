import { a as _e } from "@nf-internal/chunk-3UVC664Z";
import { a as Fe } from "@nf-internal/chunk-ISPTYA4B";
import { a as le } from "@nf-internal/chunk-FM6WEN77";
import { a as re, b as ae, h as se } from "@nf-internal/chunk-J4XOFOAH";
import * as v from "@angular/common";
import { CommonModule as Ie } from "@angular/common";
import * as e from "@angular/core";
import "@angular/core";
import * as a from "@angular/forms";
import { UntypedFormControl as R, FormsModule as Me, ReactiveFormsModule as $e } from "@angular/forms";
import { MaterialModule as we } from "@rollthecloudinc/material";
import * as me from "@rollthecloudinc/content";
import { ContentBinding as je, ContentPluginEditorOptions as De, ContentPlugin as I } from "@rollthecloudinc/content";
import * as ue from "@rollthecloudinc/datasource";
import { DatasourceOptions as ze, SelectOption as Oe, Dataset as Te, mockDatasourceOptions as Y, DatasourceModule as Ae } from "@rollthecloudinc/datasource";
import * as g from "@rollthecloudinc/ordain";
import { FormValidation as q, OrdainModule as ke } from "@rollthecloudinc/ordain";
import { of as x, Subject as z, tap as N, ReplaySubject as Ve, take as Pe, BehaviorSubject as w, combineLatest as W, forkJoin as ce, iif as Ee, mergeMap as Ne, map as pe, filter as Be, switchMap as Ge } from "rxjs";
import { switchMap as j, map as y, tap as k, defaultIfEmpty as de, take as Re, takeUntil as Z, debounceTime as Le, distinctUntilChanged as He, withLatestFrom as Ue } from "rxjs/operators";
var te = se(Fe(), 1), fe = se(_e(), 1);
import * as h from "@rollthecloudinc/attributes";
import * as b from "@rollthecloudinc/token";
import * as V from "@rollthecloudinc/panels";
import { PanelPageForm as Je, Pane as G, StylePlugin as qe } from "@rollthecloudinc/panels";
import * as f from "@angular/material/input";
import * as P from "@angular/material/autocomplete";
import * as ie from "@angular/material/select";
import * as ve from "@rollthecloudinc/render";
import { RenderModule as We } from "@rollthecloudinc/render";
import * as O from "@angular/material/dialog";
import { MAT_DIALOG_DATA as ge } from "@angular/material/dialog";
import * as ne from "@angular/material/button";
import * as K from "@angular/material/radio";
import * as Q from "@angular/material/slider";
import * as he from "@angular/material/slide-toggle";
import * as Ce from "@angular/material/checkbox";
import * as B from "@angular/material/datepicker";
import { Param as Ke, Mapping as Qe } from "@rollthecloudinc/dparam";
import * as ye from "@rollthecloudinc/media";
import { MediaFile as Xe } from "@rollthecloudinc/media";
import * as T from "ngx-dropzone";
import { NgxDropzoneModule as Ye } from "ngx-dropzone";
import * as X from "@angular/material/chips";
function Ze(n, d) { if (n & 1 && (e.\u0275\u0275elementStart(0, "mat-error"), e.\u0275\u0275element(1, "druid-ordain-default-validation-error", 2), e.\u0275\u0275elementEnd()), n & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("validators", t.formSettings$.value == null || t.formSettings$.value.validation == null ? null : t.formSettings$.value.validation.validators)("errors", t.formControl.errors)("resolvedContext", t.resolvedContext$.value);
} }
function et(n, d) { if (n & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 2), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), n & 2) {
    let t = d.$implicit;
    e.\u0275\u0275property("value", t.value), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label);
} }
function tt(n, d) { if (n & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div"), e.\u0275\u0275element(1, "classifieds-ui-render-pane", 4), e.\u0275\u0275elementStart(2, "button", 3), e.\u0275\u0275listener("click", function () { let o = e.\u0275\u0275restoreView(t).index, r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r.remove$.next(o)); }), e.\u0275\u0275text(3, "Remove"), e.\u0275\u0275elementEnd()();
} if (n & 2) {
    let t = d.$implicit, i = d.index, o = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("formControlName", i)("pluginName", t.contentPlugin)("settings", t.settings)("name", t.name)("label", t.label)("contexts", t.contexts)("panes", o.panes)("resolvedContext", t.resolvedContext)("indexPosition", i)("ancestory", o.ancestory);
} }
function it(n, d) { if (n & 1 && (e.\u0275\u0275elementStart(0, "mat-error"), e.\u0275\u0275element(1, "druid-ordain-default-validation-error", 2), e.\u0275\u0275elementEnd()), n & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("validators", t.formSettings$.value == null || t.formSettings$.value.validation == null ? null : t.formSettings$.value.validation.validators)("errors", t.formControl.errors)("resolvedContext", t.resolvedContext$.value);
} }
function nt(n, d) { if (n & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 9), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), n & 2) {
    let t = d.$implicit;
    e.\u0275\u0275property("value", t), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t);
} }
function ot(n, d) { if (n & 1 && (e.\u0275\u0275elementStart(0, "mat-radio-button", 2), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), n & 2) {
    let t = d.$implicit;
    e.\u0275\u0275property("value", t.value), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label);
} }
function rt(n, d) { if (n & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 4), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), n & 2) {
    let t = d.$implicit;
    e.\u0275\u0275property("value", t), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label);
} }
function at(n, d) { if (n & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "ngx-dropzone-image-preview", 4), e.\u0275\u0275listener("removed", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext().$implicit, r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r.onRemove(o)); }), e.\u0275\u0275elementStart(1, "ngx-dropzone-label"), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()();
} if (n & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275property("file", t)("removable", !0), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate2("", t.name, " (", t.type, ")");
} }
function st(n, d) { if (n & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "ngx-dropzone-video-preview", 4), e.\u0275\u0275listener("removed", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext().$implicit, r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r.onRemove(o)); }), e.\u0275\u0275elementStart(1, "ngx-dropzone-label"), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()();
} if (n & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275property("file", t)("removable", !0), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate2("", t.name, " (", t.type, ")");
} }
function lt(n, d) { if (n & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "ngx-dropzone-preview", 5), e.\u0275\u0275listener("removed", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext().$implicit, r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r.onRemove(o)); }), e.\u0275\u0275elementStart(1, "ngx-dropzone-label"), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()();
} if (n & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275property("removable", !0), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate2("", t.name, " (", t.type, ")");
} }
function ct(n, d) { if (n & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, at, 3, 4, "ngx-dropzone-image-preview", 2)(2, st, 3, 4, "ngx-dropzone-video-preview", 2)(3, lt, 3, 3, "ngx-dropzone-preview", 3), e.\u0275\u0275elementContainerEnd()), n & 2) {
    let t = d.$implicit, i = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", i.isType(t, "image")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", i.isType(t, "video")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !i.isType(t, "image") && !i.isType(t, "video"));
} }
function pt(n, d) { if (n & 1 && (e.\u0275\u0275elementStart(0, "mat-chip-option", 4), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), n & 2) {
    let t = d.$implicit;
    e.\u0275\u0275property("value", t.value), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate1(" ", t.label, " ");
} }
var L = class {
    constructor(d) { d && (this.value = d.value ? d.value : "", d.datasourceBinding && typeof d.datasourceBinding == "object" && (this.datasourceBinding = new je(d.datasourceBinding)), d.datasourceOptions && typeof d.datasourceOptions == "object" && (this.datasourceOptions = new ze(d.datasourceOptions)), d.validation && (this.validation = new q(d.validation))); }
}, ee = class {
    constructor(d) { d && (this.valuesMapping = d.valuesMapping); }
}, S = (() => { class n {
    constructor(t, i, o, r) { this.tokenizerService = t, this.datasourceContentHandler = i, this.panelResolver = o, this.attributeSerializer = r; }
    resolveElementOptions(t, i) { return x(t).pipe(j(o => { if (o.datasourceBinding && o.datasourceBinding.id && o.datasourceBinding.id !== "") {
        let r = i.has("panes") ? i.get("panes").find(c => c.name === o.datasourceBinding.id) : void 0;
        return this.panelResolver.dataPanes(i.get("panes")).pipe(j(c => r ? this.datasourceContentHandler.fetchDynamicData(r.settings, new Map([...i, ["dataPanes", c]])) : x([])), y(c => [o, c.results]));
    }
    else
        return x([o, []]); }), y(([o, r]) => [o, o.datasourceOptions && o.datasourceOptions.query !== "" ? te.JSONPath({ path: o.datasourceOptions.query, json: r }) : r]), j(([o, r]) => this.mapDataOptions(o, r))); }
    mapDataOptions(t, i) { return x([t, i]).pipe(y(([o, r]) => [o, r, r ? r.map(c => this.tokenizerService.generateGenericTokens(c)) : []]), y(([o, r, c]) => c.map(p => this.mapDataItem(o, p)))); }
    mapDataItem(t, i) { return new Oe({ value: this.tokenizerService.replaceTokens(`${t.datasourceOptions.valueMapping}`, i), label: this.tokenizerService.replaceTokens(`${t.datasourceOptions.labelMapping}`, i), dataItem: void 0 }); }
    hasDataOptions(t) { return t.datasourceBinding && t.datasourceBinding.id && t.datasourceBinding.id !== ""; }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275inject(b.TokenizerService), e.\u0275\u0275inject(V.DatasourceContentHandler), e.\u0275\u0275inject(V.PanelResolverService), e.\u0275\u0275inject(h.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), F = (() => { class n {
    constructor(t, i) { this.tokenizerService = t, this.formService = i, this.cachedResolvedContexts = [], this.scheduleResolution$ = new z, this.scheduleResolutionSub = this.scheduleResolution$.pipe(N(({ resolvedContext: o, index: r }) => { let c = new Map; if (o)
        for (let p in o)
            if (!(o[p] instanceof Je))
                c = new Map([...c, ...this.tokenizerService.generateGenericTokens(o[p], p === "_root" ? "" : p)]);
            else {
                let s = this.formService.serializeForm(o[p]);
                c = new Map([...c, ...this.tokenizerService.generateGenericTokens(s, p === "_root" ? "" : p)]);
            } this.cachedResolvedContexts[r].resolution$.next(c); })).subscribe(); }
    resolveContexts({ resolvedContext: t }) { let i = this.cachedResolvedContexts.findIndex(({ rContext: o }) => fe.getDiff(o, t).length === 0); return i === -1 ? (console.log("resolved context no cache", t), i = this.cachedResolvedContexts.length, this.cachedResolvedContexts.push({ rContext: t, resolution$: new Ve(1) }), this.scheduleResolution$.next({ resolvedContext: t, index: i })) : console.log("resolved context cache hit", t), this.cachedResolvedContexts[i].resolution$.pipe(Pe(1)); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275inject(b.TokenizerService), e.\u0275\u0275inject(V.FormService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), M = (() => { class n {
    set label(t) { this.label$.next(t); }
    set settings(t) { this.settings$.next(t); }
    set panes(t) { this.panes$.next(t); }
    set originPanes(t) { this.originPanes$.next(t); }
    set contexts(t) { this.contexts$.next(t); }
    set resolvedContext(t) { this.resolvedContext$.next(t); }
    constructor(t, i, o, r, c, p) { this.attributeSerializer = t, this.optionsResolver = i, this.tokenizerService = o, this.formsContextHelper = r, this.vpm = c, this.controlContainer = p, this.formControl = new R(""), this.formControlValueChangesSub = this.formControl.valueChanges.pipe(k(s => console.log("serialized form value", this.attributeSerializer.serialize(s, "value"))), k(s => this.controlContainer.control.get("settings").setValue([this.attributeSerializer.serialize(s, "value")]))).subscribe(), this.formSettings$ = new w(void 0), this.settings$ = new w([]), this.options$ = new w([]), this.init$ = new z, this.afterViewInit$ = new z, this.panes$ = new w([]), this.originPanes$ = new w([]), this.contexts$ = new w([]), this.resolvedContext$ = new w(void 0), this.value$ = new z, this.label$ = new w(void 0), this.settingsSub = this.settings$.pipe(y(s => s ? this.settingsToObject(this.attributeSerializer.deserializeAsObject(s)) : void 0), k(s => this.formSettings$.next(s))).subscribe(), this.loadOptionsSub = W([this.formSettings$, this.panes$, this.originPanes$, this.contexts$, this.init$]).pipe(y(([s, l, m, u]) => ({ settings: s, metadata: new Map([["panes", [...l && Array.isArray(l) ? l : [], ...m && Array.isArray(m) ? m : []]], ["contexts", u]]) })), j(({ settings: s, metadata: l }) => this.optionsResolver.resolveElementOptions(s, l)), k(s => this.options$.next(s))).subscribe(), this.renderContentSub = W([this.formSettings$, this.resolvedContext$, this.afterViewInit$]).pipe(y(([s, l]) => ({ settings: s, resolvedContext: l })), j(({ settings: s, resolvedContext: l }) => this.formsContextHelper.resolveContexts({ resolvedContext: l }).pipe(y(m => ({ settings: s, tokens: m })))), j(({ settings: s, tokens: l }) => ce(s.validation && s.validation.validators ? s.validation.validators.map(m => this.vpm.getPlugin(m.validator).pipe(j(u => u.builder({ v: m, serialized: !1 }).pipe(y(C => ({ v: m, vf: C })))))) : []).pipe(y(m => ({ settings: s, tokens: l, validators: m })), de({ settings: s, tokens: l, validators: [] }))), j(({ settings: s, tokens: l, validators: m }) => ce(s.validation && s.validation.validators ? s.validation.validators.map(u => this.vpm.getPlugin(u.validator).pipe(j(C => C.builder({ v: u, serialized: !0 }).pipe(y(D => ({ v: u, vf: D })))))) : []).pipe(y(u => ({ settings: s, tokens: l, validators: m, validatorsSerialized: u })), de({ settings: s, tokens: l, validators: m, validatorsSerialized: [] }))), k(({ settings: s, tokens: l, validators: m, validatorsSerialized: u }) => { if (this.formControl.setAsyncValidators(m.map(({ vf: C }) => C)), this.controlContainer.control.get("settings").setAsyncValidators(u.map(({ vf: C }) => C)), this.formControl.updateValueAndValidity(), this.controlContainer.control.updateValueAndValidity(), l !== void 0 && (this.tokens = l), s.value && s.value !== null && s.value !== "") {
        (s.value.indexOf(".$i.") !== -1 || s.value.indexOf(".$j.") !== -1 || s.value.indexOf(".$k.") !== -1) && console.log(s.value, this.ancestory);
        let C = s.value.split("$i"), D = C.map((A, _) => this.ancestory[_ * 1 + (3 + (_ === 0 ? 0 : 3))]), H = C.reduce((A, _, E) => [...A, E === 0 ? "" : E - 1 < D.length ? `${D[E - 1]}` : "", _], []).join("");
        console.log("path", H);
        let { resolvedValue: U, remainingExpression: xe } = this.replaceTokens(H, l);
        if (U !== void 0) {
            this.formControl.setValue(U), this.value$.next(U);
            return;
        }
        let J = this.tokenizerService.discoverTokens(xe, !0);
        if (J.length !== 0)
            if (J[0].trim().lastIndexOf(".id") === J[0].trim().length - 3) {
                let A = le();
                this.formControl.setValue(A), this.value$.next(A);
            }
            else {
                let A = Array.from(l).filter(([_]) => _.indexOf(H.substr(1, H.length - 2)) === 0);
                if (A.length !== 0) {
                    let _ = A.reduce((E, [oe, Se]) => ae(re({}, E), { [oe.substr(oe.lastIndexOf(".") + 1)]: Se }), {});
                    this.formControl.setValue(_), this.value$.next(_);
                }
                else {
                    let _ = this.tokenizerService.replaceTokens(s.value, new Map(Array.from(J).map(E => [E, ""])));
                    this.formControl.setValue(_), this.value$.next(_);
                }
            }
        else
            this.value$.next(U);
    }
    else
        this.formControl.setValue(""); }), Re(1)).subscribe(); }
    ngOnInit() { this.init$.next(void 0); }
    ngAfterViewInit() { this.afterViewInit$.next(void 0); }
    settingsToObject(t) { return new L(t); }
    replaceTokens(t, i) { if (!t)
        return { resolvedValue: t, remainingExpression: "" }; let o = t, r = !1, c = [], p = []; i.forEach((u, C) => { let D = `[${C}]`; t.includes(D) && c.push(D); }), c.forEach(u => { let C = u.substring(1, u.length - 1), D = i.get(C); D !== void 0 && (r = !0, o = o.split(u).join(JSON.stringify(D))); }); let s = o.match(/(\[(?:\[??[^\[]*?\]))/g); s && p.push(...s); let l = t; if (c.forEach(u => { let C = u.substring(1, u.length - 1); i.has(C) && (l = l.replace(u, "")); }), l = l.trim(), !r)
        return { resolvedValue: void 0, remainingExpression: l }; let m = o; try {
        m = JSON.parse(o);
    }
    catch { } return { resolvedValue: m, remainingExpression: l }; }
    markAsTouched() { this.formControl.markAllAsTouched(); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(S), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275dir = e.\u0275\u0275defineDirective({ type: n, selectors: [["", "druid-forms-form-element-base", ""]], inputs: { tokens: "tokens", label: "label", settings: "settings", panes: "panes", originPanes: "originPanes", contexts: "contexts", resolvedContext: "resolvedContext", ancestory: "ancestory" }, standalone: !1 }); }
} return n; })(), dt = (() => { class n extends M {
    constructor(t, i, o, r, c, p) { super(t, i, o, r, c, p); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(S), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-input"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 5, consts: [["matInput", "", 3, "formControl"], [4, "ngIf"], [3, "validators", "errors", "resolvedContext"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label"), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(4, "input", 0), e.\u0275\u0275template(5, Ze, 2, 3, "mat-error", 1), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 3, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", o.formControl.invalid)); }, dependencies: [v.NgIf, a.DefaultValueAccessor, a.NgControlStatus, a.FormControlDirective, f.MatInput, f.MatFormField, f.MatLabel, f.MatError, g.DefaultValidationError, v.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{display:block}"] }); }
} return n; })(), mt = (() => { class n extends M {
    constructor(t, i, o, r, c, p) { super(t, i, o, r, c, p); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(S), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-select"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 7, consts: [[3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label"), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(4, "mat-select", 0), e.\u0275\u0275template(5, et, 2, 2, "mat-option", 1), e.\u0275\u0275pipe(6, "async"), e.\u0275\u0275elementEnd()()), i & 2 && (e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 3, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(6, 5, o.options$))); }, dependencies: [v.NgForOf, a.NgControlStatus, a.FormControlDirective, P.MatOption, f.MatFormField, f.MatLabel, ie.MatSelect, v.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{display:block}"] }); }
} return n; })(), ut = (() => { class n {
    set settings(t) { this.settings$.next(t); }
    set resolvedContext(t) { this.resolvedContext$.next(t); }
    set panel(t) { this.panel$.next(t); }
    get panesFormArray() { let t = this.controlContainer?.control; return t ? t.get("panes") : null; }
    constructor(t, i, o) { this.attributeSerializer = t, this.fb = i, this.controlContainer = o, this.panes = [], this.originMappings = [], this.ancestory = [], this.add$ = new z, this.remove$ = new z, this.settings$ = new w([]), this.resolvedContext$ = new w(null), this.panel$ = new w(null), this.afterViewInit$ = new z, this.destroy$ = new z; }
    ngOnInit() { this.add$.pipe(Z(this.destroy$)).subscribe(() => { let t = this.panes && this.panes.length > 0 ? new G(this.panes[0]) : new G; this.panes.push(t), this.syncFormArray(); }), this.remove$.pipe(Z(this.destroy$)).subscribe(t => { t > -1 && t < this.panes.length && (this.panes.splice(t, 1), this.syncFormArray()); }), W([this.settings$.pipe(y(t => t ? new ee(this.attributeSerializer.deserializeAsObject(t)) : void 0)), this.resolvedContext$, this.panel$, this.afterViewInit$]).pipe(y(([t, i, o]) => { if (i && t?.valuesMapping?.trim()) {
        let r = t.valuesMapping.split("[$i]"), c = r.map((l, m) => this.ancestory[m * 1 + 3]), p = r.reduce((l, m, u) => [...l, u === 0 ? "" : u - 1 < c.length ? `[${c[u - 1]}]` : "", m], []).join("");
        return { items: te.JSONPath({ path: `$.${p}.*`, json: i }) };
    } return { items: [] }; }), k(({ items: t }) => { if (t && t.length > this.panes.length) {
        let i = t.length - this.panes.length;
        for (let o = 0; o < i; o++) {
            let r = this.panes.length > 0 ? this.panes[0] : new G;
            this.panes.push(new G(r));
        }
        this.syncFormArray();
    } }), Z(this.destroy$)).subscribe(); }
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
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-form-section"]], inputs: { panes: "panes", originPanes: "originPanes", originMappings: "originMappings", ancestory: "ancestory", settings: "settings", resolvedContext: "resolvedContext", panel: "panel" }, standalone: !1, features: [e.\u0275\u0275NgOnChangesFeature], decls: 5, vars: 2, consts: [[3, "formGroup"], ["formArrayName", "panes"], [4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [3, "formControlName", "pluginName", "settings", "name", "label", "contexts", "panes", "resolvedContext", "indexPosition", "ancestory"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementContainerStart(0, 0)(1, 1), e.\u0275\u0275template(2, tt, 4, 10, "div", 2), e.\u0275\u0275elementContainerEnd()(), e.\u0275\u0275elementStart(3, "button", 3), e.\u0275\u0275listener("click", function () { return o.add$.next(void 0); }), e.\u0275\u0275text(4, "Add Item"), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("formGroup", o.controlContainer.control), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", o.panes)); }, dependencies: [v.NgForOf, a.NgControlStatus, a.NgControlStatusGroup, a.FormGroupDirective, a.FormControlName, a.FormArrayName, ve.RenderPaneComponent], encapsulation: 2 }); }
} return n; })(), ft = (() => { class n extends M {
    constructor(t, i, o, r, c, p) { super(t, i, o, r, c, p), this.cols = 20, this.rows = 20; }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(S), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-textarea"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 6, vars: 7, consts: [["matInput", "", 3, "formControl", "cols", "rows"], [4, "ngIf"], [3, "validators", "errors", "resolvedContext"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label"), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(4, "textarea", 0), e.\u0275\u0275template(5, it, 2, 3, "mat-error", 1), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 5, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("formControl", o.formControl)("cols", o.cols)("rows", o.rows), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", o.formControl.invalid)); }, dependencies: [v.NgIf, a.DefaultValueAccessor, a.NgControlStatus, a.FormControlDirective, f.MatInput, f.MatFormField, f.MatLabel, f.MatError, g.DefaultValidationError, v.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{display:block}"] }); }
} return n; })(), vt = (() => { class n {
    constructor(t) { this.attributeSerializer = t; }
    handleFile(t) { return x([]); }
    handlesType(t) { return !1; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(t) { return x(!1); }
    isDynamic(t) { return !1; }
    isData(t) { return !1; }
    getBindings(t, i, o) { return i === "pane" ? this.toObject(t).pipe(j(r => Ee(() => r.datasourceBinding && r.datasourceBinding.id && r.datasourceBinding.id !== null, x([r.datasourceBinding]), x([])))) : i === "context" ? x([]) : x([]); }
    fetchDynamicData(t, i) { return x(new Te); }
    buildDynamicItems(t, i) { return x([]); }
    toObject(t) { return x(new L(this.attributeSerializer.deserializeAsObject(t))); }
    buildSettings(t) { return this.attributeSerializer.serialize(t, "root").attributes; }
    stateDefinition(t) { return x({ autocomplete: { input: "" }, value: void 0 }); }
    editorOptions(t) { return x(new De); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275inject(h.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac }); }
} return n; })(), be = (() => { class n extends vt {
    static { this.\u0275fac = (() => { let t; return function (o) { return (t || (t = e.\u0275\u0275getInheritedFactory(n)))(o || n); }; })(); }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), $ = (() => { class n {
    get paneGroup() { return this.data.panelFormGroup.get("panes").at(this.paneIndex); }
    constructor(t, i, o, r, c) { this.data = t, this.dialogRef = i, this.fb = o, this.handler = r, this.attributeSerializer = c, this.datasourceOptions = Y, this.validation = new q({ validators: [] }), this.bindableOptions = [], this.formGroup = this.fb.group({ value: this.fb.control(""), datasourceOptions: this.fb.control(""), validation: this.fb.control(""), datasourceBinding: this.fb.group({ id: this.fb.control(""), type: this.fb.control("pane") }) }), this.paneIndex = t.paneIndex, this.pane = t.pane; }
    ngOnInit() { this.data.pane ? this.handler.toObject(this.data.pane.settings).subscribe(t => { console.log("Form Editor Data Pane Data", t), this.formGroup.patchValue({ value: t.value, datasourceOptions: t.datasourceOptions || Y, datasourceBinding: { id: t.datasourceBinding?.id || "", type: "pane" } }), this.datasourceOptions = t.datasourceOptions || Y, this.validation = t.validation ? new q(t.validation) : new q({ validators: [] }); }) : (this.data.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: this.data.plugin.id, name: new R(""), label: new R(""), rule: new R(""), settings: this.fb.array([]) })), this.paneIndex = this.data.panelFormGroup.get("panes").length - 1, this.pane = new G(this.data.panelFormGroup.get("panes").at(this.paneIndex).value)), this.bindableOptions = this.data.panelFormGroup.get("panes").controls.reduce((t, i) => i.get("name").value ? [...t, i.get("name").value] : t, []); }
    submit() { console.log(this.formGroup.value); let t = new L(this.formGroup.value); console.log("losing options debug", t), this.paneGroup.get("settings").clear(), this.handler.buildSettings(t).map(o => this.attributeSerializer.convertToGroup(o)).forEach(o => this.paneGroup.get("settings").push(o)), this.dialogRef.close(); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(ge), e.\u0275\u0275directiveInject(O.MatDialogRef), e.\u0275\u0275directiveInject(a.UntypedFormBuilder), e.\u0275\u0275directiveInject(be), e.\u0275\u0275directiveInject(h.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-element-editor"]], inputs: { bindableOptions: "bindableOptions" }, standalone: !1, decls: 17, vars: 3, consts: [[3, "ngSubmit", "formGroup"], ["fxLayout", "column"], ["matInput", "", "formControlName", "value"], ["formGroupName", "datasourceBinding"], ["required", "", "formControlName", "id"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "datasourceOptions"], ["formControlName", "validation", 3, "validation"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", ""], [3, "value"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return o.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content", 1)(2, "div")(3, "mat-form-field")(4, "mat-label"), e.\u0275\u0275text(5, "Value"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(6, "input", 2), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(7, "mat-form-field", 3)(8, "mat-label"), e.\u0275\u0275text(9, "Datasource"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(10, "mat-select", 4), e.\u0275\u0275template(11, nt, 2, 2, "mat-option", 5), e.\u0275\u0275elementEnd()(), e.\u0275\u0275element(12, "classifieds-ui-datasource-options", 6)(13, "druid-ordain-validation-editor", 7), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(14, "mat-dialog-actions")(15, "button", 8), e.\u0275\u0275text(16, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", o.formGroup), e.\u0275\u0275advance(11), e.\u0275\u0275property("ngForOf", o.bindableOptions), e.\u0275\u0275advance(2), e.\u0275\u0275property("validation", o.validation)); }, dependencies: [v.NgForOf, a.\u0275NgNoValidate, a.DefaultValueAccessor, a.NgControlStatus, a.NgControlStatusGroup, a.RequiredValidator, a.FormGroupDirective, a.FormControlName, a.FormGroupName, P.MatOption, ne.MatButton, O.MatDialogClose, O.MatDialogActions, O.MatDialogContent, f.MatInput, f.MatFormField, f.MatLabel, ie.MatSelect, ue.DatasourceOptionsComponent, g.ValidationEditorComponent], encapsulation: 2 }); }
} return n; })(), gt = (() => { class n extends M {
    constructor(t, i, o, r, c, p) { super(t, i, o, r, c, p); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(S), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-radiogroup"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 7, consts: [[3, "formControl", "aria-label"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "mat-radio-group", 0), e.\u0275\u0275pipe(1, "async"), e.\u0275\u0275template(2, ot, 2, 2, "mat-radio-button", 1), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275ariaProperty("aria-label", e.\u0275\u0275pipeBind1(1, 3, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(3, 5, o.options$))); }, dependencies: [v.NgForOf, a.NgControlStatus, a.FormControlDirective, K.MatRadioGroup, K.MatRadioButton, v.AsyncPipe], encapsulation: 2 }); }
} return n; })(), ht = (() => { class n extends M {
    constructor(t, i, o, r, c, p) { super(t, i, o, r, c, p); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(S), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-slider"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 4, consts: [[3, "formControl", "aria-label"], ["matSliderThumb", ""]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "mat-slider", 0), e.\u0275\u0275pipe(1, "async"), e.\u0275\u0275element(2, "input", 1), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275ariaProperty("aria-label", e.\u0275\u0275pipeBind1(1, 2, o.label$))); }, dependencies: [a.NgControlStatus, a.FormControlDirective, Q.MatSlider, Q.MatSliderThumb, v.AsyncPipe], styles: ["mat-slider[_ngcontent-%COMP%]{display:block}"] }); }
} return n; })(), Ct = (() => { class n extends M {
    constructor(t, i, o, r, c, p) { super(t, i, o, r, c, p); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(S), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-toggle"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 4, consts: [[1, "toggle-container"], [3, "formControl"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "mat-slide-toggle", 1), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd()()), i & 2 && (e.\u0275\u0275advance(), e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 2, o.label$))); }, dependencies: [a.NgControlStatus, a.FormControlDirective, he.MatSlideToggle, v.AsyncPipe], styles: [".toggle-container[_ngcontent-%COMP%]{padding-bottom:1em}"] }); }
} return n; })(), yt = (() => { class n extends M {
    constructor(t, i, o, r, c, p) { super(t, i, o, r, c, p); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(S), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-checkbox"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 4, consts: [[3, "formControl"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "mat-checkbox", 0), e.\u0275\u0275text(1), e.\u0275\u0275pipe(2, "async"), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(2, 2, o.label$))); }, dependencies: [a.NgControlStatus, a.FormControlDirective, Ce.MatCheckbox, v.AsyncPipe], encapsulation: 2 }); }
} return n; })(), bt = (() => { class n extends M {
    constructor(t, i, o, r, c, p) { super(t, i, o, r, c, p); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(S), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-datepicker"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 6, consts: [["picker", ""], ["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"]], template: function (i, o) { if (i & 1 && (e.\u0275\u0275elementStart(0, "mat-form-field", 1)(1, "mat-label"), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(4, "input", 2)(5, "mat-datepicker-toggle", 3)(6, "mat-datepicker", null, 0), e.\u0275\u0275elementEnd()), i & 2) {
            let r = e.\u0275\u0275reference(7);
            e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 4, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("matDatepicker", r)("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275property("for", r);
        } }, dependencies: [a.DefaultValueAccessor, a.NgControlStatus, a.FormControlDirective, B.MatDatepicker, B.MatDatepickerInput, B.MatDatepickerToggle, f.MatInput, f.MatFormField, f.MatLabel, f.MatSuffix, v.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{display:block}"] }); }
} return n; })(), xt = (() => { class n extends M {
    constructor(t, i, o, r, c, p) { super(t, i, o, r, c, p), this.proxyControl = new R(""), this.optionSelected$ = new z, this.proxyControlValueChangesSub = this.proxyControl.valueChanges.pipe(Le(1e3), He(), Ue(W([this.formSettings$, this.panes$, this.originPanes$, this.contexts$]).pipe(y(([s, l, m, u]) => ({ settings: s, panes: l, originPanes: m, contexts: u })))), y(([s, { settings: l, panes: m, originPanes: u, contexts: C }]) => ({ term: s, settings: l, metadata: new Map([["panes", [...m && Array.isArray(m) ? m : [], ...u && Array.isArray(u) ? u : []]], ["contexts", C], ["inputparams", new Map([["term", new Ke({ flags: [], mapping: new Qe({ value: s, testValue: s, type: "static", context: void 0 }) })]])]]) })), j(({ settings: s, metadata: l }) => this.optionsResolver.resolveElementOptions(s, l)), k(s => this.options$.next(s))).subscribe(), this.optionSelectedSub = this.optionSelected$.pipe(k(s => this.formControl.setValue(s.option && s.option.value ? s.option.value.value : ""))).subscribe(), this.displayAuto = s => s.label; }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(S), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-autocomplete"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 9, consts: [["autocomplete", "matAutocomplete"], ["matInput", "", 3, "matAutocomplete", "formControl"], [3, "optionSelected", "displayWith"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function (i, o) { if (i & 1) {
            let r = e.\u0275\u0275getCurrentView();
            e.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-label"), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(4, "input", 1), e.\u0275\u0275elementStart(5, "mat-autocomplete", 2, 0), e.\u0275\u0275listener("optionSelected", function (p) { return e.\u0275\u0275restoreView(r), e.\u0275\u0275resetView(o.optionSelected$.next(p)); }), e.\u0275\u0275template(7, rt, 2, 2, "mat-option", 3), e.\u0275\u0275pipe(8, "async"), e.\u0275\u0275elementEnd()();
        } if (i & 2) {
            let r = e.\u0275\u0275reference(6);
            e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 5, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("matAutocomplete", r)("formControl", o.proxyControl), e.\u0275\u0275advance(), e.\u0275\u0275property("displayWith", o.displayAuto), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(8, 7, o.options$));
        } }, dependencies: [v.NgForOf, a.DefaultValueAccessor, a.NgControlStatus, a.FormControlDirective, P.MatAutocomplete, P.MatOption, P.MatAutocompleteTrigger, f.MatInput, f.MatFormField, f.MatLabel, v.AsyncPipe], styles: ["mat-form-field[_ngcontent-%COMP%]{display:block}"] }); }
} return n; })(), St = (() => { class n extends M {
    constructor(t, i, o, r, c, p, s) { super(t, i, r, c, p, s), this.files = [], this.select$ = new z, this.selectSub = this.select$.pipe(N(l => console.log(l)), Ne(l => this.filesService.bulkUpload({ files: [l.addedFiles[0]] }).pipe(pe(m => ({ mfs: m, e: l })))), N(({ mfs: l }) => this.formControl.setValue(l[0])), N(({ e: l }) => this.files.push(...l.addedFiles))).subscribe(), this.valueSub = this.value$.pipe(Be(l => typeof l == "object"), pe(l => new Xe(l)), N(l => { console.log("populate value", l); }), Ge(l => this.filesService.convertToFiles([l])), N(l => { console.log("populate as file", l), this.files = l; })).subscribe(), this.filesService = o; }
    onSelect(t) { this.select$.next(t); }
    onRemove(t) { console.log(t), this.formControl.setValue(""), this.files.splice(this.files.indexOf(t), 1); }
    isType(t, i) { switch (i) {
        case "image": return this.filesService.isImage({ file: t });
        case "video": return this.filesService.isVideo({ file: t });
        default: return !1;
    } }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(S), e.\u0275\u0275directiveInject(ye.FilesService), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-media"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 1, consts: [[3, "change"], [4, "ngFor", "ngForOf"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed", 4, "ngIf"], [3, "removable", "removed", 4, "ngIf"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "removed", "file", "removable"], [3, "removed", "removable"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "ngx-dropzone", 0), e.\u0275\u0275listener("change", function (c) { return o.onSelect(c); }), e.\u0275\u0275elementStart(1, "ngx-dropzone-label"), e.\u0275\u0275text(2, "Drop it, baby!"), e.\u0275\u0275elementEnd(), e.\u0275\u0275template(3, ct, 4, 3, "ng-container", 1), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275advance(3), e.\u0275\u0275property("ngForOf", o.files)); }, dependencies: [v.NgForOf, v.NgIf, T.NgxDropzoneComponent, T.NgxDropzoneLabelDirective, T.NgxDropzonePreviewComponent, T.NgxDropzoneImagePreviewComponent, T.NgxDropzoneVideoPreviewComponent], encapsulation: 2 }); }
} return n; })(), Ft = (() => { class n extends M {
    constructor(t, i, o, r, c, p) { super(t, i, o, r, c, p); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(S), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-hidden"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function (i, o) { }, encapsulation: 2 }); }
} return n; })(), _t = (() => { class n {
    constructor(t, i, o, r) { this.data = t, this.dialogRef = i, this.fb = o, this.attributeSerializer = r, this.contexts = [], this.formGroup = this.fb.group({ valuesMapping: this.fb.control("") }); }
    ngOnInit() { }
    submit() { this.data.panelFormGroup.get("settings").clear(), this.attributeSerializer.serialize(this.formGroup.value, "root").attributes.forEach(t => { console.log("formly repeating editor form"), console.log(this.attributeSerializer.convertToGroup(t)), this.data.panelFormGroup.get("settings").push(this.attributeSerializer.convertToGroup(t)); }); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(ge), e.\u0275\u0275directiveInject(O.MatDialogRef), e.\u0275\u0275directiveInject(a.UntypedFormBuilder), e.\u0275\u0275directiveInject(h.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-form-section-editor"]], standalone: !1, decls: 8, vars: 2, consts: [[3, "ngSubmit", "formGroup"], ["matInput", "", "formControlName", "valuesMapping"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return o.submit(); }), e.\u0275\u0275elementStart(1, "div")(2, "mat-form-field")(3, "mat-label"), e.\u0275\u0275text(4, "Values Mapping"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(5, "input", 1), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(6, "button", 2), e.\u0275\u0275text(7, "Save"), e.\u0275\u0275elementEnd()()), i & 2 && (e.\u0275\u0275property("formGroup", o.formGroup), e.\u0275\u0275advance(6), e.\u0275\u0275property("disabled", !o.formGroup.valid)); }, dependencies: [a.\u0275NgNoValidate, a.DefaultValueAccessor, a.NgControlStatus, a.NgControlStatusGroup, a.FormGroupDirective, a.FormControlName, ne.MatButton, O.MatDialogClose, f.MatInput, f.MatFormField, f.MatLabel], encapsulation: 2 }); }
} return n; })(), It = (() => { class n extends M {
    constructor(t, i, o, r, c, p) { super(t, i, o, r, c, p); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(h.AttributeSerializerService), e.\u0275\u0275directiveInject(S), e.\u0275\u0275directiveInject(b.TokenizerService), e.\u0275\u0275directiveInject(F), e.\u0275\u0275directiveInject(g.ValidationPluginManager), e.\u0275\u0275directiveInject(a.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-forms-form-listbox"]], standalone: !1, features: [e.\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 7, consts: [[1, "form-listbox"], [1, "form-listbox-label"], ["multiple", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "label", 1), e.\u0275\u0275text(2), e.\u0275\u0275pipe(3, "async"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(4, "mat-chip-listbox", 2), e.\u0275\u0275template(5, pt, 2, 2, "mat-chip-option", 3), e.\u0275\u0275pipe(6, "async"), e.\u0275\u0275elementEnd()()), i & 2 && (e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3, 3, o.label$)), e.\u0275\u0275advance(2), e.\u0275\u0275property("formControl", o.formControl), e.\u0275\u0275advance(), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(6, 5, o.options$))); }, dependencies: [v.NgForOf, a.NgControlStatus, a.FormControlDirective, X.MatChipListbox, X.MatChipOption, v.AsyncPipe], styles: [".form-listbox[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.form-listbox-label[_ngcontent-%COMP%]{font-size:12px;color:#0009}"] }); }
} return n; })(), Mt = ({ handler: n }) => new I({ id: "form_input", title: "Form Input", selectionComponent: void 0, editorComponent: $, renderComponent: dt, handler: n }), $t = ({ handler: n }) => new I({ id: "form_select", title: "Form Select", selectionComponent: void 0, editorComponent: $, renderComponent: mt, handler: n }), wt = ({ handler: n }) => new I({ id: "form_listbox", title: "Form Listbox", selectionComponent: void 0, editorComponent: $, renderComponent: It, handler: n }), jt = ({ handler: n }) => new I({ id: "form_radiogroup", title: "Form Radiogroup", selectionComponent: void 0, editorComponent: $, renderComponent: gt, handler: n }), Dt = ({ handler: n }) => new I({ id: "form_textarea", title: "Form Textarea", selectionComponent: void 0, editorComponent: $, renderComponent: ft, handler: n }), zt = ({ handler: n }) => new I({ id: "form_slider", title: "Form Slider", selectionComponent: void 0, editorComponent: $, renderComponent: ht, handler: n }), Ot = ({ handler: n }) => new I({ id: "form_toggle", title: "Form Toggle", selectionComponent: void 0, editorComponent: $, renderComponent: Ct, handler: n }), Tt = ({ handler: n }) => new I({ id: "form_checkbox", title: "Form Checkbox", selectionComponent: void 0, editorComponent: $, renderComponent: yt, handler: n }), At = ({ handler: n }) => new I({ id: "form_datepicker", title: "Form Datepicker", selectionComponent: void 0, editorComponent: $, renderComponent: bt, handler: n }), kt = ({ handler: n }) => new I({ id: "form_autocomplete", title: "Form Autocomplete", selectionComponent: void 0, editorComponent: $, renderComponent: xt, handler: n }), Vt = ({ handler: n }) => new I({ id: "form_media", title: "Form Media", selectionComponent: void 0, editorComponent: $, renderComponent: St, handler: n }), Pt = ({ handler: n }) => new I({ id: "form_hidden", title: "Form Hidden", selectionComponent: void 0, editorComponent: $, renderComponent: Ft, handler: n }), Et = () => new qe({ id: "form_section", name: "form_section", title: "Form Section", editorComponent: _t, renderComponent: ut }), si = (() => { class n {
    constructor(t, i, o) { [Mt({ handler: o }), $t({ handler: o }), Dt({ handler: o }), jt({ handler: o }), zt({ handler: o }), Ot({ handler: o }), Tt({ handler: o }), At({ handler: o }), kt({ handler: o }), Vt({ handler: o }), Pt({ handler: o }), wt({ handler: o })].forEach(r => t.register(r)), [Et()].forEach(r => i.register(r)); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275inject(me.ContentPluginManager), e.\u0275\u0275inject(V.StylePluginManager), e.\u0275\u0275inject(be)); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: n }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ imports: [Ie, Me, $e, we, We, Ae, Ye, ke] }); }
} return n; })();
export { vt as AbstractFormContentHandler, xt as FormAutocompleteComponent, yt as FormCheckboxComponent, bt as FormDatepickerComponent, M as FormElementBase, $ as FormElementEditorComponent, be as FormElementHandler, Ft as FormHiddenComponent, dt as FormInputComponent, It as FormListboxComponent, St as FormMediaComponent, gt as FormRadiogroupComponent, ut as FormSectionComponent, _t as FormSectionEditorComponent, mt as FormSelectComponent, ht as FormSliderComponent, ft as FormTextareaComponent, Ct as FormToggleComponent, si as FormsModule, S as OptionsResolverService };
