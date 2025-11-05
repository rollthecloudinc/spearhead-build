import { a as x, b as v } from "@nf-internal/chunk-GL2BOVXA";
import * as b from "@angular/core";
import { DOCUMENT as j } from "@angular/core";
import A from "dom-element-path";
import { camelize as E, dasherize as X, underscore as k } from "inflected";
import J from "deepmerge-json";
import { Subject as M, filter as I, debounceTime as S, switchMap as V, tap as D, Observable as N, catchError as P, of as L } from "rxjs";
var Y = (() => { class s {
    static { this.\u0275fac = function (e) { return new (e || s); }; }
    static { this.\u0275mod = b.\u0275\u0275defineNgModule({ type: s }); }
    static { this.\u0275inj = b.\u0275\u0275defineInjector({}); }
} return s; })(), z = ({ selector: s, document: R }) => { let n = R.createDocumentFragment(); if (!s || s.indexOf("undefined") !== -1)
    return !1; try {
    n.querySelector(s);
}
catch {
    return !1;
} return !0; };
var K = /\/\*[\s\S]*?\*\//g, T = /([^\:]+):([^\;]*);/, Z = /(\/\*[\s\S]*?\*\/)|([^\s\;\{\}][^\;\{\}]*(?=\{))|(\})|([^\;\{\}]+\;(?!\s*\*\/))/gim, $ = function (s) { return typeof s > "u" || s.length == 0 || s == null; }, q = { ordered: !1, comments: !1, stripComments: !1, split: !1 }, ee = (() => {
    class s {
        constructor(n) { this.document = n, this.mutate$ = new M, this.mutated$ = new M, this.mutateSub = this.mutate$.pipe(I(({ record: e }) => e.type === "attributes" && e.attributeName === "style" && !!e.target), S(2e3), V(({ record: e, overlay: c }) => this.mapRecord({ record: e, overlay: c })), D(({ stylesheet: e }) => this.mutated$.next({ stylesheet: e }))).subscribe(); }
        stylize({ targetNode: n }) { let e = new Map, c = new MutationObserver(m => { m.forEach(a => { this.mutate$.next({ record: a, overlay: e }); }); }), u = { childList: !0, attributes: !0, subtree: !0, attributeFilter: ["style"], attributeOldValue: !0 }; c.observe(n, u); }
        mapRecord({ record: n, overlay: e }) {
            return new N(c => {
                let u = A.default(n.target), m = this.toJSON(`${u} { ${n.oldValue} }`), a = m.children[u] ? Object.keys(m.children[u].attributes).reduce((r, t) => v(x({}, r), { [E(t.replace("-", "_"), !1)]: m.children[u].attributes[t] }), {}) : void 0, o = Object.keys(n.target.style).reduce((r, t) => !Number.isNaN(parseInt(t)) && n.target.style.hasOwnProperty(E(n.target.style[t].replace("-", "_"), !1)) ? v(x({}, r), { [E(n.target.style[t].replace("-", "_"), !1)]: n.target.style[E(n.target.style[t].replace("-", "_"), !1)] }) : r, {}), p = J(a, o);
                e.set(u, p);
                let f = [];
                e.forEach((r, t) => { let i = t.split(" ").reduce((l, h, y) => h.indexOf(".pane-") !== -1 || h.indexOf(".panel-") !== -1 ? { selector: [...l.selector, h.replace(/^(.*?)(\.pane-|\.panel-page|\.panel-)([0-9]*)(.*?)$/, "$2$3")], chars: l.chars + h.length, lastIndex: l.chars + y + h.length } : v(x({}, l), { chars: l.chars + h.length }), { selector: [], chars: 0, lastIndex: 0 }); if (i.selector.length !== 0) {
                    let l = (i.selector.join(" ") + " " + t.slice(i.lastIndex).split(">").join("")).replace(/(\.ng\-[a-zA-Z0-9_-]*)/gm, "").trim();
                    l.indexOf(".panel-page") === 0 && (l = l.substr(12).trim()), z({ selector: l, document: this.document }) && f.push(l + " { " + Object.keys(r).reduce((y, O) => O.match(/^[a-zA-Z-]*$/gm) ? `${y}${X(k(O))}: ${r[O]};` : y, "") + " }");
                } });
                let g = f.join(`
`);
                c.next({ stylesheet: g }), c.complete();
            });
        }
        toJSON(n, e = q) { let o = { children: {}, attributes: {} }, p = null, f = 0; for (e.stripComments && (e.comments = !1, n = n.replace(K, "")); (p = Z.exec(n)) != null;)
            if (!$(p[1]) && e.comments)
                o[f++] = p[1].trim();
            else if ($(p[2]))
                if ($(p[3])) {
                    if (!$(p[4])) {
                        let g = p[4].trim(), r = T.exec(g);
                        if (r) {
                            let t = r[1].trim(), d = r[2].trim();
                            if (e.ordered)
                                o[f++] = { name: t, value: d, type: "attr" };
                            else if (t in o.attributes) {
                                let i = o.attributes[t];
                                i instanceof Array || (o.attributes[t] = [i]), o.attributes[t].push(d);
                            }
                            else
                                o.attributes[t] = d;
                        }
                        else
                            o[f++] = g;
                    }
                }
                else
                    return o;
            else {
                let g = p[2].trim(), r = this.toJSON(n, e);
                if (e.ordered)
                    o[f++] = { name: g, value: r, type: "rule" };
                else {
                    let t = e.split ? g.split(",") : [g];
                    for (let d in t) {
                        let i = t[d].trim();
                        if (i in o.children)
                            for (let l in r.attributes)
                                o.children[i].attributes[l] = r.attributes[l];
                        else
                            o.children[i] = r;
                    }
                }
            } return o; }
        static { this.\u0275fac = function (e) { return new (e || s)(b.\u0275\u0275inject(j)); }; }
        static { this.\u0275prov = b.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac, providedIn: "root" }); }
    }
    return s;
})(), w = (function (s) { return s[s.KEEP = 0] = "KEEP", s[s.ADD = 1] = "ADD", s[s.REMOVE = 2] = "REMOVE", s; })(w || {}), te = (() => { class s {
    constructor(n) { this.document = n, this.mutate = new M, this.mutated$ = new M, this.mutateub = this.mutate.pipe(I(({ record: e }) => e.type === "attributes" && e.attributeName === "class" && !!e.target), S(2e3), V(({ record: e, overlay: c, originals: u }) => this.mapRecord({ record: e, overlay: c, originals: u }).pipe(P(m => L({ classes: c })))), D(({ classes: e }) => this.mutated$.next({ classes: e }))).subscribe(); }
    classify({ targetNode: n }) { let e = new Map, c = new Map, u = new MutationObserver(a => { a.forEach(o => { this.mutate.next({ record: o, overlay: e, originals: c }); }); }), m = { childList: !0, attributes: !0, subtree: !0, attributeFilter: ["class"], attributeOldValue: !0 }; u.observe(n, m); }
    mapRecord({ record: n, overlay: e, originals: c }) { return new N(u => { let m = A.default(n.target), a = "", o = n.oldValue && n.oldValue !== null ? n.oldValue.split(" ").map(r => r.trim()) : [], f = m.split(" ").reduce((r, t, d) => t.indexOf(".pane-") !== -1 || t.indexOf(".panel-") !== -1 ? { selector: [...r.selector, t.replace(/^(.*?)(\.pane-|\.panel-page|\.panel-)([0-9]*)(.*?)$/, "$2$3")], chars: r.chars + t.length, lastIndex: r.chars + d + t.length } : v(x({}, r), { chars: r.chars + t.length }), { selector: [], chars: 0, lastIndex: 0 }); if (f.selector.length !== 0) {
        let r = m.substring(f.lastIndex).split(">").map(t => t.trim()).filter(t => t !== "").map((t, d) => { let i = t.indexOf("."), l = i === -1 ? t.substring(0) : t.substring(0, i), y = (i === -1 ? [] : t.substring(i + 1).split(".")).filter(O => o.find(F => O === F) !== void 0); return (d === 0 ? " > " : "") + l + (y.length === 0 ? "" : "." + y.join(".")); });
        a = (f.selector.join(" ") + r.join(" > ")).replace(/(\.ng\-[a-zA-Z0-9_-]*)/gm, ""), a.indexOf(".panel-page") === 0 && (a = a.substr(12).trim());
    } if (z({ selector: a, document: this.document })) {
        c.has(a) || c.set(a, new Set(o));
        let r = n.target.classList, t = new Map(Array.from(r.values()).map(i => [`${i}`, !c.has(a) || !c.get(a).has(`${i}`) && `${i}`.indexOf("ng-") !== 0 && `${i}`.indexOf("mat-") !== 0 ? w.ADD : w.KEEP])), d = Array.from(c.get(a)).reduce((i, l) => [Array.from(r.values()).findIndex(h => h === l) === -1 ? l : void 0], []).filter(i => i !== void 0);
        d.length !== 0 && d.forEach(i => t.set(i, w.REMOVE)), t.size === 0 && e.has(a) ? e.delete(a) : t.size !== 0 && e.set(a, t), u.next({ classes: e }), u.complete();
    }
    else
        u.error(new Error('Selector invalid "' + a + '"')), u.complete(); }); }
    static { this.\u0275fac = function (e) { return new (e || s)(b.\u0275\u0275inject(j)); }; }
    static { this.\u0275prov = b.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac, providedIn: "root" }); }
} return s; })();
export { w as ClassClassification, te as ClassifyService, Y as SheathModule, ee as StylizerService, $ as isEmpty, z as isSelectorValid };
//# sourceMappingURL=_rollthecloudinc_sheath.11bovuYEDb.js.map
