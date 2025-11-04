import { a as I } from "@nf-internal/chunk-AEHZCYLY";
import { a as F } from "@nf-internal/chunk-ISPTYA4B";
import "@nf-internal/chunk-V5FFR4BO";
import { a as h, b as y, h as w } from "@nf-internal/chunk-J4XOFOAH";
var O = w(I(), 1), k = w(F(), 1);
import * as g from "@angular/core";
import "@angular/core";
import * as j from "@rollthecloudinc/crud";
import { CrudAdaptorPlugin as C, CrudModule as V } from "@rollthecloudinc/crud";
import { Observable as m, of as u, forkJoin as x } from "rxjs";
import { switchMap as f, map as c, concatMap as N, filter as b, reduce as A, defaultIfEmpty as D } from "rxjs/operators";
import { keys as J, getMany as E, set as M, setMany as K } from "idb-keyval";
import { isPlatformBrowser as R } from "@angular/common";
import * as P from "@rollthecloudinc/dparam";
var _ = s => new C({ id: "idb_keyval", title: "Idb Keyval", create: ({ object: l, identity: a, params: i, parentObject: r }) => u({ success: !1 }).pipe(f(() => a({ object: l, parentObject: r }).pipe(c(({ identity: n }) => ({ identity: n })))), f(({ identity: n }) => i && Object.keys(i).length !== 0 ? x(Object.keys(i).map(e => s.paramValue(i[e], new Map).pipe(c(t => ({ [e]: t }))))).pipe(c(e => e.reduce((t, o) => h(h({}, t), o), {})), c(e => ({ identity: n, options: e }))) : u({ identity: n, options: {} })), c(({ identity: n, options: e }) => ({ name: e.prefix + n })), f(({ name: n }) => new m(e => { M(n, l).then(t => { console.log("idb write suceeded"), console.log(t), e.next({ success: !0 }), e.complete(); }).catch(t => { console.log("idb write failed"), console.log(t), e.next({ success: !1 }), e.complete(); }); }))), read: ({}) => u({ success: !1 }), update: ({ object: l, identity: a, params: i, parentObject: r }) => u({ success: !1 }).pipe(f(() => a({ object: l, parentObject: r }).pipe(c(({ identity: n }) => ({ identity: n })))), f(({ identity: n }) => i && Object.keys(i).length !== 0 ? x(Object.keys(i).map(e => s.paramValue(i[e], new Map).pipe(c(t => ({ [e]: t }))))).pipe(c(e => e.reduce((t, o) => h(h({}, t), o), {})), c(e => ({ identity: n, options: e }))) : u({ identity: n, options: {} })), c(({ identity: n, options: e }) => ({ name: e.prefix + n })), f(({ name: n }) => new m(e => { M(n, l).then(t => { console.log("idb write suceeded"), console.log(t), e.next({ success: !0 }), e.complete(); }).catch(t => { console.log("idb write failed"), console.log(t), e.next({ success: !1 }), e.complete(); }); }))), delete: ({}) => u({ success: !1 }), query: ({ params: l, rule: a, identity: i }) => s.paramValues(new Map(Object.keys(l).map(r => [r, l[r]]))).pipe(f(r => new m(n => { J().then(e => e.filter(t => `${t}`.indexOf(r.get("prefix")) === 0)).then(e => E(e)).then(e => { n.next({ entities: e, success: !0 }), n.complete(); }); })), f(r => a ? new m(n => { let e = new O.Engine; e.addOperator("startsWith", (t, o) => typeof o == "string" && typeof t == "string" && o.indexOf(t) === 0), e.addOperator("term||wildcard", (t, o) => { let p = JSON.parse(decodeURIComponent(o)), d = k.JSONPath({ path: "$.term.*.value.@string()", json: p, flatten: !0 }); return p.wildcard !== void 0 || p.term && d.lengh !== 0 && d[0] === t; }), e.addRule(a), e.addFact("identity", (t, o) => new m(p => { o.factValue("entity").then(d => i({ object: d }).pipe(c(({ identity: v }) => v)).toPromise()).then(d => { p.next(d), p.complete(); }); }).toPromise(), { cache: !1 }), u(...r.entities).pipe(N(t => new m(o => { e.removeFact("entity"), e.addFact("entity", t, { cache: !1 }), e.run().then(p => { o.next([t, p.events.findIndex(d => d.type === "visible") > -1]), o.complete(); }); })), b(([t, o]) => o), c(([t]) => t), A((t, o) => [...t, o], []), D([])).subscribe(t => { n.next(y(h({}, r), { entities: t })), n.complete(); }); }) : u(r))) }), G = ({ data: s, key: l }) => a => () => new m(i => { if (R(a)) {
    let r = s.map(n => [l({ data: n }), n]);
    K(r).then(() => { console.log("data loaded into idb"), i.next(), i.complete(); }).catch(() => { console.log("data load into idb failure"), i.next(), i.complete(); });
}
else
    i.next(), i.complete(); }), H = (() => { class s {
    constructor(a, i) { a.register(_(i)); }
    static { this.\u0275fac = function (i) { return new (i || s)(g.\u0275\u0275inject(j.CrudAdaptorPluginManager), g.\u0275\u0275inject(P.ParamEvaluatorService)); }; }
    static { this.\u0275mod = g.\u0275\u0275defineNgModule({ type: s }); }
    static { this.\u0275inj = g.\u0275\u0275defineInjector({ imports: [V] }); }
} return s; })();
export { H as KeyvalModule, _ as idbEntityCrudAdaptorPluginFactory, G as initializeIdbDataFactory };
