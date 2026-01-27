import { a as Ct } from "@nf-internal/chunk-CAFTJBEE";
import { a as V } from "@nf-internal/chunk-7XNIKSHD";
import { a as v, b as S, f as It, h as ze } from "@nf-internal/chunk-GL2BOVXA";
var Ne = It((be, Ee) => {
    (function (n, s) { typeof define == "function" && define.amd ? define([], s) : typeof be == "object" ? Ee.exports = s() : n.CSSJSON = s(); })(be, function () {
        var n = new function () {
            var s = this;
            s.init = function () { String.prototype.trim = function () { return this.replace(/^\s+|\s+$/g, ""); }, String.prototype.repeat = function (b) { return new Array(1 + b).join(this); }; }, s.init();
            var e = /([^\s\;\{\}][^\;\{\}]*)\{/g, t = /\}/g, a = /([^\;\{\}]*)\;/g, o = /\/\*[\s\S]*?\*\//g, l = /([^\:]+):([^\;]*);/, c = /(\/\*[\s\S]*?\*\/)|([^\s\;\{\}][^\;\{\}]*(?=\{))|(\})|([^\;\{\}]+\;(?!\s*\*\/))/gmi, p = 1, u = 2, d = 3, g = 4, I = function (b) { return typeof b > "u" || b.length == 0 || b == null; };
            s.toJSON = function (b, w) { var P = { children: {}, attributes: {} }, C = null, N = 0; if (typeof w > "u")
                var w = { ordered: !1, comments: !1, stripComments: !1, split: !1 }; for (w.stripComments && (w.comments = !1, b = b.replace(o, "")); (C = c.exec(b)) != null;)
                if (!I(C[p]) && w.comments) {
                    var te = C[p].trim();
                    P[N++] = te;
                }
                else if (I(C[u]))
                    if (I(C[d])) {
                        if (!I(C[g])) {
                            var Oe = C[g].trim(), Pe = l.exec(Oe);
                            if (Pe) {
                                var M = Pe[1].trim(), ye = Pe[2].trim();
                                if (w.ordered) {
                                    var R = {};
                                    R.name = M, R.value = ye, R.type = "attr", P[N++] = R;
                                }
                                else if (M in P.attributes) {
                                    var Ae = P.attributes[M];
                                    Ae instanceof Array || (P.attributes[M] = [Ae]), P.attributes[M].push(ye);
                                }
                                else
                                    P.attributes[M] = ye;
                            }
                            else
                                P[N++] = Oe;
                        }
                    }
                    else
                        return P;
                else {
                    var M = C[u].trim(), ce = s.toJSON(b, w);
                    if (w.ordered) {
                        var R = {};
                        R.name = M, R.value = ce, R.type = "rule", P[N++] = R;
                    }
                    else {
                        if (w.split)
                            var ge = M.split(",");
                        else
                            var ge = [M];
                        for (i in ge) {
                            var ve = ge[i].trim();
                            if (ve in P.children)
                                for (var ke in ce.attributes)
                                    P.children[ve].attributes[ke] = ce.attributes[ke];
                            else
                                P.children[ve] = ce;
                        }
                    }
                } return P; }, s.toCSS = function (b, w, P) {
                var C = "";
                if (typeof w > "u" && (w = 0), typeof P > "u" && (P = !1), b.attributes)
                    for (i in b.attributes) {
                        var N = b.attributes[i];
                        if (N instanceof Array)
                            for (var te = 0; te < N.length; te++)
                                C += B(i, N[te], w);
                        else
                            C += B(i, N, w);
                    }
                if (b.children) {
                    var M = !0;
                    for (i in b.children)
                        P && !M ? C += `
` : M = !1, C += ee(i, b.children[i], w);
                }
                return C;
            };
            var B = function (b, w, P) {
                return "	".repeat(P) + b + ": " + w + `;
`;
            }, ee = function (b, w, P) {
                var C = "	".repeat(P) + b + ` {
`;
                return C += s.toCSS(w, P + 1), C += "	".repeat(P) + `}
`, C;
            };
        };
        return n;
    });
});
import * as L from "@angular/common";
import { isPlatformServer as Se, CommonModule as xt } from "@angular/common";
import * as r from "@angular/core";
import { forwardRef as Re, InjectionToken as Ke, PLATFORM_ID as jt } from "@angular/core";
import * as z from "@ngrx/data";
import { DefaultPluralizer as Mt, Pluralizer as Dt } from "@ngrx/data";
import * as y from "@angular/forms";
import { NG_VALUE_ACCESSOR as $t, NG_VALIDATORS as Ft, UntypedFormControl as j, Validators as Y, UntypedFormArray as _t, FormsModule as Tt, ReactiveFormsModule as kt } from "@angular/forms";
import { of as m, BehaviorSubject as ie, iif as F, forkJoin as x, Observable as Ye, Subject as Ot, Subscription as At } from "rxjs";
import { map as f, switchMap as h, filter as Qe, defaultIfEmpty as we, catchError as We, concatMap as zt, tap as $, take as se } from "rxjs/operators";
import * as k from "@rollthecloudinc/attributes";
import { AttributeValue as J } from "@rollthecloudinc/attributes";
import * as Ze from "@rollthecloudinc/context";
import { InlineContext as re } from "@rollthecloudinc/context";
import { PersistenceFormPayload as et } from "@rollthecloudinc/refinery";
import { InteractionsFormPayload as Et } from "@rollthecloudinc/detour";
import * as U from "@rollthecloudinc/datasource";
import { Datasource as Me, Dataset as De, DatasourceModule as Nt } from "@rollthecloudinc/datasource";
import * as de from "@rollthecloudinc/content";
import { ContentPluginEditorOptions as $e, ContentBinding as Rt, ContentPlugin as Fe, CONTENT_PLUGIN as Ie } from "@rollthecloudinc/content";
import * as tt from "@angular/material/autocomplete";
import * as nt from "@angular/material/input";
import * as it from "@angular/material/select";
import * as st from "@rollthecloudinc/utils";
import { SITE_NAME as rt, NoopDataService as Bt } from "@rollthecloudinc/utils";
import { MaterialModule as Gt } from "@rollthecloudinc/material";
var qt = ze(Ne(), 1), Te = ze(Ct(), 1);
import * as at from "@angular/material/bottom-sheet";
import * as fe from "@angular/material/dialog";
import { MAT_DIALOG_DATA as Lt } from "@angular/material/dialog";
import * as ot from "@angular/material/grid-list";
import * as me from "@angular/material/list";
import * as W from "@angular/material/tabs";
import * as lt from "@rollthecloudinc/bridge";
import { BridgeBuilderPlugin as Ut, PublicApiBridgeService as Ht } from "@rollthecloudinc/bridge";
import * as he from "@rollthecloudinc/crud";
import { CrudAdaptorPlugin as pi, CrudDataService as Ce, CrudModule as Vt } from "@rollthecloudinc/crud";
import * as _e from "@rollthecloudinc/rules";
import { Aws3Module as Jt } from "@rollthecloudinc/aws3";
import { AwosModule as Xt } from "@rollthecloudinc/awos";
import { AuthModule as Kt } from "@rollthecloudinc/auth";
import * as ct from "@ngrx/effects";
import { createEffect as Yt, ofType as Qt, EffectsModule as Wt } from "@ngrx/effects";
import * as ut from "@ngrx/store";
import { createAction as X, props as K, createReducer as Zt, on as ne, StoreModule as en, createFeatureSelector as tn, createSelector as H, select as Q } from "@ngrx/store";
import * as pt from "@rollthecloudinc/snippet";
import * as dt from "@rollthecloudinc/plugin";
import { BasePluginManager as nn, PluginDef as sn, Plugin as rn } from "@rollthecloudinc/plugin";
import { DataSource as an } from "@angular/cdk/collections";
import on from "deepmerge-json";
import { pluralize as ln } from "inflected";
function cn(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-option", 5), r.\u0275\u0275text(1), r.\u0275\u0275elementEnd()), n & 2) {
    let e = s.index;
    r.\u0275\u0275property("value", e), r.\u0275\u0275advance(), r.\u0275\u0275textInterpolate1("panel page | level: ", e);
} }
function un(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-select", 3), r.\u0275\u0275template(2, cn, 2, 2, "mat-option", 4), r.\u0275\u0275pipe(3, "async"), r.\u0275\u0275elementEnd()()), n & 2) {
    let e = r.\u0275\u0275nextContext();
    r.\u0275\u0275advance(2), r.\u0275\u0275property("ngForOf", r.\u0275\u0275pipeBind1(3, 1, e.panelPages$));
} }
function pn(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-option", 5), r.\u0275\u0275text(1), r.\u0275\u0275elementEnd()), n & 2) {
    let e = s.index;
    r.\u0275\u0275property("value", e), r.\u0275\u0275advance(), r.\u0275\u0275textInterpolate1("panel | ", e);
} }
function dn(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-select", 6), r.\u0275\u0275template(2, pn, 2, 2, "mat-option", 4), r.\u0275\u0275pipe(3, "async"), r.\u0275\u0275elementEnd()()), n & 2) {
    let e = r.\u0275\u0275nextContext();
    r.\u0275\u0275advance(2), r.\u0275\u0275property("ngForOf", r.\u0275\u0275pipeBind1(3, 1, e.panels$));
} }
function fn(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-option", 5), r.\u0275\u0275text(1), r.\u0275\u0275elementEnd()), n & 2) {
    let e = s.index;
    r.\u0275\u0275property("value", e), r.\u0275\u0275advance(), r.\u0275\u0275textInterpolate1("pane | ", e);
} }
function mn(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-select", 7), r.\u0275\u0275template(2, fn, 2, 2, "mat-option", 4), r.\u0275\u0275pipe(3, "async"), r.\u0275\u0275elementEnd()()), n & 2) {
    let e = r.\u0275\u0275nextContext();
    r.\u0275\u0275advance(2), r.\u0275\u0275property("ngForOf", r.\u0275\u0275pipeBind1(3, 1, e.panes$));
} }
function hn(n, s) { if (n & 1 && r.\u0275\u0275element(0, "druid-panels-panelpage-linkedlist", 8), n & 2) {
    let e = r.\u0275\u0275nextContext();
    r.\u0275\u0275property("panelPages", e.nested);
} }
function gn(n, s) { if (n & 1) {
    let e = r.\u0275\u0275getCurrentView();
    r.\u0275\u0275elementStart(0, "a", 2), r.\u0275\u0275listener("click", function () { let a = r.\u0275\u0275restoreView(e).$implicit, o = r.\u0275\u0275nextContext(2); return r.\u0275\u0275resetView(o.onItemSelect(a.id)); }), r.\u0275\u0275elementStart(1, "span", 6), r.\u0275\u0275text(2), r.\u0275\u0275elementEnd()();
} if (n & 2) {
    let e = s.$implicit;
    r.\u0275\u0275advance(2), r.\u0275\u0275textInterpolate2("", e.title, " [", e.id, "]");
} }
function vn(n, s) { if (n & 1 && (r.\u0275\u0275elementStart(0, "mat-nav-list"), r.\u0275\u0275template(1, gn, 3, 2, "a", 5), r.\u0275\u0275pipe(2, "async"), r.\u0275\u0275elementEnd()), n & 2) {
    let e = r.\u0275\u0275nextContext();
    r.\u0275\u0275advance(), r.\u0275\u0275property("ngForOf", r.\u0275\u0275pipeBind1(2, 1, e.panels$));
} }
var Pn = (n, s) => ({ PanelPageListItem: { entityName: "PanelPageListItem", crud: S(v({}, Se(n) ? {} : { idb_keyval: { params: { prefix: "panelpage__" }, queryMappings: new Map([["site", { defaultOperator: "term||wildcard" }], ["path", { defaultOperator: "term||wildcard" }]]) } }), { idb_keyval: { params: { prefix: "panelpage__" }, queryMappings: new Map([["site", { defaultOperator: "term||wildcard" }], ["path", { defaultOperator: "term||wildcard" }]]) } }) }, PanelPage: { entityName: "PanelPage", crud: v(S(v({ save: { ops: ["create", "update"], plugin: "rest", params: { entityName: "PanelPage" } } }, Se(n) ? {} : { readPrimary: { fallback: !0, ops: ["create", "update", "query"], plugin: "idb_keyval", params: { prefix: "panelpage__" } } }), { readFallback: { fallback: !0, ops: ["query"], plugin: "rest", params: { entityName: "PanelPage", root: s.objectsRootUrl, suffix: ".json" } } }), Se(n) ? {} : { idb_keyval: { params: { prefix: "panelpage__" } } }) }, PanelPageState: { entityName: "PanelPageState" } }), Be = class {
    constructor(s) { this.readUserIds = [], s && (this.title = s.title, this.name = s.name, this.path = s.path, this.cssFile = s.cssFile, s.readUserIds && (this.readUserIds = s.readUserIds.map(e => e))); }
}, Ge = class {
    constructor(s) { s && (this.label = s.label, this.name = s.name); }
}, Le = class {
    constructor(s) { s && (this.label = s.label, this.name = s.name); }
}, ae = class {
    constructor(s) { this.panels = [], s && (this.id = s.id, this.name = s.name, this.title = s.title, this.derivativeId = s.derivativeId, this.valid = !!s.valid, s.persistence && (this.persistence = new et(s.persistence)), s.panels && (this.panels = s.panels.map(e => new oe(e)))); }
}, oe = class {
    constructor(s) { this.panes = [], s && (this.name = s.name, this.label = s.label, s.panes && (this.panes = s.panes.map(e => new le(e)))); }
}, le = class {
    constructor(s) { this.settings = [], s && (this.name = s.name, this.label = s.label, this.contentPlugin = s.contentPlugin, s.settings && (this.settings = s.settings.map(e => new J(e)))); }
}, Ue = class {
    constructor(s) { s && (this.name = s.name, this.field = s.field); }
}, xe = class {
    constructor(s) { s && (this.route = s.route, s.datasource && (this.datasource = new Me(s.datasource))); }
}, He = class {
    constructor(s) { s && (this.openSearchDomain = s.openSearchDomain, this.s3Bucket = s.s3Bucket, this.objectsRootUrl = s.objectsRootUrl); }
}, D = class {
    constructor(s) { this.gridItems = [], this.panels = [], this.contexts = [], this.rowSettings = [], this.entityPermissions = new pe, s && (this.id = s.id, this.layoutType = s.layoutType, this.displayType = s.displayType, this.name = s.name ? s.name : void 0, this.title = s.title ? s.title : void 0, this.site = s.site ? s.site : void 0, this.userId = s.userId ? s.userId : void 0, this.path = s.path ? s.path : void 0, this.persistence = s.persistence ? new et(s.persistence) : void 0, this.interactions = s.interactions ? new Et(s.interactions) : void 0, this.prerender = s.prerender ? new xe(s.prerender) : void 0, s.panels && (this.panels = s.panels.map(e => new q(e))), s.gridItems && (this.gridItems = s.gridItems.map(e => new ue(e))), s.contexts && (this.contexts = s.contexts.map(e => new re(e))), s.layoutSetting && (this.layoutSetting = new T(s.layoutSetting)), s.rowSettings && Array.isArray(s.rowSettings) && (this.rowSettings = s.rowSettings.map(e => new T(e))), s.entityPermissions && (this.entityPermissions = new pe(s.entityPermissions)), s.cssFile && (this.cssFile = s.cssFile)); }
}, Ve = class extends D {
}, qe = class {
    constructor(s) { this.gridItems = [], s && (this.id = s.id, this.site = s.site, s.gridItems && (this.gridItems = s.gridItems.map(e => new ue(e)))); }
}, q = class {
    constructor(s) { this.settings = [], this.panes = [], s && (this.name = s.name ? s.name : void 0, this.label = s.label ? s.label : void 0, this.stylePlugin = s.stylePlugin, s.settings && (this.settings = s.settings.map(e => new J(e))), s.panes && (this.panes = s.panes.map(e => new E(e))), s.columnSetting && (this.columnSetting = new T(s.columnSetting))); }
}, E = class {
    constructor(s) { this.settings = [], this.locked = !1, this.contexts = [], s && (this.name = s.name, this.label = s.label, this.contentPlugin = s.contentPlugin, this.locked = s.locked !== void 0 ? s.locked : !1, s.linkedPageId && (this.linkedPageId = s.linkedPageId), s.metadata !== void 0 && (this.metadata = new Map([...s.metadata])), s.settings !== void 0 && (this.settings = s.settings.map(e => new J(e))), s.contexts !== void 0 && (this.contexts = s.contexts.map(e => new re(e))), s.rule !== void 0 && typeof s.rule != "string" && (this.rule = v({}, s.rule)), s.nestedPage && (this.nestedPage = new D(s.nestedPage)), s.resolvedContext && (this.resolvedContext = v({}, s.resolvedContext))); }
}, ue = class {
    constructor(s) { s && (this.cols = s.cols, this.rows = s.rows, this.x = s.x, this.y = s.y, this.weight = s.weight); }
}, T = class {
    constructor(s) { this.settings = [], s && s.settings && Array.isArray(s.settings) && (this.settings = s.settings.map(e => new J(e))); }
}, pe = class {
    constructor(s) { this.readUserIds = [], this.writeUserIds = [], this.deleteUserIds = [], s && (this.readUserIds = s.readUserIds ? s.readUserIds.map(e => e) : [], this.writeUserIds = s.writeUserIds ? s.writeUserIds.map(e => e) : [], this.deleteUserIds = s.deleteUserIds ? s.deleteUserIds.map(e => e) : []); }
}, A = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    handleFile(e) { return m(); }
    handlesType(e) { return !1; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(e) { return m(!1); }
    isDynamic(e) { return !1; }
    isData(e) { return !1; }
    buildDynamicItems(e, t) { return m([]); }
    fetchDynamicData(e, t) { return m(new De); }
    getBindings(e, t) { return m([]); }
    toObject(e) { return m(this.attributeSerializer.deserializeAsObject(e)); }
    buildSettings(e) { return this.attributeSerializer.serialize(e, "root").attributes; }
    fromPanes(e) { return e.map(t => new E(this.attributeSerializer.deserialize(t))); }
    wrapPanel(e) { return new q({ stylePlugin: void 0, settings: [], panes: e, columnSetting: new T }); }
    stateDefinition(e) { return m({}); }
    editorOptions(e) { return m(new $e); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(k.AttributeSerializerService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Si = (() => { class n {
    set panelPages(e) { this.panelPages$.next(e); }
    set panels(e) { this.panels$.next(e); }
    set panes(e) { this.panes$.next(e); }
    get panelPages() { return this.panelPages$.value && Array.isArray(this.panelPages$.value) ? this.panelPages$.value : []; }
    get panels() { return this.panels$.value && Array.isArray(this.panels$.value) ? this.panels$.value : []; }
    get panes() { return this.panes$.value && Array.isArray(this.panes$.value) ? this.panes$.value : []; }
    get nested() { return this.nested$.value && typeof this.nested$.value !== void 0 && this.nested$.value.length > 0 ? [...this.nested$.value] : void 0; }
    constructor(e, t) { this.fb = e, this.panelHandler = t, this.panelPages$ = new ie([]), this.panels$ = new ie([]), this.panes$ = new ie([]), this.nested$ = new ie([]), this.formGroup = this.fb.group({ panelPage: this.fb.control(void 0), panel: this.fb.control(void 0), pane: this.fb.control(void 0), nested: this.fb.control(void 0) }), this.panelPageSub = this.formGroup.get("panelPage").valueChanges.subscribe(a => { this.panels$.next(new D(this.panelPages$.value[a]).panels); }), this.panelSub = this.formGroup.get("panel").valueChanges.subscribe(a => { this.panes$.next(new q(this.panels$.value[a]).panes); }), this.paneSub = this.formGroup.get("pane").valueChanges.pipe(f(a => this.panes$.value[a]), h(a => F(() => a.contentPlugin === "panel", this.panelHandler.toObject(a.settings), m(void 0))), Qe(a => !!a)).subscribe(a => { this.nested$.next([a]); }), this.onTouched = () => { }; }
    writeValue(e) { e && this.formGroup.setValue(e, { emitEvent: !1 }); }
    registerOnChange(e) { this.formGroup.valueChanges.subscribe(e); }
    registerOnTouched(e) { this.onTouched = e; }
    setDisabledState(e) { e ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(e) { return this.formGroup.valid ? null : { invalidForm: { valid: !1 } }; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275directiveInject(y.UntypedFormBuilder), r.\u0275\u0275directiveInject(A)); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["druid-panels-panelpage-linkedlist"]], inputs: { panelPages: "panelPages", panels: "panels", panes: "panes" }, standalone: !1, features: [r.\u0275\u0275ProvidersFeature([{ provide: $t, useExisting: Re(() => n), multi: !0 }, { provide: Ft, useExisting: Re(() => n), multi: !0 }])], decls: 5, vars: 5, consts: [[3, "formGroup"], [4, "ngIf"], ["formControlName", "nested", 3, "panelPages", 4, "ngIf"], ["required", "", "formControlName", "panelPage"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["required", "", "formControlName", "panel"], ["required", "", "formControlName", "pane"], ["formControlName", "nested", 3, "panelPages"]], template: function (t, a) { t & 1 && (r.\u0275\u0275elementStart(0, "div", 0), r.\u0275\u0275template(1, un, 4, 3, "mat-form-field", 1)(2, dn, 4, 3, "mat-form-field", 1)(3, mn, 4, 3, "mat-form-field", 1)(4, hn, 1, 1, "druid-panels-panelpage-linkedlist", 2), r.\u0275\u0275elementEnd()), t & 2 && (r.\u0275\u0275property("formGroup", a.formGroup), r.\u0275\u0275advance(), r.\u0275\u0275property("ngIf", a.panelPages.length > 0), r.\u0275\u0275advance(), r.\u0275\u0275property("ngIf", a.panels.length > 0), r.\u0275\u0275advance(), r.\u0275\u0275property("ngIf", a.panes.length > 0), r.\u0275\u0275advance(), r.\u0275\u0275property("ngIf", a.nested)); }, dependencies: [L.NgForOf, L.NgIf, y.NgControlStatus, y.NgControlStatusGroup, y.RequiredValidator, y.FormGroupDirective, y.FormControlName, tt.MatOption, nt.MatFormField, it.MatSelect, n, L.AsyncPipe], encapsulation: 2 }); }
} return n; })(), ft = (() => { class n {
    constructor(e, t, a, o, l, c) { this.siteName = e, this.bottomSheetRef = t, this.handler = a, this.dialog = o, this.fb = l, this.selectedIndex = 0, this.panelPagesService = c.getEntityCollectionService("PanelPage"), this.panelPageListItemsService = c.getEntityCollectionService("PanelPageListItem"); }
    ngOnInit() { }
    onNewSelect() { let e = V(), t = new D({ id: void 0, layoutType: "split", displayType: "page", site: this.siteName, gridItems: [], panels: [], layoutSetting: new T, rowSettings: [] }); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "panel", name: e, label: e, rule: new j(""), settings: this.fb.array(this.handler.buildSettings(t).map(a => this.convertToGroup(a))) })), this.bottomSheetRef.dismiss(); }
    onLinkSelect() { this.selectedIndex = 1, this.panels$ = this.panelPageListItemsService.getWithQuery(`site=${encodeURIComponent(this.siteName)}`); }
    onEmbedSelect() { let e = V(); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "panel", name: e, label: e, rule: new j(""), locked: new j(!0), settings: this.fb.array([]) })), this.bottomSheetRef.dismiss(); }
    onYieldSelect() { let e = V(); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "yield", name: e, label: e, rule: new j(""), locked: new j(!0), settings: this.fb.array([]) })), this.bottomSheetRef.dismiss(); }
    onItemSelect(e) { let t = V(); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "panel", name: t, label: t, rule: new j(""), linkedPageId: new j(e, Y.required), locked: new j(!0), settings: this.fb.array([]) })), this.bottomSheetRef.dismiss(); }
    convertToGroup(e) { let t = this.fb.group({ name: new j(e.name, Y.required), type: new j(e.type, Y.required), displayName: new j(e.displayName, Y.required), value: new j(e.value, Y.required), computedValue: new j(e.value, Y.required), attributes: new _t([]) }); return e.attributes && e.attributes.length > 0 && e.attributes.forEach(a => { t.get("attributes").push(this.convertToGroup(a)); }), t; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275directiveInject(rt), r.\u0275\u0275directiveInject(at.MatBottomSheetRef), r.\u0275\u0275directiveInject(A), r.\u0275\u0275directiveInject(fe.MatDialog), r.\u0275\u0275directiveInject(y.UntypedFormBuilder), r.\u0275\u0275directiveInject(z.EntityServices)); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-panel-selector"]], inputs: { panelFormGroup: "panelFormGroup" }, standalone: !1, decls: 13, vars: 1, consts: [["mat-align-tabs", "start", 3, "selectedIndex"], ["label", "Type"], ["mat-list-item", "", "mat-list-item", "", 3, "click"], ["label", "Search"], ["matTabContent", ""], ["mat-list-item", "", "mat-list-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-line", ""]], template: function (t, a) { t & 1 && (r.\u0275\u0275elementStart(0, "mat-tab-group", 0)(1, "mat-tab", 1)(2, "mat-nav-list")(3, "a", 2), r.\u0275\u0275listener("click", function () { return a.onNewSelect(); }), r.\u0275\u0275text(4, "New Panel"), r.\u0275\u0275elementEnd(), r.\u0275\u0275elementStart(5, "a", 2), r.\u0275\u0275listener("click", function () { return a.onLinkSelect(); }), r.\u0275\u0275text(6, "Link Panel"), r.\u0275\u0275elementEnd(), r.\u0275\u0275elementStart(7, "a", 2), r.\u0275\u0275listener("click", function () { return a.onEmbedSelect(); }), r.\u0275\u0275text(8, "Embed Panel"), r.\u0275\u0275elementEnd(), r.\u0275\u0275elementStart(9, "a", 2), r.\u0275\u0275listener("click", function () { return a.onYieldSelect(); }), r.\u0275\u0275text(10, "Yield"), r.\u0275\u0275elementEnd()()(), r.\u0275\u0275elementStart(11, "mat-tab", 3), r.\u0275\u0275template(12, vn, 3, 3, "ng-template", 4), r.\u0275\u0275elementEnd()()), t & 2 && r.\u0275\u0275property("selectedIndex", a.selectedIndex); }, dependencies: [L.NgForOf, ot.MatLine, me.MatNavList, me.MatListItem, W.MatTabContent, W.MatTab, W.MatTabGroup, L.AsyncPipe], encapsulation: 2 }); }
} return n; })(), yn = (() => { class n {
    constructor() { }
    ngOnInit() { }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-panel-editor"]], standalone: !1, decls: 2, vars: 0, template: function (t, a) { t & 1 && (r.\u0275\u0275elementStart(0, "p"), r.\u0275\u0275text(1, "panel-editor works!"), r.\u0275\u0275elementEnd()); }, encapsulation: 2 }); }
} return n; })(), _ = class {
    constructor(s) { this.panels = [], s && (this.id = s.id, s.panels !== void 0 && Array.isArray(s.panels) && (this.panels = s.panels.map(e => new G(e)))); }
}, G = class {
    constructor(s) { this.panes = [], s && s.panes !== void 0 && Array.isArray(s.panes) && (this.panes = s.panes.map(e => new O(e))); }
}, O = class {
    constructor(s) { s && (s.state !== void 0 && (this.state = new J(s.state)), s.nestedPage !== void 0 && s.nestedPage !== null && (this.nestedPage = new _(s.nestedPage))); }
}, mt = (() => { class n {
    constructor(e, t, a, o, l, c) { this.siteName = e, this.panelHandler = t, this.attributeSerializer = a, this.rulesResolver = o, this.dpm = l, this.datasourceEvalutator = c; }
    handleFile(e) { return m([]); }
    handlesType(e) { return !1; }
    implementsRendererOverride() { return !0; }
    hasRendererOverride(e) { return m(!1); }
    isDynamic(e) { return !0; }
    isData(e) { return !0; }
    fetchDynamicData(e, t) { let a = t.has("dataPanes") ? new Map(t.get("dataPanes").map(l => [l.name, l])) : new Map([]), o = new Map(Array.from(a).map(([l, c]) => [l, new Me(this.attributeSerializer.deserializeAsObject(c.settings))])); return this.toObject(e).pipe(h(l => this.datasourceEvalutator.evalDatasource({ datasource: l, metadata: t, datasources: o }))); }
    buildDynamicItems(e, t) { let a = new Map(t.get("dataPanes").map(o => [o.name, o])); return this.fetchDynamicData(e, t).pipe(h(o => this.toObject(e).pipe(f(l => [l, o]))), h(([o, l]) => this.getBindings(e, "pane").pipe(f(c => [o, l, c]))), h(([o, l, c]) => F(() => l.results.length !== 0 && c.length > 0, x(l.results.map(p => x(c.filter(u => !a.has(u.id)).map(u => m(t.get("panes").find(d => d.name === u.id)).pipe(h(d => F(() => d && d.rule && d.rule !== null && d.rule.condition !== "", d ? this.rulesResolver.evaluate(d.rule, [...t.get("contexts"), ...d.contexts !== void 0 ? d.contexts : [], new re({ name: "_root", adaptor: "data", data: p })]).pipe(f(g => [d, g])) : m([d, !1]), m(!1).pipe(f(g => [d, g])))), Qe(([d, g]) => g), f(([d, g]) => d.name), we(u.id)))).pipe(f(u => u.reduce((d, g) => [...d, g], []))))).pipe(f(p => [o, l, p])), new Ye(p => { p.next([o, l, []]), p.complete(); }))), f(([o, l, c]) => l.results.reduce((p, u, d) => [...p, ...c[d] ? c[d].map(g => new E(S(v({}, t.get("panes").find(I => I.name === g)), { rule: void 0, label: V(), contexts: [...t.get("contexts"), new re({ name: "_root", adaptor: "data", data: u })] }))) : []], [])), f(o => new q({ stylePlugin: void 0, settings: [], panes: o, columnSetting: new T })), f(o => this.panelHandler.buildSettings(new D({ id: void 0, layoutType: "grid", displayType: "page", site: this.siteName, gridItems: [], layoutSetting: new T, rowSettings: [], panels: [o] }))), f(o => o.find(l => l.name === "panels").attributes[0].attributes.find(l => l.name === "panes").attributes)); }
    getBindings(e, t, a) { let o = a ? new Map(a.get("dataPanes").map(l => [l.name, l])) : new Map; return t === "context" ? this.toObject(e).pipe(f(l => [l, l.params ? l.params.reduce((c, p) => [...c, ...p.mapping.type === "form" ? [new Rt({ id: `form__${p.mapping.value.split(".", 2)[0].trim()}`, type: "context" })] : []], []) : []]), h(([l, c]) => this.dpm.getPlugin(l.plugin).pipe(h(p => p.getBindings({ settings: l.settings, metadata: a }).pipe(f(u => [l, u]))))), h(([l, c]) => x(l.renderer.bindings.reduce((p, u) => [...p, ...o.has(u.id) ? [this.toObject(o.get(u.id).settings)] : []], [])).pipe(h(p => x(p.map(u => this.dpm.getPlugin(u.plugin).pipe(h(d => d.getBindings({ settings: u.settings, metadata: a }))))).pipe(f(u => u.reduce((d, g) => [...d, ...g], c)), we(c))), we(c)))) : this.toObject(e).pipe(h(l => F(() => l.renderer.type === t, m(l.renderer.bindings), m([])))); }
    toObject(e) { return m(this.attributeSerializer.deserializeAsObject(e)); }
    buildSettings(e) { return this.attributeSerializer.serialize(e, "root").attributes; }
    getRenderType(e) { let t = [e.find(a => a.name === "renderer")].map(a => a.attributes.find(o => o.name === "type")); return t.length > 0 ? t[0].value : void 0; }
    stateDefinition(e) { return m({ autocomplete: { input: "" }, loading: "y" }); }
    editorOptions(e) { return this.toObject(e).pipe(h(t => this.dpm.getPlugin(t && t.plugin ? t.plugin : "data").pipe(f(a => [t, a]))), h(([t, a]) => a.editorOptions ? a.editorOptions({ settings: t && t.settings ? t.settings : [] }) : m(void 0)), f(t => new $e({ fullscreen: t ? t.fullscreen : !1 }))); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(rt), r.\u0275\u0275inject(A), r.\u0275\u0275inject(k.AttributeSerializerService), r.\u0275\u0275inject(_e.RulesResolverService), r.\u0275\u0275inject(U.DatasourcePluginManager), r.\u0275\u0275inject(U.DatasourceEvaluator)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), bn = (() => { class n {
    constructor(e, t, a, o, l) { this.data = e, this.dialogRef = t, this.fb = a, this.attributeSerializer = o, this.datasourceHandler = l, this.datasource = new Me, this.bindableOptions = [], this.contexts = [], this.formGroup = this.fb.group({ source: this.fb.control("") }); }
    ngOnInit() { let e = this.data.panelFormGroup.get("panes"); if (this.bindableOptions = e.controls.reduce((t, a) => a.get("name").value ? [...t, a.get("name").value] : [...t], []), this.contexts = this.data.contexts.map(t => t.name), this.data.panelIndex !== void 0 && this.data.paneIndex < e.length) {
        let t = e.at(this.data.paneIndex).get("settings").value.map(a => new J(a));
        this.datasourceHandler.toObject(t).subscribe(a => { this.datasource = a; });
    } }
    onSubmit() { let e = this.attributeSerializer.serialize(this.formGroup.value.source, "source"), t = this.data.panelFormGroup.get("panes").at(this.data.paneIndex); this.data.paneIndex === void 0 ? (this.data.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "datasource", name: new j(""), label: new j(""), rule: new j(""), settings: this.fb.array(e.attributes.map(a => this.attributeSerializer.convertToGroup(a))) })), console.log(this.data.panelFormGroup.get("panes").value)) : (t.get("settings").clear(), e.attributes.forEach(a => t.get("settings").push(this.attributeSerializer.convertToGroup(a)))), this.dialogRef.close(); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275directiveInject(Lt), r.\u0275\u0275directiveInject(fe.MatDialogRef), r.\u0275\u0275directiveInject(y.UntypedFormBuilder), r.\u0275\u0275directiveInject(k.AttributeSerializerService), r.\u0275\u0275directiveInject(mt)); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-datasource-editor"]], standalone: !1, decls: 4, vars: 4, consts: [[3, "ngSubmit", "formGroup"], ["formControlName", "source", 3, "bindableOptions", "contexts", "datasource"], ["type", "submit"]], template: function (t, a) { t & 1 && (r.\u0275\u0275elementStart(0, "form", 0), r.\u0275\u0275listener("ngSubmit", function () { return a.onSubmit(); }), r.\u0275\u0275element(1, "classifieds-ui-datasource-form", 1), r.\u0275\u0275elementStart(2, "button", 2), r.\u0275\u0275text(3, "Save"), r.\u0275\u0275elementEnd()()), t & 2 && (r.\u0275\u0275property("formGroup", a.formGroup), r.\u0275\u0275advance(), r.\u0275\u0275property("bindableOptions", a.bindableOptions)("contexts", a.contexts)("datasource", a.datasource)); }, dependencies: [y.\u0275NgNoValidate, y.NgControlStatus, y.NgControlStatusGroup, y.FormGroupDirective, y.FormControlName, U.DatasourceFormComponent], encapsulation: 2 }); }
} return n; })(), Sn = n => new Fe({ id: "panel", title: "Panel", selectionComponent: ft, editorComponent: yn, renderComponent: void 0, handler: n }), wn = ({ handler: n }) => new Fe({ id: "yield", title: "Yield", selectionComponent: ft, editorComponent: void 0, renderComponent: void 0, handler: n }), In = n => new Fe({ id: "datasource", title: "Datasource", selectionComponent: void 0, editorComponent: bn, renderComponent: void 0, handler: n }), Cn = (n, s) => new Ut({ id: "panels", title: "Panels", build: () => { Ht.prototype.writePaneState = (e, t) => new Promise(a => { let o = n.getEntityCollectionService("PanelPageState"); o.getByKey(e.id).pipe(We(() => m(new _({ id: e.id, panels: [] }))), f(l => l === void 0 ? new _({ id: e.id, panels: [] }) : l), f(l => { let c = s.serialize(t, "root"), p = new _(S(v({}, l), { panels: [] })); for (let u = 0; u < e.panelIndex + 1; u++) {
        p.panels.push(u < l.panels.length ? new G(S(v({}, l.panels[u]), { panes: [] })) : new G);
        for (let d = 0; d < e.paneIndex + 1; d++)
            u === e.panelIndex && d === e.paneIndex ? p.panels[u].panes.push(u < l.panels.length && d < l.panels[u].panes.length ? new O(S(v({}, l.panels[u].panes[d]), { state: c })) : new O({ state: c })) : p.panels[u].panes.push(u < l.panels.length && d < l.panels[u].panes.length ? new O(v({}, l.panels[u].panes[d])) : new O);
    } return p; }), h(l => o.upsert(l))).subscribe(l => { a(l); }); }); } });
var ht = X("[PageBuilder] Load Rest Data", K()), gt = X("[PageBuilder] Load Rest Data Success", K()), wi = X("[PageBuilder] Load Rest Data Error", K()), vt = X("[PageBuilder] Set Page Info", K()), Pt = X("[PageBuilder] Set Form", K()), yt = X("[PageBuilder] Set Page", K()), bt = X("[PageBuilder] Selection Path", K()), xn = (() => { class n {
    fetchRestdata$(e) { switch (e.method ? e.method : "get") {
        case "post":
        case "POST": return m([]).pipe(h(() => this.snippetParserService.parseSnippet({ snippet: e.body })), h(a => this.datasourceApi.postData({ url: e.url, body: a })));
        default: return this.datasourceApi.getData(e.url);
    } }
    constructor(e, t, a) { this.actions$ = e, this.datasourceApi = t, this.snippetParserService = a, this.loadRestData$ = Yt(() => this.actions$.pipe(Qt(ht), zt(o => this.fetchRestdata$(o.rest).pipe(We(() => []), f(l => o.rest.renderer !== void 0 && o.rest.renderer.query !== void 0 && o.rest.renderer.query !== "" ? Te.JSONPath({ path: o.rest.renderer.query, json: l }) : l), f(l => gt({ tag: o.tag, data: new De({ results: l }) })))))); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(ct.Actions), r.\u0275\u0275inject(U.DatasourceApiService), r.\u0275\u0275inject(pt.SnippetParserService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac }); }
} return n; })(), je = class {
    constructor(s) { s && (this.id = s.id, this.path = s.path, this.realPath = s.realPath, this.args = s.args); }
}, St = "pageBuilder", jn = { dataTags: [], datasets: [], pageInfo: void 0, formNames: [], forms: [], page: void 0, selectionPath: [] }, Mn = Zt(jn, ne(gt, (n, s) => { let e = n.dataTags.findIndex(t => t === s.tag); if (e > -1 && n.forms[e] !== void 0) {
    let t = v({}, n);
    return t.datasets[e].push(s.data), t;
}
else
    return S(v({}, n), { dataTags: [...n.dataTags, s.tag], datasets: [...n.datasets, [s.data]] }); }), ne(Pt, (n, s) => { let e = n.formNames.findIndex(t => t === s.name); return e > -1 && n.forms[e] !== void 0 ? S(v({}, n), { forms: n.forms.map((t, a) => a === e ? s.form : t) }) : S(v({}, n), { formNames: [...n.formNames, s.name], forms: [...n.forms, s.form] }); }), ne(vt, (n, s) => S(v({}, n), { pageInfo: s.info !== void 0 ? new je(s.info) : void 0 })), ne(yt, (n, s) => S(v({}, n), { page: s.page !== void 0 ? new D(s.page) : void 0 })), ne(bt, (n, s) => S(v({}, n), { selectionPath: s.path !== void 0 ? s.path : [] })));
function Dn(n, s) { return Mn(n, s); }
var Ii = new Ke("StylePlugin"), $n = new Ke("PanelsSettings"), Fn = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    handleFile(e) { return m(); }
    handlesType(e) { return !1; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(e) { return m(!1); }
    isDynamic(e) { return !1; }
    isData(e) { return !1; }
    buildDynamicItems(e, t) { return m([]); }
    fetchDynamicData(e, t) { return m(new De); }
    getBindings(e, t) { return m([]); }
    toObject(e) { return m(this.attributeSerializer.deserializeAsObject(e)); }
    buildSettings(e) { return this.attributeSerializer.serialize(e, "root").attributes; }
    fromPanes(e) { return e.map(t => new E(this.attributeSerializer.deserialize(t))); }
    stateDefinition(e) { return m({}); }
    editorOptions(e) { return m(new $e); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(k.AttributeSerializerService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Ci = (() => { class n {
    constructor(e, t, a, o, l, c, p, u, d, g, I, B, ee) { let b = Pn(e, a); o.registerMetadataMap(b), c.registerService("PanelPageState", new Bt("PanelPageState")), c.registerService("PanelPage", new Ce("PanelPage", g, I, B)), c.registerService("PanelPageListItem", new Ce("PanelPageListItem", g, I, B)), t.forEach(w => l.register(w)), l.register(wn({ handler: ee })), p.register(Cn(u, d)), c.registerService("PanelPageForm", new Ce("PanelPageForm", g, I, B)); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(jt), r.\u0275\u0275inject(Ie), r.\u0275\u0275inject($n), r.\u0275\u0275inject(z.EntityDefinitionService), r.\u0275\u0275inject(de.ContentPluginManager), r.\u0275\u0275inject(z.EntityDataService), r.\u0275\u0275inject(lt.BridgeBuilderPluginManager), r.\u0275\u0275inject(z.EntityServices), r.\u0275\u0275inject(k.AttributeSerializerService), r.\u0275\u0275inject(he.CrudAdaptorPluginManager), r.\u0275\u0275inject(z.EntityDefinitionService), r.\u0275\u0275inject(he.CrudDataHelperService), r.\u0275\u0275inject(Fn)); }; }
    static { this.\u0275mod = r.\u0275\u0275defineNgModule({ type: n }); }
    static { this.\u0275inj = r.\u0275\u0275defineInjector({ providers: [{ provide: A, useClass: A }, { provide: Ie, useFactory: Sn, multi: !0, deps: [A] }, { provide: Ie, useFactory: In, multi: !0, deps: [mt] }, { provide: Dt, useClass: Mt }], imports: [xt, Tt, kt, en.forFeature(St, Dn), Wt.forFeature([xn]), Gt, Nt, Kt, Jt, Xt, Vt] }); }
} return n; })(), Je = class n {
    constructor(s) { s && (this.panelPage = s.panelPage, s.panel !== void 0 && s.panel !== null && (this.panel = s.panel), s.pane !== void 0 && s.pane !== null && (this.pane = s.pane), s.nested !== void 0 && s.nested !== null && typeof s.nested == "object" && (this.nested = new n(s.nested))); }
}, xi = (() => { class n {
    get gridItems() { return []; }
    constructor(e) { this.controlContainer = e, this.savable = !0, this.nested = !1, this.dashboard = [], this.layoutSetting = new T, this.rowSettings = [], this.ancestory = []; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275directiveInject(y.ControlContainer)); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-layout-editor-base"]], inputs: { savable: "savable", nested: "nested", editor: "editor", dashboard: "dashboard", layoutSetting: "layoutSetting", rowSettings: "rowSettings", columnSettings: "columnSettings", editablePaneTpl: "editablePaneTpl", extraActionsAreaTmpl: "extraActionsAreaTmpl", contextsMenuTpl: "contextsMenuTpl", ancestory: "ancestory" }, standalone: !1, decls: 0, vars: 0, template: function (t, a) { }, encapsulation: 2 }); }
} return n; })(), ji = (() => { class n {
    get columnSettings() { return this.panelPage ? this.panelPage.panels.reduce((t, a) => [...t, new T(a.columnSetting)], []) : []; }
    constructor(e) { this.controlContainer = e, this.displayMainControls = !1, this.displayItemHeader = !1; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275directiveInject(y.ControlContainer, 8)); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-layout-renderer-base"]], inputs: { panelPage: "panelPage", displayMainControls: "displayMainControls", displayItemHeader: "displayItemHeader", renderPanelTpl: "renderPanelTpl" }, standalone: !1, decls: 0, vars: 0, template: function (t, a) { }, encapsulation: 2 }); }
} return n; })(), Mi = (() => { class n {
    constructor() { this.settings = [], this.panes = [], this.originMappings = [], this.ancestory = []; }
    mergeContexts(e) { if (!(e === void 0 && this.contexts === void 0))
        return e !== void 0 && this.contexts !== void 0 ? [...e, ...this.contexts] : e !== void 0 ? e : this.contexts; }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275cmp = r.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-panel-style-renderer-base"]], inputs: { settings: "settings", panes: "panes", originPanes: "originPanes", originMappings: "originMappings", contexts: "contexts", ancestory: "ancestory" }, standalone: !1, decls: 0, vars: 0, template: function (t, a) { }, encapsulation: 2 }); }
} return n; })(), _n = (() => { class n {
    get panelPageService() { return this.es.getEntityCollectionService("PanelPage"); }
    constructor(e, t) { this.es = e, this.panelHandler = t; }
    reducePage(e) { return e.panels.reduce((t, a, o) => this.reducePanels(t, a, o), []); }
    reducePanels(e, t, a) { return [...e, ...t.panes.reduce((o, l, c) => this.reducePanes(o, l, c).map(p => p.pipe(f(([u, d]) => [a, u, d]))), [])]; }
    reducePanes(e, t, a) { return [...e, ...t.contentPlugin === "panel" ? [this.nestedPage$(t).pipe(f(o => [a, o]))] : []]; }
    nestedPage$(e) { return console.log("get nested panel page"), e.linkedPageId && e.linkedPageId !== "" ? this.getByKey(e.linkedPageId).pipe($(() => console.log(`get(${e.linkedPageId})`))) : this.getEmbedded(e.settings).pipe($(() => console.log("toObject()"))); }
    remapNested(e, t) { t.forEach(([a, o, l]) => { e.panels[a].panes[o].nestedPage = l; }); }
    getByKey(e) { return this.panelPageService.getByKey(e).pipe(f(t => new D(t)), h(t => F(() => this.reducePage(t).length > 0, x(this.reducePage(t)).pipe($(a => this.remapNested(t, a)), f(() => t)), m(t)))); }
    getEmbedded(e) { return this.panelHandler.toObject(e).pipe(f(t => new D(t)), h(t => F(() => this.reducePage(t).length > 0, x(this.reducePage(t)).pipe($(a => this.remapNested(t, a)), f(() => t)), m(t)))); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(z.EntityServices), r.\u0275\u0275inject(A)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Di = (() => { class n {
    constructor(e) { this.panelHandler = e; }
    rebuildPage(e, t) { return new D(S(v({}, e), { panels: this.rebuildPanels(e.panels, [...t]) })); }
    rebuildPanels(e, t) { return e.filter((a, o) => this.rebuildCondition(t[0], o)).map(a => new q(S(v({}, a), { panes: this.rebuildPanes(a.panes, t.slice(1)) }))); }
    rebuildPanes(e, t) { return e.filter((a, o) => this.rebuildCondition(t[0], o)).map(a => a.contentPlugin === "panel" ? new E(S(v({}, a), { nestedPage: void 0, settings: this.panelHandler.buildSettings(this.rebuildPage(a.nestedPage, t.slice(1))) })) : new E(v({}, a))); }
    rebuildCondition(e, t) { return e !== 0 ? e > -1 ? t === e + e * -1 : t !== e * -1 + e : !0; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(A)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), $i = (() => { class n {
    constructor(e) { this.panelHandler = e; }
    convertPageToState(e) { return m(new _).pipe(h(() => x(e.panels.map(t => this.convertPanelToState(t)))), f(t => new _({ id: e.id, panels: t }))); }
    convertPanelToState(e) { return m(new G).pipe(h(() => x(e.panes.map(t => this.convertPaneToState(t)))), f(t => new G({ panes: t }))); }
    convertPaneToState(e) { return m(new O).pipe(h(t => F(() => this.hasNestedPanelPage(e), this.panelHandler.toObject(e.settings).pipe(h(a => this.convertPageToState(a)), f(a => new O({ state: new J, nestedPage: a }))), m(t)))); }
    hasNestedPanelPage(e) { return e.contentPlugin === "panel" && (e.linkedPageId === void 0 || e.linkedPageId === null || e.linkedPageId === ""); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(A)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Tn = (() => { class n {
    constructor(e) { this.panelsLoaderService = e; }
    walkPageHierarchy({ panelPage: e, visitorFunc: t, defaultv: a, ancestory: o }) { return new Ye(l => { let c = e.panels.length, p = []; for (let u = 0; u < c; u++) {
        let d = e.panels[u].panes.length;
        for (let g = 0; g < d; g++)
            p.push(t({ pane: e.panels[u].panes[g], panelPage: e, ancestoryWithSelf: [...o, u, g] })), e.panels[u].panes[g].nestedPage && e.panels[u].panes[g].nestedPage.panels && e.panels[u].panes[g].nestedPage.panels.length !== 0 ? p.push(this.walkPageHierarchy({ panelPage: e, visitorFunc: t, defaultv: a, ancestory: [...o, u, g] })) : e.panels[u].panes[g].contentPlugin;
    } p.length === 0 ? (l.next(a), l.complete()) : x(p).pipe(f(u => u.reduce((d, g) => [...d, ...g], a)), $(u => { l.next(u), l.complete(); })).subscribe(); }); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(_n)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Fi = (() => { class n {
    constructor(e, t) { this.panelsVisitorService = e, this.cpm = t, this.gatherPaneContexts = ({ pane: a, panelPage: o, ancestoryWithSelf: l }) => this.cpm.getPlugin(a.contentPlugin).pipe(h(c => c.handler ? c.handler.stateDefinition(a.settings) : m({})), f(c => new re({ name: "panestate-" + l.join("-"), adaptor: "data", plugin: "panestate", data: { id: o ? o.id : "", selectionPath: [...l], value: c } })), f(c => [c]), se(1)); }
    allActivePageContexts({ panelPage: e, ancestory: t = [] }) { return this.panelsVisitorService.walkPageHierarchy({ panelPage: e, ancestory: t, visitorFunc: this.gatherPaneContexts, defaultv: [] }); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(Tn), r.\u0275\u0275inject(de.ContentPluginManager)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), kn = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    buildToAncestorySpec({ panelPageState: e, ancestory: t }) { for (let a = 0; a < t[0] + 1; a++)
        if (e.panels.length < a + 1 && e.panels.push(new G), a === t[0] && t.length > 1)
            for (let o = 0; o < t[1] + 1; o++)
                e.panels[t[0]].panes.length < o + 1 && e.panels[t[0]].panes.push(new O({ state: this.attributeSerializer.serialize({}, "root") })), o === t[1] && t.length > 2 && (e.panels[t[0]].panes[o].nestedPage || (e.panels[t[0]].panes[o].nestedPage = new _), this.buildToAncestorySpec({ panelPageState: e.panels[t[0]].panes[o].nestedPage, ancestory: t.slice(2) })); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(k.AttributeSerializerService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), _i = (() => { class n {
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), On = (() => { class n extends nn {
    constructor(e, t) { super(e, t); }
    pluginDef() { return m(new sn({ name: "style" })); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(dt.PluginConfigurationManager), r.\u0275\u0275inject(st.ModuleLoaderService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Ti = (() => { class n {
    constructor(e) { this.spm = e; }
    alterResolvedPanes({ panel: e, resolvedPanes: t, originMappings: a }) { return m(void 0).pipe(h(() => e.stylePlugin && e.stylePlugin !== "" ? this.spm.getPlugin(e.stylePlugin) : m(void 0)), h(o => o && o.handler ? o.handler.alterResolvedPanes({ settings: e.settings, resolvedPanes: t, originMappings: a }) : m({ resolvedPanes: t, originMappings: a }))); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(On)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), ki = (() => { class n {
    constructor(e, t, a, o) { this.panelHandler = e, this.rulesResolver = t, this.inlineContextResolver = a, this.cpm = o; }
    usedContexts(e) { return this.panesPlugins(e).pipe(h(t => this.dataPanes(e).pipe(f(a => ({ plugins: t, dataPanes: a })))), h(({ plugins: t, dataPanes: a }) => x(e.reduce((o, l) => { let c = t.get(l.contentPlugin); return c.handler !== void 0 ? [...o, c.handler.getBindings(l.settings, "context", new Map([["dataPanes", a]])).pipe(f(p => p.map(u => u.id)))] : [...o]; }, [])).pipe(f(o => o.reduce((l, c) => [...l, ...c], []))))); }
    staticPanes(e) { return this.cpm.getPlugins(e.reduce((t, a) => t.findIndex(o => o === a.contentPlugin) === -1 ? [...t, a.contentPlugin] : [...t], [])).pipe(f(t => e.filter(a => t.get(a.contentPlugin).handler === void 0 || !t.get(a.contentPlugin).handler.isDynamic(a.settings)))); }
    dataPanes(e) { return this.cpm.getPlugins(e.reduce((t, a) => t.findIndex(o => o === a.contentPlugin) === -1 ? [...t, a.contentPlugin] : [...t], [])).pipe(f(t => e.filter(a => t.get(a.contentPlugin).handler !== void 0 && t.get(a.contentPlugin).handler.isData(a.settings)))); }
    panesPlugins(e) { return this.cpm.getPlugins(e.reduce((t, a) => t.findIndex(o => o === a.contentPlugin) === -1 ? [...t, a.contentPlugin] : [...t], [])); }
    resolvePanes({ panes: e, contexts: t, resolvedContext: a }) { return console.log("resolve panes"), this.panesPlugins(e).pipe(h(o => x(e.reduce((l, c) => { let p = o.get(c.contentPlugin); return p.handler !== void 0 ? [...l, p.handler.getBindings(c.settings, "pane").pipe(f(u => u.map(d => d.id)))] : [...l, m([])]; }, [])))).pipe(f(o => o.reduce((l, c) => [...l, ...c], [])), h(o => this.panesPlugins(e).pipe(f(l => [o, l]))), h(([o, l]) => x(e.reduce((c, p) => { let u = l.get(p.contentPlugin); return u.handler !== void 0 && u.handler.isDynamic(p.settings) ? [...c, u.handler.isData(p.settings) && o.findIndex(d => d === p.name) !== -1 ? m([]) : x([this.staticPanes(e), this.dataPanes(e)]).pipe(h(([d, g]) => u.handler.buildDynamicItems(p.settings, new Map([...p.metadata === void 0 ? [] : p.metadata, ["tag", V()], ["panes", d], ["dataPanes", g], ["contexts", t !== void 0 ? t : []]])).pipe(f(I => this.panelHandler.fromPanes(I)), f(I => this.panelHandler.wrapPanel(I).panes), se(1))))] : p.name === "" || o.findIndex(d => d === p.name) === -1 ? [...c, m([new E(S(v({}, p), { contexts: [...t, ...p.contexts ? p.contexts : []] }))]).pipe(h(d => F(() => d[0].rule !== void 0 && d[0].rule !== null && d[0].rule.condition !== "", this.rulesResolver.evaluate(d[0].rule, [...t, ...p.contexts ? p.contexts : []]).pipe(f(g => g ? d : [])), m(d))))] : [...c]; }, [])).pipe(h(c => F(() => c.reduce((p, u) => [...p, ...u], []).length === 0, m([c, []]), x([...c.reduce((p, u) => [...p, ...u.map(d => d.contexts && d.contexts.length !== 0 ? this.inlineContextResolver.resolveAll(d.contexts).pipe(se(1)) : m({}).pipe(se(1)))], [])]).pipe(f(p => [c, p.map(u => v(v({}, u), a))])))), f(([c, p]) => { let u = [], d = []; return c.forEach((g, I) => { u = [...u === void 0 ? [] : u, ...g.map((B, ee) => new E(S(v({}, B), { resolvedContext: p[u.length + ee] })))], d = [...d && [], ...g.map(() => I)]; }), { resolvedPanes: u, originMappings: d }; })))); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(A), r.\u0275\u0275inject(_e.RulesResolverService), r.\u0275\u0275inject(Ze.InlineContextResolverService), r.\u0275\u0275inject(de.ContentPluginManager)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Xe = class extends rn {
    constructor(s) { super(s), s && (this.name = this.id, this.title = s.title, this.editorComponent = s.editorComponent ? s.editorComponent : void 0, this.renderComponent = s.renderComponent ? s.renderComponent : void 0, s.handler && (this.handler = s.handler)); }
}, Oi = (() => { class n extends an {
    constructor() { super(), this.pageChange$ = new Ot, this.pageSize = 20, this.dataStream = new ie([]), this.subscription = new At, this.lastPage = 0, this.paneItems = []; }
    set panes(e) { this.paneItems = [...this.paneItems, ...e], this.dataStream.next(this.paneItems); }
    connect(e) { return this.subscription.add(e.viewChange.subscribe(t => { let a = Math.ceil((t.end + 1) / this.pageSize); a > this.lastPage && (this.lastPage = a, this.pageChange$.next(a)); })), this.dataStream; }
    disconnect(e) { this.subscription.unsubscribe(); }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac }); }
} return n; })(), Z = tn(St), Ai = n => H(Z, s => { let e = s.dataTags.findIndex(t => t === n); if (e > -1)
    return s.datasets[e][s.datasets[e].length - 1]; }), An = H(Z, n => n.pageInfo), zn = H(Z, n => n.page), En = H(Z, n => n.selectionPath), wt = H(Z, n => n.formNames), Nn = H(Z, n => n.forms), Rn = H(wt, Nn, (n, s, e) => { let t = n.findIndex(a => a === e.name); if (t > -1)
    return s[t]; }), Bn = (() => { class n {
    constructor(e) { this.store = e, this.getPageInfo$ = this.store.pipe(Q(An)), this.getPage$ = this.store.pipe(Q(zn)), this.getSelectionPath$ = this.store.pipe(Q(En)), this.getFormNames$ = this.store.pipe(Q(wt)), this.getForm$ = t => this.store.pipe(Q(Rn, { name: t })); }
    loadRestData(e, t) { this.store.dispatch(ht({ tag: e, rest: t })); }
    setPageInfo(e) { this.store.dispatch(vt({ info: e })); }
    setPage(e) { this.store.dispatch(yt({ page: e })); }
    setSelectionPath(e) { this.store.dispatch(bt({ path: e })); }
    setForm(e, t) { this.store.dispatch(Pt({ name: e, form: t })); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(ut.Store)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), zi = (() => { class n {
    constructor(e, t, a, o) { this.pageBuilderFacade = e, this.panelStateArchitectService = t, this.attributeSerializer = a, this.selectEntities = l => l.entities, this.selectById = ({ id: l }) => H(this.selectEntities, c => c[l] ? c[l] : void 0), this.panelPageStateService = o.getEntityCollectionService("PanelPageState"); }
    mergeState({ state: e, settings: t, plugin: a, ancestory: o }) { return m(e).pipe(h(l => this.pageBuilderFacade.getPageInfo$.pipe(f(c => [l, c]))), h(([l, c]) => a.handler.stateDefinition(t).pipe(f(p => [l, c, p]))), h(([l, c, p]) => this.panelPageStateService.collection$.pipe(Q(this.selectById({ id: c.id })), f(u => [l, new _(u || { id: c.id, panels: [] }), p]), se(1))), f(([l, c, p]) => { this.panelStateArchitectService.buildToAncestorySpec({ panelPageState: c, ancestory: [...o] }); let u = "$." + o.map((g, I) => `${(I + 1) % 2 === 0 ? "panes" : (I === 0 ? "" : "nestedPage.") + "panels"}[${g}]`).join("."), d = Te.JSONPath({ path: u, json: c })[0]; return [l, c, p, d]; }), $(([l, c, p, u]) => { let d = u.state ? u.state.root ? this.attributeSerializer.deserialize(u.state).root : this.attributeSerializer.deserialize(u.state) : {}, g = on(!d || Object.keys(d).length === 0 ? p : d, l); u.state = this.attributeSerializer.serialize(g, "root"); }), f(([l, c, p, u]) => ({ paneState: u, pageState: c }))); }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(Bn), r.\u0275\u0275inject(kn), r.\u0275\u0275inject(k.AttributeSerializerService), r.\u0275\u0275inject(z.EntityServices)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Ei = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    serializeForm(e) { let t = e.panels.length, a = {}; for (let o = 0; o < t; o++) {
        let l = e.panels[o].panes.length, c = new Map;
        for (let p = 0; p < l; p++) {
            let u = this.serializeFormPane(e.panels[o].panes[p]);
            if (e.panels[o].panes[p].name && e.panels[o].panes[p].name !== null && (a[e.panels[o].panes[p].name] || e.panels[o].panes[p].name === ln(e.panels[o].panes[p].name))) {
                c.has(e.panels[o].panes[p].name) || c.set(e.panels[o].panes[p].name, typeof a[e.panels[o].panes[p].name] < "u" ? [a[e.panels[o].panes[p].name]] : []);
                let d = c.get(e.panels[o].panes[p].name);
                c.set(e.panels[o].panes[p].name, [...d, u]);
            }
            else
                e.panels[o].panes[p].name && e.panels[o].panes[p].name !== "" ? a = S(v({}, a), { [e.panels[o].panes[p].name]: u }) : a = v(v({}, a), u);
        }
        Array.from(c).forEach(([p, u]) => a[p] = u);
    } return a; }
    serializeFormPane(e) { if (e.contentPlugin === "panel")
        return this.serializeForm(new ae(this.attributeSerializer.deserializeAsObject(e.settings, !0))); {
        let t = this.attributeSerializer.deserializeAsObject(e.settings, !0);
        return t !== void 0 ? t.value : void 0;
    } }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(k.AttributeSerializerService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Ni = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    convertPageToForm({ pp: e, pp2: t, ancestory: a, debugPath: o = [] }) { return m(new _).pipe(h(() => x(e.panels.map((l, c) => this.convertPanelToForm({ panel: l, panel2: t.panels[c], ancestory: a, debugPath: [...o, `convertPageToForm{ index: ${c} }`] })))), f(l => new ae({ id: e.id, panels: l, name: t.name, title: t.title, derivativeId: "" }))); }
    convertPanelToForm({ panel: e, panel2: t, ancestory: a, debugPath: o = [] }) { return m(new oe).pipe(h(() => x(e.panes.map((l, c) => this.convertPaneToForm({ pane: l, pane2: t.panes[c], ancestory: a, debugPath: [...o, `convertPanelToForm{ index: ${c} }`] })))), f(l => new oe({ panes: l, name: t.name, label: t.label }))); }
    convertPaneToForm({ pane: e, pane2: t, ancestory: a, debugPath: o = [] }) { let l = e.state.attributes.find(c => c.name === "value"); return m(new le({ settings: l ? [l] : [], name: t.name, label: t.label, contentPlugin: t.contentPlugin })).pipe(h(c => F(() => this.hasNestedPanelPage(e), e.nestedPage ? this.convertPageToForm({ ancestory: a, pp: e.nestedPage, pp2: new D(this.attributeSerializer.deserializeAsObject(t.settings)), debugPath: [...o, "convertPaneToForm"] }).pipe(f(p => new le(S(v({}, c), { settings: this.attributeSerializer.serialize(p, "root").attributes })))) : m(c), m(c)))); }
    hasNestedPanelPage(e) { return !!e.nestedPage; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(k.AttributeSerializerService)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Ri = (() => { class n {
    constructor(e, t) { this.attributeSerializer = e, this.fb = t; }
    makeFormGroupFromPage(e, t) { return m(this.fb.group({ panels: this.fb.array([]) })).pipe(h(a => x(e.panels.map((o, l) => this.makeFormGroupFromPanel(o, t.panels[l]))).pipe(f(o => ({ panelGroups: o, pageFormGroup: a })))), $(({ panelGroups: a, pageFormGroup: o }) => { let l = a.length; for (let c = 0; c < l; c++)
        o.get("panels").push(a[c]); }), f(({ pageFormGroup: a }) => a)); }
    makeFormGroupFromPanel(e, t) { return m(this.fb.group({ name: this.fb.control(e.name), panes: this.fb.array([]) })).pipe(h(a => x(e.panes.map((o, l) => this.makeFormGroupFromPane(o, t.panes[l]))).pipe(f(o => ({ paneGroups: o, panelFormGroup: a })))), $(({ paneGroups: a, panelFormGroup: o }) => { let l = a.length; for (let c = 0; c < l; c++)
        o.get("panes").push(a[c]); }), f(({ panelFormGroup: a }) => a)); }
    makeFormGroupFromPane(e, t) { let a = t ? t.settings.find(o => o.name === "value") : void 0; return m(this.fb.group({ name: this.fb.control(e.name), contentPlugin: this.fb.control(""), settings: this.fb.array([]) })).pipe(h(o => F(() => this.hasNestedPanelPage(e), this.hasNestedPanelPage(e) ? this.makeFormGroupFromPage(e.nestedPage, new ae(this.attributeSerializer.deserializeAsObject(t.settings))).pipe($(l => { let c = this.attributeSerializer.convertToGroup(this.attributeSerializer.serialize(l.value, "value").attributes[0]); o.get("contentPlugin").setValue("panel"), o.get("settings").push(c); }), f(() => o)) : m(o).pipe($(() => { if (a) {
        let l = this.attributeSerializer.convertToGroup(a);
        o.get("settings").push(l);
    } })), m(o).pipe($(() => { if (a) {
        let l = this.attributeSerializer.convertToGroup(a);
        o.get("settings").push(l);
    } }))))); }
    hasNestedPanelPage(e) { return !!e.nestedPage; }
    static { this.\u0275fac = function (t) { return new (t || n)(r.\u0275\u0275inject(k.AttributeSerializerService), r.\u0275\u0275inject(y.UntypedFormBuilder)); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Bi = (() => { class n {
    makeJsonNode() { return { attributes: {}, children: {} }; }
    reduceCss(e, t, a = !0) { return e && e.children ? Object.keys(e.children).filter(o => a ? o.indexOf(t) === 0 : o.indexOf(t) !== 0).reduce((o, l) => S(v({}, o), { children: S(v({}, o.children), { [a ? l.substr(l.indexOf(t) + t.length).trim() : l]: e.children[l] }) }), this.makeJsonNode()) : this.makeJsonNode(); }
    reduceSelector(e, t, a = !0) { return e ? Object.keys(e).filter(o => a ? o.indexOf(t) === 0 : o.indexOf(t) !== 0).reduce((o, l) => S(v({}, o), { [a ? l.substr(l.indexOf(t) + t.length).trim() : l]: e[l] }), {}) : {}; }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = r.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })();
export { Bi as CssHelperService, mt as DatasourceContentHandler, bn as DatasourceEditorComponent, _i as DynamicPaneService, Ue as FormDatasource, Ri as FormGroupConverterService, Ei as FormService, Ni as FormStateConverterService, ue as GridItem, qe as GridLayout, xi as LayoutEditorBaseComponent, ji as LayoutRendererBaseComponent, T as LayoutSetting, $n as PANELS_SETTINGS, Bn as PageBuilderFacade, E as Pane, Oi as PaneDatasourceService, Le as PanePropsFormPayload, O as PaneState, zi as PaneStateService, q as Panel, A as PanelContentHandler, yn as PanelEditorComponent, D as PanelPage, ae as PanelPageForm, le as PanelPageFormPane, oe as PanelPageFormPanel, Si as PanelPageLinkedlistComponent, Ve as PanelPageListItem, pe as PanelPagePermissions, Je as PanelPageSelector, _ as PanelPageState, je as PanelPageStateSlice, Ge as PanelPropsFormPayload, ki as PanelResolverService, ft as PanelSelectorComponent, G as PanelState, kn as PanelStateArchitectService, $i as PanelStateConverterService, Mi as PanelStyleRendererBaseComponent, Fi as PanelsContextService, _n as PanelsLoaderService, Ci as PanelsModule, Di as PanelsSelectorService, He as PanelsSettings, Tn as PanelsWalkerService, xe as PrerenderFormPayload, Be as PropertiesFormPayload, Ii as STYLE_PLUGIN, Xe as StylePlugin, On as StylePluginManager, Ti as StyleResolverService, jn as initialState, ht as loadRestData, wi as loadRestDataError, gt as loadRestDataSuccess, St as pageBuilderFeatureKey, Dn as reducer, Ai as selectDataset, Rn as selectForm, wt as selectFormNames, Nn as selectForms, zn as selectPage, Z as selectPageBuilderState, An as selectPageInfo, En as selectSelectionPath, Pt as setForm, yt as setPage, vt as setPageInfo, bt as setSelectionPath };
//# sourceMappingURL=_rollthecloudinc_panels.p5e8tTDSE8.js.map
