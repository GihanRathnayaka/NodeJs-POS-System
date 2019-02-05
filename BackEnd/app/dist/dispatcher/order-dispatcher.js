"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var place_order_1 = require("../business/place-order");
var cors = require("cors");
var orderDispatcher = express.Router();
// orderDispatcher.use(mainDispatcher);
orderDispatcher.use(cors());
orderDispatcher.route("")
    .get(function (req, res) {
    console.log("AWA");
})
    .post(function (req, res) {
    console.log("AWA" + req.body);
    var promise = new place_order_1.PlaceOrderBO().saveOrder(req.body.order, req.body.OderDetails);
    promise.then(function (status) { return res.status(201).json(status); })
        .catch(function (err) { return res.status(500).send(err); });
});
orderDispatcher.route("/:id")
    .put(function (req, res) {
    console.log("wwwwww");
})
    .delete(function (req, res) {
    console.log("wwwwwwdsdsdsds");
});
exports.default = orderDispatcher;
