import "@nf-internal/chunk-GL2BOVXA";
import * as o from "@angular/core";
import { InjectionToken as y } from "@angular/core";
import * as d from "@ngrx/effects";
import { createEffect as c, ofType as u, EffectsModule as h } from "@ngrx/effects";
import * as m from "@ngrx/data";
import { EntityOp as a, ofEntityType as g, ofEntityOp as A } from "@ngrx/data";
import { map as E, tap as f } from "rxjs/operators";
import { AuthActions as I } from "@rollthecloudinc/auth";
import * as l from "js-cookie";
var v = (() => { class t {
    constructor(n, e) { this.actions$ = n, this.entityActionFactory = e, this.setUser = c(() => this.actions$.pipe(u(I.AuthActionTypes.SetUser), E(() => this.entityActionFactory.create("Cookie", a.QUERY_ALL)))), this.loadCookies$ = c(() => this.actions$.pipe(g("Cookie"), A([a.QUERY_ALL_SUCCESS]), f(s => console.log(s.payload.data)), f(s => { s.payload.data.forEach(r => l.set(r.name, r.value, { expires: new Date(new Date().getTime() + 1 * 3600 * 1e3) })); })), { dispatch: !1 }); }
    static { this.\u0275fac = function (e) { return new (e || t)(o.\u0275\u0275inject(d.Actions), o.\u0275\u0275inject(m.EntityActionFactory)); }; }
    static { this.\u0275prov = o.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac }); }
} return t; })(), F = (() => { class t {
    static { this.\u0275fac = function (e) { return new (e || t); }; }
    static { this.\u0275mod = o.\u0275\u0275defineNgModule({ type: t }); }
    static { this.\u0275inj = o.\u0275\u0275defineInjector({ imports: [h.forFeature([v])] }); }
} return t; })(), p = class {
    constructor(i) { i && (this.identityPoolId = i.identityPoolId, this.region = i.region, this.userPoolId = i.userPoolId); }
}, S = new y("CognitoSettings");
export { F as AwcogModule, S as COGNITO_SETTINGS, p as CognitoSettings };
//# sourceMappingURL=_rollthecloudinc_awcog.gyNAjqVthC.js.map
