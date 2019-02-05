"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var item_bo_1 = require("../business/item-bo");
var cors = require("cors");
// This will return a new instance of a router object that can be used to handle routing
var itemDispatcher = express.Router();
itemDispatcher.route("")
    .get(function (req, res) {
    var promise = new item_bo_1.ItemBO().findAllItems();
    promise.then(function (items) {
        res.status(200).json(items);
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .post(function (req, res) {
    if (!("code" in req.body && "description" in req.body && "price" in req.body && "qty" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    var promise = new item_bo_1.ItemBO().saveItems(req.body);
    promise.then(function (status) { return res.status(201).json(status); })
        .catch(function (err) { return res.status(500).send(err); });
})
    .head(cors({
    exposedHeaders: ['X-count']
}), function (req, res) {
    // res.append("X-count","501");
    // res.sendStatus(200);
    var promise = new item_bo_1.ItemBO().countAll();
    promise.then(function (count) {
        console.log("dsdsdsds" + count);
        res.append("X-count", count + "");
        res.sendStatus(200);
    }).catch(function (err) {
        res.sendStatus(500);
    });
});
itemDispatcher.route("/:id")
    .get(function (req, res) {
    var promise = new item_bo_1.ItemBO().findItems(req.params.id);
    promise.then(function (item) {
        if (item.length > 0) {
            res.status(200).send(item[0]);
        }
        else {
            res.sendStatus(404);
        }
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .delete(function (req, res) {
    var promise = new item_bo_1.ItemBO().deleteItems(req.params.id);
    promise.then(function (status) {
        if (status) {
            res.status(200).send(true);
        }
        else {
            res.sendStatus(404);
        }
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .put(function (req, res) {
    if (!("code" in req.body && "description" in req.body && "price" in req.body && "qty" in req.body)) {
        res.status(400).send("Invalid Request Body");
        return;
    }
    console.log(req.body.code + "    " + req.params.id);
    if (req.body.code !== req.params.id) {
        res.status(400).send("Mismatched Item Code");
        return;
    }
    var promise = new item_bo_1.ItemBO().updateItems(req.body);
    promise.then(function (status) {
        if (status) {
            res.status(200).send(true);
        }
        else {
            res.sendStatus(404);
        }
    }).catch(function (error) {
        res.status(500).send(error);
    });
});
exports.default = itemDispatcher;
