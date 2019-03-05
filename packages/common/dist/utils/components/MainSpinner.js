"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
exports.Spinner = function () { return (React.createElement(StyledSpinner, { viewBox: "0 0 50 50" },
    React.createElement("div", null,
        React.createElement("circle", { className: "path", cx: "25", cy: "25", r: "20", fill: "none", strokeWidth: "4" })))); };
var StyledSpinner = styled_components_1.default.svg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tanimation: rotate 2s linear infinite;\n\tmargin: -25px 0 0 -25px;\n\twidth: 50px;\n\tleft: 50%;\n\tposition: absolute;\n\n\t& .path {\n\t\tstroke: #5652bf;\n\t\tstroke-linecap: round;\n\t\tanimation: dash 1.5s ease-in-out infinite;\n\t}\n\n\t@keyframes rotate {\n\t\t100% {\n\t\t\ttransform: rotate(360deg);\n\t\t}\n\t}\n\n\t@keyframes dash {\n\t\t0% {\n\t\t\tstroke-dasharray: 1, 150;\n\t\t\tstroke-dashoffset: 0;\n\t\t}\n\t\t50% {\n\t\t\tstroke-dasharray: 90, 150;\n\t\t\tstroke-dashoffset: 0;\n\t\t}\n\t\t100% {\n\t\t\tstroke-dasharray: 90, 150;\n\t\t\tstroke-dashoffset: -124;\n\t\t}\n\t}\n"], ["\n\tanimation: rotate 2s linear infinite;\n\tmargin: -25px 0 0 -25px;\n\twidth: 50px;\n\tleft: 50%;\n\tposition: absolute;\n\n\t& .path {\n\t\tstroke: #5652bf;\n\t\tstroke-linecap: round;\n\t\tanimation: dash 1.5s ease-in-out infinite;\n\t}\n\n\t@keyframes rotate {\n\t\t100% {\n\t\t\ttransform: rotate(360deg);\n\t\t}\n\t}\n\n\t@keyframes dash {\n\t\t0% {\n\t\t\tstroke-dasharray: 1, 150;\n\t\t\tstroke-dashoffset: 0;\n\t\t}\n\t\t50% {\n\t\t\tstroke-dasharray: 90, 150;\n\t\t\tstroke-dashoffset: 0;\n\t\t}\n\t\t100% {\n\t\t\tstroke-dasharray: 90, 150;\n\t\t\tstroke-dashoffset: -124;\n\t\t}\n\t}\n"])));
var templateObject_1;
