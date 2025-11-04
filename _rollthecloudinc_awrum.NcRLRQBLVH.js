import { k as r } from "@nf-internal/chunk-GL2BOVXA";
import * as n from "@angular/core";
import { InjectionToken as d } from "@angular/core";
import { AwsRum as p } from "aws-rum-web";
import { Observable as I } from "rxjs";
var y = (() => { class e {
    static { this.\u0275fac = function (t) { return new (t || e); }; }
    static { this.\u0275mod = n.\u0275\u0275defineNgModule({ type: e }); }
    static { this.\u0275inj = n.\u0275\u0275defineInjector({}); }
} return e; })(), g = (e, o) => () => new I(i => { o.runOutsideAngular(() => r(null, null, function* () { try {
    let t = { sessionSampleRate: 1, identityPoolId: e.identityPoolId, guestRoleArn: e.guestRoleArn, endpoint: "https://dataplane.rum." + e.region + ".amazonaws.com", telemetries: ["performance", "errors", "http"], allowCookies: !0, enableXRay: !0 }, c = e.appId, l = "1.0.0", a = e.region, u = new p(c, l, a, t);
}
catch { } })), i.next(), i.complete(); }), s = class {
    constructor(o) { o && (this.appId = o.appId, this.guestRoleArn = o.guestRoleArn, this.region = o.region, this.identityPoolId = o.identityPoolId); }
}, P = new d("RumSettings");
export { y as AwrumModule, P as CLOUDWATCH_RUM_SETTINGS, s as CloudwatchRumSettings, g as initializeRumMonitorFactory };
//# sourceMappingURL=_rollthecloudinc_awrum.NcRLRQBLVH.js.map
