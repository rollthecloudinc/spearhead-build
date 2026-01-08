import {
  fromUtf8
} from "./chunk-N6QFCJVT.js";
import {
  __async,
  __asyncGenerator,
  __await,
  __forAwait,
  __spreadValues
} from "./chunk-QQRLYLLM.js";

// node_modules/@smithy/core/dist-es/submodules/event-streams/EventStreamSerde.js
var EventStreamSerde = class {
  marshaller;
  serializer;
  deserializer;
  serdeContext;
  defaultContentType;
  constructor({ marshaller, serializer, deserializer, serdeContext, defaultContentType }) {
    this.marshaller = marshaller;
    this.serializer = serializer;
    this.deserializer = deserializer;
    this.serdeContext = serdeContext;
    this.defaultContentType = defaultContentType;
  }
  serializeEventStream(_0) {
    return __async(this, arguments, function* ({ eventStream, requestSchema, initialRequest }) {
      const marshaller = this.marshaller;
      const eventStreamMember = requestSchema.getEventStreamMember();
      const unionSchema = requestSchema.getMemberSchema(eventStreamMember);
      const serializer = this.serializer;
      const defaultContentType = this.defaultContentType;
      const initialRequestMarker = Symbol("initialRequestMarker");
      const eventStreamIterable = {
        [Symbol.asyncIterator]() {
          return __asyncGenerator(this, null, function* () {
            if (initialRequest) {
              const headers = {
                ":event-type": { type: "string", value: "initial-request" },
                ":message-type": { type: "string", value: "event" },
                ":content-type": { type: "string", value: defaultContentType }
              };
              serializer.write(requestSchema, initialRequest);
              const body = serializer.flush();
              yield {
                [initialRequestMarker]: true,
                headers,
                body
              };
            }
            try {
              for (var iter = __forAwait(eventStream), more, temp, error; more = !(temp = yield new __await(iter.next())).done; more = false) {
                const page = temp.value;
                yield page;
              }
            } catch (temp) {
              error = [temp];
            } finally {
              try {
                more && (temp = iter.return) && (yield new __await(temp.call(iter)));
              } finally {
                if (error)
                  throw error[0];
              }
            }
          });
        }
      };
      return marshaller.serialize(eventStreamIterable, (event) => {
        if (event[initialRequestMarker]) {
          return {
            headers: event.headers,
            body: event.body
          };
        }
        const unionMember = Object.keys(event).find((key) => {
          return key !== "__type";
        }) ?? "";
        const { additionalHeaders, body, eventType, explicitPayloadContentType } = this.writeEventBody(unionMember, unionSchema, event);
        const headers = __spreadValues({
          ":event-type": { type: "string", value: eventType },
          ":message-type": { type: "string", value: "event" },
          ":content-type": { type: "string", value: explicitPayloadContentType ?? defaultContentType }
        }, additionalHeaders);
        return {
          headers,
          body
        };
      });
    });
  }
  deserializeEventStream(_0) {
    return __async(this, arguments, function* ({ response, responseSchema, initialResponseContainer }) {
      const marshaller = this.marshaller;
      const eventStreamMember = responseSchema.getEventStreamMember();
      const unionSchema = responseSchema.getMemberSchema(eventStreamMember);
      const memberSchemas = unionSchema.getMemberSchemas();
      const initialResponseMarker = Symbol("initialResponseMarker");
      const asyncIterable = marshaller.deserialize(response.body, (event) => __async(this, null, function* () {
        const unionMember = Object.keys(event).find((key) => {
          return key !== "__type";
        }) ?? "";
        if (unionMember === "initial-response") {
          const dataObject = yield this.deserializer.read(responseSchema, event[unionMember].body);
          delete dataObject[eventStreamMember];
          return __spreadValues({
            [initialResponseMarker]: true
          }, dataObject);
        } else if (unionMember in memberSchemas) {
          const eventStreamSchema = memberSchemas[unionMember];
          return {
            [unionMember]: yield this.deserializer.read(eventStreamSchema, event[unionMember].body)
          };
        } else {
          return {
            $unknown: event
          };
        }
      }));
      const asyncIterator = asyncIterable[Symbol.asyncIterator]();
      const firstEvent = yield asyncIterator.next();
      if (firstEvent.done) {
        return asyncIterable;
      }
      if (firstEvent.value?.[initialResponseMarker]) {
        if (!responseSchema) {
          throw new Error("@smithy::core/protocols - initial-response event encountered in event stream but no response schema given.");
        }
        for (const [key, value] of Object.entries(firstEvent.value)) {
          initialResponseContainer[key] = value;
        }
      }
      return {
        [Symbol.asyncIterator]() {
          return __asyncGenerator(this, null, function* () {
            if (!firstEvent?.value?.[initialResponseMarker]) {
              yield firstEvent.value;
            }
            while (true) {
              const { done, value } = yield new __await(asyncIterator.next());
              if (done) {
                break;
              }
              yield value;
            }
          });
        }
      };
    });
  }
  writeEventBody(unionMember, unionSchema, event) {
    const serializer = this.serializer;
    let eventType = unionMember;
    let explicitPayloadMember = null;
    let explicitPayloadContentType;
    const isKnownSchema = (() => {
      const struct = unionSchema.getSchema();
      return struct[4].includes(unionMember);
    })();
    const additionalHeaders = {};
    if (!isKnownSchema) {
      const [type, value] = event[unionMember];
      eventType = type;
      serializer.write(15, value);
    } else {
      const eventSchema = unionSchema.getMemberSchema(unionMember);
      if (eventSchema.isStructSchema()) {
        for (const [memberName, memberSchema] of eventSchema.structIterator()) {
          const { eventHeader, eventPayload } = memberSchema.getMergedTraits();
          if (eventPayload) {
            explicitPayloadMember = memberName;
            break;
          } else if (eventHeader) {
            const value = event[unionMember][memberName];
            let type = "binary";
            if (memberSchema.isNumericSchema()) {
              if ((-2) ** 31 <= value && value <= 2 ** 31 - 1) {
                type = "integer";
              } else {
                type = "long";
              }
            } else if (memberSchema.isTimestampSchema()) {
              type = "timestamp";
            } else if (memberSchema.isStringSchema()) {
              type = "string";
            } else if (memberSchema.isBooleanSchema()) {
              type = "boolean";
            }
            if (value != null) {
              additionalHeaders[memberName] = {
                type,
                value
              };
              delete event[unionMember][memberName];
            }
          }
        }
        if (explicitPayloadMember !== null) {
          const payloadSchema = eventSchema.getMemberSchema(explicitPayloadMember);
          if (payloadSchema.isBlobSchema()) {
            explicitPayloadContentType = "application/octet-stream";
          } else if (payloadSchema.isStringSchema()) {
            explicitPayloadContentType = "text/plain";
          }
          serializer.write(payloadSchema, event[unionMember][explicitPayloadMember]);
        } else {
          serializer.write(eventSchema, event[unionMember]);
        }
      } else {
        throw new Error("@smithy/core/event-streams - non-struct member not supported in event stream union.");
      }
    }
    const messageSerialization = serializer.flush();
    const body = typeof messageSerialization === "string" ? (this.serdeContext?.utf8Decoder ?? fromUtf8)(messageSerialization) : messageSerialization;
    return {
      body,
      eventType,
      explicitPayloadContentType,
      additionalHeaders
    };
  }
};
export {
  EventStreamSerde
};
//# sourceMappingURL=chunk-7XKHUIAJ.js.map
