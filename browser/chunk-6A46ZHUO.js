import { f as _ } from "@nf-internal/chunk-GL2BOVXA";
var x = _((v, P) => { (function (L, N) { typeof v == "object" && typeof P == "object" ? P.exports = N() : typeof define == "function" && define.amd ? define([], N) : typeof v == "object" ? v.recursiveDiff = N() : L.recursiveDiff = N(); })(typeof self < "u" ? self : v, () => { return L = { 182: h => { let f = { NUMBER: "NUMBER", BOOLEAN: "BOOLEAN", STRING: "STRING", NULL: "NULL", UNDEFINED: "UNDEFINED", DATE: "DATE", ARRAY: "ARRAY", MAP: "MAP", SET: "SET", ITERABLE_OBJECT: "ITERABLE_OBJECT", DEFAULT: "OBJECT" }; h.exports = { types: f, iterableTypes: [f.ITERABLE_OBJECT, f.MAP, f.ARRAY, f.SET], errors: { EMPTY_DIFF: "No diff object is provided, Nothing to apply", INVALID_DIFF_FORMAT: "Invalid diff format", INVALID_DIFF_OP: "Unsupported operation provided into diff object" } }; }, 688: (h, f, I) => { let { types: t, iterableTypes: S, errors: j } = I(182), n = I(555), e = { [t.NUMBER]: n.isNumber, [t.BOOLEAN]: n.isBoolean, [t.STRING]: n.isString, [t.DATE]: n.isDate, [t.UNDEFINED]: n.isUndefined, [t.NULL]: n.isNull, [t.ARRAY]: n.isArray, [t.MAP]: n.isMap, [t.SET]: n.isSet, [t.ITERABLE_OBJECT]: n.isIterableObject }, s = { [t.DATE]: n.areDatesEqual }; function u(r) { let o = Object.keys(e), l = t.DEFAULT; for (let p = 0; p < o.length; p += 1)
        if (e[o[p]](r)) {
            l = o[p];
            break;
        } return l; } function c(r, o, l, p, T) { let D = { op: l, path: p }; return l !== "add" && l !== "update" || (D.val = o), T && l !== "add" && (D.oldVal = r), D; } function A(r, o, l, p, T) { let D = u(r), b = u(o), R = p || [], y = T || []; if ((function (E, i) { return E === i && S.indexOf(E) >= 0; })(D, b)) {
        let E = (function (d, O, B) { if (B === t.ARRAY) {
            let F = d.length > O.length ? new Array(d.length) : new Array(O.length);
            return F.fill(0), new Set(F.map((U, g) => g));
        } return new Set(Object.keys(d).concat(Object.keys(O))); })(r, o, D).values(), { value: i, done: w } = E.next();
        for (; !w;) {
            Object.prototype.hasOwnProperty.call(r, i) ? Object.prototype.hasOwnProperty.call(o, i) ? A(r[i], o[i], l, R.concat(i), y) : y.push(c(r[i], o[i], "delete", R.concat(i), l)) : y.push(c(r[i], o[i], "add", R.concat(i), l));
            let d = E.next();
            i = d.value, w = d.done;
        }
    }
    else {
        let E = (function (i, w, d, O) { let B; return d === t.UNDEFINED && O !== t.UNDEFINED ? B = "add" : d !== t.UNDEFINED && O === t.UNDEFINED ? B = "delete" : (function (F, U, g, M) { return g === M && (s[g] ? s[g](F, U) : F === U); })(i, w, d, O) ? n.noop() : B = "update", B; })(r, o, D, b);
        E != null && y.push(c(r, o, E, p, l));
    } return y; } let a = { add: n.setValueByPath, update: n.setValueByPath, delete: n.deleteValueByPath }; h.exports = { getDiff: (r, o, l = !1) => A(r, o, l), applyDiff: (r, o, l) => (function (p, T, D) { if (!(T instanceof Array))
            throw new Error(j.INVALID_DIFF_FORMAT); let b = p; return T.forEach(R => { let { op: y, val: E, path: i } = R; if (!a[y])
            throw new Error(j.INVALID_DIFF_OP); b = a[y](b, i, E, D); }), b; })(r, o, l) }; }, 555: h => { let f = e => s => s instanceof e, I = f(Date), t = f(Array), S = f(Map), j = f(Set), n = e => Object.prototype.toString.call(e) === "[object Object]"; h.exports = { isNumber: e => typeof e == "number", isBoolean: e => typeof e == "boolean", isString: e => typeof e == "string", isDate: I, isUndefined: e => e === void 0, isNull: e => e === null, isArray: t, isMap: S, isSet: j, isIterableObject: n, noop: () => { }, areDatesEqual: (e, s) => e.getTime() === s.getTime(), setValueByPath: function (e, s = [], u, c) { if (!t(s))
            throw new Error(`Diff path: "${s}" is not valid`); let { length: A } = s; if (A === 0)
            return u; let a = e; for (let r = 0; r < A; r += 1) {
            let o = s[r];
            if (!a)
                throw new Error(`Invalid path: "${s}" for object: ${JSON.stringify(e, null, 2)}`);
            if (o == null)
                throw new Error(`Invalid path: "${s}" for object: ${JSON.stringify(e, null, 2)}`);
            r !== A - 1 ? (a = a[o], c && c(a)) : a[o] = u;
        } return e; }, deleteValueByPath: function (e, s) { let u = s || []; if (u.length === 0)
            return; let c = e, { length: A } = u; for (let a = 0; a < A; a += 1)
            if (a !== A - 1) {
                if (!c[u[a]])
                    throw new Error(`Invalid path: "${s}" for object: ${JSON.stringify(e, null, 2)}`);
                c = c[u[a]];
            }
            else if (n(c))
                delete c[u[a]];
            else {
                let r = parseInt(u[a], 10);
                for (; c.length > r;)
                    c.pop();
            } return e; } }; } }, N = {}, (function h(f) { var I = N[f]; if (I !== void 0)
    return I.exports; var t = N[f] = { exports: {} }; return L[f](t, t.exports, h), t.exports; })(688); var L, N; }); });
export { x as a };
//# sourceMappingURL=chunk-6A46ZHUO.js.map
