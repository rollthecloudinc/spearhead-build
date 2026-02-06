import { a as x } from "@nf-internal/chunk-4ACP43BH";
import { a as v, k as S, l as g, m as w, n as z } from "@nf-internal/chunk-J4XOFOAH";
var k = class {
    marshaller;
    serializer;
    deserializer;
    serdeContext;
    defaultContentType;
    constructor({ marshaller: r, serializer: a, deserializer: n, serdeContext: f, defaultContentType: h }) { this.marshaller = r, this.serializer = a, this.deserializer = n, this.serdeContext = f, this.defaultContentType = h; }
    serializeEventStream(f) { return S(this, arguments, function* ({ eventStream: r, requestSchema: a, initialRequest: n }) { let h = this.marshaller, m = a.getEventStreamMember(), p = a.getMemberSchema(m), u = this.serializer, y = this.defaultContentType, d = Symbol("initialRequestMarker"), b = { [Symbol.asyncIterator]() { return w(this, null, function* () { if (n) {
            let l = { ":event-type": { type: "string", value: "initial-request" }, ":message-type": { type: "string", value: "event" }, ":content-type": { type: "string", value: y } };
            u.write(a, n);
            let c = u.flush();
            yield { [d]: !0, headers: l, body: c };
        } try {
            for (var e = z(r), t, s, o; t = !(s = yield new g(e.next())).done; t = !1) {
                let l = s.value;
                yield l;
            }
        }
        catch {
            o = [s];
        }
        finally {
            try {
                t && (s = e.return) && (yield new g(s.call(e)));
            }
            finally {
                if (o)
                    throw o[0];
            }
        } }); } }; return h.serialize(b, e => { if (e[d])
        return { headers: e.headers, body: e.body }; let t = Object.keys(e).find(M => M !== "__type") ?? "", { additionalHeaders: s, body: o, eventType: l, explicitPayloadContentType: c } = this.writeEventBody(t, p, e); return { headers: v({ ":event-type": { type: "string", value: l }, ":message-type": { type: "string", value: "event" }, ":content-type": { type: "string", value: c ?? y } }, s), body: o }; }); }); }
    deserializeEventStream(f) { return S(this, arguments, function* ({ response: r, responseSchema: a, initialResponseContainer: n }) { let h = this.marshaller, m = a.getEventStreamMember(), u = a.getMemberSchema(m).getMemberSchemas(), y = Symbol("initialResponseMarker"), d = h.deserialize(r.body, t => S(this, null, function* () { let s = Object.keys(t).find(o => o !== "__type") ?? ""; if (s === "initial-response") {
        let o = yield this.deserializer.read(a, t[s].body);
        return delete o[m], v({ [y]: !0 }, o);
    }
    else if (s in u) {
        let o = u[s];
        return { [s]: yield this.deserializer.read(o, t[s].body) };
    }
    else
        return { $unknown: t }; })), b = d[Symbol.asyncIterator](), i = yield b.next(); if (i.done)
        return d; if (i.value?.[y]) {
        if (!a)
            throw new Error("@smithy::core/protocols - initial-response event encountered in event stream but no response schema given.");
        for (let [t, s] of Object.entries(i.value))
            n[t] = s;
    } return { [Symbol.asyncIterator]() { return w(this, null, function* () { for (i?.value?.[y] || (yield i.value);;) {
            let { done: t, value: s } = yield new g(b.next());
            if (t)
                break;
            yield s;
        } }); } }; }); }
    writeEventBody(r, a, n) { let f = this.serializer, h = r, m = null, p, u = a.getSchema()[4].includes(r), y = {}; if (u) {
        let i = a.getMemberSchema(r);
        if (i.isStructSchema()) {
            for (let [e, t] of i.structIterator()) {
                let { eventHeader: s, eventPayload: o } = t.getMergedTraits();
                if (o) {
                    m = e;
                    break;
                }
                else if (s) {
                    let l = n[r][e], c = "binary";
                    t.isNumericSchema() ? (-2) ** 31 <= l && l <= 2 ** 31 - 1 ? c = "integer" : c = "long" : t.isTimestampSchema() ? c = "timestamp" : t.isStringSchema() ? c = "string" : t.isBooleanSchema() && (c = "boolean"), l != null && (y[e] = { type: c, value: l }, delete n[r][e]);
                }
            }
            if (m !== null) {
                let e = i.getMemberSchema(m);
                e.isBlobSchema() ? p = "application/octet-stream" : e.isStringSchema() && (p = "text/plain"), f.write(e, n[r][m]);
            }
            else
                f.write(i, n[r]);
        }
        else
            throw new Error("@smithy/core/event-streams - non-struct member not supported in event stream union.");
    }
    else {
        let [i, e] = n[r];
        h = i, f.write(15, e);
    } let d = f.flush(); return { body: typeof d == "string" ? (this.serdeContext?.utf8Decoder ?? x)(d) : d, eventType: h, explicitPayloadContentType: p, additionalHeaders: y }; }
};
export { k as EventStreamSerde };
