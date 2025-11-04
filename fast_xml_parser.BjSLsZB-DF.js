import { f as C } from "@nf-internal/chunk-GL2BOVXA";
var T = C(N => {
    "use strict";
    var R = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ne = R + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", L = "[" + R + "][" + Ne + "]*", be = new RegExp("^" + L + "$"), Ae = function (e, t) { let s = [], n = t.exec(e); for (; n;) {
        let i = [];
        i.startIndex = t.lastIndex - n[0].length;
        let r = n.length;
        for (let u = 0; u < r; u++)
            i.push(n[u]);
        s.push(i), n = t.exec(e);
    } return s; }, Ce = function (e) { let t = be.exec(e); return !(t === null || typeof t > "u"); };
    N.isExist = function (e) { return typeof e < "u"; };
    N.isEmptyObject = function (e) { return Object.keys(e).length === 0; };
    N.merge = function (e, t, s) { if (t) {
        let n = Object.keys(t), i = n.length;
        for (let r = 0; r < i; r++)
            s === "strict" ? e[n[r]] = [t[n[r]]] : e[n[r]] = t[n[r]];
    } };
    N.getValue = function (e) { return N.isExist(e) ? e : ""; };
    N.buildOptions = function (e, t, s) { let n = {}; if (!e)
        return t; for (let i = 0; i < s.length; i++)
        e[s[i]] !== void 0 ? n[s[i]] = e[s[i]] : n[s[i]] = t[s[i]]; return n; };
    N.isTagNameInArrayMode = function (e, t, s) { return t === !1 ? !1 : t instanceof RegExp ? t.test(e) : typeof t == "function" ? !!t(e, s) : t === "strict"; };
    N.isName = Ce;
    N.getAllMatches = Ae;
    N.nameRegexp = L;
});
var $ = C(Z => {
    "use strict";
    var v = T(), q = function (e, t, s) { let n = {}; if (!t.alwaysCreateTextNode && (!e.child || v.isEmptyObject(e.child)) && (!e.attrsMap || v.isEmptyObject(e.attrsMap)))
        return v.isExist(e.val) ? e.val : ""; if (v.isExist(e.val) && !(typeof e.val == "string" && (e.val === "" || e.val === t.cdataPositionChar))) {
        let r = v.isTagNameInArrayMode(e.tagname, t.arrayMode, s);
        n[t.textNodeName] = r ? [e.val] : e.val;
    } v.merge(n, e.attrsMap, t.arrayMode); let i = Object.keys(e.child); for (let r = 0; r < i.length; r++) {
        let u = i[r];
        if (e.child[u] && e.child[u].length > 1) {
            n[u] = [];
            for (let a in e.child[u])
                e.child[u].hasOwnProperty(a) && n[u].push(q(e.child[u][a], t, u));
        }
        else {
            let a = q(e.child[u][0], t, u), o = t.arrayMode === !0 && typeof a == "object" || v.isTagNameInArrayMode(u, t.arrayMode, s);
            n[u] = o ? [a] : a;
        }
    } return n; };
    Z.convertToJson = q;
});
var Q = C((ct, X) => {
    "use strict";
    X.exports = function (e, t, s) { this.tagname = e, this.parent = t, this.child = {}, this.attrsMap = {}, this.val = s, this.addChild = function (n) { Array.isArray(this.child[n.tagname]) ? this.child[n.tagname].push(n) : this.child[n.tagname] = [n]; }; };
});
var z = C((ft, Y) => { var Te = /^[-+]?0x[a-fA-F0-9]+$/, ye = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, ve = { hex: !0, leadingZeros: !0, decimalPoint: ".", eNotation: !0 }; function Pe(e, t = {}) { if (t = Object.assign({}, ve, t), !e || typeof e != "string")
    return e; let s = e.trim(); if (t.skipLike !== void 0 && t.skipLike.test(s))
    return e; if (e === "0")
    return 0; if (t.hex && Te.test(s))
    return Ee(s, 16); if (s.search(/[eE]/) !== -1) {
    let n = s.match(/^([-\+])?(0*)([0-9]*(\.[0-9]*)?[eE][-\+]?[0-9]+)$/);
    if (n) {
        if (t.leadingZeros)
            s = (n[1] || "") + n[3];
        else if (!(n[2] === "0" && n[3][0] === "."))
            return e;
        return t.eNotation ? Number(s) : e;
    }
    else
        return e;
}
else {
    let n = ye.exec(s);
    if (n) {
        let i = n[1], r = n[2], u = me(n[3]);
        if (!t.leadingZeros && r.length > 0 && i && s[2] !== ".")
            return e;
        if (!t.leadingZeros && r.length > 0 && !i && s[1] !== ".")
            return e;
        if (t.leadingZeros && r === e)
            return 0;
        {
            let a = Number(s), o = "" + a;
            return o.search(/[eE]/) !== -1 ? t.eNotation ? a : e : s.indexOf(".") !== -1 ? o === "0" && u === "" || o === u || i && o === "-" + u ? a : e : r ? u === o || i + u === o ? a : e : s === o || s === i + o ? a : e;
        }
    }
    else
        return e;
} } function me(e) { return e && e.indexOf(".") !== -1 && (e = e.replace(/0+$/, ""), e === "." ? e = "0" : e[0] === "." ? e = "0" + e : e[e.length - 1] === "." && (e = e.substr(0, e.length - 1))), e; } function Ee(e, t) { if (parseInt)
    return parseInt(e, t); if (Number.parseInt)
    return Number.parseInt(e, t); if (window && window.parseInt)
    return window.parseInt(e, t); throw new Error("parseInt, Number.parseInt, window.parseInt are not supported"); } Y.exports = Pe; });
var E = C(V => {
    "use strict";
    var P = T(), Ie = T().buildOptions, w = Q(), we = z(), dt = "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, P.nameRegexp);
    !Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt);
    !Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat);
    var U = { attributeNamePrefix: "@_", attrNodeName: !1, textNodeName: "#text", ignoreAttributes: !0, ignoreNameSpace: !1, allowBooleanAttributes: !1, parseNodeValue: !0, parseAttributeValue: !1, arrayMode: !1, trimValues: !0, cdataTagName: !1, cdataPositionChar: "\\c", numParseOptions: { hex: !0, leadingZeros: !0 }, tagValueProcessor: function (e, t) { return e; }, attrValueProcessor: function (e, t) { return e; }, stopNodes: [], alwaysCreateTextNode: !1 };
    V.defaultOptions = U;
    var W = ["attributeNamePrefix", "attrNodeName", "textNodeName", "ignoreAttributes", "ignoreNameSpace", "allowBooleanAttributes", "parseNodeValue", "parseAttributeValue", "arrayMode", "trimValues", "cdataTagName", "cdataPositionChar", "tagValueProcessor", "attrValueProcessor", "parseTrueNumberOnly", "numParseOptions", "stopNodes", "alwaysCreateTextNode"];
    V.props = W;
    function O(e, t, s) { return t && (s.trimValues && (t = t.trim()), t = s.tagValueProcessor(t, e), t = _(t, s.parseNodeValue, s.numParseOptions)), t; }
    function Oe(e, t) { if (t.ignoreNameSpace) {
        let s = e.split(":"), n = e.charAt(0) === "/" ? "/" : "";
        if (s[0] === "xmlns")
            return "";
        s.length === 2 && (e = n + s[1]);
    } return e; }
    function _(e, t, s) { if (t && typeof e == "string") {
        let n = e.trim();
        return n === "true" ? !0 : n === "false" ? !1 : we(e, s);
    }
    else
        return P.isExist(e) ? e : ""; }
    var Ve = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])(.*?)\\3)?`, "g");
    function K(e, t) { if (!t.ignoreAttributes && typeof e == "string") {
        e = e.replace(/\r?\n/g, " ");
        let s = P.getAllMatches(e, Ve), n = s.length, i = {};
        for (let r = 0; r < n; r++) {
            let u = Oe(s[r][1], t);
            u.length && (s[r][4] !== void 0 ? (t.trimValues && (s[r][4] = s[r][4].trim()), s[r][4] = t.attrValueProcessor(s[r][4], u), i[t.attributeNamePrefix + u] = _(s[r][4], t.parseAttributeValue, t.numParseOptions)) : t.allowBooleanAttributes && (i[t.attributeNamePrefix + u] = !0));
        }
        if (!Object.keys(i).length)
            return;
        if (t.attrNodeName) {
            let r = {};
            return r[t.attrNodeName] = i, r;
        }
        return i;
    } }
    var Fe = function (e, t) {
        e = e.replace(/\r\n?/g, `
`), t = Ie(t, U, W);
        let s = new w("!xml"), n = s, i = "";
        for (let r = 0; r < e.length; r++)
            if (e[r] === "<")
                if (e[r + 1] === "/") {
                    let a = m(e, ">", r, "Closing Tag is not closed."), o = e.substring(r + 2, a).trim();
                    if (t.ignoreNameSpace) {
                        let h = o.indexOf(":");
                        h !== -1 && (o = o.substr(h + 1));
                    }
                    n && (n.val ? n.val = P.getValue(n.val) + "" + O(o, i, t) : n.val = O(o, i, t)), t.stopNodes.length && t.stopNodes.includes(n.tagname) && (n.child = [], n.attrsMap == null && (n.attrsMap = {}), n.val = e.substr(n.startIndex + 1, r - n.startIndex - 1)), n = n.parent, i = "", r = a;
                }
                else if (e[r + 1] === "?")
                    r = m(e, "?>", r, "Pi Tag is not closed.");
                else if (e.substr(r + 1, 3) === "!--")
                    r = m(e, "-->", r, "Comment is not closed.");
                else if (e.substr(r + 1, 2) === "!D") {
                    let a = m(e, ">", r, "DOCTYPE is not closed.");
                    e.substring(r, a).indexOf("[") >= 0 ? r = e.indexOf("]>", r) + 1 : r = a;
                }
                else if (e.substr(r + 1, 2) === "![") {
                    let a = m(e, "]]>", r, "CDATA is not closed.") - 2, o = e.substring(r + 9, a);
                    if (i && (n.val = P.getValue(n.val) + "" + O(n.tagname, i, t), i = ""), t.cdataTagName) {
                        let h = new w(t.cdataTagName, n, o);
                        n.addChild(h), n.val = P.getValue(n.val) + t.cdataPositionChar, o && (h.val = o);
                    }
                    else
                        n.val = (n.val || "") + (o || "");
                    r = a + 2;
                }
                else {
                    let a = Me(e, r + 1), o = a.data, h = a.index, d = o.indexOf(" "), l = o, A = !0;
                    if (d !== -1 && (l = o.substr(0, d).replace(/\s\s*$/, ""), o = o.substr(d + 1)), t.ignoreNameSpace) {
                        let p = l.indexOf(":");
                        p !== -1 && (l = l.substr(p + 1), A = l !== a.data.substr(p + 1));
                    }
                    if (n && i && n.tagname !== "!xml" && (n.val = P.getValue(n.val) + "" + O(n.tagname, i, t)), o.length > 0 && o.lastIndexOf("/") === o.length - 1) {
                        l[l.length - 1] === "/" ? (l = l.substr(0, l.length - 1), o = l) : o = o.substr(0, o.length - 1);
                        let p = new w(l, n, "");
                        l !== o && (p.attrsMap = K(o, t)), n.addChild(p);
                    }
                    else {
                        let p = new w(l, n);
                        t.stopNodes.length && t.stopNodes.includes(p.tagname) && (p.startIndex = h), l !== o && A && (p.attrsMap = K(o, t)), n.addChild(p), n = p;
                    }
                    i = "", r = h;
                }
            else
                i += e[r];
        return s;
    };
    function Me(e, t) { let s, n = ""; for (let i = t; i < e.length; i++) {
        let r = e[i];
        if (s)
            r === s && (s = "");
        else if (r === '"' || r === "'")
            s = r;
        else {
            if (r === ">")
                return { data: n, index: i };
            r === "	" && (r = " ");
        }
        n += r;
    } }
    function m(e, t, s, n) { let i = e.indexOf(t, s); if (i === -1)
        throw new Error(n); return i + t.length - 1; }
    V.getTraversalObj = Fe;
});
var ee = C(D => {
    "use strict";
    var M = T(), ke = { allowBooleanAttributes: !1 }, qe = ["allowBooleanAttributes"];
    D.validate = function (e, t) {
        t = M.buildOptions(t, ke, qe);
        let s = [], n = !1, i = !1;
        e[0] === "\uFEFF" && (e = e.substr(1));
        for (let r = 0; r < e.length; r++)
            if (e[r] === "<" && e[r + 1] === "?") {
                if (r += 2, r = G(e, r), r.err)
                    return r;
            }
            else if (e[r] === "<") {
                let u = r;
                if (r++, e[r] === "!") {
                    r = H(e, r);
                    continue;
                }
                else {
                    let a = !1;
                    e[r] === "/" && (a = !0, r++);
                    let o = "";
                    for (; r < e.length && e[r] !== ">" && e[r] !== " " && e[r] !== "	" && e[r] !== `
` && e[r] !== "\r"; r++)
                        o += e[r];
                    if (o = o.trim(), o[o.length - 1] === "/" && (o = o.substring(0, o.length - 1), r--), !$e(o)) {
                        let l;
                        return o.trim().length === 0 ? l = "Invalid space after '<'." : l = "Tag '" + o + "' is an invalid name.", f("InvalidTag", l, g(e, r));
                    }
                    let h = xe(e, r);
                    if (h === !1)
                        return f("InvalidAttr", "Attributes for '" + o + "' have open quote.", g(e, r));
                    let d = h.value;
                    if (r = h.index, d[d.length - 1] === "/") {
                        let l = r - d.length;
                        d = d.substring(0, d.length - 1);
                        let A = j(d, t);
                        if (A === !0)
                            n = !0;
                        else
                            return f(A.err.code, A.err.msg, g(e, l + A.err.line));
                    }
                    else if (a)
                        if (h.tagClosed) {
                            if (d.trim().length > 0)
                                return f("InvalidTag", "Closing tag '" + o + "' can't have attributes or invalid starting.", g(e, u));
                            {
                                let l = s.pop();
                                if (o !== l.tagName) {
                                    let A = g(e, l.tagStartPos);
                                    return f("InvalidTag", "Expected closing tag '" + l.tagName + "' (opened in line " + A.line + ", col " + A.col + ") instead of closing tag '" + o + "'.", g(e, u));
                                }
                                s.length == 0 && (i = !0);
                            }
                        }
                        else
                            return f("InvalidTag", "Closing tag '" + o + "' doesn't have proper closing.", g(e, r));
                    else {
                        let l = j(d, t);
                        if (l !== !0)
                            return f(l.err.code, l.err.msg, g(e, r - d.length + l.err.line));
                        if (i === !0)
                            return f("InvalidXml", "Multiple possible root nodes found.", g(e, r));
                        s.push({ tagName: o, tagStartPos: u }), n = !0;
                    }
                    for (r++; r < e.length; r++)
                        if (e[r] === "<")
                            if (e[r + 1] === "!") {
                                r++, r = H(e, r);
                                continue;
                            }
                            else if (e[r + 1] === "?") {
                                if (r = G(e, ++r), r.err)
                                    return r;
                            }
                            else
                                break;
                        else if (e[r] === "&") {
                            let l = Le(e, r);
                            if (l == -1)
                                return f("InvalidChar", "char '&' is not expected.", g(e, r));
                            r = l;
                        }
                    e[r] === "<" && r--;
                }
            }
            else {
                if (e[r] === " " || e[r] === "	" || e[r] === `
` || e[r] === "\r")
                    continue;
                return f("InvalidChar", "char '" + e[r] + "' is not expected.", g(e, r));
            }
        if (n) {
            if (s.length == 1)
                return f("InvalidTag", "Unclosed tag '" + s[0].tagName + "'.", g(e, s[0].tagStartPos));
            if (s.length > 0)
                return f("InvalidXml", "Invalid '" + JSON.stringify(s.map(r => r.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
        }
        else
            return f("InvalidXml", "Start tag expected.", 1);
        return !0;
    };
    function G(e, t) { let s = t; for (; t < e.length; t++)
        if (e[t] == "?" || e[t] == " ") {
            let n = e.substr(s, t - s);
            if (t > 5 && n === "xml")
                return f("InvalidXml", "XML declaration allowed only at the start of the document.", g(e, t));
            if (e[t] == "?" && e[t + 1] == ">") {
                t++;
                break;
            }
            else
                continue;
        } return t; }
    function H(e, t) { if (e.length > t + 5 && e[t + 1] === "-" && e[t + 2] === "-") {
        for (t += 3; t < e.length; t++)
            if (e[t] === "-" && e[t + 1] === "-" && e[t + 2] === ">") {
                t += 2;
                break;
            }
    }
    else if (e.length > t + 8 && e[t + 1] === "D" && e[t + 2] === "O" && e[t + 3] === "C" && e[t + 4] === "T" && e[t + 5] === "Y" && e[t + 6] === "P" && e[t + 7] === "E") {
        let s = 1;
        for (t += 8; t < e.length; t++)
            if (e[t] === "<")
                s++;
            else if (e[t] === ">" && (s--, s === 0))
                break;
    }
    else if (e.length > t + 9 && e[t + 1] === "[" && e[t + 2] === "C" && e[t + 3] === "D" && e[t + 4] === "A" && e[t + 5] === "T" && e[t + 6] === "A" && e[t + 7] === "[") {
        for (t += 8; t < e.length; t++)
            if (e[t] === "]" && e[t + 1] === "]" && e[t + 2] === ">") {
                t += 2;
                break;
            }
    } return t; }
    var Be = '"', Se = "'";
    function xe(e, t) { let s = "", n = "", i = !1; for (; t < e.length; t++) {
        if (e[t] === Be || e[t] === Se)
            n === "" ? n = e[t] : n !== e[t] || (n = "");
        else if (e[t] === ">" && n === "") {
            i = !0;
            break;
        }
        s += e[t];
    } return n !== "" ? !1 : { value: s, index: t, tagClosed: i }; }
    var Je = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
    function j(e, t) { let s = M.getAllMatches(e, Je), n = {}; for (let i = 0; i < s.length; i++) {
        if (s[i][1].length === 0)
            return f("InvalidAttr", "Attribute '" + s[i][2] + "' has no space in starting.", F(s[i]));
        if (s[i][3] === void 0 && !t.allowBooleanAttributes)
            return f("InvalidAttr", "boolean attribute '" + s[i][2] + "' is not allowed.", F(s[i]));
        let r = s[i][2];
        if (!Ze(r))
            return f("InvalidAttr", "Attribute '" + r + "' is an invalid name.", F(s[i]));
        if (!n.hasOwnProperty(r))
            n[r] = 1;
        else
            return f("InvalidAttr", "Attribute '" + r + "' is repeated.", F(s[i]));
    } return !0; }
    function Re(e, t) { let s = /\d/; for (e[t] === "x" && (t++, s = /[\da-fA-F]/); t < e.length; t++) {
        if (e[t] === ";")
            return t;
        if (!e[t].match(s))
            break;
    } return -1; }
    function Le(e, t) { if (t++, e[t] === ";")
        return -1; if (e[t] === "#")
        return t++, Re(e, t); let s = 0; for (; t < e.length; t++, s++)
        if (!(e[t].match(/\w/) && s < 20)) {
            if (e[t] === ";")
                break;
            return -1;
        } return t; }
    function f(e, t, s) { return { err: { code: e, msg: t, line: s.line || s, col: s.col } }; }
    function Ze(e) { return M.isName(e); }
    function $e(e) { return M.isName(e); }
    function g(e, t) { let s = e.substring(0, t).split(/\r?\n/); return { line: s.length, col: s[s.length - 1].length + 1 }; }
    function F(e) { return e.startIndex + e[1].length; }
});
var se = C(ne => {
    "use strict";
    var y = function (e) { return String.fromCharCode(e); }, c = { nilChar: y(176), missingChar: y(201), nilPremitive: y(175), missingPremitive: y(200), emptyChar: y(178), emptyValue: y(177), boundryChar: y(179), objStart: y(198), arrStart: y(204), arrayEnd: y(185) }, Xe = [c.nilChar, c.nilPremitive, c.missingChar, c.missingPremitive, c.boundryChar, c.emptyChar, c.emptyValue, c.arrayEnd, c.objStart, c.arrStart], I = function (e, t, s) { if (typeof t == "string")
        return e && e[0] && e[0].val !== void 0 ? B(e[0].val, t) : B(e, t); {
        let n = Qe(e);
        if (n === !0) {
            let i = "";
            if (Array.isArray(t)) {
                i += c.arrStart;
                let r = t[0], u = e.length;
                if (typeof r == "string")
                    for (let a = 0; a < u; a++) {
                        let o = B(e[a].val, r);
                        i = S(i, o);
                    }
                else
                    for (let a = 0; a < u; a++) {
                        let o = I(e[a], r, s);
                        i = S(i, o);
                    }
                i += c.arrayEnd;
            }
            else {
                i += c.objStart;
                let r = Object.keys(t);
                Array.isArray(e) && (e = e[0]);
                for (let u in r) {
                    let a = r[u], o;
                    !s.ignoreAttributes && e.attrsMap && e.attrsMap[a] ? o = I(e.attrsMap[a], t[a], s) : a === s.textNodeName ? o = I(e.val, t[a], s) : o = I(e.child[a], t[a], s), i = S(i, o);
                }
            }
            return i;
        }
        else
            return n;
    } }, B = function (e) { switch (e) {
        case void 0: return c.missingPremitive;
        case null: return c.nilPremitive;
        case "": return c.emptyValue;
        default: return e;
    } }, S = function (e, t) { return !te(t[0]) && !te(e[e.length - 1]) && (e += c.boundryChar), e + t; }, te = function (e) { return Xe.indexOf(e) !== -1; };
    function Qe(e) { return e === void 0 ? c.missingChar : e === null ? c.nilChar : e.child && Object.keys(e.child).length === 0 && (!e.attrsMap || Object.keys(e.attrsMap).length === 0) ? c.emptyChar : !0; }
    var re = E(), Ye = T().buildOptions, ze = function (e, t, s) { return s = Ye(s, re.defaultOptions, re.props), I(e, t, s); };
    ne.convert2nimn = ze;
});
var ae = C(oe => {
    "use strict";
    var k = T(), Ke = T().buildOptions, ie = E(), Ue = function (e, t) { return t = Ke(t, ie.defaultOptions, ie.props), t.indentBy = t.indentBy || "", x(e, t, 0); }, x = function (e, t, s) { let n = "{", i = Object.keys(e.child); for (let r = 0; r < i.length; r++) {
        let u = i[r];
        if (e.child[u] && e.child[u].length > 1) {
            n += '"' + u + '" : [ ';
            for (let a in e.child[u])
                n += x(e.child[u][a], t) + " , ";
            n = n.substr(0, n.length - 1) + " ] ";
        }
        else
            n += '"' + u + '" : ' + x(e.child[u][0], t) + " ,";
    } return k.merge(n, e.attrsMap), k.isEmptyObject(n) ? k.isExist(e.val) ? e.val : "" : (k.isExist(e.val) && (typeof e.val == "string" && (e.val === "" || e.val === t.cdataPositionChar) || (n += '"' + t.textNodeName + '" : ' + We(e.val))), n[n.length - 1] === "," && (n = n.substr(0, n.length - 2)), n + "}"); };
    function We(e) { return e === !0 || e === !1 || !isNaN(e) ? e : '"' + e + '"'; }
    oe.convertToJsonString = Ue;
});
var fe = C((bt, ce) => {
    "use strict";
    var _e = T().buildOptions, Ge = { attributeNamePrefix: "@_", attrNodeName: !1, textNodeName: "#text", ignoreAttributes: !0, cdataTagName: !1, cdataPositionChar: "\\c", format: !1, indentBy: "  ", supressEmptyNode: !1, tagValueProcessor: function (e) { return e; }, attrValueProcessor: function (e) { return e; } }, He = ["attributeNamePrefix", "attrNodeName", "textNodeName", "ignoreAttributes", "cdataTagName", "cdataPositionChar", "format", "indentBy", "supressEmptyNode", "tagValueProcessor", "attrValueProcessor", "rootNodeName"];
    function J(e) {
        this.options = _e(e, Ge, He), this.options.ignoreAttributes || this.options.attrNodeName ? this.isAttribute = function () { return !1; } : (this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = st), this.options.cdataTagName ? this.isCDATA = it : this.isCDATA = function () { return !1; }, this.replaceCDATAstr = De, this.replaceCDATAarr = et, this.processTextOrObjNode = je, this.options.format ? (this.indentate = nt, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function () { return ""; }, this.tagEndChar = ">", this.newLine = ""), this.options.supressEmptyNode ? (this.buildTextNode = rt, this.buildObjNode = tt) : (this.buildTextNode = le, this.buildObjNode = ue), this.buildTextValNode = le, this.buildObjectNode = ue;
    }
    J.prototype.parse = function (e) { return Array.isArray(e) && this.options.rootNodeName && this.options.rootNodeName.length > 1 && (e = { [this.options.rootNodeName]: e }), this.j2x(e, 0).val; };
    J.prototype.j2x = function (e, t) { let s = "", n = ""; for (let i in e)
        if (!(typeof e[i] > "u"))
            if (e[i] === null)
                n += this.indentate(t) + "<" + i + "/" + this.tagEndChar;
            else if (e[i] instanceof Date)
                n += this.buildTextNode(e[i], i, "", t);
            else if (typeof e[i] != "object") {
                let r = this.isAttribute(i);
                r ? s += " " + r + '="' + this.options.attrValueProcessor("" + e[i]) + '"' : this.isCDATA(i) ? e[this.options.textNodeName] ? n += this.replaceCDATAstr(e[this.options.textNodeName], e[i]) : n += this.replaceCDATAstr("", e[i]) : i === this.options.textNodeName ? e[this.options.cdataTagName] || (n += this.options.tagValueProcessor("" + e[i])) : n += this.buildTextNode(e[i], i, "", t);
            }
            else if (Array.isArray(e[i]))
                if (this.isCDATA(i))
                    n += this.indentate(t), e[this.options.textNodeName] ? n += this.replaceCDATAarr(e[this.options.textNodeName], e[i]) : n += this.replaceCDATAarr("", e[i]);
                else {
                    let r = e[i].length;
                    for (let u = 0; u < r; u++) {
                        let a = e[i][u];
                        typeof a > "u" || (a === null ? n += this.indentate(t) + "<" + i + "/" + this.tagEndChar : typeof a == "object" ? n += this.processTextOrObjNode(a, i, t) : n += this.buildTextNode(a, i, "", t));
                    }
                }
            else if (this.options.attrNodeName && i === this.options.attrNodeName) {
                let r = Object.keys(e[i]), u = r.length;
                for (let a = 0; a < u; a++)
                    s += " " + r[a] + '="' + this.options.attrValueProcessor("" + e[i][r[a]]) + '"';
            }
            else
                n += this.processTextOrObjNode(e[i], i, t); return { attrStr: s, val: n }; };
    function je(e, t, s) { let n = this.j2x(e, s + 1); return e[this.options.textNodeName] !== void 0 && Object.keys(e).length === 1 ? this.buildTextNode(n.val, t, n.attrStr, s) : this.buildObjNode(n.val, t, n.attrStr, s); }
    function De(e, t) { return e = this.options.tagValueProcessor("" + e), this.options.cdataPositionChar === "" || e === "" ? e + "<![CDATA[" + t + "]]" + this.tagEndChar : e.replace(this.options.cdataPositionChar, "<![CDATA[" + t + "]]" + this.tagEndChar); }
    function et(e, t) { if (e = this.options.tagValueProcessor("" + e), this.options.cdataPositionChar === "" || e === "")
        return e + "<![CDATA[" + t.join("]]><![CDATA[") + "]]" + this.tagEndChar; for (let s in t)
        e = e.replace(this.options.cdataPositionChar, "<![CDATA[" + t[s] + "]]>"); return e + this.newLine; }
    function ue(e, t, s, n) { return s && e.indexOf("<") === -1 ? this.indentate(n) + "<" + t + s + ">" + e + "</" + t + this.tagEndChar : this.indentate(n) + "<" + t + s + this.tagEndChar + e + this.indentate(n) + "</" + t + this.tagEndChar; }
    function tt(e, t, s, n) { return e !== "" ? this.buildObjectNode(e, t, s, n) : this.indentate(n) + "<" + t + s + "/" + this.tagEndChar; }
    function le(e, t, s, n) { return this.indentate(n) + "<" + t + s + ">" + this.options.tagValueProcessor(e) + "</" + t + this.tagEndChar; }
    function rt(e, t, s, n) { return e !== "" ? this.buildTextValNode(e, t, s, n) : this.indentate(n) + "<" + t + s + "/" + this.tagEndChar; }
    function nt(e) { return this.options.indentBy.repeat(e); }
    function st(e) { return e.startsWith(this.options.attributeNamePrefix) ? e.substr(this.attrPrefixLen) : !1; }
    function it(e) { return e === this.options.cdataTagName; }
    ce.exports = J;
});
var at = C(b => { var he = $(), ge = E(), de = E(), ot = T().buildOptions, pe = ee(); b.parse = function (e, t = {}, s) { if (s) {
    s === !0 && (s = {});
    let r = pe.validate(e, s);
    if (r !== !0)
        throw Error(r.err.msg);
} t.parseTrueNumberOnly && t.parseNodeValue !== !1 && !t.numParseOptions && (t.numParseOptions = { leadingZeros: !1 }); let n = ot(t, de.defaultOptions, de.props), i = ge.getTraversalObj(e, n); return he.convertToJson(i, n); }; b.convertTonimn = se().convert2nimn; b.getTraversalObj = ge.getTraversalObj; b.convertToJson = he.convertToJson; b.convertToJsonString = ae().convertToJsonString; b.validate = pe.validate; b.j2xParser = fe(); b.parseToNimn = function (e, t, s) { return b.convertTonimn(b.getTraversalObj(e, s), t, s); }; });
export default at();
//# sourceMappingURL=fast_xml_parser.BjSLsZB-DF.js.map
