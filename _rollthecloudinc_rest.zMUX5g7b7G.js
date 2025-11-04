import { a as h, b as C } from "@nf-internal/chunk-J4XOFOAH";
import * as L from "@angular/common";
import { CommonModule as X } from "@angular/common";
import * as m from "@angular/forms";
import { Validators as V, NG_VALUE_ACCESSOR as Y, NG_VALIDATORS as ee, FormsModule as te, ReactiveFormsModule as re } from "@angular/forms";
import * as s from "@angular/core";
import { EventEmitter as ie, forwardRef as I } from "@angular/core";
import { MaterialModule as se } from "@rollthecloudinc/material";
import * as F from "@rollthecloudinc/datasource";
import { Renderer as oe, DatasourcePlugin as ne, Rest as ae, DatasourceEditorOptions as ce, Dataset as j, DatasourceModule as le } from "@rollthecloudinc/datasource";
import * as E from "angular-split";
import { AngularSplitModule as ue } from "angular-split";
import * as J from "ngx-json-viewer";
import { NgxJsonViewerModule as pe } from "ngx-json-viewer";
import * as T from "@rollthecloudinc/snippet";
import { Snippet as me, SnippetModule as de } from "@rollthecloudinc/snippet";
import * as H from "@rollthecloudinc/token";
import { TokenModule as fe } from "@rollthecloudinc/token";
import { BehaviorSubject as R, Subject as G, of as y, combineLatest as he, Observable as ge, iif as ye, throwError as ve } from "rxjs";
import { map as d, tap as w, filter as N, switchMap as g, catchError as U, takeUntil as Se, debounceTime as x, delay as P, timeout as we } from "rxjs/operators";
import k from "qs";
import * as $ from "@rollthecloudinc/dparam";
import { Param as be, DparamModule as Ce } from "@rollthecloudinc/dparam";
import * as K from "@angular/material/autocomplete";
import * as O from "@angular/material/input";
import * as _ from "@angular/material/select";
import * as M from "@rollthecloudinc/attributes";
import { ContentBinding as De } from "@rollthecloudinc/content";
import * as Z from "@rollthecloudinc/crud";
import { CrudAdaptorPlugin as $e, CrudModule as xe } from "@rollthecloudinc/crud";
import * as z from "@angular/common/http";
import { HttpParams as Pe } from "@angular/common/http";
import * as Q from "@rollthecloudinc/durl";
import * as A from "@ngrx/data";
import { DefaultHttpUrlGenerator as Fe, normalizeRoot as Ee } from "@ngrx/data";
import * as W from "@rollthecloudinc/context";
function Te(a, p) { if (a & 1 && s.\u0275\u0275element(0, "ngx-json-viewer", 12), a & 2) {
    let i = s.\u0275\u0275nextContext();
    s.\u0275\u0275property("json", i.jsonData)("expanded", !1);
} }
var b = class {
    constructor(p) { this.params = [], p && (this.url = p.url, this.method = p.method ? p.method : void 0, p.renderer !== void 0 && (this.renderer = new oe(p.renderer)), p.params !== void 0 && (this.params = p.params.map(i => new be(i))), p.body && (this.body = new me(p.body))); }
}, Oe = (() => { class a {
    set restSource(i) { this.restSource$.next(i); }
    constructor(i, o, t) { this.fb = i, this.datasourceApi = o, this.tokenizerService = t, this.dataChange = new ie, this.contexts = [], this.sourceForm = this.fb.group({ url: this.fb.control("", V.required), params: this.fb.control([]), body: this.fb.control(""), method: this.fb.control("get", [V.required]) }), this.restSource$ = new R(new b), this.urlParams$ = new R({}), this.bodyParams$ = new R({}), this.componentDestroyed = new G, this.refreshData$ = new G, this.refreshSubscription = this.refreshData$.pipe(d(() => this.generateUrl()), w(e => console.log("URL Generated:", e)), N(e => e && e.trim() !== ""), g(e => { let r = this.sourceForm.get("method").value, n = this.sourceForm.get("body").value?.content; return (r === "post" ? this.datasourceApi.postData({ url: e, body: n }) : this.datasourceApi.getData(e)).pipe(U(u => (console.error(u), y([])))); }), Se(this.componentDestroyed)).subscribe(e => { this.jsonData = e, this.dataChange.emit(e); }), this.urlChangeSub = this.sourceForm.get("url").valueChanges.pipe(x(500), N(e => e && e.trim() !== ""), d(e => [e, e.indexOf("?")]), d(([e, r]) => [r > -1 ? e.substring(0, r) : e, r > -1 ? e.substring(r + 1) : ""])).subscribe(([e, r]) => { let n = e.split("/").reduce((u, l, v) => l.indexOf(":") === 0 ? C(h({}, u), { [l.substr(1)]: l }) : u, {}), c = h(h({}, n), k.parse(r)); console.log("params parsed", c), this.urlParams$.next(c); }), this.bodyChangeSub = this.sourceForm.get("body").valueChanges.pipe(x(500), w(e => { console.log("body change", e); let r = this.parseBody(e.content); this.bodyParams$.next(h({}, r)); })).subscribe(), this.paramsChangesSub = he([this.urlParams$, this.bodyParams$]).pipe(x(500), w(([e, r]) => { this.paramsParsed = h(h({}, e), r); })).subscribe(), this.restSourceSub = this.restSource$.pipe(w(e => { e ? (this.sourceForm.get("url").setValue(e.url), this.sourceForm.get("method").setValue(e.method ? e.method : ""), this.sourceForm.get("body").setValue(e.body ? C(h({}, e.body), { jsScript: "" }) : "")) : (this.sourceForm.get("url").setValue(""), this.sourceForm.get("method").setValue(""), this.sourceForm.get("body").setValue("")); })).subscribe(), this.onTouched = () => { }; }
    ngOnInit() { this.sourceForm.valueChanges.pipe(x(1e3)).subscribe(() => { console.log("refresh data"), this.refreshData$.next(void 0); }); }
    ngOnDestroy() { this.componentDestroyed.next(void 0), this.componentDestroyed.complete(); }
    parseBody(i) { let o = /\[:([a-zA-Z0-9_]+)\]/g, t = {}; function e(r) { if (typeof r == "string") {
        let n;
        for (; (n = o.exec(r)) !== null;) {
            let c = n[1];
            t[c] = `:${c}`;
        }
    }
    else if (Array.isArray(r))
        for (let n of r)
            e(n);
    else if (typeof r == "object" && r !== null)
        for (let n in r)
            r.hasOwnProperty(n) && e(r[n]); } return e(i), t; }
    writeValue(i) { i && this.sourceForm.setValue(i, { emitEvent: !1 }); }
    registerOnChange(i) { this.sourceForm.valueChanges.subscribe(i); }
    registerOnTouched(i) { this.onTouched = i; }
    setDisabledState(i) { i ? this.sourceForm.disable() : this.sourceForm.enable(); }
    validate(i) { return this.sourceForm.valid ? null : { invalidForm: { valid: !1, message: "source is invalid" } }; }
    generateUrl() { console.log("generate url"); let i = this.sourceForm.get("url").value, [o, t] = i ? i.split("?", 2) : ["", ""], e = k.parse(t), r = {}, n = o.split("/"), c = n.length, u = [], l = 0; for (let f = 0; f < c; f++)
        if (n[f].indexOf(":") === 0) {
            if (!this.sourceForm.get("params").value[l])
                return "";
            let S = this.sourceForm.get("params").value[l].mapping;
            u.push(S.value.type === "static" ? S.value.value : S.value.testValue), l++;
        }
        else
            u.push(n[f]); for (let f in e)
        if (typeof e[f] == "string" && e[f].indexOf(":") > -1) {
            if (!this.sourceForm.get("params").value[l])
                return "";
            let S = this.sourceForm.get("params").value[l].mapping;
            r[f] = S.type === "static" ? S.value : S.testValue, l++;
        } let v = u.join("/") + (t !== "" ? "?" + k.stringify(h(h({}, e), r)) : ""); return console.log(v), v; }
    onDataChange(i) { this.tokens = this.tokenizerService.generateGenericTokens(i[0]); }
    static { this.\u0275fac = function (o) { return new (o || a)(s.\u0275\u0275directiveInject(m.UntypedFormBuilder), s.\u0275\u0275directiveInject(F.DatasourceApiService), s.\u0275\u0275directiveInject(H.TokenizerService)); }; }
    static { this.\u0275cmp = s.\u0275\u0275defineComponent({ type: a, selectors: [["classifieds-ui-rest-source-form"]], inputs: { restSource: "restSource", contexts: "contexts" }, outputs: { dataChange: "dataChange" }, standalone: !1, features: [s.\u0275\u0275ProvidersFeature([{ provide: Y, useExisting: I(() => a), multi: !0 }, { provide: ee, useExisting: I(() => a), multi: !0 }])], decls: 19, vars: 7, consts: [["direction", "horizontal", 3, "formGroup"], ["as-split-area", "", "size", "50"], ["required", "", "formControlName", "method"], ["value", "get"], ["value", "post"], ["value", "put"], ["value", "delete"], ["matInput", "", "placeholder", "Url", "formControlName", "url", "required", ""], ["formControlName", "body", "rows", "10", "cols", "40", 3, "rootForm", "tokens"], ["formControlName", "params", 3, "params", "paramValues", "contexts"], ["size", "50"], [3, "json", "expanded", 4, "ngIf"], [3, "json", "expanded"]], template: function (o, t) { o & 1 && (s.\u0275\u0275elementStart(0, "as-split", 0)(1, "div", 1)(2, "div")(3, "mat-form-field")(4, "mat-select", 2)(5, "mat-option", 3), s.\u0275\u0275text(6, "GET"), s.\u0275\u0275elementEnd(), s.\u0275\u0275elementStart(7, "mat-option", 4), s.\u0275\u0275text(8, "POST"), s.\u0275\u0275elementEnd(), s.\u0275\u0275elementStart(9, "mat-option", 5), s.\u0275\u0275text(10, "PUT"), s.\u0275\u0275elementEnd(), s.\u0275\u0275elementStart(11, "mat-option", 6), s.\u0275\u0275text(12, "DELETE"), s.\u0275\u0275elementEnd()()(), s.\u0275\u0275elementStart(13, "mat-form-field"), s.\u0275\u0275element(14, "input", 7), s.\u0275\u0275elementEnd()(), s.\u0275\u0275element(15, "classifieds-ui-snippet-form", 8)(16, "classifieds-ui-params-form", 9), s.\u0275\u0275elementEnd(), s.\u0275\u0275elementStart(17, "as-split-area", 10), s.\u0275\u0275template(18, Te, 1, 2, "ngx-json-viewer", 11), s.\u0275\u0275elementEnd()()), o & 2 && (s.\u0275\u0275property("formGroup", t.sourceForm), s.\u0275\u0275advance(15), s.\u0275\u0275property("rootForm", !1)("tokens", t.tokens), s.\u0275\u0275advance(), s.\u0275\u0275property("params", t.paramsParsed)("paramValues", t.restSource$.value.params)("contexts", t.contexts), s.\u0275\u0275advance(2), s.\u0275\u0275property("ngIf", t.jsonData)); }, dependencies: [L.NgIf, m.DefaultValueAccessor, m.NgControlStatus, m.NgControlStatusGroup, m.RequiredValidator, m.FormGroupDirective, m.FormControlName, K.MatOption, O.MatInput, O.MatFormField, _.MatSelect, E.SplitComponent, E.SplitAreaDirective, J.NgxJsonViewerComponent, T.SnippetFormComponent, $.ParamsFormComponent], encapsulation: 2 }); }
} return a; })(), Me = (() => { class a {
    set settings(i) { this.restSource = i ? new b(this.attributeSerializer.deserializeAsObject(i)) : void 0; }
    constructor(i, o) { this.attributeSerializer = i, this.controlContainer = o, this.contexts = []; }
    static { this.\u0275fac = function (o) { return new (o || a)(s.\u0275\u0275directiveInject(M.AttributeSerializerService), s.\u0275\u0275directiveInject(m.ControlContainer)); }; }
    static { this.\u0275cmp = s.\u0275\u0275defineComponent({ type: a, selectors: [["classifieds-ui-rest-datasource"]], inputs: { settings: "settings", contexts: "contexts" }, standalone: !1, decls: 2, vars: 3, consts: [[3, "formGroup"], ["formControlName", "settings", 3, "restSource", "contexts"]], template: function (o, t) { o & 1 && (s.\u0275\u0275elementContainerStart(0, 0), s.\u0275\u0275element(1, "classifieds-ui-rest-source-form", 1), s.\u0275\u0275elementContainerEnd()), o & 2 && (s.\u0275\u0275property("formGroup", t.controlContainer.control), s.\u0275\u0275advance(), s.\u0275\u0275property("restSource", t.restSource)("contexts", t.contexts)); }, dependencies: [m.NgControlStatus, m.NgControlStatusGroup, m.FormGroupDirective, m.FormControlName, Oe], encapsulation: 2 }); }
} return a; })(), Ae = (a, p, i) => new ne({ id: "rest", title: "Rest", editor: Me, fetch: ({ settings: o, metadata: t }) => a.fetchDataset({ settings: o, metadata: t }), editorOptions: () => y(new ce({ fullscreen: !0 })), getBindings: ({ settings: o, metadata: t }) => y([]).pipe(d(() => i.deserializeAsObject(o)), d(e => new ae(e)), g(e => p.extractContexts(e.params)), d(e => e.map(r => new De({ id: r, type: "context" })))) }), Re = (a, p, i, o) => new $e({ id: "rest", title: "Rest", create: ({ object: t, params: e }) => y({ success: !1 }).pipe(g(() => a.paramValues(new Map(Object.keys(e).map(r => [r, e[r]])))), g(r => D({ method: "POST", url: i.entityResource(r.get("entityName"), r.has("root") ? r.get("root") : o.root ? o.root : "api", !0), data: t || new Error("No entity to add"), params: r, http: p })), d(() => ({ success: !0, entity: t }))), read: ({}) => y({ success: !1 }), update: ({ object: t, identity: e, params: r, parentObject: n }) => y({ success: !1 }).pipe(g(() => e({ object: t, parentObject: n })), g(({ identity: c }) => a.paramValues(new Map(Object.keys(r).map(u => [u, r[u]]))).pipe(d(u => ({ identity: c, options: u })))), g(({ identity: c, options: u }) => D({ method: "PUT", url: i.entityResource(u.get("entityName"), u.has("root") ? u.get("root") : o.root ? o.root : "api", !0) + `${c}`, data: t || new Error("No entity to add"), params: u, http: p })), d(() => ({ success: !0, entity: t }))), delete: ({}) => y({ success: !1 }), query: ({ params: t, rule: e }) => y({ success: !1 }).pipe(g(() => a.paramValues(new Map(Object.keys(t).map(r => [r, t[r]])))), g(r => new ge(n => { let c = e ? e.conditions.all.reduce((l, v) => [...l, ...v.any.filter(f => f.fact !== "identity").map(f => `${f.path.substr(2)}=${f.value}`)], []) : [], u = e ? e.conditions.all.reduce((l, v) => l || v.any.find(f => f.fact === "identity"), void 0) : void 0; n.next({ identityFact: u, options: r, query: c.length > 0 ? new Pe({ fromString: c.join("&") }) : void 0, path: u ? u.value : "" }), n.complete(); })), g(({ options: r, query: n, path: c, identityFact: u }) => ye(() => !!u, D({ method: "GET", url: i.entityResource(r.get("entityName"), r.has("root") ? r.get("root") : o.root ? o.root : "api", !0) + c, options: { params: n }, params: r, http: p }).pipe(d(l => ({ success: !0, entities: Array.isArray(l) ? l : [l] }))), D({ method: "GET", url: i.collectionResource(r.get("entityName"), r.has("root") ? r.get("root") : o.root ? o.root : "api") + c, options: { params: n }, params: r, http: p }).pipe(d(l => ({ success: !0, entities: l })))))) }), D = ({ method: a, url: p, data: i, options: o, params: t, http: e }) => { let r = { method: a, url: p, data: i, options: o }; if (i instanceof Error)
    return y([]); let n; switch (a) {
    case "DELETE": {
        n = e.delete(p, o), t.has("saveDelay") && (n = n.pipe(P(+t.get("saveDelay"))));
        break;
    }
    case "GET": {
        let c = t.has("suffix") ? p + t.get("suffix") : p;
        n = e.get(c, o), t.has("getDelay") && (n = n.pipe(P(+t.get("getDelay"))));
        break;
    }
    case "POST": {
        n = e.post(p, i, o), t.has("saveDelay") && (n = n.pipe(P(+t.get("saveDelay"))));
        break;
    }
    case "PUT": {
        n = e.put(p, i, o), t.has("saveDelay") && (n = n.pipe(P(+t.get("saveDelay"))));
        break;
    }
    default: {
        let c = new Error("Unimplemented HTTP method, " + a);
        n = ve(c);
    }
} return t.has("timeout") && (n = n.pipe(we(+t.get("timeout") + +t.get("saveDelay")))), n.pipe(U(() => y([]))); }, q = (() => { class a {
    constructor(i, o, t, e, r) { this.attrbuteSerializer = i, this.http = o, this.snippetParserService = t, this.urlGenerator = e, this.paramsEvaluatorService = r; }
    fetchDataset({ settings: i, metadata: o }) { return console.log("metadata", o), y(new j).pipe(w(() => console.log("START rest fetch")), d(() => this.attrbuteSerializer.deserializeAsObject(i)), d(t => new b(t)), g(t => this.urlGenerator.getUrl(t.url, t.params, o).pipe(d(e => [new b(C(h({}, t), { url: e })), t]))), g(([t, e]) => { if (e.method.toUpperCase() === "POST" && e.body && e.body.contentType === "application/json") {
        let r = this.parseUrl(e.url), n = e.body && e.body.contentType === "application/json" ? this.parseBody(e.body.content) : {}, c = h(h({}, r), n), u = this.mapKeyToParam(c, e.params || []);
        return Object.keys(r).forEach(l => u.delete(l)), this.paramsEvaluatorService.paramValues(u).pipe(w(l => console.log("Evaluated body params", l)), d(l => { let v = JSON.parse(e.body.content); return v = this.replaceTokensInJson(v, l), v; }), d(l => [t, l]));
    }
    else
        return y([t, {}]); }), N(([t]) => t.url && t.url.trim() !== "" && t.url.indexOf("http") > -1), g(([t, e]) => D(C(h({ url: t.url, method: t.method.toUpperCase() === "POST" ? "POST" : "GET" }, t.method.toUpperCase() === "POST" && t.body && t.body.contentType === "application/json" ? { data: e } : {}), { http: this.http, params: new Map })).pipe(U(() => y([])), d(r => Array.isArray(r) ? r : [r]), d(r => new j({ results: r })))), w(() => console.log("END rest fetch"))); }
    parseUrl(i) { let o = /:([a-zA-Z0-9_]+)/g, t = {}, e; for (; (e = o.exec(i)) !== null;) {
        let r = e[1];
        t[r] = `:${r}`;
    } return t; }
    parseBody(i) { let o = /\[:([a-zA-Z0-9_]+)\]/g, t = {}; function e(r) { if (typeof r == "string") {
        let n;
        for (; (n = o.exec(r)) !== null;) {
            let c = n[1];
            t[c] = `:${c}`;
        }
    }
    else if (Array.isArray(r))
        for (let n of r)
            e(n);
    else if (typeof r == "object" && r !== null)
        for (let n in r)
            r.hasOwnProperty(n) && e(r[n]); } return e(i), t; }
    mapKeyToParam(i, o) { let t = new Map; return Object.keys(i).forEach((r, n) => { n < o.length && t.set(r, o[n]); }), t; }
    replaceTokensInJson(i, o) { if (typeof i == "string") {
        for (let [t, e] of o)
            i = i.replace(new RegExp(`\\[:${t}\\]`, "g"), e.toString()), i = i.replace(new RegExp(`:${t}`, "g"), e.toString());
        return i;
    }
    else {
        if (Array.isArray(i))
            return i.map(t => this.replaceTokensInJson(t, o));
        if (typeof i == "object" && i !== null) {
            let t = {};
            for (let e in i)
                if (i.hasOwnProperty(e)) {
                    let r = e;
                    for (let [n, c] of o)
                        r = r.replace(new RegExp(`\\[:${n}\\]`, "g"), c.toString()), r = r.replace(new RegExp(`:${n}`, "g"), c.toString());
                    t[r] = this.replaceTokensInJson(i[e], o);
                }
            return t;
        }
        else
            return i;
    } }
    static { this.\u0275fac = function (o) { return new (o || a)(s.\u0275\u0275inject(M.AttributeSerializerService), s.\u0275\u0275inject(z.HttpClient), s.\u0275\u0275inject(T.SnippetParserService), s.\u0275\u0275inject(Q.UrlGeneratorService), s.\u0275\u0275inject($.ParamEvaluatorService)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: a, factory: a.\u0275fac }); }
} return a; })(), B = (() => { class a extends Fe {
    constructor(i) { super(i), this.pluralizer2 = i; }
    getResourceUrls(i, o, t = !1) { let e = t ? o : Ee(o); return { entityResourceUrl: `${e}/${i}/`.toLowerCase(), collectionResourceUrl: `${e}/${this.pluralizer2.pluralize(i)}/`.toLowerCase() }; }
    static { this.\u0275fac = function (o) { return new (o || a)(s.\u0275\u0275inject(A.Pluralizer)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: a, factory: a.\u0275fac }); }
} return a; })(), rt = (() => { class a {
    constructor(i, o, t, e, r, n, c, u, l) { i.register(Ae(o, t, e)), r.register(Re(n, c, u, l)); }
    static { this.\u0275fac = function (o) { return new (o || a)(s.\u0275\u0275inject(F.DatasourcePluginManager), s.\u0275\u0275inject(q), s.\u0275\u0275inject(W.ParamContextExtractorService), s.\u0275\u0275inject(M.AttributeSerializerService), s.\u0275\u0275inject(Z.CrudAdaptorPluginManager), s.\u0275\u0275inject($.ParamEvaluatorService), s.\u0275\u0275inject(z.HttpClient), s.\u0275\u0275inject(B), s.\u0275\u0275inject(A.DefaultDataServiceConfig)); }; }
    static { this.\u0275mod = s.\u0275\u0275defineNgModule({ type: a }); }
    static { this.\u0275inj = s.\u0275\u0275defineInjector({ providers: [q, B], imports: [X, te, re, se, ue, pe, de, le, fe, xe, Ce] }); }
} return a; })();
export { b as Rest, Me as RestDatasourceComponent, rt as RestModule, Oe as RestSourceFormComponent };
