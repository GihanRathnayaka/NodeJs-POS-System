"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderDTO = /** @class */ (function () {
    function OrderDTO(oId, oDate, cusId, total, description) {
        this.oId = oId;
        this.oDate = oDate;
        this.cusId = cusId;
        this.total = total;
        this.description = description;
    }
    return OrderDTO;
}());
exports.OrderDTO = OrderDTO;
