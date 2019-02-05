"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promise = require("promise");
var OrderDaoImpl = /** @class */ (function () {
    function OrderDaoImpl(connection) {
        this.connection = connection;
    }
    OrderDaoImpl.prototype.delete = function (id) {
        var _this = this;
        return new promise(function (resolve, reject) {
            _this.connection.query("DELETE FROM orders WHERE oId='" + id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    OrderDaoImpl.prototype.find = function (id) {
        var _this = this;
        return new promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM orders WHERE oId='" + id + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    OrderDaoImpl.prototype.findAll = function () {
        var _this = this;
        return new promise(function (resolve, reject) {
            _this.connection.query("SELECT * FROM orders", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    };
    OrderDaoImpl.prototype.save = function (entity) {
        var _this = this;
        return new promise(function (resolve, reject) {
            _this.connection.query("INSERT INTO orders VALUES ('" + entity.oId + "','" + entity.oDate + "','" + entity.cusId + "','" + entity.total + "','" + entity.description + "')", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    OrderDaoImpl.prototype.update = function (entity) {
        var _this = this;
        return new promise(function (resolve, reject) {
            console.log("UPDATE orders SET  oDate= '" + entity.oDate + "', cusId ='" + entity.cusId + "', total ='" + entity.total + "', description ='" + entity.total + "' WHERE oId='" + entity.oId + "'");
            _this.connection.query("UPDATE orders SET  oDate= '" + entity.oDate + "', cusId ='" + entity.cusId + "', total ='" + entity.total + "', description ='" + entity.total + "' WHERE oId='" + entity.oId + "'", function (err, results) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results.affectedRows > 0);
                }
            });
        });
    };
    return OrderDaoImpl;
}());
exports.OrderDaoImpl = OrderDaoImpl;
