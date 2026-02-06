import { a as Ri } from "@nf-internal/chunk-ISPTYA4B";
import { a as Y } from "@nf-internal/chunk-FM6WEN77";
import { a as Bt } from "@nf-internal/chunk-G7YX7OME";
import { b as zt } from "@nf-internal/chunk-CGWVJG5C";
import { a as C, b as x, h as Di, k as At } from "@nf-internal/chunk-J4XOFOAH";
import * as e from "@angular/core";
import { EventEmitter as R, forwardRef as Z, inject as ee, Injector as Ni, InjectionToken as ji } from "@angular/core";
import * as v from "@angular/common";
import { CommonModule as Oi } from "@angular/common";
import * as te from "@angular/router";
import { UrlSegment as Ct, RouterModule as ki } from "@angular/router";
import * as s from "@angular/forms";
import { UntypedFormArray as V, UntypedFormControl as p, Validators as f, NG_VALUE_ACCESSOR as tt, NG_VALIDATORS as it, FormGroup as Vi, FormControl as Ae, FormsModule as Gi, ReactiveFormsModule as Ai } from "@angular/forms";
import * as si from "ngx-markdown";
import { MarkdownModule as zi, MarkdownComponent as Bi } from "ngx-markdown";
import * as nt from "angular-split";
import { AngularSplitModule as Li } from "angular-split";
import * as ve from "ngx-dropzone";
import { NgxDropzoneModule as qi } from "ngx-dropzone";
import { MaterialModule as Ui } from "@rollthecloudinc/material";
import { NgxJsonViewerModule as Hi } from "ngx-json-viewer";
import * as Ft from "@rollthecloudinc/ngx-angular-query-builder";
import { NgxAngularQueryBuilderModule as Qi } from "@rollthecloudinc/ngx-angular-query-builder";
import * as It from "@rollthecloudinc/media";
import { MEDIA_SETTINGS as Wi, MediaFile as Ji, MediaModule as Ki } from "@rollthecloudinc/media";
import * as be from "@rollthecloudinc/utils";
import { SITE_NAME as rt, RegisterRole as Yi, UtilsModule as Xi, EMBEDDABLE_COMPONENT as Lt } from "@rollthecloudinc/utils";
import * as z from "@rollthecloudinc/token";
import { TokenModule as Zi } from "@rollthecloudinc/token";
import * as S from "@rollthecloudinc/attributes";
import { AttributeValue as le, AttributeTypes as ae, Attribute as li, ATTRIBUTE_WIDGET as ci, AttributeSerializerService as en, AttributesModule as tn } from "@rollthecloudinc/attributes";
import * as di from "@rollthecloudinc/layout";
import { GridLayoutComponent as nn, SplitLayoutComponent as rn, LayoutModule as an } from "@rollthecloudinc/layout";
import * as Mt from "@rollthecloudinc/rest";
import { RestSourceFormComponent as pi, RestModule as on } from "@rollthecloudinc/rest";
import * as at from "@rollthecloudinc/snippet";
import { Snippet as qt, SnippetModule as sn } from "@rollthecloudinc/snippet";
import * as ye from "@rollthecloudinc/content";
import { ContentBinding as ot, ContentPluginEditorOptions as q, ContentPlugin as K, CONTENT_PLUGIN as Q } from "@rollthecloudinc/content";
import * as B from "@rollthecloudinc/context";
import { InlineContext as ue, ContextFormComponent as ln, ContextPlugin as ke, ResolvedContextPlugin as cn, ContextModule as dn } from "@rollthecloudinc/context";
import { DisplayGrid as pn, GridType as un, GridsterModule as mn } from "angular-gridster2";
import * as Ce from "@angular/material/bottom-sheet";
import { MAT_BOTTOM_SHEET_DATA as ui } from "@angular/material/bottom-sheet";
import * as h from "@angular/material/dialog";
import { MAT_DIALOG_DATA as $ } from "@angular/material/dialog";
import * as st from "@angular/material/grid-list";
import * as ie from "@angular/material/list";
import * as W from "@angular/material/tabs";
import { Observable as Ue, of as u, Subject as M, BehaviorSubject as X, combineLatest as ce, forkJoin as lt, iif as De, from as gn, switchMap as mi, tap as He, merge as gi } from "rxjs";
import { map as g, switchMap as y, tap as P, filter as N, debounceTime as pe, delay as ze, take as J, distinctUntilChanged as $t, defaultIfEmpty as Et, skip as fn, catchError as hn } from "rxjs/operators";
import * as ct from "@rollthecloudinc/datasource";
import { Dataset as G, Datasource as Ut, Rest as me, SelectMapping as fi, SelectOption as vn, DatasourcePlugin as bn, DatasourceModule as yn } from "@rollthecloudinc/datasource";
var pt = Di(Ri(), 1);
import * as _ from "@rollthecloudinc/panels";
import { PropertiesFormPayload as Ee, PanelPropsFormPayload as hi, PanePropsFormPayload as vi, PrerenderFormPayload as Te, SelectionFormPayload as Be, PaneState as Ne, LayoutSetting as A, Pane as T, PanelPage as _e, PanelPageStateSlice as bi, selectDataset as Le, Panel as dt, FormDatasource as _t, StylePlugin as Qe, PanelPageForm as We, PaneDatasourceService as yi, PanelStyleRendererBaseComponent as Cn, PanelPageSelector as Ht, PanelPageState as Qt, PanelState as _n, STYLE_PLUGIN as $e, PanelsModule as Sn } from "@rollthecloudinc/panels";
import { PersistenceFormPayload as vt, PersistenceDialogComponent as xn } from "@rollthecloudinc/refinery";
import * as Ve from "@rollthecloudinc/rules";
import * as F from "@angular/material/button";
import * as b from "@angular/material/input";
import { InteractionsFormPayload as bt, InteractionsDialogComponent as wn } from "@rollthecloudinc/detour";
import * as Se from "@angular/material/expansion";
import * as xe from "@angular/material/icon";
import * as U from "@angular/material/menu";
import * as he from "@ngrx/store";
import { createSelector as Wt, select as ge } from "@ngrx/store";
import * as j from "@ngrx/data";
import * as Ci from "@angular/cdk/drag-drop";
import { getRouterSelectors as Pn } from "@ngrx/router-store";
import * as Tt from "@rollthecloudinc/durl";
import * as H from "@angular/material/autocomplete";
import * as Dt from "@angular/material/checkbox";
import * as we from "@angular/material/select";
import * as ut from "@angular/material/radio";
import * as Pe from "@rollthecloudinc/dparam";
import { Param as St, ParamSettings as Jt, TargetParamResolverService as Fn, ParamPlugin as In, DparamModule as Mn } from "@rollthecloudinc/dparam";
import * as mt from "@rollthecloudinc/render";
import { PanelPageRouterComponent as $n, RenderModule as En } from "@rollthecloudinc/render";
import * as _i from "@rollthecloudinc/bridge";
import { BridgeBuilderPlugin as Tn, PublicApiBridgeService as Dn, BridgeModule as Rn } from "@rollthecloudinc/bridge";
import * as gt from "@rollthecloudinc/crud";
import { CrudAdaptorPlugin as Nn } from "@rollthecloudinc/crud";
import * as Fe from "@angular/material/sidenav";
import { MatSidenav as jn } from "@angular/material/sidenav";
import * as Si from "@angular/material/slide-toggle";
import * as Ie from "@angular/cdk/scrolling";
import Kt from "qs";
import * as ft from "@angular/material/sort";
import * as E from "@angular/material/table";
import * as xi from "@rollthecloudinc/plugin";
import * as wi from "@angular/common/http";
function On(r, c) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "a", 4), e.\u0275\u0275listener("click", function () { let n = e.\u0275\u0275restoreView(t).$implicit, a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.onEntitySelected(n.value)); }), e.\u0275\u0275elementStart(1, "span", 5), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()();
} if (r & 2) {
    let t = c.$implicit;
    e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(t.value.title);
} }
function kn(r, c) { }
function Vn(r, c) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "classifieds-ui-dynamic-content-viewer", 1), e.\u0275\u0275pipe(1, "async"), e.\u0275\u0275listener("docRendered", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.onDocRendered()); }), e.\u0275\u0275elementEnd();
} if (r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("content", e.\u0275\u0275pipeBind1(1, 1, t.content$));
} }
function Gn(r, c) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "classifieds-ui-dynamic-content-viewer", 1), e.\u0275\u0275pipe(1, "async"), e.\u0275\u0275listener("docRendered", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.onDocRendered()); }), e.\u0275\u0275elementEnd();
} if (r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("content", e.\u0275\u0275pipeBind1(1, 1, t.content$));
} }
function An(r, c) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "a", 4), e.\u0275\u0275listener("click", function () { let n = e.\u0275\u0275restoreView(t).$implicit, a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.onStyleSelected(n.value)); }), e.\u0275\u0275elementStart(1, "span", 5), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()();
} if (r & 2) {
    let t = c.$implicit;
    e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(t.value.title);
} }
function zn(r, c) { }
var Bn = ["contentEditor"], ht = r => ({ settings: r }), Ln = r => ({ visible: r });
function qn(r, c) { r & 1 && e.\u0275\u0275elementContainer(0); }
function Un(r, c) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "button", 21), e.\u0275\u0275listener("click", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(2); return e.\u0275\u0275resetView(n.onOverrideClick()); }), e.\u0275\u0275text(1, "Override"), e.\u0275\u0275elementEnd();
} }
function Hn(r, c) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "button", 21), e.\u0275\u0275listener("click", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(2); return e.\u0275\u0275resetView(n.onRemoveOverrideClick()); }), e.\u0275\u0275text(1, "Remove Override"), e.\u0275\u0275elementEnd();
} }
function Qn(r, c) { }
function Wn(r, c) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "button", 14)(4, "mat-icon"), e.\u0275\u0275text(5, "more_vert"), e.\u0275\u0275elementEnd()()(), e.\u0275\u0275elementStart(6, "mat-expansion-panel", 15), e.\u0275\u0275listener("afterCollapse", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.onAfterCollapse()); })("afterExpand", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.onAfterExpand()); }), e.\u0275\u0275elementStart(7, "mat-expansion-panel-header")(8, "mat-panel-title"), e.\u0275\u0275text(9), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(10, "div", 16)(11, "ul"), e.\u0275\u0275template(12, qn, 1, 0, "ng-container", 17), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(13, "div", 18), e.\u0275\u0275template(14, Un, 2, 0, "button", 19)(15, Hn, 2, 0, "button", 19), e.\u0275\u0275elementContainerStart(16), e.\u0275\u0275template(17, Qn, 0, 0, "ng-template", 20), e.\u0275\u0275elementContainerEnd(), e.\u0275\u0275elementEnd()()()();
} if (r & 2) {
    let t = e.\u0275\u0275nextContext(), i = e.\u0275\u0275reference(2), n = e.\u0275\u0275reference(6);
    e.\u0275\u0275advance(3), e.\u0275\u0275property("matMenuTriggerFor", n), e.\u0275\u0275advance(6), e.\u0275\u0275textInterpolate2("", t.contentPlugin.title, " : ", t.name), e.\u0275\u0275advance(), e.\u0275\u0275property("hidden", t.preview), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngTemplateOutlet", i)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(9, ht, t.settings)), e.\u0275\u0275advance(), e.\u0275\u0275property("ngClass", e.\u0275\u0275pureFunction1(11, Ln, t.preview)), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.displayOverride && !t.hasOverride), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.displayOverride && t.hasOverride);
} }
function Jn(r, c) { if (r & 1 && (e.\u0275\u0275elementStart(0, "span"), e.\u0275\u0275text(1), e.\u0275\u0275pipe(2, "attribute"), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext().$implicit, i = e.\u0275\u0275nextContext().settings;
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind2(2, 1, i, t.name));
} }
function Kn(r, c) { r & 1 && e.\u0275\u0275elementContainer(0); }
function Yn(r, c) { if (r & 1 && (e.\u0275\u0275elementStart(0, "ul"), e.\u0275\u0275template(1, Kn, 1, 0, "ng-container", 17), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275nextContext(2);
    let i = e.\u0275\u0275reference(2);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", i)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(2, ht, t.attributes));
} }
function Xn(r, c) { if (r & 1 && (e.\u0275\u0275elementStart(0, "li"), e.\u0275\u0275text(1), e.\u0275\u0275template(2, Jn, 3, 4, "span", 23)(3, Yn, 2, 4, "ul", 23), e.\u0275\u0275elementEnd()), r & 2) {
    let t = c.$implicit, i = e.\u0275\u0275nextContext().settings;
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate1(" ", t.displayName, ": "), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !t.attributes || t.attributes.length == 0), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", i.attributes && t.attributes.length > 0);
} }
function Zn(r, c) { if (r & 1 && e.\u0275\u0275template(0, Xn, 4, 3, "li", 22), r & 2) {
    let t = c.settings;
    e.\u0275\u0275property("ngForOf", t);
} }
function er(r, c) { }
function tr(r, c) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div", 24)(1, "classifieds-ui-content-editor", 25, 3), e.\u0275\u0275listener("nestedUpdate", function (n) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.onNestedUpdate(n)); })("delete", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.onDeleteClick()); })("rules", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.onRulesClick()); })("props", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.onPropsClick()); }), e.\u0275\u0275template(3, er, 0, 0, "ng-template", null, 4, e.\u0275\u0275templateRefExtractor), e.\u0275\u0275elementEnd()();
} if (r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("panelPage", t.panelPage)("savable", !1)("nested", !0)("locked", t.locked)("contexts", t.contexts)("rootContext", t.rootContext)("ancestory", t.paneAncestoryWithSelf);
} }
function ir(r, c) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "button", 26), e.\u0275\u0275listener("click", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.onPreviewClick()); }), e.\u0275\u0275text(1, "Preview"), e.\u0275\u0275elementEnd();
} if (r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("disabled", t.locked);
} }
function nr(r, c) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "button", 27), e.\u0275\u0275listener("click", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.onDisablePreviewClick()); }), e.\u0275\u0275text(1, "Disable Preview"), e.\u0275\u0275elementEnd();
} }
var rr = ["extraActionsArea"], ar = ["contextsMenuTpl"], or = ["editablePaneTpl"], sr = ["panes"], Pi = r => ({ nested: r });
function lr(r, c) { }
function cr(r, c) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "form", 7), e.\u0275\u0275listener("ngSubmit", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.submit()); }), e.\u0275\u0275elementContainerStart(1), e.\u0275\u0275template(2, lr, 0, 0, "ng-template", 8), e.\u0275\u0275elementContainerEnd(), e.\u0275\u0275elementEnd();
} if (r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("formGroup", t.contentForm)("ngClass", e.\u0275\u0275pureFunction1(2, Pi, t.nested));
} }
function dr(r, c) { }
function pr(r, c) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div", 9), e.\u0275\u0275elementContainerStart(1), e.\u0275\u0275template(2, dr, 0, 0, "ng-template", 8), e.\u0275\u0275elementContainerEnd(), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("formGroup", t.contentForm)("ngClass", e.\u0275\u0275pureFunction1(2, Pi, t.nested));
} }
function ur(r, c) { r & 1 && e.\u0275\u0275element(0, "div", 12); }
function mr(r, c) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "classifieds-ui-editable-pane", 10), e.\u0275\u0275listener("delete", function () { let n = e.\u0275\u0275restoreView(t), a = n.i, o = n.j, l = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(l.onDeletePane(a, o)); })("rules", function () { let n = e.\u0275\u0275restoreView(t), a = n.i, o = n.j, l = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(l.onRulesPane(a, o)); })("nestedUpdate", function (n) { let a = e.\u0275\u0275restoreView(t), o = a.i, l = a.j, d = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(d.onNestedUpdate(n, o, l)); })("rendererOverride", function () { let n = e.\u0275\u0275restoreView(t), a = n.i, o = n.j, l = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(l.onOverrideRenderer(a, o)); })("removeRendererOverride", function () { let n = e.\u0275\u0275restoreView(t), a = n.i, o = n.j, l = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(l.onRemoveOverrideRenderer(a, o)); })("edit", function () { let n = e.\u0275\u0275restoreView(t), a = n.i, o = n.j, l = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(l.onPaneEdit(a, o)); })("props", function () { let n = e.\u0275\u0275restoreView(t), a = n.i, o = n.j, l = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(l.editPaneProps(a, o)); })("delete", function () { let n = e.\u0275\u0275restoreView(t), a = n.i, o = n.j, l = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(l.onPaneDelete(a, o)); }), e.\u0275\u0275template(1, ur, 1, 0, "div", 11), e.\u0275\u0275elementEnd();
} if (r & 2) {
    let t = c.i, i = c.j, n = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("panelIndex", t)("paneIndex", i)("name", n.panelPaneName(t, i))("label", n.panelPaneLabel(t, i))("locked", n.panelPaneLocked(t, i))("contexts", n.contexts)("pluginName", n.panelPanePlugin(t, i))("settings", n.panelPaneSettings(t, i))("ancestory", n.ancestory);
} }
function gr(r, c) { if (r & 1 && (e.\u0275\u0275elementStart(0, "button", 13), e.\u0275\u0275text(1, "( x )"), e.\u0275\u0275elementEnd()), r & 2) {
    e.\u0275\u0275nextContext();
    let t = e.\u0275\u0275reference(8);
    e.\u0275\u0275property("matMenuTriggerFor", t);
} }
function fr(r, c) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "button", 5), e.\u0275\u0275listener("click", function () { let n = e.\u0275\u0275restoreView(t).$implicit, a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.onEditContext(n.name)); }), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd();
} if (r & 2) {
    let t = c.$implicit;
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.name);
} }
function hr(r, c) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "a", 1), e.\u0275\u0275listener("click", function () { let n = e.\u0275\u0275restoreView(t).$implicit, a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.onItemSelect(n.value)); }), e.\u0275\u0275elementStart(1, "span", 2), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()();
} if (r & 2) {
    let t = c.$implicit;
    e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(t.value.name);
} }
function vr(r, c) { r & 1 && e.\u0275\u0275elementContainer(0); }
function br(r, c) { if (r & 1 && (e.\u0275\u0275elementStart(0, "span"), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate1("", t.displayName, ": ");
} }
function yr(r, c) { if (r & 1 && (e.\u0275\u0275elementStart(0, "span"), e.\u0275\u0275text(1), e.\u0275\u0275pipe(2, "attribute"), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext().$implicit, i = e.\u0275\u0275nextContext().settings;
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind2(2, 1, i, t.name));
} }
function Cr(r, c) { r & 1 && e.\u0275\u0275elementContainer(0); }
function _r(r, c) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div"), e.\u0275\u0275template(1, Cr, 1, 0, "ng-container", 5), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275nextContext(2);
    let i = e.\u0275\u0275reference(3);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", i)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(2, ht, t.attributes));
} }
function Sr(r, c) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div"), e.\u0275\u0275template(1, br, 2, 1, "span", 3)(2, yr, 3, 4, "span", 3)(3, _r, 2, 4, "div", 3), e.\u0275\u0275elementEnd()), r & 2) {
    let t = c.$implicit;
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.attributes.length == 0), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.attributes.length == 0), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.attributes.length > 0);
} }
function xr(r, c) { if (r & 1 && e.\u0275\u0275template(0, Sr, 4, 3, "div", 6), r & 2) {
    let t = c.settings;
    e.\u0275\u0275property("ngForOf", t);
} }
function wr(r, c) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div"), e.\u0275\u0275template(1, vr, 1, 0, "ng-container", 5)(2, xr, 1, 1, "ng-template", null, 1, e.\u0275\u0275templateRefExtractor), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275reference(3), i = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", t)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(2, ht, i.attributeValues));
} }
function Pr(r, c) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div", 7), e.\u0275\u0275element(1, "classifieds-ui-attributes-builder", 8), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275property("formGroup", t.controlContainer.control), e.\u0275\u0275advance(), e.\u0275\u0275property("attributes", t.attributes)("attributeValues", t.attributeValues);
} }
function Fr(r, c) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div"), e.\u0275\u0275template(1, wr, 4, 4, "div", 3)(2, Pr, 2, 3, "div", 4), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.displayType == "page"), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.displayType == "form");
} }
function Ir(r, c) { if (r & 1 && e.\u0275\u0275element(0, "classifieds-ui-snippet-pane-renderer", 9), r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("settings", t.rendererSettings)("tokens", t.tokens);
} }
function Mr(r, c) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "ngx-dropzone-image-preview", 2), e.\u0275\u0275listener("removed", function (n) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.onRemoveMedia(n)); }), e.\u0275\u0275elementStart(1, "ngx-dropzone-label"), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()();
} if (r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("removable", !0)("file", t.media), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate2("", t.media.name, " (", t.media.type, ")");
} }
var $r = ["img"];
function Er(r, c) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 26), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = c.$implicit;
    e.\u0275\u0275property("value", t), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t);
} }
function Tr(r, c) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div")(1, "mat-form-field", 23)(2, "mat-label"), e.\u0275\u0275text(3, "Pane"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(4, "mat-select", 24), e.\u0275\u0275template(5, Er, 2, 2, "mat-option", 25), e.\u0275\u0275elementEnd()()()), r & 2) {
    let t = c.index, i = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(), e.\u0275\u0275property("formGroupName", t), e.\u0275\u0275advance(4), e.\u0275\u0275property("ngForOf", i.panes);
} }
function Dr(r, c) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div", 20)(1, "button", 21), e.\u0275\u0275listener("click", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.addPane()); }), e.\u0275\u0275text(2, "Add Pane"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(3, "div"), e.\u0275\u0275template(4, Tr, 6, 2, "div", 22), e.\u0275\u0275elementEnd()();
} if (r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(4), e.\u0275\u0275property("ngForOf", t.bindings.controls);
} }
function Rr(r, c) { r & 1 && (e.\u0275\u0275elementStart(0, "div", 27)(1, "mat-form-field"), e.\u0275\u0275element(2, "input", 28), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(3, "mat-form-field"), e.\u0275\u0275element(4, "input", 29), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(5, "mat-form-field"), e.\u0275\u0275element(6, "input", 30), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(7, "div")(8, "mat-checkbox", 31), e.\u0275\u0275text(9, "Multiple"), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(10, "mat-form-field"), e.\u0275\u0275element(11, "input", 32), e.\u0275\u0275elementEnd()()); }
function Nr(r, c) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 8), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = c.$implicit;
    e.\u0275\u0275property("value", t.value), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label);
} }
function jr(r, c) { if (r & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275elementStart(1, "mat-form-field")(2, "mat-label"), e.\u0275\u0275text(3), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(4, "mat-select", 6), e.\u0275\u0275template(5, Nr, 2, 2, "mat-option", 7), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementContainerEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(3), e.\u0275\u0275textInterpolate(t.label), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", t.options);
} }
function Or(r, c) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-radio-button", 8), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = c.$implicit;
    e.\u0275\u0275property("value", t.value), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label);
} }
function kr(r, c) { if (r & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275elementStart(1, "div")(2, "label"), e.\u0275\u0275text(3), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(4, "mat-radio-group", 6), e.\u0275\u0275template(5, Or, 2, 2, "mat-radio-button", 7), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementContainerEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(3), e.\u0275\u0275textInterpolate(t.label), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", t.options);
} }
function Vr(r, c) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div")(1, "div", 10)(2, "mat-checkbox", 11), e.\u0275\u0275text(3), e.\u0275\u0275elementEnd()()()), r & 2) {
    let t = c.$implicit, i = c.index;
    e.\u0275\u0275advance(), e.\u0275\u0275property("formGroupName", i), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(t.label);
} }
function Gr(r, c) { if (r & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275elementStart(1, "div")(2, "div", 2), e.\u0275\u0275template(3, Vr, 4, 2, "div", 9), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementContainerEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(3), e.\u0275\u0275property("ngForOf", t.options);
} }
function Ar(r, c) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 8), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = c.$implicit;
    e.\u0275\u0275property("value", t), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label);
} }
function zr(r, c) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275elementStart(1, "mat-form-field"), e.\u0275\u0275element(2, "input", 12), e.\u0275\u0275elementStart(3, "mat-autocomplete", 13, 0), e.\u0275\u0275listener("optionSelected", function (n) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.onOptionSelected(n)); }), e.\u0275\u0275template(5, Ar, 2, 2, "mat-option", 7), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementContainerEnd();
} if (r & 2) {
    let t = e.\u0275\u0275reference(4), i = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(2), e.\u0275\u0275property("placeholder", i.label)("matAutocomplete", t), e.\u0275\u0275advance(), e.\u0275\u0275property("displayWith", i.displayAuto), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", i.options);
} }
function Br(r, c) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 8), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = c.$implicit;
    e.\u0275\u0275property("value", t.name), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.name);
} }
function Lr(r, c) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div", 5), e.\u0275\u0275element(1, "druid-panels-panelpage-linkedlist", 6), e.\u0275\u0275elementStart(2, "button", 3), e.\u0275\u0275listener("click", function () { let n = e.\u0275\u0275restoreView(t).index, a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.onRemoveMapping(n)); }), e.\u0275\u0275text(3, "Remove"), e.\u0275\u0275elementEnd()();
} if (r & 2) {
    let t = c.index, i = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("formGroupName", t), e.\u0275\u0275advance(), e.\u0275\u0275property("panes", i.panes);
} }
function qr(r, c) { if (r & 1 && e.\u0275\u0275element(0, "classifieds-ui-render-pane", 4), r & 2) {
    let t = e.\u0275\u0275nextContext().index, i = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275property("pluginName", i.panes[t * 2].contentPlugin)("settings", i.panes[t * 2].settings)("contexts", i.panes[t * 2].contexts);
} }
function Ur(r, c) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-tab"), e.\u0275\u0275template(1, qr, 1, 3, "ng-template", 3), e.\u0275\u0275element(2, "classifieds-ui-render-pane", 4), e.\u0275\u0275elementEnd()), r & 2) {
    let t = c.index, i = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(2), e.\u0275\u0275property("pluginName", i.panes[t * 2 + 1].contentPlugin)("settings", i.panes[t * 2 + 1].settings)("contexts", i.panes[t * 2 + 1].contexts);
} }
function Hr(r, c) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-tab-group", 1), e.\u0275\u0275template(1, Ur, 3, 3, "mat-tab", 2), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("for", t.panes.length / 2);
} }
function Qr(r, c) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-tab", 6), e.\u0275\u0275element(1, "classifieds-ui-render-pane", 4), e.\u0275\u0275elementEnd()), r & 2) {
    let t = c.$implicit;
    e.\u0275\u0275advance(), e.\u0275\u0275property("pluginName", t.contentPlugin)("settings", t.settings)("contexts", t.contexts);
} }
function Wr(r, c) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-tab-group", 1), e.\u0275\u0275template(1, Qr, 2, 3, "mat-tab", 5), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngForOf", t.panes);
} }
function Jr(r, c) { if (r & 1 && (e.\u0275\u0275elementStart(0, "a", 2), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("routerLink", t.route), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.text);
} }
function Kr(r, c) { if (r & 1 && (e.\u0275\u0275elementStart(0, "a", 3), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("href", t.href, e.\u0275\u0275sanitizeUrl), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.text);
} }
function Yr(r, c) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div", 7)(1, "mat-form-field")(2, "mat-label"), e.\u0275\u0275text(3, "Item Icon Name"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(4, "input", 1), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(5, "mat-form-field")(6, "mat-label"), e.\u0275\u0275text(7, "Item Text"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(8, "input", 8), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(9, "mat-form-field")(10, "mat-label"), e.\u0275\u0275text(11, "Item Action (CSS class)"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(12, "input", 9), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(13, "button", 10), e.\u0275\u0275listener("click", function () { let n = e.\u0275\u0275restoreView(t).index, a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.removeItem(n)); }), e.\u0275\u0275elementStart(14, "mat-icon"), e.\u0275\u0275text(15, "delete"), e.\u0275\u0275elementEnd()()();
} if (r & 2) {
    let t = c.index;
    e.\u0275\u0275property("formGroupName", t);
} }
function Xr(r, c) { if (r & 1 && (e.\u0275\u0275elementStart(0, "button", 3)(1, "mat-icon", 4), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(3, "span", 4), e.\u0275\u0275text(4), e.\u0275\u0275elementEnd()()), r & 2) {
    let t = c.$implicit;
    e.\u0275\u0275property("ngClass", t.action ? "action-" + t.action : null), e.\u0275\u0275advance(), e.\u0275\u0275property("ngClass", t.action ? "action-" + t.action : null), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.iconName), e.\u0275\u0275advance(), e.\u0275\u0275property("ngClass", t.action ? "action-" + t.action : null), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.text);
} }
function Zr(r, c) { if (r & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275element(1, "classifieds-ui-render-pane", 2), e.\u0275\u0275elementContainerEnd()), r & 2) {
    let t = c.ngIf, i = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("pluginName", t.contentPlugin)("settings", t.settings)("name", t.name)("label", t.label)("originPane", i.panel == null || i.panel.panes == null ? null : i.panel.panes[i.originMappings == null ? null : i.originMappings[0]])("contexts", t.contexts)("displayType", i.displayType)("resolvedContext", t.resolvedContext)("indexPosition", 0)("css", i.filteredCss)("listeners", i.filteredListeners)("panes", i.panes)("originPanes", i.originPanes)("ancestory", i.ancestory);
} }
function ea(r, c) { if (r & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275element(1, "classifieds-ui-render-pane", 2), e.\u0275\u0275elementContainerEnd()), r & 2) {
    let t = c.ngIf, i = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("pluginName", t.contentPlugin)("settings", t.settings)("name", t.name)("label", t.label)("originPane", i.panel == null || i.panel.panes == null ? null : i.panel.panes[i.originMappings == null ? null : i.originMappings[1]])("contexts", t.contexts)("displayType", i.displayType)("resolvedContext", t.resolvedContext)("indexPosition", 1)("css", i.filteredCss)("listeners", i.filteredListeners)("panes", i.panes)("originPanes", i.originPanes)("ancestory", i.ancestory);
} }
function ta(r, c) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div", 2), e.\u0275\u0275element(1, "classifieds-ui-render-pane", 3), e.\u0275\u0275elementEnd()), r & 2) {
    let t = c.$implicit;
    e.\u0275\u0275advance(), e.\u0275\u0275property("pluginName", t.contentPlugin)("settings", t.settings)("contexts", t.contexts)("resolvedContext", t.resolvedContext);
} }
function ia(r, c) { if (r & 1 && (e.\u0275\u0275elementStart(0, "th", 7), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t);
} }
function na(r, c) { if (r & 1 && (e.\u0275\u0275elementStart(0, "td", 8), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = c.$implicit, i = e.\u0275\u0275nextContext().$implicit, n = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(n.rowData(i, t));
} }
function ra(r, c) { if (r & 1 && (e.\u0275\u0275elementContainerStart(0, 4), e.\u0275\u0275template(1, ia, 2, 1, "th", 5)(2, na, 2, 1, "td", 6), e.\u0275\u0275elementContainerEnd()), r & 2) {
    let t = c.$implicit;
    e.\u0275\u0275property("matColumnDef", t);
} }
function aa(r, c) { r & 1 && e.\u0275\u0275element(0, "tr", 9); }
function oa(r, c) { r & 1 && e.\u0275\u0275element(0, "tr", 10); }
var sa = { GridLayout: { entityName: "GridLayout" }, PanelPageForm: { crud: { panelpageform_serialize: { plugins: { idb_keyval: { params: { prefix: "panelpageform__" } } } } } } }, Je = (() => { class r {
    constructor(t) { this.viewContainerRef = t; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(e.ViewContainerRef)); }; }
    static { this.\u0275dir = e.\u0275\u0275defineDirective({ type: r, selectors: [["", "classifiedsUiContentSelectionHost", ""]], standalone: !1 }); }
} return r; })(), la = (() => { class r {
    constructor(t, i, n, a, o, l) { this.data = t, this.bottomSheetRef = i, this.dialog = n, this.componentFactoryResolver = a, this.fb = o, this.contentPluginManager = l, this.selectedIndex = 0; }
    ngOnInit() { this.contentPlugins = this.contentPluginManager.getPlugins(); }
    onEntitySelected(t) { if (this.plugin = t, this.plugin.selectionComponent !== void 0)
        this.selectedIndex = 1, this.renderSelectionComponent();
    else if (this.plugin.editorComponent !== void 0)
        if (this.bottomSheetRef.dismiss(), t.handler)
            this.plugin.handler.editorOptions([]).subscribe(i => { let n = this.dialog.open(this.plugin.editorComponent, C({ data: { panelFormGroup: this.data.panelForm, panelIndex: this.data.panelIndex, pane: void 0, paneIndex: void 0, contexts: this.data.contexts, contentAdded: this.data.contentAdded, plugin: t } }, i.fullscreen ? { maxWidth: "100vw", maxHeight: "100vh", height: "100%", width: "100%" } : {})); });
        else {
            let i = this.dialog.open(this.plugin.editorComponent, { data: { panelFormGroup: this.data.panelForm, panelIndex: this.data.panelIndex, pane: void 0, paneIndex: void 0, contexts: this.data.contexts, contentAdded: this.data.contentAdded } });
        }
    else
        this.data.panelForm.get("panes").push(this.fb.group({ contentPlugin: this.fb.control(this.plugin.id), name: this.fb.control(""), label: this.fb.control(""), settings: this.fb.array([]) })); }
    renderSelectionComponent() { let t = this.componentFactoryResolver.resolveComponentFactory(this.plugin.selectionComponent), i = this.selectionHost.viewContainerRef; i.clear(); let n = i.createComponent(t); n.instance.panelFormGroup = this.data.panelForm, n.instance.contexts = this.data.contexts; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(ui), e.\u0275\u0275directiveInject(Ce.MatBottomSheetRef), e.\u0275\u0275directiveInject(h.MatDialog), e.\u0275\u0275directiveInject(e.ComponentFactoryResolver), e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(ye.ContentPluginManager)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-content-selector"]], viewQuery: function (i, n) { if (i & 1 && e.\u0275\u0275viewQuery(Je, 7), i & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.selectionHost = a.first);
        } }, standalone: !1, decls: 10, vars: 6, consts: [[1, "content-selector-wrapper"], [3, "selectedIndex"], ["mat-list-item", "", "mat-list-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["classifiedsUiContentSelectionHost", ""], ["mat-list-item", "", "mat-list-item", "", 3, "click"], ["mat-line", ""]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "mat-tab-group", 1)(2, "mat-tab")(3, "mat-nav-list"), e.\u0275\u0275template(4, On, 3, 1, "a", 2), e.\u0275\u0275pipe(5, "async"), e.\u0275\u0275pipe(6, "keyvalue"), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(7, "mat-tab"), e.\u0275\u0275elementContainerStart(8), e.\u0275\u0275template(9, kn, 0, 0, "ng-template", 3), e.\u0275\u0275elementContainerEnd(), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275advance(), e.\u0275\u0275property("selectedIndex", n.selectedIndex), e.\u0275\u0275advance(3), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(6, 4, e.\u0275\u0275pipeBind1(5, 2, n.contentPlugins)))); }, dependencies: [v.NgForOf, st.MatLine, ie.MatNavList, ie.MatListItem, W.MatTab, W.MatTabGroup, Je, v.AsyncPipe, v.KeyValuePipe], styles: [".content-selector-wrapper[_ngcontent-%COMP%]     .mat-mdc-tab-header{display:none}"] }); }
} return r; })(), oe = (() => { class r {
    constructor(t, i) { this.attributeSerializer = t, this.tokenizrService = i, this.types = ["text/markdown", "text/html"]; }
    handleFile(t) { return new Ue(i => { let n = new FileReader; n.onload = () => { i.next(this.buildSettings(new qt({ contentType: t.type, content: `${n.result}` }))), i.complete(); }, n.readAsText(t); }); }
    handlesType(t) { return this.types.find(i => i === t) !== void 0; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(t) { return u(!1); }
    isDynamic(t) { return !1; }
    isData(t) { return !1; }
    getBindings(t, i, n) { return i === "context" ? this.toObject(t).pipe(g(a => this.tokenizrService.discoverTokens(a.content).map(l => new ot({ id: l, type: "context" })))) : u([]); }
    fetchDynamicData(t, i) { return u(new G); }
    buildDynamicItems(t, i) { return u([]); }
    toObject(t) { return u(new qt(this.attributeSerializer.deserializeAsObject(t))); }
    buildSettings(t) { return this.attributeSerializer.serialize(t, "root").attributes; }
    stateDefinition(t) { return u({}); }
    editorOptions(t) { return u(new q({ fullscreen: !0 })); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(S.AttributeSerializerService), e.\u0275\u0275inject(z.TokenizerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), Fi = (() => { class r {
    set settings(t) { this.settings$.next(t); }
    set resolvedContext(t) { this.resolvedContext$.next(t); }
    constructor(t, i, n, a) { this.hostEl = t, this.handler = i, this.tokenizerService = n, this.markdownService = a, this.contexts = [], this.afterContentInit$ = new M, this.content = "", this.content$ = new X(""), this.settings$ = new X([]), this.snippet$ = new X(void 0), this.resolvedContext$ = new X(void 0), this.docRendered$ = new M, this.contentSub = ce([this.afterContentInit$, this.content$, this.snippet$, this.docRendered$]).subscribe(([o, l, d]) => { d && d.jsScript && d.jsScript !== "" && setTimeout(() => this.appendScript(d.jsScript)); }), this.renderContentSub = ce([this.settings$, this.resolvedContext$]).pipe(y(([o, l]) => this.handler.toObject(o)), y(o => this.resolveContexts().pipe(g(l => [o, l])))).subscribe(d => At(this, [d], function* ([o, l]) { l !== void 0 && (this.tokens = l), this.contentType = o.contentType, this.snippet$.next(o); let m = this.replaceTokens(o.content), w; o.contentType && o.contentType.indexOf("markdown") !== -1 ? w = yield Promise.resolve(this.markdownService.parse(m)) : w = m, this.content$.next(w); })); }
    ngOnInit() { }
    ngOnChanges() { console.log("pane changed"); }
    ngAfterContentInit() { this.afterContentInit$.next(), this.afterContentInit$.complete(); }
    replaceTokens(t) { return this.tokens !== void 0 && this.tokens.forEach((i, n) => { t = t.split(`[${n}]`).join(`${i}`); }), t; }
    resolveContexts() { return new Ue(t => { let i = new Map; if (this.resolvedContext$.value)
        for (let n in this.resolvedContext$.value)
            i = new Map([...i, ...this.tokenizerService.generateGenericTokens(this.resolvedContext$.value[n], n === "_root" ? "" : n)]); t.next(i), t.complete(); }); }
    appendScript(t) { let i = document.createElement("script"); i.type = "text/javascript", i.appendChild(document.createTextNode(t)), this.hostEl.nativeElement.appendChild(i), console.log("add script"); }
    onDocRendered() { this.docRendered$.next(void 0); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(oe), e.\u0275\u0275directiveInject(z.TokenizerService), e.\u0275\u0275directiveInject(si.MarkdownService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-snippet-pane-renderer"]], inputs: { settings: "settings", contexts: "contexts", tokens: "tokens", resolvedContext: "resolvedContext" }, standalone: !1, features: [e.\u0275\u0275NgOnChangesFeature], decls: 2, vars: 2, consts: [[3, "content", "docRendered", 4, "ngIf"], [3, "docRendered", "content"]], template: function (i, n) { i & 1 && e.\u0275\u0275template(0, Vn, 2, 3, "classifieds-ui-dynamic-content-viewer", 0)(1, Gn, 2, 3, "classifieds-ui-dynamic-content-viewer", 0), i & 2 && (e.\u0275\u0275property("ngIf", n.contentType == "text/markdown"), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", n.contentType == "text/html")); }, dependencies: [v.NgIf, be.DynamicContentViewer, v.AsyncPipe], encapsulation: 2 }); }
} return r; })(), se = (() => { class r {
    constructor(t) { this.snippetHandler = t; }
    handleFile(t) { return u([]); }
    handlesType(t) { return !1; }
    implementsRendererOverride() { return !0; }
    hasRendererOverride(t) { return this.rendererSnippet(t).pipe(g(i => i !== void 0)); }
    isDynamic(t) { return !1; }
    isData(t) { return !1; }
    fetchDynamicData(t, i) { return u(new G); }
    buildDynamicItems(t, i) { return u([]); }
    getBindings(t, i, n) { return u([]); }
    valueSettings(t) { let i = []; return t.forEach(n => { n.name === "value" && i.push(n); }), i; }
    rendererSnippet(t) { let i; return t.forEach(n => { n.name === "_renderer" && (i = this.snippetHandler.toObject(n.attributes)); }), i !== void 0 ? i : u(void 0); }
    rendererOverrideSettings(t) { return [new le({ name: "_renderer", type: ae.Complex, displayName: "Renderer Override", value: void 0, computedValue: void 0, intValue: 0, attributes: this.snippetHandler.buildSettings(t) })]; }
    widgetSettings(t) { return [new le({ name: "widget", type: t.schema.type, displayName: "Widget", value: t.name, computedValue: t.name, intValue: 0, attributes: [] })]; }
    stateDefinition(t) { return u({}); }
    editorOptions(t) { return u(new q); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(oe)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), ca = (() => { class r {
    constructor(t, i, n, a, o) { this.data = t, this.dialogRef = i, this.tokenizerService = n, this.handler = a, this.fb = o; }
    ngOnInit() { this.tokens = this.tokenizerService.generateTokens(this.data.pane.settings); }
    submitted(t) { this.replaceRenderer(t), this.dialogRef.close(); }
    replaceRenderer(t) { let i, n = this.handler.rendererOverrideSettings(t)[0], a = this.convertToGroup(n), o = this.data.panelFormGroup.get("panes").at(this.data.paneIndex).get("settings"); o.controls.forEach((l, d) => { l.get("name").value === "_renderer" && (i = d); }), i !== void 0 ? (o.insert(i, a), o.removeAt(i + 1)) : o.push(a); }
    convertToGroup(t) { let i = this.fb.group({ name: new p(t.name, f.required), type: new p(t.type, f.required), displayName: new p(t.displayName, f.required), value: new p(t.value, f.required), computedValue: new p(t.value, f.required), attributes: new V([]) }); return t.attributes && t.attributes.length > 0 && t.attributes.forEach(n => { i.get("attributes").push(this.convertToGroup(n)); }), i; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject($), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(z.TokenizerService), e.\u0275\u0275directiveInject(se), e.\u0275\u0275directiveInject(s.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-rendering-editor"]], standalone: !1, decls: 2, vars: 1, consts: [[3, "submitted", "tokens"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "classifieds-ui-snippet-form", 0), e.\u0275\u0275listener("submitted", function (o) { return n.submitted(o); }), e.\u0275\u0275element(1, "classifieds-ui-snippet-form"), e.\u0275\u0275elementEnd()), i & 2 && e.\u0275\u0275property("tokens", n.tokens); }, dependencies: [at.SnippetFormComponent], encapsulation: 2 }); }
} return r; })(), da = (() => { class r {
    constructor(t, i, n, a, o, l) { this.data = t, this.spm = i, this.bottomSheetRef = n, this.dialog = a, this.componentFactoryResolver = o, this.fb = l, this.selectedIndex = 0; }
    ngOnInit() { this.stylePlugins = this.spm.getPlugins(); }
    onStyleSelected(t) { if (this.plugin = t, this.plugin.editorComponent !== void 0) {
        this.bottomSheetRef.dismiss(), this.data.panelForm.get("stylePlugin").setValue(this.plugin.name), this.data.panelForm.get("styleTitle").setValue(this.plugin.title), this.data.panelForm.get("settings").clear();
        let i = this.dialog.open(this.plugin.editorComponent, { data: { panelFormGroup: this.data.panelForm, panelIndex: this.data.panelIndex, contexts: this.data.contexts } });
    }
    else
        this.data.panelForm.get("stylePlugin").setValue(this.plugin.name), this.data.panelForm.get("styleTitle").setValue(this.plugin.title), this.data.panelForm.get("settings").clear(), this.bottomSheetRef.dismiss(); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(ui), e.\u0275\u0275directiveInject(_.StylePluginManager), e.\u0275\u0275directiveInject(Ce.MatBottomSheetRef), e.\u0275\u0275directiveInject(h.MatDialog), e.\u0275\u0275directiveInject(e.ComponentFactoryResolver), e.\u0275\u0275directiveInject(s.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-style-selector"]], viewQuery: function (i, n) { if (i & 1 && e.\u0275\u0275viewQuery(Je, 7), i & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.selectionHost = a.first);
        } }, standalone: !1, decls: 10, vars: 6, consts: [[1, "style-selector-wrapper"], [3, "selectedIndex"], ["mat-list-item", "", "mat-list-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["classifiedsUiContentSelectionHost", ""], ["mat-list-item", "", "mat-list-item", "", 3, "click"], ["mat-line", ""]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "mat-tab-group", 1)(2, "mat-tab")(3, "mat-nav-list"), e.\u0275\u0275template(4, An, 3, 1, "a", 2), e.\u0275\u0275pipe(5, "async"), e.\u0275\u0275pipe(6, "keyvalue"), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(7, "mat-tab"), e.\u0275\u0275elementContainerStart(8), e.\u0275\u0275template(9, zn, 0, 0, "ng-template", 3), e.\u0275\u0275elementContainerEnd(), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275advance(), e.\u0275\u0275property("selectedIndex", n.selectedIndex), e.\u0275\u0275advance(3), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(6, 4, e.\u0275\u0275pipeBind1(5, 2, n.stylePlugins)))); }, dependencies: [v.NgForOf, st.MatLine, ie.MatNavList, ie.MatListItem, W.MatTab, W.MatTabGroup, Je, v.AsyncPipe, v.KeyValuePipe], styles: [".style-selector-wrapper[_ngcontent-%COMP%]     .mat-mdc-tab-header{display:none}"] }); }
} return r; })(), pa = (() => { class r {
    constructor(t, i, n, a, o) { this.data = t, this.dialogRef = i, this.fb = n, this.inlineContextResolver = a, this.rulesParser = o, this.rulesForm = this.fb.group({ rules: this.fb.control("") }), this.config = { fields: {} }; }
    ngOnInit() { this.inlineContextResolver.resolveMerged(this.data.contexts).subscribe(t => { let i = {}; for (let n in t)
        this.rulesParser.buildFields(t[n], n).forEach((a, o) => { i[o] = a; }); this.config = x(C({}, this.config), { fields: i }), this.data.rule !== void 0 && this.rulesForm.get("rules").setValue(this.data.rule); }); }
    submit() { console.log("the rules"), console.log(this.rulesForm.get("rules").value), this.dialogRef.close(this.rulesForm.get("rules").value); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject($), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(B.InlineContextResolverService), e.\u0275\u0275directiveInject(Ve.RulesParserService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-rules-dialog"]], standalone: !1, decls: 6, vars: 3, consts: [[1, "rest-form", 3, "ngSubmit", "formGroup"], ["formControlName", "rules", 3, "config"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content"), e.\u0275\u0275element(2, "query-builder", 1), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(3, "mat-dialog-actions")(4, "button", 2), e.\u0275\u0275text(5, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.rulesForm), e.\u0275\u0275advance(2), e.\u0275\u0275property("config", n.config), e.\u0275\u0275advance(2), e.\u0275\u0275property("disabled", !n.rulesForm.valid)); }, dependencies: [s.\u0275NgNoValidate, s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, F.MatButton, h.MatDialogClose, h.MatDialogActions, h.MatDialogContent, Ft.QueryBuilderComponent], encapsulation: 2 }); }
} return r; })(), ua = (() => { class r {
    constructor(t, i, n) { this.data = t, this.dialogRef = i, this.fb = n, this.propertiesForm = this.fb.group({ name: this.fb.control(this.data.props.name), title: this.fb.control(this.data.props.title), path: this.fb.control(this.data.props.path), cssFile: this.fb.control(this.data.props.cssFile), readUserIds: this.fb.array([this.fb.group({ userId: this.fb.control(this.data.props.readUserIds && this.data.props.readUserIds.length > 0 ? this.data.props.readUserIds[0] : "") })]) }); }
    ngOnInit() { }
    submit() { this.dialogRef.close(new Ee(x(C({}, this.propertiesForm.value), { readUserIds: this.propertiesForm.value.readUserIds.map(t => t.userId) }))); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject($), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(s.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-properties-dialog"]], standalone: !1, decls: 18, vars: 2, consts: [[1, "properties-form", 3, "ngSubmit", "formGroup"], [1, "content-inner"], ["fxLayout", "column"], ["matInput", "", "formControlName", "name", "placeholder", "Name"], ["matInput", "", "formControlName", "title", "placeholder", "Title"], ["matInput", "", "formControlName", "path", "placeholder", "Path"], ["matInput", "", "formControlName", "cssFile", "placeholder", "Css File"], ["formArrayName", "readUserIds"], ["formGroupName", "0"], ["matInput", "", "formControlName", "userId", "placeholder", "Read User Id"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "div", 1)(3, "div", 2)(4, "mat-form-field"), e.\u0275\u0275element(5, "input", 3), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(6, "mat-form-field"), e.\u0275\u0275element(7, "input", 4), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(8, "mat-form-field"), e.\u0275\u0275element(9, "input", 5), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(10, "mat-form-field"), e.\u0275\u0275element(11, "input", 6), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(12, "mat-form-field", 7)(13, "div", 8), e.\u0275\u0275element(14, "input", 9), e.\u0275\u0275elementEnd()()()()(), e.\u0275\u0275elementStart(15, "mat-dialog-actions")(16, "button", 10), e.\u0275\u0275text(17, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.propertiesForm), e.\u0275\u0275advance(16), e.\u0275\u0275property("disabled", !n.propertiesForm.valid)); }, dependencies: [s.\u0275NgNoValidate, s.DefaultValueAccessor, s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, s.FormGroupName, s.FormArrayName, F.MatButton, h.MatDialogClose, h.MatDialogActions, h.MatDialogContent, b.MatInput, b.MatFormField], encapsulation: 2 }); }
} return r; })(), Yt = (() => { class r {
    constructor(t, i, n) { this.data = t, this.dialogRef = i, this.fb = n, this.contextForm = this.fb.group({ context: this.fb.control("") }), this.context = t.context; }
    ngOnInit() { }
    ngAfterViewInit() { this.data.context && setTimeout(() => { this.contextFormComp.contextForm.setValue({ name: this.data.context.name, plugin: this.data.context.plugin }), this.data.context.plugin === "rest" ? setTimeout(() => { this.contextFormComp.componentRef.instance.restSourceFormComp.restSource = { url: this.data.context.rest.url, params: this.data.context.rest.params }; }) : this.data.context.plugin === "datasource" && setTimeout(() => { this.contextFormComp.componentRef.instance.datasourceFormComp.datasource = this.data.context.datasource; }); }); }
    submit() { this.contextForm.get("context").value.name !== "" ? this.dialogRef.close(new ue(this.contextForm.get("context").value)) : this.dialogRef.close(); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject($), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(s.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-context-dialog"]], viewQuery: function (i, n) { if (i & 1 && e.\u0275\u0275viewQuery(ln, 5), i & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.contextFormComp = a.first);
        } }, standalone: !1, decls: 6, vars: 3, consts: [[1, "context-form", 3, "ngSubmit", "formGroup"], ["formControlName", "context", 3, "context"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content"), e.\u0275\u0275element(2, "classifieds-ui-context-form", 1), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(3, "mat-dialog-actions")(4, "button", 2), e.\u0275\u0275text(5, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.contextForm), e.\u0275\u0275advance(2), e.\u0275\u0275property("context", n.context), e.\u0275\u0275advance(2), e.\u0275\u0275property("disabled", !n.contextForm.valid)); }, dependencies: [s.\u0275NgNoValidate, s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, F.MatButton, h.MatDialogClose, h.MatDialogActions, h.MatDialogContent, B.ContextFormComponent], encapsulation: 2 }); }
} return r; })(), ma = (() => { class r {
    constructor(t, i, n) { this.data = t, this.dialogRef = i, this.fb = n, this.propsForm = this.fb.group({ name: this.fb.control(this.data.props.name), label: this.fb.control(this.data.props.label) }); }
    ngOnInit() { }
    submit() { this.dialogRef.close(new hi(this.propsForm.value)); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject($), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(s.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-panel-props-dialog"]], standalone: !1, decls: 11, vars: 2, consts: [[1, "props-form", 3, "ngSubmit", "formGroup"], [1, "content-inner"], ["fxLayout", "column"], ["matInput", "", "formControlName", "name", "placeholder", "Name"], ["matInput", "", "formControlName", "label", "placeholder", "Label"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "div", 1)(3, "div", 2)(4, "mat-form-field"), e.\u0275\u0275element(5, "input", 3), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(6, "mat-form-field"), e.\u0275\u0275element(7, "input", 4), e.\u0275\u0275elementEnd()()()(), e.\u0275\u0275elementStart(8, "mat-dialog-actions")(9, "button", 5), e.\u0275\u0275text(10, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.propsForm), e.\u0275\u0275advance(9), e.\u0275\u0275property("disabled", !n.propsForm.valid)); }, dependencies: [s.\u0275NgNoValidate, s.DefaultValueAccessor, s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, F.MatButton, h.MatDialogClose, h.MatDialogActions, h.MatDialogContent, b.MatInput, b.MatFormField], encapsulation: 2 }); }
} return r; })(), ga = (() => { class r {
    constructor(t, i, n) { this.data = t, this.dialogRef = i, this.fb = n, this.propsForm = this.fb.group({ name: this.fb.control(this.data.props.name), label: this.fb.control(this.data.props.label) }); }
    ngOnInit() { }
    submit() { this.dialogRef.close(new vi(this.propsForm.value)); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject($), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(s.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-pane-props-dialog"]], standalone: !1, decls: 11, vars: 2, consts: [[1, "props-form", 3, "ngSubmit", "formGroup"], [1, "content-inner"], ["fxLayout", "column"], ["matInput", "", "formControlName", "name", "placeholder", "Name"], ["matInput", "", "formControlName", "label", "placeholder", "Label"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "div", 1)(3, "div", 2)(4, "mat-form-field"), e.\u0275\u0275element(5, "input", 3), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(6, "mat-form-field"), e.\u0275\u0275element(7, "input", 4), e.\u0275\u0275elementEnd()()()(), e.\u0275\u0275elementStart(8, "mat-dialog-actions")(9, "button", 5), e.\u0275\u0275text(10, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.propsForm), e.\u0275\u0275advance(9), e.\u0275\u0275property("disabled", !n.propsForm.valid)); }, dependencies: [s.\u0275NgNoValidate, s.DefaultValueAccessor, s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, F.MatButton, h.MatDialogClose, h.MatDialogActions, h.MatDialogContent, b.MatInput, b.MatFormField], encapsulation: 2 }); }
} return r; })(), Xt = (() => { class r {
    constructor(t) { this.viewContainerRef = t; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(e.ViewContainerRef)); }; }
    static { this.\u0275dir = e.\u0275\u0275defineDirective({ type: r, selectors: [["", "classifiedsUiLayoutEditorHost", ""]], standalone: !1 }); }
} return r; })(), Zt = (() => { class r {
    constructor(t) { this.viewContainerRef = t; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(e.ViewContainerRef)); }; }
    static { this.\u0275dir = e.\u0275\u0275defineDirective({ type: r, selectors: [["", "classifiedsUiPaneContentHost", ""]], standalone: !1 }); }
} return r; })(), fa = (() => { class r {
    constructor(t, i, n, a) { this.data = t, this.dialogRef = i, this.fb = n, this.attributeSerializer = a, this.prerenderForm = this.fb.group({ route: this.fb.control(this.data.props.route), datasource: this.fb.control(this.data.props.datasource), _proxy: this.fb.control("") }), this.proxyControlSub = this.prerenderForm.get("_proxy").valueChanges.pipe(g(o => o ? new Ut(x(C({}, o), { settings: this.attributeSerializer.serialize(o.settings, "settings").attributes })) : new Ut), P(o => this.prerenderForm.get("datasource").setValue(o))).subscribe(), this.datasource = this.data.props.datasource; }
    ngOnInit() { }
    submit() { this.dialogRef.close(new Te(C({}, this.prerenderForm.value))); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject($), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(S.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-prerender-dialog"]], standalone: !1, decls: 10, vars: 3, consts: [[1, "prerender-form", 3, "ngSubmit", "formGroup"], [1, "content-inner"], ["matInput", "", "formControlName", "route", "placeholder", "Route"], ["formControlName", "_proxy", 3, "datasource"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "div", 1)(3, "div")(4, "mat-form-field"), e.\u0275\u0275element(5, "input", 2), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(6, "classifieds-ui-datasource-form", 3), e.\u0275\u0275elementEnd()()(), e.\u0275\u0275elementStart(7, "mat-dialog-actions")(8, "button", 4), e.\u0275\u0275text(9, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.prerenderForm), e.\u0275\u0275advance(6), e.\u0275\u0275property("datasource", n.datasource), e.\u0275\u0275advance(2), e.\u0275\u0275property("disabled", !n.prerenderForm.valid)); }, dependencies: [s.\u0275NgNoValidate, s.DefaultValueAccessor, s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, F.MatButton, h.MatDialogClose, h.MatDialogActions, h.MatDialogContent, b.MatInput, b.MatFormField, ct.DatasourceFormComponent], encapsulation: 2 }); }
} return r; })(), ha = (() => { class r {
    constructor(t, i, n, a, o) { this.data = t, this.dialogRef = i, this.fb = n, this.inlineContextResolver = a, this.rulesParser = o, this.selectionForm = this.fb.group({ priority: this.fb.control(this.data.selection.priority || 0), rule: this.fb.control(null) }), this.config = { fields: {} }; }
    ngOnInit() { this.inlineContextResolver.resolveMerged(this.data.contexts).subscribe(t => { let i = {}; for (let a in t)
        this.rulesParser.buildFields(t[a], a).forEach((o, l) => i[l] = o); this.config = x(C({}, this.config), { fields: i }); let n = this.data.selection.rule; n && this.isRuleSetValid(n, i) ? this.selectionForm.get("rule")?.setValue(structuredClone(n)) : n && console.warn("Selection rule contains unknown fields \u2014 skipping load"); }); }
    isRuleSetValid(t, i) { return !t || !t.rules ? !1 : t.rules.every(n => this.isNgRule(n) ? !!i[n.field] : this.isNgRuleSet(n) ? this.isRuleSetValid(n, i) : !1); }
    isNgRule(t) { return t && typeof t.field == "string"; }
    isNgRuleSet(t) { return t && Array.isArray(t.rules); }
    submit() { let t = this.selectionForm.value, i = new Be({ priority: t.priority, rule: t.rule || void 0 }); this.dialogRef.close(i); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject($), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(B.InlineContextResolverService), e.\u0275\u0275directiveInject(Ve.RulesParserService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-selection-dialog"]], standalone: !1, decls: 9, vars: 3, consts: [[1, "selection-form", 3, "ngSubmit", "formGroup"], [1, "content-inner"], ["matInput", "", "type", "number", "formControlName", "priority", "placeholder", "Priority (optional)"], ["formControlName", "rule", 3, "config"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "div", 1)(3, "mat-form-field"), e.\u0275\u0275element(4, "input", 2), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(5, "query-builder", 3), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(6, "mat-dialog-actions")(7, "button", 4), e.\u0275\u0275text(8, " Save "), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.selectionForm), e.\u0275\u0275advance(5), e.\u0275\u0275property("config", n.config), e.\u0275\u0275advance(2), e.\u0275\u0275property("disabled", !n.selectionForm.valid)); }, dependencies: [s.\u0275NgNoValidate, s.DefaultValueAccessor, s.NumberValueAccessor, s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, F.MatButton, h.MatDialogActions, h.MatDialogContent, b.MatInput, b.MatFormField, Ft.QueryBuilderComponent], encapsulation: 2 }); }
} return r; })(), xt = (() => { class r {
    get entityCollectionService() { return this.entityServices.getEntityCollectionService("PanelPageState"); }
    constructor(t, i) { this.entityServices = t, this.attributeSerializer = i; }
    resolve(t, i) { let n = d => d.entities, a = ({ id: d }) => Wt(n, m => m[d] ? m[d] : void 0), o = ({ id: d, path: m }) => Wt(a({ id: d }), w => pt.JSONPath({ path: m, json: w })), l = "$." + i.selectionPath.map((d, m) => `${(m + 1) % 2 === 0 ? "panes" : (m === 0 ? "" : "nestedPage.") + "panels"}[${d}]`).join("."); return this.entityCollectionService.collection$.pipe(ge(o({ id: i.id, path: l })), g(d => d && Array.isArray(d) && d.length !== 0 ? d[0] : this.defaultPaneState(i.value ? i.value : {})), g(d => this.attributeSerializer.deserialize(d.state)), g(d => d ? d.root ? d.root : d : {}), P(d => { console.log(`resolved panestate[id=${i.id}]${l}`), console.log(d); })); }
    defaultPaneState(t) { return new Ne({ state: this.attributeSerializer.serialize(t, "root") }); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(j.EntityServices), e.\u0275\u0275inject(S.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), ei = (() => { class r {
    set panelIndex(t) { this.panelIndex$.next(t); }
    set paneIndex(t) { this.paneIndex$.next(t); }
    set ancestory(t) { this.ancestory$.next(t); }
    constructor(t, i, n) { this.componentFactoryResolver = t, this.panelHandler = i, this.cpm = n, this.settings = [], this.locked = !1, this.contexts = [], this.edit = new R, this.props = new R, this.delete = new R, this.rules = new R, this.rendererOverride = new R, this.removeRendererOverride = new R, this.nestedUpdate = new R, this.heightChange = new R, this.displayOverride = !1, this.hasOverride = !1, this.preview = !1, this.schedulePluginChange = new M, this.pluginChangeSub = this.schedulePluginChange.pipe(y(a => this.cpm.getPlugin(this.pluginName).pipe(y(o => o.handler.hasRendererOverride(this.settings).pipe(g(l => [a, o, l])))))).subscribe(([a, o, l]) => { this.contentPlugin = o, this.displayOverride = o.handler.implementsRendererOverride(), this.hasOverride = !!l, a && this.pluginName === "panel" && this.panelHandler.toObject(this.settings).subscribe(d => { this.panelPage = d; }); }), this.ancestory$ = new M, this.panelIndex$ = new M, this.paneIndex$ = new M, this.paneAncestoryWithSelf = [], this.paneAncestoryWithSelfSub = ce([this.ancestory$, this.panelIndex$, this.paneIndex$]).pipe(g(([a, o, l]) => [...a, o, l])).subscribe(a => { this.paneAncestoryWithSelf = a; }); }
    ngOnInit() { this.schedulePluginChange.next(!0), console.log("here 1"); }
    ngOnChanges(t) { this.schedulePluginChange.next(!1), console.log("here 2"), console.log(t); }
    onEditClick() { this.edit.emit(); }
    onPropsClick() { this.props.emit(); }
    onRulesClick() { this.rules.emit(); }
    onDeleteClick() { this.delete.emit(); }
    onPreviewClick() { this.preview = !0, this.contentPaneHost !== void 0 && this.renderPaneContent(), setTimeout(() => this.heightChange.emit()); }
    onOverrideClick() { this.rendererOverride.emit(); }
    onRemoveOverrideClick() { this.removeRendererOverride.emit(); }
    onNestedUpdate(t) { this.nestedUpdate.emit(t); }
    onDisablePreviewClick() { this.preview = !1, this.contentPaneHost !== void 0 && this.contentPaneHost.viewContainerRef.clear(), setTimeout(() => this.heightChange.emit()); }
    onAfterCollapse() { this.heightChange.emit(); }
    onAfterExpand() { this.heightChange.emit(); }
    renderPaneContent() { let t = this.componentFactoryResolver.resolveComponentFactory(this.contentPlugin.renderComponent), i = this.contentPaneHost.viewContainerRef; i.clear(); let n = i.createComponent(t); n.instance.settings = this.settings; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(e.ComponentFactoryResolver), e.\u0275\u0275directiveInject(_.PanelContentHandler), e.\u0275\u0275directiveInject(ye.ContentPluginManager)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-editable-pane"]], viewQuery: function (i, n) { if (i & 1 && (e.\u0275\u0275viewQuery(Zt, 5), e.\u0275\u0275viewQuery(Bn, 5)), i & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.contentPaneHost = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.contentEditor = a.first);
        } }, inputs: { pluginName: "pluginName", settings: "settings", name: "name", label: "label", panelIndex: "panelIndex", paneIndex: "paneIndex", locked: "locked", rootContext: "rootContext", contexts: "contexts", ancestory: "ancestory" }, outputs: { edit: "edit", props: "props", delete: "delete", rules: "rules", rendererOverride: "rendererOverride", removeRendererOverride: "removeRendererOverride", nestedUpdate: "nestedUpdate", heightChange: "heightChange" }, standalone: !1, features: [e.\u0275\u0275NgOnChangesFeature], decls: 17, vars: 6, consts: [["settingsTmpl", ""], ["nestedPanelTpl", ""], ["paneMenu", "matMenu"], ["contentEditor", ""], ["extraActionsArea", ""], ["class", "editable-pane-wrapper", 4, "ngIf", "ngIfElse"], ["type", "button", "mat-menu-item", "", 3, "click", "disabled"], ["type", "button", "mat-menu-item", "", 3, "click"], ["mat-menu-item", "", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["mat-menu-item", "", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", "mat-menu-item", "", 1, "delete", 3, "click"], [1, "editable-pane-wrapper"], ["fxLayout", "row", 1, "inner-pane-wrapper"], [1, "pane-menu-trigger-wrapper"], ["mat-button", "", "type", "button", 3, "matMenuTriggerFor"], ["fxFlex", "", 3, "afterCollapse", "afterExpand"], [3, "hidden"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "preview-area", 3, "ngClass"], ["class", "override", "type", "button", 3, "click", 4, "ngIf"], ["classifiedsUiPaneContentHost", ""], ["type", "button", 1, "override", 3, "click"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "nested-panel-wrapper"], [3, "nestedUpdate", "delete", "rules", "props", "panelPage", "savable", "nested", "locked", "contexts", "rootContext", "ancestory"], ["mat-menu-item", "", "type", "button", 3, "click", "disabled"], ["mat-menu-item", "", "type", "button", 3, "click"]], template: function (i, n) { if (i & 1) {
            let a = e.\u0275\u0275getCurrentView();
            e.\u0275\u0275template(0, Wn, 18, 13, "div", 5)(1, Zn, 1, 1, "ng-template", null, 0, e.\u0275\u0275templateRefExtractor)(3, tr, 5, 7, "ng-template", null, 1, e.\u0275\u0275templateRefExtractor), e.\u0275\u0275elementStart(5, "mat-menu", null, 2)(7, "button", 6), e.\u0275\u0275listener("click", function () { return e.\u0275\u0275restoreView(a), e.\u0275\u0275resetView(n.onEditClick()); }), e.\u0275\u0275text(8, "Edit"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(9, "button", 6), e.\u0275\u0275listener("click", function () { return e.\u0275\u0275restoreView(a), e.\u0275\u0275resetView(n.onPropsClick()); }), e.\u0275\u0275text(10, "Props"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(11, "button", 7), e.\u0275\u0275listener("click", function () { return e.\u0275\u0275restoreView(a), e.\u0275\u0275resetView(n.onRulesClick()); }), e.\u0275\u0275text(12, "Rules"), e.\u0275\u0275elementEnd(), e.\u0275\u0275template(13, ir, 2, 1, "button", 8)(14, nr, 2, 0, "button", 9), e.\u0275\u0275elementStart(15, "button", 10), e.\u0275\u0275listener("click", function () { return e.\u0275\u0275restoreView(a), e.\u0275\u0275resetView(n.onDeleteClick()); }), e.\u0275\u0275text(16, "Delete"), e.\u0275\u0275elementEnd()();
        } if (i & 2) {
            let a = e.\u0275\u0275reference(4);
            e.\u0275\u0275property("ngIf", n.pluginName != "panel" || n.locked)("ngIfElse", a), e.\u0275\u0275advance(7), e.\u0275\u0275property("disabled", n.locked), e.\u0275\u0275advance(2), e.\u0275\u0275property("disabled", n.locked && n.settings.length !== 0), e.\u0275\u0275advance(4), e.\u0275\u0275property("ngIf", !n.preview), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", n.preview);
        } }, dependencies: () => [v.NgClass, v.NgForOf, v.NgIf, v.NgTemplateOutlet, F.MatButton, Se.MatExpansionPanel, Se.MatExpansionPanelHeader, Se.MatExpansionPanelTitle, xe.MatIcon, U.MatMenu, U.MatMenuItem, U.MatMenuTrigger, Rt, Zt, S.AttributePipe], styles: [".editable-pane-wrapper[_ngcontent-%COMP%]{margin-bottom:.25em;border-radius:4px;padding-left:.25em;box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f}.nested-panel-wrapper[_ngcontent-%COMP%]{margin-bottom:.25em}.inner-pane-wrapper[_ngcontent-%COMP%]{padding:0}.pane-header[_ngcontent-%COMP%]{background-color:#ccc;padding:0}.mat-mdc-menu-trigger[_ngcontent-%COMP%]{min-width:0;padding:0;margin:0}button.delete[_ngcontent-%COMP%]{float:right}.preview-area[_ngcontent-%COMP%]{display:none;position:relative}.preview-area.visible[_ngcontent-%COMP%]{display:block;height:300px;overflow-y:scroll;border:1px solid black;padding:.5em}.panel-name[_ngcontent-%COMP%]{float:right;padding-right:.5em}.pane-menu-trigger-wrapper[_ngcontent-%COMP%]{display:flex}.mat-expansion-panel[_ngcontent-%COMP%]{box-shadow:none}.mat-expansion-panel-header[_ngcontent-%COMP%]{padding:0 1em 0 .25em}"] }); }
} return r; })(), Rt = (() => { class r {
    set ancestory(t) { this.ancestory$.next(t); }
    get ancestory() { return this.ancestory$.value; }
    get panels() { return this.contentForm.get("panels"); }
    get layoutType() { return this.contentForm.get("layoutType"); }
    get displayType() { return this.contentForm.get("displayType"); }
    get columnSettings() { let t = this.panels.length, i = []; for (let n = 0; n < t; n++)
        i = [...i, new A(this.panels.at(n).get("columnSetting").value)]; return i; }
    constructor(t, i, n, a, o, l, d, m, w, I, O, L, ne, D) { this.siteName = t, this.cpm = i, this.spm = n, this.lpm = a, this.cxtm = o, this.fb = l, this.bs = d, this.dialog = m, this.panelHandler = w, this.tokenizerService = I, this.componentFactoryResolver = O, this.pageBuilderFacade = L, this.paneStateContextResolver = ne, this.panelsContextService = D, this.submitted = new R, this.nestedUpdate = new R, this.delete = new R, this.rules = new R, this.props = new R, this.savable = !0, this.nested = !1, this.locked = !1, this.pageBuilder = !1, this.contexts = [], this.contentAdded = new M, this.contentAdddedSub = this.contentAdded.subscribe(([k, Me]) => { this.resolvePaneContexts(k, Me); }), this.dashboard = [], this.pageProperties = new Ee, this.persistence = new vt, this.interactions = new bt, this.prerenderProperties = new Te, this.selection = new Be, this.layoutSetting = new A, this.rowSettings = [], this.ancestory$ = new X([]), this.onTouched = () => { }, this.contentForm = this.fb.group({ name: this.fb.control(""), title: this.fb.control(""), layoutType: this.fb.control("split", f.required), displayType: this.fb.control("page", f.required), panels: this.fb.array([]) }), this.options = { gridType: un.Fit, displayGrid: pn.Always, pushItems: !0, draggable: { enabled: !0 }, resizable: { enabled: !0 }, mobileBreakpoint: 0, itemChangeCallback: (k, Me) => { }, itemInitCallback: (k, Me) => { if (this.nested && k.y !== 0) {
            let Ge = this.gridLayout.grid.findIndex(de => de.x === k.x && de.y === k.y && de.cols === k.cols && de.rows === k.rows);
            this.panelPanes(Ge).length === 0 && this.gridLayout.setItemContentHeight(Ge, 200);
        } } }, this.ancestorySub = this.ancestory$.pipe(N(() => !!this.layoutEditorRef)).subscribe(k => { this.layoutEditorRef.instance.ancestory = k; }); }
    ngOnInit() { this.contentForm.valueChanges.pipe(N(() => this.nested), pe(500)).subscribe(() => { this.nestedUpdate.emit(this.packageFormData()); }), this.contentForm.get("layoutType").valueChanges.pipe(N(t => t === "gridless"), ze(1)).subscribe(t => { this.panels.length === 0 && this.panels.push(this.fb.group({ name: new p(""), label: new p(""), stylePlugin: new p(""), styleTitle: new p(""), settings: new V([]), panes: this.fb.array([]), columnSetting: this.fb.group({ settings: this.fb.array([]) }) })); }), this.contentForm.valueChanges.pipe(N(() => !this.nested), pe(500)).subscribe(() => { let t = this.packageFormData(); this.pageBuilderFacade.setPage(t); }); }
    ngAfterViewInit() { this.layoutType.valueChanges.pipe(N(() => !!this.layoutEditorHost)).subscribe(t => { this.renderEditorLayout(t); }), this.layoutType.value && this.renderEditorLayout(this.layoutType.value); }
    ngAfterContentInit() { setTimeout(() => { this.panelPage || this.contentForm.get("layoutType").setValue("split"); }, 1e3); }
    ngOnChanges(t) { t.panelPage && t.panelPage.previousValue !== t.panelPage.currentValue && (this.panels.clear(), this.panelPageId = t.panelPage.currentValue.panelPageId, this.dashboard = t.panelPage.currentValue.gridItems.map(i => Object.assign({}, i)), this.layoutType.setValue(t.panelPage.currentValue.layoutType), this.layoutSetting = new A(t.panelPage.currentValue.layoutSetting), this.rowSettings = t.panelPage.currentValue.rowSettings ? t.panelPage.currentValue.rowSettings.map(i => new A(i)) : [], this.persistence = t.panelPage.currentValue.persistence ? new vt(t.panelPage.currentValue.persistence) : new vt, this.interactions = t.panelPage.currentValue.interactions ? new bt(t.panelPage.currentValue.interactions) : new bt, this.prerenderProperties = t.panelPage.currentValue.prerender ? new Te(t.panelPage.currentValue.prerender) : new Te, this.selection = t.panelPage.currentValue.selection ? new Be(t.panelPage.currentValue.selection) : new Be, this.nested ? (this.pageProperties = new Ee({ name: t.panelPage.currentValue.name, title: t.panelPage.currentValue.title, path: "", readUserIds: [], cssFile: "" }), this.contentForm.get("name").setValue(t.panelPage.currentValue.name), this.contentForm.get("title").setValue(t.panelPage.currentValue.title)) : (this.pageProperties = new Ee({ name: t.panelPage.currentValue.name, title: t.panelPage.currentValue.title, path: t.panelPage.currentValue.path, readUserIds: t.panelPage.currentValue.entityPermissions.readUserIds, cssFile: t.panelPage.currentValue.cssFile }), this.contexts = t.panelPage.currentValue.contexts), t.panelPage.currentValue.panels.forEach((i, n) => { this.panels.push(this.fb.group({ name: new p(i.name), label: new p(i.label), stylePlugin: new p(i.stylePlugin), styleTitle: new p(""), settings: this.fb.array(i.settings !== void 0 ? i.settings.map(a => this.convertToGroup(a)) : []), panes: this.fb.array([]), columnSetting: this.fb.group({ settings: this.fb.array(i.columnSetting ? i.columnSetting.settings.map(a => this.convertToGroup(a)) : []) }) })), i.stylePlugin && i.stylePlugin !== "" && this.spm.getPlugin(i.stylePlugin).subscribe(a => { this.panels.at(n).get("styleTitle").setValue(a.title); }), this.nested && this.panelPanes(this.panels.length - 1).valueChanges.pipe(pe(5), ze(1)).subscribe((a => () => { if (this.gridLayout !== void 0) {
        let o = this.paneContainers.find((l, d) => d === a);
        this.gridLayout.setItemContentHeight(a, o.nativeElement.offsetHeight);
    } })(this.panels.length - 1)), i.panes.forEach((a, o) => { this.panels.at(n).get("panes").push(this.fb.group({ contentPlugin: a.contentPlugin, name: new p(a.name), label: new p(a.label), locked: new p(a.locked), linkedPageId: new p(a.linkedPageId), rule: new p(a.rule && a.rule !== null ? x(C({}, a.rule), { rules: a.rule.rules && Array.isArray(a.rule.rules) ? a.rule.rules : [] }) : { condition: "", rules: [] }), settings: new V(a.settings.map(l => this.convertToGroup(l))) })), setTimeout(() => this.resolvePaneContexts(n, o)); }); }), this.layoutEditorRef && (this.layoutEditorRef.instance.layoutSetting = this.layoutSetting, this.layoutEditorRef.instance.rowSettings = this.rowSettings, this.layoutEditorRef.instance.columnSettings = this.columnSettings)); }
    addContent(t) { console.log(this.panels.at(t)), this.pageBuilderFacade.getPage$.pipe(y(i => this.panelsContextService.allActivePageContexts({ panelPage: i })), J(1)).subscribe(i => { this.bs.open(la, { data: { panelForm: this.panels.at(t), panelIndex: t, contexts: [...this.rootContext ? [this.rootContext] : [], ...this.contexts, ...i] } }); }); }
    editPanelProps(t) { let i = this.panels.at(t).get("name"), n = this.panels.at(t).get("label"); this.dialog.open(ma, { data: { props: new hi({ name: i.value, label: n.value }) } }).afterClosed().subscribe(a => { a && (i.setValue(a.name), n.setValue(a.label)); }); }
    editPaneProps(t, i) { let n = this.panelPane(t, i).get("name"), a = this.panelPane(t, i).get("label"); this.dialog.open(ga, { data: { props: new vi({ name: n.value, label: a.value }) } }).afterClosed().subscribe(o => { o && (n.setValue(o.name), a.setValue(o.label)); }); }
    applyStyle(t) { this.bs.open(da, { data: { panelForm: this.panels.controls[t], panelIndex: t, contexts: this.contexts } }); }
    removeStyle(t) { this.panels.controls[t].get("stylePlugin").setValue(""), this.panels.controls[t].get("styleTitle").setValue(""); }
    onItemAdded() { console.log("item added"), this.panels.push(this.fb.group({ name: new p(""), label: new p(""), stylePlugin: new p(""), styleTitle: new p(""), settings: new V([]), panes: this.fb.array([]), columnSetting: this.fb.group({ settings: this.fb.array([]) }) })), this.nested && this.gridLayout !== void 0 && setTimeout(() => { this.paneContainers.forEach((t, i) => { this.gridLayout.setItemContentHeight(i, t.nativeElement.offsetHeight); }); }), this.panelPanes(this.panels.length - 1).valueChanges.pipe(N(() => this.nested && this.gridLayout !== void 0), pe(5), ze(1)).subscribe((t => () => { let i = this.paneContainers.find((n, a) => a === t); this.gridLayout.setItemContentHeight(t, i.nativeElement.offsetHeight); })(this.panels.length - 1)), this.layoutEditorRef && (this.layoutEditorRef.instance.columnSettings = this.columnSettings); }
    onItemRemoved(t) { this.panels.removeAt(t), this.nested && this.gridLayout !== void 0 && setTimeout(() => { this.paneContainers.forEach((i, n) => { this.gridLayout.setItemContentHeight(n, i.nativeElement.offsetHeight); }); }), this.layoutEditorRef && (this.layoutEditorRef.instance.columnSettings = this.columnSettings); }
    onDrop(t) { console.log(t); let i = +t.container.data, n = +t.previousContainer.data; if (i === n) {
        let a = t.currentIndex > t.previousIndex ? 1 : -1, o = t.previousIndex, l = t.currentIndex, d = this.panelPanes(i).at(o);
        for (let m = o; m * a < l * a; m = m + a) {
            let w = this.panelPanes(i).at(m + a);
            this.panelPanes(i).setControl(m, w);
        }
        this.panelPanes(i).setControl(l, d);
    }
    else {
        let a = this.panelPanes(n).at(t.previousIndex);
        this.panelPanes(n).removeAt(t.previousIndex), this.panelPanes(i).insert(t.currentIndex, a);
    } }
    onOverrideRenderer(t, i) { let n = new T(this.panelPane(t, i).value); this.dialog.open(ca, { data: { panelFormGroup: this.panels.at(t), paneIndex: i, pane: n } }); }
    onRemoveOverrideRenderer(t, i) { let n = this.panelPane(t, i).get("settings"), a; n.controls.forEach((o, l) => { o.get("name").value === "_renderer" && (a = l); }), a !== void 0 && n.removeAt(a); }
    onNestedUpdate(t, i, n) { let a = this.panelHandler.buildSettings(t), o = this.panelPane(i, n).get("settings"); o.clear(), a.forEach(l => o.push(this.convertToGroup(l))); }
    onPaneHeightChange(t) { if (this.nested && this.gridLayout) {
        let i = this.paneContainers.find((n, a) => a === t);
        this.gridLayout.setItemContentHeight(t, i.nativeElement.offsetHeight);
    } }
    onDeleteClick() { this.delete.emit(); }
    onRulesClick() { this.rules.emit(); }
    onPropertiesClick() { this.props.emit(), this.dialog.open(ua, { data: { props: this.pageProperties } }).afterClosed().subscribe(t => { t && (this.pageProperties = new Ee(C({}, t)), this.contentForm.get("name").setValue(t.name), this.contentForm.get("title").setValue(t.title)); }); }
    onPrerenderClick() { this.dialog.open(fa, { data: { props: this.prerenderProperties } }).afterClosed().subscribe(t => { t && (this.prerenderProperties = new Te(C({}, t))); }); }
    onSelectionClick() { this.dialog.open(ha, { data: { selection: this.selection, contexts: this.contexts }, maxWidth: "100vw", maxHeight: "100vh", height: "100%", width: "100%" }).afterClosed().subscribe(t => { console.log("selection closed", t), this.selection = t || this.selection; }); }
    onRulesPane(t, i) { let n = new T(this.panelPane(t, i).value), a = this.panelPane(t, i).get("rule").value !== "" ? this.panelPane(t, i).get("rule").value : void 0, [o] = this.editablePanes.filter((l, d) => l.name === n.name); this.pageBuilderFacade.getPage$.pipe(P(() => { this.pageBuilderFacade.setSelectionPath([...this.ancestory, t, i]); }), y(l => this.panelsContextService.allActivePageContexts({ panelPage: l })), y(l => this.dialog.open(pa, { data: { rule: a, contexts: [...o.rootContext ? [o.rootContext] : this.rootContext ? [this.rootContext] : [], ...this.contexts, ...l] } }).afterClosed()), J(1)).subscribe(l => { this.panelPane(t, i).get("rule").setValue(l || a || void 0); }); }
    onDeletePane(t, i) { console.log(`delete nested pane: ${t} | ${i}`); }
    onAddContextClick() { let t = this.packageFormData(); this.pageBuilderFacade.setPage(t), this.dialog.open(Yt, { data: {} }).afterClosed().subscribe(i => { i && (this.contexts = [...this.contexts, i]); }); }
    onEditContext(t) { let i = this.contexts.find(n => n.name === t); if (console.log(i), i) {
        let n = this.packageFormData();
        this.pageBuilderFacade.setPage(n), this.dialog.open(Yt, { data: { context: i } }).afterClosed().subscribe(a => { a && (this.contexts = this.contexts.map(o => o.name === t ? new ue(a) : o)); });
    } }
    onLayoutSettingChange(t) { this.layoutSetting = new A(t), this.nested && this.nestedUpdate.emit(this.packageFormData()), this.layoutEditorRef && (this.layoutEditorRef.instance.layoutSetting = this.layoutSetting); }
    onRowSettingsChange(t) { this.rowSettings = t.map(i => new A(i)), this.nested && this.nestedUpdate.emit(this.packageFormData()), this.layoutEditorRef && (this.layoutEditorRef.instance.rowSettings = this.rowSettings); }
    onColumnSettingsChange(t) { let i = this.panels.length; for (let n = 0; n < i; n++) {
        this.panels.at(n).get("columnSetting").get("settings").clear();
        for (let a = 0; a < t[n].settings.length; a++)
            this.panels.at(n).get("columnSetting").get("settings").push(this.convertToGroup(t[n].settings[a]));
    } this.nested && this.nestedUpdate.emit(this.packageFormData()), this.layoutEditorRef && (this.layoutEditorRef.instance.columnSettings = this.columnSettings); }
    submit() { this.submitted.emit(this.packageFormData()); }
    packageFormData() { let t = this.layoutEditorRef.instance.gridItems, i = new _e({ id: this.panelPageId, title: this.pageProperties.title, name: this.pageProperties.name, site: this.siteName, path: this.pageProperties.path, cssFile: this.pageProperties.cssFile, displayType: this.displayType.value, layoutType: this.layoutType.value, gridItems: t, contexts: this.contexts, panels: this.panels.value, layoutSetting: new A(this.layoutSetting), rowSettings: this.rowSettings.map(n => new A(n)), persistence: this.persistence, interactions: this.interactions, prerender: this.prerenderProperties, selection: this.selection, entityPermissions: { readUserIds: this.pageProperties.readUserIds, writeUserIds: [], deleteUserIds: [] } }); return console.log(i), i; }
    syncNestedPanelPages() { console.log("sync nested"), this.editablePanes.forEach(t => { if (t.contentEditor !== void 0) {
        let i = this.panelHandler.buildSettings(t.contentEditor.packageFormData()), n = this.panelPane(t.panelIndex, t.paneIndex).get("settings");
        n.clear(), i.forEach(a => n.push(this.convertToGroup(a)));
    } }); }
    resolvePaneContexts(t, i) { let n = new T(this.panelPane(t, i).value), a = this.panelPanes(t).controls; this.cpm.getPlugin(n.contentPlugin).pipe(N(o => o.handler !== void 0 && o.handler.isDynamic(n.settings)), y(o => o.handler.fetchDynamicData(n.settings, new Map([["tag", Y()], ["contexts", [...this.contexts]]])).pipe(g(l => new ue({ name: "_root", adaptor: "data", data: l.length !== 0 ? l.results[0] : {} })), y(l => o.handler.getBindings(n.settings, "pane").pipe(g(d => [l, d.map(m => a.findIndex(w => new T(w.value).name === m.id))])))))).subscribe(([o, l]) => { this.editablePanes.forEach((d, m) => { l.findIndex(w => w === m) > -1 && (d.rootContext = o); }); }); }
    onPersistenceClick() { this.dialog.open(xn, { data: { persistence: this.persistence, contexts: this.contexts } }).afterClosed().subscribe(t => { console.log("persistence closed", t), this.persistence = t || this.persistence; }); }
    onInteractionsClick() { this.dialog.open(wn, { data: { interactions: this.interactions, contexts: this.contexts }, maxWidth: "100vw", maxHeight: "100vh", height: "100%", width: "100%" }).afterClosed().subscribe(t => { console.log("interactions closed", t), this.interactions = t || this.interactions; }); }
    panelPanes(t) { return this.panels.at(t).get("panes"); }
    panelPane(t, i) { return this.panelPanes(t).at(i); }
    panelPanePlugin(t, i) { return this.panelPane(t, i).get("contentPlugin").value; }
    panelPaneSettings(t, i) { return this.panelPane(t, i).get("settings").value; }
    panelPaneName(t, i) { return this.panelPane(t, i).get("name").value; }
    panelPaneLabel(t, i) { return this.panelPane(t, i).get("label").value; }
    panelPaneLocked(t, i) { if (this.locked)
        return this.locked; let n = this.panelPane(t, i).get("locked"); return n !== null ? n.value : !1; }
    panelPaneIsNested(t, i) { return this.panelPanePlugin(t, i) === "panel"; }
    panelPanePanelPage(t, i) { let n; return this.panelHandler.toObject(this.panelPaneSettings(t, i)).subscribe(a => { n = a; }), n; }
    hasPanelStyle(t) { return this.panels.at(t).get("stylePlugin").value !== void 0 && this.panels.at(t).get("stylePlugin").value !== ""; }
    panelStyleTitle(t) { return this.panels.at(t).get("styleTitle").value; }
    onPaneEdit(t, i) { let n = new T(this.panelPane(t, i).value), a = this.panelPanePlugin(t, i), [o] = this.editablePanes.filter((l, d) => l.name === n.name); this.cpm.getPlugin(a).pipe(N(l => l.editorComponent !== void 0), y(l => this.pageBuilderFacade.getPage$.pipe(y(d => this.panelsContextService.allActivePageContexts({ panelPage: d }).pipe(g(m => [l, m]), J(1))), J(1))), y(([l, d]) => l.handler ? l.handler.editorOptions(n.settings).pipe(g(m => [l, d, m])) : u([l, d, new q]))).subscribe(([l, d, m]) => { this.dialog.open(l.editorComponent, C({ data: { panelFormGroup: this.panels.at(t), panelIndex: t, paneIndex: i, contexts: [...o.rootContext ? [o.rootContext] : this.rootContext ? [this.rootContext] : [], ...this.contexts, ...d], contentAdded: this.contentAdded, pane: n } }, m.fullscreen ? { maxWidth: "100vw", maxHeight: "100vh", height: "100%", width: "100%" } : {})).afterClosed().subscribe(() => { this.resolvePaneContexts(t, i); }); }); }
    onPaneDelete(t, i) { this.panelPanes(t).removeAt(i); }
    onFileChange(t, i) { let n = t.addedFiles[0]; this.cpm.getPlugins().pipe(g(a => Array.from(a.values()).filter(o => o.handler !== void 0).find(o => o.handler.handlesType(n.type))), N(a => a !== void 0)).subscribe(a => { a.handler.handleFile(n).subscribe(o => { this.panelPanes(i).push(this.fb.group({ contentPlugin: a.id, name: new p(""), label: new p(""), settings: this.fb.array(o.map(l => this.fb.group({ name: new p(l.name, f.required), type: new p(l.type, f.required), displayName: new p(l.displayName, f.required), value: new p(l.value, f.required), computedValue: new p(l.value, f.required) }))) })); }); }); }
    writeValue(t) { t && this.contentForm.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.contentForm.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.contentForm.disable() : this.contentForm.enable(); }
    validate(t) { return this.contentForm.valid ? null : { invalidForm: { valid: !1, message: "content is invalid" } }; }
    convertToGroup(t) { let i = this.fb.group({ name: new p(t.name, f.required), type: new p(t.type, f.required), displayName: new p(t.displayName, f.required), value: new p(t.value, f.required), computedValue: new p(t.value, f.required), attributes: new V([]) }); return t.attributes && t.attributes.length > 0 && t.attributes.forEach(n => { i.get("attributes").push(this.convertToGroup(n)); }), i; }
    renderEditorLayout(t) { console.log(`render editor layout ${t}`), this.lpm.getPlugin(t).subscribe(i => { let n = this.componentFactoryResolver.resolveComponentFactory(i.editor), a = this.layoutEditorHost.viewContainerRef; a.clear(), this.layoutEditorRef = a.createComponent(n), this.layoutEditorRef.instance.savable = this.savable, this.layoutEditorRef.instance.nested = this.nested, this.layoutEditorRef.instance.ancestory = this.ancestory, this.layoutEditorRef.instance.editor = this, this.layoutEditorRef.instance.extraActionsAreaTmpl = this.extraActionsAreaTmpl, this.layoutEditorRef.instance.contextsMenuTpl = this.contextsMenuTpl, this.layoutEditorRef.instance.editablePaneTpl = this.editablePaneTpl, this.layoutEditorRef.instance.dashboard = this.dashboard, this.layoutEditorRef.instance.layoutSetting = this.layoutSetting, this.layoutEditorRef.instance.rowSettings = this.rowSettings, this.layoutEditorRef.instance.columnSettings = this.columnSettings; }); }
    updateEditorLayoutVars() { this.layoutEditorRef.instance.savable = this.savable, this.layoutEditorRef.instance.nested = this.nested, this.layoutEditorRef.instance.ancestory = this.ancestory, this.layoutEditorRef.instance.editor = this, this.layoutEditorRef.instance.extraActionsAreaTmpl = this.extraActionsAreaTmpl, this.layoutEditorRef.instance.contextsMenuTpl = this.contextsMenuTpl, this.layoutEditorRef.instance.editablePaneTpl = this.editablePaneTpl, this.layoutEditorRef.instance.dashboard = this.dashboard, this.layoutEditorRef.instance.layoutSetting = this.layoutSetting, this.layoutEditorRef.instance.rowSettings = this.rowSettings, this.layoutEditorRef.instance.columnSettings = this.columnSettings; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(rt), e.\u0275\u0275directiveInject(ye.ContentPluginManager), e.\u0275\u0275directiveInject(_.StylePluginManager), e.\u0275\u0275directiveInject(di.LayoutPluginManager), e.\u0275\u0275directiveInject(B.ContextPluginManager), e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(Ce.MatBottomSheet), e.\u0275\u0275directiveInject(h.MatDialog), e.\u0275\u0275directiveInject(_.PanelContentHandler), e.\u0275\u0275directiveInject(z.TokenizerService), e.\u0275\u0275directiveInject(e.ComponentFactoryResolver), e.\u0275\u0275directiveInject(_.PageBuilderFacade), e.\u0275\u0275directiveInject(xt), e.\u0275\u0275directiveInject(_.PanelsContextService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-content-editor"]], contentQueries: function (i, n, a) { if (i & 1 && e.\u0275\u0275contentQuery(a, rr, 5), i & 2) {
            let o;
            e.\u0275\u0275queryRefresh(o = e.\u0275\u0275loadQuery()) && (n.extraActionsAreaTmpl = o.first);
        } }, viewQuery: function (i, n) { if (i & 1 && (e.\u0275\u0275viewQuery(nn, 5), e.\u0275\u0275viewQuery(rn, 5), e.\u0275\u0275viewQuery(Xt, 5), e.\u0275\u0275viewQuery(ar, 7), e.\u0275\u0275viewQuery(or, 7), e.\u0275\u0275viewQuery(sr, 5), e.\u0275\u0275viewQuery(ei, 5)), i & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.gridLayout = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.splitLayout = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.layoutEditorHost = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.contextsMenuTpl = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.editablePaneTpl = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.paneContainers = a), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.editablePanes = a);
        } }, inputs: { panelPage: "panelPage", savable: "savable", nested: "nested", locked: "locked", pageBuilder: "pageBuilder", contexts: "contexts", rootContext: "rootContext", ancestory: "ancestory" }, outputs: { submitted: "submitted", nestedUpdate: "nestedUpdate", delete: "delete", rules: "rules", props: "props" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: tt, useExisting: Z(() => r), multi: !0 }, { provide: it, useExisting: Z(() => r), multi: !0 }]), e.\u0275\u0275NgOnChangesFeature], decls: 12, vars: 3, consts: [["nestedTpl", ""], ["editablePaneTpl", ""], ["contextsMenuTpl", ""], ["contextMenu", "matMenu"], ["class", "content-editor-wrapper", 3, "formGroup", "ngClass", "ngSubmit", 4, "ngIf", "ngIfElse"], ["type", "button", "mat-menu-item", "", 3, "click"], ["type", "button", "mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "content-editor-wrapper", 3, "ngSubmit", "formGroup", "ngClass"], ["classifiedsUiLayoutEditorHost", ""], [1, "content-editor-wrapper", 3, "formGroup", "ngClass"], [1, "editable-pane", 3, "delete", "rules", "nestedUpdate", "rendererOverride", "removeRendererOverride", "edit", "props", "panelIndex", "paneIndex", "name", "label", "locked", "contexts", "pluginName", "settings", "ancestory"], ["class", "custom-placeholder", 4, "cdkDragPlaceholder"], [1, "custom-placeholder"], ["type", "button", "mat-menu-item", "", 1, "context-button", 3, "matMenuTriggerFor"]], template: function (i, n) { if (i & 1) {
            let a = e.\u0275\u0275getCurrentView();
            e.\u0275\u0275template(0, cr, 3, 4, "form", 4)(1, pr, 3, 4, "ng-template", null, 0, e.\u0275\u0275templateRefExtractor)(3, mr, 2, 9, "ng-template", null, 1, e.\u0275\u0275templateRefExtractor)(5, gr, 2, 1, "ng-template", null, 2, e.\u0275\u0275templateRefExtractor), e.\u0275\u0275elementStart(7, "mat-menu", null, 3)(9, "button", 5), e.\u0275\u0275listener("click", function () { return e.\u0275\u0275restoreView(a), e.\u0275\u0275resetView(n.onAddContextClick()); }), e.\u0275\u0275text(10, "define variable"), e.\u0275\u0275elementEnd(), e.\u0275\u0275template(11, fr, 2, 1, "button", 6), e.\u0275\u0275elementEnd();
        } if (i & 2) {
            let a = e.\u0275\u0275reference(2);
            e.\u0275\u0275property("ngIf", !n.nested && !n.pageBuilder)("ngIfElse", a), e.\u0275\u0275advance(11), e.\u0275\u0275property("ngForOf", n.contexts);
        } }, dependencies: [v.NgClass, v.NgForOf, v.NgIf, s.\u0275NgNoValidate, s.NgControlStatusGroup, s.FormGroupDirective, Ci.CdkDragPlaceholder, U.MatMenu, U.MatMenuItem, U.MatMenuTrigger, Xt, ei], styles: [".content-editor-wrapper[_ngcontent-%COMP%]{height:100%}.panel-inner[_ngcontent-%COMP%]{padding:1em}.content-editor-wrapper[_ngcontent-%COMP%]     ngx-dropzone{height:100%;display:block;padding:0;border:none}.content-editor-wrapper.nested[_ngcontent-%COMP%]     .grid-item-header{border-bottom:1px solid white}.layout-type[_ngcontent-%COMP%], .display-type[_ngcontent-%COMP%]{float:right}.layout-type[_ngcontent-%COMP%]     .mat-form-field-wrapper, .display-type[_ngcontent-%COMP%]     .mat-form-field-wrapper{padding-bottom:1.5em}.layout-type[_ngcontent-%COMP%]     .mat-form-field-label-wrapper, .display-type[_ngcontent-%COMP%]     .mat-form-field-label-wrapper{display:none}.layout-type[_ngcontent-%COMP%]     .mat-form-field-infix, .display-type[_ngcontent-%COMP%]     .mat-form-field-infix{border-top:none;padding:0;margin:0}.layout-type[_ngcontent-%COMP%]     .mat-mdc-form-field, .display-type[_ngcontent-%COMP%]     .mat-mdc-form-field{width:85px}.layout-type[_ngcontent-%COMP%]     .mat-select-value, .display-type[_ngcontent-%COMP%]     .mat-select-value{text-align:right}.layout-type[_ngcontent-%COMP%]     .mat-form-field-underline, .display-type[_ngcontent-%COMP%]     .mat-form-field-underline{display:none}classifieds-ui-gridless-layout[_ngcontent-%COMP%]     .main-controls{background-color:#ccc}classifieds-ui-gridless-layout[_ngcontent-%COMP%]     .layout-inner{background-color:#ccc;padding:.75em}classifieds-ui-gridless-layout[_ngcontent-%COMP%]     .editable-pane-wrapper{border:none;margin-bottom:0}classifieds-ui-gridless-layout[_ngcontent-%COMP%]     .pane-header{background-color:#fff}classifieds-ui-gridless-layout[_ngcontent-%COMP%]     .nested-panel-wrapper{padding:.75em;margin-bottom:0}.custom-placeholder[_ngcontent-%COMP%]{background:#ccc;border:dotted 3px #999;transition:transform .25s cubic-bezier(0,0,.2,1)}.context-button[_ngcontent-%COMP%]{font-style:italic;font-family:serif;font-weight:bolder;font-size:medium}"] }); }
} return r; })(), va = (() => { class r {
    constructor(t, i, n) { this.data = t, this.fb = i, this.handler = n; }
    ngOnInit() { this.data.pane !== void 0 && this.handler.toObject(this.data.pane.settings).subscribe(t => { this.snippet = t; }); }
    onSubmit(t) { if (this.data.paneIndex === void 0)
        this.data.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "snippet", name: new p(""), label: new p(""), rule: new p(""), settings: new V(this.buildSettings(t)) }));
    else {
        let i = this.data.panelFormGroup.get("panes").at(this.data.paneIndex);
        i.get("settings").clear(), this.buildSettings(t).forEach(n => { i.get("settings").push(n); });
    } }
    buildSettings(t) { return [this.fb.group({ name: new p("contentType", f.required), type: new p(ae.Text, f.required), displayName: new p("Content Type", f.required), value: new p(t.contentType, f.required), computedValue: new p(t.contentType, f.required) }), this.fb.group({ name: new p("content", f.required), type: new p(ae.Text, f.required), displayName: new p("Content", f.required), value: new p(t.content, f.required), computedValue: new p(t.content, f.required) }), this.fb.group({ name: new p("jsScript", f.required), type: new p(ae.Text, f.required), displayName: new p("jsScript", f.required), value: new p(t.jsScript), computedValue: new p(t.jsScript) })]; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject($), e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(oe)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-snippet-editor2"]], standalone: !1, decls: 1, vars: 1, consts: [[3, "submitted", "snippet"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "classifieds-ui-snippet-form", 0), e.\u0275\u0275listener("submitted", function (o) { return n.onSubmit(o); }), e.\u0275\u0275elementEnd()), i & 2 && e.\u0275\u0275property("snippet", n.snippet); }, dependencies: [at.SnippetFormComponent], encapsulation: 2 }); }
} return r; })(), ba = (() => { class r {
    constructor(t) { this.panelPageService = t.getEntityCollectionService("PanelPage"), this.panelPageListItemService = t.getEntityCollectionService("PanelPageListItem"); }
    ngOnInit() { console.log("here"); }
    onSubmit(t) { console.log("create panel page", t), t.id = Y(), this.panelPageService.add(t).subscribe(() => { console.log("panel page created"); }); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(j.EntityServices)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-create-panel-page"]], standalone: !1, decls: 1, vars: 0, consts: [[3, "submitted"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "classifieds-ui-content-editor", 0), e.\u0275\u0275listener("submitted", function (o) { return n.onSubmit(o); }), e.\u0275\u0275elementEnd()); }, dependencies: [Rt], encapsulation: 2 }); }
} return r; })(), Ii = (() => { class r {
    constructor(t, i, n, a, o) { this.route = t, this.pageBuilderFacade = i, this.routerStore = n, this.moduleLoader = a, this.panelPageService = o.getEntityCollectionService("PanelPage"), this.panelPageListItemService = o.getEntityCollectionService("PanelPageListItem"); }
    ngOnInit() { this.route.paramMap.pipe(g(t => t.get("panelPageId")), N(t => t !== void 0), $t(), y(t => this.panelPageService.getByKey(t)), y(t => t ? lt(t.contexts.filter(i => i.plugin === "module").map(i => this.moduleLoader.loadModule(() => Bt({ remoteEntry: i.data.remoteEntry, remoteName: "plugin", exposedModule: i.data.exposedModule }).then(n => n[i.data.moduleName])))).pipe(ze(1), g(() => t), Et(t)) : u(t)), y(t => this.routerStore.pipe(ge(Pn(i => i.router).selectCurrentRoute), g(i => [t, i.params]), J(1))), P(([t, i]) => this.pageBuilderFacade.setPageInfo(new bi({ id: t.id, realPath: `/pages/panelpage/${t.id}`, path: t.path, args: i })))).subscribe(([t]) => { console.log(t), this.panelPage = t; }); }
    onSubmit(t) { console.log("submitted"), this.panelPageService.update(new _e(x(C({}, t), { id: this.panelPage.id }))).subscribe(() => { alert("panel page updated"); }); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(te.ActivatedRoute), e.\u0275\u0275directiveInject(_.PageBuilderFacade), e.\u0275\u0275directiveInject(he.Store), e.\u0275\u0275directiveInject(be.ModuleLoaderService), e.\u0275\u0275directiveInject(j.EntityServices)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-edit-panel-page"]], standalone: !1, decls: 1, vars: 1, consts: [[3, "submitted", "panelPage"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "classifieds-ui-content-editor", 0), e.\u0275\u0275listener("submitted", function (o) { return n.onSubmit(o); }), e.\u0275\u0275elementEnd()), i & 2 && e.\u0275\u0275property("panelPage", n.panelPage); }, dependencies: [Rt], encapsulation: 2 }); }
} return r; })(), ya = (() => { class r {
    constructor(t, i, n, a, o, l) { this.bottomSheetRef = t, this.handler = i, this.fb = n, this.dialog = a, this.cpm = o, this.wpm = l; }
    ngOnInit() { this.attributeWidgets = this.wpm.getPlugins(); }
    onItemSelect(t) { console.log(t), this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "attribute", name: new p(""), label: new p(""), rule: new p(""), settings: this.fb.array(this.handler.widgetSettings(t).map(o => this.fb.group({ name: new p(o.name, f.required), type: new p(o.type, f.required), displayName: new p(o.displayName, f.required), value: new p(o.value, f.required), computedValue: new p(o.computedValue, f.required) }))) })); let i = this.panelFormGroup.get("panes"), n = i.length - 1, a = new T(i.at(n).value); this.cpm.getPlugin("attribute").subscribe(o => { this.dialog.open(o.editorComponent, { data: { panelFormGroup: this.panelFormGroup, pane: a, paneIndex: n } }); }), this.bottomSheetRef.dismiss(); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(Ce.MatBottomSheetRef), e.\u0275\u0275directiveInject(se), e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(h.MatDialog), e.\u0275\u0275directiveInject(ye.ContentPluginManager), e.\u0275\u0275directiveInject(S.WidgetPluginManager)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-attribute-selector"]], inputs: { panelFormGroup: "panelFormGroup" }, standalone: !1, decls: 4, vars: 5, consts: [["mat-list-item", "", "mat-list-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-list-item", "", "mat-list-item", "", 3, "click"], ["mat-line", ""]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "mat-nav-list"), e.\u0275\u0275template(1, hr, 3, 1, "a", 0), e.\u0275\u0275pipe(2, "async"), e.\u0275\u0275pipe(3, "keyvalue"), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275advance(), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(3, 3, e.\u0275\u0275pipeBind1(2, 1, n.attributeWidgets)))); }, dependencies: [v.NgForOf, st.MatLine, ie.MatNavList, ie.MatListItem, v.AsyncPipe, v.KeyValuePipe], encapsulation: 2 }); }
} return r; })(), Ca = (() => { class r {
    get name() { return this.attributesFormGroup.get("name"); }
    get label() { return this.attributesFormGroup.get("label"); }
    constructor(t, i, n, a, o) { this.data = t, this.dialogRef = n, this.fb = a, this.handler = o, this.attributes = [], this.attributeValues = [], this.attributesFormGroup = this.fb.group({ name: new p(""), label: new p(""), attributes: new p("") }); let l = this.data.pane.settings.find(d => d.name === "widget"); this.widget = i.find(d => d.name === l.value); }
    ngOnInit() { let t = this.data.pane.settings.find(a => a.name === "value"); this.attributes = [new li(x(C({}, this.widget.schema), { widget: this.widget.name, label: "Value", name: "value" }))]; let i = this.data.panelFormGroup.get("panes").at(this.data.paneIndex).get("name").value, n = this.data.panelFormGroup.get("panes").at(this.data.paneIndex).get("label").value; this.attributesFormGroup.get("name").setValue(i), this.attributesFormGroup.get("label").setValue(n), t !== void 0 ? (this.attributeValues = this.handler.valueSettings(this.data.pane.settings), console.log(this.attributeValues)) : this.attributeValues = [new le({ name: "value", type: this.widget.schema.type, displayName: "Value", value: "", computedValue: "", intValue: 0, attributes: [] })]; }
    submit() { let t = this.name.value, i = this.label.value; this.data.panelFormGroup.get("panes").at(this.data.paneIndex).get("name").setValue(t), this.data.panelFormGroup.get("panes").at(this.data.paneIndex).get("label").setValue(i); let n = new T({ name: t, label: i, contentPlugin: "attribute", settings: this.attributesFormGroup.get("attributes").value === "" ? [] : this.attributesFormGroup.get("attributes").value }); n.settings.length !== 0 ? this.handler.rendererSnippet(this.data.pane.settings).subscribe(a => { let o = a !== void 0 ? this.handler.rendererOverrideSettings(a) : [], l = this.data.panelFormGroup.get("panes").at(this.data.paneIndex).get("settings"); l.clear(), [...this.handler.widgetSettings(this.widget), ...n.settings, ...o].forEach(d => l.push(this.convertToGroup(d))), this.dialogRef.close(); }) : this.dialogRef.close(); }
    convertToGroup(t) { let i = this.fb.group({ name: new p(t.name, f.required), type: new p(t.type, f.required), displayName: new p(t.displayName, f.required), value: new p(t.value, f.required), computedValue: new p(t.value, f.required), attributes: new V([]) }); return t.attributes && t.attributes.length > 0 && t.attributes.forEach(n => { i.get("attributes").push(this.convertToGroup(n)); }), i; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject($), e.\u0275\u0275directiveInject(ci), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(se)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-attribute-editor"]], standalone: !1, decls: 10, vars: 3, consts: [[3, "ngSubmit", "formGroup"], ["fxLayout", "column"], ["matInput", "", "placeholder", "Name", "formControlName", "name"], ["matInput", "", "placeholder", "Label", "formControlName", "label"], ["formControlName", "attributes", 3, "attributes", "attributeValues"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", ""]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content", 1)(2, "mat-form-field"), e.\u0275\u0275element(3, "input", 2), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(4, "mat-form-field"), e.\u0275\u0275element(5, "input", 3), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(6, "classifieds-ui-attributes-builder", 4), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(7, "mat-dialog-actions")(8, "button", 5), e.\u0275\u0275text(9, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.attributesFormGroup), e.\u0275\u0275advance(6), e.\u0275\u0275property("attributes", n.attributes)("attributeValues", n.attributeValues)); }, dependencies: [s.\u0275NgNoValidate, s.DefaultValueAccessor, s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, F.MatButton, h.MatDialogClose, h.MatDialogActions, h.MatDialogContent, b.MatInput, b.MatFormField, S.AttributesBuilderComponent], encapsulation: 2 }); }
} return r; })(), _a = (() => { class r {
    constructor(t, i, n, a, o) { this.widgets = t, this.handler = i, this.tokenizerService = n, this.fb = a, this.controlContainer = o, this.settings = [], this.appearance = "legacy", this.attributes = []; }
    ngOnInit() { this.attributes = [new li(x(C({}, this.widgets.find(t => t.name === this.settings.find(i => i.name === "widget").value).schema), { name: "value", label: "Value" }))], this.attributeValues = this.handler.valueSettings(this.settings), this.tokens = this.tokenizerService.generateTokens(this.attributeValues), this.handler.rendererSnippet(this.settings).subscribe(t => { this.rendererOverride = t, t !== void 0 && (this.rendererSettings = this.handler.rendererOverrideSettings(t)[0].attributes); }); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(ci), e.\u0275\u0275directiveInject(se), e.\u0275\u0275directiveInject(z.TokenizerService), e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(s.ControlContainer, 8)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-attribute-pane-renderer"]], inputs: { settings: "settings", appearance: "appearance", name: "name", label: "label", displayType: "displayType" }, standalone: !1, decls: 3, vars: 2, consts: [["overrideTpl", ""], ["settingsTmpl", ""], [4, "ngIf", "ngIfElse"], [4, "ngIf"], [3, "formGroup", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngFor", "ngForOf"], [3, "formGroup"], ["formControlName", "settings", 3, "attributes", "attributeValues"], [3, "settings", "tokens"]], template: function (i, n) { if (i & 1 && e.\u0275\u0275template(0, Fr, 3, 2, "div", 2)(1, Ir, 1, 2, "ng-template", null, 0, e.\u0275\u0275templateRefExtractor), i & 2) {
            let a = e.\u0275\u0275reference(2);
            e.\u0275\u0275property("ngIf", !n.rendererOverride)("ngIfElse", a);
        } }, dependencies: [v.NgForOf, v.NgIf, v.NgTemplateOutlet, s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, S.AttributesBuilderComponent, Fi, S.AttributePipe], styles: [".override[_ngcontent-%COMP%]{position:absolute;top:.5em;right:.5em}"] }); }
} return r; })(), fe = (() => { class r {
    constructor(t, i) { this.filesService = t, this.attributeSerializer = i, this.types = ["image/png", "image/jpg", "image/jpeg", "image/gif"]; }
    handleFile(t) { return this.filesService.bulkUpload({ files: [t] }).pipe(g(i => this.buildSettings(i[0]))); }
    handlesType(t) { return this.types.find(i => i === t) !== void 0; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(t) { return u(!1); }
    isDynamic(t) { return !1; }
    isData(t) { return !1; }
    buildDynamicItems(t, i) { return u([]); }
    fetchDynamicData(t, i) { return u(new G); }
    getBindings(t, i, n) { return u([]); }
    toObject(t) { return u(this.attributeSerializer.deserializeAsObject(t)); }
    buildSettings(t) { return t.fileName = "placeholdername", this.attributeSerializer.serialize(t, "root").attributes; }
    stateDefinition(t) { return u({ mediaLoading: "y", mediaLoaded: "n", loadError: "n", loadDuration: "y" }); }
    editorOptions(t) { return u(new q); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(It.FilesService), e.\u0275\u0275inject(S.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), Sa = (() => { class r {
    constructor(t, i, n, a, o) { this.data = t, this.dialogRef = i, this.fb = n, this.filesService = a, this.handler = o, this.mediaTypes = ".png,.jpg,.jpeg,.gif,.svg"; }
    ngOnInit() { this.data.pane !== void 0 && this.handler.toObject(this.data.pane.settings).pipe(y(t => this.filesService.convertToFiles([t]))).subscribe(t => { this.media = t[0]; }); }
    onSelectMedia(t) { this.media = t.addedFiles[0], this.handler.handleFile(this.media).subscribe(i => { this.data.paneIndex === void 0 && this.data.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "media", name: new p(""), label: new p(""), rule: new p(""), settings: new V(i.map(n => this.fb.group({ name: new p(n.name, f.required), type: new p(n.type, f.required), displayName: new p(n.displayName, f.required), value: new p(n.value, f.required), computedValue: new p(n.value, f.required) }))) })), this.dialogRef.close(); }); }
    onRemoveMedia(t) { this.media = void 0; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject($), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(It.FilesService), e.\u0275\u0275directiveInject(fe)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-media-editor"]], standalone: !1, decls: 4, vars: 3, consts: [[3, "change", "multiple", "accept"], [3, "removable", "file", "removed", 4, "ngIf"], [3, "removed", "removable", "file"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "ngx-dropzone", 0), e.\u0275\u0275listener("change", function (o) { return n.onSelectMedia(o); }), e.\u0275\u0275elementStart(1, "ngx-dropzone-label"), e.\u0275\u0275text(2, "Drag and Drop Media Here"), e.\u0275\u0275elementEnd(), e.\u0275\u0275template(3, Mr, 3, 4, "ngx-dropzone-image-preview", 1), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("multiple", !1)("accept", n.mediaTypes), e.\u0275\u0275advance(3), e.\u0275\u0275property("ngIf", n.media)); }, dependencies: [v.NgIf, ve.NgxDropzoneComponent, ve.NgxDropzoneLabelDirective, ve.NgxDropzoneImagePreviewComponent], encapsulation: 2 }); }
} return r; })(), xa = (() => { class r {
    constructor(t, i, n, a) { this.mediaSettings = t, this.handler = i, this.attributeSerializer = n, this.settings = [], this.ancestory = [], this.state = {}, this.stateChange = new R, this.panelPageStateService = a.getEntityCollectionService("PanelPageState"); }
    ngOnInit() { console.log("media ancestory is"), console.log(this.ancestory), console.log("my state is:"), console.log(this.state), this.mediaBaseUrl = this.mediaSettings.imageUrl, this.handler.toObject(this.settings).subscribe(t => { this.mediaFile = t; }); }
    ngAfterViewInit() { this.image.nativeElement.onload = () => { console.log("image loaded"), this.stateChange.emit({ mediaLoading: "n" }); }; }
    ngOnChanges() { this.mediaBaseUrl = this.mediaSettings.imageUrl, this.handler.toObject(this.settings).subscribe(t => { this.mediaFile = t; }); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(Wi), e.\u0275\u0275directiveInject(fe), e.\u0275\u0275directiveInject(S.AttributeSerializerService), e.\u0275\u0275directiveInject(j.EntityServices)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-media-pane-renderer"]], viewQuery: function (i, n) { if (i & 1 && e.\u0275\u0275viewQuery($r, 7), i & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.image = a.first);
        } }, inputs: { settings: "settings", ancestory: "ancestory", state: "state" }, outputs: { stateChange: "stateChange" }, standalone: !1, features: [e.\u0275\u0275NgOnChangesFeature], decls: 2, vars: 3, consts: [["img", ""], [3, "src"]], template: function (i, n) { i & 1 && e.\u0275\u0275element(0, "img", 1, 0), i & 2 && e.\u0275\u0275property("src", e.\u0275\u0275interpolate2("", n.mediaBaseUrl, "/", n.mediaFile.path), e.\u0275\u0275sanitizeUrl); }, styles: ["img[_ngcontent-%COMP%]{max-width:100%}"] }); }
} return r; })(), Re = (() => { class r {
    constructor(t, i, n, a, o, l, d, m, w) { this.siteName = t, this.snippetHandler = i, this.pageBuilderFacade = n, this.store = a, this.tokenizerService = o, this.panelHandler = l, this.urlGeneratorService = d, this.attributeSerializer = m, this.rulesResolver = w; }
    handleFile(t) { return u([]); }
    handlesType(t) { return !1; }
    implementsRendererOverride() { return !0; }
    hasRendererOverride(t) { return u(!1); }
    isDynamic(t) { return ["snippet", "pane"].indexOf(this.getRenderType(t)) > -1; }
    isData(t) { return !1; }
    fetchDynamicData(t, i) { let n = new M; return this.toObject(t).pipe(y(a => this.urlGeneratorService.getUrl(a.url, a.params, i).pipe(g(o => [a, o])))).subscribe(([a, o]) => { this.pageBuilderFacade.loadRestData(`${i.get("tag")}`, new me(x(C({}, a), { url: o }))), this.store.pipe(ge(Le(`${i.get("tag")}`)), N(l => l !== void 0)).subscribe(l => { n.next(l), n.complete(); }); }), n; }
    buildDynamicItems(t, i) { let n = new M; return console.log("build dynamic items rest"), this.toObject(t).pipe(y(a => this.urlGeneratorService.getUrl(a.url, a.params, i).pipe(g(o => [a, o])))).subscribe(([a, o]) => { console.log("Load in rest data"), this.pageBuilderFacade.loadRestData(`${i.get("tag")}`, new me(x(C({}, a), { url: o }))), this.store.pipe(ge(Le(`${i.get("tag")}`)), N(l => l !== void 0), y(l => this.getBindings(t, "pane").pipe(g(d => [l, d]))), y(([l, d]) => De(() => l.results.length !== 0 && d.length > 0, new Ue(m => { lt(l.results.map(w => gn(d).pipe(g(I => i.get("panes").find(O => O.name === I.id)), y(I => De(() => I.rule && I.rule !== null && I.rule.condition !== "", this.rulesResolver.evaluate(I.rule, [...i.get("contexts"), ...I.contexts !== void 0 ? I.contexts : [], new ue({ name: "_root", adaptor: "data", data: w })]).pipe(g(O => [I, O])), u(!1).pipe(g(O => [I, O])))), N(([I, O]) => O), g(([I, O]) => I.name), Et(d[0].id), J(1)))).pipe(g(w => [l, w])).subscribe(w => { m.next(w), m.complete(); }); }), new Ue(m => { m.next([l]), m.complete(); }))), g(([l, d]) => a.renderer.type === "pane" ? l.results.map((m, w) => { let I = i.get("panes").find(L => L.name === d[w]), O = Y(); return new T(x(C({}, I), { rule: void 0, label: O, contexts: [...i.get("contexts"), new ue({ name: "_root", adaptor: "data", data: m })] })); }) : l.results.map(m => new T({ contentPlugin: "snippet", name: Y(), label: void 0, contexts: [...i.get("contexts"), new ue({ name: "_root", adaptor: "data", data: m })], settings: this.snippetHandler.buildSettings(x(C({}, a.renderer.data), { content: a.renderer.data.content })) }))), g(l => new dt({ stylePlugin: void 0, settings: [], panes: l, columnSetting: new A })), g(l => this.panelHandler.buildSettings(new _e({ id: void 0, layoutType: "grid", displayType: "page", site: this.siteName, gridItems: [], layoutSetting: new A, rowSettings: [], panels: [l] })))).subscribe(l => { n.next(l.find(d => d.name === "panels").attributes[0].attributes.find(d => d.name === "panes").attributes), n.complete(); }); }), n; }
    buildSelectOptionItems(t, i) { return this.toObject(t).pipe(y(n => this.urlGeneratorService.getUrl(n.url, n.params, i).pipe(g(a => [n, a]))), g(([n, a]) => new me(x(C({}, n), { url: a })))).subscribe(n => { this.pageBuilderFacade.loadRestData(`${i.get("tag")}`, n); }), this.store.pipe(ge(Le(`${i.get("tag")}`)), N(n => n !== void 0), g(n => [n, n.results.map(a => this.tokenizerService.generateGenericTokens(a))]), g(([n, a]) => [n, a, new fi(JSON.parse(i.get("snippet").content))]), g(([n, a, o]) => a.map((l, d) => new vn({ dataItem: n.results[d], value: o.value === "[.]" ? this.attributeSerializer.serialize(n.results[d], "value") : this.attributeSerializer.serialize(this.tokenizerService.replaceTokens(o.value, l), "value"), label: this.tokenizerService.replaceTokens(o.label, l) })))); }
    getBindings(t, i, n) { return i === "context" ? this.toObject(t).pipe(g(a => a.params.reduce((o, l) => [...o, ...l.mapping.type === "form" ? [new ot({ id: `form__${l.mapping.value.split(".", 2)[0].trim()}`, type: "context" })] : []], []))) : this.toObject(t).pipe(y(a => De(() => a.renderer.type === i, u(a.renderer.bindings), u([])))); }
    toObject(t) { return u(this.attributeSerializer.deserializeAsObject(t)); }
    buildSettings(t) { return this.attributeSerializer.serialize(t, "root").attributes; }
    getRenderType(t) { let i = [t.find(n => n.name === "renderer")].map(n => n.attributes.find(a => a.name === "type")); return i.length > 0 ? i[0].value : void 0; }
    stateDefinition(t) { return u({ autocomplete: { input: "" } }); }
    editorOptions(t) { return u(new q); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(rt), e.\u0275\u0275inject(oe), e.\u0275\u0275inject(_.PageBuilderFacade), e.\u0275\u0275inject(he.Store), e.\u0275\u0275inject(z.TokenizerService), e.\u0275\u0275inject(_.PanelContentHandler), e.\u0275\u0275inject(Tt.UrlGeneratorService), e.\u0275\u0275inject(S.AttributeSerializerService), e.\u0275\u0275inject(Ve.RulesResolverService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), wa = (() => { class r {
    set rest(t) { if (t !== void 0) {
        this._rest = t;
        let i = { value: "", label: "", id: "", multiple: "", limit: "" };
        this.restForm.setValue({ renderer: x(C({ trackBy: "", query: "" }, t.renderer), { data: t.renderer.data ? x(C({}, t.renderer.data), { jsScript: t.renderer.data.jsScript ? t.renderer.data.jsScript : "" }) : { content: "", contentType: "", jsScript: "" }, select: ["pane", "snippet"].findIndex(n => n === t.renderer.type) > -1 ? i : JSON.parse(t.renderer.data.content), bindings: [] }), source: { url: "", params: [], method: "", body: "" } }), t.renderer.type === "pane" && (this.bindings.clear(), t.renderer.bindings.forEach(n => { n.type === "pane" && this.bindings.push(this.fb.group({ id: this.fb.control(n.id, f.required), type: this.fb.control(n.type, f.required) })); })), t.renderer.type === "pane" ? this.restForm.get("renderer").get("data").disable() : this.restForm.get("renderer").get("data").enable(), setTimeout(() => { this.restSource = { url: t.url, params: t.params, method: t.method ? t.method : "", body: t.body ? x(C({}, t.body), { jsScript: "" }) : "" }, this.sourceForm.refreshData$.next(void 0); });
    } }
    get rendererType() { return this.restForm.get("renderer").get("type"); }
    get isSelectable() { return this.restForm.get("renderer").get("type").value && this.restForm.get("renderer").get("type").value !== "snippet" && this.restForm.get("renderer").get("type").value !== "pane"; }
    get bindings() { return this.restForm.get("renderer").get("bindings"); }
    get valid() { return this.restForm.valid; }
    constructor(t, i) { this.fb = t, this.tokenizerService = i, this.panes = [], this.submitted = new R, this.contexts = [], this.forms = [], this.snippetValidation = !0, this.restForm = this.fb.group({ source: this.fb.control(""), renderer: this.fb.group({ type: "snippet", query: this.fb.control(""), trackBy: this.fb.control(""), data: this.fb.control(""), bindings: this.fb.array([]), select: this.fb.group({ value: this.fb.control(""), label: this.fb.control(""), id: this.fb.control(""), multiple: this.fb.control(""), limit: this.fb.control("") }) }) }); }
    ngOnInit() { console.log(this.contexts), this.restForm.get("renderer").get("type").valueChanges.subscribe(t => { this.rendererType.value === "pane" ? this.restForm.get("renderer").get("data").disable() : this.restForm.get("renderer").get("data").enable(), this.restForm.get("renderer").get("data").setValue({ contentType: "", content: "", jsScript: "" }); }), this.restForm.get("renderer").get("select").valueChanges.subscribe(t => { this.restForm.get("renderer").get("data").setValue({ contentType: "application/json", content: JSON.stringify({ value: t.value, label: t.label, id: t.id, multiple: t.multiple, limit: t.limit }), jsScript: "" }); }); }
    ngAfterViewInit() { }
    onDataChange(t) { this.tokens = this.tokenizerService.generateGenericTokens(t[0]); }
    addPane() { this.bindings.push(this.fb.group({ type: this.fb.control("pane", f.required), id: this.fb.control("", f.required) })); }
    submit() { let t = new me(x(C({}, this.restForm.value), { url: this.restForm.value.source.url, params: this.restForm.value.source.params, method: this.restForm.value.source.method, body: this.restForm.value.source.body })); this.submitted.emit(t); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(z.TokenizerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-rest-form"]], viewQuery: function (i, n) { if (i & 1 && e.\u0275\u0275viewQuery(pi, 7), i & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.sourceForm = a.first);
        } }, inputs: { panes: "panes", contexts: "contexts", rest: "rest" }, outputs: { submitted: "submitted" }, standalone: !1, decls: 34, vars: 9, consts: [[1, "rest-form", 3, "ngSubmit", "formGroup"], ["direction", "vertical", 1, "content-inner"], ["as-split-area", "", "size", "50"], ["formControlName", "source", 3, "dataChange", "contexts", "restSource"], ["size", "50", "formGroupName", "renderer"], ["matInput", "", "formControlName", "query", "placeholder", "Query"], ["matInput", "", "formControlName", "trackBy", "placeholder", "Track By"], ["required", "", "formControlName", "type"], ["label", "Output"], ["value", "snippet"], ["value", "pane"], ["label", "Input"], ["value", "select"], ["value", "radiogroup"], ["value", "checkboxgroup"], ["value", "autocomplete"], ["formControlName", "data", "splitDirection", "horizontal", "rows", "10", "cols", "40", 3, "hidden", "rootForm", "tokens"], ["formArrayName", "bindings", 4, "ngIf"], ["formGroupName", "select", 4, "ngIf"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"], ["formArrayName", "bindings"], ["type", "button", 3, "click"], [4, "ngFor", "ngForOf"], [3, "formGroupName"], ["required", "", "formControlName", "id"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["formGroupName", "select"], ["matInput", "", "formControlName", "id", "placeholder", "Id"], ["matInput", "", "formControlName", "value", "placeholder", "Value"], ["matInput", "", "formControlName", "label", "placeholder", "Label"], ["formControlName", "multiple"], ["matInput", "", "formControlName", "limit", "placeholder", "Limit"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "as-split", 1)(3, "div", 2)(4, "classifieds-ui-rest-source-form", 3), e.\u0275\u0275listener("dataChange", function (o) { return n.onDataChange(o); }), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(5, "as-split-area", 4)(6, "mat-form-field"), e.\u0275\u0275element(7, "input", 5), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(8, "mat-form-field"), e.\u0275\u0275element(9, "input", 6), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(10, "mat-form-field")(11, "mat-label"), e.\u0275\u0275text(12, "Type"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(13, "mat-select", 7)(14, "mat-optgroup", 8)(15, "mat-option", 9), e.\u0275\u0275text(16, "Snippet"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(17, "mat-option", 10), e.\u0275\u0275text(18, "Pane"), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(19, "mat-optgroup", 11)(20, "mat-option", 12), e.\u0275\u0275text(21, "Select"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(22, "mat-option", 13), e.\u0275\u0275text(23, "Radio Group"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(24, "mat-option", 14), e.\u0275\u0275text(25, "Checkbox Group"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(26, "mat-option", 15), e.\u0275\u0275text(27, "Autocomplete"), e.\u0275\u0275elementEnd()()()(), e.\u0275\u0275element(28, "classifieds-ui-snippet-form", 16), e.\u0275\u0275template(29, Dr, 5, 1, "div", 17)(30, Rr, 12, 0, "div", 18), e.\u0275\u0275elementEnd()()(), e.\u0275\u0275elementStart(31, "mat-dialog-actions")(32, "button", 19), e.\u0275\u0275text(33, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.restForm), e.\u0275\u0275advance(4), e.\u0275\u0275property("contexts", n.contexts)("restSource", n.restSource), e.\u0275\u0275advance(24), e.\u0275\u0275property("hidden", n.rendererType.value != "snippet")("rootForm", !1)("tokens", n.tokens), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", n.rendererType.value == "pane"), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", n.isSelectable), e.\u0275\u0275advance(2), e.\u0275\u0275property("disabled", !n.valid)); }, dependencies: [v.NgForOf, v.NgIf, s.\u0275NgNoValidate, s.DefaultValueAccessor, s.NgControlStatus, s.NgControlStatusGroup, s.RequiredValidator, s.FormGroupDirective, s.FormControlName, s.FormGroupName, s.FormArrayName, H.MatOption, H.MatOptgroup, F.MatButton, Dt.MatCheckbox, h.MatDialogClose, h.MatDialogActions, h.MatDialogContent, b.MatInput, b.MatFormField, b.MatLabel, we.MatSelect, nt.SplitComponent, nt.SplitAreaComponent, Mt.RestSourceFormComponent, at.SnippetFormComponent], styles: [".rest-form[_ngcontent-%COMP%]     .content-inner{height:auto}"] }); }
} return r; })(), Pa = (() => { class r {
    constructor(t, i, n, a) { this.data = t, this.dialogRef = i, this.fb = n, this.handler = a, this.panes = [], this.contexts = [], this.contexts = this.data.contexts; }
    ngOnInit() { this.panes = this.data.panelFormGroup.get("panes").controls.reduce((t, i) => i.get("name").value ? [...t, i.get("name").value] : [...t], []), this.data.pane !== void 0 && this.handler.toObject(this.data.pane.settings).subscribe(t => { this.rest = t; }); }
    submitted(t) { let i = this.data.panelFormGroup.get("panes"); if (this.data.paneIndex === void 0)
        i.push(this.fb.group({ contentPlugin: "rest", name: new p(""), label: new p(""), rule: new p(""), settings: this.fb.array(this.handler.buildSettings(t).map(n => this.convertToGroup(n))) })), this.data.contentAdded.next([this.data.panelIndex, i.length - 1]);
    else {
        let n = i.at(this.data.paneIndex);
        n.get("settings").clear(), this.handler.buildSettings(t).forEach(a => { n.get("settings").push(this.convertToGroup(a)); });
    } this.dialogRef.close(); }
    convertToGroup(t) { let i = this.fb.group({ name: new p(t.name, f.required), type: new p(t.type, f.required), displayName: new p(t.displayName, f.required), value: new p(t.value, f.required), computedValue: new p(t.value, f.required), attributes: new V([]) }); return t.attributes && t.attributes.length > 0 && t.attributes.forEach(n => { i.get("attributes").push(this.convertToGroup(n)); }), i; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject($), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(Re)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-rest-editor"]], standalone: !1, decls: 1, vars: 3, consts: [[3, "submitted", "panes", "rest", "contexts"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "classifieds-ui-rest-form", 0), e.\u0275\u0275listener("submitted", function (o) { return n.submitted(o); }), e.\u0275\u0275elementEnd()), i & 2 && e.\u0275\u0275property("panes", n.panes)("rest", n.rest)("contexts", n.contexts); }, dependencies: [wa], encapsulation: 2 }); }
} return r; })(), Fa = (() => { class r {
    set values(t) { this.options = t, this.buildOptions(); }
    get attributesArray() { return this.selectionForm.get("attributes"); }
    constructor(t, i, n) { this.fb = t, this.attributeSerializer = i, this.tokenizerService = n, this.searchChange = new R, this.selectionForm = this.fb.group({ attributes: this.fb.array([]) }), this.onTouched = () => { }, this.displayAuto = a => n.replaceTokens(this.selectMapping.label, this.tokenizerService.generateGenericTokens(a.dataItem)); }
    ngOnInit() { this.attributesArray.push(this.fb.group({ name: new p("value", f.required), type: new p(ae.Array, f.required), displayName: new p("Value", f.required), value: new p(""), attributes: ["checkboxgroup"].findIndex(t => t === this.renderType) > -1 ? this.fb.array([]) : new p("") })), this.renderType === "autocomplete" && (this.attributesArray.at(0).addControl("_proxy", this.fb.control("")), this.attributesArray.at(0).get("_proxy").valueChanges.pipe($t(), pe(500)).subscribe(t => { this.searchChange.emit(t); })); }
    onOptionSelected(t) { this.attributesArray.at(0).get("attributes").setValue(t.option.value.value), this.attributesArray.at(0).get("attributes").updateValueAndValidity(); }
    writeValue(t) { t && this.attributesArray.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.attributesArray.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.attributesArray.disable() : this.attributesArray.enable(); }
    validate(t) { return this.selectionForm.valid ? null : { invalidForm: { valid: !1, message: "selection is invalid" } }; }
    buildOptions() { if (this.renderType === "checkboxgroup" && this.options !== void 0) {
        let t = this.attributesArray.controls[0].get("attributes");
        t.clear(), this.options.forEach(i => { let n = this.attributeSerializer.convertToGroup(i.value); n.addControl("_store", new p(!1)), t.push(n); });
    } }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(S.AttributeSerializerService), e.\u0275\u0275directiveInject(z.TokenizerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-selection"]], inputs: { name: "name", label: "label", values: "values", renderType: "renderType", selectMapping: "selectMapping" }, outputs: { searchChange: "searchChange" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: tt, useExisting: Z(() => r), multi: !0 }, { provide: it, useExisting: Z(() => r), multi: !0 }])], decls: 9, vars: 6, consts: [["autocomplete", "matAutocomplete"], [3, "formGroup"], ["formArrayName", "attributes"], ["formGroupName", "0"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["formControlName", "attributes"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [4, "ngFor", "ngForOf"], [3, "formGroupName"], ["formControlName", "_store"], ["matInput", "", "formControlName", "_proxy", 3, "placeholder", "matAutocomplete"], [3, "optionSelected", "displayWith"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div"), e.\u0275\u0275elementContainerStart(4, 4), e.\u0275\u0275template(5, jr, 6, 2, "ng-container", 5)(6, kr, 6, 2, "ng-container", 5)(7, Gr, 4, 1, "ng-container", 5)(8, zr, 6, 4, "ng-container", 5), e.\u0275\u0275elementContainerEnd(), e.\u0275\u0275elementEnd()()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.selectionForm), e.\u0275\u0275advance(4), e.\u0275\u0275property("ngSwitch", n.renderType), e.\u0275\u0275advance(), e.\u0275\u0275property("ngSwitchCase", "select"), e.\u0275\u0275advance(), e.\u0275\u0275property("ngSwitchCase", "radiogroup"), e.\u0275\u0275advance(), e.\u0275\u0275property("ngSwitchCase", "checkboxgroup"), e.\u0275\u0275advance(), e.\u0275\u0275property("ngSwitchCase", "autocomplete")); }, dependencies: [v.NgForOf, v.NgSwitch, v.NgSwitchCase, s.DefaultValueAccessor, s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, s.FormGroupName, s.FormArrayName, H.MatAutocomplete, H.MatOption, H.MatAutocompleteTrigger, Dt.MatCheckbox, b.MatInput, b.MatFormField, b.MatLabel, ut.MatRadioGroup, ut.MatRadioButton, we.MatSelect], encapsulation: 2 }); }
} return r; })(), Ia = (() => { class r {
    get renderType() { return this.restHandler.getRenderType(this.settings); }
    constructor(t, i) { this.restHandler = t, this.controlContainer = i, this.settings = [], this.contexts = [], this.state = {}, this.stateChange = new R, this.tag = Y(), this.searchChange$ = new M; }
    ngOnInit() { this.restHandler.toObject(this.settings).pipe(P(t => { this.snippet = t.renderer.data, this.selectMapping = new fi(JSON.parse(this.snippet.content)); }), N(() => this.renderType !== "autocomplete"), y(t => this.restHandler.buildSelectOptionItems(this.settings, new Map([["tag", this.tag], ["snippet", t.renderer.data], ["contexts", this.contexts]])))).subscribe(t => { this.options = t; }), this.searchChange$.pipe(P(t => { this.stateChange.emit({ autocomplete: { input: t } }); }), y(t => this.restHandler.buildSelectOptionItems(this.settings, new Map([["tag", Y()], ["snippet", this.snippet], ["contexts", this.contexts]])))).subscribe(t => { this.options = t; }); }
    onSearchChange(t) { this.searchChange$.next(t); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(Re), e.\u0275\u0275directiveInject(s.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-rest-pane-renderer"]], inputs: { settings: "settings", name: "name", label: "label", displayType: "displayType", contexts: "contexts", state: "state" }, outputs: { stateChange: "stateChange" }, standalone: !1, decls: 2, vars: 6, consts: [[3, "formGroup"], ["formControlName", "settings", 3, "searchChange", "name", "label", "renderType", "values", "selectMapping"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "classifieds-ui-selection", 1), e.\u0275\u0275listener("searchChange", function (o) { return n.onSearchChange(o); }), e.\u0275\u0275elementEnd()()), i & 2 && (e.\u0275\u0275property("formGroup", n.controlContainer.control), e.\u0275\u0275advance(), e.\u0275\u0275property("name", n.name)("label", n.label)("renderType", n.renderType)("values", n.options)("selectMapping", n.selectMapping)); }, dependencies: [s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, Fa], encapsulation: 2 }); }
} return r; })(), qe = (() => { class r {
    constructor(t, i, n, a, o, l) { this.siteName = t, this.tokenizerService = i, this.panelHandler = n, this.mediaHandler = a, this.attributeSerializer = o, this.inlineContextResolver = l; }
    handleFile(t) { return u(); }
    handlesType(t) { return !1; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(t) { return u(!1); }
    isDynamic(t) { return !0; }
    isData(t) { return !1; }
    fetchDynamicData(t, i) { return u(new G); }
    buildDynamicItems(t, i) { return this.toObject(t).pipe(g(n => [n, i.get("contexts").find(a => a.name === n.context)]), y(([n, a]) => this.extractDataArray(a, n.query).pipe(g(o => [n, a, o]))), y(([n, a, o]) => this.transformDataArray(o, n.plugin)), g(n => new dt({ stylePlugin: void 0, settings: [], panes: n, columnSetting: new A })), g(n => this.panelHandler.buildSettings(new _e({ id: void 0, layoutType: "grid", displayType: "page", site: this.siteName, gridItems: [], layoutSetting: new A, rowSettings: [], panels: [n] }))), g(n => n.find(a => a.name === "panels").attributes[0].attributes.find(a => a.name === "panes").attributes)); }
    getBindings(t, i, n) { return i === "context" ? this.toObject(t).pipe(g(a => [new ot({ id: a.context, type: "context" })])) : u([]); }
    toObject(t) { return u(this.attributeSerializer.deserializeAsObject(t)); }
    buildSettings(t) { return this.attributeSerializer.serialize(t, "root").attributes; }
    extractDataArray(t, i) { return this.inlineContextResolver.resolve(t).pipe(g(n => { let a = i.split("."), o = a.length; if (t === void 0)
        return u([]); let l = Array.isArray(n) ? n[0] : n; for (let d = 0; d < o; d++)
        a[d] !== "" && (l = l[a[d]]); return l; })); }
    transformDataArray(t, i) { return i === "media" ? u(t.map(n => new Ji(n)).map(n => new T({ contentPlugin: "media", name: void 0, label: void 0, settings: this.mediaHandler.buildSettings(n) }))) : u(); }
    stateDefinition(t) { return u({}); }
    editorOptions(t) { return u(new q); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(rt), e.\u0275\u0275inject(z.TokenizerService), e.\u0275\u0275inject(_.PanelContentHandler), e.\u0275\u0275inject(fe), e.\u0275\u0275inject(S.AttributeSerializerService), e.\u0275\u0275inject(B.InlineContextResolverService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), wt = class {
    constructor(c) { c && (this.context = c.context, this.query = c.query, this.plugin = c.plugin); }
}, Ke = class {
    constructor(c) { c && (this.text = c.text, this.action = c.action, this.paramsString = c.paramsString, this.params = c.params ? c.params.map(t => new St(t)) : []); }
}, je = class {
    constructor(c) { c && (this.iconName = c.iconName, this.text = c.text, this.action = c.action); }
}, Ye = class {
    constructor(c) { this.items = [], c && (this.label = c.label, this.iconName = c.iconName, c.items && (this.items = c.items.map(t => new je(t)))); }
}, Xe = class {
    constructor(c) { c && (this.text = c.text, this.url = c.url); }
}, Ze = class {
    constructor(c) { c && (this.iconName = c.iconName, this.label = c.label, this.category = c.category); }
}, Oe = class {
    constructor(c) { this.mode = "side", this.position = "start", this.opened = !0, Object.assign(this, c); }
}, et = class {
    constructor(c) { c && (this.iconName = c.iconName, this.ariaLabel = c.ariaLabel, this.action = c.action); }
}, Ma = (() => { class r {
    constructor(t) { this.fb = t, this.contexts = [], this.submitted = new R, this.sliceForm = this.fb.group({ context: this.fb.control("", f.required), query: this.fb.control("", f.required), plugin: this.fb.control("", f.required) }); }
    ngOnInit() { }
    submit() { let t = new wt(this.sliceForm.value); this.submitted.emit(t); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(s.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-slice-form"]], inputs: { contexts: "contexts" }, outputs: { submitted: "submitted" }, standalone: !1, decls: 20, vars: 3, consts: [[1, "slice-form", 3, "ngSubmit", "formGroup"], ["required", "", "formControlName", "context"], ["value", "_root"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Query", "formControlName", "query", "required", ""], ["required", "", "formControlName", "plugin"], ["value", "media"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"], [3, "value"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "mat-form-field")(3, "mat-label"), e.\u0275\u0275text(4, "Type"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(5, "mat-select", 1)(6, "mat-option", 2), e.\u0275\u0275text(7, "_root"), e.\u0275\u0275elementEnd(), e.\u0275\u0275template(8, Br, 2, 2, "mat-option", 3), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(9, "mat-form-field"), e.\u0275\u0275element(10, "input", 4), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(11, "mat-form-field")(12, "mat-label"), e.\u0275\u0275text(13, "Plugin"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(14, "mat-select", 5)(15, "mat-option", 6), e.\u0275\u0275text(16, "Media"), e.\u0275\u0275elementEnd()()()(), e.\u0275\u0275elementStart(17, "mat-dialog-actions")(18, "button", 7), e.\u0275\u0275text(19, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.sliceForm), e.\u0275\u0275advance(8), e.\u0275\u0275property("ngForOf", n.contexts), e.\u0275\u0275advance(10), e.\u0275\u0275property("disabled", !n.sliceForm.valid)); }, dependencies: [v.NgForOf, s.\u0275NgNoValidate, s.DefaultValueAccessor, s.NgControlStatus, s.NgControlStatusGroup, s.RequiredValidator, s.FormGroupDirective, s.FormControlName, H.MatOption, F.MatButton, h.MatDialogClose, h.MatDialogActions, h.MatDialogContent, b.MatInput, b.MatFormField, b.MatLabel, we.MatSelect], encapsulation: 2 }); }
} return r; })(), $a = (() => { class r {
    constructor(t, i, n, a) { this.data = t, this.dialogRef = i, this.fb = n, this.handler = a, this.contexts = [], this.contexts = this.data.contexts; }
    ngOnInit() { }
    submitted(t) { this.data.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "slice", name: new p(""), label: new p(""), rule: new p(""), settings: this.fb.array(this.handler.buildSettings(t).map(i => this.convertToGroup(i))) })), this.dialogRef.close(); }
    convertToGroup(t) { let i = this.fb.group({ name: new p(t.name, f.required), type: new p(t.type, f.required), displayName: new p(t.displayName, f.required), value: new p(t.value, f.required), computedValue: new p(t.value, f.required), attributes: new V([]) }); return t.attributes && t.attributes.length > 0 && t.attributes.forEach(n => { i.get("attributes").push(this.convertToGroup(n)); }), i; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject($), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(qe)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-slice-editor"]], standalone: !1, decls: 1, vars: 1, consts: [[3, "submitted", "contexts"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "classifieds-ui-slice-form", 0), e.\u0275\u0275listener("submitted", function (o) { return n.submitted(o); }), e.\u0275\u0275elementEnd()), i & 2 && e.\u0275\u0275property("contexts", n.contexts); }, dependencies: [Ma], encapsulation: 2 }); }
} return r; })(), Ea = (() => { class r {
    constructor(t, i) { this.fb = t, this.controlContainer = i; }
    ngOnInit() { this.controlContainer.control.addControl("adaptor", this.fb.control("rest", f.required)), this.controlContainer.control.addControl("rest", this.fb.control("")); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(s.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-context-editor"]], viewQuery: function (i, n) { if (i & 1 && e.\u0275\u0275viewQuery(pi, 7), i & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.restSourceFormComp = a.first);
        } }, standalone: !1, decls: 2, vars: 1, consts: [[3, "formGroup"], ["formControlName", "rest"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementContainerStart(0, 0), e.\u0275\u0275element(1, "classifieds-ui-rest-source-form", 1), e.\u0275\u0275elementContainerEnd()), i & 2 && e.\u0275\u0275property("formGroup", n.controlContainer.control); }, dependencies: [s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, Mt.RestSourceFormComponent], encapsulation: 2 }); }
} return r; })(), Ta = (() => { class r {
    get labels() { return this.formGroup.get("labels"); }
    constructor(t, i, n, a) { this.data = t, this.dialogRef = i, this.fb = n, this.attributeSerializer = a, this.contexts = [], this.panes = [], this.formGroup = this.fb.group({ labels: this.fb.array([this.buildLabelGroup()]) }), this.contexts = this.data.contexts; }
    ngOnInit() { this.panes = new dt(this.data.panelFormGroup.value).panes; }
    submit() { this.data.panelFormGroup.get("settings").clear(), this.attributeSerializer.serialize(this.formGroup.value, "root").attributes.forEach(t => { console.log("label mappings"), console.log(this.attributeSerializer.convertToGroup(t)), this.data.panelFormGroup.get("settings").push(this.attributeSerializer.convertToGroup(t)); }); }
    onRemoveMapping(t) { this.labels.removeAt(t); }
    onAddMapping() { this.labels.push(this.buildLabelGroup()); }
    buildLabelGroup() { return this.fb.group({ mapping: this.fb.control("") }); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject($), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(S.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["druid-tabs-panel-editor"]], standalone: !1, decls: 7, vars: 3, consts: [[3, "ngSubmit", "formGroup"], ["formArrayName", "labels"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "button", "mat-raised-button", "", "color", "primary", 3, "click"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"], [3, "formGroupName"], ["formControlName", "mapping", 3, "panes"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "div", 1), e.\u0275\u0275template(2, Lr, 4, 2, "div", 2), e.\u0275\u0275elementStart(3, "button", 3), e.\u0275\u0275listener("click", function () { return n.onAddMapping(); }), e.\u0275\u0275text(4, "Add"), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(5, "button", 4), e.\u0275\u0275text(6, "Save"), e.\u0275\u0275elementEnd()()), i & 2 && (e.\u0275\u0275property("formGroup", n.formGroup), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", n.labels.controls), e.\u0275\u0275advance(3), e.\u0275\u0275property("disabled", !n.formGroup.valid)); }, dependencies: [v.NgForOf, s.\u0275NgNoValidate, s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, s.FormGroupName, s.FormArrayName, F.MatButton, h.MatDialogClose, _.PanelPageLinkedlistComponent], encapsulation: 2 }); }
} return r; })(), Da = (() => { class r {
    constructor(t) { this.attributeSerializer = t, this.settings = [], this.panes = [], this.originMappings = [], this.labelMappingsEnabled = !1; }
    ngOnInit() { console.log("tabs panels contexts"), console.log(this.panes); let t = this.attributeSerializer.deserialize(new le({ name: "", displayName: "", computedValue: "", type: ae.Complex, value: "", intValue: 0, attributes: this.settings })); this.labelMappingsEnabled = !!(t && t.labels !== void 0 && Array.isArray(t.labels) && t.labels.length > 0); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(S.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-tabs-panel-renderer"]], inputs: { settings: "settings", panes: "panes", originPanes: "originPanes", originMappings: "originMappings" }, standalone: !1, decls: 2, vars: 2, consts: [["mat-align-tabs", "start", 4, "ngIf"], ["mat-align-tabs", "start"], [4, "for"], ["mat-tab-label", ""], [3, "pluginName", "settings", "contexts"], ["label", "The Label", 4, "ngFor", "ngForOf"], ["label", "The Label"]], template: function (i, n) { i & 1 && e.\u0275\u0275template(0, Hr, 2, 1, "mat-tab-group", 0)(1, Wr, 2, 1, "mat-tab-group", 0), i & 2 && (e.\u0275\u0275property("ngIf", n.labelMappingsEnabled), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !n.labelMappingsEnabled)); }, dependencies: [v.NgForOf, v.NgIf, W.MatTabLabel, W.MatTab, W.MatTabGroup, be.ForDirective, mt.RenderPaneComponent], encapsulation: 2 }); }
} return r; })(), ti = (() => { class r {
    set panelPage(t) { this.panelPage$.next(t); }
    set context(t) { this.context$.next(t); }
    constructor(t, i) { this.fb = t, this.controlContainer = i, this.panelPages = [], this.panelPage$ = new X(new _e), this.context$ = new X(void 0), this.formGroup = this.fb.group({ state: this.fb.control("", [f.required]) }), this.stateCtrl = this.fb.control(""), this.stateCtrlSub = this.stateCtrl.valueChanges.pipe(pe(250), $t(), N(n => { try {
        return JSON.parse(n), !0;
    }
    catch {
        return !1;
    } }), g(n => JSON.parse(n))).subscribe(n => { console.log("write state"), console.log(n), this.formGroup.get("state").setValue(n); }), this.onTouched = () => { }; }
    ngOnInit() { this.panelPage$.subscribe(t => { this.panelPages = [t]; }), this.context$.subscribe(t => { t ? this.stateCtrl.setValue(JSON.stringify(t.data.state)) : this.stateCtrl.setValue(""); }); }
    writeValue(t) { t && this.formGroup.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.formGroup.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(t) { return this.formGroup.valid ? null : { invalidForm: { valid: !1, message: "source is invalid" } }; }
    flattenSelector(t) { let i = []; return t.panel !== void 0 && t.panel !== null && i.push(t.panel), t.pane !== void 0 && t.pane !== null && i.push(t.pane), t.nested !== void 0 && t.nested !== null && typeof t.nested == "object" && this.flattenSelector(t.nested).forEach(n => i.push(n)), i; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(s.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-page-state-form"]], inputs: { panelPage: "panelPage", context: "context" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: tt, useExisting: Z(() => r), multi: !0 }, { provide: it, useExisting: Z(() => r), multi: !0 }])], decls: 3, vars: 2, consts: [[3, "formGroup"], ["cols", "40", "rows", "20", "required", "", 3, "formControl"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0), e.\u0275\u0275text(1, " <"), e.\u0275\u0275element(2, "textarea", 1), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("formGroup", n.formGroup), e.\u0275\u0275advance(2), e.\u0275\u0275property("formControl", n.stateCtrl)); }, dependencies: [s.DefaultValueAccessor, s.NgControlStatus, s.NgControlStatusGroup, s.RequiredValidator, s.FormControlDirective, s.FormGroupDirective], encapsulation: 2 }); }
} return r; })(), Ra = (() => { class r {
    constructor(t, i, n) { this.fb = t, this.pageBuilderFacade = i, this.controlContainer = n; }
    ngOnInit() { this.controlContainer.control.addControl("adaptor", this.fb.control("data", f.required)), this.controlContainer.control.addControl("data", this.fb.control("")), this.pageBuilderFacade.getPage$.pipe(J(1)).subscribe(t => { this.panelPage = t; }); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(_.PageBuilderFacade), e.\u0275\u0275directiveInject(s.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-page-state-editor"]], viewQuery: function (i, n) { if (i & 1 && e.\u0275\u0275viewQuery(ti, 7), i & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.restSourceFormComp = a.first);
        } }, inputs: { context: "context" }, standalone: !1, decls: 2, vars: 3, consts: [[3, "formGroup"], ["formControlName", "data", 3, "panelPage", "context"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementContainerStart(0, 0), e.\u0275\u0275element(1, "classifieds-ui-page-state-form", 1), e.\u0275\u0275elementContainerEnd()), i & 2 && (e.\u0275\u0275property("formGroup", n.controlContainer.control), e.\u0275\u0275advance(), e.\u0275\u0275property("panelPage", n.panelPage)("context", n.context)); }, dependencies: [s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, ti], encapsulation: 2 }); }
} return r; })(), Na = (() => { class r {
    set settings(t) { this.settings$.next(t); }
    constructor(t, i) { this.fb = t, this.attributeSerializer = i, this.settings$ = new X(void 0), this.formGroup = this.fb.group({ name: this.fb.control("", [f.required]), field: this.fb.control("", [f.required]) }), this.settingsSub = this.settings$.pipe(g(n => n ? new _t(this.attributeSerializer.deserializeAsObject(n)) : void 0)).subscribe(n => { n ? (this.formGroup.get("name").setValue(n.name), this.formGroup.get("field").setValue(n.field)) : (this.formGroup.get("name").setValue(""), this.formGroup.get("field").setValue("")); }), this.onTouched = () => { }; }
    ngOnInit() { }
    writeValue(t) { t && this.formGroup.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.formGroup.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(t) { return this.formGroup.valid ? null : { invalidForm: { valid: !1, message: "content is invalid" } }; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(S.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-form-datasource-form"]], inputs: { settings: "settings" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: tt, useExisting: Z(() => r), multi: !0 }, { provide: it, useExisting: Z(() => r), multi: !0 }])], decls: 11, vars: 1, consts: [[3, "formGroup"], ["matInput", "", "formControlName", "name", "required", ""], ["matInput", "", "formControlName", "field", "required", ""]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "mat-form-field")(3, "mat-label"), e.\u0275\u0275text(4, "Name"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(5, "input", 1), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(6, "div")(7, "mat-form-field")(8, "mat-label"), e.\u0275\u0275text(9, "Field"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(10, "input", 2), e.\u0275\u0275elementEnd()()()), i & 2 && e.\u0275\u0275property("formGroup", n.formGroup); }, dependencies: [s.DefaultValueAccessor, s.NgControlStatus, s.NgControlStatusGroup, s.RequiredValidator, s.FormGroupDirective, s.FormControlName, b.MatInput, b.MatFormField, b.MatLabel], encapsulation: 2 }); }
} return r; })(), ja = (() => { class r {
    constructor(t) { this.controlContainer = t, this.settings = []; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(s.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-form-datasource"]], inputs: { settings: "settings" }, standalone: !1, decls: 2, vars: 2, consts: [[3, "formGroup"], ["formControlName", "settings", 3, "settings"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementContainerStart(0, 0), e.\u0275\u0275element(1, "classifieds-ui-form-datasource-form", 1), e.\u0275\u0275elementContainerEnd()), i & 2 && (e.\u0275\u0275property("formGroup", n.controlContainer.control), e.\u0275\u0275advance(), e.\u0275\u0275property("settings", n.settings)); }, dependencies: [s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, Na], encapsulation: 2 }); }
} return r; })(), Nt = (() => { class r {
    constructor(t) { this.attributeSerializer = t; }
    handleFile(t) { return u(); }
    handlesType(t) { return !1; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(t) { return u(!1); }
    isDynamic(t) { return !1; }
    isData(t) { return !1; }
    buildDynamicItems(t, i) { return u([]); }
    fetchDynamicData(t, i) { return u(new G); }
    getBindings(t, i) { return u([]); }
    toObject(t) { return u(new Ke(this.attributeSerializer.deserializeAsObject(t))); }
    buildSettings(t) { return this.attributeSerializer.serialize(t, "root").attributes; }
    fromPanes(t) { return t.map(i => new T(this.attributeSerializer.deserialize(i))); }
    stateDefinition(t) { return u({}); }
    editorOptions(t) { return u(new q); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(S.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" }); }
} return r; })(), Oa = (() => { class r {
    constructor(t, i, n, a, o) { this.dialogData = t, this.dialogRef = i, this.fb = n, this.attributeSerializer = a, this.handler = o, this.contexts = [], this.paramSettings = new Jt, this.contentForm = this.fb.group({ text: this.fb.control("", [f.required]), action: this.fb.control(""), params: this.fb.control("") }), this.contexts = t.contexts; }
    ngOnInit() { this.dialogData.pane !== void 0 && this.handler.toObject(this.dialogData.pane.settings).subscribe(t => { this.button = t, this.contentForm.get("text").patchValue(this.button.text), this.button.action && this.contentForm.get("action").patchValue(this.button.action), this.button.paramsString && (this.paramSettings = new Jt({ paramsString: this.button.paramsString, params: this.button.params })); }); }
    onSubmit() { let t; this.dialogData.paneIndex === void 0 ? (this.dialogData.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: new p("button"), name: new p(""), label: new p(""), rule: new p(""), settings: new V([]) })), t = this.dialogData.panelFormGroup.get("panes").length - 1) : t = this.dialogData.paneIndex; let i = this.dialogData.panelFormGroup.get("panes").at(t), n = this.contentForm.get("text").value, a = this.contentForm.get("action").value, o = this.contentForm.get("params").value; console.log("button editor params", o); let l = new Ke({ text: n, action: a, paramsString: o?.paramsString || "", params: o?.params || [] }); console.log("constructed button", l), i.get("settings").clear(), this.handler.buildSettings(l).map(m => this.attributeSerializer.convertToGroup(m)).forEach(m => i.get("settings").push(m)), this.dialogRef.close(); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject($), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(S.AttributeSerializerService), e.\u0275\u0275directiveInject(Nt)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-button-editor"]], standalone: !1, decls: 16, vars: 4, consts: [[3, "ngSubmit", "formGroup"], ["matInput", "", "formControlName", "text"], ["matInput", "", "formControlName", "action"], ["formControlName", "params", 3, "settings", "contexts"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.onSubmit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "div")(3, "mat-form-field")(4, "mat-label"), e.\u0275\u0275text(5, "Button Text"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(6, "input", 1), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(7, "div")(8, "mat-form-field")(9, "mat-label"), e.\u0275\u0275text(10, "Action (CSS class)"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(11, "input", 2), e.\u0275\u0275elementEnd()(), e.\u0275\u0275element(12, "druid-params-querystring", 3), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(13, "mat-dialog-actions")(14, "button", 4), e.\u0275\u0275text(15, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.contentForm), e.\u0275\u0275advance(12), e.\u0275\u0275property("settings", n.paramSettings)("contexts", n.contexts), e.\u0275\u0275advance(2), e.\u0275\u0275property("disabled", !n.contentForm.valid)); }, dependencies: [s.\u0275NgNoValidate, s.DefaultValueAccessor, s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, F.MatButton, h.MatDialogActions, h.MatDialogContent, b.MatInput, b.MatFormField, b.MatLabel, Pe.ParamsQuerystringComponent], encapsulation: 2 }); }
} return r; })(), ka = (() => { class r {
    constructor() { this.handler = ee(Nt), this.targetParamResolver = ee(Fn), this.raised = !0, this.color = "primary", this.disabled = !1, this.text = "", this.resolvedParams = {}, this.settings$ = new M, this.button$ = new M, this.resolvedContext$ = new M, this.settingsSub = this.settings$.pipe(y(t => this.handler.toObject(t)), P(t => { this.button$.next(t); })).subscribe(), this.buttonSub = this.button$.pipe(P(t => { this.text = t.text, this.action = t.action; })).subscribe(), this.resolvedContextSub = ce([this.resolvedContext$, this.button$]).pipe(y(([t, i]) => this.targetParamResolver.resolveParamsForTarget(i.paramsString || "", i.params || [], t)), P(t => { this.resolvedParams = t; })).subscribe(); }
    set settings(t) { this.settings$.next(t); }
    set resolvedContext(t) { this.resolvedContext$.next(t); }
    static { this.\u0275fac = function (i) { return new (i || r); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-button-renderer"]], inputs: { settings: "settings", resolvedContext: "resolvedContext" }, standalone: !1, decls: 5, vars: 11, consts: [["mat-raised-button", "", 3, "color", "disabled", "ngClass"], [3, "ngClass"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "button", 0), e.\u0275\u0275pipe(1, "json"), e.\u0275\u0275elementStart(2, "span", 1), e.\u0275\u0275pipe(3, "json"), e.\u0275\u0275text(4), e.\u0275\u0275elementEnd()()), i & 2 && (e.\u0275\u0275property("color", n.color)("disabled", n.disabled)("ngClass", n.action ? "action-" + n.action : null), e.\u0275\u0275attribute("data-resolved-params", e.\u0275\u0275pipeBind1(1, 7, n.resolvedParams)), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngClass", n.action ? "action-" + n.action : null), e.\u0275\u0275attribute("data-resolved-params", e.\u0275\u0275pipeBind1(3, 9, n.resolvedParams)), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(n.text)); }, dependencies: [v.NgClass, F.MatButton, v.JsonPipe], encapsulation: 2 }); }
} return r; })(), jt = (() => { class r {
    constructor(t) { this.attributeSerializer = t; }
    handleFile(t) { return u(); }
    handlesType(t) { return !1; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(t) { return u(!1); }
    isDynamic(t) { return !1; }
    isData(t) { return !1; }
    buildDynamicItems(t, i) { return u([]); }
    fetchDynamicData(t, i) { return u(new G); }
    getBindings(t, i) { return u([]); }
    toObject(t) { return u(new Ze(this.attributeSerializer.deserializeAsObject(t))); }
    buildSettings(t) { return this.attributeSerializer.serialize(t, "root").attributes; }
    fromPanes(t) { return t.map(i => new T(this.attributeSerializer.deserialize(i))); }
    stateDefinition(t) { return u({}); }
    editorOptions(t) { return u(new q); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(S.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" }); }
} return r; })(), Va = (() => { class r {
    constructor(t, i, n, a, o) { this.dialogData = t, this.dialogRef = i, this.fb = n, this.attributeSerializer = a, this.handler = o, this.contexts = [], this.contentForm = this.fb.group({ iconName: this.fb.control("", [f.required]), label: this.fb.control(""), category: this.fb.control("", [f.required]) }); }
    ngOnInit() { this.dialogData.pane !== void 0 && this.handler.toObject(this.dialogData.pane.settings).subscribe(t => { this.icon = t, this.contentForm.get("iconName").patchValue(this.icon.iconName), this.contentForm.get("label").patchValue(this.icon.label), this.contentForm.get("category").patchValue(this.icon.category); }); }
    onSubmit() { let t; this.dialogData.paneIndex === void 0 ? (this.dialogData.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: new p("icon"), name: new p(""), label: new p(""), rule: new p(""), settings: new V([]) })), t = this.dialogData.panelFormGroup.get("panes").length - 1) : t = this.dialogData.paneIndex; let i = this.dialogData.panelFormGroup.get("panes").at(t), n = this.contentForm.get("iconName").value, a = this.contentForm.get("label").value, o = this.contentForm.get("category").value, l = new Ze({ iconName: n, label: a, category: o }); i.get("settings").clear(), this.handler.buildSettings(l).map(m => this.attributeSerializer.convertToGroup(m)).forEach(m => i.get("settings").push(m)), this.dialogRef.close(); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject($), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(S.AttributeSerializerService), e.\u0275\u0275directiveInject(jt)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-icon-editor"]], standalone: !1, decls: 26, vars: 2, consts: [[3, "ngSubmit", "formGroup"], ["matInput", "", "formControlName", "iconName"], ["matInput", "", "formControlName", "label"], ["formControlName", "category"], ["value", "decorative"], ["value", "interactive"], ["value", "indicator"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.onSubmit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "div")(3, "mat-form-field")(4, "mat-label"), e.\u0275\u0275text(5, "Icon Name"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(6, "input", 1), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(7, "div")(8, "mat-form-field")(9, "mat-label"), e.\u0275\u0275text(10, "Aria Label"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(11, "input", 2), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(12, "div")(13, "mat-form-field")(14, "mat-label"), e.\u0275\u0275text(15, "Category"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(16, "mat-select", 3)(17, "mat-option", 4), e.\u0275\u0275text(18, "Decorative"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(19, "mat-option", 5), e.\u0275\u0275text(20, "Interactive"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(21, "mat-option", 6), e.\u0275\u0275text(22, "Indicator"), e.\u0275\u0275elementEnd()()()()(), e.\u0275\u0275elementStart(23, "mat-dialog-actions")(24, "button", 7), e.\u0275\u0275text(25, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.contentForm), e.\u0275\u0275advance(24), e.\u0275\u0275property("disabled", !n.contentForm.valid)); }, dependencies: [s.\u0275NgNoValidate, s.DefaultValueAccessor, s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, H.MatOption, F.MatButton, h.MatDialogActions, h.MatDialogContent, b.MatInput, b.MatFormField, b.MatLabel, we.MatSelect], encapsulation: 2 }); }
} return r; })(), Ga = (() => { class r {
    constructor() { this.handler = ee(jt), this.iconName = "", this.label = "", this.hidden = !1, this.settings$ = new M, this.icon$ = new M, this.settingsSub = this.settings$.pipe(mi(t => this.handler.toObject(t)), He(t => { this.icon$.next(t); })).subscribe(), this.iconSub = this.icon$.pipe(He(t => { this.iconName = t.iconName, this.label = t.label, this.hidden = t.category == "decorative"; })).subscribe(); }
    set settings(t) { this.settings$.next(t); }
    static { this.\u0275fac = function (i) { return new (i || r); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-icon-renderer"]], inputs: { settings: "settings" }, standalone: !1, decls: 1, vars: 3, consts: [[3, "aria-hidden", "aria-label", "fontIcon"]], template: function (i, n) { i & 1 && e.\u0275\u0275element(0, "mat-icon", 0), i & 2 && (e.\u0275\u0275ariaProperty("aria-hidden", n.hidden)("aria-label", n.label), e.\u0275\u0275property("fontIcon", n.iconName)); }, dependencies: [xe.MatIcon], encapsulation: 2 }); }
} return r; })(), Ot = (() => { class r {
    constructor(t) { this.attributeSerializer = t; }
    handleFile(t) { return u(); }
    handlesType(t) { return !1; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(t) { return u(!1); }
    isDynamic(t) { return !1; }
    isData(t) { return !1; }
    buildDynamicItems(t, i) { return u([]); }
    fetchDynamicData(t, i) { return u(new G); }
    getBindings(t, i) { return u([]); }
    toObject(t) { return u(new Xe(this.attributeSerializer.deserializeAsObject(t))); }
    buildSettings(t) { return this.attributeSerializer.serialize(t, "root").attributes; }
    fromPanes(t) { return t.map(i => new T(this.attributeSerializer.deserialize(i))); }
    stateDefinition(t) { return u({}); }
    editorOptions(t) { return u(new q); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(S.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" }); }
} return r; })(), Aa = (() => { class r {
    constructor(t, i, n, a, o) { this.dialogData = t, this.dialogRef = i, this.fb = n, this.attributeSerializer = a, this.handler = o, this.contexts = [], this.contentForm = this.fb.group({ text: this.fb.control("", [f.required]), url: this.fb.control("", [f.required]) }); }
    ngOnInit() { this.dialogData.pane !== void 0 && this.handler.toObject(this.dialogData.pane.settings).subscribe(t => { this.link = t, this.contentForm.get("text").patchValue(this.link.text), this.contentForm.get("url").patchValue(this.link.url); }); }
    onSubmit() { let t; this.dialogData.paneIndex === void 0 ? (this.dialogData.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: new p("link"), name: new p(""), label: new p(""), rule: new p(""), settings: new V([]) })), t = this.dialogData.panelFormGroup.get("panes").length - 1) : t = this.dialogData.paneIndex; let i = this.dialogData.panelFormGroup.get("panes").at(t), n = this.contentForm.get("text").value, a = this.contentForm.get("url").value, o = new Xe({ text: n, url: a }); i.get("settings").clear(), this.handler.buildSettings(o).map(d => this.attributeSerializer.convertToGroup(d)).forEach(d => i.get("settings").push(d)), this.dialogRef.close(); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject($), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(S.AttributeSerializerService), e.\u0275\u0275directiveInject(Ot)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-link-editor"]], standalone: !1, decls: 15, vars: 2, consts: [[3, "ngSubmit", "formGroup"], ["matInput", "", "formControlName", "text"], ["matInput", "", "formControlName", "url"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.onSubmit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "div")(3, "mat-form-field")(4, "mat-label"), e.\u0275\u0275text(5, "Link Text"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(6, "input", 1), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(7, "div")(8, "mat-form-field")(9, "mat-label"), e.\u0275\u0275text(10, "Link Url"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(11, "input", 2), e.\u0275\u0275elementEnd()()(), e.\u0275\u0275elementStart(12, "mat-dialog-actions")(13, "button", 3), e.\u0275\u0275text(14, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.contentForm), e.\u0275\u0275advance(13), e.\u0275\u0275property("disabled", !n.contentForm.valid)); }, dependencies: [s.\u0275NgNoValidate, s.DefaultValueAccessor, s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, F.MatButton, h.MatDialogActions, h.MatDialogContent, b.MatInput, b.MatFormField, b.MatLabel], encapsulation: 2 }); }
} return r; })(), za = (() => { class r {
    constructor() { this.handler = ee(Ot), this.text = "", this.settings$ = new M, this.link$ = new M, this.settingsSub = this.settings$.pipe(mi(t => this.handler.toObject(t)), He(t => { this.link$.next(t); })).subscribe(), this.linkSub = this.link$.pipe(He(t => { this.text = t.text, this.route = t.url.indexOf("/") === 0 ? t.url.split("/").map((i, n) => n === 0 ? `/${i}` : i) : void 0, this.href = t.url.indexOf("/") !== 0 ? t.url : void 0; })).subscribe(); }
    set settings(t) { this.settings$.next(t); }
    static { this.\u0275fac = function (i) { return new (i || r); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-link-renderer"]], inputs: { settings: "settings" }, standalone: !1, decls: 2, vars: 2, consts: [[3, "routerLink", 4, "ngIf"], [3, "href", 4, "ngIf"], [3, "routerLink"], [3, "href"]], template: function (i, n) { i & 1 && e.\u0275\u0275template(0, Jr, 2, 2, "a", 0)(1, Kr, 2, 2, "a", 1), i & 2 && (e.\u0275\u0275property("ngIf", n.route), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", n.href)); }, dependencies: [v.NgIf, te.RouterLink], encapsulation: 2 }); }
} return r; })(), kt = (() => { class r {
    constructor(t) { this.attributeSerializer = t; }
    handleFile(t) { return u(); }
    handlesType(t) { return !1; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(t) { return u(!1); }
    isDynamic(t) { return !1; }
    isData(t) { return !1; }
    buildDynamicItems(t, i) { return u([]); }
    fetchDynamicData(t, i) { return u(new G); }
    getBindings(t, i) { return u([]); }
    toObject(t) { return u(new Ye(this.attributeSerializer.deserializeAsObject(t))); }
    buildSettings(t) { return this.attributeSerializer.serialize(t, "root").attributes; }
    fromPanes(t) { return t.map(i => new T(this.attributeSerializer.deserialize(i))); }
    stateDefinition(t) { return u({}); }
    editorOptions(t) { return u(new q); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(S.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" }); }
} return r; })(), Ba = (() => { class r {
    get items() { return this.contentForm.get("items"); }
    constructor(t, i, n, a, o) { this.dialogData = t, this.dialogRef = i, this.fb = n, this.attributeSerializer = a, this.handler = o, this.contentForm = this.fb.group({ iconName: this.fb.control("", [f.required]), label: this.fb.control("", [f.required]), items: this.fb.array([]) }); }
    ngOnInit() { this.dialogData.pane !== void 0 && this.handler.toObject(this.dialogData.pane.settings).subscribe(t => { this.menu = t, t.label && this.contentForm.get("label").patchValue(t.label), t.iconName && this.contentForm.get("iconName").patchValue(t.iconName), t.items && t.items.length > 0 && t.items.forEach(i => this.addItem(i)); }); }
    createItemGroup(t) { return this.fb.group({ iconName: new p(t ? t.iconName : "", f.required), text: new p(t ? t.text : "", f.required), action: new p(t ? t.action : "") }); }
    addItem(t) { this.items.push(this.createItemGroup(t)); }
    removeItem(t) { this.items.removeAt(t); }
    onSubmit() { let t; this.dialogData.paneIndex === void 0 ? (this.dialogData.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: new p("menu"), name: new p(""), label: new p(""), rule: new p(""), settings: new V([]) })), t = this.dialogData.panelFormGroup.get("panes").length - 1) : t = this.dialogData.paneIndex; let i = new Ye({ label: this.contentForm.get("label").value, iconName: this.contentForm.get("iconName").value, items: this.items.controls.map(o => new je({ iconName: o.get("iconName").value, text: o.get("text").value, action: o.get("action").value })) }), n = this.dialogData.panelFormGroup.get("panes").at(t); n.get("settings").clear(), this.handler.buildSettings(i).map(o => this.attributeSerializer.convertToGroup(o)).forEach(o => n.get("settings").push(o)), this.dialogRef.close(); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject($), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(S.AttributeSerializerService), e.\u0275\u0275directiveInject(kt)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-menu-editor"]], standalone: !1, decls: 21, vars: 3, consts: [[3, "ngSubmit", "formGroup"], ["matInput", "", "formControlName", "iconName"], ["matInput", "", "formControlName", "label"], ["formArrayName", "items"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], [3, "formGroupName"], ["matInput", "", "formControlName", "text"], ["matInput", "", "formControlName", "action"], ["mat-icon-button", "", "color", "warn", 3, "click"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.onSubmit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "div")(3, "mat-form-field")(4, "mat-label"), e.\u0275\u0275text(5, "Icon Name"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(6, "input", 1), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(7, "div")(8, "mat-form-field")(9, "mat-label"), e.\u0275\u0275text(10, "Aria Label"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(11, "input", 2), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(12, "h3"), e.\u0275\u0275text(13, "Menu Items"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(14, "div", 3), e.\u0275\u0275template(15, Yr, 16, 1, "div", 4), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(16, "button", 5), e.\u0275\u0275listener("click", function () { return n.addItem(); }), e.\u0275\u0275text(17, "Add Item"), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(18, "mat-dialog-actions")(19, "button", 6), e.\u0275\u0275text(20, " Save "), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.contentForm), e.\u0275\u0275advance(15), e.\u0275\u0275property("ngForOf", n.items.controls), e.\u0275\u0275advance(4), e.\u0275\u0275property("disabled", !n.contentForm.valid)); }, dependencies: [v.NgForOf, s.\u0275NgNoValidate, s.DefaultValueAccessor, s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, s.FormGroupName, s.FormArrayName, F.MatButton, F.MatIconButton, h.MatDialogActions, h.MatDialogContent, xe.MatIcon, b.MatInput, b.MatFormField, b.MatLabel], encapsulation: 2 }); }
} return r; })(), La = (() => { class r {
    constructor() { this.handler = ee(kt), this.settings$ = new M, this.menu$ = new M, this.settingsSub = this.settings$.pipe(y(t => this.handler.toObject(t)), P(t => { this.menu$.next(t); })).subscribe(), this.menuSub = this.menu$.pipe(P(t => { this.label = t.label, this.iconName = t.iconName, this.items = t.items ? t.items.map(i => new je(i)) : []; })).subscribe(); }
    set settings(t) { this.settings$.next(t); }
    static { this.\u0275fac = function (i) { return new (i || r); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-menu-renderer"]], inputs: { settings: "settings" }, standalone: !1, decls: 6, vars: 4, consts: [["menu", "matMenu"], ["matIconButton", "", 3, "matMenuTriggerFor", "aria-label"], ["mat-menu-item", "", 3, "ngClass", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "ngClass"], [3, "ngClass"]], template: function (i, n) { if (i & 1 && (e.\u0275\u0275elementStart(0, "button", 1)(1, "mat-icon"), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(3, "mat-menu", null, 0), e.\u0275\u0275template(5, Xr, 5, 5, "button", 2), e.\u0275\u0275elementEnd()), i & 2) {
            let a = e.\u0275\u0275reference(4);
            e.\u0275\u0275property("matMenuTriggerFor", a), e.\u0275\u0275ariaProperty("aria-label", n.label), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(n.iconName), e.\u0275\u0275advance(3), e.\u0275\u0275property("ngForOf", n.items);
        } }, dependencies: [v.NgClass, v.NgForOf, F.MatIconButton, xe.MatIcon, U.MatMenu, U.MatMenuItem, U.MatMenuTrigger], encapsulation: 2 }); }
} return r; })(), qa = (() => { let r = class Pt {
    constructor() { this.serializer = ee(en), this.injector = ee(Ni), this.panes = [], this.originPanes = [], this.originMappings = [], this.displayType = "", this.contexts = [], this.resolvedContext = {}, this.indexPosition = 0, this.ancestory = [], this.filteredCss = { css: {}, classes: {} }, this.filteredListeners = [], this.sidebarWidth = 200, this.sidenavMode = "side", this.sidenavPosition = "start", this.sidenavOpened = !0; }
    loadSettings() { if (!this.panel?.settings)
        return; let t = this.serializer.deserializeAsObject(this.panel.settings), i = new Oe(t); this.sidebarWidth = i.width ?? this.sidebarWidth, this.sidenavMode = i.mode, this.sidenavPosition = i.position, this.sidenavOpened = i.opened; }
    toggle() { console.log("toggling sidenav from", this.sidenavOpened), this.sidenavOpened = !this.sidenavOpened; }
    open() { this.sidenavOpened = !0; }
    close() { this.sidenavOpened = !1; }
    static { this.\u0275fac = function (i) { return new (i || Pt); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: Pt, selectors: [["classifieds-ui-sidenav-panel-renderer"]], viewQuery: function (i, n) { if (i & 1 && e.\u0275\u0275viewQuery(jn, 5), i & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.matSidenav = a.first);
        } }, inputs: { panel: "panel", panes: "panes", originPanes: "originPanes", originMappings: "originMappings", displayType: "displayType", contexts: "contexts", resolvedContext: "resolvedContext", indexPosition: "indexPosition", ancestory: "ancestory", filteredCss: "filteredCss", filteredListeners: "filteredListeners" }, standalone: !1, decls: 5, vars: 7, consts: [[3, "mode", "position", "opened"], [4, "ngIf"], [3, "pluginName", "settings", "name", "label", "originPane", "contexts", "displayType", "resolvedContext", "indexPosition", "css", "listeners", "panes", "originPanes", "ancestory"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "mat-sidenav-container")(1, "mat-sidenav", 0), e.\u0275\u0275template(2, Zr, 2, 14, "ng-container", 1), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(3, "mat-sidenav-content"), e.\u0275\u0275template(4, ea, 2, 14, "ng-container", 1), e.\u0275\u0275elementEnd()()), i & 2 && (e.\u0275\u0275advance(), e.\u0275\u0275styleProp("width", n.sidebarWidth, "px"), e.\u0275\u0275property("mode", n.sidenavMode)("position", n.sidenavPosition)("opened", n.sidenavOpened), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", n.panes[0]), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngIf", n.panes[1])); }, dependencies: [v.NgIf, Fe.MatSidenav, Fe.MatSidenavContainer, Fe.MatSidenavContent, mt.RenderPaneComponent], encapsulation: 2 }); }
}; return r = zt([Yi("sidenav")], r), r; })(), Ua = (() => { class r {
    constructor(t, i, n, a) { this.data = t, this.dialogRef = i, this.fb = n, this.attributeSerializer = a, this.contentForm = new Vi({ width: new Ae(null), mode: new Ae("side"), position: new Ae("start"), opened: new Ae(!0) }); }
    ngOnInit() { let t = this.data.panelFormGroup.get("settings").value; this.sidenav = this.toObject(t), this.contentForm.patchValue(this.sidenav); }
    toObject(t) { let i = this.attributeSerializer.deserializeAsObject(t); return new Oe(i); }
    buildSettings(t) { return this.attributeSerializer.serialize(t, "root").attributes; }
    onSubmit() { let t = this.data.panelFormGroup.get("settings"); t.clear(); let i = new Oe(this.contentForm.value); this.buildSettings(i).forEach(n => { t.push(this.attributeSerializer.convertToGroup(n)); }), this.dialogRef.close(); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject($), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(S.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["druid-sidenav-panel-editor"]], standalone: !1, decls: 35, vars: 1, consts: [[3, "ngSubmit", "formGroup"], ["matInput", "", "type", "number", "formControlName", "width"], ["formControlName", "mode"], ["value", "side"], ["value", "push"], ["value", "over"], ["formControlName", "position"], ["value", "start"], ["value", "end"], ["formControlName", "opened"], ["mat-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", "type", "submit"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.onSubmit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "div")(3, "mat-form-field")(4, "mat-label"), e.\u0275\u0275text(5, "Width (px)"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(6, "input", 1), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(7, "div")(8, "mat-form-field")(9, "mat-label"), e.\u0275\u0275text(10, "Mode"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(11, "mat-select", 2)(12, "mat-option", 3), e.\u0275\u0275text(13, "Side"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(14, "mat-option", 4), e.\u0275\u0275text(15, "Push"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(16, "mat-option", 5), e.\u0275\u0275text(17, "Over"), e.\u0275\u0275elementEnd()()()(), e.\u0275\u0275elementStart(18, "div")(19, "mat-form-field")(20, "mat-label"), e.\u0275\u0275text(21, "Position"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(22, "mat-select", 6)(23, "mat-option", 7), e.\u0275\u0275text(24, "Start"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(25, "mat-option", 8), e.\u0275\u0275text(26, "End"), e.\u0275\u0275elementEnd()()()(), e.\u0275\u0275elementStart(27, "div")(28, "mat-slide-toggle", 9), e.\u0275\u0275text(29, " Open by Default "), e.\u0275\u0275elementEnd()()(), e.\u0275\u0275elementStart(30, "mat-dialog-actions")(31, "button", 10), e.\u0275\u0275text(32, "Cancel"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(33, "button", 11), e.\u0275\u0275text(34, " Save "), e.\u0275\u0275elementEnd()()()), i & 2 && e.\u0275\u0275property("formGroup", n.contentForm); }, dependencies: [s.\u0275NgNoValidate, s.DefaultValueAccessor, s.NumberValueAccessor, s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, H.MatOption, F.MatButton, h.MatDialogClose, h.MatDialogActions, h.MatDialogContent, b.MatInput, b.MatFormField, b.MatLabel, we.MatSelect, Si.MatSlideToggle], encapsulation: 2 }); }
} return r; })(), Vt = (() => { class r {
    constructor(t) { this.attributeSerializer = t; }
    handleFile(t) { return u(); }
    handlesType(t) { return !1; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(t) { return u(!1); }
    isDynamic(t) { return !1; }
    isData(t) { return !1; }
    buildDynamicItems(t, i) { return u([]); }
    fetchDynamicData(t, i) { return u(new G); }
    getBindings(t, i) { return u([]); }
    toObject(t) { return u(new et(this.attributeSerializer.deserializeAsObject(t))); }
    buildSettings(t) { return this.attributeSerializer.serialize(t, "root").attributes; }
    fromPanes(t) { return t.map(i => new T(this.attributeSerializer.deserialize(i))); }
    stateDefinition(t) { return u({}); }
    editorOptions(t) { return u(new q); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(S.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" }); }
} return r; })(), Ha = (() => { class r {
    constructor(t, i, n, a, o) { this.dialogData = t, this.dialogRef = i, this.fb = n, this.attributeSerializer = a, this.handler = o, this.contentForm = this.fb.group({ iconName: this.fb.control("", f.required), ariaLabel: this.fb.control("", f.required), action: this.fb.control("") }); }
    ngOnInit() { this.dialogData.pane !== void 0 && this.handler.toObject(this.dialogData.pane.settings).subscribe(t => { this.iconButton = t, this.contentForm.patchValue({ iconName: t.iconName, ariaLabel: t.ariaLabel, action: t.action }); }); }
    onSubmit() { let t = new et({ iconName: this.contentForm.get("iconName").value, ariaLabel: this.contentForm.get("ariaLabel").value, action: this.contentForm.get("action").value }), i = this.dialogData.paneIndex, n = this.dialogData.panelFormGroup.get("panes"); i === void 0 && (n.push(this.fb.group({ contentPlugin: new p("icon_button"), name: new p(""), label: new p(""), rule: new p(""), settings: this.fb.array([]) })), i = n.length - 1); let o = n.at(i).get("settings"); o.clear(), this.handler.buildSettings(t).map(d => this.attributeSerializer.convertToGroup(d)).forEach(d => o.push(d)), this.dialogRef.close(); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject($), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(S.AttributeSerializerService), e.\u0275\u0275directiveInject(Vt)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-icon-button-editor"]], standalone: !1, decls: 17, vars: 2, consts: [[3, "ngSubmit", "formGroup"], ["matInput", "", "formControlName", "iconName"], ["matInput", "", "formControlName", "ariaLabel"], ["matInput", "", "formControlName", "action"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.onSubmit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "mat-form-field")(3, "mat-label"), e.\u0275\u0275text(4, "Icon Name"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(5, "input", 1), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(6, "mat-form-field")(7, "mat-label"), e.\u0275\u0275text(8, "Aria Label"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(9, "input", 2), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(10, "mat-form-field")(11, "mat-label"), e.\u0275\u0275text(12, "Action (CSS class)"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(13, "input", 3), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(14, "mat-dialog-actions")(15, "button", 4), e.\u0275\u0275text(16, " Save "), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.contentForm), e.\u0275\u0275advance(15), e.\u0275\u0275property("disabled", !n.contentForm.valid)); }, dependencies: [s.\u0275NgNoValidate, s.DefaultValueAccessor, s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, F.MatButton, h.MatDialogActions, h.MatDialogContent, b.MatInput, b.MatFormField, b.MatLabel], encapsulation: 2 }); }
} return r; })(), Qa = (() => { class r {
    constructor() { this.handler = ee(Vt), this.settings$ = new M, this.iconButton$ = new M, this.settingsSub = this.settings$.pipe(y(t => this.handler.toObject(t)), P(t => this.iconButton$.next(t))).subscribe(), this.buttonSub = this.iconButton$.pipe(P(t => { this.iconName = t.iconName, this.ariaLabel = t.ariaLabel, this.action = t.action; })).subscribe(); }
    set settings(t) { this.settings$.next(t); }
    static { this.\u0275fac = function (i) { return new (i || r); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-icon-button-renderer"]], inputs: { settings: "settings" }, standalone: !1, decls: 3, vars: 4, consts: [["mat-icon-button", "", 3, "ngClass"], [3, "ngClass"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "button", 0)(1, "mat-icon", 1), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()()), i & 2 && (e.\u0275\u0275property("ngClass", n.action ? "action-" + n.action : null), e.\u0275\u0275attribute("aria-label", n.ariaLabel), e.\u0275\u0275advance(), e.\u0275\u0275property("ngClass", n.action ? "action-" + n.action : null), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(n.iconName)); }, dependencies: [v.NgClass, F.MatIconButton, xe.MatIcon], encapsulation: 2 }); }
} return r; })(), Wa = r => new K({ id: "snippet", title: "Snippet", selectionComponent: void 0, editorComponent: va, renderComponent: Fi, handler: r }), Ja = r => new K({ id: "attribute", title: "Attribute", selectionComponent: ya, editorComponent: Ca, renderComponent: _a, handler: r }), Ka = r => new K({ id: "media", title: "Media", selectionComponent: void 0, editorComponent: Sa, renderComponent: xa, handler: r }), Ya = r => new K({ id: "rest", title: "REST", selectionComponent: void 0, editorComponent: Pa, renderComponent: Ia, handler: r }), Xa = r => new K({ id: "slice", title: "Slice", selectionComponent: void 0, editorComponent: $a, renderComponent: void 0, handler: r }), Za = r => new K({ id: "button", title: "Button", selectionComponent: void 0, editorComponent: Oa, renderComponent: ka, handler: r }), eo = r => new K({ id: "icon", title: "Icon", selectionComponent: void 0, editorComponent: Va, renderComponent: Ga, handler: r }), to = r => new K({ id: "link", title: "Link", selectionComponent: void 0, editorComponent: Aa, renderComponent: za, handler: r }), io = r => new K({ id: "menu", title: "Menu", selectionComponent: void 0, editorComponent: Ba, renderComponent: La, handler: r }), no = r => new K({ id: "icon_button", title: "Icon Button", selectionComponent: void 0, editorComponent: Ha, renderComponent: Qa, handler: r }), ro = r => { let c = { path: "" }; return new ke({ id: "page", name: "page", title: "Page", global: !0, group: "pages", baseObject: c, resolver: r }); }, ao = r => { let c = { dataset: new G }; return new ke({ id: "rest", name: "rest", title: "Rest", baseObject: c, resolver: r, editorComponent: Ea }); }, oo = r => { let c = { dataset: new G }; return new ke({ id: "form", name: "form", title: "Form", baseObject: c, resolver: r }); }, so = r => { let c = new Ne({ state: new le }); return new ke({ id: "panestate", name: "panestate", title: "Pane State", internal: !0, baseObject: c, resolver: r }); }, lo = r => { let c = new Ne({ state: new le }); return new ke({ id: "pagestate", name: "pagestate", title: "Page State", internal: !0, baseObject: c, resolver: r, editorComponent: Ra }); }, co = r => new Qe({ id: "tabs", name: "tabs", title: "Tabs", handler: r, editorComponent: Ta, renderComponent: Da }), po = () => new Qe({ id: "sidenav", name: "sidenav", title: "Sidenav", editorComponent: Ua, renderComponent: qa }), uo = (r, c, t) => new In({ id: "form", title: "Form", usedContexts: ({ param: i, metadata: n }) => u([`form__${i.mapping.value.substr(0, i.mapping.value.indexOf("."))}`]), evalParam: ({ param: i, metadata: n }) => { let a = i.mapping.value.substr(0, i.mapping.value.indexOf(".")), o = i.mapping.value.substr(i.mapping.value.indexOf(".") + 1); return console.log(`form: ${a} || ${o}`), t.getForm$(a).pipe(J(1), g(l => l || new We), g(l => c.serializeForm(l)), g(l => r.generateGenericTokens(l)), P(l => console.log(l)), g(l => l.has(`.${o}`) ? r.replaceTokens(`[.${o}]`, l) : ""), P(l => { console.log("form value"), console.log(l); })); } }), mo = r => new cn({ id: "form", title: "Form", resolve: () => r.getFormNames$.pipe(y(c => c.length === 0 ? u([]) : ce(c.map(t => r.getForm$(t).pipe(g(i => [t, i]))))), g(c => c.reduce((t, [i, n]) => x(C({}, t), { [`form__${i}`]: n }), {}))), resolveSingle: () => r.getFormNames$.pipe(y(c => gi(...c.map(t => r.getForm$(t).pipe(g(i => [`form__${t}`, i])))))) }), go = r => new Tn({ id: "pages_form", title: "Pages Form", build: () => { Dn.prototype.serializePageForm = c => new Promise(t => { t(r.serializeForm(c)); }); } }), fo = (r, c) => new Nn({ id: "panelpageform_serialize", title: "Panelpageform Serialize", create: ({ object: t }) => u({ success: !1, entity: c.serializeForm(new We(t)) }), read: ({}) => u({ success: !1 }), update: ({}) => u({ success: !1 }), delete: ({}) => u({ success: !1 }) }), ho = (r, c, t) => new bn({ id: "form", title: "Form", editor: ja, fetch: ({ settings: i }) => u(new G).pipe(g(() => new _t(r.deserializeAsObject(i))), y(n => c.getForm$(n.name).pipe(g(a => [n, a || new We]), Et([n, new We]), J(1))), g(([n, a]) => [n, t.serializeForm(a)]), g(([n, a]) => new G({ results: pt.JSONPath({ path: `$.${n.field}.*`, json: a }) }))), getBindings: ({ settings: i, metadata: n }) => u([]).pipe(g(() => new _t(r.deserializeAsObject(i))), g(a => [new ot({ id: `form__${a.name}`, type: "context" })])) }), vo = r => c => { if (("/" + c.map(t => t.path).join("/")).indexOf(r.path) === 0) {
    console.log("matcher matched for", r.id, r.path);
    let t = r.path.substr(1).split("/").length;
    return { consumed: c, posParams: c.reduce((i, n, a) => a === 0 ? x(C({}, i), { panelPageId: new Ct(r.id, {}) }) : a > t - 1 ? x(C({}, i), { [`arg${a - t}`]: new Ct(n.path, {}) }) : C({}, i), {}) };
}
else
    return null; }, bo = r => c => { if (("/" + c.map(t => t.path).join("/")).indexOf(r.path) === 0 && c.map(t => t.path).join("/").indexOf("/manage") > -1) {
    let t = r.path.substr(1).split("/").length;
    return { consumed: c, posParams: c.reduce((i, n, a) => a === 0 ? x(C({}, i), { panelPageId: new Ct(r.id, {}) }) : C({}, i), {}) };
}
else
    return null; };
var yo = (() => { class r {
    constructor(t, i, n, a) { this.tokenizerService = t, this.panelResolverService = i, this.styleResolverService = n, this.paneDatasource = a, this.settings = [], this.panes = [], this.originMappings = [], this.resolvedContext = {}; }
    ngOnInit() { this.paneDatasource.pageChange$.pipe(fn(1), y(t => this.panelResolverService.resolvePanes({ panes: this.originPanes.map(i => new T(x(C({}, i), { metadata: new Map([...i.metadata ? i.metadata : [], ["page", t], ["limit", this.paneDatasource.pageSize]]) }))), contexts: this.contexts, resolvedContext: this.resolvedContext })), y(({ resolvedPanes: t, originMappings: i }) => this.styleResolverService.alterResolvedPanes({ panel: this.panel, resolvedPanes: t, originMappings: i }))).subscribe(({ resolvedPanes: t, originMappings: i }) => { this.originMappings = i, this.paneDatasource.panes = t; }), this.paneDatasource.panes = this.panes, this.trackByTpl = "[._root.id]"; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(z.TokenizerService), e.\u0275\u0275directiveInject(_.PanelResolverService), e.\u0275\u0275directiveInject(_.StyleResolverService), e.\u0275\u0275directiveInject(_.PaneDatasourceService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-virtual-list-panel-renderer"]], inputs: { settings: "settings", panes: "panes", originPanes: "originPanes", originMappings: "originMappings", contexts: "contexts", resolvedContext: "resolvedContext", panel: "panel" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([yi])], decls: 2, vars: 2, consts: [[1, "panes-viewport", 3, "itemSize"], ["class", "pane-item", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "pane-item"], [3, "pluginName", "settings", "contexts", "resolvedContext"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "cdk-virtual-scroll-viewport", 0), e.\u0275\u0275template(1, ta, 2, 4, "div", 1), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("itemSize", 75), e.\u0275\u0275advance(), e.\u0275\u0275property("cdkVirtualForOf", n.paneDatasource)); }, dependencies: [Ie.CdkFixedSizeVirtualScroll, Ie.CdkVirtualForOf, Ie.CdkVirtualScrollViewport, mt.RenderPaneComponent], styles: ["[_nghost-%COMP%]{position:relative}.panes-viewport[_ngcontent-%COMP%]{height:100%;width:100%}"] }); }
} return r; })(), Co = (() => { class r {
    constructor(t) { this.router = t; }
    ngOnInit() { }
    onClick() { this.router.navigateByUrl(this.href); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(te.Router)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-page-router-link"]], inputs: { href: "href", text: "text" }, standalone: !1, decls: 2, vars: 1, consts: [[3, "click"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "a", 0), e.\u0275\u0275listener("click", function () { return n.onClick(); }), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(n.text)); }, styles: ["[_nghost-%COMP%]:hover{cursor:pointer}"] }); }
} return r; })(), $s = (() => { class r {
    constructor(t, i, n) { this.routerStore = t, this.router = i, this.panelPageListItemsService = n.getEntityCollectionService("PanelPageListItem"); }
    ngOnInit() { }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(he.Store), e.\u0275\u0275directiveInject(te.Router), e.\u0275\u0275directiveInject(j.EntityServices)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-catch-all-router"]], standalone: !1, decls: 2, vars: 0, template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "p"), e.\u0275\u0275text(1, "Page Not Found"), e.\u0275\u0275elementEnd()); }, encapsulation: 2 }); }
} return r; })(), _o = new ji("PagesSettings"), ii = class {
    constructor(c) { this.disableRouting = !1, c && (this.disableRouting = c.disableRouting); }
}, So = (() => { class r {
    constructor(t, i, n, a) { this.siteName = t, this.pagesSettings = i, this.router = n, this.routesLoaded = !1, this.panelPageListItemsService = a.getEntityCollectionService("PanelPageListItem"); }
    canActivate(t, i) { return this.pagesSettings.disableRouting ? new Promise(n => n(!0)) : new Promise(n => { let a = i.url; a.indexOf("?") !== -1 && (a = i.url.substr(0, a.indexOf("?"))); let o = "path=" + a.substr(1).split("/").reduce((l, d, m) => [...l, m === 0 ? `/${d}` : `${l[m - 1]}/${d}`], []).map(l => this.encodePathComponent(l)).join("&path=") + `&site=${encodeURIComponent(`{"term":{"site.keyword":{"value":"${this.siteName}"}}}`)}`; setTimeout(() => { }), lt([De(() => !this.routesLoaded, this.panelPageListItemsService.getWithQuery(`site=${encodeURIComponent(`{"term":{"site.keyword":{"value":"${this.siteName}"}}}`)}&path={"wildcard":{"path.keyword":{"value":"*"}}}`).pipe(P(() => console.log("loaded page list items")), g(l => l.filter(d => d.path !== void 0 && d.path !== "")), g(l => l.map(d => new _e(d)).sort((d, m) => d.path.split("/").length === m.path.split("/").length ? d.path.split("/")[d.path.split("/").length - 1] > m.path.split("/")[m.path.split("/").length - 1] ? -1 : 1 : d.path.split("/").length > m.path.split("/").length ? -1 : 1)), P(l => l.sort((d, m) => d.path.length > m.path.length ? 1 : -1)), P(l => { let d = this.router.config; l.forEach(m => { d.unshift({ matcher: bo(m), component: Ii }), d.unshift({ matcher: vo(m), component: $n, data: { panelPageListItem: m } }), console.log(`panels matcher: ${m.path}`); }), this.routesLoaded = !0; }), g(() => [])), u([])), this.panelPageListItemsService.getWithQuery(o).pipe(hn(l => u([])), P(() => console.log("loaded specific matched")), g(l => l.reduce((d, m) => d === void 0 || d.path.split("/").length < m.path.split("/").length ? m : d, void 0)), g(l => { let d = i.url.substr(1).split("/").slice(l.path.split("/").length - 1).join("/"); return [l, d]; }))]).pipe(g(([l, [d, m]]) => [d, m])).subscribe(([l, d]) => { let m = `${l.path}${d === "" ? "" : `/${d}`}?${Kt.stringify(t.queryParams)}`, w = this.router.parseUrl(m); console.log(`panels garud navigate: ${l.path}${d === "" ? "" : `/${d}`}?${Kt.stringify(t.queryParams)}`), n(w); }); }); }
    encodePathComponent(t) { return `{"term":{"path.keyword":{"value":"${t}"}}}`; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(rt), e.\u0275\u0275inject(_o), e.\u0275\u0275inject(te.Router), e.\u0275\u0275inject(j.EntityServices)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), ni = (() => { class r {
    constructor(t) { this.pageBuilderFacade = t; }
    resolve(t, i) { return this.pageBuilderFacade.getPageInfo$; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(_.PageBuilderFacade)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), ri = (() => { class r {
    constructor(t, i, n, a) { this.pageBuilderFacade = t, this.store = i, this.urlGeneratorService = n, this.routerStore = a; }
    resolve(t, i) { let n = new me(i); return (n.params && Array.isArray(n.params) && n.params.length > 0 ? this.changePipeline(n.params) : u([])).pipe(y(() => n.params && Array.isArray(n.params) && n.params.length > 0 ? this.rebuildParams(n.params) : u([])), g(a => [a, new Map([["tag", Y()]])]), y(([a, o]) => this.urlGeneratorService.getUrl(n.url, a, o).pipe(g(l => [l, o]))), y(([a, o]) => (this.pageBuilderFacade.loadRestData(`${o.get("tag")}`, new me(x(C({}, n), { url: a }))), this.store.pipe(ge(Le(`${o.get("tag")}`)), N(l => l !== void 0), g(l => l.results), J(1))))); }
    changePipeline(t) { let i = t.reduce((n, a) => { switch (a.mapping.type) {
        case "route": return [...n, this.routeArgChange(a.mapping.value)];
        case "querystring": return [...n, this.queryStringChange(a.mapping.value)];
        case "form": return [...n, this.formChange(a.mapping.value)];
        default: return [...n];
    } }, []); return gi(...i); }
    routeArgChange(t) { return this.pageBuilderFacade.getPageInfo$.pipe(g(() => { })); }
    queryStringChange(t) { return new M; }
    formChange(t) { let [i, n] = t.split(".", 2); return this.pageBuilderFacade.getForm$(i).pipe(P(() => console.log("form change")), g(() => { })); }
    rebuildParams(t) { return this.pageBuilderFacade.getPageInfo$.pipe(g(i => i ? t : this.testParams(t))); }
    testParams(t) { let i = [], n = t.length; for (let a = 0; a < n; a++)
        t[a].mapping.type === "route" ? i.push(new St(x(C({}, t[a]), { mapping: { type: "static", value: t[a].mapping.testValue, context: void 0, testValue: void 0 } }))) : i.push(new St(t[a])); return i; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(_.PageBuilderFacade), e.\u0275\u0275inject(he.Store), e.\u0275\u0275inject(Tt.UrlGeneratorService), e.\u0275\u0275inject(he.Store)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), ai = (() => { class r {
    constructor(t) { this.pageBuilderFacade = t; }
    resolve(t, i) { return this.pageBuilderFacade.getForm$(i); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(_.PageBuilderFacade)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), xo = (() => { class r extends Cn {
    get displayedColumns() { let t = this.panes.findIndex(i => i.contexts.findIndex(n => n.name === "_root") > -1); return t > -1 ? Object.keys(this.panes[t].contexts.find(i => i.name === "_root").data) : []; }
    constructor(t, i) { super(), this.tokenizerService = t, this.paneDatasource = i, this.trackByMapping = (n, a) => this.tokenizerService.replaceTokens(this.trackByTpl, this.tokenizerService.generateGenericTokens(a.contexts[0].data)); }
    ngOnInit() { console.log(this.panes), this.paneDatasource.panes = this.panes; }
    rowData(t, i) { return console.log(`name: ${t}`), `${i.contexts.find(n => n.name === "_root").data[t]}`; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(z.TokenizerService), e.\u0275\u0275directiveInject(_.PaneDatasourceService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["lib-table-panel-renderer"]], standalone: !1, features: [e.\u0275\u0275ProvidersFeature([yi]), e.\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 4, consts: [["mat-table", "", "matSort", "", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "table", 0), e.\u0275\u0275template(1, ra, 3, 1, "ng-container", 1)(2, aa, 1, 0, "tr", 2)(3, oa, 1, 0, "tr", 3), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("dataSource", n.paneDatasource), e.\u0275\u0275advance(), e.\u0275\u0275property("ngForOf", n.displayedColumns), e.\u0275\u0275advance(), e.\u0275\u0275property("matHeaderRowDef", n.displayedColumns), e.\u0275\u0275advance(), e.\u0275\u0275property("matRowDefColumns", n.displayedColumns)); }, dependencies: [v.NgForOf, ft.MatSort, ft.MatSortHeader, E.MatTable, E.MatHeaderCellDef, E.MatHeaderRowDef, E.MatColumnDef, E.MatCellDef, E.MatRowDef, E.MatHeaderCell, E.MatCell, E.MatHeaderRow, E.MatRow], encapsulation: 2 }); }
} return r; })(), wo = (() => { class r {
    constructor(t) { this.attributeSerializer = t; }
    handleFile(t) { return u(); }
    handlesType(t) { return !1; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(t) { return u(!1); }
    isDynamic(t) { return !1; }
    isData(t) { return !1; }
    buildDynamicItems(t, i) { return u([]); }
    fetchDynamicData(t, i) { return u(new G); }
    getBindings(t, i) { return u([]); }
    toObject(t) { return u(this.attributeSerializer.deserializeAsObject(t)); }
    buildSettings(t) { return this.attributeSerializer.serialize(t, "root").attributes; }
    fromPanes(t) { return t.map(i => new T(this.attributeSerializer.deserialize(i))); }
    wrapPanel(t) { return new dt({ stylePlugin: void 0, settings: [], panes: t, columnSetting: new A }); }
    stateDefinition(t) { return u({}); }
    editorOptions(t) { return u(new q); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(S.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" }); }
} return r; })(), yt = (() => { class r {
    constructor(t, i, n, a) { this.panelHandler = t, this.attributeSerializer = i, this.panelsLoaderService = n, this.panelsSelectorService = a; }
    alterResolvedPanes({ settings: t, resolvedPanes: i, originMappings: n }) { let a = this.attributeSerializer.deserialize(new le({ name: "", displayName: "", computedValue: "", type: ae.Complex, value: "", intValue: 0, attributes: t })), o = a && a.labels !== void 0 && Array.isArray(a.labels) ? a.labels.map(d => new Ht(d.mapping)) : [], l = []; if (o.length === 0)
        return u({ resolvedPanes: i, originMappings: n }); return i.length !== o.length ? l = i.map((d, m) => new Ht(x(C({}, m < o.length ? o[m] : o[o.length - 1]), { pane: m }))).map(d => this.flattenSelector(d)) : l = o.map(d => this.flattenSelector(d)), lt(i.map((d, m) => this.panelsLoaderService.reducePanes([], d, 0)[0])).pipe(g(d => d.reduce((m, [w, I]) => [...m, I], [])), g(d => { let m = l.map(D => this.selectWithTarget(D)), w = l.map(D => this.selectWithoutTarget(D)), I = m.map((D, k) => this.panelsSelectorService.rebuildPage(d[l[k][0]], D.slice(1))), O = w.map((D, k) => this.panelsSelectorService.rebuildPage(d[l[k][0]], D.slice(1))), L = [], ne = i.length; for (let D = 0; D < ne; D++)
        L.push(new T(x(C({}, i[D]), { settings: this.panelHandler.buildSettings(I[D]) }))), L.push(new T(x(C({}, i[D]), { settings: this.panelHandler.buildSettings(O[D]) }))); return { resolvedPanes: L, originMappings: n }; })); return console.log("TabsStyleHandler::alterResolvedPanes"), console.log(i), console.log(n), u({ resolvedPanes: i, originMappings: n }); }
    stateDefinition(t) { return u({}); }
    flattenSelector(t) { let i = []; return t.panel !== void 0 && t.panel !== null && i.push(t.panel), t.pane !== void 0 && t.pane !== null && i.push(t.pane), t.nested !== void 0 && t.nested !== null && typeof t.nested == "object" && this.flattenSelector(t.nested).forEach(n => i.push(n)), i; }
    selectWithTarget(t) { return t.map(i => i + 1); }
    selectWithoutTarget(t) { return t.map((i, n) => n === t.length - 1 ? (i + 1) * -1 : 0); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(wo), e.\u0275\u0275inject(S.AttributeSerializerService), e.\u0275\u0275inject(_.PanelsLoaderService), e.\u0275\u0275inject(_.PanelsSelectorService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), oi = (() => { class r {
    get emptyPaneState() { return new Ne({ state: this.attributeSerializer.serialize({ displayAssociatedPane: "" }, "root") }); }
    get entities$() { return this.entityServices.getEntityCollectionService("PanelPageState").entities$.pipe(P(t => { console.log("entities in store"), console.log(t); })); }
    get panelPage$() { return ce([this.pageBuilderFacade.getPageInfo$, this.entityServices.getEntityCollectionService("PanelPage").entities$]).pipe(g(([t, i]) => t && t.id !== void 0 && t.id !== "" && t.id !== null && i.findIndex(n => n.id === t.id) !== -1 ? i.find(n => n.id === t.id) : void 0)); }
    get fakePageInfo() { return new bi({ id: "948d6e7b-12ab-11ec-8ecd-661fdd19e6df", path: "", realPath: "", args: new Map }); }
    constructor(t, i, n, a) { this.entityServices = t, this.pageBuilderFacade = i, this.panelStateConverterService = n, this.attributeSerializer = a, this.resolverCache$ = new Map; }
    resolve(t, i) { let n = i && i.selectionMethod && i.selectionMethod.length !== 0 && i.id && i.id !== null && i.id !== "" ? `ps[id=${i.id}]${i.selectionMethod.map(a => `${a}`).join("")}` : void 0; if (n && this.resolverCache$.has(n))
        return this.resolverCache$.get(n); {
        let a = this.resolve$(t, i);
        return n && this.resolverCache$.set(n, a), a;
    } }
    resolve$(t, i) { return ce([this.panelPage$, this.entities$]).pipe(g(([n, a]) => [n, n && a.findIndex(o => o.id === n.id) !== -1 ? a.find(o => o.id === n.id) : new Qt]), y(([n, a]) => this.pageBuilderFacade.getSelectionPath$.pipe(g(o => i && i.selectionPath ? i.selectionPath : o), P(o => o.join(",")), g(o => o.map((l, d) => `${(d + 1) % 2 === 0 ? "panes" : (d === 0 ? "" : "nestedPage.") + "panels"}[${l}]`)), g(o => o.length === 0 ? void 0 : "$." + o.join(".")), g(o => [n, a, o]))), P(([n, a, o]) => { console.log("page state context resolver"), console.log(n), console.log("query: " + o); }), y(([n, a, o]) => De(() => !!n && !a, this.panelStateConverterService.convertPageToState(n).pipe(g(l => new Qt(x(C({}, l), { panels: l.panels.map(d => new _n(x(C({}, d), { panes: d.panes.map(m => new Ne(x(C({}, m), { state: this.attributeSerializer.serialize({ displayAssociatedPane: "y" }, "root") }))) }))) }))), g(l => [l, o])), u([a, o]))), P(([n, a]) => { console.log("rebuilt state from realtime page"), console.log(n); }), g(([n, a]) => a ? pt.JSONPath({ path: a, json: n }) : this.emptyPaneState), g(n => n && Array.isArray(n) && n.length !== 0 ? n[0] : this.emptyPaneState), P(n => { console.log("json path match"), console.log(n); }), g(n => this.attributeSerializer.deserializeAsObject(n.state)), P(n => { console.log("final state"), console.log(n); })); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(j.EntityServices), e.\u0275\u0275inject(_.PageBuilderFacade), e.\u0275\u0275inject(_.PanelStateConverterService), e.\u0275\u0275inject(S.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })();
var Po = [{ path: "pages", children: [{ path: "create-panel-page", component: ba }, { path: "panelpage/:panelPageId/manage", component: Ii }] }], Es = (() => { class r {
    constructor(t, i, n, a, o, l, d, m, w, I, O, L, ne, D, k, Me, Ge, de, Gt, Fo, Io, Mo, Mi, $o, Eo, $i, Ei, Ti, To) { l.registerMetadataMap(sa), [ro(D), ao(k), oo(Me), so(Ge), lo(de)].forEach(re => { a.register(re); }), t.forEach(re => n.register(re)), i.forEach(re => o.register(re)), d.register(uo(O, L, ne)), m.register(mo(ne)), Gt.register(go(L)), Gt.getPlugin("pages_form").subscribe(re => re.build()), Mi.register(fo($i, L)), Ei.register(ho(Ti, ne, L)); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(Q), e.\u0275\u0275inject($e), e.\u0275\u0275inject(ye.ContentPluginManager), e.\u0275\u0275inject(B.ContextPluginManager), e.\u0275\u0275inject(_.StylePluginManager), e.\u0275\u0275inject(j.EntityDefinitionService), e.\u0275\u0275inject(Pe.ParamPluginManager), e.\u0275\u0275inject(B.ResolvedContextPluginManager), e.\u0275\u0275inject(xi.PluginConfigurationManager), e.\u0275\u0275inject(B.ContextManagerService), e.\u0275\u0275inject(z.TokenizerService), e.\u0275\u0275inject(_.FormService), e.\u0275\u0275inject(_.PageBuilderFacade), e.\u0275\u0275inject(ni), e.\u0275\u0275inject(ri), e.\u0275\u0275inject(ai), e.\u0275\u0275inject(xt), e.\u0275\u0275inject(oi), e.\u0275\u0275inject(_i.BridgeBuilderPluginManager), e.\u0275\u0275inject(wi.HttpClient), e.\u0275\u0275inject(j.Pluralizer), e.\u0275\u0275inject(j.DefaultDataServiceConfig), e.\u0275\u0275inject(gt.CrudAdaptorPluginManager), e.\u0275\u0275inject(j.EntityDefinitionService), e.\u0275\u0275inject(j.EntityDataService), e.\u0275\u0275inject(Pe.ParamEvaluatorService), e.\u0275\u0275inject(ct.DatasourcePluginManager), e.\u0275\u0275inject(S.AttributeSerializerService), e.\u0275\u0275inject(gt.CrudDataHelperService)); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: r }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ providers: [So, ni, ri, ai, xt, oi, { provide: Lt, useValue: Co, multi: !0 }, { provide: Lt, useValue: Bi, multi: !0 }, { provide: oe, useClass: oe }, { provide: se, useClass: se }, { provide: fe, useClass: fe }, { provide: Re, useClass: Re }, { provide: qe, useClass: qe }, { provide: yt, useClass: yt }, { provide: Q, useFactory: Wa, multi: !0, deps: [oe] }, { provide: Q, useFactory: Ja, multi: !0, deps: [se] }, { provide: Q, useFactory: Ka, multi: !0, deps: [fe] }, { provide: Q, useFactory: Ya, multi: !0, deps: [Re] }, { provide: Q, useFactory: Xa, multi: !0, deps: [qe] }, { provide: Q, useFactory: Za, multi: !0, deps: [Nt] }, { provide: Q, useFactory: eo, multi: !0, deps: [jt] }, { provide: Q, useFactory: to, multi: !0, deps: [Ot] }, { provide: Q, useFactory: io, multi: !0, deps: [kt] }, { provide: Q, useFactory: no, multi: !0, deps: [Vt] }, { provide: $e, useValue: new Qe({ id: "virtuallist", name: "virtuallist", title: "Virtual List", editorComponent: void 0, renderComponent: yo }), multi: !0 }, { provide: $e, useFactory: co, multi: !0, deps: [yt] }, { provide: $e, useValue: new Qe({ id: "table", name: "table", title: "Table", editorComponent: void 0, renderComponent: xo }), multi: !0 }, { provide: $e, useFactory: po, multi: !0, deps: [] }], imports: [Oi, Gi, Ai, Ui, Li, ki.forChild(Po), Hi, zi.forChild(), qi, mn, Xi, Zi, dn, tn, Ki, an, Qi, Sn, on, sn, Mn, Rn, yn, En] }); }
} return r; })();
export { So as CatchAllGuard, $s as CatchAllRouterComponent, Ii as EditPanelPageComponent, _o as PAGES_SETTINGS, Es as PagesModule, ii as PagesSettings, Ja as attributeContentPluginFactory, Za as buttonContentPluginFactory, bo as createEditMatcher, vo as createMatcher, oo as formContextFactory, ho as formDatasourcePluginFactory, uo as formParamPluginFactory, mo as formResolvedContextPluginFactory, fo as formSerializationEntityCrudAdaptorPluginFactory, no as iconButtonContentPluginFactory, eo as iconContentPluginFactory, to as linkContentPluginFactory, Ka as mediaContentPluginFactory, io as menuContentPluginFactory, ro as pageContextFactory, lo as pageStateContextFactory, go as pagesFormBridgeFactory, so as paneStateContextFactory, Ya as restContentPluginFactory, ao as restContextFactory, po as sidenavStylePluginFactory, Xa as sliceContentPluginFactory, Wa as snippetContentPluginFactory, co as tabsStylePluginFactory };
