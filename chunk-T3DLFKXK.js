import {
  CognitoIdentityClient,
  Command,
  HttpRequest,
  SENSITIVE_STRING,
  ServiceException,
  collectBodyString,
  commonParams,
  decorateServiceException,
  expectNonNull,
  expectNumber,
  expectString,
  getEndpointPlugin,
  getSerdePlugin,
  parseEpochTimestamp,
  take,
  withBaseException
} from "./chunk-EWBDF4XD.js";
import "./chunk-HJOLCI3L.js";
import {
  __async,
  __spreadProps,
  __spreadValues,
  init_define_process
} from "./chunk-566BG64Y.js";

// node_modules/@aws-sdk/credential-provider-cognito-identity/dist-es/loadCognitoIdentity.js
init_define_process();

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js
init_define_process();

// node_modules/@smithy/smithy-client/dist-es/serde-json.js
init_define_process();
var _json = (obj) => {
  if (obj == null) {
    return {};
  }
  if (Array.isArray(obj)) {
    return obj.filter((_) => _ != null).map(_json);
  }
  if (typeof obj === "object") {
    const target = {};
    for (const key of Object.keys(obj)) {
      if (obj[key] == null) {
        continue;
      }
      target[key] = _json(obj[key]);
    }
    return target;
  }
  return obj;
};

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/parseJsonBody.js
var parseJsonBody = (streamBody, context) => collectBodyString(streamBody, context).then((encoded) => {
  if (encoded.length) {
    try {
      return JSON.parse(encoded);
    } catch (e) {
      if (e?.name === "SyntaxError") {
        Object.defineProperty(e, "$responseBodyText", {
          value: encoded
        });
      }
      throw e;
    }
  }
  return {};
});
var parseJsonErrorBody = (errorBody, context) => __async(null, null, function* () {
  const value = yield parseJsonBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
});
var loadRestJsonErrorCode = (output, data) => {
  const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
  const sanitizeErrorCode = (rawValue) => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };
  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== void 0) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }
  if (data && typeof data === "object") {
    const codeKey = findKey(data, "code");
    if (codeKey && data[codeKey] !== void 0) {
      return sanitizeErrorCode(data[codeKey]);
    }
    if (data["__type"] !== void 0) {
      return sanitizeErrorCode(data["__type"]);
    }
  }
};

// node_modules/@aws-sdk/client-cognito-identity/dist-es/protocols/Aws_json1_1.js
init_define_process();

// node_modules/@aws-sdk/client-cognito-identity/dist-es/models/CognitoIdentityServiceException.js
init_define_process();
var CognitoIdentityServiceException = class _CognitoIdentityServiceException extends ServiceException {
  constructor(options) {
    super(options);
    Object.setPrototypeOf(this, _CognitoIdentityServiceException.prototype);
  }
};

// node_modules/@aws-sdk/client-cognito-identity/dist-es/models/models_0.js
init_define_process();
var InternalErrorException = class _InternalErrorException extends CognitoIdentityServiceException {
  name = "InternalErrorException";
  $fault = "server";
  constructor(opts) {
    super(__spreadValues({
      name: "InternalErrorException",
      $fault: "server"
    }, opts));
    Object.setPrototypeOf(this, _InternalErrorException.prototype);
  }
};
var InvalidParameterException = class _InvalidParameterException extends CognitoIdentityServiceException {
  name = "InvalidParameterException";
  $fault = "client";
  constructor(opts) {
    super(__spreadValues({
      name: "InvalidParameterException",
      $fault: "client"
    }, opts));
    Object.setPrototypeOf(this, _InvalidParameterException.prototype);
  }
};
var LimitExceededException = class _LimitExceededException extends CognitoIdentityServiceException {
  name = "LimitExceededException";
  $fault = "client";
  constructor(opts) {
    super(__spreadValues({
      name: "LimitExceededException",
      $fault: "client"
    }, opts));
    Object.setPrototypeOf(this, _LimitExceededException.prototype);
  }
};
var NotAuthorizedException = class _NotAuthorizedException extends CognitoIdentityServiceException {
  name = "NotAuthorizedException";
  $fault = "client";
  constructor(opts) {
    super(__spreadValues({
      name: "NotAuthorizedException",
      $fault: "client"
    }, opts));
    Object.setPrototypeOf(this, _NotAuthorizedException.prototype);
  }
};
var ResourceConflictException = class _ResourceConflictException extends CognitoIdentityServiceException {
  name = "ResourceConflictException";
  $fault = "client";
  constructor(opts) {
    super(__spreadValues({
      name: "ResourceConflictException",
      $fault: "client"
    }, opts));
    Object.setPrototypeOf(this, _ResourceConflictException.prototype);
  }
};
var TooManyRequestsException = class _TooManyRequestsException extends CognitoIdentityServiceException {
  name = "TooManyRequestsException";
  $fault = "client";
  constructor(opts) {
    super(__spreadValues({
      name: "TooManyRequestsException",
      $fault: "client"
    }, opts));
    Object.setPrototypeOf(this, _TooManyRequestsException.prototype);
  }
};
var ResourceNotFoundException = class _ResourceNotFoundException extends CognitoIdentityServiceException {
  name = "ResourceNotFoundException";
  $fault = "client";
  constructor(opts) {
    super(__spreadValues({
      name: "ResourceNotFoundException",
      $fault: "client"
    }, opts));
    Object.setPrototypeOf(this, _ResourceNotFoundException.prototype);
  }
};
var ExternalServiceException = class _ExternalServiceException extends CognitoIdentityServiceException {
  name = "ExternalServiceException";
  $fault = "client";
  constructor(opts) {
    super(__spreadValues({
      name: "ExternalServiceException",
      $fault: "client"
    }, opts));
    Object.setPrototypeOf(this, _ExternalServiceException.prototype);
  }
};
var InvalidIdentityPoolConfigurationException = class _InvalidIdentityPoolConfigurationException extends CognitoIdentityServiceException {
  name = "InvalidIdentityPoolConfigurationException";
  $fault = "client";
  constructor(opts) {
    super(__spreadValues({
      name: "InvalidIdentityPoolConfigurationException",
      $fault: "client"
    }, opts));
    Object.setPrototypeOf(this, _InvalidIdentityPoolConfigurationException.prototype);
  }
};
var DeveloperUserAlreadyRegisteredException = class _DeveloperUserAlreadyRegisteredException extends CognitoIdentityServiceException {
  name = "DeveloperUserAlreadyRegisteredException";
  $fault = "client";
  constructor(opts) {
    super(__spreadValues({
      name: "DeveloperUserAlreadyRegisteredException",
      $fault: "client"
    }, opts));
    Object.setPrototypeOf(this, _DeveloperUserAlreadyRegisteredException.prototype);
  }
};
var ConcurrentModificationException = class _ConcurrentModificationException extends CognitoIdentityServiceException {
  name = "ConcurrentModificationException";
  $fault = "client";
  constructor(opts) {
    super(__spreadValues({
      name: "ConcurrentModificationException",
      $fault: "client"
    }, opts));
    Object.setPrototypeOf(this, _ConcurrentModificationException.prototype);
  }
};
var GetCredentialsForIdentityInputFilterSensitiveLog = (obj) => __spreadValues(__spreadValues({}, obj), obj.Logins && { Logins: SENSITIVE_STRING });
var CredentialsFilterSensitiveLog = (obj) => __spreadValues(__spreadValues({}, obj), obj.SecretKey && { SecretKey: SENSITIVE_STRING });
var GetCredentialsForIdentityResponseFilterSensitiveLog = (obj) => __spreadValues(__spreadValues({}, obj), obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) });
var GetIdInputFilterSensitiveLog = (obj) => __spreadValues(__spreadValues({}, obj), obj.Logins && { Logins: SENSITIVE_STRING });

// node_modules/@aws-sdk/client-cognito-identity/dist-es/protocols/Aws_json1_1.js
var se_GetCredentialsForIdentityCommand = (input, context) => __async(null, null, function* () {
  const headers = sharedHeaders("GetCredentialsForIdentity");
  let body;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
});
var se_GetIdCommand = (input, context) => __async(null, null, function* () {
  const headers = sharedHeaders("GetId");
  let body;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", void 0, body);
});
var de_GetCredentialsForIdentityCommand = (output, context) => __async(null, null, function* () {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = yield parseJsonBody(output.body, context);
  let contents = {};
  contents = de_GetCredentialsForIdentityResponse(data, context);
  const response = __spreadValues({
    $metadata: deserializeMetadata(output)
  }, contents);
  return response;
});
var de_GetIdCommand = (output, context) => __async(null, null, function* () {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data = yield parseJsonBody(output.body, context);
  let contents = {};
  contents = _json(data);
  const response = __spreadValues({
    $metadata: deserializeMetadata(output)
  }, contents);
  return response;
});
var de_CommandError = (output, context) => __async(null, null, function* () {
  const parsedOutput = __spreadProps(__spreadValues({}, output), {
    body: yield parseJsonErrorBody(output.body, context)
  });
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      throw yield de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      throw yield de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cognitoidentity#LimitExceededException":
      throw yield de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      throw yield de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.cognitoidentity#ResourceConflictException":
      throw yield de_ResourceConflictExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      throw yield de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      throw yield de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ExternalServiceException":
    case "com.amazonaws.cognitoidentity#ExternalServiceException":
      throw yield de_ExternalServiceExceptionRes(parsedOutput, context);
    case "InvalidIdentityPoolConfigurationException":
    case "com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":
      throw yield de_InvalidIdentityPoolConfigurationExceptionRes(parsedOutput, context);
    case "DeveloperUserAlreadyRegisteredException":
    case "com.amazonaws.cognitoidentity#DeveloperUserAlreadyRegisteredException":
      throw yield de_DeveloperUserAlreadyRegisteredExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.cognitoidentity#ConcurrentModificationException":
      throw yield de_ConcurrentModificationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode
      });
  }
});
var de_ConcurrentModificationExceptionRes = (parsedOutput, context) => __async(null, null, function* () {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ConcurrentModificationException(__spreadValues({
    $metadata: deserializeMetadata(parsedOutput)
  }, deserialized));
  return decorateServiceException(exception, body);
});
var de_DeveloperUserAlreadyRegisteredExceptionRes = (parsedOutput, context) => __async(null, null, function* () {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new DeveloperUserAlreadyRegisteredException(__spreadValues({
    $metadata: deserializeMetadata(parsedOutput)
  }, deserialized));
  return decorateServiceException(exception, body);
});
var de_ExternalServiceExceptionRes = (parsedOutput, context) => __async(null, null, function* () {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ExternalServiceException(__spreadValues({
    $metadata: deserializeMetadata(parsedOutput)
  }, deserialized));
  return decorateServiceException(exception, body);
});
var de_InternalErrorExceptionRes = (parsedOutput, context) => __async(null, null, function* () {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new InternalErrorException(__spreadValues({
    $metadata: deserializeMetadata(parsedOutput)
  }, deserialized));
  return decorateServiceException(exception, body);
});
var de_InvalidIdentityPoolConfigurationExceptionRes = (parsedOutput, context) => __async(null, null, function* () {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new InvalidIdentityPoolConfigurationException(__spreadValues({
    $metadata: deserializeMetadata(parsedOutput)
  }, deserialized));
  return decorateServiceException(exception, body);
});
var de_InvalidParameterExceptionRes = (parsedOutput, context) => __async(null, null, function* () {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new InvalidParameterException(__spreadValues({
    $metadata: deserializeMetadata(parsedOutput)
  }, deserialized));
  return decorateServiceException(exception, body);
});
var de_LimitExceededExceptionRes = (parsedOutput, context) => __async(null, null, function* () {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new LimitExceededException(__spreadValues({
    $metadata: deserializeMetadata(parsedOutput)
  }, deserialized));
  return decorateServiceException(exception, body);
});
var de_NotAuthorizedExceptionRes = (parsedOutput, context) => __async(null, null, function* () {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new NotAuthorizedException(__spreadValues({
    $metadata: deserializeMetadata(parsedOutput)
  }, deserialized));
  return decorateServiceException(exception, body);
});
var de_ResourceConflictExceptionRes = (parsedOutput, context) => __async(null, null, function* () {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ResourceConflictException(__spreadValues({
    $metadata: deserializeMetadata(parsedOutput)
  }, deserialized));
  return decorateServiceException(exception, body);
});
var de_ResourceNotFoundExceptionRes = (parsedOutput, context) => __async(null, null, function* () {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new ResourceNotFoundException(__spreadValues({
    $metadata: deserializeMetadata(parsedOutput)
  }, deserialized));
  return decorateServiceException(exception, body);
});
var de_TooManyRequestsExceptionRes = (parsedOutput, context) => __async(null, null, function* () {
  const body = parsedOutput.body;
  const deserialized = _json(body);
  const exception = new TooManyRequestsException(__spreadValues({
    $metadata: deserializeMetadata(parsedOutput)
  }, deserialized));
  return decorateServiceException(exception, body);
});
var de_Credentials = (output, context) => {
  return take(output, {
    AccessKeyId: expectString,
    Expiration: (_) => expectNonNull(parseEpochTimestamp(expectNumber(_))),
    SecretKey: expectString,
    SessionToken: expectString
  });
};
var de_GetCredentialsForIdentityResponse = (output, context) => {
  return take(output, {
    Credentials: (_) => de_Credentials(_, context),
    IdentityId: expectString
  });
};
var deserializeMetadata = (output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
});
var throwDefaultError = withBaseException(CognitoIdentityServiceException);
var buildHttpRpcRequest = (context, headers, path, resolvedHostname, body) => __async(null, null, function* () {
  const { hostname, protocol = "https", port, path: basePath } = yield context.endpoint();
  const contents = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers
  };
  if (resolvedHostname !== void 0) {
    contents.hostname = resolvedHostname;
  }
  if (body !== void 0) {
    contents.body = body;
  }
  return new HttpRequest(contents);
});
function sharedHeaders(operation) {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AWSCognitoIdentityService.${operation}`
  };
}

// node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetCredentialsForIdentityCommand.js
init_define_process();
var GetCredentialsForIdentityCommand = class extends Command.classBuilder().ep(commonParams).m(function(Command2, cs, config, o) {
  return [
    getSerdePlugin(config, this.serialize, this.deserialize),
    getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
  ];
}).s("AWSCognitoIdentityService", "GetCredentialsForIdentity", {}).n("CognitoIdentityClient", "GetCredentialsForIdentityCommand").f(GetCredentialsForIdentityInputFilterSensitiveLog, GetCredentialsForIdentityResponseFilterSensitiveLog).ser(se_GetCredentialsForIdentityCommand).de(de_GetCredentialsForIdentityCommand).build() {
};

// node_modules/@aws-sdk/client-cognito-identity/dist-es/commands/GetIdCommand.js
init_define_process();
var GetIdCommand = class extends Command.classBuilder().ep(commonParams).m(function(Command2, cs, config, o) {
  return [
    getSerdePlugin(config, this.serialize, this.deserialize),
    getEndpointPlugin(config, Command2.getEndpointParameterInstructions())
  ];
}).s("AWSCognitoIdentityService", "GetId", {}).n("CognitoIdentityClient", "GetIdCommand").f(GetIdInputFilterSensitiveLog, void 0).ser(se_GetIdCommand).de(de_GetIdCommand).build() {
};
export {
  CognitoIdentityClient,
  GetCredentialsForIdentityCommand,
  GetIdCommand
};
//# sourceMappingURL=chunk-T3DLFKXK.js.map
