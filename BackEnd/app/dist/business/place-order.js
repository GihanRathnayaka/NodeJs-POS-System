"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_pool_1 = require("../db/db-pool");
var dao_factory_1 = require("../dao/dao-factory");
var promise = require("promise");
var promise2 = require("promise");
var PlaceOrderBO = /** @class */ (function () {
    function PlaceOrderBO() {
    }
    PlaceOrderBO.prototype.saveOrder = function (order, od) {
        return new promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                connection.beginTransaction(function (err) {
                    if (err) {
                        connection.rollback();
                        connection.release();
                        reject(err);
                    }
                    else {
                        var orderDao = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDER, connection);
                        var promise_1 = orderDao.save(order);
                        promise_1.then(function (order) {
                            console.log("Awa------1");
                            return new promise2(function (resolve, reject) {
                                var OrderDetailsDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ORDERDETAILS, connection);
                                var index = 0;
                                od.forEach(function (odx) {
                                    var pro = OrderDetailsDAO.save(odx);
                                    index++;
                                    pro.then(function (odxx) {
                                        if (od.length == index) {
                                            connection.commit();
                                            connection.release();
                                            resolve(odxx);
                                        }
                                    }).catch(function (err) {
                                        connection.rollback();
                                        connection.release();
                                        db_pool_1.pool.releaseConnection(connection);
                                    });
                                });
                            });
                            // pool.releaseConnection(connection);
                        }).catch(function (error) {
                            reject(error);
                            db_pool_1.pool.releaseConnection(connection);
                        });
                    }
                });
            });
        });
    };
    return PlaceOrderBO;
}());
exports.PlaceOrderBO = PlaceOrderBO;
