"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NegociacionesView = void 0;
var view_js_1 = require("./view.js");
var NegociacionesView = (function (_super) {
    __extends(NegociacionesView, _super);
    function NegociacionesView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NegociacionesView.prototype.template = function (model) {
        var _this = this;
        return "\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>Fecha</th>\n                    <th>Cantidad</th>\n                    <th>Valor</th>\n                </tr>\n            </thead>\n            <tbody>\n            " + model.lista().map(function (e) {
            return "\n                <tr>\n                    <td>" + _this.formatearFecha(e.fecha) + "</td>\n                    <td>" + e.cantidad + "</td>\n                    <td>" + e.valor + "</td>\n                </tr>\n                ";
        }).join('') + "\n            </tbody>\n        </table>\n        ";
    };
    NegociacionesView.prototype.formatearFecha = function (fecha) {
        return new Intl.DateTimeFormat().format(fecha);
    };
    return NegociacionesView;
}(view_js_1.View));
exports.NegociacionesView = NegociacionesView;
