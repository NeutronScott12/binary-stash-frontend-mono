"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var formik_1 = require("formik");
var React = __importStar(require("react"));
var semantic_ui_react_1 = require("semantic-ui-react");
exports.FormContainer = function (props) {
    return (React.createElement(formik_1.Form, null,
        props.formInputs.map(function (input, i) { return (React.createElement(formik_1.Field, { key: i, name: input.name, type: input.type, value: input.value, prefix: input.prefix, placeholder: input.placeholder, component: input.component })); }),
        props.submitButton !== undefined ? (props.submitButton === true ? (React.createElement(semantic_ui_react_1.Button, { style: { marginTop: '1rem' }, type: "submit" }, "Submit")) : null) : (React.createElement(semantic_ui_react_1.Button, { style: { marginTop: '1rem' }, type: "submit" }, "Submit"))));
};
//# sourceMappingURL=FormContainer.js.map