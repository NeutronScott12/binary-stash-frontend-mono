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
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_boost_1 = require("apollo-boost");
var React = __importStar(require("react"));
var react_apollo_1 = require("react-apollo");
var MainSpinner_1 = require("./MainSpinner");
exports.CURRENT_USER_QUERY = apollo_boost_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tquery CurrentUserQuery {\n\t\tcurrentUser {\n\t\t\temail\n\t\t\tid\n\t\t\tusername\n\t\t}\n\t}\n"], ["\n\tquery CurrentUserQuery {\n\t\tcurrentUser {\n\t\t\temail\n\t\t\tid\n\t\t\tusername\n\t\t}\n\t}\n"])));
exports.AuthRoute = function () {
    return (React.createElement(react_apollo_1.Query, { query: exports.CURRENT_USER_QUERY }, function (_a) {
        var data = _a.data, loading = _a.loading;
        if (loading) {
            return React.createElement(MainSpinner_1.Spinner, null);
        }
        if (!loading && !data) {
            return 'Something went wrong';
        }
        return 'Successful';
    }));
};
var templateObject_1;
