import { a as l, b as J } from "@nf-internal/chunk-CES2B3QZ";
import { b as Q, c as W, d as R, e as ee } from "@nf-internal/chunk-XFGGJM4A";
import "@nf-internal/chunk-GDFKOM2X";
import { a as F, b as k, c as L, d as x, e as P, f as Y, g as j, h as K, i as I, j as M, k as w, l as B, m as U, n as $, o as G, p as V, q as H, r as Z, s as q, t as X } from "@nf-internal/chunk-NZKJJXND";
import "@nf-internal/chunk-PP3Y5BP2";
import "@nf-internal/chunk-OQ64CFVF";
import "@nf-internal/chunk-OZDGPX2W";
import { a as b } from "@nf-internal/chunk-QJ57WJYG";
import { a as N, b as S } from "@nf-internal/chunk-7MOEIGUU";
import "@nf-internal/chunk-KHT3XRRL";
import { a as y } from "@nf-internal/chunk-46XYS7GZ";
import { a as p } from "@nf-internal/chunk-JO5VL25K";
import { a as z } from "@nf-internal/chunk-654UL5QS";
import "@nf-internal/chunk-IPQKEDDX";
import "@nf-internal/chunk-K2QUXVES";
import "@nf-internal/chunk-XCLYSWQ2";
import "@nf-internal/chunk-OVME6ULE";
import "@nf-internal/chunk-GL2BOVXA";
import * as _ from "@angular/core";
import { inject as o, DOCUMENT as A, APP_ID as te, InjectionToken as se, NgZone as re, Injector as ie } from "@angular/core";
var m = class extends l {
    setActiveItem(i) { this.activeItem && this.activeItem.setInactiveStyles(), super.setActiveItem(i), this.activeItem && this.activeItem.setActiveStyles(); }
};
import { Subject as ne } from "rxjs";
import "rxjs/operators";
import "@angular/common";
var T = " ";
function oe(r, i, t) { let e = d(r, i); t = t.trim(), !e.some(s => s.trim() === t) && (e.push(t), r.setAttribute(i, e.join(T))); }
function ae(r, i, t) { let e = d(r, i); t = t.trim(); let s = e.filter(n => n !== t); s.length ? r.setAttribute(i, s.join(T)) : r.removeAttribute(i); }
function d(r, i) { return r.getAttribute(i)?.match(/\S+/g) ?? []; }
var Re = "cdk-describedby-message-container", C = "cdk-describedby-message", c = "cdk-describedby-host", f = 0, ve = (() => { class r {
    _platform = o(p);
    _document = o(A);
    _messageRegistry = new Map;
    _messagesContainer = null;
    _id = `${f++}`;
    constructor() { o(y).load(b), this._id = o(te) + "-" + f++; }
    describe(t, e, s) { if (!this._canBeDescribed(t, e))
        return; let n = u(e, s); typeof e != "string" ? (v(e, this._id), this._messageRegistry.set(n, { messageElement: e, referenceCount: 0 })) : this._messageRegistry.has(n) || this._createMessageElement(e, s), this._isElementDescribedByMessage(t, n) || this._addMessageReference(t, n); }
    removeDescription(t, e, s) { if (!e || !this._isElementNode(t))
        return; let n = u(e, s); if (this._isElementDescribedByMessage(t, n) && this._removeMessageReference(t, n), typeof e == "string") {
        let a = this._messageRegistry.get(n);
        a && a.referenceCount === 0 && this._deleteMessageElement(n);
    } this._messagesContainer?.childNodes.length === 0 && (this._messagesContainer.remove(), this._messagesContainer = null); }
    ngOnDestroy() { let t = this._document.querySelectorAll(`[${c}="${this._id}"]`); for (let e = 0; e < t.length; e++)
        this._removeCdkDescribedByReferenceIds(t[e]), t[e].removeAttribute(c); this._messagesContainer?.remove(), this._messagesContainer = null, this._messageRegistry.clear(); }
    _createMessageElement(t, e) { let s = this._document.createElement("div"); v(s, this._id), s.textContent = t, e && s.setAttribute("role", e), this._createMessagesContainer(), this._messagesContainer.appendChild(s), this._messageRegistry.set(u(t, e), { messageElement: s, referenceCount: 0 }); }
    _deleteMessageElement(t) { this._messageRegistry.get(t)?.messageElement?.remove(), this._messageRegistry.delete(t); }
    _createMessagesContainer() { if (this._messagesContainer)
        return; let t = "cdk-describedby-message-container", e = this._document.querySelectorAll(`.${t}[platform="server"]`); for (let n = 0; n < e.length; n++)
        e[n].remove(); let s = this._document.createElement("div"); s.style.visibility = "hidden", s.classList.add(t), s.classList.add("cdk-visually-hidden"), this._platform.isBrowser || s.setAttribute("platform", "server"), this._document.body.appendChild(s), this._messagesContainer = s; }
    _removeCdkDescribedByReferenceIds(t) { let e = d(t, "aria-describedby").filter(s => s.indexOf(C) != 0); t.setAttribute("aria-describedby", e.join(" ")); }
    _addMessageReference(t, e) { let s = this._messageRegistry.get(e); oe(t, "aria-describedby", s.messageElement.id), t.setAttribute(c, this._id), s.referenceCount++; }
    _removeMessageReference(t, e) { let s = this._messageRegistry.get(e); s.referenceCount--, ae(t, "aria-describedby", s.messageElement.id), t.removeAttribute(c); }
    _isElementDescribedByMessage(t, e) { let s = d(t, "aria-describedby"), n = this._messageRegistry.get(e), a = n && n.messageElement.id; return !!a && s.indexOf(a) != -1; }
    _canBeDescribed(t, e) { if (!this._isElementNode(t))
        return !1; if (e && typeof e == "object")
        return !0; let s = e == null ? "" : `${e}`.trim(), n = t.getAttribute("aria-label"); return s ? !n || n.trim() !== s : !1; }
    _isElementNode(t) { return t.nodeType === this._document.ELEMENT_NODE; }
    static \u0275fac = function (e) { return new (e || r); };
    static \u0275prov = _.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" });
} return r; })();
function u(r, i) { return typeof r == "string" ? `${i || ""}/${r}` : r; }
function v(r, i) { r.id || (r.id = `${C}-${i}-${f++}`); }
var g = class {
    _isNoopTreeKeyManager = !0;
    change = new ne;
    destroy() { this.change.complete(); }
    onKeydown() { }
    getActiveItemIndex() { return null; }
    getActiveItem() { return null; }
    focusItem() { }
};
function ce() { return () => new g; }
var Ae = { provide: R, useFactory: ce }, h = class extends M {
    _focusTrapManager;
    _inertStrategy;
    get enabled() { return this._enabled; }
    set enabled(i) { this._enabled = i, this._enabled ? this._focusTrapManager.register(this) : this._focusTrapManager.deregister(this); }
    constructor(i, t, e, s, n, a, O, D) { super(i, t, e, s, O.defer, D), this._focusTrapManager = n, this._inertStrategy = a, this._focusTrapManager.register(this); }
    destroy() { this._focusTrapManager.deregister(this), super.destroy(); }
    _enable() { this._inertStrategy.preventFocus(this), this.toggleAnchors(!0); }
    _disable() { this._inertStrategy.allowFocus(this), this.toggleAnchors(!1); }
}, E = class {
    _listener = null;
    preventFocus(i) { this._listener && i._document.removeEventListener("focus", this._listener, !0), this._listener = t => this._trapFocus(i, t), i._ngZone.runOutsideAngular(() => { i._document.addEventListener("focus", this._listener, !0); }); }
    allowFocus(i) { this._listener && (i._document.removeEventListener("focus", this._listener, !0), this._listener = null); }
    _trapFocus(i, t) { let e = t.target, s = i._element; e && !s.contains(e) && !e.closest?.("div.cdk-overlay-pane") && setTimeout(() => { i.enabled && !s.contains(i._document.activeElement) && i.focusFirstTabbableElement(); }); }
}, de = new se("FOCUS_TRAP_INERT_STRATEGY"), _e = (() => { class r {
    _focusTrapStack = [];
    register(t) { this._focusTrapStack = this._focusTrapStack.filter(s => s !== t); let e = this._focusTrapStack; e.length && e[e.length - 1]._disable(), e.push(t), t._enable(); }
    deregister(t) { t._disable(); let e = this._focusTrapStack, s = e.indexOf(t); s !== -1 && (e.splice(s, 1), e.length && e[e.length - 1]._enable()); }
    static \u0275fac = function (e) { return new (e || r); };
    static \u0275prov = _.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" });
} return r; })(), Te = (() => { class r {
    _checker = o(I);
    _ngZone = o(re);
    _focusTrapManager = o(_e);
    _document = o(A);
    _inertStrategy;
    _injector = o(ie);
    constructor() { let t = o(de, { optional: !0 }); this._inertStrategy = t || new E; }
    create(t, e = { defer: !1 }) { let s; return typeof e == "boolean" ? s = { defer: e } : s = e, new h(t, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, s, this._injector); }
    static \u0275fac = function (e) { return new (e || r); };
    static \u0275prov = _.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" });
} return r; })();
export { X as A11yModule, m as ActiveDescendantKeyManager, ve as AriaDescriber, c as CDK_DESCRIBEDBY_HOST_ATTRIBUTE, C as CDK_DESCRIBEDBY_ID_PREFIX, H as CdkAriaLive, j as CdkMonitorFocus, B as CdkTrapFocus, h as ConfigurableFocusTrap, Te as ConfigurableFocusTrapFactory, E as EventListenerFocusTrapInertStrategy, P as FOCUS_MONITOR_DEFAULT_OPTIONS, de as FOCUS_TRAP_INERT_STRATEGY, J as FocusKeyManager, Y as FocusMonitor, x as FocusMonitorDetectionMode, M as FocusTrap, w as FocusTrapFactory, Z as HighContrastMode, q as HighContrastModeDetector, k as INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS, F as INPUT_MODALITY_DETECTOR_OPTIONS, L as InputModalityDetector, I as InteractivityChecker, K as IsFocusableConfig, G as LIVE_ANNOUNCER_DEFAULT_OPTIONS, U as LIVE_ANNOUNCER_ELEMENT_TOKEN, $ as LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY, l as ListKeyManager, V as LiveAnnouncer, Re as MESSAGES_CONTAINER_ID, ce as NOOP_TREE_KEY_MANAGER_FACTORY, Ae as NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER, g as NoopTreeKeyManager, R as TREE_KEY_MANAGER, W as TREE_KEY_MANAGER_FACTORY, ee as TREE_KEY_MANAGER_FACTORY_PROVIDER, Q as TreeKeyManager, z as _IdGenerator, oe as addAriaReferencedId, d as getAriaReferenceIds, N as isFakeMousedownFromScreenReader, S as isFakeTouchstartFromScreenReader, ae as removeAriaReferencedId };
//# sourceMappingURL=_angular_cdk_a11y.FPTteU6F3F.js.map
