"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var semantic_ui_react_1 = require("semantic-ui-react");
exports.InputField = function (_a) {
    var field = _a.field, _b = _a.form, touched = _b.touched, errors = _b.errors, dirty = _b.dirty, props = __rest(_a, ["field", "form"]);
    var errorMessage = touched[field.name] && errors[field.name] ? true : false;
    return (React.createElement(React.Fragment, null,
        React.createElement(semantic_ui_react_1.Form.Field, null,
            React.createElement(semantic_ui_react_1.Form.Input, __assign({ style: { marginTop: '1rem' }, fluid: true }, props, field)),
            errorMessage && dirty === true ? (React.createElement(semantic_ui_react_1.Message, { error: errorMessage, header: "Action Forbidden", content: errors[field.name] })) : null)));
};
//# sourceMappingURL=InputField.js.map