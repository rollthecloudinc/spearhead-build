import { a as gi } from "@nf-internal/chunk-CAFTJBEE";
import { a as xt } from "@nf-internal/chunk-SMWSTNHZ";
import { a as W } from "@nf-internal/chunk-7XNIKSHD";
import { a as _, b as S, h as mi, k as St } from "@nf-internal/chunk-GL2BOVXA";
import * as e from "@angular/core";
import { EventEmitter as E, forwardRef as Y, InjectionToken as fi } from "@angular/core";
import * as v from "@angular/common";
import { CommonModule as hi } from "@angular/common";
import * as le from "@angular/router";
import { UrlSegment as st, RouterModule as vi } from "@angular/router";
import * as l from "@angular/forms";
import { UntypedFormArray as q, UntypedFormControl as p, Validators as g, NG_VALUE_ACCESSOR as ze, NG_VALIDATORS as Be, FormsModule as bi, ReactiveFormsModule as yi } from "@angular/forms";
import * as zt from "ngx-markdown";
import { MarkdownModule as _i, MarkdownComponent as Ci } from "ngx-markdown";
import { FlexLayoutModule as Si } from "@angular/flex-layout";
import * as Le from "angular-split";
import { AngularSplitModule as xi } from "angular-split";
import * as ve from "ngx-dropzone";
import { NgxDropzoneModule as wi } from "ngx-dropzone";
import { MaterialModule as Pi } from "@rollthecloudinc/material";
import { NgxJsonViewerModule as Fi } from "ngx-json-viewer";
import * as Bt from "ngx-angular-query-builder";
import { NgxAngularQueryBuilderModule as $i } from "ngx-angular-query-builder";
import * as mt from "@rollthecloudinc/media";
import { MEDIA_SETTINGS as Ii, MediaFile as Ti, MediaModule as Mi } from "@rollthecloudinc/media";
import * as X from "@rollthecloudinc/utils";
import { SITE_NAME as qe, UtilsModule as Ei, EMBEDDABLE_COMPONENT as nt } from "@rollthecloudinc/utils";
import * as k from "@rollthecloudinc/token";
import { TokenModule as Di } from "@rollthecloudinc/token";
import * as w from "@rollthecloudinc/attributes";
import { AttributeValue as oe, AttributeTypes as ne, Attribute as Lt, ATTRIBUTE_WIDGET as qt, AttributesModule as Ri } from "@rollthecloudinc/attributes";
import * as Ut from "@rollthecloudinc/layout";
import { GridLayoutComponent as ji, SplitLayoutComponent as Oi, LayoutModule as ki } from "@rollthecloudinc/layout";
import * as gt from "@rollthecloudinc/rest";
import { RestSourceFormComponent as Ht, RestModule as Ni } from "@rollthecloudinc/rest";
import * as Ue from "@rollthecloudinc/snippet";
import { Snippet as wt, SnippetModule as Vi } from "@rollthecloudinc/snippet";
import * as be from "@rollthecloudinc/content";
import { ContentBinding as He, ContentPluginEditorOptions as ce, ContentPlugin as Ie, CONTENT_PLUGIN as pe } from "@rollthecloudinc/content";
import * as G from "@rollthecloudinc/context";
import { InlineContext as me, ContextFormComponent as Gi, ContextPlugin as Te, ResolvedContextPlugin as Ai, ContextModule as zi } from "@rollthecloudinc/context";
import { DisplayGrid as Bi, GridType as Li, GridsterModule as qi } from "angular-gridster2";
import * as ye from "@angular/material/bottom-sheet";
import { MAT_BOTTOM_SHEET_DATA as Qt } from "@angular/material/bottom-sheet";
import * as h from "@angular/material/dialog";
import { MAT_DIALOG_DATA as A } from "@angular/material/dialog";
import * as Qe from "@angular/material/grid-list";
import * as Z from "@angular/material/list";
import * as B from "@angular/material/tabs";
import { Observable as Ne, of as f, Subject as z, BehaviorSubject as J, combineLatest as he, forkJoin as We, iif as Pe, from as Ui, merge as Wt } from "rxjs";
import { map as m, switchMap as b, tap as F, filter as I, debounceTime as ue, delay as je, take as V, withLatestFrom as Pt, distinctUntilChanged as ft, defaultIfEmpty as ht, skip as Hi, catchError as Qi } from "rxjs/operators";
import * as Jt from "@rollthecloudinc/datasource";
import { Dataset as H, Rest as ge, SelectMapping as Kt, SelectOption as Wi, DatasourcePlugin as Ji, DatasourceModule as Ki } from "@rollthecloudinc/datasource";
var Ye = mi(gi(), 1);
import * as y from "@rollthecloudinc/panels";
import { PropertiesFormPayload as we, PanelPropsFormPayload as Yt, PanePropsFormPayload as Xt, PaneState as $e, LayoutSetting as O, Pane as j, PanelPage as _e, PanelPageStateSlice as Ve, selectDataset as Oe, Panel as Je, FormDatasource as lt, StylePlugin as ct, PanelPageForm as Ge, PaneDatasourceService as Zt, PanelStyleRendererBaseComponent as Yi, PanelPageSelector as Ft, PanelPageState as $t, PanelState as Xi, STYLE_PLUGIN as Re, PanelsModule as Zi } from "@rollthecloudinc/panels";
import { PersistenceFormPayload as rt, PersistenceDialogComponent as en } from "@rollthecloudinc/refinery";
import * as Ke from "@rollthecloudinc/rules";
import * as L from "@angular/material/button";
import * as P from "@angular/material/input";
import * as ee from "@angular/flex-layout/flex";
import { InteractionsFormPayload as at, InteractionsDialogComponent as tn } from "@rollthecloudinc/detour";
import * as Ce from "@angular/material/expansion";
import * as ei from "@angular/material/icon";
import * as Q from "@angular/material/menu";
import * as vt from "@angular/flex-layout/extended";
import * as se from "@ngrx/store";
import { createSelector as It, select as K } from "@ngrx/store";
import * as T from "@ngrx/data";
import * as ti from "@angular/cdk/drag-drop";
import { getRouterSelectors as dt } from "@ngrx/router-store";
import * as Me from "@rollthecloudinc/crud";
import { CrudAdaptorPlugin as nn } from "@rollthecloudinc/crud";
import * as Ee from "@rollthecloudinc/render";
import { RenderModule as rn } from "@rollthecloudinc/render";
import * as bt from "@rollthecloudinc/durl";
import * as U from "@angular/material/autocomplete";
import * as yt from "@angular/material/checkbox";
import * as Xe from "@angular/material/select";
import * as Ze from "@angular/material/radio";
import * as et from "@rollthecloudinc/dparam";
import { ParamPlugin as an, Param as Tt, DparamModule as on } from "@rollthecloudinc/dparam";
import * as ii from "@rollthecloudinc/bridge";
import { BridgeBuilderPlugin as sn, PublicApiBridgeService as ln, BridgeModule as cn } from "@rollthecloudinc/bridge";
import * as Se from "@angular/cdk/scrolling";
import Mt from "qs";
import * as tt from "@angular/material/sort";
import * as $ from "@angular/material/table";
import * as ni from "@rollthecloudinc/plugin";
import * as ri from "@angular/common/http";
function dn(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "a", 4), e.\u0275\u0275listener("click", function () { let n = e.\u0275\u0275restoreView(t).$implicit, a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.onEntitySelected(n.value)); }), e.\u0275\u0275elementStart(1, "span", 5), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()();
} if (r & 2) {
    let t = d.$implicit;
    e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(t.value.title);
} }
function pn(r, d) { }
function un(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "classifieds-ui-dynamic-content-viewer", 1), e.\u0275\u0275pipe(1, "async"), e.\u0275\u0275listener("docRendered", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.onDocRendered()); }), e.\u0275\u0275elementEnd();
} if (r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("content", e.\u0275\u0275pipeBind1(1, 1, t.content$));
} }
function mn(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "classifieds-ui-dynamic-content-viewer", 1), e.\u0275\u0275pipe(1, "async"), e.\u0275\u0275listener("docRendered", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.onDocRendered()); }), e.\u0275\u0275elementEnd();
} if (r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("content", e.\u0275\u0275pipeBind1(1, 1, t.content$));
} }
function gn(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "a", 4), e.\u0275\u0275listener("click", function () { let n = e.\u0275\u0275restoreView(t).$implicit, a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.onStyleSelected(n.value)); }), e.\u0275\u0275elementStart(1, "span", 5), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()();
} if (r & 2) {
    let t = d.$implicit;
    e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(t.value.title);
} }
function fn(r, d) { }
var hn = ["contentEditor"], it = r => ({ settings: r }), vn = r => ({ visible: r });
function bn(r, d) { r & 1 && e.\u0275\u0275elementContainer(0); }
function yn(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "button", 21), e.\u0275\u0275listener("click", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(2); return e.\u0275\u0275resetView(n.onOverrideClick()); }), e.\u0275\u0275text(1, "Override"), e.\u0275\u0275elementEnd();
} }
function _n(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "button", 21), e.\u0275\u0275listener("click", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(2); return e.\u0275\u0275resetView(n.onRemoveOverrideClick()); }), e.\u0275\u0275text(1, "Remove Override"), e.\u0275\u0275elementEnd();
} }
function Cn(r, d) { }
function Sn(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "button", 14)(4, "mat-icon"), e.\u0275\u0275text(5, "more_vert"), e.\u0275\u0275elementEnd()()(), e.\u0275\u0275elementStart(6, "mat-expansion-panel", 15), e.\u0275\u0275listener("afterCollapse", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.onAfterCollapse()); })("afterExpand", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.onAfterExpand()); }), e.\u0275\u0275elementStart(7, "mat-expansion-panel-header")(8, "mat-panel-title"), e.\u0275\u0275text(9), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(10, "div", 16)(11, "ul"), e.\u0275\u0275template(12, bn, 1, 0, "ng-container", 17), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(13, "div", 18), e.\u0275\u0275template(14, yn, 2, 0, "button", 19)(15, _n, 2, 0, "button", 19), e.\u0275\u0275elementContainerStart(16), e.\u0275\u0275template(17, Cn, 0, 0, "ng-template", 20), e.\u0275\u0275elementContainerEnd(), e.\u0275\u0275elementEnd()()()();
} if (r & 2) {
    let t = e.\u0275\u0275nextContext(), i = e.\u0275\u0275reference(2), n = e.\u0275\u0275reference(6);
    e.\u0275\u0275advance(3), e.\u0275\u0275property("matMenuTriggerFor", n), e.\u0275\u0275advance(6), e.\u0275\u0275textInterpolate2("", t.contentPlugin.title, " : ", t.name), e.\u0275\u0275advance(), e.\u0275\u0275property("hidden", t.preview), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngTemplateOutlet", i)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(9, it, t.settings)), e.\u0275\u0275advance(), e.\u0275\u0275property("ngClass", e.\u0275\u0275pureFunction1(11, vn, t.preview)), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.displayOverride && !t.hasOverride), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.displayOverride && t.hasOverride);
} }
function xn(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "span"), e.\u0275\u0275text(1), e.\u0275\u0275pipe(2, "attribute"), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext().$implicit, i = e.\u0275\u0275nextContext().settings;
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind2(2, 1, i, t.name));
} }
function wn(r, d) { r & 1 && e.\u0275\u0275elementContainer(0); }
function Pn(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "ul"), e.\u0275\u0275template(1, wn, 1, 0, "ng-container", 17), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275nextContext(2);
    let i = e.\u0275\u0275reference(2);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", i)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(2, it, t.attributes));
} }
function Fn(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "li"), e.\u0275\u0275text(1), e.\u0275\u0275template(2, xn, 3, 4, "span", 23)(3, Pn, 2, 4, "ul", 23), e.\u0275\u0275elementEnd()), r & 2) {
    let t = d.$implicit, i = e.\u0275\u0275nextContext().settings;
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate1(" ", t.displayName, ": "), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !t.attributes || t.attributes.length == 0), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", i.attributes && t.attributes.length > 0);
} }
function $n(r, d) { if (r & 1 && e.\u0275\u0275template(0, Fn, 4, 3, "li", 22), r & 2) {
    let t = d.settings;
    e.\u0275\u0275property("ngForOf", t);
} }
function In(r, d) { }
function Tn(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div", 24)(1, "classifieds-ui-content-editor", 25, 3), e.\u0275\u0275listener("nestedUpdate", function (n) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.onNestedUpdate(n)); })("delete", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.onDeleteClick()); })("rules", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.onRulesClick()); })("props", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.onPropsClick()); }), e.\u0275\u0275template(3, In, 0, 0, "ng-template", null, 4, e.\u0275\u0275templateRefExtractor), e.\u0275\u0275elementEnd()();
} if (r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("panelPage", t.panelPage)("savable", !1)("nested", !0)("locked", t.locked)("contexts", t.contexts)("rootContext", t.rootContext)("ancestory", t.paneAncestoryWithSelf);
} }
function Mn(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "button", 26), e.\u0275\u0275listener("click", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.onPreviewClick()); }), e.\u0275\u0275text(1, "Preview"), e.\u0275\u0275elementEnd();
} if (r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("disabled", t.locked);
} }
function En(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "button", 27), e.\u0275\u0275listener("click", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.onDisablePreviewClick()); }), e.\u0275\u0275text(1, "Disable Preview"), e.\u0275\u0275elementEnd();
} }
var Dn = ["extraActionsArea"], Rn = ["contextsMenuTpl"], jn = ["editablePaneTpl"], On = ["panes"], ai = r => ({ nested: r });
function kn(r, d) { }
function Nn(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "form", 7), e.\u0275\u0275listener("ngSubmit", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.submit()); }), e.\u0275\u0275elementContainerStart(1), e.\u0275\u0275template(2, kn, 0, 0, "ng-template", 8), e.\u0275\u0275elementContainerEnd(), e.\u0275\u0275elementEnd();
} if (r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("formGroup", t.contentForm)("ngClass", e.\u0275\u0275pureFunction1(2, ai, t.nested));
} }
function Vn(r, d) { }
function Gn(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div", 9), e.\u0275\u0275elementContainerStart(1), e.\u0275\u0275template(2, Vn, 0, 0, "ng-template", 8), e.\u0275\u0275elementContainerEnd(), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("formGroup", t.contentForm)("ngClass", e.\u0275\u0275pureFunction1(2, ai, t.nested));
} }
function An(r, d) { r & 1 && e.\u0275\u0275element(0, "div", 12); }
function zn(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "classifieds-ui-editable-pane", 10), e.\u0275\u0275listener("delete", function () { let n = e.\u0275\u0275restoreView(t), a = n.i, o = n.j, s = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(s.onDeletePane(a, o)); })("rules", function () { let n = e.\u0275\u0275restoreView(t), a = n.i, o = n.j, s = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(s.onRulesPane(a, o)); })("nestedUpdate", function (n) { let a = e.\u0275\u0275restoreView(t), o = a.i, s = a.j, c = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(c.onNestedUpdate(n, o, s)); })("rendererOverride", function () { let n = e.\u0275\u0275restoreView(t), a = n.i, o = n.j, s = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(s.onOverrideRenderer(a, o)); })("removeRendererOverride", function () { let n = e.\u0275\u0275restoreView(t), a = n.i, o = n.j, s = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(s.onRemoveOverrideRenderer(a, o)); })("edit", function () { let n = e.\u0275\u0275restoreView(t), a = n.i, o = n.j, s = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(s.onPaneEdit(a, o)); })("props", function () { let n = e.\u0275\u0275restoreView(t), a = n.i, o = n.j, s = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(s.editPaneProps(a, o)); })("delete", function () { let n = e.\u0275\u0275restoreView(t), a = n.i, o = n.j, s = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(s.onPaneDelete(a, o)); }), e.\u0275\u0275template(1, An, 1, 0, "div", 11), e.\u0275\u0275elementEnd();
} if (r & 2) {
    let t = d.i, i = d.j, n = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("panelIndex", t)("paneIndex", i)("name", n.panelPaneName(t, i))("label", n.panelPaneLabel(t, i))("locked", n.panelPaneLocked(t, i))("contexts", n.contexts)("pluginName", n.panelPanePlugin(t, i))("settings", n.panelPaneSettings(t, i))("ancestory", n.ancestory);
} }
function Bn(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "button", 13), e.\u0275\u0275text(1, "( x )"), e.\u0275\u0275elementEnd()), r & 2) {
    e.\u0275\u0275nextContext();
    let t = e.\u0275\u0275reference(8);
    e.\u0275\u0275property("matMenuTriggerFor", t);
} }
function Ln(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "button", 5), e.\u0275\u0275listener("click", function () { let n = e.\u0275\u0275restoreView(t).$implicit, a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.onEditContext(n.name)); }), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd();
} if (r & 2) {
    let t = d.$implicit;
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.name);
} }
function qn(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "a", 1), e.\u0275\u0275listener("click", function () { let n = e.\u0275\u0275restoreView(t).$implicit, a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.onItemSelect(n.value)); }), e.\u0275\u0275elementStart(1, "span", 2), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()();
} if (r & 2) {
    let t = d.$implicit;
    e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(t.value.name);
} }
function Un(r, d) { r & 1 && e.\u0275\u0275elementContainer(0); }
function Hn(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "span"), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate1("", t.displayName, ": ");
} }
function Qn(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "span"), e.\u0275\u0275text(1), e.\u0275\u0275pipe(2, "attribute"), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext().$implicit, i = e.\u0275\u0275nextContext().settings;
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind2(2, 1, i, t.name));
} }
function Wn(r, d) { r & 1 && e.\u0275\u0275elementContainer(0); }
function Jn(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div"), e.\u0275\u0275template(1, Wn, 1, 0, "ng-container", 5), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275nextContext(2);
    let i = e.\u0275\u0275reference(3);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", i)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(2, it, t.attributes));
} }
function Kn(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div"), e.\u0275\u0275template(1, Hn, 2, 1, "span", 3)(2, Qn, 3, 4, "span", 3)(3, Jn, 2, 4, "div", 3), e.\u0275\u0275elementEnd()), r & 2) {
    let t = d.$implicit;
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.attributes.length == 0), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.attributes.length == 0), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.attributes.length > 0);
} }
function Yn(r, d) { if (r & 1 && e.\u0275\u0275template(0, Kn, 4, 3, "div", 6), r & 2) {
    let t = d.settings;
    e.\u0275\u0275property("ngForOf", t);
} }
function Xn(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div"), e.\u0275\u0275template(1, Un, 1, 0, "ng-container", 5)(2, Yn, 1, 1, "ng-template", null, 1, e.\u0275\u0275templateRefExtractor), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275reference(3), i = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", t)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(2, it, i.attributeValues));
} }
function Zn(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div", 7), e.\u0275\u0275element(1, "classifieds-ui-attributes-builder", 8), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275property("formGroup", t.controlContainer.control), e.\u0275\u0275advance(), e.\u0275\u0275property("attributes", t.attributes)("attributeValues", t.attributeValues);
} }
function er(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div"), e.\u0275\u0275template(1, Xn, 4, 4, "div", 3)(2, Zn, 2, 3, "div", 4), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.displayType == "page"), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.displayType == "form");
} }
function tr(r, d) { if (r & 1 && e.\u0275\u0275element(0, "classifieds-ui-snippet-pane-renderer", 9), r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("settings", t.rendererSettings)("tokens", t.tokens);
} }
function ir(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "ngx-dropzone-image-preview", 2), e.\u0275\u0275listener("removed", function (n) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.onRemoveMedia(n)); }), e.\u0275\u0275elementStart(1, "ngx-dropzone-label"), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()();
} if (r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("removable", !0)("file", t.media), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate2("", t.media.name, " (", t.media.type, ")");
} }
var nr = ["img"];
function rr(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 26), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = d.$implicit;
    e.\u0275\u0275property("value", t), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t);
} }
function ar(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div")(1, "mat-form-field", 23)(2, "mat-label"), e.\u0275\u0275text(3, "Pane"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(4, "mat-select", 24), e.\u0275\u0275template(5, rr, 2, 2, "mat-option", 25), e.\u0275\u0275elementEnd()()()), r & 2) {
    let t = d.index, i = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(), e.\u0275\u0275property("formGroupName", t), e.\u0275\u0275advance(4), e.\u0275\u0275property("ngForOf", i.panes);
} }
function or(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div", 20)(1, "button", 21), e.\u0275\u0275listener("click", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.addPane()); }), e.\u0275\u0275text(2, "Add Pane"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(3, "div"), e.\u0275\u0275template(4, ar, 6, 2, "div", 22), e.\u0275\u0275elementEnd()();
} if (r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(4), e.\u0275\u0275property("ngForOf", t.bindings.controls);
} }
function sr(r, d) { r & 1 && (e.\u0275\u0275elementStart(0, "div", 27)(1, "mat-form-field"), e.\u0275\u0275element(2, "input", 28), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(3, "mat-form-field"), e.\u0275\u0275element(4, "input", 29), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(5, "mat-form-field"), e.\u0275\u0275element(6, "input", 30), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(7, "div")(8, "mat-checkbox", 31), e.\u0275\u0275text(9, "Multiple"), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(10, "mat-form-field"), e.\u0275\u0275element(11, "input", 32), e.\u0275\u0275elementEnd()()); }
function lr(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 8), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = d.$implicit;
    e.\u0275\u0275property("value", t.value), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label);
} }
function cr(r, d) { if (r & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275elementStart(1, "mat-form-field")(2, "mat-label"), e.\u0275\u0275text(3), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(4, "mat-select", 6), e.\u0275\u0275template(5, lr, 2, 2, "mat-option", 7), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementContainerEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(3), e.\u0275\u0275textInterpolate(t.label), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", t.options);
} }
function dr(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-radio-button", 8), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = d.$implicit;
    e.\u0275\u0275property("value", t.value), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label);
} }
function pr(r, d) { if (r & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275elementStart(1, "div")(2, "label"), e.\u0275\u0275text(3), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(4, "mat-radio-group", 6), e.\u0275\u0275template(5, dr, 2, 2, "mat-radio-button", 7), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementContainerEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(3), e.\u0275\u0275textInterpolate(t.label), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", t.options);
} }
function ur(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div")(1, "div", 10)(2, "mat-checkbox", 11), e.\u0275\u0275text(3), e.\u0275\u0275elementEnd()()()), r & 2) {
    let t = d.$implicit, i = d.index;
    e.\u0275\u0275advance(), e.\u0275\u0275property("formGroupName", i), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(t.label);
} }
function mr(r, d) { if (r & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275elementStart(1, "div")(2, "div", 2), e.\u0275\u0275template(3, ur, 4, 2, "div", 9), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementContainerEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(3), e.\u0275\u0275property("ngForOf", t.options);
} }
function gr(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 8), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = d.$implicit;
    e.\u0275\u0275property("value", t), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label);
} }
function fr(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275elementStart(1, "mat-form-field"), e.\u0275\u0275element(2, "input", 12), e.\u0275\u0275elementStart(3, "mat-autocomplete", 13, 0), e.\u0275\u0275listener("optionSelected", function (n) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.onOptionSelected(n)); }), e.\u0275\u0275template(5, gr, 2, 2, "mat-option", 7), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementContainerEnd();
} if (r & 2) {
    let t = e.\u0275\u0275reference(4), i = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(2), e.\u0275\u0275property("placeholder", i.label)("matAutocomplete", t), e.\u0275\u0275advance(), e.\u0275\u0275property("displayWith", i.displayAuto), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", i.options);
} }
function hr(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 8), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = d.$implicit;
    e.\u0275\u0275property("value", t.name), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.name);
} }
function vr(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div", 5), e.\u0275\u0275element(1, "druid-panels-panelpage-linkedlist", 6), e.\u0275\u0275elementStart(2, "button", 3), e.\u0275\u0275listener("click", function () { let n = e.\u0275\u0275restoreView(t).index, a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.onRemoveMapping(n)); }), e.\u0275\u0275text(3, "Remove"), e.\u0275\u0275elementEnd()();
} if (r & 2) {
    let t = d.index, i = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("formGroupName", t), e.\u0275\u0275advance(), e.\u0275\u0275property("panes", i.panes);
} }
function br(r, d) { if (r & 1 && e.\u0275\u0275element(0, "classifieds-ui-render-pane", 4), r & 2) {
    let t = e.\u0275\u0275nextContext().index, i = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275property("pluginName", i.panes[t * 2].contentPlugin)("settings", i.panes[t * 2].settings)("contexts", i.panes[t * 2].contexts);
} }
function yr(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-tab"), e.\u0275\u0275template(1, br, 1, 3, "ng-template", 3), e.\u0275\u0275element(2, "classifieds-ui-render-pane", 4), e.\u0275\u0275elementEnd()), r & 2) {
    let t = d.index, i = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(2), e.\u0275\u0275property("pluginName", i.panes[t * 2 + 1].contentPlugin)("settings", i.panes[t * 2 + 1].settings)("contexts", i.panes[t * 2 + 1].contexts);
} }
function _r(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-tab-group", 1), e.\u0275\u0275template(1, yr, 3, 3, "mat-tab", 2), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("for", t.panes.length / 2);
} }
function Cr(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-tab", 6), e.\u0275\u0275element(1, "classifieds-ui-render-pane", 4), e.\u0275\u0275elementEnd()), r & 2) {
    let t = d.$implicit;
    e.\u0275\u0275advance(), e.\u0275\u0275property("pluginName", t.contentPlugin)("settings", t.settings)("contexts", t.contexts);
} }
function Sr(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-tab-group", 1), e.\u0275\u0275template(1, Cr, 2, 3, "mat-tab", 5), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngForOf", t.panes);
} }
function xr(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div", 2), e.\u0275\u0275element(1, "classifieds-ui-render-pane", 3), e.\u0275\u0275elementEnd()), r & 2) {
    let t = d.$implicit;
    e.\u0275\u0275advance(), e.\u0275\u0275property("pluginName", t.contentPlugin)("settings", t.settings)("contexts", t.contexts)("resolvedContext", t.resolvedContext);
} }
function wr(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "th", 7), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t);
} }
function Pr(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "td", 8), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = d.$implicit, i = e.\u0275\u0275nextContext().$implicit, n = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(n.rowData(i, t));
} }
function Fr(r, d) { if (r & 1 && (e.\u0275\u0275elementContainerStart(0, 4), e.\u0275\u0275template(1, wr, 2, 1, "th", 5)(2, Pr, 2, 1, "td", 6), e.\u0275\u0275elementContainerEnd()), r & 2) {
    let t = d.$implicit;
    e.\u0275\u0275property("matColumnDef", t);
} }
function $r(r, d) { r & 1 && e.\u0275\u0275element(0, "tr", 9); }
function Ir(r, d) { r & 1 && e.\u0275\u0275element(0, "tr", 10); }
var Tr = { GridLayout: { entityName: "GridLayout" }, PanelPageForm: { crud: { panelpageform_serialize: { plugins: { idb_keyval: { params: { prefix: "panelpageform__" } } } } } } }, Ae = (() => { class r {
    constructor(t) { this.viewContainerRef = t; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(e.ViewContainerRef)); }; }
    static { this.\u0275dir = e.\u0275\u0275defineDirective({ type: r, selectors: [["", "classifiedsUiContentSelectionHost", ""]], standalone: !1 }); }
} return r; })(), Mr = (() => { class r {
    constructor(t, i, n, a, o, s) { this.data = t, this.bottomSheetRef = i, this.dialog = n, this.componentFactoryResolver = a, this.fb = o, this.contentPluginManager = s, this.selectedIndex = 0; }
    ngOnInit() { this.contentPlugins = this.contentPluginManager.getPlugins(); }
    onEntitySelected(t) { if (this.plugin = t, this.plugin.selectionComponent !== void 0)
        this.selectedIndex = 1, this.renderSelectionComponent();
    else if (this.plugin.editorComponent !== void 0)
        if (this.bottomSheetRef.dismiss(), t.handler)
            this.plugin.handler.editorOptions([]).subscribe(i => { let n = this.dialog.open(this.plugin.editorComponent, _({ data: { panelFormGroup: this.data.panelForm, panelIndex: this.data.panelIndex, pane: void 0, paneIndex: void 0, contexts: this.data.contexts, contentAdded: this.data.contentAdded, plugin: t } }, i.fullscreen ? { maxWidth: "100vw", maxHeight: "100vh", height: "100%", width: "100%" } : {})); });
        else {
            let i = this.dialog.open(this.plugin.editorComponent, { data: { panelFormGroup: this.data.panelForm, panelIndex: this.data.panelIndex, pane: void 0, paneIndex: void 0, contexts: this.data.contexts, contentAdded: this.data.contentAdded } });
        }
    else
        this.data.panelForm.get("panes").push(this.fb.group({ contentPlugin: this.fb.control(this.plugin.id), name: this.fb.control(""), label: this.fb.control(""), settings: this.fb.array([]) })); }
    renderSelectionComponent() { let t = this.componentFactoryResolver.resolveComponentFactory(this.plugin.selectionComponent), i = this.selectionHost.viewContainerRef; i.clear(); let n = i.createComponent(t); n.instance.panelFormGroup = this.data.panelForm, n.instance.contexts = this.data.contexts; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(Qt), e.\u0275\u0275directiveInject(ye.MatBottomSheetRef), e.\u0275\u0275directiveInject(h.MatDialog), e.\u0275\u0275directiveInject(e.ComponentFactoryResolver), e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(be.ContentPluginManager)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-content-selector"]], viewQuery: function (i, n) { if (i & 1 && e.\u0275\u0275viewQuery(Ae, 7), i & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.selectionHost = a.first);
        } }, standalone: !1, decls: 10, vars: 6, consts: [[1, "content-selector-wrapper"], [3, "selectedIndex"], ["mat-list-item", "", "mat-list-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["classifiedsUiContentSelectionHost", ""], ["mat-list-item", "", "mat-list-item", "", 3, "click"], ["mat-line", ""]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "mat-tab-group", 1)(2, "mat-tab")(3, "mat-nav-list"), e.\u0275\u0275template(4, dn, 3, 1, "a", 2), e.\u0275\u0275pipe(5, "async"), e.\u0275\u0275pipe(6, "keyvalue"), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(7, "mat-tab"), e.\u0275\u0275elementContainerStart(8), e.\u0275\u0275template(9, pn, 0, 0, "ng-template", 3), e.\u0275\u0275elementContainerEnd(), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275advance(), e.\u0275\u0275property("selectedIndex", n.selectedIndex), e.\u0275\u0275advance(3), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(6, 4, e.\u0275\u0275pipeBind1(5, 2, n.contentPlugins)))); }, dependencies: [v.NgForOf, Qe.MatLine, Z.MatNavList, Z.MatListItem, B.MatTab, B.MatTabGroup, Ae, v.AsyncPipe, v.KeyValuePipe], styles: [".content-selector-wrapper[_ngcontent-%COMP%]     .mat-mdc-tab-header{display:none}"] }); }
} return r; })(), re = (() => { class r {
    constructor(t, i) { this.attributeSerializer = t, this.tokenizrService = i, this.types = ["text/markdown", "text/html"]; }
    handleFile(t) { return new Ne(i => { let n = new FileReader; n.onload = () => { i.next(this.buildSettings(new wt({ contentType: t.type, content: `${n.result}` }))), i.complete(); }, n.readAsText(t); }); }
    handlesType(t) { return this.types.find(i => i === t) !== void 0; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(t) { return f(!1); }
    isDynamic(t) { return !1; }
    isData(t) { return !1; }
    getBindings(t, i, n) { return i === "context" ? this.toObject(t).pipe(m(a => this.tokenizrService.discoverTokens(a.content).map(s => new He({ id: s, type: "context" })))) : f([]); }
    fetchDynamicData(t, i) { return f(new H); }
    buildDynamicItems(t, i) { return f([]); }
    toObject(t) { return f(new wt(this.attributeSerializer.deserializeAsObject(t))); }
    buildSettings(t) { return this.attributeSerializer.serialize(t, "root").attributes; }
    stateDefinition(t) { return f({}); }
    editorOptions(t) { return f(new ce({ fullscreen: !0 })); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(w.AttributeSerializerService), e.\u0275\u0275inject(k.TokenizerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), oi = (() => { class r {
    set settings(t) { this.settings$.next(t); }
    set resolvedContext(t) { this.resolvedContext$.next(t); }
    constructor(t, i, n, a) { this.hostEl = t, this.handler = i, this.tokenizerService = n, this.markdownService = a, this.contexts = [], this.afterContentInit$ = new z, this.content = "", this.content$ = new J(""), this.settings$ = new J([]), this.snippet$ = new J(void 0), this.resolvedContext$ = new J(void 0), this.docRendered$ = new z, this.contentSub = he([this.afterContentInit$, this.content$, this.snippet$, this.docRendered$]).subscribe(([o, s, c]) => { c && c.jsScript && c.jsScript !== "" && setTimeout(() => this.appendScript(c.jsScript)); }), this.renderContentSub = he([this.settings$, this.resolvedContext$]).pipe(b(([o, s]) => this.handler.toObject(o)), b(o => this.resolveContexts().pipe(m(s => [o, s])))).subscribe(c => St(this, [c], function* ([o, s]) { s !== void 0 && (this.tokens = s), this.contentType = o.contentType, this.snippet$.next(o); let u = this.replaceTokens(o.content), C; o.contentType && o.contentType.indexOf("markdown") !== -1 ? C = yield Promise.resolve(this.markdownService.parse(u)) : C = u, this.content$.next(C); })); }
    ngOnInit() { }
    ngOnChanges() { console.log("pane changed"); }
    ngAfterContentInit() { this.afterContentInit$.next(), this.afterContentInit$.complete(); }
    replaceTokens(t) { return this.tokens !== void 0 && this.tokens.forEach((i, n) => { t = t.split(`[${n}]`).join(`${i}`); }), t; }
    resolveContexts() { return new Ne(t => { let i = new Map; if (this.resolvedContext$.value)
        for (let n in this.resolvedContext$.value)
            i = new Map([...i, ...this.tokenizerService.generateGenericTokens(this.resolvedContext$.value[n], n === "_root" ? "" : n)]); t.next(i), t.complete(); }); }
    appendScript(t) { let i = document.createElement("script"); i.type = "text/javascript", i.appendChild(document.createTextNode(t)), this.hostEl.nativeElement.appendChild(i), console.log("add script"); }
    onDocRendered() { this.docRendered$.next(void 0); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(re), e.\u0275\u0275directiveInject(k.TokenizerService), e.\u0275\u0275directiveInject(zt.MarkdownService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-snippet-pane-renderer"]], inputs: { settings: "settings", contexts: "contexts", tokens: "tokens", resolvedContext: "resolvedContext" }, standalone: !1, features: [e.\u0275\u0275NgOnChangesFeature], decls: 2, vars: 2, consts: [[3, "content", "docRendered", 4, "ngIf"], [3, "docRendered", "content"]], template: function (i, n) { i & 1 && e.\u0275\u0275template(0, un, 2, 3, "classifieds-ui-dynamic-content-viewer", 0)(1, mn, 2, 3, "classifieds-ui-dynamic-content-viewer", 0), i & 2 && (e.\u0275\u0275property("ngIf", n.contentType == "text/markdown"), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", n.contentType == "text/html")); }, dependencies: [v.NgIf, X.DynamicContentViewer, v.AsyncPipe], encapsulation: 2 }); }
} return r; })(), ae = (() => { class r {
    constructor(t) { this.snippetHandler = t; }
    handleFile(t) { return f([]); }
    handlesType(t) { return !1; }
    implementsRendererOverride() { return !0; }
    hasRendererOverride(t) { return this.rendererSnippet(t).pipe(m(i => i !== void 0)); }
    isDynamic(t) { return !1; }
    isData(t) { return !1; }
    fetchDynamicData(t, i) { return f(new H); }
    buildDynamicItems(t, i) { return f([]); }
    getBindings(t, i, n) { return f([]); }
    valueSettings(t) { let i = []; return t.forEach(n => { n.name === "value" && i.push(n); }), i; }
    rendererSnippet(t) { let i; return t.forEach(n => { n.name === "_renderer" && (i = this.snippetHandler.toObject(n.attributes)); }), i !== void 0 ? i : f(void 0); }
    rendererOverrideSettings(t) { return [new oe({ name: "_renderer", type: ne.Complex, displayName: "Renderer Override", value: void 0, computedValue: void 0, intValue: 0, attributes: this.snippetHandler.buildSettings(t) })]; }
    widgetSettings(t) { return [new oe({ name: "widget", type: t.schema.type, displayName: "Widget", value: t.name, computedValue: t.name, intValue: 0, attributes: [] })]; }
    stateDefinition(t) { return f({}); }
    editorOptions(t) { return f(new ce); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(re)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), Er = (() => { class r {
    constructor(t, i, n, a, o) { this.data = t, this.dialogRef = i, this.tokenizerService = n, this.handler = a, this.fb = o; }
    ngOnInit() { this.tokens = this.tokenizerService.generateTokens(this.data.pane.settings); }
    submitted(t) { this.replaceRenderer(t), this.dialogRef.close(); }
    replaceRenderer(t) { let i, n = this.handler.rendererOverrideSettings(t)[0], a = this.convertToGroup(n), o = this.data.panelFormGroup.get("panes").at(this.data.paneIndex).get("settings"); o.controls.forEach((s, c) => { s.get("name").value === "_renderer" && (i = c); }), i !== void 0 ? (o.insert(i, a), o.removeAt(i + 1)) : o.push(a); }
    convertToGroup(t) { let i = this.fb.group({ name: new p(t.name, g.required), type: new p(t.type, g.required), displayName: new p(t.displayName, g.required), value: new p(t.value, g.required), computedValue: new p(t.value, g.required), attributes: new q([]) }); return t.attributes && t.attributes.length > 0 && t.attributes.forEach(n => { i.get("attributes").push(this.convertToGroup(n)); }), i; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(A), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(k.TokenizerService), e.\u0275\u0275directiveInject(ae), e.\u0275\u0275directiveInject(l.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-rendering-editor"]], standalone: !1, decls: 2, vars: 1, consts: [[3, "submitted", "tokens"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "classifieds-ui-snippet-form", 0), e.\u0275\u0275listener("submitted", function (o) { return n.submitted(o); }), e.\u0275\u0275element(1, "classifieds-ui-snippet-form"), e.\u0275\u0275elementEnd()), i & 2 && e.\u0275\u0275property("tokens", n.tokens); }, dependencies: [Ue.SnippetFormComponent], encapsulation: 2 }); }
} return r; })(), Dr = (() => { class r {
    constructor(t, i, n, a, o, s) { this.data = t, this.spm = i, this.bottomSheetRef = n, this.dialog = a, this.componentFactoryResolver = o, this.fb = s, this.selectedIndex = 0; }
    ngOnInit() { this.stylePlugins = this.spm.getPlugins(); }
    onStyleSelected(t) { if (this.plugin = t, this.plugin.editorComponent !== void 0) {
        this.bottomSheetRef.dismiss(), this.data.panelForm.get("stylePlugin").setValue(this.plugin.name), this.data.panelForm.get("styleTitle").setValue(this.plugin.title), this.data.panelForm.get("settings").clear();
        let i = this.dialog.open(this.plugin.editorComponent, { data: { panelFormGroup: this.data.panelForm, panelIndex: this.data.panelIndex, contexts: this.data.contexts } });
    }
    else
        this.data.panelForm.get("stylePlugin").setValue(this.plugin.name), this.data.panelForm.get("styleTitle").setValue(this.plugin.title), this.data.panelForm.get("settings").clear(), this.bottomSheetRef.dismiss(); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(Qt), e.\u0275\u0275directiveInject(y.StylePluginManager), e.\u0275\u0275directiveInject(ye.MatBottomSheetRef), e.\u0275\u0275directiveInject(h.MatDialog), e.\u0275\u0275directiveInject(e.ComponentFactoryResolver), e.\u0275\u0275directiveInject(l.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-style-selector"]], viewQuery: function (i, n) { if (i & 1 && e.\u0275\u0275viewQuery(Ae, 7), i & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.selectionHost = a.first);
        } }, standalone: !1, decls: 10, vars: 6, consts: [[1, "style-selector-wrapper"], [3, "selectedIndex"], ["mat-list-item", "", "mat-list-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["classifiedsUiContentSelectionHost", ""], ["mat-list-item", "", "mat-list-item", "", 3, "click"], ["mat-line", ""]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "mat-tab-group", 1)(2, "mat-tab")(3, "mat-nav-list"), e.\u0275\u0275template(4, gn, 3, 1, "a", 2), e.\u0275\u0275pipe(5, "async"), e.\u0275\u0275pipe(6, "keyvalue"), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(7, "mat-tab"), e.\u0275\u0275elementContainerStart(8), e.\u0275\u0275template(9, fn, 0, 0, "ng-template", 3), e.\u0275\u0275elementContainerEnd(), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275advance(), e.\u0275\u0275property("selectedIndex", n.selectedIndex), e.\u0275\u0275advance(3), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(6, 4, e.\u0275\u0275pipeBind1(5, 2, n.stylePlugins)))); }, dependencies: [v.NgForOf, Qe.MatLine, Z.MatNavList, Z.MatListItem, B.MatTab, B.MatTabGroup, Ae, v.AsyncPipe, v.KeyValuePipe], styles: [".style-selector-wrapper[_ngcontent-%COMP%]     .mat-mdc-tab-header{display:none}"] }); }
} return r; })(), Rr = (() => { class r {
    constructor(t, i, n, a, o) { this.data = t, this.dialogRef = i, this.fb = n, this.inlineContextResolver = a, this.rulesParser = o, this.rulesForm = this.fb.group({ rules: this.fb.control("") }), this.config = { fields: {} }; }
    ngOnInit() { this.inlineContextResolver.resolveMerged(this.data.contexts).subscribe(t => { let i = {}; for (let n in t)
        this.rulesParser.buildFields(t[n], n).forEach((a, o) => { i[o] = a; }); this.config = S(_({}, this.config), { fields: i }), this.data.rule !== void 0 && this.rulesForm.get("rules").setValue(this.data.rule); }); }
    submit() { console.log("the rules"), console.log(this.rulesForm.get("rules").value), this.dialogRef.close(this.rulesForm.get("rules").value); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(A), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(G.InlineContextResolverService), e.\u0275\u0275directiveInject(Ke.RulesParserService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-rules-dialog"]], standalone: !1, decls: 6, vars: 3, consts: [[1, "rest-form", 3, "ngSubmit", "formGroup"], ["formControlName", "rules", 3, "config"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content"), e.\u0275\u0275element(2, "query-builder", 1), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(3, "mat-dialog-actions")(4, "button", 2), e.\u0275\u0275text(5, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.rulesForm), e.\u0275\u0275advance(2), e.\u0275\u0275property("config", n.config), e.\u0275\u0275advance(2), e.\u0275\u0275property("disabled", !n.rulesForm.valid)); }, dependencies: [l.\u0275NgNoValidate, l.NgControlStatus, l.NgControlStatusGroup, l.FormGroupDirective, l.FormControlName, L.MatButton, h.MatDialogClose, h.MatDialogActions, h.MatDialogContent, Bt.QueryBuilderComponent], encapsulation: 2 }); }
} return r; })(), jr = (() => { class r {
    constructor(t, i, n) { this.data = t, this.dialogRef = i, this.fb = n, this.propertiesForm = this.fb.group({ name: this.fb.control(this.data.props.name), title: this.fb.control(this.data.props.title), path: this.fb.control(this.data.props.path), cssFile: this.fb.control(this.data.props.cssFile), readUserIds: this.fb.array([this.fb.group({ userId: this.fb.control(this.data.props.readUserIds && this.data.props.readUserIds.length > 0 ? this.data.props.readUserIds[0] : "") })]) }); }
    ngOnInit() { }
    submit() { this.dialogRef.close(new we(S(_({}, this.propertiesForm.value), { readUserIds: this.propertiesForm.value.readUserIds.map(t => t.userId) }))); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(A), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(l.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-properties-dialog"]], standalone: !1, decls: 18, vars: 2, consts: [[1, "properties-form", 3, "ngSubmit", "formGroup"], [1, "content-inner"], ["fxLayout", "column"], ["matInput", "", "formControlName", "name", "placeholder", "Name"], ["matInput", "", "formControlName", "title", "placeholder", "Title"], ["matInput", "", "formControlName", "path", "placeholder", "Path"], ["matInput", "", "formControlName", "cssFile", "placeholder", "Css File"], ["formArrayName", "readUserIds"], ["formGroupName", "0"], ["matInput", "", "formControlName", "userId", "placeholder", "Read User Id"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "div", 1)(3, "div", 2)(4, "mat-form-field"), e.\u0275\u0275element(5, "input", 3), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(6, "mat-form-field"), e.\u0275\u0275element(7, "input", 4), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(8, "mat-form-field"), e.\u0275\u0275element(9, "input", 5), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(10, "mat-form-field"), e.\u0275\u0275element(11, "input", 6), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(12, "mat-form-field", 7)(13, "div", 8), e.\u0275\u0275element(14, "input", 9), e.\u0275\u0275elementEnd()()()()(), e.\u0275\u0275elementStart(15, "mat-dialog-actions")(16, "button", 10), e.\u0275\u0275text(17, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.propertiesForm), e.\u0275\u0275advance(16), e.\u0275\u0275property("disabled", !n.propertiesForm.valid)); }, dependencies: [l.\u0275NgNoValidate, l.DefaultValueAccessor, l.NgControlStatus, l.NgControlStatusGroup, l.FormGroupDirective, l.FormControlName, l.FormGroupName, l.FormArrayName, L.MatButton, h.MatDialogClose, h.MatDialogActions, h.MatDialogContent, P.MatInput, P.MatFormField, ee.DefaultLayoutDirective], encapsulation: 2 }); }
} return r; })(), Et = (() => { class r {
    constructor(t, i, n) { this.data = t, this.dialogRef = i, this.fb = n, this.contextForm = this.fb.group({ context: this.fb.control("") }), this.context = t.context; }
    ngOnInit() { }
    ngAfterViewInit() { this.data.context && setTimeout(() => { this.contextFormComp.contextForm.setValue({ name: this.data.context.name, plugin: this.data.context.plugin }), this.data.context.plugin === "rest" ? setTimeout(() => { this.contextFormComp.componentRef.instance.restSourceFormComp.restSource = { url: this.data.context.rest.url, params: this.data.context.rest.params }; }) : this.data.context.plugin === "datasource" && setTimeout(() => { this.contextFormComp.componentRef.instance.datasourceFormComp.datasource = this.data.context.datasource; }); }); }
    submit() { this.contextForm.get("context").value.name !== "" ? this.dialogRef.close(new me(this.contextForm.get("context").value)) : this.dialogRef.close(); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(A), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(l.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-context-dialog"]], viewQuery: function (i, n) { if (i & 1 && e.\u0275\u0275viewQuery(Gi, 5), i & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.contextFormComp = a.first);
        } }, standalone: !1, decls: 6, vars: 3, consts: [[1, "context-form", 3, "ngSubmit", "formGroup"], ["formControlName", "context", 3, "context"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content"), e.\u0275\u0275element(2, "classifieds-ui-context-form", 1), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(3, "mat-dialog-actions")(4, "button", 2), e.\u0275\u0275text(5, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.contextForm), e.\u0275\u0275advance(2), e.\u0275\u0275property("context", n.context), e.\u0275\u0275advance(2), e.\u0275\u0275property("disabled", !n.contextForm.valid)); }, dependencies: [l.\u0275NgNoValidate, l.NgControlStatus, l.NgControlStatusGroup, l.FormGroupDirective, l.FormControlName, L.MatButton, h.MatDialogClose, h.MatDialogActions, h.MatDialogContent, G.ContextFormComponent], encapsulation: 2 }); }
} return r; })(), Or = (() => { class r {
    constructor(t, i, n) { this.data = t, this.dialogRef = i, this.fb = n, this.propsForm = this.fb.group({ name: this.fb.control(this.data.props.name), label: this.fb.control(this.data.props.label) }); }
    ngOnInit() { }
    submit() { this.dialogRef.close(new Yt(this.propsForm.value)); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(A), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(l.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-panel-props-dialog"]], standalone: !1, decls: 11, vars: 2, consts: [[1, "props-form", 3, "ngSubmit", "formGroup"], [1, "content-inner"], ["fxLayout", "column"], ["matInput", "", "formControlName", "name", "placeholder", "Name"], ["matInput", "", "formControlName", "label", "placeholder", "Label"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "div", 1)(3, "div", 2)(4, "mat-form-field"), e.\u0275\u0275element(5, "input", 3), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(6, "mat-form-field"), e.\u0275\u0275element(7, "input", 4), e.\u0275\u0275elementEnd()()()(), e.\u0275\u0275elementStart(8, "mat-dialog-actions")(9, "button", 5), e.\u0275\u0275text(10, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.propsForm), e.\u0275\u0275advance(9), e.\u0275\u0275property("disabled", !n.propsForm.valid)); }, dependencies: [l.\u0275NgNoValidate, l.DefaultValueAccessor, l.NgControlStatus, l.NgControlStatusGroup, l.FormGroupDirective, l.FormControlName, L.MatButton, h.MatDialogClose, h.MatDialogActions, h.MatDialogContent, P.MatInput, P.MatFormField, ee.DefaultLayoutDirective], encapsulation: 2 }); }
} return r; })(), kr = (() => { class r {
    constructor(t, i, n) { this.data = t, this.dialogRef = i, this.fb = n, this.propsForm = this.fb.group({ name: this.fb.control(this.data.props.name), label: this.fb.control(this.data.props.label) }); }
    ngOnInit() { }
    submit() { this.dialogRef.close(new Xt(this.propsForm.value)); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(A), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(l.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-pane-props-dialog"]], standalone: !1, decls: 11, vars: 2, consts: [[1, "props-form", 3, "ngSubmit", "formGroup"], [1, "content-inner"], ["fxLayout", "column"], ["matInput", "", "formControlName", "name", "placeholder", "Name"], ["matInput", "", "formControlName", "label", "placeholder", "Label"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "div", 1)(3, "div", 2)(4, "mat-form-field"), e.\u0275\u0275element(5, "input", 3), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(6, "mat-form-field"), e.\u0275\u0275element(7, "input", 4), e.\u0275\u0275elementEnd()()()(), e.\u0275\u0275elementStart(8, "mat-dialog-actions")(9, "button", 5), e.\u0275\u0275text(10, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.propsForm), e.\u0275\u0275advance(9), e.\u0275\u0275property("disabled", !n.propsForm.valid)); }, dependencies: [l.\u0275NgNoValidate, l.DefaultValueAccessor, l.NgControlStatus, l.NgControlStatusGroup, l.FormGroupDirective, l.FormControlName, L.MatButton, h.MatDialogClose, h.MatDialogActions, h.MatDialogContent, P.MatInput, P.MatFormField, ee.DefaultLayoutDirective], encapsulation: 2 }); }
} return r; })(), Dt = (() => { class r {
    constructor(t) { this.viewContainerRef = t; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(e.ViewContainerRef)); }; }
    static { this.\u0275dir = e.\u0275\u0275defineDirective({ type: r, selectors: [["", "classifiedsUiLayoutEditorHost", ""]], standalone: !1 }); }
} return r; })(), Rt = (() => { class r {
    constructor(t) { this.viewContainerRef = t; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(e.ViewContainerRef)); }; }
    static { this.\u0275dir = e.\u0275\u0275defineDirective({ type: r, selectors: [["", "classifiedsUiPaneContentHost", ""]], standalone: !1 }); }
} return r; })(), pt = (() => { class r {
    get entityCollectionService() { return this.entityServices.getEntityCollectionService("PanelPageState"); }
    constructor(t, i) { this.entityServices = t, this.attributeSerializer = i; }
    resolve(t, i) { let n = c => c.entities, a = ({ id: c }) => It(n, u => u[c] ? u[c] : void 0), o = ({ id: c, path: u }) => It(a({ id: c }), C => Ye.JSONPath({ path: u, json: C })), s = "$." + i.selectionPath.map((c, u) => `${(u + 1) % 2 === 0 ? "panes" : (u === 0 ? "" : "nestedPage.") + "panels"}[${c}]`).join("."); return this.entityCollectionService.collection$.pipe(K(o({ id: i.id, path: s })), m(c => c && Array.isArray(c) && c.length !== 0 ? c[0] : this.defaultPaneState(i.value ? i.value : {})), m(c => this.attributeSerializer.deserialize(c.state)), m(c => c ? c.root ? c.root : c : {}), F(c => { console.log(`resolved panestate[id=${i.id}]${s}`), console.log(c); })); }
    defaultPaneState(t) { return new $e({ state: this.attributeSerializer.serialize(t, "root") }); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(T.EntityServices), e.\u0275\u0275inject(w.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), jt = (() => { class r {
    set panelIndex(t) { this.panelIndex$.next(t); }
    set paneIndex(t) { this.paneIndex$.next(t); }
    set ancestory(t) { this.ancestory$.next(t); }
    constructor(t, i, n) { this.componentFactoryResolver = t, this.panelHandler = i, this.cpm = n, this.settings = [], this.locked = !1, this.contexts = [], this.edit = new E, this.props = new E, this.delete = new E, this.rules = new E, this.rendererOverride = new E, this.removeRendererOverride = new E, this.nestedUpdate = new E, this.heightChange = new E, this.displayOverride = !1, this.hasOverride = !1, this.preview = !1, this.schedulePluginChange = new z, this.pluginChangeSub = this.schedulePluginChange.pipe(b(a => this.cpm.getPlugin(this.pluginName).pipe(b(o => o.handler.hasRendererOverride(this.settings).pipe(m(s => [a, o, s])))))).subscribe(([a, o, s]) => { this.contentPlugin = o, this.displayOverride = o.handler.implementsRendererOverride(), this.hasOverride = !!s, a && this.pluginName === "panel" && this.panelHandler.toObject(this.settings).subscribe(c => { this.panelPage = c; }); }), this.ancestory$ = new z, this.panelIndex$ = new z, this.paneIndex$ = new z, this.paneAncestoryWithSelf = [], this.paneAncestoryWithSelfSub = he([this.ancestory$, this.panelIndex$, this.paneIndex$]).pipe(m(([a, o, s]) => [...a, o, s])).subscribe(a => { this.paneAncestoryWithSelf = a; }); }
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
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(e.ComponentFactoryResolver), e.\u0275\u0275directiveInject(y.PanelContentHandler), e.\u0275\u0275directiveInject(be.ContentPluginManager)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-editable-pane"]], viewQuery: function (i, n) { if (i & 1 && (e.\u0275\u0275viewQuery(Rt, 5), e.\u0275\u0275viewQuery(hn, 5)), i & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.contentPaneHost = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.contentEditor = a.first);
        } }, inputs: { pluginName: "pluginName", settings: "settings", name: "name", label: "label", panelIndex: "panelIndex", paneIndex: "paneIndex", locked: "locked", rootContext: "rootContext", contexts: "contexts", ancestory: "ancestory" }, outputs: { edit: "edit", props: "props", delete: "delete", rules: "rules", rendererOverride: "rendererOverride", removeRendererOverride: "removeRendererOverride", nestedUpdate: "nestedUpdate", heightChange: "heightChange" }, standalone: !1, features: [e.\u0275\u0275NgOnChangesFeature], decls: 17, vars: 6, consts: [["settingsTmpl", ""], ["nestedPanelTpl", ""], ["paneMenu", "matMenu"], ["contentEditor", ""], ["extraActionsArea", ""], ["class", "editable-pane-wrapper", 4, "ngIf", "ngIfElse"], ["type", "button", "mat-menu-item", "", 3, "click", "disabled"], ["type", "button", "mat-menu-item", "", 3, "click"], ["mat-menu-item", "", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["mat-menu-item", "", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", "mat-menu-item", "", 1, "delete", 3, "click"], [1, "editable-pane-wrapper"], ["fxLayout", "row", 1, "inner-pane-wrapper"], [1, "pane-menu-trigger-wrapper"], ["mat-button", "", "type", "button", 3, "matMenuTriggerFor"], ["fxFlex", "", 3, "afterCollapse", "afterExpand"], [3, "hidden"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "preview-area", 3, "ngClass"], ["class", "override", "type", "button", 3, "click", 4, "ngIf"], ["classifiedsUiPaneContentHost", ""], ["type", "button", 1, "override", 3, "click"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "nested-panel-wrapper"], [3, "nestedUpdate", "delete", "rules", "props", "panelPage", "savable", "nested", "locked", "contexts", "rootContext", "ancestory"], ["mat-menu-item", "", "type", "button", 3, "click", "disabled"], ["mat-menu-item", "", "type", "button", 3, "click"]], template: function (i, n) { if (i & 1) {
            let a = e.\u0275\u0275getCurrentView();
            e.\u0275\u0275template(0, Sn, 18, 13, "div", 5)(1, $n, 1, 1, "ng-template", null, 0, e.\u0275\u0275templateRefExtractor)(3, Tn, 5, 7, "ng-template", null, 1, e.\u0275\u0275templateRefExtractor), e.\u0275\u0275elementStart(5, "mat-menu", null, 2)(7, "button", 6), e.\u0275\u0275listener("click", function () { return e.\u0275\u0275restoreView(a), e.\u0275\u0275resetView(n.onEditClick()); }), e.\u0275\u0275text(8, "Edit"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(9, "button", 6), e.\u0275\u0275listener("click", function () { return e.\u0275\u0275restoreView(a), e.\u0275\u0275resetView(n.onPropsClick()); }), e.\u0275\u0275text(10, "Props"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(11, "button", 7), e.\u0275\u0275listener("click", function () { return e.\u0275\u0275restoreView(a), e.\u0275\u0275resetView(n.onRulesClick()); }), e.\u0275\u0275text(12, "Rules"), e.\u0275\u0275elementEnd(), e.\u0275\u0275template(13, Mn, 2, 1, "button", 8)(14, En, 2, 0, "button", 9), e.\u0275\u0275elementStart(15, "button", 10), e.\u0275\u0275listener("click", function () { return e.\u0275\u0275restoreView(a), e.\u0275\u0275resetView(n.onDeleteClick()); }), e.\u0275\u0275text(16, "Delete"), e.\u0275\u0275elementEnd()();
        } if (i & 2) {
            let a = e.\u0275\u0275reference(4);
            e.\u0275\u0275property("ngIf", n.pluginName != "panel" || n.locked)("ngIfElse", a), e.\u0275\u0275advance(7), e.\u0275\u0275property("disabled", n.locked), e.\u0275\u0275advance(2), e.\u0275\u0275property("disabled", n.locked && n.settings.length !== 0), e.\u0275\u0275advance(4), e.\u0275\u0275property("ngIf", !n.preview), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", n.preview);
        } }, dependencies: () => [v.NgClass, v.NgForOf, v.NgIf, v.NgTemplateOutlet, L.MatButton, Ce.MatExpansionPanel, Ce.MatExpansionPanelHeader, Ce.MatExpansionPanelTitle, ei.MatIcon, Q.MatMenu, Q.MatMenuItem, Q.MatMenuTrigger, ee.DefaultLayoutDirective, ee.DefaultFlexDirective, vt.DefaultClassDirective, _t, Rt, w.AttributePipe], styles: [".editable-pane-wrapper[_ngcontent-%COMP%]{margin-bottom:.25em;border-radius:4px;padding-left:.25em;box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f}.nested-panel-wrapper[_ngcontent-%COMP%]{margin-bottom:.25em}.inner-pane-wrapper[_ngcontent-%COMP%]{padding:0}.pane-header[_ngcontent-%COMP%]{background-color:#ccc;padding:0}.mat-mdc-menu-trigger[_ngcontent-%COMP%]{min-width:0;padding:0;margin:0}button.delete[_ngcontent-%COMP%]{float:right}.preview-area[_ngcontent-%COMP%]{display:none;position:relative}.preview-area.visible[_ngcontent-%COMP%]{display:block;height:300px;overflow-y:scroll;border:1px solid black;padding:.5em}.panel-name[_ngcontent-%COMP%]{float:right;padding-right:.5em}.pane-menu-trigger-wrapper[_ngcontent-%COMP%]{display:flex}.mat-expansion-panel[_ngcontent-%COMP%]{box-shadow:none}.mat-expansion-panel-header[_ngcontent-%COMP%]{padding:0 1em 0 .25em}"] }); }
} return r; })(), _t = (() => { class r {
    set ancestory(t) { this.ancestory$.next(t); }
    get ancestory() { return this.ancestory$.value; }
    get panels() { return this.contentForm.get("panels"); }
    get layoutType() { return this.contentForm.get("layoutType"); }
    get displayType() { return this.contentForm.get("displayType"); }
    get columnSettings() { let t = this.panels.length, i = []; for (let n = 0; n < t; n++)
        i = [...i, new O(this.panels.at(n).get("columnSetting").value)]; return i; }
    constructor(t, i, n, a, o, s, c, u, C, x, D, N, te, M) { this.siteName = t, this.cpm = i, this.spm = n, this.lpm = a, this.cxtm = o, this.fb = s, this.bs = c, this.dialog = u, this.panelHandler = C, this.tokenizerService = x, this.componentFactoryResolver = D, this.pageBuilderFacade = N, this.paneStateContextResolver = te, this.panelsContextService = M, this.submitted = new E, this.nestedUpdate = new E, this.delete = new E, this.rules = new E, this.props = new E, this.savable = !0, this.nested = !1, this.locked = !1, this.pageBuilder = !1, this.contexts = [], this.contentAdded = new z, this.contentAdddedSub = this.contentAdded.subscribe(([R, xe]) => { this.resolvePaneContexts(R, xe); }), this.dashboard = [], this.pageProperties = new we, this.persistence = new rt, this.interactions = new at, this.layoutSetting = new O, this.rowSettings = [], this.ancestory$ = new J([]), this.onTouched = () => { }, this.contentForm = this.fb.group({ name: this.fb.control(""), title: this.fb.control(""), layoutType: this.fb.control("split", g.required), displayType: this.fb.control("page", g.required), panels: this.fb.array([]) }), this.options = { gridType: Li.Fit, displayGrid: Bi.Always, pushItems: !0, draggable: { enabled: !0 }, resizable: { enabled: !0 }, mobileBreakpoint: 0, itemChangeCallback: (R, xe) => { }, itemInitCallback: (R, xe) => { if (this.nested && R.y !== 0) {
            let De = this.gridLayout.grid.findIndex(de => de.x === R.x && de.y === R.y && de.cols === R.cols && de.rows === R.rows);
            this.panelPanes(De).length === 0 && this.gridLayout.setItemContentHeight(De, 200);
        } } }, this.ancestorySub = this.ancestory$.pipe(I(() => !!this.layoutEditorRef)).subscribe(R => { this.layoutEditorRef.instance.ancestory = R; }); }
    ngOnInit() { this.contentForm.valueChanges.pipe(I(() => this.nested), ue(500)).subscribe(() => { this.nestedUpdate.emit(this.packageFormData()); }), this.contentForm.get("layoutType").valueChanges.pipe(I(t => t === "gridless"), je(1)).subscribe(t => { this.panels.length === 0 && this.panels.push(this.fb.group({ name: new p(""), label: new p(""), stylePlugin: new p(""), styleTitle: new p(""), settings: new q([]), panes: this.fb.array([]), columnSetting: this.fb.group({ settings: this.fb.array([]) }) })); }), this.contentForm.valueChanges.pipe(I(() => !this.nested), ue(500)).subscribe(() => { let t = this.packageFormData(); this.pageBuilderFacade.setPage(t); }); }
    ngAfterViewInit() { this.layoutType.valueChanges.pipe(I(() => !!this.layoutEditorHost)).subscribe(t => { this.renderEditorLayout(t); }), this.layoutType.value && this.renderEditorLayout(this.layoutType.value); }
    ngAfterContentInit() { setTimeout(() => { this.panelPage || this.contentForm.get("layoutType").setValue("split"); }, 1e3); }
    ngOnChanges(t) { t.panelPage && t.panelPage.previousValue !== t.panelPage.currentValue && (this.panels.clear(), this.panelPageId = t.panelPage.currentValue.panelPageId, this.dashboard = t.panelPage.currentValue.gridItems.map(i => Object.assign({}, i)), this.layoutType.setValue(t.panelPage.currentValue.layoutType), this.layoutSetting = new O(t.panelPage.currentValue.layoutSetting), this.rowSettings = t.panelPage.currentValue.rowSettings ? t.panelPage.currentValue.rowSettings.map(i => new O(i)) : [], this.persistence = t.panelPage.currentValue.persistence ? new rt(t.panelPage.currentValue.persistence) : new rt, this.interactions = t.panelPage.currentValue.interactions ? new at(t.panelPage.currentValue.interactions) : new at, this.nested ? (this.pageProperties = new we({ name: t.panelPage.currentValue.name, title: t.panelPage.currentValue.title, path: "", readUserIds: [], cssFile: "" }), this.contentForm.get("name").setValue(t.panelPage.currentValue.name), this.contentForm.get("title").setValue(t.panelPage.currentValue.title)) : (this.pageProperties = new we({ name: t.panelPage.currentValue.name, title: t.panelPage.currentValue.title, path: t.panelPage.currentValue.path, readUserIds: t.panelPage.currentValue.entityPermissions.readUserIds, cssFile: t.panelPage.currentValue.cssFile }), this.contexts = t.panelPage.currentValue.contexts), t.panelPage.currentValue.panels.forEach((i, n) => { this.panels.push(this.fb.group({ name: new p(i.name), label: new p(i.label), stylePlugin: new p(i.stylePlugin), styleTitle: new p(""), settings: this.fb.array(i.settings !== void 0 ? i.settings.map(a => this.convertToGroup(a)) : []), panes: this.fb.array([]), columnSetting: this.fb.group({ settings: this.fb.array(i.columnSetting ? i.columnSetting.settings.map(a => this.convertToGroup(a)) : []) }) })), i.stylePlugin && i.stylePlugin !== "" && this.spm.getPlugin(i.stylePlugin).subscribe(a => { this.panels.at(n).get("styleTitle").setValue(a.title); }), this.nested && this.panelPanes(this.panels.length - 1).valueChanges.pipe(ue(5), je(1)).subscribe((a => () => { if (this.gridLayout !== void 0) {
        let o = this.paneContainers.find((s, c) => c === a);
        this.gridLayout.setItemContentHeight(a, o.nativeElement.offsetHeight);
    } })(this.panels.length - 1)), i.panes.forEach((a, o) => { this.panels.at(n).get("panes").push(this.fb.group({ contentPlugin: a.contentPlugin, name: new p(a.name), label: new p(a.label), locked: new p(a.locked), linkedPageId: new p(a.linkedPageId), rule: new p(a.rule && a.rule !== null ? S(_({}, a.rule), { rules: a.rule.rules && Array.isArray(a.rule.rules) ? a.rule.rules : [] }) : { condition: "", rules: [] }), settings: new q(a.settings.map(s => this.convertToGroup(s))) })), setTimeout(() => this.resolvePaneContexts(n, o)); }); }), this.layoutEditorRef && (this.layoutEditorRef.instance.layoutSetting = this.layoutSetting, this.layoutEditorRef.instance.rowSettings = this.rowSettings, this.layoutEditorRef.instance.columnSettings = this.columnSettings)); }
    addContent(t) { console.log(this.panels.at(t)), this.pageBuilderFacade.getPage$.pipe(b(i => this.panelsContextService.allActivePageContexts({ panelPage: i })), V(1)).subscribe(i => { this.bs.open(Mr, { data: { panelForm: this.panels.at(t), panelIndex: t, contexts: [...this.rootContext ? [this.rootContext] : [], ...this.contexts, ...i] } }); }); }
    editPanelProps(t) { let i = this.panels.at(t).get("name"), n = this.panels.at(t).get("label"); this.dialog.open(Or, { data: { props: new Yt({ name: i.value, label: n.value }) } }).afterClosed().subscribe(a => { a && (i.setValue(a.name), n.setValue(a.label)); }); }
    editPaneProps(t, i) { let n = this.panelPane(t, i).get("name"), a = this.panelPane(t, i).get("label"); this.dialog.open(kr, { data: { props: new Xt({ name: n.value, label: a.value }) } }).afterClosed().subscribe(o => { o && (n.setValue(o.name), a.setValue(o.label)); }); }
    applyStyle(t) { this.bs.open(Dr, { data: { panelForm: this.panels.controls[t], panelIndex: t, contexts: this.contexts } }); }
    removeStyle(t) { this.panels.controls[t].get("stylePlugin").setValue(""), this.panels.controls[t].get("styleTitle").setValue(""); }
    onItemAdded() { console.log("item added"), this.panels.push(this.fb.group({ name: new p(""), label: new p(""), stylePlugin: new p(""), styleTitle: new p(""), settings: new q([]), panes: this.fb.array([]), columnSetting: this.fb.group({ settings: this.fb.array([]) }) })), this.nested && this.gridLayout !== void 0 && setTimeout(() => { this.paneContainers.forEach((t, i) => { this.gridLayout.setItemContentHeight(i, t.nativeElement.offsetHeight); }); }), this.panelPanes(this.panels.length - 1).valueChanges.pipe(I(() => this.nested && this.gridLayout !== void 0), ue(5), je(1)).subscribe((t => () => { let i = this.paneContainers.find((n, a) => a === t); this.gridLayout.setItemContentHeight(t, i.nativeElement.offsetHeight); })(this.panels.length - 1)), this.layoutEditorRef && (this.layoutEditorRef.instance.columnSettings = this.columnSettings); }
    onItemRemoved(t) { this.panels.removeAt(t), this.nested && this.gridLayout !== void 0 && setTimeout(() => { this.paneContainers.forEach((i, n) => { this.gridLayout.setItemContentHeight(n, i.nativeElement.offsetHeight); }); }), this.layoutEditorRef && (this.layoutEditorRef.instance.columnSettings = this.columnSettings); }
    onDrop(t) { console.log(t); let i = +t.container.data, n = +t.previousContainer.data; if (i === n) {
        let a = t.currentIndex > t.previousIndex ? 1 : -1, o = t.previousIndex, s = t.currentIndex, c = this.panelPanes(i).at(o);
        for (let u = o; u * a < s * a; u = u + a) {
            let C = this.panelPanes(i).at(u + a);
            this.panelPanes(i).setControl(u, C);
        }
        this.panelPanes(i).setControl(s, c);
    }
    else {
        let a = this.panelPanes(n).at(t.previousIndex);
        this.panelPanes(n).removeAt(t.previousIndex), this.panelPanes(i).insert(t.currentIndex, a);
    } }
    onOverrideRenderer(t, i) { let n = new j(this.panelPane(t, i).value); this.dialog.open(Er, { data: { panelFormGroup: this.panels.at(t), paneIndex: i, pane: n } }); }
    onRemoveOverrideRenderer(t, i) { let n = this.panelPane(t, i).get("settings"), a; n.controls.forEach((o, s) => { o.get("name").value === "_renderer" && (a = s); }), a !== void 0 && n.removeAt(a); }
    onNestedUpdate(t, i, n) { let a = this.panelHandler.buildSettings(t), o = this.panelPane(i, n).get("settings"); o.clear(), a.forEach(s => o.push(this.convertToGroup(s))); }
    onPaneHeightChange(t) { if (this.nested && this.gridLayout) {
        let i = this.paneContainers.find((n, a) => a === t);
        this.gridLayout.setItemContentHeight(t, i.nativeElement.offsetHeight);
    } }
    onDeleteClick() { this.delete.emit(); }
    onRulesClick() { this.rules.emit(); }
    onPropertiesClick() { this.props.emit(), this.dialog.open(jr, { data: { props: this.pageProperties } }).afterClosed().subscribe(t => { t && (this.pageProperties = new we(_({}, t)), this.contentForm.get("name").setValue(t.name), this.contentForm.get("title").setValue(t.title)); }); }
    onRulesPane(t, i) { let n = new j(this.panelPane(t, i).value), a = this.panelPane(t, i).get("rule").value !== "" ? this.panelPane(t, i).get("rule").value : void 0, [o] = this.editablePanes.filter((s, c) => s.name === n.name); this.pageBuilderFacade.getPage$.pipe(F(() => { this.pageBuilderFacade.setSelectionPath([...this.ancestory, t, i]); }), b(s => this.panelsContextService.allActivePageContexts({ panelPage: s })), b(s => this.dialog.open(Rr, { data: { rule: a, contexts: [...o.rootContext ? [o.rootContext] : this.rootContext ? [this.rootContext] : [], ...this.contexts, ...s] } }).afterClosed()), V(1)).subscribe(s => { this.panelPane(t, i).get("rule").setValue(s || a || void 0); }); }
    onDeletePane(t, i) { console.log(`delete nested pane: ${t} | ${i}`); }
    onAddContextClick() { let t = this.packageFormData(); this.pageBuilderFacade.setPage(t), this.dialog.open(Et, { data: {} }).afterClosed().subscribe(i => { i && (this.contexts = [...this.contexts, i]); }); }
    onEditContext(t) { let i = this.contexts.find(n => n.name === t); if (console.log(i), i) {
        let n = this.packageFormData();
        this.pageBuilderFacade.setPage(n), this.dialog.open(Et, { data: { context: i } }).afterClosed().subscribe(a => { a && (this.contexts = this.contexts.map(o => o.name === t ? new me(a) : o)); });
    } }
    onLayoutSettingChange(t) { this.layoutSetting = new O(t), this.nested && this.nestedUpdate.emit(this.packageFormData()), this.layoutEditorRef && (this.layoutEditorRef.instance.layoutSetting = this.layoutSetting); }
    onRowSettingsChange(t) { this.rowSettings = t.map(i => new O(i)), this.nested && this.nestedUpdate.emit(this.packageFormData()), this.layoutEditorRef && (this.layoutEditorRef.instance.rowSettings = this.rowSettings); }
    onColumnSettingsChange(t) { let i = this.panels.length; for (let n = 0; n < i; n++) {
        this.panels.at(n).get("columnSetting").get("settings").clear();
        for (let a = 0; a < t[n].settings.length; a++)
            this.panels.at(n).get("columnSetting").get("settings").push(this.convertToGroup(t[n].settings[a]));
    } this.nested && this.nestedUpdate.emit(this.packageFormData()), this.layoutEditorRef && (this.layoutEditorRef.instance.columnSettings = this.columnSettings); }
    submit() { this.submitted.emit(this.packageFormData()); }
    packageFormData() { let t = this.layoutEditorRef.instance.gridItems, i = new _e({ id: this.panelPageId, title: this.pageProperties.title, name: this.pageProperties.name, site: this.siteName, path: this.pageProperties.path, cssFile: this.pageProperties.cssFile, displayType: this.displayType.value, layoutType: this.layoutType.value, gridItems: t, contexts: this.contexts, panels: this.panels.value, layoutSetting: new O(this.layoutSetting), rowSettings: this.rowSettings.map(n => new O(n)), persistence: this.persistence, interactions: this.interactions, entityPermissions: { readUserIds: this.pageProperties.readUserIds, writeUserIds: [], deleteUserIds: [] } }); return console.log(i), i; }
    syncNestedPanelPages() { console.log("sync nested"), this.editablePanes.forEach(t => { if (t.contentEditor !== void 0) {
        let i = this.panelHandler.buildSettings(t.contentEditor.packageFormData()), n = this.panelPane(t.panelIndex, t.paneIndex).get("settings");
        n.clear(), i.forEach(a => n.push(this.convertToGroup(a)));
    } }); }
    resolvePaneContexts(t, i) { let n = new j(this.panelPane(t, i).value), a = this.panelPanes(t).controls; this.cpm.getPlugin(n.contentPlugin).pipe(I(o => o.handler !== void 0 && o.handler.isDynamic(n.settings)), b(o => o.handler.fetchDynamicData(n.settings, new Map([["tag", W()], ["contexts", [...this.contexts]]])).pipe(m(s => new me({ name: "_root", adaptor: "data", data: s.length !== 0 ? s.results[0] : {} })), b(s => o.handler.getBindings(n.settings, "pane").pipe(m(c => [s, c.map(u => a.findIndex(C => new j(C.value).name === u.id))])))))).subscribe(([o, s]) => { this.editablePanes.forEach((c, u) => { s.findIndex(C => C === u) > -1 && (c.rootContext = o); }); }); }
    onPersistenceClick() { this.dialog.open(en, { data: { persistence: this.persistence, contexts: this.contexts } }).afterClosed().subscribe(t => { console.log("persistence closed", t), this.persistence = t || this.persistence; }); }
    onInteractionsClick() { this.dialog.open(tn, { data: { interactions: this.interactions, contexts: this.contexts }, maxWidth: "100vw", maxHeight: "100vh", height: "100%", width: "100%" }).afterClosed().subscribe(t => { console.log("interactions closed", t), this.interactions = t || this.interactions; }); }
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
    onPaneEdit(t, i) { let n = new j(this.panelPane(t, i).value), a = this.panelPanePlugin(t, i), [o] = this.editablePanes.filter((s, c) => s.name === n.name); this.cpm.getPlugin(a).pipe(I(s => s.editorComponent !== void 0), b(s => this.pageBuilderFacade.getPage$.pipe(b(c => this.panelsContextService.allActivePageContexts({ panelPage: c }).pipe(m(u => [s, u]), V(1))), V(1))), b(([s, c]) => s.handler ? s.handler.editorOptions(n.settings).pipe(m(u => [s, c, u])) : f([s, c, new ce]))).subscribe(([s, c, u]) => { this.dialog.open(s.editorComponent, _({ data: { panelFormGroup: this.panels.at(t), panelIndex: t, paneIndex: i, contexts: [...o.rootContext ? [o.rootContext] : this.rootContext ? [this.rootContext] : [], ...this.contexts, ...c], contentAdded: this.contentAdded, pane: n } }, u.fullscreen ? { maxWidth: "100vw", maxHeight: "100vh", height: "100%", width: "100%" } : {})).afterClosed().subscribe(() => { this.resolvePaneContexts(t, i); }); }); }
    onPaneDelete(t, i) { this.panelPanes(t).removeAt(i); }
    onFileChange(t, i) { let n = t.addedFiles[0]; this.cpm.getPlugins().pipe(m(a => Array.from(a.values()).filter(o => o.handler !== void 0).find(o => o.handler.handlesType(n.type))), I(a => a !== void 0)).subscribe(a => { a.handler.handleFile(n).subscribe(o => { this.panelPanes(i).push(this.fb.group({ contentPlugin: a.id, name: new p(""), label: new p(""), settings: this.fb.array(o.map(s => this.fb.group({ name: new p(s.name, g.required), type: new p(s.type, g.required), displayName: new p(s.displayName, g.required), value: new p(s.value, g.required), computedValue: new p(s.value, g.required) }))) })); }); }); }
    writeValue(t) { t && this.contentForm.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.contentForm.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.contentForm.disable() : this.contentForm.enable(); }
    validate(t) { return this.contentForm.valid ? null : { invalidForm: { valid: !1, message: "content is invalid" } }; }
    convertToGroup(t) { let i = this.fb.group({ name: new p(t.name, g.required), type: new p(t.type, g.required), displayName: new p(t.displayName, g.required), value: new p(t.value, g.required), computedValue: new p(t.value, g.required), attributes: new q([]) }); return t.attributes && t.attributes.length > 0 && t.attributes.forEach(n => { i.get("attributes").push(this.convertToGroup(n)); }), i; }
    renderEditorLayout(t) { console.log(`render editor layout ${t}`), this.lpm.getPlugin(t).subscribe(i => { let n = this.componentFactoryResolver.resolveComponentFactory(i.editor), a = this.layoutEditorHost.viewContainerRef; a.clear(), this.layoutEditorRef = a.createComponent(n), this.layoutEditorRef.instance.savable = this.savable, this.layoutEditorRef.instance.nested = this.nested, this.layoutEditorRef.instance.ancestory = this.ancestory, this.layoutEditorRef.instance.editor = this, this.layoutEditorRef.instance.extraActionsAreaTmpl = this.extraActionsAreaTmpl, this.layoutEditorRef.instance.contextsMenuTpl = this.contextsMenuTpl, this.layoutEditorRef.instance.editablePaneTpl = this.editablePaneTpl, this.layoutEditorRef.instance.dashboard = this.dashboard, this.layoutEditorRef.instance.layoutSetting = this.layoutSetting, this.layoutEditorRef.instance.rowSettings = this.rowSettings, this.layoutEditorRef.instance.columnSettings = this.columnSettings; }); }
    updateEditorLayoutVars() { this.layoutEditorRef.instance.savable = this.savable, this.layoutEditorRef.instance.nested = this.nested, this.layoutEditorRef.instance.ancestory = this.ancestory, this.layoutEditorRef.instance.editor = this, this.layoutEditorRef.instance.extraActionsAreaTmpl = this.extraActionsAreaTmpl, this.layoutEditorRef.instance.contextsMenuTpl = this.contextsMenuTpl, this.layoutEditorRef.instance.editablePaneTpl = this.editablePaneTpl, this.layoutEditorRef.instance.dashboard = this.dashboard, this.layoutEditorRef.instance.layoutSetting = this.layoutSetting, this.layoutEditorRef.instance.rowSettings = this.rowSettings, this.layoutEditorRef.instance.columnSettings = this.columnSettings; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(qe), e.\u0275\u0275directiveInject(be.ContentPluginManager), e.\u0275\u0275directiveInject(y.StylePluginManager), e.\u0275\u0275directiveInject(Ut.LayoutPluginManager), e.\u0275\u0275directiveInject(G.ContextPluginManager), e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(ye.MatBottomSheet), e.\u0275\u0275directiveInject(h.MatDialog), e.\u0275\u0275directiveInject(y.PanelContentHandler), e.\u0275\u0275directiveInject(k.TokenizerService), e.\u0275\u0275directiveInject(e.ComponentFactoryResolver), e.\u0275\u0275directiveInject(y.PageBuilderFacade), e.\u0275\u0275directiveInject(pt), e.\u0275\u0275directiveInject(y.PanelsContextService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-content-editor"]], contentQueries: function (i, n, a) { if (i & 1 && e.\u0275\u0275contentQuery(a, Dn, 5), i & 2) {
            let o;
            e.\u0275\u0275queryRefresh(o = e.\u0275\u0275loadQuery()) && (n.extraActionsAreaTmpl = o.first);
        } }, viewQuery: function (i, n) { if (i & 1 && (e.\u0275\u0275viewQuery(ji, 5), e.\u0275\u0275viewQuery(Oi, 5), e.\u0275\u0275viewQuery(Dt, 5), e.\u0275\u0275viewQuery(Rn, 7), e.\u0275\u0275viewQuery(jn, 7), e.\u0275\u0275viewQuery(On, 5), e.\u0275\u0275viewQuery(jt, 5)), i & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.gridLayout = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.splitLayout = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.layoutEditorHost = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.contextsMenuTpl = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.editablePaneTpl = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.paneContainers = a), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.editablePanes = a);
        } }, inputs: { panelPage: "panelPage", savable: "savable", nested: "nested", locked: "locked", pageBuilder: "pageBuilder", contexts: "contexts", rootContext: "rootContext", ancestory: "ancestory" }, outputs: { submitted: "submitted", nestedUpdate: "nestedUpdate", delete: "delete", rules: "rules", props: "props" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: ze, useExisting: Y(() => r), multi: !0 }, { provide: Be, useExisting: Y(() => r), multi: !0 }]), e.\u0275\u0275NgOnChangesFeature], decls: 12, vars: 3, consts: [["nestedTpl", ""], ["editablePaneTpl", ""], ["contextsMenuTpl", ""], ["contextMenu", "matMenu"], ["class", "content-editor-wrapper", 3, "formGroup", "ngClass", "ngSubmit", 4, "ngIf", "ngIfElse"], ["type", "button", "mat-menu-item", "", 3, "click"], ["type", "button", "mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "content-editor-wrapper", 3, "ngSubmit", "formGroup", "ngClass"], ["classifiedsUiLayoutEditorHost", ""], [1, "content-editor-wrapper", 3, "formGroup", "ngClass"], [1, "editable-pane", 3, "delete", "rules", "nestedUpdate", "rendererOverride", "removeRendererOverride", "edit", "props", "panelIndex", "paneIndex", "name", "label", "locked", "contexts", "pluginName", "settings", "ancestory"], ["class", "custom-placeholder", 4, "cdkDragPlaceholder"], [1, "custom-placeholder"], ["type", "button", "mat-menu-item", "", 1, "context-button", 3, "matMenuTriggerFor"]], template: function (i, n) { if (i & 1) {
            let a = e.\u0275\u0275getCurrentView();
            e.\u0275\u0275template(0, Nn, 3, 4, "form", 4)(1, Gn, 3, 4, "ng-template", null, 0, e.\u0275\u0275templateRefExtractor)(3, zn, 2, 9, "ng-template", null, 1, e.\u0275\u0275templateRefExtractor)(5, Bn, 2, 1, "ng-template", null, 2, e.\u0275\u0275templateRefExtractor), e.\u0275\u0275elementStart(7, "mat-menu", null, 3)(9, "button", 5), e.\u0275\u0275listener("click", function () { return e.\u0275\u0275restoreView(a), e.\u0275\u0275resetView(n.onAddContextClick()); }), e.\u0275\u0275text(10, "define variable"), e.\u0275\u0275elementEnd(), e.\u0275\u0275template(11, Ln, 2, 1, "button", 6), e.\u0275\u0275elementEnd();
        } if (i & 2) {
            let a = e.\u0275\u0275reference(2);
            e.\u0275\u0275property("ngIf", !n.nested && !n.pageBuilder)("ngIfElse", a), e.\u0275\u0275advance(11), e.\u0275\u0275property("ngForOf", n.contexts);
        } }, dependencies: [v.NgClass, v.NgForOf, v.NgIf, l.\u0275NgNoValidate, l.NgControlStatusGroup, l.FormGroupDirective, ti.CdkDragPlaceholder, Q.MatMenu, Q.MatMenuItem, Q.MatMenuTrigger, vt.DefaultClassDirective, Dt, jt], styles: [".content-editor-wrapper[_ngcontent-%COMP%]{height:100%}.panel-inner[_ngcontent-%COMP%]{padding:1em}.content-editor-wrapper[_ngcontent-%COMP%]     ngx-dropzone{height:100%;display:block;padding:0;border:none}.content-editor-wrapper.nested[_ngcontent-%COMP%]     .grid-item-header{border-bottom:1px solid white}.layout-type[_ngcontent-%COMP%], .display-type[_ngcontent-%COMP%]{float:right}.layout-type[_ngcontent-%COMP%]     .mat-form-field-wrapper, .display-type[_ngcontent-%COMP%]     .mat-form-field-wrapper{padding-bottom:1.5em}.layout-type[_ngcontent-%COMP%]     .mat-form-field-label-wrapper, .display-type[_ngcontent-%COMP%]     .mat-form-field-label-wrapper{display:none}.layout-type[_ngcontent-%COMP%]     .mat-form-field-infix, .display-type[_ngcontent-%COMP%]     .mat-form-field-infix{border-top:none;padding:0;margin:0}.layout-type[_ngcontent-%COMP%]     .mat-mdc-form-field, .display-type[_ngcontent-%COMP%]     .mat-mdc-form-field{width:85px}.layout-type[_ngcontent-%COMP%]     .mat-select-value, .display-type[_ngcontent-%COMP%]     .mat-select-value{text-align:right}.layout-type[_ngcontent-%COMP%]     .mat-form-field-underline, .display-type[_ngcontent-%COMP%]     .mat-form-field-underline{display:none}classifieds-ui-gridless-layout[_ngcontent-%COMP%]     .main-controls{background-color:#ccc}classifieds-ui-gridless-layout[_ngcontent-%COMP%]     .layout-inner{background-color:#ccc;padding:.75em}classifieds-ui-gridless-layout[_ngcontent-%COMP%]     .editable-pane-wrapper{border:none;margin-bottom:0}classifieds-ui-gridless-layout[_ngcontent-%COMP%]     .pane-header{background-color:#fff}classifieds-ui-gridless-layout[_ngcontent-%COMP%]     .nested-panel-wrapper{padding:.75em;margin-bottom:0}.custom-placeholder[_ngcontent-%COMP%]{background:#ccc;border:dotted 3px #999;transition:transform .25s cubic-bezier(0,0,.2,1)}.context-button[_ngcontent-%COMP%]{font-style:italic;font-family:serif;font-weight:bolder;font-size:medium}"] }); }
} return r; })(), Nr = (() => { class r {
    constructor(t, i, n) { this.data = t, this.fb = i, this.handler = n; }
    ngOnInit() { this.data.pane !== void 0 && this.handler.toObject(this.data.pane.settings).subscribe(t => { this.snippet = t; }); }
    onSubmit(t) { if (this.data.paneIndex === void 0)
        this.data.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "snippet", name: new p(""), label: new p(""), rule: new p(""), settings: new q(this.buildSettings(t)) }));
    else {
        let i = this.data.panelFormGroup.get("panes").at(this.data.paneIndex);
        i.get("settings").clear(), this.buildSettings(t).forEach(n => { i.get("settings").push(n); });
    } }
    buildSettings(t) { return [this.fb.group({ name: new p("contentType", g.required), type: new p(ne.Text, g.required), displayName: new p("Content Type", g.required), value: new p(t.contentType, g.required), computedValue: new p(t.contentType, g.required) }), this.fb.group({ name: new p("content", g.required), type: new p(ne.Text, g.required), displayName: new p("Content", g.required), value: new p(t.content, g.required), computedValue: new p(t.content, g.required) }), this.fb.group({ name: new p("jsScript", g.required), type: new p(ne.Text, g.required), displayName: new p("jsScript", g.required), value: new p(t.jsScript), computedValue: new p(t.jsScript) })]; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(A), e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(re)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-snippet-editor2"]], standalone: !1, decls: 1, vars: 1, consts: [[3, "submitted", "snippet"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "classifieds-ui-snippet-form", 0), e.\u0275\u0275listener("submitted", function (o) { return n.onSubmit(o); }), e.\u0275\u0275elementEnd()), i & 2 && e.\u0275\u0275property("snippet", n.snippet); }, dependencies: [Ue.SnippetFormComponent], encapsulation: 2 }); }
} return r; })(), si = (() => { class r {
    constructor(t, i, n, a, o, s, c) { this.route = t, this.pageBuilderFacade = i, this.routerStore = n, this.asyncApiCallHelperSvc = a, this.crudDataHelperService = o, this.entityDefinitionService = s, this.paramMapSub = this.route.paramMap.pipe(F(() => console.log("param map panelPageId")), m(u => u.get("panelPageId")), I(u => u !== void 0), b(() => this.route.data), Pt(this.routerStore.pipe(K(dt(u => u.router).selectCurrentRoute), m(u => u.params), V(1))), F(([u, C]) => { console.log("route page"); let x = "/pages/panelpage/" + u.panelPageListItem.id; this.pageBuilderFacade.setPageInfo(new Ve({ id: u.panelPageListItem.id, realPath: x, path: u.panelPageListItem.path, args: C })), this.panelPageId = u.panelPageListItem.id; })).subscribe(), this.panelPageService = c.getEntityCollectionService("PanelPage"); }
    ngOnInit() { let { selectCurrentRoute: t } = dt(i => i.router); this.route.paramMap.pipe(F(() => console.log("param map page builder facade info")), Pt(this.pageBuilderFacade.getPageInfo$), I(([i, n]) => n !== void 0 && i.get("panelPageId") !== void 0 && i.get("panelPageId") === n.id), b(([i, n]) => this.routerStore.pipe(K(t), m(a => [n, a.params]), V(1)))).subscribe(([i, n]) => { this.pageBuilderFacade.setPageInfo(new Ve(S(_({}, i), { args: n }))); }); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(le.ActivatedRoute), e.\u0275\u0275directiveInject(y.PageBuilderFacade), e.\u0275\u0275directiveInject(se.Store), e.\u0275\u0275directiveInject(X.AsyncApiCallHelperService), e.\u0275\u0275directiveInject(Me.CrudDataHelperService), e.\u0275\u0275directiveInject(T.EntityDefinitionService), e.\u0275\u0275directiveInject(T.EntityServices)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-panel-page-router"]], standalone: !1, decls: 1, vars: 1, consts: [[3, "id"]], template: function (i, n) { i & 1 && e.\u0275\u0275element(0, "classifieds-ui-panel-page", 0), i & 2 && e.\u0275\u0275property("id", n.panelPageId); }, dependencies: [Ee.PanelPageComponent], encapsulation: 2 }); }
} return r; })(), Vr = (() => { class r {
    constructor(t) { this.panelPageService = t.getEntityCollectionService("PanelPage"), this.panelPageListItemService = t.getEntityCollectionService("PanelPageListItem"); }
    ngOnInit() { console.log("here"); }
    onSubmit(t) { console.log("create panel page", t), t.id = W(), this.panelPageService.add(t).subscribe(() => { console.log("panel page created"); }); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(T.EntityServices)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-create-panel-page"]], standalone: !1, decls: 1, vars: 0, consts: [[3, "submitted"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "classifieds-ui-content-editor", 0), e.\u0275\u0275listener("submitted", function (o) { return n.onSubmit(o); }), e.\u0275\u0275elementEnd()); }, dependencies: [_t], encapsulation: 2 }); }
} return r; })(), li = (() => { class r {
    constructor(t, i, n, a, o) { this.route = t, this.pageBuilderFacade = i, this.routerStore = n, this.moduleLoader = a, this.panelPageService = o.getEntityCollectionService("PanelPage"), this.panelPageListItemService = o.getEntityCollectionService("PanelPageListItem"); }
    ngOnInit() { this.route.paramMap.pipe(m(t => t.get("panelPageId")), I(t => t !== void 0), ft(), b(t => this.panelPageService.getByKey(t)), b(t => t ? We(t.contexts.filter(i => i.plugin === "module").map(i => this.moduleLoader.loadModule(() => xt({ remoteEntry: i.data.remoteEntry, remoteName: "plugin", exposedModule: i.data.exposedModule }).then(n => n[i.data.moduleName])))).pipe(je(1), m(() => t), ht(t)) : f(t)), b(t => this.routerStore.pipe(K(dt(i => i.router).selectCurrentRoute), m(i => [t, i.params]), V(1))), F(([t, i]) => this.pageBuilderFacade.setPageInfo(new Ve({ id: t.id, realPath: `/pages/panelpage/${t.id}`, path: t.path, args: i })))).subscribe(([t]) => { console.log(t), this.panelPage = t; }); }
    onSubmit(t) { console.log("submitted"), this.panelPageService.update(new _e(S(_({}, t), { id: this.panelPage.id }))).subscribe(() => { alert("panel page updated"); }); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(le.ActivatedRoute), e.\u0275\u0275directiveInject(y.PageBuilderFacade), e.\u0275\u0275directiveInject(se.Store), e.\u0275\u0275directiveInject(X.ModuleLoaderService), e.\u0275\u0275directiveInject(T.EntityServices)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-edit-panel-page"]], standalone: !1, decls: 1, vars: 1, consts: [[3, "submitted", "panelPage"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "classifieds-ui-content-editor", 0), e.\u0275\u0275listener("submitted", function (o) { return n.onSubmit(o); }), e.\u0275\u0275elementEnd()), i & 2 && e.\u0275\u0275property("panelPage", n.panelPage); }, dependencies: [_t], encapsulation: 2 }); }
} return r; })(), Gr = (() => { class r {
    constructor(t, i, n, a, o, s) { this.bottomSheetRef = t, this.handler = i, this.fb = n, this.dialog = a, this.cpm = o, this.wpm = s; }
    ngOnInit() { this.attributeWidgets = this.wpm.getPlugins(); }
    onItemSelect(t) { console.log(t), this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "attribute", name: new p(""), label: new p(""), rule: new p(""), settings: this.fb.array(this.handler.widgetSettings(t).map(o => this.fb.group({ name: new p(o.name, g.required), type: new p(o.type, g.required), displayName: new p(o.displayName, g.required), value: new p(o.value, g.required), computedValue: new p(o.computedValue, g.required) }))) })); let i = this.panelFormGroup.get("panes"), n = i.length - 1, a = new j(i.at(n).value); this.cpm.getPlugin("attribute").subscribe(o => { this.dialog.open(o.editorComponent, { data: { panelFormGroup: this.panelFormGroup, pane: a, paneIndex: n } }); }), this.bottomSheetRef.dismiss(); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(ye.MatBottomSheetRef), e.\u0275\u0275directiveInject(ae), e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(h.MatDialog), e.\u0275\u0275directiveInject(be.ContentPluginManager), e.\u0275\u0275directiveInject(w.WidgetPluginManager)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-attribute-selector"]], inputs: { panelFormGroup: "panelFormGroup" }, standalone: !1, decls: 4, vars: 5, consts: [["mat-list-item", "", "mat-list-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-list-item", "", "mat-list-item", "", 3, "click"], ["mat-line", ""]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "mat-nav-list"), e.\u0275\u0275template(1, qn, 3, 1, "a", 0), e.\u0275\u0275pipe(2, "async"), e.\u0275\u0275pipe(3, "keyvalue"), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275advance(), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(3, 3, e.\u0275\u0275pipeBind1(2, 1, n.attributeWidgets)))); }, dependencies: [v.NgForOf, Qe.MatLine, Z.MatNavList, Z.MatListItem, v.AsyncPipe, v.KeyValuePipe], encapsulation: 2 }); }
} return r; })(), Ar = (() => { class r {
    get name() { return this.attributesFormGroup.get("name"); }
    get label() { return this.attributesFormGroup.get("label"); }
    constructor(t, i, n, a, o) { this.data = t, this.dialogRef = n, this.fb = a, this.handler = o, this.attributes = [], this.attributeValues = [], this.attributesFormGroup = this.fb.group({ name: new p(""), label: new p(""), attributes: new p("") }); let s = this.data.pane.settings.find(c => c.name === "widget"); this.widget = i.find(c => c.name === s.value); }
    ngOnInit() { let t = this.data.pane.settings.find(a => a.name === "value"); this.attributes = [new Lt(S(_({}, this.widget.schema), { widget: this.widget.name, label: "Value", name: "value" }))]; let i = this.data.panelFormGroup.get("panes").at(this.data.paneIndex).get("name").value, n = this.data.panelFormGroup.get("panes").at(this.data.paneIndex).get("label").value; this.attributesFormGroup.get("name").setValue(i), this.attributesFormGroup.get("label").setValue(n), t !== void 0 ? (this.attributeValues = this.handler.valueSettings(this.data.pane.settings), console.log(this.attributeValues)) : this.attributeValues = [new oe({ name: "value", type: this.widget.schema.type, displayName: "Value", value: "", computedValue: "", intValue: 0, attributes: [] })]; }
    submit() { let t = this.name.value, i = this.label.value; this.data.panelFormGroup.get("panes").at(this.data.paneIndex).get("name").setValue(t), this.data.panelFormGroup.get("panes").at(this.data.paneIndex).get("label").setValue(i); let n = new j({ name: t, label: i, contentPlugin: "attribute", settings: this.attributesFormGroup.get("attributes").value === "" ? [] : this.attributesFormGroup.get("attributes").value }); n.settings.length !== 0 ? this.handler.rendererSnippet(this.data.pane.settings).subscribe(a => { let o = a !== void 0 ? this.handler.rendererOverrideSettings(a) : [], s = this.data.panelFormGroup.get("panes").at(this.data.paneIndex).get("settings"); s.clear(), [...this.handler.widgetSettings(this.widget), ...n.settings, ...o].forEach(c => s.push(this.convertToGroup(c))), this.dialogRef.close(); }) : this.dialogRef.close(); }
    convertToGroup(t) { let i = this.fb.group({ name: new p(t.name, g.required), type: new p(t.type, g.required), displayName: new p(t.displayName, g.required), value: new p(t.value, g.required), computedValue: new p(t.value, g.required), attributes: new q([]) }); return t.attributes && t.attributes.length > 0 && t.attributes.forEach(n => { i.get("attributes").push(this.convertToGroup(n)); }), i; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(A), e.\u0275\u0275directiveInject(qt), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(ae)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-attribute-editor"]], standalone: !1, decls: 10, vars: 3, consts: [[3, "ngSubmit", "formGroup"], ["fxLayout", "column"], ["matInput", "", "placeholder", "Name", "formControlName", "name"], ["matInput", "", "placeholder", "Label", "formControlName", "label"], ["formControlName", "attributes", 3, "attributes", "attributeValues"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", ""]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content", 1)(2, "mat-form-field"), e.\u0275\u0275element(3, "input", 2), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(4, "mat-form-field"), e.\u0275\u0275element(5, "input", 3), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(6, "classifieds-ui-attributes-builder", 4), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(7, "mat-dialog-actions")(8, "button", 5), e.\u0275\u0275text(9, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.attributesFormGroup), e.\u0275\u0275advance(6), e.\u0275\u0275property("attributes", n.attributes)("attributeValues", n.attributeValues)); }, dependencies: [l.\u0275NgNoValidate, l.DefaultValueAccessor, l.NgControlStatus, l.NgControlStatusGroup, l.FormGroupDirective, l.FormControlName, L.MatButton, h.MatDialogClose, h.MatDialogActions, h.MatDialogContent, P.MatInput, P.MatFormField, ee.DefaultLayoutDirective, w.AttributesBuilderComponent], encapsulation: 2 }); }
} return r; })(), zr = (() => { class r {
    constructor(t, i, n, a, o) { this.widgets = t, this.handler = i, this.tokenizerService = n, this.fb = a, this.controlContainer = o, this.settings = [], this.appearance = "legacy", this.attributes = []; }
    ngOnInit() { this.attributes = [new Lt(S(_({}, this.widgets.find(t => t.name === this.settings.find(i => i.name === "widget").value).schema), { name: "value", label: "Value" }))], this.attributeValues = this.handler.valueSettings(this.settings), this.tokens = this.tokenizerService.generateTokens(this.attributeValues), this.handler.rendererSnippet(this.settings).subscribe(t => { this.rendererOverride = t, t !== void 0 && (this.rendererSettings = this.handler.rendererOverrideSettings(t)[0].attributes); }); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(qt), e.\u0275\u0275directiveInject(ae), e.\u0275\u0275directiveInject(k.TokenizerService), e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(l.ControlContainer, 8)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-attribute-pane-renderer"]], inputs: { settings: "settings", appearance: "appearance", name: "name", label: "label", displayType: "displayType" }, standalone: !1, decls: 3, vars: 2, consts: [["overrideTpl", ""], ["settingsTmpl", ""], [4, "ngIf", "ngIfElse"], [4, "ngIf"], [3, "formGroup", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngFor", "ngForOf"], [3, "formGroup"], ["formControlName", "settings", 3, "attributes", "attributeValues"], [3, "settings", "tokens"]], template: function (i, n) { if (i & 1 && e.\u0275\u0275template(0, er, 3, 2, "div", 2)(1, tr, 1, 2, "ng-template", null, 0, e.\u0275\u0275templateRefExtractor), i & 2) {
            let a = e.\u0275\u0275reference(2);
            e.\u0275\u0275property("ngIf", !n.rendererOverride)("ngIfElse", a);
        } }, dependencies: [v.NgForOf, v.NgIf, v.NgTemplateOutlet, l.NgControlStatus, l.NgControlStatusGroup, l.FormGroupDirective, l.FormControlName, w.AttributesBuilderComponent, oi, w.AttributePipe], styles: [".override[_ngcontent-%COMP%]{position:absolute;top:.5em;right:.5em}"] }); }
} return r; })(), fe = (() => { class r {
    constructor(t, i) { this.filesService = t, this.attributeSerializer = i, this.types = ["image/png", "image/jpg", "image/jpeg", "image/gif"]; }
    handleFile(t) { return this.filesService.bulkUpload({ files: [t] }).pipe(m(i => this.buildSettings(i[0]))); }
    handlesType(t) { return this.types.find(i => i === t) !== void 0; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(t) { return f(!1); }
    isDynamic(t) { return !1; }
    isData(t) { return !1; }
    buildDynamicItems(t, i) { return f([]); }
    fetchDynamicData(t, i) { return f(new H); }
    getBindings(t, i, n) { return f([]); }
    toObject(t) { return f(this.attributeSerializer.deserializeAsObject(t)); }
    buildSettings(t) { return t.fileName = "placeholdername", this.attributeSerializer.serialize(t, "root").attributes; }
    stateDefinition(t) { return f({ mediaLoading: "y", mediaLoaded: "n", loadError: "n", loadDuration: "y" }); }
    editorOptions(t) { return f(new ce); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(mt.FilesService), e.\u0275\u0275inject(w.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), Br = (() => { class r {
    constructor(t, i, n, a, o) { this.data = t, this.dialogRef = i, this.fb = n, this.filesService = a, this.handler = o, this.mediaTypes = ".png,.jpg,.jpeg,.gif,.svg"; }
    ngOnInit() { this.data.pane !== void 0 && this.handler.toObject(this.data.pane.settings).pipe(b(t => this.filesService.convertToFiles([t]))).subscribe(t => { this.media = t[0]; }); }
    onSelectMedia(t) { this.media = t.addedFiles[0], this.handler.handleFile(this.media).subscribe(i => { this.data.paneIndex === void 0 && this.data.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "media", name: new p(""), label: new p(""), rule: new p(""), settings: new q(i.map(n => this.fb.group({ name: new p(n.name, g.required), type: new p(n.type, g.required), displayName: new p(n.displayName, g.required), value: new p(n.value, g.required), computedValue: new p(n.value, g.required) }))) })), this.dialogRef.close(); }); }
    onRemoveMedia(t) { this.media = void 0; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(A), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(mt.FilesService), e.\u0275\u0275directiveInject(fe)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-media-editor"]], standalone: !1, decls: 4, vars: 3, consts: [[3, "change", "multiple", "accept"], [3, "removable", "file", "removed", 4, "ngIf"], [3, "removed", "removable", "file"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "ngx-dropzone", 0), e.\u0275\u0275listener("change", function (o) { return n.onSelectMedia(o); }), e.\u0275\u0275elementStart(1, "ngx-dropzone-label"), e.\u0275\u0275text(2, "Drag and Drop Media Here"), e.\u0275\u0275elementEnd(), e.\u0275\u0275template(3, ir, 3, 4, "ngx-dropzone-image-preview", 1), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("multiple", !1)("accept", n.mediaTypes), e.\u0275\u0275advance(3), e.\u0275\u0275property("ngIf", n.media)); }, dependencies: [v.NgIf, ve.NgxDropzoneComponent, ve.NgxDropzoneLabelDirective, ve.NgxDropzoneImagePreviewComponent], encapsulation: 2 }); }
} return r; })(), Lr = (() => { class r {
    constructor(t, i, n, a) { this.mediaSettings = t, this.handler = i, this.attributeSerializer = n, this.settings = [], this.ancestory = [], this.state = {}, this.stateChange = new E, this.panelPageStateService = a.getEntityCollectionService("PanelPageState"); }
    ngOnInit() { console.log("media ancestory is"), console.log(this.ancestory), console.log("my state is:"), console.log(this.state), this.mediaBaseUrl = this.mediaSettings.imageUrl, this.handler.toObject(this.settings).subscribe(t => { this.mediaFile = t; }); }
    ngAfterViewInit() { this.image.nativeElement.onload = () => { console.log("image loaded"), this.stateChange.emit({ mediaLoading: "n" }); }; }
    ngOnChanges() { this.mediaBaseUrl = this.mediaSettings.imageUrl, this.handler.toObject(this.settings).subscribe(t => { this.mediaFile = t; }); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(Ii), e.\u0275\u0275directiveInject(fe), e.\u0275\u0275directiveInject(w.AttributeSerializerService), e.\u0275\u0275directiveInject(T.EntityServices)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-media-pane-renderer"]], viewQuery: function (i, n) { if (i & 1 && e.\u0275\u0275viewQuery(nr, 7), i & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.image = a.first);
        } }, inputs: { settings: "settings", ancestory: "ancestory", state: "state" }, outputs: { stateChange: "stateChange" }, standalone: !1, features: [e.\u0275\u0275NgOnChangesFeature], decls: 2, vars: 3, consts: [["img", ""], [3, "src"]], template: function (i, n) { i & 1 && e.\u0275\u0275element(0, "img", 1, 0), i & 2 && e.\u0275\u0275property("src", e.\u0275\u0275interpolate2("", n.mediaBaseUrl, "/", n.mediaFile.path), e.\u0275\u0275sanitizeUrl); }, styles: ["img[_ngcontent-%COMP%]{max-width:100%}"] }); }
} return r; })(), Fe = (() => { class r {
    constructor(t, i, n, a, o, s, c, u, C) { this.siteName = t, this.snippetHandler = i, this.pageBuilderFacade = n, this.store = a, this.tokenizerService = o, this.panelHandler = s, this.urlGeneratorService = c, this.attributeSerializer = u, this.rulesResolver = C; }
    handleFile(t) { return f([]); }
    handlesType(t) { return !1; }
    implementsRendererOverride() { return !0; }
    hasRendererOverride(t) { return f(!1); }
    isDynamic(t) { return ["snippet", "pane"].indexOf(this.getRenderType(t)) > -1; }
    isData(t) { return !1; }
    fetchDynamicData(t, i) { let n = new z; return this.toObject(t).pipe(b(a => this.urlGeneratorService.getUrl(a.url, a.params, i).pipe(m(o => [a, o])))).subscribe(([a, o]) => { this.pageBuilderFacade.loadRestData(`${i.get("tag")}`, new ge(S(_({}, a), { url: o }))), this.store.pipe(K(Oe(`${i.get("tag")}`)), I(s => s !== void 0)).subscribe(s => { n.next(s), n.complete(); }); }), n; }
    buildDynamicItems(t, i) { let n = new z; return console.log("build dynamic items rest"), this.toObject(t).pipe(b(a => this.urlGeneratorService.getUrl(a.url, a.params, i).pipe(m(o => [a, o])))).subscribe(([a, o]) => { console.log("Load in rest data"), this.pageBuilderFacade.loadRestData(`${i.get("tag")}`, new ge(S(_({}, a), { url: o }))), this.store.pipe(K(Oe(`${i.get("tag")}`)), I(s => s !== void 0), b(s => this.getBindings(t, "pane").pipe(m(c => [s, c]))), b(([s, c]) => Pe(() => s.results.length !== 0 && c.length > 0, new Ne(u => { We(s.results.map(C => Ui(c).pipe(m(x => i.get("panes").find(D => D.name === x.id)), b(x => Pe(() => x.rule && x.rule !== null && x.rule.condition !== "", this.rulesResolver.evaluate(x.rule, [...i.get("contexts"), ...x.contexts !== void 0 ? x.contexts : [], new me({ name: "_root", adaptor: "data", data: C })]).pipe(m(D => [x, D])), f(!1).pipe(m(D => [x, D])))), I(([x, D]) => D), m(([x, D]) => x.name), ht(c[0].id), V(1)))).pipe(m(C => [s, C])).subscribe(C => { u.next(C), u.complete(); }); }), new Ne(u => { u.next([s]), u.complete(); }))), m(([s, c]) => a.renderer.type === "pane" ? s.results.map((u, C) => { let x = i.get("panes").find(N => N.name === c[C]), D = W(); return new j(S(_({}, x), { rule: void 0, label: D, contexts: [...i.get("contexts"), new me({ name: "_root", adaptor: "data", data: u })] })); }) : s.results.map(u => new j({ contentPlugin: "snippet", name: W(), label: void 0, contexts: [...i.get("contexts"), new me({ name: "_root", adaptor: "data", data: u })], settings: this.snippetHandler.buildSettings(S(_({}, a.renderer.data), { content: a.renderer.data.content })) }))), m(s => new Je({ stylePlugin: void 0, settings: [], panes: s, columnSetting: new O })), m(s => this.panelHandler.buildSettings(new _e({ id: void 0, layoutType: "grid", displayType: "page", site: this.siteName, gridItems: [], layoutSetting: new O, rowSettings: [], panels: [s] })))).subscribe(s => { n.next(s.find(c => c.name === "panels").attributes[0].attributes.find(c => c.name === "panes").attributes), n.complete(); }); }), n; }
    buildSelectOptionItems(t, i) { return this.toObject(t).pipe(b(n => this.urlGeneratorService.getUrl(n.url, n.params, i).pipe(m(a => [n, a]))), m(([n, a]) => new ge(S(_({}, n), { url: a })))).subscribe(n => { this.pageBuilderFacade.loadRestData(`${i.get("tag")}`, n); }), this.store.pipe(K(Oe(`${i.get("tag")}`)), I(n => n !== void 0), m(n => [n, n.results.map(a => this.tokenizerService.generateGenericTokens(a))]), m(([n, a]) => [n, a, new Kt(JSON.parse(i.get("snippet").content))]), m(([n, a, o]) => a.map((s, c) => new Wi({ dataItem: n.results[c], value: o.value === "[.]" ? this.attributeSerializer.serialize(n.results[c], "value") : this.attributeSerializer.serialize(this.tokenizerService.replaceTokens(o.value, s), "value"), label: this.tokenizerService.replaceTokens(o.label, s) })))); }
    getBindings(t, i, n) { return i === "context" ? this.toObject(t).pipe(m(a => a.params.reduce((o, s) => [...o, ...s.mapping.type === "form" ? [new He({ id: `form__${s.mapping.value.split(".", 2)[0].trim()}`, type: "context" })] : []], []))) : this.toObject(t).pipe(b(a => Pe(() => a.renderer.type === i, f(a.renderer.bindings), f([])))); }
    toObject(t) { return f(this.attributeSerializer.deserializeAsObject(t)); }
    buildSettings(t) { return this.attributeSerializer.serialize(t, "root").attributes; }
    getRenderType(t) { let i = [t.find(n => n.name === "renderer")].map(n => n.attributes.find(a => a.name === "type")); return i.length > 0 ? i[0].value : void 0; }
    stateDefinition(t) { return f({ autocomplete: { input: "" } }); }
    editorOptions(t) { return f(new ce); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(qe), e.\u0275\u0275inject(re), e.\u0275\u0275inject(y.PageBuilderFacade), e.\u0275\u0275inject(se.Store), e.\u0275\u0275inject(k.TokenizerService), e.\u0275\u0275inject(y.PanelContentHandler), e.\u0275\u0275inject(bt.UrlGeneratorService), e.\u0275\u0275inject(w.AttributeSerializerService), e.\u0275\u0275inject(Ke.RulesResolverService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), qr = (() => { class r {
    set rest(t) { if (t !== void 0) {
        this._rest = t;
        let i = { value: "", label: "", id: "", multiple: "", limit: "" };
        this.restForm.setValue({ renderer: S(_({ trackBy: "", query: "" }, t.renderer), { data: t.renderer.data ? S(_({}, t.renderer.data), { jsScript: t.renderer.data.jsScript ? t.renderer.data.jsScript : "" }) : { content: "", contentType: "", jsScript: "" }, select: ["pane", "snippet"].findIndex(n => n === t.renderer.type) > -1 ? i : JSON.parse(t.renderer.data.content), bindings: [] }), source: { url: "", params: [], method: "", body: "" } }), t.renderer.type === "pane" && (this.bindings.clear(), t.renderer.bindings.forEach(n => { n.type === "pane" && this.bindings.push(this.fb.group({ id: this.fb.control(n.id, g.required), type: this.fb.control(n.type, g.required) })); })), t.renderer.type === "pane" ? this.restForm.get("renderer").get("data").disable() : this.restForm.get("renderer").get("data").enable(), setTimeout(() => { this.restSource = { url: t.url, params: t.params, method: t.method ? t.method : "", body: t.body ? S(_({}, t.body), { jsScript: "" }) : "" }, this.sourceForm.refreshData$.next(void 0); });
    } }
    get rendererType() { return this.restForm.get("renderer").get("type"); }
    get isSelectable() { return this.restForm.get("renderer").get("type").value && this.restForm.get("renderer").get("type").value !== "snippet" && this.restForm.get("renderer").get("type").value !== "pane"; }
    get bindings() { return this.restForm.get("renderer").get("bindings"); }
    get valid() { return this.restForm.valid; }
    constructor(t, i) { this.fb = t, this.tokenizerService = i, this.panes = [], this.submitted = new E, this.contexts = [], this.forms = [], this.snippetValidation = !0, this.restForm = this.fb.group({ source: this.fb.control(""), renderer: this.fb.group({ type: "snippet", query: this.fb.control(""), trackBy: this.fb.control(""), data: this.fb.control(""), bindings: this.fb.array([]), select: this.fb.group({ value: this.fb.control(""), label: this.fb.control(""), id: this.fb.control(""), multiple: this.fb.control(""), limit: this.fb.control("") }) }) }); }
    ngOnInit() { console.log(this.contexts), this.restForm.get("renderer").get("type").valueChanges.subscribe(t => { this.rendererType.value === "pane" ? this.restForm.get("renderer").get("data").disable() : this.restForm.get("renderer").get("data").enable(), this.restForm.get("renderer").get("data").setValue({ contentType: "", content: "", jsScript: "" }); }), this.restForm.get("renderer").get("select").valueChanges.subscribe(t => { this.restForm.get("renderer").get("data").setValue({ contentType: "application/json", content: JSON.stringify({ value: t.value, label: t.label, id: t.id, multiple: t.multiple, limit: t.limit }), jsScript: "" }); }); }
    ngAfterViewInit() { }
    onDataChange(t) { this.tokens = this.tokenizerService.generateGenericTokens(t[0]); }
    addPane() { this.bindings.push(this.fb.group({ type: this.fb.control("pane", g.required), id: this.fb.control("", g.required) })); }
    submit() { let t = new ge(S(_({}, this.restForm.value), { url: this.restForm.value.source.url, params: this.restForm.value.source.params, method: this.restForm.value.source.method, body: this.restForm.value.source.body })); this.submitted.emit(t); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(k.TokenizerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-rest-form"]], viewQuery: function (i, n) { if (i & 1 && e.\u0275\u0275viewQuery(Ht, 7), i & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.sourceForm = a.first);
        } }, inputs: { panes: "panes", contexts: "contexts", rest: "rest" }, outputs: { submitted: "submitted" }, standalone: !1, decls: 34, vars: 9, consts: [[1, "rest-form", 3, "ngSubmit", "formGroup"], ["direction", "vertical", 1, "content-inner"], ["as-split-area", "", "size", "50"], ["formControlName", "source", 3, "dataChange", "contexts", "restSource"], ["size", "50", "formGroupName", "renderer"], ["matInput", "", "formControlName", "query", "placeholder", "Query"], ["matInput", "", "formControlName", "trackBy", "placeholder", "Track By"], ["required", "", "formControlName", "type"], ["label", "Output"], ["value", "snippet"], ["value", "pane"], ["label", "Input"], ["value", "select"], ["value", "radiogroup"], ["value", "checkboxgroup"], ["value", "autocomplete"], ["formControlName", "data", "splitDirection", "horizontal", "rows", "10", "cols", "40", 3, "hidden", "rootForm", "tokens"], ["formArrayName", "bindings", 4, "ngIf"], ["formGroupName", "select", 4, "ngIf"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"], ["formArrayName", "bindings"], ["type", "button", 3, "click"], [4, "ngFor", "ngForOf"], [3, "formGroupName"], ["required", "", "formControlName", "id"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["formGroupName", "select"], ["matInput", "", "formControlName", "id", "placeholder", "Id"], ["matInput", "", "formControlName", "value", "placeholder", "Value"], ["matInput", "", "formControlName", "label", "placeholder", "Label"], ["formControlName", "multiple"], ["matInput", "", "formControlName", "limit", "placeholder", "Limit"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "as-split", 1)(3, "div", 2)(4, "classifieds-ui-rest-source-form", 3), e.\u0275\u0275listener("dataChange", function (o) { return n.onDataChange(o); }), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(5, "as-split-area", 4)(6, "mat-form-field"), e.\u0275\u0275element(7, "input", 5), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(8, "mat-form-field"), e.\u0275\u0275element(9, "input", 6), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(10, "mat-form-field")(11, "mat-label"), e.\u0275\u0275text(12, "Type"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(13, "mat-select", 7)(14, "mat-optgroup", 8)(15, "mat-option", 9), e.\u0275\u0275text(16, "Snippet"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(17, "mat-option", 10), e.\u0275\u0275text(18, "Pane"), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(19, "mat-optgroup", 11)(20, "mat-option", 12), e.\u0275\u0275text(21, "Select"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(22, "mat-option", 13), e.\u0275\u0275text(23, "Radio Group"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(24, "mat-option", 14), e.\u0275\u0275text(25, "Checkbox Group"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(26, "mat-option", 15), e.\u0275\u0275text(27, "Autocomplete"), e.\u0275\u0275elementEnd()()()(), e.\u0275\u0275element(28, "classifieds-ui-snippet-form", 16), e.\u0275\u0275template(29, or, 5, 1, "div", 17)(30, sr, 12, 0, "div", 18), e.\u0275\u0275elementEnd()()(), e.\u0275\u0275elementStart(31, "mat-dialog-actions")(32, "button", 19), e.\u0275\u0275text(33, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.restForm), e.\u0275\u0275advance(4), e.\u0275\u0275property("contexts", n.contexts)("restSource", n.restSource), e.\u0275\u0275advance(24), e.\u0275\u0275property("hidden", n.rendererType.value != "snippet")("rootForm", !1)("tokens", n.tokens), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", n.rendererType.value == "pane"), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", n.isSelectable), e.\u0275\u0275advance(2), e.\u0275\u0275property("disabled", !n.valid)); }, dependencies: [v.NgForOf, v.NgIf, l.\u0275NgNoValidate, l.DefaultValueAccessor, l.NgControlStatus, l.NgControlStatusGroup, l.RequiredValidator, l.FormGroupDirective, l.FormControlName, l.FormGroupName, l.FormArrayName, U.MatOption, U.MatOptgroup, L.MatButton, yt.MatCheckbox, h.MatDialogClose, h.MatDialogActions, h.MatDialogContent, P.MatInput, P.MatFormField, P.MatLabel, Xe.MatSelect, Le.SplitComponent, Le.SplitAreaDirective, gt.RestSourceFormComponent, Ue.SnippetFormComponent], styles: [".rest-form[_ngcontent-%COMP%]     .content-inner{height:auto}"] }); }
} return r; })(), Ur = (() => { class r {
    constructor(t, i, n, a) { this.data = t, this.dialogRef = i, this.fb = n, this.handler = a, this.panes = [], this.contexts = [], this.contexts = this.data.contexts; }
    ngOnInit() { this.panes = this.data.panelFormGroup.get("panes").controls.reduce((t, i) => i.get("name").value ? [...t, i.get("name").value] : [...t], []), this.data.pane !== void 0 && this.handler.toObject(this.data.pane.settings).subscribe(t => { this.rest = t; }); }
    submitted(t) { let i = this.data.panelFormGroup.get("panes"); if (this.data.paneIndex === void 0)
        i.push(this.fb.group({ contentPlugin: "rest", name: new p(""), label: new p(""), rule: new p(""), settings: this.fb.array(this.handler.buildSettings(t).map(n => this.convertToGroup(n))) })), this.data.contentAdded.next([this.data.panelIndex, i.length - 1]);
    else {
        let n = i.at(this.data.paneIndex);
        n.get("settings").clear(), this.handler.buildSettings(t).forEach(a => { n.get("settings").push(this.convertToGroup(a)); });
    } this.dialogRef.close(); }
    convertToGroup(t) { let i = this.fb.group({ name: new p(t.name, g.required), type: new p(t.type, g.required), displayName: new p(t.displayName, g.required), value: new p(t.value, g.required), computedValue: new p(t.value, g.required), attributes: new q([]) }); return t.attributes && t.attributes.length > 0 && t.attributes.forEach(n => { i.get("attributes").push(this.convertToGroup(n)); }), i; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(A), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(Fe)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-rest-editor"]], standalone: !1, decls: 1, vars: 3, consts: [[3, "submitted", "panes", "rest", "contexts"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "classifieds-ui-rest-form", 0), e.\u0275\u0275listener("submitted", function (o) { return n.submitted(o); }), e.\u0275\u0275elementEnd()), i & 2 && e.\u0275\u0275property("panes", n.panes)("rest", n.rest)("contexts", n.contexts); }, dependencies: [qr], encapsulation: 2 }); }
} return r; })(), Hr = (() => { class r {
    set values(t) { this.options = t, this.buildOptions(); }
    get attributesArray() { return this.selectionForm.get("attributes"); }
    constructor(t, i, n) { this.fb = t, this.attributeSerializer = i, this.tokenizerService = n, this.searchChange = new E, this.selectionForm = this.fb.group({ attributes: this.fb.array([]) }), this.onTouched = () => { }, this.displayAuto = a => n.replaceTokens(this.selectMapping.label, this.tokenizerService.generateGenericTokens(a.dataItem)); }
    ngOnInit() { this.attributesArray.push(this.fb.group({ name: new p("value", g.required), type: new p(ne.Array, g.required), displayName: new p("Value", g.required), value: new p(""), attributes: ["checkboxgroup"].findIndex(t => t === this.renderType) > -1 ? this.fb.array([]) : new p("") })), this.renderType === "autocomplete" && (this.attributesArray.at(0).addControl("_proxy", this.fb.control("")), this.attributesArray.at(0).get("_proxy").valueChanges.pipe(ft(), ue(500)).subscribe(t => { this.searchChange.emit(t); })); }
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
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(w.AttributeSerializerService), e.\u0275\u0275directiveInject(k.TokenizerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-selection"]], inputs: { name: "name", label: "label", values: "values", renderType: "renderType", selectMapping: "selectMapping" }, outputs: { searchChange: "searchChange" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: ze, useExisting: Y(() => r), multi: !0 }, { provide: Be, useExisting: Y(() => r), multi: !0 }])], decls: 9, vars: 6, consts: [["autocomplete", "matAutocomplete"], [3, "formGroup"], ["formArrayName", "attributes"], ["formGroupName", "0"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["formControlName", "attributes"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [4, "ngFor", "ngForOf"], [3, "formGroupName"], ["formControlName", "_store"], ["matInput", "", "formControlName", "_proxy", 3, "placeholder", "matAutocomplete"], [3, "optionSelected", "displayWith"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div"), e.\u0275\u0275elementContainerStart(4, 4), e.\u0275\u0275template(5, cr, 6, 2, "ng-container", 5)(6, pr, 6, 2, "ng-container", 5)(7, mr, 4, 1, "ng-container", 5)(8, fr, 6, 4, "ng-container", 5), e.\u0275\u0275elementContainerEnd(), e.\u0275\u0275elementEnd()()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.selectionForm), e.\u0275\u0275advance(4), e.\u0275\u0275property("ngSwitch", n.renderType), e.\u0275\u0275advance(), e.\u0275\u0275property("ngSwitchCase", "select"), e.\u0275\u0275advance(), e.\u0275\u0275property("ngSwitchCase", "radiogroup"), e.\u0275\u0275advance(), e.\u0275\u0275property("ngSwitchCase", "checkboxgroup"), e.\u0275\u0275advance(), e.\u0275\u0275property("ngSwitchCase", "autocomplete")); }, dependencies: [v.NgForOf, v.NgSwitch, v.NgSwitchCase, l.DefaultValueAccessor, l.NgControlStatus, l.NgControlStatusGroup, l.FormGroupDirective, l.FormControlName, l.FormGroupName, l.FormArrayName, U.MatAutocomplete, U.MatOption, U.MatAutocompleteTrigger, yt.MatCheckbox, P.MatInput, P.MatFormField, P.MatLabel, Ze.MatRadioGroup, Ze.MatRadioButton, Xe.MatSelect], encapsulation: 2 }); }
} return r; })(), Qr = (() => { class r {
    get renderType() { return this.restHandler.getRenderType(this.settings); }
    constructor(t, i) { this.restHandler = t, this.controlContainer = i, this.settings = [], this.contexts = [], this.state = {}, this.stateChange = new E, this.tag = W(), this.searchChange$ = new z; }
    ngOnInit() { this.restHandler.toObject(this.settings).pipe(F(t => { this.snippet = t.renderer.data, this.selectMapping = new Kt(JSON.parse(this.snippet.content)); }), I(() => this.renderType !== "autocomplete"), b(t => this.restHandler.buildSelectOptionItems(this.settings, new Map([["tag", this.tag], ["snippet", t.renderer.data], ["contexts", this.contexts]])))).subscribe(t => { this.options = t; }), this.searchChange$.pipe(F(t => { this.stateChange.emit({ autocomplete: { input: t } }); }), b(t => this.restHandler.buildSelectOptionItems(this.settings, new Map([["tag", W()], ["snippet", this.snippet], ["contexts", this.contexts]])))).subscribe(t => { this.options = t; }); }
    onSearchChange(t) { this.searchChange$.next(t); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(Fe), e.\u0275\u0275directiveInject(l.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-rest-pane-renderer"]], inputs: { settings: "settings", name: "name", label: "label", displayType: "displayType", contexts: "contexts", state: "state" }, outputs: { stateChange: "stateChange" }, standalone: !1, decls: 2, vars: 6, consts: [[3, "formGroup"], ["formControlName", "settings", 3, "searchChange", "name", "label", "renderType", "values", "selectMapping"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "classifieds-ui-selection", 1), e.\u0275\u0275listener("searchChange", function (o) { return n.onSearchChange(o); }), e.\u0275\u0275elementEnd()()), i & 2 && (e.\u0275\u0275property("formGroup", n.controlContainer.control), e.\u0275\u0275advance(), e.\u0275\u0275property("name", n.name)("label", n.label)("renderType", n.renderType)("values", n.options)("selectMapping", n.selectMapping)); }, dependencies: [l.NgControlStatus, l.NgControlStatusGroup, l.FormGroupDirective, l.FormControlName, Hr], encapsulation: 2 }); }
} return r; })(), ke = (() => { class r {
    constructor(t, i, n, a, o, s) { this.siteName = t, this.tokenizerService = i, this.panelHandler = n, this.mediaHandler = a, this.attributeSerializer = o, this.inlineContextResolver = s; }
    handleFile(t) { return f(); }
    handlesType(t) { return !1; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(t) { return f(!1); }
    isDynamic(t) { return !0; }
    isData(t) { return !1; }
    fetchDynamicData(t, i) { return f(new H); }
    buildDynamicItems(t, i) { return this.toObject(t).pipe(m(n => [n, i.get("contexts").find(a => a.name === n.context)]), b(([n, a]) => this.extractDataArray(a, n.query).pipe(m(o => [n, a, o]))), b(([n, a, o]) => this.transformDataArray(o, n.plugin)), m(n => new Je({ stylePlugin: void 0, settings: [], panes: n, columnSetting: new O })), m(n => this.panelHandler.buildSettings(new _e({ id: void 0, layoutType: "grid", displayType: "page", site: this.siteName, gridItems: [], layoutSetting: new O, rowSettings: [], panels: [n] }))), m(n => n.find(a => a.name === "panels").attributes[0].attributes.find(a => a.name === "panes").attributes)); }
    getBindings(t, i, n) { return i === "context" ? this.toObject(t).pipe(m(a => [new He({ id: a.context, type: "context" })])) : f([]); }
    toObject(t) { return f(this.attributeSerializer.deserializeAsObject(t)); }
    buildSettings(t) { return this.attributeSerializer.serialize(t, "root").attributes; }
    extractDataArray(t, i) { return this.inlineContextResolver.resolve(t).pipe(m(n => { let a = i.split("."), o = a.length; if (t === void 0)
        return f([]); let s = Array.isArray(n) ? n[0] : n; for (let c = 0; c < o; c++)
        a[c] !== "" && (s = s[a[c]]); return s; })); }
    transformDataArray(t, i) { return i === "media" ? f(t.map(n => new Ti(n)).map(n => new j({ contentPlugin: "media", name: void 0, label: void 0, settings: this.mediaHandler.buildSettings(n) }))) : f(); }
    stateDefinition(t) { return f({}); }
    editorOptions(t) { return f(new ce); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(qe), e.\u0275\u0275inject(k.TokenizerService), e.\u0275\u0275inject(y.PanelContentHandler), e.\u0275\u0275inject(fe), e.\u0275\u0275inject(w.AttributeSerializerService), e.\u0275\u0275inject(G.InlineContextResolverService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), ut = class {
    constructor(d) { d && (this.context = d.context, this.query = d.query, this.plugin = d.plugin); }
}, Wr = (() => { class r {
    constructor(t) { this.fb = t, this.contexts = [], this.submitted = new E, this.sliceForm = this.fb.group({ context: this.fb.control("", g.required), query: this.fb.control("", g.required), plugin: this.fb.control("", g.required) }); }
    ngOnInit() { }
    submit() { let t = new ut(this.sliceForm.value); this.submitted.emit(t); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(l.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-slice-form"]], inputs: { contexts: "contexts" }, outputs: { submitted: "submitted" }, standalone: !1, decls: 20, vars: 3, consts: [[1, "slice-form", 3, "ngSubmit", "formGroup"], ["required", "", "formControlName", "context"], ["value", "_root"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Query", "formControlName", "query", "required", ""], ["required", "", "formControlName", "plugin"], ["value", "media"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"], [3, "value"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "mat-form-field")(3, "mat-label"), e.\u0275\u0275text(4, "Type"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(5, "mat-select", 1)(6, "mat-option", 2), e.\u0275\u0275text(7, "_root"), e.\u0275\u0275elementEnd(), e.\u0275\u0275template(8, hr, 2, 2, "mat-option", 3), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(9, "mat-form-field"), e.\u0275\u0275element(10, "input", 4), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(11, "mat-form-field")(12, "mat-label"), e.\u0275\u0275text(13, "Plugin"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(14, "mat-select", 5)(15, "mat-option", 6), e.\u0275\u0275text(16, "Media"), e.\u0275\u0275elementEnd()()()(), e.\u0275\u0275elementStart(17, "mat-dialog-actions")(18, "button", 7), e.\u0275\u0275text(19, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.sliceForm), e.\u0275\u0275advance(8), e.\u0275\u0275property("ngForOf", n.contexts), e.\u0275\u0275advance(10), e.\u0275\u0275property("disabled", !n.sliceForm.valid)); }, dependencies: [v.NgForOf, l.\u0275NgNoValidate, l.DefaultValueAccessor, l.NgControlStatus, l.NgControlStatusGroup, l.RequiredValidator, l.FormGroupDirective, l.FormControlName, U.MatOption, L.MatButton, h.MatDialogClose, h.MatDialogActions, h.MatDialogContent, P.MatInput, P.MatFormField, P.MatLabel, Xe.MatSelect], encapsulation: 2 }); }
} return r; })(), Jr = (() => { class r {
    constructor(t, i, n, a) { this.data = t, this.dialogRef = i, this.fb = n, this.handler = a, this.contexts = [], this.contexts = this.data.contexts; }
    ngOnInit() { }
    submitted(t) { this.data.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "slice", name: new p(""), label: new p(""), rule: new p(""), settings: this.fb.array(this.handler.buildSettings(t).map(i => this.convertToGroup(i))) })), this.dialogRef.close(); }
    convertToGroup(t) { let i = this.fb.group({ name: new p(t.name, g.required), type: new p(t.type, g.required), displayName: new p(t.displayName, g.required), value: new p(t.value, g.required), computedValue: new p(t.value, g.required), attributes: new q([]) }); return t.attributes && t.attributes.length > 0 && t.attributes.forEach(n => { i.get("attributes").push(this.convertToGroup(n)); }), i; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(A), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(ke)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-slice-editor"]], standalone: !1, decls: 1, vars: 1, consts: [[3, "submitted", "contexts"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "classifieds-ui-slice-form", 0), e.\u0275\u0275listener("submitted", function (o) { return n.submitted(o); }), e.\u0275\u0275elementEnd()), i & 2 && e.\u0275\u0275property("contexts", n.contexts); }, dependencies: [Wr], encapsulation: 2 }); }
} return r; })(), Kr = (() => { class r {
    constructor(t, i) { this.fb = t, this.controlContainer = i; }
    ngOnInit() { this.controlContainer.control.addControl("adaptor", this.fb.control("rest", g.required)), this.controlContainer.control.addControl("rest", this.fb.control("")); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(l.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-context-editor"]], viewQuery: function (i, n) { if (i & 1 && e.\u0275\u0275viewQuery(Ht, 7), i & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.restSourceFormComp = a.first);
        } }, standalone: !1, decls: 2, vars: 1, consts: [[3, "formGroup"], ["formControlName", "rest"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementContainerStart(0, 0), e.\u0275\u0275element(1, "classifieds-ui-rest-source-form", 1), e.\u0275\u0275elementContainerEnd()), i & 2 && e.\u0275\u0275property("formGroup", n.controlContainer.control); }, dependencies: [l.NgControlStatus, l.NgControlStatusGroup, l.FormGroupDirective, l.FormControlName, gt.RestSourceFormComponent], encapsulation: 2 }); }
} return r; })(), Yr = (() => { class r {
    get labels() { return this.formGroup.get("labels"); }
    constructor(t, i, n, a) { this.data = t, this.dialogRef = i, this.fb = n, this.attributeSerializer = a, this.contexts = [], this.panes = [], this.formGroup = this.fb.group({ labels: this.fb.array([this.buildLabelGroup()]) }), this.contexts = this.data.contexts; }
    ngOnInit() { this.panes = new Je(this.data.panelFormGroup.value).panes; }
    submit() { this.data.panelFormGroup.get("settings").clear(), this.attributeSerializer.serialize(this.formGroup.value, "root").attributes.forEach(t => { console.log("label mappings"), console.log(this.attributeSerializer.convertToGroup(t)), this.data.panelFormGroup.get("settings").push(this.attributeSerializer.convertToGroup(t)); }); }
    onRemoveMapping(t) { this.labels.removeAt(t); }
    onAddMapping() { this.labels.push(this.buildLabelGroup()); }
    buildLabelGroup() { return this.fb.group({ mapping: this.fb.control("") }); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(A), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(w.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["druid-tabs-panel-editor"]], standalone: !1, decls: 7, vars: 3, consts: [[3, "ngSubmit", "formGroup"], ["formArrayName", "labels"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "button", "mat-raised-button", "", "color", "primary", 3, "click"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"], [3, "formGroupName"], ["formControlName", "mapping", 3, "panes"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "div", 1), e.\u0275\u0275template(2, vr, 4, 2, "div", 2), e.\u0275\u0275elementStart(3, "button", 3), e.\u0275\u0275listener("click", function () { return n.onAddMapping(); }), e.\u0275\u0275text(4, "Add"), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(5, "button", 4), e.\u0275\u0275text(6, "Save"), e.\u0275\u0275elementEnd()()), i & 2 && (e.\u0275\u0275property("formGroup", n.formGroup), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", n.labels.controls), e.\u0275\u0275advance(3), e.\u0275\u0275property("disabled", !n.formGroup.valid)); }, dependencies: [v.NgForOf, l.\u0275NgNoValidate, l.NgControlStatus, l.NgControlStatusGroup, l.FormGroupDirective, l.FormControlName, l.FormGroupName, l.FormArrayName, L.MatButton, h.MatDialogClose, y.PanelPageLinkedlistComponent], encapsulation: 2 }); }
} return r; })(), Xr = (() => { class r {
    constructor(t) { this.attributeSerializer = t, this.settings = [], this.panes = [], this.originMappings = [], this.labelMappingsEnabled = !1; }
    ngOnInit() { console.log("tabs panels contexts"), console.log(this.panes); let t = this.attributeSerializer.deserialize(new oe({ name: "", displayName: "", computedValue: "", type: ne.Complex, value: "", intValue: 0, attributes: this.settings })); this.labelMappingsEnabled = !!(t && t.labels !== void 0 && Array.isArray(t.labels) && t.labels.length > 0); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(w.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-tabs-panel-renderer"]], inputs: { settings: "settings", panes: "panes", originPanes: "originPanes", originMappings: "originMappings" }, standalone: !1, decls: 2, vars: 2, consts: [["mat-align-tabs", "start", 4, "ngIf"], ["mat-align-tabs", "start"], [4, "for"], ["mat-tab-label", ""], [3, "pluginName", "settings", "contexts"], ["label", "The Label", 4, "ngFor", "ngForOf"], ["label", "The Label"]], template: function (i, n) { i & 1 && e.\u0275\u0275template(0, _r, 2, 1, "mat-tab-group", 0)(1, Sr, 2, 1, "mat-tab-group", 0), i & 2 && (e.\u0275\u0275property("ngIf", n.labelMappingsEnabled), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !n.labelMappingsEnabled)); }, dependencies: [v.NgForOf, v.NgIf, B.MatTabLabel, B.MatTab, B.MatTabGroup, X.ForDirective, Ee.RenderPaneComponent], encapsulation: 2 }); }
} return r; })(), Ot = (() => { class r {
    set panelPage(t) { this.panelPage$.next(t); }
    set context(t) { this.context$.next(t); }
    constructor(t, i) { this.fb = t, this.controlContainer = i, this.panelPages = [], this.panelPage$ = new J(new _e), this.context$ = new J(void 0), this.formGroup = this.fb.group({ state: this.fb.control("", [g.required]) }), this.stateCtrl = this.fb.control(""), this.stateCtrlSub = this.stateCtrl.valueChanges.pipe(ue(250), ft(), I(n => { try {
        return JSON.parse(n), !0;
    }
    catch {
        return !1;
    } }), m(n => JSON.parse(n))).subscribe(n => { console.log("write state"), console.log(n), this.formGroup.get("state").setValue(n); }), this.onTouched = () => { }; }
    ngOnInit() { this.panelPage$.subscribe(t => { this.panelPages = [t]; }), this.context$.subscribe(t => { t ? this.stateCtrl.setValue(JSON.stringify(t.data.state)) : this.stateCtrl.setValue(""); }); }
    writeValue(t) { t && this.formGroup.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.formGroup.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(t) { return this.formGroup.valid ? null : { invalidForm: { valid: !1, message: "source is invalid" } }; }
    flattenSelector(t) { let i = []; return t.panel !== void 0 && t.panel !== null && i.push(t.panel), t.pane !== void 0 && t.pane !== null && i.push(t.pane), t.nested !== void 0 && t.nested !== null && typeof t.nested == "object" && this.flattenSelector(t.nested).forEach(n => i.push(n)), i; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(l.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-page-state-form"]], inputs: { panelPage: "panelPage", context: "context" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: ze, useExisting: Y(() => r), multi: !0 }, { provide: Be, useExisting: Y(() => r), multi: !0 }])], decls: 3, vars: 2, consts: [[3, "formGroup"], ["cols", "40", "rows", "20", "required", "", 3, "formControl"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0), e.\u0275\u0275text(1, " <"), e.\u0275\u0275element(2, "textarea", 1), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("formGroup", n.formGroup), e.\u0275\u0275advance(2), e.\u0275\u0275property("formControl", n.stateCtrl)); }, dependencies: [l.DefaultValueAccessor, l.NgControlStatus, l.NgControlStatusGroup, l.RequiredValidator, l.FormControlDirective, l.FormGroupDirective], encapsulation: 2 }); }
} return r; })(), Zr = (() => { class r {
    constructor(t, i, n) { this.fb = t, this.pageBuilderFacade = i, this.controlContainer = n; }
    ngOnInit() { this.controlContainer.control.addControl("adaptor", this.fb.control("data", g.required)), this.controlContainer.control.addControl("data", this.fb.control("")), this.pageBuilderFacade.getPage$.pipe(V(1)).subscribe(t => { this.panelPage = t; }); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(y.PageBuilderFacade), e.\u0275\u0275directiveInject(l.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-page-state-editor"]], viewQuery: function (i, n) { if (i & 1 && e.\u0275\u0275viewQuery(Ot, 7), i & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.restSourceFormComp = a.first);
        } }, inputs: { context: "context" }, standalone: !1, decls: 2, vars: 3, consts: [[3, "formGroup"], ["formControlName", "data", 3, "panelPage", "context"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementContainerStart(0, 0), e.\u0275\u0275element(1, "classifieds-ui-page-state-form", 1), e.\u0275\u0275elementContainerEnd()), i & 2 && (e.\u0275\u0275property("formGroup", n.controlContainer.control), e.\u0275\u0275advance(), e.\u0275\u0275property("panelPage", n.panelPage)("context", n.context)); }, dependencies: [l.NgControlStatus, l.NgControlStatusGroup, l.FormGroupDirective, l.FormControlName, Ot], encapsulation: 2 }); }
} return r; })(), ea = (() => { class r {
    set settings(t) { this.settings$.next(t); }
    constructor(t, i) { this.fb = t, this.attributeSerializer = i, this.settings$ = new J(void 0), this.formGroup = this.fb.group({ name: this.fb.control("", [g.required]), field: this.fb.control("", [g.required]) }), this.settingsSub = this.settings$.pipe(m(n => n ? new lt(this.attributeSerializer.deserializeAsObject(n)) : void 0)).subscribe(n => { n ? (this.formGroup.get("name").setValue(n.name), this.formGroup.get("field").setValue(n.field)) : (this.formGroup.get("name").setValue(""), this.formGroup.get("field").setValue("")); }), this.onTouched = () => { }; }
    ngOnInit() { }
    writeValue(t) { t && this.formGroup.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.formGroup.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(t) { return this.formGroup.valid ? null : { invalidForm: { valid: !1, message: "content is invalid" } }; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(w.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-form-datasource-form"]], inputs: { settings: "settings" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: ze, useExisting: Y(() => r), multi: !0 }, { provide: Be, useExisting: Y(() => r), multi: !0 }])], decls: 11, vars: 1, consts: [[3, "formGroup"], ["matInput", "", "formControlName", "name", "required", ""], ["matInput", "", "formControlName", "field", "required", ""]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "mat-form-field")(3, "mat-label"), e.\u0275\u0275text(4, "Name"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(5, "input", 1), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(6, "div")(7, "mat-form-field")(8, "mat-label"), e.\u0275\u0275text(9, "Field"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(10, "input", 2), e.\u0275\u0275elementEnd()()()), i & 2 && e.\u0275\u0275property("formGroup", n.formGroup); }, dependencies: [l.DefaultValueAccessor, l.NgControlStatus, l.NgControlStatusGroup, l.RequiredValidator, l.FormGroupDirective, l.FormControlName, P.MatInput, P.MatFormField, P.MatLabel], encapsulation: 2 }); }
} return r; })(), ta = (() => { class r {
    constructor(t) { this.controlContainer = t, this.settings = []; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(l.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-form-datasource"]], inputs: { settings: "settings" }, standalone: !1, decls: 2, vars: 2, consts: [[3, "formGroup"], ["formControlName", "settings", 3, "settings"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementContainerStart(0, 0), e.\u0275\u0275element(1, "classifieds-ui-form-datasource-form", 1), e.\u0275\u0275elementContainerEnd()), i & 2 && (e.\u0275\u0275property("formGroup", n.controlContainer.control), e.\u0275\u0275advance(), e.\u0275\u0275property("settings", n.settings)); }, dependencies: [l.NgControlStatus, l.NgControlStatusGroup, l.FormGroupDirective, l.FormControlName, ea], encapsulation: 2 }); }
} return r; })(), ia = r => new Ie({ id: "snippet", title: "Snippet", selectionComponent: void 0, editorComponent: Nr, renderComponent: oi, handler: r }), na = r => new Ie({ id: "attribute", title: "Attribute", selectionComponent: Gr, editorComponent: Ar, renderComponent: zr, handler: r }), ra = r => new Ie({ id: "media", title: "Media", selectionComponent: void 0, editorComponent: Br, renderComponent: Lr, handler: r }), aa = r => new Ie({ id: "rest", title: "REST", selectionComponent: void 0, editorComponent: Ur, renderComponent: Qr, handler: r }), oa = r => new Ie({ id: "slice", title: "Slice", selectionComponent: void 0, editorComponent: Jr, renderComponent: void 0, handler: r }), sa = r => { let d = { path: "" }; return new Te({ id: "page", name: "page", title: "Page", global: !0, group: "pages", baseObject: d, resolver: r }); }, la = r => { let d = { dataset: new H }; return new Te({ id: "rest", name: "rest", title: "Rest", baseObject: d, resolver: r, editorComponent: Kr }); }, ca = r => { let d = { dataset: new H }; return new Te({ id: "form", name: "form", title: "Form", baseObject: d, resolver: r }); }, da = r => { let d = new $e({ state: new oe }); return new Te({ id: "panestate", name: "panestate", title: "Pane State", internal: !0, baseObject: d, resolver: r }); }, pa = r => { let d = new $e({ state: new oe }); return new Te({ id: "pagestate", name: "pagestate", title: "Page State", internal: !0, baseObject: d, resolver: r, editorComponent: Zr }); }, ua = r => new ct({ id: "tabs", name: "tabs", title: "Tabs", handler: r, editorComponent: Yr, renderComponent: Xr }), ma = (r, d, t) => new an({ id: "form", title: "Form", usedContexts: ({ param: i, metadata: n }) => f([`form__${i.mapping.value.substr(0, i.mapping.value.indexOf("."))}`]), evalParam: ({ param: i, metadata: n }) => { let a = i.mapping.value.substr(0, i.mapping.value.indexOf(".")), o = i.mapping.value.substr(i.mapping.value.indexOf(".") + 1); return console.log(`form: ${a} || ${o}`), t.getForm$(a).pipe(V(1), m(s => s || new Ge), m(s => d.serializeForm(s)), m(s => r.generateGenericTokens(s)), F(s => console.log(s)), m(s => s.has(`.${o}`) ? r.replaceTokens(`[.${o}]`, s) : ""), F(s => { console.log("form value"), console.log(s); })); } }), ga = r => new Ai({ id: "form", title: "Form", resolve: () => r.getFormNames$.pipe(b(d => d.length === 0 ? f([]) : he(d.map(t => r.getForm$(t).pipe(m(i => [t, i]))))), m(d => d.reduce((t, [i, n]) => S(_({}, t), { [`form__${i}`]: n }), {}))), resolveSingle: () => r.getFormNames$.pipe(b(d => Wt(...d.map(t => r.getForm$(t).pipe(m(i => [`form__${t}`, i])))))) }), fa = r => new sn({ id: "pages_form", title: "Pages Form", build: () => { ln.prototype.serializePageForm = d => new Promise(t => { t(r.serializeForm(d)); }); } }), ha = (r, d) => new nn({ id: "panelpageform_serialize", title: "Panelpageform Serialize", create: ({ object: t }) => f({ success: !1, entity: d.serializeForm(new Ge(t)) }), read: ({}) => f({ success: !1 }), update: ({}) => f({ success: !1 }), delete: ({}) => f({ success: !1 }) }), va = (r, d, t) => new Ji({ id: "form", title: "Form", editor: ta, fetch: ({ settings: i }) => f(new H).pipe(m(() => new lt(r.deserializeAsObject(i))), b(n => d.getForm$(n.name).pipe(m(a => [n, a || new Ge]), ht([n, new Ge]), V(1))), m(([n, a]) => [n, t.serializeForm(a)]), m(([n, a]) => new H({ results: Ye.JSONPath({ path: `$.${n.field}.*`, json: a }) }))), getBindings: ({ settings: i, metadata: n }) => f([]).pipe(m(() => new lt(r.deserializeAsObject(i))), m(a => [new He({ id: `form__${a.name}`, type: "context" })])) }), ba = r => d => { if (("/" + d.map(t => t.path).join("/")).indexOf(r.path) === 0) {
    let t = r.path.substr(1).split("/").length;
    return { consumed: d, posParams: d.reduce((i, n, a) => a === 0 ? S(_({}, i), { panelPageId: new st(r.id, {}) }) : a > t - 1 ? S(_({}, i), { [`arg${a - t}`]: new st(n.path, {}) }) : _({}, i), {}) };
}
else
    return null; }, ya = r => d => { if (("/" + d.map(t => t.path).join("/")).indexOf(r.path) === 0 && d.map(t => t.path).join("/").indexOf("/manage") > -1) {
    let t = r.path.substr(1).split("/").length;
    return { consumed: d, posParams: d.reduce((i, n, a) => a === 0 ? S(_({}, i), { panelPageId: new st(r.id, {}) }) : _({}, i), {}) };
}
else
    return null; };
var _a = (() => { class r {
    constructor(t, i, n, a) { this.tokenizerService = t, this.panelResolverService = i, this.styleResolverService = n, this.paneDatasource = a, this.settings = [], this.panes = [], this.originMappings = [], this.resolvedContext = {}; }
    ngOnInit() { this.paneDatasource.pageChange$.pipe(Hi(1), b(t => this.panelResolverService.resolvePanes({ panes: this.originPanes.map(i => new j(S(_({}, i), { metadata: new Map([...i.metadata ? i.metadata : [], ["page", t], ["limit", this.paneDatasource.pageSize]]) }))), contexts: this.contexts, resolvedContext: this.resolvedContext })), b(({ resolvedPanes: t, originMappings: i }) => this.styleResolverService.alterResolvedPanes({ panel: this.panel, resolvedPanes: t, originMappings: i }))).subscribe(({ resolvedPanes: t, originMappings: i }) => { this.originMappings = i, this.paneDatasource.panes = t; }), this.paneDatasource.panes = this.panes, this.trackByTpl = "[._root.id]"; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(k.TokenizerService), e.\u0275\u0275directiveInject(y.PanelResolverService), e.\u0275\u0275directiveInject(y.StyleResolverService), e.\u0275\u0275directiveInject(y.PaneDatasourceService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-virtual-list-panel-renderer"]], inputs: { settings: "settings", panes: "panes", originPanes: "originPanes", originMappings: "originMappings", contexts: "contexts", resolvedContext: "resolvedContext", panel: "panel" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([Zt])], decls: 2, vars: 2, consts: [[1, "panes-viewport", 3, "itemSize"], ["class", "pane-item", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "pane-item"], [3, "pluginName", "settings", "contexts", "resolvedContext"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "cdk-virtual-scroll-viewport", 0), e.\u0275\u0275template(1, xr, 2, 4, "div", 1), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("itemSize", 75), e.\u0275\u0275advance(), e.\u0275\u0275property("cdkVirtualForOf", n.paneDatasource)); }, dependencies: [Se.CdkFixedSizeVirtualScroll, Se.CdkVirtualForOf, Se.CdkVirtualScrollViewport, Ee.RenderPaneComponent], styles: ["[_nghost-%COMP%]{position:relative}.panes-viewport[_ngcontent-%COMP%]{height:100%;width:100%}"] }); }
} return r; })(), Ca = (() => { class r {
    constructor(t) { this.router = t; }
    ngOnInit() { }
    onClick() { this.router.navigateByUrl(this.href); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(le.Router)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-page-router-link"]], inputs: { href: "href", text: "text" }, standalone: !1, decls: 2, vars: 1, consts: [[3, "click"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "a", 0), e.\u0275\u0275listener("click", function () { return n.onClick(); }), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(n.text)); }, styles: ["[_nghost-%COMP%]:hover{cursor:pointer}"] }); }
} return r; })(), Mo = (() => { class r {
    constructor(t, i, n) { this.routerStore = t, this.router = i, this.panelPageListItemsService = n.getEntityCollectionService("PanelPageListItem"); }
    ngOnInit() { }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(se.Store), e.\u0275\u0275directiveInject(le.Router), e.\u0275\u0275directiveInject(T.EntityServices)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-catch-all-router"]], standalone: !1, decls: 2, vars: 0, template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "p"), e.\u0275\u0275text(1, "Page Not Found"), e.\u0275\u0275elementEnd()); }, encapsulation: 2 }); }
} return r; })(), Sa = new fi("PagesSettings"), kt = class {
    constructor(d) { this.disableRouting = !1, d && (this.disableRouting = d.disableRouting); }
}, xa = (() => { class r {
    constructor(t, i, n, a) { this.siteName = t, this.pagesSettings = i, this.router = n, this.routesLoaded = !1, this.panelPageListItemsService = a.getEntityCollectionService("PanelPageListItem"); }
    canActivate(t, i) { return this.pagesSettings.disableRouting ? new Promise(n => n(!0)) : new Promise(n => { let a = i.url; a.indexOf("?") !== -1 && (a = i.url.substr(0, a.indexOf("?"))); let o = "path=" + a.substr(1).split("/").reduce((s, c, u) => [...s, u === 0 ? `/${c}` : `${s[u - 1]}/${c}`], []).map(s => this.encodePathComponent(s)).join("&path=") + `&site=${encodeURIComponent(`{"term":{"site.keyword":{"value":"${this.siteName}"}}}`)}`; setTimeout(() => { }), We([Pe(() => !this.routesLoaded, this.panelPageListItemsService.getWithQuery(`site=${encodeURIComponent(`{"term":{"site.keyword":{"value":"${this.siteName}"}}}`)}&path={"wildcard":{"path.keyword":{"value":"*"}}}`).pipe(F(() => console.log("loaded page list items")), m(s => s.filter(c => c.path !== void 0 && c.path !== "")), m(s => s.map(c => new _e(c)).sort((c, u) => c.path.split("/").length === u.path.split("/").length ? c.path.split("/")[c.path.split("/").length - 1] > u.path.split("/")[u.path.split("/").length - 1] ? -1 : 1 : c.path.split("/").length > u.path.split("/").length ? -1 : 1)), F(s => s.sort((c, u) => c.path.length > u.path.length ? 1 : -1)), F(s => { let c = this.router.config; s.forEach(u => { c.unshift({ matcher: ya(u), component: li }), c.unshift({ matcher: ba(u), component: si, data: { panelPageListItem: u } }), console.log(`panels matcher: ${u.path}`); }), this.routesLoaded = !0; }), m(() => [])), f([])), this.panelPageListItemsService.getWithQuery(o).pipe(Qi(s => f([])), F(() => console.log("loaded specific matched")), m(s => s.reduce((c, u) => c === void 0 || c.path.split("/").length < u.path.split("/").length ? u : c, void 0)), m(s => { let c = i.url.substr(1).split("/").slice(s.path.split("/").length - 1).join("/"); return [s, c]; }))]).pipe(m(([s, [c, u]]) => [c, u])).subscribe(([s, c]) => { let u = `${s.path}${c === "" ? "" : `/${c}`}?${Mt.stringify(t.queryParams)}`, C = this.router.parseUrl(u); console.log(`panels garud navigate: ${s.path}${c === "" ? "" : `/${c}`}?${Mt.stringify(t.queryParams)}`), n(C); }); }); }
    encodePathComponent(t) { return `{"term":{"path.keyword":{"value":"${t}"}}}`; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(qe), e.\u0275\u0275inject(Sa), e.\u0275\u0275inject(le.Router), e.\u0275\u0275inject(T.EntityServices)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), Nt = (() => { class r {
    constructor(t) { this.pageBuilderFacade = t; }
    resolve(t, i) { return this.pageBuilderFacade.getPageInfo$; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(y.PageBuilderFacade)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), Vt = (() => { class r {
    constructor(t, i, n, a) { this.pageBuilderFacade = t, this.store = i, this.urlGeneratorService = n, this.routerStore = a; }
    resolve(t, i) { let n = new ge(i); return (n.params && Array.isArray(n.params) && n.params.length > 0 ? this.changePipeline(n.params) : f([])).pipe(b(() => n.params && Array.isArray(n.params) && n.params.length > 0 ? this.rebuildParams(n.params) : f([])), m(a => [a, new Map([["tag", W()]])]), b(([a, o]) => this.urlGeneratorService.getUrl(n.url, a, o).pipe(m(s => [s, o]))), b(([a, o]) => (this.pageBuilderFacade.loadRestData(`${o.get("tag")}`, new ge(S(_({}, n), { url: a }))), this.store.pipe(K(Oe(`${o.get("tag")}`)), I(s => s !== void 0), m(s => s.results), V(1))))); }
    changePipeline(t) { let i = t.reduce((n, a) => { switch (a.mapping.type) {
        case "route": return [...n, this.routeArgChange(a.mapping.value)];
        case "querystring": return [...n, this.queryStringChange(a.mapping.value)];
        case "form": return [...n, this.formChange(a.mapping.value)];
        default: return [...n];
    } }, []); return Wt(...i); }
    routeArgChange(t) { return this.pageBuilderFacade.getPageInfo$.pipe(m(() => { })); }
    queryStringChange(t) { return new z; }
    formChange(t) { let [i, n] = t.split(".", 2); return this.pageBuilderFacade.getForm$(i).pipe(F(() => console.log("form change")), m(() => { })); }
    rebuildParams(t) { return this.pageBuilderFacade.getPageInfo$.pipe(m(i => i ? t : this.testParams(t))); }
    testParams(t) { let i = [], n = t.length; for (let a = 0; a < n; a++)
        t[a].mapping.type === "route" ? i.push(new Tt(S(_({}, t[a]), { mapping: { type: "static", value: t[a].mapping.testValue, context: void 0, testValue: void 0 } }))) : i.push(new Tt(t[a])); return i; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(y.PageBuilderFacade), e.\u0275\u0275inject(se.Store), e.\u0275\u0275inject(bt.UrlGeneratorService), e.\u0275\u0275inject(se.Store)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), Gt = (() => { class r {
    constructor(t) { this.pageBuilderFacade = t; }
    resolve(t, i) { return this.pageBuilderFacade.getForm$(i); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(y.PageBuilderFacade)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), wa = (() => { class r extends Yi {
    get displayedColumns() { let t = this.panes.findIndex(i => i.contexts.findIndex(n => n.name === "_root") > -1); return t > -1 ? Object.keys(this.panes[t].contexts.find(i => i.name === "_root").data) : []; }
    constructor(t, i) { super(), this.tokenizerService = t, this.paneDatasource = i, this.trackByMapping = (n, a) => this.tokenizerService.replaceTokens(this.trackByTpl, this.tokenizerService.generateGenericTokens(a.contexts[0].data)); }
    ngOnInit() { console.log(this.panes), this.paneDatasource.panes = this.panes; }
    rowData(t, i) { return console.log(`name: ${t}`), `${i.contexts.find(n => n.name === "_root").data[t]}`; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(k.TokenizerService), e.\u0275\u0275directiveInject(y.PaneDatasourceService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["lib-table-panel-renderer"]], standalone: !1, features: [e.\u0275\u0275ProvidersFeature([Zt]), e.\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 4, consts: [["mat-table", "", "matSort", "", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "table", 0), e.\u0275\u0275template(1, Fr, 3, 1, "ng-container", 1)(2, $r, 1, 0, "tr", 2)(3, Ir, 1, 0, "tr", 3), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("dataSource", n.paneDatasource), e.\u0275\u0275advance(), e.\u0275\u0275property("ngForOf", n.displayedColumns), e.\u0275\u0275advance(), e.\u0275\u0275property("matHeaderRowDef", n.displayedColumns), e.\u0275\u0275advance(), e.\u0275\u0275property("matRowDefColumns", n.displayedColumns)); }, dependencies: [v.NgForOf, tt.MatSort, tt.MatSortHeader, $.MatTable, $.MatHeaderCellDef, $.MatHeaderRowDef, $.MatColumnDef, $.MatCellDef, $.MatRowDef, $.MatHeaderCell, $.MatCell, $.MatHeaderRow, $.MatRow], encapsulation: 2 }); }
} return r; })(), Pa = (() => { class r {
    constructor(t) { this.attributeSerializer = t; }
    handleFile(t) { return f(); }
    handlesType(t) { return !1; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(t) { return f(!1); }
    isDynamic(t) { return !1; }
    isData(t) { return !1; }
    buildDynamicItems(t, i) { return f([]); }
    fetchDynamicData(t, i) { return f(new H); }
    getBindings(t, i) { return f([]); }
    toObject(t) { return f(this.attributeSerializer.deserializeAsObject(t)); }
    buildSettings(t) { return this.attributeSerializer.serialize(t, "root").attributes; }
    fromPanes(t) { return t.map(i => new j(this.attributeSerializer.deserialize(i))); }
    wrapPanel(t) { return new Je({ stylePlugin: void 0, settings: [], panes: t, columnSetting: new O }); }
    stateDefinition(t) { return f({}); }
    editorOptions(t) { return f(new ce); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(w.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" }); }
} return r; })(), ot = (() => { class r {
    constructor(t, i, n, a) { this.panelHandler = t, this.attributeSerializer = i, this.panelsLoaderService = n, this.panelsSelectorService = a; }
    alterResolvedPanes({ settings: t, resolvedPanes: i, originMappings: n }) { let a = this.attributeSerializer.deserialize(new oe({ name: "", displayName: "", computedValue: "", type: ne.Complex, value: "", intValue: 0, attributes: t })), o = a && a.labels !== void 0 && Array.isArray(a.labels) ? a.labels.map(c => new Ft(c.mapping)) : [], s = []; if (o.length === 0)
        return f({ resolvedPanes: i, originMappings: n }); return i.length !== o.length ? s = i.map((c, u) => new Ft(S(_({}, u < o.length ? o[u] : o[o.length - 1]), { pane: u }))).map(c => this.flattenSelector(c)) : s = o.map(c => this.flattenSelector(c)), We(i.map((c, u) => this.panelsLoaderService.reducePanes([], c, 0)[0])).pipe(m(c => c.reduce((u, [C, x]) => [...u, x], [])), m(c => { let u = s.map(M => this.selectWithTarget(M)), C = s.map(M => this.selectWithoutTarget(M)), x = u.map((M, R) => this.panelsSelectorService.rebuildPage(c[s[R][0]], M.slice(1))), D = C.map((M, R) => this.panelsSelectorService.rebuildPage(c[s[R][0]], M.slice(1))), N = [], te = i.length; for (let M = 0; M < te; M++)
        N.push(new j(S(_({}, i[M]), { settings: this.panelHandler.buildSettings(x[M]) }))), N.push(new j(S(_({}, i[M]), { settings: this.panelHandler.buildSettings(D[M]) }))); return { resolvedPanes: N, originMappings: n }; })); return console.log("TabsStyleHandler::alterResolvedPanes"), console.log(i), console.log(n), f({ resolvedPanes: i, originMappings: n }); }
    stateDefinition(t) { return f({}); }
    flattenSelector(t) { let i = []; return t.panel !== void 0 && t.panel !== null && i.push(t.panel), t.pane !== void 0 && t.pane !== null && i.push(t.pane), t.nested !== void 0 && t.nested !== null && typeof t.nested == "object" && this.flattenSelector(t.nested).forEach(n => i.push(n)), i; }
    selectWithTarget(t) { return t.map(i => i + 1); }
    selectWithoutTarget(t) { return t.map((i, n) => n === t.length - 1 ? (i + 1) * -1 : 0); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(Pa), e.\u0275\u0275inject(w.AttributeSerializerService), e.\u0275\u0275inject(y.PanelsLoaderService), e.\u0275\u0275inject(y.PanelsSelectorService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), At = (() => { class r {
    get emptyPaneState() { return new $e({ state: this.attributeSerializer.serialize({ displayAssociatedPane: "" }, "root") }); }
    get entities$() { return this.entityServices.getEntityCollectionService("PanelPageState").entities$.pipe(F(t => { console.log("entities in store"), console.log(t); })); }
    get panelPage$() { return he([this.pageBuilderFacade.getPageInfo$, this.entityServices.getEntityCollectionService("PanelPage").entities$]).pipe(m(([t, i]) => t && t.id !== void 0 && t.id !== "" && t.id !== null && i.findIndex(n => n.id === t.id) !== -1 ? i.find(n => n.id === t.id) : void 0)); }
    get fakePageInfo() { return new Ve({ id: "948d6e7b-12ab-11ec-8ecd-661fdd19e6df", path: "", realPath: "", args: new Map }); }
    constructor(t, i, n, a) { this.entityServices = t, this.pageBuilderFacade = i, this.panelStateConverterService = n, this.attributeSerializer = a, this.resolverCache$ = new Map; }
    resolve(t, i) { let n = i && i.selectionMethod && i.selectionMethod.length !== 0 && i.id && i.id !== null && i.id !== "" ? `ps[id=${i.id}]${i.selectionMethod.map(a => `${a}`).join("")}` : void 0; if (n && this.resolverCache$.has(n))
        return this.resolverCache$.get(n); {
        let a = this.resolve$(t, i);
        return n && this.resolverCache$.set(n, a), a;
    } }
    resolve$(t, i) { return he([this.panelPage$, this.entities$]).pipe(m(([n, a]) => [n, n && a.findIndex(o => o.id === n.id) !== -1 ? a.find(o => o.id === n.id) : new $t]), b(([n, a]) => this.pageBuilderFacade.getSelectionPath$.pipe(m(o => i && i.selectionPath ? i.selectionPath : o), F(o => o.join(",")), m(o => o.map((s, c) => `${(c + 1) % 2 === 0 ? "panes" : (c === 0 ? "" : "nestedPage.") + "panels"}[${s}]`)), m(o => o.length === 0 ? void 0 : "$." + o.join(".")), m(o => [n, a, o]))), F(([n, a, o]) => { console.log("page state context resolver"), console.log(n), console.log("query: " + o); }), b(([n, a, o]) => Pe(() => !!n && !a, this.panelStateConverterService.convertPageToState(n).pipe(m(s => new $t(S(_({}, s), { panels: s.panels.map(c => new Xi(S(_({}, c), { panes: c.panes.map(u => new $e(S(_({}, u), { state: this.attributeSerializer.serialize({ displayAssociatedPane: "y" }, "root") }))) }))) }))), m(s => [s, o])), f([a, o]))), F(([n, a]) => { console.log("rebuilt state from realtime page"), console.log(n); }), m(([n, a]) => a ? Ye.JSONPath({ path: a, json: n }) : this.emptyPaneState), m(n => n && Array.isArray(n) && n.length !== 0 ? n[0] : this.emptyPaneState), F(n => { console.log("json path match"), console.log(n); }), m(n => this.attributeSerializer.deserializeAsObject(n.state)), F(n => { console.log("final state"), console.log(n); })); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(T.EntityServices), e.\u0275\u0275inject(y.PageBuilderFacade), e.\u0275\u0275inject(y.PanelStateConverterService), e.\u0275\u0275inject(w.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })();
var Fa = [{ path: "pages", children: [{ path: "create-panel-page", component: Vr }, { path: "panelpage/:panelPageId/manage", component: li }] }], Eo = (() => { class r {
    constructor(t, i, n, a, o, s, c, u, C, x, D, N, te, M, R, xe, De, de, Ct, $a, Ia, Ta, ci, Ma, Ea, di, pi, ui, Da) { s.registerMetadataMap(Tr), [sa(M), la(R), ca(xe), da(De), pa(de)].forEach(ie => { a.register(ie); }), t.forEach(ie => n.register(ie)), i.forEach(ie => o.register(ie)), c.register(ma(D, N, te)), u.register(ga(te)), Ct.register(fa(N)), Ct.getPlugin("pages_form").subscribe(ie => ie.build()), ci.register(ha(di, N)), pi.register(va(ui, te, N)); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(pe), e.\u0275\u0275inject(Re), e.\u0275\u0275inject(be.ContentPluginManager), e.\u0275\u0275inject(G.ContextPluginManager), e.\u0275\u0275inject(y.StylePluginManager), e.\u0275\u0275inject(T.EntityDefinitionService), e.\u0275\u0275inject(et.ParamPluginManager), e.\u0275\u0275inject(G.ResolvedContextPluginManager), e.\u0275\u0275inject(ni.PluginConfigurationManager), e.\u0275\u0275inject(G.ContextManagerService), e.\u0275\u0275inject(k.TokenizerService), e.\u0275\u0275inject(y.FormService), e.\u0275\u0275inject(y.PageBuilderFacade), e.\u0275\u0275inject(Nt), e.\u0275\u0275inject(Vt), e.\u0275\u0275inject(Gt), e.\u0275\u0275inject(pt), e.\u0275\u0275inject(At), e.\u0275\u0275inject(ii.BridgeBuilderPluginManager), e.\u0275\u0275inject(ri.HttpClient), e.\u0275\u0275inject(T.Pluralizer), e.\u0275\u0275inject(T.DefaultDataServiceConfig), e.\u0275\u0275inject(Me.CrudAdaptorPluginManager), e.\u0275\u0275inject(T.EntityDefinitionService), e.\u0275\u0275inject(T.EntityDataService), e.\u0275\u0275inject(et.ParamEvaluatorService), e.\u0275\u0275inject(Jt.DatasourcePluginManager), e.\u0275\u0275inject(w.AttributeSerializerService), e.\u0275\u0275inject(Me.CrudDataHelperService)); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: r }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ providers: [xa, Nt, Vt, Gt, pt, At, { provide: nt, useValue: Ca, multi: !0 }, { provide: nt, useValue: Ci, multi: !0 }, { provide: nt, useValue: si, multi: !0 }, { provide: re, useClass: re }, { provide: ae, useClass: ae }, { provide: fe, useClass: fe }, { provide: Fe, useClass: Fe }, { provide: ke, useClass: ke }, { provide: ot, useClass: ot }, { provide: pe, useFactory: ia, multi: !0, deps: [re] }, { provide: pe, useFactory: na, multi: !0, deps: [ae] }, { provide: pe, useFactory: ra, multi: !0, deps: [fe] }, { provide: pe, useFactory: aa, multi: !0, deps: [Fe] }, { provide: pe, useFactory: oa, multi: !0, deps: [ke] }, { provide: Re, useValue: new ct({ id: "virtuallist", name: "virtuallist", title: "Virtual List", editorComponent: void 0, renderComponent: _a }), multi: !0 }, { provide: Re, useFactory: ua, multi: !0, deps: [ot] }, { provide: Re, useValue: new ct({ id: "table", name: "table", title: "Table", editorComponent: void 0, renderComponent: wa }), multi: !0 }], imports: [hi, bi, yi, Pi, Si, xi, vi.forChild(Fa), Fi, _i.forChild(), wi, qi, Ei, Di, zi, Ri, Mi, ki, $i, Zi, Ni, Vi, on, cn, Ki, rn] }); }
} return r; })();
export { xa as CatchAllGuard, Mo as CatchAllRouterComponent, li as EditPanelPageComponent, Sa as PAGES_SETTINGS, Eo as PagesModule, kt as PagesSettings, si as PanelPageRouterComponent, na as attributeContentPluginFactory, ya as createEditMatcher, ba as createMatcher, ca as formContextFactory, va as formDatasourcePluginFactory, ma as formParamPluginFactory, ga as formResolvedContextPluginFactory, ha as formSerializationEntityCrudAdaptorPluginFactory, ra as mediaContentPluginFactory, sa as pageContextFactory, pa as pageStateContextFactory, fa as pagesFormBridgeFactory, da as paneStateContextFactory, aa as restContentPluginFactory, la as restContextFactory, oa as sliceContentPluginFactory, ia as snippetContentPluginFactory, ua as tabsStylePluginFactory };
//# sourceMappingURL=_rollthecloudinc_pages.FdkBQKa_P2.js.map
