"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promise = require("promise");
var db_pool_1 = require("../db/db-pool");
var dao_factory_1 = require("../dao/dao-factory");
var ItemBO = /** @class */ (function () {
    function ItemBO() {
    }
    ItemBO.prototype.findAllItems = function () {
        return new promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var itemDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ITEM, connection);
                    var promise_1 = itemDAO.findAll();
                    promise_1.then(function (items) {
                        resolve(items);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    ItemBO.prototype.findItems = function (id) {
        return new promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var ItemDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ITEM, connection);
                    var promise_2 = ItemDAO.find(id);
                    promise_2.then(function (item) {
                        resolve(item);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    ItemBO.prototype.saveItems = function (item) {
        return new promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var itemDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ITEM, connection);
                    var promise_3 = itemDAO.save(item);
                    promise_3.then(function (result) {
                        resolve(result);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    ItemBO.prototype.updateItems = function (item) {
        return new promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var itemDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ITEM, connection);
                    var promise_4 = itemDAO.update(item);
                    promise_4.then(function (result) {
                        resolve(result);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    ItemBO.prototype.deleteItems = function (id) {
        return new promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var itemDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ITEM, connection);
                    var promise_5 = itemDAO.delete(id);
                    promise_5.then(function (result) {
                        resolve(result);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    ItemBO.prototype.countAll = function () {
        return new promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var ItemDAO = dao_factory_1.getDAO(dao_factory_1.DAOTypes.ITEM, connection);
                    var promise_6 = ItemDAO.count();
                    promise_6.then(function (result) {
                        // console.log("dfdfdfd"+result)
                        resolve(result);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    return ItemBO;
}());
exports.ItemBO = ItemBO;
