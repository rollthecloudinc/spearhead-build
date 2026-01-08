import { f as b } from "@nf-internal/chunk-J4XOFOAH";
var U = b(c => {
    "use strict";
    Object.defineProperty(c, "__esModule", { value: !0 });
    c.toUtf8 = c.fromUtf8 = void 0;
    var h = e => { let r = []; for (let o = 0, d = e.length; o < d; o++) {
        let t = e.charCodeAt(o);
        if (t < 128)
            r.push(t);
        else if (t < 2048)
            r.push(t >> 6 | 192, t & 63 | 128);
        else if (o + 1 < e.length && (t & 64512) === 55296 && (e.charCodeAt(o + 1) & 64512) === 56320) {
            let f = 65536 + ((t & 1023) << 10) + (e.charCodeAt(++o) & 1023);
            r.push(f >> 18 | 240, f >> 12 & 63 | 128, f >> 6 & 63 | 128, f & 63 | 128);
        }
        else
            r.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
    } return Uint8Array.from(r); };
    c.fromUtf8 = h;
    var x = e => { let r = ""; for (let o = 0, d = e.length; o < d; o++) {
        let t = e[o];
        if (t < 128)
            r += String.fromCharCode(t);
        else if (192 <= t && t < 224) {
            let f = e[++o];
            r += String.fromCharCode((t & 31) << 6 | f & 63);
        }
        else if (240 <= t && t < 365) {
            let u = "%" + [t, e[++o], e[++o], e[++o]].map(m => m.toString(16)).join("%");
            r += decodeURIComponent(u);
        }
        else
            r += String.fromCharCode((t & 15) << 12 | (e[++o] & 63) << 6 | e[++o] & 63);
    } return r; };
    c.toUtf8 = x;
});
var i = b(n => {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    n.toUtf8 = n.fromUtf8 = void 0;
    function g(e) { return new TextEncoder().encode(e); }
    n.fromUtf8 = g;
    function C(e) { return new TextDecoder("utf-8").decode(e); }
    n.toUtf8 = C;
});
var v = b(s => {
    "use strict";
    Object.defineProperty(s, "__esModule", { value: !0 });
    s.toUtf8 = s.fromUtf8 = void 0;
    var l = U(), a = i(), y = e => typeof TextEncoder == "function" ? (0, a.fromUtf8)(e) : (0, l.fromUtf8)(e);
    s.fromUtf8 = y;
    var _ = e => typeof TextDecoder == "function" ? (0, a.toUtf8)(e) : (0, l.toUtf8)(e);
    s.toUtf8 = _;
});
export { v as a };
