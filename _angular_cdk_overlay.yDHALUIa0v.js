import { A as T, B as W, C as B, D as G, E as H, a as f, b as y, c as C, d as g, e as h, f as _, g as v, h as O, i as E, j as F, k as b, l as k, m as N, n as D, o as P, p as V, q as R, r as l, s as w, t as x, u as I, v as j, w as z, x as A, y as M, z as L } from "@nf-internal/chunk-2YFWLEHR";
import "@nf-internal/chunk-M3OHZLZK";
import "@nf-internal/chunk-GEJ4IV6Q";
import "@nf-internal/chunk-WI7CKD4I";
import { d as i, f as a, g as c, i as s, l as u, m as d, n as m, o as S, p } from "@nf-internal/chunk-QZOM62HR";
import "@nf-internal/chunk-LGOJNMSJ";
import "@nf-internal/chunk-KHT3XRRL";
import "@nf-internal/chunk-46XYS7GZ";
import "@nf-internal/chunk-JO5VL25K";
import "@nf-internal/chunk-654UL5QS";
import { a as o } from "@nf-internal/chunk-TIOIYHO6";
import "@nf-internal/chunk-NKWK47WB";
import "@nf-internal/chunk-IPQKEDDX";
import "@nf-internal/chunk-K2QUXVES";
import "@nf-internal/chunk-7CCOYIAI";
import "@nf-internal/chunk-OVCW7K7M";
import "@nf-internal/chunk-XCLYSWQ2";
import "@nf-internal/chunk-OVME6ULE";
import "@nf-internal/chunk-GL2BOVXA";
import * as n from "@angular/core";
import { inject as J, RendererFactory2 as K } from "@angular/core";
import "@angular/common";
import "rxjs";
import "rxjs/operators";
var $ = (() => { class t extends l {
    _renderer = J(K).createRenderer(null, null);
    _fullScreenEventName;
    _cleanupFullScreenListener;
    constructor() { super(); }
    ngOnDestroy() { super.ngOnDestroy(), this._cleanupFullScreenListener?.(); }
    _createContainer() { let e = this._getEventName(); super._createContainer(), this._adjustParentForFullscreenChange(), e && (this._cleanupFullScreenListener?.(), this._cleanupFullScreenListener = this._renderer.listen("document", e, () => { this._adjustParentForFullscreenChange(); })); }
    _adjustParentForFullscreenChange() { this._containerElement && (this.getFullscreenElement() || this._document.body).appendChild(this._containerElement); }
    _getEventName() { if (!this._fullScreenEventName) {
        let e = this._document;
        e.fullscreenEnabled ? this._fullScreenEventName = "fullscreenchange" : e.webkitFullscreenEnabled ? this._fullScreenEventName = "webkitfullscreenchange" : e.mozFullScreenEnabled ? this._fullScreenEventName = "mozfullscreenchange" : e.msFullscreenEnabled && (this._fullScreenEventName = "MSFullscreenChange");
    } return this._fullScreenEventName; }
    getFullscreenElement() { let e = this._document; return e.fullscreenElement || e.webkitFullscreenElement || e.mozFullScreenElement || e.msFullscreenElement || null; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = n.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })();
export { y as BlockScrollStrategy, G as CdkConnectedOverlay, B as CdkOverlayOrigin, c as CdkScrollable, g as CloseScrollStrategy, N as ConnectedOverlayPositionChange, b as ConnectionPositionPair, I as FlexibleConnectedPositionStrategy, $ as FullscreenOverlayContainer, M as GlobalPositionStrategy, _ as NoopScrollStrategy, W as Overlay, F as OverlayConfig, l as OverlayContainer, V as OverlayKeyboardDispatcher, H as OverlayModule, R as OverlayOutsideClickDispatcher, L as OverlayPositionBuilder, w as OverlayRef, O as RepositionScrollStrategy, z as STANDARD_DROPDOWN_ADJACENT_POSITIONS, j as STANDARD_DROPDOWN_BELOW_POSITIONS, a as ScrollDispatcher, E as ScrollStrategyOptions, k as ScrollingVisibility, s as ViewportRuler, f as createBlockScrollStrategy, C as createCloseScrollStrategy, x as createFlexibleConnectedPositionStrategy, A as createGlobalPositionStrategy, h as createNoopScrollStrategy, T as createOverlayRef, v as createRepositionScrollStrategy, P as validateHorizontalPosition, D as validateVerticalPosition, i as \u0275\u0275CdkFixedSizeVirtualScroll, p as \u0275\u0275CdkScrollableModule, d as \u0275\u0275CdkVirtualForOf, u as \u0275\u0275CdkVirtualScrollViewport, m as \u0275\u0275CdkVirtualScrollableElement, S as \u0275\u0275CdkVirtualScrollableWindow, o as \u0275\u0275Dir };
//# sourceMappingURL=_angular_cdk_overlay.yDHALUIa0v.js.map
