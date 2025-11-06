import { f as s } from "@nf-internal/chunk-GL2BOVXA";
var f = s((z, l) => {
    "use strict";
    l.exports = function (t) { var e = this, r; if (arguments.length < 2)
        r = function () { if (this instanceof r) {
            var n = e.apply(this, arguments);
            return Object(n) === n ? n : this;
        }
        else
            return e.apply(t, arguments); };
    else {
        for (var u = new Array(arguments.length - 1), o = 1; o < arguments.length; o++)
            u[o - 1] = arguments[o];
        r = function () { var n = u.length, c = new Array(n + arguments.length), i; for (i = 0; i < n; i++)
            c[i] = u[i]; for (i = 0; i < arguments.length; i++)
            c[n + i] = arguments[i]; if (this instanceof r) {
            var a = e.apply(this, c);
            return Object(a) === a ? a : this;
        }
        else
            return e.apply(t, c); };
    } return r.prototype = e.prototype, r; };
});
var g = s((B, p) => {
    "use strict";
    var b = Function.prototype.bind || f();
    p.exports = j;
    function j(t, e) { var r = function () { return arguments.length === 0 ? r : arguments.length > 1 ? t.apply(e, arguments) : b.call(t, e, arguments[0]); }; return r.uncurry = function () { return t; }, r; }
});
var v = s((D, h) => {
    "use strict";
    h.exports = O;
    var x = /\[([^\[\]]+)\]/g, S = /^[.]*|[.]*$/g;
    function O(t) { return {}.toString.call(t) == "[object String]" ? t.replace(x, ".$1").replace(S, "") : ""; }
});
var d = s((I, y) => {
    "use strict";
    var w = Object.prototype.toString;
    function q(t) { for (var e = -1, r = T(R(t).split(".")), u = r.length, o = []; ++e < u;)
        o.push(A(r[e])); return o; }
    function R(t) { return (w.call(t) === "[object String]" ? t : "").replace(/\\\./g, "\uFFFF"); }
    function T(t) { for (var e = -1, r = t.length, u = []; ++e < r;)
        t[e] && u.push(t[e]); return u; }
    function A(t) { return t.replace(/\uffff/g, "."); }
    y.exports = q;
});
var k = s((K, m) => { var E = g(), L = v(), C = d(), F = Object.prototype.toString; m.exports = E($); function $(t, e) { let r = -1, u = F.call(t) === "[object Array]" ? t : C(L(t)), o = u.length, n = o ? e : void 0; for (; ++r < o;) {
    if (Object(n) !== n)
        return;
    n = n[u[r]];
} return typeof n == "function" ? n() : n; } });
export default k();
/*! Bundled license information:

curry2/index.js:
  (*!
   * imports.
   *)
  (*!
   * exports.
   *)

brackets2dots/index.js:
  (*!
   * exports.
   *)
  (*!
   * regexp patterns.
   *)

dotsplit.js/index.js:
  (*!
   * exports.
   *)
*/
//# sourceMappingURL=selectn.Ae1aJ-M1oY.js.map
