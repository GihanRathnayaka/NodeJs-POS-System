import express = require("express");
import {ItemBO} from "../business/item-bo";
import cors =require("cors");


// This will return a new instance of a router object that can be used to handle routing
const itemDispatcher = express.Router();

itemDispatcher.route("")
    .get((req, res) => {
        const promise = new ItemBO().findAllItems();
        promise.then(items=>{
            res.status(200).json(items);
        }).catch(error=>{
            res.status(500).send(error);
        });

    })
    .post((req, res) => {
        if (!("code" in req.body && "description" in req.body && "price" in req.body && "qty" in req.body)){
            res.status(400).send("Invalid Request Body");
            return;
        }

        const promise = new ItemBO().saveItems(req.body);
        promise.then(status => res.status(201).json(status))
            .catch(err=>res.status(500).send(err));
    })
    .head( cors({
        exposedHeaders:['X-count']
    }),(req, res) => {

        // res.append("X-count","501");
        // res.sendStatus(200);

        const promise = new ItemBO().countAll();
        promise.then(count => {

            console.log("dsdsdsds"+count);
            res.append("X-count", count + "");
            res.sendStatus(200);

        }).catch(err => {

            res.sendStatus(500);
        })
    });

itemDispatcher.route("/:id")
    .get((req, res) => {
        const promise = new ItemBO().findItems(req.params.id);
        promise.then(item=>{

            if (item.length > 0){
                res.status(200).send(item[0]);
            }else{
                res.sendStatus(404);
            }

        }).catch(error=>{
            res.status(500).send(error);
        });

    })
    .delete((req, res) => {
        const promise = new ItemBO().deleteItems(req.params.id);
        promise.then(status=>{

            if (status){
                res.status(200).send(true);
            }else{
                res.sendStatus(404);
            }

        }).catch(error=>{
            res.status(500).send(error);
        });

    })
    .put((req, res) => {
        if (!("code" in req.body && "description" in req.body && "price" in req.body && "qty" in req.body)){
            res.status(400).send("Invalid Request Body");
            return;
        }

        console.log(req.body.code+"    "+req.params.id)

        if (req.body.code !==req.params.id){
            res.status(400).send("Mismatched Item Code");
            return;
        }

        const promise = new ItemBO().updateItems(req.body);
        promise.then(status=>{

            if (status){
                res.status(200).send(true);
            }else{
                res.sendStatus(404);
            }

        }).catch(error=>{
            res.status(500).send(error);
        });
    });

export default itemDispatcher;
