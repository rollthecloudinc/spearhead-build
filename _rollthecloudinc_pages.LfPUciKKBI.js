import { a as pi } from "@nf-internal/chunk-CAFTJBEE";
import { a as W } from "@nf-internal/chunk-7XNIKSHD";
import { a as _t } from "@nf-internal/chunk-SMWSTNHZ";
import { a as y, b as S, h as di, k as yt } from "@nf-internal/chunk-GL2BOVXA";
import * as e from "@angular/core";
import { EventEmitter as M, forwardRef as K, InjectionToken as ui } from "@angular/core";
import * as v from "@angular/common";
import { CommonModule as mi } from "@angular/common";
import * as ge from "@angular/router";
import { UrlSegment as at, RouterModule as gi } from "@angular/router";
import * as l from "@angular/forms";
import { UntypedFormArray as q, UntypedFormControl as p, Validators as g, NG_VALUE_ACCESSOR as Ve, NG_VALIDATORS as Ge, FormsModule as fi, ReactiveFormsModule as hi } from "@angular/forms";
import * as Gt from "ngx-markdown";
import { MarkdownModule as vi, MarkdownComponent as bi } from "ngx-markdown";
import * as Ae from "angular-split";
import { AngularSplitModule as yi } from "angular-split";
import * as fe from "ngx-dropzone";
import { NgxDropzoneModule as _i } from "ngx-dropzone";
import { MaterialModule as Ci } from "@rollthecloudinc/material";
import { NgxJsonViewerModule as Si } from "ngx-json-viewer";
import * as At from "@rollthecloudinc/ngx-angular-query-builder";
import { NgxAngularQueryBuilderModule as xi } from "@rollthecloudinc/ngx-angular-query-builder";
import * as dt from "@rollthecloudinc/media";
import { MEDIA_SETTINGS as wi, MediaFile as Pi, MediaModule as Fi } from "@rollthecloudinc/media";
import * as he from "@rollthecloudinc/utils";
import { SITE_NAME as ze, UtilsModule as Ii, EMBEDDABLE_COMPONENT as Ct } from "@rollthecloudinc/utils";
import * as N from "@rollthecloudinc/token";
import { TokenModule as Ti } from "@rollthecloudinc/token";
import * as w from "@rollthecloudinc/attributes";
import { AttributeValue as ne, AttributeTypes as ee, Attribute as zt, ATTRIBUTE_WIDGET as Bt, AttributesModule as Mi } from "@rollthecloudinc/attributes";
import * as qt from "@rollthecloudinc/layout";
import { GridLayoutComponent as Ei, SplitLayoutComponent as $i, LayoutModule as Di } from "@rollthecloudinc/layout";
import * as pt from "@rollthecloudinc/rest";
import { RestSourceFormComponent as Lt, RestModule as Ri } from "@rollthecloudinc/rest";
import * as Be from "@rollthecloudinc/snippet";
import { Snippet as St, SnippetModule as ji } from "@rollthecloudinc/snippet";
import * as ve from "@rollthecloudinc/content";
import { ContentBinding as qe, ContentPluginEditorOptions as re, ContentPlugin as Te, CONTENT_PLUGIN as oe } from "@rollthecloudinc/content";
import * as G from "@rollthecloudinc/context";
import { InlineContext as le, ContextFormComponent as Oi, ContextPlugin as Me, ResolvedContextPlugin as Ni, ContextModule as ki } from "@rollthecloudinc/context";
import { DisplayGrid as Vi, GridType as Gi, GridsterModule as Ai } from "angular-gridster2";
import * as be from "@angular/material/bottom-sheet";
import { MAT_BOTTOM_SHEET_DATA as Ut } from "@angular/material/bottom-sheet";
import * as h from "@angular/material/dialog";
import { MAT_DIALOG_DATA as k } from "@angular/material/dialog";
import * as Le from "@angular/material/grid-list";
import * as Y from "@angular/material/list";
import * as B from "@angular/material/tabs";
import { Observable as Oe, of as f, Subject as z, BehaviorSubject as J, combineLatest as ue, forkJoin as Ue, iif as Pe, from as zi, merge as Ht } from "rxjs";
import { map as u, switchMap as _, tap as I, filter as E, debounceTime as se, delay as De, take as L, distinctUntilChanged as ut, defaultIfEmpty as mt, skip as Bi, catchError as qi } from "rxjs/operators";
import * as He from "@rollthecloudinc/datasource";
import { Dataset as H, Datasource as xt, Rest as ce, SelectMapping as Qt, SelectOption as Li, DatasourcePlugin as Ui, DatasourceModule as Hi } from "@rollthecloudinc/datasource";
var Je = di(pi(), 1);
import * as b from "@rollthecloudinc/panels";
import { PropertiesFormPayload as xe, PanelPropsFormPayload as Wt, PanePropsFormPayload as Jt, PrerenderFormPayload as we, PaneState as Ie, LayoutSetting as O, Pane as j, PanelPage as ye, PanelPageStateSlice as Kt, selectDataset as Re, Panel as Qe, FormDatasource as ot, StylePlugin as st, PanelPageForm as Ne, PaneDatasourceService as Yt, PanelStyleRendererBaseComponent as Qi, PanelPageSelector as wt, PanelPageState as Pt, PanelState as Wi, STYLE_PLUGIN as $e, PanelsModule as Ji } from "@rollthecloudinc/panels";
import { PersistenceFormPayload as it, PersistenceDialogComponent as Ki } from "@rollthecloudinc/refinery";
import * as We from "@rollthecloudinc/rules";
import * as A from "@angular/material/button";
import * as x from "@angular/material/input";
import { InteractionsFormPayload as nt, InteractionsDialogComponent as Yi } from "@rollthecloudinc/detour";
import * as _e from "@angular/material/expansion";
import * as Xt from "@angular/material/icon";
import * as Q from "@angular/material/menu";
import * as me from "@ngrx/store";
import { createSelector as Ft, select as de } from "@ngrx/store";
import * as $ from "@ngrx/data";
import * as Zt from "@angular/cdk/drag-drop";
import { getRouterSelectors as Xi } from "@ngrx/router-store";
import * as gt from "@rollthecloudinc/durl";
import * as U from "@angular/material/autocomplete";
import * as ft from "@angular/material/checkbox";
import * as Ke from "@angular/material/select";
import * as Ye from "@angular/material/radio";
import * as ht from "@rollthecloudinc/render";
import { PanelPageRouterComponent as Zi, RenderModule as en } from "@rollthecloudinc/render";
import * as Xe from "@rollthecloudinc/dparam";
import { ParamPlugin as tn, Param as It, DparamModule as nn } from "@rollthecloudinc/dparam";
import * as ei from "@rollthecloudinc/bridge";
import { BridgeBuilderPlugin as rn, PublicApiBridgeService as an, BridgeModule as on } from "@rollthecloudinc/bridge";
import * as Ze from "@rollthecloudinc/crud";
import { CrudAdaptorPlugin as sn } from "@rollthecloudinc/crud";
import * as Ce from "@angular/cdk/scrolling";
import Tt from "qs";
import * as et from "@angular/material/sort";
import * as F from "@angular/material/table";
import * as ti from "@rollthecloudinc/plugin";
import * as ii from "@angular/common/http";
function ln(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "a", 4), e.\u0275\u0275listener("click", function () { let n = e.\u0275\u0275restoreView(t).$implicit, a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.onEntitySelected(n.value)); }), e.\u0275\u0275elementStart(1, "span", 5), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()();
} if (r & 2) {
    let t = d.$implicit;
    e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(t.value.title);
} }
function cn(r, d) { }
function dn(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "classifieds-ui-dynamic-content-viewer", 1), e.\u0275\u0275pipe(1, "async"), e.\u0275\u0275listener("docRendered", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.onDocRendered()); }), e.\u0275\u0275elementEnd();
} if (r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("content", e.\u0275\u0275pipeBind1(1, 1, t.content$));
} }
function pn(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "classifieds-ui-dynamic-content-viewer", 1), e.\u0275\u0275pipe(1, "async"), e.\u0275\u0275listener("docRendered", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.onDocRendered()); }), e.\u0275\u0275elementEnd();
} if (r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("content", e.\u0275\u0275pipeBind1(1, 1, t.content$));
} }
function un(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "a", 4), e.\u0275\u0275listener("click", function () { let n = e.\u0275\u0275restoreView(t).$implicit, a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.onStyleSelected(n.value)); }), e.\u0275\u0275elementStart(1, "span", 5), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()();
} if (r & 2) {
    let t = d.$implicit;
    e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(t.value.title);
} }
function mn(r, d) { }
var gn = ["contentEditor"], tt = r => ({ settings: r }), fn = r => ({ visible: r });
function hn(r, d) { r & 1 && e.\u0275\u0275elementContainer(0); }
function vn(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "button", 21), e.\u0275\u0275listener("click", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(2); return e.\u0275\u0275resetView(n.onOverrideClick()); }), e.\u0275\u0275text(1, "Override"), e.\u0275\u0275elementEnd();
} }
function bn(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "button", 21), e.\u0275\u0275listener("click", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(2); return e.\u0275\u0275resetView(n.onRemoveOverrideClick()); }), e.\u0275\u0275text(1, "Remove Override"), e.\u0275\u0275elementEnd();
} }
function yn(r, d) { }
function _n(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "button", 14)(4, "mat-icon"), e.\u0275\u0275text(5, "more_vert"), e.\u0275\u0275elementEnd()()(), e.\u0275\u0275elementStart(6, "mat-expansion-panel", 15), e.\u0275\u0275listener("afterCollapse", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.onAfterCollapse()); })("afterExpand", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.onAfterExpand()); }), e.\u0275\u0275elementStart(7, "mat-expansion-panel-header")(8, "mat-panel-title"), e.\u0275\u0275text(9), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(10, "div", 16)(11, "ul"), e.\u0275\u0275template(12, hn, 1, 0, "ng-container", 17), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(13, "div", 18), e.\u0275\u0275template(14, vn, 2, 0, "button", 19)(15, bn, 2, 0, "button", 19), e.\u0275\u0275elementContainerStart(16), e.\u0275\u0275template(17, yn, 0, 0, "ng-template", 20), e.\u0275\u0275elementContainerEnd(), e.\u0275\u0275elementEnd()()()();
} if (r & 2) {
    let t = e.\u0275\u0275nextContext(), i = e.\u0275\u0275reference(2), n = e.\u0275\u0275reference(6);
    e.\u0275\u0275advance(3), e.\u0275\u0275property("matMenuTriggerFor", n), e.\u0275\u0275advance(6), e.\u0275\u0275textInterpolate2("", t.contentPlugin.title, " : ", t.name), e.\u0275\u0275advance(), e.\u0275\u0275property("hidden", t.preview), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngTemplateOutlet", i)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(9, tt, t.settings)), e.\u0275\u0275advance(), e.\u0275\u0275property("ngClass", e.\u0275\u0275pureFunction1(11, fn, t.preview)), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.displayOverride && !t.hasOverride), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.displayOverride && t.hasOverride);
} }
function Cn(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "span"), e.\u0275\u0275text(1), e.\u0275\u0275pipe(2, "attribute"), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext().$implicit, i = e.\u0275\u0275nextContext().settings;
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind2(2, 1, i, t.name));
} }
function Sn(r, d) { r & 1 && e.\u0275\u0275elementContainer(0); }
function xn(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "ul"), e.\u0275\u0275template(1, Sn, 1, 0, "ng-container", 17), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275nextContext(2);
    let i = e.\u0275\u0275reference(2);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", i)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(2, tt, t.attributes));
} }
function wn(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "li"), e.\u0275\u0275text(1), e.\u0275\u0275template(2, Cn, 3, 4, "span", 23)(3, xn, 2, 4, "ul", 23), e.\u0275\u0275elementEnd()), r & 2) {
    let t = d.$implicit, i = e.\u0275\u0275nextContext().settings;
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate1(" ", t.displayName, ": "), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !t.attributes || t.attributes.length == 0), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", i.attributes && t.attributes.length > 0);
} }
function Pn(r, d) { if (r & 1 && e.\u0275\u0275template(0, wn, 4, 3, "li", 22), r & 2) {
    let t = d.settings;
    e.\u0275\u0275property("ngForOf", t);
} }
function Fn(r, d) { }
function In(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div", 24)(1, "classifieds-ui-content-editor", 25, 3), e.\u0275\u0275listener("nestedUpdate", function (n) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.onNestedUpdate(n)); })("delete", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.onDeleteClick()); })("rules", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.onRulesClick()); })("props", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.onPropsClick()); }), e.\u0275\u0275template(3, Fn, 0, 0, "ng-template", null, 4, e.\u0275\u0275templateRefExtractor), e.\u0275\u0275elementEnd()();
} if (r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("panelPage", t.panelPage)("savable", !1)("nested", !0)("locked", t.locked)("contexts", t.contexts)("rootContext", t.rootContext)("ancestory", t.paneAncestoryWithSelf);
} }
function Tn(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "button", 26), e.\u0275\u0275listener("click", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.onPreviewClick()); }), e.\u0275\u0275text(1, "Preview"), e.\u0275\u0275elementEnd();
} if (r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("disabled", t.locked);
} }
function Mn(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "button", 27), e.\u0275\u0275listener("click", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.onDisablePreviewClick()); }), e.\u0275\u0275text(1, "Disable Preview"), e.\u0275\u0275elementEnd();
} }
var En = ["extraActionsArea"], $n = ["contextsMenuTpl"], Dn = ["editablePaneTpl"], Rn = ["panes"], ni = r => ({ nested: r });
function jn(r, d) { }
function On(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "form", 7), e.\u0275\u0275listener("ngSubmit", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.submit()); }), e.\u0275\u0275elementContainerStart(1), e.\u0275\u0275template(2, jn, 0, 0, "ng-template", 8), e.\u0275\u0275elementContainerEnd(), e.\u0275\u0275elementEnd();
} if (r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("formGroup", t.contentForm)("ngClass", e.\u0275\u0275pureFunction1(2, ni, t.nested));
} }
function Nn(r, d) { }
function kn(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div", 9), e.\u0275\u0275elementContainerStart(1), e.\u0275\u0275template(2, Nn, 0, 0, "ng-template", 8), e.\u0275\u0275elementContainerEnd(), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("formGroup", t.contentForm)("ngClass", e.\u0275\u0275pureFunction1(2, ni, t.nested));
} }
function Vn(r, d) { r & 1 && e.\u0275\u0275element(0, "div", 12); }
function Gn(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "classifieds-ui-editable-pane", 10), e.\u0275\u0275listener("delete", function () { let n = e.\u0275\u0275restoreView(t), a = n.i, o = n.j, s = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(s.onDeletePane(a, o)); })("rules", function () { let n = e.\u0275\u0275restoreView(t), a = n.i, o = n.j, s = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(s.onRulesPane(a, o)); })("nestedUpdate", function (n) { let a = e.\u0275\u0275restoreView(t), o = a.i, s = a.j, c = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(c.onNestedUpdate(n, o, s)); })("rendererOverride", function () { let n = e.\u0275\u0275restoreView(t), a = n.i, o = n.j, s = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(s.onOverrideRenderer(a, o)); })("removeRendererOverride", function () { let n = e.\u0275\u0275restoreView(t), a = n.i, o = n.j, s = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(s.onRemoveOverrideRenderer(a, o)); })("edit", function () { let n = e.\u0275\u0275restoreView(t), a = n.i, o = n.j, s = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(s.onPaneEdit(a, o)); })("props", function () { let n = e.\u0275\u0275restoreView(t), a = n.i, o = n.j, s = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(s.editPaneProps(a, o)); })("delete", function () { let n = e.\u0275\u0275restoreView(t), a = n.i, o = n.j, s = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(s.onPaneDelete(a, o)); }), e.\u0275\u0275template(1, Vn, 1, 0, "div", 11), e.\u0275\u0275elementEnd();
} if (r & 2) {
    let t = d.i, i = d.j, n = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("panelIndex", t)("paneIndex", i)("name", n.panelPaneName(t, i))("label", n.panelPaneLabel(t, i))("locked", n.panelPaneLocked(t, i))("contexts", n.contexts)("pluginName", n.panelPanePlugin(t, i))("settings", n.panelPaneSettings(t, i))("ancestory", n.ancestory);
} }
function An(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "button", 13), e.\u0275\u0275text(1, "( x )"), e.\u0275\u0275elementEnd()), r & 2) {
    e.\u0275\u0275nextContext();
    let t = e.\u0275\u0275reference(8);
    e.\u0275\u0275property("matMenuTriggerFor", t);
} }
function zn(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "button", 5), e.\u0275\u0275listener("click", function () { let n = e.\u0275\u0275restoreView(t).$implicit, a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.onEditContext(n.name)); }), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd();
} if (r & 2) {
    let t = d.$implicit;
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.name);
} }
function Bn(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "a", 1), e.\u0275\u0275listener("click", function () { let n = e.\u0275\u0275restoreView(t).$implicit, a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.onItemSelect(n.value)); }), e.\u0275\u0275elementStart(1, "span", 2), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()();
} if (r & 2) {
    let t = d.$implicit;
    e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(t.value.name);
} }
function qn(r, d) { r & 1 && e.\u0275\u0275elementContainer(0); }
function Ln(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "span"), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate1("", t.displayName, ": ");
} }
function Un(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "span"), e.\u0275\u0275text(1), e.\u0275\u0275pipe(2, "attribute"), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext().$implicit, i = e.\u0275\u0275nextContext().settings;
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind2(2, 1, i, t.name));
} }
function Hn(r, d) { r & 1 && e.\u0275\u0275elementContainer(0); }
function Qn(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div"), e.\u0275\u0275template(1, Hn, 1, 0, "ng-container", 5), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275nextContext(2);
    let i = e.\u0275\u0275reference(3);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", i)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(2, tt, t.attributes));
} }
function Wn(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div"), e.\u0275\u0275template(1, Ln, 2, 1, "span", 3)(2, Un, 3, 4, "span", 3)(3, Qn, 2, 4, "div", 3), e.\u0275\u0275elementEnd()), r & 2) {
    let t = d.$implicit;
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.attributes.length == 0), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.attributes.length == 0), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.attributes.length > 0);
} }
function Jn(r, d) { if (r & 1 && e.\u0275\u0275template(0, Wn, 4, 3, "div", 6), r & 2) {
    let t = d.settings;
    e.\u0275\u0275property("ngForOf", t);
} }
function Kn(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div"), e.\u0275\u0275template(1, qn, 1, 0, "ng-container", 5)(2, Jn, 1, 1, "ng-template", null, 1, e.\u0275\u0275templateRefExtractor), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275reference(3), i = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", t)("ngTemplateOutletContext", e.\u0275\u0275pureFunction1(2, tt, i.attributeValues));
} }
function Yn(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div", 7), e.\u0275\u0275element(1, "classifieds-ui-attributes-builder", 8), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275property("formGroup", t.controlContainer.control), e.\u0275\u0275advance(), e.\u0275\u0275property("attributes", t.attributes)("attributeValues", t.attributeValues);
} }
function Xn(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div"), e.\u0275\u0275template(1, Kn, 4, 4, "div", 3)(2, Yn, 2, 3, "div", 4), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.displayType == "page"), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.displayType == "form");
} }
function Zn(r, d) { if (r & 1 && e.\u0275\u0275element(0, "classifieds-ui-snippet-pane-renderer", 9), r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("settings", t.rendererSettings)("tokens", t.tokens);
} }
function er(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "ngx-dropzone-image-preview", 2), e.\u0275\u0275listener("removed", function (n) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.onRemoveMedia(n)); }), e.\u0275\u0275elementStart(1, "ngx-dropzone-label"), e.\u0275\u0275text(2), e.\u0275\u0275elementEnd()();
} if (r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("removable", !0)("file", t.media), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate2("", t.media.name, " (", t.media.type, ")");
} }
var tr = ["img"];
function ir(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 26), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = d.$implicit;
    e.\u0275\u0275property("value", t), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t);
} }
function nr(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div")(1, "mat-form-field", 23)(2, "mat-label"), e.\u0275\u0275text(3, "Pane"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(4, "mat-select", 24), e.\u0275\u0275template(5, ir, 2, 2, "mat-option", 25), e.\u0275\u0275elementEnd()()()), r & 2) {
    let t = d.index, i = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(), e.\u0275\u0275property("formGroupName", t), e.\u0275\u0275advance(4), e.\u0275\u0275property("ngForOf", i.panes);
} }
function rr(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div", 20)(1, "button", 21), e.\u0275\u0275listener("click", function () { e.\u0275\u0275restoreView(t); let n = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(n.addPane()); }), e.\u0275\u0275text(2, "Add Pane"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(3, "div"), e.\u0275\u0275template(4, nr, 6, 2, "div", 22), e.\u0275\u0275elementEnd()();
} if (r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(4), e.\u0275\u0275property("ngForOf", t.bindings.controls);
} }
function ar(r, d) { r & 1 && (e.\u0275\u0275elementStart(0, "div", 27)(1, "mat-form-field"), e.\u0275\u0275element(2, "input", 28), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(3, "mat-form-field"), e.\u0275\u0275element(4, "input", 29), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(5, "mat-form-field"), e.\u0275\u0275element(6, "input", 30), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(7, "div")(8, "mat-checkbox", 31), e.\u0275\u0275text(9, "Multiple"), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(10, "mat-form-field"), e.\u0275\u0275element(11, "input", 32), e.\u0275\u0275elementEnd()()); }
function or(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 8), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = d.$implicit;
    e.\u0275\u0275property("value", t.value), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label);
} }
function sr(r, d) { if (r & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275elementStart(1, "mat-form-field")(2, "mat-label"), e.\u0275\u0275text(3), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(4, "mat-select", 6), e.\u0275\u0275template(5, or, 2, 2, "mat-option", 7), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementContainerEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(3), e.\u0275\u0275textInterpolate(t.label), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", t.options);
} }
function lr(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-radio-button", 8), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = d.$implicit;
    e.\u0275\u0275property("value", t.value), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label);
} }
function cr(r, d) { if (r & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275elementStart(1, "div")(2, "label"), e.\u0275\u0275text(3), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(4, "mat-radio-group", 6), e.\u0275\u0275template(5, lr, 2, 2, "mat-radio-button", 7), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementContainerEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(3), e.\u0275\u0275textInterpolate(t.label), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", t.options);
} }
function dr(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div")(1, "div", 10)(2, "mat-checkbox", 11), e.\u0275\u0275text(3), e.\u0275\u0275elementEnd()()()), r & 2) {
    let t = d.$implicit, i = d.index;
    e.\u0275\u0275advance(), e.\u0275\u0275property("formGroupName", i), e.\u0275\u0275advance(2), e.\u0275\u0275textInterpolate(t.label);
} }
function pr(r, d) { if (r & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275elementStart(1, "div")(2, "div", 2), e.\u0275\u0275template(3, dr, 4, 2, "div", 9), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementContainerEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(3), e.\u0275\u0275property("ngForOf", t.options);
} }
function ur(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 8), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = d.$implicit;
    e.\u0275\u0275property("value", t), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.label);
} }
function mr(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275elementStart(1, "mat-form-field"), e.\u0275\u0275element(2, "input", 12), e.\u0275\u0275elementStart(3, "mat-autocomplete", 13, 0), e.\u0275\u0275listener("optionSelected", function (n) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.onOptionSelected(n)); }), e.\u0275\u0275template(5, ur, 2, 2, "mat-option", 7), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementContainerEnd();
} if (r & 2) {
    let t = e.\u0275\u0275reference(4), i = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(2), e.\u0275\u0275property("placeholder", i.label)("matAutocomplete", t), e.\u0275\u0275advance(), e.\u0275\u0275property("displayWith", i.displayAuto), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", i.options);
} }
function gr(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-option", 8), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = d.$implicit;
    e.\u0275\u0275property("value", t.name), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t.name);
} }
function fr(r, d) { if (r & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div", 5), e.\u0275\u0275element(1, "druid-panels-panelpage-linkedlist", 6), e.\u0275\u0275elementStart(2, "button", 3), e.\u0275\u0275listener("click", function () { let n = e.\u0275\u0275restoreView(t).index, a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.onRemoveMapping(n)); }), e.\u0275\u0275text(3, "Remove"), e.\u0275\u0275elementEnd()();
} if (r & 2) {
    let t = d.index, i = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("formGroupName", t), e.\u0275\u0275advance(), e.\u0275\u0275property("panes", i.panes);
} }
function hr(r, d) { if (r & 1 && e.\u0275\u0275element(0, "classifieds-ui-render-pane", 4), r & 2) {
    let t = e.\u0275\u0275nextContext().index, i = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275property("pluginName", i.panes[t * 2].contentPlugin)("settings", i.panes[t * 2].settings)("contexts", i.panes[t * 2].contexts);
} }
function vr(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-tab"), e.\u0275\u0275template(1, hr, 1, 3, "ng-template", 3), e.\u0275\u0275element(2, "classifieds-ui-render-pane", 4), e.\u0275\u0275elementEnd()), r & 2) {
    let t = d.index, i = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(2), e.\u0275\u0275property("pluginName", i.panes[t * 2 + 1].contentPlugin)("settings", i.panes[t * 2 + 1].settings)("contexts", i.panes[t * 2 + 1].contexts);
} }
function br(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-tab-group", 1), e.\u0275\u0275template(1, vr, 3, 3, "mat-tab", 2), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("for", t.panes.length / 2);
} }
function yr(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-tab", 6), e.\u0275\u0275element(1, "classifieds-ui-render-pane", 4), e.\u0275\u0275elementEnd()), r & 2) {
    let t = d.$implicit;
    e.\u0275\u0275advance(), e.\u0275\u0275property("pluginName", t.contentPlugin)("settings", t.settings)("contexts", t.contexts);
} }
function _r(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "mat-tab-group", 1), e.\u0275\u0275template(1, yr, 2, 3, "mat-tab", 5), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngForOf", t.panes);
} }
function Cr(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "div", 2), e.\u0275\u0275element(1, "classifieds-ui-render-pane", 3), e.\u0275\u0275elementEnd()), r & 2) {
    let t = d.$implicit;
    e.\u0275\u0275advance(), e.\u0275\u0275property("pluginName", t.contentPlugin)("settings", t.settings)("contexts", t.contexts)("resolvedContext", t.resolvedContext);
} }
function Sr(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "th", 7), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = e.\u0275\u0275nextContext().$implicit;
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(t);
} }
function xr(r, d) { if (r & 1 && (e.\u0275\u0275elementStart(0, "td", 8), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), r & 2) {
    let t = d.$implicit, i = e.\u0275\u0275nextContext().$implicit, n = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(n.rowData(i, t));
} }
function wr(r, d) { if (r & 1 && (e.\u0275\u0275elementContainerStart(0, 4), e.\u0275\u0275template(1, Sr, 2, 1, "th", 5)(2, xr, 2, 1, "td", 6), e.\u0275\u0275elementContainerEnd()), r & 2) {
    let t = d.$implicit;
    e.\u0275\u0275property("matColumnDef", t);
} }
function Pr(r, d) { r & 1 && e.\u0275\u0275element(0, "tr", 9); }
function Fr(r, d) { r & 1 && e.\u0275\u0275element(0, "tr", 10); }
var Ir = { GridLayout: { entityName: "GridLayout" }, PanelPageForm: { crud: { panelpageform_serialize: { plugins: { idb_keyval: { params: { prefix: "panelpageform__" } } } } } } }, ke = (() => { class r {
    constructor(t) { this.viewContainerRef = t; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(e.ViewContainerRef)); }; }
    static { this.\u0275dir = e.\u0275\u0275defineDirective({ type: r, selectors: [["", "classifiedsUiContentSelectionHost", ""]], standalone: !1 }); }
} return r; })(), Tr = (() => { class r {
    constructor(t, i, n, a, o, s) { this.data = t, this.bottomSheetRef = i, this.dialog = n, this.componentFactoryResolver = a, this.fb = o, this.contentPluginManager = s, this.selectedIndex = 0; }
    ngOnInit() { this.contentPlugins = this.contentPluginManager.getPlugins(); }
    onEntitySelected(t) { if (this.plugin = t, this.plugin.selectionComponent !== void 0)
        this.selectedIndex = 1, this.renderSelectionComponent();
    else if (this.plugin.editorComponent !== void 0)
        if (this.bottomSheetRef.dismiss(), t.handler)
            this.plugin.handler.editorOptions([]).subscribe(i => { let n = this.dialog.open(this.plugin.editorComponent, y({ data: { panelFormGroup: this.data.panelForm, panelIndex: this.data.panelIndex, pane: void 0, paneIndex: void 0, contexts: this.data.contexts, contentAdded: this.data.contentAdded, plugin: t } }, i.fullscreen ? { maxWidth: "100vw", maxHeight: "100vh", height: "100%", width: "100%" } : {})); });
        else {
            let i = this.dialog.open(this.plugin.editorComponent, { data: { panelFormGroup: this.data.panelForm, panelIndex: this.data.panelIndex, pane: void 0, paneIndex: void 0, contexts: this.data.contexts, contentAdded: this.data.contentAdded } });
        }
    else
        this.data.panelForm.get("panes").push(this.fb.group({ contentPlugin: this.fb.control(this.plugin.id), name: this.fb.control(""), label: this.fb.control(""), settings: this.fb.array([]) })); }
    renderSelectionComponent() { let t = this.componentFactoryResolver.resolveComponentFactory(this.plugin.selectionComponent), i = this.selectionHost.viewContainerRef; i.clear(); let n = i.createComponent(t); n.instance.panelFormGroup = this.data.panelForm, n.instance.contexts = this.data.contexts; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(Ut), e.\u0275\u0275directiveInject(be.MatBottomSheetRef), e.\u0275\u0275directiveInject(h.MatDialog), e.\u0275\u0275directiveInject(e.ComponentFactoryResolver), e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(ve.ContentPluginManager)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-content-selector"]], viewQuery: function (i, n) { if (i & 1 && e.\u0275\u0275viewQuery(ke, 7), i & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.selectionHost = a.first);
        } }, standalone: !1, decls: 10, vars: 6, consts: [[1, "content-selector-wrapper"], [3, "selectedIndex"], ["mat-list-item", "", "mat-list-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["classifiedsUiContentSelectionHost", ""], ["mat-list-item", "", "mat-list-item", "", 3, "click"], ["mat-line", ""]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "mat-tab-group", 1)(2, "mat-tab")(3, "mat-nav-list"), e.\u0275\u0275template(4, ln, 3, 1, "a", 2), e.\u0275\u0275pipe(5, "async"), e.\u0275\u0275pipe(6, "keyvalue"), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(7, "mat-tab"), e.\u0275\u0275elementContainerStart(8), e.\u0275\u0275template(9, cn, 0, 0, "ng-template", 3), e.\u0275\u0275elementContainerEnd(), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275advance(), e.\u0275\u0275property("selectedIndex", n.selectedIndex), e.\u0275\u0275advance(3), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(6, 4, e.\u0275\u0275pipeBind1(5, 2, n.contentPlugins)))); }, dependencies: [v.NgForOf, Le.MatLine, Y.MatNavList, Y.MatListItem, B.MatTab, B.MatTabGroup, ke, v.AsyncPipe, v.KeyValuePipe], styles: [".content-selector-wrapper[_ngcontent-%COMP%]     .mat-mdc-tab-header{display:none}"] }); }
} return r; })(), te = (() => { class r {
    constructor(t, i) { this.attributeSerializer = t, this.tokenizrService = i, this.types = ["text/markdown", "text/html"]; }
    handleFile(t) { return new Oe(i => { let n = new FileReader; n.onload = () => { i.next(this.buildSettings(new St({ contentType: t.type, content: `${n.result}` }))), i.complete(); }, n.readAsText(t); }); }
    handlesType(t) { return this.types.find(i => i === t) !== void 0; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(t) { return f(!1); }
    isDynamic(t) { return !1; }
    isData(t) { return !1; }
    getBindings(t, i, n) { return i === "context" ? this.toObject(t).pipe(u(a => this.tokenizrService.discoverTokens(a.content).map(s => new qe({ id: s, type: "context" })))) : f([]); }
    fetchDynamicData(t, i) { return f(new H); }
    buildDynamicItems(t, i) { return f([]); }
    toObject(t) { return f(new St(this.attributeSerializer.deserializeAsObject(t))); }
    buildSettings(t) { return this.attributeSerializer.serialize(t, "root").attributes; }
    stateDefinition(t) { return f({}); }
    editorOptions(t) { return f(new re({ fullscreen: !0 })); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(w.AttributeSerializerService), e.\u0275\u0275inject(N.TokenizerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), ri = (() => { class r {
    set settings(t) { this.settings$.next(t); }
    set resolvedContext(t) { this.resolvedContext$.next(t); }
    constructor(t, i, n, a) { this.hostEl = t, this.handler = i, this.tokenizerService = n, this.markdownService = a, this.contexts = [], this.afterContentInit$ = new z, this.content = "", this.content$ = new J(""), this.settings$ = new J([]), this.snippet$ = new J(void 0), this.resolvedContext$ = new J(void 0), this.docRendered$ = new z, this.contentSub = ue([this.afterContentInit$, this.content$, this.snippet$, this.docRendered$]).subscribe(([o, s, c]) => { c && c.jsScript && c.jsScript !== "" && setTimeout(() => this.appendScript(c.jsScript)); }), this.renderContentSub = ue([this.settings$, this.resolvedContext$]).pipe(_(([o, s]) => this.handler.toObject(o)), _(o => this.resolveContexts().pipe(u(s => [o, s])))).subscribe(c => yt(this, [c], function* ([o, s]) { s !== void 0 && (this.tokens = s), this.contentType = o.contentType, this.snippet$.next(o); let m = this.replaceTokens(o.content), C; o.contentType && o.contentType.indexOf("markdown") !== -1 ? C = yield Promise.resolve(this.markdownService.parse(m)) : C = m, this.content$.next(C); })); }
    ngOnInit() { }
    ngOnChanges() { console.log("pane changed"); }
    ngAfterContentInit() { this.afterContentInit$.next(), this.afterContentInit$.complete(); }
    replaceTokens(t) { return this.tokens !== void 0 && this.tokens.forEach((i, n) => { t = t.split(`[${n}]`).join(`${i}`); }), t; }
    resolveContexts() { return new Oe(t => { let i = new Map; if (this.resolvedContext$.value)
        for (let n in this.resolvedContext$.value)
            i = new Map([...i, ...this.tokenizerService.generateGenericTokens(this.resolvedContext$.value[n], n === "_root" ? "" : n)]); t.next(i), t.complete(); }); }
    appendScript(t) { let i = document.createElement("script"); i.type = "text/javascript", i.appendChild(document.createTextNode(t)), this.hostEl.nativeElement.appendChild(i), console.log("add script"); }
    onDocRendered() { this.docRendered$.next(void 0); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(te), e.\u0275\u0275directiveInject(N.TokenizerService), e.\u0275\u0275directiveInject(Gt.MarkdownService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-snippet-pane-renderer"]], inputs: { settings: "settings", contexts: "contexts", tokens: "tokens", resolvedContext: "resolvedContext" }, standalone: !1, features: [e.\u0275\u0275NgOnChangesFeature], decls: 2, vars: 2, consts: [[3, "content", "docRendered", 4, "ngIf"], [3, "docRendered", "content"]], template: function (i, n) { i & 1 && e.\u0275\u0275template(0, dn, 2, 3, "classifieds-ui-dynamic-content-viewer", 0)(1, pn, 2, 3, "classifieds-ui-dynamic-content-viewer", 0), i & 2 && (e.\u0275\u0275property("ngIf", n.contentType == "text/markdown"), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", n.contentType == "text/html")); }, dependencies: [v.NgIf, he.DynamicContentViewer, v.AsyncPipe], encapsulation: 2 }); }
} return r; })(), ie = (() => { class r {
    constructor(t) { this.snippetHandler = t; }
    handleFile(t) { return f([]); }
    handlesType(t) { return !1; }
    implementsRendererOverride() { return !0; }
    hasRendererOverride(t) { return this.rendererSnippet(t).pipe(u(i => i !== void 0)); }
    isDynamic(t) { return !1; }
    isData(t) { return !1; }
    fetchDynamicData(t, i) { return f(new H); }
    buildDynamicItems(t, i) { return f([]); }
    getBindings(t, i, n) { return f([]); }
    valueSettings(t) { let i = []; return t.forEach(n => { n.name === "value" && i.push(n); }), i; }
    rendererSnippet(t) { let i; return t.forEach(n => { n.name === "_renderer" && (i = this.snippetHandler.toObject(n.attributes)); }), i !== void 0 ? i : f(void 0); }
    rendererOverrideSettings(t) { return [new ne({ name: "_renderer", type: ee.Complex, displayName: "Renderer Override", value: void 0, computedValue: void 0, intValue: 0, attributes: this.snippetHandler.buildSettings(t) })]; }
    widgetSettings(t) { return [new ne({ name: "widget", type: t.schema.type, displayName: "Widget", value: t.name, computedValue: t.name, intValue: 0, attributes: [] })]; }
    stateDefinition(t) { return f({}); }
    editorOptions(t) { return f(new re); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(te)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), Mr = (() => { class r {
    constructor(t, i, n, a, o) { this.data = t, this.dialogRef = i, this.tokenizerService = n, this.handler = a, this.fb = o; }
    ngOnInit() { this.tokens = this.tokenizerService.generateTokens(this.data.pane.settings); }
    submitted(t) { this.replaceRenderer(t), this.dialogRef.close(); }
    replaceRenderer(t) { let i, n = this.handler.rendererOverrideSettings(t)[0], a = this.convertToGroup(n), o = this.data.panelFormGroup.get("panes").at(this.data.paneIndex).get("settings"); o.controls.forEach((s, c) => { s.get("name").value === "_renderer" && (i = c); }), i !== void 0 ? (o.insert(i, a), o.removeAt(i + 1)) : o.push(a); }
    convertToGroup(t) { let i = this.fb.group({ name: new p(t.name, g.required), type: new p(t.type, g.required), displayName: new p(t.displayName, g.required), value: new p(t.value, g.required), computedValue: new p(t.value, g.required), attributes: new q([]) }); return t.attributes && t.attributes.length > 0 && t.attributes.forEach(n => { i.get("attributes").push(this.convertToGroup(n)); }), i; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(k), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(N.TokenizerService), e.\u0275\u0275directiveInject(ie), e.\u0275\u0275directiveInject(l.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-rendering-editor"]], standalone: !1, decls: 2, vars: 1, consts: [[3, "submitted", "tokens"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "classifieds-ui-snippet-form", 0), e.\u0275\u0275listener("submitted", function (o) { return n.submitted(o); }), e.\u0275\u0275element(1, "classifieds-ui-snippet-form"), e.\u0275\u0275elementEnd()), i & 2 && e.\u0275\u0275property("tokens", n.tokens); }, dependencies: [Be.SnippetFormComponent], encapsulation: 2 }); }
} return r; })(), Er = (() => { class r {
    constructor(t, i, n, a, o, s) { this.data = t, this.spm = i, this.bottomSheetRef = n, this.dialog = a, this.componentFactoryResolver = o, this.fb = s, this.selectedIndex = 0; }
    ngOnInit() { this.stylePlugins = this.spm.getPlugins(); }
    onStyleSelected(t) { if (this.plugin = t, this.plugin.editorComponent !== void 0) {
        this.bottomSheetRef.dismiss(), this.data.panelForm.get("stylePlugin").setValue(this.plugin.name), this.data.panelForm.get("styleTitle").setValue(this.plugin.title), this.data.panelForm.get("settings").clear();
        let i = this.dialog.open(this.plugin.editorComponent, { data: { panelFormGroup: this.data.panelForm, panelIndex: this.data.panelIndex, contexts: this.data.contexts } });
    }
    else
        this.data.panelForm.get("stylePlugin").setValue(this.plugin.name), this.data.panelForm.get("styleTitle").setValue(this.plugin.title), this.data.panelForm.get("settings").clear(), this.bottomSheetRef.dismiss(); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(Ut), e.\u0275\u0275directiveInject(b.StylePluginManager), e.\u0275\u0275directiveInject(be.MatBottomSheetRef), e.\u0275\u0275directiveInject(h.MatDialog), e.\u0275\u0275directiveInject(e.ComponentFactoryResolver), e.\u0275\u0275directiveInject(l.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-style-selector"]], viewQuery: function (i, n) { if (i & 1 && e.\u0275\u0275viewQuery(ke, 7), i & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.selectionHost = a.first);
        } }, standalone: !1, decls: 10, vars: 6, consts: [[1, "style-selector-wrapper"], [3, "selectedIndex"], ["mat-list-item", "", "mat-list-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["classifiedsUiContentSelectionHost", ""], ["mat-list-item", "", "mat-list-item", "", 3, "click"], ["mat-line", ""]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "mat-tab-group", 1)(2, "mat-tab")(3, "mat-nav-list"), e.\u0275\u0275template(4, un, 3, 1, "a", 2), e.\u0275\u0275pipe(5, "async"), e.\u0275\u0275pipe(6, "keyvalue"), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(7, "mat-tab"), e.\u0275\u0275elementContainerStart(8), e.\u0275\u0275template(9, mn, 0, 0, "ng-template", 3), e.\u0275\u0275elementContainerEnd(), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275advance(), e.\u0275\u0275property("selectedIndex", n.selectedIndex), e.\u0275\u0275advance(3), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(6, 4, e.\u0275\u0275pipeBind1(5, 2, n.stylePlugins)))); }, dependencies: [v.NgForOf, Le.MatLine, Y.MatNavList, Y.MatListItem, B.MatTab, B.MatTabGroup, ke, v.AsyncPipe, v.KeyValuePipe], styles: [".style-selector-wrapper[_ngcontent-%COMP%]     .mat-mdc-tab-header{display:none}"] }); }
} return r; })(), $r = (() => { class r {
    constructor(t, i, n, a, o) { this.data = t, this.dialogRef = i, this.fb = n, this.inlineContextResolver = a, this.rulesParser = o, this.rulesForm = this.fb.group({ rules: this.fb.control("") }), this.config = { fields: {} }; }
    ngOnInit() { this.inlineContextResolver.resolveMerged(this.data.contexts).subscribe(t => { let i = {}; for (let n in t)
        this.rulesParser.buildFields(t[n], n).forEach((a, o) => { i[o] = a; }); this.config = S(y({}, this.config), { fields: i }), this.data.rule !== void 0 && this.rulesForm.get("rules").setValue(this.data.rule); }); }
    submit() { console.log("the rules"), console.log(this.rulesForm.get("rules").value), this.dialogRef.close(this.rulesForm.get("rules").value); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(k), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(G.InlineContextResolverService), e.\u0275\u0275directiveInject(We.RulesParserService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-rules-dialog"]], standalone: !1, decls: 6, vars: 3, consts: [[1, "rest-form", 3, "ngSubmit", "formGroup"], ["formControlName", "rules", 3, "config"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content"), e.\u0275\u0275element(2, "query-builder", 1), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(3, "mat-dialog-actions")(4, "button", 2), e.\u0275\u0275text(5, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.rulesForm), e.\u0275\u0275advance(2), e.\u0275\u0275property("config", n.config), e.\u0275\u0275advance(2), e.\u0275\u0275property("disabled", !n.rulesForm.valid)); }, dependencies: [l.\u0275NgNoValidate, l.NgControlStatus, l.NgControlStatusGroup, l.FormGroupDirective, l.FormControlName, A.MatButton, h.MatDialogClose, h.MatDialogActions, h.MatDialogContent, At.QueryBuilderComponent], encapsulation: 2 }); }
} return r; })(), Dr = (() => { class r {
    constructor(t, i, n) { this.data = t, this.dialogRef = i, this.fb = n, this.propertiesForm = this.fb.group({ name: this.fb.control(this.data.props.name), title: this.fb.control(this.data.props.title), path: this.fb.control(this.data.props.path), cssFile: this.fb.control(this.data.props.cssFile), readUserIds: this.fb.array([this.fb.group({ userId: this.fb.control(this.data.props.readUserIds && this.data.props.readUserIds.length > 0 ? this.data.props.readUserIds[0] : "") })]) }); }
    ngOnInit() { }
    submit() { this.dialogRef.close(new xe(S(y({}, this.propertiesForm.value), { readUserIds: this.propertiesForm.value.readUserIds.map(t => t.userId) }))); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(k), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(l.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-properties-dialog"]], standalone: !1, decls: 18, vars: 2, consts: [[1, "properties-form", 3, "ngSubmit", "formGroup"], [1, "content-inner"], ["fxLayout", "column"], ["matInput", "", "formControlName", "name", "placeholder", "Name"], ["matInput", "", "formControlName", "title", "placeholder", "Title"], ["matInput", "", "formControlName", "path", "placeholder", "Path"], ["matInput", "", "formControlName", "cssFile", "placeholder", "Css File"], ["formArrayName", "readUserIds"], ["formGroupName", "0"], ["matInput", "", "formControlName", "userId", "placeholder", "Read User Id"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "div", 1)(3, "div", 2)(4, "mat-form-field"), e.\u0275\u0275element(5, "input", 3), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(6, "mat-form-field"), e.\u0275\u0275element(7, "input", 4), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(8, "mat-form-field"), e.\u0275\u0275element(9, "input", 5), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(10, "mat-form-field"), e.\u0275\u0275element(11, "input", 6), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(12, "mat-form-field", 7)(13, "div", 8), e.\u0275\u0275element(14, "input", 9), e.\u0275\u0275elementEnd()()()()(), e.\u0275\u0275elementStart(15, "mat-dialog-actions")(16, "button", 10), e.\u0275\u0275text(17, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.propertiesForm), e.\u0275\u0275advance(16), e.\u0275\u0275property("disabled", !n.propertiesForm.valid)); }, dependencies: [l.\u0275NgNoValidate, l.DefaultValueAccessor, l.NgControlStatus, l.NgControlStatusGroup, l.FormGroupDirective, l.FormControlName, l.FormGroupName, l.FormArrayName, A.MatButton, h.MatDialogClose, h.MatDialogActions, h.MatDialogContent, x.MatInput, x.MatFormField], encapsulation: 2 }); }
} return r; })(), Mt = (() => { class r {
    constructor(t, i, n) { this.data = t, this.dialogRef = i, this.fb = n, this.contextForm = this.fb.group({ context: this.fb.control("") }), this.context = t.context; }
    ngOnInit() { }
    ngAfterViewInit() { this.data.context && setTimeout(() => { this.contextFormComp.contextForm.setValue({ name: this.data.context.name, plugin: this.data.context.plugin }), this.data.context.plugin === "rest" ? setTimeout(() => { this.contextFormComp.componentRef.instance.restSourceFormComp.restSource = { url: this.data.context.rest.url, params: this.data.context.rest.params }; }) : this.data.context.plugin === "datasource" && setTimeout(() => { this.contextFormComp.componentRef.instance.datasourceFormComp.datasource = this.data.context.datasource; }); }); }
    submit() { this.contextForm.get("context").value.name !== "" ? this.dialogRef.close(new le(this.contextForm.get("context").value)) : this.dialogRef.close(); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(k), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(l.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-context-dialog"]], viewQuery: function (i, n) { if (i & 1 && e.\u0275\u0275viewQuery(Oi, 5), i & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.contextFormComp = a.first);
        } }, standalone: !1, decls: 6, vars: 3, consts: [[1, "context-form", 3, "ngSubmit", "formGroup"], ["formControlName", "context", 3, "context"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content"), e.\u0275\u0275element(2, "classifieds-ui-context-form", 1), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(3, "mat-dialog-actions")(4, "button", 2), e.\u0275\u0275text(5, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.contextForm), e.\u0275\u0275advance(2), e.\u0275\u0275property("context", n.context), e.\u0275\u0275advance(2), e.\u0275\u0275property("disabled", !n.contextForm.valid)); }, dependencies: [l.\u0275NgNoValidate, l.NgControlStatus, l.NgControlStatusGroup, l.FormGroupDirective, l.FormControlName, A.MatButton, h.MatDialogClose, h.MatDialogActions, h.MatDialogContent, G.ContextFormComponent], encapsulation: 2 }); }
} return r; })(), Rr = (() => { class r {
    constructor(t, i, n) { this.data = t, this.dialogRef = i, this.fb = n, this.propsForm = this.fb.group({ name: this.fb.control(this.data.props.name), label: this.fb.control(this.data.props.label) }); }
    ngOnInit() { }
    submit() { this.dialogRef.close(new Wt(this.propsForm.value)); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(k), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(l.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-panel-props-dialog"]], standalone: !1, decls: 11, vars: 2, consts: [[1, "props-form", 3, "ngSubmit", "formGroup"], [1, "content-inner"], ["fxLayout", "column"], ["matInput", "", "formControlName", "name", "placeholder", "Name"], ["matInput", "", "formControlName", "label", "placeholder", "Label"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "div", 1)(3, "div", 2)(4, "mat-form-field"), e.\u0275\u0275element(5, "input", 3), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(6, "mat-form-field"), e.\u0275\u0275element(7, "input", 4), e.\u0275\u0275elementEnd()()()(), e.\u0275\u0275elementStart(8, "mat-dialog-actions")(9, "button", 5), e.\u0275\u0275text(10, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.propsForm), e.\u0275\u0275advance(9), e.\u0275\u0275property("disabled", !n.propsForm.valid)); }, dependencies: [l.\u0275NgNoValidate, l.DefaultValueAccessor, l.NgControlStatus, l.NgControlStatusGroup, l.FormGroupDirective, l.FormControlName, A.MatButton, h.MatDialogClose, h.MatDialogActions, h.MatDialogContent, x.MatInput, x.MatFormField], encapsulation: 2 }); }
} return r; })(), jr = (() => { class r {
    constructor(t, i, n) { this.data = t, this.dialogRef = i, this.fb = n, this.propsForm = this.fb.group({ name: this.fb.control(this.data.props.name), label: this.fb.control(this.data.props.label) }); }
    ngOnInit() { }
    submit() { this.dialogRef.close(new Jt(this.propsForm.value)); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(k), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(l.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-pane-props-dialog"]], standalone: !1, decls: 11, vars: 2, consts: [[1, "props-form", 3, "ngSubmit", "formGroup"], [1, "content-inner"], ["fxLayout", "column"], ["matInput", "", "formControlName", "name", "placeholder", "Name"], ["matInput", "", "formControlName", "label", "placeholder", "Label"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "div", 1)(3, "div", 2)(4, "mat-form-field"), e.\u0275\u0275element(5, "input", 3), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(6, "mat-form-field"), e.\u0275\u0275element(7, "input", 4), e.\u0275\u0275elementEnd()()()(), e.\u0275\u0275elementStart(8, "mat-dialog-actions")(9, "button", 5), e.\u0275\u0275text(10, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.propsForm), e.\u0275\u0275advance(9), e.\u0275\u0275property("disabled", !n.propsForm.valid)); }, dependencies: [l.\u0275NgNoValidate, l.DefaultValueAccessor, l.NgControlStatus, l.NgControlStatusGroup, l.FormGroupDirective, l.FormControlName, A.MatButton, h.MatDialogClose, h.MatDialogActions, h.MatDialogContent, x.MatInput, x.MatFormField], encapsulation: 2 }); }
} return r; })(), Et = (() => { class r {
    constructor(t) { this.viewContainerRef = t; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(e.ViewContainerRef)); }; }
    static { this.\u0275dir = e.\u0275\u0275defineDirective({ type: r, selectors: [["", "classifiedsUiLayoutEditorHost", ""]], standalone: !1 }); }
} return r; })(), $t = (() => { class r {
    constructor(t) { this.viewContainerRef = t; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(e.ViewContainerRef)); }; }
    static { this.\u0275dir = e.\u0275\u0275defineDirective({ type: r, selectors: [["", "classifiedsUiPaneContentHost", ""]], standalone: !1 }); }
} return r; })(), Or = (() => { class r {
    constructor(t, i, n, a) { this.data = t, this.dialogRef = i, this.fb = n, this.attributeSerializer = a, this.prerenderForm = this.fb.group({ route: this.fb.control(this.data.props.route), datasource: this.fb.control(this.data.props.datasource), _proxy: this.fb.control("") }), this.proxyControlSub = this.prerenderForm.get("_proxy").valueChanges.pipe(u(o => o ? new xt(S(y({}, o), { settings: this.attributeSerializer.serialize(o.settings, "settings").attributes })) : new xt), I(o => this.prerenderForm.get("datasource").setValue(o))).subscribe(), this.datasource = this.data.props.datasource; }
    ngOnInit() { }
    submit() { this.dialogRef.close(new we(y({}, this.prerenderForm.value))); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(k), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(w.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-prerender-dialog"]], standalone: !1, decls: 10, vars: 3, consts: [[1, "prerender-form", 3, "ngSubmit", "formGroup"], [1, "content-inner"], ["matInput", "", "formControlName", "route", "placeholder", "Route"], ["formControlName", "_proxy", 3, "datasource"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "div", 1)(3, "div")(4, "mat-form-field"), e.\u0275\u0275element(5, "input", 2), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(6, "classifieds-ui-datasource-form", 3), e.\u0275\u0275elementEnd()()(), e.\u0275\u0275elementStart(7, "mat-dialog-actions")(8, "button", 4), e.\u0275\u0275text(9, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.prerenderForm), e.\u0275\u0275advance(6), e.\u0275\u0275property("datasource", n.datasource), e.\u0275\u0275advance(2), e.\u0275\u0275property("disabled", !n.prerenderForm.valid)); }, dependencies: [l.\u0275NgNoValidate, l.DefaultValueAccessor, l.NgControlStatus, l.NgControlStatusGroup, l.FormGroupDirective, l.FormControlName, A.MatButton, h.MatDialogClose, h.MatDialogActions, h.MatDialogContent, x.MatInput, x.MatFormField, He.DatasourceFormComponent], encapsulation: 2 }); }
} return r; })(), lt = (() => { class r {
    get entityCollectionService() { return this.entityServices.getEntityCollectionService("PanelPageState"); }
    constructor(t, i) { this.entityServices = t, this.attributeSerializer = i; }
    resolve(t, i) { let n = c => c.entities, a = ({ id: c }) => Ft(n, m => m[c] ? m[c] : void 0), o = ({ id: c, path: m }) => Ft(a({ id: c }), C => Je.JSONPath({ path: m, json: C })), s = "$." + i.selectionPath.map((c, m) => `${(m + 1) % 2 === 0 ? "panes" : (m === 0 ? "" : "nestedPage.") + "panels"}[${c}]`).join("."); return this.entityCollectionService.collection$.pipe(de(o({ id: i.id, path: s })), u(c => c && Array.isArray(c) && c.length !== 0 ? c[0] : this.defaultPaneState(i.value ? i.value : {})), u(c => this.attributeSerializer.deserialize(c.state)), u(c => c ? c.root ? c.root : c : {}), I(c => { console.log(`resolved panestate[id=${i.id}]${s}`), console.log(c); })); }
    defaultPaneState(t) { return new Ie({ state: this.attributeSerializer.serialize(t, "root") }); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject($.EntityServices), e.\u0275\u0275inject(w.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), Dt = (() => { class r {
    set panelIndex(t) { this.panelIndex$.next(t); }
    set paneIndex(t) { this.paneIndex$.next(t); }
    set ancestory(t) { this.ancestory$.next(t); }
    constructor(t, i, n) { this.componentFactoryResolver = t, this.panelHandler = i, this.cpm = n, this.settings = [], this.locked = !1, this.contexts = [], this.edit = new M, this.props = new M, this.delete = new M, this.rules = new M, this.rendererOverride = new M, this.removeRendererOverride = new M, this.nestedUpdate = new M, this.heightChange = new M, this.displayOverride = !1, this.hasOverride = !1, this.preview = !1, this.schedulePluginChange = new z, this.pluginChangeSub = this.schedulePluginChange.pipe(_(a => this.cpm.getPlugin(this.pluginName).pipe(_(o => o.handler.hasRendererOverride(this.settings).pipe(u(s => [a, o, s])))))).subscribe(([a, o, s]) => { this.contentPlugin = o, this.displayOverride = o.handler.implementsRendererOverride(), this.hasOverride = !!s, a && this.pluginName === "panel" && this.panelHandler.toObject(this.settings).subscribe(c => { this.panelPage = c; }); }), this.ancestory$ = new z, this.panelIndex$ = new z, this.paneIndex$ = new z, this.paneAncestoryWithSelf = [], this.paneAncestoryWithSelfSub = ue([this.ancestory$, this.panelIndex$, this.paneIndex$]).pipe(u(([a, o, s]) => [...a, o, s])).subscribe(a => { this.paneAncestoryWithSelf = a; }); }
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
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(e.ComponentFactoryResolver), e.\u0275\u0275directiveInject(b.PanelContentHandler), e.\u0275\u0275directiveInject(ve.ContentPluginManager)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-editable-pane"]], viewQuery: function (i, n) { if (i & 1 && (e.\u0275\u0275viewQuery($t, 5), e.\u0275\u0275viewQuery(gn, 5)), i & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.contentPaneHost = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.contentEditor = a.first);
        } }, inputs: { pluginName: "pluginName", settings: "settings", name: "name", label: "label", panelIndex: "panelIndex", paneIndex: "paneIndex", locked: "locked", rootContext: "rootContext", contexts: "contexts", ancestory: "ancestory" }, outputs: { edit: "edit", props: "props", delete: "delete", rules: "rules", rendererOverride: "rendererOverride", removeRendererOverride: "removeRendererOverride", nestedUpdate: "nestedUpdate", heightChange: "heightChange" }, standalone: !1, features: [e.\u0275\u0275NgOnChangesFeature], decls: 17, vars: 6, consts: [["settingsTmpl", ""], ["nestedPanelTpl", ""], ["paneMenu", "matMenu"], ["contentEditor", ""], ["extraActionsArea", ""], ["class", "editable-pane-wrapper", 4, "ngIf", "ngIfElse"], ["type", "button", "mat-menu-item", "", 3, "click", "disabled"], ["type", "button", "mat-menu-item", "", 3, "click"], ["mat-menu-item", "", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["mat-menu-item", "", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", "mat-menu-item", "", 1, "delete", 3, "click"], [1, "editable-pane-wrapper"], ["fxLayout", "row", 1, "inner-pane-wrapper"], [1, "pane-menu-trigger-wrapper"], ["mat-button", "", "type", "button", 3, "matMenuTriggerFor"], ["fxFlex", "", 3, "afterCollapse", "afterExpand"], [3, "hidden"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "preview-area", 3, "ngClass"], ["class", "override", "type", "button", 3, "click", 4, "ngIf"], ["classifiedsUiPaneContentHost", ""], ["type", "button", 1, "override", 3, "click"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "nested-panel-wrapper"], [3, "nestedUpdate", "delete", "rules", "props", "panelPage", "savable", "nested", "locked", "contexts", "rootContext", "ancestory"], ["mat-menu-item", "", "type", "button", 3, "click", "disabled"], ["mat-menu-item", "", "type", "button", 3, "click"]], template: function (i, n) { if (i & 1) {
            let a = e.\u0275\u0275getCurrentView();
            e.\u0275\u0275template(0, _n, 18, 13, "div", 5)(1, Pn, 1, 1, "ng-template", null, 0, e.\u0275\u0275templateRefExtractor)(3, In, 5, 7, "ng-template", null, 1, e.\u0275\u0275templateRefExtractor), e.\u0275\u0275elementStart(5, "mat-menu", null, 2)(7, "button", 6), e.\u0275\u0275listener("click", function () { return e.\u0275\u0275restoreView(a), e.\u0275\u0275resetView(n.onEditClick()); }), e.\u0275\u0275text(8, "Edit"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(9, "button", 6), e.\u0275\u0275listener("click", function () { return e.\u0275\u0275restoreView(a), e.\u0275\u0275resetView(n.onPropsClick()); }), e.\u0275\u0275text(10, "Props"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(11, "button", 7), e.\u0275\u0275listener("click", function () { return e.\u0275\u0275restoreView(a), e.\u0275\u0275resetView(n.onRulesClick()); }), e.\u0275\u0275text(12, "Rules"), e.\u0275\u0275elementEnd(), e.\u0275\u0275template(13, Tn, 2, 1, "button", 8)(14, Mn, 2, 0, "button", 9), e.\u0275\u0275elementStart(15, "button", 10), e.\u0275\u0275listener("click", function () { return e.\u0275\u0275restoreView(a), e.\u0275\u0275resetView(n.onDeleteClick()); }), e.\u0275\u0275text(16, "Delete"), e.\u0275\u0275elementEnd()();
        } if (i & 2) {
            let a = e.\u0275\u0275reference(4);
            e.\u0275\u0275property("ngIf", n.pluginName != "panel" || n.locked)("ngIfElse", a), e.\u0275\u0275advance(7), e.\u0275\u0275property("disabled", n.locked), e.\u0275\u0275advance(2), e.\u0275\u0275property("disabled", n.locked && n.settings.length !== 0), e.\u0275\u0275advance(4), e.\u0275\u0275property("ngIf", !n.preview), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", n.preview);
        } }, dependencies: () => [v.NgClass, v.NgForOf, v.NgIf, v.NgTemplateOutlet, A.MatButton, _e.MatExpansionPanel, _e.MatExpansionPanelHeader, _e.MatExpansionPanelTitle, Xt.MatIcon, Q.MatMenu, Q.MatMenuItem, Q.MatMenuTrigger, vt, $t, w.AttributePipe], styles: [".editable-pane-wrapper[_ngcontent-%COMP%]{margin-bottom:.25em;border-radius:4px;padding-left:.25em;box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f}.nested-panel-wrapper[_ngcontent-%COMP%]{margin-bottom:.25em}.inner-pane-wrapper[_ngcontent-%COMP%]{padding:0}.pane-header[_ngcontent-%COMP%]{background-color:#ccc;padding:0}.mat-mdc-menu-trigger[_ngcontent-%COMP%]{min-width:0;padding:0;margin:0}button.delete[_ngcontent-%COMP%]{float:right}.preview-area[_ngcontent-%COMP%]{display:none;position:relative}.preview-area.visible[_ngcontent-%COMP%]{display:block;height:300px;overflow-y:scroll;border:1px solid black;padding:.5em}.panel-name[_ngcontent-%COMP%]{float:right;padding-right:.5em}.pane-menu-trigger-wrapper[_ngcontent-%COMP%]{display:flex}.mat-expansion-panel[_ngcontent-%COMP%]{box-shadow:none}.mat-expansion-panel-header[_ngcontent-%COMP%]{padding:0 1em 0 .25em}"] }); }
} return r; })(), vt = (() => { class r {
    set ancestory(t) { this.ancestory$.next(t); }
    get ancestory() { return this.ancestory$.value; }
    get panels() { return this.contentForm.get("panels"); }
    get layoutType() { return this.contentForm.get("layoutType"); }
    get displayType() { return this.contentForm.get("displayType"); }
    get columnSettings() { let t = this.panels.length, i = []; for (let n = 0; n < t; n++)
        i = [...i, new O(this.panels.at(n).get("columnSetting").value)]; return i; }
    constructor(t, i, n, a, o, s, c, m, C, P, D, V, X, T) { this.siteName = t, this.cpm = i, this.spm = n, this.lpm = a, this.cxtm = o, this.fb = s, this.bs = c, this.dialog = m, this.panelHandler = C, this.tokenizerService = P, this.componentFactoryResolver = D, this.pageBuilderFacade = V, this.paneStateContextResolver = X, this.panelsContextService = T, this.submitted = new M, this.nestedUpdate = new M, this.delete = new M, this.rules = new M, this.props = new M, this.savable = !0, this.nested = !1, this.locked = !1, this.pageBuilder = !1, this.contexts = [], this.contentAdded = new z, this.contentAdddedSub = this.contentAdded.subscribe(([R, Se]) => { this.resolvePaneContexts(R, Se); }), this.dashboard = [], this.pageProperties = new xe, this.persistence = new it, this.interactions = new nt, this.prerenderProperties = new we, this.layoutSetting = new O, this.rowSettings = [], this.ancestory$ = new J([]), this.onTouched = () => { }, this.contentForm = this.fb.group({ name: this.fb.control(""), title: this.fb.control(""), layoutType: this.fb.control("split", g.required), displayType: this.fb.control("page", g.required), panels: this.fb.array([]) }), this.options = { gridType: Gi.Fit, displayGrid: Vi.Always, pushItems: !0, draggable: { enabled: !0 }, resizable: { enabled: !0 }, mobileBreakpoint: 0, itemChangeCallback: (R, Se) => { }, itemInitCallback: (R, Se) => { if (this.nested && R.y !== 0) {
            let Ee = this.gridLayout.grid.findIndex(ae => ae.x === R.x && ae.y === R.y && ae.cols === R.cols && ae.rows === R.rows);
            this.panelPanes(Ee).length === 0 && this.gridLayout.setItemContentHeight(Ee, 200);
        } } }, this.ancestorySub = this.ancestory$.pipe(E(() => !!this.layoutEditorRef)).subscribe(R => { this.layoutEditorRef.instance.ancestory = R; }); }
    ngOnInit() { this.contentForm.valueChanges.pipe(E(() => this.nested), se(500)).subscribe(() => { this.nestedUpdate.emit(this.packageFormData()); }), this.contentForm.get("layoutType").valueChanges.pipe(E(t => t === "gridless"), De(1)).subscribe(t => { this.panels.length === 0 && this.panels.push(this.fb.group({ name: new p(""), label: new p(""), stylePlugin: new p(""), styleTitle: new p(""), settings: new q([]), panes: this.fb.array([]), columnSetting: this.fb.group({ settings: this.fb.array([]) }) })); }), this.contentForm.valueChanges.pipe(E(() => !this.nested), se(500)).subscribe(() => { let t = this.packageFormData(); this.pageBuilderFacade.setPage(t); }); }
    ngAfterViewInit() { this.layoutType.valueChanges.pipe(E(() => !!this.layoutEditorHost)).subscribe(t => { this.renderEditorLayout(t); }), this.layoutType.value && this.renderEditorLayout(this.layoutType.value); }
    ngAfterContentInit() { setTimeout(() => { this.panelPage || this.contentForm.get("layoutType").setValue("split"); }, 1e3); }
    ngOnChanges(t) { t.panelPage && t.panelPage.previousValue !== t.panelPage.currentValue && (this.panels.clear(), this.panelPageId = t.panelPage.currentValue.panelPageId, this.dashboard = t.panelPage.currentValue.gridItems.map(i => Object.assign({}, i)), this.layoutType.setValue(t.panelPage.currentValue.layoutType), this.layoutSetting = new O(t.panelPage.currentValue.layoutSetting), this.rowSettings = t.panelPage.currentValue.rowSettings ? t.panelPage.currentValue.rowSettings.map(i => new O(i)) : [], this.persistence = t.panelPage.currentValue.persistence ? new it(t.panelPage.currentValue.persistence) : new it, this.interactions = t.panelPage.currentValue.interactions ? new nt(t.panelPage.currentValue.interactions) : new nt, this.prerenderProperties = t.panelPage.currentValue.prerender ? new we(t.panelPage.currentValue.prerender) : new we, this.nested ? (this.pageProperties = new xe({ name: t.panelPage.currentValue.name, title: t.panelPage.currentValue.title, path: "", readUserIds: [], cssFile: "" }), this.contentForm.get("name").setValue(t.panelPage.currentValue.name), this.contentForm.get("title").setValue(t.panelPage.currentValue.title)) : (this.pageProperties = new xe({ name: t.panelPage.currentValue.name, title: t.panelPage.currentValue.title, path: t.panelPage.currentValue.path, readUserIds: t.panelPage.currentValue.entityPermissions.readUserIds, cssFile: t.panelPage.currentValue.cssFile }), this.contexts = t.panelPage.currentValue.contexts), t.panelPage.currentValue.panels.forEach((i, n) => { this.panels.push(this.fb.group({ name: new p(i.name), label: new p(i.label), stylePlugin: new p(i.stylePlugin), styleTitle: new p(""), settings: this.fb.array(i.settings !== void 0 ? i.settings.map(a => this.convertToGroup(a)) : []), panes: this.fb.array([]), columnSetting: this.fb.group({ settings: this.fb.array(i.columnSetting ? i.columnSetting.settings.map(a => this.convertToGroup(a)) : []) }) })), i.stylePlugin && i.stylePlugin !== "" && this.spm.getPlugin(i.stylePlugin).subscribe(a => { this.panels.at(n).get("styleTitle").setValue(a.title); }), this.nested && this.panelPanes(this.panels.length - 1).valueChanges.pipe(se(5), De(1)).subscribe((a => () => { if (this.gridLayout !== void 0) {
        let o = this.paneContainers.find((s, c) => c === a);
        this.gridLayout.setItemContentHeight(a, o.nativeElement.offsetHeight);
    } })(this.panels.length - 1)), i.panes.forEach((a, o) => { this.panels.at(n).get("panes").push(this.fb.group({ contentPlugin: a.contentPlugin, name: new p(a.name), label: new p(a.label), locked: new p(a.locked), linkedPageId: new p(a.linkedPageId), rule: new p(a.rule && a.rule !== null ? S(y({}, a.rule), { rules: a.rule.rules && Array.isArray(a.rule.rules) ? a.rule.rules : [] }) : { condition: "", rules: [] }), settings: new q(a.settings.map(s => this.convertToGroup(s))) })), setTimeout(() => this.resolvePaneContexts(n, o)); }); }), this.layoutEditorRef && (this.layoutEditorRef.instance.layoutSetting = this.layoutSetting, this.layoutEditorRef.instance.rowSettings = this.rowSettings, this.layoutEditorRef.instance.columnSettings = this.columnSettings)); }
    addContent(t) { console.log(this.panels.at(t)), this.pageBuilderFacade.getPage$.pipe(_(i => this.panelsContextService.allActivePageContexts({ panelPage: i })), L(1)).subscribe(i => { this.bs.open(Tr, { data: { panelForm: this.panels.at(t), panelIndex: t, contexts: [...this.rootContext ? [this.rootContext] : [], ...this.contexts, ...i] } }); }); }
    editPanelProps(t) { let i = this.panels.at(t).get("name"), n = this.panels.at(t).get("label"); this.dialog.open(Rr, { data: { props: new Wt({ name: i.value, label: n.value }) } }).afterClosed().subscribe(a => { a && (i.setValue(a.name), n.setValue(a.label)); }); }
    editPaneProps(t, i) { let n = this.panelPane(t, i).get("name"), a = this.panelPane(t, i).get("label"); this.dialog.open(jr, { data: { props: new Jt({ name: n.value, label: a.value }) } }).afterClosed().subscribe(o => { o && (n.setValue(o.name), a.setValue(o.label)); }); }
    applyStyle(t) { this.bs.open(Er, { data: { panelForm: this.panels.controls[t], panelIndex: t, contexts: this.contexts } }); }
    removeStyle(t) { this.panels.controls[t].get("stylePlugin").setValue(""), this.panels.controls[t].get("styleTitle").setValue(""); }
    onItemAdded() { console.log("item added"), this.panels.push(this.fb.group({ name: new p(""), label: new p(""), stylePlugin: new p(""), styleTitle: new p(""), settings: new q([]), panes: this.fb.array([]), columnSetting: this.fb.group({ settings: this.fb.array([]) }) })), this.nested && this.gridLayout !== void 0 && setTimeout(() => { this.paneContainers.forEach((t, i) => { this.gridLayout.setItemContentHeight(i, t.nativeElement.offsetHeight); }); }), this.panelPanes(this.panels.length - 1).valueChanges.pipe(E(() => this.nested && this.gridLayout !== void 0), se(5), De(1)).subscribe((t => () => { let i = this.paneContainers.find((n, a) => a === t); this.gridLayout.setItemContentHeight(t, i.nativeElement.offsetHeight); })(this.panels.length - 1)), this.layoutEditorRef && (this.layoutEditorRef.instance.columnSettings = this.columnSettings); }
    onItemRemoved(t) { this.panels.removeAt(t), this.nested && this.gridLayout !== void 0 && setTimeout(() => { this.paneContainers.forEach((i, n) => { this.gridLayout.setItemContentHeight(n, i.nativeElement.offsetHeight); }); }), this.layoutEditorRef && (this.layoutEditorRef.instance.columnSettings = this.columnSettings); }
    onDrop(t) { console.log(t); let i = +t.container.data, n = +t.previousContainer.data; if (i === n) {
        let a = t.currentIndex > t.previousIndex ? 1 : -1, o = t.previousIndex, s = t.currentIndex, c = this.panelPanes(i).at(o);
        for (let m = o; m * a < s * a; m = m + a) {
            let C = this.panelPanes(i).at(m + a);
            this.panelPanes(i).setControl(m, C);
        }
        this.panelPanes(i).setControl(s, c);
    }
    else {
        let a = this.panelPanes(n).at(t.previousIndex);
        this.panelPanes(n).removeAt(t.previousIndex), this.panelPanes(i).insert(t.currentIndex, a);
    } }
    onOverrideRenderer(t, i) { let n = new j(this.panelPane(t, i).value); this.dialog.open(Mr, { data: { panelFormGroup: this.panels.at(t), paneIndex: i, pane: n } }); }
    onRemoveOverrideRenderer(t, i) { let n = this.panelPane(t, i).get("settings"), a; n.controls.forEach((o, s) => { o.get("name").value === "_renderer" && (a = s); }), a !== void 0 && n.removeAt(a); }
    onNestedUpdate(t, i, n) { let a = this.panelHandler.buildSettings(t), o = this.panelPane(i, n).get("settings"); o.clear(), a.forEach(s => o.push(this.convertToGroup(s))); }
    onPaneHeightChange(t) { if (this.nested && this.gridLayout) {
        let i = this.paneContainers.find((n, a) => a === t);
        this.gridLayout.setItemContentHeight(t, i.nativeElement.offsetHeight);
    } }
    onDeleteClick() { this.delete.emit(); }
    onRulesClick() { this.rules.emit(); }
    onPropertiesClick() { this.props.emit(), this.dialog.open(Dr, { data: { props: this.pageProperties } }).afterClosed().subscribe(t => { t && (this.pageProperties = new xe(y({}, t)), this.contentForm.get("name").setValue(t.name), this.contentForm.get("title").setValue(t.title)); }); }
    onPrerenderClick() { this.dialog.open(Or, { data: { props: this.prerenderProperties } }).afterClosed().subscribe(t => { t && (this.prerenderProperties = new we(y({}, t))); }); }
    onRulesPane(t, i) { let n = new j(this.panelPane(t, i).value), a = this.panelPane(t, i).get("rule").value !== "" ? this.panelPane(t, i).get("rule").value : void 0, [o] = this.editablePanes.filter((s, c) => s.name === n.name); this.pageBuilderFacade.getPage$.pipe(I(() => { this.pageBuilderFacade.setSelectionPath([...this.ancestory, t, i]); }), _(s => this.panelsContextService.allActivePageContexts({ panelPage: s })), _(s => this.dialog.open($r, { data: { rule: a, contexts: [...o.rootContext ? [o.rootContext] : this.rootContext ? [this.rootContext] : [], ...this.contexts, ...s] } }).afterClosed()), L(1)).subscribe(s => { this.panelPane(t, i).get("rule").setValue(s || a || void 0); }); }
    onDeletePane(t, i) { console.log(`delete nested pane: ${t} | ${i}`); }
    onAddContextClick() { let t = this.packageFormData(); this.pageBuilderFacade.setPage(t), this.dialog.open(Mt, { data: {} }).afterClosed().subscribe(i => { i && (this.contexts = [...this.contexts, i]); }); }
    onEditContext(t) { let i = this.contexts.find(n => n.name === t); if (console.log(i), i) {
        let n = this.packageFormData();
        this.pageBuilderFacade.setPage(n), this.dialog.open(Mt, { data: { context: i } }).afterClosed().subscribe(a => { a && (this.contexts = this.contexts.map(o => o.name === t ? new le(a) : o)); });
    } }
    onLayoutSettingChange(t) { this.layoutSetting = new O(t), this.nested && this.nestedUpdate.emit(this.packageFormData()), this.layoutEditorRef && (this.layoutEditorRef.instance.layoutSetting = this.layoutSetting); }
    onRowSettingsChange(t) { this.rowSettings = t.map(i => new O(i)), this.nested && this.nestedUpdate.emit(this.packageFormData()), this.layoutEditorRef && (this.layoutEditorRef.instance.rowSettings = this.rowSettings); }
    onColumnSettingsChange(t) { let i = this.panels.length; for (let n = 0; n < i; n++) {
        this.panels.at(n).get("columnSetting").get("settings").clear();
        for (let a = 0; a < t[n].settings.length; a++)
            this.panels.at(n).get("columnSetting").get("settings").push(this.convertToGroup(t[n].settings[a]));
    } this.nested && this.nestedUpdate.emit(this.packageFormData()), this.layoutEditorRef && (this.layoutEditorRef.instance.columnSettings = this.columnSettings); }
    submit() { this.submitted.emit(this.packageFormData()); }
    packageFormData() { let t = this.layoutEditorRef.instance.gridItems, i = new ye({ id: this.panelPageId, title: this.pageProperties.title, name: this.pageProperties.name, site: this.siteName, path: this.pageProperties.path, cssFile: this.pageProperties.cssFile, displayType: this.displayType.value, layoutType: this.layoutType.value, gridItems: t, contexts: this.contexts, panels: this.panels.value, layoutSetting: new O(this.layoutSetting), rowSettings: this.rowSettings.map(n => new O(n)), persistence: this.persistence, interactions: this.interactions, prerender: this.prerenderProperties, entityPermissions: { readUserIds: this.pageProperties.readUserIds, writeUserIds: [], deleteUserIds: [] } }); return console.log(i), i; }
    syncNestedPanelPages() { console.log("sync nested"), this.editablePanes.forEach(t => { if (t.contentEditor !== void 0) {
        let i = this.panelHandler.buildSettings(t.contentEditor.packageFormData()), n = this.panelPane(t.panelIndex, t.paneIndex).get("settings");
        n.clear(), i.forEach(a => n.push(this.convertToGroup(a)));
    } }); }
    resolvePaneContexts(t, i) { let n = new j(this.panelPane(t, i).value), a = this.panelPanes(t).controls; this.cpm.getPlugin(n.contentPlugin).pipe(E(o => o.handler !== void 0 && o.handler.isDynamic(n.settings)), _(o => o.handler.fetchDynamicData(n.settings, new Map([["tag", W()], ["contexts", [...this.contexts]]])).pipe(u(s => new le({ name: "_root", adaptor: "data", data: s.length !== 0 ? s.results[0] : {} })), _(s => o.handler.getBindings(n.settings, "pane").pipe(u(c => [s, c.map(m => a.findIndex(C => new j(C.value).name === m.id))])))))).subscribe(([o, s]) => { this.editablePanes.forEach((c, m) => { s.findIndex(C => C === m) > -1 && (c.rootContext = o); }); }); }
    onPersistenceClick() { this.dialog.open(Ki, { data: { persistence: this.persistence, contexts: this.contexts } }).afterClosed().subscribe(t => { console.log("persistence closed", t), this.persistence = t || this.persistence; }); }
    onInteractionsClick() { this.dialog.open(Yi, { data: { interactions: this.interactions, contexts: this.contexts }, maxWidth: "100vw", maxHeight: "100vh", height: "100%", width: "100%" }).afterClosed().subscribe(t => { console.log("interactions closed", t), this.interactions = t || this.interactions; }); }
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
    onPaneEdit(t, i) { let n = new j(this.panelPane(t, i).value), a = this.panelPanePlugin(t, i), [o] = this.editablePanes.filter((s, c) => s.name === n.name); this.cpm.getPlugin(a).pipe(E(s => s.editorComponent !== void 0), _(s => this.pageBuilderFacade.getPage$.pipe(_(c => this.panelsContextService.allActivePageContexts({ panelPage: c }).pipe(u(m => [s, m]), L(1))), L(1))), _(([s, c]) => s.handler ? s.handler.editorOptions(n.settings).pipe(u(m => [s, c, m])) : f([s, c, new re]))).subscribe(([s, c, m]) => { this.dialog.open(s.editorComponent, y({ data: { panelFormGroup: this.panels.at(t), panelIndex: t, paneIndex: i, contexts: [...o.rootContext ? [o.rootContext] : this.rootContext ? [this.rootContext] : [], ...this.contexts, ...c], contentAdded: this.contentAdded, pane: n } }, m.fullscreen ? { maxWidth: "100vw", maxHeight: "100vh", height: "100%", width: "100%" } : {})).afterClosed().subscribe(() => { this.resolvePaneContexts(t, i); }); }); }
    onPaneDelete(t, i) { this.panelPanes(t).removeAt(i); }
    onFileChange(t, i) { let n = t.addedFiles[0]; this.cpm.getPlugins().pipe(u(a => Array.from(a.values()).filter(o => o.handler !== void 0).find(o => o.handler.handlesType(n.type))), E(a => a !== void 0)).subscribe(a => { a.handler.handleFile(n).subscribe(o => { this.panelPanes(i).push(this.fb.group({ contentPlugin: a.id, name: new p(""), label: new p(""), settings: this.fb.array(o.map(s => this.fb.group({ name: new p(s.name, g.required), type: new p(s.type, g.required), displayName: new p(s.displayName, g.required), value: new p(s.value, g.required), computedValue: new p(s.value, g.required) }))) })); }); }); }
    writeValue(t) { t && this.contentForm.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.contentForm.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.contentForm.disable() : this.contentForm.enable(); }
    validate(t) { return this.contentForm.valid ? null : { invalidForm: { valid: !1, message: "content is invalid" } }; }
    convertToGroup(t) { let i = this.fb.group({ name: new p(t.name, g.required), type: new p(t.type, g.required), displayName: new p(t.displayName, g.required), value: new p(t.value, g.required), computedValue: new p(t.value, g.required), attributes: new q([]) }); return t.attributes && t.attributes.length > 0 && t.attributes.forEach(n => { i.get("attributes").push(this.convertToGroup(n)); }), i; }
    renderEditorLayout(t) { console.log(`render editor layout ${t}`), this.lpm.getPlugin(t).subscribe(i => { let n = this.componentFactoryResolver.resolveComponentFactory(i.editor), a = this.layoutEditorHost.viewContainerRef; a.clear(), this.layoutEditorRef = a.createComponent(n), this.layoutEditorRef.instance.savable = this.savable, this.layoutEditorRef.instance.nested = this.nested, this.layoutEditorRef.instance.ancestory = this.ancestory, this.layoutEditorRef.instance.editor = this, this.layoutEditorRef.instance.extraActionsAreaTmpl = this.extraActionsAreaTmpl, this.layoutEditorRef.instance.contextsMenuTpl = this.contextsMenuTpl, this.layoutEditorRef.instance.editablePaneTpl = this.editablePaneTpl, this.layoutEditorRef.instance.dashboard = this.dashboard, this.layoutEditorRef.instance.layoutSetting = this.layoutSetting, this.layoutEditorRef.instance.rowSettings = this.rowSettings, this.layoutEditorRef.instance.columnSettings = this.columnSettings; }); }
    updateEditorLayoutVars() { this.layoutEditorRef.instance.savable = this.savable, this.layoutEditorRef.instance.nested = this.nested, this.layoutEditorRef.instance.ancestory = this.ancestory, this.layoutEditorRef.instance.editor = this, this.layoutEditorRef.instance.extraActionsAreaTmpl = this.extraActionsAreaTmpl, this.layoutEditorRef.instance.contextsMenuTpl = this.contextsMenuTpl, this.layoutEditorRef.instance.editablePaneTpl = this.editablePaneTpl, this.layoutEditorRef.instance.dashboard = this.dashboard, this.layoutEditorRef.instance.layoutSetting = this.layoutSetting, this.layoutEditorRef.instance.rowSettings = this.rowSettings, this.layoutEditorRef.instance.columnSettings = this.columnSettings; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(ze), e.\u0275\u0275directiveInject(ve.ContentPluginManager), e.\u0275\u0275directiveInject(b.StylePluginManager), e.\u0275\u0275directiveInject(qt.LayoutPluginManager), e.\u0275\u0275directiveInject(G.ContextPluginManager), e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(be.MatBottomSheet), e.\u0275\u0275directiveInject(h.MatDialog), e.\u0275\u0275directiveInject(b.PanelContentHandler), e.\u0275\u0275directiveInject(N.TokenizerService), e.\u0275\u0275directiveInject(e.ComponentFactoryResolver), e.\u0275\u0275directiveInject(b.PageBuilderFacade), e.\u0275\u0275directiveInject(lt), e.\u0275\u0275directiveInject(b.PanelsContextService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-content-editor"]], contentQueries: function (i, n, a) { if (i & 1 && e.\u0275\u0275contentQuery(a, En, 5), i & 2) {
            let o;
            e.\u0275\u0275queryRefresh(o = e.\u0275\u0275loadQuery()) && (n.extraActionsAreaTmpl = o.first);
        } }, viewQuery: function (i, n) { if (i & 1 && (e.\u0275\u0275viewQuery(Ei, 5), e.\u0275\u0275viewQuery($i, 5), e.\u0275\u0275viewQuery(Et, 5), e.\u0275\u0275viewQuery($n, 7), e.\u0275\u0275viewQuery(Dn, 7), e.\u0275\u0275viewQuery(Rn, 5), e.\u0275\u0275viewQuery(Dt, 5)), i & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.gridLayout = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.splitLayout = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.layoutEditorHost = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.contextsMenuTpl = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.editablePaneTpl = a.first), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.paneContainers = a), e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.editablePanes = a);
        } }, inputs: { panelPage: "panelPage", savable: "savable", nested: "nested", locked: "locked", pageBuilder: "pageBuilder", contexts: "contexts", rootContext: "rootContext", ancestory: "ancestory" }, outputs: { submitted: "submitted", nestedUpdate: "nestedUpdate", delete: "delete", rules: "rules", props: "props" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: Ve, useExisting: K(() => r), multi: !0 }, { provide: Ge, useExisting: K(() => r), multi: !0 }]), e.\u0275\u0275NgOnChangesFeature], decls: 12, vars: 3, consts: [["nestedTpl", ""], ["editablePaneTpl", ""], ["contextsMenuTpl", ""], ["contextMenu", "matMenu"], ["class", "content-editor-wrapper", 3, "formGroup", "ngClass", "ngSubmit", 4, "ngIf", "ngIfElse"], ["type", "button", "mat-menu-item", "", 3, "click"], ["type", "button", "mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "content-editor-wrapper", 3, "ngSubmit", "formGroup", "ngClass"], ["classifiedsUiLayoutEditorHost", ""], [1, "content-editor-wrapper", 3, "formGroup", "ngClass"], [1, "editable-pane", 3, "delete", "rules", "nestedUpdate", "rendererOverride", "removeRendererOverride", "edit", "props", "panelIndex", "paneIndex", "name", "label", "locked", "contexts", "pluginName", "settings", "ancestory"], ["class", "custom-placeholder", 4, "cdkDragPlaceholder"], [1, "custom-placeholder"], ["type", "button", "mat-menu-item", "", 1, "context-button", 3, "matMenuTriggerFor"]], template: function (i, n) { if (i & 1) {
            let a = e.\u0275\u0275getCurrentView();
            e.\u0275\u0275template(0, On, 3, 4, "form", 4)(1, kn, 3, 4, "ng-template", null, 0, e.\u0275\u0275templateRefExtractor)(3, Gn, 2, 9, "ng-template", null, 1, e.\u0275\u0275templateRefExtractor)(5, An, 2, 1, "ng-template", null, 2, e.\u0275\u0275templateRefExtractor), e.\u0275\u0275elementStart(7, "mat-menu", null, 3)(9, "button", 5), e.\u0275\u0275listener("click", function () { return e.\u0275\u0275restoreView(a), e.\u0275\u0275resetView(n.onAddContextClick()); }), e.\u0275\u0275text(10, "define variable"), e.\u0275\u0275elementEnd(), e.\u0275\u0275template(11, zn, 2, 1, "button", 6), e.\u0275\u0275elementEnd();
        } if (i & 2) {
            let a = e.\u0275\u0275reference(2);
            e.\u0275\u0275property("ngIf", !n.nested && !n.pageBuilder)("ngIfElse", a), e.\u0275\u0275advance(11), e.\u0275\u0275property("ngForOf", n.contexts);
        } }, dependencies: [v.NgClass, v.NgForOf, v.NgIf, l.\u0275NgNoValidate, l.NgControlStatusGroup, l.FormGroupDirective, Zt.CdkDragPlaceholder, Q.MatMenu, Q.MatMenuItem, Q.MatMenuTrigger, Et, Dt], styles: [".content-editor-wrapper[_ngcontent-%COMP%]{height:100%}.panel-inner[_ngcontent-%COMP%]{padding:1em}.content-editor-wrapper[_ngcontent-%COMP%]     ngx-dropzone{height:100%;display:block;padding:0;border:none}.content-editor-wrapper.nested[_ngcontent-%COMP%]     .grid-item-header{border-bottom:1px solid white}.layout-type[_ngcontent-%COMP%], .display-type[_ngcontent-%COMP%]{float:right}.layout-type[_ngcontent-%COMP%]     .mat-form-field-wrapper, .display-type[_ngcontent-%COMP%]     .mat-form-field-wrapper{padding-bottom:1.5em}.layout-type[_ngcontent-%COMP%]     .mat-form-field-label-wrapper, .display-type[_ngcontent-%COMP%]     .mat-form-field-label-wrapper{display:none}.layout-type[_ngcontent-%COMP%]     .mat-form-field-infix, .display-type[_ngcontent-%COMP%]     .mat-form-field-infix{border-top:none;padding:0;margin:0}.layout-type[_ngcontent-%COMP%]     .mat-mdc-form-field, .display-type[_ngcontent-%COMP%]     .mat-mdc-form-field{width:85px}.layout-type[_ngcontent-%COMP%]     .mat-select-value, .display-type[_ngcontent-%COMP%]     .mat-select-value{text-align:right}.layout-type[_ngcontent-%COMP%]     .mat-form-field-underline, .display-type[_ngcontent-%COMP%]     .mat-form-field-underline{display:none}classifieds-ui-gridless-layout[_ngcontent-%COMP%]     .main-controls{background-color:#ccc}classifieds-ui-gridless-layout[_ngcontent-%COMP%]     .layout-inner{background-color:#ccc;padding:.75em}classifieds-ui-gridless-layout[_ngcontent-%COMP%]     .editable-pane-wrapper{border:none;margin-bottom:0}classifieds-ui-gridless-layout[_ngcontent-%COMP%]     .pane-header{background-color:#fff}classifieds-ui-gridless-layout[_ngcontent-%COMP%]     .nested-panel-wrapper{padding:.75em;margin-bottom:0}.custom-placeholder[_ngcontent-%COMP%]{background:#ccc;border:dotted 3px #999;transition:transform .25s cubic-bezier(0,0,.2,1)}.context-button[_ngcontent-%COMP%]{font-style:italic;font-family:serif;font-weight:bolder;font-size:medium}"] }); }
} return r; })(), Nr = (() => { class r {
    constructor(t, i, n) { this.data = t, this.fb = i, this.handler = n; }
    ngOnInit() { this.data.pane !== void 0 && this.handler.toObject(this.data.pane.settings).subscribe(t => { this.snippet = t; }); }
    onSubmit(t) { if (this.data.paneIndex === void 0)
        this.data.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "snippet", name: new p(""), label: new p(""), rule: new p(""), settings: new q(this.buildSettings(t)) }));
    else {
        let i = this.data.panelFormGroup.get("panes").at(this.data.paneIndex);
        i.get("settings").clear(), this.buildSettings(t).forEach(n => { i.get("settings").push(n); });
    } }
    buildSettings(t) { return [this.fb.group({ name: new p("contentType", g.required), type: new p(ee.Text, g.required), displayName: new p("Content Type", g.required), value: new p(t.contentType, g.required), computedValue: new p(t.contentType, g.required) }), this.fb.group({ name: new p("content", g.required), type: new p(ee.Text, g.required), displayName: new p("Content", g.required), value: new p(t.content, g.required), computedValue: new p(t.content, g.required) }), this.fb.group({ name: new p("jsScript", g.required), type: new p(ee.Text, g.required), displayName: new p("jsScript", g.required), value: new p(t.jsScript), computedValue: new p(t.jsScript) })]; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(k), e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(te)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-snippet-editor2"]], standalone: !1, decls: 1, vars: 1, consts: [[3, "submitted", "snippet"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "classifieds-ui-snippet-form", 0), e.\u0275\u0275listener("submitted", function (o) { return n.onSubmit(o); }), e.\u0275\u0275elementEnd()), i & 2 && e.\u0275\u0275property("snippet", n.snippet); }, dependencies: [Be.SnippetFormComponent], encapsulation: 2 }); }
} return r; })(), kr = (() => { class r {
    constructor(t) { this.panelPageService = t.getEntityCollectionService("PanelPage"), this.panelPageListItemService = t.getEntityCollectionService("PanelPageListItem"); }
    ngOnInit() { console.log("here"); }
    onSubmit(t) { console.log("create panel page", t), t.id = W(), this.panelPageService.add(t).subscribe(() => { console.log("panel page created"); }); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject($.EntityServices)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-create-panel-page"]], standalone: !1, decls: 1, vars: 0, consts: [[3, "submitted"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "classifieds-ui-content-editor", 0), e.\u0275\u0275listener("submitted", function (o) { return n.onSubmit(o); }), e.\u0275\u0275elementEnd()); }, dependencies: [vt], encapsulation: 2 }); }
} return r; })(), ai = (() => { class r {
    constructor(t, i, n, a, o) { this.route = t, this.pageBuilderFacade = i, this.routerStore = n, this.moduleLoader = a, this.panelPageService = o.getEntityCollectionService("PanelPage"), this.panelPageListItemService = o.getEntityCollectionService("PanelPageListItem"); }
    ngOnInit() { this.route.paramMap.pipe(u(t => t.get("panelPageId")), E(t => t !== void 0), ut(), _(t => this.panelPageService.getByKey(t)), _(t => t ? Ue(t.contexts.filter(i => i.plugin === "module").map(i => this.moduleLoader.loadModule(() => _t({ remoteEntry: i.data.remoteEntry, remoteName: "plugin", exposedModule: i.data.exposedModule }).then(n => n[i.data.moduleName])))).pipe(De(1), u(() => t), mt(t)) : f(t)), _(t => this.routerStore.pipe(de(Xi(i => i.router).selectCurrentRoute), u(i => [t, i.params]), L(1))), I(([t, i]) => this.pageBuilderFacade.setPageInfo(new Kt({ id: t.id, realPath: `/pages/panelpage/${t.id}`, path: t.path, args: i })))).subscribe(([t]) => { console.log(t), this.panelPage = t; }); }
    onSubmit(t) { console.log("submitted"), this.panelPageService.update(new ye(S(y({}, t), { id: this.panelPage.id }))).subscribe(() => { alert("panel page updated"); }); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(ge.ActivatedRoute), e.\u0275\u0275directiveInject(b.PageBuilderFacade), e.\u0275\u0275directiveInject(me.Store), e.\u0275\u0275directiveInject(he.ModuleLoaderService), e.\u0275\u0275directiveInject($.EntityServices)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-edit-panel-page"]], standalone: !1, decls: 1, vars: 1, consts: [[3, "submitted", "panelPage"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "classifieds-ui-content-editor", 0), e.\u0275\u0275listener("submitted", function (o) { return n.onSubmit(o); }), e.\u0275\u0275elementEnd()), i & 2 && e.\u0275\u0275property("panelPage", n.panelPage); }, dependencies: [vt], encapsulation: 2 }); }
} return r; })(), Vr = (() => { class r {
    constructor(t, i, n, a, o, s) { this.bottomSheetRef = t, this.handler = i, this.fb = n, this.dialog = a, this.cpm = o, this.wpm = s; }
    ngOnInit() { this.attributeWidgets = this.wpm.getPlugins(); }
    onItemSelect(t) { console.log(t), this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "attribute", name: new p(""), label: new p(""), rule: new p(""), settings: this.fb.array(this.handler.widgetSettings(t).map(o => this.fb.group({ name: new p(o.name, g.required), type: new p(o.type, g.required), displayName: new p(o.displayName, g.required), value: new p(o.value, g.required), computedValue: new p(o.computedValue, g.required) }))) })); let i = this.panelFormGroup.get("panes"), n = i.length - 1, a = new j(i.at(n).value); this.cpm.getPlugin("attribute").subscribe(o => { this.dialog.open(o.editorComponent, { data: { panelFormGroup: this.panelFormGroup, pane: a, paneIndex: n } }); }), this.bottomSheetRef.dismiss(); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(be.MatBottomSheetRef), e.\u0275\u0275directiveInject(ie), e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(h.MatDialog), e.\u0275\u0275directiveInject(ve.ContentPluginManager), e.\u0275\u0275directiveInject(w.WidgetPluginManager)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-attribute-selector"]], inputs: { panelFormGroup: "panelFormGroup" }, standalone: !1, decls: 4, vars: 5, consts: [["mat-list-item", "", "mat-list-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-list-item", "", "mat-list-item", "", 3, "click"], ["mat-line", ""]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "mat-nav-list"), e.\u0275\u0275template(1, Bn, 3, 1, "a", 0), e.\u0275\u0275pipe(2, "async"), e.\u0275\u0275pipe(3, "keyvalue"), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275advance(), e.\u0275\u0275property("ngForOf", e.\u0275\u0275pipeBind1(3, 3, e.\u0275\u0275pipeBind1(2, 1, n.attributeWidgets)))); }, dependencies: [v.NgForOf, Le.MatLine, Y.MatNavList, Y.MatListItem, v.AsyncPipe, v.KeyValuePipe], encapsulation: 2 }); }
} return r; })(), Gr = (() => { class r {
    get name() { return this.attributesFormGroup.get("name"); }
    get label() { return this.attributesFormGroup.get("label"); }
    constructor(t, i, n, a, o) { this.data = t, this.dialogRef = n, this.fb = a, this.handler = o, this.attributes = [], this.attributeValues = [], this.attributesFormGroup = this.fb.group({ name: new p(""), label: new p(""), attributes: new p("") }); let s = this.data.pane.settings.find(c => c.name === "widget"); this.widget = i.find(c => c.name === s.value); }
    ngOnInit() { let t = this.data.pane.settings.find(a => a.name === "value"); this.attributes = [new zt(S(y({}, this.widget.schema), { widget: this.widget.name, label: "Value", name: "value" }))]; let i = this.data.panelFormGroup.get("panes").at(this.data.paneIndex).get("name").value, n = this.data.panelFormGroup.get("panes").at(this.data.paneIndex).get("label").value; this.attributesFormGroup.get("name").setValue(i), this.attributesFormGroup.get("label").setValue(n), t !== void 0 ? (this.attributeValues = this.handler.valueSettings(this.data.pane.settings), console.log(this.attributeValues)) : this.attributeValues = [new ne({ name: "value", type: this.widget.schema.type, displayName: "Value", value: "", computedValue: "", intValue: 0, attributes: [] })]; }
    submit() { let t = this.name.value, i = this.label.value; this.data.panelFormGroup.get("panes").at(this.data.paneIndex).get("name").setValue(t), this.data.panelFormGroup.get("panes").at(this.data.paneIndex).get("label").setValue(i); let n = new j({ name: t, label: i, contentPlugin: "attribute", settings: this.attributesFormGroup.get("attributes").value === "" ? [] : this.attributesFormGroup.get("attributes").value }); n.settings.length !== 0 ? this.handler.rendererSnippet(this.data.pane.settings).subscribe(a => { let o = a !== void 0 ? this.handler.rendererOverrideSettings(a) : [], s = this.data.panelFormGroup.get("panes").at(this.data.paneIndex).get("settings"); s.clear(), [...this.handler.widgetSettings(this.widget), ...n.settings, ...o].forEach(c => s.push(this.convertToGroup(c))), this.dialogRef.close(); }) : this.dialogRef.close(); }
    convertToGroup(t) { let i = this.fb.group({ name: new p(t.name, g.required), type: new p(t.type, g.required), displayName: new p(t.displayName, g.required), value: new p(t.value, g.required), computedValue: new p(t.value, g.required), attributes: new q([]) }); return t.attributes && t.attributes.length > 0 && t.attributes.forEach(n => { i.get("attributes").push(this.convertToGroup(n)); }), i; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(k), e.\u0275\u0275directiveInject(Bt), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(ie)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-attribute-editor"]], standalone: !1, decls: 10, vars: 3, consts: [[3, "ngSubmit", "formGroup"], ["fxLayout", "column"], ["matInput", "", "placeholder", "Name", "formControlName", "name"], ["matInput", "", "placeholder", "Label", "formControlName", "label"], ["formControlName", "attributes", 3, "attributes", "attributeValues"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", ""]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content", 1)(2, "mat-form-field"), e.\u0275\u0275element(3, "input", 2), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(4, "mat-form-field"), e.\u0275\u0275element(5, "input", 3), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(6, "classifieds-ui-attributes-builder", 4), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(7, "mat-dialog-actions")(8, "button", 5), e.\u0275\u0275text(9, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.attributesFormGroup), e.\u0275\u0275advance(6), e.\u0275\u0275property("attributes", n.attributes)("attributeValues", n.attributeValues)); }, dependencies: [l.\u0275NgNoValidate, l.DefaultValueAccessor, l.NgControlStatus, l.NgControlStatusGroup, l.FormGroupDirective, l.FormControlName, A.MatButton, h.MatDialogClose, h.MatDialogActions, h.MatDialogContent, x.MatInput, x.MatFormField, w.AttributesBuilderComponent], encapsulation: 2 }); }
} return r; })(), Ar = (() => { class r {
    constructor(t, i, n, a, o) { this.widgets = t, this.handler = i, this.tokenizerService = n, this.fb = a, this.controlContainer = o, this.settings = [], this.appearance = "legacy", this.attributes = []; }
    ngOnInit() { this.attributes = [new zt(S(y({}, this.widgets.find(t => t.name === this.settings.find(i => i.name === "widget").value).schema), { name: "value", label: "Value" }))], this.attributeValues = this.handler.valueSettings(this.settings), this.tokens = this.tokenizerService.generateTokens(this.attributeValues), this.handler.rendererSnippet(this.settings).subscribe(t => { this.rendererOverride = t, t !== void 0 && (this.rendererSettings = this.handler.rendererOverrideSettings(t)[0].attributes); }); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(Bt), e.\u0275\u0275directiveInject(ie), e.\u0275\u0275directiveInject(N.TokenizerService), e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(l.ControlContainer, 8)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-attribute-pane-renderer"]], inputs: { settings: "settings", appearance: "appearance", name: "name", label: "label", displayType: "displayType" }, standalone: !1, decls: 3, vars: 2, consts: [["overrideTpl", ""], ["settingsTmpl", ""], [4, "ngIf", "ngIfElse"], [4, "ngIf"], [3, "formGroup", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngFor", "ngForOf"], [3, "formGroup"], ["formControlName", "settings", 3, "attributes", "attributeValues"], [3, "settings", "tokens"]], template: function (i, n) { if (i & 1 && e.\u0275\u0275template(0, Xn, 3, 2, "div", 2)(1, Zn, 1, 2, "ng-template", null, 0, e.\u0275\u0275templateRefExtractor), i & 2) {
            let a = e.\u0275\u0275reference(2);
            e.\u0275\u0275property("ngIf", !n.rendererOverride)("ngIfElse", a);
        } }, dependencies: [v.NgForOf, v.NgIf, v.NgTemplateOutlet, l.NgControlStatus, l.NgControlStatusGroup, l.FormGroupDirective, l.FormControlName, w.AttributesBuilderComponent, ri, w.AttributePipe], styles: [".override[_ngcontent-%COMP%]{position:absolute;top:.5em;right:.5em}"] }); }
} return r; })(), pe = (() => { class r {
    constructor(t, i) { this.filesService = t, this.attributeSerializer = i, this.types = ["image/png", "image/jpg", "image/jpeg", "image/gif"]; }
    handleFile(t) { return this.filesService.bulkUpload({ files: [t] }).pipe(u(i => this.buildSettings(i[0]))); }
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
    editorOptions(t) { return f(new re); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(dt.FilesService), e.\u0275\u0275inject(w.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), zr = (() => { class r {
    constructor(t, i, n, a, o) { this.data = t, this.dialogRef = i, this.fb = n, this.filesService = a, this.handler = o, this.mediaTypes = ".png,.jpg,.jpeg,.gif,.svg"; }
    ngOnInit() { this.data.pane !== void 0 && this.handler.toObject(this.data.pane.settings).pipe(_(t => this.filesService.convertToFiles([t]))).subscribe(t => { this.media = t[0]; }); }
    onSelectMedia(t) { this.media = t.addedFiles[0], this.handler.handleFile(this.media).subscribe(i => { this.data.paneIndex === void 0 && this.data.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "media", name: new p(""), label: new p(""), rule: new p(""), settings: new q(i.map(n => this.fb.group({ name: new p(n.name, g.required), type: new p(n.type, g.required), displayName: new p(n.displayName, g.required), value: new p(n.value, g.required), computedValue: new p(n.value, g.required) }))) })), this.dialogRef.close(); }); }
    onRemoveMedia(t) { this.media = void 0; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(k), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(dt.FilesService), e.\u0275\u0275directiveInject(pe)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-media-editor"]], standalone: !1, decls: 4, vars: 3, consts: [[3, "change", "multiple", "accept"], [3, "removable", "file", "removed", 4, "ngIf"], [3, "removed", "removable", "file"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "ngx-dropzone", 0), e.\u0275\u0275listener("change", function (o) { return n.onSelectMedia(o); }), e.\u0275\u0275elementStart(1, "ngx-dropzone-label"), e.\u0275\u0275text(2, "Drag and Drop Media Here"), e.\u0275\u0275elementEnd(), e.\u0275\u0275template(3, er, 3, 4, "ngx-dropzone-image-preview", 1), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("multiple", !1)("accept", n.mediaTypes), e.\u0275\u0275advance(3), e.\u0275\u0275property("ngIf", n.media)); }, dependencies: [v.NgIf, fe.NgxDropzoneComponent, fe.NgxDropzoneLabelDirective, fe.NgxDropzoneImagePreviewComponent], encapsulation: 2 }); }
} return r; })(), Br = (() => { class r {
    constructor(t, i, n, a) { this.mediaSettings = t, this.handler = i, this.attributeSerializer = n, this.settings = [], this.ancestory = [], this.state = {}, this.stateChange = new M, this.panelPageStateService = a.getEntityCollectionService("PanelPageState"); }
    ngOnInit() { console.log("media ancestory is"), console.log(this.ancestory), console.log("my state is:"), console.log(this.state), this.mediaBaseUrl = this.mediaSettings.imageUrl, this.handler.toObject(this.settings).subscribe(t => { this.mediaFile = t; }); }
    ngAfterViewInit() { this.image.nativeElement.onload = () => { console.log("image loaded"), this.stateChange.emit({ mediaLoading: "n" }); }; }
    ngOnChanges() { this.mediaBaseUrl = this.mediaSettings.imageUrl, this.handler.toObject(this.settings).subscribe(t => { this.mediaFile = t; }); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(wi), e.\u0275\u0275directiveInject(pe), e.\u0275\u0275directiveInject(w.AttributeSerializerService), e.\u0275\u0275directiveInject($.EntityServices)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-media-pane-renderer"]], viewQuery: function (i, n) { if (i & 1 && e.\u0275\u0275viewQuery(tr, 7), i & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.image = a.first);
        } }, inputs: { settings: "settings", ancestory: "ancestory", state: "state" }, outputs: { stateChange: "stateChange" }, standalone: !1, features: [e.\u0275\u0275NgOnChangesFeature], decls: 2, vars: 3, consts: [["img", ""], [3, "src"]], template: function (i, n) { i & 1 && e.\u0275\u0275element(0, "img", 1, 0), i & 2 && e.\u0275\u0275property("src", e.\u0275\u0275interpolate2("", n.mediaBaseUrl, "/", n.mediaFile.path), e.\u0275\u0275sanitizeUrl); }, styles: ["img[_ngcontent-%COMP%]{max-width:100%}"] }); }
} return r; })(), Fe = (() => { class r {
    constructor(t, i, n, a, o, s, c, m, C) { this.siteName = t, this.snippetHandler = i, this.pageBuilderFacade = n, this.store = a, this.tokenizerService = o, this.panelHandler = s, this.urlGeneratorService = c, this.attributeSerializer = m, this.rulesResolver = C; }
    handleFile(t) { return f([]); }
    handlesType(t) { return !1; }
    implementsRendererOverride() { return !0; }
    hasRendererOverride(t) { return f(!1); }
    isDynamic(t) { return ["snippet", "pane"].indexOf(this.getRenderType(t)) > -1; }
    isData(t) { return !1; }
    fetchDynamicData(t, i) { let n = new z; return this.toObject(t).pipe(_(a => this.urlGeneratorService.getUrl(a.url, a.params, i).pipe(u(o => [a, o])))).subscribe(([a, o]) => { this.pageBuilderFacade.loadRestData(`${i.get("tag")}`, new ce(S(y({}, a), { url: o }))), this.store.pipe(de(Re(`${i.get("tag")}`)), E(s => s !== void 0)).subscribe(s => { n.next(s), n.complete(); }); }), n; }
    buildDynamicItems(t, i) { let n = new z; return console.log("build dynamic items rest"), this.toObject(t).pipe(_(a => this.urlGeneratorService.getUrl(a.url, a.params, i).pipe(u(o => [a, o])))).subscribe(([a, o]) => { console.log("Load in rest data"), this.pageBuilderFacade.loadRestData(`${i.get("tag")}`, new ce(S(y({}, a), { url: o }))), this.store.pipe(de(Re(`${i.get("tag")}`)), E(s => s !== void 0), _(s => this.getBindings(t, "pane").pipe(u(c => [s, c]))), _(([s, c]) => Pe(() => s.results.length !== 0 && c.length > 0, new Oe(m => { Ue(s.results.map(C => zi(c).pipe(u(P => i.get("panes").find(D => D.name === P.id)), _(P => Pe(() => P.rule && P.rule !== null && P.rule.condition !== "", this.rulesResolver.evaluate(P.rule, [...i.get("contexts"), ...P.contexts !== void 0 ? P.contexts : [], new le({ name: "_root", adaptor: "data", data: C })]).pipe(u(D => [P, D])), f(!1).pipe(u(D => [P, D])))), E(([P, D]) => D), u(([P, D]) => P.name), mt(c[0].id), L(1)))).pipe(u(C => [s, C])).subscribe(C => { m.next(C), m.complete(); }); }), new Oe(m => { m.next([s]), m.complete(); }))), u(([s, c]) => a.renderer.type === "pane" ? s.results.map((m, C) => { let P = i.get("panes").find(V => V.name === c[C]), D = W(); return new j(S(y({}, P), { rule: void 0, label: D, contexts: [...i.get("contexts"), new le({ name: "_root", adaptor: "data", data: m })] })); }) : s.results.map(m => new j({ contentPlugin: "snippet", name: W(), label: void 0, contexts: [...i.get("contexts"), new le({ name: "_root", adaptor: "data", data: m })], settings: this.snippetHandler.buildSettings(S(y({}, a.renderer.data), { content: a.renderer.data.content })) }))), u(s => new Qe({ stylePlugin: void 0, settings: [], panes: s, columnSetting: new O })), u(s => this.panelHandler.buildSettings(new ye({ id: void 0, layoutType: "grid", displayType: "page", site: this.siteName, gridItems: [], layoutSetting: new O, rowSettings: [], panels: [s] })))).subscribe(s => { n.next(s.find(c => c.name === "panels").attributes[0].attributes.find(c => c.name === "panes").attributes), n.complete(); }); }), n; }
    buildSelectOptionItems(t, i) { return this.toObject(t).pipe(_(n => this.urlGeneratorService.getUrl(n.url, n.params, i).pipe(u(a => [n, a]))), u(([n, a]) => new ce(S(y({}, n), { url: a })))).subscribe(n => { this.pageBuilderFacade.loadRestData(`${i.get("tag")}`, n); }), this.store.pipe(de(Re(`${i.get("tag")}`)), E(n => n !== void 0), u(n => [n, n.results.map(a => this.tokenizerService.generateGenericTokens(a))]), u(([n, a]) => [n, a, new Qt(JSON.parse(i.get("snippet").content))]), u(([n, a, o]) => a.map((s, c) => new Li({ dataItem: n.results[c], value: o.value === "[.]" ? this.attributeSerializer.serialize(n.results[c], "value") : this.attributeSerializer.serialize(this.tokenizerService.replaceTokens(o.value, s), "value"), label: this.tokenizerService.replaceTokens(o.label, s) })))); }
    getBindings(t, i, n) { return i === "context" ? this.toObject(t).pipe(u(a => a.params.reduce((o, s) => [...o, ...s.mapping.type === "form" ? [new qe({ id: `form__${s.mapping.value.split(".", 2)[0].trim()}`, type: "context" })] : []], []))) : this.toObject(t).pipe(_(a => Pe(() => a.renderer.type === i, f(a.renderer.bindings), f([])))); }
    toObject(t) { return f(this.attributeSerializer.deserializeAsObject(t)); }
    buildSettings(t) { return this.attributeSerializer.serialize(t, "root").attributes; }
    getRenderType(t) { let i = [t.find(n => n.name === "renderer")].map(n => n.attributes.find(a => a.name === "type")); return i.length > 0 ? i[0].value : void 0; }
    stateDefinition(t) { return f({ autocomplete: { input: "" } }); }
    editorOptions(t) { return f(new re); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(ze), e.\u0275\u0275inject(te), e.\u0275\u0275inject(b.PageBuilderFacade), e.\u0275\u0275inject(me.Store), e.\u0275\u0275inject(N.TokenizerService), e.\u0275\u0275inject(b.PanelContentHandler), e.\u0275\u0275inject(gt.UrlGeneratorService), e.\u0275\u0275inject(w.AttributeSerializerService), e.\u0275\u0275inject(We.RulesResolverService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), qr = (() => { class r {
    set rest(t) { if (t !== void 0) {
        this._rest = t;
        let i = { value: "", label: "", id: "", multiple: "", limit: "" };
        this.restForm.setValue({ renderer: S(y({ trackBy: "", query: "" }, t.renderer), { data: t.renderer.data ? S(y({}, t.renderer.data), { jsScript: t.renderer.data.jsScript ? t.renderer.data.jsScript : "" }) : { content: "", contentType: "", jsScript: "" }, select: ["pane", "snippet"].findIndex(n => n === t.renderer.type) > -1 ? i : JSON.parse(t.renderer.data.content), bindings: [] }), source: { url: "", params: [], method: "", body: "" } }), t.renderer.type === "pane" && (this.bindings.clear(), t.renderer.bindings.forEach(n => { n.type === "pane" && this.bindings.push(this.fb.group({ id: this.fb.control(n.id, g.required), type: this.fb.control(n.type, g.required) })); })), t.renderer.type === "pane" ? this.restForm.get("renderer").get("data").disable() : this.restForm.get("renderer").get("data").enable(), setTimeout(() => { this.restSource = { url: t.url, params: t.params, method: t.method ? t.method : "", body: t.body ? S(y({}, t.body), { jsScript: "" }) : "" }, this.sourceForm.refreshData$.next(void 0); });
    } }
    get rendererType() { return this.restForm.get("renderer").get("type"); }
    get isSelectable() { return this.restForm.get("renderer").get("type").value && this.restForm.get("renderer").get("type").value !== "snippet" && this.restForm.get("renderer").get("type").value !== "pane"; }
    get bindings() { return this.restForm.get("renderer").get("bindings"); }
    get valid() { return this.restForm.valid; }
    constructor(t, i) { this.fb = t, this.tokenizerService = i, this.panes = [], this.submitted = new M, this.contexts = [], this.forms = [], this.snippetValidation = !0, this.restForm = this.fb.group({ source: this.fb.control(""), renderer: this.fb.group({ type: "snippet", query: this.fb.control(""), trackBy: this.fb.control(""), data: this.fb.control(""), bindings: this.fb.array([]), select: this.fb.group({ value: this.fb.control(""), label: this.fb.control(""), id: this.fb.control(""), multiple: this.fb.control(""), limit: this.fb.control("") }) }) }); }
    ngOnInit() { console.log(this.contexts), this.restForm.get("renderer").get("type").valueChanges.subscribe(t => { this.rendererType.value === "pane" ? this.restForm.get("renderer").get("data").disable() : this.restForm.get("renderer").get("data").enable(), this.restForm.get("renderer").get("data").setValue({ contentType: "", content: "", jsScript: "" }); }), this.restForm.get("renderer").get("select").valueChanges.subscribe(t => { this.restForm.get("renderer").get("data").setValue({ contentType: "application/json", content: JSON.stringify({ value: t.value, label: t.label, id: t.id, multiple: t.multiple, limit: t.limit }), jsScript: "" }); }); }
    ngAfterViewInit() { }
    onDataChange(t) { this.tokens = this.tokenizerService.generateGenericTokens(t[0]); }
    addPane() { this.bindings.push(this.fb.group({ type: this.fb.control("pane", g.required), id: this.fb.control("", g.required) })); }
    submit() { let t = new ce(S(y({}, this.restForm.value), { url: this.restForm.value.source.url, params: this.restForm.value.source.params, method: this.restForm.value.source.method, body: this.restForm.value.source.body })); this.submitted.emit(t); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(N.TokenizerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-rest-form"]], viewQuery: function (i, n) { if (i & 1 && e.\u0275\u0275viewQuery(Lt, 7), i & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.sourceForm = a.first);
        } }, inputs: { panes: "panes", contexts: "contexts", rest: "rest" }, outputs: { submitted: "submitted" }, standalone: !1, decls: 34, vars: 9, consts: [[1, "rest-form", 3, "ngSubmit", "formGroup"], ["direction", "vertical", 1, "content-inner"], ["as-split-area", "", "size", "50"], ["formControlName", "source", 3, "dataChange", "contexts", "restSource"], ["size", "50", "formGroupName", "renderer"], ["matInput", "", "formControlName", "query", "placeholder", "Query"], ["matInput", "", "formControlName", "trackBy", "placeholder", "Track By"], ["required", "", "formControlName", "type"], ["label", "Output"], ["value", "snippet"], ["value", "pane"], ["label", "Input"], ["value", "select"], ["value", "radiogroup"], ["value", "checkboxgroup"], ["value", "autocomplete"], ["formControlName", "data", "splitDirection", "horizontal", "rows", "10", "cols", "40", 3, "hidden", "rootForm", "tokens"], ["formArrayName", "bindings", 4, "ngIf"], ["formGroupName", "select", 4, "ngIf"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"], ["formArrayName", "bindings"], ["type", "button", 3, "click"], [4, "ngFor", "ngForOf"], [3, "formGroupName"], ["required", "", "formControlName", "id"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["formGroupName", "select"], ["matInput", "", "formControlName", "id", "placeholder", "Id"], ["matInput", "", "formControlName", "value", "placeholder", "Value"], ["matInput", "", "formControlName", "label", "placeholder", "Label"], ["formControlName", "multiple"], ["matInput", "", "formControlName", "limit", "placeholder", "Limit"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "as-split", 1)(3, "div", 2)(4, "classifieds-ui-rest-source-form", 3), e.\u0275\u0275listener("dataChange", function (o) { return n.onDataChange(o); }), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(5, "as-split-area", 4)(6, "mat-form-field"), e.\u0275\u0275element(7, "input", 5), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(8, "mat-form-field"), e.\u0275\u0275element(9, "input", 6), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(10, "mat-form-field")(11, "mat-label"), e.\u0275\u0275text(12, "Type"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(13, "mat-select", 7)(14, "mat-optgroup", 8)(15, "mat-option", 9), e.\u0275\u0275text(16, "Snippet"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(17, "mat-option", 10), e.\u0275\u0275text(18, "Pane"), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(19, "mat-optgroup", 11)(20, "mat-option", 12), e.\u0275\u0275text(21, "Select"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(22, "mat-option", 13), e.\u0275\u0275text(23, "Radio Group"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(24, "mat-option", 14), e.\u0275\u0275text(25, "Checkbox Group"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(26, "mat-option", 15), e.\u0275\u0275text(27, "Autocomplete"), e.\u0275\u0275elementEnd()()()(), e.\u0275\u0275element(28, "classifieds-ui-snippet-form", 16), e.\u0275\u0275template(29, rr, 5, 1, "div", 17)(30, ar, 12, 0, "div", 18), e.\u0275\u0275elementEnd()()(), e.\u0275\u0275elementStart(31, "mat-dialog-actions")(32, "button", 19), e.\u0275\u0275text(33, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.restForm), e.\u0275\u0275advance(4), e.\u0275\u0275property("contexts", n.contexts)("restSource", n.restSource), e.\u0275\u0275advance(24), e.\u0275\u0275property("hidden", n.rendererType.value != "snippet")("rootForm", !1)("tokens", n.tokens), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", n.rendererType.value == "pane"), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", n.isSelectable), e.\u0275\u0275advance(2), e.\u0275\u0275property("disabled", !n.valid)); }, dependencies: [v.NgForOf, v.NgIf, l.\u0275NgNoValidate, l.DefaultValueAccessor, l.NgControlStatus, l.NgControlStatusGroup, l.RequiredValidator, l.FormGroupDirective, l.FormControlName, l.FormGroupName, l.FormArrayName, U.MatOption, U.MatOptgroup, A.MatButton, ft.MatCheckbox, h.MatDialogClose, h.MatDialogActions, h.MatDialogContent, x.MatInput, x.MatFormField, x.MatLabel, Ke.MatSelect, Ae.SplitComponent, Ae.SplitAreaComponent, pt.RestSourceFormComponent, Be.SnippetFormComponent], styles: [".rest-form[_ngcontent-%COMP%]     .content-inner{height:auto}"] }); }
} return r; })(), Lr = (() => { class r {
    constructor(t, i, n, a) { this.data = t, this.dialogRef = i, this.fb = n, this.handler = a, this.panes = [], this.contexts = [], this.contexts = this.data.contexts; }
    ngOnInit() { this.panes = this.data.panelFormGroup.get("panes").controls.reduce((t, i) => i.get("name").value ? [...t, i.get("name").value] : [...t], []), this.data.pane !== void 0 && this.handler.toObject(this.data.pane.settings).subscribe(t => { this.rest = t; }); }
    submitted(t) { let i = this.data.panelFormGroup.get("panes"); if (this.data.paneIndex === void 0)
        i.push(this.fb.group({ contentPlugin: "rest", name: new p(""), label: new p(""), rule: new p(""), settings: this.fb.array(this.handler.buildSettings(t).map(n => this.convertToGroup(n))) })), this.data.contentAdded.next([this.data.panelIndex, i.length - 1]);
    else {
        let n = i.at(this.data.paneIndex);
        n.get("settings").clear(), this.handler.buildSettings(t).forEach(a => { n.get("settings").push(this.convertToGroup(a)); });
    } this.dialogRef.close(); }
    convertToGroup(t) { let i = this.fb.group({ name: new p(t.name, g.required), type: new p(t.type, g.required), displayName: new p(t.displayName, g.required), value: new p(t.value, g.required), computedValue: new p(t.value, g.required), attributes: new q([]) }); return t.attributes && t.attributes.length > 0 && t.attributes.forEach(n => { i.get("attributes").push(this.convertToGroup(n)); }), i; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(k), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(Fe)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-rest-editor"]], standalone: !1, decls: 1, vars: 3, consts: [[3, "submitted", "panes", "rest", "contexts"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "classifieds-ui-rest-form", 0), e.\u0275\u0275listener("submitted", function (o) { return n.submitted(o); }), e.\u0275\u0275elementEnd()), i & 2 && e.\u0275\u0275property("panes", n.panes)("rest", n.rest)("contexts", n.contexts); }, dependencies: [qr], encapsulation: 2 }); }
} return r; })(), Ur = (() => { class r {
    set values(t) { this.options = t, this.buildOptions(); }
    get attributesArray() { return this.selectionForm.get("attributes"); }
    constructor(t, i, n) { this.fb = t, this.attributeSerializer = i, this.tokenizerService = n, this.searchChange = new M, this.selectionForm = this.fb.group({ attributes: this.fb.array([]) }), this.onTouched = () => { }, this.displayAuto = a => n.replaceTokens(this.selectMapping.label, this.tokenizerService.generateGenericTokens(a.dataItem)); }
    ngOnInit() { this.attributesArray.push(this.fb.group({ name: new p("value", g.required), type: new p(ee.Array, g.required), displayName: new p("Value", g.required), value: new p(""), attributes: ["checkboxgroup"].findIndex(t => t === this.renderType) > -1 ? this.fb.array([]) : new p("") })), this.renderType === "autocomplete" && (this.attributesArray.at(0).addControl("_proxy", this.fb.control("")), this.attributesArray.at(0).get("_proxy").valueChanges.pipe(ut(), se(500)).subscribe(t => { this.searchChange.emit(t); })); }
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
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(w.AttributeSerializerService), e.\u0275\u0275directiveInject(N.TokenizerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-selection"]], inputs: { name: "name", label: "label", values: "values", renderType: "renderType", selectMapping: "selectMapping" }, outputs: { searchChange: "searchChange" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: Ve, useExisting: K(() => r), multi: !0 }, { provide: Ge, useExisting: K(() => r), multi: !0 }])], decls: 9, vars: 6, consts: [["autocomplete", "matAutocomplete"], [3, "formGroup"], ["formArrayName", "attributes"], ["formGroupName", "0"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["formControlName", "attributes"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [4, "ngFor", "ngForOf"], [3, "formGroupName"], ["formControlName", "_store"], ["matInput", "", "formControlName", "_proxy", 3, "placeholder", "matAutocomplete"], [3, "optionSelected", "displayWith"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div"), e.\u0275\u0275elementContainerStart(4, 4), e.\u0275\u0275template(5, sr, 6, 2, "ng-container", 5)(6, cr, 6, 2, "ng-container", 5)(7, pr, 4, 1, "ng-container", 5)(8, mr, 6, 4, "ng-container", 5), e.\u0275\u0275elementContainerEnd(), e.\u0275\u0275elementEnd()()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.selectionForm), e.\u0275\u0275advance(4), e.\u0275\u0275property("ngSwitch", n.renderType), e.\u0275\u0275advance(), e.\u0275\u0275property("ngSwitchCase", "select"), e.\u0275\u0275advance(), e.\u0275\u0275property("ngSwitchCase", "radiogroup"), e.\u0275\u0275advance(), e.\u0275\u0275property("ngSwitchCase", "checkboxgroup"), e.\u0275\u0275advance(), e.\u0275\u0275property("ngSwitchCase", "autocomplete")); }, dependencies: [v.NgForOf, v.NgSwitch, v.NgSwitchCase, l.DefaultValueAccessor, l.NgControlStatus, l.NgControlStatusGroup, l.FormGroupDirective, l.FormControlName, l.FormGroupName, l.FormArrayName, U.MatAutocomplete, U.MatOption, U.MatAutocompleteTrigger, ft.MatCheckbox, x.MatInput, x.MatFormField, x.MatLabel, Ye.MatRadioGroup, Ye.MatRadioButton, Ke.MatSelect], encapsulation: 2 }); }
} return r; })(), Hr = (() => { class r {
    get renderType() { return this.restHandler.getRenderType(this.settings); }
    constructor(t, i) { this.restHandler = t, this.controlContainer = i, this.settings = [], this.contexts = [], this.state = {}, this.stateChange = new M, this.tag = W(), this.searchChange$ = new z; }
    ngOnInit() { this.restHandler.toObject(this.settings).pipe(I(t => { this.snippet = t.renderer.data, this.selectMapping = new Qt(JSON.parse(this.snippet.content)); }), E(() => this.renderType !== "autocomplete"), _(t => this.restHandler.buildSelectOptionItems(this.settings, new Map([["tag", this.tag], ["snippet", t.renderer.data], ["contexts", this.contexts]])))).subscribe(t => { this.options = t; }), this.searchChange$.pipe(I(t => { this.stateChange.emit({ autocomplete: { input: t } }); }), _(t => this.restHandler.buildSelectOptionItems(this.settings, new Map([["tag", W()], ["snippet", this.snippet], ["contexts", this.contexts]])))).subscribe(t => { this.options = t; }); }
    onSearchChange(t) { this.searchChange$.next(t); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(Fe), e.\u0275\u0275directiveInject(l.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-rest-pane-renderer"]], inputs: { settings: "settings", name: "name", label: "label", displayType: "displayType", contexts: "contexts", state: "state" }, outputs: { stateChange: "stateChange" }, standalone: !1, decls: 2, vars: 6, consts: [[3, "formGroup"], ["formControlName", "settings", 3, "searchChange", "name", "label", "renderType", "values", "selectMapping"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "classifieds-ui-selection", 1), e.\u0275\u0275listener("searchChange", function (o) { return n.onSearchChange(o); }), e.\u0275\u0275elementEnd()()), i & 2 && (e.\u0275\u0275property("formGroup", n.controlContainer.control), e.\u0275\u0275advance(), e.\u0275\u0275property("name", n.name)("label", n.label)("renderType", n.renderType)("values", n.options)("selectMapping", n.selectMapping)); }, dependencies: [l.NgControlStatus, l.NgControlStatusGroup, l.FormGroupDirective, l.FormControlName, Ur], encapsulation: 2 }); }
} return r; })(), je = (() => { class r {
    constructor(t, i, n, a, o, s) { this.siteName = t, this.tokenizerService = i, this.panelHandler = n, this.mediaHandler = a, this.attributeSerializer = o, this.inlineContextResolver = s; }
    handleFile(t) { return f(); }
    handlesType(t) { return !1; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(t) { return f(!1); }
    isDynamic(t) { return !0; }
    isData(t) { return !1; }
    fetchDynamicData(t, i) { return f(new H); }
    buildDynamicItems(t, i) { return this.toObject(t).pipe(u(n => [n, i.get("contexts").find(a => a.name === n.context)]), _(([n, a]) => this.extractDataArray(a, n.query).pipe(u(o => [n, a, o]))), _(([n, a, o]) => this.transformDataArray(o, n.plugin)), u(n => new Qe({ stylePlugin: void 0, settings: [], panes: n, columnSetting: new O })), u(n => this.panelHandler.buildSettings(new ye({ id: void 0, layoutType: "grid", displayType: "page", site: this.siteName, gridItems: [], layoutSetting: new O, rowSettings: [], panels: [n] }))), u(n => n.find(a => a.name === "panels").attributes[0].attributes.find(a => a.name === "panes").attributes)); }
    getBindings(t, i, n) { return i === "context" ? this.toObject(t).pipe(u(a => [new qe({ id: a.context, type: "context" })])) : f([]); }
    toObject(t) { return f(this.attributeSerializer.deserializeAsObject(t)); }
    buildSettings(t) { return this.attributeSerializer.serialize(t, "root").attributes; }
    extractDataArray(t, i) { return this.inlineContextResolver.resolve(t).pipe(u(n => { let a = i.split("."), o = a.length; if (t === void 0)
        return f([]); let s = Array.isArray(n) ? n[0] : n; for (let c = 0; c < o; c++)
        a[c] !== "" && (s = s[a[c]]); return s; })); }
    transformDataArray(t, i) { return i === "media" ? f(t.map(n => new Pi(n)).map(n => new j({ contentPlugin: "media", name: void 0, label: void 0, settings: this.mediaHandler.buildSettings(n) }))) : f(); }
    stateDefinition(t) { return f({}); }
    editorOptions(t) { return f(new re); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(ze), e.\u0275\u0275inject(N.TokenizerService), e.\u0275\u0275inject(b.PanelContentHandler), e.\u0275\u0275inject(pe), e.\u0275\u0275inject(w.AttributeSerializerService), e.\u0275\u0275inject(G.InlineContextResolverService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), ct = class {
    constructor(d) { d && (this.context = d.context, this.query = d.query, this.plugin = d.plugin); }
}, Qr = (() => { class r {
    constructor(t) { this.fb = t, this.contexts = [], this.submitted = new M, this.sliceForm = this.fb.group({ context: this.fb.control("", g.required), query: this.fb.control("", g.required), plugin: this.fb.control("", g.required) }); }
    ngOnInit() { }
    submit() { let t = new ct(this.sliceForm.value); this.submitted.emit(t); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(l.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-slice-form"]], inputs: { contexts: "contexts" }, outputs: { submitted: "submitted" }, standalone: !1, decls: 20, vars: 3, consts: [[1, "slice-form", 3, "ngSubmit", "formGroup"], ["required", "", "formControlName", "context"], ["value", "_root"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Query", "formControlName", "query", "required", ""], ["required", "", "formControlName", "plugin"], ["value", "media"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"], [3, "value"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "mat-form-field")(3, "mat-label"), e.\u0275\u0275text(4, "Type"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(5, "mat-select", 1)(6, "mat-option", 2), e.\u0275\u0275text(7, "_root"), e.\u0275\u0275elementEnd(), e.\u0275\u0275template(8, gr, 2, 2, "mat-option", 3), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(9, "mat-form-field"), e.\u0275\u0275element(10, "input", 4), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(11, "mat-form-field")(12, "mat-label"), e.\u0275\u0275text(13, "Plugin"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(14, "mat-select", 5)(15, "mat-option", 6), e.\u0275\u0275text(16, "Media"), e.\u0275\u0275elementEnd()()()(), e.\u0275\u0275elementStart(17, "mat-dialog-actions")(18, "button", 7), e.\u0275\u0275text(19, "Save"), e.\u0275\u0275elementEnd()()()), i & 2 && (e.\u0275\u0275property("formGroup", n.sliceForm), e.\u0275\u0275advance(8), e.\u0275\u0275property("ngForOf", n.contexts), e.\u0275\u0275advance(10), e.\u0275\u0275property("disabled", !n.sliceForm.valid)); }, dependencies: [v.NgForOf, l.\u0275NgNoValidate, l.DefaultValueAccessor, l.NgControlStatus, l.NgControlStatusGroup, l.RequiredValidator, l.FormGroupDirective, l.FormControlName, U.MatOption, A.MatButton, h.MatDialogClose, h.MatDialogActions, h.MatDialogContent, x.MatInput, x.MatFormField, x.MatLabel, Ke.MatSelect], encapsulation: 2 }); }
} return r; })(), Wr = (() => { class r {
    constructor(t, i, n, a) { this.data = t, this.dialogRef = i, this.fb = n, this.handler = a, this.contexts = [], this.contexts = this.data.contexts; }
    ngOnInit() { }
    submitted(t) { this.data.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "slice", name: new p(""), label: new p(""), rule: new p(""), settings: this.fb.array(this.handler.buildSettings(t).map(i => this.convertToGroup(i))) })), this.dialogRef.close(); }
    convertToGroup(t) { let i = this.fb.group({ name: new p(t.name, g.required), type: new p(t.type, g.required), displayName: new p(t.displayName, g.required), value: new p(t.value, g.required), computedValue: new p(t.value, g.required), attributes: new q([]) }); return t.attributes && t.attributes.length > 0 && t.attributes.forEach(n => { i.get("attributes").push(this.convertToGroup(n)); }), i; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(k), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(je)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-slice-editor"]], standalone: !1, decls: 1, vars: 1, consts: [[3, "submitted", "contexts"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "classifieds-ui-slice-form", 0), e.\u0275\u0275listener("submitted", function (o) { return n.submitted(o); }), e.\u0275\u0275elementEnd()), i & 2 && e.\u0275\u0275property("contexts", n.contexts); }, dependencies: [Qr], encapsulation: 2 }); }
} return r; })(), Jr = (() => { class r {
    constructor(t, i) { this.fb = t, this.controlContainer = i; }
    ngOnInit() { this.controlContainer.control.addControl("adaptor", this.fb.control("rest", g.required)), this.controlContainer.control.addControl("rest", this.fb.control("")); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(l.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-context-editor"]], viewQuery: function (i, n) { if (i & 1 && e.\u0275\u0275viewQuery(Lt, 7), i & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.restSourceFormComp = a.first);
        } }, standalone: !1, decls: 2, vars: 1, consts: [[3, "formGroup"], ["formControlName", "rest"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementContainerStart(0, 0), e.\u0275\u0275element(1, "classifieds-ui-rest-source-form", 1), e.\u0275\u0275elementContainerEnd()), i & 2 && e.\u0275\u0275property("formGroup", n.controlContainer.control); }, dependencies: [l.NgControlStatus, l.NgControlStatusGroup, l.FormGroupDirective, l.FormControlName, pt.RestSourceFormComponent], encapsulation: 2 }); }
} return r; })(), Kr = (() => { class r {
    get labels() { return this.formGroup.get("labels"); }
    constructor(t, i, n, a) { this.data = t, this.dialogRef = i, this.fb = n, this.attributeSerializer = a, this.contexts = [], this.panes = [], this.formGroup = this.fb.group({ labels: this.fb.array([this.buildLabelGroup()]) }), this.contexts = this.data.contexts; }
    ngOnInit() { this.panes = new Qe(this.data.panelFormGroup.value).panes; }
    submit() { this.data.panelFormGroup.get("settings").clear(), this.attributeSerializer.serialize(this.formGroup.value, "root").attributes.forEach(t => { console.log("label mappings"), console.log(this.attributeSerializer.convertToGroup(t)), this.data.panelFormGroup.get("settings").push(this.attributeSerializer.convertToGroup(t)); }); }
    onRemoveMapping(t) { this.labels.removeAt(t); }
    onAddMapping() { this.labels.push(this.buildLabelGroup()); }
    buildLabelGroup() { return this.fb.group({ mapping: this.fb.control("") }); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(k), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(w.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["druid-tabs-panel-editor"]], standalone: !1, decls: 7, vars: 3, consts: [[3, "ngSubmit", "formGroup"], ["formArrayName", "labels"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["type", "button", "mat-raised-button", "", "color", "primary", 3, "click"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"], [3, "formGroupName"], ["formControlName", "mapping", 3, "panes"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), e.\u0275\u0275elementStart(1, "div", 1), e.\u0275\u0275template(2, fr, 4, 2, "div", 2), e.\u0275\u0275elementStart(3, "button", 3), e.\u0275\u0275listener("click", function () { return n.onAddMapping(); }), e.\u0275\u0275text(4, "Add"), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(5, "button", 4), e.\u0275\u0275text(6, "Save"), e.\u0275\u0275elementEnd()()), i & 2 && (e.\u0275\u0275property("formGroup", n.formGroup), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", n.labels.controls), e.\u0275\u0275advance(3), e.\u0275\u0275property("disabled", !n.formGroup.valid)); }, dependencies: [v.NgForOf, l.\u0275NgNoValidate, l.NgControlStatus, l.NgControlStatusGroup, l.FormGroupDirective, l.FormControlName, l.FormGroupName, l.FormArrayName, A.MatButton, h.MatDialogClose, b.PanelPageLinkedlistComponent], encapsulation: 2 }); }
} return r; })(), Yr = (() => { class r {
    constructor(t) { this.attributeSerializer = t, this.settings = [], this.panes = [], this.originMappings = [], this.labelMappingsEnabled = !1; }
    ngOnInit() { console.log("tabs panels contexts"), console.log(this.panes); let t = this.attributeSerializer.deserialize(new ne({ name: "", displayName: "", computedValue: "", type: ee.Complex, value: "", intValue: 0, attributes: this.settings })); this.labelMappingsEnabled = !!(t && t.labels !== void 0 && Array.isArray(t.labels) && t.labels.length > 0); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(w.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-tabs-panel-renderer"]], inputs: { settings: "settings", panes: "panes", originPanes: "originPanes", originMappings: "originMappings" }, standalone: !1, decls: 2, vars: 2, consts: [["mat-align-tabs", "start", 4, "ngIf"], ["mat-align-tabs", "start"], [4, "for"], ["mat-tab-label", ""], [3, "pluginName", "settings", "contexts"], ["label", "The Label", 4, "ngFor", "ngForOf"], ["label", "The Label"]], template: function (i, n) { i & 1 && e.\u0275\u0275template(0, br, 2, 1, "mat-tab-group", 0)(1, _r, 2, 1, "mat-tab-group", 0), i & 2 && (e.\u0275\u0275property("ngIf", n.labelMappingsEnabled), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !n.labelMappingsEnabled)); }, dependencies: [v.NgForOf, v.NgIf, B.MatTabLabel, B.MatTab, B.MatTabGroup, he.ForDirective, ht.RenderPaneComponent], encapsulation: 2 }); }
} return r; })(), Rt = (() => { class r {
    set panelPage(t) { this.panelPage$.next(t); }
    set context(t) { this.context$.next(t); }
    constructor(t, i) { this.fb = t, this.controlContainer = i, this.panelPages = [], this.panelPage$ = new J(new ye), this.context$ = new J(void 0), this.formGroup = this.fb.group({ state: this.fb.control("", [g.required]) }), this.stateCtrl = this.fb.control(""), this.stateCtrlSub = this.stateCtrl.valueChanges.pipe(se(250), ut(), E(n => { try {
        return JSON.parse(n), !0;
    }
    catch {
        return !1;
    } }), u(n => JSON.parse(n))).subscribe(n => { console.log("write state"), console.log(n), this.formGroup.get("state").setValue(n); }), this.onTouched = () => { }; }
    ngOnInit() { this.panelPage$.subscribe(t => { this.panelPages = [t]; }), this.context$.subscribe(t => { t ? this.stateCtrl.setValue(JSON.stringify(t.data.state)) : this.stateCtrl.setValue(""); }); }
    writeValue(t) { t && this.formGroup.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.formGroup.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(t) { return this.formGroup.valid ? null : { invalidForm: { valid: !1, message: "source is invalid" } }; }
    flattenSelector(t) { let i = []; return t.panel !== void 0 && t.panel !== null && i.push(t.panel), t.pane !== void 0 && t.pane !== null && i.push(t.pane), t.nested !== void 0 && t.nested !== null && typeof t.nested == "object" && this.flattenSelector(t.nested).forEach(n => i.push(n)), i; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(l.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-page-state-form"]], inputs: { panelPage: "panelPage", context: "context" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: Ve, useExisting: K(() => r), multi: !0 }, { provide: Ge, useExisting: K(() => r), multi: !0 }])], decls: 3, vars: 2, consts: [[3, "formGroup"], ["cols", "40", "rows", "20", "required", "", 3, "formControl"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0), e.\u0275\u0275text(1, " <"), e.\u0275\u0275element(2, "textarea", 1), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("formGroup", n.formGroup), e.\u0275\u0275advance(2), e.\u0275\u0275property("formControl", n.stateCtrl)); }, dependencies: [l.DefaultValueAccessor, l.NgControlStatus, l.NgControlStatusGroup, l.RequiredValidator, l.FormControlDirective, l.FormGroupDirective], encapsulation: 2 }); }
} return r; })(), Xr = (() => { class r {
    constructor(t, i, n) { this.fb = t, this.pageBuilderFacade = i, this.controlContainer = n; }
    ngOnInit() { this.controlContainer.control.addControl("adaptor", this.fb.control("data", g.required)), this.controlContainer.control.addControl("data", this.fb.control("")), this.pageBuilderFacade.getPage$.pipe(L(1)).subscribe(t => { this.panelPage = t; }); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(b.PageBuilderFacade), e.\u0275\u0275directiveInject(l.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-page-state-editor"]], viewQuery: function (i, n) { if (i & 1 && e.\u0275\u0275viewQuery(Rt, 7), i & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (n.restSourceFormComp = a.first);
        } }, inputs: { context: "context" }, standalone: !1, decls: 2, vars: 3, consts: [[3, "formGroup"], ["formControlName", "data", 3, "panelPage", "context"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementContainerStart(0, 0), e.\u0275\u0275element(1, "classifieds-ui-page-state-form", 1), e.\u0275\u0275elementContainerEnd()), i & 2 && (e.\u0275\u0275property("formGroup", n.controlContainer.control), e.\u0275\u0275advance(), e.\u0275\u0275property("panelPage", n.panelPage)("context", n.context)); }, dependencies: [l.NgControlStatus, l.NgControlStatusGroup, l.FormGroupDirective, l.FormControlName, Rt], encapsulation: 2 }); }
} return r; })(), Zr = (() => { class r {
    set settings(t) { this.settings$.next(t); }
    constructor(t, i) { this.fb = t, this.attributeSerializer = i, this.settings$ = new J(void 0), this.formGroup = this.fb.group({ name: this.fb.control("", [g.required]), field: this.fb.control("", [g.required]) }), this.settingsSub = this.settings$.pipe(u(n => n ? new ot(this.attributeSerializer.deserializeAsObject(n)) : void 0)).subscribe(n => { n ? (this.formGroup.get("name").setValue(n.name), this.formGroup.get("field").setValue(n.field)) : (this.formGroup.get("name").setValue(""), this.formGroup.get("field").setValue("")); }), this.onTouched = () => { }; }
    ngOnInit() { }
    writeValue(t) { t && this.formGroup.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.formGroup.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(t) { return this.formGroup.valid ? null : { invalidForm: { valid: !1, message: "content is invalid" } }; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(l.UntypedFormBuilder), e.\u0275\u0275directiveInject(w.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-form-datasource-form"]], inputs: { settings: "settings" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: Ve, useExisting: K(() => r), multi: !0 }, { provide: Ge, useExisting: K(() => r), multi: !0 }])], decls: 11, vars: 1, consts: [[3, "formGroup"], ["matInput", "", "formControlName", "name", "required", ""], ["matInput", "", "formControlName", "field", "required", ""]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "mat-form-field")(3, "mat-label"), e.\u0275\u0275text(4, "Name"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(5, "input", 1), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(6, "div")(7, "mat-form-field")(8, "mat-label"), e.\u0275\u0275text(9, "Field"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(10, "input", 2), e.\u0275\u0275elementEnd()()()), i & 2 && e.\u0275\u0275property("formGroup", n.formGroup); }, dependencies: [l.DefaultValueAccessor, l.NgControlStatus, l.NgControlStatusGroup, l.RequiredValidator, l.FormGroupDirective, l.FormControlName, x.MatInput, x.MatFormField, x.MatLabel], encapsulation: 2 }); }
} return r; })(), ea = (() => { class r {
    constructor(t) { this.controlContainer = t, this.settings = []; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(l.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-form-datasource"]], inputs: { settings: "settings" }, standalone: !1, decls: 2, vars: 2, consts: [[3, "formGroup"], ["formControlName", "settings", 3, "settings"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementContainerStart(0, 0), e.\u0275\u0275element(1, "classifieds-ui-form-datasource-form", 1), e.\u0275\u0275elementContainerEnd()), i & 2 && (e.\u0275\u0275property("formGroup", n.controlContainer.control), e.\u0275\u0275advance(), e.\u0275\u0275property("settings", n.settings)); }, dependencies: [l.NgControlStatus, l.NgControlStatusGroup, l.FormGroupDirective, l.FormControlName, Zr], encapsulation: 2 }); }
} return r; })(), ta = r => new Te({ id: "snippet", title: "Snippet", selectionComponent: void 0, editorComponent: Nr, renderComponent: ri, handler: r }), ia = r => new Te({ id: "attribute", title: "Attribute", selectionComponent: Vr, editorComponent: Gr, renderComponent: Ar, handler: r }), na = r => new Te({ id: "media", title: "Media", selectionComponent: void 0, editorComponent: zr, renderComponent: Br, handler: r }), ra = r => new Te({ id: "rest", title: "REST", selectionComponent: void 0, editorComponent: Lr, renderComponent: Hr, handler: r }), aa = r => new Te({ id: "slice", title: "Slice", selectionComponent: void 0, editorComponent: Wr, renderComponent: void 0, handler: r }), oa = r => { let d = { path: "" }; return new Me({ id: "page", name: "page", title: "Page", global: !0, group: "pages", baseObject: d, resolver: r }); }, sa = r => { let d = { dataset: new H }; return new Me({ id: "rest", name: "rest", title: "Rest", baseObject: d, resolver: r, editorComponent: Jr }); }, la = r => { let d = { dataset: new H }; return new Me({ id: "form", name: "form", title: "Form", baseObject: d, resolver: r }); }, ca = r => { let d = new Ie({ state: new ne }); return new Me({ id: "panestate", name: "panestate", title: "Pane State", internal: !0, baseObject: d, resolver: r }); }, da = r => { let d = new Ie({ state: new ne }); return new Me({ id: "pagestate", name: "pagestate", title: "Page State", internal: !0, baseObject: d, resolver: r, editorComponent: Xr }); }, pa = r => new st({ id: "tabs", name: "tabs", title: "Tabs", handler: r, editorComponent: Kr, renderComponent: Yr }), ua = (r, d, t) => new tn({ id: "form", title: "Form", usedContexts: ({ param: i, metadata: n }) => f([`form__${i.mapping.value.substr(0, i.mapping.value.indexOf("."))}`]), evalParam: ({ param: i, metadata: n }) => { let a = i.mapping.value.substr(0, i.mapping.value.indexOf(".")), o = i.mapping.value.substr(i.mapping.value.indexOf(".") + 1); return console.log(`form: ${a} || ${o}`), t.getForm$(a).pipe(L(1), u(s => s || new Ne), u(s => d.serializeForm(s)), u(s => r.generateGenericTokens(s)), I(s => console.log(s)), u(s => s.has(`.${o}`) ? r.replaceTokens(`[.${o}]`, s) : ""), I(s => { console.log("form value"), console.log(s); })); } }), ma = r => new Ni({ id: "form", title: "Form", resolve: () => r.getFormNames$.pipe(_(d => d.length === 0 ? f([]) : ue(d.map(t => r.getForm$(t).pipe(u(i => [t, i]))))), u(d => d.reduce((t, [i, n]) => S(y({}, t), { [`form__${i}`]: n }), {}))), resolveSingle: () => r.getFormNames$.pipe(_(d => Ht(...d.map(t => r.getForm$(t).pipe(u(i => [`form__${t}`, i])))))) }), ga = r => new rn({ id: "pages_form", title: "Pages Form", build: () => { an.prototype.serializePageForm = d => new Promise(t => { t(r.serializeForm(d)); }); } }), fa = (r, d) => new sn({ id: "panelpageform_serialize", title: "Panelpageform Serialize", create: ({ object: t }) => f({ success: !1, entity: d.serializeForm(new Ne(t)) }), read: ({}) => f({ success: !1 }), update: ({}) => f({ success: !1 }), delete: ({}) => f({ success: !1 }) }), ha = (r, d, t) => new Ui({ id: "form", title: "Form", editor: ea, fetch: ({ settings: i }) => f(new H).pipe(u(() => new ot(r.deserializeAsObject(i))), _(n => d.getForm$(n.name).pipe(u(a => [n, a || new Ne]), mt([n, new Ne]), L(1))), u(([n, a]) => [n, t.serializeForm(a)]), u(([n, a]) => new H({ results: Je.JSONPath({ path: `$.${n.field}.*`, json: a }) }))), getBindings: ({ settings: i, metadata: n }) => f([]).pipe(u(() => new ot(r.deserializeAsObject(i))), u(a => [new qe({ id: `form__${a.name}`, type: "context" })])) }), va = r => d => { if (("/" + d.map(t => t.path).join("/")).indexOf(r.path) === 0) {
    console.log("matcher matched for", r.id, r.path);
    let t = r.path.substr(1).split("/").length;
    return { consumed: d, posParams: d.reduce((i, n, a) => a === 0 ? S(y({}, i), { panelPageId: new at(r.id, {}) }) : a > t - 1 ? S(y({}, i), { [`arg${a - t}`]: new at(n.path, {}) }) : y({}, i), {}) };
}
else
    return null; }, ba = r => d => { if (("/" + d.map(t => t.path).join("/")).indexOf(r.path) === 0 && d.map(t => t.path).join("/").indexOf("/manage") > -1) {
    let t = r.path.substr(1).split("/").length;
    return { consumed: d, posParams: d.reduce((i, n, a) => a === 0 ? S(y({}, i), { panelPageId: new at(r.id, {}) }) : y({}, i), {}) };
}
else
    return null; };
var ya = (() => { class r {
    constructor(t, i, n, a) { this.tokenizerService = t, this.panelResolverService = i, this.styleResolverService = n, this.paneDatasource = a, this.settings = [], this.panes = [], this.originMappings = [], this.resolvedContext = {}; }
    ngOnInit() { this.paneDatasource.pageChange$.pipe(Bi(1), _(t => this.panelResolverService.resolvePanes({ panes: this.originPanes.map(i => new j(S(y({}, i), { metadata: new Map([...i.metadata ? i.metadata : [], ["page", t], ["limit", this.paneDatasource.pageSize]]) }))), contexts: this.contexts, resolvedContext: this.resolvedContext })), _(({ resolvedPanes: t, originMappings: i }) => this.styleResolverService.alterResolvedPanes({ panel: this.panel, resolvedPanes: t, originMappings: i }))).subscribe(({ resolvedPanes: t, originMappings: i }) => { this.originMappings = i, this.paneDatasource.panes = t; }), this.paneDatasource.panes = this.panes, this.trackByTpl = "[._root.id]"; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(N.TokenizerService), e.\u0275\u0275directiveInject(b.PanelResolverService), e.\u0275\u0275directiveInject(b.StyleResolverService), e.\u0275\u0275directiveInject(b.PaneDatasourceService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-virtual-list-panel-renderer"]], inputs: { settings: "settings", panes: "panes", originPanes: "originPanes", originMappings: "originMappings", contexts: "contexts", resolvedContext: "resolvedContext", panel: "panel" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([Yt])], decls: 2, vars: 2, consts: [[1, "panes-viewport", 3, "itemSize"], ["class", "pane-item", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "pane-item"], [3, "pluginName", "settings", "contexts", "resolvedContext"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "cdk-virtual-scroll-viewport", 0), e.\u0275\u0275template(1, Cr, 2, 4, "div", 1), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("itemSize", 75), e.\u0275\u0275advance(), e.\u0275\u0275property("cdkVirtualForOf", n.paneDatasource)); }, dependencies: [Ce.CdkFixedSizeVirtualScroll, Ce.CdkVirtualForOf, Ce.CdkVirtualScrollViewport, ht.RenderPaneComponent], styles: ["[_nghost-%COMP%]{position:relative}.panes-viewport[_ngcontent-%COMP%]{height:100%;width:100%}"] }); }
} return r; })(), _a = (() => { class r {
    constructor(t) { this.router = t; }
    ngOnInit() { }
    onClick() { this.router.navigateByUrl(this.href); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(ge.Router)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-page-router-link"]], inputs: { href: "href", text: "text" }, standalone: !1, decls: 2, vars: 1, consts: [[3, "click"]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "a", 0), e.\u0275\u0275listener("click", function () { return n.onClick(); }), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate(n.text)); }, styles: ["[_nghost-%COMP%]:hover{cursor:pointer}"] }); }
} return r; })(), To = (() => { class r {
    constructor(t, i, n) { this.routerStore = t, this.router = i, this.panelPageListItemsService = n.getEntityCollectionService("PanelPageListItem"); }
    ngOnInit() { }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(me.Store), e.\u0275\u0275directiveInject(ge.Router), e.\u0275\u0275directiveInject($.EntityServices)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-catch-all-router"]], standalone: !1, decls: 2, vars: 0, template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "p"), e.\u0275\u0275text(1, "Page Not Found"), e.\u0275\u0275elementEnd()); }, encapsulation: 2 }); }
} return r; })(), Ca = new ui("PagesSettings"), jt = class {
    constructor(d) { this.disableRouting = !1, d && (this.disableRouting = d.disableRouting); }
}, Sa = (() => { class r {
    constructor(t, i, n, a) { this.siteName = t, this.pagesSettings = i, this.router = n, this.routesLoaded = !1, this.panelPageListItemsService = a.getEntityCollectionService("PanelPageListItem"); }
    canActivate(t, i) { return this.pagesSettings.disableRouting ? new Promise(n => n(!0)) : new Promise(n => { let a = i.url; a.indexOf("?") !== -1 && (a = i.url.substr(0, a.indexOf("?"))); let o = "path=" + a.substr(1).split("/").reduce((s, c, m) => [...s, m === 0 ? `/${c}` : `${s[m - 1]}/${c}`], []).map(s => this.encodePathComponent(s)).join("&path=") + `&site=${encodeURIComponent(`{"term":{"site.keyword":{"value":"${this.siteName}"}}}`)}`; setTimeout(() => { }), Ue([Pe(() => !this.routesLoaded, this.panelPageListItemsService.getWithQuery(`site=${encodeURIComponent(`{"term":{"site.keyword":{"value":"${this.siteName}"}}}`)}&path={"wildcard":{"path.keyword":{"value":"*"}}}`).pipe(I(() => console.log("loaded page list items")), u(s => s.filter(c => c.path !== void 0 && c.path !== "")), u(s => s.map(c => new ye(c)).sort((c, m) => c.path.split("/").length === m.path.split("/").length ? c.path.split("/")[c.path.split("/").length - 1] > m.path.split("/")[m.path.split("/").length - 1] ? -1 : 1 : c.path.split("/").length > m.path.split("/").length ? -1 : 1)), I(s => s.sort((c, m) => c.path.length > m.path.length ? 1 : -1)), I(s => { let c = this.router.config; s.forEach(m => { c.unshift({ matcher: ba(m), component: ai }), c.unshift({ matcher: va(m), component: Zi, data: { panelPageListItem: m } }), console.log(`panels matcher: ${m.path}`); }), this.routesLoaded = !0; }), u(() => [])), f([])), this.panelPageListItemsService.getWithQuery(o).pipe(qi(s => f([])), I(() => console.log("loaded specific matched")), u(s => s.reduce((c, m) => c === void 0 || c.path.split("/").length < m.path.split("/").length ? m : c, void 0)), u(s => { let c = i.url.substr(1).split("/").slice(s.path.split("/").length - 1).join("/"); return [s, c]; }))]).pipe(u(([s, [c, m]]) => [c, m])).subscribe(([s, c]) => { let m = `${s.path}${c === "" ? "" : `/${c}`}?${Tt.stringify(t.queryParams)}`, C = this.router.parseUrl(m); console.log(`panels garud navigate: ${s.path}${c === "" ? "" : `/${c}`}?${Tt.stringify(t.queryParams)}`), n(C); }); }); }
    encodePathComponent(t) { return `{"term":{"path.keyword":{"value":"${t}"}}}`; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(ze), e.\u0275\u0275inject(Ca), e.\u0275\u0275inject(ge.Router), e.\u0275\u0275inject($.EntityServices)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), Ot = (() => { class r {
    constructor(t) { this.pageBuilderFacade = t; }
    resolve(t, i) { return this.pageBuilderFacade.getPageInfo$; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(b.PageBuilderFacade)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), Nt = (() => { class r {
    constructor(t, i, n, a) { this.pageBuilderFacade = t, this.store = i, this.urlGeneratorService = n, this.routerStore = a; }
    resolve(t, i) { let n = new ce(i); return (n.params && Array.isArray(n.params) && n.params.length > 0 ? this.changePipeline(n.params) : f([])).pipe(_(() => n.params && Array.isArray(n.params) && n.params.length > 0 ? this.rebuildParams(n.params) : f([])), u(a => [a, new Map([["tag", W()]])]), _(([a, o]) => this.urlGeneratorService.getUrl(n.url, a, o).pipe(u(s => [s, o]))), _(([a, o]) => (this.pageBuilderFacade.loadRestData(`${o.get("tag")}`, new ce(S(y({}, n), { url: a }))), this.store.pipe(de(Re(`${o.get("tag")}`)), E(s => s !== void 0), u(s => s.results), L(1))))); }
    changePipeline(t) { let i = t.reduce((n, a) => { switch (a.mapping.type) {
        case "route": return [...n, this.routeArgChange(a.mapping.value)];
        case "querystring": return [...n, this.queryStringChange(a.mapping.value)];
        case "form": return [...n, this.formChange(a.mapping.value)];
        default: return [...n];
    } }, []); return Ht(...i); }
    routeArgChange(t) { return this.pageBuilderFacade.getPageInfo$.pipe(u(() => { })); }
    queryStringChange(t) { return new z; }
    formChange(t) { let [i, n] = t.split(".", 2); return this.pageBuilderFacade.getForm$(i).pipe(I(() => console.log("form change")), u(() => { })); }
    rebuildParams(t) { return this.pageBuilderFacade.getPageInfo$.pipe(u(i => i ? t : this.testParams(t))); }
    testParams(t) { let i = [], n = t.length; for (let a = 0; a < n; a++)
        t[a].mapping.type === "route" ? i.push(new It(S(y({}, t[a]), { mapping: { type: "static", value: t[a].mapping.testValue, context: void 0, testValue: void 0 } }))) : i.push(new It(t[a])); return i; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(b.PageBuilderFacade), e.\u0275\u0275inject(me.Store), e.\u0275\u0275inject(gt.UrlGeneratorService), e.\u0275\u0275inject(me.Store)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), kt = (() => { class r {
    constructor(t) { this.pageBuilderFacade = t; }
    resolve(t, i) { return this.pageBuilderFacade.getForm$(i); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(b.PageBuilderFacade)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), xa = (() => { class r extends Qi {
    get displayedColumns() { let t = this.panes.findIndex(i => i.contexts.findIndex(n => n.name === "_root") > -1); return t > -1 ? Object.keys(this.panes[t].contexts.find(i => i.name === "_root").data) : []; }
    constructor(t, i) { super(), this.tokenizerService = t, this.paneDatasource = i, this.trackByMapping = (n, a) => this.tokenizerService.replaceTokens(this.trackByTpl, this.tokenizerService.generateGenericTokens(a.contexts[0].data)); }
    ngOnInit() { console.log(this.panes), this.paneDatasource.panes = this.panes; }
    rowData(t, i) { return console.log(`name: ${t}`), `${i.contexts.find(n => n.name === "_root").data[t]}`; }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275directiveInject(N.TokenizerService), e.\u0275\u0275directiveInject(b.PaneDatasourceService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: r, selectors: [["lib-table-panel-renderer"]], standalone: !1, features: [e.\u0275\u0275ProvidersFeature([Yt]), e.\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 4, consts: [["mat-table", "", "matSort", "", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function (i, n) { i & 1 && (e.\u0275\u0275elementStart(0, "table", 0), e.\u0275\u0275template(1, wr, 3, 1, "ng-container", 1)(2, Pr, 1, 0, "tr", 2)(3, Fr, 1, 0, "tr", 3), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("dataSource", n.paneDatasource), e.\u0275\u0275advance(), e.\u0275\u0275property("ngForOf", n.displayedColumns), e.\u0275\u0275advance(), e.\u0275\u0275property("matHeaderRowDef", n.displayedColumns), e.\u0275\u0275advance(), e.\u0275\u0275property("matRowDefColumns", n.displayedColumns)); }, dependencies: [v.NgForOf, et.MatSort, et.MatSortHeader, F.MatTable, F.MatHeaderCellDef, F.MatHeaderRowDef, F.MatColumnDef, F.MatCellDef, F.MatRowDef, F.MatHeaderCell, F.MatCell, F.MatHeaderRow, F.MatRow], encapsulation: 2 }); }
} return r; })(), wa = (() => { class r {
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
    wrapPanel(t) { return new Qe({ stylePlugin: void 0, settings: [], panes: t, columnSetting: new O }); }
    stateDefinition(t) { return f({}); }
    editorOptions(t) { return f(new re); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(w.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" }); }
} return r; })(), rt = (() => { class r {
    constructor(t, i, n, a) { this.panelHandler = t, this.attributeSerializer = i, this.panelsLoaderService = n, this.panelsSelectorService = a; }
    alterResolvedPanes({ settings: t, resolvedPanes: i, originMappings: n }) { let a = this.attributeSerializer.deserialize(new ne({ name: "", displayName: "", computedValue: "", type: ee.Complex, value: "", intValue: 0, attributes: t })), o = a && a.labels !== void 0 && Array.isArray(a.labels) ? a.labels.map(c => new wt(c.mapping)) : [], s = []; if (o.length === 0)
        return f({ resolvedPanes: i, originMappings: n }); return i.length !== o.length ? s = i.map((c, m) => new wt(S(y({}, m < o.length ? o[m] : o[o.length - 1]), { pane: m }))).map(c => this.flattenSelector(c)) : s = o.map(c => this.flattenSelector(c)), Ue(i.map((c, m) => this.panelsLoaderService.reducePanes([], c, 0)[0])).pipe(u(c => c.reduce((m, [C, P]) => [...m, P], [])), u(c => { let m = s.map(T => this.selectWithTarget(T)), C = s.map(T => this.selectWithoutTarget(T)), P = m.map((T, R) => this.panelsSelectorService.rebuildPage(c[s[R][0]], T.slice(1))), D = C.map((T, R) => this.panelsSelectorService.rebuildPage(c[s[R][0]], T.slice(1))), V = [], X = i.length; for (let T = 0; T < X; T++)
        V.push(new j(S(y({}, i[T]), { settings: this.panelHandler.buildSettings(P[T]) }))), V.push(new j(S(y({}, i[T]), { settings: this.panelHandler.buildSettings(D[T]) }))); return { resolvedPanes: V, originMappings: n }; })); return console.log("TabsStyleHandler::alterResolvedPanes"), console.log(i), console.log(n), f({ resolvedPanes: i, originMappings: n }); }
    stateDefinition(t) { return f({}); }
    flattenSelector(t) { let i = []; return t.panel !== void 0 && t.panel !== null && i.push(t.panel), t.pane !== void 0 && t.pane !== null && i.push(t.pane), t.nested !== void 0 && t.nested !== null && typeof t.nested == "object" && this.flattenSelector(t.nested).forEach(n => i.push(n)), i; }
    selectWithTarget(t) { return t.map(i => i + 1); }
    selectWithoutTarget(t) { return t.map((i, n) => n === t.length - 1 ? (i + 1) * -1 : 0); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(wa), e.\u0275\u0275inject(w.AttributeSerializerService), e.\u0275\u0275inject(b.PanelsLoaderService), e.\u0275\u0275inject(b.PanelsSelectorService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })(), Vt = (() => { class r {
    get emptyPaneState() { return new Ie({ state: this.attributeSerializer.serialize({ displayAssociatedPane: "" }, "root") }); }
    get entities$() { return this.entityServices.getEntityCollectionService("PanelPageState").entities$.pipe(I(t => { console.log("entities in store"), console.log(t); })); }
    get panelPage$() { return ue([this.pageBuilderFacade.getPageInfo$, this.entityServices.getEntityCollectionService("PanelPage").entities$]).pipe(u(([t, i]) => t && t.id !== void 0 && t.id !== "" && t.id !== null && i.findIndex(n => n.id === t.id) !== -1 ? i.find(n => n.id === t.id) : void 0)); }
    get fakePageInfo() { return new Kt({ id: "948d6e7b-12ab-11ec-8ecd-661fdd19e6df", path: "", realPath: "", args: new Map }); }
    constructor(t, i, n, a) { this.entityServices = t, this.pageBuilderFacade = i, this.panelStateConverterService = n, this.attributeSerializer = a, this.resolverCache$ = new Map; }
    resolve(t, i) { let n = i && i.selectionMethod && i.selectionMethod.length !== 0 && i.id && i.id !== null && i.id !== "" ? `ps[id=${i.id}]${i.selectionMethod.map(a => `${a}`).join("")}` : void 0; if (n && this.resolverCache$.has(n))
        return this.resolverCache$.get(n); {
        let a = this.resolve$(t, i);
        return n && this.resolverCache$.set(n, a), a;
    } }
    resolve$(t, i) { return ue([this.panelPage$, this.entities$]).pipe(u(([n, a]) => [n, n && a.findIndex(o => o.id === n.id) !== -1 ? a.find(o => o.id === n.id) : new Pt]), _(([n, a]) => this.pageBuilderFacade.getSelectionPath$.pipe(u(o => i && i.selectionPath ? i.selectionPath : o), I(o => o.join(",")), u(o => o.map((s, c) => `${(c + 1) % 2 === 0 ? "panes" : (c === 0 ? "" : "nestedPage.") + "panels"}[${s}]`)), u(o => o.length === 0 ? void 0 : "$." + o.join(".")), u(o => [n, a, o]))), I(([n, a, o]) => { console.log("page state context resolver"), console.log(n), console.log("query: " + o); }), _(([n, a, o]) => Pe(() => !!n && !a, this.panelStateConverterService.convertPageToState(n).pipe(u(s => new Pt(S(y({}, s), { panels: s.panels.map(c => new Wi(S(y({}, c), { panes: c.panes.map(m => new Ie(S(y({}, m), { state: this.attributeSerializer.serialize({ displayAssociatedPane: "y" }, "root") }))) }))) }))), u(s => [s, o])), f([a, o]))), I(([n, a]) => { console.log("rebuilt state from realtime page"), console.log(n); }), u(([n, a]) => a ? Je.JSONPath({ path: a, json: n }) : this.emptyPaneState), u(n => n && Array.isArray(n) && n.length !== 0 ? n[0] : this.emptyPaneState), I(n => { console.log("json path match"), console.log(n); }), u(n => this.attributeSerializer.deserializeAsObject(n.state)), I(n => { console.log("final state"), console.log(n); })); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject($.EntityServices), e.\u0275\u0275inject(b.PageBuilderFacade), e.\u0275\u0275inject(b.PanelStateConverterService), e.\u0275\u0275inject(w.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac }); }
} return r; })();
var Pa = [{ path: "pages", children: [{ path: "create-panel-page", component: kr }, { path: "panelpage/:panelPageId/manage", component: ai }] }], Mo = (() => { class r {
    constructor(t, i, n, a, o, s, c, m, C, P, D, V, X, T, R, Se, Ee, ae, bt, Fa, Ia, Ta, oi, Ma, Ea, si, li, ci, $a) { s.registerMetadataMap(Ir), [oa(T), sa(R), la(Se), ca(Ee), da(ae)].forEach(Z => { a.register(Z); }), t.forEach(Z => n.register(Z)), i.forEach(Z => o.register(Z)), c.register(ua(D, V, X)), m.register(ma(X)), bt.register(ga(V)), bt.getPlugin("pages_form").subscribe(Z => Z.build()), oi.register(fa(si, V)), li.register(ha(ci, X, V)); }
    static { this.\u0275fac = function (i) { return new (i || r)(e.\u0275\u0275inject(oe), e.\u0275\u0275inject($e), e.\u0275\u0275inject(ve.ContentPluginManager), e.\u0275\u0275inject(G.ContextPluginManager), e.\u0275\u0275inject(b.StylePluginManager), e.\u0275\u0275inject($.EntityDefinitionService), e.\u0275\u0275inject(Xe.ParamPluginManager), e.\u0275\u0275inject(G.ResolvedContextPluginManager), e.\u0275\u0275inject(ti.PluginConfigurationManager), e.\u0275\u0275inject(G.ContextManagerService), e.\u0275\u0275inject(N.TokenizerService), e.\u0275\u0275inject(b.FormService), e.\u0275\u0275inject(b.PageBuilderFacade), e.\u0275\u0275inject(Ot), e.\u0275\u0275inject(Nt), e.\u0275\u0275inject(kt), e.\u0275\u0275inject(lt), e.\u0275\u0275inject(Vt), e.\u0275\u0275inject(ei.BridgeBuilderPluginManager), e.\u0275\u0275inject(ii.HttpClient), e.\u0275\u0275inject($.Pluralizer), e.\u0275\u0275inject($.DefaultDataServiceConfig), e.\u0275\u0275inject(Ze.CrudAdaptorPluginManager), e.\u0275\u0275inject($.EntityDefinitionService), e.\u0275\u0275inject($.EntityDataService), e.\u0275\u0275inject(Xe.ParamEvaluatorService), e.\u0275\u0275inject(He.DatasourcePluginManager), e.\u0275\u0275inject(w.AttributeSerializerService), e.\u0275\u0275inject(Ze.CrudDataHelperService)); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: r }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ providers: [Sa, Ot, Nt, kt, lt, Vt, { provide: Ct, useValue: _a, multi: !0 }, { provide: Ct, useValue: bi, multi: !0 }, { provide: te, useClass: te }, { provide: ie, useClass: ie }, { provide: pe, useClass: pe }, { provide: Fe, useClass: Fe }, { provide: je, useClass: je }, { provide: rt, useClass: rt }, { provide: oe, useFactory: ta, multi: !0, deps: [te] }, { provide: oe, useFactory: ia, multi: !0, deps: [ie] }, { provide: oe, useFactory: na, multi: !0, deps: [pe] }, { provide: oe, useFactory: ra, multi: !0, deps: [Fe] }, { provide: oe, useFactory: aa, multi: !0, deps: [je] }, { provide: $e, useValue: new st({ id: "virtuallist", name: "virtuallist", title: "Virtual List", editorComponent: void 0, renderComponent: ya }), multi: !0 }, { provide: $e, useFactory: pa, multi: !0, deps: [rt] }, { provide: $e, useValue: new st({ id: "table", name: "table", title: "Table", editorComponent: void 0, renderComponent: xa }), multi: !0 }], imports: [mi, fi, hi, Ci, yi, gi.forChild(Pa), Si, vi.forChild(), _i, Ai, Ii, Ti, ki, Mi, Fi, Di, xi, Ji, Ri, ji, nn, on, Hi, en] }); }
} return r; })();
export { Sa as CatchAllGuard, To as CatchAllRouterComponent, ai as EditPanelPageComponent, Ca as PAGES_SETTINGS, Mo as PagesModule, jt as PagesSettings, ia as attributeContentPluginFactory, ba as createEditMatcher, va as createMatcher, la as formContextFactory, ha as formDatasourcePluginFactory, ua as formParamPluginFactory, ma as formResolvedContextPluginFactory, fa as formSerializationEntityCrudAdaptorPluginFactory, na as mediaContentPluginFactory, oa as pageContextFactory, da as pageStateContextFactory, ga as pagesFormBridgeFactory, ca as paneStateContextFactory, ra as restContentPluginFactory, sa as restContextFactory, aa as sliceContentPluginFactory, ta as snippetContentPluginFactory, pa as tabsStylePluginFactory };
//# sourceMappingURL=_rollthecloudinc_pages.LfPUciKKBI.js.map
