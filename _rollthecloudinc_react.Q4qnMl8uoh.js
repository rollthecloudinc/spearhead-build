import "@nf-internal/chunk-GL2BOVXA";
import * as e from "@angular/core";
import "@angular/core";
var s = ["mfeReactComponent"];
var p = (() => { class t {
    constructor() { }
    ngOnChanges(o) { this.render(); }
    ngAfterViewInit() { this.render(); }
    ngOnDestroy() { }
    render() { let o = this.component(); }
    static { this.\u0275fac = function (n) { return new (n || t); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: t, selectors: [["druid-mfe-react"]], viewQuery: function (n, i) { if (n & 1 && e.\u0275\u0275viewQuery(s, 5), n & 2) {
            let c;
            e.\u0275\u0275queryRefresh(c = e.\u0275\u0275loadQuery()) && (i.containerRef = c.first);
        } }, inputs: { component: "component" }, standalone: !1, features: [e.\u0275\u0275NgOnChangesFeature], decls: 2, vars: 0, consts: [["mfeReactComponent", ""]], template: function (n, i) { n & 1 && e.\u0275\u0275element(0, "span", null, 0); }, encapsulation: 2 }); }
} return t; })(), l = (() => { class t {
    static { this.\u0275fac = function (n) { return new (n || t); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: t }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({}); }
} return t; })();
export { p as MfeReactComponent, l as ReactModule };
//# sourceMappingURL=_rollthecloudinc_react.Q4qnMl8uoh.js.map
