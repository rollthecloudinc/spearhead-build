import { a as h } from "@nf-internal/chunk-F64D2ISK";
import { isObservable as u, of as d } from "rxjs";
function r(s) { return u(s) ? s : d(s); }
import { QueryList as l, InjectionToken as I } from "@angular/core";
import { Subscription as f, isObservable as p, Subject as v, of as b } from "rxjs";
import { take as c } from "rxjs/operators";
var n = class {
    _activeItemIndex = -1;
    _activeItem = null;
    _shouldActivationFollowFocus = !1;
    _horizontalOrientation = "ltr";
    _skipPredicateFn = e => !1;
    _trackByFn = e => e;
    _items = [];
    _typeahead;
    _typeaheadSubscription = f.EMPTY;
    _hasInitialFocused = !1;
    _initializeFocus() { if (this._hasInitialFocused || this._items.length === 0)
        return; let e = 0; for (let i = 0; i < this._items.length; i++)
        if (!this._skipPredicateFn(this._items[i]) && !this._isItemDisabled(this._items[i])) {
            e = i;
            break;
        } let t = this._items[e]; t.makeFocusable ? (this._activeItem?.unfocus(), this._activeItemIndex = e, this._activeItem = t, this._typeahead?.setCurrentSelectedItemIndex(e), t.makeFocusable()) : this.focusItem(e), this._hasInitialFocused = !0; }
    constructor(e, t) { e instanceof l ? (this._items = e.toArray(), e.changes.subscribe(i => { this._items = i.toArray(), this._typeahead?.setItems(this._items), this._updateActiveItemIndex(this._items), this._initializeFocus(); })) : p(e) ? e.subscribe(i => { this._items = i, this._typeahead?.setItems(i), this._updateActiveItemIndex(i), this._initializeFocus(); }) : (this._items = e, this._initializeFocus()), typeof t.shouldActivationFollowFocus == "boolean" && (this._shouldActivationFollowFocus = t.shouldActivationFollowFocus), t.horizontalOrientation && (this._horizontalOrientation = t.horizontalOrientation), t.skipPredicate && (this._skipPredicateFn = t.skipPredicate), t.trackBy && (this._trackByFn = t.trackBy), typeof t.typeAheadDebounceInterval < "u" && this._setTypeAhead(t.typeAheadDebounceInterval); }
    change = new v;
    destroy() { this._typeaheadSubscription.unsubscribe(), this._typeahead?.destroy(), this.change.complete(); }
    onKeydown(e) { switch (e.key) {
        case "Tab": return;
        case "ArrowDown":
            this._focusNextItem();
            break;
        case "ArrowUp":
            this._focusPreviousItem();
            break;
        case "ArrowRight":
            this._horizontalOrientation === "rtl" ? this._collapseCurrentItem() : this._expandCurrentItem();
            break;
        case "ArrowLeft":
            this._horizontalOrientation === "rtl" ? this._expandCurrentItem() : this._collapseCurrentItem();
            break;
        case "Home":
            this._focusFirstItem();
            break;
        case "End":
            this._focusLastItem();
            break;
        case "Enter":
        case " ":
            this._activateCurrentItem();
            break;
        default:
            if (e.key === "*") {
                this._expandAllItemsAtCurrentItemLevel();
                break;
            }
            this._typeahead?.handleKey(e);
            return;
    } this._typeahead?.reset(), e.preventDefault(); }
    getActiveItemIndex() { return this._activeItemIndex; }
    getActiveItem() { return this._activeItem; }
    _focusFirstItem() { this.focusItem(this._findNextAvailableItemIndex(-1)); }
    _focusLastItem() { this.focusItem(this._findPreviousAvailableItemIndex(this._items.length)); }
    _focusNextItem() { this.focusItem(this._findNextAvailableItemIndex(this._activeItemIndex)); }
    _focusPreviousItem() { this.focusItem(this._findPreviousAvailableItemIndex(this._activeItemIndex)); }
    focusItem(e, t = {}) { t.emitChangeEvent ??= !0; let i = typeof e == "number" ? e : this._items.findIndex(m => this._trackByFn(m) === this._trackByFn(e)); if (i < 0 || i >= this._items.length)
        return; let a = this._items[i]; if (this._activeItem !== null && this._trackByFn(a) === this._trackByFn(this._activeItem))
        return; let _ = this._activeItem; this._activeItem = a ?? null, this._activeItemIndex = i, this._typeahead?.setCurrentSelectedItemIndex(i), this._activeItem?.focus(), _?.unfocus(), t.emitChangeEvent && this.change.next(this._activeItem), this._shouldActivationFollowFocus && this._activateCurrentItem(); }
    _updateActiveItemIndex(e) { let t = this._activeItem; if (!t)
        return; let i = e.findIndex(a => this._trackByFn(a) === this._trackByFn(t)); i > -1 && i !== this._activeItemIndex && (this._activeItemIndex = i, this._typeahead?.setCurrentSelectedItemIndex(i)); }
    _setTypeAhead(e) { this._typeahead = new h(this._items, { debounceInterval: typeof e == "number" ? e : void 0, skipPredicate: t => this._skipPredicateFn(t) }), this._typeaheadSubscription = this._typeahead.selectedItem.subscribe(t => { this.focusItem(t); }); }
    _findNextAvailableItemIndex(e) { for (let t = e + 1; t < this._items.length; t++)
        if (!this._skipPredicateFn(this._items[t]))
            return t; return e; }
    _findPreviousAvailableItemIndex(e) { for (let t = e - 1; t >= 0; t--)
        if (!this._skipPredicateFn(this._items[t]))
            return t; return e; }
    _collapseCurrentItem() { if (this._activeItem)
        if (this._isCurrentItemExpanded())
            this._activeItem.collapse();
        else {
            let e = this._activeItem.getParent();
            if (!e || this._skipPredicateFn(e))
                return;
            this.focusItem(e);
        } }
    _expandCurrentItem() { this._activeItem && (this._isCurrentItemExpanded() ? r(this._activeItem.getChildren()).pipe(c(1)).subscribe(e => { let t = e.find(i => !this._skipPredicateFn(i)); t && this.focusItem(t); }) : this._activeItem.expand()); }
    _isCurrentItemExpanded() { return this._activeItem ? typeof this._activeItem.isExpanded == "boolean" ? this._activeItem.isExpanded : this._activeItem.isExpanded() : !1; }
    _isItemDisabled(e) { return typeof e.isDisabled == "boolean" ? e.isDisabled : e.isDisabled?.(); }
    _expandAllItemsAtCurrentItemLevel() { if (!this._activeItem)
        return; let e = this._activeItem.getParent(), t; e ? t = r(e.getChildren()) : t = b(this._items.filter(i => i.getParent() === null)), t.pipe(c(1)).subscribe(i => { for (let a of i)
        a.expand(); }); }
    _activateCurrentItem() { this._activeItem?.activate(); }
};
function o() { return (s, e) => new n(s, e); }
var y = new I("tree-key-manager", { providedIn: "root", factory: o }), w = { provide: y, useFactory: o };
export { r as a, n as b, o as c, y as d, w as e };
