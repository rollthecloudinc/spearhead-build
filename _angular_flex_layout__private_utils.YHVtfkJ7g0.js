import "@nf-internal/chunk-GL2BOVXA";
function t(e) { for (let n in e) {
    let i = e[n] ?? "";
    switch (n) {
        case "display":
            i === "flex" ? e.display = ["-webkit-flex", "flex"] : i === "inline-flex" ? e.display = ["-webkit-inline-flex", "inline-flex"] : e.display = i;
            break;
        case "align-items":
        case "align-self":
        case "align-content":
        case "flex":
        case "flex-basis":
        case "flex-flow":
        case "flex-grow":
        case "flex-shrink":
        case "flex-wrap":
        case "justify-content":
            e["-webkit-" + n] = i;
            break;
        case "flex-direction":
            e["-webkit-flex-direction"] = i, e["flex-direction"] = i;
            break;
        case "order":
            e.order = e["-webkit-" + n] = isNaN(+i) ? "0" : i;
            break;
    }
} return e; }
var l = "inline", o = ["row", "column", "row-reverse", "column-reverse"];
function w(e) { let [n, i, r] = s(e); return c(n, i, r); }
function s(e) { e = e?.toLowerCase() ?? ""; let [n, i, r] = e.split(" "); return o.find(f => f === n) || (n = o[0]), i === l && (i = r !== l ? r : "", r = l), [n, a(i), !!r]; }
function x(e) { let [n] = s(e); return n.indexOf("row") > -1; }
function a(e) { if (e)
    switch (e.toLowerCase()) {
        case "reverse":
        case "wrap-reverse":
        case "reverse-wrap":
            e = "wrap-reverse";
            break;
        case "no":
        case "none":
        case "nowrap":
            e = "nowrap";
            break;
        default:
            e = "wrap";
            break;
    } return e; }
function c(e, n = null, i = !1) { return { display: i ? "inline-flex" : "flex", "box-sizing": "border-box", "flex-direction": e, "flex-wrap": n || null }; }
function u(e, ...n) { if (e == null)
    throw TypeError("Cannot convert undefined or null to object"); for (let i of n)
    if (i != null)
        for (let r in i)
            i.hasOwnProperty(r) && (e[r] = i[r]); return e; }
export { l as INLINE, o as LAYOUT_VALUES, t as applyCssPrefixes, w as buildLayoutCSS, u as extendObject, x as isFlowHorizontal, s as validateValue, a as validateWrapValue };
/*! Bundled license information:

@angular/flex-layout/fesm2020/angular-flex-layout-_private-utils.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
//# sourceMappingURL=_angular_flex_layout__private_utils.YHVtfkJ7g0.js.map
