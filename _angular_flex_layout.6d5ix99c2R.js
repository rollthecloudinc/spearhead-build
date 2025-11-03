import { a as t } from "@nf-internal/chunk-GL2BOVXA";
import * as r from "@angular/core";
import { Version as p, PLATFORM_ID as s } from "@angular/core";
import { LAYOUT_CONFIG as i, DEFAULT_CONFIG as d, BREAKPOINT as l, SERVER_TOKEN as n } from "@angular/flex-layout/core";
export * from "@angular/flex-layout/core";
import { ExtendedModule as m } from "@angular/flex-layout/extended";
export * from "@angular/flex-layout/extended";
import { FlexModule as a } from "@angular/flex-layout/flex";
export * from "@angular/flex-layout/flex";
import { GridModule as f } from "@angular/flex-layout/grid";
export * from "@angular/flex-layout/grid";
import { isPlatformServer as v } from "@angular/common";
var N = new p("15.0.0-beta.42");
var g = (() => { class e {
    constructor(o, u) { v(u) && !o && console.warn("Warning: Flex Layout loaded on the server without FlexLayoutServerModule"); }
    static withConfig(o, u = []) { return { ngModule: e, providers: o.serverLoaded ? [{ provide: i, useValue: t(t({}, d), o) }, { provide: l, useValue: u, multi: !0 }, { provide: n, useValue: !0 }] : [{ provide: i, useValue: t(t({}, d), o) }, { provide: l, useValue: u, multi: !0 }] }; }
} return e.\u0275fac = function (o) { return new (o || e)(r.\u0275\u0275inject(n), r.\u0275\u0275inject(s)); }, e.\u0275mod = r.\u0275\u0275defineNgModule({ type: e }), e.\u0275inj = r.\u0275\u0275defineInjector({ imports: [a, m, f, a, m, f] }), e; })();
export { g as FlexLayoutModule, N as VERSION };
/*! Bundled license information:

@angular/flex-layout/fesm2020/angular-flex-layout.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
//# sourceMappingURL=_angular_flex_layout.6d5ix99c2R.js.map
