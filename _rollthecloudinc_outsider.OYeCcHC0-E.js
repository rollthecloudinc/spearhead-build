import { a as g } from "@nf-internal/chunk-SMWSTNHZ";
import "@nf-internal/chunk-GL2BOVXA";
import { CommonModule as E } from "@angular/common";
import * as e from "@angular/core";
import { ViewContainerRef as w } from "@angular/core";
import * as r from "@angular/forms";
import { Validators as u, UntypedFormControl as f, ReactiveFormsModule as I } from "@angular/forms";
import { MaterialModule as G } from "@rollthecloudinc/material";
import * as d from "@angular/material/dialog";
import { MAT_DIALOG_DATA as O } from "@angular/material/dialog";
import { Pane as j } from "@rollthecloudinc/panels";
import * as v from "@rollthecloudinc/content";
import { ContentPluginEditorOptions as D, ContentPlugin as A } from "@rollthecloudinc/content";
import { Dataset as F } from "@rollthecloudinc/datasource";
import { of as a, BehaviorSubject as h, map as b, tap as y, skip as R, switchMap as z, Observable as $ } from "rxjs";
import * as c from "@rollthecloudinc/attributes";
import * as M from "@angular/material/autocomplete";
import * as C from "@angular/material/button";
import * as p from "@angular/material/input";
import * as S from "@angular/material/select";
import { MfeReactComponent as V } from "@rollthecloudinc/react";
var q = ["appContainer"], l = class {
    constructor(s) { s && (this.type = s.type && s.type !== "" ? s.type : "module", this.remoteEntry = s.remoteEntry, this.componentName = s.componentName, this.exposedModule = s.exposedModule, this.remoteName = s.remoteName && s.remoteName !== "" ? s.remoteName : void 0); }
}, x = (() => { class n {
    constructor(t) { this.attributeSerializer = t; }
    handleFile(t) { return a([]); }
    handlesType(t) { return !1; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(t) { return a(!1); }
    isDynamic(t) { return !1; }
    isData(t) { return !1; }
    getBindings(t, i, o) { return i === "pane" ? a([]) : i === "context" ? a([]) : a([]); }
    fetchDynamicData(t, i) { return a(new F); }
    buildDynamicItems(t, i) { return a([]); }
    toObject(t) { return a(new l(this.attributeSerializer.deserializeAsObject(t))); }
    buildSettings(t) { return this.attributeSerializer.serialize(t, "root").attributes; }
    stateDefinition(t) { return a({ autocomplete: { input: "" }, value: void 0 }); }
    editorOptions(t) { return a(new D); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275inject(c.AttributeSerializerService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), _ = (() => { class n {
    get paneGroup() { return this.data.panelFormGroup.get("panes").at(this.paneIndex); }
    constructor(t, i, o, m, N) { this.data = t, this.dialogRef = i, this.fb = o, this.handler = m, this.attributeSerializer = N, this.bindableOptions = [], this.formGroup = this.fb.group({ type: this.fb.control("module", [u.required]), remoteEntry: this.fb.control("", [u.required]), exposedModule: this.fb.control("", [u.required]), componentName: this.fb.control("", [u.required]), remoteName: this.fb.control("") }), this.paneIndex = t.paneIndex, this.pane = t.pane; }
    ngOnInit() { this.data.pane ? this.handler.toObject(this.data.pane.settings).subscribe(t => { this.formGroup.get("type").setValue(t.type && t.type !== "" ? t.type : "module"), this.formGroup.get("remoteEntry").setValue(t.remoteEntry), this.formGroup.get("exposedModule").setValue(t.exposedModule), this.formGroup.get("componentName").setValue(t.componentName), this.formGroup.get("remoteName").setValue(t.remoteName); }) : (this.data.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: this.data.plugin.id, name: new f(""), label: new f(""), rule: new f(""), settings: this.fb.array([]) })), this.paneIndex = this.data.panelFormGroup.get("panes").length - 1, this.pane = new j(this.data.panelFormGroup.get("panes").at(this.paneIndex).value)), this.bindableOptions = this.data.panelFormGroup.get("panes").controls.reduce((t, i) => i.get("name").value ? [...t, i.get("name").value] : [...t], []); }
    submit() { console.log(this.formGroup.value); let t = new l(this.formGroup.value); console.log(t), this.paneGroup.get("settings").clear(), this.handler.buildSettings(t).map(o => this.attributeSerializer.convertToGroup(o)).forEach(o => this.paneGroup.get("settings").push(o)), this.dialogRef.close(); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(O), e.\u0275\u0275directiveInject(d.MatDialogRef), e.\u0275\u0275directiveInject(r.UntypedFormBuilder), e.\u0275\u0275directiveInject(x), e.\u0275\u0275directiveInject(c.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-outsider-outside-app-editor"]], inputs: { bindableOptions: "bindableOptions" }, standalone: !1, decls: 32, vars: 1, consts: [[3, "ngSubmit", "formGroup"], ["formControlName", "type", "required", ""], ["value", "module"], ["value", "script"], ["matInput", "", "formControlName", "remoteEntry", "required", ""], ["matInput", "", "formControlName", "exposedModule", "required", ""], ["matInput", "", "formControlName", "componentName", "required", ""], ["matInput", "", "formControlName", "remoteName"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", ""]], template: function (i, o) { i & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return o.submit(); }), e.\u0275\u0275elementStart(1, "div")(2, "mat-form-field")(3, "mat-label"), e.\u0275\u0275text(4, "Remote Entry"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(5, "mat-select", 1)(6, "mat-option", 2), e.\u0275\u0275text(7, "Module"), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(8, "mat-option", 3), e.\u0275\u0275text(9, "Script"), e.\u0275\u0275elementEnd()()()(), e.\u0275\u0275elementStart(10, "div")(11, "mat-form-field")(12, "mat-label"), e.\u0275\u0275text(13, "Remote Entry"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(14, "input", 4), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(15, "div")(16, "mat-form-field")(17, "mat-label"), e.\u0275\u0275text(18, "Exposed Module"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(19, "input", 5), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(20, "div")(21, "mat-form-field")(22, "mat-label"), e.\u0275\u0275text(23, "Component Name"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(24, "input", 6), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(25, "div")(26, "mat-form-field")(27, "mat-label"), e.\u0275\u0275text(28, "Remote Name"), e.\u0275\u0275elementEnd(), e.\u0275\u0275element(29, "input", 7), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(30, "button", 8), e.\u0275\u0275text(31, "Save"), e.\u0275\u0275elementEnd()()), i & 2 && e.\u0275\u0275property("formGroup", o.formGroup); }, dependencies: [M.MatOption, C.MatButton, d.MatDialogClose, p.MatInput, p.MatFormField, p.MatLabel, S.MatSelect, r.\u0275NgNoValidate, r.DefaultValueAccessor, r.NgControlStatus, r.NgControlStatusGroup, r.RequiredValidator, r.FormGroupDirective, r.FormControlName], encapsulation: 2 }); }
} return n; })(), T = (() => { class n {
    set settings(t) { this.settings$.next(t); }
    set contexts(t) { this.contexts$.next(t); }
    constructor(t) { this.attributeSerializer = t, this.objectSettings$ = new h(void 0), this.contexts$ = new h([]), this.settings$ = new h([]), this.settingsSub = this.settings$.pipe(b(i => i ? new l(this.attributeSerializer.deserializeAsObject(i)) : void 0), y(i => this.objectSettings$.next(i))).subscribe(), this.renderAppSub = this.objectSettings$.pipe(R(1), z(i => new $(o => { g(!i.type || i.type === "script" ? { remoteEntry: i.remoteEntry, remoteName: i.remoteName, exposedModule: i.exposedModule } : { remoteName: "plugin", remoteEntry: i.remoteEntry, exposedModule: i.exposedModule }).then(m => { o.next(m[i.componentName && i.componentName !== "" ? i.componentName : "default"]), o.complete(); }); }).pipe(b(o => ({ s: i, c: o })))), y(({ s: i, c: o }) => { if (this.viewContainer.clear(), !i.type || i.type === "script") {
        let m = this.viewContainer.createComponent(V);
        m.instance.component = o;
    }
    else
        this.viewContainer.createComponent(o); })).subscribe(); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275directiveInject(c.AttributeSerializerService)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["druid-outsider-outside-app-renderer"]], viewQuery: function (i, o) { if (i & 1 && e.\u0275\u0275viewQuery(q, 7, w), i & 2) {
            let m;
            e.\u0275\u0275queryRefresh(m = e.\u0275\u0275loadQuery()) && (o.viewContainer = m.first);
        } }, inputs: { settings: "settings", contexts: "contexts" }, standalone: !1, decls: 2, vars: 0, consts: [["appContainer", ""]], template: function (i, o) { i & 1 && e.\u0275\u0275elementContainer(0, null, 0); }, encapsulation: 2 }); }
} return n; })(), P = ({ handler: n }) => new A({ id: "outside_app", title: "Outside App", selectionComponent: void 0, editorComponent: _, renderComponent: T, handler: n }), re = (() => { class n {
    constructor(t, i) { t.register(P({ handler: i })); }
    static { this.\u0275fac = function (i) { return new (i || n)(e.\u0275\u0275inject(v.ContentPluginManager), e.\u0275\u0275inject(x)); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: n }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ imports: [E, G, I] }); }
} return n; })();
export { x as OutsideAppContentHandler, _ as OutsideAppEditorComponent, T as OutsideAppRendererComponent, l as OutsideAppSettings, re as OutsiderModule };
//# sourceMappingURL=_rollthecloudinc_outsider.OYeCcHC0-E.js.map
