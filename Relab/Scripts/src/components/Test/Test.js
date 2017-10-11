"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Hello_1 = require("../Hello");
var Test = (function (_super) {
    __extends(Test, _super);
    function Test() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Test.prototype.onShowItems = function () {
        console.log('Test');
    };
    Test.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("button", { onClick: this.onShowItems }, this.props.title),
            React.createElement(Hello_1.Hello, { compiler: "a", framework: "b" }),
            React.createElement("ul", null,
                React.createElement("li", null, "AA"),
                React.createElement("li", null, "BB"))));
    };
    return Test;
}(React.Component));
exports.Test = Test;
;
//# sourceMappingURL=Test.js.map