import express = require("express");
import {PlaceOrderBO} from "../business/place-order";
import cors =require("cors");

const orderDispatcher=express.Router();

// orderDispatcher.use(mainDispatcher);
orderDispatcher.use(cors());

orderDispatcher.route("")
    .get((req, res) => {

        console.log("AWA");

    })
    .post((req, res) => {


        console.log("AWA"+req.body);

        const promise =new PlaceOrderBO().saveOrder(req.body.order,req.body.OderDetails);
        promise.then(status => res.status(201).json(status))
            .catch(err=>res.status(500).send(err));

    });



orderDispatcher.route("/:id")
    .put((req, res) => {
        console.log("wwwwww")
    })
    .delete((req, res) => {
        console.log("wwwwwwdsdsdsds")
    });

export default orderDispatcher;
