"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promise = require("promise");
var OrderDetailsDAOImpl = /** @class */ (function () {
    function OrderDetailsDAOImpl(connection) {
        this.connection = connection;
    }
    OrderDetailsDAOImpl.prototype.delete = function (id) {
        var _this = this;
        return new promise(function (resolve, reject) {
            _this.connection.query("DELETE FROM ordersdetails WHERE oId='" + id + "' and id='" + id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    OrderDetailsDAOImpl.prototype.find = function (id) {
        var _this = this;
        return new promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM ordersdetails WHERE code='" + id + "' AND oId='" + id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    OrderDetailsDAOImpl.prototype.findAll = function () {
        var _this = this;
        return new promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM ordersdetails", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    OrderDetailsDAOImpl.prototype.save = function (entity) {
        var _this = this;
        return new promise(function (resolve, reject) {
            _this.connection.query("INSERT INTO ordersdetails(oId, code, description, price, qty) VALUES ('" + entity.oId + "','" + entity.code + "','" + entity.description + "','" + entity.price + "','" + entity.qty + "')", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    OrderDetailsDAOImpl.prototype.update = function (entity) {
        var _this = this;
        return new promise(function (resolve, reject) {
            console.log("UPDATE items SET description = '" + entity.description + "', price ='" + entity.price + "', qty ='" + entity.qty + "' WHERE id='" + entity.code + "'");
            _this.connection.query("UPDATE items SET description = '" + entity.description + "', price ='" + entity.price + "', qty ='" + entity.qty + "' WHERE code='" + entity.code + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    return OrderDetailsDAOImpl;
}());
exports.OrderDetailsDAOImpl = OrderDetailsDAOImpl;
