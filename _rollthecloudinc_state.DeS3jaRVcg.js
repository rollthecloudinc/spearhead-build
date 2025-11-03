import "@nf-internal/chunk-GL2BOVXA";
import * as e from "@angular/core";
import { forwardRef as h } from "@angular/core";
import { CommonModule as w } from "@angular/common";
import * as n from "@angular/forms";
import { Validators as b, NG_VALUE_ACCESSOR as j, NG_VALIDATORS as M, FormsModule as D, ReactiveFormsModule as E } from "@angular/forms";
import { BehaviorSubject as F, of as N } from "rxjs";
import { debounceTime as I, distinctUntilChanged as V, filter as $, map as p, tap as f } from "rxjs/operators";
import { createSelector as B, select as O } from "@ngrx/store";
import * as v from "@rollthecloudinc/attributes";
import { AttributeValue as y } from "@rollthecloudinc/attributes";
import * as c from "@ngrx/data";
import * as x from "@rollthecloudinc/bridge";
import { BridgeBuilderPlugin as A, PublicApiBridgeService as P } from "@rollthecloudinc/bridge";
import * as G from "@rollthecloudinc/context";
import { ContextPlugin as T } from "@rollthecloudinc/context";
import { NoopDataService as z } from "@rollthecloudinc/utils";
var C = (() => { class o {
    set context(t) { this.context$.next(t); }
    constructor(t, i) { this.fb = t, this.controlContainer = i, this.context$ = new F(void 0), this.formGroup = this.fb.group({ value: this.fb.control("", [b.required]) }), this.stateCtrl = this.fb.control(""), this.stateCtrlSub = this.stateCtrl.valueChanges.pipe(I(250), V(), $(r => { try {
        return JSON.parse(r), !0;
    }
    catch {
        return !1;
    } }), p(r => JSON.parse(r))).subscribe(r => { console.log("write state"), console.log(r), this.formGroup.get("value").setValue(r); }), this.onTouched = () => { }; }
    ngOnInit() { this.context$.subscribe(t => { t ? this.stateCtrl.setValue(JSON.stringify(t.data.value)) : this.stateCtrl.setValue(""); }); }
    writeValue(t) { t && this.formGroup.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.formGroup.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(t) { return this.formGroup.valid ? null : { invalidForm: { valid: !1, message: "source is invalid" } }; }
    static { this.\u0275fac = function (i) { return new (i || o)(e.\u0275\u0275directiveInject(n.UntypedFormBuilder), e.\u0275\u0275directiveInject(n.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: o, selectors: [["classifieds-ui-context-state-form"]], inputs: { context: "context" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: j, useExisting: h(() => o), multi: !0 }, { provide: M, useExisting: h(() => o), multi: !0 }])], decls: 2, vars: 2, consts: [[3, "formGroup"], ["cols", "40", "rows", "20", "required", "", 3, "formControl"]], template: function (i, r) { i & 1 && (e.\u0275\u0275elementStart(0, "div", 0), e.\u0275\u0275element(1, "textarea", 1), e.\u0275\u0275elementEnd()), i & 2 && (e.\u0275\u0275property("formGroup", r.formGroup), e.\u0275\u0275advance(), e.\u0275\u0275property("formControl", r.stateCtrl)); }, dependencies: [n.DefaultValueAccessor, n.NgControlStatus, n.NgControlStatusGroup, n.RequiredValidator, n.FormControlDirective, n.FormGroupDirective], encapsulation: 2 }); }
} return o; })(), R = (() => { class o {
    constructor(t, i) { this.fb = t, this.controlContainer = i; }
    ngOnInit() { this.controlContainer.control.addControl("adaptor", this.fb.control("data", b.required)), this.controlContainer.control.addControl("data", this.fb.control("")); }
    static { this.\u0275fac = function (i) { return new (i || o)(e.\u0275\u0275directiveInject(n.UntypedFormBuilder), e.\u0275\u0275directiveInject(n.ControlContainer)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: o, selectors: [["classifieds-ui-context-state-editor"]], viewQuery: function (i, r) { if (i & 1 && e.\u0275\u0275viewQuery(C, 7), i & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (r.contextStateFormComp = a.first);
        } }, inputs: { context: "context" }, standalone: !1, decls: 2, vars: 2, consts: [[3, "formGroup"], ["formControlName", "data", 3, "context"]], template: function (i, r) { i & 1 && (e.\u0275\u0275elementContainerStart(0, 0), e.\u0275\u0275element(1, "classifieds-ui-context-state-form", 1), e.\u0275\u0275elementContainerEnd()), i & 2 && (e.\u0275\u0275property("formGroup", r.controlContainer.control), e.\u0275\u0275advance(), e.\u0275\u0275property("context", r.context)); }, dependencies: [n.NgControlStatus, n.NgControlStatusGroup, n.FormGroupDirective, n.FormControlName, C], encapsulation: 2 }); }
} return o; })(), S = (() => { class o {
    get entityCollectionService() { return this.es.getEntityCollectionService("GlobalState"); }
    constructor(t, i) { this.attributeSerializer = t, this.es = i; }
    resolve(t, i, r) { let a = s => s.entities, d = s => B(a, g => g[s] ? g[s] : void 0); console.log("hookup globalstate"), console.log(i); let u = r && r.has("name") && r.get("name") && r.get("name") !== null && r.get("name") !== "" ? r.get("name") : void 0; return u ? this.entityCollectionService.collection$.pipe(O(d(u)), p(s => s ? this.attributeSerializer.deserialize(s.value) : i.value ? i.value : {}), p(s => s.root ? s.root : s), f(s => { console.log("resolve globalstate"), console.log(s); })) : N(i.value ? i.value : {}).pipe(f(s => { console.log("resolve default globalstate"), console.log(s); })); }
    static { this.\u0275fac = function (i) { return new (i || o)(e.\u0275\u0275inject(v.AttributeSerializerService), e.\u0275\u0275inject(c.EntityServices)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac }); }
} return o; })(), m = class {
    constructor(l) { l && (this.id = l.id, this.value = new y(l.value)); }
}, q = o => { let l = new y; return new T({ id: "state", name: "state", title: "State", baseObject: l, resolver: o, editorComponent: R }); }, Q = (o, l) => new A({ id: "state", title: "State", build: () => { P.prototype.writeState = t => new Promise(i => { o.getEntityCollectionService("GlobalState").upsert(new m({ id: t.id, value: l.serialize(t.value, "root") })).pipe(f(a => i(a))).subscribe(); }); } }), U = { GlobalState: { entityName: "GlobalState" } }, ne = (() => { class o {
    constructor(t, i, r, a, d, u, s) { t.registerMetadataMap(U), i.registerService("GlobalState", new z("GlobalState")), r.register(q(s)), u.register(Q(a, d)); }
    static { this.\u0275fac = function (i) { return new (i || o)(e.\u0275\u0275inject(c.EntityDefinitionService), e.\u0275\u0275inject(c.EntityDataService), e.\u0275\u0275inject(G.ContextPluginManager), e.\u0275\u0275inject(c.EntityServices), e.\u0275\u0275inject(v.AttributeSerializerService), e.\u0275\u0275inject(x.BridgeBuilderPluginManager), e.\u0275\u0275inject(S)); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: o }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ providers: [S], imports: [w, D, E] }); }
} return o; })();
export { ne as StateModule };
//# sourceMappingURL=_rollthecloudinc_state.DeS3jaRVcg.js.map
