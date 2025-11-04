import "@nf-internal/chunk-GL2BOVXA";
import * as s from "@angular/forms";
import { NG_VALUE_ACCESSOR as C, NG_VALIDATORS as h, FormsModule as f } from "@angular/forms";
import * as e from "@angular/core";
import { forwardRef as d } from "@angular/core";
import * as _ from "@angular/common";
import { CommonModule as y } from "@angular/common";
var x = ["treeContainer"], w = (i, r) => ({ ruleset: i, invalid: r });
function T(i, r) { if (i & 1 && e.\u0275\u0275element(0, "i", 12), i & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("ngClass", t.getClassNames("arrowIcon"));
} }
function b(i, r) { i & 1 && e.\u0275\u0275elementContainer(0); }
function v(i, r) { if (i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, b, 1, 0, "ng-container", 18), e.\u0275\u0275elementContainerEnd()), i & 2) {
    let t = r.ngIf, n = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", t)("ngTemplateOutletContext", n.getArrowIconContext());
} }
function M(i, r) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "a", 17), e.\u0275\u0275listener("click", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(o.toggleCollapse()); }), e.\u0275\u0275template(1, v, 2, 2, "ng-container", 14), e.\u0275\u0275elementEnd();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext(), n = e.\u0275\u0275reference(2);
    e.\u0275\u0275property("ngClass", t.getClassNames("arrowIconButton", t.data.collapsed ? "collapsed" : "")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.getArrowIconTemplate())("ngIfElse", n);
} }
function O(i, r) { i & 1 && e.\u0275\u0275elementContainer(0); }
function S(i, r) { if (i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275elementStart(1, "div", 12), e.\u0275\u0275template(2, O, 1, 0, "ng-container", 18), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementContainerEnd()), i & 2) {
    let t = r.ngIf, n = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngClass", n.getClassNames("buttonGroup", "rightAlign")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", t)("ngTemplateOutletContext", n.getButtonGroupContext());
} }
function B(i, r) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "button", 19), e.\u0275\u0275listener("click", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext(2); return e.\u0275\u0275resetView(o.addRuleSet()); }), e.\u0275\u0275element(1, "i", 12), e.\u0275\u0275text(2, " Ruleset "), e.\u0275\u0275elementEnd();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275property("ngClass", t.getClassNames("button"))("disabled", t.disabled), e.\u0275\u0275advance(), e.\u0275\u0275property("ngClass", t.getClassNames("addIcon"));
} }
function I(i, r) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275elementStart(1, "button", 19), e.\u0275\u0275listener("click", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext(2); return e.\u0275\u0275resetView(o.removeRuleSet()); }), e.\u0275\u0275element(2, "i", 12), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementContainerEnd();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngClass", t.getClassNames("button", "removeButton"))("disabled", t.disabled), e.\u0275\u0275advance(), e.\u0275\u0275property("ngClass", t.getClassNames("removeIcon"));
} }
function E(i, r) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div", 12)(1, "button", 19), e.\u0275\u0275listener("click", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(o.addRule()); }), e.\u0275\u0275element(2, "i", 12), e.\u0275\u0275text(3, " Rule "), e.\u0275\u0275elementEnd(), e.\u0275\u0275template(4, B, 3, 3, "button", 20)(5, I, 3, 3, "ng-container", 21), e.\u0275\u0275elementEnd();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("ngClass", t.getClassNames("buttonGroup", "rightAlign")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngClass", t.getClassNames("button"))("disabled", t.disabled), e.\u0275\u0275advance(), e.\u0275\u0275property("ngClass", t.getClassNames("addIcon")), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngIf", t.allowRuleset), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !!t.parentValue && t.allowRuleset);
} }
function V(i, r) { i & 1 && e.\u0275\u0275elementContainer(0); }
function P(i, r) { if (i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, V, 1, 0, "ng-container", 18), e.\u0275\u0275elementContainerEnd()), i & 2) {
    let t = r.ngIf, n = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", t)("ngTemplateOutletContext", n.getSwitchGroupContext());
} }
function Q(i, r) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div", 12)(1, "div", 12)(2, "input", 22, 4), e.\u0275\u0275twoWayListener("ngModelChange", function (o) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(2); return e.\u0275\u0275twoWayBindingSet(a.data.condition, o) || (a.data.condition = o), e.\u0275\u0275resetView(o); }), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(4, "label", 17), e.\u0275\u0275listener("click", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275reference(3), a = e.\u0275\u0275nextContext(2); return e.\u0275\u0275resetView(a.changeCondition(o.value)); }), e.\u0275\u0275text(5, "AND"), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(6, "div", 12)(7, "input", 23, 5), e.\u0275\u0275twoWayListener("ngModelChange", function (o) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(2); return e.\u0275\u0275twoWayBindingSet(a.data.condition, o) || (a.data.condition = o), e.\u0275\u0275resetView(o); }), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(9, "label", 17), e.\u0275\u0275listener("click", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275reference(8), a = e.\u0275\u0275nextContext(2); return e.\u0275\u0275resetView(a.changeCondition(o.value)); }), e.\u0275\u0275text(10, "OR"), e.\u0275\u0275elementEnd()()();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275property("ngClass", t.getClassNames("switchGroup", "transition")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngClass", t.getClassNames("switchControl")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngClass", t.getClassNames("switchRadio")), e.\u0275\u0275twoWayProperty("ngModel", t.data.condition), e.\u0275\u0275property("disabled", t.disabled), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngClass", t.getClassNames("switchLabel")), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngClass", t.getClassNames("switchControl")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngClass", t.getClassNames("switchRadio")), e.\u0275\u0275twoWayProperty("ngModel", t.data.condition), e.\u0275\u0275property("disabled", t.disabled), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngClass", t.getClassNames("switchLabel"));
} }
function q(i, r) { if (i & 1 && e.\u0275\u0275template(0, Q, 11, 11, "div", 16), i & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("ngIf", t.data);
} }
function R(i, r) { i & 1 && e.\u0275\u0275elementContainer(0); }
function D(i, r) { if (i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275elementStart(1, "div", 12), e.\u0275\u0275template(2, R, 1, 0, "ng-container", 18), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementContainerEnd()), i & 2) {
    let t = r.ngIf, n = e.\u0275\u0275nextContext(3).$implicit, o = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngClass", o.getClassNames("buttonGroup", "rightAlign")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", t)("ngTemplateOutletContext", o.getRemoveButtonContext(n));
} }
function N(i, r) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div", 12)(1, "button", 19), e.\u0275\u0275listener("click", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext(3).$implicit, a = e.\u0275\u0275nextContext(2); return e.\u0275\u0275resetView(a.removeRule(o, a.data)); }), e.\u0275\u0275element(2, "i", 12), e.\u0275\u0275elementEnd()();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext(5);
    e.\u0275\u0275property("ngClass", t.getClassNames("removeButtonSize", "rightAlign")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngClass", t.getClassNames("button", "removeButton"))("disabled", t.disabled), e.\u0275\u0275advance(), e.\u0275\u0275property("ngClass", t.getClassNames("removeIcon"));
} }
function k(i, r) { i & 1 && e.\u0275\u0275elementContainer(0); }
function F(i, r) { if (i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, k, 1, 0, "ng-container", 18), e.\u0275\u0275elementContainerEnd()), i & 2) {
    let t = r.ngIf, n = e.\u0275\u0275nextContext(4).$implicit, o = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", t)("ngTemplateOutletContext", o.getEntityContext(n));
} }
function W(i, r) { if (i & 1 && (e.\u0275\u0275elementStart(0, "div", 27), e.\u0275\u0275template(1, F, 2, 2, "ng-container", 14), e.\u0275\u0275elementEnd()), i & 2) {
    e.\u0275\u0275nextContext();
    let t = e.\u0275\u0275reference(6), n = e.\u0275\u0275nextContext(4);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", n.getEntityTemplate())("ngIfElse", t);
} }
function G(i, r) { if (i & 1 && (e.\u0275\u0275elementStart(0, "option", 30), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let t = r.$implicit;
    e.\u0275\u0275property("ngValue", t.value), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate1(" ", t.name, " ");
} }
function A(i, r) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div", 12)(1, "select", 28), e.\u0275\u0275twoWayListener("ngModelChange", function (o) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(3).$implicit; return e.\u0275\u0275twoWayBindingSet(a.entity, o) || (a.entity = o), e.\u0275\u0275resetView(o); }), e.\u0275\u0275listener("ngModelChange", function (o) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(3), l = a.$implicit, c = a.index, p = e.\u0275\u0275nextContext(2); return e.\u0275\u0275resetView(p.changeEntity(o, l, c, p.data)); }), e.\u0275\u0275template(2, G, 2, 2, "option", 29), e.\u0275\u0275elementEnd()();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext(3).$implicit, n = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275property("ngClass", n.getClassNames("entityControlSize")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngClass", n.getClassNames("entityControl")), e.\u0275\u0275twoWayProperty("ngModel", t.entity), e.\u0275\u0275property("disabled", n.disabled), e.\u0275\u0275advance(), e.\u0275\u0275property("ngForOf", n.entities);
} }
function $(i, r) { i & 1 && e.\u0275\u0275elementContainer(0); }
function L(i, r) { if (i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, $, 1, 0, "ng-container", 18), e.\u0275\u0275elementContainerEnd()), i & 2) {
    let t = r.ngIf, n = e.\u0275\u0275nextContext(3).$implicit, o = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", t)("ngTemplateOutletContext", o.getFieldContext(n));
} }
function z(i, r) { if (i & 1 && (e.\u0275\u0275elementStart(0, "option", 30), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let t = r.$implicit;
    e.\u0275\u0275property("ngValue", t.value), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate1(" ", t.name, " ");
} }
function j(i, r) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div", 12)(1, "select", 28), e.\u0275\u0275twoWayListener("ngModelChange", function (o) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(3).$implicit; return e.\u0275\u0275twoWayBindingSet(a.field, o) || (a.field = o), e.\u0275\u0275resetView(o); }), e.\u0275\u0275listener("ngModelChange", function (o) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(3).$implicit, l = e.\u0275\u0275nextContext(2); return e.\u0275\u0275resetView(l.changeField(o, a)); }), e.\u0275\u0275template(2, z, 2, 2, "option", 29), e.\u0275\u0275elementEnd()();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext(3).$implicit, n = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275property("ngClass", n.getClassNames("fieldControlSize")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngClass", n.getClassNames("fieldControl")), e.\u0275\u0275twoWayProperty("ngModel", t.field), e.\u0275\u0275property("disabled", n.disabled), e.\u0275\u0275advance(), e.\u0275\u0275property("ngForOf", n.getFields(t.entity));
} }
function H(i, r) { i & 1 && e.\u0275\u0275elementContainer(0); }
function U(i, r) { if (i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, H, 1, 0, "ng-container", 18), e.\u0275\u0275elementContainerEnd()), i & 2) {
    let t = r.ngIf, n = e.\u0275\u0275nextContext(3).$implicit, o = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", t)("ngTemplateOutletContext", o.getOperatorContext(n));
} }
function K(i, r) { if (i & 1 && (e.\u0275\u0275elementStart(0, "option", 30), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let t = r.$implicit;
    e.\u0275\u0275property("ngValue", t), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate1(" ", t, " ");
} }
function J(i, r) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div", 12)(1, "select", 28), e.\u0275\u0275twoWayListener("ngModelChange", function (o) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(3).$implicit; return e.\u0275\u0275twoWayBindingSet(a.operator, o) || (a.operator = o), e.\u0275\u0275resetView(o); }), e.\u0275\u0275listener("ngModelChange", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext(3).$implicit, a = e.\u0275\u0275nextContext(2); return e.\u0275\u0275resetView(a.changeOperator(o)); }), e.\u0275\u0275template(2, K, 2, 2, "option", 29), e.\u0275\u0275elementEnd()();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext(3).$implicit, n = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275property("ngClass", n.getClassNames("operatorControlSize")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngClass", n.getClassNames("operatorControl")), e.\u0275\u0275twoWayProperty("ngModel", t.operator), e.\u0275\u0275property("disabled", n.disabled), e.\u0275\u0275advance(), e.\u0275\u0275property("ngForOf", n.getOperators(t.field));
} }
function X(i, r) { i & 1 && e.\u0275\u0275elementContainer(0); }
function Y(i, r) { if (i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, X, 1, 0, "ng-container", 18), e.\u0275\u0275elementContainerEnd()), i & 2) {
    let t = r.ngIf, n = e.\u0275\u0275nextContext(3).$implicit, o = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", t)("ngTemplateOutletContext", o.getInputContext(n));
} }
function Z(i, r) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "input", 39), e.\u0275\u0275twoWayListener("ngModelChange", function (o) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(4).$implicit; return e.\u0275\u0275twoWayBindingSet(a.value, o) || (a.value = o), e.\u0275\u0275resetView(o); }), e.\u0275\u0275listener("ngModelChange", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext(6); return e.\u0275\u0275resetView(o.changeInput()); }), e.\u0275\u0275elementEnd();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext(4).$implicit, n = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275property("ngClass", n.getClassNames("inputControl")), e.\u0275\u0275twoWayProperty("ngModel", t.value), e.\u0275\u0275property("disabled", n.disabled);
} }
function ee(i, r) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "input", 40), e.\u0275\u0275twoWayListener("ngModelChange", function (o) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(4).$implicit; return e.\u0275\u0275twoWayBindingSet(a.value, o) || (a.value = o), e.\u0275\u0275resetView(o); }), e.\u0275\u0275listener("ngModelChange", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext(6); return e.\u0275\u0275resetView(o.changeInput()); }), e.\u0275\u0275elementEnd();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext(4).$implicit, n = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275property("ngClass", n.getClassNames("inputControl")), e.\u0275\u0275twoWayProperty("ngModel", t.value), e.\u0275\u0275property("disabled", n.disabled);
} }
function te(i, r) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "input", 41), e.\u0275\u0275twoWayListener("ngModelChange", function (o) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(4).$implicit; return e.\u0275\u0275twoWayBindingSet(a.value, o) || (a.value = o), e.\u0275\u0275resetView(o); }), e.\u0275\u0275listener("ngModelChange", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext(6); return e.\u0275\u0275resetView(o.changeInput()); }), e.\u0275\u0275elementEnd();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext(4).$implicit, n = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275property("ngClass", n.getClassNames("inputControl")), e.\u0275\u0275twoWayProperty("ngModel", t.value), e.\u0275\u0275property("disabled", n.disabled);
} }
function ne(i, r) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "input", 42), e.\u0275\u0275twoWayListener("ngModelChange", function (o) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(4).$implicit; return e.\u0275\u0275twoWayBindingSet(a.value, o) || (a.value = o), e.\u0275\u0275resetView(o); }), e.\u0275\u0275listener("ngModelChange", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext(6); return e.\u0275\u0275resetView(o.changeInput()); }), e.\u0275\u0275elementEnd();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext(4).$implicit, n = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275property("ngClass", n.getClassNames("inputControl")), e.\u0275\u0275twoWayProperty("ngModel", t.value), e.\u0275\u0275property("disabled", n.disabled);
} }
function ie(i, r) { if (i & 1 && (e.\u0275\u0275elementStart(0, "option", 30), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let t = r.$implicit;
    e.\u0275\u0275property("ngValue", t.value), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate1(" ", t.name, " ");
} }
function oe(i, r) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "select", 28), e.\u0275\u0275twoWayListener("ngModelChange", function (o) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(4).$implicit; return e.\u0275\u0275twoWayBindingSet(a.value, o) || (a.value = o), e.\u0275\u0275resetView(o); }), e.\u0275\u0275listener("ngModelChange", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext(6); return e.\u0275\u0275resetView(o.changeInput()); }), e.\u0275\u0275template(1, ie, 2, 2, "option", 29), e.\u0275\u0275elementEnd();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext(4).$implicit, n = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275property("ngClass", n.getClassNames("inputControl")), e.\u0275\u0275twoWayProperty("ngModel", t.value), e.\u0275\u0275property("disabled", n.disabled), e.\u0275\u0275advance(), e.\u0275\u0275property("ngForOf", n.getOptions(t.field));
} }
function ae(i, r) { if (i & 1 && (e.\u0275\u0275elementStart(0, "option", 30), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let t = r.$implicit;
    e.\u0275\u0275property("ngValue", t.value), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate1(" ", t.name, " ");
} }
function re(i, r) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275elementStart(1, "select", 43), e.\u0275\u0275twoWayListener("ngModelChange", function (o) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(4).$implicit; return e.\u0275\u0275twoWayBindingSet(a.value, o) || (a.value = o), e.\u0275\u0275resetView(o); }), e.\u0275\u0275listener("ngModelChange", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext(6); return e.\u0275\u0275resetView(o.changeInput()); }), e.\u0275\u0275template(2, ae, 2, 2, "option", 29), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementContainerEnd();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext(4).$implicit, n = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngClass", n.getClassNames("inputControl")), e.\u0275\u0275twoWayProperty("ngModel", t.value), e.\u0275\u0275property("disabled", n.disabled), e.\u0275\u0275advance(), e.\u0275\u0275property("ngForOf", n.getOptions(t.field));
} }
function le(i, r) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "input", 44), e.\u0275\u0275twoWayListener("ngModelChange", function (o) { e.\u0275\u0275restoreView(t); let a = e.\u0275\u0275nextContext(4).$implicit; return e.\u0275\u0275twoWayBindingSet(a.value, o) || (a.value = o), e.\u0275\u0275resetView(o); }), e.\u0275\u0275listener("ngModelChange", function () { e.\u0275\u0275restoreView(t); let o = e.\u0275\u0275nextContext(6); return e.\u0275\u0275resetView(o.changeInput()); }), e.\u0275\u0275elementEnd();
} if (i & 2) {
    let t = e.\u0275\u0275nextContext(4).$implicit, n = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275property("ngClass", n.getClassNames("inputControl")), e.\u0275\u0275twoWayProperty("ngModel", t.value), e.\u0275\u0275property("disabled", n.disabled);
} }
function se(i, r) { if (i & 1 && (e.\u0275\u0275elementStart(0, "div", 31), e.\u0275\u0275template(1, Z, 1, 3, "input", 32)(2, ee, 1, 3, "input", 33)(3, te, 1, 3, "input", 34)(4, ne, 1, 3, "input", 35)(5, oe, 2, 4, "select", 36)(6, re, 3, 4, "ng-container", 37)(7, le, 1, 3, "input", 38), e.\u0275\u0275elementEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext(3).$implicit, n = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275property("ngClass", n.getClassNames("inputControlSize"))("ngSwitch", n.getInputType(t.field, t.operator)), e.\u0275\u0275advance(), e.\u0275\u0275property("ngSwitchCase", "string"), e.\u0275\u0275advance(), e.\u0275\u0275property("ngSwitchCase", "number"), e.\u0275\u0275advance(), e.\u0275\u0275property("ngSwitchCase", "date"), e.\u0275\u0275advance(), e.\u0275\u0275property("ngSwitchCase", "time"), e.\u0275\u0275advance(), e.\u0275\u0275property("ngSwitchCase", "category"), e.\u0275\u0275advance(), e.\u0275\u0275property("ngSwitchCase", "multiselect"), e.\u0275\u0275advance(), e.\u0275\u0275property("ngSwitchCase", "boolean");
} }
function ce(i, r) { if (i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, D, 3, 3, "ng-container", 14)(2, N, 3, 4, "ng-template", null, 7, e.\u0275\u0275templateRefExtractor)(4, W, 2, 2, "div", 26)(5, A, 3, 5, "ng-template", null, 8, e.\u0275\u0275templateRefExtractor)(7, L, 2, 2, "ng-container", 14)(8, j, 3, 5, "ng-template", null, 9, e.\u0275\u0275templateRefExtractor)(10, U, 2, 2, "ng-container", 14)(11, J, 3, 5, "ng-template", null, 10, e.\u0275\u0275templateRefExtractor)(13, Y, 2, 2, "ng-container", 14)(14, se, 8, 9, "ng-template", null, 11, e.\u0275\u0275templateRefExtractor), e.\u0275\u0275elementContainerEnd()), i & 2) {
    let t = e.\u0275\u0275reference(3), n = e.\u0275\u0275reference(9), o = e.\u0275\u0275reference(12), a = e.\u0275\u0275reference(15), l = e.\u0275\u0275nextContext(2).$implicit, c = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", c.getRemoveButtonTemplate())("ngIfElse", t), e.\u0275\u0275advance(3), e.\u0275\u0275property("ngIf", c.entities == null ? null : c.entities.length), e.\u0275\u0275advance(3), e.\u0275\u0275property("ngIf", c.getFieldTemplate())("ngIfElse", n), e.\u0275\u0275advance(3), e.\u0275\u0275property("ngIf", c.getOperatorTemplate())("ngIfElse", o), e.\u0275\u0275advance(3), e.\u0275\u0275property("ngIf", c.findTemplateForRule(l))("ngIfElse", a);
} }
function _e(i, r) { if (i & 1 && e.\u0275\u0275element(0, "query-builder", 45), i & 2) {
    let t = e.\u0275\u0275nextContext(2).$implicit, n = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275property("data", t)("disabled", n.disabled)("parentTouchedCallback", n.parentTouchedCallback || n.onTouchedCallback)("parentChangeCallback", n.parentChangeCallback || n.onChangeCallback)("parentInputTemplates", n.parentInputTemplates || n.inputTemplates)("parentOperatorTemplate", n.parentOperatorTemplate || n.operatorTemplate)("parentFieldTemplate", n.parentFieldTemplate || n.fieldTemplate)("parentEntityTemplate", n.parentEntityTemplate || n.entityTemplate)("parentSwitchGroupTemplate", n.parentSwitchGroupTemplate || n.switchGroupTemplate)("parentButtonGroupTemplate", n.parentButtonGroupTemplate || n.buttonGroupTemplate)("parentRemoveButtonTemplate", n.parentRemoveButtonTemplate || n.removeButtonTemplate)("parentEmptyWarningTemplate", n.parentEmptyWarningTemplate || n.emptyWarningTemplate)("parentArrowIconTemplate", n.parentArrowIconTemplate || n.arrowIconTemplate)("parentValue", n.data)("classNames", n.classNames)("config", n.config)("allowRuleset", n.allowRuleset)("allowCollapse", n.allowCollapse)("emptyMessage", n.emptyMessage)("operatorMap", n.operatorMap);
} }
function pe(i, r) { i & 1 && e.\u0275\u0275elementContainer(0); }
function ue(i, r) { if (i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, pe, 1, 0, "ng-container", 18), e.\u0275\u0275elementContainerEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext().ngIf, n = e.\u0275\u0275nextContext(4);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngTemplateOutlet", t)("ngTemplateOutletContext", n.getEmptyWarningContext());
} }
function ge(i, r) { if (i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, ue, 2, 2, "ng-container", 21), e.\u0275\u0275elementContainerEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext().ngIf;
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.invalid);
} }
function de(i, r) { if (i & 1 && (e.\u0275\u0275elementStart(0, "p", 12), e.\u0275\u0275text(1), e.\u0275\u0275elementEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext(5);
    e.\u0275\u0275property("ngClass", t.getClassNames("emptyWarning")), e.\u0275\u0275advance(), e.\u0275\u0275textInterpolate1(" ", t.emptyMessage, " ");
} }
function me(i, r) { if (i & 1 && e.\u0275\u0275template(0, de, 2, 2, "p", 16), i & 2) {
    let t = e.\u0275\u0275nextContext().ngIf;
    e.\u0275\u0275property("ngIf", t.invalid);
} }
function Ce(i, r) { if (i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275elementStart(1, "li", 12), e.\u0275\u0275template(2, ce, 16, 9, "ng-container", 21)(3, _e, 1, 20, "query-builder", 25)(4, ge, 2, 1, "ng-container", 14)(5, me, 1, 1, "ng-template", null, 6, e.\u0275\u0275templateRefExtractor), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementContainerEnd()), i & 2) {
    let t = r.ngIf, n = e.\u0275\u0275reference(6), o = e.\u0275\u0275nextContext(3);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngClass", o.getQueryItemClassName(t)), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", !t.ruleset), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", t.ruleset), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", o.getEmptyWarningTemplate())("ngIfElse", n);
} }
function he(i, r) { if (i & 1 && (e.\u0275\u0275elementContainerStart(0), e.\u0275\u0275template(1, Ce, 7, 5, "ng-container", 21), e.\u0275\u0275elementContainerEnd()), i & 2) {
    let t = r.$implicit, n = e.\u0275\u0275nextContext(2);
    e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", e.\u0275\u0275pureFunction2(1, w, !!t.rules, !n.config.allowEmptyRulesets && t.rules && t.rules.length === 0));
} }
function fe(i, r) { if (i & 1 && (e.\u0275\u0275elementStart(0, "ul", 12), e.\u0275\u0275template(1, he, 2, 4, "ng-container", 24), e.\u0275\u0275elementEnd()), i & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("ngClass", t.getClassNames("tree")), e.\u0275\u0275advance(), e.\u0275\u0275property("ngForOf", t.data.rules);
} }
var ye = (() => { class i {
    constructor(t) { this.template = t; }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(e.TemplateRef)); }; }
    static { this.\u0275dir = e.\u0275\u0275defineDirective({ type: i, selectors: [["", "queryOperator", ""]], standalone: !1 }); }
} return i; })(), xe = (() => { class i {
    constructor(t) { this.template = t; }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(e.TemplateRef)); }; }
    static { this.\u0275dir = e.\u0275\u0275defineDirective({ type: i, selectors: [["", "queryField", ""]], standalone: !1 }); }
} return i; })(), we = (() => { class i {
    constructor(t) { this.template = t; }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(e.TemplateRef)); }; }
    static { this.\u0275dir = e.\u0275\u0275defineDirective({ type: i, selectors: [["", "queryEntity", ""]], standalone: !1 }); }
} return i; })(), Te = (() => { class i {
    constructor(t) { this.template = t; }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(e.TemplateRef)); }; }
    static { this.\u0275dir = e.\u0275\u0275defineDirective({ type: i, selectors: [["", "querySwitchGroup", ""]], standalone: !1 }); }
} return i; })(), be = (() => { class i {
    constructor(t) { this.template = t; }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(e.TemplateRef)); }; }
    static { this.\u0275dir = e.\u0275\u0275defineDirective({ type: i, selectors: [["", "queryButtonGroup", ""]], standalone: !1 }); }
} return i; })(), ve = (() => { class i {
    get queryInputType() { return this._type; }
    set queryInputType(t) { t && (this._type = t); }
    constructor(t) { this.template = t; }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(e.TemplateRef)); }; }
    static { this.\u0275dir = e.\u0275\u0275defineDirective({ type: i, selectors: [["", "queryInput", ""]], inputs: { queryInputType: "queryInputType" }, standalone: !1 }); }
} return i; })(), Me = (() => { class i {
    constructor(t) { this.template = t; }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(e.TemplateRef)); }; }
    static { this.\u0275dir = e.\u0275\u0275defineDirective({ type: i, selectors: [["", "queryRemoveButton", ""]], standalone: !1 }); }
} return i; })(), Oe = (() => { class i {
    constructor(t) { this.template = t; }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(e.TemplateRef)); }; }
    static { this.\u0275dir = e.\u0275\u0275defineDirective({ type: i, selectors: [["", "queryEmptyWarning", ""]], standalone: !1 }); }
} return i; })(), Se = (() => { class i {
    constructor(t) { this.template = t; }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(e.TemplateRef)); }; }
    static { this.\u0275dir = e.\u0275\u0275defineDirective({ type: i, selectors: [["", "queryArrowIcon", ""]], standalone: !1 }); }
} return i; })(), Be = { provide: C, useExisting: d(() => m), multi: !0 }, Ie = { provide: h, useExisting: d(() => m), multi: !0 }, m = (() => { class i {
    get condition() { return this.data?.condition; }
    constructor(t) { this.changeDetectorRef = t, this.defaultClassNames = { arrowIconButton: "q-arrow-icon-button", arrowIcon: "q-icon q-arrow-icon", removeIcon: "q-icon q-remove-icon", addIcon: "q-icon q-add-icon", button: "q-button", buttonGroup: "q-button-group", removeButton: "q-remove-button", switchGroup: "q-switch-group", switchLabel: "q-switch-label", switchRadio: "q-switch-radio", rightAlign: "q-right-align", transition: "q-transition", collapsed: "q-collapsed", treeContainer: "q-tree-container", tree: "q-tree", row: "q-row", connector: "q-connector", rule: "q-rule", ruleSet: "q-ruleset", invalidRuleSet: "q-invalid-ruleset", emptyWarning: "q-empty-warning", fieldControl: "q-field-control", fieldControlSize: "q-control-size", entityControl: "q-entity-control", entityControlSize: "q-control-size", operatorControl: "q-operator-control", operatorControlSize: "q-control-size", inputControl: "q-input-control", inputControlSize: "q-control-size" }, this.defaultOperatorMap = { string: ["=", "!=", "contains", "like"], number: ["=", "!=", ">", ">=", "<", "<="], time: ["=", "!=", ">", ">=", "<", "<="], date: ["=", "!=", ">", ">=", "<", "<="], category: ["=", "!=", "in", "not in"], boolean: ["="] }, this.disabled = !1, this.data = { condition: "and", rules: [] }, this.allowRuleset = !0, this.allowCollapse = !1, this.emptyMessage = "A ruleset cannot be empty. Please add a rule or remove it all together.", this.classNames = {}, this.operatorMap = {}, this.config = { fields: {} }, this.persistValueOnFieldChange = !1, this.defaultTemplateTypes = ["string", "number", "time", "date", "category", "boolean", "multiselect"], this.defaultPersistValueTypes = ["string", "number", "time", "date", "boolean"], this.defaultEmptyList = [], this.operatorsCache = {}, this.inputContextCache = new Map, this.operatorContextCache = new Map, this.fieldContextCache = new Map, this.entityContextCache = new Map, this.removeButtonContextCache = new Map, this.getDisabledState = () => this.disabled, this.fields = [], this.filterFields = [], this.entities = []; }
    ngOnChanges(t) { let n = this.config, o = typeof n; if (o === "object")
        this.fields = Object.keys(n.fields).map(a => { let l = n.fields[a]; return l.value = l.value || a, l; }), n.entities ? this.entities = Object.keys(n.entities).map(a => { let l = n.entities ? n.entities[a] : []; return l.value = l.value || a, l; }) : this.entities = [], this.operatorsCache = {};
    else
        throw new Error(`Expected 'config' must be a valid object, got ${o} instead.`); }
    validate(t) { let n = {}, o = [], a = !1; return !this.config.allowEmptyRulesets && this.checkEmptyRuleInRuleset(this.data) && (n.empty = "Empty rulesets are not allowed.", a = !0), this.validateRulesInRuleset(this.data, o), o.length && (n.rules = o, a = !0), a ? n : null; }
    get value() { return this.data; }
    set value(t) { this.data = t || { condition: "and", rules: [] }, this.handleDataChange(); }
    writeValue(t) { this.value = t; }
    registerOnChange(t) { this.onChangeCallback = () => t(this.data); }
    registerOnTouched(t) { this.onTouchedCallback = () => t(this.data); }
    setDisabledState(t) { this.disabled = t, this.changeDetectorRef.detectChanges(); }
    findTemplateForRule(t) { let n = this.getInputType(t.field, t.operator); if (n) {
        let o = this.findQueryInput(n);
        return o ? o.template : (this.defaultTemplateTypes.indexOf(n) === -1 && console.warn(`Could not find template for field with type: ${n}`), null);
    } }
    findQueryInput(t) { return (this.parentInputTemplates || this.inputTemplates || []).find(o => o.queryInputType === t); }
    getOperators(t) { if (this.operatorsCache[t])
        return this.operatorsCache[t]; let n = this.defaultEmptyList, o = this.config.fields[t]; if (this.config.getOperators)
        return this.config.getOperators(t, o); let a = o.type; return o && o.operators ? n = o.operators : a ? (n = this.operatorMap && this.operatorMap[a] || this.defaultOperatorMap[a] || this.defaultEmptyList, n.length === 0 && console.warn(`No operators found for field '${t}' with type ${o.type}. Please define an 'operators' property on the field or use the 'operatorMap' binding to fix this.`), o.nullable && (n = n.concat(["is null", "is not null"]))) : console.warn(`No 'type' property found on field: '${t}'`), this.operatorsCache[t] = n, n; }
    getFields(t) { return this.entities?.length && t ? this.fields.filter(n => n && n.entity === t) : this.fields; }
    getInputType(t, n) { if (this.config.getInputType)
        return this.config.getInputType(t, n); if (!this.config.fields[t])
        throw new Error(`No configuration for field '${t}' could be found! Please add it to config.fields.`); let o = this.config.fields[t].type; switch (n) {
        case "is null":
        case "is not null": return null;
        case "in":
        case "not in": return o === "category" || o === "boolean" ? "multiselect" : o;
        default: return o;
    } }
    getOptions(t) { return this.config.getOptions ? this.config.getOptions(t) : this.config.fields[t].options || this.defaultEmptyList; }
    getClassNames(...t) { let n = this.classNames ? this.classNames : this.defaultClassNames, o = this.defaultClassNames, a = t.map(l => n[l] || o[l]).filter(l => !!l); return a.length ? a.join(" ") : []; }
    getDefaultField(t) { if (t) {
        if (t.defaultField !== void 0)
            return this.getDefaultValue(t.defaultField);
        {
            let n = this.fields.filter(o => o && o.entity === t.value);
            return n && n.length ? n[0] : (console.warn(`No fields found for entity '${t.name}'. A 'defaultOperator' is also not specified on the field config. Operator value will default to null.`), null);
        }
    }
    else
        return null; }
    getDefaultOperator(t) { if (t && t.defaultOperator !== void 0)
        return this.getDefaultValue(t.defaultOperator); {
        let n = this.getOperators(t.value);
        return n && n.length ? n[0] : (console.warn(`No operators found for field '${t.value}'. A 'defaultOperator' is also not specified on the field config. Operator value will default to null.`), null);
    } }
    addRule(t) { if (!this.disabled) {
        if (t = t || this.data, this.config.addRule)
            this.config.addRule(t);
        else {
            let n = this.fields[0];
            t.rules = t.rules.concat([{ field: n.value, operator: this.getDefaultOperator(n), value: this.getDefaultValue(n.defaultValue), entity: n.entity }]);
        }
        this.handleTouched(), this.handleDataChange();
    } }
    removeRule(t, n) { this.disabled || (n = n || this.data, this.config.removeRule ? this.config.removeRule(t, n) : n.rules = n.rules.filter(o => o !== t), this.inputContextCache.delete(t), this.operatorContextCache.delete(t), this.fieldContextCache.delete(t), this.entityContextCache.delete(t), this.removeButtonContextCache.delete(t), this.handleTouched(), this.handleDataChange()); }
    addRuleSet(t) { this.disabled || (t = t || this.data, this.config.addRuleSet ? this.config.addRuleSet(t) : t.rules = t.rules.concat([{ condition: "and", rules: [] }]), this.handleTouched(), this.handleDataChange()); }
    removeRuleSet(t, n) { this.disabled || (t = t || this.data, n = n || this.parentValue, this.config.removeRuleSet ? this.config.removeRuleSet(t, n) : n && (n.rules = n.rules.filter(o => o !== t)), this.handleTouched(), this.handleDataChange()); }
    transitionEnd(t) { this.treeContainer.nativeElement.style.maxHeight = null; }
    toggleCollapse() { this.computedTreeContainerHeight(), setTimeout(() => { this.data.collapsed = !this.data.collapsed; }, 100); }
    computedTreeContainerHeight() { let t = this.treeContainer.nativeElement; t && t.firstElementChild && (t.style.maxHeight = t.firstElementChild.clientHeight + 8 + "px"); }
    changeCondition(t) { this.disabled || (this.data.condition = t, this.handleTouched(), this.handleDataChange()); }
    changeOperator(t) { this.disabled || (this.config.coerceValueForOperator ? t.value = this.config.coerceValueForOperator(t.operator, t.value, t) : t.value = this.coerceValueForOperator(t.operator, t.value, t), this.handleTouched(), this.handleDataChange()); }
    coerceValueForOperator(t, n, o) { return this.getInputType(o.field, t) === "multiselect" && !Array.isArray(n) ? [n] : n; }
    changeInput() { this.disabled || (this.handleTouched(), this.handleDataChange()); }
    changeField(t, n) { if (this.disabled)
        return; let o = this.inputContextCache.get(n), a = o && o.field, l = this.config.fields[t], c = this.calculateFieldChangeValue(a, l, n.value); c !== void 0 ? n.value = c : delete n.value, n.operator = this.getDefaultOperator(l), this.inputContextCache.delete(n), this.operatorContextCache.delete(n), this.fieldContextCache.delete(n), this.entityContextCache.delete(n), this.getInputContext(n), this.getFieldContext(n), this.getOperatorContext(n), this.getEntityContext(n), this.handleTouched(), this.handleDataChange(); }
    changeEntity(t, n, o, a) { if (this.disabled)
        return; let l = o, c = a, p = this.entities.find(g => g.value === t), u = this.getDefaultField(p); c || (c = this.data, l = c.rules.findIndex(g => g === n)), n.field = u.value, c.rules[l] = n, u ? this.changeField(u.value, n) : (this.handleTouched(), this.handleDataChange()); }
    getDefaultValue(t) { switch (typeof t) {
        case "function": return t();
        default: return t;
    } }
    getOperatorTemplate() { let t = this.parentOperatorTemplate || this.operatorTemplate; return t ? t.template : null; }
    getFieldTemplate() { let t = this.parentFieldTemplate || this.fieldTemplate; return t ? t.template : null; }
    getEntityTemplate() { let t = this.parentEntityTemplate || this.entityTemplate; return t ? t.template : null; }
    getArrowIconTemplate() { let t = this.parentArrowIconTemplate || this.arrowIconTemplate; return t ? t.template : null; }
    getButtonGroupTemplate() { let t = this.parentButtonGroupTemplate || this.buttonGroupTemplate; return t ? t.template : null; }
    getSwitchGroupTemplate() { let t = this.parentSwitchGroupTemplate || this.switchGroupTemplate; return t ? t.template : null; }
    getRemoveButtonTemplate() { let t = this.parentRemoveButtonTemplate || this.removeButtonTemplate; return t ? t.template : null; }
    getEmptyWarningTemplate() { let t = this.parentEmptyWarningTemplate || this.emptyWarningTemplate; return t ? t.template : null; }
    getQueryItemClassName(t) { let n = this.getClassNames("row", "connector", "transition"); return n += " " + this.getClassNames(t.ruleset ? "ruleSet" : "rule"), t.invalid && (n += " " + this.getClassNames("invalidRuleSet")), n; }
    getButtonGroupContext() { return this.buttonGroupContext || (this.buttonGroupContext = { addRule: this.addRule.bind(this), addRuleSet: this.allowRuleset && this.addRuleSet.bind(this), removeRuleSet: this.allowRuleset && this.parentValue && this.removeRuleSet.bind(this), getDisabledState: this.getDisabledState, $implicit: this.data }), this.buttonGroupContext; }
    getRemoveButtonContext(t) { return this.removeButtonContextCache.has(t) || this.removeButtonContextCache.set(t, { removeRule: this.removeRule.bind(this), getDisabledState: this.getDisabledState, $implicit: t }), this.removeButtonContextCache.get(t); }
    getFieldContext(t) { return this.fieldContextCache.has(t) || this.fieldContextCache.set(t, { onChange: this.changeField.bind(this), getFields: this.getFields.bind(this), getDisabledState: this.getDisabledState, fields: this.fields, $implicit: t }), this.fieldContextCache.get(t); }
    getEntityContext(t) { return this.entityContextCache.has(t) || this.entityContextCache.set(t, { onChange: this.changeEntity.bind(this), getDisabledState: this.getDisabledState, entities: this.entities, $implicit: t }), this.entityContextCache.get(t); }
    getSwitchGroupContext() { return { onChange: this.changeCondition.bind(this), getDisabledState: this.getDisabledState, $implicit: this.data }; }
    getArrowIconContext() { return { getDisabledState: this.getDisabledState, $implicit: this.data }; }
    getEmptyWarningContext() { return { getDisabledState: this.getDisabledState, message: this.emptyMessage, $implicit: this.data }; }
    getOperatorContext(t) { return this.operatorContextCache.has(t) || this.operatorContextCache.set(t, { onChange: this.changeOperator.bind(this), getDisabledState: this.getDisabledState, operators: this.getOperators(t.field), $implicit: t }), this.operatorContextCache.get(t); }
    getInputContext(t) { return this.inputContextCache.has(t) || this.inputContextCache.set(t, { onChange: this.changeInput.bind(this), getDisabledState: this.getDisabledState, options: this.getOptions(t.field), field: this.config.fields[t.field], $implicit: t }), this.inputContextCache.get(t); }
    calculateFieldChangeValue(t, n, o) { if (this.config.calculateFieldChangeValue != null)
        return this.config.calculateFieldChangeValue(t, n, o); let a = () => t == null || n == null ? !1 : t.type === n.type && this.defaultPersistValueTypes.indexOf(t.type) !== -1; if (this.persistValueOnFieldChange && a())
        return o; if (n && n.defaultValue !== void 0)
        return this.getDefaultValue(n.defaultValue); }
    checkEmptyRuleInRuleset(t) { return !t || !t.rules || t.rules.length === 0 ? !0 : t.rules.some(n => n.rules ? this.checkEmptyRuleInRuleset(n) : !1); }
    validateRulesInRuleset(t, n) { t && t.rules && t.rules.length > 0 && t.rules.forEach(o => { if (o.rules)
        return this.validateRulesInRuleset(o, n); if (o.field) {
        let a = this.config.fields[o.field];
        if (a && a.validator) {
            let l = a.validator(o, t);
            l != null && n.push(l);
        }
    } }); }
    handleDataChange() { this.changeDetectorRef.markForCheck(), this.onChangeCallback && this.onChangeCallback(), this.parentChangeCallback && this.parentChangeCallback(); }
    handleTouched() { this.onTouchedCallback && this.onTouchedCallback(), this.parentTouchedCallback && this.parentTouchedCallback(); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["query-builder"]], contentQueries: function (n, o, a) { if (n & 1 && (e.\u0275\u0275contentQuery(a, be, 5), e.\u0275\u0275contentQuery(a, Te, 5), e.\u0275\u0275contentQuery(a, xe, 5), e.\u0275\u0275contentQuery(a, we, 5), e.\u0275\u0275contentQuery(a, ye, 5), e.\u0275\u0275contentQuery(a, Me, 5), e.\u0275\u0275contentQuery(a, Oe, 5), e.\u0275\u0275contentQuery(a, Se, 5), e.\u0275\u0275contentQuery(a, ve, 5)), n & 2) {
            let l;
            e.\u0275\u0275queryRefresh(l = e.\u0275\u0275loadQuery()) && (o.buttonGroupTemplate = l.first), e.\u0275\u0275queryRefresh(l = e.\u0275\u0275loadQuery()) && (o.switchGroupTemplate = l.first), e.\u0275\u0275queryRefresh(l = e.\u0275\u0275loadQuery()) && (o.fieldTemplate = l.first), e.\u0275\u0275queryRefresh(l = e.\u0275\u0275loadQuery()) && (o.entityTemplate = l.first), e.\u0275\u0275queryRefresh(l = e.\u0275\u0275loadQuery()) && (o.operatorTemplate = l.first), e.\u0275\u0275queryRefresh(l = e.\u0275\u0275loadQuery()) && (o.removeButtonTemplate = l.first), e.\u0275\u0275queryRefresh(l = e.\u0275\u0275loadQuery()) && (o.emptyWarningTemplate = l.first), e.\u0275\u0275queryRefresh(l = e.\u0275\u0275loadQuery()) && (o.arrowIconTemplate = l.first), e.\u0275\u0275queryRefresh(l = e.\u0275\u0275loadQuery()) && (o.inputTemplates = l);
        } }, viewQuery: function (n, o) { if (n & 1 && e.\u0275\u0275viewQuery(x, 7), n & 2) {
            let a;
            e.\u0275\u0275queryRefresh(a = e.\u0275\u0275loadQuery()) && (o.treeContainer = a.first);
        } }, hostVars: 1, hostBindings: function (n, o) { n & 2 && e.\u0275\u0275attribute("query-builder-condition", o.condition); }, inputs: { disabled: "disabled", data: "data", allowRuleset: "allowRuleset", allowCollapse: "allowCollapse", emptyMessage: "emptyMessage", classNames: "classNames", operatorMap: "operatorMap", parentValue: "parentValue", config: "config", parentArrowIconTemplate: "parentArrowIconTemplate", parentInputTemplates: "parentInputTemplates", parentOperatorTemplate: "parentOperatorTemplate", parentFieldTemplate: "parentFieldTemplate", parentEntityTemplate: "parentEntityTemplate", parentSwitchGroupTemplate: "parentSwitchGroupTemplate", parentButtonGroupTemplate: "parentButtonGroupTemplate", parentRemoveButtonTemplate: "parentRemoveButtonTemplate", parentEmptyWarningTemplate: "parentEmptyWarningTemplate", parentChangeCallback: "parentChangeCallback", parentTouchedCallback: "parentTouchedCallback", persistValueOnFieldChange: "persistValueOnFieldChange", value: "value" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([Be, Ie]), e.\u0275\u0275NgOnChangesFeature], decls: 13, vars: 8, consts: [["defaultArrowIcon", ""], ["defaultButtonGroup", ""], ["defaultSwitchGroup", ""], ["treeContainer", ""], ["andOption", ""], ["orOption", ""], ["defaultEmptyWarning", ""], ["defaultRemoveButton", ""], ["defaultEntity", ""], ["defaultField", ""], ["defaultOperator", ""], ["defaultInput", ""], [3, "ngClass"], [3, "ngClass", "click", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [3, "transitionend", "ngClass"], [3, "ngClass", 4, "ngIf"], [3, "click", "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "button", 3, "click", "ngClass", "disabled"], ["type", "button", 3, "ngClass", "disabled", "click", 4, "ngIf"], [4, "ngIf"], ["type", "radio", "value", "and", 3, "ngModelChange", "ngClass", "ngModel", "disabled"], ["type", "radio", "value", "or", 3, "ngModelChange", "ngClass", "ngModel", "disabled"], [4, "ngFor", "ngForOf"], [3, "data", "disabled", "parentTouchedCallback", "parentChangeCallback", "parentInputTemplates", "parentOperatorTemplate", "parentFieldTemplate", "parentEntityTemplate", "parentSwitchGroupTemplate", "parentButtonGroupTemplate", "parentRemoveButtonTemplate", "parentEmptyWarningTemplate", "parentArrowIconTemplate", "parentValue", "classNames", "config", "allowRuleset", "allowCollapse", "emptyMessage", "operatorMap", 4, "ngIf"], ["class", "q-inline-block-display", 4, "ngIf"], [1, "q-inline-block-display"], [3, "ngModelChange", "ngClass", "ngModel", "disabled"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], [3, "ngClass", "ngSwitch"], ["type", "text", 3, "ngClass", "ngModel", "disabled", "ngModelChange", 4, "ngSwitchCase"], ["type", "number", 3, "ngClass", "ngModel", "disabled", "ngModelChange", 4, "ngSwitchCase"], ["type", "date", 3, "ngClass", "ngModel", "disabled", "ngModelChange", 4, "ngSwitchCase"], ["type", "time", 3, "ngClass", "ngModel", "disabled", "ngModelChange", 4, "ngSwitchCase"], [3, "ngClass", "ngModel", "disabled", "ngModelChange", 4, "ngSwitchCase"], [4, "ngSwitchCase"], ["type", "checkbox", 3, "ngClass", "ngModel", "disabled", "ngModelChange", 4, "ngSwitchCase"], ["type", "text", 3, "ngModelChange", "ngClass", "ngModel", "disabled"], ["type", "number", 3, "ngModelChange", "ngClass", "ngModel", "disabled"], ["type", "date", 3, "ngModelChange", "ngClass", "ngModel", "disabled"], ["type", "time", 3, "ngModelChange", "ngClass", "ngModel", "disabled"], ["multiple", "", 3, "ngModelChange", "ngClass", "ngModel", "disabled"], ["type", "checkbox", 3, "ngModelChange", "ngClass", "ngModel", "disabled"], [3, "data", "disabled", "parentTouchedCallback", "parentChangeCallback", "parentInputTemplates", "parentOperatorTemplate", "parentFieldTemplate", "parentEntityTemplate", "parentSwitchGroupTemplate", "parentButtonGroupTemplate", "parentRemoveButtonTemplate", "parentEmptyWarningTemplate", "parentArrowIconTemplate", "parentValue", "classNames", "config", "allowRuleset", "allowCollapse", "emptyMessage", "operatorMap"]], template: function (n, o) { if (n & 1) {
            let a = e.\u0275\u0275getCurrentView();
            e.\u0275\u0275elementStart(0, "div", 12), e.\u0275\u0275template(1, T, 1, 1, "ng-template", null, 0, e.\u0275\u0275templateRefExtractor)(3, M, 2, 3, "a", 13)(4, S, 3, 3, "ng-container", 14)(5, E, 6, 6, "ng-template", null, 1, e.\u0275\u0275templateRefExtractor)(7, P, 2, 2, "ng-container", 14)(8, q, 1, 1, "ng-template", null, 2, e.\u0275\u0275templateRefExtractor), e.\u0275\u0275elementEnd(), e.\u0275\u0275elementStart(10, "div", 15, 3), e.\u0275\u0275listener("transitionend", function (c) { return e.\u0275\u0275restoreView(a), e.\u0275\u0275resetView(o.transitionEnd(c)); }), e.\u0275\u0275template(12, fe, 2, 2, "ul", 16), e.\u0275\u0275elementEnd();
        } if (n & 2) {
            let a = e.\u0275\u0275reference(6), l = e.\u0275\u0275reference(9);
            e.\u0275\u0275property("ngClass", o.getClassNames("switchRow")), e.\u0275\u0275advance(3), e.\u0275\u0275property("ngIf", o.allowCollapse), e.\u0275\u0275advance(), e.\u0275\u0275property("ngIf", o.getButtonGroupTemplate())("ngIfElse", a), e.\u0275\u0275advance(3), e.\u0275\u0275property("ngIf", o.getSwitchGroupTemplate())("ngIfElse", l), e.\u0275\u0275advance(3), e.\u0275\u0275property("ngClass", o.getClassNames("treeContainer", o.data.collapsed ? "collapsed" : "")), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngIf", o.data && o.data.rules);
        } }, dependencies: [_.NgClass, _.NgForOf, _.NgIf, _.NgTemplateOutlet, _.NgSwitch, _.NgSwitchCase, s.NgSelectOption, s.\u0275NgSelectMultipleOption, s.DefaultValueAccessor, s.NumberValueAccessor, s.CheckboxControlValueAccessor, s.SelectControlValueAccessor, s.SelectMultipleControlValueAccessor, s.RadioControlValueAccessor, s.NgControlStatus, s.NgModel, i], styles: ['@charset "UTF-8";[_nghost-%COMP%]{display:block;width:100%}[_nghost-%COMP%]   .q-icon[_ngcontent-%COMP%]{font-style:normal;font-size:12px}[_nghost-%COMP%]   .q-remove-icon[_ngcontent-%COMP%]:before{content:"\\274c"}[_nghost-%COMP%]   .q-arrow-icon-button[_ngcontent-%COMP%]{float:left;margin:4px 6px 4px 0;transform:rotate(90deg);transition:linear .25s transform;cursor:pointer}[_nghost-%COMP%]   .q-arrow-icon-button.q-collapsed[_ngcontent-%COMP%]{transform:rotate(0)}[_nghost-%COMP%]   .q-arrow-icon[_ngcontent-%COMP%]:before{content:"\\25b6"}[_nghost-%COMP%]   .q-add-icon[_ngcontent-%COMP%]{color:#555}[_nghost-%COMP%]   .q-add-icon[_ngcontent-%COMP%]:before{content:"\\2795"}[_nghost-%COMP%]   .q-remove-button[_ngcontent-%COMP%]{color:#b3415d;width:31px}[_nghost-%COMP%]   .q-switch-group[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-button-group[_ngcontent-%COMP%]{font-family:Lucida Grande,Tahoma,Verdana,sans-serif;overflow:hidden}[_nghost-%COMP%]   .q-right-align[_ngcontent-%COMP%]{float:right}[_nghost-%COMP%]   .q-button[_ngcontent-%COMP%]{margin-left:8px;padding:0 8px;background-color:#fff}[_nghost-%COMP%]   .q-button[_ngcontent-%COMP%]:disabled{display:none}[_nghost-%COMP%]   .q-control-size[_ngcontent-%COMP%]{display:inline-block;vertical-align:top;padding-right:10px}[_nghost-%COMP%]   .q-input-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-operator-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-field-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-entity-control[_ngcontent-%COMP%]{display:inline-block;padding:5px 8px;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;width:auto;min-width:180px}[_nghost-%COMP%]   .q-input-control[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .q-operator-control[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .q-field-control[_ngcontent-%COMP%]:disabled, [_nghost-%COMP%]   .q-entity-control[_ngcontent-%COMP%]:disabled{border-color:transparent}[_nghost-%COMP%]   .q-operator-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-field-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-entity-control[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-input-control[_ngcontent-%COMP%]:not([type=checkbox]){min-height:32px;-webkit-appearance:none}[_nghost-%COMP%]   .q-switch-label[_ngcontent-%COMP%], [_nghost-%COMP%]   .q-button[_ngcontent-%COMP%]{float:left;margin-bottom:0;font-size:14px;line-height:30px;font-weight:400;text-align:center;text-shadow:none;border:1px solid rgba(0,0,0,.2);box-sizing:border-box}[_nghost-%COMP%]   .q-switch-label[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .q-button[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f0f0f0}[_nghost-%COMP%]   .q-switch-label[_ngcontent-%COMP%]{background-color:#e4e4e4;padding:0 8px}[_nghost-%COMP%]   .q-switch-radio[_ngcontent-%COMP%]{position:absolute;clip:rect(0,0,0,0);height:1px;width:1px;border:0;overflow:hidden}[_nghost-%COMP%]   .q-switch-radio[_ngcontent-%COMP%]:checked + .q-switch-label[_ngcontent-%COMP%]{border:1px solid rgb(97,158,215);background:#fff;color:#3176b3}[_nghost-%COMP%]   .q-switch-radio[_ngcontent-%COMP%]:disabled + .q-switch-label[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]   .q-switch-radio[_ngcontent-%COMP%]:checked:disabled + .q-switch-label[_ngcontent-%COMP%]{display:initial;color:initial;cursor:default;border-color:transparent}[_nghost-%COMP%]   .q-invalid-ruleset[_ngcontent-%COMP%]{border:1px solid rgba(179,65,93,.5)!important;background:#b3415d1a!important}[_nghost-%COMP%]   .q-empty-warning[_ngcontent-%COMP%]{color:#8d252e;text-align:center}[_nghost-%COMP%]   .q-ruleset[_ngcontent-%COMP%]{border:1px solid #ccc}[_nghost-%COMP%]   .q-rule[_ngcontent-%COMP%]{border:1px solid #ccc;background:#fff}[_nghost-%COMP%]   .q-transition[_ngcontent-%COMP%]{-webkit-transition:all .1s ease-in-out;-moz-transition:all .1s ease-in-out;-ms-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out;transition:all .1s ease-in-out}[_nghost-%COMP%]   .q-tree-container[_ngcontent-%COMP%]{width:100%;overflow:hidden;transition:ease-in .25s max-height}[_nghost-%COMP%]   .q-tree-container.q-collapsed[_ngcontent-%COMP%]{max-height:0!important}[_nghost-%COMP%]   .q-tree[_ngcontent-%COMP%]{list-style:none;margin:4px 0 2px}[_nghost-%COMP%]   .q-row[_ngcontent-%COMP%]{padding:6px 8px;margin-top:6px}[_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]{position:relative}[_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]:before{top:-5px;border-width:0 0 2px 2px}[_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]:after{border-width:0 0 0 2px;top:50%}[_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]:before, [_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]:after{content:"";left:-12px;border-color:#ccc;border-style:solid;width:9px;height:calc(50% + 6px);position:absolute}[_nghost-%COMP%]   .q-connector[_ngcontent-%COMP%]:last-child:after{content:none}[_nghost-%COMP%]   .q-inline-block-display[_ngcontent-%COMP%]{display:inline-block;vertical-align:top}'] }); }
} return i; })(), Ge = (() => { class i {
    static { this.\u0275fac = function (n) { return new (n || i); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: i }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ imports: [y, f] }); }
} return i; })();
export { Be as CONTROL_VALUE_ACCESSOR, Ge as NgxAngularQueryBuilderModule, Se as QueryArrowIconDirective, m as QueryBuilderComponent, be as QueryButtonGroupDirective, Oe as QueryEmptyWarningDirective, we as QueryEntityDirective, xe as QueryFieldDirective, ve as QueryInputDirective, ye as QueryOperatorDirective, Me as QueryRemoveButtonDirective, Te as QuerySwitchGroupDirective, Ie as VALIDATOR };
//# sourceMappingURL=ngx_angular_query_builder.WziI9IQ95_.js.map
