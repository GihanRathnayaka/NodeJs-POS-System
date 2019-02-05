"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Order = /** @class */ (function () {
    function Order(oId, oDate, cusId, total, description) {
        this.oId = oId;
        this.oDate = oDate;
        this.cusId = cusId;
        this.total = total;
        this.description = description;
    }
    return Order;
}());
exports.Order = Order;
