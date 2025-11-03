import { a as F } from "@nf-internal/chunk-GQ5QNLBN";
import { a as h, b as g, h as A } from "@nf-internal/chunk-GL2BOVXA";
var C = A(F(), 1);
import * as n from "@angular/core";
import { makeStateKey as x, InjectionToken as b, PLATFORM_ID as M, Injector as N, TransferState as T, provideAppInitializer as _, inject as y } from "@angular/core";
import * as j from "@ngrx/effects";
import { createEffect as f, ofType as S, EffectsModule as $ } from "@ngrx/effects";
import { isPlatformBrowser as E, isPlatformServer as D } from "@angular/common";
import * as a from "js-cookie";
import "oidc-client-ts";
import { UserManager as p, WebStorageStateStore as O } from "oidc-client-ts";
import * as m from "@ngrx/data";
import { ofEntityType as K, ofEntityOp as P, EntityOp as R } from "@ngrx/data";
import { tap as u, switchMap as B, take as U, concatMap as L } from "rxjs/operators";
import * as v from "@rollthecloudinc/auth";
import { AuthActions as l, AuthFacade as J, AuthModule as z } from "@rollthecloudinc/auth";
import { Observable as V } from "rxjs";
var d = class {
    constructor(o) { o && (this.authority = o.authority, this.client_id = o.client_id, this.redirect_uri = o.redirect_uri, this.silent_redirect_uri = o.silent_redirect_uri, this.response_type = o.response_type, this.scope = o.scope, this.filterProtocolClaims = o.filterProtocolClaims, this.loadUserInfo = o.loadUserInfo, this.automaticSilentRenew = o.automaticSilentRenew, this.metadata = h({}, o.metadata), this.userStore = o.userStore ? o.userStore : void 0, this.stateStore = o.userStore ? o.stateStore : void 0); }
}, k = x("auth"), w = (() => { class i {
    set request(e) { this.req = e; }
    constructor(e, t, r) { this.clientSettings = e, this.platformId = t, this.transferState = r, this.data = {}, this.isBrowser = E(this.platformId), this.cookieMap = { oa: "access_token", oi: "id_token", or: "refresh_token", os: "scope", oe: "expires_at", op: "profile" }, this.tokenKey = `oidc.user:${this.clientSettings.authority}:${this.clientSettings.client_id}`; }
    init() { if (this.isBrowser)
        if (sessionStorage.getItem(this.tokenKey))
            this.setItem(this.tokenKey, sessionStorage.getItem(this.tokenKey));
        else if (this.transferState.hasKey(k)) {
            let e = this.transferState.get(k, void 0);
            e && this.setItem(this.tokenKey, e);
        }
        else
            for (let e = 0; e < sessionStorage.length; e++) {
                let t = sessionStorage.key(e);
                this.setItem(t, sessionStorage.getItem(t));
            }
    else {
        let e = { token_type: "Bearer" }, t;
        Object.getOwnPropertyNames(this.cookieMap).forEach(r => { let s = this.getCookie(r); s && s !== "" && (s = this.translateFromCookieValue(r, s), r === "oe" ? t = s : e[this.cookieMap[r]] = s); }), e.access_token && (this.data[this.tokenKey] = JSON.stringify(e), this.transferState.set(k, JSON.stringify(g(h({}, e), { expires_at: t }))));
    } }
    getItem(e) { return this.data[e]; }
    setItem(e, t) { if (e === this.tokenKey) {
        let r = JSON.parse(t);
        Object.getOwnPropertyNames(this.cookieMap).forEach(s => { this.setCookie(s, this.translateCookieValue(s, r[this.cookieMap[s]])); });
    } this.isBrowser && sessionStorage.setItem(e, t), this.data[e] = t; }
    removeItem(e) { this.removeCookie(e), this.isBrowser && sessionStorage.removeItem(e), delete this.data[e]; }
    get length() { return Object.getOwnPropertyNames(this.data).length; }
    key(e) { return console.log("index()"), Object.getOwnPropertyNames(this.data)[e]; }
    getCookie(e) { if (this.isBrowser)
        return a.get(e); if (this.req)
        return this.req.cookies[e] ?? ""; }
    setCookie(e, t) { this.isBrowser && a.set(e, t); }
    removeCookie(e) { this.isBrowser && a.remove(e); }
    translateCookieValue(e, t) { switch (e) {
        case "os": return t.split(" ").join("|");
        case "oe": return `${t}`;
        case "op": return JSON.stringify(t);
        default: return t;
    } }
    translateFromCookieValue(e, t) { switch (e) {
        case "os": return t.split("|").join(" ");
        case "oe": return C.toNumber(t);
        case "op": return JSON.parse(t);
        default: return t;
    } }
    clear() { }
    static { this.\u0275fac = function (t) { return new (t || i)(n.\u0275\u0275inject(d), n.\u0275\u0275inject(Object), n.\u0275\u0275inject(n.TransferState)); }; }
    static { this.\u0275prov = n.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac }); }
} return i; })(), Y = (i, o) => new p(new d(g(h({}, i), { stateStore: new O({ store: o }), userStore: new O({ store: o }) }))), G = (i, o, e) => () => new Promise(t => { i.getUser().then(r => { r ? (o.setUser(r), setTimeout(() => t())) : t(); }); }), H = (i, o, e, t) => { let r = new w(i, o, t); return D(o), r.init(), r; }, Q = (() => { class i {
    constructor(e, t, r) { this.actions$ = e, this.userManager = t, this.entityActionFactory = r, this.login$ = f(() => this.actions$.pipe(S(l.AuthActionTypes.Login), u(() => { this.userManager.signinRedirect(); })), { dispatch: !1 }), this.logout$ = f(() => this.actions$.pipe(S(l.AuthActionTypes.Logout), u(() => { this.userManager.signoutRedirect(); })), { dispatch: !1 }), this.completeAuthentication$ = f(() => this.actions$.pipe(S(l.AuthActionTypes.CompleteAuthentication), B(() => new V(s => { this.userManager.signinRedirectCallback().then(c => { s.next(new l.SetUser(c)), s.complete(); }); })))), this.loadCookies$ = f(() => this.actions$.pipe(K("Cookie"), P([R.QUERY_ALL_SUCCESS]), u(s => console.log(s.payload.data)), u(s => { })), { dispatch: !1 }); }
    static { this.\u0275fac = function (t) { return new (t || i)(n.\u0275\u0275inject(j.Actions), n.\u0275\u0275inject(p), n.\u0275\u0275inject(m.EntityActionFactory)); }; }
    static { this.\u0275prov = n.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac }); }
} return i; })(), W = { Cookie: { entityName: "Cookie" } }, I = new b("ClientSettings"), he = (() => { class i {
    constructor(e) { e.registerMetadataMap(W); }
    static forRoot() { return { ngModule: i, providers: [{ provide: w, useFactory: H, deps: [I, M, N, T] }, { provide: p, useFactory: Y, deps: [I, w] }, _(() => G(y(p), y(J), y(M))())] }; }
    static { this.\u0275fac = function (t) { return new (t || i)(n.\u0275\u0275inject(m.EntityDefinitionService)); }; }
    static { this.\u0275mod = n.\u0275\u0275defineNgModule({ type: i }); }
    static { this.\u0275inj = n.\u0275\u0275defineInjector({ imports: [z, $.forFeature([Q])] }); }
} return i; })(), fe = (() => { class i {
    constructor(e) { this.authFacade = e; }
    intercept(e, t) { return this.authFacade.idToken$.pipe(U(1), L(r => { let s = e.headers; if (e.url.indexOf("/awproxy"), r && e.url.indexOf("github") === -1 && e.url.indexOf("cloudfront") === -1 && e.url.indexOf("cloudinary") === -1 && e.url.indexOf("carquery") === -1 && e.url.indexOf("gateway.marvel.com") === -1 && e.url.indexOf("hereapi.com") === -1 && e.url.indexOf(".es.") === -1 && e.url.indexOf(".s3.") === -1 && e.url.indexOf("/awproxy") === -1) {
        s = s.set("Authorization", r);
        let c = e.clone({ headers: s });
        return t.handle(c);
    }
    else {
        let c = e.clone({ headers: s });
        return t.handle(c);
    } })); }
    static { this.\u0275fac = function (t) { return new (t || i)(n.\u0275\u0275inject(v.AuthFacade)); }; }
    static { this.\u0275prov = n.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac }); }
} return i; })();
export { I as CLIENT_SETTINGS, d as ClientSettings, he as OidcModule, fe as TokenInterceptor };
//# sourceMappingURL=_rollthecloudinc_oidc.HAmB3rrM9u.js.map
